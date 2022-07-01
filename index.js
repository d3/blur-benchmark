import * as d3_1 from "a-173202";
import * as d3_2 from "a-65942a";

const d3 = d3_1; // for ancillary functions

const tests = new Map([
  ["173202 (sliced copy)", d3_1],
  ["65942a (circular buffer)", d3_2],
]);

const total = Object.fromEntries(Array.from(tests, ([name]) => [name, 0]));

console.log("= 1d medium");
for (const [name, b] of tests) {
  const medium = new Float32Array(1e5).map((_, i) => Math.sin(i));
  const t0 = performance.now();
  for (let i = 0; i < 250; ++i) b.blur1(medium, 1);
  const t = performance.now() - t0;
  total[name] += t;
  console.log(`${name}: ${t.toFixed(1)}ms`);
}

console.log("\n= 1d large");
for (const [name, b] of tests) {
  const large = new Float64Array(1e6).map((_, i) => Math.sin(i));
  const t0 = performance.now();
  for (let i = 0; i < 25; ++i) b.blur1(large, 1);
  const t = performance.now() - t0;
  total[name] += t;
  console.log(`${name}: ${t.toFixed(1)}ms`);
}

console.log("\n= 1d huge");
for (const [name, b] of tests) {
  const huge = new Float64Array(1e7).map((_, i) => Math.sin(i));
  const t0 = performance.now();
  for (let i = 0; i < 3; ++i) b.blur1(huge, 1);
  const t = performance.now() - t0;
  total[name] += t;
  console.log(`${name}: ${t.toFixed(1)}ms`);
}

console.log("\n= 2d medium");
for (const [name, b] of tests) {
  const medium = new Float32Array(1e5).map((_, i) => Math.sin(i));
  const t0 = performance.now();
  for (let i = 0; i < 100; ++i) b.blur2(medium, 100, 1);
  const t = performance.now() - t0;
  total[name] += t;
  console.log(`${name}: ${t.toFixed(1)}ms`);
}

console.log("\n= 2d large");
for (const [name, b] of tests) {
  const large = new Float64Array(1e6).map((_, i) => Math.sin(i));
  const t0 = performance.now();
  for (let i = 0; i < 10; ++i) b.blur2(large, 100, 1);
  const t = performance.now() - t0;
  total[name] += t;
  console.log(`${name}: ${t.toFixed(1)}ms`);
}

console.log("\n= 2d huge");
for (const [name, b] of tests) {
  const huge = new Float64Array(1e7).map((_, i) => Math.sin(i));
  const t0 = performance.now();
  b.blur2(huge, 100, 1);
  const t = performance.now() - t0;
  total[name] += t;
  console.log(`${name}: ${t.toFixed(1)}ms`);
}

console.log("\n====\n");
console.log(total);
