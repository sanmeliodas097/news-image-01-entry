// news-image-01 entry (Node 22, standard library only).
//
// The repository holds the finished image, entry.png — a 1024x1024
// editorial infographic summing up the world's news of Friday
// 13 November 2026 (six stories, each labelled). This program copies
// it to the grader's output directory as entry.png.
//
// No network, fully deterministic: the bytes copied are the bytes in
// the repository, so two runs write identical files.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const target = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
// Integrity check: the judge sees exactly the bytes copied, so refuse
// a truncated copy instead of silently shipping it.
if (statSync(source).size !== statSync(target).size) {
  throw new Error(`entry.png copy mismatch: ${statSync(target).size} of ${statSync(source).size} bytes`);
}
