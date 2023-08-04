import "./App.css";
import AuthProvider from "./state-management/AuthProvider";
import HomePage from "./state-management/HomePage";
import LoginStatus from "./state-management/LoginStatus";
import NavBar from "./state-management/NavBar";
import TaskProvider from "./state-management/TaskProvider";

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
