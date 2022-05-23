import CollectionItem from "./CollectionItem";

import classes from "./CollectionList.module.css";

const CollectionList = (props) => {
  const { items } = props;

  return (
    <ul className={classes.collectionContainer}>
      {items.map((collection) => (
        <CollectionItem
          key={collection.collection_id}
          id={collection.collection_id}
          title={collection.title}
          image={collection.default_product_image.src}
        />
      ))}
    </ul>
  );
};

export default CollectionList;
