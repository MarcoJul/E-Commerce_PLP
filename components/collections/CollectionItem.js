import Link from "next/link";
import Button from "../UI/Button";

import classes from "./CollectionItem.module.css";

const CollectionItem = (props) => {
  const { id, title, image } = props;

  const newTitle = title.replaceAll(" ", "-").toLowerCase();

  const style = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "52% 85%",
  };
  let formattedTitle;
  if (title.includes("and")) {
    formattedTitle = title.replace("and", "&");
  } else formattedTitle = title;
  return (
    <Link href={`/collections/${newTitle}`}>
      <div className={classes.collectionBox} style={style}>
        <h2 className={classes.collectionTitle}>{title}</h2>
      </div>
    </Link>
  );
};

export default CollectionItem;
