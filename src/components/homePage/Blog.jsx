import { Clock3, ChartArea, Star } from 'lucide-react';

const blogData = [
  {
    imgURL: '/images/blog1.png',
    headerblue: 'English Department',
    header: 'Graphic Design',
    paragraph: ` We focus on ergonomics and meeting you where you work. It's only keystroke away.`,
    hour: '22h...',
    lesson: '64 Lessons',
    navigationURL:
      'https://appmaster.io/tr/blog/javascript-dinamik-web-icerigi',
  },
  {
    imgURL: '/images/blog2.png',
    headerblue: 'English Department',
    header: 'Graphic Design',
    paragraph: ` We focus on ergonomics and meeting you where you work. It's only keystroke away.`,
    hour: '22h...',
    lesson: '64 Lessons',
    navigationURL:
      'https://appmaster.io/tr/blog/javascript-dinamik-web-icerigi',
  },
];

function Blog() {
  return (
    <>
      <section className="flex gap-5 justify-center my-20 max-md:flex-col max-md:place-items-center">
        <div className=" blog1 flex gap-4 h-[300px] max-md:h-[606px] max-md:flex-col max-md:place-items-center max-md:border-inherit max-md:border-2">
          <img
            className="w-[209px] h-[300px] max-md:w-[330px] max-md:h-[300px]"
            src={blogData[0].imgURL}
            alt=""
          />
          <div className=" content-center ">
            <div className="flex justify-between">
              <button className="text-primary font-bold pb-2">
                {blogData[0].headerblue}
              </button>
              <span className="flex justify-center gap-1 w-14 h-7 mt-[4px] border-2 bg-[#252B42] rounded-xl">
                <Star
                  className="mt-[4px]"
                  size={16}
                  color="#FFCE31"
                  fill="#FFCE31"
                />
                <p className="text-white text-base">4.9</p>
              </span>
            </div>

            <h6 className="font-bold pb-2">{blogData[0].header}</h6>
            <p className="text-sm text-[#737373] w-[230px] pb-2 max-md:w-[300px]">
              {blogData[0].paragraph}
            </p>
            <div className="flex gap-3 pb-2">
              <span className="flex gap-1">
                <Clock3 className="mt-[4px]" size={16} color="#23A6F0"/> <p>saat</p>{' '}
              </span>
              <span className="flex gap-1">
                <img
                  className="w-4 h-4 mt-[4px]"
                  src="/public/images/vector.png"
                  alt=""
                />
                <p>ders</p>
              </span>
              <span className="flex gap-1 ">
                <ChartArea className="mt-[4px]" size={16} color="#23856D" />{' '}
                <p>prog</p>{' '}
              </span>
            </div>
            <button className=" font-bold w-[140px] h-[44px] text-[#23A6F0] border-2 border-[#23A6F0] rounded-3xl">
              Learn More 
            </button>
          </div>
        </div>
        <div className=" blog2 flex gap-4 w-[330px]  h-[300px] max-md:h-[606px] max-md:flex-col max-md:place-items-center max-md:border-inherit max-md:border-2 ">
          <img
            className="w-[209px] h-[300px] max-md:w-[330px] max-md:h-[300px]"
            src={blogData[1].imgURL}
            alt=""
          />
          <div className=" content-center">
            <div className="flex justify-between">
              <button className="text-primary font-bold pb-2">
                {blogData[1].headerblue}
              </button>
              <span className="flex justify-center gap-1 w-14 h-7 mt-[4px] border-2 bg-[#252B42] rounded-xl">
                <Star
                  className="mt-[4px]"
                  size={16}
                  color="#FFCE31"
                  fill="#FFCE31"
                />
                <p className="text-white text-base">4.9</p>
              </span>
            </div>

            <h6 className="font-bold pb-2">{blogData[1].header}</h6>
            <p className="text-sm text-[#737373] w-[230px] pb-2 max-md:w-[300px]">
              {blogData[1].paragraph}
            </p>
            <div className="flex gap-3 pb-2">
              <span className="flex gap-1">
                <Clock3 className="mt-[4px]" size={16} color="#23A6F0" /> <p>saat</p>{' '}
              </span>
              <span className="flex gap-1">
                <img
                  className="w-4 h-4 mt-[4px]"
                  src="/public/images/vector.png"
                  alt=""
                />
                <p>ders</p>
              </span>
              <span className="flex gap-1 ">
                <ChartArea className="mt-[4px]" size={16} color="#23856D" />{' '}
                <p>prog</p>{' '}
              </span>
            </div>
            <button className=" font-bold w-[140px] h-[44px] text-[#23A6F0] border-2 border-[#23A6F0] rounded-3xl">
              Learn More 
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
