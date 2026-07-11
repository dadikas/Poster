import { samplePoster } from "@/lib/sample-poster";
import { parsePosterDocument } from "@/lib/poster-schema";
import { PosterDocument } from "@/lib/poster-types";

const draftKey = "createposter:draft";

export function loadStoredPoster() {
  if (typeof window === "undefined") {
    return samplePoster;
  }

  const raw = window.localStorage.getItem(draftKey);

  if (!raw) {
    return samplePoster;
  }

  try {
    return parsePosterDocument(JSON.parse(raw));
  } catch {
    return samplePoster;
  }
}

export function saveStoredPoster(poster: PosterDocument) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(draftKey, JSON.stringify(poster));
}
