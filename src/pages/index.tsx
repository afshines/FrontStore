import FooterOfSite from "@/components/footerofsite";
import Headerofwebsite from "@/components/header";
import SearchBox from "@/components/searchbox";
import Image from "next/image";
import '@/app/globals.css'
import { url } from '../data/config';
import Head from 'next/head'
import ShowArticle from "@/components/showarticle";
import Tabfirstpage from "@/components/tabfirstpage";
import Cproducts from "@/components/carsoulproducts";

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
        <meta name="enamad" content="6651526" />
      </Head>
      <Headerofwebsite data={headers}></Headerofwebsite>

      <div className="">

        <div className="mt-24 sm:mt-0">
          <div className="bg-[url('/covergroup.png')] w-full h-[300px] bg-no-repeat bg-cover">
            <div className='container mx-auto mb-4 ' >
              <SearchBox data={headers}></SearchBox>
            </div>
          </div>



          <div className="main-page colorWhiteBackground  w-full h-auto " >

            <div className="w-full  text-center flex justify-center items-center   pt-4 pb-4">

              <div className=" grid xl:grid-cols-9 grid-cols-6 gap-4  container mx-auto">
                {
                  data.ProductGroups.map((item: any) => {
                    return (
                      <div className=" xl:col-span-1  lg:col-span-1  col-span-2  mr-3 items-center justify-center">
                        <a href={`/group/${item.url}`}>
                          <div className="bg-white sm:h-40 pt-3 p-1 h-[140px]  items-center justify-center ">
                            {
                              item.masterimage != null && <img className=" w-[150px] mt-3 h-[3]  rounded-[28px]" src={url + item.masterimage.url} />
                            }
                          </div>

                          <div className=" mt-1.5  text-center text-black text-[14px] font-medium font-['Peyda']">{item.name}</div>
                        </a>
                      </div>
                    )
                  })
                }
              </div>



            </div>


            <div className="max-w-[1000px]  mr-auto ml-auto text-center grid  grid-cols-9 justify-center items-center   pt-4 pb-4">
              <div className="sm:col-span-2 col-span-9 grid grid-cols-2  ">

                <div className=" relative pr-1 pl-1 pb-1 sm:col-span-2 col-span-1 ">
                  <img className=" absolute left-10 top-2  w-[62px] h-[62px] rounded-bl-lg rounded-br-lg" src="./images/iran.png" />
                  <img className=" w-full sm:h-[185px] h-auto mt-1  border-t-4 border-orange-500" src="./images/car2.jpg" />

                </div>

                <div className=" relative pr-1 pl-1 pt-1 sm:col-span-2 col-span-1">
                  <img className=" absolute left-10 top-2  w-[62px] h-[62px] rounded-bl-lg rounded-br-lg" src="./images/iran.png" />
                  <img className="  w-full sm:h-[185px] h-auto  border-t-4 border-orange-500" src="./images/car2.jpg" />

                </div>



              </div>


              <div className=" relative pr-1 pl-1  sm:col-span-5  col-span-9">
                <img className=" absolute left-10 top-2  w-[62px]  rounded-bl-lg rounded-br-lg" src="./images/renau.png" />
                <img className=" w-[569px] lg:h-[377px] xl:h-[377px] 2xl:h-[377px] sm:h-auto border-t-4 border-orange-500" src="./images/car1.jpg" />
              </div>

              <div className="sm:col-span-2 col-span-9 grid grid-cols-2">

                <div className=" relative pr-1 pl-1 pb-1 sm:col-span-2 col-span-1">
                  <img className=" absolute left-10 top-2  w-[62px] h-[62px] rounded-bl-lg rounded-br-lg" src="./images/jac.png" />
                  <img className=" w-full sm:h-[185px] mt-1 h-auto border-t-4 border-orange-500" src="./images/car4.jpg" />

                </div>

                <div className=" relative pr-1 pl-1 pt-1 sm:col-span-2 col-span-1">
                  <img className=" absolute right-10 bottom-1  w-[62px] h-[62px] rounded-bl-lg rounded-br-lg" src="./images/mvm.png" />
                  <img className=" w-full sm:h-[185px] h-auto border-t-4 border-orange-500" src="./images/car3.jpg" />

                </div>


              </div>
            </div>


            <Tabfirstpage data={data.ProductGroups}></Tabfirstpage>



            <div className="h-[50px]">

            </div>

            <div className=" w-full h-[22px] text-center text-slate-800 text-l font-extrabold font-['Peyda']">پیشنهادها</div>


            <Cproducts data={data.productlist}></Cproducts>


            <div className="grid sm:grid-cols-4 grid-cols-2 gap-1 justify-center items-center pt-15 max-w-[1000px]   m-auto">
              {
                data.companies.map((item:any)=>{
                  return(
                    <div className="bg-zinc-200  w-full  h-[110px] mr-2 flex justify-center items-center" >
                      <a href={`/search?brand=${item.url}`}>
                      <img className=" w-[200px] h-[61px]  object-contain  " src={`${item.masterimage != null ? url + item.masterimage.url : '/images/noimage.png'}`} />

                      </a>

                  </div>
                  );
                })
              }
             
        


          
            </div>


            <div className="h-[50px]"></div>

            <div className="w-full grid sm:grid-cols-6 grid-cols-2   max-w-[1000px]   m-auto  text-center  justify-center items-center   pt-4 pb-4">


              <div className=" relative pr-1 pl-1 sm:col-span-4 col-span-2">
                <img className=" absolute left-10 top-2  w-[62px] h-[62px] rounded-bl-lg rounded-br-lg" src="./images/renau.png" />
                <img className=" w-full sm:h-auto   lg:h-[420px] xl:h-[420px] 2xl:h-[420px]    border-t-4 border-orange-500" src="./images/car1.jpg" />
              </div>

              <div className="sm:col-span-2 col-span-2 grid sm:grid-cols-1 grid-cols-2  ">

                <div className=" relative pr-1 pl-1 pb-1 w-full mt-1">
                  <img className=" absolute left-10   w-[62px] h-[62px] rounded-bl-lg rounded-br-lg" src="./images/jac.png" />
                  <img className=" w-full sm:h-[205px] h-[150px] border-t-4 border-orange-500" src="./images/car4.jpg" />

                </div>

                <div className=" relative pr-1 pl-1 pt-1">
                  <img className=" absolute right-10 bottom-1  w-[62px] h-[62px] rounded-bl-lg rounded-br-lg" src="./images/mvm.png" />
                  <img className=" w-full   sm:h-[205px] h-[150px] border-t-4 border-orange-500" src="./images/car3.jpg" />

                </div>


              </div>

            </div>

            <div className="h-[50px]"></div>
            <div className="max-w-[1000px] m-auto pr-4 pl-5">

              <div className=" w-full h-[22px] text-center text-slate-800 text-xl font-extrabold font-['Peyda']">درباره ما</div>
              <div className="h-[20px]"></div>

              <div className=" justify-normal text-center text-black text-xl font-thin font-['Peyda'] m-auto">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</div>

              <div className="h-[50px]"></div>

              <a href="/aboutus">
                <div className=" w-[200px] h-[40px]  border border-black relative m-auto" >
                  <img className=" w-[19px] h-[19px] absolute top-[7px] left-[10px]    " src="./images/down-arrow.png"></img>
                  <div className=" w-[141px] h-[22px]  absolute top-[4px]  left-[17px]   m-auto text-right text-slate-800 text-xl font-bold font-['Peyda']">بیشتر بخوانید</div>
                </div>
              </a>

            </div>

            <div className="h-[20px]"></div>

            {/* 
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



            </div> */}



            <div className="h-[100px]"></div>





          </div>


        </div>

      </div>
      <FooterOfSite data={headers}></FooterOfSite>
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
