import React, {useState} from 'react';

const Card = ({card}) => {
    const [selected, setSelected] = useState(false)
    const [leave, setLeave] = useState(false)

    const checkMouse = () => {
        setSelected(!selected)
        setLeave(false)
    }

    const cancelSelect = () => {
        if (selected && !leave) {
            setLeave(true)
        }
    }

    return (
        <div className={card.ended == 'true' ? 'card ended' : (selected == true ? 'card selected' : 'card')}>
            <div
                onClick={checkMouse}
                onMouseLeave={cancelSelect}
                className="card__content content-card"
            >
                <div className="content-card__text text-content">
                    <h5 className="text-content__pre-title pre-title-text">
                        <span className={leave == true ? 'pre-title-text__desk desk-text' : 'pre-title-text__desk'}>{card.preTitle}</span>
                        <span className={leave == true ? 'pre-title-text__cancel cancel-text' : 'pre-title-text__cancel'}>Котэ не одобряет?</span>
                    </h5>
                    <h2 className="text-content__title">{card.mainTitle}</h2>
                    <h4 className="text-content__title-with">{card.titleWith}</h4>
                    <ul className="text-content__list">
                        <li><span>{card.portions}</span> {card.portions != 1 ? (card.portions >= 5 ? 'порций' : 'порции') : 'порция'}</li>
                        <li><span>{card.mouse != '0' ? card.mouse : ''}</span> {card.mouse != 0 ? (card.mouse >= 5 ? 'мышей' : 'мыши') : 'мышь'} в подарок</li>
                        {card.satisfied != undefined && card.satisfied == 'true' &&
                             <li>заказчик доволен</li>
                        }
                    </ul>
                </div>
                <div className="content-card__weight weight-content">
                    <h2 className="weight-content__count">{card.currentWeight}</h2>
                    <span className="weight-content__kg">кг</span>
                </div>
            </div>
            {card.ended == 'false' &&
            <div className="card__link">Чего сидишь? Порадуй котэ, <span onMouseLeave={cancelSelect} onClick={checkMouse}>купи.</span></div>
            }
            {card.ended == 'false' &&
            <div className="card__desk">{card.desk}</div>
            }
            {card.ended == 'true' &&
            <div className="card__ended">Печалька, {card.titleWith} закончился.</div>
            }
        </div>
    );
};

export default Card;