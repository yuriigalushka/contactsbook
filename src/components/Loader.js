import React from 'react';

const Loader = () => {
	return (
		<div
			className='loader-modal'
			onClick={e => e.preventDefault()}>
			<div className='lds-dual-ring' />
		</div>
	);
};

export default Loader;