import React, { useState, useEffect } from "react";
import { useHref, useParams } from "react-router-dom";
import sanityClient from "../client";
import Footer from "../components/footer";
import Navbar from "../components/navbar";


export default function PointsTable() {

    const [hostels, setHostels] = useState();    
    const [title, setTitle] = useState('Points Table')
    
    const {id} = useParams();

    useEffect(() => {

        if(!id){
         sanityClient
            .fetch(
                `*[_type == "points_table"]{
                    hostel_name,
                    hostel_points,
                }`
            )
            .then((data) => {setHostels(data); console.log(data)})
            .catch(console.error);
        }
        else {
            sanityClient
            .fetch(
                `*[_type == "ps_points_table"]{
                    ps_name,
                    points,
                }`
            )
            .then((data) => {
                data = data.filter((item)=>{
                    return item.ps_name.toLowerCase().trim().replaceAll(' ', '-') === id
                })
                if(data.length === 0) {
                    setHostels([{
                        hostel_name: "Result yet to be declared",
                        hostel_points: '-'
                    }])
                }
                data = data[0]
                setTitle(data.ps_name)
                setHostels(data.points)
            })
            .catch(console.error);
        }
        
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

    return (
        <div className='min-h-screen bg-customBlue-100 flex flex-col'>
        <Navbar />
        <div style={{ margin: "3%" }} className='flex-1'>
            <h1 className="text-xl md:text-3xl customBlue-300 font-bold">{title} - KRITI (2023) :-</h1>
            <br />
            <table style={{ borderStyle: "solid", borderColor: "#032538", borderWidth: 2, borderRadius: 1 }} className="min-w-full">
                <thead style={{ backgroundColor: "#032538", color: "#EFEFEF" }}>
                    <tr>
                        <th scope="col" className="px-3 md:px-6 py-4 text-sm md:text-base font-bold text-left uppercase ">
                            Position
                        </th>
                        <th scope="col" className="px-3 md:px-6 py-4 text-sm md:text-base font-bold text-left uppercase ">
                            Hostel Name
                        </th>
                        <th scope="col" className="py-4 text-sm md:text-base font-bold text-left uppercase ">
                            Points
                        </th>
                    </tr>

                </thead>
                <tbody className="divide-y divide-customBlue-200">

                    {hostels &&
                        hostels.sort(compare) &&
                        hostels.map((hostel, ind) => (
                            <tr style={{ backgroundColor: (ind % 2 == 0) ? '#FDFEFF' : '#EFEFEF', }}>

                                <td className="px-3 md:px-6 py-4 text-xs md:text-base font-medium text-customBlue-300 relative whitespace-nowrap"><span>{ind + 1}</span>
                                <div style={styles(ind)} className="top-0 left-0" /></td>
                                <td className="px-3 md:px-6 py-4 text-xs md:text-base font-medium text-customBlue-300 whitespace-nowrap">{hostel.hostel_name}</td>
                                <td className="px-3 md:px-6 py-4 text-xs md:text-base font-medium text-customBlue-300 whitespace-nowrap">{hostel.hostel_points}</td>
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