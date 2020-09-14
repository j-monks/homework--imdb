import React, { Component } from 'react';
import FilmItem from "./FilmItem";

class FilmList extends Component {
    render() {
        const filmNodes = this.props.films.map((film) => {
            return (
                <ul>
                    <li>
                        <FilmItem key={film.id} film={film.name} url={film.url}></FilmItem>
                    </li>
                </ul>
            );
        });
        return (
            <>
                <h3>FilmList</h3>
                {filmNodes}
            </>
        );
    }
}

export default FilmList;