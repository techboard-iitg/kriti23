import React, { useMemo } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import TeamComponent from "../components/team-component";

const Team = () => {
  const fetchedData = [
    {
      image:
        "https://www.shutterstock.com/image-photo/happy-young-indian-woman-blogger-600w-1606121245.jpg",
      first: "General Secretary",
      second: "Technical Board",
      third: "Shrey Jain",
      forth: "1234567890",
      fifth: "loremipsum@iitg.ac.in",
      index: 1,
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/happy-young-indian-woman-blogger-600w-1606121245.jpg",
      first: "General Secretary",
      second: "Technical Board",
      third: "Shrey Jain",
      forth: "1234567890",
      fifth: "loremipsum@iitg.ac.in",
      index: 2,
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/happy-young-indian-woman-blogger-600w-1606121245.jpg",
      first: "General Secretary",
      second: "Technical Board",
      third: "Shrey Jain",
      forth: "1234567890",
      fifth: "loremipsum@iitg.ac.in",
      index: 3,
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/happy-young-indian-woman-blogger-600w-1606121245.jpg",
      first: "General Secretary",
      second: "Technical Board",
      third: "Shrey Jain",
      forth: "1234567890",
      fifth: "loremipsum@iitg.ac.in",
      index: 4,
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/happy-young-indian-woman-blogger-600w-1606121245.jpg",
      first: "General Secretary",
      second: "Technical Board",
      third: "Shrey Jain",
      forth: "1234567890",
      fifth: "loremipsum@iitg.ac.in",
      index: 5,
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/happy-young-indian-woman-blogger-600w-1606121245.jpg",
      first: "General Secretary",
      second: "Technical Board",
      third: "Shrey Jain",
      forth: "1234567890",
      fifth: "loremipsum@iitg.ac.in",
      index: 6,
    },
  ];
  const data = useMemo(() => {
    return fetchedData.sort((a, b) => a.index - b.index);
  }, []);
  return (
    <div className='min-h-screen bg-customBlue-100 flex flex-col'>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className='flex-1'>
        <div className='my-20 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='relative flex flex-col items-start justify-between'>
            <h1 className='text-customBlue-300 text-2xl font-semibold mb-10'>
              Team(2022-2023) :-
            </h1>
            <div className='grid justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-24 w-full mb-10'>
              {data.map((item) => (
                <TeamComponent key={item.index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
