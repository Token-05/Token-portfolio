import "../css/header.css"
import "../css/all.css"

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

const Header = () => {
    let flag = true;
    let n = 0;
    setInterval(async function() {
        let daimei = "Tokeno_folio";
        const len = daimei.length;
        if(flag) {
            if(n < len){
                n++;
            } else if(n === len){
                await delay(5);
                flag = false;
            }
        } else {
            if(n > 0){
                n--;
            } else if(n === 0){
                flag = true;
            }
        }
        document.getElementById('h1id').innerHTML = daimei.slice(0,n) + "|";
    },"150");
    return (
        <header className="main-header-box">
            <a className="h1-ver" href={`${process.env.PUBLIC_URL}/index.html`}>
                <h1 className="font-serif py-12 laptop:text-8xl tablet:text-7xl phone:text-6xl text-red-400 bg-white" 
                id="h1id">|</h1>
            </a>
            <div class="dropdown dropvar">
                <span className="material-icons btn text-black text-opacity-80 laptop:text-6xl tablet:text-3xl phone:text-xl" 
                type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" data-offset="10,20">
                    reorder
                </span>
                <ul class="dropdown-menu bg-green-200" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item laptop:text-2xl tablet:text-xl phone:text-base" href="#about">About me</a></li>
                    <li><a class="dropdown-item laptop:text-2xl tablet:text-xl phone:text-base" href="#works">Works</a></li>
                    <li><a class="dropdown-item laptop:text-2xl tablet:text-xl phone:text-base" href="#blog">Blog</a></li>
                    <li><a class="dropdown-item laptop:text-2xl tablet:text-xl phone:text-base" href="#contact">Contact</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;