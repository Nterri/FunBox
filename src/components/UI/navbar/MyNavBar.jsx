import React, {useContext, useState} from 'react';
import classes from "./MyNavBar.module.css"
import MyInput from "../input/MyInput";
import MySelect from "../select/MySelect";
import areas from "../../timesArea";
import {AuthContext} from "../../../context";
import {useHistory} from "react-router-dom";

const MyNavBar = () => {
    const router = useHistory()
    const [menu, setMenu] = useState(false)
    const {city, setCity} = useContext(AuthContext)

    const menuChange = () => {
        setMenu(!menu)
    }

    document.addEventListener('click', () => {
        setMenu(false)
    })

    const areaCity = []
    areas.forEach(area => areaCity.push(area.city))

    const stop = (e) => {
        e.stopPropagation()
    }

    return (
        <div className={classes.navbar}>
            <div className={classes.block}>
                <i className="icon-search"></i>
                <MyInput className={classes.input} style={{paddingLeft: 0}} placeholder="Поиск..." onChange={() => {router.push(`/календарь`)}}/>
            </div>
            <MySelect
                value={city}
                classList={classes.select}
                onChange={value => setCity(value)}
                options={areaCity}
            >
            </MySelect>
            <div className={classes.notifications} onClick={stop}>
                <i onClick={menuChange} className="icon-notifications-outline"></i>
                <span>0</span>
                <div className={menu ? [classes.container, classes.active].join(' ') : classes.container}></div>
            </div>
        </div>
    );
};

export default MyNavBar;