import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Login({noneLog}) {
  const [eye,setEye] = useState(true)

  const handleEye = () =>{
    setEye(!eye)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("با موفقیت وارد شدید");
  };
  return (
    <div className={noneLog?'disable':null}>
      <h1>خوش آمدید</h1>
      <Form className="formHolder" onSubmit={handleSubmit}>
        <Form.Group className="group">
          <Form.Control type="email" placeholder="پست الکترونیک" required/>
          <Form.Control type={eye?"password":"text"} placeholder="رمز عبور" required />
          <div className="iconHolder">
          <AiOutlineEye className={eye?'icons':'disable'}  onClick={handleEye}/>
          <AiOutlineEyeInvisible className={eye?'disable':'icons'} onClick={handleEye}/>
          </div>
        </Form.Group>
        <button type="submit" className="mainBut">ثبت نام</button>
      </Form>
    </div>
  );
}
