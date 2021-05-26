const Main = () => {
    return (
        <div>
            <div>
                <img src={`${process.env.PUBLIC_URL}/img/header2.jpg`} alt="header_image" style={{margin: 0}}></img>
            </div>
            <main className="py-20 container" id="main">
                <div class="min-h-screen py-20 flex flex-col justify-center sm:py-12" id="about">
                    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div class="absolute inset-0 bg-gradient-to-r from-cyan-300 to-pink-300 shadow-lg transform -rotate-3 rounded-3xl sm:-rotate-3 sm:rounded-3xl"></div>
                        <div class="relative px-4 rounded-3xl py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div class="py-8 max-w-4xl mx-3">
                                <h1 className="font-mono text-7xl sm:text-lg md:text-3xl text-red-500 headh1 bg-white mb-10">About me</h1>
                                <div className="grid grid-cols-2 gap-4">
                                    <div class="max-w-4xl mx-3 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                        <div class="md:flex">
                                            <div class="md:flex-shrink-0">
                                            <img class="h-48 w-full object-cover md:h-full md:w-48" src={`${process.env.PUBLIC_URL}/img/school.jpg`} alt="Man looking at item at a store" />
                                            </div>
                                            <div class="p-8">
                                            <div class="uppercase tracking-wide text-base font-semibold">Major</div>
                                            <p class="mt-2 text-gray-500">I'm major in Information engineering. Currently studying Javascript.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="max-w-4xl mx-3 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                        <div class="md:flex">
                                            <div class="md:flex-shrink-0">
                                            <img class="h-48 w-full object-cover md:h-full md:w-48" src={`${process.env.PUBLIC_URL}/img/belief.jpg`} alt="Man looking at item at a store" />
                                            </div>
                                            <div class="p-8">
                                            <div class="uppercase tracking-wide text-base font-semibold">Belief</div>
                                            <p class="mt-2 text-gray-500">I will continue to provide the things of value and constantly create what is new and unique.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="min-h-screen py-20 flex flex-col justify-center sm:py-12" id="works">
                    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div class="absolute inset-0 bg-gradient-to-r from-cyan-300 to-pink-300 shadow-lg transform -rotate-3 rounded-3xl sm:-rotate-3 sm:rounded-3xl"></div>
                        <div class="relative px-4 rounded-3xl py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div class="max-w-4xl mx-3 py-10">
                                <h1 className="font-mono mb-10 text-7xl sm:text-lg md:text-3xl text-red-500 headh1 bg-white">Works</h1>
                                <div className="grid grid-cols-2 gap-4">
                                    <div class="max-w-4xl mx-3 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                        <a href="https://webiotmakers.github.io/2020/shinshu/">
                                            <div class="md:flex">
                                                <div class="md:flex-shrink-0">
                                                    <img class="h-48 w-full object-cover md:h-full md:w-48" src={`${process.env.PUBLIC_URL}/img/handson.jpg`} alt="Man looking at item at a store" />
                                                </div>
                                                <div class="p-8">
                                                    <div class="uppercase tracking-wide text-base font-semibold">Web×IoT メイカーズチャレンジ2020-21 in信州</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="max-w-4xl mx-3 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                        <a href="https://github.com/Token-05/djangoboy">
                                            <div class="md:flex">
                                                <div class="md:flex-shrink-0">
                                                <img class="h-48 w-full object-cover md:h-full md:w-48" src={`${process.env.PUBLIC_URL}/img/blog.jpg`} alt="Man looking at item at a store" />
                                                </div>
                                                <div class="p-8">
                                                <div class="uppercase tracking-wide text-base font-semibold">Simple blog</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12" id="skills">
                    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div class="absolute inset-0 bg-gradient-to-r from-cyan-300 to-pink-300 shadow-lg transform -rotate-3 rounded-3xl sm:-rotate-3 sm:rounded-3xl"></div>
                        <div class="relative px-4 rounded-3xl py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div class="max-w-md mx-auto">
                                <div>
                                    <h1 className="font-mono py-8 text-7xl sm:text-lg md:text-3xl text-red-500 headh1 bg-white">Skills</h1>
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