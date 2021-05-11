import { StylesProvider } from '@material-ui/styles';
import React, {useState, useEffect} from 'react';
import {Line, Bar} from 'react-chartjs-2';

import styles from './Charts.module.css';

import {fecthDataDaily} from '../../api';

const Charts = ({data, country}) => {
    const [dailyCases, setDailyCases] = useState([]);
    useEffect(()=>{
        const fetchedData = async () => {
            setDailyCases(await fecthDataDaily()); 
        }
        fetchedData();
    },[]);

    const barChart = (
        data.confirmed ?
        (
            <Bar 
                options={{
                title: { display: true, text: `Current state in ${country}` },
              }}
               data={{
                labels:['Infected', 'Recovered', 'Deaths'],
                datasets:[{
                    labels: ['People','xyz','asd'],
                    backgroundColor:[
                    'rgba(0, 0, 250, 0.5)',
                    'rgba(0, 250, 0, 0.5)',
                    'rgba(250, 0, 0, 0.5)',
                    ],
                    data:[
                        data.confirmed.value,
                        data.recovered.value,
                        data.deaths.value
                    ]
                }]
               }} 
               
            />
        ) : null
    );
    const lineChart = (
        dailyCases.length ? 
        (
            <Line 
                data ={{
                    labels:dailyCases.map(({reportDate}) => reportDate),
                    datasets:[{
                        data:dailyCases.map(({totalConfirmed}) => totalConfirmed),
                        label:'infected',
                        borderColor:'#3333ff',
                        fill:true
                    },
                    {
                        data:dailyCases.map(({deltaConfirmed}) => deltaConfirmed),
                        label:'deaths',
                        borderColor:'red',
                        fill:true
                    }]
                }}
            />

        ):null
    );
    return(
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    );
}

export default Charts;