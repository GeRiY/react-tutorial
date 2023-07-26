import React, {  } from 'react';
import classes from './classes.module.scss';
import {ComponentProps} from './model';
class Another extends React.Component {
    constructor(props: ComponentProps) {
        super(props);
    }

    render() {
        return (
            <div>
                Another
            </div>
        );
    }
}
export default Another;