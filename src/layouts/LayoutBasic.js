import { Layout } from "antd";

export default function LayoutBasic({children, ...props}) {
    const { Header, Content, Footer} = Layout
    return (
        <Layout>
            <h2>Menu Sidebar</h2>
            <Layout>
                <Content>
                    {children}
                </Content>
                <Footer> AbrahamAG </Footer>
            </Layout>
        </Layout>
    )
};
