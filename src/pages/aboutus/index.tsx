import Headerofwebsite from '@/components/header';
import { url } from '@/data/config';
import Head from 'next/head'
import '@/app/globals.css'
import FooterOfSite from '@/components/footerofsite';
import ShowArticle from '@/components/showarticle';
import BreadCrumpTiss from '@/components/breadcrump';

export default function aboutUs({ data, headers, about }: any) {
    const breadcrump = [
        {
            name: 'خانه',
            url: '/'
        },

        {
            name: about.message.name,
        }
    ]
    return (
        <>
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
            <div className='bg-white'>
                <div className='container m-auto pt-12 pb-12'>
                    <BreadCrumpTiss data={breadcrump} ></BreadCrumpTiss>
                    <hr></hr>
                    <h1 className="font-['peyda'] text-black text-[22px] mt-3 ">{about.message.name}</h1>

                    <div className='mt-3'>
                        <ShowArticle data={about.message.tocomponent}></ShowArticle>
                    </div>
                    <div className=' grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 '>
                        {
                            about.article.docs.map((i: any) => {
                                return (
                                    <div className='animate-appearance-in' >
                                        <div className='rounded-large mt-5 h-[250px] bg-slate-400 m-1'>
                                                    <a href={`/article/${i.url}`}>
                                                    {i.masterimage!=null ?
                                                 <img src={url+i.masterimage.url} alt={i.name} title={i.name} className='rounded-large h-[250px] w-full'></img>
                                                 : <div>{ i.name }</div>
                                                }  
                                                    </a>
                                               
                                                 
                                                
                                            </div>
                                     

                                    </div>
                                )
                            })
                        }
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
    const res3 = await fetch(`${url}/v1/blog/aboutus`);

    const headers = await res2.json();

    const data = await res.json();
    const data2 = await res3.json();

    return {
        props: {
            data: data,
            about: data2,
            headers: headers
        },
    }
}