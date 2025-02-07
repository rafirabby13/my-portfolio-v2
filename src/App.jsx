import { Helmet } from "react-helmet";
import About from "./components/About.jsx";
import Banner from "./components/Banner.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Skill from "./components/Skill.jsx";

const App = () => {
  return (
    <div className="">
      <Helmet>
        <title>Home | Rafis Web</title>
      </Helmet>
      <section>
        <Navbar />
      </section>
      <section className="h-[104px] lg:h-[116px] "></section>
      <div className="xl:mx-20 space-y-2">
        <section>
          <Banner />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Skill />
        </section>
        <section>
          <Education />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
