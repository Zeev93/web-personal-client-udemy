import "./LayoutSignIn.scss"
import { Layout } from "antd";

export default function LayoutSignIn({children}) {
    return (
        <Layout className="sign-in-layout">
            {children}
        </Layout>
    )
};
