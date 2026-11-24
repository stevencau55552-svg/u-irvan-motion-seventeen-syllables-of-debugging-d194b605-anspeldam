# Drafts — Seventeen Syllables of Debugging

Judge criteria (in order): (1) haiku about debugging, 5-7-5; (2) concrete, fresh
centre image; (3) turn between line 2 and line 3 — the last line reframes what
came before; (4) every word earns its place; (5) reads aloud cleanly.

Banned clichés avoided: "cursor blinking at 3am", "it works on my machine",
"missing semicolon".

## Candidate A — the breakpoint that never fires
```
The breakpoint still waits
through a thousand runs, unhit
no one calls this code
```
Syllables: The(1) break-point(2) still(1) waits(1) = 5 |
through(1) a(1) thou-sand(2) runs(1) un-hit(2) = 7 |
no(1) one(1) calls(1) this(1) code(1) = 5. Total 17.
Turn: the breakpoint is not broken — the code path is dead, so the wait could
never end. Image: concrete (breakpoint, runs), fresh (not the 3am cursor).

## Candidate B — stack trace to a deleted file
```
The trace points nowhere,
to a file long deleted —
I debug a ghost
```
Syllables: The(1) trace(1) points(1) no-where(2) = 5 |
to(1) a(1) file(1) long(1) de-let-ed(3) = 7 |
I(1) de-bug(2) a(1) ghost(1) = 5. Total 17.
Turn: debugging something that no longer exists. Strong image, but "points
nowhere" then "to a file" is slightly muddled, and the ghost image is doing
double duty.

## Candidate C — the log that cannot count
```
The log line prints twelve,
then thirteen, then twelve again —
the count was not mine
```
Syllables: The(1) log(1) line(1) prints(1) twelve(1) = 5 |
then(1) thir-teen(2) then(1) twelve(1) a-gain(2) = 7 |
the(1) count(1) was(1) not(1) mine(1) = 5. Total 17.
Turn: the number belongs to someone/something else. Concrete, but the turn is
cryptic — a judge may read it as confusing rather than reframing.

## Candidate D — green at home, red on the server
```
The tests pass at home,
red on the server each night —
the same code, new lies
```
Syllables: The(1) tests(1) pass(1) at(1) home(1) = 5 |
red(1) on(1) the(1) serv-er(2) each(1) night(1) = 7 |
the(1) same(1) code(1) new(1) lies(1) = 5. Total 17.
Turn: identical code tells different truths. Concrete and relatable, but the
home/server contrast is a common story; less fresh than A.

## Candidate E — the value that moves by itself
```
Same line twice, same code,
yet the value differs now —
a ghost holds the pen
```
Syllables: Same(1) line(1) twice(1) same(1) code(1) = 5 |
yet(1) the(1) val-ue(2) dif-fers(2) now(1) = 7 |
a(1) ghost(1) holds(1) the(1) pen(1) = 5. Total 17.
Turn: an unseen hand rewrites the value (race condition). Vivid, but the ghost
image repeats candidate B's device.

## Candidate F — drowning in prints
```
I print everything,
but the answer keeps hiding —
silence in the noise
```
Syllables: I(1) print(1) ev-ery-thing(3) = 5 |
but(1) the(1) an-swer(2) keeps(1) hid-ing(2) = 7 |
si-lence(2) in(1) the(1) noise(1) = 5. Total 17.
Turn is weak: line 3 summarises rather than reframes. Eliminated first.

## Duels (pairwise, criteria in order)

- F vs A: A wins. F's turn is a summary; A's turn reframes the whole wait.
- C vs A: A wins. C's turn ("the count was not mine") is cryptic; A's turn
  ("no one calls this code") explains the wait exactly and lands cleanly.
- D vs A: A wins. D is concrete but familiar (CI red); A's dead-code-path
  image is fresher, and its turn is sharper than "new lies".
- E vs A: A wins, narrowly. Both have strong turns. E's "ghost holds the pen"
  is vivid but leans on the same ghost device as B, and "yet the value differs
  now" is slightly clunky speech; A's lines all read as plain speech and its
  turn is the most logically satisfying: the waiting was never about timing.
- B vs A: A wins. B's turn is good, but "points nowhere / to a file" is
  muddled where A's three lines are each exact.

## Winner: Candidate A

```
The breakpoint still waits
through a thousand runs, unhit
no one calls this code
```

5-7-5, total 17 syllables, 78 characters including newlines, plain UTF-8 text.
