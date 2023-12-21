import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Breadcrumb, Layout, Menu } from 'antd';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import { ConfigProvider } from 'antd';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Home screen',
    description: 'Generated by create next app',
}
const items = new Array(3).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
}));


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
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
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Content style={{ padding: '0 48px' }}>
                <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]} />
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: 'white',
                        borderRadius: '12px',
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Matt Patt Design ©2023 Created by Matt5246</Footer>
        </>
    )
}
