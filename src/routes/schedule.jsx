import React from "react";



export default function Schedule() {
    return (
        <div style={{margin:"3%"}}>
            <h1>hiii</h1>
            <br/><br/>
            <table style={{borderStyle: "solid", borderColor: "#032538", borderWidth: 1, borderRadius: 1}} className="min-w-full">
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
              <tbody  className="divide-y divide-tableCellBorder">
                <tr>
                  <td className="px-6 py-4 text-base font-medium text-tableBorder whitespace-nowrap">General Quiz</td>
                  <td className="px-6 py-4 text-base font-medium text-tableBorder whitespace-nowrap">12th February</td>
                  <td className="px-6 py-4 text-base font-medium text-tableBorder whitespace-nowrap">Brainiac</td>
                  <td className="py-4 text-base font-medium text-tableBorder whitespace-nowrap">200</td>
                </tr>

                <tr>
                  <td className="px-6 py-4 text-base font-medium text-tableBorder whitespace-nowrap">General Quiz</td>
                  <td className="px-6 py-4 text-base font-medium text-tableBorder whitespace-nowrap">12th February</td>
                  <td className="px-6 py-4 text-base font-medium text-tableBorder whitespace-nowrap">Brainiac</td>
                  <td className="py-4 text-base font-medium text-tableBorder whitespace-nowrap">200</td>
                </tr>
                
              </tbody>
            </table>
        </div>

    );
}