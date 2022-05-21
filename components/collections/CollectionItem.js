const CollectionItem = (props) => {
  const { id, title, image } = props;

  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default CollectionItem;
