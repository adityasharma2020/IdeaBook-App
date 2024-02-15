import React, { useContext, useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './deletePopup.module.css';
import ColorOption from '../ColorOption/ColorOption';

const DeletePopup = ({ selectedNoteGroup, setSelectedNoteGroup, name, open, setOpen, onClose }) => {
	const modalRef = useRef();
	const colorOptions = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF'];

	const [selectedColor, setSelectedColor] = useState('#B38BFA');
	const [groupName, setGroupName] = useState('');
	const newGroupId = uuid();

	const handleSubmit = (event) => {
		event.preventDefault();

		// Retrieve existing data from local storage
		const Data = JSON.parse(localStorage.getItem('AllNotes')) || [];
		const NewData = Data.filter((obj) => obj.id !== selectedNoteGroup.id);
		localStorage.setItem('AllNotes', JSON.stringify(NewData));
		setOpen(false);

		//Reset the  values
		setSelectedNoteGroup('');
		localStorage.setItem('selectedGroupDetails', JSON.stringify(''));
	};

	const handleCancel = () => {
		setOpen(false);
	};

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				onClose();
			}
		};
		if (open) {
			document.addEventListener('mousedown', handleOutsideClick);
		}
		//remove  event listener when the modal is closed
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, [open, onClose]);
	return (
		<>
			{open ? (
				<div className={styles.mainContainer}>
					<div ref={modalRef} className={styles.modalContainer}>
						<h3 className={styles.heading}>{`You are about to delete "${name}" note Group`}</h3>
						<div className={styles.createButtonContainer}>
							<span onClick={handleCancel} className={styles.cancelButton}>
								Cancel
							</span>
							<span onClick={handleSubmit} className={styles.createButton}>
								Confirm
							</span>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default DeletePopup;
