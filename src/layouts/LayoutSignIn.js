import "./LayoutSignIn.scss"
import { Layout } from "antd";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
export default function LayoutSignIn({children}) {
    const {user, isLoading} = useAuth()

    if(user && !isLoading){        
        return (
            <>
                <Navigate to="/admin" replace={true}/>
            </>
        )
    }
    return (
        <Layout className="sign-in-layout">
            {children}
        </Layout>
    )
};
