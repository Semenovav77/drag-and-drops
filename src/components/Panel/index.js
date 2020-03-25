import React from 'react';
import PropTypes from 'prop-types';
import {Card} from './../../components';
import {AddFormContainer} from './../../containers';
import {Droppable} from 'react-beautiful-dnd';

import './Panel.scss';

const Panel = ({panel: {title, cards}, panelIndex, addCard, addPanel}) => {

    return (
        <>
            <Droppable droppableId={`${panelIndex}`} type="PERSON">
                {(provided, snapshot) => (
                    <div className='panel' ref={provided.innerRef} {...provided.droppableProps}>
                        <div className='panel__title'>
                            {title}
                        </div>
                        <div className='panel__items'>
                            {cards.map((card, index) =>
                                <Card key={index} cardIndex={index} panelIndex={panelIndex} typeCard={false}>{card}</Card>)
                            }
                        </div>
                        <AddFormContainer PanelAdd={false} panelIndex={panelIndex} addCard={addCard}
                                          addPanel={addPanel}/>
                    </div>
                )}

            </Droppable>;
        </>
    );
};

Panel.propTypes = {
    text: PropTypes.string
};

export default Panel;
