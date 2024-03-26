import { url } from "@/data/config"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ImageGallery from "next-image-gallery";
import React, { useState, useEffect } from 'react';

export default function ShowArticle({ data }: any) {
    function SwrichGrid(Grided: number) {
        var x = '12';
        switch (Grided) {
            case 6:
                x = 'col-span-6';
                break;
            case 4:
                x = 'col-span-4';
                break;
            case 12:
                x = 'col-span-12';
                break;
            case 3:
                // code to be executed if expression m
                break;
            // more cases...
            default:
                x = 'full';
            // code to be executed if expression doesn't match any case
        }
        return x;
    }
    return (
        <>
     

            <div className=" grid grid-cols-12 gap-4 ">

                {
                    data.map.length != 0 &&
                    data.map((item: any) => {
                        return (
                            <div className={` ${SwrichGrid(item.cols)} `}  >
                                {item.component == "TextEditor" && <TextEditorShow data={item} ></TextEditorShow>}
                                {item.component == "Image" && <ImageShow data={item} ></ImageShow>}
                                {item.component == "Slider" && <SliderShow data={item} ></SliderShow>}
                                {item.component == "Video" && <VideoItem data={item} ></VideoItem>}

                            </div>

                        )
                    })
                }

            </div>


        </>
    )
}

function TextEditorShow({ data }: any) {
    return (

        <div dangerouslySetInnerHTML={{ __html: data.data }}>

        </div>

    )
}
function ImageShow({ data }: any) {
    return (
        <>
            {data.images.length != 0 &&
                <>

                    <img src={url + data.images[0].url} alt={data.images[0].alt} title={data.images[0].caption} width={'100%'}></img>

                </>

            }

        </>
    )
};
function VideoItem({ data }: any) {
    return (
        <div>
            {
                data.data != null &&

                data.data.model == "Aparat" &&
                data.data.link != "" &&
                <iframe
                    width={'100%'}
                    height={600}
                    src={`https://www.aparat.com/video/video/embed/videohash/${data.data.link}/vt/frame?titleShow=true`}

                ></iframe>
            }
            {data.data != null && data.data.model == "YouTube" &&
                data.data.link != "" &&
                <iframe width={'100%'}
                    height={600} src={`https://www.youtube.com/embed/${data.data.link}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

            }

        </div>
    )
};

function SliderShow({ data }: any) {
    const [images, setImages] = useState<any>(null);

    const loaditem = () => {
        var myitem: any = [];

        data.images.map((item: any) => {
            var add2 = {
                original: url + item.url,
                thumbnail: url + item.url,
                originalWidth: 1000,
                originalHeight: 600,
                thumbnailWidth: 250,
                thumbnailHeight: 150
            };
            myitem.push(add2);
        });

        setImages(myitem)

    }
    //  var images = [
    //     {
    //         original: "/images/c4.png",
    //         thumbnail: "/images/c4.png",
    //         originalWidth: 1000,
    //         originalHeight: 600,
    //         thumbnailWidth: 250,
    //         thumbnailHeight: 150
    //     },
    //     {
    //         original: "http://localhost:8000/media/TextEditor/6601a8fe7077e15e44194672/312e09ff0e8956c78480b6aa4d2982002652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg",
    //         thumbnail: "http://localhost:8000/media/TextEditor/6601a8fe7077e15e44194672/312e09ff0e8956c78480b6aa4d2982002652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg",
    //         originalWidth: 1000,
    //         originalHeight: 600,
    //         thumbnailWidth: 250,
    //         thumbnailHeight: 150
    //     },
    //     {
    //         original: "http://localhost:8000/media/TextEditor/6601a8fe7077e15e44194672/312e09ff0e8956c78480b6aa4d2982002652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg",
    //         thumbnail: "http://localhost:8000/media/TextEditor/6601a8fe7077e15e44194672/312e09ff0e8956c78480b6aa4d2982002652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg",
    //         originalWidth: 1000,
    //         originalHeight: 600,
    //         thumbnailWidth: 250,
    //         thumbnailHeight: 150
    //     },
    // ];
    useEffect(() => {

        loaditem();

    }, []);
    return (
        <>
            {images != null && <ImageGallery items={images} />}
        </>
    )
}