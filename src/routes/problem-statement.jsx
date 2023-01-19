import React, { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProblemStatementImage from "../assets/problem-statement.png";
import PSComponent from "../components/ps-component";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import "./scrollbar-hide.css";
import DownArrow from "../assets/down-arrow.svg";

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
            title: "Problem Statement 2",
            date: "12/02/23",
            link: "https://www.google.com",
          },
          {
            title: "Problem Statement 3",
            date: "12/02/23",
            link: "https://www.google.com",
          },
          {
            title: "Problem Statement 4",
            date: "12/02/23",
            link: "https://www.google.com",
          },
          {
            title: "Problem Statement 5",
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
    <div className='min-h-screen bg-customBlue-100 flex flex-col max-w-[100vw] overflow-hidden'>
      <div className='sticky top-0 z-10'>
        <Navbar />
      </div>
      <div className='flex-1'>
        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0.2)), url(${ProblemStatementImage})`,
          }}
          className='pt-20 pb-2 md:py-20 min-h-max w-screen bg-cover bg-center bg-no-repeat'
        >
          <div className='mx-auto max-w-7xl pl-12 md:pl-6 lg:pl-8 py-2 md:py-20'>
            <div className='flex flex-col items-start justify-between'>
              <div>
                <p className='text-5xl md:text-[4rem] leading-16 md:leading-12 uppercase font-bold text-white'>
                  Brainiac
                </p>
                <p className='text-5xl md:text-[4rem] uppercase font-bold text-customOrange-100'>
                  Cup
                </p>
                <p className='text-white text-wrap w-4/6 md:w-3/6 py-2 md:py-20 md:text-xl'>
                  This Module is needed to brainstorm and pull the ideas
                  together quickly. While most of brainstorming Events aren't
                  new, more frequent and disciplined use of them can greatly
                  enhance the possibilities to win.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-customBlue-300'>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-black'>
            <div className='flex flex-col items-start justify-between'>
              <div>
                <ul className='flex gap-6 text-white items-center'>
                  {cupsName.map((item, index) => {
                    if (index !== selectedCup)
                      return (
                        <li key={index} className='text-base py-4'>
                          <button onClick={() => setSelectedCup(index)}>
                            {item}
                          </button>
                        </li>
                      );
                    else
                      return (
                        <li
                          key={index}
                          className='text-base py-4 bg-customBlue-200 px-12'
                        >
                          <img src={DownArrow} alt='down-arrow' />
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
              <div className='text-customBlue-300 text-4xl py-3 sm:ml-0 ml-4 font-semibold'>
                Problem Statements :-
              </div>
            </div>
          </div>
        </div>
        <div className='bg-customBlue-100 my-10 max-w-[100vw]'>
          <div className='sm:ml-32 ml-4 px-2 sm:px-6 lg:px-8'>
            <div className='flex flex-col items-start justify-between ml-5 gap-10 overflow-hidden'>
              {allProblemStatements[selectedCup].map((item, index) => {
                return (
                  <div
                    key={index}
                    className='flex items-center gap-10 justify-between w-full relative'
                  >
                    <div className='text-customBlue-300 text-3xl font-semibold py-4'>
                      {item.club}
                    </div>
                    <ul
                      className='flex gap-6 items-center overflow-x-scroll flex-1 scrollbar-hide'
                      id={`scrollbar-${index}`}
                      onScroll={(e) => {
                        if (
                          Math.abs(
                            e.currentTarget.offsetWidth +
                              e.currentTarget.scrollLeft -
                              e.currentTarget.scrollWidth
                          ) < 10
                        ) {
                          document.getElementById(
                            `scrollbutton-${index}`
                          ).style.opacity = 0;
                          setTimeout(() => {
                            document.getElementById(
                              `scrollbutton-${index}`
                            ).style.display = "none";
                          }, 150);
                        } else {
                          document.getElementById(
                            `scrollbutton-${index}`
                          ).style.display = "flex";
                          document.getElementById(
                            `scrollbutton-${index}`
                          ).style.opacity = 100;
                        }
                      }}
                    >
                      {item.problemStatements.map((problem, index) => {
                        return (
                          <li key={index}>
                            <PSComponent
                              title={problem.title}
                              date={problem.date}
                              link={problem.link}
                            />
                          </li>
                        );
                      })}
                    </ul>
                    <div
                      id={`scrollbutton-${index}`}
                      className='bg-gradient-to-r from-transparent to-customBlue-100 h-[10.3rem] w-24 flex items-center justify-end absolute right-0 hover:cursor-pointer transition-all'
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(
                          `scrollbar-${index}`
                        ).scrollLeft += 400;
                      }}
                    >
                      <ChevronRightIcon
                        fontSize={"10rem"}
                        height={"5rem"}
                        preserveAspectRatio={"none"}
                        color={"#4A6CB2"}
                        width={"3rem"}
                      />
                    </div>
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
