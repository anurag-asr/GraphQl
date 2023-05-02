import React from "react";
import { Col, Row } from "antd";
import { Carousel } from "antd";

const Hero = () => {
  return (
    <div className="heroBlock">
      <Row gutter={24}>
        {/* carousal */}
        <Col lg={18}>
          <Carousel autoplay>
            <div>
              <img
                src="https://bibekshakya.com/demo/react/antdesign/grocery/static/media/banner-img3.e1dfb4ee62430dd335d8.jpg"
                alt="banner 1"
              />
            </div>
            <div>
              <img
                src="https://bibekshakya.com/demo/react/antdesign/grocery/static/media/banner-img2.6b7347516c28684dde4a.jpg"
                alt="banner 2"
              />
            </div>
            <div>
              <img
                src="https://bibekshakya.com/demo/react/antdesign/grocery/static/media/banner-img1.e2c75d647932b542a9b8.jpg"
                alt="banner 3"
              />
            </div>
          </Carousel>
        </Col>

        {/* information blocks */}
        <Col lg={6}>
          <div className="heroBlocks">
            <div className="holder">
              <div className="icon">
                <i className="fa-solid fa-truck"></i>
              </div>
              <div className="content">
                <h3>Free Shipping &amp; Return</h3>
                <p>Free shipping on orders over £20</p>
              </div>
            </div>
            {/* ################ */}
            <div className='holder'>
              <div className='icon'>
                <i className="fa-solid fa-sack-dollar"></i>
              </div>
              <div className='content'>
                <h3>Money Back Guarantee</h3>
                <p>100% money back guarantee</p>
              </div>
            </div>
            {/* ################ */}
            <div className='holder'>
              <div className='icon'>
                <i className="fa-solid fa-headset"></i> 
              </div>
              <div className='content'>
                <h3>Online Support 24/7</h3>
                <p>Excepteur sint occaecat cupidatat</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Hero;
