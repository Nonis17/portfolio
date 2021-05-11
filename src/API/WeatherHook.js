import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Background = styled.div`
background-image: linear-gradient(#c36e3cc5, #92471cdc);  
width: 100%;
`;

const DIV = styled.div`
padding: 15px;
 display: flex;
flex-direction: column;
color: white; 


h2 {
    font-weight: bold;
    color: white;
    padding: 5px;
    text-align: center;
    display: block;
    border-radius: 4px;
    }


div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    margin-right: 20px;

    @media (max-width: 414px) {
       flex-direction: column;
    }

}

p { 
    text-align: center;
    color: white;
}

span {
    margin-top: 20px;
    font-size: 16px;
    margin-right: 20px;
   color: white;


}
`;

const Weather = styled.img`
    width: 10%;
    margin: 0 auto;
`;

const Sun = styled.img`
width: 16px;
margin-right: 10px;
`;


//Lagra API i en variabel
const url = "http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=e80414b67321de801980abe538477abb&units=metric";

const WeatherWithHooks = () => {
    const [data, setData] = useState({ data: null });

    //(useEffect = Life cycle method. In class components = componentDidMount)
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setData({ data: json }));
    }, []);

    function sunInfo(data, isSunrise) {
        if (data === null ||
            data.data === null) {
            return ''
        }

        let unixTimestamp = isSunrise ? data.data.sys.sunrise : data.data.sys.sunset

        return moment(unixTimestamp * 1000).format("LT");
    }

    return (
        <Background>
        <DIV>
            <h2>Weather forecast</h2>
   
            <Weather src="/images/cloudy.png" alt="weather" />
            <p>
                Temperature is {!data.data ? '?' : data.data.main.temp.toFixed(1)} °C, but feels like {!data.data ? '?' : data.data.main.feels_like.toFixed(1)} °C, in Stockholm right now! </p>
            <p> Dress accordingly and enjoy the fresh air.</p>

            <div>
                <span>
                 <Sun src="/images/uparrow.png" alt="sunrise" />
                Sunrises {sunInfo(data, true)}
                </span>
                <span>
                <Sun src="/images/down-arrow.png" alt="sunset" />
                Sunsets {sunInfo(data, false)}
                </span>
            </div>
        </DIV>
        </Background>

    );
}

export default WeatherWithHooks;

