import Image from "next/image";
import type { ElementType, FocusEvent } from "react";
import {
  HeroFrameStyle,
  Industry,
  PosterDocument,
  PosterImage,
  PosterItem,
  PosterStep,
  PreviewMode,
  SectionTitleStyle,
  TextValue,
  ThemeColors,
} from "@/lib/poster-types";
import { industryHeroFrames, industryThemes } from "@/lib/sample-poster";

type PosterCanvasProps = {
  poster: PosterDocument;
  previewMode?: PreviewMode;
  frame?: "full" | "part-1" | "part-2";
  editable?: boolean;
  onTextChange?: (path: string, value: string) => void;
};

function text(value?: TextValue) {
  return value ?? "";
}

function resolveTheme(industry: Industry, overrides?: Partial<ThemeColors>) {
  return { ...industryThemes[industry], ...overrides };
}

function resolveHeroFrameStyle(industry: Industry, override?: HeroFrameStyle) {
  return override ?? industryHeroFrames[industry];
}

export function PosterCanvas({
  poster,
  previewMode = "full",
  frame = "full",
  editable = false,
  onTextChange,
}: PosterCanvasProps) {
  const theme = resolveTheme(poster.industry, poster.theme);
  const pages = buildMobilePages(poster);
  const heroFrameStyle = resolveHeroFrameStyle(
    poster.industry,
    poster.heroFrameStyle,
  );
  const sectionTitleStyle = poster.sectionTitleStyle ?? "ribbon";

  return (
    <article
      className={`poster-canvas poster-style-${poster.style} preview-${previewMode} hero-frame-${heroFrameStyle} section-title-${sectionTitleStyle}`}
      style={
        {
          "--poster-primary": theme.primary,
          "--poster-secondary": theme.secondary,
          "--poster-accent": theme.accent,
          "--poster-surface": theme.surface,
          "--poster-text": theme.text,
        } as React.CSSProperties
      }
    >
      {previewMode === "full" ? (
        <FullPoster
          editable={editable}
          frame={frame}
          onTextChange={onTextChange}
          poster={poster}
          sectionTitleStyle={sectionTitleStyle}
          heroFrameStyle={heroFrameStyle}
        />
      ) : (
        <MobilePosterPages pages={pages} previewMode={previewMode} />
      )}
    </article>
  );
}

