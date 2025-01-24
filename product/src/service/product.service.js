import axios from "axios";

const API_URL="http://localhost:8080"
class ProductService {      
  saveProduct(product) {
    return axios.post(API_URL + "/saveProduct", product);
  }
  getAllProducts() {
    return axios.get(API_URL + "/");
  }
  getProductById(id) {
    return axios.get(API_URL + "/"+id);
  }
  editProduct(product) {
    return axios.put(API_URL + "/editProduct/" + product.id, product);
  }
  deleteProduct(id) {
    return axios.get(API_URL + "/deleteProduct/"+id);
  }
}
export default new ProductService;