(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/sample-poster.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/poster-canvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PosterCanvas",
    ()=>PosterCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sample-poster.ts [app-client] (ecmascript)");
;
;
;
function text(value) {
    return value ?? "";
}
function resolveTheme(industry, overrides) {
    return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["industryThemes"][industry],
        ...overrides
    };
}
function resolveHeroFrameStyle(industry, override) {
    return override ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["industryHeroFrames"][industry];
}
function PosterCanvas({ poster, previewMode = "full", frame = "full", editable = false, onTextChange }) {
    const theme = resolveTheme(poster.industry, poster.theme);
    const pages = buildMobilePages(poster);
    const heroFrameStyle = resolveHeroFrameStyle(poster.industry, poster.heroFrameStyle);
    const sectionTitleStyle = poster.sectionTitleStyle ?? "ribbon";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `poster-canvas poster-style-${poster.style} preview-${previewMode} hero-frame-${heroFrameStyle} section-title-${sectionTitleStyle}`,
        style: {
            "--poster-primary": theme.primary,
            "--poster-secondary": theme.secondary,
            "--poster-accent": theme.accent,
            "--poster-surface": theme.surface,
            "--poster-text": theme.text
        },
        children: previewMode === "full" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FullPoster, {
            editable: editable,
            frame: frame,
            onTextChange: onTextChange,
            poster: poster,
            sectionTitleStyle: sectionTitleStyle,
            heroFrameStyle: heroFrameStyle
        }, void 0, false, {
            fileName: "[project]/src/components/poster-canvas.tsx",
            lineNumber: 66,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobilePosterPages, {
            pages: pages,
            previewMode: previewMode
        }, void 0, false, {
            fileName: "[project]/src/components/poster-canvas.tsx",
            lineNumber: 75,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/poster-canvas.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c = PosterCanvas;
function FullPoster({ poster, frame, sectionTitleStyle, heroFrameStyle, editable, onTextChange }) {
    const showTopFrame = frame === "full" || frame === "part-1";
    const showBottomFrame = frame === "full" || frame === "part-2";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showTopFrame ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "poster-hero",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-copy",
                                children: [
                                    poster.brand.logoImage?.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "brand-logo-wrap",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            alt: poster.brand.logoImage.alt || poster.brand.companyName,
                                            className: "brand-logo-image",
                                            height: 36,
                                            src: poster.brand.logoImage.url,
                                            style: {
                                                width: "auto",
                                                height: "auto",
                                                maxWidth: "100%"
                                            },
                                            width: 170
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/poster-canvas.tsx",
                                            lineNumber: 107,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "logo-text",
                                        children: poster.brand.companyName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableText, {
                                        as: "h2",
                                        editable: editable,
                                        onChange: onTextChange,
                                        path: "brand.companyName",
                                        value: poster.brand.companyName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    poster.hero.badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableText, {
                                        as: "span",
                                        className: "hero-badge",
                                        editable: editable,
                                        onChange: onTextChange,
                                        path: "hero.badge",
                                        value: text(poster.hero.badge)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableText, {
                                        as: "h3",
                                        editable: editable,
                                        onChange: onTextChange,
                                        path: "brand.campaign",
                                        value: text(poster.brand.campaign)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableText, {
                                        as: "p",
                                        className: "hero-role",
                                        editable: editable,
                                        onChange: onTextChange,
                                        path: "brand.role",
                                        value: text(poster.brand.role)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableText, {
                                        as: "p",
                                        className: "hero-tagline",
                                        editable: editable,
                                        onChange: onTextChange,
                                        path: "brand.tagline",
                                        value: text(poster.brand.tagline)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-statement",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableText, {
                                                as: "strong",
                                                editable: editable,
                                                inverse: true,
                                                onChange: onTextChange,
                                                path: "hero.headline",
                                                value: text(poster.hero.headline)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/poster-canvas.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this),
                                            poster.hero.subheadline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableText, {
                                                as: "span",
                                                editable: editable,
                                                inverse: true,
                                                onChange: onTextChange,
                                                path: "hero.subheadline",
                                                value: text(poster.hero.subheadline)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/poster-canvas.tsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroAside, {
                                heroFrameStyle: heroFrameStyle,
                                poster: poster
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "poster-sections poster-sections-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "poster-section section-flow",
                            "data-export-section": "company",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    editable: editable,
                                    number: "01",
                                    onTextChange: onTextChange,
                                    path: "companySection.title",
                                    style: sectionTitleStyle,
                                    title: text(poster.companySection.title)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/poster-canvas.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableText, {
                                    as: "p",
                                    className: "section-lead",
                                    editable: editable,
                                    onChange: onTextChange,
                                    path: "companySection.intro",
                                    value: text(poster.companySection.intro)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/poster-canvas.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletList, {
                                    editable: editable,
                                    items: poster.companySection.bullets,
                                    onTextChange: onTextChange,
                                    path: "companySection.bullets"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/poster-canvas.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/poster-canvas.tsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : null,
            showBottomFrame ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "poster-sections poster-sections-full poster-sections-secondary",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "poster-section section-flow",
                        "data-export-section": "job",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                editable: editable,
                                number: "02",
                                onTextChange: onTextChange,
                                path: "jobSection.title",
                                style: sectionTitleStyle,
                                title: text(poster.jobSection.title)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this),
                            poster.jobSection.intro ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableText, {
                                as: "p",
                                className: "section-lead",
                                editable: editable,
                                onChange: onTextChange,
                                path: "jobSection.intro",
                                value: text(poster.jobSection.intro)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 165,
                                columnNumber: 15
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletList, {
                                editable: editable,
                                items: poster.jobSection.bullets,
                                onTextChange: onTextChange,
                                path: "jobSection.bullets"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "poster-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                editable: editable,
                                number: "03",
                                onTextChange: onTextChange,
                                path: "environmentSection.title",
                                style: sectionTitleStyle,
                                title: text(poster.environmentSection.title)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "feature-grid",
                                children: poster.environmentSection.cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCard, {
                                        card: card,
                                        editable: editable,
                                        index: index,
                                        onTextChange: onTextChange,
                                        pathPrefix: "environmentSection.cards"
                                    }, `${text(card.title)}-${index}`, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "poster-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                editable: editable,
                                number: "04",
                                onTextChange: onTextChange,
                                path: "growthSection.title",
                                style: sectionTitleStyle,
                                title: text(poster.growthSection.title)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "timeline-row",
                                children: poster.growthSection.steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineStep, {
                                        editable: editable,
                                        onTextChange: onTextChange,
                                        step: step,
                                        index: index
                                    }, `${text(step.title)}-${index}`, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this),
                            poster.growthSection.traits?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "trait-grid",
                                children: poster.growthSection.traits.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCard, {
                                        card: card,
                                        editable: editable,
                                        index: index,
                                        onTextChange: onTextChange,
                                        pathPrefix: "growthSection.traits"
                                    }, `${text(card.title)}-${index}`, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 196,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 194,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "poster-section section-flow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                editable: editable,
                                number: "05",
                                onTextChange: onTextChange,
                                path: "majorSection.title",
                                style: sectionTitleStyle,
                                title: text(poster.majorSection.title)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletList, {
                                editable: editable,
                                items: poster.majorSection.majors,
                                onTextChange: onTextChange,
                                path: "majorSection.majors"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this),
                            poster.majorSection.notes?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletList, {
                                compact: true,
                                editable: editable,
                                items: poster.majorSection.notes,
                                onTextChange: onTextChange,
                                path: "majorSection.notes"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 213,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 161,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true);
}
_c1 = FullPoster;
function HeroAside({ poster, heroFrameStyle }) {
    const summaryItems = [
        {
            label: "Cong ty",
            value: `${poster.companySection.bullets.length} y chinh`
        },
        {
            label: "Cong viec",
            value: `${poster.jobSection.bullets.length} dau viec`
        },
        {
            label: "Lo trinh",
            value: `${poster.growthSection.steps.length} buoc phat trien`
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: `hero-aside hero-frame-${heroFrameStyle}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-aside-top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hero-aside-label",
                        children: "Thong tin nhanh"
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: poster.brand.companyName
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: poster.brand.tagline
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-aside-grid",
                children: summaryItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "hero-aside-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: item.value
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.label, true, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/poster-canvas.tsx",
        lineNumber: 236,
        columnNumber: 5
    }, this);
}
_c2 = HeroAside;
function MobilePosterPages({ pages, previewMode }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: previewMode === "mobile-slide" ? "mobile-page-track slide" : "mobile-page-track four-up",
        children: pages.map((page, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "mobile-page",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "mobile-page-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: String(index + 1).padStart(2, "0")
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: page.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 267,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: page.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-page-body",
                        children: page.content
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 270,
                        columnNumber: 11
                    }, this)
                ]
            }, `${page.title}-${index}`, true, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 264,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/poster-canvas.tsx",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
_c3 = MobilePosterPages;
function buildMobilePages(poster) {
    return [
        {
            title: text(poster.companySection.title),
            subtitle: poster.brand.companyName,
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-hero-card",
                        children: [
                            poster.brand.logoImage?.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "brand-logo-wrap mobile",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    alt: poster.brand.logoImage.alt || poster.brand.companyName,
                                    className: "brand-logo-image",
                                    height: 30,
                                    src: poster.brand.logoImage.url,
                                    style: {
                                        width: "auto",
                                        height: "auto",
                                        maxWidth: "100%"
                                    },
                                    width: 140
                                }, void 0, false, {
                                    fileName: "[project]/src/components/poster-canvas.tsx",
                                    lineNumber: 287,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 286,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "logo-text",
                                children: poster.brand.companyName
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 297,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: poster.brand.companyName
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero-role",
                                children: text(poster.brand.campaign)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 300,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: text(poster.companySection.intro)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 284,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletList, {
                        items: poster.companySection.bullets
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 303,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        },
        {
            title: text(poster.jobSection.title),
            subtitle: poster.brand.companyName,
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    poster.jobSection.intro ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "section-lead",
                        children: text(poster.jobSection.intro)
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 312,
                        columnNumber: 38
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletList, {
                        items: poster.jobSection.bullets
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 313,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        },
        {
            title: text(poster.environmentSection.title),
            subtitle: poster.brand.companyName,
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "feature-grid mobile-feature-grid",
                children: poster.environmentSection.cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCard, {
                        card: card,
                        index: index,
                        pathPrefix: "environmentSection.cards"
                    }, `${text(card.title)}-${index}`, false, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 323,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 321,
                columnNumber: 11
            }, this)
        },
        {
            title: text(poster.growthSection.title),
            subtitle: poster.brand.companyName,
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "timeline-row mobile-timeline-row",
                        children: poster.growthSection.steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineStep, {
                                step: step,
                                index: index
                            }, `${text(step.title)}-${index}`, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 340,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 338,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "poster-section mobile-inline-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                number: "05",
                                style: poster.sectionTitleStyle ?? "ribbon",
                                title: text(poster.majorSection.title)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 344,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletList, {
                                items: poster.majorSection.majors
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this),
                            poster.majorSection.notes?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletList, {
                                compact: true,
                                items: poster.majorSection.notes
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 346,
                                columnNumber: 50
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 343,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        }
    ];
}
function SectionHeader({ title, number, style, editable = false, path, onTextChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `section-header section-header-${style}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "section-number",
                children: number
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, this),
            path ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableText, {
                as: "h4",
                editable: editable,
                onChange: onTextChange,
                path: path,
                value: title
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 373,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 375,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/poster-canvas.tsx",
        lineNumber: 370,
        columnNumber: 5
    }, this);
}
_c4 = SectionHeader;
function BulletList({ items, compact = false, editable = false, path, onTextChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: compact ? "bullet-list compact" : "bullet-list",
        children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: editable && path ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableText, {
                    as: "span",
                    editable: true,
                    onChange: onTextChange,
                    path: `${path}.${index}`,
                    value: text(item)
                }, void 0, false, {
                    fileName: "[project]/src/components/poster-canvas.tsx",
                    lineNumber: 399,
                    columnNumber: 13
                }, this) : text(item)
            }, `${text(item)}-${index}`, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 397,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/poster-canvas.tsx",
        lineNumber: 395,
        columnNumber: 5
    }, this);
}
_c5 = BulletList;
function InfoCard({ card, index, editable = false, pathPrefix, onTextChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "feature-card",
        children: [
            card.title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableText, {
                as: "strong",
                editable: editable,
                onChange: onTextChange,
                path: `${pathPrefix}.${index}.title`,
                value: text(card.title)
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 425,
                columnNumber: 9
            }, this) : null,
            card.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableText, {
                as: "p",
                editable: editable,
                onChange: onTextChange,
                path: `${pathPrefix}.${index}.description`,
                value: text(card.description)
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 434,
                columnNumber: 9
            }, this) : null,
            card.bullets?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletList, {
                compact: true,
                editable: editable,
                items: card.bullets,
                onTextChange: onTextChange,
                path: `${pathPrefix}.${index}.bullets`
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 443,
                columnNumber: 9
            }, this) : null,
            card.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaFrame, {
                image: card.image,
                label: "Card image"
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 445,
                columnNumber: 21
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/poster-canvas.tsx",
        lineNumber: 423,
        columnNumber: 5
    }, this);
}
_c6 = InfoCard;
function TimelineStep({ step, index, editable = false, onTextChange }) {
    const stepColor = step.color || "var(--poster-primary)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "timeline-step",
        style: {
            "--timeline-step-color": stepColor
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineMedia, {
                image: step.image,
                index: index,
                title: step.title
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 468,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                className: "timeline-index",
                children: String(index + 1).padStart(2, "0")
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 469,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableText, {
                as: "strong",
                editable: editable,
                onChange: onTextChange,
                path: `growthSection.steps.${index}.title`,
                value: text(step.title)
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 470,
                columnNumber: 7
            }, this),
            step.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableText, {
                as: "p",
                editable: editable,
                onChange: onTextChange,
                path: `growthSection.steps.${index}.description`,
                value: text(step.description)
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 472,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/poster-canvas.tsx",
        lineNumber: 464,
        columnNumber: 5
    }, this);
}
_c7 = TimelineStep;
function EditableText({ as: Tag, value, path, onChange, editable = false, className, inverse = false }) {
    if (!editable) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
            className: className,
            children: value
        }, void 0, false, {
            fileName: "[project]/src/components/poster-canvas.tsx",
            lineNumber: 496,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        className: [
            className,
            "editable-text",
            inverse ? "inverse" : ""
        ].filter(Boolean).join(" "),
        contentEditable: true,
        onBlur: (event)=>onChange?.(path, event.currentTarget.textContent ?? ""),
        suppressContentEditableWarning: true,
        children: value
    }, void 0, false, {
        fileName: "[project]/src/components/poster-canvas.tsx",
        lineNumber: 500,
        columnNumber: 5
    }, this);
}
_c8 = EditableText;
function TimelineMedia({ image, index, title }) {
    if (image?.url) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "timeline-media-frame",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                alt: image.alt || title,
                className: "timeline-media-image",
                fill: true,
                sizes: "96px",
                src: image.url
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 523,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/poster-canvas.tsx",
            lineNumber: 522,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "timeline-media-fallback",
        "aria-hidden": "true",
        children: String(index + 1).padStart(2, "0")
    }, void 0, false, {
        fileName: "[project]/src/components/poster-canvas.tsx",
        lineNumber: 535,
        columnNumber: 5
    }, this);
}
_c9 = TimelineMedia;
function MediaFrame({ image, label, large = false, fancy = false, frameStyle }) {
    const className = [
        large ? "media-frame media-frame-large" : "media-frame",
        fancy ? "media-frame-fancy" : "",
        frameStyle ? `media-frame-${frameStyle}` : ""
    ].filter(Boolean).join(" ");
    if (image?.url) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                alt: image.alt || label,
                className: "media-image",
                fill: true,
                sizes: large ? "50vw" : "25vw",
                src: image.url
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 565,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/poster-canvas.tsx",
            lineNumber: 564,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${className} empty`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 578,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: "Dat URL anh ben ngoai vao field `url`"
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 579,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/poster-canvas.tsx",
        lineNumber: 577,
        columnNumber: 5
    }, this);
}
_c10 = MediaFrame;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "PosterCanvas");
__turbopack_context__.k.register(_c1, "FullPoster");
__turbopack_context__.k.register(_c2, "HeroAside");
__turbopack_context__.k.register(_c3, "MobilePosterPages");
__turbopack_context__.k.register(_c4, "SectionHeader");
__turbopack_context__.k.register(_c5, "BulletList");
__turbopack_context__.k.register(_c6, "InfoCard");
__turbopack_context__.k.register(_c7, "TimelineStep");
__turbopack_context__.k.register(_c8, "EditableText");
__turbopack_context__.k.register(_c9, "TimelineMedia");
__turbopack_context__.k.register(_c10, "MediaFrame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/poster-assets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/poster-templates.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/poster-schema.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sample-poster.ts [app-client] (ecmascript)");
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
        style: readEnum(value.style, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleOptions"], "style"),
        sectionTitleStyle: readOptionalEnum(value.sectionTitleStyle, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sectionTitleStyleOptions"], "sectionTitleStyle"),
        heroFrameStyle: readOptionalEnum(value.heroFrameStyle, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroFrameStyleOptions"], "heroFrameStyle"),
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(JSON.stringify(poster), "utf8").toString("base64url");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/poster-storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadStoredPoster",
    ()=>loadStoredPoster,
    "saveStoredPoster",
    ()=>saveStoredPoster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sample-poster.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/poster-schema.ts [app-client] (ecmascript)");
;
;
const draftKey = "createposter:draft";
function loadStoredPoster() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const raw = window.localStorage.getItem(draftKey);
    if (!raw) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["samplePoster"];
    }
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePosterDocument"])(JSON.parse(raw));
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["samplePoster"];
    }
}
function saveStoredPoster(poster) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.localStorage.setItem(draftKey, JSON.stringify(poster));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/poster-editor-workspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PosterEditorWorkspace",
    ()=>PosterEditorWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$poster$2d$canvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/poster-canvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/poster-assets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/poster-templates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sample-poster.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/poster-storage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function clonePoster(poster) {
    return structuredClone(poster);
}
function setValueAtPath(value, path, nextValue) {
    const segments = path.split(".");
    const cloned = structuredClone(value);
    let current = cloned;
    for(let index = 0; index < segments.length - 1; index += 1){
        const key = segments[index];
        const resolvedKey = /^\d+$/.test(key) ? Number(key) : key;
        current = current[resolvedKey];
    }
    const finalKey = segments[segments.length - 1];
    const resolvedFinalKey = /^\d+$/.test(finalKey) ? Number(finalKey) : finalKey;
    current[resolvedFinalKey] = nextValue;
    return cloned;
}
function downloadUrl(filename, href) {
    const link = document.createElement("a");
    link.download = filename;
    link.href = href;
    link.click();
}
function createCard() {
    return {
        title: "Thong tin moi",
        description: "Them noi dung moi tai day",
        bullets: [
            "Dong 1"
        ]
    };
}
function createStep(stepNumber) {
    return {
        title: `Buoc ${stepNumber}`,
        description: "Mo ta ngan",
        color: "#0f766e",
        image: {
            url: "",
            alt: `Step ${stepNumber}`
        }
    };
}
function readSimpleList(poster, path) {
    switch(path){
        case "companySection.bullets":
            return [
                ...poster.companySection.bullets
            ];
        case "jobSection.bullets":
            return [
                ...poster.jobSection.bullets
            ];
        case "majorSection.majors":
            return [
                ...poster.majorSection.majors
            ];
        case "majorSection.notes":
            return [
                ...poster.majorSection.notes ?? []
            ];
    }
}
function writeSimpleList(poster, path, items) {
    switch(path){
        case "companySection.bullets":
            poster.companySection.bullets = items;
            break;
        case "jobSection.bullets":
            poster.jobSection.bullets = items;
            break;
        case "majorSection.majors":
            poster.majorSection.majors = items;
            break;
        case "majorSection.notes":
            poster.majorSection.notes = items;
            break;
    }
}
function buildPosterFromTemplate(template) {
    const stored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadStoredPoster"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyPosterAssetDefaults"])({
        ...stored,
        style: template.style,
        sectionTitleStyle: template.sectionTitleStyle,
        heroFrameStyle: template.heroFrameStyle
    });
}
function PosterEditorWorkspace() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const posterPartOneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const posterPartTwoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const template = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PosterEditorWorkspace.useMemo[template]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findPosterTemplate"])(searchParams.get("template"))
    }["PosterEditorWorkspace.useMemo[template]"], [
        searchParams
    ]);
    const [poster, setPoster] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PosterEditorWorkspace.useState": ()=>buildPosterFromTemplate(template)
    }["PosterEditorWorkspace.useState"]);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PosterEditorWorkspace.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStoredPoster"])(poster);
        }
    }["PosterEditorWorkspace.useEffect"], [
        poster
    ]);
    const updatePoster = (recipe)=>{
        setPoster((current)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyPosterAssetDefaults"])(recipe(current ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyPosterAssetDefaults"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["samplePoster"])));
        });
        setStatus("");
    };
    const updateText = (path, value)=>{
        updatePoster((current)=>setValueAtPath(current, path, value));
    };
    const updateListItem = (path, index, value)=>{
        updatePoster((current)=>setValueAtPath(current, `${path}.${index}`, value));
    };
    const addListItem = (path)=>{
        updatePoster((current)=>{
            const next = clonePoster(current);
            const list = readSimpleList(next, path);
            list.push("Noi dung moi");
            writeSimpleList(next, path, list);
            return next;
        });
    };
    const removeListItem = (path, index)=>{
        updatePoster((current)=>{
            const next = clonePoster(current);
            const list = readSimpleList(next, path);
            list.splice(index, 1);
            writeSimpleList(next, path, list);
            return next;
        });
    };
    const addEnvironmentCard = ()=>{
        updatePoster((current)=>{
            const next = clonePoster(current);
            next.environmentSection.cards = [
                ...next.environmentSection.cards,
                createCard()
            ];
            return next;
        });
    };
    const removeEnvironmentCard = (index)=>{
        updatePoster((current)=>{
            const next = clonePoster(current);
            next.environmentSection.cards = next.environmentSection.cards.filter((_, itemIndex)=>itemIndex !== index);
            return next;
        });
    };
    const addTraitCard = ()=>{
        updatePoster((current)=>{
            const next = clonePoster(current);
            next.growthSection.traits = [
                ...next.growthSection.traits ?? [],
                createCard()
            ];
            return next;
        });
    };
    const removeTraitCard = (index)=>{
        updatePoster((current)=>{
            const next = clonePoster(current);
            next.growthSection.traits = (next.growthSection.traits ?? []).filter((_, itemIndex)=>itemIndex !== index);
            return next;
        });
    };
    const addStep = ()=>{
        updatePoster((current)=>{
            const next = clonePoster(current);
            next.growthSection.steps = [
                ...next.growthSection.steps,
                createStep(next.growthSection.steps.length + 1)
            ];
            return next;
        });
    };
    const removeStep = (index)=>{
        updatePoster((current)=>{
            const next = clonePoster(current);
            next.growthSection.steps = next.growthSection.steps.filter((_, itemIndex)=>itemIndex !== index);
            return next;
        });
    };
    const exportPosterParts = async ()=>{
        if (!posterPartOneRef.current || !posterPartTwoRef.current) {
            return;
        }
        try {
            setIsExporting(true);
            const baseName = poster.brand.companyName.toLowerCase().replace(/\s+/g, "-");
            const [partOne, partTwo] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPng"])(posterPartOneRef.current, {
                    cacheBust: true,
                    pixelRatio: 2
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPng"])(posterPartTwoRef.current, {
                    cacheBust: true,
                    pixelRatio: 2
                })
            ]);
            downloadUrl(`${baseName}-part-1.png`, partOne);
            downloadUrl(`${baseName}-part-2.png`, partTwo);
            setStatus("Da export 2 khung poster rieng biet.");
        } catch (error) {
            setStatus(error instanceof Error ? error.message : "Khong the export poster.");
        } finally{
            setIsExporting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "studio-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "editor-topbar studio-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "Poster Editor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Sua text truc tiep tren poster va quan ly du lieu ben trai"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "intro-copy",
                                children: [
                                    "Template dang chon: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: template.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                        lineNumber: 237,
                                        columnNumber: 33
                                    }, this),
                                    ". Poster da tach san thanh 2 khung rieng de export thang va dang tin de hon."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "intro-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "pill link-pill",
                                href: "/",
                                children: "Quay lai chon JSON va style"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "primary-button",
                                onClick: exportPosterParts,
                                type: "button",
                                children: isExporting ? "Dang export..." : "Export 2 khung"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "editor-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "studio-panel data-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel-header",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Data editor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                            lineNumber: 254,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Them bot thong tin nhanh o day, con text tren poster co the bam vao de sua truc tiep."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "editor-form-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "field-block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Company name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                                lineNumber: 261,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                onChange: (event)=>updateText("brand.companyName", event.target.value),
                                                value: poster.brand.companyName
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                                lineNumber: 262,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "field-block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Company name (JP)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                                lineNumber: 265,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                onChange: (event)=>updateText("hero.badge", event.target.value),
                                                value: poster.hero.badge ?? ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "field-block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Campaign"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                onChange: (event)=>updateText("brand.campaign", event.target.value),
                                                rows: 2,
                                                value: poster.brand.campaign
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                                lineNumber: 270,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "field-block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Tagline"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                                lineNumber: 273,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                onChange: (event)=>updateText("brand.tagline", event.target.value),
                                                rows: 2,
                                                value: poster.brand.tagline
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                                lineNumber: 274,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorListSection, {
                                items: poster.companySection.bullets,
                                onAdd: ()=>addListItem("companySection.bullets"),
                                onChange: (index, value)=>updateListItem("companySection.bullets", index, value),
                                onRemove: (index)=>removeListItem("companySection.bullets", index),
                                title: "Company bullets"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorListSection, {
                                items: poster.jobSection.bullets,
                                onAdd: ()=>addListItem("jobSection.bullets"),
                                onChange: (index, value)=>updateListItem("jobSection.bullets", index, value),
                                onRemove: (index)=>removeListItem("jobSection.bullets", index),
                                title: "Job bullets"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorCardSection, {
                                cards: poster.environmentSection.cards,
                                onAdd: addEnvironmentCard,
                                onChange: updateText,
                                onRemove: removeEnvironmentCard,
                                pathPrefix: "environmentSection.cards",
                                title: "Environment cards"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorStepSection, {
                                onAdd: addStep,
                                onChange: updateText,
                                onRemove: removeStep,
                                steps: poster.growthSection.steps,
                                title: "Growth steps"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorCardSection, {
                                cards: poster.growthSection.traits ?? [],
                                onAdd: addTraitCard,
                                onChange: updateText,
                                onRemove: removeTraitCard,
                                pathPrefix: "growthSection.traits",
                                title: "Trait cards"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorListSection, {
                                items: poster.majorSection.majors,
                                onAdd: ()=>addListItem("majorSection.majors"),
                                onChange: (index, value)=>updateListItem("majorSection.majors", index, value),
                                onRemove: (index)=>removeListItem("majorSection.majors", index),
                                title: "Majors"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 320,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorListSection, {
                                items: poster.majorSection.notes ?? [],
                                onAdd: ()=>addListItem("majorSection.notes"),
                                onChange: (index, value)=>updateListItem("majorSection.notes", index, value),
                                onRemove: (index)=>removeListItem("majorSection.notes", index),
                                title: "Notes"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 328,
                                columnNumber: 11
                            }, this),
                            status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "status-note",
                                children: status
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 336,
                                columnNumber: 21
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "studio-panel preview-panel tall",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel-header",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Poster live editor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                            lineNumber: 342,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Bam truc tiep vao text tren poster de sua. Preview nay da tach thanh 2 khung rieng de export thang, khong con cat anh nua."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                    lineNumber: 341,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 340,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "preview-scroll preview-scroll-split",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "poster-frame-stack",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: posterPartOneRef,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$poster$2d$canvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PosterCanvas"], {
                                                editable: true,
                                                frame: "part-1",
                                                onTextChange: updateText,
                                                poster: poster,
                                                previewMode: "full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                                lineNumber: 350,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: posterPartTwoRef,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$poster$2d$canvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PosterCanvas"], {
                                                editable: true,
                                                frame: "part-2",
                                                onTextChange: updateText,
                                                poster: poster,
                                                previewMode: "full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                            lineNumber: 352,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                        lineNumber: 339,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/poster-editor-workspace.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, this);
}
_s(PosterEditorWorkspace, "DQOZe00WbzY9uLkLeZ+voi2azgs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = PosterEditorWorkspace;
function EditorListSection({ title, items, onChange, onAdd, onRemove }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "data-group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "group-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "pill mini",
                        onClick: onAdd,
                        type: "button",
                        children: "Them dong"
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                        lineNumber: 380,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                lineNumber: 378,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "list-editor",
                children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "list-editor-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                onChange: (event)=>onChange(index, event.target.value),
                                rows: 2,
                                value: item
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 387,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "pill mini ghost",
                                onClick: ()=>onRemove(index),
                                type: "button",
                                children: "Xoa"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 388,
                                columnNumber: 13
                            }, this)
                        ]
                    }, `${title}-${index}`, true, {
                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                        lineNumber: 386,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                lineNumber: 384,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/poster-editor-workspace.tsx",
        lineNumber: 377,
        columnNumber: 5
    }, this);
}
_c1 = EditorListSection;
function EditorCardSection({ title, cards, pathPrefix, onChange, onAdd, onRemove }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "data-group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "group-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                        lineNumber: 416,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "pill mini",
                        onClick: onAdd,
                        type: "button",
                        children: "Them card"
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                        lineNumber: 417,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stacked-card-list",
                children: cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nested-editor-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Title"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                        lineNumber: 425,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        onChange: (event)=>onChange(`${pathPrefix}.${index}.title`, event.target.value),
                                        value: card.title ?? ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                        lineNumber: 426,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 424,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                        lineNumber: 429,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        onChange: (event)=>onChange(`${pathPrefix}.${index}.description`, event.target.value),
                                        rows: 2,
                                        value: card.description ?? ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                        lineNumber: 430,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 428,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "pill mini ghost",
                                onClick: ()=>onRemove(index),
                                type: "button",
                                children: "Xoa card"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 432,
                                columnNumber: 13
                            }, this)
                        ]
                    }, `${title}-${index}`, true, {
                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                        lineNumber: 423,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                lineNumber: 421,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/poster-editor-workspace.tsx",
        lineNumber: 414,
        columnNumber: 5
    }, this);
}
_c2 = EditorCardSection;
function EditorStepSection({ title, steps, onChange, onAdd, onRemove }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "data-group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "group-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                        lineNumber: 458,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "pill mini",
                        onClick: onAdd,
                        type: "button",
                        children: "Them step"
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                        lineNumber: 459,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                lineNumber: 457,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stacked-card-list",
                children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nested-editor-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Title"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                        lineNumber: 467,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        onChange: (event)=>onChange(`growthSection.steps.${index}.title`, event.target.value),
                                        value: step.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                        lineNumber: 468,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 466,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                        lineNumber: 471,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        onChange: (event)=>onChange(`growthSection.steps.${index}.description`, event.target.value),
                                        rows: 2,
                                        value: step.description ?? ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                        lineNumber: 472,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 470,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "pill mini ghost",
                                onClick: ()=>onRemove(index),
                                type: "button",
                                children: "Xoa step"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                                lineNumber: 474,
                                columnNumber: 13
                            }, this)
                        ]
                    }, `${title}-${index}`, true, {
                        fileName: "[project]/src/components/poster-editor-workspace.tsx",
                        lineNumber: 465,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/poster-editor-workspace.tsx",
                lineNumber: 463,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/poster-editor-workspace.tsx",
        lineNumber: 456,
        columnNumber: 5
    }, this);
}
_c3 = EditorStepSection;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "PosterEditorWorkspace");
__turbopack_context__.k.register(_c1, "EditorListSection");
__turbopack_context__.k.register(_c2, "EditorCardSection");
__turbopack_context__.k.register(_c3, "EditorStepSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0vsksxw._.js.map