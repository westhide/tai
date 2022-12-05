/**
 * ## Reference
 * - [ts-essentials](https://github.com/ts-essentials/ts-essentials/blob/master/lib/types.ts)
 * - [ts-toolbelt](https://github.com/millsp/ts-toolbelt)
 * - [type-challenges](https://github.com/type-challenges/type-challenges)
 */

type Fn<out T = void> = () => T;

type Func<in P extends ReadonlyArray = [], out R = void> = (...args: P) => R;
