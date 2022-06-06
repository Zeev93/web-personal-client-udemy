import './MenuTop.scss';
import {  Button } from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined , PoweroffOutlined, } from '@ant-design/icons'; 

export default function MenuTop(props) {
    const { collapsed, setCollapsed } = props;

    return (
        <div className='menu-top'>
            <div className='menu-top__left'>
                <img src="https://picsum.photos/190/65" alt="Logo" className='menu-top__left-logo'/>
                <Button type='link' onClick={ () => setCollapsed(!collapsed)}>
                    { collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
                </Button>
            </div>
            <div className='menu-top__right'>
                <Button type='link'>
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    )
};
