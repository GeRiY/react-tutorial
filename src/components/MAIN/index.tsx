import React, {  } from 'react';
import classes from './classes.module.scss';
import {ComponentProps} from './model';
import Another from '../Another';
import Secondary from '../Secondary';
class Main extends React.Component {
    constructor(props: ComponentProps) {
        super(props);
    }

    render() {
        return (
            <div>
                Main
                <Another />
                <Secondary />
            </div>
        );
    }
}
export default Main;