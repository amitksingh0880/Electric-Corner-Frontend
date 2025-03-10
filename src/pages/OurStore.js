// import React, { useEffect, useState } from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
// import ReactStars from "react-rating-stars-component";
// import ProductCard from "../components/ProductCard";
// import Color from "../components/Color";
// import Container from "../components/Container";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllProducts } from "../features/products/productSlilce";
// import { Link } from "react-router-dom";

// const OurStore = () => {
//   const [grid, setGrid] = useState(4);
//   const productState = useSelector((state) => state?.product?.product);
//   const [brands, setBrands] = useState([]);
//   const [categories, setCategories] = useState([]);

//   const [tags, setTags] = useState([]);

//   //filter state
//   const [tag, setTag] = useState(null);
//   const [category, setCategory] = useState(null);
//   const [brand, setBrand] = useState(null);
//   const [minPrice, setminPrice] = useState(null);
//   const [maxPrice, setmaxPrice] = useState(null);
//   const [sort, setSort] = useState(null);

//   useEffect(() => {
//     let newBrands = [];
//     let category = [];
//     let newtags = [];

//     for (let index = 0; index < productState?.length; index++) {
//       const element = productState[index];
//       newBrands.push(element.brand);
//       category.push(element.category);
//       newtags.push(element.tags);
//     }
//     setBrands(newBrands);
//     setCategories(category);
//     setTags(newtags);
//   }, [productState]);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     getProducts();
//   }, [sort, tag, brand, category, minPrice, maxPrice]);
//   const getProducts = () => {
//     dispatch(
//       getAllProducts({ sort, tag, brand, category, minPrice, maxPrice })
//     );
//   };

//   return (
//     <>
//       <Meta title={"Our Store"} />
//       <BreadCrumb title="Our Store" />
//       <Container class1="store-wrapper home-wrapper-2 py-5">
//         <div className="row">
//           <div className="col-3">
//             <div className="filter-card mb-3">
//               <h3 className="filter-title">Shop By Categories</h3>
//               <div>
//                 <ul className="ps-0">
//                   <a
//                     className="ps-0"
//                     href="/product"
//                     style={{ color: "var(--color-777777)" }}
//                   >
//                     All
//                   </a>

//                   {categories &&
//                     [...new Set(categories)].map((item, index) => {
//                       return (
//                         <li key={index} onClick={() => setCategory(item)}>
//                           {item}
//                         </li>
//                       );
//                     })}
//                 </ul>
//               </div>
//             </div>
//             <div className="filter-card mb-3">
//               <h3 className="filter-title">Filter By</h3>
//               <div>
//                 <h5 className="sub-title">Price</h5>
//                 <div className="d-flex align-items-center gap-10">
//                   <div className="form-floating">
//                     <input
//                       type="number"
//                       className="form-control"
//                       id="floatingInput"
//                       placeholder="From"
//                       onChange={(e) => setminPrice(e.target.value)}
//                     />
//                     <label htmlFor="floatingInput">From</label>
//                   </div>
//                   <div className="form-floating">
//                     <input
//                       type="number"
//                       className="form-control"
//                       id="floatingInput1"
//                       placeholder="To"
//                       onChange={(e) => setmaxPrice(e.target.value)}
//                     />
//                     <label htmlFor="floatingInput1">To</label>
//                   </div>
//                 </div>
//                 {/* <h5 className="sub-title">Colors</h5>
//                 <div>
//                   <Color />
//                 </div> */}
//               </div>
//               <div className="mt-4 mb-3">
//                 <h3 className="sub-title">Product Tags</h3>
//                 <div>
//                   <div className="product-tags d-flex flex-wrap align-items-center gap-10">
//                     {tags &&
//                       [...new Set(tags)].map((item, index) => {
//                         return (
//                           <span
//                             key={index}
//                             onClick={() => setTag(item)}
//                             className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
//                           >
//                             {item}
//                           </span>
//                         );
//                       })}
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-4 mb-3">
//                 <h3 className="sub-title">Product Brands</h3>
//                 <div>
//                   <div className="product-tags d-flex flex-wrap align-items-center gap-10">
//                     {brands &&
//                       [...new Set(brands)].map((item, index) => {
//                         return (
//                           <span
//                             key={index}
//                             onClick={() => setBrand(item)}
//                             className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
//                           >
//                             {item}
//                           </span>
//                         );
//                       })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-9">
//             <div className="filter-sort-grid mb-4">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div className="d-flex align-items-center gap-10">
//                   <p className="mb-0 d-block" style={{ width: "100px" }}>
//                     Sort By:
//                   </p>
//                   <select
//                     name=""
//                     defaultValue={"manula"}
//                     className="form-control form-select"
//                     id=""
//                     onChange={(e) => setSort(e.target.value)}
//                   >
//                     <option value="title">Alphabetically, A-Z</option>
//                     <option value="-title">Alphabetically, Z-A</option>
//                     <option value="price">Price, low to high</option>
//                     <option value="-price">Price, high to low</option>
//                     <option value="createdAt">Date, old to new</option>
//                     <option value="-createdAt">Date, new to old</option>
//                   </select>
//                 </div>
//                 <div className="d-flex align-items-center gap-10">
//                   <p className="totalproducts mb-0">
//                     {productState?.length} Products
//                   </p>
//                   <div className="d-flex gap-10 align-items-center grid">
//                     <img
//                       onClick={() => {
//                         setGrid(3);
//                       }}
//                       src="images/gr4.svg"
//                       className="d-block img-fluid"
//                       alt="grid"
//                     />
//                     <img
//                       onClick={() => {
//                         setGrid(4);
//                       }}
//                       src="images/gr3.svg"
//                       className="d-block img-fluid"
//                       alt="grid"
//                     />
//                     <img
//                       src="images/gr2.svg"
//                       className="d-block img-fluid"
//                       alt="grid"
//                       onClick={() => {
//                         setGrid(6);
//                       }}
//                     />

