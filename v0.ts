/**
 * @module result
 * @description Represents a result that can be either successful or an error.
 */
/**
 * @description Represents a successful result.
 * @example
 * ```ts
 * import { ok, Result } from "./v0.ts";
 *
 * const result: Result<number, string> = ok(10);
 * ```
 */
export type Ok<T> = {
  ok: true;
  data: T;
};

/**
 * @description Represents an error result.
 * @example
 * ```ts
 * import { err, Result } from "./v0.ts";
 *
 * const result: Result<number, string> = err("error");
 * ```
 */
export type Err<E> = {
  ok: false;
  error: E;
};

/**
 * @description Represents either a successful or an error result.
 * @example
 * ```ts
 * import { ok, err, Result, isOk, isErr } from "./v0.ts";
 *
 * const okResult: Result<number, string> = ok(10);
 * const errResult: Result<number, string> = err("error");
 *
 * if (isOk(okResult)) {
 *   console.log(okResult.data);
 * }
 *
 * if (isErr(errResult)) {
 *   console.log(errResult.error);
 * }
 * ```
 */
export type Result<T, E> = Ok<T> | Err<E>;

/**
 * @description Creates a successful result.
 * @param data The data to wrap in a successful result.
 * @returns An `Ok` result containing the data.
 * @example
 * ```ts
 * import { ok } from "./v0.ts";
 *
 * const result = ok(10);
 * ```
 */
export const ok = <T>(data: T): Ok<T> => ({ ok: true, data });

/**
 * @description Creates an error result.
 * @param error The error to wrap in an error result.
 * @returns An `Err` result containing the error.
 * @example
 * ```ts
 * import { err } from "./v0.ts";
 *
 * const result = err("error");
 * ```
 */
export const err = <E>(error: E): Err<E> => ({ ok: false, error });

/**
 * @description Checks if a result is a successful result.
 * @param result The result to check.
 * @returns `true` if the result is an `Ok` result, `false` otherwise.
 * @example
 * ```ts
 * import { ok, isOk } from "./v0.ts";
 *
 * const result = ok(10);
 *
 * if (isOk(result)) {
 *   console.log("Result is Ok");
 * }
 * ```
 */
export const isOk = <T, E>(result: Result<T, E>): result is Ok<T> => result.ok;

/**
 * @description Checks if a result is an error result.
 * @param result The result to check.
 * @returns `true` if the result is an `Err` result, `false` otherwise.
 * @example
 * ```ts
 * import { err, isErr } from "./v0.ts";
 *
 * const result = err("error");
 *
 * if (isErr(result)) {
 *   console.log("Result is Err");
 * }
 * ```
 */
export const isErr = <T, E>(result: Result<T, E>): result is Err<E> =>
  !result.ok;
