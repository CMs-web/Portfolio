import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-6 z-[100] py-10 bg-neutral-100 lg:w-[14%] border-r border-neutral-200/[0.8] fixed top-0 h-screen lg:relative  left-0 lg:flex flex-col justify-between max-w-[14rem]">
      <div className="flex items-center">
        <img
          className="rounded-3xl w-10 object-cover object-right h-10"
          src="/avatar.png"
          alt=""
        />
        <div className="pl-2 leading-3 pt-2">
          <h1 className="font-semibold mb-1 text-primary">Shivam</h1>
          <p className="text-sm tracking-tight text-secondary">Developer</p>
        </div>
      </div>
      <div className="flex flex-col space-y-1 my-10 relative z-[100]">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            ` hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm ${
              isActive ? "bg-white shadow-lg " : "text-secondary"
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 flex-shrink-0 text-sky-500"
          >
            <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path>
          </svg>
          <span>Home</span>
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            ` hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm ${
              isActive ? "bg-white shadow-lg " : "text-secondary"
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 flex-shrink-0 "
          >
            <path d="M8 9h8"></path>
            <path d="M8 13h6"></path>
            <path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z"></path>
          </svg>
          <span>About</span>
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            ` hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm ${
              isActive ? "bg-white shadow-lg " : "text-secondary"
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 flex-shrink-0"
          >
            <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z"></path>
            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
          <span>Projects</span>
        </NavLink>
        <NavLink
          to={"/experience"}
          className={({ isActive }) =>
            ` hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm ${
              isActive ? "bg-white shadow-lg " : "text-secondary"
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 flex-shrink-0"
          >
            <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
            <path d="M7 8h10"></path>
            <path d="M7 12h10"></path>
            <path d="M7 16h10"></path>
          </svg>
          <span to={"/experience"}>Experience</span>
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            ` hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm ${
              isActive ? "bg-white shadow-lg " : "text-secondary"
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 flex-shrink-0"
          >
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
            <path d="M3 7l9 6l9 -6"></path>
          </svg>
          <span>Contact</span>
        </NavLink>
        <p className="__className_399708 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-sm md:text-sm lg:text-sm pt-10 px-2">
          Socials
        </p>
        <a
          target="_blank"
          className="text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          href="https://github.com/CMs-web"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="h-4 w-4 flex-shrink-0"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577 0-.285-.011-1.041-.017-2.043-3.338.726-4.042-1.609-4.042-1.609-.546-1.387-1.333-1.758-1.333-1.758-1.091-.746.083-.731.083-.731 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.333-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.305-.536-1.534.117-3.194 0 0 1.008-.322 3.301 1.23.96-.267 1.984-.4 3.004-.404 1.02.004 2.044.137 3.004.404 2.292-1.552 3.298-1.23 3.298-1.23.653 1.66.241 2.889.118 3.194.77.84 1.236 1.911 1.236 3.221 0 4.609-2.807 5.623-5.479 5.921.43.372.814 1.103.814 2.222 0 1.606-.014 2.901-.014 3.293 0 .319.192.694.801.577C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
          </svg>

          <span>Github</span>
        </a>
        <a
          target="_blank"
          className="text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          href="https://www.linkedin.com/in/shivam-goswami-694636288/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 flex-shrink-0"
          >
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
            <path d="M8 11l0 5"></path>
            <path d="M8 8l0 .01"></path>
            <path d="M12 16l0 -5"></path>
            <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
          </svg>
          <span>LinkedIn</span>
        </a>
        <a
          target="_blank"
          className="text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          href="https://youtube.com/maninthere"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 flex-shrink-0"
          >
            <path d="M20.47 3.53a12.17 12.17 0 0 0-8.57-3.53C6.4 0 1.6 4.8 1.6 10.73c0 1.91.5 3.77 1.43 5.4L0 24l8.1-3.03a12.14 12.14 0 0 0 5.8 1.46h.03c5.94 0 10.77-4.8 10.77-10.73 0-2.88-1.1-5.59-3.13-7.7zM12 21.16h-.03a10.23 10.23 0 0 1-5.1-1.37l-.37-.2-4.81 1.8 1.8-4.72-.24-.38A9.42 9.42 0 0 1 2.77 10.7c0-5.34 4.36-9.7 9.7-9.7 2.49 0 4.87.97 6.64 2.74a9.37 9.37 0 0 1 2.75 6.64c-.02 5.33-4.37 9.68-9.71 9.68zm5.54-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.46-.15-.64.15-.19.3-.74.97-.9 1.17-.16.2-.33.23-.62.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.77-1.68-2.07-.17-.3-.02-.46.13-.6.14-.14.3-.33.45-.5.15-.16.2-.27.3-.46.1-.19.05-.35-.02-.5-.08-.15-.63-1.53-.87-2.1-.23-.55-.46-.47-.64-.47-.17 0-.37-.02-.56-.02a1.07 1.07 0 0 0-.76.36c-.26.3-.99.98-.99 2.4s1.02 2.77 1.16 2.97c.14.2 2 3.06 4.83 4.3.67.29 1.19.46 1.6.6.67.21 1.28.18 1.77.11.54-.08 1.76-.72 2.02-1.41.26-.7.26-1.3.18-1.4-.1-.13-.27-.2-.56-.36z"></path>
          </svg>
          <span>Whatsaap</span>
        </a>
      </div>
      <a
        target="_blank"
        className="bg-slate-900 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"
        href="/Shivam Goswami.pdf"
      >
        <span className="absolute inset-0 overflow-hidden rounded-full ">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex space-x-1 items-center z-10 rounded-full bg-transparent py-2 px-4 ring-1 ring-white/10 ">
          <span>Read Resume</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              d="M10.75 8.75L14.25 12L10.75 15.25"
              pathLength="1"
              strokeDashoffset="0px"
              strokeDasharray="1px 1px"
            ></path>
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </a>
    </nav>
  );
};

export default Navbar;
