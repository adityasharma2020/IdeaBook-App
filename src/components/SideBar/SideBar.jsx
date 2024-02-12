import React, { useContext } from 'react';
import SingleGroupSection from '../SingleGroupSection/SingleGroupSection';
import styles from './sideBar.module.css';

const SideBar = ({ allNotes }) => {
	console.log(allNotes);
	return (
		<>
			<h1>Pocket Notes</h1>
			<div className={styles.mainContainer}>
				{allNotes.map((note) => {
					return <SingleGroupSection key={note.id} groupDetail={note} />;
				})}
			</div>
		</>
	);
};

export default SideBar;
