import { useReducer } from "react";
import "./App.css";
import LoginStatus from "./state-management/LoginStatus";
import AuthContext from "./state-management/contexts/AuthContext";
import authReducer from "./state-management/reducers/authReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import taskReducer from "./state-management/reducers/taskReducer";
import TaskContext from "./state-management/contexts/taskContext";

function App() {
  const [user, authDispatch] = useReducer(authReducer, "");
  const [tasks, taskDispatch] = useReducer(taskReducer, []);

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TaskContext.Provider value={{ tasks, dispatch: taskDispatch }}>
        <LoginStatus></LoginStatus>
        <NavBar></NavBar>
        <HomePage></HomePage>
      </TaskContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
