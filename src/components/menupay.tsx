
export default function ExportMenuPay({ acive }: any) {
    return (
        <>
            <div className="p-1 w-full" >
                <div className="container m-auto grid grid-cols-3 " >

                    <div className="col-span-1">
                        <a href='/dashboard/invoice/archive'>
                            <div className="w-[100%] h-[50px]"   >
                                <div className={`p-2 ${acive == 1 ? 'bg-gray-600' : 'bg-white '}`} >
                                    <div className="text-cener">
                                        <div className={`text-right    ${acive == 1 ? 'text-white' : 'text-gray-800 '} `}>بایگانی</div>

                                    </div>

                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-span-1"> 
                        <div className="w-full">
                            <a href='/dashboard/invoice/payed'>
                                <div className={`p-2 ${acive == 2 ? 'bg-gray-600' : 'bg-white '}`} >
                                    <div className="text-cener">
                                        <div className={`text-right    ${acive == 2 ? 'text-white' : 'text-gray-800 '} `}>در حال اجرا</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <a href='/dashboard/invoice/unpay'>
                            <div className="w-[100%] h-[50px]"   >
                                <div className={`p-2 ${acive == 3 ? 'bg-gray-600' : 'bg-white '}`} >
                                    <div className="text-cener">
                                        <div className={`text-right    ${acive == 3 ? 'text-white' : 'text-gray-800 '} `}>پرداخت نشده</div>

                                    </div>

                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}