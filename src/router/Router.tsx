import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import PhotoAlbumPage from "../pages/photo-album/PhotoAlbumPage";
import PhotoDetailPage from "../pages/photo-detail/PhotoDetailPage";

const routerData: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/photo-album",
    element: <PhotoAlbumPage />,
  },
  {
    path: "/photo-detail",
    element: <PhotoDetailPage />,
  },
];

const router = createBrowserRouter(routerData);

export default router;
