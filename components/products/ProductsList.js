import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";

const ProductList = (props) => {
  // const [collection, setCollection] = useState([]);
  const [products, setProducts] = useState([]);
  // const [collectionId, setCollectionId] = useState();
  const router = useRouter();

  // console.log(router.query.collectionName);

  const { collection } = props;

  console.log(collection);

  const filterCollection = collection.filter((coll) => coll.handle === router.query.collectionName);

  console.log(filterCollection[0]);

  // const fetchProducts = () => {

  //   // const collectionId = filterCollection[0].collection_id;

  //   // if (!collectionId) return;

  //   fetch(`https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collections/${collectionId}/products.json`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data);
  //       console.log(data);
  //     });
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return <ul></ul>;
};

export default ProductList;
