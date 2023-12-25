'use client';
import React from 'react'
import { Breadcrumb, Layout, Menu } from 'antd';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import Link from 'next/link';
import { UserOutlined } from '@ant-design/icons';

interface NavMenuItem {
    label: string;
    key: string;
    href?: string;
    icon?: React.ReactNode;
}

interface NavMenuProps {
    items1: NavMenuItem[];
    items2: NavMenuItem[];
}


const NavMenu = ({ items1, items2 }: NavMenuProps) => {
    return (
        <Header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: 1, minWidth: 0 }}>
                {items1.map((item) => (
                    <Menu.Item key={item.key}>
                        <Link href={item.href || '#'}>
                            {item.label}
                        </Link>
                    </Menu.Item>
                ))}
            </Menu>

            <Dropdown
                overlay={
                    <Menu theme="dark">
                        {items2.map((item) => (
                            <Menu.Item key={item.key}>
                                <Link href={item.href || '#'}>
                                    {item.label}
                                </Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                }>
                <a className="ant-dropdown-link text-white text-opacity-75 hover:text-opacity-100" onClick={e => e.preventDefault()}>
                    Account <DownOutlined />
                </a>
            </Dropdown>
        </Header>
    );
};

export default NavMenu;