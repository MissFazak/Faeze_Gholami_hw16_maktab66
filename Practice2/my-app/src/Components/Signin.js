import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export default function Signin({ noneSin }) {
  const [value, setValue] = useState([]);
  const [datalist, setDataList] = useState([]);
  const [university, setUniversity] = useState(true);
  useEffect(() => {
    fetch("/json/iranstates.json")
      .then((response) => response.json())
      .then((res) => {
        setDataList(res);
      });
  }, []);

  const handleCity = (event) => {
    const indexOfSelect = event.target.value;
    let arr = [];
    arr = indexOfSelect.split(",");
    setValue(arr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("ثبت نام با موفقیت انجام شد");
  };

  const handleChange = () => {
    setUniversity(false);
  };

  return (
    <div className={noneSin ? "disable" : null}>
      <h1>رایگان ثبت نام کنید</h1>
      <Form className="formHolder" onSubmit={handleSubmit}>
        <Form.Group className="group">
          <Form.Control type="text" placeholder="نام" required />
          <Form.Control type="text" placeholder="نام‌خانوادگی" required />
        </Form.Group>
        <Form.Group className="mb-3 group">
          <Form.Select className="Select" required onChange={handleChange}>
            <option selected disabled>
              مدرک تحصیلی
            </option>
            <option>دیپلم</option>
            <option>کارشناسی</option>
            <option>کارشناسی ارشد</option>
          </Form.Select>
          <Form.Group>
            <Form.Control className={university ? "disable" : null} type="text" placeholder="محل تحصیل" required />
          </Form.Group>
        </Form.Group>
        <Form.Group className="mb-3 group city">
          <Form.Select
            required
            className="Select"
            onChange={(e) => handleCity(e)}
          >
            <option selected disabled>
              استان محل تولد
            </option>
            {Object.keys(datalist).map((item) => {
              return (
                <option value={Object.values(datalist[item])} key={item}>
                  {item}
                </option>
              );
            })}
          </Form.Select>
          <Form.Select className="Select">
            <option selected disabled>
              شهر محل تولد
            </option>
            {value.map((item) => {
              return <option key={item}>{item}</option>;
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group className="group">
          <Form.Control type="email" placeholder="پست الکترونیک" required />
        </Form.Group>
        <Form.Group className="group">
          <Form.Control type="text" placeholder="رمز عبور" required />
        </Form.Group>
        <button type="submit" className="mainBut">
          ثبت نام
        </button>
      </Form>
    </div>
  );
}
