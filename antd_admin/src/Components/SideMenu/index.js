import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SideMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedKeys,setSelectedKays] = useState("/")

    useEffect(()=>{
     const pathname = location.pathname
     setSelectedKays(pathname)
    },[location.pathname])

  return (
    <div className="SideMenu">
      <Menu
       className="SideMenVertical"
        onClick={(item)=>{
          navigate(item.key)  
        }}
        mode="vertical"
        
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "DashBoard",
            key:"/",
            icon:<AppstoreOutlined/>
          },
          {
            label: "Inventory",
            key: "/Inventory",
            icon:<ShopOutlined/>
          },
          {
            label: "Orders",
            key: "/orders",
            icon:<ShoppingCartOutlined/>
          },
          {
            label: "Customers",
            key: "/customers",
            icon:<UserOutlined/>
          },
        ]}
      ></Menu>
    </div>
  );
};

export default SideMenu;
