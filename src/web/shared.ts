export function toSibling(node: Node, interval: number): Node {
  while (interval-- > 0) {
    node = node.nextSibling!;
  }
  return node;
}

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

// export function defineComponent(
//   name: string,
//   component: Func<[Props], Component>,
//   options: ElementDefinitionOptions & Partial<ShadowRootInit> = {}
// ) {
//   const { mode = "open", delegatesFocus, slotAssignment } = options;
//
//   class Constructor extends HTMLElement {
//     constructor() {
//       super();
//       const shadow = this.attachShadow({
//         mode,
//         delegatesFocus,
//         slotAssignment,
//       });
//       const instance = component({ host: this });
//
//       shadow.appendChild(instance.adoptNode);
//     }
//   }
//
//   customElements.define(name, Constructor, options);
// }
