import "./RegisterForm.scss"
import { Form, Input, Button, Checkbox, notification} from "antd"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { useState } from "react"
import { emailValidation, minLegthValidation } from '../../../utils/formValidation'
import { signUpApi } from "../../../api/user"


export default function RegisterForm() {

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        repeatPassword: '',
        privacyPolicy: false
    })

    const [validate, setValidate] = useState({
        email: false,
        password: false,
        repeatPassword: false,
        privacyPolicy: false
    })

    const { email, password, repeatPassword, privacyPolicy} = inputs

    const handleChange = e => {
        e.preventDefault()
        if(e.target.name === "privacyPolicy"){
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked
            })
        }else{
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            })
        }
        
    }

    const inputValidation = e => {
        e.preventDefault()
        const {type, name} = e.target

        if(name === "email"){
            setValidate({
                ...validate,
                [name]: emailValidation(e.target)
            })
        }

        if( type === "password"){
            setValidate({
                ...validate,
                [name]: minLegthValidation(e.target, 6)
            })
        }

        if( type === "checkbox"){
            setValidate({
                ...validate,
                [name]: e.target.checked
            })
        }
    }

    
    const handleSubmit = async () => {
        if(!email || !privacyPolicy || !validate.password || !validate.repeatPassword ){
            notification['error']({
                message: 'Todos los campos son obligatorios'
            })
        }else{
            if(!validate.password !== !validate.repeatPassword){
                notification['error']({
                    message: 'Las contraseñas no coinciden'
                })
            }else{
                // TODO: Conectar con el API y registrar con el usuario
                const result = await signUpApi(inputs)
                if(result.status !== 200){
                    notification['error']({
                        message: result.message
                    })
                }else{
                    notification['success']({
                        message: result.message
                    })
                    resetForm()
                }
            }
        }
    }

    const resetForm = () => {
        setInputs({
            email: '',
            password: '',
            repeatPassword: '',
            privacyPolicy: false
        })

        const alertContainer = document.querySelectorAll('.ant-form-item-control-input-content')

        alertContainer.forEach( item => {
            item.classList.remove('success')
            item.classList.remove('error')
        })
    }

    return (
        <Form className="register-form" onChange={handleChange} onFinish={handleSubmit}>
            <Form.Item>
                <Input 
                    value={email}
                    onChange={inputValidation}
                    type="email"
                    name="email"
                    placeholder="Correo electronico"
                    className="register-form__input"
                    prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)"}} />}
                    />
            </Form.Item>
            <Form.Item>
                <Input 
                    value={password}
                    onChange={inputValidation}
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="register-form__input"
                    prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)"}} />}
                    />
            </Form.Item>
            <Form.Item>
                <Input 
                    value={repeatPassword}
                    onChange={inputValidation}
                    type="password"
                    name="repeatPassword"
                    placeholder="Repite contraseña"
                    className="register-form__input"
                    prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)"}} />}
                    />
            </Form.Item>
            <Form.Item>
                <Checkbox name="privacyPolicy" checked={ privacyPolicy } onChange={inputValidation}>
                    He leído y acepto la política de privacidad.
                </Checkbox>
            </Form.Item>

            <Form.Item>
                <Button htmlType="submit" className="register-form__button">
                    Crear Cuenta
                </Button>
            </Form.Item>
        </Form>
    )
};
