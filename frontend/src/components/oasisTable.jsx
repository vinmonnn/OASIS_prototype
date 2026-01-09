import Title from "../utilities/title";
import { Filter } from "./adminComps";

export default function OasisTable({ headers = [], children }) {
    return (
        <>
            <div className="w-[90%] p-3 bg-admin-element rounded-2xl flex flex-col items-center justify-center font-oasis-text shadow-[0px_0px_10px_rgba(0,0,0,0.5)]">
                <div className="w-[95%] flex flex-col justify-center items-start">
                    {children}
                </div>
                <table className="w-full p-5 border-separate border-spacing-y-2 ">
                    
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
