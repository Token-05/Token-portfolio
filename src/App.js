import Main from "./myportfolio/parts/main";
import Header from "./myportfolio/parts/header";
import Footer from "./myportfolio/parts/footer";
import './App.css';


const App = () => {
    return (
        <div className="portfolio">
            <Header className="conheader" />
            <Main className="conbody"/>
            <Footer className="confooter" />
        </div>
    );
};

export default App;