//                     <img
//                       onClick={() => {
//                         setGrid(12);
//                       }}
//                       src="images/gr.svg"
//                       className="d-block img-fluid"
//                       alt="grid"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="products-list pb-5">
//               <div className="d-flex gap-10 flex-wrap">
//                 <ProductCard
//                   data={productState ? productState : []}
//                   grid={grid}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default OurStore;



import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlilce";

const OurStore = () => {
  const [grid, setGrid] = useState(12);
  const productState = useSelector((state) => state?.product?.product);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState(null);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    let newBrands = [];
    let categoryList = [];
    let newTags = [];

    Array.isArray(productState) && productState.forEach((item) => {
      newBrands.push(item.brand);
      categoryList.push(item.category);
      newTags.push(item.tags);
    });

    setBrands([...new Set(newBrands)]);
    setCategories([...new Set(categoryList)]);
    setTags([...new Set(newTags)]);
  }, [productState]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts({ sort, tag, brand, category, minPrice, maxPrice }));
  }, [sort, tag, brand, category, minPrice, maxPrice]);

  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <Container class1="py-5">
        <div className="grid grid-cols-4 gap-5">
          {/* Sidebar Filters */}
          <div className="col-span-1 bg-gray-100 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Shop By Categories</h3>
            <ul className="space-y-2">
              <li
                className="text-gray-600 cursor-pointer hover:text-black"
                onClick={() => setCategory(null)}
              >
                All
              </li>
              {categories.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-black"
                  onClick={() => setCategory(item)}
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Price Filter */}
            <h3 className="text-lg font-semibold mt-5">Filter By</h3>
            <h5 className="text-sm font-medium mt-2">Price</h5>
            <div className="flex gap-2 mt-2">
              <input
                type="number"
                placeholder="From"
                className="w-1/2 border rounded-md px-2 py-1"
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <input
                type="number"
                placeholder="To"
                className="w-1/2 border rounded-md px-2 py-1"
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>

            {/* Tags */}
            <h3 className="text-lg font-semibold mt-5">Product Tags</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((item, index) => (
                <span
                  key={index}
                  className="cursor-pointer bg-gray-200 text-sm px-3 py-1 rounded-md"
                  onClick={() => setTag(item)}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Brands */}
            <h3 className="text-lg font-semibold mt-5">Product Brands</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {brands.map((item, index) => (
                <span
                  key={index}
                  className="cursor-pointer bg-gray-200 text-sm px-3 py-1 rounded-md"
                  onClick={() => setBrand(item)}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Product Listing */}
          <div className="col-span-3">
            {/* Sorting & Grid Options */}
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-3">
                <span className="font-medium">Sort By:</span>
                <select
                  className="border px-3 py-1 rounded-md"
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="title">Alphabetically, A-Z</option>
                  <option value="-title">Alphabetically, Z-A</option>
                  <option value="price">Price, low to high</option>
                  <option value="-price">Price, high to low</option>
                  <option value="createdAt">Date, old to new</option>
                  <option value="-createdAt">Date, new to old</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm">{productState?.length} Products</span>
                <div className="flex gap-2">
                  <button
                    className="p-2 border rounded-md"
                    onClick={() => setGrid(3)}
                  >
                    3
                  </button>
                  <button
                    className="p-2 border rounded-md"
                    onClick={() => setGrid(4)}
                  >
                    4
                  </button>
                  <button
                    className="p-2 border rounded-md"
                    onClick={() => setGrid(6)}
                  >
                    6
                  </button>
                  <button
                    className="p-2 border rounded-md"
                    onClick={() => setGrid(12)}
                  >
                    12
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[900px] gap-3">
              <ProductCard data={productState || []} grid={grid} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};  

export default OurStore;
