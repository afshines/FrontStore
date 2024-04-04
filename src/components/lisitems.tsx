import ThumpnailProduct from "./thumpnail"

export default function ListItems({ data }: any) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 w-full gap-2  mr-3 items-center'>
            {
                data.map((item: any) => {
                    return (
                        <div className='  m-auto mb-3 shadow p-4 mr-10 sm:mr-0'>
                            <ThumpnailProduct data={item}></ThumpnailProduct>
                        </div>
                    )
                })
            }
           
        </div>
    )
}