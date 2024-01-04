import { Outlet } from "react-router-dom";

function Layout() {
  return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
  );
}

const router = createBrowserRouter([
      {
        path: '/',
        element: <Root />
      },
      {
        path: '/products',
        element: <ProductsList />
      },
    ])