import classes from "./ProductHero.module.css";
import { useState } from "react";

const ProductHero = (props) => {
  const [activeFilter, setActiveFilter] = useState("all");

  let types = [];
  props.collection.map((product) => {
    if (!types.includes(product.product_type)) types.push(product.product_type);
  });

  const title = props.title.replaceAll("-", " ").replaceAll("and", "&").split(" ");
  const newWords = title.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");

  const style = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "75% 85%",
  };

  const activeFilterHandler = (filter) => {
    setActiveFilter(filter);
    props.onFiltering(filter);
  };

  console.log(types[0]);

  return (
    <div className={classes.hero} style={style}>
      <div>
        <h1 className={classes.title}>{newWords}</h1>
      </div>
      <div className={classes.filterBox}>
        {types.length > 1 ? (
          <button
            className={`${classes.filters} ${activeFilter === "all" ? classes.active : ""}`}
            onClick={activeFilterHandler.bind(this, "all")}
          >
            <p>ALL</p>
          </button>
        ) : (
          <div style={{ height: "3.2rem" }}></div>
        )}
        {types.length > 1
          ? types.map((type, i) => {
              return (
                <button
                  className={`${classes.filters} ${activeFilter === type ? classes.active : ""}`}
                  key={i}
                  onClick={activeFilterHandler.bind(this, type)}
                >
                  <p>{type.toUpperCase()}</p>
                </button>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default ProductHero;
