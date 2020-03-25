import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';
import {Draggable} from "react-beautiful-dnd";

const Card = ({children, cardIndex, panelIndex, typeCard}) => {
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
                                {children}
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

