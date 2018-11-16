import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
    InputGroup,
    Colors,
} from '@blueprintjs/core';
import Filter from './Filter';

const styles = StyleSheet.create({
    root: {
        height: '100vh',
        width: '100%',
        backgroundColor: Colors.DARK_GRAY5,
        padding: '2em',
        overflow: 'auto',
    },
    searcBox: {
        margin: 'auto',
        width: '40%',
    },
    filter: {
        padding: '1em',
        boxSizing: 'border-box',
        float: 'left',
    }
});

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className={css(styles.root)}>
                <InputGroup
                    intent='primary'
                    leftIcon='search'
                    placeholder='Search'
                    type='text'
                    className={css(styles.searcBox)}
                />
                <Filter styles={[styles.filter,]} />
            </div>
        );
    }
}

export default Search;