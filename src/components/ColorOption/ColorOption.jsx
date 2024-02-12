import React from 'react';
import styles from './colorOption.module.css';

const ColorOption = ({ color, setSelectedColor }) => {
	return (
		<div
			onClick={() => setSelectedColor(color)}
			className={styles.colorContainer}
			style={{
				backgroundColor: color,
			}}
		></div>
	);
};

export default ColorOption;
