import Head from "../../components/reusable/head/Head";
import Layout from "../../components/reusable/layout/Layout";
import Navigation from "../../components/reusable/navigation/Navigation";
import Content from "../../sections/about/content/Content";
import { homeBox, propertiesBox } from "../../utils/navigationData";

const About = () => {
  return (
    <>
      <Head
        title="About"
        description="Informations about Moderne Real-Estate"
      />

      <Layout isHeaderLight={false}>
        <main>
          <Content />

          <Navigation boxOneValues={homeBox} boxTwoValues={propertiesBox} />
        </main>
      </Layout>
    </>
  );
};

export default About;
