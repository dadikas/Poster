export type Industry =
  | "mechanical"
  | "automation"
  | "construction"
  | "electrical"
  | "electronics"
  | "hvac"
  | "it"
  | "chemistry"
  | "other";

export type PosterStyle = "bold" | "clean" | "split";
export type SectionTitleStyle = "ribbon" | "capsule" | "plate";
export type HeroFrameStyle =
  | "automation-grid"
  | "construction-slab"
  | "electrical-spark"
  | "electronics-circuit"
  | "hvac-breeze"
  | "it-matrix"
  | "chemistry-molecule"
  | "other-wave";

export type PreviewMode = "full" | "mobile-slide" | "mobile-4up";
export type TextValue = string;

export type PosterImage = {
  url?: string;
  alt?: string;
};

export type PosterItem = {
  title?: TextValue;
  description?: TextValue;
  bullets?: TextValue[];
  image?: PosterImage;
};

export type PosterStep = {
  title: TextValue;
  description?: TextValue;
  color?: string;
  image?: PosterImage;
};

export type ThemeColors = {
  primary: string;
  secondary: string;
  accent: string;
  surface: string;
  text: string;
};

export type PosterDocument = {
  industry: Industry;
  style: PosterStyle;
  sectionTitleStyle?: SectionTitleStyle;
  heroFrameStyle?: HeroFrameStyle;
  theme?: Partial<ThemeColors>;
  brand: {
    logoImage?: PosterImage;
    companyName: string;
    campaign: TextValue;
    role: TextValue;
    tagline: TextValue;
  };
  hero: {
    badge?: TextValue;
    headline: TextValue;
    subheadline?: TextValue;
  };
  companySection: {
    title: TextValue;
    intro: TextValue;
    bullets: TextValue[];
  };
  jobSection: {
    title: TextValue;
    intro?: TextValue;
    bullets: TextValue[];
  };
  environmentSection: {
    title: TextValue;
    cards: PosterItem[];
  };
  growthSection: {
    title: TextValue;
    steps: PosterStep[];
    traits?: PosterItem[];
  };
  majorSection: {
    title: TextValue;
    majors: TextValue[];
    notes?: TextValue[];
  };
};
