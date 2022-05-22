const ProductInfo = (props) => {
  const { title } = props;

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <p>80.00 €</p>
        <p>69,90 €</p>
      </div>
    </div>
  );
};

export default ProductInfo;
