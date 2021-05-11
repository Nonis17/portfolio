import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SideBarData } from './SideBarData';
import { IconContext } from 'react-icons/lib';
import SubMenu from './SubMenu';

const Nav = styled.div`
height: 80px;
display: flex;
justify-content: flex-start
align-items: center; 
`;

const NavIcon = styled(Link)`

margin-left: 2rem;
font-size: 2rem; 
height: 80px;
display: flex;
justify-content: flex-start; 
align-items: center;
`;

const SidebarNav = styled.nav`
background-image: linear-gradient(#c36e3c, #92471c);  
width: 250px;
height: 100vh;
display: flex; 
justify-content: center; 
position: fixed; 
top: 0;
left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
transition: 350ms;
z-index: 10;
overflow-y: scroll;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

const Sidebar = () => {



    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div>
       
            <IconContext.Provider value={{ color: '#C36D3C  ' }}>
                <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                </Nav>
                </IconContext.Provider>


<IconContext.Provider value={{ color: 'white ', }}>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>

                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </NavIcon>

                        {SideBarData.map((item, index) => {
                            return <SubMenu toggleSidebar={showSidebar} item={item} key={index} />;
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </div>
    )
}

export default Sidebar;