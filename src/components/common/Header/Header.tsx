import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import Navbar from "./Navbar/Navbar";
import TopPanel from "./TopPanel/TopPanel";

const Header = () => {
  return (
    <header>
      <TopPanel />
      <Navbar />
      <Breadcrumbs />
    </header>
  );
};

export default Header;
