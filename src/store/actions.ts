// actions constants
export const ADD_TODO = "[Todo] ADD TODO";
export const REMOVE_TODO = "[Todo] REMOVE TODO";

// actions creators
export class AddTodo {
  readonly type = ADD_TODO;
  constructor(private payload: any) {}
}
// actions creators
export class RemoveTodo {
  readonly type = REMOVE_TODO;
  constructor(private payload: any) {}
}
