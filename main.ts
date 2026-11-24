import { mkdirSync, writeFileSync } from "node:fs";

// Real-Life Patch Notes: The Comedy Changelog
// One line, at most 160 characters: a software patch note for a bug in
// real life / human biology, in the terse register of a real release note.
const ENTRY =
  "v4.2.0: fixed a bug where the thigh reported an incoming call every time the phone was in another room.";

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 160
// characters, not only white space.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 160) {
  throw new Error(`entry is ${chars} characters, must be 1-160`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}
const words = ENTRY.trim().split(/\s+/).length;
if (words < 5 || words > 40) {
  throw new Error(`entry has ${words} words, expected 5-40`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
