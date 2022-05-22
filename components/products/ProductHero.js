import classes from "./ProductHero.module.css";

const ProductHero = (props) => {
  console.log(props.collection);

  let types = [];
  const filterProduct = props.collection.map((product) => {
    if (!types.includes(product.product_type)) types.push(product.product_type);
  });

  console.log("filter", types);

  const title = props.title.replaceAll("-", " ").replaceAll("and", "&").split(" ");
  const newWords = title.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");

  const style = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "75% 85%",
  };

  return (
    <div className={classes.hero} style={style}>
      <div>
        <h1 className={classes.title}>{newWords}</h1>
      </div>
      <div className={classes.filterBox}>
        <button className={classes.filters}>
          <p>All</p>
        </button>
        {types.length > 1
          ? types.map((type, i) => {
              return (
                <button className={classes.filters} key={i}>
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
