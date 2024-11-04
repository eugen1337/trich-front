import { MainPage } from "./pages/MainPage";
import { Footer } from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SectionPage } from "./pages/SectionPage";
import { BasePage } from "./pages/BasePage";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <MainPage />
        <Footer />
      </>
    ),
  },
  {
    path: "*",
    element: <BasePage />,
    children: [{ path: "sections/:id", element: <SectionPage /> }],
  },
]);

export default App;
