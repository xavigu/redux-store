export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  // state of the application
  private state: { [key: string]: any };

  constructor(reducers = {}, initialState = {}) {
    this.subscribers = [];
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }

  get value() {
    return this.state;
  }

  subscribe(fn) {
    this.subscribers = [...this.subscribers, fn];
    this.notify();
    // unsubscribe after you notify the changes
    return () => {
      this.subscribers = this.subscribers.filter((sub) => sub !== fn);
    };
  }

  // update the todo list array
  dispatch(action) {
    this.state = this.reduce(this.state, action);
    this.notify();
  }

  private notify() {
    this.subscribers.forEach((fn) => fn(this.value));
  }

  private reduce(state, action) {
    const newState = {};
    for (const prop in this.reducers) {
      newState[prop] = this.reducers[prop](state[prop], action); // seria igual a newState.todos = this.reducers.todos();
    }
    return newState;
  }
}
