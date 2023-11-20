import { useState,useEffect, useRef } from "react";
const Login = () => {

    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [succes,setSuccess] = useState(false);

    const [emailError,setEmailError] = useState(null);

    const focusPoint = useRef(email);

    useEffect(()=>{
      focusPoint.current.focus();
    })


    const onSubmit = () => {
       const userData = {
        email:email,
        password:password
       }

       fetch("http://localhost:8000/auth/login",{
        method:"POST",
        body: JSON.stringify(userData),
        headers:{"Content-Type": "application/json"}
       }).then((result)=>result.json()).then((result)=>{
        if(result.statusCode == 200) {
          setSuccess(true);
        }
       })
    }

    const handleSubmit = () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
          setEmailError(null);
          onSubmit();
        } else {
            setEmailError("Invalid email id")
            return (false)
        }
    }

    return (
        <div className="row align-items-center justify-content-center">
    <div className="col-10">
    {succes && <div className="text-success text-center">Login Successful</div>}
   <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" ref={focusPoint} value={email} placeholder="name@example.com" onChange={(event)=>{setEmail(event.target.value); console.log("email",event.target.value,email)}} />
  <div className="text-danger">{emailError}</div>
</div>
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
  <input type="password" className="form-control" id="exampleFormControlInput1" value={password} placeholder="password" onChange={(event)=>{setPassword(event.target.value);}} />
  </div>
  <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
</div>
   </div>
    );   
}

export default Login;