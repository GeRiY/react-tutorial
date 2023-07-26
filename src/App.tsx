import { forwardRef } from 'react';
import MAIN from './components/MAIN';

function App(props: any, ref: any) {
	return <MAIN {...props} ref={ref} />;
}

export default forwardRef(App);
