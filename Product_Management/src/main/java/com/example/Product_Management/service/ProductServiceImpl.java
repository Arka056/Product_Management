package com.example.Product_Management.service;

import com.example.Product_Management.model.Product;
import com.example.Product_Management.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    private ProductRepository productRepo;
    @Override
    public Product saveProduct(Product product) {
        return productRepo.save(product);
    }

    @Override
    public List<Product> getAllProduct() {
        return productRepo.findAll();
    }

    @Override
    public Product getProductById(Integer id) {
        return productRepo.findById(id).get();
    }

    @Override
    public String deleteProduct(Integer id) {
        Product product = productRepo.findById(id).get();
        if (product != null){
            productRepo.delete(product);
            return "Product Delete Successfully!";
        }
        return "Something Wrong on server!!";
    }

    @Override
    public Product editProduct(Product product, Integer id) {
        Product existingProduct = productRepo.findById(id).orElseThrow(() -> new RuntimeException("Product not found with id: " + id));
       return existingProduct;
    }
}
