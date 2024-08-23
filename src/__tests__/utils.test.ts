import assert from "node:assert";
import test from "node:test";
import { add } from "../util.js";

test("should add two numbers", () => {
  assert.strictEqual(add(40, 2), 42);
});
