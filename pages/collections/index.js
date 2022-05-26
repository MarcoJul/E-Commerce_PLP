import CollectionList from "../../components/collections/CollectionList";

const CollectionsPage = (props) => {
  const { data } = props;

  const collections = data.collection_listings;

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
