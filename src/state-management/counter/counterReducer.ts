interface CounterAction {
  type: "INCREMENT" | "RESET";
}

const counterReducer = (value: number, action: CounterAction) => {
  if (action.type === "INCREMENT") {
    return value + 1;
  }
  if (action.type === "RESET") {
    return 0;
  }
  return value;
};

export default counterReducer;
