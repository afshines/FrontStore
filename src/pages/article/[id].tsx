import Headerofwebsite from '@/components/header';
import { url } from '@/data/config';
import Head from 'next/head'
import { useRouter } from 'next/router';
import '@/app/globals.css'
import FooterOfSite from '@/components/footerofsite';
import ShowArticle from '@/components/showarticle';

export default function BlogGroup({ headers, group, current }: any) {
    const router = useRouter();

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        router.push(`/${current}?page=${newPage}`)
    };
    const breadcump = [
        {
            url: '/',
            name: 'خانه'
        },
        {
            url: `/${group.message.togroup.url}`,
            name: group.message.togroup.name
        },

        {

            name: group.message.name
        },
    ]
    return (
        <main>
            <Head>
                <title>{group.message.name}</title>
                <meta property="og:type" content="website" />
                <meta property="og:title" content={group.message.name} />
                <meta property="twitter:title" content={group.message.name} />
                <meta property="og:title" content={group.message.name} />
                <meta name="description" content={group.message.description} />
                <meta property="twitter:description" content={group.message.description} />
                <meta name="keywords" content={group.message.keywords} />
                <meta name="description" content={group.message.description} />
            </Head>
            <Headerofwebsite data={headers}></Headerofwebsite>
            <div className='bg-white w-full border-t-gray-100 mt-1 pt-4 pb-4'>
                <div className='container mx-auto mb-4 ' >
                    <div className='flex'>
                        <div> <a href='/' className="font-['peyda']">خانه</a> /</div>
                        {group.message.togroup.url != 'public' &&
                            <div className='pl-2 pr-2'> <a href={`/${group.message.togroup.url}`} className="font-['peyda']">{group.message.togroup.name}</a> /</div>
                        }
                        <div className="font-['peyda'] pl-2 pr-2 " > <a>{group.message.name}</a> </div>
                    </div>
                    <div className='mt-3 '>
                        <div className='' >
                            <h1 className="font-['peyda'] font-black ">{group.message.name}</h1>
                        </div>
                        <ShowArticle data={group.message.tocomponent}></ShowArticle>
                    </div>
                </div>
            </div>
            <FooterOfSite data={headers}></FooterOfSite>
        </main>
    )
}
export const getServerSideProps = async (context: any) => {

    const res = await fetch(`${url}/v1/article/${context.params.id}`);

    const group = await res.json()
    const res2 = await fetch(`${url}/v1/headerinfo`)
    const data2 = await res2.json()


    return {
        props: {
            group: group,
            headers: data2,
            current: context.params.id

        }
    }
}