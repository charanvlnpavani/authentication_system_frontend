import { RouterProvider } from "react-router";
import "./App.css";
import Router from "./routes/Router";
function App() {
  return <RouterProvider router={Router} />;
}

export default App;
