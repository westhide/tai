export const DOCUMENT = document;

import { type Component } from "@/web";

/** ## render
 * ---
 */
export function render(component: Component, parent: Element) {
  const { html, patch } = component;

  const tmpl = DOCUMENT.createElement("template");
  tmpl.innerHTML = html;

  const {
    content,
    content: { firstChild: cursor },
  } = tmpl;

  patch(cursor!);

  parent.appendChild(content);
}
