import { useEffect, useState, useCallback, Fragment } from "react";
import { useRouter } from "next/router";
import ProductItem from "./ProductItem";

import classes from "./ProductsList.module.css";

const ProductList = (props) => {
  const { collection, filter } = props;

  let collectionList = [];
  let filteredCollection = [];
  if (filter !== "all") {
    filteredCollection = collection.filter((item) => item.product_type === filter);
  }

  if (filteredCollection.length === 0) {
    collectionList = collection;
  } else collectionList = filteredCollection;

  // const [collection, setCollection] = useState([]);

  // console.log(props.collection);
  // console.log("props", props.collection);

  // let types = [];
  // const filterProduct = props.collection.map((product) => {
  //   if (!types.includes(product.product_type)) types.push(product.product_type);
  // });

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
    <Fragment>
      <div className={classes.infoBar}>
        <div className={classes.textBox}>
          <p className={classes.numItems}>{collectionList.length} items</p>
          <p className={classes.sort}>Sort by: newest</p>
        </div>
      </div>
      <ul className={classes.listBox}>
        {collectionList.map((item) => (
          <ProductItem key={item.id} id={item.id} image={item.image.src} title={item.title} vendor={item.vendor} />
        ))}
      </ul>
    </Fragment>
  );
};

export default ProductList;
