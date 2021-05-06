import { TaskProvider } from "./task";

const Providers = ({ children }) => {
  return (
    <>
      <TaskProvider>{children}</TaskProvider>
    </>
  );
};

export default Providers;
