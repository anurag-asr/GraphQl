import { Col, Row } from 'antd';

// import bgImage1 from '../../assets/images/ad-img1.png';
// import bgImage2 from '../../assets/images/ad-img2.png';

function Information() {
  return (
    <div className="block informationBlock">
      <Row gutter={[24, 24]}>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <div className='holder' style={{
              backgroundImage: `url("https://bibekshakya.com/demo/react/antdesign/grocery/static/media/img2.1e325fe425188e032a69.jpg")`, 
              backgroundRepeat: 'no-repeat'
            }}
          >
            <h3>Everyday essentials from</h3>
            <div className='price'>60p</div>
          </div>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <div className='holder' style={{
              backgroundImage: `url("https://bibekshakya.com/demo/react/antdesign/grocery/static/media/img6.a28877ac1f224d959367.jpg")`, 
              backgroundRepeat: 'no-repeat'
            }}>
            <h3>Same day delivery</h3>
            <p>Free when you spend over £20</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Information;