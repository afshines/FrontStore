import FooterOfSite from "@/components/footerofsite";
import Headerofwebsite from "@/components/header";
import '@/app/globals.css'
import { url } from '../../data/config';
import Head from 'next/head'
import { useState, useEffect } from "react";
import { getCookies, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { Button, ButtonGroup } from "@nextui-org/react";
import BreadCrumpTiss from '@/components/breadcrump';

import axios from "axios";
import DashboardMenus from "@/components/dashboard";
export default function Home({ data, headers }: any) {
    const [userdata, setUserData] = useState<any>(null);
    const [addresslist, setAddress] = useState<any>(null);

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
    const loadaddress = async () => {
        return await axios.get(`${url}/v1/auth/address`, {
            headers: {
                Authorization: 'Bearer ' + cookie['token'],

            }
        }).then(async function (res: any) {
            console.log(res);
            setAddress(res.data.message)

        })
    }
    const breadcrump = [
        {
            name: 'خانه',
            url: '/'
        },
        {
            name: 'داشبورد',
            url: '/dashboard/address'
        },
        {
            name: 'آدرس ها',
        }
    ]
    useEffect(() => {
        loaduset();
        loadaddress();

    }, []);
    const styletbl = 'bg-slate-700 text-white m-1 p-3 rounded-lg'
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

                <DashboardMenus active={'address'} ></DashboardMenus>

                <div className="w-[100%] min-h-[400px]" >
                    <div className="container m-auto">
                        <div >
                            <div className="w-full mb-3">
                            <BreadCrumpTiss data={breadcrump} ></BreadCrumpTiss>
                    <hr ></hr>
                                <h1 className="font-[20px] font-bold">لیست آدرس ها</h1>
                            </div>
                            <div className="flex">
                                <a className="m-1 bg-green-900 rounded-medium pt-2 pr-2 pl-2" href="/dashboard/address/new" >
                                    <div className="text-white">آدرس جدید</div>
                                </a>
                                <Button className="m-1 bg-blue-950" onClick={(e) => { loadaddress() }}>
                                    <div className="text-white">دوباره خوانی</div>
                                </Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-12   m-auto" >

                            <div className="col-span-12">
                                {userdata != null && <>
                                    {
                                        addresslist != null &&
                                        addresslist.map((row: any) => (
                                          
                                            <div className="grid grid-cols-5">
                                                <div className="col-span-3 sm:col-span-1" >
                                                    <div className={styletbl} >  {row.address}</div>
                                                </div>
                                                <div className="col-span-2 sm:col-span-1">
                                                    <div className={styletbl}> {row.zone}</div>
                                                </div>
                                                <div  className="col-span-3 sm:col-span-1">
                                                    <div className={styletbl}>  {row.recivername + ' ' + row.lastnamereciver}</div>
                                                </div>
                                                <div  className="col-span-2 sm:col-span-1">
                                                    <div className={styletbl} >  {row.zone}</div>
                                                </div>

                                                <div className="col-span-2 sm:col-span-1">
                                                    <div className="flex">
                                                        <a href={`/dashboard/address/${row._id}`} className={`${styletbl} text-center`} > 
                                                            <img src="/edit.svg" width={20}></img>
                                                        </a>

                                                        <div className={`${styletbl} text-center bg-red-400`} > 
                                                        <img src="/trash.svg" width={20}></img>

                                                        </div>

                                                    </div>

                                                </div>


                                            </div>
                                        ))}
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