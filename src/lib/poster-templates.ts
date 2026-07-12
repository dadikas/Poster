import { HeroFrameStyle, PosterStyle, SectionTitleStyle } from "@/lib/poster-types";

export type PosterTemplate = {
  id: string;
  name: string;
  summary: string;
  style: PosterStyle;
  sectionTitleStyle: SectionTitleStyle;
  heroFrameStyle: HeroFrameStyle;
  accent: string;
  surface: string;
};

export const posterTemplates: PosterTemplate[] = [
  {
    id: "bold-impact",
    name: "Bold Impact",
    summary: "Tieu de lon, khoi mau manh, hop voi poster tuyen dung can nhin thay ngay.",
    style: "bold",
    sectionTitleStyle: "ribbon",
    heroFrameStyle: "electrical-spark",
    accent: "#f97316",
    surface: "#fff7ed",
  },
  {
    id: "clean-board",
    name: "Clean Board",
    summary: "Sach, thoang, de thay du lieu nhieu dong ma van ro rang.",
    style: "clean",
    sectionTitleStyle: "capsule",
    heroFrameStyle: "it-matrix",
    accent: "#2563eb",
    surface: "#eff6ff",
  },
  {
    id: "split-focus",
    name: "Split Focus",
    summary: "Cat bo cuc thanh hai mien ro hon, giu dinh huong de sau nay chen image vao.",
    style: "split",
    sectionTitleStyle: "plate",
    heroFrameStyle: "construction-slab",
    accent: "#0f766e",
    surface: "#ecfeff",
  },
  {
    id: "image-showcase",
    name: "Image Showcase",
    summary: "Uu tien card va step co anh, hop poster muon chen anh minh hoa trong noi dung.",
    style: "clean",
    sectionTitleStyle: "capsule",
    heroFrameStyle: "electronics-circuit",
    accent: "#0f766e",
    surface: "#f0fdfa",
  },
];

export const defaultPosterTemplate = posterTemplates[0];

export function findPosterTemplate(templateId?: string | null) {
  return posterTemplates.find((template) => template.id === templateId) ?? defaultPosterTemplate;
}
