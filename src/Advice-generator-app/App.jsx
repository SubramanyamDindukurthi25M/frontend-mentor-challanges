import { useState} from "react";
import axios from 'axios';
import sweetalert from 'sweetalert';
import { DisplayData } from "./Components/DisplayData";

export const App = () => {
    // Local State
    const [quote, setQuote] = useState({});

    const baseUrl = 'https://api.adviceslip.com/advice';

    // Asynchronous Operation
    const fetchData = () => {
        axios
            .get(baseUrl)

            // success
            .then((response) => {
                const result = response.data.slip;
                setQuote(result);
            })

            // failure
            .catch((error) => {
                sweetalert(error.message);
            })
    }

    return (
        <DisplayData
            sendQuoteObject = {quote}
            handleFetchRandomQuote = {fetchData}
        />
    )
}