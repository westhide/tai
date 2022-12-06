import { type Component, component$ } from "@/web";

type Options<T> = {
  each: T[];
  item: Func<[value: T, index: number], Component>;
};

export function List<T>({ each, item }: Options<T>) {
  let tmpl = "";
  const patches = each.map((value, index) => {
    const { html, patch } = item(value, index);
    tmpl += html;
    return patch;
  });

  return component$(`<div>${tmpl}</div>`, (cursor) => {
    const children = cursor.childNodes;
    for (let i = 0; i < children.length; i++) {
      patches[i]!(children[i]!);
    }
  });
}
