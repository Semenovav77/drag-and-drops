const SET_NEW_CARD = 'panel/SET_NEW_CARD';
const SET_NEW_PANEL = 'panel/SET_NEW_PANEL';
const SET_REORDER_CARD = 'panel/SET_REORDER_CARD';


const initialState = [
    {
        title: 'Первая панель',
        cards: [
            "Сделать приложение драг&дроп",
            "Улучшить навыки реакт",
            "Устроиться на работу"
        ]
    },
    {
        title: 'Вторая панель',
        cards: [
            "Сделать приложение драг&дроп",
            "Улучшить навыки реакт",
            "Улучшить навыки html",
            "Улучшить навыки js",
            "Устроиться на работу"
        ]
    }
];


const panelReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_CARD:
            return state.map((item, index) => {
                if (index === action.panelIndex) {
                    return {
                        ...item,
                        cards: [...item.cards, action.card]
                    };
                }
                return item;
            });
        case SET_NEW_PANEL:
            return [
                ...state,
                {
                    title: action.title,
                    cards: []
                }
            ];
        case SET_REORDER_CARD:
            return state.map((item, currentPanel) => {
                if (Number(action.destination.droppableId) === currentPanel) {
                    const sourceCard = state[Number(action.source.droppableId)].cards.splice(action.source.index, 1);
                    const newCards = Array.from(item.cards);
                    newCards.splice(action.destination.index, 0, sourceCard);
                    debugger
                    return {
                        ...item,
                        cards: newCards
                    }
                }

                return item;
            });
        default:
            return state;
    }
};

export const addCard = (card, panelIndex, draggableId) => {
    return {
        type: SET_NEW_CARD,
        card,
        panelIndex,
        draggableId
    }
};

export const addPanel = (title) => {
    return {
        type: SET_NEW_PANEL,
        title
    }
};

export const reOrder = (destination, source, draggableId) => {
    return {
        type: SET_REORDER_CARD,
        destination,
        source,
        draggableId
    }
};

export default panelReducer;



/*
case SET_REORDER_CARD:
    const start = state[Number(action.source.droppableId)];
const finish = state[Number(action.destination.droppableId)];
return state.map((item, currentPanel) => {
    if (Number(action.destination.droppableId) === currentPanel) {
        const newCards = Array.from(item.cards);
        newCards.splice(action.source.index, 1);
        newCards.splice(action.destination.index, 0, item.cards[action.source.index]);
        return {
            ...item,
            cards: newCards
        }
    }

    return item;
});*/
