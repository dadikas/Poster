import { PosterDocument, PosterImage, PosterItem, PosterStep } from "@/lib/poster-types";

function toAbsoluteUrl(url: string, origin?: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  if (!origin && url.startsWith("/") && basePath && !url.startsWith(`${basePath}/`)) {
    return `${basePath}${url}`;
  }

  if (!origin || !url.startsWith("/")) {
    return url;
  }

  return new URL(url, origin).toString();
}

function normalizeImage(image: PosterImage | undefined, origin?: string) {
  const imageUrl = image?.url?.trim();

  if (!imageUrl) {
    return image;
  }

  return {
    ...image,
    url: toAbsoluteUrl(imageUrl, origin),
  };
}

function normalizeItems(items: PosterItem[], origin?: string) {
  return items.map((item) => ({
    ...item,
    image: normalizeImage(item.image, origin),
  }));
}

function normalizeSteps(steps: PosterStep[], origin?: string) {
  return steps.map((step) => ({
    ...step,
    image: normalizeImage(step.image, origin),
  }));
}

export function applyPosterAssetDefaults(poster: PosterDocument, origin?: string): PosterDocument {
  return {
    ...poster,
    brand: {
      ...poster.brand,
      logoImage: normalizeImage(poster.brand.logoImage, origin),
    },
    environmentSection: {
      ...poster.environmentSection,
      cards: normalizeItems(poster.environmentSection.cards, origin),
    },
    growthSection: {
      ...poster.growthSection,
      steps: normalizeSteps(poster.growthSection.steps, origin),
      traits: poster.growthSection.traits
        ? normalizeItems(poster.growthSection.traits, origin)
        : undefined,
    },
  };
}
