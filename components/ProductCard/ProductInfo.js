import { useRouter } from "next/router";
import Link from "next/link";

import classes from "./ProductInfo.module.css";

import Button from "./../UI/Button";

const ProductInfo = (props) => {
  const router = useRouter();

  const collectionName = router.query.collectionName;
  if (!props) return <div> Object Not Found!</div>;
  const { product } = props.product;

  let tags = [];
  let description = "";
  if (product) {
    tags = product?.tags.split(", ");

    description = product.body_html.slice(3, -4);
  }

  return (
    <div className={classes.productContainer}>
      <div className={classes.productImg}>
        <img src={product?.image.src} alt={product?.title} />
      </div>
      <div className={classes.infoBox}>
        <p className={classes.breadcrumb}>
          <Link href={`/collections/${collectionName}`}>{collectionName}</Link>
          {product?.product_type && ` / ${product?.product_type}`}
        </p>
        <h3 className={classes.productTitle}>{product?.title}</h3>
        <p className={classes.description}>{description}</p>
        <p className={classes.vendor}>{product?.vendor}</p>
        <div className={classes.priceSection}>
          <p className={classes.originalPrice}>{(Number(product?.variants[0].price.slice(0, 2)) * 1.2).toFixed(2)} €</p>
          <p>{product?.variants[0].price} €</p>
        </div>
        <Button>ADD TO CART</Button>
        <div className={classes.tags}>
          {tags.map((tag) => (
            <div key={Math.random()} className={classes.tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
