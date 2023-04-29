import Head from '../../components/reusable/head/Head';
import Layout from '../../components/reusable/layout/Layout';
import Content from '../../sections/404/Content';

const NotFound = () => {
  return (
    <>
      <Head title='Error' description='Error Page' />

      <Layout isHeaderLight={false}>
        <main>
          <Content />
        </main>
      </Layout>
    </>
  );
};

export default NotFound;
