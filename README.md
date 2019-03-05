# Effector-react-inject

Inject [Effector](https://github.com/zerobias/effector)'s state to React components simple way

## Usage

#### Connecting to React components

```jsx harmony

export const Todos = inject({ todos, user })(TodoList);
```

`TodoList` component then will receive `todos` and `user` props with state from `todos` and `user` effector stores respectively.

#### Connecting to React class components using decorators

```jsx harmony
@inject({ todos, user })
export class TodoList extends React.Component {
```

[Babel decorators](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)

[TypeScript decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)

#### TypeScript declarations

```typescript jsx
import { inject, Injected } from 'effector-react-inject';

const stores = { todos, user };

type TodoListProps = OwnProps & Injected<typeof stores>;

class TodoList extends React.Component<TodoListProps> {
```

### Motivation

- Classic `redux-connect`-like HOC syntax, can be easily composed.

- Less dependent on Effector's core API, especially if injecting multiple stores.

- Can be used as a decorator for React class components

- Wrappable components can be tested separately
