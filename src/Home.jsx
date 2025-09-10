import { useEffect, useState } from "react"
import { NavLink } from "react-router"
import AddJob from "./AddJob";
const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        const savedJobs = localStorage.getItem("jobs");
        if (savedJobs) setJobs(JSON.parse(savedJobs))
    }, [])

    useEffect(() => {
        console.log(jobs)
        localStorage.setItem("jobs", JSON.stringify(jobs));
    }, [jobs])

    const filteredJobs = filter === "All"
        ? jobs
        : jobs.filter(job => job.status === filter)

    return (
        <div>
            <div className="Head">
                <h1>Job Tracker</h1>
                <div className="navs">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/addjobs" >AddJob</NavLink>
                </div>
            </div>

            <div className="filter">
                <label htmlFor="filter">Filter by status: </label>
                <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </div>
            <ul>
                {
                    filteredJobs.length > 0 ? (
                        filteredJobs.map((job, index) => (
                            <li key={index}>
                                {index+1}. {job.company}
                                <ul>
                                    <li>Job Title : {job.title}</li>
                                    <li>Status : {job.status}</li>
                                    <li>Date : {job.date}</li>
                                    <li>Notes : {job.notes}</li>
                                </ul>
                            </li>
                        ))
                    ) : (<p>No jobs found for "{filter}"</p>)
                }
            </ul>



        </div>
    )
}


export default Home