
function Footer() {


    return (
            <div className=" bg-black text-white rounded-t-3xl mt:8 md:mt-0">
                <div className=" flex flex-col md:flex-row justify-between p-8 md:px32 px-5">
                    <div className=" w-full md:w-1/4">
                        <p className=" text-white font-semibold text-xl"><span className=" text-brightColor">OusmiKebab</span> vous invite nombreux pour une experience culinaire exceptionnel et à prix cadeau à SADI CARREFOUR PETIT TERRAIN.</p>
                    </div>
                    <div className=" font-medium text-xl pb-4 pt-5 md:pt-0">
                        <h3>Navigation</h3>
                        <nav  className=" flex flex-col gap-2">
                            <a className=" hover:text-brightColor transition-all cursor-pointer" href="/">Home</a>
                            <a className=" hover:text-brightColor transition-all cursor-pointer" href="/">Menu</a>
                            <a className=" hover:text-brightColor transition-all cursor-pointer" href="/">Contact</a>
                        </nav>
                    </div>
                    <div className=" font-medium text-xl pb-4 pt-5 md:pt-0">
                        <h3>Contact</h3>
                        <nav className=" flex flex-col gap-2">
                            <a className=" hover:text-brightColor transition-all cursor-pointer" href="/"> +237 672126848</a>
                            <a className=" hover:text-brightColor transition-all cursor-pointer" href="/">+39 3716232953</a>
                            <a className=" hover:text-brightColor transition-all cursor-pointer" href="/">ousmanebassirou8gmail.com</a>
                        </nav>
                    </div>
                    
                    
                </div>
            </div>
    )
}

export default Footer