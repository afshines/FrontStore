import FooterOfSite from "@/components/footerofsite";
import Headerofwebsite from "@/components/header";
import SearchBox from "@/components/searchbox";
import Image from "next/image";
import '@/app/globals.css'
import { url } from '../data/config';
import Head from 'next/head'

export default function TestPage(){
    return <>
<div className="grid grid-cols-4 lg:grid-cols-5 gap-4">
    <div className="col-span-2">1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>

</div>
    
    </>
}