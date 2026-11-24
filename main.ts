// Seventeen Syllables of Debugging — make.fun entry.
// Writes one haiku about debugging (5-7-5, 17 syllables) to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const HAIKU = [
  "The breakpoint still waits",
  "through a thousand runs, unhit",
  "no one calls this code",
].join("\n") + "\n";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, HAIKU, "utf8");
