import React from 'react';

import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import * as HiIcons from 'react-icons/hi';
import * as GiIcons from 'react-icons/gi';


export const SideBarData =

    [

        {
            title: 'Home',
            path: '/',
            icon: <AiIcons.AiFillHome />,
        },
        {
            title: 'Projects',
            path: '/Portfolio',
            icon: <GiIcons.GiAbstract047 />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,
            subNav: [
                    
                {
                    title: 'UX',
                    path: '/ux',
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: 'Coffee shop',
                    path: '/coffeeshop',
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: 'Text editor',
                    path: '/textEditor',
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: 'Portfolio',
                    path: '/portfolioproject',
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: 'BEV',
                    path: '/bev',
                    icon: <IoIcons.IoIosPaper />,
                },
               
            ],
        },
        {
            title: 'About',
            path: '/About',
            icon: <BsIcons.BsInfoCircle />,
        },
        {
            title: 'Contact',
            path: '/Contact',
            icon: <HiIcons.HiOutlineMail />,
        },

    ];




