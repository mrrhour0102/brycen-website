import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import GuestLayout from "./layouts/GuestLayout";
import NewTopic from "./pages/NewTopic";
import Company from "./pages/Company";
import ServiceSolutionPage from "./pages/ServiceSolution";
import StoryPage from "./pages/Story";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "service-solution",
        element: <ServiceSolutionPage />,
      },
      {
        path: "story",
        element: <StoryPage />,
      },
      {
        path: "company",
        element: <Company />,
      },
      {
        path: "new-topic",
        element: <NewTopic />,
      },
    ],
  },
]);
export default router;
