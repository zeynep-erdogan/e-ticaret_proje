import {
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  User,
  Search,
  ShoppingCart,
  Heart,
  Menu
} from 'lucide-react';
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  Row,
} from 'reactstrap';

function Navbar() {
  return (
    <>
      <container className="">
        <section className="üst flex h-14 max-w-full bg-[#252B42] font-bold justify-between max-lg:hidden">
          <div className=" sol flex  gap-2.5  mt-[15px] ml-[30px]">
            <div className=" tlf flex text-sm text-white">
              <Phone className="mt-[4px]" color="white" size={16} />
              <p>(225) 555-0118</p>
            </div>
            <div className=" mail flex text-sm text-white">
              <Mail  className="mt-[4px]" color="white" size={16} />
              <p>michelle.rivera@example.com</p>
            </div>
          </div>
          <div>
            <p className="text-white  mt-[15px]">
              Follow Us and get a chance to win 80% off
            </p>
          </div>
          <div className=" sag flex gap-2.5  mt-[15px] mr-[30px]">
            <p className="text-white">Follow Us :</p>
            <Instagram  className="mt-[4px]" color="white" size={16} />
            <Youtube  className="mt-[4px]" color="white" size={16} />
            <Facebook  className="mt-[4px]" color="white" size={16} />
            <Twitter  className="mt-[4px]" color="white" size={16} />
          </div>
        </section>
        <section className="menu-section flex h-14 max-w-full	m-0 bg-white font-bold justify-between ">
          <div className="logo">
            <p className="font-[Montserrat] text-xl mt-[10px] ml-[38px] max-md:ml-[20px]">BrandName</p>
          </div>
          <div className="menu mt-[5px] ">
            <Nav className="max-md:flex-col max-md:mt-12">
              <NavItem>
                <NavLink href="#" className="text-black">
                  Home
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar >
              <DropdownToggle  nav caret className="text-black">
                Options
              </DropdownToggle>
              <DropdownMenu  >
              <Row className="w-[300px]  max-sm:w-[200px]">
                <Col sm="6">
                <DropdownItem text >Kadın</DropdownItem>
                <DropdownItem divider/>
                <DropdownItem>Bags</DropdownItem>
                <DropdownItem>Belts</DropdownItem>
                <DropdownItem>Cosmetics</DropdownItem>
                <DropdownItem>Bags</DropdownItem>
                <DropdownItem>Hats</DropdownItem>
                </Col >
                <Col sm="6">
                <DropdownItem text >Erkek</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Bags</DropdownItem>
                <DropdownItem>Belts</DropdownItem>
                <DropdownItem>Cosmetics</DropdownItem>
                <DropdownItem>Bags</DropdownItem>
                <DropdownItem>Hats</DropdownItem>
                </Col >
                </Row>
              </DropdownMenu>
            </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#" className="text-black">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="text-black">
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="text-black">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink  href="#" className="text-black">
                  Pages
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <div className="user flex gap-2.5 mt-[10px] mr-[25px] max-sm:mr-[75px]">
            <div className="flex max-md:hidden">
              <User />
              <p>Login/Register</p>
            </div>
            <div className="flex gap-2.5">
            <Search  />
            <ShoppingCart />
            <Heart className="max-md:hidden"/>
            <Menu  className="md:hidden" />
            </div>
          </div>
        </section>
      </container>
    </>
  );
}

export default Navbar;
