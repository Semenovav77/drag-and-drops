import React, {useState} from 'react';
import {AddForm} from './../components';


const AddFormContainer = ({panelIndex, addCard, PanelAdd, addPanel}) => {
    const [edit, editSwitch] = useState(false);
    const [value, setValue] = useState('');
    const changeFormInput = () => {
        editSwitch(!edit);
    };
    const changeValue = (e) => {
        setValue(e.target.value)
    };
    const sendObj = (value, panelIndex) => {
       if (value) {
           if (!PanelAdd) {
               addCard(value, panelIndex);
               setValue('');
               editSwitch(false);
           } else {
               addPanel(value);
               setValue('');
               editSwitch(false);
           }
       }

    };

    return (
                <AddForm PanelAdd={PanelAdd}
                         edit={edit}
                         changeFormInput={changeFormInput}
                         value={value}
                         changeValue={changeValue}
                         sendObj={sendObj}
                         panelIndex={panelIndex}/>
    );
};

export default AddFormContainer;