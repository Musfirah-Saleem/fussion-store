import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Product = () => {
  const allProducts = useSelector((state) => state.productReducers);
  const [filteredProducts, setFilteredProducts] = useState();
  useEffect(() => {
    setFilteredProducts(allProducts[0]);
  }, [allProducts]);
  console.log(filteredProducts, allProducts[0]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm.trim() !== "") {
      const filtered = allProducts[0]?.filter((item) =>
        item?.title?.toLowerCase().includes(searchTerm)
      );

      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allProducts[0]);
    }
  };
  //////////////musfi code
  // const [filtereditem, setFiltereditem] = useState();
  // useEffect(() => {
  //   setFiltereditem(allProducts[0]);
  // }, [filtereditem]);

  // const handleitem = (e) => {
  //   const filteritem = e.target.value.toLowerCase();
  //   if (filtereditem.trim() !== "") {
  //     const newfilter = allProducts[0]?.filter((item) =>
  //       item?.title?.toLowerCase().include(filteritem)
  //     );
  //     setFiltereditem(newfilter);
  //   } else {
  //     setFiltereditem(allProducts[0]);
  //   }
  // };

  const cardItem = (item) => {
    return (
      <div className="card my-4 py-4" key={item.id} style={{ width: "18rem" }}>
        <img
          src={item.image}
          className="card-img-top"
          alt={item.title}
          width="200px"
          height="200px"
        />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead">${item.price}</p>
          <div className="mb-4">
            <NavLink to={`/products/${item.id}`} className="common__btn">
              Buy Now
            </NavLink>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row mx-5 px-5">
          <div className="col-6 ">
            <h1 style={{ color: "#52ab98" }}>All Product</h1>
          </div>
          {/* musfi code */}
          {/* <div className="col-6">
            <input
              type="text"
              placeholder="serach here"
              onChange={(e) => handleitem(e)}
            />
          </div> */}
          <div className="col-6 text-end">
            <input
              type="text"
              placeholder="search product"
              className="p-2 text-start w-75"
              onChange={(e) => handleSearch(e)}
            />
          </div>
          <hr />
        </div>
      </div>
      <div className="container">
        {filteredProducts?.length > 0 ? (
          <div className="row gap-md-5 gap-sm-0 justify-content-center">
            {filteredProducts?.map(cardItem)}
          </div>
        ) : (
          "no data"
        )}
      </div>
      {/* musfi code */}
      {/* <div className="container">
        {filtereditem?.length > 0 ? (
          <div className="row gap-md-5 gap-sm-0 justify-content-center">
            {filtereditem?.map(cardItem)}
          </div>
        ) : (
          "no catagori available"
        )}
      </div> */}
    </div>
  );
};

export default Product;
