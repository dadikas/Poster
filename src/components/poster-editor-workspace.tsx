"use client";

import { toPng } from "html-to-image";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PosterCanvas } from "@/components/poster-canvas";
import { applyPosterAssetDefaults } from "@/lib/poster-assets";
import { findPosterTemplate } from "@/lib/poster-templates";
import { samplePoster } from "@/lib/sample-poster";
import { loadStoredPoster, saveStoredPoster } from "@/lib/poster-storage";
import { PosterDocument, PosterItem, PosterStep } from "@/lib/poster-types";

function clonePoster(poster: PosterDocument) {
  return structuredClone(poster);
}

function setValueAtPath<T>(value: T, path: string, nextValue: string): T {
  const segments = path.split(".");
  const cloned = structuredClone(value) as any;
  let current: any = cloned;

  for (let index = 0; index < segments.length - 1; index += 1) {
    const key = segments[index];
    const resolvedKey = /^\d+$/.test(key) ? Number(key) : key;
    current = current[resolvedKey];
  }

  const finalKey = segments[segments.length - 1];
  const resolvedFinalKey = /^\d+$/.test(finalKey) ? Number(finalKey) : finalKey;
  current[resolvedFinalKey] = nextValue;

  return cloned as T;
}

function downloadUrl(filename: string, href: string) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = href;
  link.click();
}

function createCard() {
  return {
    title: "Thong tin moi",
    description: "Them noi dung moi tai day",
    bullets: ["Dong 1"],
  } satisfies PosterItem;
}

function createStep(stepNumber: number) {
  return {
    title: `Buoc ${stepNumber}`,
    description: "Mo ta ngan",
    color: "#0f766e",
    image: { url: "", alt: `Step ${stepNumber}` },
  } satisfies PosterStep;
}

type SimpleListPath =
  | "companySection.bullets"
  | "jobSection.bullets"
  | "majorSection.majors"
  | "majorSection.notes";

function readSimpleList(poster: PosterDocument, path: SimpleListPath) {
  switch (path) {
    case "companySection.bullets":
      return [...poster.companySection.bullets];
    case "jobSection.bullets":
      return [...poster.jobSection.bullets];
    case "majorSection.majors":
      return [...poster.majorSection.majors];
    case "majorSection.notes":
      return [...(poster.majorSection.notes ?? [])];
  }
}

