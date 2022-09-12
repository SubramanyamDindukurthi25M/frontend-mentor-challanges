import {FaQuoteLeft} from 'react-icons/fa';
import {FaQuoteRight} from 'react-icons/fa';
import pattern from '../images/pattern-divider-desktop.svg';
import dice from '../images/icon-dice.svg';
import '../Styling/Main.scss';

export const DisplayData = ({sendQuoteObject,handleFetchRandomQuote}) => {
    return (
        <section>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-4 mx-auto colMar">
                        <div className="card rounded p-3">
                            <div className="card-body">
                                <div className="card-title text-center">
                                    <h6>
                                        advice - #{sendQuoteObject.id}
                                    </h6>
                                </div>
                                <div className="card-text">
                                    <blockquote className='blockquote'>
                                        <p className='lead para'>
                                            <FaQuoteLeft className='mr-2'/>
                                                {sendQuoteObject.advice}
                                            <FaQuoteRight className='ml-2'/>
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                            <img src={pattern} alt="pattern" />
                            <div className="card-footer text-center mt-2">
                                <button 
                                    className='btn'
                                    onClick={handleFetchRandomQuote}
                                >
                                    <img src={dice} alt="dice" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}