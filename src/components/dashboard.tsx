import { DashboardMenu } from "@/sys/dashboard"

export default function DashboardMenus({active}:any) {
    return (
        <div >
            <div className="container m-auto">
                {/* <TabProfile value={0}></TabProfile> */}
            </div>
            <div className="p-1 w-[100%]">
                <div className="grid  grid-cols-2 sm:grid-cols-4   container m-auto">
                    {
                        DashboardMenu.map((item: any) => {

                            return (
                                item.icon != null &&
                                <div >

                                    <div className=" " >
                                        <a href={item.url}>
                                            <div className={` ${active==item.prefix ? `bg-slate-700` :`bg-sky-600` } bg-slate-700 rounded-lg  h-10 m-3`} >
                                                <div className="" >
                                                    <div className="grid grid-cols-12  mb-4" >
                                                        <div className="col-span-3" >
                                                            <div className="pt-2 text-center pr-3" >
                                                                <img src={item.icon} width={20}></img>

                                                            </div>
                                                        </div>
                                                        <div className="col-span-9">
                                                            <div className="pt-2 text-center" >
                                                                <div className="text-right text-white text-[13px] sm:text-[17px]" >{item.name}</div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}