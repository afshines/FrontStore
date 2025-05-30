import ShowArticle from "./showarticle";
import { url } from '../data/config';
import { MegaMenu } from "./megamenu";
import React, { useState, useEffect, useRef } from 'react';
import CanvasMenu from "./canvas";
import {
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem
} from "@nextui-org/react";
export default function Headerofwebsite({ data }: any) {
  const [search, setSearch] = useState<any>([]);

  const [showmega, setShow] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const searchItem = () => {
    console.log(search);
    window.location.href = "/search?&search=" + search;
  }
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShow(false);
      }
    };

    window.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref]);
  return (
    <>
      <div className="header-top  onlysx  w-full h-12  colorSecondaryBackground">
        <div className="menu-top flex justify-center items-center h-full  ">
          <ShowArticle data={data.headerpages.tocomponent}></ShowArticle>
        </div>
      </div>
      <div className=" fixed top-0 w-full z-[3000]  lg:hidden xl:hidden  2xl:hidden colorSecondaryBackground ">
        <div className="grid grid-cols-2 w-full p-1">
          <div className="col-span-1 text-right pt-2 pr-3  pl-2">
            <img src="/logo.png" width={'150px'} ></img>
          </div>
          <div className="col-span-1 text-left">
            <div>
              <CanvasMenu data={data}></CanvasMenu>
            </div>
          </div>

        </div>
        <div className="col-span-2 mr-4 ml-4 pb-3">
          <div className="">
            <div className=" w-[400] h-9 relative">
              <div className="  h-9 bg-zinc-100 rounded-md" />
              <button
                onClick={(e) => {
                  searchItem();
                }}
                className="inline w-6 h-6 p-0.5 right-[10px] top-[5px] absolute justify-center items-center inline-flex"
              >
                <img

                  src="/images/search.svg" />
              </button>

              <div className="  w-full h-6 right-[60px] top-[5px] absolute opacity-20 text-center text-black text-base font-normal font-['Peyda']">
                <input
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  style={{
                    width: ' 80%',
                    marginLeft: '70px',
                    color: 'black'
                  }}

                  className="w-100 " dir="rtl" placeholder="جستجو"  ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        // style={{ display:'inherit'}}
        className="middle-menu flex onlysx    justify-between w-full h-24   p-5  bg-white ">
        <a href="/">
          {
            data.setting.masterimage != null && <img className="logo  h-[40px]" src={url + data.setting.masterimage.url} alt={data.setting.title} />
          }
        </a>

        <div className="search">
          <div className=" w-96 h-9 relative">

            <input 
             onChange={(e) => {
              setSearch(e.target.value);
            }}
            
            className="pr-3 w-96 h-9 bg-zinc-100 rounded-md" ></input>
            <img 
              onClick={(e) => {
                searchItem();
              }}
            
            className="inline cursor-pointer w-6 h-6 p-0.5 left-[10px] top-[5px] absolute justify-center items-center inline-flex" src="/images/search.svg" />

          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="registerBtn relative w-32 h-10 colorSecondaryBackground rounded-xl border border-neutral-400">

            <div className="Frame w-5 h-5 px-0.5 py-0.5 absolute right-[5px] top-[6px] -rotate-180 justify-center items-center inline-flex inline">
              <img className="  w-6 h-6 " src="/images/login.svg" />

            </div>

            <div className=" w-24 h-6 text-center absolute left-[0px] top-[5px] text-white text-base font-semibold font-['Peyda'] inline">

              <a href="/login" className="font-['peyda']">
                ورود | ثبت نام
              </a>
            </div>


          </div>
              <a href="/invoice">
              <img className="cart  mr-2  w-6 h-6 px-px py-px justify-center items-center inline-flex" src="/images/cart.svg" />

              </a>



        </div>


      </div>

      <div className="bottom_menu  onlysx w-full h-12 bg-white flex justify-between pl-5 pr-5">
        <div className="menu-bottom-right flex justify-between"

        >

          ‍<div
            ref={ref}
            onClick={(e) => {
              setShow(showmega == true ? false : true)
            }} onBlur={(e) => {
              setShow(false);

            }}

            className="p-[10px] cursor-pointer ml-20">
            <span className="  w-14 h-3.5 text-right leading-relaxed  text-neutral-400 text-base font-normal font-['Peyda']">دسته بندی</span>
            <img src="/images/category.svg" className="  float-right w-7 h-7 px-0.5 pt-0.5 pb-px justify-center items-center inline-flex" />
            {
              showmega == true && <MegaMenu ref={ref} data={data.groups}></MegaMenu>

            }
          </div>

          ‍<div className="flex justify-between ">
            <div className="flex w-25 justify-between p-[10px] colorPrimaryBackground rounded-tl rounded-tr">
              <a href="/precent">
                <div className="flex">
                  <span className="  w-14 h-3.5 text-right leading-relaxed  text-white text-base font-normal font-['Peyda']">تخفیفات</span>
                  <span><img src="/images/discount.svg" className="   w-7 h-7 px-0.5 pt-0.5 pb-px" /></span>

                </div>
              </a>
            </div>
            <div className="flex w-25 justify-between p-[10px]">
              <a href="/sellerlist">
                <div className="flex">
                  <span className="  w-[100px] h-3.5 text-right leading-relaxed  text-neutral-400 text-base font-normal font-['Peyda']">پرفروش ترین ها</span>
                  <span><img src="/images/top.svg" className="   w-7 h-7 px-0.5 pt-0.5 pb-px " /> </span>

                </div>
              </a>

            </div>
            <div className="flex  w-25 justify-between p-[10px]">
              <a href="/qa">
                <div className="flex">
                  <span className="  w-14 h-3.5 text-right leading-relaxed  text-neutral-400 text-base font-normal font-['Peyda']">سوالات</span>
                  <span><img src="/images/question.svg" className="   w-7 h-7 px-0.5 pt-0.5 pb-px  " /></span>

                </div>
              </a>
            </div>

          </div>

        </div>

        <div className="menu-bottom-left relative p-[10px]">
          <a href="/aboutus">
            <div className="flex">
              <span className=" ml-20 w-14 h-3.5 text-right leading-relaxed  text-neutral-400 text-base font-normal font-['Peyda']  font-extrabold">درباره ما</span>

              <img src="/images/about.svg" className="  float-right w-7 h-7 px-0.5 pt-0.5 pb-px justify-center items-center inline-flex" />


            </div>
          </a>


        </div>

      </div>


    </>
  )
}