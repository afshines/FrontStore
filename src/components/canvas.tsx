import React, { useState, useEffect, useRef } from 'react';

export default function CanvasMenu({ data }: any) {
    const [showitem, setShow] = useState<boolean>(false);
    const [currentpage, setShows] = useState<number>(0);

    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setShow(false);
            }
        };

        window.addEventListener('mousedown', handleOutsideClick);

        return () => {
            window.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [ref]);
    return (
        <div dir='ltr' className=''>
            <div ref={ref}>
                <button
                    onClick={(e) => {
                        setShow(true);
                    }}
                    type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-transparent text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-overlay-example">
                    <img src="/images/burgermenu.svg"></img>
                </button>

                <div
                    id="hs-overlay-example "

                    className={` bg-white
             ${showitem == false ? '-translate-x-[400px]' :'translate-x-0' }  z-[1000]
              fixed top-0 start-0 transition-all duration-300  
              transform h-full max-w-xs w-full  bg-white border-e
               dark:bg-gray-800 dark:border-gray-700`} >
                    <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700 ">
                        <h3 className="font-bold text-gray-800 dark:text-white pl-3">
                            {data.setting.websitename}
                        </h3>
                        <button
                            onClick={(e) => {
                                setShow(false);
                            }}

                            type="button" className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-overlay-example">
                            <span className="sr-only">Close modal</span>
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                    </div>
                    <div className="p-0 bg-white">
                        <div className='grid bg-white grid-cols-5'>
                            <div className='col-span-3'>
                                <div className="w-[full]  h-[100vh] bg-zinc-100 shadow-inner m-1 pr-3 overflow-x-auto" dir='rtl'>
                                    {data.groups.map((item: any) => {
                                        return (
                                            <div className={`  ${data.groups.indexOf(item) != currentpage && 'hidden'}`} id={data.groups.indexOf(item)} >
                                                {item.ChildGroup.map((item2: any) => {

                                                    return (

                                                        item2.ChildGroup.map((item3: any) => {
                                                            return (
                                                                <div className='bg-white'>
                                                                    {item2.ChildGroup.indexOf(item3) == 0 &&

                                                                        <a href={`/group/${item2.url}`} className='mt-b leading-10	 '>
                                                                            <h3 className="text-[18] font-extrabold text-right  font-['Peyda'] ">
                                                                                <span className='text-[#4C72A2]'>{item2.name}</span>
                                                                            </h3>
                                                                        </a>
                                                                    }

                                                                    <a className="text-[14px] font-bold  text-[#888B91] leading-6	" href={`/group/${item3.url}`}>
                                                                        <h4 className="font-['Peyda'] text-right">{item3.name}</h4>
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
                            <div className='col-span-2 '>
                                <div className='p-2'>
                                    {
                                        data.groups.map((item: any) => {
                                            return (
                                                <div className="" onMouseOver={() => {
                                                    setShows(data.groups.indexOf(item))
                                                }}
                                                >
                                                    <div className=" group-hover:text-[#F58210] cursor-pointer text-center align-middle  pb-1" >
                                                        <div>
                                                            <img src={` ${currentpage != data.groups
                                                                .indexOf(item) ? '/images/foldergray.svg' : '/images/folderorang.svg'}`} className="w-[30px] ml-auto mr-auto"></img>
                                                        </div>
                                                        <div className={` mt-1 pt-2 mr-1 text-[12px] ${currentpage == data.groups.indexOf(item) ? 'text-[#F58210]' : 'text-gray-800'}  font-bold font-['Peyda']`}>{item.name}</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>


                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}