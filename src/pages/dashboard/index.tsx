import FooterOfSite from "@/components/footerofsite";
import Headerofwebsite from "@/components/header";
import SearchBox from "@/components/searchbox";
import Image from "next/image";
import '@/app/globals.css'
import { url } from '../../data/config';
import Head from 'next/head'
import ShowArticle from "@/components/showarticle";
import Tabfirstpage from "@/components/tabfirstpage";
import { useState, useEffect } from "react";
import { getCookies, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { DashboardMenu } from "@/sys/dashboard"
import TabProfile from "@/components/tabprofile"

import axios from "axios";
export default function Home({ data, headers }: any) {
    const [userdata, setUserData] = useState<any>(null);
    let cookie = getCookies();
    const router = useRouter()

    const loaduset = async () => {
        return await axios.get(`${url}/v1/auth/info`, {
            headers: {
                Authorization: 'Bearer ' + cookie['token'],

            }
        }).then(async function (res: any) {
            console.log(res);
            setUserData(res.data.message)
            if (res.data.message.name == undefined) {
                router.push('/dashboard/profile')
            }
        })
    }
    useEffect(() => {
        loaduset();


    }, []);
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
            <div className="w-[100%] min-h-[400px]" >
                <div className="container m-auto">
                    <div className="grid grid-cols-12  container m-auto" >
                        <div  className="col-span-12">
                            {/* <Dashbordmenu ></Dashbordmenu> */}
                        </div>
                        <div  className="col-span-12">
                            {userdata != null && <>
                                <div >
                                    <div  className="container m-auto">
                                        {/* <TabProfile value={0}></TabProfile> */}
                                    </div>
                                    <div className="p-1 w-[100%]">
                                        <div  className="grid grid-cols-12  container m-auto">
                                            {
                                                DashboardMenu.map((item: any) => {

                                                    return (
                                                        item.icon != null &&
                                                        <div className="grid grid-cols-12 p-3 mb-4" >
                                                            <a href={item.url}>
                                                                <div style={{ width: '100%', height: '100px' }}>
                                                                    <div className="p-3" >
                                                                    <div className="grid grid-cols-12 p-3 mb-4" >
                                                                    <div className="col-span-2" >
                                                                                <div className="pt-1 text-center" >
                                                                                    <img src={item.icon} width={40}></img>

                                                                                </div>
                                                                            </div>
                                                                            <div className="col-span-10">
                                                                                <div className="pt-1 text-center" >p
                                                                                    <div className="text-right" >{item.name}</div>

                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </>}
                        </div>

                    </div>
                </div>

            </div>
            </div>
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