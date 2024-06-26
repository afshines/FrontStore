.t
import { url } from '../data/config';
import '@/app/globals.css'
import FooterOfSite from "@/components/footerofsite";
import Headerofwebsite from "@/components/header";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { getCookies, setCookie } from "cookies-next";

export default function Verify({ headers, status, InvoiceID, Authority }: any) {
    const router = useRouter()
    let cookie = getCookies();
    const [Loading, setLoading] = useState<any>(true);
    const [Message, setMessage] = useState<any>('لطفا صبر کنید');



    const loaduset = async () => {
        setLoading(true);
        try {


            { }
            await axios.post(`${url}/v1/novinpay/verify`, {
                invoicenumber: InvoiceID,
                trans_id: Authority
            }, {
                headers: {
                    Authorization: 'Bearer ' + cookie['token'],

                }
            })
            setMessage('پرداخت شما با موفقیت ثبت گردید');

        } catch (error: any) {
            setMessage('خطا در پرداخت');


        }
    }





    useEffect(() => {
        loaduset();


    }, []);
    return (
        <>
            <Headerofwebsite data={headers}></Headerofwebsite>
            <div className='m-10'>
                <div
                className={` m-1 text-center p-2 bg-green w-[300px] rounded-[13px]  ml-auto mr-auto mt-[10px]`}  >
                    <div className='text-white'>{Message}</div>

                </div>
                <div  className={`text-center`} >
                    <a  style={{backgroundColor:'#BADEB1'}} href={`/dashboard/invoice/${InvoiceID}`}>
                        <div color={'#333'}>مشاهده فاکتور</div>
                    </a>
                </div>

            </div>
            <FooterOfSite data={headers}></FooterOfSite>

        </>
    )
}
export const getServerSideProps = async (context: any) => {
    const res2 = await fetch(`${url}/v1/headerinfo`);
    const headers = await res2.json();

    return {
        props: {
            headers: headers,
            status: context.query.PaymentStatus,
            InvoiceID: context.query.InvoiceID,
            Authority: context.query.Authority
        },
    }
}