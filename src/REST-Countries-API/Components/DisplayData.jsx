import { useState,useEffect } from "react";
import axios from 'axios';
import sweetalert from 'sweetalert';

export const DisplayData = () => {
    // State variable
    const [countryData, setCountryData] = useState([]);
    const [boolValue, setBoolValue] = useState(true);
    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    const filterData = countryData.filter((ele) => {
        return ele.name.common.toLowerCase().includes(inputValue);
    })

    const baseUrl = 'https://restcountries.com/v3.1/all';

    // Asynchronous Operation
    const fetchData = () => {
        axios
            .get(baseUrl)

            // success
            .then((response) => {
                const result = response.data;
                setCountryData(result);
                setBoolValue(!true);
            })

            // failure
            .catch((error) => {
                sweetalert(error.message);
            })
    }
    useEffect(fetchData, []);

    const DisplayDataCard = (
        filterData.map((country,i) => {
            const {flags,name,population,region,capital} = country;
            return(
                <div className="col-lg-3 col-sm-6 rounded my-2" key={i}>
                    <div className="card">
                        <img 
                            src={flags.png}
                            alt={name.common} 
                            className='img-fluid card-img-top'
                        />
                        <div className="card-body bg-light">
                            <h5 className="card-title"> 
                                {name.common}
                            </h5>
                            <h6>
                                Population : <span> {population} </span>
                            </h6>
                            <h6>
                                Region : <span> {region} </span>
                            </h6>
                            <h6>
                                Capital : <span> {capital} </span>
                            </h6>
                        </div>
                    </div>
                </div>
            )
        })
    )

    return (
        <section>
            <form autoComplete="off" className="my-2 px-5">
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control-sm"
                        value={inputValue}
                        onChange={handleInputValue}
                        placeholder='Filter by country...'
                    />
                </div>
            </form>

            <div className="container">
                <div className="row">
                    {
                        boolValue ? <h2>Loading....</h2> : DisplayDataCard
                    }
                </div>
            </div>
        </section>
    )
}