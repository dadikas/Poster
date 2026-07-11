import { NextRequest, NextResponse } from "next/server";
import { renderPosterImage } from "@/lib/poster-image";
import { applyPosterAssetDefaults } from "@/lib/poster-assets";
import { encodePosterPayload, validatePosterDocument } from "@/lib/poster-schema";

type WebhookEnvelope = {
  poster?: unknown;
  source?: string;
  requestId?: string;
};

export const runtime = "nodejs";

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function GET(request: NextRequest) {
  const webhookUrl = new URL("/api/webhooks/poster", request.nextUrl.origin).toString();

  return NextResponse.json({
    ok: true,
    message: "Poster webhook is ready.",
    webhookUrl,
    expects: {
      method: "POST",
      contentType: "application/json",
      payload: "Either a PosterDocument object or { poster, source?, requestId? }",
      defaultResponse: "image/png",
      optionalJsonResponse: "Add ?response=json to get studioUrl and normalized poster JSON",
    },
  });
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Request body must be valid JSON.",
      },
      { status: 400 },
    );
  }

  const envelope = isObject(body) ? (body as WebhookEnvelope) : undefined;
  const payload = envelope?.poster ?? body;
  const validation = validatePosterDocument(payload);
  const responseMode = request.nextUrl.searchParams.get("response");

  if (!validation.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: validation.error,
      },
      { status: 400 },
    );
  }

  const poster = applyPosterAssetDefaults(validation.value, request.nextUrl.origin);
  const encodedPoster = encodePosterPayload(poster);
  const studioUrl = new URL(`/?data=${encodedPoster}`, request.nextUrl.origin).toString();

  if (responseMode === "json") {
    return NextResponse.json({
      ok: true,
      message: "Poster payload accepted.",
      requestId: envelope?.requestId ?? null,
      source: envelope?.source ?? null,
      studioUrl,
      poster,
    });
  }

  return renderPosterImage(poster);
}
