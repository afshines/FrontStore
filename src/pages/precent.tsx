import '@/app/globals.css'
import { url } from '../data/config';
import Head from 'next/head'
import FooterOfSite from "@/components/footerofsite";
import Headerofwebsite from "@/components/header";

export default function Precent({ data, headers, aricle }: any) {
    return (
        <>

            <Headerofwebsite data={headers}></Headerofwebsite>
            <div className={`bg-white `}>
                <div className={`box  w-[100%] pt-5 pb-4 bg-white container m-auto`}>
                    <div className={`grid  grid-cols-1  sm:grid-cols-3`}>
                        <div className={`text-center`}>1</div>
                        <div className={`text-center`} >2</div>
                        <div className={`text-center`} >3</div>

                    </div>
                </div>
            </div>
            <FooterOfSite data={headers}></FooterOfSite>

        </>
    )
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