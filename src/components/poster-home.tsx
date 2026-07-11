"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { applyPosterAssetDefaults } from "@/lib/poster-assets";
import { defaultPosterTemplate, posterTemplates, type PosterTemplate } from "@/lib/poster-templates";
import { samplePoster } from "@/lib/sample-poster";
import { parsePosterDocument } from "@/lib/poster-schema";
import { saveStoredPoster } from "@/lib/poster-storage";
import { PosterDocument } from "@/lib/poster-types";

const defaultPoster = applyPosterAssetDefaults({
  ...samplePoster,
  style: defaultPosterTemplate.style,
  sectionTitleStyle: defaultPosterTemplate.sectionTitleStyle,
  heroFrameStyle: defaultPosterTemplate.heroFrameStyle,
});

export function PosterHome() {
  const router = useRouter();
  const [poster, setPoster] = useState<PosterDocument>(defaultPoster);
  const [error, setError] = useState("");

  const syncPoster = (nextPoster: PosterDocument) => {
    const normalized = applyPosterAssetDefaults(nextPoster);
    setPoster(normalized);
    setError("");
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    try {
      const content = await file.text();
      const parsed = parsePosterDocument(JSON.parse(content));
      syncPoster(parsed);
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "Khong doc duoc file JSON.");
    }
  };

  const openEditor = (template: PosterTemplate) => {
    const posterWithTemplate = applyPosterAssetDefaults({
      ...poster,
      style: template.style,
      sectionTitleStyle: template.sectionTitleStyle,
      heroFrameStyle: template.heroFrameStyle,
    });

    saveStoredPoster(posterWithTemplate);
    router.push(`/editor?template=${template.id}`);
  };

  return (
    <main className="studio-shell">
      <section className="home-layout">
        <article className="studio-panel upload-panel">
          <div className="panel-header">
            <div>
              <h2>JSON dau vao</h2>
              <p>Chi can nap file JSON dung cau truc, sau do chon layout de vao editor.</p>
            </div>
          </div>

          <label className="upload-dropzone" htmlFor="poster-json-upload">
            <strong>Chon file .json</strong>
            <span>Ho tro upload payload poster co san, uu tien layout text ro rang va doi mau theo nganh nghe.</span>
          </label>
          <input
            className="sr-only"
            id="poster-json-upload"
            accept=".json,application/json"
            onChange={handleFileUpload}
            type="file"
          />

          <div className="helper-row stacked">
            {error ? <strong className="error-text">{error}</strong> : null}
          </div>
        </article>

        <article className="studio-panel template-panel">
          <div className="panel-header">
            <div>
              <h2>Style thumbnail</h2>
              <p>Chon thumbnail nao thi app se vao editor ngay voi bo cuc do.</p>
            </div>
          </div>

          <div className="template-grid">
            {posterTemplates.map((template) => (
              <button
                className="template-card"
                key={template.id}
                onClick={() => openEditor(template)}
                type="button"
              >
                <span
                  className="template-thumbnail"
                  style={
                    {
                      "--template-accent": template.accent,
                      "--template-surface": template.surface,
                    } as React.CSSProperties
                  }
                >
                  <TemplateThumbnail templateId={template.id} />
                </span>
                <strong>{template.name}</strong>
              </button>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}

function TemplateThumbnail({ templateId }: { templateId: PosterTemplate["id"] }) {
  if (templateId === "bold-impact") {
    return (
      <span className="template-thumb template-thumb-bold" aria-hidden="true">
        <span className="template-thumb-kicker" />
        <span className="template-thumb-hero">
          <span className="template-thumb-title lg" />
          <span className="template-thumb-title md" />
          <span className="template-thumb-chip-row">
            <span className="template-thumb-chip" />
            <span className="template-thumb-chip short" />
          </span>
        </span>
        <span className="template-thumb-stack">
          <span className="template-thumb-panel wide" />
          <span className="template-thumb-panel" />
          <span className="template-thumb-panel" />
        </span>
      </span>
    );
  }

  if (templateId === "clean-board") {
    return (
      <span className="template-thumb template-thumb-clean" aria-hidden="true">
        <span className="template-thumb-headline">
          <span className="template-thumb-title md" />
          <span className="template-thumb-title sm" />
        </span>
        <span className="template-thumb-card-grid">
          <span className="template-thumb-card" />
          <span className="template-thumb-card" />
          <span className="template-thumb-card" />
          <span className="template-thumb-card wide" />
        </span>
      </span>
    );
  }

  return (
    <span className="template-thumb template-thumb-split" aria-hidden="true">
      <span className="template-thumb-split-copy">
        <span className="template-thumb-title md" />
        <span className="template-thumb-title sm" />
        <span className="template-thumb-list">
          <span className="template-thumb-line" />
          <span className="template-thumb-line" />
          <span className="template-thumb-line short" />
        </span>
      </span>
      <span className="template-thumb-split-side">
        <span className="template-thumb-badge" />
        <span className="template-thumb-mini-stack">
          <span className="template-thumb-mini-card" />
          <span className="template-thumb-mini-card" />
        </span>
      </span>
    </span>
  );
}
