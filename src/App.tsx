import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import LoginStatus from "./state-management/auth/LoginStatus";
import Counter from "./state-management/counter/Counter";
import TaskProvider from "./state-management/tasks/TaskProvider";

function App() {
  return (
    <TaskProvider>
      <Counter></Counter>
      <LoginStatus></LoginStatus>
      <NavBar></NavBar>
      <HomePage></HomePage>
    </TaskProvider>
  );
}

export default App;
