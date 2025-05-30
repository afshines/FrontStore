import FooterOfSite from "@/components/footerofsite";
import Headerofwebsite from "@/components/header";
import SearchBox from "@/components/searchbox";
import Image from "next/image";
import '@/app/globals.css'
import { url } from '../data/config';
import Head from 'next/head'
import ShowArticle from "@/components/showarticle";
import Tabfirstpage from "@/components/tabfirstpage";
import LoginComponent from "@/components/loginComponent";

export default function Home({ data, headers, aricle }: any) {
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

            <div className=" bg-white ">
                <div className="text-center bg-slate-300 ">
                    <div className="  text-center">

                        <div className="grid grid-cols-3 w-full loginpagemobile ">

                            <div className={`col-span-3 sm:col-span-2 `}>

                                <div className={`w-[300px] align-middle m-auto mt-[20vh] h-[400px] bg-white bg-opacity-90	 pt-10 rounded-large `}>
                                    {
                                        headers.setting.masterimage != null && <img className="logo  m-auto mb-14 h-[40px]" src={url + headers.setting.masterimage.url} alt={data.setting.title} />
                                    }
                                    <LoginComponent></LoginComponent>
                                </div>
                            </div>
                            <div className="invisible sm:visible col-span-1">

                                {
                                    aricle.message.masterimage != null &&
                                    <div>
                                        <img className="w-full h-[80vh] object-cover" src={url + aricle.message.masterimage.url}></img>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <FooterOfSite data={headers}></FooterOfSite>
        </div>



    );
}
export const getServerSideProps = async (context: any) => {
    const res = await fetch(`${url}/v1/firstpage`);
    const res2 = await fetch(`${url}/v1/headerinfo`);
    const headers = await res2.json();
    const res3 = await fetch(`${url}/v1/article/register-page`);
    const aricle = await res3.json();

    const data = await res.json();
    return {
        props: {
            data: data,
            headers: headers,
            aricle: aricle
        },
    }
}