import ProductInfo from "../../../components/ProductCard/ProductInfo";

const ProductPage = (props) => {
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

  const productLists = collectionInfo.map(async (collInfo) => {
    const productsList = await getProducts(collInfo.id);
    return productsList;
  });

  const lists = await Promise.all(productLists);

  const compareArray = lists.map((info, i) => {
    return info.products.map((item) => ({
      params: { collectionName: collectionInfo[i].name, productID: item.id.toString() },
    }));
  });

  return {
    paths: compareArray.flat(),
    fallback: "blocking",
  };
}
export default ProductPage;
