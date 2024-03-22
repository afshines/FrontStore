import Image from "next/image";

export default function Home() {
  return (

    <div className="">
      <div className="">

        <div className="">

          <div className="header-top  w-full h-12  colorSecondaryBackground">
            <div className="menu-top flex justify-center items-center h-full  ">

              <a className="link-top-menu text-center text-white text-base font-black font-['Peyda'] hover:text-yellow-400  " href="#">روزهای شانس</a>
              <div className="menu-divider  w-0.5 h-7 bg-white mr-2 ml-2">  </div>
              <a className="link-top-menu text-center text-white text-base font-black font-['Peyda'] hover:text-yellow-400" href="#">روزهای شانس</a>
              <div className="menu-divider w-0.5 h-7 bg-white mr-2 ml-2"> </div>
              <a className="link-top-menu text-center text-white text-base font-black font-['Peyda'] hover:text-yellow-400" href="#">روزهای شانس</a>


            </div>

          </div>

          <div className="middle-menu flex   justify-between w-full h-24   p-5  bg-white ">
            <img className="logo w-[170px] h-[40px]" src="./images/logo.png" alt="logo" />


            <div className="search">
              <div className=" w-96 h-9 relative">
                <div className=" w-96 h-9 bg-zinc-100 rounded-md" />

                <img className="inline w-6 h-6 p-0.5 right-[10px] top-[5px] absolute justify-center items-center inline-flex" src="./images/search.svg" />

                <div className=" w-28 h-6 right-[15px] top-[5px] absolute opacity-20 text-center text-neutral-400 text-base font-normal font-['Peyda']">جستجو</div>
              </div>
            </div>



            <div className="flex justify-center items-center">


              <div className="registerBtn relative w-32 h-10 colorSecondaryBackground rounded-xl border border-neutral-400">



                <div className="Frame w-5 h-5 px-0.5 py-0.5 absolute right-[5px] top-[6px] -rotate-180 justify-center items-center inline-flex inline">
                  <img className="  w-6 h-6 " src="./images/login.svg" />

                </div>

                <div className=" w-24 h-6 text-center absolute left-[0px] top-[5px] text-white text-base font-semibold font-['Peyda'] inline">ورود | ثبت نام</div>


              </div>

              <img className="cart  mr-2  w-6 h-6 px-px py-px justify-center items-center inline-flex" src="./images/cart.svg" />



            </div>


          </div>

          <div className="bottom_menu w-full h-12 bg-white flex justify-between pl-5 pr-5">

            <div className="menu-bottom-right flex justify-between">

              ‍<div className="p-[10px]  ml-20">

                <span className="  w-14 h-3.5 text-right leading-relaxed  text-neutral-400 text-base font-normal font-['Peyda']">دسته بندی</span>

                <img src="./images/category.svg" className="  float-right w-7 h-7 px-0.5 pt-0.5 pb-px justify-center items-center inline-flex" />

              </div>
              ‍<div className="flex justify-between ">




                <div className="flex w-25 justify-between p-[10px] colorPrimaryBackground rounded-tl rounded-tr">
                  <span className="  w-14 h-3.5 text-right leading-relaxed  text-white text-base font-normal font-['Peyda']">تخفیفات</span>
                  <span><img src="./images/discount.svg" className="   w-7 h-7 px-0.5 pt-0.5 pb-px" /></span>
                </div>
                <div className="flex w-25 justify-between p-[10px]">
                  <span className="  w-[100px] h-3.5 text-right leading-relaxed  text-neutral-400 text-base font-normal font-['Peyda']">پرفروش ترین ها</span>
                  <span><img src="./images/top.svg" className="   w-7 h-7 px-0.5 pt-0.5 pb-px " /> </span>
                </div>
                <div className="flex  w-25 justify-between p-[10px]">
                  <span className="  w-14 h-3.5 text-right leading-relaxed  text-neutral-400 text-base font-normal font-['Peyda']">سوالات</span>
                  <span><img src="./images/question.svg" className="   w-7 h-7 px-0.5 pt-0.5 pb-px  " /></span>
                </div>

              </div>

            </div>

            <div className="menu-bottom-left relative p-[10px]">

              <span className=" ml-20 w-14 h-3.5 text-right leading-relaxed  text-neutral-400 text-base font-normal font-['Peyda']">درباره ما</span>

              <img src="./images/about.svg" className="  float-right w-7 h-7 px-0.5 pt-0.5 pb-px justify-center items-center inline-flex" />



            </div>

          </div>


          <div className=" w-full h-[256px] bg-cover bg-center bg-no-repeat text-center relative" style={{ backgroundImage: "url('./images/slide1.jpg')", height: '256px' }}>

            <div className=" mr-auto ml-auto  absolute   top-[120px] w-full flex justify-center  ">


              <div className="Group56 w-36 h-12 relative mr-2">
                <div className="Rectangle6 w-36 h-12 left-0 top-0 absolute colorSecondaryBackground rounded-md" />
                <div className=" w-[108px] h-[34.29px] left-[18px] top-[13px] absolute text-center text-white text-base font-normal font-['Peyda']">جستجو</div>
              </div>

              <div className="Group62 w-[217px] h-[46px] relative mr-2" >
                <div className="Rectangle61 w-[217px] h-[46px] left-0 top-0 absolute bg-white rounded-[3px] shadow-inner" />
                <div className=" w-[191px] h-[15px] left-[3px] top-[15px] absolute text-right text-neutral-400 text-[13px] font-light font-['Peyda']">گروه</div>
              </div>

              <div className="Group61 w-[217px] h-[46px] relative mr-2">
                <div className="Rectangle62 w-[217px] h-[46px] left-0 top-0 absolute bg-white rounded-[3px] shadow-inner" />
                <div className=" w-[204px] h-[15px] left-0 top-[15px] absolute text-right text-neutral-400 text-[13px] font-light font-['Peyda']">برند</div>
              </div>

              <div className="Group60 w-[217px] h-[46px] relative">
                <div className="Rectangle63 w-[217px] h-[46px] left-0 top-0 absolute bg-white rounded-[3px] shadow-inner" />
                <div className=" w-[204px] h-[15px] left-[4px] top-[14px] absolute text-right text-neutral-400 text-[13px] font-light font-['Peyda']">نام</div>
              </div>

            </div>

          </div>

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


            <div className="footer w-full p-10 gradient-background footerBorder bg-left bg-no-repeat  footerBack ">

              <div className=" flex justify-between  ">

                <div >
                  <div>
                    <img className="logo w-[200px] h-[40px]" src="./images/logo.png" alt="logo" />
                  </div>
                  <div>
                    <div className=" p-5 text-right text-blue-600 text-[15px] font-medium font-['Peyda']">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱ .   |   ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</div>

                  </div>

                  <div className="flex justify-start">
                    <ul>

                      <li className="text-right text-slate-500  text-l font-medium font-['Peyda']">خدمات مشتریان</li>
                      <li className="text-right text-slate-500  text-l font-medium font-['Peyda']">پاسخ به پرسش‌های متداول </li>
                      <li className="text-right text-slate-500  text-l font-medium font-['Peyda']">رویه‌های بازگرداندن کالا </li>
                      <li className="text-right text-slate-500  text-l font-medium font-['Peyda']">شرایط استفاده </li>
                      <li className="text-right text-slate-500  text-l font-medium font-['Peyda']">حریم خصوصی </li>
                      <li className="text-right text-slate-500  text-l font-medium font-['Peyda']">گزارش باگ </li>

                    </ul>

                    <ul className="pr-11">
                      <li className="text-right text-slate-500  text-l font-medium font-['Peyda']">راهنمای خرید </li>
                      <li className="text-right text-slate-500  text-l font-medium font-['Peyda']">نحوه ثبت سفارش </li>
                      <li className="text-right text-slate-500  text-l font-medium font-['Peyda']">رویه ارسال سفارش </li>
                      <li className="text-right text-slate-500  text-l font-medium font-['Peyda']">شیوه‌های پرداخت </li>

                    </ul>
                  </div>

                </div>




                <div >
                  <div>
                    <div className=" relative w-[185px] h-[41px] bg-white bg-opacity-0 rounded-[14px] border border-neutral-400" >

                      <div className=" absolute top-2 right-2 w-[127px] h-6 text-right text-neutral-400 text-[15px] font-medium font-['Peyda']">بازگشت به بالا</div>
                      <img className=" absolute top-3 left-3 w-[18px] h-[10px]  " src="./images/GoUp.png" />
                    </div>

                  </div>
                  <div>
                    <div className=" pt-7  pb-3 text-right text-slate-500 text-xs font-medium font-['Peyda'] leading-tight">همراه ما باشید!<br /></div>
                  </div>
                  <div className="flex justify-start">
                    <img className=" p-1 w-8 h-8  " src="./images/linkedin.svg" />
                    <img className=" p-1 w-8 h-8  " src="./images/aparat.svg" />
                    <img className=" p-1 w-8 h-8  " src="./images/telegram.svg" />
                    <img className=" p-1 w-8 h-8  " src="./images/instagram.svg" />
                    <img className=" p-1 w-8 h-8  " src="./images/facebook.svg" />
                  </div>
                </div>
              </div>




              <div>


                <div className="flex justify-between">
                  <div className="mt-5 flex justify-between">
                    <div className="pt-5 pl-5">
                      <img className=" w-10 h-10  m-auto" src="./images/icons-zemanat.svg" />
                      <div className=" w-[70px]  text-center text-slate-500 text-l font-thin font-['Peyda']">ضمانت اصل بودن کالا</div>

                    </div>

                    <div className="pt-5 pl-5">
                      <img className=" w-10 h-10  m-auto" src="./images/icons-7roze.svg" />
                      <div className=" w-[70px]  text-center text-slate-500 text-l font-thin font-['Peyda']">هفت روز ضمانت بازگشت کالا</div>

                    </div>

                    <div className="pt-5 pl-5">
                      <img className=" w-10 h-10  m-auto" src="./images/icons-support.svg" />
                      <div className=" w-[70px]  text-center text-slate-500 text-l font-thin font-['Peyda']">۷ روز ﻫﻔﺘﻪ،<br/> ۲۴ ﺳﺎﻋﺘﻪ</div>

                    </div>

                    <div className="pt-5 pl-5">
                      <img className=" w-10 h-10  m-auto" src="./images/icons-express.svg" />
                      <div className=" w-[70px]  text-center text-slate-500 text-l font-thin font-['Peyda']">تحویل اکسپرس</div>

                    </div>
                  </div>
                  <div className="mt-5">
                    <div className=" m-1 text-right text-black text-xs font-medium font-['Peyda']">با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید<br /></div>
                    <div className="flex justify-start">
                      <div className=" w-[238px] h-[37px] bg-zinc-100 rounded-[9px]" />

                      <div className="Rectangle29 w-[69px] h-[37px] bg-slate-500 rounded-[9px] mr-2 flex justify-center items-center" >

                        <div className=" w-[53px] h-3 text-center text-zinc-100 text-xs font-extrabold font-['Peyda']">ثبت</div>

                      </div>

                    </div>
                  </div>
                  <div className="flex justify-start items-center">

                    <div className="w-[81px] h-[92px] bg-zinc-100 rounded-[7px] flex justify-center  p-5  m-2">
                      <img className="  " src="./images/image 20.png" />
                    </div>

                    <div className="w-[81px] h-[92px] bg-zinc-100 rounded-[7px] flex justify-center  p-5  m-2">
                      <img className="   " src="./images/image 21.png" />
                    </div>

                  </div>

                </div>




              </div>




            </div>







            <div className="h-[50px] copyRightColorBg">

            </div>



          </div>


        </div>

      </div>
    </div>



  );
}
