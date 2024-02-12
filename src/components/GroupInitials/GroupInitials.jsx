import React from 'react';
import useInitials from '../../utils/useInitials';

const GroupInitials = ({ name }) => {
	const initials = useInitials(name);
	// console.log('initials', initials);
	return <div>{initials}</div>;
};

export default GroupInitials;
