import Subtitle from "../utilities/subtitle";
import Title from "../utilities/title";
import { Button } from "./button";
import { FileUploadField, SingleField } from "./fieldComp";

export default function ProspectMoaForm() {
   return(
        <>
            {/* PARENT CONTAINER */}
            <div className="w-full px-5 flex flex-col gap-2 justify-center items-center">
                <section>
                    <Title text={"Prospect for New MOA"}/>
                    <Subtitle text={"Please fill out this form to propose a new Host Training Establishment (HTE) for partnership."}/>
                </section>
                <section className="w-full flex flex-row justify-center items-center gap-5">
                    <ProspectContainer width="w-[20%]">
                        <Subtitle size={"text-[1rem]"} color={"text-black"} weight={"font-bold"} text={"Important Notes for Students:"}/>

                        <ul className="w-[60%] font-oasis-text text-[0.8rem] list-disc">
                            <li>Download the official MOA template from the OJT Downloadables section.</li>
                            <li>Send the MOA to the HTE for review and completion (via email or in person — varies depending on the location of the company.)</li>
                            <li>Once signed or reviewed by the HTE, return the MOA to the OJT Office for processing</li>
                        </ul>

                    </ProspectContainer>
                        
                    <form className="w-full grid grid-cols-2 gap-6">
                        <ProspectContainer width="w-full">
                            <Subtitle size={"text-[1rem]"} color={"text-black"} weight={"font-bold"} text={"HTE Information"}/>

                                <SingleField labelText={"HTE / Company Name"} fieldHolder={"Enter Company Name"} fieldId={"hteName"} />
                                <SingleField labelText={"Industry Category"} fieldHolder={"Enter Industry"} fieldId={"industryCategory"} />
                                <SingleField labelText={"HTE Address"} fieldHolder={"Enter Address"} fieldId={"hteAddress"} />
                                <FileUploadField labelText={"Upload Proposed MOA"}/>
                    
                        </ProspectContainer>

                        <ProspectContainer width="w-full">
                            <Subtitle size={"text-[1rem]"} color={"text-black"} weight={"font-bold"} text={"Primary Contact Person"}/>

                            
                                <SingleField labelText={"Contact Person Name"} fieldHolder={"Enter contact name"} fieldId={"contactPersonName"} />
                                <SingleField labelText={"Position / Role"} fieldHolder={"Enter contact person position"} fieldId={"contactPersonRole"} />
                                <SingleField labelText={"Email Address"} fieldHolder={"Enter contact person email"} fieldId={"contactPersonEmail"} fieldType={"email"}/>
                                <SingleField labelText={"Contact Number"} fieldHolder={"Enter contact person number"} fieldId={"contactPersonNumber"}/>
                        
                        </ProspectContainer>
                        <div className="w-full col-span-2 flex justify-center">
                            <Button text={"Submit"} width="w-full"/>
                        </div>
                        
                     </form>

                </section>

            </div>
        </>
   )
}

function ProspectContainer({ children, width = "w-[30%]" }) {
    return (
        <>
            <div className={`${width} h-auto p-3 bg-linear-to-tl flex flex-col justify-start items-center from-oasis-blue to-oasis-button-light to-90% rounded-3xl`}>
                {children}
            </div>
        </>
    )
}