function writeSimpleList(poster: PosterDocument, path: SimpleListPath, items: string[]) {
  switch (path) {
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

function buildPosterFromTemplate(template: ReturnType<typeof findPosterTemplate>) {
  const stored = loadStoredPoster();
  return applyPosterAssetDefaults({
    ...stored,
    style: template.style,
    sectionTitleStyle: template.sectionTitleStyle,
    heroFrameStyle: template.heroFrameStyle,
  });
}

export function PosterEditorWorkspace() {
  const searchParams = useSearchParams();
  const posterPartOneRef = useRef<HTMLDivElement>(null);
  const posterPartTwoRef = useRef<HTMLDivElement>(null);
  const template = useMemo(() => findPosterTemplate(searchParams.get("template")), [searchParams]);
  const [poster, setPoster] = useState<PosterDocument>(() => buildPosterFromTemplate(template));
  const [status, setStatus] = useState("");
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    saveStoredPoster(poster);
  }, [poster]);

  const updatePoster = (recipe: (current: PosterDocument) => PosterDocument) => {
    setPoster((current) => {
      return applyPosterAssetDefaults(recipe(current ?? applyPosterAssetDefaults(samplePoster)));
    });
    setStatus("");
  };

  const updateText = (path: string, value: string) => {
    updatePoster((current) => setValueAtPath(current, path, value));
  };

  const updateListItem = (path: string, index: number, value: string) => {
    updatePoster((current) => setValueAtPath(current, `${path}.${index}`, value));
  };

  const addListItem = (path: SimpleListPath) => {
    updatePoster((current) => {
      const next = clonePoster(current);
      const list = readSimpleList(next, path);
      list.push("Noi dung moi");
      writeSimpleList(next, path, list);
      return next;
    });
  };

  const removeListItem = (path: SimpleListPath, index: number) => {
    updatePoster((current) => {
      const next = clonePoster(current);
      const list = readSimpleList(next, path);
      list.splice(index, 1);
      writeSimpleList(next, path, list);
      return next;
    });
  };

  const addEnvironmentCard = () => {
    updatePoster((current) => {
      const next = clonePoster(current);
      next.environmentSection.cards = [...next.environmentSection.cards, createCard()];
      return next;
    });
  };

  const removeEnvironmentCard = (index: number) => {
    updatePoster((current) => {
      const next = clonePoster(current);
      next.environmentSection.cards = next.environmentSection.cards.filter((_, itemIndex) => itemIndex !== index);
      return next;
    });
  };

  const addTraitCard = () => {
    updatePoster((current) => {
      const next = clonePoster(current);
      next.growthSection.traits = [...(next.growthSection.traits ?? []), createCard()];
      return next;
    });
  };

  const removeTraitCard = (index: number) => {
    updatePoster((current) => {
      const next = clonePoster(current);
      next.growthSection.traits = (next.growthSection.traits ?? []).filter((_, itemIndex) => itemIndex !== index);
      return next;
    });
  };

  const addStep = () => {
    updatePoster((current) => {
      const next = clonePoster(current);
      next.growthSection.steps = [...next.growthSection.steps, createStep(next.growthSection.steps.length + 1)];
      return next;
    });
  };

  const removeStep = (index: number) => {
    updatePoster((current) => {
      const next = clonePoster(current);
      next.growthSection.steps = next.growthSection.steps.filter((_, itemIndex) => itemIndex !== index);
      return next;
    });
  };

  const exportPosterParts = async () => {
    if (!posterPartOneRef.current || !posterPartTwoRef.current) {
      return;
    }

    try {
      setIsExporting(true);
      const baseName = poster.brand.companyName.toLowerCase().replace(/\s+/g, "-");
      const [partOne, partTwo] = await Promise.all([
        toPng(posterPartOneRef.current, {
          cacheBust: true,
          pixelRatio: 2,
        }),
        toPng(posterPartTwoRef.current, {
          cacheBust: true,
          pixelRatio: 2,
        }),
      ]);
      downloadUrl(`${baseName}-part-1.png`, partOne);
      downloadUrl(`${baseName}-part-2.png`, partTwo);
      setStatus("Da export 2 khung poster rieng biet.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Khong the export poster.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <main className="studio-shell">
      <section className="editor-topbar studio-panel">
        <div>
          <p className="eyebrow">Poster Editor</p>
          <h1>Sua text truc tiep tren poster va quan ly du lieu ben trai</h1>
          <p className="intro-copy">
            Template dang chon: <strong>{template.name}</strong>. Poster da tach san thanh 2 khung rieng de export thang va dang tin de hon.
          </p>
        </div>
        <div className="intro-actions">
          <Link className="pill link-pill" href="/">
            Quay lai chon JSON va style
          </Link>
          <button className="primary-button" onClick={exportPosterParts} type="button">
            {isExporting ? "Dang export..." : "Export 2 khung"}
          </button>
        </div>
      </section>

      <section className="editor-layout">
        <aside className="studio-panel data-panel">
          <div className="panel-header">
            <div>
              <h2>Data editor</h2>
              <p>Them bot thong tin nhanh o day, con text tren poster co the bam vao de sua truc tiep.</p>
            </div>
          </div>

          <div className="editor-form-grid">
            <label className="field-block">
              <span>Company name</span>
              <input onChange={(event) => updateText("brand.companyName", event.target.value)} value={poster.brand.companyName} />
            </label>
            <label className="field-block">
              <span>Company name (JP)</span>
              <input onChange={(event) => updateText("hero.badge", event.target.value)} value={poster.hero.badge ?? ""} />
            </label>
            <label className="field-block">
              <span>Campaign</span>
              <textarea onChange={(event) => updateText("brand.campaign", event.target.value)} rows={2} value={poster.brand.campaign} />
            </label>
            <label className="field-block">
              <span>Tagline</span>
              <textarea onChange={(event) => updateText("brand.tagline", event.target.value)} rows={2} value={poster.brand.tagline} />
            </label>
          </div>

          <EditorListSection
            items={poster.companySection.bullets}
            onAdd={() => addListItem("companySection.bullets")}
            onChange={(index, value) => updateListItem("companySection.bullets", index, value)}
            onRemove={(index) => removeListItem("companySection.bullets", index)}
            title="Company bullets"
          />

          <EditorListSection
            items={poster.jobSection.bullets}
            onAdd={() => addListItem("jobSection.bullets")}
            onChange={(index, value) => updateListItem("jobSection.bullets", index, value)}
            onRemove={(index) => removeListItem("jobSection.bullets", index)}
            title="Job bullets"
          />

          <EditorCardSection
            cards={poster.environmentSection.cards}
            onAdd={addEnvironmentCard}
            onChange={updateText}
            onRemove={removeEnvironmentCard}
            pathPrefix="environmentSection.cards"
            title="Environment cards"
          />

          <EditorStepSection
            onAdd={addStep}
            onChange={updateText}
            onRemove={removeStep}
            steps={poster.growthSection.steps}
            title="Growth steps"
          />

          <EditorCardSection
            cards={poster.growthSection.traits ?? []}
            onAdd={addTraitCard}
            onChange={updateText}
            onRemove={removeTraitCard}
            pathPrefix="growthSection.traits"
            title="Trait cards"
          />

          <EditorListSection
            items={poster.majorSection.majors}
            onAdd={() => addListItem("majorSection.majors")}
            onChange={(index, value) => updateListItem("majorSection.majors", index, value)}
            onRemove={(index) => removeListItem("majorSection.majors", index)}
            title="Majors"
          />

          <EditorListSection
            items={poster.majorSection.notes ?? []}
            onAdd={() => addListItem("majorSection.notes")}
            onChange={(index, value) => updateListItem("majorSection.notes", index, value)}
            onRemove={(index) => removeListItem("majorSection.notes", index)}
            title="Notes"
          />

          {status ? <p className="status-note">{status}</p> : null}
        </aside>

        <section className="studio-panel preview-panel tall">
          <div className="panel-header">
            <div>
              <h2>Poster live editor</h2>
              <p>Bam truc tiep vao text tren poster de sua. Preview nay da tach thanh 2 khung rieng de export thang, khong con cat anh nua.</p>
            </div>
          </div>

          <div className="preview-scroll preview-scroll-split">
            <div className="poster-frame-stack">
              <div ref={posterPartOneRef}>
                <PosterCanvas editable frame="part-1" onTextChange={updateText} poster={poster} previewMode="full" />
              </div>
              <div ref={posterPartTwoRef}>
                <PosterCanvas editable frame="part-2" onTextChange={updateText} poster={poster} previewMode="full" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

function EditorListSection({
  title,
  items,
  onChange,
  onAdd,
  onRemove,
}: {
  title: string;
  items: string[];
  onChange: (index: number, value: string) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
}) {
  return (
    <section className="data-group">
      <div className="group-header">
        <strong>{title}</strong>
        <button className="pill mini" onClick={onAdd} type="button">
          Them dong
        </button>
      </div>
      <div className="list-editor">
        {items.map((item, index) => (
          <div className="list-editor-row" key={`${title}-${index}`}>
            <textarea onChange={(event) => onChange(index, event.target.value)} rows={2} value={item} />
            <button className="pill mini ghost" onClick={() => onRemove(index)} type="button">
              Xoa
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function EditorCardSection({
  title,
  cards,
  pathPrefix,
  onChange,
  onAdd,
  onRemove,
}: {
  title: string;
  cards: PosterItem[];
  pathPrefix: string;
  onChange: (path: string, value: string) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
}) {
  return (
    <section className="data-group">
      <div className="group-header">
        <strong>{title}</strong>
        <button className="pill mini" onClick={onAdd} type="button">
          Them card
        </button>
      </div>
      <div className="stacked-card-list">
        {cards.map((card, index) => (
          <div className="nested-editor-card" key={`${title}-${index}`}>
            <label className="field-block">
              <span>Title</span>
              <input onChange={(event) => onChange(`${pathPrefix}.${index}.title`, event.target.value)} value={card.title ?? ""} />
            </label>
            <label className="field-block">
              <span>Description</span>
              <textarea onChange={(event) => onChange(`${pathPrefix}.${index}.description`, event.target.value)} rows={2} value={card.description ?? ""} />
            </label>
            <button className="pill mini ghost" onClick={() => onRemove(index)} type="button">
              Xoa card
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function EditorStepSection({
  title,
  steps,
  onChange,
  onAdd,
  onRemove,
}: {
  title: string;
  steps: PosterStep[];
  onChange: (path: string, value: string) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
}) {
  return (
    <section className="data-group">
      <div className="group-header">
        <strong>{title}</strong>
        <button className="pill mini" onClick={onAdd} type="button">
          Them step
        </button>
      </div>
      <div className="stacked-card-list">
        {steps.map((step, index) => (
          <div className="nested-editor-card" key={`${title}-${index}`}>
            <label className="field-block">
              <span>Title</span>
              <input onChange={(event) => onChange(`growthSection.steps.${index}.title`, event.target.value)} value={step.title} />
            </label>
            <label className="field-block">
              <span>Description</span>
              <textarea onChange={(event) => onChange(`growthSection.steps.${index}.description`, event.target.value)} rows={2} value={step.description ?? ""} />
            </label>
            <button className="pill mini ghost" onClick={() => onRemove(index)} type="button">
              Xoa step
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
