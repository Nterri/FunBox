import React from 'react';
import classes from "../sidebar/MySideBar.module.css";
import {Link, Route} from "react-router-dom";
import useTime from "../../../hooks/useTime";
import sideRoute from "../../../router/sideRoute";

const MySideBar = ({city}) => {
    let time = useTime(city)

    return (
        <div className={classes.container}>
            <Link className={classes.item} to="/"><span></span><span></span><span></span><span></span></Link>
            <div className={classes.links}>
                {sideRoute.map(route =>
                    <Link
                    key={route.path}
                    className={classes.link}
                    to={route.path}>
                    <i className={route.icon}></i>
                    </Link>
                )}
            </div>
            <div className={classes.time}>
                <div className={classes.time__place}>
                    <span>{time[0]}</span>:<span>{time[1]}</span>:<span>{time[2]}</span>
                </div>
                <div className={classes.date__place}>
                    <span>{time[3]}</span>.<span>{time[4]}</span>.<span>{time[5]}</span>
                </div>
            </div>
        </div>
    );
};

export default MySideBar;