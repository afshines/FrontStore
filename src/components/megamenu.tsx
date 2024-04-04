import React, { useState, useEffect } from 'react';

export function MegaMenu({ data }: any) {

    const [currentpage, setShow] = useState<number>(0);
    return (
        <>
            <div className="absolute  w-[50%]  bg-white z-50 rounded-full rounded-[12px] right-[20px]  flex ">
                <div className="w-[20%] 
                    
                    h-[100%] bg-white">

                    {
                        data.map((item: any) => {
                            return (
                                <div className="h-10 w-[100%]" onMouseOver={() => {
                                    setShow(data.indexOf(item))
                                }}   >

                                    <a href={`/group/${item.url}`} className='mt-b leading-10	 '>
                                        <div className="flex group-hover:text-[#F58210] cursor-pointer" >

                                            <div><img src={` ${currentpage != data.indexOf(item) ? '/images/foldergray.svg' : '/images/folderorang.svg'}`} className="mr-3 w-6 mt-4"></img></div>
                                            <div className={`  pt-2 mr-1 text-[12px] ${currentpage == data.indexOf(item) ? 'text-[#F58210]' : 'text-gray-800'}  font-bold font-['Peyda']`}>{item.name}</div>
                                        </div>

                                    </a>

                                </div>
                            )
                        })
                    }



                </div>
                <div className="w-[80%] p-8 border-rad   rounded-[12px] bg-[#F0F0F1]">
                    <div >

                        {data.map((item: any) => {
                            return (
                                <div className={`  ${data.indexOf(item) != currentpage && 'hidden'}`} style={{ columnCount: 3 }} id={data.indexOf(item)} >
                                    {item.ChildGroup.map((item2: any) => {

                                        return (

                                            item2.ChildGroup.map((item3: any) => {
                                                return (
                                                    <div>
                                                        {item2.ChildGroup.indexOf(item3) == 0 &&

                                                            <a href={`/group/${item2.url}`} className='mt-b leading-10	 '>
                                                                <h3 className="text-[18] font-extrabold  font-['Peyda'] ">
                                                                    <span className='text-[#4C72A2]'>{item2.name}</span>
                                                                </h3>
                                                            </a>
                                                        }

                                                        <a className="text-[14px] font-bold  text-[#888B91] leading-6	" href={`/group/${item3.url}`}>
                                                            <h4 className="font-['Peyda']">{item3.name}</h4>
                                                        </a>
                                                    </div>
                                                )
                                            })



                                        )
                                    })}

                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </>
    )
}