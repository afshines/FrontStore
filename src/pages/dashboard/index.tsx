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
import BreadCrumpTiss from '@/components/breadcrump';

import axios from "axios";
import DashboardMenus from "@/components/dashboard";
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
    const breadcrump = [
        {
            name: 'خانه',
            url: '/'
        },

        {
            name: 'داشبورد',
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
            <div className="bg-white pt-20">

                <DashboardMenus active={'dashboard'} ></DashboardMenus>

                <div className="w-[100%] min-h-[400px]" >
                    <div className="container m-auto">
                        <BreadCrumpTiss data={breadcrump} ></BreadCrumpTiss>
                        <hr ></hr>

                        <div className="grid grid-cols-12  container m-auto" >
                            <div className="col-span-12">
                            </div>
                            <div className="col-span-12">
                                {userdata != null && <>
                                    <div>
                                        <h3 className="text-[20px]"> {userdata.name} خوش آمدید</h3>
                                    </div>
                                </>}
                            </div>
                            {
                                DashboardMenu.map((item): any => {
                                    return (
                                        DashboardMenu.indexOf(item)!=0 &&
                                        <div className="col-span-3 p-4">
                                            <a href={item.url}>
                                                <div className="w-full m-1 bg-blue-950 p-5">
                                                    <div>
                                                        <img src={item.icon} width={40}></img>
                                                    </div>
                                                    <div className="pt-2 text-center" >
                                                        <div className="text-right text-white text-[13px] sm:text-[17px]" >{item.name}</div>
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