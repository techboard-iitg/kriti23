import React, { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProblemStatementImage from "../assets/problem-statement.png";
import PSComponent from "../components/ps-component";

const ProblemStatement = () => {
  const cupsName = ["Brainiac Cup", "Brainiac Cup"];
  const [selectedCup, setSelectedCup] = useState(0);
  const allProblemStatements = [
    [
      {
        club: "Aeromodelling",
        problemStatements: [
          {
            title: "Problem Statement is the most interesting ps",
            date: "12/02/23",
            link: "https://www.google.com",
          },
          {
            title: "Problem Statement 1",
            date: "12/02/23",
            link: "https://www.google.com",
          },
          {
            title: "Problem Statement 1",
            date: "12/02/23",
            link: "https://www.google.com",
          },
        ],
      },
      {
        club: "IITG.Ai Brainiac",
        problemStatements: [
          {
            title: "Problem Statement 1",
            date: "12/02/23",
            link: "https://www.google.com",
          },
        ],
      },
    ],
    [
      {
        club: "Aeromodelling",
        problemStatements: [
          {
            title: "Problem Statement 1",
            date: "12/02/23",
            link: "https://www.google.com",
          },
          {
            title: "Problem Statement 1",
            date: "12/02/23",
            link: "https://www.google.com",
          },
          {
            title: "Problem Statement 1",
            date: "12/02/23",
            link: "https://www.google.com",
          },
        ],
      },
      {
        club: "IITG.Ai - Non Brainiac",
        problemStatements: [
          {
            title: "Problem Statement 1",
            date: "12/02/23",
            link: "https://www.google.com",
          },
        ],
      },
    ],
  ];
  return (
    <div className='min-h-screen bg-customBlue-100 flex flex-col'>
      <div className='sticky top-0 z-10'>
        <Navbar />
      </div>
      <div className='flex-1'>
        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0.2)), url(${ProblemStatementImage})`,
          }}
          className='py-20 min-h-max w-screen bg-cover bg-center bg-no-repeat'
        >
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-20'>
            <div className='flex flex-col items-start justify-between'>
              <div>
                <p className='text-[4rem] leading-6 uppercase font-bold text-white'>
                  Brainiac
                </p>
                <p className='text-[4rem] uppercase font-bold text-customOrange-100'>
                  Cup
                </p>
                <p className='text-white text-wrap w-3/6 py-20 text-xl'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, consectetur pariatur ipsam adipisci est debitis sit
                  odit nihil animi fugit. Nam consequuntur saepe amet
                  reprehenderit assumenda ducimus nulla ipsum ipsa nemo
                  temporibus quibusdam, quaerat molestias sit, quod obcaecati
                  praesentium minus nihil? Ex, saepe iste minus quidem magnam
                  voluptatibus ad harum! Labore ad dignissimos debitis,
                  consectetur nobis quaerat qui doloribus neque!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-customBlue-300'>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-black'>
            <div className='flex flex-col items-start justify-between'>
              <div>
                <ul className='flex gap-6 text-white'>
                  {cupsName.map((item, index) => {
                    return (
                      <li key={index} className='text-base py-4'>
                        <button onClick={() => setSelectedCup(index)}>
                          {item}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white shadow-md shadow-gray-300 border-b-2 relative'>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='flex flex-col items-start justify-between'>
              <div className='text-customBlue-300 text-4xl py-3 font-semibold'>
                Problem Statements :-
              </div>
            </div>
          </div>
        </div>
        <div className='bg-customBlue-100 my-10'>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='flex flex-col items-start justify-between ml-5 gap-10'>
              {allProblemStatements[selectedCup].map((item, index) => {
                return (
                  <div key={index} className='flex items-center gap-10'>
                    <div className='text-customBlue-300 text-3xl font-semibold py-4'>
                      {item.club}
                    </div>
                    <ul className='flex gap-6 items-center'>
                      {item.problemStatements.map((problem, index) => {
                        return (
                          <li key={index}>
                            <PSComponent title={problem.title} date={problem.date} link={problem.link} />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProblemStatement;
