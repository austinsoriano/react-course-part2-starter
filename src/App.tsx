import "./App.css";
import AuthProvider from "./state-management/auth/AuthProvider";
import HomePage from "./state-management/HomePage";
import LoginStatus from "./state-management/auth/LoginStatus";
import NavBar from "./state-management/NavBar";
import TaskProvider from "./state-management/tasks/TaskProvider";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <LoginStatus></LoginStatus>
        <NavBar></NavBar>
        <HomePage></HomePage>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
