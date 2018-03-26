import React from 'react';

/*
Please do always use Menu if possible
 */
export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.types,
            onClickHandler: props.onClickHandler
        };
    }

    render() {

    }
}