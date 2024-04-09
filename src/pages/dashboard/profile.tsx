import FooterOfSite from "@/components/footerofsite";
import Headerofwebsite from "@/components/header";
import '@/app/globals.css'
import { url } from '../../data/config';
import Head from 'next/head'
import { useState, useEffect } from "react";
import { getCookies, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { Button, Input } from "@nextui-org/react";
import Swal from "sweetalert2";
import axios from "axios";
import BreadCrumpTiss from '@/components/breadcrump';

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
    const save = async () => {

        try {
            var x = await axios.put(`${url}/v1/auth/info/1`, userdata, {
                headers: {
                    Authorization: 'Bearer ' + cookie['token'],

                }
            })
            Swal.fire('ذخیره سازی انجام گردید')

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
            name: 'پروفایل',
        }
    ]
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
            <div className="bg-white pt-20">

                <DashboardMenus active={'profile'} ></DashboardMenus>

                <div className="w-[100%] min-h-[400px]" >
                    <div className="container m-auto">
                    <BreadCrumpTiss data={breadcrump} ></BreadCrumpTiss>
                    <hr ></hr>

                    <h1 className="font-[20px] font-bold">پروفایل</h1>

                        <div className="grid grid-cols-12  container m-auto" >
                            <div className="col-span-12">
                            </div>
                            <div className="col-span-12">
                                {userdata != null && <>
                                    <form dir="rtl">
                                        <div className="grid grid-cols-2 m-auto">
                                            <div className="p-2 col-span-2 sm:col-span-1">
                                                <Input
                                                    label="شماره همراه"
                                                    disabled
                                                    defaultValue={userdata.email}
                                                >
                                                </Input>
                                            </div>
                                            <div className="p-2 col-span-2 sm:col-span-1">
                                                <Input
                                                    label="نام"
                                                    onChange={(e) => setUserData({ ...userdata, name: e.target.value })}
                                                    defaultValue={userdata.name}
                                                >
                                                </Input>
                                            </div>
                                            <div className="p-2 col-span-2 sm:col-span-1">
                                                <Input
                                                    label="نام خانوادگی"
                                                    onChange={(e) => setUserData({ ...userdata, lastname: e.target.value })}
                                                    defaultValue={userdata.lastname}
                                                >
                                                </Input>
                                            </div>
                                            <div className="p-2 col-span-2 sm:col-span-1">
                                                <Input
                                                    label="ایمیل"
                                                    dir="ltr"
                                                    type="email"
                                                    onChange={(e) => setUserData({ ...userdata, email2: e.target.value })}
                                                    defaultValue={userdata.email2}
                                                >
                                                </Input>
                                            </div>
                                            <div className="p-2 col-span-2 sm:col-span-1">
                                                <Input
                                                    label="شماره ثابت"
                                                    dir="ltr"
                                                    type="number"

                                                    onChange={(e) => setUserData({ ...userdata, phone: e.target.value })}
                                                    defaultValue={userdata.phone}
                                                >
                                                </Input>
                                            </div>
                                            <div className="p-2 col-span-2 sm:col-span-1">
                                                <Input
                                                    label="کدملی"
                                                    dir="ltr"
                                                    type="number"

                                                    onChange={(e) => setUserData({ ...userdata, nantionalcode: e.target.value })}
                                                    defaultValue={userdata.nantionalcode}
                                                >
                                                </Input>
                                            </div>
                                            <div className="p-2 col-span-2 sm:col-span-1 ">
                                                <label className="pl-3">تاریخ تولد </label>
                                                <DatePicker
                                                    className="w-full"
                                                    style={{
                                                        padding: 25,
                                                        backgroundColor: 'lightgray',
                                                        width: '100%'
                                                    }}
                                                    calendar={persian}
                                                    locale={persian_fa}
                                                    value={userdata.birthday}
                                                    onChange={(e) => setUserData({ ...userdata, birthday: e })}

                                                />
                                            </div>
                                            <div className="p-2 col-span-2 text-center">
                                                <Button  onClick={(e) => { save() }}>
                                                    ذخیره سازی
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                </>}
                            </div>
                            {/* <form dir="rtl">
                                        <Grid container>
                                           ariant={'outlined'} defaultValue={userdata.lastname}></TextField>
                                            </Grid>
                                          
                                            {/* <Grid xs={12} sm={3} p={2}>
                                                <Typography fontSize={10}>کدملی </Typography>
                                                <TextField dir="ltr"
                                                    onChange={(e) => setUserData({ ...userdata, nantionalcode: e.target.value })}

                                                    fullWidth variant={'standard'} defaultValue={userdata.nantionalcode}></TextField>
                                            </Grid> */}
                            {/* <Grid xs={12} sm={4} p={2}>
                                                <Typography fontSize={14}>تاریخ تولد </Typography>
                                                <Box style={{ direction: "rtl" }}>
                                                    <DatePicker
                                                        style={{
                                                            padding:25,
                                                        }}
                                                        calendar={persian}
                                                        locale={persian_fa}
                                                        value={userdata.birthday}
                                                        onChange={(e) => setUserData({ ...userdata, birthday: e })}

                                                    />
                                                </Box> */}

                            {/* <TextField dir="ltr"
                                                    onChange={(e) => setUserData({ ...userdata, birthday: e.target.value })}

                                                    fullWidth variant={'outlined'} defaultValue={userdata.birthday}></TextField> */}
                            {/* </Grid>

                                            <Grid xs={12} p={2}>
                                                <Box width={'100%'} textAlign={'center'}>
                                                    <Button variant="contained" style={{ backgroundColor: 'red' }} onClick={(e) => { save() }}>
                                                        ذخیره سازی
                                                    </Button>

                                                </Box>
                                            </Grid>


                                        </Grid>
                                    </form> */}
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