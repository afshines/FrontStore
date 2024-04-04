import Certificate from "./certificate"
import Subscript from "./subscript"
import WarrantyComponent from "./warranty"
const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
export default function FooterOfSite({ data }: any) {
  return (
    <>
      <div className=" lg:hidden xl:hidden gradient-background 2xl:hidden  min-h-96">
        <div className=" grid grid-cols-12  ">
          <div className="col-span-12 ">
            <div className="w-full text-center items-center p-4 pt-10">
              <img className=" w-[200px] m-auto" src="/images/logo.png" alt="logo" />
              <div className=" pt-3 text-center md:text-right text-blue-600 text-[15px] font-medium font-['Peyda']">  ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</div>
              <div className="  text-center md:text-right text-blue-600 text-[15px] font-medium font-['Peyda']">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱ . </div>

            </div>
          </div>
          <div className="col-span-6 pr-6 ">
            <ul>
              {
                data.topmenu.todetail.map((item: any) => {
                  return (
                    <li className="text-right text-slate-500  text-l font-medium font-['Peyda']"><a href={item.data.url}>{item.name}</a></li>

                  )
                })
              }
            </ul>
          </div>
          <div className="col-span-6  ">
            <ul className="pr-11">
              {
                data.menu.todetail.map((item: any) => {
                  return (
                    <li className="text-right text-slate-500  text-l font-medium font-['Peyda']"><a href={item.data.url}>{item.name}</a></li>

                  )
                })
              }
            </ul>
          </div>
          <div className="col-span-12 pt-4 pr-3">
            <WarrantyComponent></WarrantyComponent>
          </div>
          <div className="col-span-12 pt-10 pr-10">
            <Subscript></Subscript>
          </div>
          <div className="col-span-12 pt-10 pr-10">
            <div className="flex justify-center m-auto">
              <img className=" p-1 w-8 h-8  " src="/images/linkedin.svg" />
              <img className=" p-1 w-8 h-8  " src="/images/aparat.svg" />
              <img className=" p-1 w-8 h-8  " src="/images/telegram.svg" />
              <img className=" p-1 w-8 h-8  " src="/images/instagram.svg" />
              <img className=" p-1 w-8 h-8  " src="/images/facebook.svg" />
            </div>
          </div>

        </div>
        <div className="fixed w-full h-[50px]  colorSecondaryBackground bottom-[0px]">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-2 justify-center mr-1 mt-3">
              <a href="/">
                <img className="m-auto justify-center w-6" src="/images/home.svg"  ></img>
              </a>
            </div>
            <div className="col-span-1 justify-center mr-1  mt-3">
              <a href="/group">
                <img className="m-auto justify-center  w-6" src="/images/allgroup.svg" width={'30px'} ></img>
              </a>
            </div>
            <div className="col-span-6 justify-center text-center mr-1 mt-3">
             
            </div>
            <div className="col-span-1 justify-center mr-1  mt-3">
              <a href="/basket">
                <img className="m-auto justify-center  w-6" src="/images/basket.svg" width={'30px'} ></img>
              </a>
            </div>
            <div className="col-span-2 justify-center mr-1 mt-3">
              <a href="/login">
                <img className="m-auto justify-center w-6" src="/images/person.svg"  ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer w-full p-10 gradient-background footerBorder bg-left bg-no-repeat  footerBack hidden sm:block ">
        <div className=" grid grid-cols-12  ">

          <div className="col-span-10 ">
            <div>
              <img className="logo w-[200px]" src="/images/logo.png" alt="logo" />
            </div>
            <div className=" p-5 text-right sm:text-center md:text-right text-blue-600 text-[15px] font-medium font-['Peyda']">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱ .   |   ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</div>
            <div className="flex justify-start">
              <ul>
                {
                  data.topmenu.todetail.map((item: any) => {
                    return (
                      <li className="text-right text-slate-500  text-l font-medium font-['Peyda']"><a href={item.data.url}>{item.name}</a></li>

                    )
                  })
                }
              </ul>
              <ul className="pr-11">
                {
                  data.menu.todetail.map((item: any) => {
                    return (
                      <li className="text-right text-slate-500  text-l font-medium font-['Peyda']"><a href={item.data.url}>{item.name}</a></li>

                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className="md:col-span-1 sm:col-span-2" >
            <div>
              <div   onClick={scrollToTop} className="mr-5 cursor-pointer relative w-[140px] h-[41px] bg-white bg-opacity-0 rounded-[14px] border border-neutral-400" >

                <div className=" absolute top-2 right-2 w-[127px] h-6 text-right text-neutral-400 text-[15px] font-medium font-['Peyda']">بازگشت به بالا</div>
                <img className=" absolute top-3 left-3 w-[18px] h-[10px]  " src="/images/GoUp.png" />
              </div>

            </div>
            <div>
              <div className=" pt-7  pb-3 text-right text-slate-500 text-xs font-medium font-['Peyda'] leading-tight">همراه ما باشید!<br /></div>
            </div>
            <div className="flex justify-start">
              <img className=" p-1 w-8 h-8  " src="./images/linkedin.svg" />
              <img className=" p-1 w-8 h-8  " src="/images/aparat.svg" />
              <img className=" p-1 w-8 h-8  " src="/images/telegram.svg" />
              <img className=" p-1 w-8 h-8  " src="/images/instagram.svg" />
              <img className=" p-1 w-8 h-8  " src="/images/facebook.svg" />
            </div>
          </div>
        </div>
        <div>

          <div className="flex justify-between">
            <div className="mt-5 flex justify-between">
              <WarrantyComponent></WarrantyComponent>

            </div>
            <div className="mt-5">
              <Subscript></Subscript>
            </div>
            <div className="flex justify-start items-center">
              <Certificate></Certificate>
            </div>
          </div>
        </div>
      </div>


      <div className="h-[50px] copyRightColorBg">

      </div>
    </>
  )
}