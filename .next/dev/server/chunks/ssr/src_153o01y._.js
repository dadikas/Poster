module.exports = [
"[project]/src/lib/poster-assets.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyPosterAssetDefaults",
    ()=>applyPosterAssetDefaults
]);
function toAbsoluteUrl(url, origin) {
    if (!origin || !url.startsWith("/")) {
        return url;
    }
    return new URL(url, origin).toString();
}
function normalizeImage(image, origin) {
    const imageUrl = image?.url?.trim();
    if (!imageUrl) {
        return image;
    }
    return {
        ...image,
        url: toAbsoluteUrl(imageUrl, origin)
    };
}
function normalizeItems(items, origin) {
    return items.map((item)=>({
            ...item,
            image: normalizeImage(item.image, origin)
        }));
}
function normalizeSteps(steps, origin) {
    return steps.map((step)=>({
            ...step,
            image: normalizeImage(step.image, origin)
        }));
}
function applyPosterAssetDefaults(poster, origin) {
    return {
        ...poster,
        brand: {
            ...poster.brand,
            logoImage: normalizeImage(poster.brand.logoImage, origin)
        },
        environmentSection: {
            ...poster.environmentSection,
            cards: normalizeItems(poster.environmentSection.cards, origin)
        },
        growthSection: {
            ...poster.growthSection,
            steps: normalizeSteps(poster.growthSection.steps, origin),
            traits: poster.growthSection.traits ? normalizeItems(poster.growthSection.traits, origin) : undefined
        }
    };
}
}),
"[project]/src/lib/poster-templates.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultPosterTemplate",
    ()=>defaultPosterTemplate,
    "findPosterTemplate",
    ()=>findPosterTemplate,
    "posterTemplates",
    ()=>posterTemplates
]);
const posterTemplates = [
    {
        id: "bold-impact",
        name: "Bold Impact",
        summary: "Tieu de lon, khoi mau manh, hop voi poster tuyen dung can nhin thay ngay.",
        style: "bold",
        sectionTitleStyle: "ribbon",
        heroFrameStyle: "electrical-spark",
        accent: "#f97316",
        surface: "#fff7ed"
    },
    {
        id: "clean-board",
        name: "Clean Board",
        summary: "Sach, thoang, de thay du lieu nhieu dong ma van ro rang.",
        style: "clean",
        sectionTitleStyle: "capsule",
        heroFrameStyle: "it-matrix",
        accent: "#2563eb",
        surface: "#eff6ff"
    },
    {
        id: "split-focus",
        name: "Split Focus",
        summary: "Cat bo cuc thanh hai mien ro hon, giu dinh huong de sau nay chen image vao.",
        style: "split",
        sectionTitleStyle: "plate",
        heroFrameStyle: "construction-slab",
        accent: "#0f766e",
        surface: "#ecfeff"
    }
];
const defaultPosterTemplate = posterTemplates[0];
function findPosterTemplate(templateId) {
    return posterTemplates.find((template)=>template.id === templateId) ?? defaultPosterTemplate;
}
}),
"[project]/src/lib/sample-poster.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "heroFrameStyleOptions",
    ()=>heroFrameStyleOptions,
    "industryHeroFrames",
    ()=>industryHeroFrames,
    "industryThemes",
    ()=>industryThemes,
    "samplePoster",
    ()=>samplePoster,
    "sectionTitleStyleOptions",
    ()=>sectionTitleStyleOptions,
    "styleOptions",
    ()=>styleOptions
]);
const industryThemes = {
    mechanical: {
        primary: "#c62828",
        secondary: "#450a0a",
        accent: "#ef5350",
        surface: "#fef2f2",
        text: "#4c0519"
    },
    automation: {
        primary: "#0f766e",
        secondary: "#134e4a",
        accent: "#14b8a6",
        surface: "#ecfeff",
        text: "#0f172a"
    },
    construction: {
        primary: "#6b7280",
        secondary: "#374151",
        accent: "#9ca3af",
        surface: "#f5f5f5",
        text: "#111827"
    },
    electrical: {
        primary: "#f97316",
        secondary: "#9a3412",
        accent: "#fb923c",
        surface: "#fff7ed",
        text: "#1f2937"
    },
    electronics: {
        primary: "#1d4ed8",
        secondary: "#0f172a",
        accent: "#60a5fa",
        surface: "#eff6ff",
        text: "#0f172a"
    },
    hvac: {
        primary: "#38bdf8",
        secondary: "#075985",
        accent: "#7dd3fc",
        surface: "#f0f9ff",
        text: "#082f49"
    },
    it: {
        primary: "#16a34a",
        secondary: "#052e16",
        accent: "#4ade80",
        surface: "#f0fdf4",
        text: "#14532d"
    },
    chemistry: {
        primary: "#9333ea",
        secondary: "#3b0764",
        accent: "#c084fc",
        surface: "#faf5ff",
        text: "#4c1d95"
    },
    other: {
        primary: "#db2777",
        secondary: "#500724",
        accent: "#f472b6",
        surface: "#fdf2f8",
        text: "#831843"
    }
};
const styleOptions = [
    "bold",
    "clean",
    "split"
];
const sectionTitleStyleOptions = [
    "ribbon",
    "capsule",
    "plate"
];
const heroFrameStyleOptions = [
    "automation-grid",
    "construction-slab",
    "electrical-spark",
    "electronics-circuit",
    "hvac-breeze",
    "it-matrix",
    "chemistry-molecule",
    "other-wave"
];
const industryHeroFrames = {
    mechanical: "construction-slab",
    automation: "automation-grid",
    construction: "construction-slab",
    electrical: "electrical-spark",
    electronics: "electronics-circuit",
    hvac: "hvac-breeze",
    it: "it-matrix",
    chemistry: "chemistry-molecule",
    other: "other-wave"
};
const samplePoster = {
    industry: "electrical",
    style: "bold",
    sectionTitleStyle: "ribbon",
    heroFrameStyle: "electrical-spark",
    brand: {
        logoImage: {
            url: "/api/poster-assets/esutech-logo.jpg",
            alt: "ESUTECH logo"
        },
        companyName: "OKADEN",
        campaign: "Tuyen dung ky su thi cong dien",
        role: "Lam viec tai Nhat Ban trong moi truong ky thuat chuyen nghiep",
        tagline: "Thu nhap on dinh, dao tao bai ban, lo trinh phat trien ro rang"
    },
    hero: {
        badge: "オカデン",
        headline: "Gia nhap doi ngu thi cong dien cong nghiep tai Nhat Ban",
        subheadline: "Co hoi danh cho ung vien muon hoc nghe, nang tay nghe va on dinh lau dai"
    },
    companySection: {
        title: "01. Gioi thieu cong ty",
        intro: "OKADEN la don vi chuyen ve thi cong, lap dat va bao tri he thong dien cho nha may, cong trinh va day chuyen san xuat tai Nhat Ban.",
        bullets: [
            "Moi truong lam viec chuyen nghiep, quy trinh ro rang",
            "Co nguoi huong dan trong giai doan dau nhap viec",
            "Cham chu an toan lao dong va ky nang thuc te tai hien truong"
        ]
    },
    jobSection: {
        title: "Noi dung cong viec",
        intro: "Cong viec phu hop voi ung vien hoc dien, dien cong nghiep, dien tu va cac nganh ky thuat lien quan.",
        bullets: [
            "Thi cong, lap dat va kiem tra he thong dien tai hien truong",
            "Phoi hop voi doi ky thuat de xu ly ban ve, tien do va an toan",
            "Cap nhat bao cao cong viec va ho tro nghiem thu",
            "Tiep can OJT va quy trinh van hanh thuc te"
        ]
    },
    environmentSection: {
        title: "03. Moi truong lam viec",
        cards: [
            {
                title: "Khong gian",
                description: "Lam viec tai nha may, cong trinh va khu thao tac duoc bo tri gon gang, ro quy trinh."
            },
            {
                title: "Dao tao",
                bullets: [
                    "OJT tai hien truong",
                    "Huong dan an toan",
                    "Kem cap nang tay nghe"
                ]
            },
            {
                title: "Dong doi",
                description: "Dong doi than thien, ho tro nhau trong cong viec va giao tiep hang ngay."
            }
        ]
    },
    growthSection: {
        title: "04. Dinh huong tuong lai",
        steps: [
            {
                title: "Lam quen",
                description: "Nham quy trinh va ky luat lam viec",
                color: "#f97316",
                image: {
                    url: "",
                    alt: "Lam quen image"
                }
            },
            {
                title: "Thuc hanh",
                description: "Tham gia cong viec thuc te cung doi ngu",
                color: "#0ea5e9",
                image: {
                    url: "",
                    alt: "Thuc hanh image"
                }
            },
            {
                title: "Nang bac",
                description: "Nhan phan viec kho hon va nang cao tay nghe",
                color: "#16a34a",
                image: {
                    url: "",
                    alt: "Nang bac image"
                }
            },
            {
                title: "Dan dat",
                description: "Co co hoi tro thanh nhom truong hoac ky su chu chot",
                color: "#7c3aed",
                image: {
                    url: "",
                    alt: "Dan dat image"
                }
            }
        ],
        traits: [
            {
                title: "Ung vien phu hop",
                bullets: [
                    "Tinh than hoc hoi",
                    "Tac phong nghiem tuc",
                    "San sang lam viec theo doi nhom"
                ]
            }
        ]
    },
    majorSection: {
        title: "05. Chuyen nganh tuyen dung",
        majors: [
            "Dien cong nghiep",
            "Dien tu",
            "Tu dong hoa",
            "Co dien tu va cac nganh lien quan"
        ],
        notes: [
            "Uu tien ung vien co mong muon gan bo lau dai va phat trien nghe nghiep tai Nhat Ban."
        ]
    }
};
}),
"[project]/src/lib/poster-schema.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodePosterPayload",
    ()=>decodePosterPayload,
    "encodePosterPayload",
    ()=>encodePosterPayload,
    "parsePosterDocument",
    ()=>parsePosterDocument,
    "validatePosterDocument",
    ()=>validatePosterDocument
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sample-poster.ts [app-ssr] (ecmascript)");
;
const industryOptions = [
    "mechanical",
    "automation",
    "construction",
    "electrical",
    "electronics",
    "hvac",
    "it",
    "chemistry",
    "other"
];
function isObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isString(value) {
    return typeof value === "string";
}
function readString(value, path) {
    if (!isString(value) || value.trim().length === 0) {
        throw new Error(`${path} must be a non-empty string.`);
    }
    return value;
}
function readOptionalString(value, path) {
    if (value === undefined || value === null || value === "") {
        return undefined;
    }
    if (!isString(value)) {
        throw new Error(`${path} must be a string.`);
    }
    return value;
}
function readStringArray(value, path) {
    if (!Array.isArray(value) || value.length === 0) {
        throw new Error(`${path} must be a non-empty array of strings.`);
    }
    return value.map((item, index)=>readString(item, `${path}[${index}]`));
}
function readEnum(value, options, path) {
    if (!isString(value) || !options.includes(value)) {
        throw new Error(`${path} must be one of: ${options.join(", ")}.`);
    }
    return value;
}
function readOptionalEnum(value, options, path) {
    if (value === undefined || value === null || value === "") {
        return undefined;
    }
    return readEnum(value, options, path);
}
function readImage(value, path) {
    if (value === undefined || value === null) {
        return undefined;
    }
    if (!isObject(value)) {
        throw new Error(`${path} must be an object.`);
    }
    return {
        url: readOptionalString(value.url, `${path}.url`),
        alt: readOptionalString(value.alt, `${path}.alt`)
    };
}
function readTheme(value, path) {
    if (value === undefined || value === null) {
        return undefined;
    }
    if (!isObject(value)) {
        throw new Error(`${path} must be an object.`);
    }
    const theme = {};
    const fields = [
        "primary",
        "secondary",
        "accent",
        "surface",
        "text"
    ];
    for (const field of fields){
        const fieldValue = value[field];
        if (fieldValue !== undefined) {
            theme[field] = readString(fieldValue, `${path}.${field}`);
        }
    }
    return theme;
}
function readPosterItem(value, path) {
    if (!isObject(value)) {
        throw new Error(`${path} must be an object.`);
    }
    const item = {};
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
function readPosterStep(value, path) {
    if (!isObject(value)) {
        throw new Error(`${path} must be an object.`);
    }
    return {
        title: readString(value.title, `${path}.title`),
        description: readOptionalString(value.description, `${path}.description`),
        color: readOptionalString(value.color, `${path}.color`),
        image: readImage(value.image, `${path}.image`)
    };
}
function readPosterDocument(value) {
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
        style: readEnum(value.style, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleOptions"], "style"),
        sectionTitleStyle: readOptionalEnum(value.sectionTitleStyle, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sectionTitleStyleOptions"], "sectionTitleStyle"),
        heroFrameStyle: readOptionalEnum(value.heroFrameStyle, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heroFrameStyleOptions"], "heroFrameStyle"),
        theme: readTheme(value.theme, "theme"),
        brand: {
            logoImage: readImage(value.brand.logoImage, "brand.logoImage"),
            companyName: readString(value.brand.companyName, "brand.companyName"),
            campaign: readString(value.brand.campaign, "brand.campaign"),
            role: readString(value.brand.role, "brand.role"),
            tagline: readString(value.brand.tagline, "brand.tagline")
        },
        hero: {
            badge: readOptionalString(value.hero.badge, "hero.badge"),
            headline: readString(value.hero.headline, "hero.headline"),
            subheadline: readOptionalString(value.hero.subheadline, "hero.subheadline")
        },
        companySection: {
            title: readString(value.companySection.title, "companySection.title"),
            intro: readString(value.companySection.intro, "companySection.intro"),
            bullets: readStringArray(value.companySection.bullets, "companySection.bullets")
        },
        jobSection: {
            title: readString(value.jobSection.title, "jobSection.title"),
            intro: readOptionalString(value.jobSection.intro, "jobSection.intro"),
            bullets: readStringArray(value.jobSection.bullets, "jobSection.bullets")
        },
        environmentSection: {
            title: readString(value.environmentSection.title, "environmentSection.title"),
            cards: Array.isArray(value.environmentSection.cards) ? value.environmentSection.cards.map((item, index)=>readPosterItem(item, `environmentSection.cards[${index}]`)) : (()=>{
                throw new Error("environmentSection.cards must be an array.");
            })()
        },
        growthSection: {
            title: readString(value.growthSection.title, "growthSection.title"),
            steps: Array.isArray(value.growthSection.steps) ? value.growthSection.steps.map((item, index)=>readPosterStep(item, `growthSection.steps[${index}]`)) : (()=>{
                throw new Error("growthSection.steps must be an array.");
            })(),
            traits: value.growthSection.traits === undefined ? undefined : Array.isArray(value.growthSection.traits) ? value.growthSection.traits.map((item, index)=>readPosterItem(item, `growthSection.traits[${index}]`)) : (()=>{
                throw new Error("growthSection.traits must be an array.");
            })()
        },
        majorSection: {
            title: readString(value.majorSection.title, "majorSection.title"),
            majors: readStringArray(value.majorSection.majors, "majorSection.majors"),
            notes: value.majorSection.notes === undefined ? undefined : readStringArray(value.majorSection.notes, "majorSection.notes")
        }
    };
}
function validatePosterDocument(value) {
    try {
        return {
            ok: true,
            value: readPosterDocument(value)
        };
    } catch (error) {
        return {
            ok: false,
            error: error instanceof Error ? error.message : "Invalid poster payload."
        };
    }
}
function parsePosterDocument(value) {
    const result = validatePosterDocument(value);
    if (!result.ok) {
        throw new Error(result.error);
    }
    return result.value;
}
function encodePosterPayload(poster) {
    return Buffer.from(JSON.stringify(poster), "utf8").toString("base64url");
}
function decodePosterPayload(encoded) {
    try {
        const normalized = encoded.replace(/-/g, "+").replace(/_/g, "/");
        const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
        const json = atob(padded);
        return parsePosterDocument(JSON.parse(json));
    } catch  {
        throw new Error("Khong doc duoc du lieu poster tu URL.");
    }
}
}),
"[project]/src/lib/poster-storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadStoredPoster",
    ()=>loadStoredPoster,
    "saveStoredPoster",
    ()=>saveStoredPoster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sample-poster.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/poster-schema.ts [app-ssr] (ecmascript)");
;
;
const draftKey = "createposter:draft";
function loadStoredPoster() {
    if ("TURBOPACK compile-time truthy", 1) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["samplePoster"];
    }
    //TURBOPACK unreachable
    ;
    const raw = undefined;
}
function saveStoredPoster(poster) {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
}
}),
"[project]/src/components/poster-home.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PosterHome",
    ()=>PosterHome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/poster-assets.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/poster-templates.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sample-poster.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/poster-schema.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/poster-storage.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const defaultPoster = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyPosterAssetDefaults"])({
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["samplePoster"],
    style: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPosterTemplate"].style,
    sectionTitleStyle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPosterTemplate"].sectionTitleStyle,
    heroFrameStyle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPosterTemplate"].heroFrameStyle
});
function PosterHome() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [poster, setPoster] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultPoster);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const syncPoster = (nextPoster)=>{
        const normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyPosterAssetDefaults"])(nextPoster);
        setPoster(normalized);
        setError("");
    };
    const handleFileUpload = async (event)=>{
        const file = event.target.files?.[0];
        if (!file) {
            return;
        }
        try {
            const content = await file.text();
            const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePosterDocument"])(JSON.parse(content));
            syncPoster(parsed);
        } catch (uploadError) {
            setError(uploadError instanceof Error ? uploadError.message : "Khong doc duoc file JSON.");
        }
    };
    const openEditor = (template)=>{
        const posterWithTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyPosterAssetDefaults"])({
            ...poster,
            style: template.style,
            sectionTitleStyle: template.sectionTitleStyle,
            heroFrameStyle: template.heroFrameStyle
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveStoredPoster"])(posterWithTemplate);
        router.push(`/editor?template=${template.id}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "studio-shell",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "home-layout",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "studio-panel upload-panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel-header",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "JSON dau vao"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-home.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Chi can nap file JSON dung cau truc, sau do chon layout de vao editor."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-home.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/poster-home.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/poster-home.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "upload-dropzone",
                            htmlFor: "poster-json-upload",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Chon file .json"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/poster-home.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Ho tro upload payload poster co san, uu tien layout text ro rang va doi mau theo nganh nghe."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/poster-home.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/poster-home.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "sr-only",
                            id: "poster-json-upload",
                            accept: ".json,application/json",
                            onChange: handleFileUpload,
                            type: "file"
                        }, void 0, false, {
                            fileName: "[project]/src/components/poster-home.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "helper-row stacked",
                            children: error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "error-text",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-home.tsx",
                                lineNumber: 82,
                                columnNumber: 22
                            }, this) : null
                        }, void 0, false, {
                            fileName: "[project]/src/components/poster-home.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/poster-home.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "studio-panel template-panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "panel-header",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Style thumbnail"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-home.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Chon thumbnail nao thi app se vao editor ngay voi bo cuc do."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-home.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/poster-home.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/poster-home.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "template-grid",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["posterTemplates"].map((template)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "template-card",
                                    onClick: ()=>openEditor(template),
                                    type: "button",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "template-thumbnail",
                                            style: {
                                                "--template-accent": template.accent,
                                                "--template-surface": template.surface
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TemplateThumbnail, {
                                                templateId: template.id
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/poster-home.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/poster-home.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: template.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/poster-home.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, template.id, true, {
                                    fileName: "[project]/src/components/poster-home.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/poster-home.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/poster-home.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/poster-home.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/poster-home.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
function TemplateThumbnail({ templateId }) {
    if (templateId === "bold-impact") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "template-thumb template-thumb-bold",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "template-thumb-kicker"
                }, void 0, false, {
                    fileName: "[project]/src/components/poster-home.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "template-thumb-hero",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "template-thumb-title lg"
                        }, void 0, false, {
                            fileName: "[project]/src/components/poster-home.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "template-thumb-title md"
                        }, void 0, false, {
                            fileName: "[project]/src/components/poster-home.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "template-thumb-chip-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "template-thumb-chip"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/poster-home.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "template-thumb-chip short"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/poster-home.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/poster-home.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/poster-home.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "template-thumb-stack",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "template-thumb-panel wide"
                        }, void 0, false, {
                            fileName: "[project]/src/components/poster-home.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "template-thumb-panel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/poster-home.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "template-thumb-panel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/poster-home.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/poster-home.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/poster-home.tsx",
            lineNumber: 126,
            columnNumber: 7
        }, this);
    }
    if (templateId === "clean-board") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "template-thumb template-thumb-clean",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "template-thumb-headline",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "template-thumb-title md"
                        }, void 0, false, {
                            fileName: "[project]/src/components/poster-home.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "template-thumb-title sm"
                        }, void 0, false, {
                            fileName: "[project]/src/components/poster-home.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/poster-home.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "template-thumb-card-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "template-thumb-card"
                        }, void 0, false, {
                            fileName: "[project]/src/components/poster-home.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "template-thumb-card"
                        }, void 0, false, {
                            fileName: "[project]/src/components/poster-home.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "template-thumb-card"
                        }, void 0, false, {
                            fileName: "[project]/src/components/poster-home.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "template-thumb-card wide"
                        }, void 0, false, {
                            fileName: "[project]/src/components/poster-home.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/poster-home.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/poster-home.tsx",
            lineNumber: 147,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "template-thumb template-thumb-split",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "template-thumb-split-copy",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "template-thumb-title md"
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-home.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "template-thumb-title sm"
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-home.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "template-thumb-list",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "template-thumb-line"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-home.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "template-thumb-line"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-home.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "template-thumb-line short"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-home.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-home.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/poster-home.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "template-thumb-split-side",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "template-thumb-badge"
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-home.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "template-thumb-mini-stack",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "template-thumb-mini-card"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-home.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "template-thumb-mini-card"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-home.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-home.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/poster-home.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/poster-home.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_153o01y._.js.map