import React, { Fragment, useState, useEffect } from "react";
import sanityClient from "../client";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import moment from 'moment';
import homeImage from "../assets/Frame1.jpg";
import KritiLogo from "../assets/kriti-logo.svg"
import TechboardLogo from "../assets/techboard-logo.svg"
import { Parallax, Background } from "react-parallax";
import PSHomeComponent from "../components/ps-home-component ";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import "./scrollbar-hide.css";
import DownArrow from "../assets/down-arrow.svg";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

import BusinessLogo from "../assets/business.jpeg";
import BrainiacLogo from "../assets/brainiac.png";
import DaVinciLogo from "../assets/daVinci.jpeg";
import { useMemo } from "react";

export default function Home() {

    const [hostels, setHostels] = useState();
    const [schedule, setSchedule] = useState();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [open, setOpen] = useState(1);

    useEffect(() =>{
        const changeWidth = () => {
        setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    },[])

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
      };

    const data = [
        {
            image: BrainiacLogo,
            title: "Brainiac Cup",
            desc: "This Module is needed to brainstorm and pull the ideas together quickly. While most brainstorming Events aren't new, more frequent and disciplined use of them can greatly enhance the possibilities to win. This includes Quizzes, Hackathons, CP Contests.  Clubs - Acumen, Coding Club, iitg.ai, Astronomy.",
            link: "/problem-statement"
        },
        {
            image: DaVinciLogo,
            title: "Da Vinci Cup",
            desc: "The Creative Business Cup Innovation Challenges welcomes new ideas, presents your new and innovative ideas and participates in the kriti. This is also a great opportunity to learn for the new rising Hostels in other word, as there are lots of opportunities in this module everyone is welcome to join! and grab as many points as you can.",
            link: "/problem-statement"
        },
        {
            image: BusinessLogo,
            title: "Business Cup",
            desc: "This Module comprises all events related to Hardware PS including problems which includes Hardware prototypes. The main source for PS was Robotics, Electronics, Automobile, Aeromodelling Club, 4i Labs and Game-Dev. This is one of the most important Cups among all cups, as these cups come with lots of points.",
            link: "/problem-statement"
        },
    ]

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "points_table"]{
                    hostel_name,
                    hostel_points,
                }`
            )
            .then((data) => setHostels(data))
            .catch(console.error);
        sanityClient
        .fetch(
            `*[_type == "events"]{
                event_name,
                event_date,
                event_cup,
                event_points,
            }`
        )
        .then((data) => setSchedule(data))
        .catch(console.error);
    }, []);

    const eventData = useMemo(()=>{
        if(!schedule) return [];
        console.log("HEllo")
        return schedule.filter((each)=>{
            const x = new Date(each.event_date)
            const y = new Date()
            y.setHours(0,0,0,0);
            console.log(x , y);
            return moment(x)>=moment(y);
            // console.log(Date(moment(each.event_date).format("DD/MM/YYYY")) , Date(moment(Date.now()).format("DD/MM/YYYY")));
            // console.log(moment(each.event_date), moment(moment().format("YYYY-MM-DD")))
            // return moment(each.event_date) >= moment(moment().format("DD/MM/YYYY").toString());
        });
    }, [schedule])

    function compare(a, b) {
        if (a.hostel_points > b.hostel_points) {
            return -1;  
        }
        if (a.hostel_points < b.hostel_points) {
            return 1;
        }
        return 0;
    }

    function compare2( a, b ) {
        if ( a.event_date < b.event_date){
          return -1;
        }
        if ( a.event_date > b.event_date){
          return 1;
        }
        return 0;
    }

    const styles= (ind) => {
        var col = '';
        if(ind == 0){
            col = '#F9D202'
        }
        else if(ind == 1){
            col = '#D2D2D2'
        }
        else if(ind == 2){
            col = '#B7845F'
        }
        return{
            display: 'inline-block', 
            // width: '10px', 
            height: '100%', 
            position: 'absolute',
            background: (col == '') ? 'inherit': col
        }
    }

    const insideStyles = {
        padding: 20,
        position: "absolute",
        top: "28%",
        left: "10%",
        fontWeight:'bold',
        color:'white',
        fontSize: '1rem'
    };

    return (
      <div className=' bg-customBlue-100 flex flex-col'>
        .
        <div>
          <Parallax
            bgImage={homeImage}
            strength={500}
            style={{ marginTop: "-33px", height: "102vh", width: "98.88vw" }}
          >
            <div style={{ height: 500 }}>
              <div style={insideStyles}>
                <img src={KritiLogo} style={{ height: "250px" }} alt='kriti' />
                Inter-Hostel competition organised by{" "}
                <span className='font-bold text-customOrange-100'>
                  Techboard IIT Guwahati
                </span>
              </div>
            </div>
          </Parallax>
        </div>
        {/* <img style={{marginBottom:'-30px', height:'100vh', width:'50000px'}}
            src={homeImage}
            alt='techboard'
            /> */}
        <hr
          className='border-customBlue-200 border-b-4'
          style={{ zIndex: "1" }}
        />
        <Navbar />
        <div style={{ margin: "3%" }}>
          {screenWidth > 750 && (
            <div className='flex'>
              <img
                src={TechboardLogo}
                style={{ height: "25vh", marginRight: "3%" }}
              />
              <div>
                <h1 className='text-4xl customBlue-300 font-bold'>ABOUT:</h1>
                <br />
                <h3 className='text-1xl customBlue-300 font-bold'>
                  14 hostels, 30 days, 1 title!
                </h3>
                <p>
                  The inter hostel technical and management festival where nous
                  and creativity are ones only saviors. With a conflux of
                  competitions from Robotics, Product Design, Finance and
                  Management, Marketing Strategy, Quizzes, Astronomy and Gaming,
                  this fest has been successful in uniting people from each year
                  and department, besides inculcating the hostel spirit. The
                  hostel which ranks first after considering the performances in
                  each event is tagged as the:
                  <br />
                  <span className='text-customOrange-100 font-bold'>
                    "Kriti Champions"
                  </span>
                </p>
              </div>
            </div>
          )}

          {screenWidth <= 750 && (
            <div
              style={{
                diplay: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <div>
                <h1 className='text-4xl customBlue-300 font-bold'>ABOUT:</h1>
                <br />
                <h3 className='text-1xl customBlue-300 font-bold'>
                  14 hostels, 30 days, 1 title!
                </h3>
                <p>
                  The inter hostel technical and management festival where nous
                  and creativity are ones only saviors. With a conflux of
                  competitions from Robotics, Product Design, Finance and
                  Management, Marketing Strategy, Quizzes, Astronomy and Gaming,
                  this fest has been successful in uniting people from each year
                  and department, besides inculcating the hostel spirit. The
                  hostel which ranks first after considering the performances in
                  each event is tagged as the:
                  <br />
                  <span className='text-customOrange-100 font-bold'>
                    "Kriti Champions"
                  </span>
                </p>
              </div>
            </div>
          )}
          <br />
          <br />
          <br />
          <h1 className='text-3xl customBlue-300 font-bold'>Upcoming Events</h1>
          <br />
          <table
            style={{
              borderStyle: "solid",
              borderColor: "#032538",
              borderWidth: 2,
              borderRadius: 1,
            }}
            className='min-w-full table-auto'
          >
            <thead style={{ backgroundColor: "#032538", color: "#EFEFEF" }}>
              <tr className='text-sm md:text-base font-bold text-left uppercase'>
                <th scope='col' className='px-3 md:px-6 py-4 '>
                  Event Name
                </th>
                <th scope='col' className='px-3 md:px-6 py-4 '>
                  Date
                </th>
                <th scope='col' className='px-3 md:px-6 py-4 '>
                  Cup
                </th>
                <th scope='col' className='py-4 '>
                  Points
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-customBlue-200'>
              {eventData &&
                eventData.sort(compare2) &&
                eventData.slice(0, 3).map((ps_event, ind) => (
                  <tr
                    style={{
                      backgroundColor: ind % 2 == 0 ? "#FDFEFF" : "#EFEFEF",
                    }}
                    className='text-xs md:text-base font-medium text-customBlue-300 whitespace-nowrap'
                  >
                    <td className=' px-3 md:px-6 py-4 max-w-[5rem] whitespace-normal'>
                      {ps_event.event_name}
                    </td>
                    <td className=' px-3 md:px-6 py-4'>
                      {moment(ps_event.event_date).format("Do MMM YY")}
                    </td>
                    <td className=' px-3 md:px-6 py-4'>{ps_event.event_cup}</td>
                    <td className='py-4'>{ps_event.event_points}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <br />
          <Link
            to='/schedule'
            style={{ color: "#4A6CB2", textDecoration: "underline" }}
          >
            View All
          </Link>
          <br />
          <br />
          <br />
          <h1 className='text-3xl customBlue-300 font-bold'>Points Table</h1>
          <br />
          <table
            style={{
              borderStyle: "solid",
              borderColor: "#032538",
              borderWidth: 2,
              borderRadius: 1,
            }}
            className='min-w-full'
          >
            <thead style={{ backgroundColor: "#032538", color: "#EFEFEF" }}>
              <tr>
                <th
                  scope='col'
                  className='px-3 md:px-6 py-4 text-sm md:text-base font-bold text-left uppercase '
                >
                  Position
                </th>
                <th
                  scope='col'
                  className='px-3 md:px-6 py-4 text-sm md:text-base font-bold text-left uppercase '
                >
                  Hostel Name
                </th>
                <th
                  scope='col'
                  className='py-4 text-sm md:text-base font-bold text-left uppercase '
                >
                  Points
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-customBlue-200'>
              {hostels &&
                hostels.sort(compare) &&
                hostels.slice(0,3).map((hostel, ind) => (
                  <tr
                    style={{
                      backgroundColor: ind % 2 == 0 ? "#FDFEFF" : "#EFEFEF",
                    }}
                  >
                    <td className='px-3 md:px-6 py-4 text-xs md:text-base font-medium text-customBlue-300 relative whitespace-nowrap'>
                      <span>{ind + 1}</span>
                      <div style={styles(ind)} className='top-0 left-0 w-[5px] md:w-[10px]' />
                    </td>
                    <td className='px-3 md:px-6 py-4 text-xs md:text-base font-medium text-customBlue-300 whitespace-nowrap'>
                      {hostel.hostel_name}
                    </td>
                    <td className='px-3 md:px-6 py-4 text-xs md:text-base font-medium text-customBlue-300 whitespace-nowrap'>
                      {hostel.hostel_points}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <br />
          <Link
            to='/points-table'
            style={{ color: "#4A6CB2", textDecoration: "underline" }}
          >
            View All
          </Link>
          <br />
          <br />
          <br />
          {screenWidth > 950 && (
            <div className='flex items-center gap-10 justify-between w-full relative'>
              <ul
                className='flex gap-6 items-center overflow-x-scroll flex-1 scrollbar-hide'
                id='scrollbar'
                onScroll={(e) => {
                  if (
                    Math.abs(
                      e.currentTarget.offsetWidth +
                        e.currentTarget.scrollLeft -
                        e.currentTarget.scrollWidth
                    ) < 10
                  ) {
                    document.getElementById("scrollbutton").style.opacity = 0;
                    setTimeout(() => {
                      document.getElementById("scrollbutton").style.display =
                        "none";
                    }, 150);
                  } else {
                    document.getElementById("scrollbutton").style.display =
                      "flex";
                    document.getElementById("scrollbutton").style.opacity = 100;
                  }
                }}
              >
                {data.map((item, index) => {
                  return (
                    <li key={index}>
                      <PSHomeComponent item={item} key={index} />
                    </li>
                  );
                })}
              </ul>
              <div
                id='scrollbutton'
                className='bg-gradient-to-r from-transparent to-customBlue-100 h-[10.3rem] w-24 flex items-center justify-end absolute right-0 hover:cursor-pointer transition-all'
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("scrollbar").scrollLeft += 400;
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
          )}
          {screenWidth <= 950 && (
            <Fragment>
              <Accordion open={open === 1} style={{ backgroundColor: "white" }}>
                <AccordionHeader
                  style={{
                    backgroundColor: "#032538",
                    color: "white",
                    padding: "3%",
                  }}
                  onClick={() => handleOpen(1)}
                >
                  Brainiac Cup
                </AccordionHeader>
                <AccordionBody style={{ padding: "3%" }}>
                  This Module is needed to brainstorm and pull the ideas
                  together quickly. While most brainstorming Events aren't new,
                  more frequent and disciplined use of them can greatly enhance
                  the possibilities to win. This includes Quizzes, Hackathons,
                  CP Contests. Clubs - Acumen, Coding Club, iitg.ai, Astronomy.
                  <br />
                  <Link
                    to='/problem-statement'
                    style={{ color: "#4A6CB2", textDecoration: "underline" }}
                  >
                    Learn More
                  </Link>
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2} style={{ backgroundColor: "white" }}>
                <AccordionHeader
                  style={{
                    backgroundColor: "#032538",
                    color: "white",
                    padding: "3%",
                  }}
                  onClick={() => handleOpen(2)}
                >
                  Da Vinci Cup
                </AccordionHeader>
                <AccordionBody style={{ padding: "3%" }}>
                  This Module comprises all events related to Hardware PS
                  including problems which includes Hardware prototypes. The
                  main source for PS was Robotics, Electronics, Automobile,
                  Aeromodelling Club, 4i Labs and Game-Dev. This is one of the
                  most important Cups among all cups, as these cups come with
                  lots of points.
                  <br />
                  <Link
                    to='/problem-statement'
                    style={{ color: "#4A6CB2", textDecoration: "underline" }}
                  >
                    Learn More
                  </Link>
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3} style={{ backgroundColor: "white" }}>
                <AccordionHeader
                  style={{
                    backgroundColor: "#032538",
                    color: "white",
                    padding: "3%",
                  }}
                  onClick={() => handleOpen(3)}
                >
                  Business Cup
                </AccordionHeader>
                <AccordionBody style={{ padding: "3%" }}>
                  The Creative Business Cup Innovation Challenges welcomes new
                  ideas, presents your new and innovative ideas and participates
                  in the kriti. This is also a great opportunity to learn for
                  the new rising Hostels in other word, as there are lots of
                  opportunities in this module everyone is welcome to join! and
                  grab as many points as you can.
                  <br />
                  <Link
                    to='/problem-statement'
                    style={{ color: "#4A6CB2", textDecoration: "underline" }}
                  >
                    Learn More
                  </Link>
                </AccordionBody>
              </Accordion>
            </Fragment>
          )}
        </div>
        <Footer />
      </div>
    );
}