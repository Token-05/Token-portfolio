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
                                            <img class="h-48 w-full object-cover md:h-full md:w-48" src={`${process.env.PUBLIC_URL}/img/school.jpg`} alt="school" />
                                            </div>
                                            <div class="p-8">
                                            <div class="uppercase tracking-wide text-base font-semibold">profile</div>
                                            <p class="mt-2 text-gray-500">情報工学を専攻しています。最近はJavaScriptでの開発がメインです。</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="max-w-4xl mx-3 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                        <div class="md:flex">
                                            <div class="md:flex-shrink-0">
                                            <img class="h-48 w-full object-cover md:h-full md:w-48" src={`${process.env.PUBLIC_URL}/img/belief.jpg`} alt="belief" />
                                            </div>
                                            <div class="p-8">
                                            <div class="uppercase tracking-wide text-base font-semibold">Belief</div>
                                            <p class="mt-2 text-gray-500">これからも価値あるものを提供し、常に新しくてユニークなものを創造していきます。</p>
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
                                                    <img class="h-48 w-full object-cover md:h-full md:w-48" src={`${process.env.PUBLIC_URL}/img/handson.jpg`} alt="github" />
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
                                                <img class="h-48 w-full object-cover md:h-full md:w-48" src={`${process.env.PUBLIC_URL}/img/blog.jpg`} alt="github" />
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
                <div class="min-h-screen py-20 flex flex-col justify-center sm:py-12" id="skills">
                    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div class="absolute inset-0 bg-gradient-to-r from-cyan-300 to-pink-300 shadow-lg transform -rotate-3 rounded-3xl sm:-rotate-3 sm:rounded-3xl"></div>
                        <div class="relative px-4 rounded-3xl py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div class="mx-auto max-w-2xl">
                                <h1 className="font-mono py-8 text-7xl sm:text-lg md:text-3xl text-red-500 headh1 bg-white">Skills</h1>
                                <div className="skillsmain">
                                    <div class="flex pb-10">
                                        <div class="w-1/6 bg-white"><img src={`${process.env.PUBLIC_URL}/img/c.png`} alt="c"></img></div>
                                        <div class="w-5/6 progress my-auto ml-10">
                                            <div class="progress-bar" role="progressbar" style={{"width": "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="flex pb-10">
                                        <div class="w-1/6 bg-white"><img src={`${process.env.PUBLIC_URL}/img/java.png`} alt="java"></img></div>
                                        <div class="w-5/6 progress my-auto ml-10">
                                            <div class="progress-bar" role="progressbar" style={{"width": "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="flex pb-10">
                                        <div class="w-1/6 bg-white"><img src={`${process.env.PUBLIC_URL}/img/js.png`} alt="js"></img></div>
                                        <div class="w-5/6 progress my-auto ml-10">
                                            <div class="progress-bar" role="progressbar" style={{"width": "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="flex pb-10">
                                        <div class="w-1/6 bg-white"><img src={`${process.env.PUBLIC_URL}/img/php.png`} alt="php"></img></div>
                                        <div class="w-5/6 progress my-auto ml-10">
                                            <div class="progress-bar" role="progressbar" style={{"width": "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="flex pb-10">
                                        <div class="w-1/6 bg-white"><img src={`${process.env.PUBLIC_URL}/img/python.png`} alt="python"></img></div>
                                        <div class="w-5/6 progress my-auto ml-10">
                                            <div class="progress-bar" role="progressbar" style={{"width": "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="flex pb-10">
                                        <div class="w-1/6 bg-white"><img src={`${process.env.PUBLIC_URL}/img/ruby.png`} alt="ruby"></img></div>
                                        <div class="w-5/6 progress my-auto ml-10">
                                            <div class="progress-bar" role="progressbar" style={{"width": "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="min-h-screen py-20 flex flex-col justify-center sm:py-12" id="contact">
                    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div class="absolute inset-0 bg-gradient-to-r from-cyan-300 to-pink-300 shadow-lg transform -rotate-3 rounded-3xl sm:-rotate-3 sm:rounded-3xl"></div>
                        <div class="relative px-4 rounded-3xl py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div class="max-w-2xl mx-auto">
                                <h1 className="font-mono py-8 text-7xl sm:text-lg md:text-3xl text-red-500 headh1 bg-white">Contact</h1>
                                <div class="grid grid-cols-4 gap-4 my-20">
                                    <a className="px-10" href="https://github.com/Token-05"><img class="" src={`${process.env.PUBLIC_URL}/img/github.png`} alt="github"></img></a>
                                    <a className="px-10" href="https://twitter.com/dev__token"><img class="" src={`${process.env.PUBLIC_URL}/img/twitter.png`} alt="twitter"></img></a>
                                    <a className="px-10" href="https://atcoder.jp/users/tensainohito"><img class="" src={`${process.env.PUBLIC_URL}/img/atcoder.png`} alt="atcoder"></img></a>
                                    <a className="px-10" href="https://open.spotify.com/"><img class="" src={`${process.env.PUBLIC_URL}/img/music.png`} alt="music"></img></a>
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