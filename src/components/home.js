import Header from "./Header"
import Footer from "./Footer"
import Maincontent from "./Main"

function Home() {
  return (
    <div className="App">
    <Header/>
    <Maincontent />
    <Footer/>
    </div>
  );
}

export default Home;