import { Link, useParams } from "react-router-dom";
import jobs from '../data/data';

export const JobDetails = () => {
    const {
        position
    } = useParams();

    // Find job by position
    const findJobByPosition = jobs.find((ele) => {
        if (ele.position === position) {
            return true;
        }
    })

    const {
        company,
        companySite,
        postedAt,
        contract,
        desc,
        requirements,
        responsibility
    } = findJobByPosition;
    return (
        <>
            <button className="btn">
                <Link
                    to={'/'}
                >
                    Back to Home Page
                </Link>
            </button>
            <div className="container my-3">
                <div className="row">
                    <div className="col-lg-8 bg-light p-2 mx-auto">
                        <h2 className="font-weight-bold">
                            {company}
                        </h2>

                        <button className="btn">
                            <Link
                                to={companySite}
                            >
                                Company Site
                            </Link>
                        </button>
                        <h5 className='card-title text-muted'>
                            {postedAt} - {contract}
                        </h5>
                        <h6 className='font-weight-bold my-2 text-primary'>
                            {position}        
                        </h6>
                        <p className="lead">
                            {desc}
                        </p>
                        <h3 className="text-success">
                            Job Requirements
                        </h3>
                        <p className="lead">
                            {requirements.reqTitle}
                        </p>
                        <ul className="list-group">
                            {
                                requirements.reqItem.map((ele,i)=> {
                                    return <li key={i} className='list-group-item'>{ele}</li>
                                })
                            }
                        </ul>
                        <h3 className="my-2 text-warning">
                            Job Responsibility
                        </h3>
                        <p className="lead">
                            {responsibility.resTitle}
                        </p>
                        <ul className="list-group">
                            {
                                responsibility.resItem.map((ele,i)=> {
                                    return <li key={i} className='list-group-item'>{ele}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}