"use client"
import SkillCard from "@/components/Home/Skills/skillCards";
import '../IconsSVG';
import ScrollAnimation2 from "@/components/ScrollToTop/ScrollAnimation2";
import { programmingLanguages, tools } from "@/app/api/dataD";
  
export default function Skills() {
  return(
    <>
    <div className='h-fit m-auto mx-4   xl:w-[1366] my-26  xl:m-auto relative'>
    
    {/* skill cards */}
<div>
      {/* parent element */}
<div className={`rounded-2xl overflow-hidden  bg-[url('https://i.ibb.co/HL58hjfx/skills02.jpg')]`}>
  {/* ----- */}
  <div className="w-full relative flex ">
      <h1 className="w-full h-full pt-6 content-center text-center mb-20 text-4xl font-bold xl:text-6xl">Skills</h1>

  </div>

    {/* Programming Languages */}
    <section className="py-8 border-t-4 border-white/20    relative px-8 mt-16  ">
      <h2 className="bg-light-mode-a z-20  py-4 px-8 text-xl md:text-2xl font-[roboto] mb-6 absolute -top-10">Programming Languages</h2>
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
      <h2 className=" bg-light-mode-a z-20   py-4 px-8 text-xl md:text-2xl font-[roboto] mb-6 absolute -top-10 ">Tools</h2>
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
    </div>
    
    </>
  );
}