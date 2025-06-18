import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

function Category() {
  return (
    <>
    <div className="flex max-md:flex-col max-md:gap-4">
    <Card className="border-0 ">
          <CardImg
            alt="Card image cap"
            src="/images/category1.png"
            style={{
              height:300,
              width: 713,
              borderRadius: 0,
            }}
          />
          
        </Card>
        <Card className="border-0 ">
          <CardImg
            alt="Card image cap"
            src="/images/category2.png"
            style={{
              height:300,
              width: 713,
              borderRadius: 0,
            }}
          />
        </Card>
    </div>
    </>
  )
}

export default Category;
