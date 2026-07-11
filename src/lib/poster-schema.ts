import { heroFrameStyleOptions, sectionTitleStyleOptions, styleOptions } from "@/lib/sample-poster";
import {
  HeroFrameStyle,
  Industry,
  PosterDocument,
  PosterImage,
  PosterItem,
  PosterStep,
  PosterStyle,
  SectionTitleStyle,
  ThemeColors,
} from "@/lib/poster-types";

const industryOptions: Industry[] = [
  "mechanical",
  "automation",
  "construction",
  "electrical",
  "electronics",
  "hvac",
  "it",
  "chemistry",
  "other",
];

type ValidationResult =
  | {
      ok: true;
      value: PosterDocument;
    }
  | {
      ok: false;
      error: string;
    };

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function readString(value: unknown, path: string) {
  if (!isString(value) || value.trim().length === 0) {
    throw new Error(`${path} must be a non-empty string.`);
  }

  return value;
}

function readOptionalString(value: unknown, path: string) {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  if (!isString(value)) {
    throw new Error(`${path} must be a string.`);
  }

  return value;
}

function readStringArray(value: unknown, path: string) {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`${path} must be a non-empty array of strings.`);
  }

  return value.map((item, index) => readString(item, `${path}[${index}]`));
}

function readEnum<T extends string>(value: unknown, options: readonly T[], path: string) {
  if (!isString(value) || !options.includes(value as T)) {
    throw new Error(`${path} must be one of: ${options.join(", ")}.`);
  }

  return value as T;
}

function readOptionalEnum<T extends string>(value: unknown, options: readonly T[], path: string) {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  return readEnum(value, options, path);
}

function readImage(value: unknown, path: string): PosterImage | undefined {
  if (value === undefined || value === null) {
    return undefined;
  }

  if (!isObject(value)) {
    throw new Error(`${path} must be an object.`);
  }

  return {
    url: readOptionalString(value.url, `${path}.url`),
    alt: readOptionalString(value.alt, `${path}.alt`),
  };
}

function readTheme(value: unknown, path: string): Partial<ThemeColors> | undefined {
  if (value === undefined || value === null) {
    return undefined;
  }

  if (!isObject(value)) {
    throw new Error(`${path} must be an object.`);
  }

  const theme: Partial<ThemeColors> = {};
  const fields: Array<keyof ThemeColors> = ["primary", "secondary", "accent", "surface", "text"];

  for (const field of fields) {
    const fieldValue = value[field];
    if (fieldValue !== undefined) {
      theme[field] = readString(fieldValue, `${path}.${field}`);
    }
  }

  return theme;
}

function readPosterItem(value: unknown, path: string): PosterItem {
  if (!isObject(value)) {
    throw new Error(`${path} must be an object.`);
  }

  const item: PosterItem = {};

  if (value.title !== undefined) {
    item.title = readString(value.title, `${path}.title`);
  }

  if (value.description !== undefined) {
    item.description = readString(value.description, `${path}.description`);
  }

  if (value.bullets !== undefined) {
    item.bullets = readStringArray(value.bullets, `${path}.bullets`);
  }

  if (value.image !== undefined) {
    item.image = readImage(value.image, `${path}.image`);
  }

  if (!item.title && !item.description && !item.bullets?.length && !item.image) {
    throw new Error(`${path} must contain at least one field.`);
  }

  return item;
}

function readPosterStep(value: unknown, path: string): PosterStep {
  if (!isObject(value)) {
    throw new Error(`${path} must be an object.`);
  }

  return {
    title: readString(value.title, `${path}.title`),
    description: readOptionalString(value.description, `${path}.description`),
    color: readOptionalString(value.color, `${path}.color`),
    image: readImage(value.image, `${path}.image`),
  };
}

