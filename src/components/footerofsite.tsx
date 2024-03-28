import Certificate from "./certificate"
import Subscript from "./subscript"
import WarrantyComponent from "./warranty"

export default function FooterOfSite({ data }: any) {
  return (
    <>

      <div className="footer w-full p-10 gradient-background footerBorder bg-left bg-no-repeat  footerBack ">
        <div className=" grid grid-cols-2  ">
          
          <div className="md:col-span-1 sm:col-span-2">
            <div>
              <img className="logo w-[200px]" src="./images/logo.png" alt="logo" />
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
              <div className="mr-5 relative w-[140px] h-[41px] bg-white bg-opacity-0 rounded-[14px] border border-neutral-400" >

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