import Button from "../components/UI/Button";

const HomePage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Button link="/collections">See the Collections</Button>
    </div>
  );
};

export async function getStaticProps(context) {
  return {
    redirect: {
      destination: "/collections",
    },
  };
}

export default HomePage;
