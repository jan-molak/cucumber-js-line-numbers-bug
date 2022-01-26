# Cucumber.js line number filtering bug

This repository demonstrates what I believe to be a bug in the [`PickleLineFilter`](https://github.com/cucumber/cucumber-js/blob/5498b126d0405cf6c13efe1f8ca56b9116dcbcc9/src/pickle_filter.ts#L54).

## The issue

Specifying line number filter works for relative paths, for example:
```
cucumber-js ./features/example.feature:3
```
However, it doesn't work for absolute paths, for example:
```
cucumber-js /Users/jan/cucumber-demo/features/example.feature:3
```

## Reproducing the issue

To see the correct execution when relative paths are used, run:
```
npx cucumber-js -p relative
```

And see one scenario being executed, as expected:

```
Feature: It supports line numbers # features/example.feature:1

  Scenario: The one we're interested in # features/example.feature:3
    Given a step that passes

1 scenario (1 passed)
1 step (1 passed)
```

To reproduce the issue with absolute paths, run:
```
npx cucumber-js -p absolute
```

And see **both** scenarios getting executed instead of just the one we're interested in:

```
Feature: It supports line numbers # features/example.feature:1

  Scenario: The one we're interested in # features/example.feature:3
    Given a step that passes

  Scenario: The one we don't care about # features/example.feature:7
    Given a step that passes

2 scenarios (2 passed)
2 steps (2 passed)
0m00.011s (executing steps: 0m00.001s)
```
