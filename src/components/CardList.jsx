import React from 'react';
import Card from "./Card";

const CardList = ({classes, structure}) => {
    return (
        <div className={classes}>
            {structure.map((card, index) =>
                <Card key={index} card={card}></Card>
            )}
        </div>
    );
};

export default CardList;