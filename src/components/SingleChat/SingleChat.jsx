import React from 'react';
import styles from './singleChat.module.css';
import { GoDotFill } from 'react-icons/go';
const SingleChat = ({ details }) => {
	return (
		<>
			<div className={styles.chatContainer}>
				<p className={styles.note}>{details.note}</p>
				<div className={styles.noteDetails}>
					<p>{details.date}</p>
					<GoDotFill />
					<p>{details.time}</p>
				</div>
			</div>
		</>
	);
};

export default SingleChat;
