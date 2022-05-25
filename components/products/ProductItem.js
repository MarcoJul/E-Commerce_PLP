import classes from "./ProductItem.module.css";

import { useRouter } from "next/router";
import Link from "next/link";

const ProductItem = (props) => {
  const { id, image, title, vendor, height, width } = props;
  const router = useRouter();

  const collectionName = router.query.collectionName;

  return (
    <Link href={`/collections/${collectionName}/${id}`}>
      <li className={classes.card}>
        <div className={classes.imgBox}>
          <img
            src={image}
            alt={title}
            style={+height < width ? { height: "100%" } : { height: "200%", transform: "translateY(-40%)" }}
          />
        </div>
        <div className={classes.infoBox}>
          <p className={classes.vendor}>{vendor}</p>
          <h3>{title}</h3>
          <div className={classes.prices}>
            <p className={classes.originalPrice}>80.00 €</p>
            <p className={classes.finalPrice}>69,90 €</p>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default ProductItem;
