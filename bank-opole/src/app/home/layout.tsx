import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Breadcrumb, Layout } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';
import NavMenu from '../../components/NavMenu';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import StoreProvider from '../StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Bank Opole home',
    description: 'Generated by create next app',
}
const items1 = [
    { label: 'BankOpole', key: '1', href: '/home' },
    { label: 'My accounts & Transactions', key: '2', href: '/home/transactions' },
    { label: 'Payments & Transfers', key: '3', href: '/home/transfers' },
    { label: 'Credit Cards', key: '4', href: '/home/credit-cards' },
    { label: 'Account Services', key: '5', href: '/home/services' },
];

const items2 = [
    {
        label: 'Account',
        key: 'account',
        icon: <UserOutlined />,
    },
    {
        label: 'Settings',
        key: 'settings',
        href: '/settings',
    },
    {
        label: 'Logout',
        key: 'logout',
        href: '/sign-in',
    },
];

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='bg-gray-100 dark:bg-gray-800 h-screen'>
            <NavMenu items1={items1} items2={items2} />
            <Content style={{ padding: '0 48px' }} >

                <div className='rounded-xl shadow-md p-8 dark:bg-gray-700 bg-white mt-8'>
                    <StoreProvider>{children}</StoreProvider>
                </div>
            </Content>
            <Footer className='dark:bg-gray-800 dark:text-white absolute inset-x-0 bottom-0 h-16' style={{ textAlign: 'center' }}>Matt Patt Design ©2023 Created by Matt5246</Footer>
        </div>
    )
}
