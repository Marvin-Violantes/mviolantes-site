// About.tsx
export default function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "React",
    "Next.js",
    "Vue.js",
    "Nuxt",
    "Tailwind CSS",
    "MongoDB",
    "SQL DB",
    "NoSQL DB",
    "Google Cloud Platform",
    "GitHub",
    "Power BI",
    "API Design",
    "Agile/Scrum",
  ];

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center bg-gray-light border-b border-gray-200 px-6 py-12"
    >
      <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-navy via-peach to-mocha bg-clip-text text-transparent">
        About Me
      </h1>

      <p className="max-w-5xl text-center text-lg text-navy mb-12">
        I design and build solutions that scale, from tools that help one person
        in their daily work to applications that support entire organizations. I
        hold a B.S. in Computer Science from the University of Arkansas, where I
        also began my M.S. in Computer Science. In January, I will continue my
        M.S. in Computer Science at the Georgia Institute of Technology while
        working full time. My goal is to use technology to solve problems in
        ways that make people's lives easier and more efficient.
      </p>

      <div className="w-full max-w-4xl text-center mb-12 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-navy mb-6">
          Technologies & Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-mist text-slate rounded-full text-sm font-medium shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
