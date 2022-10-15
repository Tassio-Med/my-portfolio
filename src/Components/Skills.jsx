import React from "react";

function Skills(){
  return(
    <div className="bg-[#001021] flex flex-col justify-center items-center max-w-md mx-8  md:max-w-md min-w-0 rounded-xl skills-shadow animation animation:hover">
      <div className="flex justify-center items-center mb-4  mt-4">
        <h2 className="text-4xl font-bold text-[#5fadfc]">Minhas Skills</h2>
      </div>
      <ul className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 text-slate-50 mb-4">
        <li className="mx-4 flex flex-col justify-center items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git ícone"
            width="20%"
          />
          <p className="skill-name">Git</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="Github ícone"
            width="20%"
            className='github-icon'
          />
          <p className="skill-name">Github</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="Javascript ícone"
            width="20%"
          />
          <p className="skill-name">Javascript</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React ícone"
            width="20%"
          />
          <p className="skill-name">React.js</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML5 ícone"
            width="20%"
          />
          <p className="skill-name">HTML5</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS3 ícone"
            width="20%"
          />
          <p className="skill-name">CSS3</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
            alt="Jest ícone"
            width="20%"
          />
          <p className="skill-name">Jest</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            alt="Redux ícone"
            width="20%"
          />
          <p className="skill-name">Redux</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
            alt="Firebase ícone"
            width="20%"
          />
          <p className="skill-name">Firebase</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            alt="Tailwind ícone"
            width="20%"
          />
          <p className="skill-name">Tailwind</p>
        </li>
      </ul>
    </div>
  )
}

export default Skills;