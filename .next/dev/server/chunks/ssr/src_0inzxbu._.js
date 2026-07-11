module.exports = [
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
    automation: {
        primary: "#0f766e",
        secondary: "#0f172a",
        accent: "#22c55e",
        surface: "#ecfeff",
        text: "#0f172a"
    },
    construction: {
        primary: "#6b7280",
        secondary: "#111827",
        accent: "#9ca3af",
        surface: "#f3f4f6",
        text: "#111827"
    },
    electrical: {
        primary: "#ea580c",
        secondary: "#1f2937",
        accent: "#f59e0b",
        surface: "#fff7ed",
        text: "#1f2937"
    },
    electronics: {
        primary: "#2563eb",
        secondary: "#0f172a",
        accent: "#60a5fa",
        surface: "#eff6ff",
        text: "#0f172a"
    },
    hvac: {
        primary: "#0ea5e9",
        secondary: "#0f172a",
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
        logoText: "ESUTECH",
        companyName: "OKADEN",
        campaign: "Tuyen dung ky su thi cong dien",
        role: "Thi cong - lap dat - dieu khien - tuong lai ben vung",
        tagline: "Form lon, ro, de doc tren dien thoai va de thay anh tu ben ngoai"
    },
    hero: {
        image: {
            url: "",
            alt: "Hero image"
        },
        badge: "Theo mau nganh",
        headline: "Tu dong doi mau theo nganh va tu dong tao bullet khi them du lieu",
        subheadline: "Co the preview poster day du, dang truot mobile hoac layout tach 4 anh"
    },
    companySection: {
        title: "01. Ten cong ty",
        intro: "Phan nay dung de gioi thieu tong quan cong ty, hinh anh doanh nghiep va thong diep chinh.",
        bullets: [
            "Ten cong ty va khau hieu hien thi noi bat",
            "Co the them nhieu y de bang bullets ma khong can sua giao dien",
            "Co the dat anh nha may, van phong hoac doi ngu ben phai"
        ],
        image: {
            url: "",
            alt: "Company image"
        }
    },
    jobSection: {
        title: "02. Noi dung cong viec",
        intro: "Neu them 5, 7 hoac 10 dong trong mang bullets thi app tu them dau dong trong cung mot khung.",
        bullets: [
            "Thi cong, lap dat va kiem tra he thong dien tai hien truong",
            "Phoi hop voi doi ky thuat de xu ly ban ve, tien do va an toan",
            "Cap nhat bao cao cong viec va ho tro nghiem thu",
            "Tiep can OJT va quy trinh van hanh thuc te"
        ],
        image: {
            url: "",
            alt: "Job image"
        }
    },
    environmentSection: {
        title: "03. Moi truong lam viec",
        cards: [
            {
                title: "Khong gian",
                description: "Van phong ky thuat, cong truong, nha may hoac khu thao tac co the thay bang anh ngoai."
            },
            {
                title: "Dao tao",
                bullets: [
                    "OJT",
                    "An toan",
                    "Ho tro nang tay nghe"
                ]
            },
            {
                title: "Dong doi",
                description: "Noi dung mot ngon ngu gon hon, de sua nhanh va hien thi ro hon tren mobile."
            }
        ]
    },
    growthSection: {
        title: "04. Dinh huong phat trien sau khi vao cong ty",
        steps: [
            {
                title: "Lam quen",
                description: "Hoc quy trinh",
                color: "#f97316",
                image: {
                    url: "",
                    alt: "Lam quen image"
                }
            },
            {
                title: "Thuc hanh",
                description: "Tich luy tay nghe",
                color: "#0ea5e9",
                image: {
                    url: "",
                    alt: "Thuc hanh image"
                }
            },
            {
                title: "Nang bac",
                description: "Nhan viec kho hon",
                color: "#16a34a",
                image: {
                    url: "",
                    alt: "Nang bac image"
                }
            },
            {
                title: "Dan dat",
                description: "Ho tro nhom",
                color: "#7c3aed",
                image: {
                    url: "",
                    alt: "Dan dat image"
                }
            }
        ],
        traits: [
            {
                title: "Mong muon tu ung vien",
                bullets: [
                    "Tinh than hoc hoi",
                    "Tac phong on dinh",
                    "Giao tiep tot"
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
            "Neu la don haken hoac nhung don khac, chi can doi `industry` thanh `other` de app chuyen sang tong hong."
        ],
        image: {
            url: "",
            alt: "Major image"
        }
    }
};
}),
"[project]/src/components/poster-canvas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PosterCanvas",
    ()=>PosterCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sample-poster.ts [app-ssr] (ecmascript)");
