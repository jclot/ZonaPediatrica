import { useEffect, ReactNode } from "react";
import VideoPopup from "../components/VideoPopup";
import { activeNavMenu, animation, stickyNav } from "../utils";
import Footer from "./Footer";
import Header from "./header/Header";
import MobileMenu from "./header/MobileMenu";
import ScrollTop from "./ScrollTop";

interface LayoutProps {
  children: ReactNode;
  noHeader?: boolean;
  noFooter?: boolean;
  bodyClass?: string | string[];
}

const Layout = ({ children, noHeader = false, noFooter = false, bodyClass = "" }: LayoutProps) => {
  useEffect(() => {
    animation();
    stickyNav();
    const body = document.querySelector("body");
    if (body) {
      if (Array.isArray(bodyClass)) {
        body.classList.add(...bodyClass);
      } else {
        body.classList.add(bodyClass);
      }
    }
    activeNavMenu();
  }, [bodyClass]);

  return (
    <div id="wrapper">
      <VideoPopup />
      <div id="page" className="clearfix">
        {!noHeader && <Header />}
        <MobileMenu />
        {children}
        {!noFooter && <Footer />}
      </div>
      <ScrollTop />
    </div>
  );
};
export default Layout;
