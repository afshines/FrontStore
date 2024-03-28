export default function SearchBox() {
  return (
    <>
      <div className=" w-full h-[256px] bg-cover bg-center bg-no-repeat text-center " style={{ backgroundImage: "url('./images/slide1.jpg')", height: '256px' }}>

        <div className=" mr-auto ml-auto max-w-screen-lg    top-[120px] w-full flex justify-center  " dir="rtl">



          <div className="grid grid-cols-12 w-full gap-1 mt-[20px] sm:mt-[100px] mr-5 ml-5" >

            <div className=" xl:col-span-3  lg:col-span-3  col-span-12 items-center">
              <div className=" w-full h-[46px] ">
                <input className="w-full h-[46px] p-1 " placeholder="نام"></input>
              </div>
            </div>

            <div className=" xl:col-span-3  lg:col-span-3  col-span-12 items-center">
              <div className=" w-full h-[46px] ">
                <input className="w-full h-[46px] p-1 " placeholder="کروه"></input>
              </div>
            </div>
            <div className=" xl:col-span-3  lg:col-span-3  col-span-12 items-center">
              <div className=" w-full h-[46px] ">
                <input className="w-full h-[46px] p-1 " placeholder="برند"></input>
              </div>
            </div>
         
         
            
            <div className=" xl:col-span-3  lg:col-span-3  col-span-12 items-center">

              <div className=" w-36 h-12 relative mr-2">
                <div className="Rectangle6 w-36 h-12 left-0 top-0 absolute colorSecondaryBackground rounded-md" />
                <div className=" w-[108px] h-[34.29px] left-[18px] top-[13px] absolute text-center text-white text-base font-normal font-['Peyda']">جستجو</div>
              </div>
            </div>
          </div>



        </div>

      </div>

    </>
  )
}