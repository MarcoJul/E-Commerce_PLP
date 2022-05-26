import ProductsList from "../../../components/products/ProductsList";
import ProductHero from "../../../components/products/ProductHero";
import { useState } from "react";

const ProductsPage = (props) => {
  const [filter, setFilter] = useState("all");
  const collections = props.collection.products;
  const filterHandler = (filter) => {
    setFilter(filter);
  };

  return (
    <div>
      <ProductHero
        title={props.pageCollection}
        image={props.imgCollection}
        collection={collections}
        onFiltering={filterHandler}
      />
      <ProductsList collection={collections} filter={filter} />
    </div>
  );
};

async function getCollections() {
  const response = await fetch("https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collection_listings.json");
  const data = await response.json();
  return data;
}

async function getProducts(collectionName) {
  const response = await fetch(
    `https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collections/${collectionName}/products.json`
  );
  const data = await response.json();
  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const collectionData = await getCollections();
  const collectionList = collectionData.collection_listings;
  const filterCollection = collectionList.find((collection) => collection.handle === params.collectionName);
  const collectionID = filterCollection.collection_id;
  const productsData = await getProducts(collectionID);

  return {
    props: {
      pageCollection: filterCollection.handle,
      imgCollection: filterCollection.default_product_image.src,
      collection: productsData,
    },
  };
}

export async function getStaticPaths() {
  const collectionData = await getCollections();
  const collectionNames = collectionData.collection_listings.map((collection) => collection.handle);
  const pathsWithParams = collectionNames.map((name) => ({ params: { collectionName: name } }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
}
export default ProductsPage;
