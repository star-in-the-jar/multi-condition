# Getting started
To install package from npm registry run:
```bash
npm install multi-condition
```

# How it works?
A component that replaces and extends use of ternary operator in JSX.

## Substitute `A ? B : C`
For example this:
```jsx
{condition ? <ConditionTrue /> : <ConditionFalse />}
```

Can be replaced with:
```jsx
import { Show, If, Else } from 'multi-condition';

<Show>
  <If condition={condition}>
    <ConditionTrue />
  </If>
  <Else>
    <ConditionFalse />
  </Else>
</Show>
```

Or this:
```jsx
{condition ? <ConditionTrue /> : null}
```

Can be replaced with just:
```jsx
<Show>
  <If condition={true}>
    <ConditionTrue />
  </If>
</Show>
```

Or this:
```jsx
{firstCondition
  ? (
    secondCondition
      ? <FirstConditionTrueSecondFalse />
      : <FirstConditionTrueSecondFalse />
  ) : (
    <FirstConditionFalse />
  )
}
```

Can be replaced with:
```jsx
<Show>
  <If condition={firstCondition}>
    <Show>
      <If condition={secondCondition}>
        <FirstConditionTrueSecondTrue />
      </If>
      <Else>
        <FirstConditionTrueSecondFalse />
      </Else>
    </Show>
  </If>
  <Else>
    <FirstConditionFalse />
  </Else>
```

Or this (same thing, less nesting):
```jsx
<Show>
  <If condition={firstCondition && SecondCondition}>
    <FirstConditionTrueSecondTrue />
  </If>
  <If condition={firstCondition && !SecondCondition}>
    <FirstConditionTrueSecondFalse />
  </If>
  <Else>
    <FirstConditionFalse />
  </Else>
</Show>
```

## Extend `A ? B : C`
Additionally, this component presents new option to show more than one branch at the same time:
```jsx
<Show>
  <If condition={firstCondition}>
    <FirstConditionTrue />
  </If>
  <If condition={secondCondition}>
    <SecondConditionTrue />
  </If>
  <Else>
    <BothFalse />
  </Else>
</Show>
```

- If both conditions are true, both `FirstConditionTrue` and `SecondConditionTrue` will be shown.
- If one of them is true, then one component will be shown.
- If both conditions are false, then `BothFalse` will be shown.

## Different syntax

Of course if you prefer you can also import `If`, `Else` and `Show` components together:
```jsx
import * as Show from 'multi-condition';

<Show.Show>
  <Show.If condition={true}>
    <ConditionTrue />
  </Show.If>
  <Show.Else>
    <ConditionFalse />
  </Show.Else>
</Show.Show>
```

# Developing
You can freely clone this repository, create feature branch (e.g. feature/some-name) and run:
```bash
npm install
```
Make some changes that fit you and test it with:
```bash
npm run build
npm link
```
And in another local project where you want to use the package run:
```bash
npm link multi-condition
```
If everything works you can create pull request targeted to develop with your suggested changes.