import classes from "./ProductHero.module.css";

const ProductHero = (props) => {
  const title = props.title.replaceAll("-", " ").replaceAll("and", "&").split(" ");
  const newWords = title.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");

  const style = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "75% 85%",
  };

  return (
    <div className={classes.hero} style={style}>
      <div>
        <h1 className={classes.title}>{newWords}</h1>
      </div>
    </div>
  );
};

export default ProductHero;
