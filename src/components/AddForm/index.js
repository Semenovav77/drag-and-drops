import React from 'react';

import {Button, Card} from './../../components';
import addIcon from './../../assets/addIcon.svg';
import closeIcon from './../../assets/close.svg';


const AddForm = ({edit, changeFormInput, value, changeValue, sendObj, panelIndex, PanelAdd}) => {
    return (
        <>
            {(!edit) ?
                <div className='panel__bottom'>
                    <div className='panel__bottom-add' onClick={changeFormInput}>
                        <img src={addIcon} alt='Add svg'/>
                        <span>{ !PanelAdd ? ('Добавить еще одну карточку') : ('Добавить панель')}</span>
                    </div>
                </div>
                :
                <div className='add-form'>
                    <div className='add-form__input'>
                        <Card typeCard={true}> <textarea placeholder={ !PanelAdd ? 'Введите карточку...' : 'Введите заголовок панели...' } rows='3' value={value} onChange={changeValue}></textarea> </Card>
                        <div className='add-form__input-btn'>
                            <Button sendObj={sendObj} panelIndex={panelIndex} value={value}>{ !PanelAdd ? 'Добавить карточку' : 'Добавить заголовок' }</Button>
                            <img src={closeIcon} alt='Close svg' onClick={changeFormInput}/>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};


export default AddForm;