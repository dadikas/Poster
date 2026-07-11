import {
  HeroFrameStyle,
  Industry,
  PosterDocument,
  PosterStyle,
  SectionTitleStyle,
  ThemeColors,
} from "@/lib/poster-types";

export const industryThemes: Record<Industry, ThemeColors> = {
  mechanical: {
    primary: "#c62828",
    secondary: "#450a0a",
    accent: "#ef5350",
    surface: "#fef2f2",
    text: "#4c0519",
  },
  automation: {
    primary: "#0f766e",
    secondary: "#134e4a",
    accent: "#14b8a6",
    surface: "#ecfeff",
    text: "#0f172a",
  },
  construction: {
    primary: "#6b7280",
    secondary: "#374151",
    accent: "#9ca3af",
    surface: "#f5f5f5",
    text: "#111827",
  },
  electrical: {
    primary: "#f97316",
    secondary: "#9a3412",
    accent: "#fb923c",
    surface: "#fff7ed",
    text: "#1f2937",
  },
  electronics: {
    primary: "#1d4ed8",
    secondary: "#0f172a",
    accent: "#60a5fa",
    surface: "#eff6ff",
    text: "#0f172a",
  },
  hvac: {
    primary: "#38bdf8",
    secondary: "#075985",
    accent: "#7dd3fc",
    surface: "#f0f9ff",
    text: "#082f49",
  },
  it: {
    primary: "#16a34a",
    secondary: "#052e16",
    accent: "#4ade80",
    surface: "#f0fdf4",
    text: "#14532d",
  },
  chemistry: {
    primary: "#9333ea",
    secondary: "#3b0764",
    accent: "#c084fc",
    surface: "#faf5ff",
    text: "#4c1d95",
  },
  other: {
    primary: "#db2777",
    secondary: "#500724",
    accent: "#f472b6",
    surface: "#fdf2f8",
    text: "#831843",
  },
};

export const styleOptions: PosterStyle[] = ["bold", "clean", "split"];
export const sectionTitleStyleOptions: SectionTitleStyle[] = [
  "ribbon",
  "capsule",
  "plate",
];
export const heroFrameStyleOptions: HeroFrameStyle[] = [
  "automation-grid",
  "construction-slab",
  "electrical-spark",
  "electronics-circuit",
  "hvac-breeze",
  "it-matrix",
  "chemistry-molecule",
  "other-wave",
];

export const industryHeroFrames: Record<Industry, HeroFrameStyle> = {
  mechanical: "construction-slab",
  automation: "automation-grid",
  construction: "construction-slab",
  electrical: "electrical-spark",
  electronics: "electronics-circuit",
  hvac: "hvac-breeze",
  it: "it-matrix",
  chemistry: "chemistry-molecule",
  other: "other-wave",
};

export const samplePoster: PosterDocument = {
  industry: "electrical",
  style: "bold",
  sectionTitleStyle: "ribbon",
  heroFrameStyle: "electrical-spark",
  brand: {
    logoImage: {
      url: "/poster-assets/esutech-logo.jpg",
      alt: "ESUTECH logo",
    },
    companyName: "OKADEN",
    campaign: "Tuyen dung ky su thi cong dien",
    role: "Lam viec tai Nhat Ban trong moi truong ky thuat chuyen nghiep",
    tagline: "Thu nhap on dinh, dao tao bai ban, lo trinh phat trien ro rang",
  },
  hero: {
    badge: "オカデン",
    headline: "Gia nhap doi ngu thi cong dien cong nghiep tai Nhat Ban",
    subheadline: "Co hoi danh cho ung vien muon hoc nghe, nang tay nghe va on dinh lau dai",
  },
  companySection: {
    title: "01. Gioi thieu cong ty",
    intro: "OKADEN la don vi chuyen ve thi cong, lap dat va bao tri he thong dien cho nha may, cong trinh va day chuyen san xuat tai Nhat Ban.",
    bullets: [
      "Moi truong lam viec chuyen nghiep, quy trinh ro rang",
      "Co nguoi huong dan trong giai doan dau nhap viec",
      "Cham chu an toan lao dong va ky nang thuc te tai hien truong",
    ],
  },
  jobSection: {
    title: "Noi dung cong viec",
    intro: "Cong viec phu hop voi ung vien hoc dien, dien cong nghiep, dien tu va cac nganh ky thuat lien quan.",
    bullets: [
      "Thi cong, lap dat va kiem tra he thong dien tai hien truong",
      "Phoi hop voi doi ky thuat de xu ly ban ve, tien do va an toan",
      "Cap nhat bao cao cong viec va ho tro nghiem thu",
      "Tiep can OJT va quy trinh van hanh thuc te",
    ],
  },
  environmentSection: {
    title: "03. Moi truong lam viec",
    cards: [
      {
        title: "Khong gian",
        description: "Lam viec tai nha may, cong trinh va khu thao tac duoc bo tri gon gang, ro quy trinh.",
      },
      {
        title: "Dao tao",
        bullets: ["OJT tai hien truong", "Huong dan an toan", "Kem cap nang tay nghe"],
      },
      {
        title: "Dong doi",
        description: "Dong doi than thien, ho tro nhau trong cong viec va giao tiep hang ngay.",
      },
    ],
  },
  growthSection: {
    title: "04. Dinh huong tuong lai",
    steps: [
      {
        title: "Lam quen",
        description: "Nham quy trinh va ky luat lam viec",
        color: "#f97316",
      },
      {
        title: "Thuc hanh",
        description: "Tham gia cong viec thuc te cung doi ngu",
        color: "#0ea5e9",
      },
      {
        title: "Nang bac",
        description: "Nhan phan viec kho hon va nang cao tay nghe",
        color: "#16a34a",
      },
      {
        title: "Dan dat",
        description: "Co co hoi tro thanh nhom truong hoac ky su chu chot",
        color: "#7c3aed",
      },
    ],
    traits: [
      {
        title: "Ung vien phu hop",
        bullets: ["Tinh than hoc hoi", "Tac phong nghiem tuc", "San sang lam viec theo doi nhom"],
      },
    ],
  },
  majorSection: {
    title: "05. Chuyen nganh tuyen dung",
    majors: [
      "Dien cong nghiep",
      "Dien tu",
      "Tu dong hoa",
      "Co dien tu va cac nganh lien quan",
    ],
    notes: [
      "Uu tien ung vien co mong muon gan bo lau dai va phat trien nghe nghiep tai Nhat Ban.",
    ],
  },
};
