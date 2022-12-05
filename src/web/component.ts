export type Patch = Func<[cursor: Node]>;

/**
 * ## Component
 */
export class Component {
  html: string;
  patch: Patch;

  constructor(html: string, patch: Patch) {
    this.html = html;
    this.patch = patch;
  }
}

/**
 * ## component$
 */
export function component$(html: string, patch: Patch) {
  return new Component(html, patch);
}
