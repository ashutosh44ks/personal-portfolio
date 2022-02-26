import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div id="right-sidebar"></div>
      <Footer />
    </>
  );
};

export default Layout;
