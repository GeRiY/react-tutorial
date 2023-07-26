import React, {  } from 'react';
import classes from './classes.module.scss';
import {ComponentProps} from './model';
import Another from '../Another';
class Secondary extends React.Component {
    constructor(props: ComponentProps) {
        super(props);
    }

    render() {
        return (
            <div>
                Secondary
            </div>
        );
    }
}
export default Secondary;