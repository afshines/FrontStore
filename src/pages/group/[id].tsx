import '@/app/globals.css'
import { url } from '@/data/config';
import style from '@/app/page.module.css';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Headerofwebsite from '@/components/header';
import FooterOfSite from '@/components/footerofsite';
import { BreadcrumpCreateor } from '@/data/breadcurmp';
import SearchBox from '@/components/searchbox';
import ThumpnailProduct from '@/components/thumpnail';
import { Pagination } from 'nextjs-pagination';
import CatGroupSlider from '@/components/catgroup';

export default function ({ group, headers, current, products }: any) {
    const router = useRouter();

    const breadcump = BreadcrumpCreateor(group.message)

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {

        router.push(`/group/${current}?page=${value}`)
    };
    const handlePageChange = (page: number) => {
        window.location.assign(`/group/${current}?page=${page}`);

    };
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
                        <div className='mt-3 '>
                            <div className='' >
                                <h1 className="font-['peyda'] font-black ">{current}</h1>
                            </div>
                        </div>
                        <div className='w-full'>
                                <CatGroupSlider data={group.message.ChildGroup}></CatGroupSlider>
                            {/* {group.message.ToSub.map((item: any) => {
                                return (<div>
                                    fdf
                                </div>)
                            })}  */}
                        </div>

                        <div className='grid w-full grid-cols-5 '>
                            <div className='col-span-1'>

                            </div>
                            <div className='col-span-4 '>
                                <div className='grid grid-cols-4 w-full '>
                                    {
                                        products.message.docs.map((item: any) => {
                                            return (
                                                <div className=' m-auto'>

                                                    <ThumpnailProduct data={item}></ThumpnailProduct>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                                <div className='flex gap-1'>
                                    {/* {products.message.totalPages.map((item: any) => {
                                            return(
                                                <>dsd</>
                                            )
                                        })} */}
                                    {[...Array(products.message.totalPages)].map((e, i) => {
                                        return <div
                                            key={i + 1}
                                            onClick={
                                                (ii) => {
                                                    if (products.message.page != i + 1) {
                                                        handlePageChange(i + 1);
                                                    }

                                                }
                                            }
                                            className={` ${products.message.page == i + 1 ? `bg-[url('/images/paginationv.svg')] ` : ` cursor-pointer bg-[url('/images/paginationb.svg')]`} w-[37px] h-[37px] text-center`}>
                                            <div className={`m-auto w-full pt-2 ${products.message.page == i + 1 ? 'text-white ' : 'text-black'}  `}>
                                                {(i + 1)}
                                            </div>
                                        </div>
                                    })}
                                    <div>

                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <pre>{JSON.stringify(group.message.ChildGroup, null, 2)}</pre>
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