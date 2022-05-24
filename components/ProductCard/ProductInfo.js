import classes from "./ProductInfo.module.css";

import Button from "./../UI/Button";

const ProductInfo = (props) => {
  const { product } = props;

  console.log(product);

  if (!props) return <div> Object Not Found!</div>;

  console.log(product.tags);

  const tags = product.tags.split(", ");
  console.log(tags);

  return (
    <div className={classes.productContainer}>
      <div className={classes.productImg}>
        <img src={product.image.src} alt={product.title} />
      </div>
      <div className={classes.infoBox}>
        <p className={classes.breadcrumb}>{product.product_type}</p>
        <h3 className={classes.productTitle}>{product?.title}</h3>
        <p className={classes.vendor}>{product.vendor}</p>
        <div className={classes.priceSection}>
          <p>{(Number(product?.variants[0].price.slice(0, 2)) * 1.2).toFixed(2)} €</p>
          <p>{product?.variants[0].price} €</p>
        </div>
        <Button>ADD TO CART</Button>
        <div className={classes.tags}>
          {tags.map((tag) => (
            <div key={Math.random()}>{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
