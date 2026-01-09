import { Form, Link } from 'react-router-dom'
import AdminScreen from '../../layouts/adminScreen.jsx';
import { AdminHeader } from '../../components/headers.jsx'
import Title from "../../utilities/title.jsx";
import { Container, Filter } from '../../components/adminComps.jsx';
import { BulletField, FileUploadField, MultiField, SingleField } from '../../components/fieldComp.jsx';
import { AnnounceButton } from '../../components/button.jsx';

import { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { Label } from '../../utilities/label.jsx';


export default function DocsUpload() {
    const [searchParams, setSearchParams] = useSearchParams();

    // Read tab from URL (default = procedures)
    const activeFilter = searchParams.get("tab") || "procedures";

    const setFilter = (tab) => {
        setSearchParams({ tab });
    };

    return (
        <AdminScreen>
            <AdminHeader />

            <div>
                <Title text={"Documents Upload"} />
            </div>

            <Container column={true}>
                {/* FILTERS */}
                <section className="w-full flex flex-row justify-start items-center gap-5 mb-10">
                    <Filter
                        text="Procedures"
                        isActive={activeFilter === "procedures"}
                        onClick={() => setFilter("procedures")}
                    />
                    <Filter
                        text="MOA Process"
                        isActive={activeFilter === "moa"}
                        onClick={() => setFilter("moa")}
                    />
                    <Filter
                        text="Key Guidelines"
                        isActive={activeFilter === "guidelines"}
                        onClick={() => setFilter("guidelines")}
                    />
                    <Filter
                        text="Forms & Templates"
                        isActive={activeFilter === "forms"}
                        onClick={() => setFilter("forms")}
                    />
                </section>

                {/* CONTENT */}
                {activeFilter === "procedures" && <Procedures />}
                {activeFilter === "moa" && <MoaProcess />}
                {activeFilter === "guidelines" && <KeyGuidelines />}
                {activeFilter === "forms" && <FormsTemplates />}
            </Container>
        </AdminScreen>
    );
}

export function FormLayout({ children }) {
    return(
        <>
        <form className='w-full flex flex-col items-start justify-evenly gap-5'>
            {children}
        </form>
        </>
    )

}

export function Procedures() {
    const [steps, setSteps] = useState([{ id: 1, value: "" }]); // start with step 1
    const [stepCounter, setStepCounter] = useState(2); // next id to use

    const MAX_STEPS = 50;

    const addStep = () => {
        if (steps.length >= MAX_STEPS) return;

        setSteps(prev => [
            ...prev,
            { id: stepCounter, value: "" } // use unique ID
        ]);
        setStepCounter(prev => prev + 1); // increment counter
    };

    const removeStep = (id) => {
        setSteps(prev => prev.filter(step => step.id !== id));
    };

    const handleClear = () => {
        setSteps(prev => prev.length > 1 ? [prev[0]] : prev);
    };

    const updateStep = (id, value) => {
        setSteps(prev =>
            prev.map(step => (step.id === id ? { ...step, value } : step))
        );
    };

    return (
        <FormLayout>
            <section className="w-full">
                <SingleField
                    labelText={"Procedure Header"}
                    fieldId={"procedureHeader"}
                    fieldHolder={"Enter Procedure header..."}
                />
            </section>

            <div>
                <Label labelText={"Add steps"} />
            </div>

            {/* STEPS */}
            {steps.map((step, index) => (
                <div key={step.id} className="w-full flex items-center gap-3">
                    <MultiField
                        labelText={`Step ${index + 1}`}
                        fieldId={`step${index + 1}`}
                        fieldHolder={`Enter step ${index + 1}`}
                        value={step.value}
                        onChange={(e) => updateStep(step.id, e.target.value)}
                    />

                    {steps.length > 1 && (
                        <AnnounceButton
                            btnText="Delete"
                            onClick={() => removeStep(step.id)}
                        />
                    )}
                </div>
            ))}

            <section className="flex flex-row gap-5 mt-3">
                <AnnounceButton btnText="Add" onClick={addStep} />
                {steps.length > 1 && (
                    <AnnounceButton onClick={handleClear} btnText="Clear All" />
                )}
                {steps.length >= MAX_STEPS && (
                    <p className="text-[0.7rem] text-red-700 italic">
                        Maximum of {MAX_STEPS} steps reached
                    </p>
                )}
            </section>
        </FormLayout>
    );
}


export function MoaProcess() {
    const [steps, setSteps] = useState([{ id: 1, value: "" }]);
    const [stepCounter, setStepCounter] = useState(2); 

    const MAX_STEPS = 50;

    const addStep = () => {
        if (steps.length >= MAX_STEPS) return;

        setSteps(prev => [
            ...prev,
            { id: stepCounter, value: "" } 
        ]);
        setStepCounter(prev => prev + 1);
    };

    const removeStep = (id) => {
        setSteps(prev => prev.filter(step => step.id !== id));
    };

    const handleClear = () => {
        setSteps(prev => prev.length > 1 ? [prev[0]] : prev);
    };

    const updateStep = (id, value) => {
        setSteps(prev =>
            prev.map(step => (step.id === id ? { ...step, value } : step))
        );
    };

    return (
        <FormLayout>
            <section className="w-full">
                <SingleField
                    labelText={"MOA Process Header"}
                    fieldId={"moaProcessHeader"}
                    fieldHolder={"Enter Process Header..."}
                />
            </section>

            <div>
                <Label labelText={"Add steps"} />
            </div>

            {/* STEPS */}
            {steps.map((step, index) => (
                <div key={step.id} className="w-full flex items-center gap-3">
                    <MultiField
                        labelText={`Step ${index + 1}`}
                        fieldId={`step${index + 1}`}
                        fieldHolder={`Enter step ${index + 1}`}
                        value={step.value}
                        onChange={(e) => updateStep(step.id, e.target.value)}
                    />

                    {steps.length > 1 && (
                        <AnnounceButton
                            btnText="Delete"
                            onClick={() => removeStep(step.id)}
                        />
                    )}
                </div>
            ))}

            <section className="flex flex-row gap-5 mt-3">
                <AnnounceButton btnText="Add" onClick={addStep} />
                {steps.length > 1 && (
                    <AnnounceButton onClick={handleClear} btnText="Clear All" />
                )}
                {steps.length >= MAX_STEPS && (
                    <p className="text-[0.7rem] text-red-700 italic">
                        Maximum of {MAX_STEPS} steps reached
                    </p>
                )}
            </section>
        </FormLayout>
    );
}


export function KeyGuidelines() {
    
    const [steps, setSteps] = useState([{ id: 1, value: "" }]);
    const [stepCounter, setStepCounter] = useState(2); 

    const MAX_STEPS = 50;

    const addStep = () => {
        if (steps.length >= MAX_STEPS) return;

        setSteps(prev => [
            ...prev,
            { id: stepCounter, value: "" } 
        ]);
        setStepCounter(prev => prev + 1);
    };

    const removeStep = (id) => {
        setSteps(prev => prev.filter(step => step.id !== id));
    };

    const handleClear = () => {
        setSteps(prev => prev.length > 1 ? [prev[0]] : prev);
    };

    const updateStep = (id, value) => {
        setSteps(prev =>
            prev.map(step => (step.id === id ? { ...step, value } : step))
        );
    };

    return (
        <FormLayout>
            <section className="w-full">
                <SingleField
                    labelText={"Key Guidelines Header"}
                    fieldId={"keyGuidelineHeader"}
                    fieldHolder={"Enter Guideline Header..."}
                />
            </section>

            <div>
                <Label labelText={"Add steps"} />
            </div>

            {/* STEPS */}
            {steps.map((step, index) => (
                <div key={step.id} className="w-full flex items-center gap-3">
                    <MultiField
                        labelText={`Step ${index + 1}`}
                        fieldId={`step${index + 1}`}
                        fieldHolder={`Enter step ${index + 1}`}
                        value={step.value}
                        onChange={(e) => updateStep(step.id, e.target.value)}
                    />

                    {steps.length > 1 && (
                        <AnnounceButton
                            btnText="Delete"
                            onClick={() => removeStep(step.id)}
                        />
                    )}
                </div>
            ))}

            <section className="flex flex-row gap-5 mt-3">
                <AnnounceButton btnText="Add" onClick={addStep} />
                {steps.length > 1 && (
                    <AnnounceButton onClick={handleClear} btnText="Clear All" />
                )}
                {steps.length >= MAX_STEPS && (
                    <p className="text-[0.7rem] text-red-700 italic">
                        Maximum of {MAX_STEPS} steps reached
                    </p>
                )}
            </section>
        </FormLayout>
    );
}
export function FormsTemplates() {
    return (
        <>
            <FormLayout>       
                <section className='w-full flex flex-row basis-[calc(50%-0.5rem)] '>
                    <SingleField labelText={"Document Title"} fieldHolder={"Enter Document Title..."} fieldId={"documentName"} fieldType={"text"}/>
                    <FileUploadField labelText={"Upload Document"} fieldId={"documentFile"}/>
                </section>
                <MultiField labelText={"Description"} fieldHolder={"Enter description"} fieldId={"documentDescription"}/>

                <section className='w-full flex flex-row items-center justify-start gap-3 '>
                    <AnnounceButton btnText='Upload Document'/>
                    <AnnounceButton btnText='Clear'/>
                </section>
            </FormLayout>

                
           
        </>
    )
}