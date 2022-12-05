export interface Ref<T extends Node> {
  value?: T;
}

export function ref<T extends Node = Element>(): Ref<T> {
  return {};
}
