import React, { useState, useEffect } from 'react';

export function MegaMenu({ data }: any) {

    const [currentpage, setShow] = useState<number>(0);
    return (
        <>
            <div className="absolute  w-[50%] h-[70%] bg-cyan-50 z-50 right-[20px]  flex ">
                <div className="w-[30%] 
                    
                    h-[100%] bg-white">

                    {
                        data.map((item: any) => {
                            return (
                                <div className="h-10 w-[100%] bg-yellow-50" onClick={() => {
                                    setShow(data.indexOf(item))
                                }}
                                >
                                    <div className="flex group-hover:text-[#F58210] cursor-pointer" >
                                        <div><img src="/images/foldergray.svg" className="mr-3 w-6 mt-1"></img></div>
                                        <div className={` mt-1 pt-2 mr-1 text-sm/[12px] ${currentpage == data.indexOf(item) ? 'text-orange-800' : 'text-gray-800'}  font-bold font-['Peyda']`}>{item.name}</div>
                                    </div>
                                </div>
                            )
                        })
                    }



                </div>
                <div className="w-[70%] p-2">
                    <div >
                    
                        {data.map((item: any) => {
                            return (
                                <div className={`grid grid-cols-3 gap-4 ${data.indexOf(item) != currentpage && 'hidden2'}`} id={data.indexOf(item)} >
                                    {item.ChildGroup.map((item2: any) => {

                                        return (
                                            item2.ChildGroup.map((item3: any) => {
                                                return (
                                                    <div  >
                                                        {data.indexOf(item)}
                                                        {/* {item2.ChildGroup.indexOf(item3) == 0 &&

                                                            <div className="mb-2 text-orange-800 font-bold ">
                                                                <a href={`/group/${item2.url}`}>
                                                                    <h3 className="text-[12px]">{item2.name}</h3>
                                                                    <hr></hr>
                                                                </a>
                                                            </div>
                                                        } */}
                                                        
                                                        {/* <a className="text-[12px]" href={`/group/${item3.url}`}>
                                                            <h4>{item3.name}</h4>
                                                        </a> */}
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