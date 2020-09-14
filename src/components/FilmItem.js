import React, { Component } from 'react';

class FilmItem extends Component {
    render() {
        return (
            <>
                <a href={this.props.url}><h1>{this.props.film}</h1></a>
            </>
        );
    }
}

export default FilmItem;