import { Button, Card, Carousel, Col, Row } from 'antd'
import { TeamOutlined, TrophyOutlined, BookOutlined, HeartOutlined } from '@ant-design/icons'

const Home = () => {
  const advantages = [
    { icon: <BookOutlined style={{ fontSize: 40, color: '#165DFF' }} />, title: '技术培训', desc: '零基础系统教学' },
    { icon: <TrophyOutlined style={{ fontSize: 40, color: '#165DFF' }} />, title: '赛事平台', desc: '软硬件专业比赛' },
    { icon: <TeamOutlined style={{ fontSize: 40, color: '#165DFF' }} />, title: 'Buddy制度', desc: '学长一对一指导' },
    { icon: <HeartOutlined style={{ fontSize: 40, color: '#165DFF' }} />, title: '志愿公益', desc: '用技术服务校园' },
  ]

  return (
    <div>
      {/* 首页 banner */}
      <section style={{ height: 460, background: 'linear-gradient(to right, #165DFF, #0E3BA1)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div>
          <h1 style={{ fontSize: 42, marginBottom: 16 }}>BD&AI 创新活动室</h1>
          <p style={{ fontSize: 18, marginBottom: 32 }}>软硬件双组 | Buddy帮扶 | 志愿公益 | 专业赛事</p>
          <Button type="primary" size="large" style={{ background: '#fff', color: '#165DFF' }}>加入我们</Button>
        </div>
      </section>

      {/* 优势展示 */}
      <section style={{ padding: '60px 20px', background: '#f8f9fa' }}>
        <h2 style={{ textAlign: 'center', fontSize: 28, marginBottom: 40 }}>协会核心</h2>
        <Row gutter={[20,20]} style={{ maxWidth: 1200, margin: '0 auto' }}>
          {advantages.map((i,k)=>(
            <Col xs={24} sm={12} md={6} key={k}>
              <Card style={{ textAlign: 'center', height: '100%' }}>
                <div style={{ marginBottom: 16 }}>{i.icon}</div>
                <h3 style={{ fontSize: 18 }}>{i.title}</h3>
                <p style={{ color: '#666' }}>{i.desc}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* 志愿区展示 */}
      <section style={{ padding: '60px 20px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 28, marginBottom: 40 }}>志愿公益</h2>
          <Row gutter={[24,24]} align="middle">
            <Col xs={24} md={12}>
              <h3 style={{ fontSize: 22, marginBottom: 16 }}>用技术传递温暖</h3>
              <p style={{ lineHeight: 1.8, color: '#666' }}>我们开展AI助老、科技支教、校园服务等志愿活动，记录志愿时长、颁发荣誉证书，展现协会责任与担当。</p>
              <Button type="primary" style={{ marginTop: 20 }}>进入志愿专区</Button>
            </Col>
            <Col xs={24} md={12}>
              <img src="https://picsum.photos/600/400?random=10" style={{ width: '100%', borderRadius: 8 }} />
            </Col>
          </Row>
        </div>
      </section>
    </div>
  )
}
export default Home
