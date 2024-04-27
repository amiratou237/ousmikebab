
import React from "react"
function Home() {


    return (
<div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-cover bg-center" style={{backgroundImage:'url("../src/assets/image/img.png")'}}>            
            <div className="w-full lg:w-2/3 space-y-5">
                <h1 className="  text-backgroundColor font-semibold text-8xl">Fast-food</h1>
                <h3 className=" text-backgroundColor font-semibold text-xl">100 % HALAL</h3>
                <p className=" text-backgroundColor font-semibold text-2xl"><span className=" text-brightColor">OusmiKebab</span> vous invite nombreux pour une experience <br/>culinaire exceptionnel <br/>et à prix cadeau à SADI CARREFOUR PETIT TERRAIN. <br/> Venez découvrir la meilleur recette de la ville !</p>
                <div>
                    <a href="https://wa.me/393716232953" className="  transition-all  bg-brightColor rounded-3xl p-2 hover:bg-sombreColor text-xl ">Commandez</a>
                </div>
            </div>
            

        </div>
    )
}

export default Home