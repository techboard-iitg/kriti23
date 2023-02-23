import React, {useMemo
} from "react";
import ProblemStatementImage from "../assets/problem-statement.png";
import PSComponent from "../components/ps-component";
import PSResultComponent from "../components/ps-component-result";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import "./scrollbar-hide.css";

const PSCup = ({ item, index, kritiResult  }) => {

  const releasedResults = useMemo(()=>{
    if(!kritiResult) return [];

    return kritiResult.map((item,i) => {
      return item.ps_name.trim().toLowerCase()
    })
  }, [kritiResult])

  function compare(a, b) {
    if (a.hostel_points > b.hostel_points) {
        return -1;
    }
    if (a.hostel_points < b.hostel_points) {
        return 1;
    }
    return 0;
  }

  const winnerList = useMemo(()=>{
    if(!kritiResult || (!releasedResults || releasedResults.length === 0)) return {};

    const obj = {};
    kritiResult.forEach((item) => {
      const points = item.points.sort(compare)
      obj[item.ps_name.trim().toLowerCase()] = points[0]['hostel_name']
    })
    return obj;
  }, [releasedResults, kritiResult])

  return (
    <div className="w-full">
      <div className='md:hidden block text-customBlue-300 text-xl font-semibold py-4'>
        {item.club_name}
      </div>
      <div
        key={index}
        className='flex items-center gap-10 justify-between w-full text-sm relative '
      >
        <div className='hidden md:block text-customBlue-300 md:text-3xl font-semibold py-4'>
          {item.club_name}
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
                document.getElementById(`scrollbutton-${index}`).style.display =
                  "none";
              }, 150);
            } else {
              document.getElementById(`scrollbutton-${index}`).style.display =
                "flex";
              document.getElementById(
                `scrollbutton-${index}`
              ).style.opacity = 100;
            }
          }}
        >
          {item.ps_link.map((problem, index) => {
            // console.log(releasedResults, item.ps_name[index])
            if(releasedResults.includes(item.ps_name[index].trim().toLowerCase())) {
              return (
                <li key={index}>
                <PSResultComponent
                  title={item.ps_name[index]}
                  result_link={item.ps_name[index].trim().toLowerCase().replaceAll(' ', '-')}
                  link={problem}
                  winner = {winnerList[item.ps_name[index].trim().toLowerCase()]}
                />
              </li>
              )
            }
            return (
              <li key={index}>
                <PSComponent
                  title={item.ps_name[index]}
                  date={item.ps_date[index]}
                  link={problem}
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
            document.getElementById(`scrollbar-${index}`).scrollLeft += 400;
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
    </div>
  );
};

export default PSCup;
