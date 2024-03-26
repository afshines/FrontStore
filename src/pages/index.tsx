import FooterOfSite from "@/components/footerofsite";
import Headerofwebsite from "@/components/header";
import SearchBox from "@/components/searchbox";
import Image from "next/image";
import '@/app/globals.css'
import { url } from '../data/config';
import Head from 'next/head'
import ShowArticle from "@/components/showarticle";

export default function Home({ data, headers }: any) {
  return (

    <div className="">
           <Head>
                <title>{headers.setting.title}</title>
                <meta property="og:type" content="website" />
                <meta property="og:title" content={headers.setting.title} />
                <meta property="twitter:title" content={headers.setting.title} />
                <meta property="og:title" content={headers.setting.title} />
                <meta name="description" content={headers.setting.description} />
                <meta property="twitter:description" content={headers.setting.description} />
                <meta name="keywords" content={headers.setting.keywords} />
                <meta name="description" content={headers.setting.description} />
                <link rel="icon" href="/fav.png" />

            </Head>
      <div className="">

        <div className="">

          <Headerofwebsite data={headers}></Headerofwebsite>
          <SearchBox></SearchBox>


          <div className="main-page colorWhiteBackground  w-full h-auto " >

            <div className="w-full  text-center flex justify-center items-center   pt-4 pb-4">


              <div className=" relative mr-3">
                <img className=" w-[150px]  rounded-[28px]" src="./images/c1.png" />
                <div className=" mt-1.5  text-center text-black text-[14px] font-medium font-['Peyda']">دسته بندی</div>
              </div>

              <div className=" relative mr-3">
                <img className="w-[150px]  rounded-[28px]" src="./images/c2.png" />
                <div className=" mt-1.5   text-center text-black text-[14px] font-medium font-['Peyda']">دسته بندی</div>
              </div>


              <div className=" relative mr-3">
                <img className=" w-[150px]  rounded-[28px]" src="./images/c3.png" />
                <div className="mt-1.5   text-center text-black text-[14px] font-medium font-['Peyda']">دسته بندی</div>
              </div>

              <div className=" relative mr-3">
                <img className=" w-[150px] rounded-[28px]" src="./images/c4.png" />
                <div className="mt-1.5   text-center text-black text-[14px] font-medium font-['Peyda']">دسته بندی</div>
              </div>


              <div className=" relative mr-3">
                <img className=" w-[150px]  rounded-[28px]" src="./images/c5.png" />
                <div className=" mt-1.5   text-center text-black text-[14px] font-medium font-['Peyda']">دسته بندی</div>
              </div>


              <div className=" relative mr-3">
                <img className=" w-[150px]  rounded-[28px]" src="./images/c6.png" />
                <div className=" mt-1.5  text-center text-black text-[14px] font-medium font-['Peyda']">دسته بندی</div>
              </div>


            </div>


            <div className="w-full  text-center flex justify-center items-center   pt-4 pb-4">
              <div>

                <div className=" relative pr-1 pl-1 pb-1">
                  <img className=" absolute left-10 top-2  w-[62px] h-[62px] rounded-bl-lg rounded-br-lg" src="./images/iran.png" />
                  <img className=" w-[263px] h-[185px] border-t-4 border-orange-500" src="./images/car2.jpg" />

                </div>

                <div className=" relative pr-1 pl-1 pt-1">
                  <img className=" absolute left-10 top-2  w-[62px] h-[62px] rounded-bl-lg rounded-br-lg" src="./images/iran.png" />
                  <img className=" w-[263px]  h-[185px] border-t-4 border-orange-500" src="./images/car2.jpg" />

                </div>



              </div>


              <div className=" relative pr-1 pl-1 ">
                <img className=" absolute left-10 top-2  w-[62px] h-[62px] rounded-bl-lg rounded-br-lg" src="./images/renau.png" />
                <img className=" w-[569px] h-[377px] border-t-4 border-orange-500" src="./images/car1.jpg" />
              </div>

              <div>

                <div className=" relative pr-1 pl-1 pb-1">
                  <img className=" absolute left-10 top-2  w-[62px] h-[62px] rounded-bl-lg rounded-br-lg" src="./images/jac.png" />
                  <img className=" w-[263px] h-[185px] border-t-4 border-orange-500" src="./images/car4.jpg" />

                </div>

                <div className=" relative pr-1 pl-1 pt-1">
                  <img className=" absolute right-10 bottom-1  w-[62px] h-[62px] rounded-bl-lg rounded-br-lg" src="./images/mvm.png" />
                  <img className=" w-[263px]  h-[185px] border-t-4 border-orange-500" src="./images/car3.jpg" />

                </div>


              </div>
            </div>



            <div className="w-[800px] mr-auto ml-auto text-center flex justify-center items-center   pt-4 pb-4  border-b-2 border-gray-300  pb-4  pr-5 pl-5  ">

              <div className=" mr-10 text-right text-neutral-400 text-[16px] font-medium font-['Peyda']">دسته بندی</div>
              <div className=" mr-10  text-right text-neutral-400 text-[16px] font-medium font-['Peyda']">دسته بندی</div>
              <div className=" mr-10  text-right text-neutral-400 text-[16px] font-medium font-['Peyda']">دسته بندی</div>
              <div className="  mr-10 text-right text-neutral-400 text-[16px] font-medium font-['Peyda']">دسته بندی</div>
              <div className="  mr-10 text-right text-neutral-400 text-[16px] font-medium font-['Peyda']">دسته بندی</div>
              <div className="  mr-10 text-right text-neutral-400 text-[16px] font-medium font-['Peyda']">دسته بندی</div>
              <div className="  mr-10 text-right text-neutral-400 text-[16px] font-medium font-['Peyda']">دسته بندی</div>

            </div>


            <div className="w-[800px] mr-auto ml-auto   pt-4 pb-4">

              <div className=" text-center flex justify-center items-center  pt-2 pb-2">


                <div className="p-5">
                  <img className=" w-[126px] h-[82px]" src="./images/image 4 (1).png" />
                  <div className=" text-center mt-[11px] text-black text-[11px] font-medium font-['Peyda']">دسته بندی</div>
                </div>

                <div className="p-5">
                  <img className=" w-[126px] h-[82px]" src="./images/image 4.png" />
                  <div className=" text-center mt-[11px] text-black text-[11px] font-medium font-['Peyda']">دسته بندی</div>
                </div>


                <div className="p-5">
                  <img className=" w-[126px] h-[82px]" src="./images/image 5.png" />
                  <div className=" text-center mt-[11px] text-black text-[11px] font-medium font-['Peyda']">دسته بندی</div>
                </div>



                <div className="p-5">
                  <img className=" w-[126px] h-[82px]" src="./images/image 45.png" />
                  <div className=" text-center mt-[11px] text-black text-[11px] font-medium font-['Peyda']">دسته بندی</div>
                </div>



                <div className="p-5">
                  <img className=" w-[126px] h-[82px]" src="./images/image 46.png" />
                  <div className=" text-center mt-[11px] text-black text-[11px] font-medium font-['Peyda']">دسته بندی</div>
                </div>



              </div>




              <div className=" text-center flex justify-center items-center  pt-2 pb-2">


                <div className="p-5">
                  <img className=" w-[126px] h-[82px]" src="./images/image 47.png" />
                  <div className=" text-center mt-[11px] text-black text-[11px] font-medium font-['Peyda']">دسته بندی</div>
                </div>

                <div className="p-5">
                  <img className=" w-[126px] h-[82px]" src="./images/image 48.png" />
                  <div className=" text-center mt-[11px] text-black text-[11px] font-medium font-['Peyda']">دسته بندی</div>
                </div>


                <div className="p-5">
                  <img className=" w-[126px] h-[82px]" src="./images/image 49.png" />
                  <div className=" text-center mt-[11px] text-black text-[11px] font-medium font-['Peyda']">دسته بندی</div>
                </div>



                <div className="p-5">
                  <img className=" w-[126px] h-[82px]" src="./images/image 50.png" />
                  <div className=" text-center mt-[11px] text-black text-[11px] font-medium font-['Peyda']">دسته بندی</div>
                </div>



                <div className="p-5">
                  <img className=" w-[126px] h-[82px]" src="./images/image 51.png" />
                  <div className=" text-center mt-[11px] text-black text-[11px] font-medium font-['Peyda']">دسته بندی</div>
                </div>



              </div>


              <div className=" text-center flex justify-center items-center  pt-2 pb-2">


                <div className="p-5">
                  <img className=" w-[126px] h-[82px]" src="./images/image 57.png" />
                  <div className=" text-center mt-[11px] text-black text-[11px] font-medium font-['Peyda']">دسته بندی</div>
                </div>

                <div className="p-5">
                  <img className=" w-[126px] h-[82px]" src="./images/image 58.png" />
                  <div className=" text-center mt-[11px] text-black text-[11px] font-medium font-['Peyda']">دسته بندی</div>
                </div>


                <div className="p-5">
                  <img className=" w-[126px] h-[82px]" src="./images/image 59.png" />
                  <div className=" text-center mt-[11px] text-black text-[11px] font-medium font-['Peyda']">دسته بندی</div>
                </div>



                <div className="p-5">
                  <img className=" w-[126px] h-[82px]" src="./images/image 60.png" />
                  <div className=" text-center mt-[11px] text-black text-[11px] font-medium font-['Peyda']">دسته بندی</div>
                </div>



                <div className="p-5">
                  <img className=" w-[126px] h-[82px]" src="./images/image 61.png" />
                  <div className=" text-center mt-[11px] text-black text-[11px] font-medium font-['Peyda']">دسته بندی</div>
                </div>



              </div>

            </div>

            <div className=" w-full    pt-4 pb-4 " >
              <div className="mr-auto ml-auto w-64 h-[46px] colorSecondaryBackground relative" >

                <div className=" w-full mr-auto ml-auto  absolute top-3  text-center text-white text-[16px] font-medium font-['Peyda']">نمایش تمام گروه ها</div>

              </div>
            </div>

            <div className="h-[50px]">

            </div>

            <div className=" w-full h-[22px] text-center text-slate-800 text-l font-extrabold font-['Peyda']">پیشنهادها</div>




            <div className=" w-full    pt-4 pb-4  flex justify-center items-center  " >



              <div>
                <img className=" w-[38px] h-[38px]   " src="./images/arrowRight.svg" />
              </div>


              <div className=" m-5   w-[185px] h-[211px] relative shadow">

                <img className=" w-[184px] h-[120px]" src="./images/image 50.png" />

                <div className=" w-[13.21px] h-[13.19px] left-[16.52px] top-[170.34px] absolute" />
                <div className=" left-[64.36px] top-[134.07px] absolute text-right text-orange-500 text-[13px] font-bold font-['Peyda']">نام محصول</div>
                <div className=" w-[66.07px] h-[16.48px] left-[34.14px] top-[167.04px] absolute text-black text-[13px] font-bold font-['Peyda']">۱,۲۰۰,۰۰۰</div>
                <div className=" w-[66.07px] h-[16.48px] left-[33.04px] top-[184.62px] absolute text-neutral-400 text-[13px] font-bold font-['Peyda']">۱,۱۰۰,۰۰۰</div>
                <div className=" w-[39.64px] h-[18.68px] left-[134.35px] top-[170.34px] absolute bg-blue-600 rounded-[3px]" />
                <div className=" left-[137.45px] top-[170.34px] absolute text-right text-white text-[13px] font-bold font-['Peyda']">۳۳٪</div>
              </div>



              <div className="  m-5  w-[185px] h-[211px] relative shadow">

                <img className=" w-[184px] h-[120px]" src="./images/image 59.png" />

                <div className=" w-[13.21px] h-[13.19px] left-[16.52px] top-[170.34px] absolute" />
                <div className=" left-[64.36px] top-[134.07px] absolute text-right text-orange-500 text-[13px] font-bold font-['Peyda']">نام محصول</div>
                <div className=" w-[66.07px] h-[16.48px] left-[34.14px] top-[167.04px] absolute text-black text-[13px] font-bold font-['Peyda']">۱,۲۰۰,۰۰۰</div>
                <div className=" w-[66.07px] h-[16.48px] left-[33.04px] top-[184.62px] absolute text-neutral-400 text-[13px] font-bold font-['Peyda']">۱,۱۰۰,۰۰۰</div>
                <div className=" w-[39.64px] h-[18.68px] left-[134.35px] top-[170.34px] absolute bg-blue-600 rounded-[3px]" />
                <div className=" left-[137.45px] top-[170.34px] absolute text-right text-white text-[13px] font-bold font-['Peyda']">۳۳٪</div>
              </div>



              <div className="  m-5  w-[185px] h-[211px] relative shadow">

                <img className=" w-[184px] h-[120px]" src="./images/image 57.png" />

                <div className=" w-[13.21px] h-[13.19px] left-[16.52px] top-[170.34px] absolute" />
                <div className=" left-[64.36px] top-[134.07px] absolute text-right text-orange-500 text-[13px] font-bold font-['Peyda']">نام محصول</div>
                <div className=" w-[66.07px] h-[16.48px] left-[34.14px] top-[167.04px] absolute text-black text-[13px] font-bold font-['Peyda']">۱,۲۰۰,۰۰۰</div>
                <div className=" w-[66.07px] h-[16.48px] left-[33.04px] top-[184.62px] absolute text-neutral-400 text-[13px] font-bold font-['Peyda']">۱,۱۰۰,۰۰۰</div>
                <div className=" w-[39.64px] h-[18.68px] left-[134.35px] top-[170.34px] absolute bg-blue-600 rounded-[3px]" />
                <div className=" left-[137.45px] top-[170.34px] absolute text-right text-white text-[13px] font-bold font-['Peyda']">۳۳٪</div>
              </div>

              <div className=" m-5   w-[185px] h-[211px] relative shadow">

                <img className=" w-[184px] h-[120px]" src="./images/image 51.png" />

                <div className=" w-[13.21px] h-[13.19px] left-[16.52px] top-[170.34px] absolute" />
                <div className=" left-[64.36px] top-[134.07px] absolute text-right text-orange-500 text-[13px] font-bold font-['Peyda']">نام محصول</div>
                <div className=" w-[66.07px] h-[16.48px] left-[34.14px] top-[167.04px] absolute text-black text-[13px] font-bold font-['Peyda']">۱,۲۰۰,۰۰۰</div>
                <div className=" w-[66.07px] h-[16.48px] left-[33.04px] top-[184.62px] absolute text-neutral-400 text-[13px] font-bold font-['Peyda']">۱,۱۰۰,۰۰۰</div>
                <div className=" w-[39.64px] h-[18.68px] left-[134.35px] top-[170.34px] absolute bg-blue-600 rounded-[3px]" />
                <div className=" left-[137.45px] top-[170.34px] absolute text-right text-white text-[13px] font-bold font-['Peyda']">۳۳٪</div>
              </div>

              <div>
                <img className=" w-[38px] h-[38px]  " src="./images/arrowLeft.svg" />
              </div>


            </div>



            <div className="flex justify-center items-center pt-15  w-[990px]  m-auto">
              <div className="bg-zinc-200  w-full h-[110px] mr-2 flex justify-center items-center" >
                <img className=" w-[71px] h-[61px]   " src="./images/image 7.png" />
              </div>
              <div className="bg-zinc-200  w-full h-[110px] mr-2 flex justify-center items-center" >
                <img className=" w-[71px] h-[61px]   " src="./images/image 6.png" />
              </div>
              <div className="bg-zinc-200  w-full h-[110px] mr-2  flex justify-center items-center" >
                <img className=" w-[71px] h-[61px]  " src="./images/image 8.png" />
              </div>
              <div className="bg-zinc-200  w-full h-[110px]   mr-2 flex justify-center items-center" >
                <img className=" w-[71px] h-[61px]   " src="./images/image 9.png" />
              </div>

            </div>

            <div className="flex justify-center items-center  mt-2 pb-15 w-[1000px] m-auto ">

              <div className="bg-zinc-200 w-full h-[110px]  mr-2 flex justify-center items-center" >
                <img className=" w-[71px] h-[61px]  " src="./images/image 6.png" />
              </div>
              <div className="bg-zinc-200  w-full h-[110px] mr-2 flex justify-center items-center" >
                <img className=" w-[71px] h-[61px]  " src="./images/image 8.png" />
              </div>
              <div className="bg-zinc-200  w-full h-[110px]   mr-2  flex justify-center items-center" >
                <img className="w-[71px] h-[61px]   " src="./images/image 10.png" />
              </div>
              <div className="bg-zinc-200  w-full h-[110px]   mr-2 flex justify-center items-center" >
                <img className=" w-[71px] h-[61px]  " src="./images/image 38.png" />
              </div>
            </div>


            <div className="h-[50px]"></div>

            <div className="w-full  text-center flex justify-center items-center   pt-4 pb-4">


              <div className=" relative pr-1 pl-1 ">
                <img className=" absolute left-10 top-2  w-[62px] h-[62px] rounded-bl-lg rounded-br-lg" src="./images/renau.png" />
                <img className=" w-[680px] h-[420px] border-t-4 border-orange-500" src="./images/car1.jpg" />
              </div>

              <div>

                <div className=" relative pr-1 pl-1 pb-1">
                  <img className=" absolute left-10 top-2  w-[62px] h-[62px] rounded-bl-lg rounded-br-lg" src="./images/jac.png" />
                  <img className=" w-[293px] h-[205px] border-t-4 border-orange-500" src="./images/car4.jpg" />

                </div>

                <div className=" relative pr-1 pl-1 pt-1">
                  <img className=" absolute right-10 bottom-1  w-[62px] h-[62px] rounded-bl-lg rounded-br-lg" src="./images/mvm.png" />
                  <img className=" w-[293px]  h-[205px] border-t-4 border-orange-500" src="./images/car3.jpg" />

                </div>


              </div>

            </div>

            <div className="h-[50px]"></div>

            <div className=" w-full h-[22px] text-center text-slate-800 text-xl font-extrabold font-['Peyda']">درباره ما</div>
            <div className="h-[20px]"></div>

            <div className=" w-[980px] text-center text-black text-xl font-thin font-['Peyda'] m-auto">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</div>

            <div className="h-[50px]"></div>

            <div className=" w-[218px] h-[50px]  border border-black relative m-auto" >
              <img className=" w-[19px] h-[19px] absolute top-[17px] left-[10px]    " src="./images/down-arrow.png"></img>
              <div className=" w-[141px] h-[22px]  absolute top-[14px]  left-[17px]   m-auto text-right text-slate-800 text-xl font-normal font-['Peyda']">بیشتر بخوانید</div>
            </div>


            <div className="h-[20px]"></div>


            <div className=" w-full    pt-8 pb-8  flex justify-center items-center  " >


              <div>
                <img className=" w-[38px] h-[38px]   " src="./images/arrowRight.svg" />
              </div>


              <div className="    w-[185px] h-[111px] relative ">

                <div className=" relative mr-3 ml-3">
                  <img src="./images/image 65.png" />
                  <div className="mt-1.5   text-center text-black text-[14px] font-medium font-['Peyda']">تیتر</div>
                </div>

              </div>



              <div className="   w-[185px] h-[111px] relative ">
                <div className=" relative  mr-3 ml-3">
                  <img src="./images/image 62.png" />
                  <div className="mt-1.5   text-center text-black text-[14px] font-medium font-['Peyda']">تیتر</div>
                </div>
              </div>



              <div className="   w-[185px] h-[111px] relative ">
                <div className=" relative  mr-3 ml-3">
                  <img src="./images/image 63.png" />
                  <div className="mt-1.5   text-center text-black text-[14px] font-medium font-['Peyda']">تیتر</div>
                </div>
              </div>

              <div className="  w-[185px] h-[111px] relative ">
                <div className=" relative  mr-3 ml-3">
                  <img src="./images/image 64.png" />
                  <div className="mt-1.5   text-center text-black text-[14px] font-medium font-['Peyda']">تیتر</div>
                </div>
              </div>


              <div>
                <img className=" w-[38px] h-[38px]  " src="./images/arrowLeft.svg" />
              </div>



            </div>



            <div className="h-[100px]"></div>





          </div>


        </div>

      </div>
      <FooterOfSite></FooterOfSite>
    </div>



  );
}
export const getServerSideProps = async (context: any) => {
    const res = await fetch(`${url}/v1/firstpage`);
    const res2 = await fetch(`${url}/v1/headerinfo`);
    const headers = await res2.json();

    const data = await res.json();
    return {
        props: {
            data: data,
            headers: headers
        },
    }
}