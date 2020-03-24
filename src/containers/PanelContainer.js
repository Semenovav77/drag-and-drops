import React from 'react';
import {connect} from "react-redux";

import {addCard} from "../redux/panel-reduser";
import {Panel} from "../components";

const Panels = ({panel, addCard}) => {
    return (
       <div className='panels'>
           {panel.map((panel, index) => <Panel panel={panel} key={index} panelIndex={index} addCard={addCard}/>)}
       </div>
    )
};

const mapStateToProps = (state) => ({
    panel: state.panel
});

const PanelContainer =  connect(mapStateToProps, {
    addCard
})(Panels);

export default PanelContainer;
