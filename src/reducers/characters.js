import { createContext } from 'react';
import {act} from "@testing-library/react";

const initialState = {
    text: '',
    textStyle: 'palevioletred',
    textSize: '15',
    messages: [],
    result: '',
    authorizedStyles: [ 'palevioletred', 'tomato' ],
    authorizedTextSize: [ '15', '16', '17', '18', '19', '20' ],
    error: false,
    letters: 0
}

const reducer = (state, action) => {

    switch(action.type){

        case 'ON_CHANGE':

            const letters = action.value.trim().split(' ').map( (word) => word.length ).join(' ');

            return {
                ...state,
                [action.name]: action.value,
                letters: letters
            };

        case 'ON_SUBMIT':

            let result= 'Message enregistré !', error = false;
            let messages = [...state.messages];

            if( state.text.trim().length === 0 )
            {
                result = "veuillez saisir un message !";
                error = true;
            }

            else if( !state.authorizedTextSize.includes( state.textSize ) )
            {
                result = "Cette taille de texte n'est pas valide !";
                error = true;
            }

            else if( !state.authorizedStyles.includes( state.textStyle ) )
            {
                result = "Cette couleur de texte n'est pas valide !";
                error = true;
            }

            else
            {
                messages.push( { textStyle: state.textStyle, textSize: state.textSize, text: state.text } );
            }

            console.log( messages )

            return {
                ...state,
                text: '',
                messages: messages,
                textStyle: 'palevioletred',
                textSize: '15',
                result: result,
                error: error
            };

        case 'DELETE_MESSAGE':

            let registeredMessages = [...state.messages];
            registeredMessages.splice(action.target, 1)

            return {
                ...state,
                messages: registeredMessages,
                result: '',
                error: false
            };

        default:
            return state;
    }

}

const CharContext = createContext([]);

export { initialState, reducer, CharContext }
