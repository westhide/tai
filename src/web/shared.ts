export function toSibling(node: Node, interval: number): Node {
  while (interval-- > 0) {
    node = node.nextSibling!;
  }
  return node;
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
