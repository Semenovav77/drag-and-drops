const SET_NEW_CARD = 'panel/SET_NEW_CARD';
const SET_NEW_PANEL = 'panel/SET_NEW_PANEL';


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
        default:
            return state;
    }
};

export const addCard = (card, panelIndex) => {
    return {
        type: SET_NEW_CARD,
        card,
        panelIndex
    }
};

export const addPanel = (title) => {
    return {
        type: SET_NEW_PANEL,
        title
    }
};

export default panelReducer;