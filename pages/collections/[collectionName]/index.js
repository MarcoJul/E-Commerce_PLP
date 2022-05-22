import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";

import ProductsList from "../../../components/products/ProductsList";

const ProductsPage = (props) => {
  const [collections, setCollections] = useState([]);
  const [products, setProducts] = useState([]);
  const [id, setId] = useState();
  const router = useRouter();

  console.log("PROPS", props);

  // if (collections.collection_listings.length !== 0) {
  //   const filterCollection = collections.filter((coll) => coll.handle === router.query.collectionName);
  //   console.log(filterCollection);
  // }

  // const fetchProducts = async () => {
  //   const response = await fetch(
  //     `https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collections/${id}/products.json`
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   setProducts(data);
  // };

  // useEffect(() => {
  //   fetchCollections();
  // }, []);

  return (
    <div>
      <ProductsList collection={collections} />
    </div>
  );
};

async function getCollections() {
  const response = await fetch("https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collection_listings.json");
  const data = await response.json();
  return data;
}

async function getProducts(name) {
  const response = await fetch(
    `https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collections/${name}/products.json`
  );
  const data = await response.json();
  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const collectionData = await getCollections();

  const collectionList = collectionData.collection_listings;
  console.log(collectionList);

  const filterCollection = collectionList.find((coll) => coll.handle === params.collectionName);

  const collectionID = filterCollection.collection_id;
  console.log("FILTERED", collectionID);

  // console.log(params.collectionName);

  const productsData = await getProducts(collectionID);

  // console.log(productsData);
  // const collectionName = params.collectionName;
  // console.log(collectionName);
  // const collections = await getCollections();

  // const products = await getProducts();

  return {
    props: { collection: productsData },
  };
}

export async function getStaticPaths() {
  const collectionData = await getCollections();

  const collectionNames = collectionData.collection_listings.map((collection) => collection.handle);

  const pathsWithParams = collectionNames.map((name) => ({ params: { collectionName: name } }));

  return {
    paths: pathsWithParams,
    fallback: false, /// 'blocking' will block the loading state ultil the page is ready
  };
}
export default ProductsPage;
