import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProblemStatementImage from "../assets/problem-statement.png";
import "./scrollbar-hide.css";
import DownArrow from "../assets/down-arrow.svg";
import sanityClient from "../client";
import PSCup from "../components/ps-cup";

const ProblemStatement = () => {
  const cupsName = ["Brainiac Cup", "Visionary Cup", "Da Vinci Cup", "Business Cup"];
  const [selectedCup, setSelectedCup] = useState(0);
  const [brainiac, setBrainiac] = useState();
  const [daVinci, setDaVinci] = useState();
  const [business, setBusiness] = useState();
  const [visionary, setVisionary] = useState();



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
      sanityClient
        .fetch(
            `*[_type == "visionary_cup"]{
                club_name,
                hoste_points,
                ps_link,
                ps_name,
                ps_points,
                ps_date,
            }`
        )
        .then((data) => setVisionary(data))
        .catch(console.error);

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
  }, []);

  return (
    <div className='min-h-screen bg-customBlue-100 flex flex-col max-w-[100vw] overflow-hidden'>
      <div className='sticky top-0 z-10'>
        <Navbar />
      </div>
      {console.log(brainiac)}
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
                  {selectedCup == 1 && "Visionary Cup"}
                  {selectedCup == 2 && "Da Vinci Cup"}
                  {selectedCup == 3 && "Business Cup"}
                </p>
                <p className='text-5xl md:text-[4rem] uppercase font-bold text-customOrange-100'>
                  Cup
                </p>
                <p className='text-white text-wrap w-4/6 md:w-3/6 py-2 md:py-20 md:text-xl'>
                  {selectedCup == 0 && "This Module is needed to brainstorm and pull the ideas together quickly. While most of brainstorming Events are not new, more frequent and disciplined use of them can greatly enhance the possibilities to win."}
                  {selectedCup == 1 && "This Module is needed to brainstorm - Visionary Cup"}
                  {selectedCup == 2 && "This Module is needed to brainstorm - Da Vinci Cup"}
                  {selectedCup == 3 && "This Module is needed to brainstorm - Business Cup"}
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
            {selectedCup ==0 && brainiac && 
              brainiac.map((item,index)=>{
                return(
                  <PSCup item={item} index={index} />
                )
              })
            }
            {selectedCup ==1 && visionary && 
              visionary.map((item,index)=>{
                return(
                  <PSCup item={item} index={index} />
                )
              })
            }
            {selectedCup ==2 && daVinci && 
              daVinci.map((item,index)=>{
                return(
                  <PSCup item={item} index={index} />
                )
              })
            }
            {selectedCup ==3 && business && 
              business.map((item,index)=>{
                return(
                  <PSCup item={item} index={index} />
                )
              })
            }
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProblemStatement;
