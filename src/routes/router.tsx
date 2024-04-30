import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";
import NotFound from "../NotFound";
import HeroSection from "../components/hero-section/HeroSection";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '*',
                element:<NotFound />
            },
            {
                path: '/',
                element:<HeroSection />
            }
        ]
    }
]);
export default router;
