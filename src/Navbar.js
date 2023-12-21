import Container from 'react-bootstrap/Container';
import './homepage.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import ChecklistTwoToneIcon from '@mui/icons-material/ChecklistTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import WidgetsTwoToneIcon from '@mui/icons-material/WidgetsTwoTone';
import Drawers from './Drawers';

function Homepage() {
    return (
      <div className='Navbar'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='nav'>
        <Drawers/>
          <Navbar.Brand href="#home">SMILE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home <HomeTwoToneIcon /></Nav.Link>
              <Nav.Link href="#Cart">Cart <ShoppingCartTwoToneIcon/></Nav.Link>
              <NavDropdown title={<span>Settings <SettingsTwoToneIcon /></span>} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"><ChecklistTwoToneIcon/><span> Orders</span></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <PersonOutlineTwoToneIcon/> Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><FavoriteTwoToneIcon/> Wishlist</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Loginpage">
                  <ExitToAppTwoToneIcon/> Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
  
    );
  }
  export default Homepage;