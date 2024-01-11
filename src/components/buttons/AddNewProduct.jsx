import React, { useState } from "react";
import axios from "axios";
import { SuccessToast } from "../toaster/MyToaster";

const AddNewProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    imageUrl: "",
  });
  const [formErrors, setFormErrors] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    imageUrl: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (formData.title.trim() === "") {
      errors.title = "Title is required";
      isValid = false;
    }

    // Description validation
    if (formData.description.trim() === "") {
      errors.description = "Description is required";
      isValid = false;
    }

    // Price validation
    if (formData.price.trim() === "") {
      errors.price = "Price is required";
      isValid = false;
    } else if (isNaN(formData.price)) {
      errors.price = "Price must be a number";
      isValid = false;
    }

    // Category validation
    if (formData.category.trim() === "") {
      errors.category = "Category is required";
      isValid = false;
    }

    // Image URL validation
    if (formData.imageUrl.trim() === "") {
      errors.imageUrl = "Image URL is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (validateForm()) {
        // Form is valid, you can submit the data or perform any other action here
        console.log("Form submitted:", formData);
        let res = await axios.post("https://fakestoreapi.com/products", {
          title: formData.title,
          price: formData.price,
          description: formData.description,
          category: formData.category,
          imageUrl: formData.imageUrl,
        });
        SuccessToast("Product add successfully");
        setFormData({});
        // Add your logic to handle form submission
      } else {
        console.log("Form validation failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="common__btn1"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        <span className="fa fa-plus me-1"></span> Add New Product
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content cart__bg">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add New Product
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Title<span className="staric"> *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="add title"
                    className={`form-control ${
                      formErrors.title && "is-invalid"
                    }`}
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                  {formErrors.title && (
                    <div className="invalid-feedback">{formErrors.title}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Description<span className="staric"> *</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="enter description"
                    className={`form-control ${
                      formErrors.price && "is-invalid"
                    }`}
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                  {formErrors.description && (
                    <div className="invalid-feedback">
                      {formErrors.description}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    price<span className="staric"> *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="enter price"
                    className={`form-control ${
                      formErrors.price && "is-invalid"
                    }`}
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                  />
                  {formErrors.price && (
                    <div className="invalid-feedback">{formErrors.price}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Category<span className="staric"> *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="enter category"
                    className={`form-control ${
                      formErrors.category && "is-invalid"
                    }`}
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  />
                  {formErrors.category && (
                    <div className="invalid-feedback">
                      {formErrors.category}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Image Url<span className="staric"> *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Image url"
                    className={`form-control ${
                      formErrors.imageUrl && "is-invalid"
                    }`}
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                  />
                </div>
                {formErrors.imageUrl && (
                  <div className="invalid-feedback">{formErrors.imageUrl}</div>
                )}
                <button
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  className="common__btn w-100 mt-5"
                >
                  Add New Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewProduct;
