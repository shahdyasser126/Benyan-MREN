import { useOutletContext } from "react-router-dom";

function FormDashboard({ type }) {

  const { setDrafts } = useOutletContext();

  function handleChange(e) {

    const hasValue = e.target.value !== "";

    setDrafts((prev) => ({
      ...prev,
      [type]: hasValue,
    }));
  }

  return (

    <div className="container py-4">
      <input type="text" placeholder="Enter Name" className="form-control mb-3" onChange={handleChange}/>
      <input type="email" placeholder="Enter Email" className="form-control mb-3" onChange={handleChange} />
    </div>
  );
}

export default FormDashboard;