/**
 * ## Equal check
 * - STRICT_EQUAL
 */
type Equal<in T> = Func<[prev: T, next: T], boolean>;

export const STRICT_EQUAL = <T>(prev: T, next: T) => prev === next;

export type Options<in T> = {
  equal?: Equal<T>;
};

/**
 * ## Signal
 * ---
 */
export interface Signal<T> {
  value: T;
  subscribe: Func<[fn: Fn]>;
  update: Func<[value: T]>;
}

export class SingleSignal<T> implements Signal<T> {
  value: T;

  private effect!: Fn;

  constructor(value: T) {
    this.value = value;
  }

  subscribe(fn: Fn) {
    fn();
    this.effect = fn;
  }

  update(value: T) {
    this.value = value;
    this.effect();
  }
}

/**
 * ## Multi Signal
 * - **Unsafe**: Will not automatically release DOM Ref effect if partially deleted
 */
export class MultiSignal<T> implements Signal<T> {
  value: T;

  private effects = new Set<Fn>();

  constructor(value: T) {
    this.value = value;
  }

  subscribe(fn: Fn) {
    fn();
    this.effects.add(fn);
  }

  update(value: T) {
    this.value = value;
    this.effects.forEach((fn) => fn());
  }
}

/**
 * ## create signal
 */
export function signal<T>(): Signal<T | undefined>;
export function signal<T>(value: T): Signal<T>;
export function signal<T>(value?: T) {
  return new MultiSignal(value);
}

export type MaybeSignal<T> = T | Signal<T>;

/**
 * ## is signal
 * ---
 */
export function isSignal<T>(val: MaybeSignal<T>): val is Signal<T> {
  return val instanceof SingleSignal || val instanceof MultiSignal;
}

/**
 * ## unwrap
 * ---
 */
export function unwrap<T>(val: MaybeSignal<T>) {
  return isSignal(val) ? val.value : val;
}
