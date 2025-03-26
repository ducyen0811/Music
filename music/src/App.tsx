import React from 'react';
import { Layout } from 'antd';
import './App.css';
import HomePage from './Page/homePage';
import AppHeader from './Components/Header'; // Import thanh header

const { Content } = Layout;

function App() {
  return (
    <Layout>
      {/* Thanh Header luôn cố định trên đầu */}
      <AppHeader />

      {/* Nội dung trang */}
      <Content style={{ padding: '0 50px', marginTop: '64px' }}>
        <HomePage />
      </Content>
    </Layout>
  );
}

export default App;
