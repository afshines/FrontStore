
import { url } from '../data/config';

export default function ThumpnailProduct({ data }: any) {
    return (
        <div className={`w-[200px] align-middle m-auto`} >
            <a href={`/detail/${data.url}`}>

                {data.masterimage!=null &&
            <img className={`w-[200px] h-[102px] object-contain `} src={url + data.masterimage.path + '/thump/' + data.masterimage.name} ></img>
        }
            <div className='mt-3 w-[164px]'>
            <div  className='text-sky-900 font-bold text-[12px] pb-3'>
                            { data.togroup.name }
                            <hr></hr>
                    </div>
            
                <h4 className="text-[13px] h-[60px] font-bold font-['Peyda'] ">{data.name}</h4>

                <div className=' gap-2 text-left'>
                    <div className='flex text-left '>
                        <div className="font-['Peyda'] font-black text-blue-950">{data.price}</div>
                        <img src='/images/toman.svg' width={20}></img>
                    </div>
                    
                </div>
            </div>
            </a>
        </div>
    )
}