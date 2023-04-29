import Head from '../../components/reusable/head/Head';
import Layout from '../../components/reusable/layout/Layout';
import Hero from '../../sections/home/Hero';
import Content from '../../sections/home/Content';
import Navigation from '../../components/reusable/navigation/Navigation';
import { propertiesBox, aboutBox } from '../../utils/navigationData';

const Home = () => {
  return (
    <>
      <Head title='Home' description='Pagina de Inicio - Agencia Moderne' />

      <Layout isHeaderLight>
        <main className='flow-spacing'>
          <Hero />

          <Content />

          <Navigation boxOneValues={propertiesBox} boxTwoValues={aboutBox} />
        </main>
      </Layout>
    </>
  );
};

export default Home;
