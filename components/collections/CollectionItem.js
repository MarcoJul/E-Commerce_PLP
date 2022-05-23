import Link from "next/link";
import Button from "../UI/Button";

import classes from "./CollectionItem.module.css";

const CollectionItem = (props) => {
  const { id, title, image } = props;

  return (
    <Link href={`/collections/${id}`}>
      <div className={classes.collectionBox}>
        <img src={image} alt={title} />
        <h2 className={classes.collectionTitle}>{title}</h2>
      </div>
    </Link>
  );
};

export default CollectionItem;
