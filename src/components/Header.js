import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { MdClear } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { getUserCart } from "../features/user/userSlice";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
import { getAProduct } from "../features/products/productSlilce";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartState = useSelector((state) => state?.auth?.cartProducts) || [];
  const authState = useSelector((state) => state?.auth);
  const productState = useSelector((state) => state?.product?.product) || [];

  const [showCategories, setShowCategories] = useState(false);
  const toggleCategories = () => {
    setShowCategories((prev) => !prev);
  };

  const [total, setTotal] = useState(0);
  const [category, setCategory] = useState([]);
  const [productOpt, setProductOpt] = useState([]);

  const getTokenFromLocalStorage = JSON.parse(localStorage.getItem("customer") || "{}");
  const config2 = {
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage?.token || ""}`,
      Accept: "application/json",
    },
  };

  useEffect(() => {
    dispatch(getUserCart(config2));
  }, [dispatch]);

  useEffect(() => {
    let sum = cartState.reduce((acc, item) => acc + item.quantity * item.price, 0);
    setTotal(sum);
  }, [cartState]);

  useEffect(() => {
    const data = productState.map((item, index) => ({
      id: index,
      prod: item?._id,
      name: item?.title,
    }));
    setProductOpt(data);
  }, [productState]);

  useEffect(() => {
    const uniqueCategories = [...new Set(productState.map((item) => item.category))];
    setCategory(uniqueCategories);
  }, [productState]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      {/* Top Strip */}
      <header className="bg-gray-800 py-1 text-white text-sm overflow-hidden">
        <div className="container mx-auto flex justify-between items-center px-4">
          <p className="whitespace-nowrap animate-marquee">
            Free Shipping Over Rs.100
            <a href="tel:+91 9999999999" className="text-blue-400 ml-12">
              Hotline: +91 9999999999
            </a>
          </p>
        </div>
      </header>

      {/* Main Header */}
      <header className="bg-gray-900 py-1 text-white hidden sm:flex">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <h2 className="text-xl font-semibold animate-slide-in-right">
            <Link to="/">Electric Corner</Link>
          </h2>

          {/* Search Bar */}
          <div className="flex w-[600px] py-2 sm: w-auto">
            <Typeahead
              id="search-bar"
              onChange={(selected) => {
                if (selected.length > 0) {
                  navigate(`/product/${selected[0]?.prod}`);
                  dispatch(getAProduct(selected[0]?.prod));
                }
              }}
              options={productOpt}
              labelKey="name"
              placeholder="Search for Products..."
            />
          </div>

          {/* Icons and Links */}
          <div className="flex gap-6">
            <Link to="/wishlist" className="flex items-center gap-2">
              <img src={wishlist} alt="wishlist" className="w-6" />
              <p>Wishlist</p>
            </Link>

            <Link to={authState?.user ? "/my-profile" : "/login"} className="flex items-center gap-2">
              <img src={user} alt="user" className="w-6" />
              <p>{authState?.user ? `Welcome, ${authState.user.firstname}` : "Login"}</p>
            </Link>

            <Link to="/cart" className="flex items-center gap-2">
              <img src={cart} alt="cart" className="w-6" />
              <div>
                <span className="bg-white text-gray-900 px-2 py-1 rounded">{cartState.length}</span>
                <p>Rs. {total}</p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation Menu */}
      <header className="bg-gray-800 py-2 relative">
        <div className="container mx-auto flex justify-between px-4">
          {/* Category Dropdown */}
          <div className="relative hidden sm:flex">
            {/* Search Icon - Click to Show/Hide Categories */}
            <button onClick={toggleCategories} className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded transition-transform duration-300">
              <img src={menu} alt="menu" className={`w-6 transform ${showCategories ? "rotate-90" : "rotate-0"}`} />
              <span className="text-white">Categories</span>
            </button>

            {/* Dropdown Menu - Visible When 'showCategories' is True */}
            {showCategories && (
              <ul className="absolute left-0 top-full w-full bg-gray-700 text-white rounded shadow-lg z-50">
                {category &&
                  category.map((cat, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-gray-600 cursor-pointer">
                      <button
                        onClick={() => {
                          navigate(`/product?category=${cat}`);
                          setShowCategories(false); // Close dropdown after selection
                        }}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
              </ul>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-8 text-white hidden sm:flex">
            <NavLink to="/" className="text-xl hover:text-blue-400" onClick={() => setShowCategories(false)}>Home</NavLink>
            <NavLink to="/product" className="text-xl hover:text-blue-400" onClick={() => setShowCategories(false)}>Our Store</NavLink>
            <NavLink to="/my-orders" className="text-xl hover:text-blue-400" onClick={() => setShowCategories(false)}>My Orders</NavLink>
            <NavLink to="/blogs" className="text-xl hover:text-blue-400" onClick={() => setShowCategories(false)}>Blogs</NavLink>
            <NavLink to="/contact" className="text-xl hover:text-blue-400" onClick={() => setShowCategories(false)}>Contact</NavLink>
          </nav>
          <nav>
            {authState?.user && <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-700 hidden sm:flex" onClick={() => { handleLogout(); setShowCategories(false); }}>Log Out</button>}
          </nav>
          <span className="text-white text-2xl font-bold sm:hidden">Electric Corner</span>
          {/* Toggle Button for Small Screens */}
          <button onClick={toggleCategories} className="sm:hidden flex items-center justify-end ml-auto">
            <RiMenu2Line className="text-white text-3xl" />
          </button>
        </div>

        {/* Dropdown Menu for Small Screens */}
        {showCategories && (
          <div className="sm:hidden fixed inset-0 bg-black text-white rounded z-50">
            <div className="flex justify-end p-4">
              <button onClick={toggleCategories}>
                <MdClear className="text-white text-3xl" />
              </button>
            </div>
            <nav className="flex flex-col text-2xl mt-24">
              <NavLink to="/" className="flex justify-center p-3 over:text-blue-400 " onClick={() => setShowCategories(false)}>Home</NavLink>
              <NavLink to="/product" className="flex justify-center p-3 hover:text-blue-400" onClick={() => setShowCategories(false)}>Our Store</NavLink>
              <NavLink to="/my-orders" className="flex justify-center p-3 hover:text-blue-400 " onClick={() => setShowCategories(false)}>My Orders</NavLink>
              <NavLink to="/blogs" className="flex justify-center p-3 hover:text-blue-400" onClick={() => setShowCategories(false)}>Blogs</NavLink>
              <NavLink to="/contact" className="flex justify-center p-3 hover:text-blue-400" onClick={() => setShowCategories(false)}>Contact</NavLink>
              {authState?.user && <button className="ml-10 mx-auto w-fit bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition" onClick={() => { handleLogout(); setShowCategories(false); }}>Log Out</button>}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

