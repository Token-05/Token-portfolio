import "../css/header.css"

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
                <h1 className="font-serif py-12 laptop:text-8xl tablet:text-7xl phone:text-6xl text-black bg-white" 
                id="h1id">|</h1>
            </a>
        </header>
    );
};

export default Header;