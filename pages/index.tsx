import Head from "next/head";
import { ProductsList } from "screens/productsList";

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
