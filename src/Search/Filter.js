import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
    HTMLSelect,
    RangeSlider,
    Slider,
} from '@blueprintjs/core';
import {
    DatePicker,
} from '@blueprintjs/datetime';

const styles = StyleSheet.create({
    root: {
        padding: '1em',
        textAlign: 'left',
        width: '17%',
    },
    margin: {
        margin: '1em',
    },
    marginUpDown: {
        margin: '1.5em 0',
    },
    label: {
        display: 'inline-block',
    },
    options: {
        width: 'auto',
        display: 'inline-block',
        margin: '0 1em',
    },
    date: {
        width: 'auto',
    }
})

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className={css(styles.root, this.props.styles)}>
                <p class='bp3-running-text' className={css(styles.label)}>Location:</p>
                <HTMLSelect
                    options={['Bangalore', 'Chennai', 'Rajasthan']}
                    className={css(styles.options)}
                />
                <p class='bp3-running-text'>Start Date:</p>
                <DatePicker className={css(styles.date, styles.margin)} />
                <p class='bp3-running-text'>Salary:</p>
                <RangeSlider
                    className={css(styles.marginUpDown)}
                />
                <p class='bp3-running-text'>Communication Skills</p>
                <Slider
                    className={css(styles.marginUpDown)}
                />
                <p class='bp3-running-text' className={css(styles.label)}>Branch:</p>
                <HTMLSelect
                    options={['CSE', 'IT', 'CCE']}
                    className={css(styles.options)}
                />
            </div>
        );
    }
}
export default Filter;