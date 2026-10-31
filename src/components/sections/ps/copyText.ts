/**
 * Copies text to the clipboard. If the Clipboard API is blocked, selects `fallback`'s
 * text instead so the visitor can press copy themselves. Resolves to what happened.
 */
export async function copyText(text: string, fallback?: HTMLElement | null): Promise<"copied" | "selected" | "failed"> {
  try {
    await navigator.clipboard.writeText(text);
    return "copied";
  } catch {
    if (!fallback) return "failed";
    const range = document.createRange();
    range.selectNodeContents(fallback);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
    return "selected";
  }
}
