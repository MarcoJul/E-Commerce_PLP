import { useState, Fragment } from "react";

import ProductItem from "./ProductItem";

import classes from "./ProductsList.module.css";

const ProductList = (props) => {
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [listOrder, setListOrder] = useState("NEWEST");
  const { collection, filter } = props;

  const showModalHandler = () => {
    setShowModal((previousState) => !previousState);
  };

  const sortHandler = (sorting) => {
    if (sorting === "recent") {
      collection.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
      setListOrder("NEWEST");
    }
    if (sorting === "older") {
      collection.sort((a, b) => new Date(a.published_at) - new Date(b.published_at));
      setListOrder("LESS RECENT");
    }
    showModalHandler();
  };

  let collectionList = [];
  let filteredCollection = [];
  if (filter !== "all") {
    filteredCollection = collection.filter((item) => item.product_type === filter);
  }

  if (filteredCollection.length === 0) {
    collectionList = collection;
  } else collectionList = filteredCollection;

  const pageHandler = (page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
  } else {
    pageCollection = collectionList;
  }

  return (
    <Fragment>
      <div className={classes.infoBar}>
        <div className={classes.textBox}>
          <p className={classes.numItems}>{collectionList.length} items</p>
          <p className={classes.sort} onClick={showModalHandler}>
            Sort by: {listOrder}
          </p>
          {showModal && (
            <div className={classes.modal}>
              <p>SORT BY</p>
              <p className={classes.sortControl} onClick={sortHandler.bind(this, "recent")}>
                Newest
              </p>
              <p className={classes.sortControl} onClick={sortHandler.bind(this, "older")}>
                Less Recent
              </p>
              <button className={classes.sortControl} onClick={showModalHandler}>
                CLOSE
              </button>
            </div>
          )}
        </div>
      </div>
      <ul className={classes.listBox}>
        {pageCollection.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            image={item.image.src}
            title={item.title}
            vendor={item.vendor}
            height={item.image.height}
            width={item.image.width}
          />
        ))}
      </ul>
      <div className={classes.pagination}>{paginationList.map((item) => item)}</div>
    </Fragment>
  );
};

export default ProductList;
