import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { image, title, vendor } = props;

  return (
    <li className={classes.card}>
      <img src={image} alt={title} />
      <p>{vendor}</p>
      <h3>{title}</h3>
      <div>
        <p>80.00 €</p>
        <p>69,90 €</p>
      </div>
    </li>
  );
};

export default ProductItem;
