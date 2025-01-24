package com.example.Product_Management.repository;

import com.example.Product_Management.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;



public interface ProductRepository extends JpaRepository<Product, Integer> {
}
