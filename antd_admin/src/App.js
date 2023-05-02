import "./App.css";
import AppHeader from "./Components/AppHeader";
import { Space } from "antd";
import PageContent from "./Components/Pagecontent";
import SideMenu from "./Components/SideMenu";
import AppFooter from "./Components/AppFooter/AppFooter";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Space className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space>
      <AppFooter />
    </div>
  );
}

export default App;
