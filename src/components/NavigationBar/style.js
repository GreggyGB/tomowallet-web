import styled from 'styled-components';
import { Navbar } from 'reactstrap';

const NavBarStyler = styled(Navbar)`
  padding: 20px;
  width: 100%;
  text-align: center;
  .navbar-brand {
    > img {
      width: 50px;
      heigth: 50px;
      filter: grayscale(10);
      cursor: pointer;
    }
  }
  .nav-item {
    font-weight: bold;
    &:not(:first-child) {
      margin-left: 20px;
    }
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export default NavBarStyler;