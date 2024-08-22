import React from "react";
import Card from "./Card";

const App: React.FC = () => {
  const cardData = [
    {
      image: "../assets/striver.jpg",
      title: "Striver",
      description: "SWE-III @ Google | Building - takeUforward | 600K+ on YT",
      tags: ["DSA", "Competitive Programming", "Interview Prep"],
    },
    {
      image: "/img/forest.jpg",
      title: "Harkirat Singh",
      description: "Analyst @ Goldman Sachs|Intern @ Amazon | 100xDev Founder",
      tags: ["Full-Stack ", "Blockchain", "Remote Job"],
    },
    {
      image: "/img/beach.jpg",
      title: "Urvisha Jain",
      description: " SDE @flipkart| Prev: @Amazon ,@urbancompany_UC| DSA ",
      tags: ["DSA ", "Competitive Programming", "Tester"],
    },
  ];

  return (
    <div className="flex flex-wrap justify-center space-x-4">
      {cardData.map((data, index) => (
        <Card
          key={index}
          image={data.image}
          title={data.title}
          description={data.description}
          tags={data.tags}
        />
      ))}
    </div>
  );
};

export default App;
