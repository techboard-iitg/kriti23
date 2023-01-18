import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import moment from 'moment';
import Footer from "../components/footer";
import Navbar from "../components/navbar";


export default function Schedule() {

  const [schedule, setSchedule] = useState();

    useEffect(() => {
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
  function compare( a, b ) {
      if ( a.event_date < b.event_date){
        return -1;
      }
      if ( a.event_date > b.event_date){
        return 1;
      }
      return 0;
  }
    return (
      <div className='min-h-screen bg-customBlue-100 flex flex-col'>
        <Navbar />
        <div style={{margin:"3%"}}>
            <h1 className="text-3xl customBlue-300 font-bold">Event Dates - KRITI (2023) :-</h1>
            <br/>
            <table style={{borderStyle: "solid", borderColor: "#032538", borderWidth: 2, borderRadius: 1}} className="min-w-full">
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
                 schedule.sort(compare) && 
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
        </div>
        <Footer />
      </div>
    );
}