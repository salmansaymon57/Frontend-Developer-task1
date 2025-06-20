import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  const skills = [
    {
      title: "HTML & CSS",
      description: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
    {
      title: "Javascript",
      description: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
    {
      title: "Webflow",
      description: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
  ];

  const previouslyWorkedOn = [
    "awwwards",
    "CSS Winner",
    "Thoughtworks",
    "Autodesk",
    "Facebook",
    "CSS Design Awards",
  ];

  const workProcess = [
    {
      title: "Discovery",
      description:
        "We start every new client interaction with an in-depth discovery call where we get to know each other.",
    },
    {
      title: "Strategy",
      description:
        "Every end-to-end project of ours begins with a bespoke pre-build strat. From brand ID consultation to in-depth ccxi reviews we’re here to set the stage for success.",
    },
    {
      title: "Design",
      description:
        "After we have a comprehensive understanding of your brand, we’ll be ready to move onto design.",
    },
    {
      title: "Build",
      description:
        "Whether we’ve just finished designing your new site or you’re handing off finished designs for us to develop in Webflow, we’re here to apply our trusted development process to your project.",
    },
  ];

  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <section id="skills" className="py-12 px-4 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
            My Extensive List of Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <ProjectCard
                key={index}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
          <div className="flex justify-center mt-6 space-x-4">
            <button className="text-green-500 hover:text-green-300">←</button>
            <button className="text-green-500 hover:text-green-300">→</button>
          </div>
        </section>
        <section
          id="experience"
          className="py-12 px-4 bg-gradient-to-r from-green-100 to-transparent"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
              I've been <span className="text-green-500">Developing</span>{" "}
              Websites since 2013
            </h2>
            <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto text-gray-300">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other and recommend the best course
              of action.
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Previously Worked On
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {previouslyWorkedOn.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-xl px-4 py-2 text-white hover:bg-gray-700 transition shadow-lg"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="work-process" className="py-12 px-4 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
            My Work Process
          </h2>
          <div className="space-y-6">
            {workProcess.map((step, index) => (
              <div key={index} className="flex items-center space-x-4">
                <button className="bg-green-500 text-black rounded-full w-16 h-16 flex items-center justify-center hover:bg-opacity-80 shadow-lg">
                  {step.title}
                </button>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section
          id="contact"
          className="py-12 px-4 bg-gradient-to-r from-green-100 to-transparent"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Interested in{" "}
              <span className="text-green-500">work together?</span>
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-300">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other.
            </p>
            <button className="bg-green-500 text-black rounded-full px-6 py-3 mb-6 hover:bg-opacity-80 shadow-lg">
              Schedule a Call
            </button>
            <div className="bg-gray-800 rounded-xl p-6 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-2 mb-2 bg-gray-700 text-white rounded-lg"
              />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 mb-2 bg-gray-700 text-white rounded-lg"
              />
              <textarea
                placeholder="Describe your project"
                className="w-full p-2 bg-gray-700 text-white rounded-lg"
              ></textarea>
              <div className="flex justify-center space-x-4 mt-4">
                <button className="bg-green-500 text-black rounded-full px-4 py-2 hover:bg-opacity-80 shadow-lg">
                  Send
                </button>
                <button className="bg-gray-700 text-white rounded-full px-4 py-2 hover:bg-gray-600 shadow-lg">
                  Contact me
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
