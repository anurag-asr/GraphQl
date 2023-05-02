import React from "react";

import { HomeFilled, UserOutlined } from "@ant-design/icons";
import Link from "antd/es/typography/Link";

const AppHeader = () => {
  return (
    <div className="AppHeader">
      <div className="title_tag">TMDB</div>
      <div className="otherInfo_div">
        <ul className="otherInfo">
          <li><a href="/favourite">FavouriteMovie</a></li>
          <li><a href="/person">Person</a></li>
          <li><a href="/movies">Movies</a></li>
          <li><a href="/login"><UserOutlined />Login</a></li>
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
