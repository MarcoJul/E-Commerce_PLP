import { useEffect, useState, useCallback, Fragment } from "react";
import { useRouter } from "next/router";
import ProductItem from "./ProductItem";

import classes from "./ProductsList.module.css";

const ProductList = (props) => {
  const [page, setPage] = useState(1);
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

  const pageHandler = (page) => {
    setPage(page);
  };

  console.log(collectionList.length);
  let paginationList = [];

  for (let i = 0; i < collectionList.length / 10; i++) {
    paginationList.push(
      <div
        className={`${classes.dot} ${page === i + 1 ? classes.activeDot : ""}`}
        key={i}
        onClick={pageHandler.bind(this, i + 1)}
      >
        <p className={classes.pageNumber}>{i + 1}</p>
      </div>
    );
  }
  let pageCollection = [];
  if (collectionList.length > 9) {
    pageCollection = collectionList.slice((page - 1) * 12, page * 12);
    console.log(pageCollection);
  } else {
    pageCollection = collectionList;
  }

  return (
    <Fragment>
      <div className={classes.infoBar}>
        <div className={classes.textBox}>
          <p className={classes.numItems}>{collectionList.length} items</p>
          <p className={classes.sort}>Sort by: newest</p>
        </div>
      </div>
      <ul className={classes.listBox}>
        {pageCollection.map((item) => (
          <ProductItem key={item.id} id={item.id} image={item.image.src} title={item.title} vendor={item.vendor} />
        ))}
      </ul>
      <div className={classes.pagination}>{paginationList.map((item) => item)}</div>
    </Fragment>
  );
};

export default ProductList;
