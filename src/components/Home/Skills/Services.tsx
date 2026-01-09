"use client"
import SkillCard from './skillCards';
import '../IconsSVG';
import ScrollAnimation2 from "../../ScrollToTop/ScrollAnimation2";
import { programmingLanguages , tools } from "../../../app/api/dataD";
  
export default function Skills() {
  return(
    <>
    <section className='h-fit m-auto   my-26   relative'>
    
<div className='px-10'>
<div className={`rounded-2xl overflow-hidden  bg-[url('https://i.ibb.co/HL58hjfx/skills02.jpg')]`}>
  {/* ----- */}
  <div className="w-full relative flex ">
      <h1 className="w-full h-full pt-6 content-center  text-white  mt-4 text-center mb-20 text-4xl underline underline-offset-8  font-bold xl:text-6xl">Skills</h1>

  </div>

    {/* Programming Languages */}
    <section className="py-8 border-t-4 border-white/20 relative px-8 mt-16  ">
      <h2 className="bg-light-mode-a z-20 w-fit py-4 px-4 text-xl md:text-2xl font-[roboto] text-white mb-6 absolute -top-10">Programming Languages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {programmingLanguages.map((skill) => (
          <ScrollAnimation2 key={skill.title}>
            <SkillCard title={skill.title} icon={skill.icon} />
          </ScrollAnimation2>
        ))}
      </div>
    </section>
        
    {/* Tools */}
    <section className="py-8 border-t-4 border-white/20  relative px-8 mt-16">
      <h2 className=" bg-light-mode-a z-20   py-4 px-8 text-xl md:text-2xl font-[roboto] mb-6 absolute -top-10 text-white ">Tools</h2>
      <div className="grid grid-cols-1 mt-10  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tools.map((skill) => (
          <ScrollAnimation2 key={skill.title}>
            <SkillCard title={skill.title} icon={skill.icon} />
          </ScrollAnimation2>
        ))}
      </div>
    </section>

        </div>
      </div>
    </section>
    
    </>
  );
}