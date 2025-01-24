import React, { useEffect, useState } from 'react'
import productService from '../service/product.service';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    description: "",
    price: "",
    status: ""
  });
  const navigate= useNavigate();
  const { id } = useParams();
  console.log(id);

  const [message, setMessage] = useState("");
  useEffect(() => {
    productService.getProductById(id).then((res) => {
      setProduct(res.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({
      ...product,
      [e.target.name]: value
    });
  }
  const ProductUpdate = (e) => {
    e.preventDefault();
    productService.editProduct(product).then((res) => {
     navigate("/");
      
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
                Edit Product
              </div>
              {
                message &&
                <p className="fs-4 text-center text-success">{message}</p>
              }
              <div className="card-body">
                <form onSubmit={ProductUpdate}>
                  <div className="mb-3">
                    <label>Edit Name</label>
                    <input type="text" name="productName" className="form-control" onChange={handleChange}
                      value={product.productName} />
                  </div>

                  <div className="mb-3">
                    <label>Edit Description</label>
                    <input type="text" name="description" className="form-control" onChange={handleChange}
                      value={product.description} />
                  </div>

                  <div className="mb-3">
                    <label>Edit Price</label>
                    <input type="text" name="price" className="form-control" onChange={handleChange}
                      value={product.price} />
                  </div>

                  <div className="mb-3">
                    <label>Edit Status</label>
                    <input type="text" name="status" className="form-control" onChange={handleChange} value={product.status} />
                  </div>
                  <button type="submit" className="btn btn-primary col-md-12">Update</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default EditProduct