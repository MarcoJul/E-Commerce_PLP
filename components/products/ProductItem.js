import classes from "./ProductItem.module.css";

import Button from "../UI/Button";
import { useRouter } from "next/router";

const ProductItem = (props) => {
  const { id, image, title, vendor } = props;
  const router = useRouter();

  const collectionName = router.query.collectionName;

  return (
    <li className={classes.card}>
      <img src={image} alt={title} />
      <p>{vendor}</p>
      <h3>{title}</h3>
      <div>
        <p>80.00 €</p>
        <p>69,90 €</p>
      </div>
      <Button link={`/collections/${collectionName}/${id}`}>Go To Products</Button>
    </li>
  );
};

export default ProductItem;
