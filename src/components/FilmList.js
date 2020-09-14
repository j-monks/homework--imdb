import React, { Component } from 'react';
import FilmItem from "./FilmItem";

class FilmList extends Component {
    render() {
        const filmNodes = this.props.films.map((film) => {
            return (
                <FilmItem key={film.id} film={film.name} url={film.url}></FilmItem>
            );
        });
        return (
            <>
                <h3>FilmList</h3>
                {commentNodes}
            </>
        );
    }
}

export default FilmList;