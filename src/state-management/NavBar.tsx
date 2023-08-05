import LoginStatus from "./auth/LoginStatus";
import useCounterStore from "./counter/store";
import useTask from "./tasks/useTask";

const NavBar = () => {
  const { tasks } = useTask();
  const { counter } = useCounterStore();

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
