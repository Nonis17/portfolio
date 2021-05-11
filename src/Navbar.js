import styled from 'styled-components';
import { Link } from 'react-router-dom';


const NavbarStyle = styled.nav`
padding: 10px;
display: flex;
margin: 0 auto;
justify-content: flex-end;
`;

const LinksNav = styled.div`
display: flex;
`

const LinkList = styled.li`
 list-style: none;
 font-size: 20px;
width: 50%;
padding: 8px 10px 8px 10px;
text-decoration: none;
font-weight: bold;
& * {
    color: #C36D3C; 
    padding: 8px 10px 8px 10px;
text-decoration: none;
&:hover{
    cursor: pointer;
    text-decoration: underline;
}
}
`;


const Navbar = () => {
    return (
        <NavbarStyle>

            <LinksNav>

                <LinkList><Link to='/'>
                    Home
                </Link></LinkList>

                <LinkList><Link to='/Portfolio'>
                    Projects
                </Link></LinkList>

                <LinkList><Link to='/About'>
                    About
                </Link></LinkList>

                <LinkList><Link to='/Contact'>
                    Contact
                </Link></LinkList>
            </LinksNav>
        </NavbarStyle>
    );
}

export default Navbar;