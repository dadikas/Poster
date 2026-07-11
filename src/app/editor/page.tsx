import { Suspense } from "react";
import { PosterEditorWorkspace } from "@/components/poster-editor-workspace";

export default function EditorPage() {
  return (
    <Suspense fallback={<main className="studio-shell">Dang tai editor poster...</main>}>
      <PosterEditorWorkspace />
    </Suspense>
  );
}
