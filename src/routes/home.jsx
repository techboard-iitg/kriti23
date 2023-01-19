import React, { useState, useEffect } from "react";
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

export default function Home() {

    const [hostels, setHostels] = useState();
    const [schedule, setSchedule] = useState();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() =>{
        const changeWidth = () => {
        setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    },[])

    const data = [
        {
            image: "https://www.shutterstock.com/image-photo/closeup-photo-amazing-short-hairdo-600w-1617540484.jpg",
            title: "Hostel 1",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            link: "/hostel1"
        }
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
            width: '10px', 
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
        <div className=' bg-customBlue-100 flex flex-col'>.
            <div>
                <Parallax bgImage={homeImage} strength={500} style={{marginTop:'-33px', height:'102vh', width:'98.88vw'}}>
                <div style={{ height: 500 }}>
                    <div style={insideStyles}>
                        <img src = {KritiLogo} style={{height:'250px'}} alt='kriti' />
                        Inter-Hostel competetion organised by <span className="font-bold text-customOrange-100">Techboard IIT Guwahati</span>
                    </div>
                </div>
                </Parallax>
            </div>
            {/* <img style={{marginBottom:'-30px', height:'100vh', width:'50000px'}}
            src={homeImage}
            alt='techboard'
            /> */}
            <hr className="border-customBlue-200 border-b-4" style={{zIndex:'1'}} />
            <Navbar />
            <div style={{ margin: "3%" }} >
                {(screenWidth > 750) &&
                <div className="flex">
                    <img src={TechboardLogo} style={{height:'25vh', marginRight:'3%'}}/>
                    <div>
                        <h1 className="text-4xl customBlue-300 font-bold">ABOUT:</h1>
                        <br/>
                        <h3 className="text-1xl customBlue-300 font-bold">13 hostels, 30 days, 1 title!</h3>
                        <p>The inter hostel technical and management festival where nous and creativity are ones only saviors. 
                            With a conflux of competitions from Robotics, Product Design, Finance and Management, Marketing Strategy, Quizzes, Astronomy and Gaming, 
                            this fest has been successful in uniting people from each year and department, besides inculcating the hostel spirit. 
                            The hostel which ranks first after considering the performances in each event is tagged as the:<br/>
                            <span className="text-customOrange-100 font-bold">"Kriti Champions"</span>
                        </p>
                    </div>
                </div>
                }

                {(screenWidth <= 750) &&
                <div style={{diplay:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
                    <div>
                        <h1 className="text-4xl customBlue-300 font-bold">ABOUT:</h1>
                        <br/>
                        <h3 className="text-1xl customBlue-300 font-bold">13 hostels, 30 days, 1 title!</h3>
                        <p>The inter hostel technical and management festival where nous and creativity are ones only saviors. 
                            With a conflux of competitions from Robotics, Product Design, Finance and Management, Marketing Strategy, Quizzes, Astronomy and Gaming, 
                            this fest has been successful in uniting people from each year and department, besides inculcating the hostel spirit. 
                            The hostel which ranks first after considering the performances in each event is tagged as the:<br/>
                            <span className="text-customOrange-100 font-bold">"Kriti Champions"</span>
                        </p>
                    </div>
                </div>
                }
                <br/><br/><br/>
                <h1 className="text-3xl customBlue-300 font-bold">Upcoming Events</h1>
                <br/>
                <table style={{borderStyle: "solid", borderColor: "#032538", borderWidth:2, borderRadius: 1}} className="min-w-full">
                <thead style={{backgroundColor: "#032538", color: "#EFEFEF"}}>
                    <tr>
                    <th scope="col" className="px-6 py-4 text-base font-bold text-left uppercase ">
                        Event Name
                    </th>
                    <th scope="col"className="px-6 py-4 text-base font-bold text-left uppercase ">
                        Date
                    </th>
                    <th scope="col"className="px-6 py-4 text-base font-bold text-left uppercase ">
                        Cup
                    </th>
                    <th scope="col"className="py-4 text-base font-bold text-left uppercase ">
                        Points
                    </th>
                    </tr>
                    
                </thead>
                <tbody  className="divide-y divide-customBlue-200">

                    {schedule && 
                    schedule.sort(compare2) && 
                    schedule.map( (ps_event, ind) => (
                        <tr style={{ backgroundColor: (ind % 2 == 0) ? '#FDFEFF' : '#EFEFEF' }}>
                        <td className="px-6 py-4 text-base font-medium text-customBlue-300 whitespace-nowrap">{ps_event.event_name}</td>
                        <td className="px-6 py-4 text-base font-medium text-customBlue-300 whitespace-nowrap">{moment(ps_event.event_date).format("Do MMM YY")}</td>
                        <td className="px-6 py-4 text-base font-medium text-customBlue-300 whitespace-nowrap">{ps_event.event_cup}</td>
                        <td className="py-4 text-base font-medium text-customBlue-300 whitespace-nowrap">{ps_event.event_points}</td>
                        </tr>                  
                    ))
                    }
                    
                </tbody>
                </table>
                <br/>
                <Link to="/schedule" style={{color: '#4A6CB2', textDecoration:'underline'}}>
                    View All
                </Link>
                <br/><br/><br/>
                <h1 className="text-3xl customBlue-300 font-bold">Points Table</h1>
                <br />
                <table style={{ borderStyle: "solid", borderColor: "#032538", borderWidth: 2, borderRadius: 1 }} className="min-w-full">
                    <thead style={{ backgroundColor: "#032538", color: "#EFEFEF" }}>
                        <tr>
                            <th scope="col" className="px-6 py-4 text-base font-bold text-left uppercase ">
                                Position
                            </th>
                            <th scope="col" className="px-6 py-4 text-base font-bold text-left uppercase ">
                                Hostel Name
                            </th>
                            <th scope="col" className="py-4 text-base font-bold text-left uppercase ">
                                Points
                            </th>
                        </tr>

                    </thead>
                    <tbody className="divide-y divide-customBlue-200">

                        {hostels &&
                            hostels.sort(compare) &&
                            hostels.slice(0,3).map((hostel, ind) => (
                                <tr style={{ backgroundColor: (ind % 2 == 0) ? '#FDFEFF' : '#EFEFEF', }}>

                                    <td className="px-6 py-4 text-base font-medium text-customBlue-300 relative whitespace-nowrap"><span>{ind + 1}</span>
                                    <div style={styles(ind)} className="top-0 left-0" /></td>
                                    <td className="px-6 py-4 text-base font-medium text-customBlue-300 whitespace-nowrap">{hostel.hostel_name}</td>
                                    <td className="px-6 py-4 text-base font-medium text-customBlue-300 whitespace-nowrap">{hostel.hostel_points}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
                <br/>
                <Link to="/points-table" style={{color: '#4A6CB2', textDecoration:'underline'}}>
                    View All
                </Link>
                <br/><br/><br/>

                {data.map((item, index) => {
                    return <PSHomeComponent item={item} key={index}/>
                })}


                
            </div>
            <Footer />
        </div>
    );
}