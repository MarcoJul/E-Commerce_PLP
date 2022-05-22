import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import ProductItem from "./ProductItem";

import classes from "./ProductsList.module.css";

const ProductList = (props) => {
  // const [collection, setCollection] = useState([]);

  console.log(props.collection);

  // console.log(router.query.collectionName);

  // const fetchProducts = () => {

  //   // const collectionId = filterCollection[0].collection_id;

  //   // if (!collectionId) return;

  //   fetch(`https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collections/${collectionId}/products.json`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data);
  //       console.log(data);
  //     });
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return (
    <ul className={classes.listBox}>
      {props.collection.map((item) => (
        <ProductItem key={item.id} image={item.image.src} title={item.title} vendor={item.vendor} />
      ))}
    </ul>
  );
};

export default ProductList;
