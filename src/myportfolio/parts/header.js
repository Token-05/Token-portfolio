import "../css/header.css"
import "../css/all.css"

function Hanimation(props){
    return props.name;
}

const Header = () => {
    let daimei = "Tokenofolio";
    return (
        <header class="py-20 pb-96 main-header-box bg-green-500">
            <div class="py-5">
                <h1 class="font-mono transform -rotate-45 py-12 text-7xl sm:text-lg md:text-3xl text-red-500 headh1 bg-white"><Hanimation name={daimei}/></h1>
            </div>
        </header>
    );
};


export default Header;