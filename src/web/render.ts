export const DOCUMENT = document;

import { type Component } from "@/web";

/** ## DOM
 * ---
 */
export function insertHtml(
  target: Element,
  where: InsertPosition,
  html: string
) {
  target.insertAdjacentHTML(where, html);
}

export function insert(node: Node, anchor: Element) {
  anchor.parentNode!.insertBefore(node, anchor);
}

export function swap(from: Node, to: Node) {
  const { parentNode, nextSibling } = from;
  if (nextSibling === to) {
    parentNode!.insertBefore(to, from);
  } else {
    to.parentNode!.replaceChild(from, to);
    parentNode!.insertBefore(to, nextSibling);
  }
}

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

  parent.appendChild(content);

  patch(cursor!);
}
