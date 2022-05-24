const ProductInfo = (props) => {
  // const { title, price } = props;

  if (!props) console.log("no");

  // console.log(price);

  return (
    <div>
      <h1>Hi</h1>
      <h3>{props.product.product.product?.title}</h3>
      <div>
        <p>80.00 €</p>
        {/* <p>{price} €</p> */}
      </div>
    </div>
  );
};

export default ProductInfo;
