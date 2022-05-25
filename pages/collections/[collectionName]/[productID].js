import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import ProductInfo from "../../../components/ProductCard/ProductInfo";

const ProductPage = (props) => {
  // const [product, setProduct] = useState();
  // const router = useRouter();

  // console.log(router.query.productID);

  // const getProduct = useCallback(async (id) => {
  //   console.log("IDDDDD", id);
  //   const response = await fetch(`https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/products/${id}.json`);
  //   const data = await response.json();
  //   console.log(data);
  //   setProduct(data.product);
  // }, []);

  // useEffect(() => {
  //   getProduct(router.query.productID);
  //   console.log("product", product);
  // }, []);

  return (
    <div>
      <ProductInfo product={props.product} />
    </div>
  );
};

async function getCollections() {
  const response = await fetch("https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collection_listings.json");
  const data = await response.json();
  return data;
}

async function getProduct(id) {
  const response = await fetch(`https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/products/${id}.json`);
  const data = await response.json();
  return data;
}

export async function getStaticProps(context) {
  const { params } = context;

  const data = await getProduct(params.productID);
  // console.log("PRODUCT", data);

  // const collectionData = await getCollections();

  // const collectionList = collectionData.collection_listings;
  // console.log(collectionList);

  // const filterCollection = collectionList.find((coll) => coll.handle === params.collectionName);

  // const collectionID = filterCollection.collection_id;
  // console.log("FILTERED", collectionID);

  // // console.log(params.collectionName);

  // const productsData = await getProducts(collectionID);

  // console.log(productsData);
  // const collectionName = params.collectionName;
  // console.log(collectionName);
  // const collections = await getCollections();

  // const products = await getProducts();

  return {
    props: { product: data },
  };
}

async function getProducts(id) {
  const response = await fetch(
    `https://4ilk3v7wbk.execute-api.eu-west-1.amazonaws.com/dev/collections/${id}/products.json`
  );
  const data = await response.json();
  return data;
}

export async function getStaticPaths() {
  const collections = await getCollections();

  const collectionInfo = collections.collection_listings.map((coll) => ({ name: coll.handle, id: coll.collection_id }));

  // // const collectionID = collections.collection_listings.map((collection) => collection.collection_id);

  const x = collectionInfo.map(async (collInfo) => {
    const productsList = await getProducts(collInfo.id);
    return productsList;
  });

  const lists = await Promise.all(x);

  const compareArray = lists.map((info, i) => {
    return info.products.map((item) => ({
      params: { collectionName: collectionInfo[i].name, productID: item.id.toString() },
    }));
  });

  return {
    paths: compareArray.flat(),
    fallback: "blocking", /// 'blocking' will block the loading state ultil the page is ready
  };
}
export default ProductPage;
