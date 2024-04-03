import FooterOfSite from "@/components/footerofsite";
import Headerofwebsite from "@/components/header";
import SearchBox from "@/components/searchbox";
import Image from "next/image";
import '@/app/globals.css'
import { url } from '../data/config';
import Head from 'next/head'
import ShowArticle from "@/components/showarticle";
import Tabfirstpage from "@/components/tabfirstpage";
import Cproducts from "@/components/carsoulproducts";
import SearchFilter from "@/components/searchfilter";

export default function Home({ data, headers ,list}: any) {
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

            <div className="bg-white">

                <div className="mt-24 sm:mt-0 bg-white">
                    <div className="bg-[url('/covergroup.png')] w-full h-[300px] bg-no-repeat bg-cover">
                        <div className='container mx-auto mb-4 ' >
                            <SearchBox data={headers}></SearchBox>
                        </div>
                    </div>

                    <div className="main-page bg-white  w-full h-auto " >
                             <SearchFilter list={list}></SearchFilter>   
                    </div>

                </div>


            </div>

            <FooterOfSite data={headers}></FooterOfSite>
        </div>



    );
}
export const getServerSideProps = async (context: any) => {
    var x = context.query.page == undefined ? 1 : context.query.page;

    const res2 = await fetch(`${url}/v1/headerinfo`);
    const headers = await res2.json();
    var search='';
    if(context.query.group!=undefined){
        search=search+'&group='+encodeURI(context.query.group);
    };

    const res3 = await fetch(`${url}/v1/products?page=${x}${search}`)
    const data3 = await res3.json()
    return {
        props: {
            headers: headers,
            list:data3
        },
    }
}