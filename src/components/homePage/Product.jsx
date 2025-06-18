import { ArrowDownToLine, Circle } from 'lucide-react';
function Product() {
  return (
    <>
      <section className="flex justify-center my-20 max-md:flex-col max-md:place-items-center">
        <div>
          <img
            className="w-[674px] h-[784px] max-md:w-[414px] max-md:h-[505px]"
            src="/images/product.png"
            alt=""
          />
        </div>
        <div className="flex-col bg-[#FAFAFA] w-[401px] h-[784px] justify-items-center content-center">
          <h3 className="font-bold">MOST POPULAR</h3>
          <p className="w-[250px] text-center text-sm pb-8 pt-2">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <img src="/images/product.pc.png" alt="" />
          <p className="pb-2 pt-8 font-bold">English Department</p>
          <div className="flex pb-2 text-[#737373]">
            <ArrowDownToLine />
            <h6>15 Sales</h6>
          </div>
          <div className="flex pb-2 gap-1">
            <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
            <h5 className="text-[#23856D] font-bold">$6.48</h5>
          </div>
          <div className="flex gap-1">
          <p className="bg-[#23A6F0] w-5 h-5 rounded-full" ></p>
            <p className="bg-[#23856D] w-5 h-5 rounded-full" ></p>
            <p className="bg-[#E77C40] w-5 h-5 rounded-full" ></p>
            <p className="bg-[#252B42] w-5 h-5 rounded-full" ></p>
          </div>
        </div>
      </section>
      <div className="flex gap-[50px] justify-center my-20 max-md:flex-col max-md:place-items-center ">
        <div className=" flex gap-[20px]">
          <p className="text-[#E74040] text-4xl font-bold"> 1.</p>
          <div className="flex-col">
            <h6 className="text-sm text-[#252B42] font-bold">Easy to use</h6>
            <p className="text-xs w-[130px] text-[#737373] font-normal max-md:w-[200px]">
              Things on a very small that you have any direct
            </p>
          </div>
        </div>
        <div className=" flex gap-[20px]">
          <p className="text-[#E74040] text-4xl font-bold"> 2.</p>
          <div className="flex-col">
            <h6 className="text-sm text-[#252B42] font-bold">Easy to use</h6>
            <p className="text-xs w-[130px] text-[#737373] font-normal max-md:w-[200px]">
              Things on a very small that you have any direct
            </p>
          </div>
        </div>
        <div className=" flex gap-[20px]">
          <p className="text-[#E74040] text-4xl font-bold"> 3.</p>
          <div className="flex-col">
            <h6 className="text-sm text-[#252B42] font-bold">Easy to use</h6>
            <p className="text-xs w-[130px] text-[#737373] font-normal max-md:w-[200px]">
              Things on a very small that you have any direct
            </p>
          </div>
        </div>
        <div className=" flex gap-[20px]">
          <p className="text-[#E74040] text-4xl font-bold"> 4.</p>
          <div className="flex-col">
            <h6 className="text-sm text-[#252B42] font-bold">Easy to use</h6>
            <p className="text-xs w-[130px] text-[#737373] font-normal max-md:w-[200px]">
              Things on a very small that you have any direct
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
