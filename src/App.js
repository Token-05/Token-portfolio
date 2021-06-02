import Main from "./myportfolio/parts/main";
import Header from "./myportfolio/parts/header";
import Footer from "./myportfolio/parts/footer";
import DropButton from "./myportfolio/parts/dropButton";
import './App.css';


const App = () => {
    return (
        <div className="portfolio">
            <Header className="conheader" />
            <Main className="conbody"/>
            <Footer className="confooter" />
            <DropButton className="condb" />
        </div>
    );
};

export default App;
