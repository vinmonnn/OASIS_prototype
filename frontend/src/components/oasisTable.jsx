import { useState } from "react";

export default function OasisTable() {


    return (
        <>
            <div className="w-[85%] p-5 bg-amber-500 flex flex-col items-center justify-center font-oasis-text">

                <table className="w-[70%] p-5">
                    <tr>
                        <th>
                            header1
                        </th>
                        <th>
                            header2
                        </th>
                        <th>
                            header3
                        </th>
                    </tr>

                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                    </tr>
                    <tr>
                        <td>1.1</td>
                        <td>1.2</td>
                        <td>1.3</td>
                    </tr>
                </table>

            </div>
            
        </>
    );
}
