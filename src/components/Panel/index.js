import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Card} from './../../components';
import addIcon from './../../assets/addIcon.svg';
import closeIcon from './../../assets/close.svg';

import './Panel.scss';

const Panel = ({panel: {title, cards}, panelIndex, addCard}) => {
    const [edit, editSwitch] = useState(false);
    const [value, setValue] = useState('');
    const changeFormInput = () => {
        editSwitch(!edit);
    };
    const changeValue = (e) => {
        setValue(e.target.value)
    };
    const sendCard = (value, panelIndex) => {
        addCard(value, panelIndex);
        setValue('');
        editSwitch(false);
    };

    return (
        <>
            <div className='panel'>
                <div className='panel__title'>
                    {title}
                </div>
                <div className='panel__items'>
                    {cards.map((card, index) => <Card key={index}>{card}</Card>)}
                </div>
                {(!edit) ?
                    <div className='panel__bottom'>
                        <div className='panel__bottom-add' onClick={changeFormInput}>
                            <img src={addIcon} alt='Close svg'/>
                            <span>Добавить еще одну карточку</span>
                        </div>
                    </div>
                    :
                    <div className='add-form'>
                        <div className='add-form__input'>
                            <Card> <textarea placeholder='Введите карточку...' rows='3' value={value} onChange={changeValue}></textarea> </Card>
                            <div className='add-form__input-btn'>
                                <Button sendCard={sendCard} panelIndex={panelIndex} value={value}>Добавить карточку</Button>
                                <img src={closeIcon} alt='Add svg' onClick={changeFormInput}/>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

Panel.propTypes = {
    text: PropTypes.string
};

export default Panel;