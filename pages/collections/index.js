import { useState, useEffect } from "react";
import CollectionList from "../../components/collections/CollectionList";

const CollectionsPage = (props) => {
  const { data } = props;

  const collections = data.collection_listings;

  // const fetchCollections = async () => {
  //   const response = await fetch("https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collection_listings.json");
  //   const data = await response.json();
  //   setCollections(data.collection_listings);
  // };

  // const fetchProduct = async () => {
  //   const response = await fetch(
  //     "https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/products/6735723790409.json"
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // };

  // useEffect(() => {
  //   fetchCollections();
  //   // fetchProducts();
  //   // fetchProduct();
  // }, []);

  return (
    <div>
      <CollectionList items={collections} />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collection_listings.json");
  const data = await response.json();
  return {
    props: { data },
  };
}

export default CollectionsPage;
