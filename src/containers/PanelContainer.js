import React, {useCallback} from 'react';
import {connect} from "react-redux";

import {addCard, addPanel} from "../redux/panel-reduser";
import {Panel} from "../components";
import {AddFormContainer} from "./index";
import {DragDropContext} from "react-beautiful-dnd";

const Panels = ({panel, addCard, addPanel}) => {

    const onBeforeDragStart = useCallback(() => {
        /*...*/
    }, []);

    const onDragStart = useCallback(() => {
        /*...*/
    }, []);
    const onDragUpdate = useCallback(() => {
        /*...*/
    }, []);
    const onDragEnd = useCallback(() => {
        // the only one that is required
    }, []);

    return (
        <div className='panels'>
            <DragDropContext
               /* onBeforeDragStart={this.onBeforeDragStart}
                onDragStart={this.onDragStart}
                onDragUpdate={this.onDragUpdate}
                onDragEnd={this.onDragEnd}*/
            >
                {panel.map((panel, index) => <Panel panel={panel} key={index} panelIndex={index} addCard={addCard}/>)}
            </DragDropContext>
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
