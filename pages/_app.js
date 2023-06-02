import Layout from '@/components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} /> {/* 이 부분이 Layout의 children prop */}
      </Layout>
    </>
  );
}
