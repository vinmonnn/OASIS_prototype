import { useState } from "react";
import Title from "../utilities/title";
import Subtitle from "../utilities/subtitle";

export default function OasisTable() {


    return (
        <>
            <div className="w-[85%] p-3 bg-oasis-light rounded-2xl flex flex-col items-center justify-center font-oasis-text">

                <table className="w-full p-5 flex flex-col justify-center items-center gap-1">
                    <tr className="w-full p-3 justify-between items-center bg-white rounded-2xl overflow-hidden">
                        <th className="p-2 flex justify-center items-center text-[1.2rem]">
                            <td>Header</td>
                        </th>

                    </tr>

                    <tr className="w-full p-3 bg-white rounded-2xl text-[0.8rem] overflow-hidden">
                        <td className="">Data</td>
                        
                    </tr>

                </table>

            </div>
            
        </>
    );
}
