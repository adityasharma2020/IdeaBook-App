import React from 'react';
import heroImage from '../../assets/heroImage.png';
import styles from './defaultSection.module.css';
import { MdLock } from 'react-icons/md';
const DefaultSection = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.imageContainer}>
				<img src={heroImage} alt='heroImage' />
			</div>
			<h2 className={styles.heading}>Pocket Notes</h2>
			<p className={styles.infoNote}>
				Send and receive messages without keeping your phone online. Use Pocket Notes on up
				to 4 linked devices and 1 mobile phone
			</p>

			<div className={styles.securityNote}>
				<MdLock />
				<p>end-to-end encrypted</p>
			</div>
		</div>
	);
};

export default DefaultSection;
