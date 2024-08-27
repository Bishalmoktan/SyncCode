import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import HomePage from "./pages/HomePage.tsx";
import EditorPage from "./pages/EditorPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "/room/:roomId",
        element: <EditorPage />,
      },
    ]
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>
);
