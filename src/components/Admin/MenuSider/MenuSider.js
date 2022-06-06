import { Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import { HomeOutlined, MenuOutlined } from '@ant-design/icons'; 

import './MenuSider.scss';

export default function MenuSider(props) {
    const { collapsed } = props;
    const {Sider} = Layout;
    return (
        <Sider className="menu-sider" collapsed={collapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/admin">
                        <HomeOutlined /> <span className='nav-text'> Home </span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/admin/menu-web">
                        <MenuOutlined /> <span className='nav-text'> Menu Web </span>
                    </Link>
                </Menu.Item>

            </Menu>
        </Sider>
    )
};