function FullPoster({
  poster,
  frame,
  sectionTitleStyle,
  heroFrameStyle,
  editable,
  onTextChange,
}: {
  poster: PosterDocument;
  frame: "full" | "part-1" | "part-2";
  sectionTitleStyle: SectionTitleStyle;
  heroFrameStyle: HeroFrameStyle;
  editable: boolean;
  onTextChange?: (path: string, value: string) => void;
}) {
  const showTopFrame = frame === "full" || frame === "part-1";
  const showBottomFrame = frame === "full" || frame === "part-2";

  return (
    <>
      {showTopFrame ? (
        <>
          <header className="poster-hero">
            <div className="hero-copy">
              {poster.brand.logoImage?.url ? (
                <div className="brand-logo-wrap">
                  <Image
                    alt={poster.brand.logoImage.alt || poster.brand.companyName}
                    className="brand-logo-image"
                    height={36}
                    src={poster.brand.logoImage.url}
                    style={{ width: "auto", height: "auto", maxWidth: "100%" }}
                    width={170}
                  />
                </div>
              ) : (
                <span className="logo-text">{poster.brand.companyName}</span>
              )}
              <EditableText as="h2" editable={editable} onChange={onTextChange} path="brand.companyName" value={poster.brand.companyName} />
              {poster.hero.badge ? (
                <EditableText
                  as="span"
                  className="hero-badge"
                  editable={editable}
                  onChange={onTextChange}
                  path="hero.badge"
                  value={text(poster.hero.badge)}
                />
              ) : null}
              <EditableText as="h3" editable={editable} onChange={onTextChange} path="brand.campaign" value={text(poster.brand.campaign)} />
              <EditableText as="p" className="hero-role" editable={editable} onChange={onTextChange} path="brand.role" value={text(poster.brand.role)} />
              <EditableText as="p" className="hero-tagline" editable={editable} onChange={onTextChange} path="brand.tagline" value={text(poster.brand.tagline)} />
              <div className="hero-statement">
                <EditableText as="strong" editable={editable} inverse onChange={onTextChange} path="hero.headline" value={text(poster.hero.headline)} />
                {poster.hero.subheadline ? (
                  <EditableText
                    as="span"
                    editable={editable}
                    inverse
                    onChange={onTextChange}
                    path="hero.subheadline"
                    value={text(poster.hero.subheadline)}
                  />
                ) : null}
              </div>
            </div>
            <HeroAside heroFrameStyle={heroFrameStyle} poster={poster} />
          </header>

          <section className="poster-sections poster-sections-full">
            <section className="poster-section section-flow" data-export-section="company">
              <SectionHeader editable={editable} number="01" onTextChange={onTextChange} path="companySection.title" style={sectionTitleStyle} title={text(poster.companySection.title)} />
              <EditableText as="p" className="section-lead" editable={editable} onChange={onTextChange} path="companySection.intro" value={text(poster.companySection.intro)} />
              <BulletList editable={editable} items={poster.companySection.bullets} onTextChange={onTextChange} path="companySection.bullets" />
            </section>
          </section>
        </>
      ) : null}

      {showBottomFrame ? (
        <section className="poster-sections poster-sections-full poster-sections-secondary">
          <section className="poster-section section-flow" data-export-section="job">
            <SectionHeader editable={editable} number="02" onTextChange={onTextChange} path="jobSection.title" style={sectionTitleStyle} title={text(poster.jobSection.title)} />
            {poster.jobSection.intro ? (
              <EditableText as="p" className="section-lead" editable={editable} onChange={onTextChange} path="jobSection.intro" value={text(poster.jobSection.intro)} />
            ) : null}
            <BulletList editable={editable} items={poster.jobSection.bullets} onTextChange={onTextChange} path="jobSection.bullets" />
          </section>

          <section className="poster-section">
            <SectionHeader editable={editable} number="03" onTextChange={onTextChange} path="environmentSection.title" style={sectionTitleStyle} title={text(poster.environmentSection.title)} />
            <div className="feature-grid">
              {poster.environmentSection.cards.map((card, index) => (
                <InfoCard
                  card={card}
                  editable={editable}
                  index={index}
                  key={`${text(card.title)}-${index}`}
                  onTextChange={onTextChange}
                  pathPrefix="environmentSection.cards"
                />
              ))}
            </div>
          </section>

          <section className="poster-section">
            <SectionHeader editable={editable} number="04" onTextChange={onTextChange} path="growthSection.title" style={sectionTitleStyle} title={text(poster.growthSection.title)} />
            <div className="timeline-row">
              {poster.growthSection.steps.map((step, index) => (
                <TimelineStep editable={editable} key={`${text(step.title)}-${index}`} onTextChange={onTextChange} step={step} index={index} />
              ))}
            </div>
            {poster.growthSection.traits?.length ? (
              <div className="trait-grid">
                {poster.growthSection.traits.map((card, index) => (
                  <InfoCard
                    card={card}
                    editable={editable}
                    index={index}
                    key={`${text(card.title)}-${index}`}
                    onTextChange={onTextChange}
                    pathPrefix="growthSection.traits"
                  />
                ))}
              </div>
            ) : null}
          </section>

          <section className="poster-section section-flow">
            <SectionHeader editable={editable} number="05" onTextChange={onTextChange} path="majorSection.title" style={sectionTitleStyle} title={text(poster.majorSection.title)} />
            <BulletList editable={editable} items={poster.majorSection.majors} onTextChange={onTextChange} path="majorSection.majors" />
            {poster.majorSection.notes?.length ? (
              <BulletList compact editable={editable} items={poster.majorSection.notes} onTextChange={onTextChange} path="majorSection.notes" />
            ) : null}
          </section>
        </section>
      ) : null}
    </>
  );
}

function HeroAside({
  poster,
  heroFrameStyle,
}: {
  poster: PosterDocument;
  heroFrameStyle: HeroFrameStyle;
}) {
  const summaryItems = [
    { label: "Cong ty", value: `${poster.companySection.bullets.length} y chinh` },
    { label: "Cong viec", value: `${poster.jobSection.bullets.length} dau viec` },
    { label: "Lo trinh", value: `${poster.growthSection.steps.length} buoc phat trien` },
  ];

  return (
    <aside className={`hero-aside hero-frame-${heroFrameStyle}`}>
      <div className="hero-aside-top">
        <span className="hero-aside-label">Thong tin nhanh</span>
        <strong>{poster.brand.companyName}</strong>
        <p>{poster.brand.tagline}</p>
      </div>
      <div className="hero-aside-grid">
        {summaryItems.map((item) => (
          <article className="hero-aside-card" key={item.label}>
            <small>{item.label}</small>
            <strong>{item.value}</strong>
          </article>
        ))}
      </div>
    </aside>
  );
}

