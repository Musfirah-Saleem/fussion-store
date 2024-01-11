import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";
import { SuccessToast } from "./toaster/MyToaster";

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const state = useSelector((state) => state.productReducers);
  const proid = useParams();
  const proDetail = state[0]?.filter((x) => x.id === Number(proid.id));

  const product = proDetail?.length > 0 ? proDetail[0] : null;

  // We need to store useDispatch in a variable
  const dispatch = useDispatch();

  const handleCart = () => {
    if (cartBtn === "Add to Cart" && product) {
      dispatch(addItem(product));
      SuccessToast("Product added");
      setCartBtn("Remove from Cart");
    } else if (product) {
      dispatch(delItem(product));
      SuccessToast("Product removed");
      setCartBtn("Add to Cart");
    }
  };

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img
              src={product?.image}
              alt={product?.title}
              height="400px"
              width="50%"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product?.title}</h1>
            <hr />
            <h2 className="my-4">${product?.price}</h2>
            <p className="lead">{product?.desc}</p>
            <button
              onClick={handleCart}
              className="common__btn"
              disabled={!product} // Disable the button if product is null
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
