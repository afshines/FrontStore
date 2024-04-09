
import { url } from '../data/config';

export default function ThumpnailProduct({ data }: any) {
    return (
        <div className={`w-full align-middle m-auto`} >
            <a href={`/detail/${data.url}`}>

                {data.masterimage != null ?
                    <img className={`w-full m-auto h-[200px] object-contain  ${data.Available == false && 'grayscale'}    `} src={url + data.masterimage.path + '/thump/' + data.masterimage.name} ></img>
               :
               <img className={`w-full m-auto h-[200px] object-contain  ${data.Available == false && 'grayscale'}    `} 
               src={`/images/noimage.png`} ></img>

               
               }
                <div className='mt-3 w-full'>
                    <div className='text-sky-900 font-bold text-[12px] pb-3'>
                        {data.togroup.name}
                    </div>

                    <h4 className="text-[16px] h-[80px] font-bold  font-['Peyda'] ">{data.name}</h4>

                    <div className=' gap-2 text-left '>
                        <hr></hr>
                        {data.Available == true ?


                            <div className='flex text-left pt-3 '>

                                <div className="font-['Peyda'] font-black text-orange-600">{data.price}</div>
                                <img src='/images/toman.svg' width={19}></img>


                            </div>
                            :
                            <div className='flex text-left pt-3 '>
                                <div className="font-['Peyda'] font-black text-orange-600">ناموجود</div>
                            </div>
                        }

                    </div>
                </div>
            </a>
        </div>
    )
}