import { url } from '../data/config';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function CatGroupSlider({ data }: any) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 2024 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 2024, min: 1024 },
            items: 7
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


            <div className=" w-full mr-auto ml-auto   pt-4 pb-4   justify-center items-center  " >

                <Carousel
                    infinite={true}
                    draggable={true}

                    responsive={responsive}>

                    {
                        data.map((item : any) => {
                            return (
                                <div className=" m-5   w-[185px] h-[180px] relative shadow ">
                                    <a href={`/group/${item.url}`}>
                                    {item.masterimage != null ?
                                        <img className={`w-[184px] h-[120px] object-contain `} src={url + item.masterimage.path + '/thump/' + item.masterimage.name} ></img>
                                        :
                                        <img className={`w-[184px] h-[120px] object-contain `} src={'/images/noimage.png'} ></img>
                                    }

                                    <div className=" w-[13.21px] h-[13.19px] left-[16.52px] top-[170.34px] " />
                                    <div className="  top-[134.07px]  text-center text-orange-500 text-[13px] font-bold font-['Peyda']">{item.name}</div>

                                    </a>
                                </div>
                            )
                        })

                    }


                </Carousel>
                {/* <div>
                    <img className=" w-[38px] h-[38px]  " src="./images/arrowLeft.svg" />
                </div> */}


            </div>

        </>
    )
}