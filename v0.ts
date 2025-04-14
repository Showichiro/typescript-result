/**
 * @description Represents a successful result.
 */
export type Ok<T> = {
  ok: true;
  data: T;
};

/**
 * @description Represents an error result.
 */
export type Err<E> = {
  ok: false;
  error: E;
};

/**
 * @description Represents either a successful or an error result.
 */
export type Result<T, E> = Ok<T> | Err<E>;

/**
 * @description Creates a successful result.
 */
export const ok = <T>(data: T): Ok<T> => ({ ok: true, data });

/**
 * @description Creates an error result.
 */
export const err = <E>(error: E): Err<E> => ({ ok: false, error });

/**
 * @description Checks if a result is a successful result.
 */
export const isOk = <T, E>(result: Result<T, E>): result is Ok<T> => result.ok;

/**
 * @description Checks if a result is an error result.
 */
export const isErr = <T, E>(result: Result<T, E>): result is Err<E> =>
  !result.ok;
