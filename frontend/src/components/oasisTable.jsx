import Title from "../utilities/title";
import { Filter } from "./adminComps";

export default function OasisTable({ headers = [] }) {
    return (
        <>
            <div className="w-[85%] p-3 bg-oasis-blue rounded-2xl flex flex-col items-center justify-center font-oasis-text">
                <div className="w-[95%] flex flex-col justify-center items-start">
                    <Title text={"Filter by year"}/>
                    <div className="flex flex-row items-center justify-start gap-5">
                        <Filter text={"All"}/>
                        <Filter text={"2nd year"}/>
                        <Filter text={"3rd year"}/>
                    </div>
                    
                    

                </div>
              
                
                <table className="w-full border-separate border-spacing-y-2">
                    
                    {/* HEADER */}
                    <thead>
                        <tr className="bg-white rounded-2xl">
                            {headers.map((header, index) => (
                                <th
                                    key={index}
                                    className="p-3 text-[1rem] text-black text-center"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    {/* BODY (sample row) */}
                    <tbody>
                        <tr className="bg-white rounded-2xl text-[0.9rem] text-center">
                            {headers.map((_, index) => (
                                <td key={index} className="p-3">
                                    Data
                                </td>
                            ))}
                        </tr>
                    </tbody>

                </table>
            </div>
        </>
    );
}
