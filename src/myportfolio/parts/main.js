const Main = () => {
    return (
        <div>
            <div>
                <img src={`${process.env.PUBLIC_URL}/img/header2.jpg`} alt="header_image" style={{margin: 0}}></img>
            </div>
            <main className="py-10 container" id="main">
                <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12" id="about">
                    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div class="absolute inset-0 bg-gradient-to-r from-cyan-300 to-pink-300 shadow-lg transform -rotate-3 rounded-3xl sm:-rotate-3 sm:rounded-3xl"></div>
                        <div class="relative px-4 rounded-3xl py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div class="max-w-md mx-auto">
                                <div>
                                    <h1 className="font-mono py-8 text-7xl sm:text-lg md:text-3xl text-red-500 headh1 bg-white">About</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12" id="works">
                    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div class="absolute inset-0 bg-gradient-to-r from-cyan-300 to-pink-300 shadow-lg transform -rotate-3 rounded-3xl sm:-rotate-3 sm:rounded-3xl"></div>
                        <div class="relative px-4 rounded-3xl py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div class="max-w-md mx-auto">
                                <div>
                                    <h1 className="font-mono py-8 text-7xl sm:text-lg md:text-3xl text-red-500 headh1 bg-white">Works</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12" id="blog">
                    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div class="absolute inset-0 bg-gradient-to-r from-cyan-300 to-pink-300 shadow-lg transform -rotate-3 rounded-3xl sm:-rotate-3 sm:rounded-3xl"></div>
                        <div class="relative px-4 rounded-3xl py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div class="max-w-md mx-auto">
                                <div>
                                    <h1 className="font-mono py-8 text-7xl sm:text-lg md:text-3xl text-red-500 headh1 bg-white">Blog</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12" id="contact">
                    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div class="absolute inset-0 bg-gradient-to-r from-cyan-300 to-pink-300 shadow-lg transform -rotate-3 rounded-3xl sm:-rotate-3 sm:rounded-3xl"></div>
                        <div class="relative px-4 rounded-3xl py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div class="max-w-md mx-auto">
                                <div>
                                    <h1 className="font-mono py-8 text-7xl sm:text-lg md:text-3xl text-red-500 headh1 bg-white">Contact</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};


export default Main;