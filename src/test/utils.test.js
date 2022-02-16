import { mergeObjects } from "../utils.js";
import p from "../game/playbooks.js";

describe("mergeObjects", () => {
  it("should merge arrays", () => {
    const a = [1];
    const b = [2];
    const c = mergeObjects(a, b);

    expect(c).toEqual([1, 2]);
  });

  it("should merge simple objects", () => {
    const a = { a: true };
    const b = { b: true };
    const c = mergeObjects(a, b);

    expect(c).toEqual({ a: true, b: true });
  });

  it("should merge one-way nested objects", () => {
    const a = { a: true, b: {} };
    const b = { c: true };
    const c = mergeObjects(a, b);

    expect(c).toEqual({ a: true, b: {}, c: true });
  });

  it("should merge two-way nested objects", () => {
    const a = { a: true, b: {} };
    const b = { c: true, d: {} };
    const c = mergeObjects(a, b);

    expect(c).toEqual({ a: true, b: {}, c: true, d: {} });
  });

  it("should merge arbitrarily nested objects with collisions", () => {
    const a = { a: { foo: ["bar"] } };
    const b = { a: { foo: ["baz"] } };
    const c = mergeObjects(a, b);

    expect(c).toEqual({ a: { foo: ["bar", "baz"] } });
  });
});
