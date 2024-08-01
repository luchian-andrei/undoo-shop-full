import "./App.css";
import { useState } from "react";

// views
import Nav from "./views/Nav";
import Menu from "./views/Menu";
import LogIn from "./views/LogIn";
import Notifications from "./pages/Notifications";
import SearchBar from "./components/General-Use/SearchBar";

// pages
import Footer from "./views/Footer";
import Home from "./pages/Home";
import NewArrivals from "./pages/NewArrivals";
import Clothing from "./pages/Clothing";
import Shoes from "./pages/Shoes";
import Accesories from "./pages/Accesories";
import Brands from "./pages/AllBrands";
import BrandPage from "./pages/SingleBrandPage";
import Sales from "./pages/Sales";
import Favourites from "./pages/Favourites";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Stores from "./pages/Stores";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";

// router
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div className="flex overflow-x-hidden flex-col selection:bg-black selection:text-white">
      <Router>
        <Nav
          openMenu={() => setShowMenu(true)}
          openLogin={() => setShowLogin(true)}
          openNotifications={() => setShowNotifications(true)}
          openSearchBar={() => setShowSearchBar(true)}
        />
        <Menu closeMenu={() => setShowMenu(false)} showMenu={showMenu} />
        <LogIn showLogin={showLogin} closeLogin={() => setShowLogin(false)} />

        {showNotifications && (
          <Notifications
            closeNotifications={() => setShowNotifications(false)}
          />
        )}
        {showSearchBar && (
          <SearchBar closeSearchBar={() => setShowSearchBar(false)} />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-arrivals/:gender" element={<NewArrivals />} />
          <Route path="/clothing/:gender" element={<Clothing />} />
          <Route path="/shoes/:gender" element={<Shoes />} />
          <Route path="/accesories/:gender" element={<Accesories />} />
          <Route path="/brands/:gender" element={<Brands />} />
          <Route path="/:brand/:gender" element={<BrandPage />} />
          <Route path="/sales/:gender" element={<Sales />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