function MobilePosterPages({
  pages,
  previewMode,
}: {
  pages: { title: string; subtitle: string; content: React.ReactNode }[];
  previewMode: PreviewMode;
}) {
  return (
    <section className={previewMode === "mobile-slide" ? "mobile-page-track slide" : "mobile-page-track four-up"}>
      {pages.map((page, index) => (
        <article className="mobile-page" key={`${page.title}-${index}`}>
          <header className="mobile-page-header">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{page.title}</strong>
            <small>{page.subtitle}</small>
          </header>
          <div className="mobile-page-body">{page.content}</div>
        </article>
      ))}
    </section>
  );
}

function buildMobilePages(poster: PosterDocument) {
  return [
    {
      title: text(poster.companySection.title),
      subtitle: poster.brand.companyName,
      content: (
        <>
          <div className="mobile-hero-card">
            {poster.brand.logoImage?.url ? (
              <div className="brand-logo-wrap mobile">
                <Image
                  alt={poster.brand.logoImage.alt || poster.brand.companyName}
                  className="brand-logo-image"
                  height={30}
                  src={poster.brand.logoImage.url}
                  style={{ width: "auto", height: "auto", maxWidth: "100%" }}
                  width={140}
                />
              </div>
            ) : (
              <span className="logo-text">{poster.brand.companyName}</span>
            )}
            <h2>{poster.brand.companyName}</h2>
            <p className="hero-role">{text(poster.brand.campaign)}</p>
            <p>{text(poster.companySection.intro)}</p>
          </div>
          <BulletList items={poster.companySection.bullets} />
        </>
      ),
    },
    {
      title: text(poster.jobSection.title),
      subtitle: poster.brand.companyName,
      content: (
        <>
          {poster.jobSection.intro ? <p className="section-lead">{text(poster.jobSection.intro)}</p> : null}
          <BulletList items={poster.jobSection.bullets} />
        </>
      ),
    },
    {
      title: text(poster.environmentSection.title),
      subtitle: poster.brand.companyName,
      content: (
          <div className="feature-grid mobile-feature-grid">
          {poster.environmentSection.cards.map((card, index) => (
            <InfoCard
              card={card}
              index={index}
              key={`${text(card.title)}-${index}`}
              pathPrefix="environmentSection.cards"
            />
          ))}
        </div>
      ),
    },
    {
      title: text(poster.growthSection.title),
      subtitle: poster.brand.companyName,
      content: (
        <>
          <div className="timeline-row mobile-timeline-row">
            {poster.growthSection.steps.map((step, index) => (
              <TimelineStep key={`${text(step.title)}-${index}`} step={step} index={index} />
            ))}
          </div>
          <section className="poster-section mobile-inline-section">
            <SectionHeader number="05" style={poster.sectionTitleStyle ?? "ribbon"} title={text(poster.majorSection.title)} />
            <BulletList items={poster.majorSection.majors} />
            {poster.majorSection.notes?.length ? <BulletList compact items={poster.majorSection.notes} /> : null}
          </section>
        </>
      ),
    },
  ];
}

function SectionHeader({
  title,
  number,
  style,
  editable = false,
  path,
  onTextChange,
}: {
  title: string;
  number: string;
  style: SectionTitleStyle;
  editable?: boolean;
  path?: string;
  onTextChange?: (path: string, value: string) => void;
}) {
  return (
    <header className={`section-header section-header-${style}`}>
      <span className="section-number">{number}</span>
      {path ? (
        <EditableText as="h4" editable={editable} onChange={onTextChange} path={path} value={title} />
      ) : (
        <h4>{title}</h4>
      )}
    </header>
  );
}

function BulletList({
  items,
  compact = false,
  editable = false,
  path,
  onTextChange,
}: {
  items: TextValue[];
  compact?: boolean;
  editable?: boolean;
  path?: string;
  onTextChange?: (path: string, value: string) => void;
}) {
  return (
    <ul className={compact ? "bullet-list compact" : "bullet-list"}>
      {items.map((item, index) => (
        <li key={`${text(item)}-${index}`}>
          {editable && path ? (
            <EditableText as="span" editable onChange={onTextChange} path={`${path}.${index}`} value={text(item)} />
          ) : (
            text(item)
          )}
        </li>
      ))}
    </ul>
  );
}

