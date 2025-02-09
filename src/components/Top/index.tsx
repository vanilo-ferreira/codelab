import './style.css';

import codelab from "../../assets/codelab.svg";

export function Top() {
    return (
        <div className="topo">
            <img className="logo" src={codelab} alt="Codelab logo" />
            <input
                className="search"
                type="text"
                id="search"
                name="search"
                placeholder="Pesquisar no blog"
            />
        </div>
    );
}