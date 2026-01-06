import Button from "./button";
import { useForm } from "react-hook-form";
import InputField from "../utilities/inputField";
import { useRef, useState, useEffect } from "react";
import Title from "../utilities/title";
import { Link } from "react-router-dom";

const USER_REGEX = /^[a-z]+[a-z][a-z]+@iskolarngbayan\.pup\.edu\.ph$/;
const PWD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export function UpdatedReg() {

    const STEPS = {
        EMAIL: "EMAIL",
        OTP: "OTP",
        PASSWORD: "PASSWORD"
    };

    const [step, setStep] = useState(STEPS.EMAIL);
    const otpRef = useRef();
    const pwdRef = useRef();

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [otp, setOtp] = useState('')
    const [validOtp, setValidOtp] = useState(false);
    const [otpFocus, setOtpFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        userRef.current.focus();

    }, [])

    useEffect(() => {
        if (step === STEPS.EMAIL) userRef.current?.focus();
        if (step === STEPS.OTP) otpRef.current?.focus();
        if (step === STEPS.PASSWORD) pwdRef.current?.focus();
    }, [step]);

    useEffect(() => { //webmail validation
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);

    }, [user])

    useEffect(() => { //password validation
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);

    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');

    }, [user, pwd, matchPwd])

    return(
        <>
            <section className="w-full p-1 flex flex-col items-center justify-center gap-1">
                <Title text={"Register"}></Title>
                <p ref={errRef} className={errMsg ? "right-0" : "right-full"} aria-live="assertive">{errMsg}</p>

            </section>

            {/* WEBMAIL */}
            <form className=" w-full p-5 flex flex-col items-center justify-center gap-3">
                {step === STEPS.EMAIL && (
                    <>
                        <label className="mb-1 text-oasis-header font-oasis-text" htmlFor="webMail">PUP Webmail</label>
                        <input
                            type="text"
                            id="webMail"
                            placeholder="Enter valid webmail"
                            ref={userRef}
                            autoComplete="off"
                            required
                            onChange={(e) => setUser(e.target.value)}
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}

                            className="w-full p-3 border-b-2 border-oasis-light focus:outline-none focus:border-oasis-aqua transition-all"
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "opacity-100 font-oasis-text text-red-900 text-[0.8rem] italic": "opacity-0 font-oasis-text text-[0.8rem] italic text-red-900"}>Must be a valid webmail. E.g. juanmdelacruz@iskolarngbayan.pup.edu.ph</p>
                        <Button
                            text="Send OTP"
                            disabled={!validName}
                            onClick={async (e) => {
                                e.preventDefault();

                                try {
                                    // axios.post("/send-otp", { email: user })
                                    setStep(STEPS.OTP);
                                } catch {
                                    setErrMsg("Failed to send OTP");
                                }
                            }}
                        />

                    </>
                )}

                {/* OTP */}
                {step === STEPS.OTP && (
                    <>
                        <label htmlFor="otp" className="mb-1 text-oasis-header font-oasis-text">Enter OTP</label>
                        <input
                            ref={otpRef}
                            type="text"
                            id="otp"
                            required
                            placeholder="6-digit OTP"
                            onChange={(e) => setOtp(e.target.value)}
                            aria-describedby="otpnote"
                            onFocus={() => setOtpFocus(true)}
                            onBlur={() => setOtpFocus(false)}
                            
                            className="w-full p-3 border-b-2 border-oasis-light focus:outline-none focus:border-oasis-aqua transition-all"
                        />
                        <p id="otpnote" className={otpFocus && otp && !validOtp ? "opacity-100 font-oasis-text text-red-900 text-[0.8rem] italic": "opacity-0 font-oasis-text text-[0.8rem] italic text-red-900"}>Verified OTP sent to your PUP webmail</p>
                        <Button
                            text="Verify OTP"
                            onClick={async (e) => {
                                e.preventDefault();

                                try {
                                    // axios.post("/verify-otp", { email: user, otp })
                                    setValidOtp(true);
                                    setStep(STEPS.PASSWORD);
                                } catch {
                                    setErrMsg("Invalid OTP");
                                }
                            }}
                        />
                    </>
                )}

                {/* PASSWORD */}
                {step === STEPS.PASSWORD && (
                    <>
                        <label htmlFor="password" className="mb-1 text-oasis-header font-oasis-text">Password</label>
                        <input
                            ref={pwdRef}
                            type="password"
                            id="password"
                            required
                            onChange={(e) => setPwd(e.target.value)}
                            aria-invalid={!validPwd}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}

                            className="w-full p-3 border-b-2 border-oasis-light focus:outline-none focus:border-oasis-aqua transition-all"
                        />

                        <label htmlFor="confirm_pwd">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            aria-invalid={!validMatch}
                            aria-describedby="matchnote"
                            required
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                            
                            className="w-full p-3 border-b-2 border-oasis-light focus:outline-none focus:border-oasis-aqua transition-all"
                        />
                        <p id="pwdnote" className={pwdFocus && pwd && !validPwd ? "opacity-100 font-oasis-text text-red-900 text-[0.8rem] italic": "opacity-0 font-oasis-text text-[0.8rem] italic text-red-900"}>
                            Password must not be less than 8 characters.<br/>
                            Including an uppercase letter, and special character
                        </p>
                        <p id="matchnote" className={matchFocus && match && !validMatch ? "opacity-100 font-oasis-text text-red-900 text-[0.8rem] italic": "opacity-0 font-oasis-text text-[0.8rem] italic text-red-900"}>
                            password not matched!
                        </p>

                        <Button
                            text="Register"
                            disabled={!validPwd || !validMatch}
                        />
                    </>
                )}


            </form>

        </>
    )
        

}

export function UpdatedLogin() {
    return(
        <>
            <p>Login</p>
        </>
    )
}

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
        className=" w-full p-5 flex flex-col items-center justify-center gap-3"
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
        className="w-full p-5 flex flex-col items-center justify-center"
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