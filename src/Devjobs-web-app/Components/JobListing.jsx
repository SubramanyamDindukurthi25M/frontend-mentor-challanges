import { useState } from 'react';
import {FaMapPin, FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import jobs from '../data/data';

export const JobListing = () => {
    const [jobsData, setJobsData] = useState(jobs);
    const [searchByCompany, setSearchByCompany] = useState('');
    const [searchByLocation, setSearchByLocation] = useState('');

    const handleSearch = (e) => {
        setSearchByCompany(e.target.value);
    }

    // Filter By Location
    const handleSearchByLocation = (e) => {
        setSearchByLocation(e.target.value);
    }

    const filterDataByLocation = (e) => {
        if (e.key === 'Enter') {
            const filterByLocation = jobsData.filter((job) => {
                return job.location.toLowerCase().includes(searchByLocation);
            })
            setJobsData(filterByLocation);
        }
    }

    // Here we can filter jobs by Contract Type
    const filterJobBy = (e) => {
        const filterOption = e.target.value;

        if (filterOption === 'full-time') {
            const sortData = jobs.filter((ele) => ele.contract === 'Full Time');
            setJobsData(sortData);
        } else if (filterOption === 'part-time') {
            const sortData = jobs.filter((ele) => ele.contract === 'Part Time');
            setJobsData(sortData);
        } else if (filterOption === 'contract') {
            const sortData = jobs.filter((ele) => ele.contract === 'Contract');
            setJobsData(sortData);
        } else if (filterOption === 'freelance') {
            const sortData = jobs.filter((ele) => ele.contract === 'Freelance');
            setJobsData(sortData);
        } else {
            setJobsData(jobsData);
        }
    }

    return (
        <>
            <div className="container contFilter">
                <form className="form-inline">
                    {/* 1 */}
                    <div className="input-group mb-2 mr-sm-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FaSearch/>
                            </div>
                        </div>
                        <input 
                            type="text" 
                            className="form-control"
                            style={{width:'310px'}} 
                            placeholder="Search by position,company"
                            value={searchByCompany}
                            onChange={handleSearch}
                        />
                    </div>
                    {/* 2 */}
                    <div className="input-group mb-2 mr-sm-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FaMapPin/>
                            </div>
                        </div>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search by location"
                            value={searchByLocation}
                            onChange={handleSearchByLocation}
                            onKeyDown={filterDataByLocation}
                        />
                    </div>
                    {/* 3 */}
                    <div className="form-group formSelect">
                        <select className='form-control' onChange={filterJobBy}>
                            <option>
                                Filter job by
                            </option>
                            <option value="full-time">Full Time</option>
                            <option value="part-time">Part Time</option>
                            <option value="freelance">Freelance</option>
                            <option value="contract">Contract</option>
                        </select>
                    </div>
                </form>
            </div>
            {/* Listing Jobs */}
            <div className="row px-3">
                {
                    jobsData.filter((ele) => {
                        const{position,company} = ele;
                        if(searchByCompany === '') return ele;
                        if(position.toLowerCase().includes(searchByCompany) || company.toLowerCase().includes(searchByCompany)){
                            return ele;
                        }
                    }).map((job) => {
                        const{id,logo,company,postedAt,contract,position,location} = job;
                        return(
                            <div className="col-lg-4 my-3 mx-auto" key={id}>
                                <div className="card">
                                    <img 
                                        src={logo} 
                                        alt={company}
                                    />
                                    <div className="card-body">
                                        <h5 className='card-title text-muted'>
                                            {postedAt} - {contract}
                                        </h5>
                                        <h6 className='font-weight-bold my-2'>
                                            <Link
                                                to={`/jobs/${position}`}
                                            >
                                                {position}
                                            </Link>
                                        </h6>
                                        <h6 className='text-muted my-2'>
                                            {company}
                                        </h6>
                                        <h4 className='text-primary'>
                                            {location}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}