import React from 'react';
import { Layout, Menu, Input, Avatar, Row, Col } from 'antd';
import { HomeOutlined, SearchOutlined, BellOutlined, DownloadOutlined } from '@ant-design/icons';

const { Header } = Layout;

const AppHeader: React.FC = () => {
  return (
    <Layout>
      <Header style={{ background: '#000', padding: 0 }}>
        <Row justify="space-between" align="middle" style={{ height: '64px' }}>
          <Col>
            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Spotify_Logo.png" size="large" />
          </Col>
          <Col flex="auto" style={{ textAlign: 'center' }}>
            <Input
              prefix={<SearchOutlined />}
              placeholder="What do you want to play?"
              style={{ width: '50%' }}
            />
          </Col>
          <Col>
            <Menu mode="horizontal" theme="dark" style={{ lineHeight: '64px', background: '#000' }}>
              <Menu.Item key="home" icon={<HomeOutlined />} />
              <Menu.Item key="download" icon={<DownloadOutlined />} />
              <Menu.Item key="install" icon={<BellOutlined />} />
              <Menu.Item key="user">
                <Avatar style={{ backgroundColor: '#f56a00' }}>N</Avatar>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
    </Layout>
  );
};

export default AppHeader;
