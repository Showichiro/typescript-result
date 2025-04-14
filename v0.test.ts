import { err, isErr, isOk, ok, type Result } from "./v0.ts";
import { assert, assertEquals } from "jsr:@std/assert";

Deno.test("ok", () => {
  const result = ok(123);
  assertEquals(result, { ok: true, data: 123 });
  assert(isOk(result));
  assertEquals(result.data, 123);
});

Deno.test("err", () => {
  const result = err("error message");
  assertEquals(result, { ok: false, error: "error message" });
  assert(isErr(result));
  assertEquals(result.error, "error message");
});

Deno.test("isOk", () => {
  const okResult = ok(123);
  const errResult = err("error message");
  assert(isOk(okResult));
  assertEquals(isOk(errResult), false);
});

Deno.test("isErr", () => {
  const okResult = ok(123);
  const errResult = err("error message");
  assert(isErr(errResult));
  assertEquals(isErr(okResult), false);
});

Deno.test("Result type", () => {
  const okResult: Result<number, string> = ok(123);
  const errResult: Result<number, string> = err("error message");

  if (isOk(okResult)) {
    assertEquals(okResult.data, 123);
  }

  if (isErr(errResult)) {
    assertEquals(errResult.error, "error message");
  }
});

Deno.test("ok with string", () => {
  const result = ok("hello");
  assertEquals(result, { ok: true, data: "hello" });
  assert(isOk(result));
  assertEquals(result.data, "hello");
});

Deno.test("err with number", () => {
  const result = err(42);
  assertEquals(result, { ok: false, error: 42 });
  assert(isErr(result));
  assertEquals(result.error, 42);
});
