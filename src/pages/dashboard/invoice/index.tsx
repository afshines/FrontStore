import FooterOfSite from "@/components/footerofsite";
import Headerofwebsite from "@/components/header";
import SearchBox from "@/components/searchbox";
import Image from "next/image";
import '@/app/globals.css'
import { url } from '@/data/config';
import Head from 'next/head'
import ShowArticle from "@/components/showarticle";
import Tabfirstpage from "@/components/tabfirstpage";
import { useState, useEffect } from "react";
import { getCookies, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { DashboardMenu } from "@/sys/dashboard"
import TabProfile from "@/components/tabprofile"
import BreadCrumpTiss from '@/components/breadcrump';
import { DateObject } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

import axios from "axios";
import DashboardMenus from "@/components/dashboard";
import ExportMenuPay from "@/components/menupay";
export default function Home({ data, headers }: any) {
    const [userdata, setUserData] = useState<any>(null);
    const [active, setActive] = useState<any>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [listinvoice, setList] = useState<any>(null);

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
    const chanepage = async (page: any) => {
        setActive(page);
        loadinvoice(page);
    }
    const loadinvoice = async (current: any) => {
        setLoading(false);
        return await axios.get(`${url}/v1/invoice?paymentstatus=${current}`, {
            headers: {
                Authorization: 'Bearer ' + cookie['token'],

            }
        }).then(async function (res: any) {
            setList(res.data.message)
            setLoading(true);
        })
    }
    const covert = (item: any) => {
        const date = new DateObject({
            date: item * 1000
        }).convert(persian, persian_fa)
        console.log(date)
        return date.year + '/' + date.monthIndex + '/' + date.day;
    }
    useEffect(() => {
        loaduset();
        loadinvoice(1);

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

                <DashboardMenus active={'invoice'} ></DashboardMenus>

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
                                        <div className="p-1 w-full" >
                                            <div className="container m-auto grid grid-cols-3 " >

                                                <div className="col-span-1">
                                                    <a className="cursor-pointer" onClick={(e) => { chanepage(1) }}>
                                                        <div className="w-[100%] h-[50px]"   >
                                                            <div className={`p-2 ${active == 1 ? 'bg-gray-600' : 'bg-white '}`} >
                                                                <div className="text-cener">
                                                                    <div className={`text-right    ${active == 1 ? 'text-white' : 'text-gray-800 '} `}>بایگانی</div>

                                                                </div>

                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-span-1">
                                                    <div className="w-full">
                                                        <a className="cursor-pointer" onClick={(e) => { chanepage(2) }}>
                                                            <div className={`p-2 ${active == 2 ? 'bg-gray-600' : 'bg-white '}`} >
                                                                <div className="text-cener">
                                                                    <div className={`text-right    ${active == 2 ? 'text-white' : 'text-gray-800 '} `}>در حال اجرا</div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-span-1">
                                                    <a className="cursor-pointer" onClick={(e) => { chanepage(3) }}>
                                                        <div className="w-[100%] h-[50px]"   >
                                                            <div className={`p-2 ${active == 3 ? 'bg-gray-600' : 'bg-white '}`} >
                                                                <div className="text-cener">
                                                                    <div className={`text-right    ${active == 3 ? 'text-white' : 'text-gray-800 '} `}>پرداخت نشده</div>

                                                                </div>

                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </>}
                                {
                                    loading == true ?
                                        <div>
                                            <div className="w-full bg-slate-900 h-auto rounded-xl p-2 pt-3 pr-3 text-white mt-3">
                                                <div className="grid grid-cols-2 sm:grid-cols-5 ">
                                                    <div className="">
                                                        شماره فاکتور
                                                    </div>
                                                    <div className="">
                                                        تاریخ
                                                    </div>
                                                    <div className="">
                                                        <strong> قیمت</strong>
                                                    </div>
                                                    <div className="">
                                                        گیرنده
                                                    </div>
                                                    <div >

                                                        <a    >
                                                            <strong>
                                                                <div color={'black'}>نمایش سفارش  </div>
                                                            </strong>
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>
                                            {listinvoice != null && listinvoice.map((item: any, index: any) => {
                                                return (
                                                    <div className="w-full bg-slate-400 h-auto rounded-xl p-2 pt-3 pr-3 text-white mt-3">
                                                        <div className="grid grid-cols-2 sm:grid-cols-5 ">
                                                            <div className="">
                                                                {item.invoicenumber}
                                                            </div>
                                                            <div className="">
                                                                {covert(item.createdAt)}
                                                            </div>
                                                            <div className="">
                                                                <strong> {item.totalprice} تومان </strong>
                                                            </div>
                                                            <div className="">
                                                                گیرنده :<strong> {item.address.recivername}  {item.address.lastnamereciver}</strong>
                                                            </div>
                                                            <div >

                                                                <a href={`/dashboard/invoice/${item.invoicenumber}`}    >
                                                                    <strong>
                                                                        <div color={'black'}>نمایش سفارش  </div>
                                                                    </strong>
                                                                </a>
                                                            </div>
                                                        </div>

                                                    </div>


                                                )
                                            })}
                                        </div>
                                        :
                                        <div className="p-3 text-center w-full pt-4">
                                            <div className="w-[100px] m-auto animate-spinner-ease-spin">
                                                <img src="/loading.png" width={100}></img>
                                            </div>
                                        </div>
                                }
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