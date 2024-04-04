import { url } from '../data/config';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Cproducts({ data }: any) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    return (
        <>


            <div className=" max-w-[1000px]  mr-auto ml-auto   pt-4 pb-4   justify-center items-center  " >



                {/* <div>
                    <img className=" w-[38px] h-[38px]   " src="./images/arrowRight.svg" />
                </div> */}

                <Carousel
                    infinite={true}
                    draggable={true}

                    responsive={responsive}>
                    {data.map((item: any) => {
                        return (
                            <div className=" m-5   w-[185px] h-[250px] relative shadow">
                                <a href={`/detail/${item.url}`}>

                                    <img className=" w-[184px] h-[120px]" src="./images/image 50.png" />
                                    <div className=" w-[100px]  h-[18.68px] left-5 top-[100px] absolute bg-blue-600  rounded-[3px]" />
                                    <div className=" text-center top-[100px] absolute left-5  w-[100px]  text-white text-[13px] font-bold font-['Peyda']">{item.togroup.name}</div>

                                    <div className=" w-[13.21px] h-[13.19px] left-[16.52px] top-[170.34px] absolute" />
                                    <div className=" left-[64.36px] top-[120px] absolute right-5 text-right text-orange-500 text-[13px] font-bold font-['Peyda']">{item.name}</div>
                                    <div className=" w-[66.07px] h-[16.48px] left-[34.14px] top-[200px] absolute text-black text-[13px] font-bold font-['Peyda'] flex">
                                        <img src='/images/toman.svg' width={20}></img>
                                        <div>{item.price}</div>

                                    </div>
                                </a>
                            </div>
                        )
                    })}




                </Carousel>
                {/* <div>
                    <img className=" w-[38px] h-[38px]  " src="./images/arrowLeft.svg" />
                </div> */}


            </div>

        </>
    )
}