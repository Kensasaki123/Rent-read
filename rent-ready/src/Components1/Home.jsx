import Hero from "./moreComp/Hero";
import Slideshow from "./moreComp/Slideshow";
import Descbody from './moreComp/Descbody'
import Bottompart from "./moreComp/Bottompart";
import Catalogue from "./moreComp/Catalogue";


function Home() {
  return (
    <>
    <Hero/>
    <Slideshow/>
    <Catalogue />
    <Slideshow/>
    <Descbody />
    <Bottompart />
    </>
  );
}

export default Home;
