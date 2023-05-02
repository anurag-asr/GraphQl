import { Col, Row } from 'antd';

const productCategories = [
  {
    key: '1',
    image:"https://bibekshakya.com/demo/react/antdesign/grocery/static/media/img2.1e325fe425188e032a69.jpg",
    title: 'Frozen'
  },
  {
    key: '2',
    image:"https://bibekshakya.com/demo/react/antdesign/grocery/static/media/img2.1e325fe425188e032a69.jpg",
    title: 'Fresh'
  },
  {
    key: '3',
    image:"https://bibekshakya.com/demo/react/antdesign/grocery/static/media/img2.1e325fe425188e032a69.jpg",
    title: 'Food Cupboard'
  },
  {
    key: '4',
    image:"https://bibekshakya.com/demo/react/antdesign/grocery/static/media/img2.1e325fe425188e032a69.jpg",
    title: 'Household'
  },
  {
    key: '5',
    image:"https://bibekshakya.com/demo/react/antdesign/grocery/static/media/img2.1e325fe425188e032a69.jpg",
    title: 'Drinks'
  },
  {
    key: '6',
    image:"https://bibekshakya.com/demo/react/antdesign/grocery/static/media/img2.1e325fe425188e032a69.jpg",
    title: 'Bakery'
  },
  {
    key: '7',
    image:"https://bibekshakya.com/demo/react/antdesign/grocery/static/media/img2.1e325fe425188e032a69.jpg",
    title: 'Fresh Fruits'
  },
  {
    key: '8',
    image:"https://bibekshakya.com/demo/react/antdesign/grocery/static/media/img2.1e325fe425188e032a69.jpg",
    title: 'Hot Buys'
  },
  {
    key: '9',
    image:"https://bibekshakya.com/demo/react/antdesign/grocery/static/media/img2.1e325fe425188e032a69.jpg",
    title: 'Offers'
  },
  {
    key: '10',
    image:"https://bibekshakya.com/demo/react/antdesign/grocery/static/media/img2.1e325fe425188e032a69.jpg",
    title: 'Luxury'
  },
  {
    key: '11',
    image:"https://bibekshakya.com/demo/react/antdesign/grocery/static/media/img2.1e325fe425188e032a69.jpg",
    title: 'Beers & Wines'
  },
  {
    key: '12',
    image:"https://bibekshakya.com/demo/react/antdesign/grocery/static/media/img2.1e325fe425188e032a69.jpg",
    title: 'Christmas'
  }
]

function ProductCategories() {
  return (
    <div className="block productCategories">
      <h2>Product Categories</h2>
      <Row gutter={[24, 24]}>
        {productCategories.map(productCategory => {
          return (
            <Col xs={{ span: 12 }} sm={{ span: 6 }} lg={{ span: 4 }} key={productCategory.key}>
              <div className="content">
                <div className="image">
                  <img src={productCategory.image} alt="product" />
                </div>
                <h3>{productCategory.title}</h3>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default ProductCategories;