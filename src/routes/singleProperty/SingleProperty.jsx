import { useParams } from "react-router-dom";
import Info from "../../sections/singleProperties/info/Info";
import About from "../../sections/singleProperties/about/About";
import Layout from "../../components/reusable/layout/Layout";
import Head from "../../components/reusable/head/Head";
import Navigation from "../../components/reusable/navigation/Navigation";
import { propertiesBox, aboutBox } from "../../utils/navigationData";

const SingleProperty = () => {
  const { id } = useParams();

  return (
    <>
      <Head title="Properties" description={`Property - Moderne ${id}`} />

      <Layout isHeaderLight={false}>
        <main className="flow-spacing spacing-top">
          <Info />
          <About />
          <Navigation boxOneValues={propertiesBox} boxTwoValues={aboutBox} />
        </main>
      </Layout>
    </>
  );
};

export default SingleProperty;
