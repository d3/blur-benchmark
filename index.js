import * as d3_1 from "a-173202";
import * as d3_2 from "a-65942a";
import * as d3_3 from "a-9693fa";

const d3 = d3_1; // for ancillary functions

const tests = new Map([
  ["173202 (sliced copy)", d3_1],
  ["65942a (circular buffer)", d3_2],
  ["9693fa (review version)", d3_3],
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
  for (let i = 0; i < 10; ++i)
    b === d3_3
      ? b.blur2({ data: medium, width: 100, height: medium.length / 100 }, 1)
      : b.blur2(medium, 100, 1);
  const t = performance.now() - t0;
  total[name] += t;
  console.log(`${name}: ${t.toFixed(1)}ms`);
}

console.log("\n= 2d large");
for (const [name, b] of tests) {
  const large = new Float64Array(1e6).map((_, i) => Math.sin(i));
  const t0 = performance.now();
  for (let i = 0; i < 10; ++i)
    b === d3_3
      ? b.blur2({ data: large, width: 100, height: large.length / 100 }, 1)
      : b.blur2(large, 100, 1);
  const t = performance.now() - t0;
  total[name] += t;
  console.log(`${name}: ${t.toFixed(1)}ms`);
}

console.log("\n= 2d huge");
for (const [name, b] of tests) {
  const huge = new Float64Array(1e7).map((_, i) => Math.sin(i));
  const t0 = performance.now();
  b === d3_3
    ? b.blur2({ data: huge, width: 100, height: huge.length / 100 }, 1)
    : b.blur2(huge, 100, 1);
  const t = performance.now() - t0;
  total[name] += t;
  console.log(`${name}: ${t.toFixed(1)}ms`);
}

console.log("\n====\n");
console.log(total);
