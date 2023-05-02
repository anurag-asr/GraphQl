import React, { useEffect, useState } from "react";
import { Badge, Button, Checkbox, Drawer, Form, Input, InputNumber, Menu, Table, message } from "antd";
import { HomeFilled, ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Typography from "antd/es/typography/Typography";
import { getCart } from "../API";

const Header = () => {
  const navigate = useNavigate();
  const onMenuClick = (item) => {
    navigate(`${item.key}`);
  };

  return (
    <div className="appHeader">
      <Menu
       className="appMenu"
        mode="horizontal"
        onClick={onMenuClick}
        items={[
          {
            label: <HomeFilled />,
            key: "home",
          },
          {
            label: "Men",
            key: "men",
            children: [
              {
                label: "Men's Shirts",
                key: "mens-shirts",
              },
              {
                label: "Men's Shoes",
                key: "mens-shoes",
              },
              {
                label: "Men's Watches",
                key: "mens-watches",
              },
            ],
          },
          {
            label: "Women",
            key: "women",
            children: [
              {
                label: "WoMen's Shirts",
                key: "womens-shirts",
              },
              {
                label: "WoMen's Shoes",
                key: "womens-shoes",
              },
              {
                label: "WoMen's Watches",
                key: "womens-watches",
              },
            ],
          },
          {
            label: "Fragrances",
            key: "fragrances",
          },
        ]}
      />
      {/* </Menu> */}
      <Typography.Title className="shopping_store_title">
        Anurag Store
      </Typography.Title>
      <AppCart />
    </div>
  );
};

function AppCart() {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cartItems, seTcartItems] = useState();
  const [checkoutDrawerOpen,setCheckoutDrawerOpen] = useState()

  useEffect(() => {
    getCart().then((res) => {
      seTcartItems(res.products);
    });
  }, []);

  const onConfirmOrder=(values)=>{
    console.log({values})
    setCartDrawerOpen(false)
    setCheckoutDrawerOpen(false)
    message.success("Your Order Has Been Made successfully")
  }

  return (
    <div>
      <Badge
        count={7}
        className="shoppingCartIcon"
        onClick={() => {
          setCartDrawerOpen(true);
        }}
      >
        <ShoppingCartOutlined className="shoppingCartIcon" />
      </Badge>
      <Drawer
        open={cartDrawerOpen}
        onClose={() => {
          setCartDrawerOpen(false);
        }}
        title="Your Cart"
        contentWrapperStyle={{width:500}}
      >
        <Table
         pagination={false}
          columns={[
            { title: "Title", dataIndex: "title" },
            { title: "Price", dataIndex: "price", render:(value)=>{return <span>${value}</span>} },
            { title: "Quantity", dataIndex: "quantity", render:(value,record)=>{return <InputNumber 
              min={0}
              defaultValue={value}
              onChange={(value) => {
                seTcartItems((pre) =>
                  pre.map((cart) => {
                    if (record.id === cart.id) {
                      cart.total = cart.price * value;
                    }
                    return cart;
                  })
                );
              }}
            />} },
            { title: "Total", dataIndex: "total" },
          ]}
          dataSource={cartItems}
          summary={(data)=>{
          const total = data.reduce((pre, current)=>{return pre+current.total},0)
          return <span>Total:{total}</span>
          }}
        />
         <Button
          onClick={() => {
            setCheckoutDrawerOpen(true);
          }}
          type="primary"
        >
          Checkout Your Cart
        </Button>
        
      </Drawer>
      <Drawer
      open={checkoutDrawerOpen}
      onClose={()=>{
        setCheckoutDrawerOpen(false)
      }}
      title="Confirm Order"
      >

<Form onFinish={onConfirmOrder}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please enter your full name",
              },
            ]}
            label="Full Name"
            name="full_name"
          >
            <Input placeholder="Enter your full name.." />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email",
              },
            ]}
            label="Email"
            name="your_name"
          >
            <Input placeholder="Enter your email.." />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please enter your address",
              },
            ]}
            label="Address"
            name="your_address"
          >
            <Input placeholder="Enter your full address.." />
          </Form.Item>
          <Form.Item>
            <Checkbox defaultChecked disabled>
              Cash on Delivery
            </Checkbox>
          </Form.Item>
          <Typography.Paragraph type="secondary">
            More methods coming soon
          </Typography.Paragraph>
          <Button type="primary" htmlType="submit">
            {" "}
            Confirm Order
          </Button>
        </Form>

      </Drawer>
     
    </div>
  );
}
export default Header;
