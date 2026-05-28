import { useState } from 'react'
import { Layout, Menu } from 'antd'
import { HomeOutlined, InfoCircleOutlined, ReadOutlined, CalendarOutlined, HeartOutlined, TeamOutlined, UserAddOutlined, PhoneOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { Header } = Layout

const Navbar = () => {
  const [current, setCurrent] = useState('home')
  const items = [
    { key: 'home', icon: <HomeOutlined />, label: <Link to="/">首页</Link> },
    { key: 'about', icon: <InfoCircleOutlined />, label: '关于我们' },
    { key: 'news', icon: <ReadOutlined />, label: '新闻公告' },
    { key: 'activity', icon: <CalendarOutlined />, label: '活动中心' },
    { key: 'volunteer', icon: <HeartOutlined />, label: '志愿公益' },
    { key: 'team', icon: <TeamOutlined />, label: '团队风采' },
    { key: 'recruit', icon: <UserAddOutlined />, label: '招生专区' },
    { key: 'contact', icon: <PhoneOutlined />, label: '联系我们' },
  ]

  return (
    <Header style={{ background: '#fff', boxShadow: '0 2px 8px #eee' }}>
      <div style={{ color: '#165DFF', fontSize: '20px', fontWeight: 'bold', float: 'left', marginRight: '40px' }}>
        BD&AI 协会
      </div>
      <Menu onClick={(e)=>setCurrent(e.key)} selectedKeys={[current]} mode="horizontal" items={items} />
    </Header>
  )
}
export default Navbar
