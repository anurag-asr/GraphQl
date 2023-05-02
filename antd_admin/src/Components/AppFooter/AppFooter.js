import { Typography } from "antd";
import React from "react";

const AppFooter = () => {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+12345678">+12344567773</Typography.Link>
      <Typography.Link href="https://www.google.com" target={'_blank'}>Privacy Policy</Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>Terms of use</Typography.Link>
    </div>
  );
};

export default AppFooter;
