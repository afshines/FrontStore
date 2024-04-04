import ThumpnailProduct from "./thumpnail"

export default function SearchFilter({ list }: any) {
    return (
        <div className="w-full m-auto container pt-3  ">
            <div className="grid sm:grid-cols-4  grid-cols-1 gap-2">
                {list.message.docs.map((item:any)=>{
                    return(
                        <div className="">
                            <ThumpnailProduct data={item}></ThumpnailProduct>
                         
                            </div>
                    )
                })}
            </div>
        </div>
    )
}