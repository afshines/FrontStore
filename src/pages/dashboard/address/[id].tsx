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
import { Button, ButtonGroup } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import BreadCrumpTiss from '@/components/breadcrump';

import axios from "axios";
import DashboardMenus from "@/components/dashboard";
import Swal from "sweetalert2";
export default function Home({ headers }: any) {
    // const Map = useMemo(() => dynamic(
    //     () => import('@/component/map'),
    //     {
    //         loading: () => <p>A map is loading</p>,
    //         ssr: false
    //     }
    // ), [])
    const [userdata, setUserData] = useState<any>(null);
    const [diasbleedit, setDisable] = useState<any>(true);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [data, setData] = useState<any>({
        address: null,
        latlng: null,
        city: null,
        zone: null,
        unint: null,
        postalcode: null,
        recivername: null,
        recivermobile: null,
        lastnamereciver: null,
        plaque: null
    });

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

            setData({
                address: null,
                latlng: null,
                city: null,
                zone: null,
                unint: null,
                postalcode: null,
                recivername: res.data.message.name,
                recivermobile: res.data.message.email,
                lastnamereciver: res.data.message.lastname,
                plaque: null
            });
            if (res.data.message.name == undefined) {
                router.push('/dashboard/profile')
            }
        })
    }
    const handleChange = (event: any) => {
        setData({ ...data, city: event.target.value as string })
    };
    const Save = async () => {
        try {
            var x = await axios.post(`${url}/v1/auth/address`, data, {
                headers: {
                    Authorization: 'Bearer ' + cookie['token'],

                }
            })
            router.push('/dashboard/address')

        } catch (error: any) {
            console.log(error.response)
            if (error.response.status == 403) {

                Swal.fire('فیلدهای ستاره دار را پر کنید')
            } else {
                Swal.fire('خطا در ورود اطلاعات')
            }
        }
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
            url: '/dashboard/address'

        },{
            name: 'آدرس جدید'

        }
    ]
    useEffect(() => {
        loaduset();


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
                <div>
                    {userdata != null &&


                        <form>

                            <div className="container m-auto">
                            <div className="w-full mb-3">
                            <BreadCrumpTiss data={breadcrump} ></BreadCrumpTiss>
                            <hr ></hr>

                                <h1 className="font-[20px] font-bold">آدرس جدید</h1>
                            </div>
                                <div className="grid grid-cols-4">
                                    <div className="col-span-4 mt-3 p-3">
                                        <Input
                                            label="آدرس"

                                            placeholder="آدرس"
                                            defaultValue={data.address}
                                            onChange={(e) => { setData({ ...data, address: e.target.value }) }}
                                        />

                                    </div>
                                    <div className="p-3 col-span-4 sm:col-span-1" >

                                        <Input
                                            label="شهر"

                                            defaultValue={data.city}
                                            onChange={(e) => { setData({ ...data, city: e.target.value }) }}
                                        />

                                    </div>
                                    <div className="p-3  col-span-4 sm:col-span-1">
                                        <Input
                                            label="منطقه"

                                            defaultValue={data.city}
                                            onChange={(e) => { setData({ ...data, zone: e.target.value }) }}
                                        />

                                    </div>
                                    <div className="p-3  col-span-4 sm:col-span-1">
                                        <Input
                                            label="پلاک"

                                            defaultValue={data.plaque}
                                            onChange={(e) => { setData({ ...data, plaque: e.target.value }) }}
                                        />

                                    </div>
                                    <div className="p-3  col-span-4 sm:col-span-1">
                                        <Input
                                            label="واحد"
                                            defaultValue={data.unit}
                                            onChange={(e) => { setData({ ...data, unit: e.target.value }) }}
                                        />

                                    </div>
                                    <div className="col-span-4">

                                        <Checkbox {...label}

                                            onChange={(e) => {
                                                setDisable(e.target.checked)

                                                if (e.target.checked == true) {
                                                    setData({ ...data, recivername: userdata.name })
                                                    setData({ ...data, recivermobile: userdata.email })
                                                    setData({ ...data, lastnamereciver: userdata.lastname })
                                                }

                                            }}

                                        />

                                        <span className="pr-3">گیرنده خودم هستم</span>
                                    </div>
                                    <div className="p-3  col-span-4 sm:col-span-1" >
                                        <Input
                                            disabled={diasbleedit}
                                            onChange={(e) => {
                                                setData({ ...data, recivername: e.target.value })
                                            }}
                                            defaultValue={data.recivername}
                                            fullWidth label="نام گیرنده" />
                                    </div>
                                    <div className="p-3  col-span-4 sm:col-span-1 ">
                                        <Input
                                            disabled={diasbleedit}
                                            onChange={(e) => {
                                                setData({ ...data, lastnamereciver: e.target.value })
                                            }}
                                            defaultValue={data.lastnamereciver}
                                            fullWidth label="نام خانوادگی گیرنده" />
                                    </div>
                                    <div className="p-3  col-span-4 sm:col-span-1 ">
                                        <Input
                                            disabled={diasbleedit}
                                            onChange={(e) => {
                                                setData({ ...data, recivermobile: e.target.value })
                                            }}
                                            defaultValue={data.recivermobile}
                                            fullWidth label="شماره همراه" />
                                    </div>
                                    <div className="p-3 col-span-4">
                                        <Button  onClick={(e) => { Save() }} >ذخیره سازی</Button>
                                        </div>

                                </div>
                             

                            </div>
                        </form>
                    }
                </div>

                <div className="">

                    <FooterOfSite data={headers}></FooterOfSite>
                </div>

            </div>
        </div>

    );
}
export const getServerSideProps = async (context: any) => {
    const res2 = await fetch(`${url}/v1/headerinfo`);
    const headers = await res2.json();

    return {
        props: {
            headers: headers
        },
    }
}