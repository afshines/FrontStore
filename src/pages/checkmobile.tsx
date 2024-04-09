import FooterOfSite from "@/components/footerofsite";
import Headerofwebsite from "@/components/header";
import SearchBox from "@/components/searchbox";
import Image from "next/image";
import '@/app/globals.css'
import { url } from '../data/config';
import Head from 'next/head'
import ShowArticle from "@/components/showarticle";
import Tabfirstpage from "@/components/tabfirstpage";
import { deleteCookie, getCookies, setCookie } from "cookies-next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import { Button, ButtonGroup, Textarea, Input } from "@nextui-org/react";
import { TokenUser } from '@/sys/userapi'
import Countdown from 'react-countdown';

export default function Home({ data, headers,aricle }: any) {
    const [code, setCode] = useState<any>(null);
    const [userdata, setUserData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    var headername = "کد تایید ";

    let cookie = getCookies();
    const router = useRouter()
    const changemobile = async () => {
        deleteCookie('token');
        location.href = '/login';

    }
    const datacheckcode = async () => {
        setLoading(true);
        let cookie = getCookies();
        try {
            const answer = await axios.post(`${url}/v1/checkcode`, {
                code: code
            }, {

                headers: {
                    Authorization: 'Bearer ' + cookie['token'],

                }
            })
            setCookie('token', answer.data.token);
            setCookie('user', true);
            location.href = '/dashboard';
            //  router.push('/dashboard')
            console.log(answer.data.token);
        } catch (error: any) {
            console.log(error.response.status);
            if (error.response.status == 403) {
                Swal.fire('کد اشتباه می باشد')
            }
            if (error.response.status == 402) {
                Swal.fire('زمان اعتبار کد به پایان رسیده است')
            }
            if (error.response.status == 404) {
                Swal.fire('خطا در شناسایی')
            }
        }

    }
    const Completionist = () => <span>

        <div className="mt-0 mb-3">
            ‌<Button style={{ width: '150px' }} color="success" >ارسال مجدد</Button>
            <div className="mt-3" >
                ‌<Button onClick={(e) => { changemobile() }} style={{ width: '150px', borderColor: 'black' }}>
                    <div color={'black'}>تغییر شماره تماس</div>

                </Button>
            </div>
        </div>
    </span>;
    const renderer = ({ hours, minutes, seconds, completed }: any) => {



        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span>


                <div className="w-[100%]" >
                    <div className="w-[140px] mr-auto ml-auto">
                        <div className="flex gap-3">
                            <div >
                                <div className="p-3 text-black">
                                    {minutes}
                                </div>
                            </div>
                            <div >
                                <div className="p-3 text-black">
                                    {seconds}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-2 pb-3 m-auto mb-4  w-[200px]">
                        <Input onChange={(e) => { setCode(e.target.value) }} style={{ width: '100%', textAlign: 'center' }} placeholder="کد تایید"></Input>

                    </div>
                    <div>

                        ‌<Button onClick={(e) => { datacheckcode() }} style={{ width: '150px', backgroundColor: 'blue', color: 'white' }}>تایید</Button>
                    </div>
                    <div className="mt-3">
                        ‌<Button onClick={(e) => { changemobile() }} style={{ width: '150px', borderColor: 'black' }}>
                            <div className="text-black">تغییر شماره تماس</div>

                        </Button>
                    </div>
                </div>
            </span>;
        }
    };
    const loaddata = async () => {
        const x = await TokenUser();
        setUserData(x)
    }
    useEffect(() => {

        loaddata();

    }, []);
    return (

        <div className="">
            <Headerofwebsite data={headers}></Headerofwebsite>

            <Head>
                <title>{headername}</title>
                <meta property="og:type" content="website" />
                <meta property="og:title" content={headername} />
                <meta property="twitter:title" content={headername} />
                <meta property="og:title" content={headername} />
                <meta name="description" content={headername} />
                <meta property="twitter:description" content={headername} />
                <meta name="keywords" content={headername} />
                <meta name="description" content={headername} />
            </Head>
            
            <div className=" bg-white ">
                <div className="text-center bg-slate-300 ">
                    <div className="  text-center">

                        <div className="grid grid-cols-3 w-full loginpagemobile ">

                            <div className={`col-span-3 sm:col-span-2 `}>

                                <div className={`w-[300px] align-middle m-auto mt-[20vh] h-[400px] bg-white bg-opacity-90	 pt-10 rounded-large `}>
                                    {
                                        headers.setting.masterimage != null && <img className="logo  m-auto mb-14 h-[40px]" src={url + headers.setting.masterimage.url} alt={data.setting.title} />
                                    }
                                          <Countdown date={Date.now() + 300000}
                                renderer={renderer}

                            />
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