import Head from "next/head";
import { ProductsList } from "screens/products-list";

export default function Home() {
  return (
    <>
      <Head>
        <title>Test task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProductsList />
    </>
  );
}