function InfoCard({
  card,
  index,
  editable = false,
  pathPrefix,
  onTextChange,
}: {
  card: PosterItem;
  index: number;
  editable?: boolean;
  pathPrefix: string;
  onTextChange?: (path: string, value: string) => void;
}) {
  return (
    <article className="feature-card">
      {card.title ? (
        <EditableText
          as="strong"
          editable={editable}
          onChange={onTextChange}
          path={`${pathPrefix}.${index}.title`}
          value={text(card.title)}
        />
      ) : null}
      {card.description ? (
        <EditableText
          as="p"
          editable={editable}
          onChange={onTextChange}
          path={`${pathPrefix}.${index}.description`}
          value={text(card.description)}
        />
      ) : null}
      {card.bullets?.length ? (
        <BulletList compact editable={editable} items={card.bullets} onTextChange={onTextChange} path={`${pathPrefix}.${index}.bullets`} />
      ) : null}
      {card.image ? <MediaFrame image={card.image} label="Card image" /> : null}
    </article>
  );
}

function TimelineStep({
  step,
  index,
  editable = false,
  onTextChange,
}: {
  step: PosterStep;
  index: number;
  editable?: boolean;
  onTextChange?: (path: string, value: string) => void;
}) {
  const stepColor = step.color || "var(--poster-primary)";

  return (
    <article
      className="timeline-step"
      style={{ "--timeline-step-color": stepColor } as React.CSSProperties}
    >
      <TimelineMedia image={step.image} index={index} title={step.title} />
      <small className="timeline-index">{String(index + 1).padStart(2, "0")}</small>
      <EditableText as="strong" editable={editable} onChange={onTextChange} path={`growthSection.steps.${index}.title`} value={text(step.title)} />
      {step.description ? (
        <EditableText as="p" editable={editable} onChange={onTextChange} path={`growthSection.steps.${index}.description`} value={text(step.description)} />
      ) : null}
    </article>
  );
}

function EditableText({
  as: Tag,
  value,
  path,
  onChange,
  editable = false,
  className,
  inverse = false,
}: {
  as: ElementType;
  value: string;
  path: string;
  onChange?: (path: string, value: string) => void;
  editable?: boolean;
  className?: string;
  inverse?: boolean;
}) {
  if (!editable) {
    return <Tag className={className}>{value}</Tag>;
  }

  return (
    <Tag
      className={[className, "editable-text", inverse ? "inverse" : ""].filter(Boolean).join(" ")}
      contentEditable
      onBlur={(event: FocusEvent<HTMLElement>) => onChange?.(path, event.currentTarget.textContent ?? "")}
      suppressContentEditableWarning
    >
      {value}
    </Tag>
  );
}

function TimelineMedia({
  image,
  index,
  title,
}: {
  image?: PosterImage;
  index: number;
  title: string;
}) {
  if (image?.url) {
    return (
      <div className="timeline-media-frame">
        <Image
          alt={image.alt || title}
          className="timeline-media-image"
          fill
          sizes="96px"
          src={image.url}
        />
      </div>
    );
  }

  return (
    <div className="timeline-media-fallback" aria-hidden="true">
      {String(index + 1).padStart(2, "0")}
    </div>
  );
}

function MediaFrame({
  image,
  label,
  large = false,
  fancy = false,
  frameStyle,
}: {
  image?: PosterImage;
  label: string;
  large?: boolean;
  fancy?: boolean;
  frameStyle?: HeroFrameStyle;
}) {
  const className = [
    large ? "media-frame media-frame-large" : "media-frame",
    fancy ? "media-frame-fancy" : "",
    frameStyle ? `media-frame-${frameStyle}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (image?.url) {
    return (
      <div className={className}>
        <Image
          alt={image.alt || label}
          className="media-image"
          fill
          sizes={large ? "50vw" : "25vw"}
          src={image.url}
        />
      </div>
    );
  }

  return (
    <div className={`${className} empty`}>
      <span>{label}</span>
      <small>Dat URL anh ben ngoai vao field `url`</small>
    </div>
  );
}
