import Headerofwebsite from "@/components/header";
import { url } from "@/data/config"
import Head from "next/head";
import '@/app/globals.css'
import FooterOfSite from "@/components/footerofsite";
import { Switch } from '@headlessui/react'
import React, { useState, useEffect, useRef } from 'react';
import { Tab } from '@headlessui/react'
import ShowArticle from "@/components/showarticle";
import ViewpointComponent from "@/components/viewpoint";
import { BreadcrumpCreateor, BreadcrumpCreateor2 } from "@/data/breadcurmp";
import ThumpnailProduct from "@/components/thumpnail";

export default function Detail({ group, headers, current, products }: any) {
    const [enabled, setEnabled] = useState<any>(false)
    const [masterimage, setMaster] = useState<any>(products.message.masterimage == null ? null : products.message.masterimage.url)
    const breadcump = BreadcrumpCreateor2(products.message.togroup.ToSub)

    return (

        <>
            <Head>
                <title>{products.message.name}</title>
                <meta property="og:type" content="website" />
                <meta property="og:title" content={products.message.name} />
                <meta property="twitter:title" content={products.message.name} />
                <meta property="og:title" content={products.message.name} />
                <meta name="description" content={products.message.description} />
                <meta property="twitter:description" content={products.message.description} />
                <meta name="keywords" content={products.message.keywords} />
                <meta name="description" content={products.message.description} />
            </Head>
            <Headerofwebsite data={headers}></Headerofwebsite>
            <div className="bg-white pt-3 pb-3 mt-1">

                <div className="container m-auto ">
                    <div className='bg-white w-full border-t-gray-100 mt-1 pt-4 pb-4'>

                    </div>
                    <div className="grid grid-cols-2">
                        <div className="col-span-2 sm:col-span-1">
                            <div className=" ">

                                <div className=" text-center mt-3 h-[510px] border-2 m-4 ">
                                    {masterimage != null &&
                                        <img className=" h-[500px] m-auto"
                                            title={products.message.name}
                                            alt={products.message.name}

                                            src={
                                                url + masterimage
                                            }></img>
                                    }
                                </div>
                                <div className=" flex gap-3 mb-3">
                                    {products.message.masterimage != null &&
                                        <div className="h-[60px] border-2   rounded-[7px]  cursor-pointer" onClick={(e: any) => {
                                            setMaster(products.message.masterimage.url)
                                        }}>
                                            <img className={`w-fit h-[50px] object-cover `} src={url + products.message.masterimage.path + '/thump/' + products.message.masterimage.name} ></img>
                                        </div>
                                    }
                                    {products.message.toimages.map((item: any) => {
                                        return (
                                            <div className="h-[60px] border-2  rounded-[7px]  cursor-pointer" onClick={(e: any) => {
                                                setMaster(item.url)
                                            }}>
                                                <img className={`w-fit h-[50px]  object-cover`} src={url + item.path + '/thump/' + item.name} ></img>
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <div className='container mx-auto mb-4 ' >
                                <div className='flex'>

                                    {
                                        breadcump.map((item: any) => {
                                            return <div className='p-1 pr-2 '> <a href={item.url} className="font-['peyda']">{item.name} </a> &#11164; </div>
                                        })
                                    }
                                    <div className='mr-2 p-1 '> <a href={products.message.togroup.url} className="font-['peyda']">{products.message.togroup.name}</a></div>
                                </div>
                            </div>
                            <h1 className="text-[#F58210] text-[25] font-bold">{products.message.name}</h1>
                            {
                                products.message.vehicle != undefined && products.message.vehicle.length != 0 && <div className="font-normal  mt-5 mb-1  ">مناسب برای خودروهای:</div>
                            }
                            <div className="flex">

                                {
                                    products.message.vehicle != undefined && products.message.vehicle.map((item: any) => {
                                        return (
                                            <div className="mr-1 text-sm font-bold  p-1 text-cyan-950">{item.name} </div>
                                        )
                                    })
                                }

                            </div>
                            {
                                products.message.brand.length != 0 && <div className="font-normal  mt-2 mb-1  ">شرکت :</div>
                            }
                            <div className="flex">
                                {
                                    products.message.brand.map((item: any) => {
                                        return (
                                            <div className="mr-1 text-sm font-bold	 text-cyan-950   p-1 ">{item.name} </div>
                                        )
                                    })
                                }
                            </div>
                            <hr ></hr>
                            <div className="mt-3">
                                {products.message.price != null ?
                                    <div>
                                        <div className='flex text-left gap-5 '>
                                            <div dir="ltr">
                                                <Switch
                                                    checked={enabled}
                                                    onChange={setEnabled}
                                                    className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'
                                                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                                                >
                                                    <span className="sr-only">Enable notifications</span>
                                                    <span
                                                        className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                                    />
                                                </Switch>
                                            </div>
                                            <div className="font-['Peyda'] w-[100px] text-right font-black text-blue-950 ml-3">قیمت: </div>
                                            <div className="flex">

                                                <div className="font-['Peyda'] font-black text-blue-950">{products.message.price}</div>
                                                <img src='/images/toman.svg' width={20}></img>
                                            </div>
                                        </div>
                                        <div className=" p-3 w-[300px] mt-3 rounded-[5px]">
                                            {
                                                products.message.topricegroup.map((item: any) => {
                                                    return (<div>
                                                        <div>{item.title}</div>
                                                        <div>{item.toprices.map((m: any) => {
                                                            return (
                                                                <div className="flex gap-5">
                                                                    <div dir="ltr">
                                                                        <Switch
                                                                            checked={enabled}
                                                                            onChange={setEnabled}
                                                                            className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'
                                                                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                                                                        >
                                                                            <span className="sr-only">Enable notifications</span>
                                                                            <span
                                                                                className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                                                                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                                                            />
                                                                        </Switch>
                                                                    </div>
                                                                    <div className=" text-right w-[100px]">{m.title}: </div>
                                                                    <div className="flex">
                                                                        <div className="font-['Peyda'] font-black text-blue-950" >{m.price}  </div>
                                                                        <img src='/images/toman.svg' width={20}></img>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}</div>

                                                    </div>)
                                                })
                                            }
                                        </div>
                                    </div>
                                    :
                                    <div className="text-center w-full text-red-700 font-bold">تماس حاصل نمایید</div>}
                            </div>
                            <div className="mt-3">
                                <hr></hr>
                                <div className="mt-1 mb-1">

                                    {products.message.specifications != undefined && Object.entries(products.message.specifications).map(([key, value]: any) => (
                                        <div key={key}>
                                            <strong>{key}:</strong> {value}
                                        </div>
                                    ))}
                                </div>
                                <hr></hr>
                                <div className="flex mt-3 gap-2">
                                    <div className="w-[221px] h-[45px] bg-slate-500  rounded-[7px]" >
                                        <div className="text-center pt-2 text-white font-['Peyda']  ">اضافه کردن به سبد خرید</div>
                                    </div>

                                    <div>
                                        <input type="number" value={1} className=" text-center w-[132px] h-[45px] bg-white rounded-[7px] shadow-inner border border-slate-500">

                                        </input>

                                    </div>
                                </div>
                                <div className="flex mt-3 gap-2">
                                    <div className="w-[221px] h-[45px]   rounded-[7px]" >
                                        <div className="text-right pt-2 text-black font-['Peyda']  ">قیمت نهایی</div>
                                    </div>

                                    <div className="flex">
                                        <div className="mt-3 font-['Peyda'] font-black text-blue-950">10000 </div>
                                        <img src='/images/toman.svg' width={20}></img>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-3 mt-5">
                                <div >
                                    <div className="flex">
                                        <div className="w-[69px] h-[19px] text-right text-slate-500 text-sm font-extrabold font-['Peyda']">ارسال رایگان</div>
                                        <div className="w-[78px] h-[17px] text-right text-slate-500 text-sm font-thin font-['Peyda']" > به سراسر کشور</div>
                                    </div>
                                    <div className="flex">
                                        <div className="h-[19px] text-right text-slate-500 text-sm font-extrabold font-['Peyda']">ضمانت  اصل بودن کالا</div>
                                    </div>
                                </div>
                                <div className=" flex h-10">
                                    <img src="/images/lines.png" />
                                    <img src="/images/bars.png" />
                                </div>


                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-2">
                        <div className="w-full p-4 col-span-2 sm:col-span-1">
                            <Tab.Group >
                                <Tab.List className="w-full flex  border-b-2 p-1">
                                    <Tab className="w-full ui-selected:text-white cursor-pointer rounded-lg py-2.5 text-sm font-medium leading-5">معرفی</Tab>
                                    <Tab className="w-full ui-selected:text-orange cursor-pointer rounded-lg py-2.5 text-sm font-medium leading-5">مشخصات</Tab>
                                    <Tab className="w-full ui-selected:text-orange cursor-pointer rounded-lg py-2.5 text-sm font-medium leading-5">دیدگاه</Tab>
                                    <Tab className="w-full ui-selected:text-orange cursor-pointer rounded-lg py-2.5 text-sm font-medium leading-5">پرسش ها</Tab>

                                </Tab.List>
                                <Tab.Panels>
                                    <Tab.Panel>
                                        <div className="m-3">
                                            <div className="font-bold">معرفی</div>
                                            <hr />
                                            <ShowArticle data={products.message.tocomponent}></ShowArticle>

                                        </div>
                                    </Tab.Panel>
                                    <Tab.Panel>
                                        <div className="">
                                            <div className="font-bold">مشخصات</div>
                                            <hr />
                                            <div dangerouslySetInnerHTML={{ __html: products.message.description }}></div>
                                            <div className="mt-3">
                                                {products.message.Technical != undefined && Object.entries(products.message.Technical).map(([key, value]: any) => (
                                                    <div key={key}>
                                                        <strong className="text-blue-700">{key}:</strong> {value}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-3">

                                                {
                                                    products.message.Features != undefined &&
                                                    Object.entries(products.message.Features).map(([key, value]: any) => (
                                                        <div key={key} className="flex">
                                                            {value == true && <><strong>{key}  </strong><img className="mr-3" src="/images/tik.svg" width={20}></img></>


                                                            }
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    </Tab.Panel>
                                    <Tab.Panel>
                                        <div className="m-2 ">
                                            <div className="font-bold">دیدگاه</div>
                                            <hr />
                                            <ViewpointComponent id={products.message._id}></ViewpointComponent>
                                        </div>
                                    </Tab.Panel>
                                    <Tab.Panel><div className="m-2 ">
                                        <div className="font-bold">پرسش ها</div>
                                        <hr />
                                        <ViewpointComponent id={products.message._id}></ViewpointComponent>
                                    </div></Tab.Panel>

                                </Tab.Panels>
                            </Tab.Group>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <div className=" mb-3 mt-14">
                                <div className="text-right  font-extrabold font-['Peyda'] text-[#F58210]  ">محصولات مشابه</div>
                                <div className="mt-1">
                                    <hr ></hr>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-1">
                                {products.liked.map((item: any) => {
                                    return (
                                        <div className="mb-1">
                                            <ThumpnailProduct data={item}></ThumpnailProduct>
                                        </div>
                                    )
                                })}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <FooterOfSite data={headers}></FooterOfSite>

        </>
    );
}
export const getServerSideProps = async (context: any) => {
    const res = await fetch(`${url}/v1/group/${encodeURI(context.params.id)}`)
    const group = await res.json()
    const res2 = await fetch(`${url}/v1/headerinfo`)
    const data2 = await res2.json()
    var x = context.query.page == undefined ? 1 : context.query.page;

    const res3 = await fetch(`${url}/v1/products/${encodeURI(context.params.id)}`)
    const data3 = await res3.json()
    return {
        props: {
            group: group,
            headers: data2,
            current: context.params.id,
            products: data3


        }
    }
}