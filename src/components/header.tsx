import ShowArticle from "./showarticle";
import { url } from '../data/config';
import { MegaMenu } from "./megamenu";

export default function Headerofwebsite({ data }: any) {
  return (
    <>
      <div className="header-top  w-full h-12  colorSecondaryBackground">
        <div className="menu-top flex justify-center items-center h-full  ">
          <ShowArticle data={data.headerpages.tocomponent}></ShowArticle>
        </div>
      </div>

      <div className="middle-menu flex   justify-between w-full h-24   p-5  bg-white ">
        {
          data.setting.masterimage != null && <img className="logo w-[170px] h-[40px]" src={url + data.setting.masterimage.url} alt={data.setting.title} />
        }
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

            <div className=" w-24 h-6 text-center absolute left-[0px] top-[5px] text-white text-base font-semibold font-['Peyda'] inline">

              <a href="/login">
                ورود | ثبت نام
              </a>
            </div>


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

      <MegaMenu data={data.groups}></MegaMenu>

    </>
  )
}