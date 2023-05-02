import "./App.css";
import { Layout } from "antd";
import AppHeader from "./components/common/AppHeader";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Shop from "./components/Pages/Shop";
import Contact from "./components/Pages/Contact.jsx";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Faq from "./components/Pages/Faq";
import FooterWidget from "./components/common/footerWidget";
import FooterCopyright from "./components/common/footerCopyright";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Header>
            <AppHeader />
          </Header>
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/faq" element={<Faq />} />
            </Routes>
            Content
          </Content>
        </Router>

        <Footer>
          <FooterWidget />
          <FooterCopyright/>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
