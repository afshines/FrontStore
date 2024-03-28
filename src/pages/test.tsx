import FooterOfSite from "@/components/footerofsite";
import Headerofwebsite from "@/components/header";
import SearchBox from "@/components/searchbox";
import Image from "next/image";
import '@/app/globals.css'
import { url } from '../data/config';
import Head from 'next/head'
import ShowArticle from "@/components/showarticle";
import Tabfirstpage from "@/components/tabfirstpage";

export default function Home({ data, headers }: any) {
    return (

        <div className="">
            <Head>
                <title>{headers.setting.title}</title>
                <meta property="og:type" content="website" />
                <meta property="og:title" content={headers.setting.title} />
                <meta property="twitter:title" content={headers.setting.title} />
                <meta property="og:title" content={headers.setting.title} />
                <meta name="description" content={headers.setting.description} />
                <meta property="twitter:description" content={headers.setting.description} />
                <meta name="keywords" content={headers.setting.keywords} />
                <meta name="description" content={headers.setting.description} />
                <link rel="icon" href="/fav.png" />

            </Head>
            <Headerofwebsite data={headers}></Headerofwebsite>

            <div className="">


             

            <FooterOfSite data={headers}></FooterOfSite>
            </div>

</div>

            );
}
export const getServerSideProps = async (context: any) => {
  const res = await fetch(`${url}/v1/firstpage`);
            const res2 = await fetch(`${url}/v1/headerinfo`);
            const headers = await res2.json();

            const data = await res.json();
            return {
                props: {
                data: data,
            headers: headers
    },
  }
}