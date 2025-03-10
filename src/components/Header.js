// import React, { useEffect, useState } from "react";
// import { NavLink, Link, useNavigate } from "react-router-dom";
// import { BsSearch } from "react-icons/bs";
// import compare from "../images/compare.svg";
// import wishlist from "../images/wishlist.svg";
// import user from "../images/user.svg";
// import cart from "../images/cart.svg";
// import menu from "../images/menu.svg";
// import { useDispatch, useSelector } from "react-redux";
// import { Typeahead } from "react-bootstrap-typeahead";
// import "react-bootstrap-typeahead/css/Typeahead.css";
// import { getAProduct } from "../features/products/productSlilce";
// import { getUserCart } from "../features/user/userSlice";

// const Header = () => {
//   const dispatch = useDispatch();
//   const cartState = useSelector((state) => state?.auth?.cartProducts);
//   const authState = useSelector((state) => state?.auth);
//   const [total, setTotal] = useState(null);
//   const [paginate, setPaginate] = useState(true);
//   const productState = useSelector((state) => state?.product?.product);
//   const navigate = useNavigate();

//   const getTokenFromLocalStorage = localStorage.getItem("customer")
//     ? JSON.parse(localStorage.getItem("customer"))
//     : null;

//   const config2 = {
//     headers: {
//       Authorization: `Bearer ${
//         getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
//       }`,
//       Accept: "application/json",
//     },
//   };

//   useEffect(() => {
//     dispatch(getUserCart(config2));
//   }, []);

//   const [productOpt, setProductOpt] = useState([]);
//   useEffect(() => {
//     let sum = 0;
//     for (let index = 0; index < cartState?.length; index++) {
//       sum = sum + Number(cartState[index].quantity) * cartState[index].price;
//       setTotal(sum);
//     }
//   }, [cartState]);

//   useEffect(() => {
//     let data = [];
//     for (let index = 0; index < productState?.length; index++) {
//       const element = productState[index];
//       data.push({ id: index, prod: element?._id, name: element?.title });
//     }
//     setProductOpt(data);
//   }, [productState]);

