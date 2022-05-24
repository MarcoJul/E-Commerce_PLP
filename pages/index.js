const HomePage = (props) => {
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: { props: null },
    redirect: {
      permanent: true,
      destination: "/collections",
    },
  };
}

export default HomePage;
