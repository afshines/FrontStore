import React, { useState, useEffect } from 'react';
import { url } from '../data/config';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function Tabfirstpage({ data }: any) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 9
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 9
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 4
        }
    };
    const [currentpage, setShow] = useState<number>(0);

    return (
        <>
            <div className="container max-w-[1200px]  mr-auto ml-auto mt-3" dir='rtl'  >

                <Carousel
                    infinite={true}
                    draggable={true}

                    responsive={responsive}>
                    {
                        data.map((item: any) => {
                            return <div

                                onClick={() => {
                                    setShow(data.indexOf(item))
                                }}
                                className={`  ${currentpage == data.indexOf(item) ? 'text-[#F58210]' : 'text-gray-800'}  xl:grid-cols-1 cursor-pointer mr-10 text-center text-neutral-400 text-[13px] font-medium font-['Peyda']`}>{item.name}</div>

                        })
                    }
                </Carousel>
                <hr></hr>
            </div>

            {data.map((item: any) => {
                return (
                    <div className={`  ${data.indexOf(item) != currentpage && 'hidden'} `} id={data.indexOf(item)} >

                        <div className="container w-[800px]  mr-auto ml-auto   pt-4 pb-4">
                            <div className=" text-center grid xl:grid-cols-4 grid-cols-6  gap-2  justify-center items-center  pt-2 pb-2">

                                {item.ChildGroup.map((item2: any) => {
                                    return (
                                        <div className="justify-center items-center   ">
                                            <a href={`/group/${item2.url}`}>
                                                {
                                                    item2.masterimage != null && <img className=" w-[126px] mr-auto ml-auto h-[82px]" src={url + item2.masterimage.url} />
                                                }

                                                <div className=" text-center mt-[11px] text-black text-[11px] font-medium font-['Peyda']">{item2.name}</div>

                                            </a>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>

                    </div>
                )
            })}

            <div className=" w-full    pt-4 pb-4 " >
                <a href='/group'>
                    <div className="mr-auto ml-auto w-64 h-[46px] colorSecondaryBackground relative" >

                        <div className=" w-full mr-auto ml-auto  absolute top-3  text-center text-white text-[16px] font-medium font-['Peyda']">نمایش تمام گروه ها</div>

                    </div>
                </a>

            </div>

        </>
    )
}