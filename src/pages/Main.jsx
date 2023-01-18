import React from 'react';
import structure from '../components/structure.json'
import CardList from "../components/CardList";

const Main = () => {
    if (!structure.length) {
        return (
            <div className="wrapper">
                <h1 className="title">Карточки не найдены</h1>
            </div>
        )
    }

    return (
        <div className="wrapper">
            <div className="container">
                <h1 className="title">Ты сегодня покормил кота?</h1>
                <div className="content">
                    <CardList classes='content__list' structure={structure}></CardList>
                </div>
            </div>
        </div>
    );
};

export default Main;