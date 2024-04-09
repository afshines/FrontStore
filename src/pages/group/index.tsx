import FooterOfSite from "@/components/footerofsite";
import Headerofwebsite from "@/components/header";
import SearchBox from "@/components/searchbox";
import Image from "next/image";
import '@/app/globals.css'
import { url } from '@/data/config';
import Head from 'next/head'
import ShowArticle from "@/components/showarticle";
import Tabfirstpage from "@/components/tabfirstpage";
import BreadCrumpTiss from '@/components/breadcrump';
import { Button } from "@nextui-org/react";

export default function Home({ data, headers }: any) {
    const breadcrump = [
        {
            name: 'خانه',
            url: '/'
        },

        {
            name: 'همه  گروه ها',
        }
    ]
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
                <div className="container m-auto pt-3">
                    <BreadCrumpTiss data={breadcrump} ></BreadCrumpTiss>
                    <hr></hr>
                    <h1 className="font-['peyda'] text-black text-[22px] mt-3 ">{'همه گروه ها'}</h1>

                </div>
                <div className="container m-auto" >
                    <div className="grid  grid-cols-2 sm:grid-cols-4">

                        {
                            headers.allgroups.map((item: any) => {
                                return (
                                    <div className=" mt-1 mr-1 ml-1 mt-3 mb-3 ">
                                        <a href={`/group/${item.url}`}>
                                        {item.masterimage != null ?
                                            <img className={`w-full m-auto h-[200px] object-contain    `} src={url + item.masterimage.path + '/thump/' + item.masterimage.name} ></img>
                                            :
                                            <img className={`w-full m-auto h-[200px] object-contain   `}
                                                src={`/images/noimage.png`} ></img>


                                        }
                                        <div className="w-full mt-3 text-center">
                                            {item.name}
                                        </div>

                                        </a>
                                       
                                    </div>

                                )
                            })
                        }
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

    const data = await res.json();
    return {
        props: {
            data: data,
            headers: headers
        },
    }
}