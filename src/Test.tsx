import { forwardRef } from 'react';
import MAIN from './components/MAIN';
function Test(props: any, ref: any) {
	const _props = {};
	return <div style={{padding:20}}>
		<MAIN {...props} {..._props} />
	</div>;
}

export default forwardRef(Test);
