import React, {useState, useEffect }  from 'react'
import { Text, ScrollView} from 'react-native'
import LocalStyles from './styles';
import {getRemaningTimeUnitMsTimestamp} from './utils/CountdownTimerUtils'

const defaultRemainingTime = {
    seconds: '03',
    minutes: '02',
    hours: '01',
}

const CountdownTimer = ({countdownTimeStampMs}) => {

    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalID = setInterval (() => {
            updateRemaningTime(countdownTimeStampMs);
        }, 1000)
        return () => clearInterval(intervalID)
    }, [countdownTimeStampMs])

    function updateRemaningTime (countdown) {
        setRemainingTime(
            getRemaningTimeUnitMsTimestamp(countdown)
        );
    }

    return (
        <ScrollView style={LocalStyles.countdowntimer}>
            <Text style={LocalStyles.texto}
            >{remainingTime.hours}:{remainingTime.minutes}
            </Text>
        </ScrollView>   
    );
}
//<Text>{remainingTime.seconds}</Text>
export default  CountdownTimer;