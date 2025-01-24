import React, { useState } from 'react'
import productService from '../service/product.service';

const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    status: ""
  });

  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({
      ...product,
      [e.target.name]: value
    });
  }
  const ProductRegister = (e) => {
    e.preventDefault();
    productService.saveProduct(product).then((res) => {
      console.log("Product Added Successfully");
      setMessage("Product Added Successfully");
      setProduct({
        productName: "",
        description: "",
        price: "",
        status: ""
      });
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">
                New Product
              </div>
              {
                message &&
                <p className="fs-4 text-center text-success">{message}</p>
              }
              <div className="card-body">
                <form onSubmit={ProductRegister}>
                  <div className="mb-3">
                    <label>Product Name</label>
                    <input type="text" name="productName" className="form-control" onChange={handleChange}
                    value={product.productName} />
                  </div>

                  <div className="mb-3">
                    <label>Description</label>
                    <input type="text" name="description" className="form-control" onChange={handleChange}
                    value={product.description} />
                  </div>

                  <div className="mb-3">
                    <label>Price</label>
                    <input type="text" name="price" className="form-control" onChange={handleChange}
                    value={product.price} />
                  </div>

                  <div className="mb-3">
                    <label>Status</label>
                    <input type="text" name="status" className="form-control" onChange={handleChange}value={product.status}/>
                  </div>
                  <button type="submit" className="btn btn-primary col-md-12">Add Product</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default AddProduct