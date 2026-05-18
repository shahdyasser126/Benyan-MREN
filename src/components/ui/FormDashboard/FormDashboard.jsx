import { Link, useOutletContext } from "react-router-dom";
import { useState } from "react";
import styles from "./FormDashboard.module.css";

function FormDashboard({ type }) {

  const { setDrafts } = useOutletContext();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {

    const updatedData = {
      ...formData,
      [e.target.name]: e.target.value,
    };

    setFormData(updatedData);

    // check if any input has value
    const hasData = Object.values(updatedData).some(
      (value) => value.trim() !== ""
    );

    setDrafts((prev) => ({
      ...prev,
      [type]: hasData,
    }));
  }

  return (

    <div className="container">

      <form className={styles.form}>

     

        <div className="mb-3">

          <label htmlFor="exampleInputEmail1"  className="form-label text-light fs-4" >
            Email address
          </label>
           <input type="email" className="form-control" id="exampleInputEmail1" name="email"  value={formData.email}
            onChange={handleChange} aria-describedby="emailHelp"/>
              <div iv id="emailHelp" className="form-text text-light">
          We'll never share your email with anyone else.
          </div>

        </div>

 
        <div className="mb-3">
           <label htmlFor="exampleInputPassword1" className="form-label text-light fs-4" >
            Password
          </label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={formData.password} onChange={handleChange}/>
        </div>

 
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label text-light" htmlFor="exampleCheck1">
            Check me out
          </label>

        </div>
 

        <Link to="/" className="btn btn-primary w-100"> Submit</Link>
      </form>

    </div>
  );
}

export default FormDashboard;