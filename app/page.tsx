import Image from "next/image";
import Banner from "@/app/components/Banner";
import Explore from "@/app/components/Explore/Explore";
import Live from "@/app/components/Live/Live";
import GreatOurDorr from "@/app/components/GreatOurDorr";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/Footer";
import Head from "next/head";
import Test from "./components/Test";

export default function Home() {
  return (
    <>
    <Header placeholder={""}/>
    <main>
      <Banner></Banner>
      <Test></Test>
      <Explore></Explore>
      <Live></Live>
      <GreatOurDorr></GreatOurDorr>
    </main>
    <Footer/>
    </>
  );
}
