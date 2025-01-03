import { PropsWithChildren } from "react";
import Navbar from "../components/NavBar";

interface Props extends PropsWithChildren {
  navbar: JSX.Element;
  aside: JSX.Element;
  main: JSX.Element;
  footer: JSX.Element;
}

function Layout({ navbar, aside, main, footer, ...others }: Partial<Props>) {
  return (
    <>
      <div className="w-full min-h-[600px] h-auto bg-slate-400 ">
        <nav className="w-full min-h-[40px] bg-red-500">
          {navbar ? navbar : <Navbar />}
        </nav>

        <main className="w-full h-full min-h-[800px] flex">
          <aside className="sm:hidden md:block md:w-2/12 md:h-auto  bg-blue-400">
            {aside}
          </aside>
          <div className="sm:w-full sm:h-auto md:w-10/12 bg-green-400">
            {main}
          </div>
        </main>
        <footer className="relative left-0 bottom-0 w-full min-h-[200px] bg-yellow-600">
          {footer}
        </footer>
      </div>
    </>
  );
}

export default Layout;
