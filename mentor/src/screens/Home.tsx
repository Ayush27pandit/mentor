import Navbar from "../components2/Navbar";
import mentee from "../assets/mentee2.svg";
import WordRotate from "@/components/magicui/word-rotate";
import Search from "../components2/Search";
import HyperText from "@/components/magicui/hyper-text";
import PulsatingButton from "@/components/ui/pulsating-button";
import MarqCard from "@/components2/MarqCard";
import Meteors from "@/components/magicui/meteors";
import CardSet from "@/components2/CardSet";
import Features from "@/components2/Features";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

function Home() {
  return (
    <div>
      <div>
        <Meteors number={28} />
        <div>
          <Navbar />
        </div>

        <div className=" gap-4 m-4  grid sm:grid-cols-12">
          <div className="min-h-[100px]  rounded-lg bg-white shadow col-span-7">
            <div className="p-10 pt-10 m-5 flex flex-col gap-4">
              <span className="font-serif text-2xl ">
                Learn a new skill, launch a project, land your dream career
              </span>
              <div className="flex flex-col  gap-3 tracking-tight">
                <div className="flex flex-row items-center ">
                  <h1 className="w-full inline-flex text-6xl font-bold">
                    <span className="font-bold m=2 p-1">1-on-1</span>
                    <WordRotate
                      className="text-6xl pb-1 font-bold text-black dark:text-white ml-3"
                      words={["Marketing", "Full Stack", "Frontend", "Backend"]}
                    />
                  </h1>
                </div>
                <h1 className="text-6xl font-bold ml-2 text-black dark:text-white">
                  Mentorship
                </h1>
              </div>

              <div className="m-4  pt-6 mb-2 flex flex-row gap-3">
                <Search />
                <PulsatingButton>Find Mentor</PulsatingButton>;
              </div>
              <div className="flex flex-col gap-2">
                <ul className="flex flex-row gap-2">
                  <a
                    href="#"
                    className="bg-zinc-200 p-0.5 cursor-pointer   rounded-lg w-max hover:bg-zinc-300"
                  >
                    Frontend Developer
                  </a>
                  <a
                    href="#"
                    className="bg-zinc-200 p-0.5 cursor-pointer  rounded-lg w-max hover:bg-zinc-300"
                  >
                    Full-Stack Developer
                  </a>
                  <a
                    href="#"
                    className="bg-zinc-200 p-0.5 cursor-pointer  rounded-lg w-max hover:bg-zinc-300"
                  >
                    Backend Developer
                  </a>
                </ul>
                <ul className="flex flex-row gap-2">
                  <a
                    href="#"
                    className="bg-zinc-200 p-0.5 cursor-pointer rounded-lg w-max hover:bg-zinc-300"
                  >
                    Marketing Expert
                  </a>
                  <a
                    href="#"
                    className="bg-zinc-200 p-0.5 cursor-pointer  rounded-lg w-max hover:bg-zinc-300"
                  >
                    Startup Expert
                  </a>
                  <a
                    href="#"
                    className="bg-zinc-200 p-0.5 cursor-pointer  rounded-lg w-max hover:bg-zinc-300"
                  >
                    Carrier Counseling
                  </a>
                  <a
                    href="#"
                    className="bg-zinc-200 p-0.5 cursor-pointer  rounded-lg w-max hover:bg-zinc-300"
                  >
                    Resume Guidance
                  </a>
                </ul>
              </div>
            </div>
            <div className=" gap-2 m-2 pl-12 grid sm:grid-cols-12">
              <div className="min-h-[100px]  rounded-lg bg-white shadow col-span-3">
                <HyperText
                  className="text-4xl font-bold text-black dark:text-white"
                  text="1,100+"
                />
                <span className="font-serif bg-zinc-300 p-1 rounded-lg">
                  Available mentors
                </span>
              </div>
              <div className="min-h-[100px]  rounded-lg bg-white shadow col-span-3">
                <HyperText
                  className="text-4xl font-bold text-black dark:text-white"
                  text="50+"
                />
                <span className="font-serif bg-zinc-300 p-1 rounded-lg">
                  FANG Mentors
                </span>
              </div>
              <div className="min-h-[100px]  rounded-lg bg-white shadow col-span-3">
                <HyperText
                  className="text-4xl font-bold text-black dark:text-white"
                  text="2,100+"
                />
                <span className="font-serif bg-zinc-300 p-1 rounded-lg">
                  Matches Made
                </span>
              </div>
            </div>
          </div>

          <div className="min-h-[100px]  rounded-lg col-span-5">
            <img
              src={mentee}
              alt="mentor-with-student pic"
              className="rounded-lg h-svh"
            />
          </div>
        </div>

        <div>
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
            )}
          />
          <div>
            <Features />
          </div>
        </div>

        <div>
          <div className="flex flex-col my-2 py-2 gap-2">
            <p className="text-4xl font-bold self-center text-black dark:text-white">
              Star Mentors
            </p>
            <CardSet />
          </div>
        </div>
        <div>
          <div className="flex flex-col my-2 py-2 gap-2">
            <p className="text-4xl font-bold self-center text-black dark:text-white">
              Feedbacks from Mentees
            </p>
            <MarqCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
