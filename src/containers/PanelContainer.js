import React, {useCallback} from 'react';
import {connect} from "react-redux";

import {addCard, addPanel, reOrder, delCard} from "../redux/panel-reduser";
import {Panel} from "../components";
import {AddFormContainer} from "./index";
import {DragDropContext} from "react-beautiful-dnd";

const Panels = ({panel, addCard, addPanel, reOrder, delCard}) => {

    const onBeforeDragStart = useCallback(() => {
        /*...*/
    }, []);

    const onDragStart = useCallback(() => {
        /*...*/
    }, []);
    const onDragUpdate = useCallback(() => {
        /*...*/
    }, []);
    const onDragEnd = useCallback((result) => {
        const { destination, source, draggableId } = result;
        console.log(destination);
        console.log(source);
        console.log(draggableId);
        if (!destination) { return }
        reOrder(destination, source, draggableId);
    }, []);

    return (
        <div className='panels'>
            <DragDropContext
              /*  onBeforeDragStart={this.onBeforeDragStart}
                onDragStart={this.onDragStart}
                onDragUpdate={this.onDragUpdate}*/
                onDragEnd={onDragEnd}
            >
                {panel.map((panel, index) => <Panel panel={panel} key={index} panelIndex={index} addCard={addCard} delCard={delCard}/>)}
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
    addCard, addPanel, reOrder, delCard
})(Panels);

export default PanelContainer;
