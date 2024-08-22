import { BsPersonWorkspace } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

function Features() {
  const features = [
    {
      name: "Interview Guide",
      description:
        "MentorConnect offers tailored advice, practice tools, and expert tips to help users confidently prepare for and excel in job interviews across various industries. It provides industry-specific guidance, and follow-up strategies to ensure success.",
      icon: BsPersonWorkspace,
    },
    {
      name: "Resume Analysis",
      description:
        "Mentors provides in-depth feedback on your resume, identifying strengths and areas for improvement to enhance its effectiveness. Tailored suggestions help optimize your resume for better alignment with job opportunities.",
      icon: IoDocumentTextOutline,
    },
    {
      name: "Skill Oriented Mentorship",
      description:
        "Skill-Oriented Mentorship focuses on developing specific skills needed to excel in your career. Through personalized guidance, hands-on practice, and targeted learning resources, this mentorship helps you acquire and refine the expertise required for your professional growth.",
      icon: FaReact,
    },
    {
      name: "Schdeule Meeting",
      description:
        "MentorConnect allows you to easily book one-on-one sessions with mentors at a time that suits you. This feature streamlines the process of setting up meetings, ensuring you get timely guidance and support tailored to your needs.",
      icon: SlCalender,
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
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
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Achieve Success from Experience
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to achieve your goals
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Want to start a new dream career? Successfully build your startup?
            Itching to learn high-demand skills? Work smart with an online
            mentor by your side to offer expert advice and guidance to match
            your zeal. Become unstoppable using MentorConnect.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Features;
