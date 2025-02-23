import { PropsWithChildren } from "react";
import Navbar from "../components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/Login";
import EditDelegations from "../pages/EditDelegations";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";

interface Props extends PropsWithChildren {
  navbar: JSX.Element;
  aside: JSX.Element;
  main: JSX.Element;
  footer: JSX.Element;
}

function Layout({ navbar, aside, main, footer, ...others }: Partial<Props>) {
  return (
    <>
      <BrowserRouter>
        <div className="w-full min-h-[600px] h-auto bg-slate-200 ">
          <nav className="w-full min-h-[40px] bg-gray-700">
            {navbar ? navbar : <Navbar />}
          </nav>

          <main className="w-full h-full min-h-[800px] flex">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/aboutme" element={<AboutMe />} />

              <Route path="/edit/:id" element={<EditDelegations />} />
              <Route path="/create" element={<EditDelegations />} />
            </Routes>
          </main>
          <footer className="relative left-0 bottom-0 w-full min-h-[200px] bg-yellow-600">
            {footer}
          </footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Layout;
