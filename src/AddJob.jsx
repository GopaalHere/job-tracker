import { useState } from "react"
import { useNavigate } from "react-router-dom";

const AddJob = () => {
    const navigate = useNavigate();
    const [job, setJob] = useState({
        company: "",
        title: "",
        status: "Applied",
        date: "",
        notes: ""
    });

    const handleChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    }
    console.log(job)


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!job.company || !job.title) {
            return alert("Company and Title are required");
        }
        const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
        const updatedJobs = [...savedJobs, job];
        localStorage.setItem("jobs", JSON.stringify(updatedJobs));

        //reset
        setJob({
            company: "",
            title: "",
            status: "Applied",
            date: "",
            notes: ""
        });

        alert("Job added!");
    };


    return (
        <div className="mainForm">
            <h1>Add Job Details</h1>
            <button onClick={() => navigate("/")}>Home</button>
            <div className="formContainer">
                <form onSubmit={handleSubmit} className="job-form">
                    <label htmlFor="company" className="ip">Company</label>
                    <input type="text" name="company" value={job.company} onChange={handleChange} id="company" className="ip" placeholder="enter company name" required />
                    <label htmlFor="title" className="ip">Title</label>
                    <input type="text" name="title" value={job.title} onChange={handleChange} id="title" className="ip" placeholder="enter job title" required />
                    <div className="selDate">
                        <label htmlFor="date" className="date">Date</label>
                        <input type="date" name="date" value={job.date} onChange={handleChange} id="date" className="ip" required />
                        <select name="status" id="status" onChange={handleChange} className="sel">
                            <option value="Applied">Applied</option>
                            <option value="Assesment">Assesment</option>
                            <option value="Interview">Interview</option>
                            <option value="Offer">Offer</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>
                    <label htmlFor="notes" className="ip">Notes</label>
                    <textarea name="notes" value={job.notes} onChange={handleChange} id="notes" className="ip" placeholder="enter notes if any"></textarea>
                    <button type="submit">Add Job</button>
                </form>
            </div>
        </div>
    )
}

export default AddJob