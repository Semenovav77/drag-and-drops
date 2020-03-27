import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import './Card.scss';
import {Draggable} from "react-beautiful-dnd";
import deleteIcon from "../../assets/delete.svg";

const Card = ({children, cardIndex, panelIndex, typeCard, delCard}) => {
   /* const [showDelBtn, editShowBtn] = useState(false);
    const showBTN = () => {
        editShowBtn(!showDelBtn)
    };*/
   const onDelete = () => {
       delCard(panelIndex, cardIndex)
   };
    return (
        <>
            {(!typeCard) ? (
                    <Draggable draggableId={`${cardIndex}_${panelIndex}`} index={cardIndex}>
                        {(provided, snapshot) => (
                            <div className='card'
                                 ref={provided.innerRef}
                                 {...provided.draggableProps}
                                 {...provided.dragHandleProps}
                            >
                                <div className='card__content'>
                                    {children}
                                </div>
                                <div className='card__delete-btn' onClick={onDelete}>
                                    <img src={deleteIcon} alt='Delete svg' />
                                </div>
                            </div>
                        )}
                    </Draggable>
                ) :
                (
                    <div className='card'>
                        {children}
                    </div>
                )
            }
        </>
    );
};

Card.propTypes = {
    text: PropTypes.string
};

export default Card;

