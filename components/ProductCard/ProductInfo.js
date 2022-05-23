const ProductInfo = (props) => {
  const { title, price } = props;

  console.log(price);

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <p>80.00 €</p>
        <p>{price} €</p>
      </div>
    </div>
  );
};

export default ProductInfo;
