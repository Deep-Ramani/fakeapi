import React, {useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import { ProductComponent } from "./ProductComponent";
import "./ProductListing.css";

export const ProductListing = () => {
  const products = useSelector((state) => state);
  const Dispatch = useDispatch();

  const fetchproducts = async () =>{
      const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
          console.log("Err",err);
      });
      Dispatch(setProducts(response.data));
  };

  useEffect(()=>{
      fetchproducts();
  },[]);

  
  console.log(products);
  return (
    <div className="ui grid container">
      <div className="productlist">
        <ProductComponent />
      </div>
    </div>
  );
};
