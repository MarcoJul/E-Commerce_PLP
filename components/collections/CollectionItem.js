import Button from "../UI/Button";

const CollectionItem = (props) => {
  const { id, title, image } = props;

  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <Button link={`/collections/${id}`}>Go To Products</Button>
    </div>
  );
};

export default CollectionItem;
