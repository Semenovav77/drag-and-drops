import React from 'react';
import PropTypes from 'prop-types';
import {Card} from './../../components';
import {AddFormContainer} from'./../../containers';

import './Panel.scss';

const Panel = ({panel: {title, cards}, panelIndex, addCard, addPanel}) => {

    return (
        <>
            <div className='panel'>
                <div className='panel__title'>
                    {title}
                </div>
                <div className='panel__items'>
                    {cards.map((card, index) => <Card key={index}>{card}</Card>)}
                </div>
                <AddFormContainer PanelAdd={false} panelIndex={panelIndex} addCard={addCard} addPanel={addPanel}/>
            </div>
        </>
    );
};

Panel.propTypes = {
    text: PropTypes.string
};

export default Panel;