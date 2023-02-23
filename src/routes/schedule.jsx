import React, { useState, useEffect, useMemo } from "react";
import sanityClient from "../client";
import moment from "moment";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Schedule() {
  const [schedule, setSchedule] = useState();
  const [kritiResult, setKritiResult] = useState([])

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

  const releasedResults = useMemo(() => {
    if (!kritiResult) return [];

    return kritiResult.map((item, i) => {
      return item.ps_name.trim().toLowerCase()
    })
  }, [kritiResult])

  function compare(a, b) {
    if (a.event_date < b.event_date) {
      return -1;
    }
    if (a.event_date > b.event_date) {
      return 1;
    }
    return 0;
  }
  return (
    <div className='min-h-screen bg-customBlue-100 flex flex-col'>
      <Navbar />
      <div style={{ margin: "3%" }} className='flex-1'>
        <h1 className='md:text-4xl text-xl customBlue-300 font-bold'>
          Event Dates - KRITI (2023) :-
        </h1>
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
                Date/Result
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
            {schedule &&
              schedule.sort(compare) &&
              schedule.map((ps_event, ind) => (
                <tr
                  style={{
                    backgroundColor: ind % 2 == 0 ? "#FDFEFF" : "#EFEFEF",
                  }}
                  className='text-xs md:text-base font-medium text-customBlue-300 whitespace-nowrap'
                >
                  <td className=' px-3 md:px-6 py-4 max-w-[5rem] whitespace-normal'>
                    {ps_event.event_name}
                  </td>
                  {releasedResults.includes(ps_event.event_name.trim().toLowerCase()) ?
                    <td className=' px-3 md:px-6 py-4'>
                      <Link to={`/points-table/${ps_event.event_name.trim().toLowerCase().replaceAll(' ', '-')}`}><p className="text-blue-500 underline">Check Result</p></Link>
                    </td> :
                    <td className=' px-3 md:px-6 py-4'>
                      {moment(ps_event.event_date).format("Do MMM YY")}
                    </td>
                  }
                  <td className=' px-3 md:px-6 py-4'>{ps_event.event_cup}</td>
                  <td className='py-4'>{ps_event.event_points}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
