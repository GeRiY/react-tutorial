import React, {  } from 'react';
import classes from './MAIN.module.scss';
import {ComponentProps} from './MAIN.model';
class Main extends React.Component {
    constructor(props: ComponentProps) {
        super(props);
    }

    render() {
        return (
            <div>
                Main
            </div>
        );
    }
}
export default Main;