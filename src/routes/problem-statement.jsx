import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProblemStatementImage from "../assets/problem-statement.png";
import "./scrollbar-hide.css";
import DownArrow from "../assets/down-arrow.svg";
import sanityClient from "../client";
import PSCup from "../components/ps-cup";
import { useMemo } from "react";

const ProblemStatement = () => {
  const cupsName = ["Brainiac Cup", "Da Vinci Cup", "Business Cup"];
  const [selectedCup, setSelectedCup] = useState(0);
  const [brainiac, setBrainiac] = useState();
  const [daVinci, setDaVinci] = useState();
  const [business, setBusiness] = useState();
  const [visionary, setVisionary] = useState();
  const [kritiResult, setKritiResult] = useState([])



  useEffect(() => {
    sanityClient
        .fetch(
            `*[_type == "brainiac_cup"]{
                club_name,
                hoste_points,
                ps_link,
                ps_name,
                ps_points,
                ps_date,
            }`
        )
        .then((data) => setBrainiac(data))
        .catch(console.error);
      sanityClient
        .fetch(
            `*[_type == "business_cup"]{
                club_name,
                hoste_points,
                ps_link,
                ps_name,
                ps_points,
                ps_date,
            }`
        )
        .then((data) => setBusiness(data))
        .catch(console.error);
      // sanityClient
      //   .fetch(
      //       `*[_type == "visionary_cup"]{
      //           club_name,
      //           hoste_points,
      //           ps_link,
      //           ps_name,
      //           ps_points,
      //           ps_date,
      //       }`
      //   )
      //   .then((data) => setVisionary(data))
      //   .catch(console.error);

      sanityClient
        .fetch(
            `*[_type == "daVinci_cup"]{
                club_name,
                hoste_points,
                ps_link,
                ps_name,
                ps_points,
                ps_date,
            }`
        )
        .then((data) => setDaVinci(data))
        .catch(console.error);
        sanityClient
            .fetch(
                `*[_type == "ps_points_table"]{
                    ps_name,
                    points,
                }`
            )
            .then((data) => setKritiResult(data))
            .catch(console.error);
  }, []);


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
                  {selectedCup == 0 && "Brainiac"}
                  {/* {selectedCup == 1 && "Visionary Cup"} */}
                  {selectedCup == 1 && "Da Vinci Cup"}
                  {selectedCup == 2 && "Business Cup"}
                </p>
                <p className='text-5xl md:text-[4rem] uppercase font-bold text-customOrange-100'>
                  Cup
                </p>
                <p className='text-white text-wrap w-4/6 md:w-3/6 py-2 md:py-20 md:text-xl'>
                  {selectedCup == 0 &&
                    "This Module is needed to brainstorm and pull the ideas together quickly. While most brainstorming Events aren't new, more frequent and disciplined use of them can greatly enhance the possibilities to win. This includes Quizzes, Hackathons, CP Contests.  Clubs - Acumen, Coding Club, iitg.ai, Astronomy."}
                  {/* {selectedCup == 1 && "This Module is needed to brainstorm - Visionary Cup"} */}
                  {selectedCup == 1 &&
                    "This Module comprises all events related to Hardware PS including problems which includes Hardware prototypes. The main source for PS was Robotics, Electronics, Automobile, Aeromodelling Club, 4i Labs and Game-Dev. This is one of the most important Cups among all cups, as these cups come with lots of points."}
                  {selectedCup == 2 &&
                    "The Creative Business Cup Innovation Challenges welcomes new ideas, presents your new and innovative ideas and participates in the kriti. This is also a great opportunity to learn for the new rising Hostels in other word, as there are lots of opportunities in this module everyone is welcome to join! and grab as many points as you can."}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-customBlue-300'>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-black'>
            <div className='flex flex-col items-start justify-between'>
              <div>
                <ul className='flex gap-6 text-white mx-4 h-full items-center'>
                  {cupsName.map((item, index) => {
                    if (index !== selectedCup)
                      return (
                        <li key={index} className='md:text-base text-sm md:py-4 py-2 h-full flex items-center'>
                          <button onClick={() => setSelectedCup(index)}>
                            {item}
                          </button>
                        </li>
                      );
                    else
                      return (
                        <li
                          key={index}
                          className='text-base md:py-4 py-2 bg-customBlue-200 md:px-12 px-8 h-full flex items-center'
                        >
                          <img src={DownArrow} alt='down-arrow' className='h-6 self-center' />
                        </li>
                      );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white shadow-md shadow-gray-400 border-b-2 relative'>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='flex flex-col items-start justify-between'>
              <div className='text-customBlue-300 md:text-3xl text-xl py-3 sm:ml-0 ml-4 font-semibold'>
                Problem Statements :-
              </div>
            </div>
          </div>
        </div>
        <div className='bg-customBlue-100 my-10 max-w-[100vw]'>
          <div className='md:ml-4 -ml-2 px-2 sm:px-6 lg:px-8'>
            <div className='flex flex-col items-start justify-between ml-5 gap-10 overflow-hidden'>
              {selectedCup == 0 &&
                brainiac &&
                brainiac.map((item, index) => {
                  return <PSCup item={item} index={index} kritiResult={kritiResult} />;
                })}
              {/* {selectedCup ==1 && visionary && 
              visionary.map((item,index)=>{
                return(
                  <PSCup item={item} index={index} />
                )
              })
            } */}
              {selectedCup == 1 &&
                daVinci &&
                daVinci.map((item, index) => {
                  return <PSCup item={item} index={index} kritiResult={kritiResult}/>;
                })}
              {selectedCup == 2 &&
                business &&
                business.map((item, index) => {
                  return <PSCup item={item} index={index} kritiResult={kritiResult} />;
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
