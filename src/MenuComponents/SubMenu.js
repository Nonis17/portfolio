import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const SidebarLink = styled(Link)`
display: flex; 
color: #e1e9fc; 
justify-content: space-between;
align-items: center;
padding: 20px;
list-style: none;
height: 60px;
text-decoration: none;
font-size: 18px;
transition: 250ms;


&:hover {
    background: #c27d55;
    border-left: 2px solid white;
    cursor: pointer; 
}
`;

const SidebarLabel = styled.span`
margin-left: 16px;
`;

const DropdownLink = styled(Link)`
color: #C36D3C;  
height: 60px;
padding-left: 3rem; 
display: flex; 
align-items: center; 
text-decoration: none; 
color:  #f5f5f5;
font-size: 16px;


&:hover{
    background: #c27d55; 
    cursor: pointer;
}
`;

const SubMenu = ({ toggleSidebar, item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    /*  Function to close the side menu on click */
    const handleClick = (isSubnavItem, expandSubnav) => {
        if (isSubnavItem) {
            expandSubnav();
        } else {
            toggleSidebar();
        }
    };

    return (

        <>
            <SidebarLink to={item.path} onClick={() => handleClick(item.subNav, showSubnav)}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>

                <div>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return (
                    <DropdownLink to={item.path} key={index} onClick={toggleSidebar}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}

        </>
    );
}

export default SubMenu;