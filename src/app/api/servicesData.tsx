import React from "react";
import { Icon } from "@iconify/react";

export const services = [
  {
    title: "Bug Fixing & Debugging",
    desc:
      "Identify, analyze, and resolve website issues with precision. I prioritize root-cause analysis, reproducible fixes, and test coverage to keep your product stable.",
    color: "from-red-400 to-red-600",
    icon: <Icon icon="mdi:bug" className="text-3xl xl:text-light-mode-a!  md:text-light-mode-a text-white" />,
    id:1,
    Img:"https://img.freepik.com/free-vector/software-testing-programmer-cartoon-character-with-magnifier-looking-defects-programme-application-software-bugs-errors-risks-vector-isolated-concept-metaphor-illustration_335657-2742.jpg?t=st=1766754399~exp=1766757999~hmac=daf47325246f727678773c71131b84fad18daf2a9912629e4231637ee2fa5a0c&w=1060"
  },
  {
    title: "UI Redesign & Improvement",
    desc:
      "Refine layouts and modernize visual structure to increase usability and clarity. My process includes research, wireframes, and iterative visual polish.",
    color: "from-indigo-500 to-purple-500",
    icon: <Icon icon="ic:baseline-design-services" className="text-3xl xl:text-light-mode-a! md:text-light-mode-a text-white" />,
    id:2,
    Img:"https://img.freepik.com/free-vector/digital-designers-team-drawing-with-pen-computer-monitor_74855-10586.jpg?uid=R178126911&ga=GA1.1.1340944138.1752348472&semt=ais_hybrid&w=740&q=80"
  },
  {
    title: "Frontend Development",
    desc:
      "Build clean, responsive, and scalable interfaces using modern frameworks and best practices for maintainability and performance.",
    color: "from-green-400 to-teal-500",
    icon: <Icon icon="teenyicons:code-outline" className="text-3xl xl:text-light-mode-a! md:text-light-mode-a text-white" />,
    id:3,
    Img:"https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?t=st=1766754299~exp=1766757899~hmac=0f31b76cefd019bbf0beebb51b4359b703c016a82939f32ac87b7084ee92bf5a&w=1060"
  },
  {
    title: "Performance Optimization",
    desc:
      "Improve load times and responsiveness through code-splitting, caching, and effective asset strategies for faster, smoother experiences.",
    color: "from-yellow-400 to-orange-400",
    icon: <Icon icon="mdi:speedometer" className="text-3xl xl:text-light-mode-a! md:text-light-mode-a text-white" />,
    id:4,
    Img:"https://img.freepik.com/free-vector/hand-drawn-flat-design-benchmark-illustration_23-2149331621.jpg?t=st=1766753778~exp=1766757378~hmac=c0eb09751755fc285eb2bfa8f1b613c471f8aacdc1e10960c8f478ed6ff8d3ef&w=1060"
  },
  {
    title: "Responsive & Cross-Browser Design",
    desc:
      "Ensure consistent behavior across devices and browsers with a focus on accessibility and graceful degradation.",
    color: "from-sky-400 to-blue-500",
    icon: <Icon icon="mdi:responsive" className="text-3xl xl:text-light-mode-a! md:text-light-mode-a text-white" />,
    id:5,
    Img:"https://img.freepik.com/free-vector/cross-platform-devices-multiplatform-connection-gadgets-synchronization-adaptive-development-linked-computer-laptop-tablet-smartphone_335657-260.jpg?t=st=1766754465~exp=1766758065~hmac=45d84b1bce37385280c7fd35d0e19c4afe133ecd0660774366a5a7f2edb86600&w=1060"
  },
];

export default services;
