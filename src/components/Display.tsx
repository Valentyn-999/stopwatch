import React from 'react';
import {TimeType} from "../App";

type PropsType = {
    time: TimeType
}

export const Display = (props: PropsType) => {
    const h = () => {
        return props.time.h === 0 ? '' : <span>{(props.time.h >= 10) ? props.time.h : "0" + props.time.h}</span>
    }
    return (
        <React.Fragment>
            {h()}&nbsp;&nbsp;
            <span>{(props.time.m >= 10)? props.time.m : "0"+ props.time.m}</span>&nbsp;:&nbsp;
            <span>{(props.time.s >= 10)? props.time.s : "0"+ props.time.s}</span>&nbsp;:&nbsp;
            <span>{(props.time.ms >= 10)? props.time.ms : "0"+ props.time.ms}</span>
        </React.Fragment>
    )
}
