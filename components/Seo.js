import Head from 'next/head';

export default function Seo({ title }) {
  const titlemsg = `${title} | Next Movies`;
  return (
    <Head>
      <title>{titlemsg}</title>
    </Head>
  );
}