//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.reload();
//   };
//   return (
//     <>
//       <header className="header-top-strip py-3">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-6">
//               <p className="text-white mb-0">Free Shipping Over Rs.100</p>
//             </div>
//             <div className="col-6">
//               <p className="text-end text-white mb-0">
//                 Hotline:
//                 <a className="text-white" href="tel:+91 9999999999">
//                   +91 9999999999
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </header>
//       <header className="header-upper py-1">
//         <div className="container-xxl">
//           <div className="row align-items-center">
//             <div className="col-2">
//               <h2>
//                 <Link className="text-white" to="/ ">
//                   Electric Corner
//                 </Link>
//               </h2>
//             </div>
//             <div className="col-5">
//               <div className="input-group">
//                 <Typeahead
//                   id="pagination-example"
//                   onPaginate={() => console.log("Results paginated")}
//                   onChange={(selected) => {
//                     navigate(`/product/${selected[0]?.prod}`);
//                     dispatch(getAProduct(selected[0]?.prod));
//                   }}
//                   options={productOpt}
//                   paginate={paginate}
//                   labelKey={"name"}
//                   placeholder="Search for Products here"
//                 />
//                 <span className="input-group-text p-3" id="basic-addon2">
//                   <BsSearch className="fs-6" />
//                 </span>
//               </div>
//             </div>
//             <div className="col-5">
//               <div className="header-upper-links d-flex align-items-center justify-content-between">
//                 <div>
//                   {/* <Link
//                     to="/compare-product"
//                     className="d-flex align-items-center gap-10 text-white"
//                   >
//                     <img src={compare} alt="compare" />
//                     <p className="mb-0">
//                       Compare <br /> Products
//                     </p>
//                   </Link> */}
//                 </div>
//                 <div>
//                   <Link
//                     to="/wishlist"
//                     className="d-flex align-items-center gap-10 text-white"
//                   >
//                     <img src={wishlist} alt="wishlist" />
//                     <p className="mb-0">
//                       Favourite <br /> wishlist
//                     </p>
//                   </Link>
//                 </div>
//                 <div>
//                   <Link
//                     to={authState?.user === null ? "/login" : "my-profile"}
//                     className="d-flex align-items-center gap-10 text-white"
//                   >
//                     <img src={user} alt="user" />
//                     {authState?.user === null ? (
//                       <p className="mb-0">
//                         Log in <br /> My Account
//                       </p>
//                     ) : (
//                       <p className="mb-0">
//                         Welcome {authState?.user?.firstname}
//                       </p>
//                     )}
//                   </Link>
//                 </div>
//                 <div>
//                   <Link
//                     to="/cart"
//                     className="d-flex align-items-center gap-10 text-white"
//                   >
//                     <img src={cart} alt="cart" />
//                     <div className="d-flex flex-column gap-10">
//                       <span className="badge bg-white text-dark">
//                         {cartState?.length ? cartState?.length : 0}
//                       </span>
//                       <p className="mb-0">
//                         Rs. {!cartState?.length ? 0 : total ? total : 0}
//                       </p>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       <header className="header-bottom py-3">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-12">
//               <div className="menu-bottom d-flex align-items-center gap-30">
//                 <div>
//                   <div className="dropdown">
//                     <button
//                       className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
//                       type="button"
//                       id="dropdownMenuButton1"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       <img src={menu} alt="" />
//                       <span className="me-5 d-inline-block">
//                         Shop Categories
//                       </span>
//                     </button>
//                     <ul
//                       className="dropdown-menu"
//                       aria-labelledby="dropdownMenuButton1"
//                     >
//                       {productState &&
//                         productState.map((item, index) => {
//                           return (
//                             <li key={index}>
//                               <Link className="dropdown-item text-white" to="">
//                                 {item?.category}
//                               </Link>
//                             </li>
//                           );
//                         })}
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="menu-links">
//                   <div className="d-flex align-items-center gap-30 text-bold">
//                     <NavLink to="/">Home</NavLink>
//                     <NavLink to="/product">Our Store</NavLink>
//                     <NavLink to="/my-orders">My Orders</NavLink>
//                     <NavLink to="/blogs">Blogs</NavLink>
//                     <NavLink to="/contact">Contact</NavLink>
//                     {authState?.user !== null ? (
//                       <button
//                         className="border border-0 bg-trasparent text-white text-uppercase"
//                         type="button"
//                         style={{ backgroundColor: "#232f3e" }}
//                         onClick={handleLogout}
//                       >
//                         LogOut
//                       </button>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
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
      <header className="bg-gray-800 py-2 text-white text-sm">
        <div className="container mx-auto flex justify-between px-4">
          <p>Free Shipping Over Rs.100</p>
          <p>
            Hotline:{" "}
            <a href="tel:+91 9999999999" className="text-blue-400">
              +91 9999999999
            </a>
          </p>
        </div>
      </header>

      {/* Main Header */}
      <header className="bg-gray-900 py-1 text-white">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <h2 className="text-xl font-semibold">
            <Link to="/">Electric Corner</Link>
          </h2>

          {/* Search Bar */}
          <div className="flex w-[600px]">
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
              className="w-full py-3 text-lg border-none focus:ring-0 outline-none"
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
      <header className="bg-gray-800 py-2">
        <div className="container mx-auto flex justify-between px-4">
          {/* Category Dropdown */}
          <div className="relative">
            {/* Search Icon - Click to Show/Hide Categories */}
            <button onClick={toggleCategories} className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded">
            <img src={menu} alt="menu" className="w-6" />
              <span className="text-white">Categories</span>
            </button>

            {/* Dropdown Menu - Visible When 'showCategories' is True */}
            {showCategories && (
              <ul className="absolute left-0 mt-2 bg-gray-700 text-white rounded shadow-lg w-48 z-50">
                {category &&
                  category.map((cat, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-gray-600 cursor-pointer">
                      <button
                        onClick={() => {
                          window.location.href = `/product`;
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
          <nav className="flex gap-8 text-white mr-4">
            <NavLink to="/" className="text-xl hover:text-blue-400">Home</NavLink>
            <NavLink to="/product" className="text-xl hover:text-blue-400">Our Store</NavLink>
            <NavLink to="/my-orders" className="text-xl hover:text-blue-400">My Orders</NavLink>
            <NavLink to="/blogs" className="text-xl hover:text-blue-400">Blogs</NavLink>
            <NavLink to="/contact" className="text-xl hover:text-blue-400">Contact</NavLink>
          </nav>

          {authState?.user && <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-700" onClick={handleLogout}>Log Out</button>}
        </div>
      </header>
    </>
  );
};

export default Header;

