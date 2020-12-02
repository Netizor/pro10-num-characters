import {CharContext} from "../reducers/characters";
import { useContext }  from 'react';
import styled  from 'styled-components';



const StyleRender = () => {

    const [state, dispatch] = useContext(CharContext);

    return (
        <div className="container">

            <h1>Vos messages enregistrés</h1>

            <p>Nombre de message : { state.messages.length }</p>

            <ul className="list-group">

                { (state.messages.length === 0) ? <p>Hop hop hop ! Veuillez circuler, il n'y a rien voir içi !</p> :

                    state.messages.map( (message, index) => {

                        let style = { fontSize: `${ message.textSize }px`, color: `${ message.textStyle }` };

                        return (
                            <li className="list-group-item" key={index} style={ style }>
                                <div>
                                    <span>{ message.text }</span>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-danger" onClick={ () => dispatch({ type: 'DELETE_MESSAGE', target: index }) }>Supprimer</button>
                                </div>
                            </li>
                        )

                    } )

                }

            </ul>

        </div>
    )

}

export default StyleRender;
