import React, { useEffect, useState } from 'react';
import styles from './colorOption.module.css';

const ColorOption = ({ color, selectedColor, setSelectedColor }) => {
	const [active, setActive] = useState(false);
	const style = {
		backgroundColor: color,
		border: active ? '1px solid black' : '',
	};

	useEffect(() => {
		if (selectedColor === color) {
			setActive(true);
		} else {
			setActive(false);
		}
	}, [selectedColor]);

	return (
		<div
			onClick={() => setSelectedColor(color)}
			className={styles.colorContainer}
			style={style}
		></div>
	);
};

export default ColorOption;
