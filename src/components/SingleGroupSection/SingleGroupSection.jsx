import React, { useContext } from 'react';
import styles from './singleGroupSection.module.css';
import GroupInitials from '../GroupInitials/GroupInitials';
import { SelectedNoteGroupContext } from '../../context/selectedNoteGroupContext';

const SingleGroupSection = ({ groupDetail }) => {
	const { setSelectedNoteGroup } = useContext(SelectedNoteGroupContext);
	const handleGroupSelected = (groupDetail) => {
		setSelectedNoteGroup(groupDetail);
		localStorage.setItem('selectedGroupDetails', JSON.stringify(groupDetail));
	};
	return (
		<div onClick={() => handleGroupSelected(groupDetail)} className={styles.mainContainer}>
			<GroupInitials name={groupDetail.name} />
			<p>{groupDetail.name}</p>
		</div>
	);
};

export default SingleGroupSection;
