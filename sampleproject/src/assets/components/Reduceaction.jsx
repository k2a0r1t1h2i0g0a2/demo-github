export default function ReducerAction(state,action) {
    console.log("reducer block");
    console.log("state",{state});
    console.log("action",{action});
    switch (action.type) {
      case "ADD":
        return { count: state.count + action.payload };
      case "SUB":
        return { count: state.count - action.payload };
      case "MUL":
        return { count: state.count * action.payload };

      default:
        return { state };
    }
}