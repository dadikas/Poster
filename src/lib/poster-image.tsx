import { ImageResponse } from "next/og";
import { industryThemes } from "@/lib/sample-poster";
import { PosterDocument, ThemeColors } from "@/lib/poster-types";

type PosterImageOptions = {
  width?: number;
  height?: number;
};

function resolveTheme(poster: PosterDocument): ThemeColors {
  return {
    ...industryThemes[poster.industry],
    ...poster.theme,
  };
}

function joinItems(items: string[], maxItems: number) {
  return items.slice(0, maxItems);
}

export function renderPosterImage(
  poster: PosterDocument,
  { width = 1200, height = 1800 }: PosterImageOptions = {},
) {
  const theme = resolveTheme(poster);
  const primaryGradient = `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`;
  const softSurface = `linear-gradient(180deg, white, ${theme.surface})`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: softSurface,
          color: theme.text,
          fontFamily: "Arial",
          padding: "48px",
          gap: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "32px",
            background: "#ffffff",
            border: `4px solid ${theme.primary}`,
            boxShadow: `0 20px 50px ${theme.primary}33`,
            minHeight: "380px",
            padding: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "24px",
              padding: "34px",
              borderRadius: "28px",
              background: primaryGradient,
              color: "#ffffff",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "20px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                {poster.brand.logoImage?.url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    alt={poster.brand.logoImage.alt ?? poster.brand.companyName}
                    src={poster.brand.logoImage.url}
                    style={{ width: "108px", height: "23px", objectFit: "contain", objectPosition: "left center" }}
                  />
                ) : (
                  <span>{poster.brand.companyName}</span>
                )}
                <span
                  style={{
                    display: "flex",
                    padding: "6px 14px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.18)",
                    fontSize: "16px",
                  }}
                >
                  {poster.hero.badge ?? poster.industry.toUpperCase()}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ fontSize: "54px", fontWeight: 800, lineHeight: 1.05 }}>
                  {poster.brand.companyName}
                </div>
                <div style={{ fontSize: "30px", fontWeight: 700, lineHeight: 1.2 }}>
                  {poster.brand.campaign}
                </div>
                <div style={{ fontSize: "22px", lineHeight: 1.35, opacity: 0.95 }}>
                  {poster.brand.role}
                </div>
                <div style={{ fontSize: "20px", lineHeight: 1.35, opacity: 0.88 }}>
                  {poster.brand.tagline}
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                width: "320px",
              }}
            >
              {poster.hero.image?.url ? (
                <div
                  style={{
                    display: "flex",
                    borderRadius: "24px",
                    overflow: "hidden",
                    border: "2px solid rgba(255,255,255,0.28)",
                    background: "rgba(255,255,255,0.14)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={poster.hero.image.alt ?? "Hero image"}
                    src={poster.hero.image.url}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ) : null}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "22px 24px",
                  borderRadius: "24px",
                  background: "rgba(255,255,255,0.12)",
                }}
              >
                <div style={{ fontSize: "30px", fontWeight: 800, lineHeight: 1.2 }}>
                  {poster.hero.headline}
                </div>
                {poster.hero.subheadline ? (
                  <div style={{ fontSize: "20px", lineHeight: 1.4, opacity: 0.95 }}>
                    {poster.hero.subheadline}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "24px",
            flexGrow: 1,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <SectionCard
              index="01"
              title={poster.companySection.title}
              theme={theme}
              body={poster.companySection.intro}
              bullets={joinItems(poster.companySection.bullets, 4)}
            />
            <SectionCard
              index="02"
              title={poster.jobSection.title}
              theme={theme}
              body={poster.jobSection.intro}
              bullets={joinItems(poster.jobSection.bullets, 5)}
            />
            <SectionCard
              index="03"
              title={poster.environmentSection.title}
              theme={theme}
              bullets={poster.environmentSection.cards
                .slice(0, 4)
                .map((card) => `${card.title ?? ""}${card.description ? `: ${card.description}` : ""}`.trim())}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <SectionCard
              index="04"
              title={poster.growthSection.title}
              theme={theme}
              bullets={poster.growthSection.steps
                .slice(0, 5)
                .map((step) => `${step.title}${step.description ? ` - ${step.description}` : ""}`)}
            />
            <SectionCard
              index="05"
              title={poster.majorSection.title}
              theme={theme}
              bullets={joinItems(poster.majorSection.majors, 6)}
              notes={poster.majorSection.notes?.slice(0, 3)}
            />
            <InsightPanel poster={poster} theme={theme} />
          </div>
        </div>
      </div>
    ),
    {
      width,
      height,
    },
  );
}

function InsightPanel({
  poster,
  theme,
}: {
  poster: PosterDocument;
  theme: ThemeColors;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "28px",
        background: "#ffffff",
        border: `2px solid ${theme.primary}33`,
        minHeight: "280px",
        padding: "22px",
        gap: "18px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: theme.primary,
          fontSize: "18px",
          fontWeight: 700,
        }}
      >
        <span>Thong tin nhanh</span>
        <span>{poster.style.toUpperCase()}</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          borderRadius: "22px",
          padding: "22px",
          background: `linear-gradient(160deg, ${theme.surface}, #ffffff)`,
        }}
      >
        <span style={{ fontSize: "34px", fontWeight: 800, color: theme.primary }}>
          {poster.industry.toUpperCase()}
        </span>
        <span style={{ fontSize: "20px", lineHeight: 1.4, color: theme.text }}>
          {poster.brand.tagline}
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {poster.majorSection.majors.slice(0, 4).map((major, index) => (
          <div
            key={`${major}-${index}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "18px",
              color: theme.text,
            }}
          >
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "999px",
                background: theme.accent,
                flexShrink: 0,
              }}
            />
            <span>{major}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionCard({
  index,
  title,
  theme,
  body,
  bullets,
  notes,
}: {
  index: string;
  title: string;
  theme: ThemeColors;
  body?: string;
  bullets?: string[];
  notes?: string[];
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        borderRadius: "28px",
        background: "#ffffff",
        border: `2px solid ${theme.primary}22`,
        padding: "24px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <div
          style={{
            display: "flex",
            minWidth: "56px",
            height: "56px",
            borderRadius: "18px",
            background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`,
            color: "#ffffff",
            fontSize: "22px",
            fontWeight: 800,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {index}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "28px",
            fontWeight: 800,
            color: theme.secondary,
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>
      </div>

      {body ? (
        <div style={{ display: "flex", fontSize: "20px", lineHeight: 1.4, color: theme.text }}>
          {body}
        </div>
      ) : null}

      {bullets?.length ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {bullets.map((item, indexValue) => (
            <div
              key={`${item}-${indexValue}`}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                fontSize: "19px",
                lineHeight: 1.35,
              }}
            >
              <span style={{ color: theme.primary, fontWeight: 800 }}>•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      ) : null}

      {notes?.length ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            marginTop: "4px",
            padding: "14px 16px",
            borderRadius: "18px",
            background: `${theme.primary}10`,
            color: theme.secondary,
            fontSize: "17px",
          }}
        >
          {notes.map((note, indexValue) => (
            <span key={`${note}-${indexValue}`}>{note}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
