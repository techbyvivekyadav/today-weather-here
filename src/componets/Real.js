import React from 'react'

const Real = (props) => {
    
    return (
        <>
            {props.error ?
                <div className='not-found'>
                    <span className="material-symbols-outlined">
                        globe_location_pin
                    </span>
                    <h1>Search City</h1>
                    <h3>{props.erdetails}</h3>
                </div>
                :
                <div className='data'>
                    <div className='location-date'>
                        <div className='location'>
                            <span className="material-symbols-outlined">
                                location_on
                            </span>
                            <span>{props.data.location.name}</span>
                        </div>
                        <span>{props.data.location.localtime}</span>
                    </div>
                    <div className='location-date'>
                        <img src={props.data.current.condition.icon} alt='' className='img' />
                        <div className='temp'>
                            <span>{props.data.current.temp_c}&deg;C</span>
                            <span className='im'>{props.data.current.condition.text}</span>
                        </div>
                    </div>
                    <div className='location-date'>
                        <div className='humidity'>
                            <span className="material-symbols-outlined img1">
                                humidity_percentage
                            </span>
                            <div className='humidity-text'>
                                <span>Humidity</span>
                                <span>{props.data.current.humidity}%</span>
                            </div>
                        </div>
                        <div className='humidity'>
                            <span className="material-symbols-outlined img1">
                                air
                            </span>
                            <div className='humidity-text'>
                                <span>Wind Speed</span>
                                <span>{props.data.current.wind_kph}km/h</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Real