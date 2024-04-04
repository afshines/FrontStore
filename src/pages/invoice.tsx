import FooterOfSite from "@/components/footerofsite";
import Headerofwebsite from "@/components/header";
import SearchBox from "@/components/searchbox";
import Image from "next/image";
import '@/app/globals.css'
import { url } from '../data/config';
import Head from 'next/head'
import ShowArticle from "@/components/showarticle";
import Tabfirstpage from "@/components/tabfirstpage";
import Swal from "sweetalert2";
import axios from "axios";
import { getCookies } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react"

import { Button, ButtonGroup, Textarea } from "@nextui-org/react";

export default function Home({ data, headers }: any) {
    let cookie = getCookies();
    const router = useRouter()
    const [addresslist, setAddress] = useState<any>(null);
    const [invoice, setInvoice] = useState<any>(null);
    const [description, setDescription] = useState<any>('');
    const [discountprice, setDicountPrice] = useState<any>(0);
    const [startinvoice, Setstartinvoice] = useState<any>(true);

    const [empty, setEmpty] = useState<any>(true);

    const [userdata, setUserData] = useState<any>(null);

    const loaduser = async () => {
        return await axios.get(`${url}/v1/auth/info`, {
            headers: {
                Authorization: 'Bearer ' + cookie['token'],

            }
        }).then(async function (res: any) {
            setUserData(res.data.message)
            return await axios.get(`${url}/v1/auth/address`, {
                headers: {
                    Authorization: 'Bearer ' + cookie['token'],

                }
            }).then(async function (res: any) {
                console.log(res);
                setAddress(res.data.message)

            })



        }).catch(function (response) {

            Swal.fire({

                html: `
                 برای ادامه روند خرید باید ثبت نام کنید
                `,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,

                confirmButtonText: `
                 ثبت نام
                `,
                confirmButtonColor: 'blue',

                confirmButtonAriaLabel: "ثبت نام",
                cancelButtonText: `
                 بستن
                `,

            }).then((e: any) => {
                if (e.isConfirmed == true) {
                    router.push('/login')
                }
            });
        });
    }
    const LoadInvoic = async () => {
        if (typeof window !== 'undefined') {
            setEmpty(true);

            var minvoice = localStorage.getItem('invoice') as any;
            var data = JSON.parse(minvoice);
            await axios.post(`${url}/v1/calucate`, { data: data }, {

            }).then(async function (res: any) {
                setEmpty(false);

                setInvoice(res.data)

            }).catch(function (response) {
                //handle error
                setEmpty(true);
            });
        }

    }
    const deleteinvoice = async (index: any) => {
        var minvoice = JSON.parse(localStorage.getItem('invoice') as any);


        minvoice.splice(index, 1);
        localStorage.setItem('invoice', JSON.stringify(minvoice));
        // localStorage.setItem('invoice', minvoice);
        LoadInvoic()

    }
    useEffect(() => {
        LoadInvoic()
        loaduser()
        // getNextDays()

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
            <div className="mt-[100] sm:mt-0 bg-white ">
                <div onClick={(e) => { LoadInvoic() }}>LoadInvoic</div>
                <div className="container m-auto">
                    <div className="grid gap-3 grid-cols-7">
                        <div className="col-span-12 font-bold text-blue-900">سبد خرید شما</div>

                        <div className="col-span-5">
                            {invoice != null &&
                                invoice.message.map((item: any, index: any) => {
                                    return (
                                        <div className="w-fit mb-4 shadow">

                                            <div className="grid grid-cols-4">
                                                <div className="col-span-1  w-full">
                                                    {
                                                        item.image != null ?
                                                            <img src={`${url}${item.image.url}`} className="w-[100%] object-contain " />
                                                            : <img src={`/images/noimage.png`} />
                                                    }
                                                    <div className="mr-10 mb-1 mt-1 ml-10 w-full text-center">
                                                        <Button onClick={(e: any) => { deleteinvoice(index) }} className="m-auto w-6 text-center bg-red-500">
                                                            <img src="/images/trash.svg" width={20} />
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className="col-span-3  w-full p-5">
                                                    <div className="font-bold text-blue-800">{item.name}</div>
                                                    {item.model != null &&
                                                        <div className="  text-gray-900 flex">
                                                            <div>{item.model.toGroup.title}</div>
                                                            <div className="text-amber-700"> - {item.model.title}</div>

                                                        </div>
                                                    }

                                                    <div className="mt-20 w-full" >
                                                        <div className="flex">
                                                            <div>قیمت : </div>

                                                            <div className="font-bold"> {item.price}</div>
                                                            <img className="mr-2" src='/images/toman.svg' width={20}></img>


                                                        </div>
                                                        <div className="flex">
                                                            <div  >تعداد : </div>
                                                            <div className="mr-2 font-bold"> {item.qty}</div>
                                                            <div className="mr-2">عدد</div>

                                                        </div>
                                                        <div className="flex">
                                                            <div  >جمع کل : </div>
                                                            <div className="mr-2 font-bold">{item.total}</div>
                                                            <img className="mr-2" src='/images/toman.svg' width={20}></img>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                            }

                        </div>
                        <div className="col-span-2">
                            <div className="w-full shadow p-4">
                                {
                                    invoice != null &&
                                    <div >
                                        <div >
                                            <div className="mb-4" >
                                                <div color={'red'}>توضیحات بیشتر :</div>
                                            </div>
                                            <Textarea
                                                onChange={(e) => { setDescription(e.target.value) }}
                                                placeholder="...">
                                            </Textarea>

                                        </div>

                                    </div>
                                }

                                {userdata != null &&
                                    <>
                                        <div >
                                            <Button
                                                fullWidth
                                                href="/dashboard/address"
                                            >آدرس خود را اضافه کنید</Button>
                                        </div>
                                    </>

                                }
                                {
                                    invoice != null &&
                                    <div >
                                        <div className="grid grid-cols-2 mt-4" >
                                            <div>
                                                   قیمت کالاها ({invoice.message.length}) 

                                            </div>
                                            <div>
                                                   {invoice.grandtotal} <span>تومان</span>

                                            </div>

                                            <div>
                                                    هزینه ارسال

                                            </div>
                                            <div  >
                                                    0 <span>تومان</span>

                                            </div>
                                            {/* {discountprice != 0 &&
                                                        invoice.grandtotal != 0 &&
                                                        <>
                                                            <Grid xs={6} pt={1}>
                                                                <Typography fontWeight={'bold'} textAlign={'right'} fontSize={14}>
                                                                    تخفیف
                                                                </Typography>
                                                            </Grid>
                                                            <Grid xs={6} pt={1} >
                                                                <Typography fontWeight={'bold'} textAlign={'left'} fontSize={14}>
                                                                    {discountprice} <span>تومان</span>
                                                                </Typography>
                                                            </Grid>
                                                        </>
                                                    }
 */}

                                            {invoice != null &&
                                                invoice.grandtotal != 0 &&
                                                <>
                                                    <div>
                                                        <div >
                                                            مبلغ قابل پرداخت

                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            {invoice.grandtotal - discountprice}<span>تومان</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            {startinvoice == true &&
                                                                <div  >
                                                                    <div >پرداخت آنلاین</div>
                                                                </div>
                                                            }
                                                        </div>

                                                    </div>
                                                </>

                                            }

                                        </div>

                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <pre>{JSON.stringify(invoice, null, 2)}   </pre>


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