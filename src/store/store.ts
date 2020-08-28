export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  // state of the application
  private state: { [key: string]: any };

  constructor(reducers = {}, initialState = {}) {
    this.state = initialState;
  }

  get value() {
    return this.state;
  }

  // update the todo list array
  dispatch(action) {
    this.state = {
      ...this.state,
      todos: [...this.state.todos, action.payload],
    };
    console.log(this.state);
  }
  // to get store value console.log(store.value);
}
