// Components
import TeamCarousel from "../TeamCarousel";

// Sections content data
const sectionsContentData = [
  {
    key: "about",
    title: "About Me",
    content: (
      <p>
       I am a passionate software developer with a strong foundation in mobile and web technologies. Skilled in Flutter for cross-platform app development, I also excel in competitive programming (CP) and have a deep understanding of Data Structures and Algorithms using C++. I have experience working with Golang, Firebase, and Android Studio (Java), alongside HTML and CSS for front-end development. I am always eager to learn and solve complex problems, constantly improving my skills to build efficient and scalable solutions.
      </p>
    ),
  },
  { key: "team", title: "Our team", content: <TeamCarousel /> },
  {
    key: "projects",
    title: "Projects",
    content: (
      <ul className="projects">
        <li>
          <a href="https://github.com/akshubawa/NotSoPhishy">Not So Phishy</a>
        </li>
        <li>
          <a href="https://github.com/akshubawa/checkpoint">Checkpoint</a>
        </li>
        <li>
          <a href="https://github.com/hardeeksharma/rakshakcode-app-ui">Rakshak Code</a>
        </li>
        <li>
          <a href="https://github.com/akshubawa/Metromate">Metromate</a>
        </li>
        <li>
          <a href="https://github.com/akshubawa/Donative">Donative</a>
        </li>
        <li>
          <a href="https://github.com/akshubawa?tab=repositories">
            More Projects
          </a>
        </li>
      </ul>
    ),
  },
];

export default sectionsContentData;
