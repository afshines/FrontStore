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

export default function Home({ data, headers }: any) {
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
                                <div className="p-3 text-white">
                                    {minutes}
                                </div>
                            </div>
                            <div >
                                <div className="p-3 text-white">
                                    {seconds}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-2 pb-3">
                        <Input onChange={(e) => { setCode(e.target.value) }} style={{ width: '150px', textAlign: 'center' }} placeholder="کد تایید"></Input>

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
            <div className="pb-3 bg-white " >
                <div className=" text-center">
                    <div
                        className="border-solid-[4px]  p-11 w-[300px] mr-auto ml-auto p-2 rounded bg-zinc-700 "
                    >
                        <div className="text-center mt-3" >
                            <img src={'/logo.png'} width={'100px'} />
                            <Countdown date={Date.now() + 300000}
                                renderer={renderer}

                            />
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

    const data = await res.json();
    return {
        props: {
            data: data,
            headers: headers
        },
    }
}