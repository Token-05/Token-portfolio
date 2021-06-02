import "../css/header.css"

const DropButton = () => {
    return (
        <div class="dropdown">
            <span className="material-icons btn text-black text-opacity-80 laptop:text-6xl tablet:text-3xl phone:text-xl" 
            type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" data-offset="10,20">
                reorder
            </span>
            <div class="dropdown-content">
                <div class="px-10 py-12 divide-y divide-light-blue-400">
                    <a class="laptop:text-4xl tablet:text-2xl phone:text-base" href="#about"><div class="py-12" >About me</div></a>
                    <a class="laptop:text-4xl tablet:text-2xl phone:text-base" href="#works"><div class="py-12" >Works</div></a>
                    <a class="laptop:text-4xl tablet:text-2xl phone:text-base" href="#skills"><div class="py-12" >Skills</div></a>
                    <a class="laptop:text-4xl tablet:text-2xl phone:text-base" href="#contact"><div class="py-12" >Contact</div></a>
                </div>
            </div>
        </div>
    )
}

export default DropButton;