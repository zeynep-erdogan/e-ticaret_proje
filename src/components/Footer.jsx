import { Instagram, Facebook, Twitter } from 'lucide-react';
function Footer() {
  return (
    <>
      <section className="flex justify-around items-center h-[300px] bg-[white] max-md:flex-col  max-md:h-[550px] max-md:place-items-center bg-[#f8f8ff]">
        <div className="sol max-md:w-[201px]">
          <h3>Get In Touch</h3>
          <p className="">the quick fox jumps over the lazy dog</p>
          <div className="flex gap-2">
            <Facebook color="#23A6F0"/>
            <Instagram color="#23A6F0"/>
            <Twitter color="#23A6F0"/>

          </div>
        </div>
        <div className="orta flex flex-col max-md:w-[201px]">
          <h3>Company info</h3>
          <div className="flex flex-col ">
            <a href="" className="no-underline text-[#737373]">
              About Us
            </a>
            <a href="" className="no-underline text-[#737373]">
              Carrier
            </a>
            <a href="" className="no-underline text-[#737373]">
              We are hiring
            </a>
            <a href="" className="no-underline text-[#737373]">
              Blog
            </a>
          </div>
        </div>
        <div className="sag flex flex-col max-md:w-[201px]">
          <h3>Features</h3>
          <div className="flex flex-col no-underline">
            <a className="no-underline text-[#737373]" href="">Business Marketing</a>
            <a className="no-underline text-[#737373]" href="">User Analytic</a>
            <a className="no-underline text-[#737373]" href="">Live Chat</a>
            <a className="no-underline text-[#737373]" href="">Unlimited Support</a>
          </div>
        </div>
      </section>
      <section className=" bg-[#D5D5D5] h-[50px] flex justify-center items-center max-md:h-[70px] ">
        <p className="text-center max-md:w-[216px] mt-[15px]">
          Made With Love By Figmaland All Right Reserved{' '}
        </p>
      </section>
    </>
  );
}

export default Footer;
