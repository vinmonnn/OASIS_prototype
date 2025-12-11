import Button from "./button";
import { useForm } from "react-hook-form";
import InputField from "../utilities/inputField";

export function RegForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = (data) => {
        console.log("FORM DATA:", data);
    };

    return (
        <form
        className="animate__bounceIn w-full p-5 flex flex-col items-center justify-center gap-3"
        onSubmit={handleSubmit(onSubmit)}
        >
            {/* EMAIL */}
             <InputField
                label="PUP Webmail"
                name="pupWebmail"
                placeholder="Enter PUP Webmail"
                errors={errors}
                register={register}
                rules={{
                required: "Webmail is required",
                validate: (value) =>
                    value.includes("@iskolarngbayan.pup.edu.ph") ||
                    "Please input a proper PUP webmail",
                }}
            />


        <Button type="submit" disabled={isSubmitting} text="Register" />
        </form>
    );
}



export function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = (data) => {
        console.log("LOGIN DATA:", data);
    };

    return (
        <form
        className="animate__bounceIn w-full p-5 flex flex-col items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
        >
        {/* EMAIL */}
        <InputField
            label="PUP Webmail"
            name="pupWebmail"
            placeholder="Enter PUP Webmail"
            type="text"
            register={register}
            errors={errors}
            rules={{
                required: "Webmail is required",
                validate: (value) =>
                    value.includes("@iskolarngbayan.pup.edu.ph") ||
                    "Please input a proper PUP Webmail",

            }}
        />

        {/* PASSWORD */}
        <InputField
            label="Password"
            name="password"
            placeholder="Enter Password"
            type="password"
            register={register}
            errors={errors}
            rules={{
                required: "Password is required",
                minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                },
            
            }}
        />

        <Button
            type="submit"
            disabled={isSubmitting}
            text="Login"
        />
        </form>
    );
}