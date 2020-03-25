import React from 'react';
import {connect} from "react-redux";

import {addCard, addPanel} from "../redux/panel-reduser";
import {Panel} from "../components";
import {AddFormContainer} from "./index";

const Panels = ({panel, addCard, addPanel}) => {
    return (
        <div className='panels'>
            {panel.map((panel, index) => <Panel panel={panel} key={index} panelIndex={index} addCard={addCard}/>)}
            <div className='panel'>
                <AddFormContainer PanelAdd={true} addCard={addCard} addPanel={addPanel}/>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    panel: state.panel
});

const PanelContainer = connect(mapStateToProps, {
    addCard, addPanel
})(Panels);

export default PanelContainer;
