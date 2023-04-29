import Layout from '../../components/reusable/layout/Layout';
import Head from '../../components/reusable/head/Head';
import Navigation from '../../components/reusable/navigation/Navigation';
import PropertiesMap from '../../components/isolated/propertiesMap/PropertiesMap';
import PropertiesGrid from '../../components/isolated/propertiesGrid/PropertiesGrid';
import { homeBox, aboutBox } from '../../utils/navigationData';

const Properties = () => {
  return (
    <>
      <Head title='Properties' description='Properties - Moderne - Real-Estate' />

      <Layout isHeaderLight={false}>
        <main className='flow-spacing'>
          <PropertiesMap />

          <PropertiesGrid />

          <Navigation boxOneValues={homeBox} boxTwoValues={aboutBox} />
        </main>
      </Layout>
    </>
  );
};

export default Properties;
