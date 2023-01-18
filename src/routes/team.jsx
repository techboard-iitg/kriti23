import React, { useMemo, useState, useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import TeamComponent from "../components/team-component";
import sanityClient from "../client";

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

  const [team, setTeam] = useState();

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "team"]{
                    name,
                    post,
                    img_url,
                    alt,
                    phone_number,
                    email,
                    idx,
                }`
            )
            .then((data) => setTeam(data))
            .catch(console.error);
  }, []);

  function compare(a, b) {
      if (a.idx < b.idx) {
          return -1;
      }
      if (a.idx > b.idx) {
          return 1;
      }
      return 0;
  }

  return (
    <div className='min-h-screen bg-customBlue-100 flex flex-col'>
      <Navbar />
      <div className='flex-1'>
        <div className='my-20 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='relative flex flex-col items-start justify-between'>
            <h1 className="text-3xl customBlue-300 font-bold">
              Team(2022-2023) :-
            </h1>
            <br/>
            <div className='grid justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-24 w-full mb-10'>
              {team && team.sort(compare) && team.map((item) => (
                <TeamComponent key={item.idx} item={item} />
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
