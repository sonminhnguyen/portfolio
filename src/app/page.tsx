import NavBar from "./components/NavBar";
import BasicInfo from "./components/BasicInfo";
import Projects from "./components/Projects";
import Playgrounds from "./components/Playgrounds";
import Contact from "./components/Contact";
import Computer from "./components/ThreeJS/computer/index";
import Stars from "./components/ThreeJS/star";

export default function Home() {
  return (
    <main
      // className="flex min-h-screen flex-col items-center justify-between p-24"
      className="block bg-slate-900 text-teal-200"
    >
      {/* <Computer /> */}
      {/* <Stars /> */}
      <div className="pt-[100vh]">
        <NavBar />
        <div className="mx-10">
          <BasicInfo />
          <Projects />
          <Playgrounds />
          <Contact />
        </div>
      </div>
    </main>
  );
}
