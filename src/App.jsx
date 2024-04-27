import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Footer from "./components/Footer";


function App() {
    return <>
        <Navbar />
        <main>
            <div id="home">
                <Home />
            </div>

            <div id="menu">
                <Menu />
            </div>
        </main>
        <Footer/>
        
    </>
}


export default App