;
;
;
function text(value) {
    return value ?? "";
}
function resolveTheme(industry, overrides) {
    return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["industryThemes"][industry],
        ...overrides
    };
}
function resolveHeroFrameStyle(industry, override) {
    return override ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["industryHeroFrames"][industry];
}
function PosterCanvas({ poster, previewMode = "full" }) {
    const theme = resolveTheme(poster.industry, poster.theme);
    const pages = buildMobilePages(poster);
    const heroFrameStyle = resolveHeroFrameStyle(poster.industry, poster.heroFrameStyle);
    const sectionTitleStyle = poster.sectionTitleStyle ?? "ribbon";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `poster-canvas poster-style-${poster.style} preview-${previewMode} hero-frame-${heroFrameStyle} section-title-${sectionTitleStyle}`,
        style: {
            "--poster-primary": theme.primary,
            "--poster-secondary": theme.secondary,
            "--poster-accent": theme.accent,
            "--poster-surface": theme.surface,
            "--poster-text": theme.text
        },
        children: previewMode === "full" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FullPoster, {
            poster: poster,
            sectionTitleStyle: sectionTitleStyle,
            heroFrameStyle: heroFrameStyle
        }, void 0, false, {
            fileName: "[project]/src/components/poster-canvas.tsx",
            lineNumber: 59,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MobilePosterPages, {
            pages: pages,
            previewMode: previewMode
        }, void 0, false, {
            fileName: "[project]/src/components/poster-canvas.tsx",
            lineNumber: 65,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/poster-canvas.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
function FullPoster({ poster, sectionTitleStyle, heroFrameStyle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "poster-hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "logo-text",
                                children: poster.brand.logoText
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: poster.brand.companyName
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            poster.hero.badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hero-badge",
                                children: text(poster.hero.badge)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 86,
                                columnNumber: 32
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: text(poster.brand.campaign)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero-role",
                                children: text(poster.brand.role)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero-tagline",
                                children: text(poster.brand.tagline)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-statement",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: text(poster.hero.headline)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    poster.hero.subheadline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: text(poster.hero.subheadline)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 92,
                                        columnNumber: 40
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaFrame, {
                        image: poster.hero.image,
                        label: "Hero image",
                        large: true,
                        fancy: true,
                        frameStyle: heroFrameStyle
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "poster-sections poster-sections-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "poster-section split-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                        number: "01",
                                        style: sectionTitleStyle,
                                        title: text(poster.companySection.title)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "section-lead",
                                        children: text(poster.companySection.intro)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletList, {
                                        items: poster.companySection.bullets
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaFrame, {
                                image: poster.companySection.image,
                                label: "Company image"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "poster-section split-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                        number: "02",
                                        style: sectionTitleStyle,
                                        title: text(poster.jobSection.title)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    poster.jobSection.intro ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "section-lead",
                                        children: text(poster.jobSection.intro)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 117,
                                        columnNumber: 40
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletList, {
                                        items: poster.jobSection.bullets
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaFrame, {
                                image: poster.jobSection.image,
                                label: "Job image"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "poster-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                number: "03",
                                style: sectionTitleStyle,
                                title: text(poster.environmentSection.title)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "feature-grid",
                                children: poster.environmentSection.cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCard, {
                                        card: card
                                    }, `${text(card.title)}-${index}`, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "poster-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                number: "04",
                                style: sectionTitleStyle,
                                title: text(poster.growthSection.title)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "timeline-row",
                                children: poster.growthSection.steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineStep, {
                                        step: step,
                                        index: index
                                    }, `${text(step.title)}-${index}`, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            poster.growthSection.traits?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "trait-grid",
                                children: poster.growthSection.traits.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCard, {
                                        card: card
                                    }, `${text(card.title)}-${index}`, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "poster-section split-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                        number: "05",
                                        style: sectionTitleStyle,
                                        title: text(poster.majorSection.title)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletList, {
                                        items: poster.majorSection.majors
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    poster.majorSection.notes?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletList, {
                                        compact: true,
                                        items: poster.majorSection.notes
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-canvas.tsx",
                                        lineNumber: 152,
                                        columnNumber: 50
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaFrame, {
                                image: poster.majorSection.image,
                                label: "Major image"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function MobilePosterPages({ pages, previewMode }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: previewMode === "mobile-slide" ? "mobile-page-track slide" : "mobile-page-track four-up",
        children: pages.map((page, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "mobile-page",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "mobile-page-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: String(index + 1).padStart(2, "0")
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: page.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "Ban xem tren dien thoai"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-page-body",
                        children: page.content
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this)
                ]
            }, `${page.title}-${index}`, true, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 171,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/poster-canvas.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
function buildMobilePages(poster) {
    return [
        {
            title: text(poster.companySection.title),
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-hero-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "logo-text",
                                children: poster.brand.logoText
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: poster.brand.companyName
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero-role",
                                children: text(poster.brand.campaign)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: text(poster.companySection.intro)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaFrame, {
                        image: poster.companySection.image || poster.hero.image,
                        label: "Company image"
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletList, {
                        items: poster.companySection.bullets
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        },
        {
            title: text(poster.jobSection.title),
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    poster.jobSection.intro ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "section-lead",
                        children: text(poster.jobSection.intro)
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 205,
                        columnNumber: 38
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaFrame, {
                        image: poster.jobSection.image,
                        label: "Job image"
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletList, {
                        items: poster.jobSection.bullets
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        },
        {
            title: text(poster.environmentSection.title),
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "feature-grid mobile-feature-grid",
                children: poster.environmentSection.cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCard, {
                        card: card
                    }, `${text(card.title)}-${index}`, false, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 216,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 214,
                columnNumber: 9
            }, this)
        },
        {
            title: text(poster.growthSection.title),
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "timeline-row mobile-timeline-row",
                        children: poster.growthSection.steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineStep, {
                                step: step,
                                index: index
                            }, `${text(step.title)}-${index}`, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 227,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "poster-section mobile-inline-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                number: "05",
                                style: poster.sectionTitleStyle ?? "ribbon",
                                title: text(poster.majorSection.title)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletList, {
                                items: poster.majorSection.majors
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this),
                            poster.majorSection.notes?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletList, {
                                compact: true,
                                items: poster.majorSection.notes
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-canvas.tsx",
                                lineNumber: 233,
                                columnNumber: 50
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-canvas.tsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        }
    ];
}
function SectionHeader({ title, number, style }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `section-header section-header-${style}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "section-number",
                children: number
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/poster-canvas.tsx",
        lineNumber: 251,
        columnNumber: 5
    }, this);
}
function BulletList({ items, compact = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: compact ? "bullet-list compact" : "bullet-list",
        children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: text(item)
            }, `${text(item)}-${index}`, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 268,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/poster-canvas.tsx",
        lineNumber: 266,
        columnNumber: 5
    }, this);
}
function InfoCard({ card }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "feature-card",
        children: [
            card.title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: text(card.title)
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 277,
                columnNumber: 21
            }, this) : null,
            card.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: text(card.description)
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 278,
                columnNumber: 27
            }, this) : null,
            card.bullets?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletList, {
                compact: true,
                items: card.bullets
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 279,
                columnNumber: 31
            }, this) : null,
            card.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaFrame, {
                image: card.image,
                label: "Card image"
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 280,
                columnNumber: 21
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/poster-canvas.tsx",
        lineNumber: 276,
        columnNumber: 5
    }, this);
}
function TimelineStep({ step, index }) {
    const stepColor = step.color || "var(--poster-primary)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "timeline-step",
        style: {
            "--timeline-step-color": stepColor
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineMedia, {
                image: step.image,
                index: index,
                title: step.title
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                className: "timeline-index",
                children: String(index + 1).padStart(2, "0")
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: text(step.title)
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this),
            step.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: text(step.description)
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 302,
                columnNumber: 27
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/poster-canvas.tsx",
        lineNumber: 295,
        columnNumber: 5
    }, this);
}
function TimelineMedia({ image, index, title }) {
    if (image?.url) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "timeline-media-frame",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                alt: image.alt || title,
                className: "timeline-media-image",
                fill: true,
                sizes: "96px",
                src: image.url
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 319,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/poster-canvas.tsx",
            lineNumber: 318,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "timeline-media-fallback",
        "aria-hidden": "true",
        children: String(index + 1).padStart(2, "0")
    }, void 0, false, {
        fileName: "[project]/src/components/poster-canvas.tsx",
        lineNumber: 331,
        columnNumber: 5
    }, this);
}
function MediaFrame({ image, label, large = false, fancy = false, frameStyle }) {
    const className = [
        large ? "media-frame media-frame-large" : "media-frame",
        fancy ? "media-frame-fancy" : "",
        frameStyle ? `media-frame-${frameStyle}` : ""
    ].filter(Boolean).join(" ");
    if (image?.url) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                alt: image.alt || label,
                className: "media-image",
                fill: true,
                sizes: large ? "50vw" : "25vw",
                src: image.url
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 361,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/poster-canvas.tsx",
            lineNumber: 360,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${className} empty`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 374,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: "Dat URL anh ben ngoai vao field `url`"
            }, void 0, false, {
                fileName: "[project]/src/components/poster-canvas.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/poster-canvas.tsx",
        lineNumber: 373,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/poster-assets.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyPosterAssetDefaults",
    ()=>applyPosterAssetDefaults
]);
const heroAssetPaths = {
    automation: "/api/poster-assets/automation.png",
    construction: "/api/poster-assets/construction.png",
    electrical: "/api/poster-assets/eletrical.png",
    electronics: "/api/poster-assets/electronics.png",
    hvac: "/api/poster-assets/havc.png",
    it: "/api/poster-assets/IT.png",
    chemistry: "/api/poster-assets/chemistry.png",
    other: "/api/poster-assets/orther.png"
};
function hasImageUrl(image) {
    return typeof image?.url === "string" && image.url.trim().length > 0;
}
function toAbsoluteUrl(url, origin) {
    if (!origin || !url.startsWith("/")) {
        return url;
    }
    return new URL(url, origin).toString();
}
function getUrlPathname(url, origin) {
    try {
        return new URL(url, origin ?? "http://localhost").pathname;
    } catch  {
        return url;
    }
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
function isManagedHeroAssetUrl(url, origin) {
    const pathname = getUrlPathname(url, origin);
    return Object.values(heroAssetPaths).includes(pathname);
}
function getManagedHeroImage(industry, image, origin) {
    const assetPath = heroAssetPaths[industry];
    const imageUrl = image?.url?.trim();
    if (!imageUrl || isManagedHeroAssetUrl(imageUrl, origin)) {
        return {
            ...image,
            alt: image?.alt ?? `${industry} hero image`,
            url: toAbsoluteUrl(assetPath, origin)
        };
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
        hero: {
            ...poster.hero,
            image: getManagedHeroImage(poster.industry, poster.hero.image, origin)
        },
        companySection: {
            ...poster.companySection,
            image: normalizeImage(poster.companySection.image, origin)
        },
        jobSection: {
            ...poster.jobSection,
            image: normalizeImage(poster.jobSection.image, origin)
        },
        environmentSection: {
            ...poster.environmentSection,
            cards: normalizeItems(poster.environmentSection.cards, origin)
        },
        growthSection: {
            ...poster.growthSection,
            steps: normalizeSteps(poster.growthSection.steps, origin),
            traits: poster.growthSection.traits ? normalizeItems(poster.growthSection.traits, origin) : undefined
        },
        majorSection: {
            ...poster.majorSection,
            image: normalizeImage(poster.majorSection.image, origin)
        }
    };
}
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
            logoText: readString(value.brand.logoText, "brand.logoText"),
            companyName: readString(value.brand.companyName, "brand.companyName"),
            campaign: readString(value.brand.campaign, "brand.campaign"),
            role: readString(value.brand.role, "brand.role"),
            tagline: readString(value.brand.tagline, "brand.tagline")
        },
        hero: {
            image: readImage(value.hero.image, "hero.image"),
            badge: readOptionalString(value.hero.badge, "hero.badge"),
            headline: readString(value.hero.headline, "hero.headline"),
            subheadline: readOptionalString(value.hero.subheadline, "hero.subheadline")
        },
        companySection: {
            title: readString(value.companySection.title, "companySection.title"),
            intro: readString(value.companySection.intro, "companySection.intro"),
            bullets: readStringArray(value.companySection.bullets, "companySection.bullets"),
            image: readImage(value.companySection.image, "companySection.image")
        },
        jobSection: {
            title: readString(value.jobSection.title, "jobSection.title"),
            intro: readOptionalString(value.jobSection.intro, "jobSection.intro"),
            bullets: readStringArray(value.jobSection.bullets, "jobSection.bullets"),
            image: readImage(value.jobSection.image, "jobSection.image")
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
            notes: value.majorSection.notes === undefined ? undefined : readStringArray(value.majorSection.notes, "majorSection.notes"),
            image: readImage(value.majorSection.image, "majorSection.image")
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
"[project]/src/components/poster-studio.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PosterStudio",
    ()=>PosterStudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$poster$2d$canvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/poster-canvas.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/poster-assets.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sample-poster.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/poster-schema.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const initialPoster = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyPosterAssetDefaults"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["samplePoster"]);
const initialJson = JSON.stringify(initialPoster, null, 2);
function PosterStudio() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [jsonOverride, setJsonOverride] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [posterOverride, setPosterOverride] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [previewMode, setPreviewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("full");
    const posterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const incomingPayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const encoded = searchParams.get("data");
        if (!encoded) {
            return {
                poster: null,
                error: ""
            };
        }
        try {
            return {
                poster: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodePosterPayload"])(encoded),
                error: ""
            };
        } catch (payloadError) {
            return {
                poster: null,
                error: payloadError instanceof Error ? payloadError.message : "Khong doc duoc du lieu tu URL."
            };
        }
    }, [
        searchParams
    ]);
    const poster = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyPosterAssetDefaults"])(posterOverride ?? incomingPayload.poster ?? initialPoster);
    const jsonText = jsonOverride ?? JSON.stringify(poster, null, 2);
    const currentError = error || (jsonOverride === null && posterOverride === null ? incomingPayload.error : "");
    const stats = {
        fixedBlocks: 5,
        styleCount: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleOptions"].length
    };
    const applyJson = ()=>{
        try {
            const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyPosterAssetDefaults"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$poster$2d$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePosterDocument"])(JSON.parse(jsonText)));
            setPosterOverride(parsed);
            setJsonOverride(JSON.stringify(parsed, null, 2));
            setError("");
        } catch (jsonError) {
            setError(jsonError instanceof Error ? jsonError.message : "Invalid JSON format.");
        }
    };
    const setStyle = (style)=>{
        const updated = {
            ...poster,
            style
        };
        setPosterOverride(updated);
        setJsonOverride(JSON.stringify(updated, null, 2));
    };
    const setSectionTitleStyle = (sectionTitleStyle)=>{
        const updated = {
            ...poster,
            sectionTitleStyle
        };
        setPosterOverride(updated);
        setJsonOverride(JSON.stringify(updated, null, 2));
    };
    const setHeroFrameStyle = (heroFrameStyle)=>{
        const updated = {
            ...poster,
            heroFrameStyle
        };
        setPosterOverride(updated);
        setJsonOverride(JSON.stringify(updated, null, 2));
    };
    const downloadPoster = async ()=>{
        if (!posterRef.current) {
            return;
        }
        try {
            setIsExporting(true);
            const dataUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPng"])(posterRef.current, {
                cacheBust: true,
                pixelRatio: 2
            });
            const link = document.createElement("a");
            link.download = `${poster.brand.companyName.toLowerCase().replace(/\s+/g, "-")}.png`;
            link.href = dataUrl;
            link.click();
        } catch (exportError) {
            setError(exportError instanceof Error ? exportError.message : "Khong the xuat PNG.");
        } finally{
            setIsExporting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "studio-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "studio-panel studio-intro",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "Next.js Poster Generator"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-studio.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Tao poster tu JSON voi mau nganh va form mobile ro rang"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-studio.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "intro-copy",
                                children: "App nay gom 5 khung co dinh: ten cong ty, noi dung cong viec, moi truong lam viec, dinh huong phat trien, chuyen nganh tuyen dung. Mau se doi theo nganh va co them che do mobile truot hoac tach 4 anh."
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-studio.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-studio.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "intro-actions",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "pill",
                            onClick: ()=>{
                                setJsonOverride(initialJson);
                                setPosterOverride(initialPoster);
                                setError("");
                                setPreviewMode("full");
                            },
                            type: "button",
                            children: "Reset sample"
                        }, void 0, false, {
                            fileName: "[project]/src/components/poster-studio.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-studio.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "intro-actions",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleOptions"].map((style)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: poster.style === style ? "pill active" : "pill",
                                onClick: ()=>setStyle(style),
                                type: "button",
                                children: [
                                    "Style ",
                                    style
                                ]
                            }, style, true, {
                                fileName: "[project]/src/components/poster-studio.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-studio.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "intro-actions",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sectionTitleStyleOptions"].map((style)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: poster.sectionTitleStyle === style ? "pill active" : "pill",
                                onClick: ()=>setSectionTitleStyle(style),
                                type: "button",
                                children: [
                                    "Tieu de ",
                                    style
                                ]
                            }, style, true, {
                                fileName: "[project]/src/components/poster-studio.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-studio.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "intro-actions",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sample$2d$poster$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heroFrameStyleOptions"].map((style)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: poster.heroFrameStyle === style ? "pill active" : "pill",
                                onClick: ()=>setHeroFrameStyle(style),
                                type: "button",
                                children: [
                                    "Hero ",
                                    style
                                ]
                            }, style, true, {
                                fileName: "[project]/src/components/poster-studio.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/poster-studio.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "intro-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: previewMode === "full" ? "pill active" : "pill",
                                onClick: ()=>setPreviewMode("full"),
                                type: "button",
                                children: "Poster day du"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-studio.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: previewMode === "mobile-slide" ? "pill active" : "pill",
                                onClick: ()=>setPreviewMode("mobile-slide"),
                                type: "button",
                                children: "Mobile truot"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-studio.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: previewMode === "mobile-4up" ? "pill active" : "pill",
                                onClick: ()=>setPreviewMode("mobile-4up"),
                                type: "button",
                                children: "Chia 4 anh"
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-studio.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-studio.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "stat-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: stats.fixedBlocks
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-studio.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Fixed blocks"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-studio.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/poster-studio.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "stat-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: stats.styleCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-studio.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Styles"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-studio.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/poster-studio.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "stat-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: poster.industry
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-studio.tsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Industry color"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-studio.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/poster-studio.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "stat-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: poster.sectionTitleStyle ?? "ribbon"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-studio.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Title style"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-studio.tsx",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/poster-studio.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-studio.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/poster-studio.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "studio-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "studio-panel editor-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "JSON Editor"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/poster-studio.tsx",
                                                lineNumber: 229,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Doi `industry` de app tu thay tong mau: automation, construction, electrical, electronics, hvac, it, chemistry, other. Ban cung co the doi `sectionTitleStyle` va `heroFrameStyle`. Hero image mac dinh se tu lay tu folder `image`."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/poster-studio.tsx",
                                                lineNumber: 230,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/poster-studio.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "primary-button",
                                        onClick: applyJson,
                                        type: "button",
                                        children: "Apply JSON"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-studio.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/poster-studio.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                "aria-label": "Poster JSON",
                                className: "json-editor",
                                onChange: (event)=>setJsonOverride(event.target.value),
                                spellCheck: false,
                                value: jsonText
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-studio.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "helper-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Schema chinh: `industry`, `style`, `companySection`, `jobSection`, `environmentSection`, `growthSection`, `majorSection`, `sectionTitleStyle`, `heroFrameStyle`"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-studio.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this),
                                    currentError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "error-text",
                                        children: currentError
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-studio.tsx",
                                        lineNumber: 253,
                                        columnNumber: 29
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/poster-studio.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-studio.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "studio-panel preview-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Poster Preview"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/poster-studio.tsx",
                                                lineNumber: 260,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Poster day du cho desktop, hoac chia thanh cac trang lon de doc tren dien thoai."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/poster-studio.tsx",
                                                lineNumber: 261,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/poster-studio.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "primary-button",
                                        onClick: downloadPoster,
                                        type: "button",
                                        children: isExporting ? "Dang xuat..." : "Export PNG"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-studio.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/poster-studio.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "preview-scroll",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: posterRef,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$poster$2d$canvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PosterCanvas"], {
                                        poster: poster,
                                        previewMode: previewMode
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/poster-studio.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/poster-studio.tsx",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/poster-studio.tsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/poster-studio.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/poster-studio.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/poster-studio.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_0inzxbu._.js.map