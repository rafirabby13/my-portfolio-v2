import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import ProjectDetail from "../components/ProjectDetail.jsx";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: '/projectDetail',
        element: <ProjectDetail/>
    }
  ]);