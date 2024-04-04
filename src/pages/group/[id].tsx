import '@/app/globals.css'
import { url } from '@/data/config';
import style from '@/app/page.module.css';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Headerofwebsite from '@/components/header';
import FooterOfSite from '@/components/footerofsite';
import { BreadcrumpCreateor } from '@/data/breadcurmp';
import SearchBox from '@/components/searchbox';
import CatGroupSlider from '@/components/catgroup';
import ShowArticle from '@/components/showarticle';
import ListItems from '@/components/lisitems';
import React, { useState, useEffect } from 'react';
import { RangeSlider } from 'next-range-slider';
import 'next-range-slider/dist/main.css';
import { Slider } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";


export default function ({ group, headers, current, products }: any) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalPlacement, setModalPlacement] = React.useState("auto");

    const router = useRouter();
    const [listpr, setPr] = useState<any>(products);
    const [showcarlist, setShowCars] = useState<String>('hidden');
    const [min, minPrice] = useState<any>(parseInt(products.minprice));
    const [max, maxPrice] = useState<any>(parseInt(products.maxprice));
    const [low, setLow] = useState(parseInt(products.minprice));
    const [high, setHigh] = useState(parseInt(products.maxprice));
    const [filtercar, setFiltercar] = useState<any>([]);
    const [filterfeature, setFilterfeature] = useState<any>([]);
    const [currentpage, setCurrentpage] = useState<any>(1);
    const [loading, setLoading] = useState<boolean>(true);


    const [key, update] = useState<any>(1);


    const breadcump = BreadcrumpCreateor(group.message)

    const addremovefilter = (item: any) => {
        if (filtercar.includes(item) == true) {
            var index = filtercar.indexOf(item);
            if (index > -1) {
                filtercar.splice(index, 1);
            }
            setFiltercar(filtercar);
            var newkey = key + 1;
            update(newkey);
            updatepage(1);

        } else {
            filtercar.push(item);
            setFiltercar(filtercar);
            var newkey = key + 1;
            update(newkey);
            updatepage(1);

        }

    }
    const addremovefeature = (item: any) => {
        if (filterfeature.includes(item) == true) {
            var index = filterfeature.indexOf(item);
            if (index > -1) {
                filterfeature.splice(index, 1);
            }
            setFilterfeature(filterfeature);
            var newkey = key + 1;
            update(newkey);
            updatepage(1);
        } else {
            filterfeature.push(item);
            setFiltercar(filterfeature);
            var newkey = key + 1;
            update(newkey);
            updatepage(1);
        }

    }
    const updatepage = async (page: any) => {
        setLoading(false);
        var filtrcars = '';
        if (filtercar.length != 0) {
            filtrcars = `&car=${encodeURI(filtercar)}`;
        } else {
            filtrcars = ``;
        }
        var featuretext = '';

        if (filterfeature.length != 0) {
            featuretext = `&feature=${encodeURI(filterfeature)}`;

        } else {
            var featuretext = '';

        }

        var targeturl = `${url}/v1/products?page=${page}&group=${encodeURI(current)}${filtrcars}${featuretext}`;
        console.log(targeturl);
        const res3 = await fetch(targeturl);
        const pr = await res3.json();
        setPr(pr);
        setLoading(true);
        var newkey = key + 1;
        update(newkey);
    }
    const handlePageChange = (page: number) => {
        console.log(page);
        setCurrentpage(page);
        updatepage(page);

    };
    const FiltertaionBox = () => {
        return (
            <div>
                <div className='w-full'>
                    <div className='text-right font-black '>فیلترها</div>
                </div>
                <div className='w-full bg-[#4C72A2] h-[40x] p-3 mt-3'>
                    <div className='text-right  text-white '>نوع خودرو</div>
                </div>
                {products.carlist.map((item: any) => {
                    return (
                        <div className={` ${products.carlist.indexOf(item) > 7 && showcarlist} w-full `}>
                            <div className='flex mt-3'>
                                <div onClick={(e: any) => {
                                    addremovefilter(item.url);
                                }}>

                                    <img src={filtercar.includes(item.url) == true ? '/images/radioon.svg' : '/images/radiooff.svg'} className='mt-1' width={30}></img>
                                </div>
                                <div className='mr-2'>{item.name}</div>
                            </div>
                            {showcarlist != '' && products.carlist.indexOf(item) == 7 && <div onClick={(e) => { setShowCars('') }} className='text-right mt-4 font-bold mr-[35px] cursor-pointer m-auto w-[100%]'>
                                بیشتر
                            </div>}
                        </div>
                    )
                })}
                <div className='w-full bg-[#4C72A2] h-[40x] p-3 mt-3'>
                    <div className='text-right  text-white '>محدودیت قیمت</div>
                </div>
                <div className='w-full p-5'>
                    {max != 0 &&
                        <div className='mt-3' dir='ltr'>
                            <div className='text-center w-full' dir='rtl'>
                                <div> {low}  الی {high} تومان</div>
                            </div>
                            <Slider
                                step={1000}
                                minValue={min}
                                maxValue={max}
                                onChange={(e: any) => {
                                    setLow(e[0]);
                                    setHigh(e[1])
                                }}
                                defaultValue={[low, high]}
                                className="max-w-md"
                            />
                            <div className='grid grid-cols-2 '>
                                <div className='flex'>
                                    <img src='/images/toman.svg' width={20}></img>
                                    <div>{min}</div>
                                </div>
                                <div className='flex text-left ' dir='rtl' >
                                    <div>{max}</div>
                                    <img src='/images/toman.svg' width={20}></img>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className='w-full bg-[#4C72A2] h-[40x] p-3 mt-3'>
                    <div className='text-right  text-white '>سایر </div>

                </div>
                {products.feature.map((item: any) => {
                    return (

                        <div className='flex mt-3'>
                            <div onClick={(e) => { addremovefeature(item) }}>
                                <img
                                    src={filterfeature.includes(item) == true ? '/images/radioon.svg' : '/images/radiooff.svg'}
                                    className='mt-1' width={30}></img>
                            </div>
                            <div className='mr-2'>{item}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <>
            <Head>
                <title>{current}</title>
                <meta property="og:type" content="website" />
                <meta property="og:title" content={group.message.name} />
                <meta property="twitter:title" content={group.message.name} />
                <meta property="og:title" content={group.message.name} />
                <meta name="description" content={group.message.description} />
                <meta property="twitter:description" content={group.message.description} />
                <meta name="keywords" content={group.message.description} />
                <meta name="description" content={group.message.description} />
            </Head>

            <Headerofwebsite data={headers}></Headerofwebsite>
            <Modal
                isOpen={isOpen}
                placement={'bottom'}
                onOpenChange={onOpenChange}
                scrollBehavior={'inside'}

            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <FiltertaionBox></FiltertaionBox>

                            </ModalBody>
                            <ModalFooter>

                                <Button color="primary" onPress={onClose}>
                                    فیلتر <img src='/images/filter.svg' width={10}></img>
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <div dir="rtl"  >
                <div className="bg-[url('/covergroup.png')] w-full h-[300px] bg-no-repeat bg-cover">
                    <div className='container mx-auto mb-4 ' >

                        <SearchBox data={headers}></SearchBox>
                    </div>
                </div>


                <div className='bg-white w-full border-t-gray-100 mt-1 pt-4 pb-4'>
                    <div className='container mx-auto mb-4 ' >
                        <div className='flex'>

                            {
                                breadcump.map((item: any) => {
                                    return <div className='mr-2 p-1 '> <a href={item.url} className="font-['peyda']">{item.name}</a></div>
                                })
                            }

                        </div>
                        <div className='mt-3 mb-3'>
                            <div className='' >
                                <h1 className="font-['peyda'] font-black ">{group.message.name}</h1>
                            </div>
                        </div>
                        <div className='w-full' >

                            <div className='container m-auto '>

                                <ShowArticle data={group.message.tocomponent}></ShowArticle>
                                <div className='grid grid-cols-6 gap-3 mb-10 mt-3'>
                                    {
                                        products.companylist.map((item: any) => {
                                            return (
                                                <div className='bg-[#F0F0F1] h-[120px] pt-[19px] col-span-3 sm:col-span-1'>
                                                    <a href={`/search?group=${current}&brand=${item.url}`}>
                                                        <div className='text-center'>
                                                            {/* <pre>{ JSON.stringify(item.masterimage,null,2) }</pre> */}
                                                            <img className='w-[130px] m-auto h-[80px] object-contain' src={`${item.masterimage != null ? url + item.masterimage.url : '/images/noimage.png'}`}></img>
                                                        </div>
                                                    </a>

                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='grid w-full grid-cols-8 ' key={key}>
                            <div className='col-span-8 block sm:hidden p-2 ' >
                                <Button onPress={onOpen} className="max-w-fit">فیلترها <img src='/images/filter.svg' width={10}></img></Button>
                            </div>
                            <div className='sm:col-span-2 hidden sm:block ' >
                                <FiltertaionBox></FiltertaionBox>
                            </div>

                            <div className='col-span-6 '>
                                {loading == false ?
                                    <div className='text-center w-full h-96 p-20'>
                                        <Spinner />
                                    </div>
                                    :
                                    <ListItems data={listpr.message.docs}></ListItems>
                                }
                                <div className='flex gap-1 container m-auto w-full m-10 mr-10'>

                                    {[...Array(listpr.message.totalPages)].map((e, i) => {
                                        return <div
                                            key={i + 1}
                                            onClick={
                                                (ii) => {
                                                    if (listpr.message.page != i + 1) {
                                                        handlePageChange(i + 1);
                                                    }
                                                }
                                            }
                                            className={` ${listpr.message.page == i + 1 ? `bg-[url('/images/paginationv.svg')] ` : ` cursor-pointer bg-[url('/images/paginationb.svg')]`} w-[37px] h-[37px] text-center`}>
                                            <div className={`m-auto w-full pt-2 ${listpr.message.page == i + 1 ? 'text-white ' : 'text-black'}  `}>
                                                {(i + 1)}
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                        {group.message.ChildGroup.length != 0 &&
                            <div className='w-full  h-[40x] p-3 mt-3'>
                                <hr></hr>
                                <div className='text-right  text-white '>زیر گرو ها</div>

                            </div>
                        }

                        <CatGroupSlider data={group.message.ChildGroup}></CatGroupSlider>
                    </div>
                </div>
            </div>

            <FooterOfSite data={headers}></FooterOfSite>

        </>
    )
}

export const getServerSideProps = async (context: any) => {
    const res = await fetch(`${url}/v1/group/${encodeURI(context.params.id)}`)
    const group = await res.json()
    const res2 = await fetch(`${url}/v1/headerinfo`)
    const data2 = await res2.json()
    var x = context.query.page == undefined ? 1 : context.query.page;
    var search = '';

    const res3 = await fetch(`${url}/v1/products?page=${x}&group=${encodeURI(context.params.id)}`)
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