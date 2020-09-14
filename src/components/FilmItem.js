import React, { Component } from 'react';

class FilmItem extends Component {
    render() {
        return (
            <>
                <h1>{this.props.name}</h1>
                <h4>{this.props.url}</h4>
            </>
        );
    }
}

export default FilmItem;