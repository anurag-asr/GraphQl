import React from 'react'
import { Badge, Image, Space, Typography } from 'antd'
import { BellFilled, MailOutlined } from '@ant-design/icons'


const AppHeader = () => {
  return (
    <div className='AppHeader'>
      <Image width={40} src="https://yt3.ggpht.com/ytc/AGIKgqNJGHI0H-MVTXFWJzdScc-4Enajv7GnFkHdOh62=s48-c-k-c0x00ffffff-no-rj"></Image>
      <Typography.Title>Anurag's DashBoard</Typography.Title>
      <Space>
        <Badge count={10} ><MailOutlined style={{fontSize:"24px"}}/></Badge>
        <Badge count={20}><BellFilled style={{fontSize:"24px"}}/></Badge>
      </Space>
    </div>
  )
}

export default AppHeader
