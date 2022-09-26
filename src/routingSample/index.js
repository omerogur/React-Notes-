import 'antd/dist/antd.css';
import { Routes ,Route,Link} from 'react-router-dom';
import { Layout,Menu } from 'antd';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import SupplierPage from './SupplierPage';
import SupplierDetailPage from './SupplierDetailPage';
import NotFoundPage from './NotFoundPage';
const index = () => {
    const { Header, Content, Footer } = Layout;



  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"><Link to={'/'}>Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/about'>About</Link></Menu.Item>
          <Menu.Item key="3"><Link to='/suppliers'>Suppliers</Link></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path='/suppliers' element={<SupplierPage />} /> 
            <Route path="/suppliers/:id" element={<SupplierDetailPage/>}/>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>

  )
}

export default index
