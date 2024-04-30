import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <div className="min-h-screen grid grid-rows-[100px_1fr_auto]">
        <header>Header</header>
        <main>
          <Outlet />
        </main>
        <footer>Footer</footer>
      </div>
    </>
  );
}
export default MainLayout;
