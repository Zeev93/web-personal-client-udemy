import { Layout } from 'antd'
import './LayoutAdmin.scss'
import MenuTop from '../components/Admin/MenuTop'
import MenuSider from '../components/Admin/MenuSider'
import { useState } from 'react'
import SignIn from '../pages/Admin/SignIn/SignIn'
import { Route, Navigate } from 'react-router-dom'

export default function LayoutAdmin({children, ...props}) {
    const [collapsed, setCollapsed] = useState(true)
    const { Header, Content, Footer} = Layout
    const user = null 


    if(!user){        
        return (
            <>
                <Navigate to="/login" replace={true}/>
            </>
        )
    }
    return (
        <Layout>
            <MenuSider collapsed={collapsed}/>
            <Layout className='layout-admin' >
                <Header className='layout-admin__header'>
                    <MenuTop setCollapsed={setCollapsed} collapsed={collapsed}/>
                </Header>
                <Content className='layout-admin__content'>
                    {children}
                </Content>
                <Footer className='layout-admin__footer'> AbrahamAG </Footer>
            </Layout>
        </Layout>
    )
};
