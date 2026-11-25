// The Battery's Last Text to Its Charger
// One line of plain text (<= 200 chars) written to /output/entry.txt:
// the phone battery's final message to the charger it waited for all day.
// Pure Node stdlib only. Deterministic: the same line every run.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LINE =
  "hey. it's me, 1%. i waited by the outlet all day while you charged your vape, your watch, and some guy named Anker. i hope your other phone dies first. love, your battery.";

if ([...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-200 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
try {
  chmodSync("/output/entry.txt", 0o644);
} catch {
  // The grader collects outputs as another user; the file is already
  // readable by default under a normal umask, so a chmod failure is not fatal.
}
