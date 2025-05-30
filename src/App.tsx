import { ConfigProvider, Layout, theme } from "antd";
import "./index.css";
import Navbar from "./component/Navbar/Navbar";
import TodoList from "./component/TodoList/TodoList";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  function toggleTheme() {
    setIsDark((prevState: boolean) => !prevState);
  }
  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Layout
      className="layout"
      >
        <Navbar toggleTheme={toggleTheme} />
        <TodoList />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
