import Plat from "./layouts/Plat"
import plat1 from "../assets/image/shawarma_délicieux_dans_du_pain_libanais_avec_fond_blanc.png"
import plat2 from "../assets/image/img1.png"
import plat3 from "../assets/image/img3.png"
import plat4 from "../assets/image/sha1.png"
import plat5 from "../assets/image/kebab_turque (1).png"
import plat6 from "../assets/image/holal_kebab (1).png"
import plat7 from "../assets/image/img8.png"
import crepe from "../assets/image/img2.png"
import jus from "../assets/image/jus.png"
import cakes from "../assets/image/mini-cake.jpg"





function Menu() {
    return <>
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
        <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">Menu Principal</h1>
            <div className="flex flex-wrap gap-8 justify-center ">
                    <Plat img={plat1} title="Yalla KEBAB" price="1000Fcfa"/>
                    <Plat img={plat2} title="Piadini KEBAB" price="1000Fcfa"/>
            </div>
    </div>
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
        <h1 className=" text-4xl font-semibold text-center pt-24 pb-10 text-brightColor">Spécial Menu</h1>
            <div className="flex flex-wrap gap-8 justify-center ">
                    <Plat img={plat3} title="kebab/shawarma + fritte + dessert" price="2000Fcfa"/>
                    <Plat img={plat4} title="Shawaburger" price="3000Fcfa"/>
                    <Plat img={plat3} title="kebab/shawarma + fritte + dessert + boissons" price="2500Fcfa"/>

            </div>
    </div>
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
        <h1 className=" text-4xl font-semibold text-center pt-24 pb-10 text-brightColor/90">Menu</h1>
            <div className="flex flex-wrap gap-8 justify-center ">
                    <Plat img={plat5} title="Kebab TURQUE" price="1000Fcfa"/>
                    <Plat img={plat6} title="Holala Kebab" price="1000Fcfa"/>
                    <Plat img={plat7} title="Shawarma" price="1000Fcfa"/>
            </div>
    </div>
    
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
        <h1 className=" text-4xl font-semibold text-center pt-24 pb-10 text-brightColor">Dessert</h1>
            <div className="flex flex-wrap gap-8 justify-center ">
                    <Plat img={crepe} title="Crêpes"/>
                    <Plat img={cakes} title="Mini cakes"/>
                    <Plat img={jus} title="Jus naturel"/>
            </div>
    </div>

    </>
}


export default Menu
