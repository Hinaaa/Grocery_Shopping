package com.example.backend.service;

import com.example.backend.exception.IdNotFoundException;
import com.example.backend.model.Product;
import com.example.backend.model.ProductDto;
import com.example.backend.repo.ProductRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class ProductServiceTest {

    ProductRepo mockProductRepo = Mockito.mock(ProductRepo.class);
    ServiceId mockServiceId;
    Product banana;
    ProductService productService;


    @BeforeEach
    void setUp(){
        banana = new Product("1","Banana","Its fruit", "Fruit", "kg", 1.90);
        mockServiceId = Mockito.mock(ServiceId.class);
        productService= new ProductService(mockProductRepo, mockServiceId);
    }

    @Test
    void getAllProducts_shouldReturnEmptyList_whenCalled() {
        // GIVEN
        //in setup

        // WHEN
        Mockito.when(mockProductRepo.findAll()).thenReturn(Collections.emptyList());
        List<Product> actual= productService.getAllProducts();

        // THEN
        assertEquals(actual, Collections.emptyList());
    }

    @Test
    void getAllProducts_shouldReturnProductList_whenCalledWithBanana(){
        // GIVEN
        ProductService productService = new ProductService(mockProductRepo, mockServiceId);
        List<Product> expected = List.of(banana);
         //WHEN

        Mockito.when(mockProductRepo.findAll()).thenReturn(expected);
        List<Product> actual = productService.getAllProducts();

        //THEN
        assertEquals(actual,expected);
    }

    @Test
    void getProductById_shouldReturnProduct_whenCalledByValidId() throws IdNotFoundException {
        // GIVEN

        // WHEN
        mockProductRepo.save(banana);
        Mockito.when(mockProductRepo.findById(banana.id())).thenReturn(Optional.of(banana));
        Product actual = productService.getProductById(banana.id());

        // THEN
        assertEquals(banana, actual);
    }

    @Test
    void getProductById_shouldThrowIdNotFoundException_whenCalledByInvalidId(){
        Mockito.when(mockProductRepo.findById("wrongID")).thenReturn(Optional.empty());

        assertThrows(IdNotFoundException.class, () -> productService.getProductById("wrongID"));
    }

    @Test
    void addProduct_shouldReturnProduct_whenCalledWhitValidData() {
        // Given
        ProductDto appleDto = new ProductDto( "apple", "i'm a nice red apple",  "Fruit", "kg", 1.89);
        Product apple = new Product("1", appleDto.name(), appleDto.description(), appleDto.category(), appleDto.unit(), appleDto.price());

        Mockito.when(mockServiceId.generateId()).thenReturn("1");
        Mockito.when(mockProductRepo.save(apple)).thenReturn(apple);

        // When
        Product actual = productService.addProduct(appleDto);

        // Then
        assertEquals(apple, actual);
        Mockito.verify(mockProductRepo, Mockito.times(1)).save(apple);
    }
}