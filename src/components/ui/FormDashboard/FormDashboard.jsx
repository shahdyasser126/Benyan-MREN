import { Link } from 'react-router-dom'
import styles from './FormDashboard.module.css'
function FormDashboard(){

    return(
<div className="container">
    <form className={`${styles.form}`}>
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label text-light fs-4">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label text-light fs-4">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label text-light" for="exampleCheck1">Check me out</label>
  </div>
  <Link to="/" type="submit" className="btn btn-primary w-100">Submit</Link>
</form>
</div>

    )
}
export default FormDashboard