import "./SignIn.scss"
import { Layout, Tabs } from "antd"
import { Navigate } from "react-router-dom"
import RegisterForm from "../../../components/Admin/RegisterForm"
import LoginForm from "../../../components/Admin/LoginForm/LoginForm"


export default function SignIn() {
    const { Content } = Layout
    const { TabPane } = Tabs
    return (
        <Layout className="sign-in">
            <Content className="sign-in__content">
                <h1 className="sign-in__content-logo">
                    <img src="https://picsum.photos/190/65" alt="Logo" className='menu-top__left-logo'/>
                </h1>
                <div className="sign-in__content-tabs">
                    <Tabs type="card">
                        <TabPane tab={ <span> Entrar </span> } key="1" >
                            <LoginForm />
                        </TabPane>
                        <TabPane tab={ <span> Nuevo Usuario </span> } key="2" >
                            <RegisterForm/>
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
        </Layout>
    )
};
