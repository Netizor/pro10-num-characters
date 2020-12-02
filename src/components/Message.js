import { CharContext } from "../reducers/characters";
import { useContext }  from 'react';

const Message = () => {

    const [state, dispatch] = useContext(CharContext);

    return (
        <div className="container">

            <h1>Enregistrer un message</h1>

            <form onSubmit={ (e) => { e.preventDefault(); dispatch({ type: 'ON_SUBMIT' }) } }>

                {
                    (state.result.length > 0) ?
                        <div className= { (state.error) ? "alert alert-danger alert-dismissible fade show" : "alert alert-success alert-dismissible fade show" }>
                            <p>{ state.result }</p>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                    : ''
                }

                <div className="form-group">
                    <label htmlFor="message">Saisir votre texte</label>
                    <textarea className="form-control" name="" id="message" cols="30" rows="10" value={ state.text } onChange={ (event) => dispatch({ type: 'ON_CHANGE', value: event.target.value, name: 'text' }) }></textarea>
                </div>

                <div className="form-group">
                    <span>Nombre de lettres des mots :</span>
                </div>

                <div className="form-group">
                    <label htmlFor="style">Selectionnez un style de rendu</label>
                    <select name="" id="style" className="form-control" value={ state.textStyle } onChange={ (event) => dispatch({ type: 'ON_CHANGE', value: event.target.value, name: 'textStyle' }) }>
                        <option value="palevioletred">palevioletred</option>
                        <option value="tomato">tomato</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="font_size">Taille du texte (en px)</label>
                    <select name="" id="font_size" className="form-control" value={ state.textSize } onChange={ (event) => dispatch({ type: 'ON_CHANGE', value: event.target.value, name: 'textSize' }) }>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                    </select>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Valider</button>
                </div>

            </form>

        </div>
    )

}

export default Message;
