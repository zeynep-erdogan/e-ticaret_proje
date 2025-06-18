import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

function Hero() {
  return (
    <>
      <div className="flex gap-[15px] justify-center max-md:place-items-center my-20 max-md:mt-64 max-md:flex-col">
        <Card className=" border-0 max-md:w-[332px] ">
          <CardImg
            alt="Card image cap"
            src="/images/hero-bg1.png"
            className="h-[616px] max-md:h-[300px] "
            style={{
              width: 452,
              borderRadius: 0,
            }}
            
          />
          <CardImgOverlay>
            <CardTitle
              tag="h5"
              style={{
                color: '#2DC071',
                fontSize: '15px',
                fontWeight: 700,
              }}
            >
              5 Items
            </CardTitle>
            <CardText
              style={{
                color: '#252B42',
                fontSize: '40px',
                fontWeight: 700,
              }}
            >
              FURNITURE
            </CardText>
            <button
              style={{
                color: '#252B42',
                fontSize: '15px',
                fontWeight: 700,
              }}
            >
              Read More
            </button>
          </CardImgOverlay>
        </Card>
        <div className="flex-col">
          <Card className="border-0 max-md:w-[332px]">
            <CardImg
              alt="Card image cap"
              src="/images/hero-bg2.png"
              style={{
                height: 300,
                width: 679,
                marginBottom: '15px',
                borderRadius: 0,
              }}
            />
            <CardImgOverlay>
              <CardTitle
                tag="h5"
                style={{
                  color: '#2DC071',
                  fontSize: '15px',
                  fontWeight: 700,
                }}
              >
                5 Items
              </CardTitle>
              <CardText
                style={{
                  color: '#252B42',
                  fontSize: '24px',
                  fontWeight: 700,
                }}
              >
                FURNITURE
              </CardText>
              <button
                style={{
                  color: '#252B42',
                  fontSize: '15px',
                  fontWeight: 700,
                }}
              >
                Read More
              </button>
            </CardImgOverlay>
          </Card >
          <div className="flex gap-[15px] max-md:flex-col">
            <Card className="border-0 ">
              <CardImg
                alt="Card image cap"
                src="/images/hero-bg3.png"
                style={{
                  height: 300,
                  width: 332,
                  borderRadius: 0,
                }}
              />
              <CardImgOverlay>
                <CardTitle
                  tag="h5"
                  style={{
                    color: '#2DC071',
                    fontSize: '15px',
                    fontWeight: 700,
                  }}
                >
                  5 Items
                </CardTitle>
                <CardText
                  style={{
                    color: '#252B42',
                    fontSize: '24px',
                    fontWeight: 700,
                  }}
                >
                  FURNITURE
                </CardText>
                <button
                  style={{
                    color: '#252B42',
                    fontSize: '15px',
                    fontWeight: 700,
                  }}
                >
                  Read More
                </button>
              </CardImgOverlay>
            </Card>
            <Card className="border-0 ">
              <CardImg
                alt="Card image cap"
                src="/images/hero-bg4.png"
                style={{
                  height: 300,
                  width: 332,
                  borderRadius: 0,
                }}
              />
              <CardImgOverlay>
                <CardTitle
                  tag="h5"
                  style={{
                    color: '#2DC071',
                    fontSize: '15px',
                    fontWeight: 700,
                  }}
                >
                  5 Items
                </CardTitle>
                <CardText
                  style={{
                    color: '#252B42',
                    fontSize: '24px',
                    fontWeight: 700,
                  }}
                >
                  FURNITURE
                </CardText>
                <button
                  style={{
                    color: '#252B42',
                    fontSize: '15px',
                    fontWeight: 700,
                  }}
                >
                  Read More
                </button>
              </CardImgOverlay>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
