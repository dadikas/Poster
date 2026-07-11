import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

const imageRoot = path.join(process.cwd(), "image");

function getContentType(fileName: string) {
  const extension = path.extname(fileName).toLowerCase();

  if (extension === ".png") {
    return "image/png";
  }

  if (extension === ".jpg" || extension === ".jpeg") {
    return "image/jpeg";
  }

  if (extension === ".webp") {
    return "image/webp";
  }

  return "application/octet-stream";
}

export async function GET(
  _request: NextRequest,
  context: RouteContext<"/api/poster-assets/[file]">,
) {
  const { file } = await context.params;
  const safeFile = path.basename(file);
  const filePath = path.join(imageRoot, safeFile);

  try {
    const buffer = await readFile(filePath);

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": getContentType(safeFile),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Image not found.",
      },
      { status: 404 },
    );
  }
}
