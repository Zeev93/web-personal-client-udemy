import './LoginForm.scss'
import { Form, Input, Button, notification} from "antd"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { useState } from 'react'
import { signInApi } from '../../../api/user'
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants"

export default function LoginForm() {
    const [inputs, setInput] = useState({
        email: '',
        password: ''
    })

    const { email, password } = inputs

    const handleChange = (e) => {
        e.preventDefault()
        setInput({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {
        const result = await signInApi(inputs)
        console.log(result);
        if(result.message){
            notification["error"]({
                message: result.message
            })
        }else{
            const { accessToken, refreshToken } = result
            localStorage.setItem(ACCESS_TOKEN, accessToken)
            localStorage.setItem(REFRESH_TOKEN, refreshToken)
            notification["success"]({
                message: "Login Correcto"
            })

            window.location.href = "/admin"
        }
    }
    return (
        <Form className='login-form' onFinish={handleSubmit} onChange={handleChange}>
            <Form.Item>
                <Input 
                    className='login-form__input'
                    type="email" 
                    name='email'
                    value={email}
                    placeholder="Correo eléctronico" 
                    prefix={<UserOutlined  style={{ color: "rgba(0,0,0,.25)"}}/> } />
            </Form.Item>
            <Form.Item>
                <Input 
                    className='login-form__input'
                    type="password" 
                    name='password'
                    value={password}
                    placeholder="Contraseña" 
                    prefix={<LockOutlined   style={{ color: "rgba(0,0,0,.25)"}}/> } />
            </Form.Item>
            <Form.Item>
                <Button htmlType='submit' className='login-form__button'>Entrar</Button>
            </Form.Item>
        </Form> 
    )
};