function readPosterDocument(value: unknown): PosterDocument {
  if (!isObject(value)) {
    throw new Error("Payload must be a JSON object.");
  }

  if (!isObject(value.brand)) {
    throw new Error("brand must be an object.");
  }

  if (!isObject(value.hero)) {
    throw new Error("hero must be an object.");
  }

  if (!isObject(value.companySection)) {
    throw new Error("companySection must be an object.");
  }

  if (!isObject(value.jobSection)) {
    throw new Error("jobSection must be an object.");
  }

  if (!isObject(value.environmentSection)) {
    throw new Error("environmentSection must be an object.");
  }

  if (!isObject(value.growthSection)) {
    throw new Error("growthSection must be an object.");
  }

  if (!isObject(value.majorSection)) {
    throw new Error("majorSection must be an object.");
  }

  return {
    industry: readEnum(value.industry, industryOptions, "industry"),
    style: readEnum(value.style, styleOptions, "style"),
    sectionTitleStyle: readOptionalEnum(
      value.sectionTitleStyle,
      sectionTitleStyleOptions,
      "sectionTitleStyle",
    ) as SectionTitleStyle | undefined,
    heroFrameStyle: readOptionalEnum(
      value.heroFrameStyle,
      heroFrameStyleOptions,
      "heroFrameStyle",
    ) as HeroFrameStyle | undefined,
    theme: readTheme(value.theme, "theme"),
    brand: {
      logoImage: readImage(value.brand.logoImage, "brand.logoImage"),
      companyName: readString(value.brand.companyName, "brand.companyName"),
      campaign: readString(value.brand.campaign, "brand.campaign"),
      role: readString(value.brand.role, "brand.role"),
      tagline: readString(value.brand.tagline, "brand.tagline"),
    },
    hero: {
      badge: readOptionalString(value.hero.badge, "hero.badge"),
      headline: readString(value.hero.headline, "hero.headline"),
      subheadline: readOptionalString(value.hero.subheadline, "hero.subheadline"),
    },
    companySection: {
      title: readString(value.companySection.title, "companySection.title"),
      intro: readString(value.companySection.intro, "companySection.intro"),
      bullets: readStringArray(value.companySection.bullets, "companySection.bullets"),
    },
    jobSection: {
      title: readString(value.jobSection.title, "jobSection.title"),
      intro: readOptionalString(value.jobSection.intro, "jobSection.intro"),
      bullets: readStringArray(value.jobSection.bullets, "jobSection.bullets"),
    },
    environmentSection: {
      title: readString(value.environmentSection.title, "environmentSection.title"),
      cards: Array.isArray(value.environmentSection.cards)
        ? value.environmentSection.cards.map((item, index) =>
            readPosterItem(item, `environmentSection.cards[${index}]`),
          )
        : (() => {
            throw new Error("environmentSection.cards must be an array.");
          })(),
    },
    growthSection: {
      title: readString(value.growthSection.title, "growthSection.title"),
      steps: Array.isArray(value.growthSection.steps)
        ? value.growthSection.steps.map((item, index) =>
            readPosterStep(item, `growthSection.steps[${index}]`),
          )
        : (() => {
            throw new Error("growthSection.steps must be an array.");
          })(),
      traits:
        value.growthSection.traits === undefined
          ? undefined
          : Array.isArray(value.growthSection.traits)
            ? value.growthSection.traits.map((item, index) =>
                readPosterItem(item, `growthSection.traits[${index}]`),
              )
            : (() => {
                throw new Error("growthSection.traits must be an array.");
              })(),
    },
    majorSection: {
      title: readString(value.majorSection.title, "majorSection.title"),
      majors: readStringArray(value.majorSection.majors, "majorSection.majors"),
      notes:
        value.majorSection.notes === undefined
          ? undefined
          : readStringArray(value.majorSection.notes, "majorSection.notes"),
    },
  };
}

export function validatePosterDocument(value: unknown): ValidationResult {
  try {
    return {
      ok: true,
      value: readPosterDocument(value),
    };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Invalid poster payload.",
    };
  }
}

export function parsePosterDocument(value: unknown) {
  const result = validatePosterDocument(value);

  if (!result.ok) {
    throw new Error(result.error);
  }

  return result.value;
}

export function encodePosterPayload(poster: PosterDocument) {
  return Buffer.from(JSON.stringify(poster), "utf8").toString("base64url");
}

export function decodePosterPayload(encoded: string) {
  try {
    const normalized = encoded.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
    const json = atob(padded);
    return parsePosterDocument(JSON.parse(json));
  } catch {
    throw new Error("Khong doc duoc du lieu poster tu URL.");
  }
}
