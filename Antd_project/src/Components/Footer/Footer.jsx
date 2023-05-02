import { Typography } from "antd";
import React from "react";

const Footer = () => {
  return (
    <div className="appFooter">
      <Typography.Link href="https://www.google.com" target={"_blank"}>Privacy Policy</Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>Terms & Conditions</Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>Return Policy</Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>+1234432 Policy</Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>Privacy Policy</Typography.Link>
    </div>
  );
};

export default Footer;
