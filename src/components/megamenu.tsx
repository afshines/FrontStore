export function MegaMenu({ data }: any) {

    return (
        <>
            <div className="absolute  w-[50%] h-[70%] bg-cyan-50 z-50 right-[20px]  flex ">
                <div className="w-[20%] 
                    
                    h-[100%] bg-white">

                    {
                        data.map((item: any) => {
                            return (
                                <div className="h-10 w-[100%] bg-yellow-50  ">
                                    <div className="flex group-hover:text-[#F58210]">
                                        <div><img src="/images/foldergray.svg" className="mr-3 w-6 mt-1"></img></div>
                                        <div className="color mt-1 mr-1 text-gray-800 font-bold font-['Peyda']">دسته بندی</div>
                                    </div>
                                </div>
                            )
                        })
                    }



                </div>
                <div className="w-[80%] p-2">
                            <div className="flex">
                                    
                            </div>
                </div>
            </div>
        </>
    )
}