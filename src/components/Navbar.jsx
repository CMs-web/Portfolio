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
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="h-4 w-4 flex-shrink-0"
          >
            <path d="M20.5 3.5C18.4 1.4 15.3 0 12 0 5.4 0 0 5.4 0 12c0 6.6 5.4 12 12 12 3.3 0 6.4-1.4 8.5-3.5l-3.4-3.4c-.2-.2-.3-.5-.1-.8.4-.9 1.1-2.6 1.2-4.1.1-.5-.4-1-.9-1.4-.3-.3-.6-.6-1-1-.3-.3-.6-.5-1-.7-.4-.2-.9-.4-1.4-.3-.7.1-1.6.6-2.4 1.4-.5.5-1.2 1.3-1.4 2-.1.3-.4.5-.7.4s-.5-.4-.4-.7c.3-.9.9-1.7 1.5-2.3.7-.7 1.5-1.2 2.4-1.5.3-.1.5-.4.4-.7-.1-.3-.4-.5-.7-.4zM16.6 13.8c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.5.1-.1.2-.5.7-.6.8-.1.1-.3.2-.5.1-.1 0-.7-.3-1.3-.8-.5-.5-.9-1-.9-1.2-.1-.2 0-.4.1-.5.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1.1-.2.2-.3.1-.2.1-.4 0-.6 0-.2-.5-1.2-.7-1.6-.2-.4-.4-.3-.5-.3H8.7c-.2 0-.4.1-.6.2-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.1 1.6 2.6 4 3.6.6.3 1.1.5 1.5.6.6.2 1.1.1 1.5.1.5 0 1.5-.5 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.1-.4-.2zM20.5 3.5C18.4 1.4 15.3 0 12 0 5.4 0 0 5.4 0 12c0 2.1.5 4.1 1.5 5.9L0 24l6.3-1.6c1.7.9 3.6 1.3 5.7 1.3 6.6 0 12-5.4 12-12 0-3.2-1.3-6.3-3.5-8.5zm-8.5 18c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.7.9.8-3.6-.2-.4C2.6 15.2 2 13.6 2 12c0-5.5 4.5-10 10-10 2.7 0 5.2 1 7.1 2.9 1.9 1.9 2.9 4.4 2.9 7.1 0 5.5-4.5 10-10 10z"></path>
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
