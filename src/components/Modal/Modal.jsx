import React, { useContext, useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './modal.module.css';
import ColorOption from '../ColorOption/ColorOption';

const NotesModal = ({ open, setOpen, onClose }) => {
	const modalRef = useRef();
	const colorOptions = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF'];

	const [selectedColor, setSelectedColor] = useState('#B38BFA');
	const [groupName, setGroupName] = useState('New Group');
	const newGroupId = uuid();

	const newGroupDetails = {
		id: newGroupId,
		name: groupName,
		color: selectedColor,
		data: [],
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		// Retrieve existing data from local storage
		const existingData = JSON.parse(localStorage.getItem('AllNotes')) || [];

		// Append new group details to the existing data
		existingData.push(newGroupDetails);

		// // Store the updated data back into local storage
		localStorage.setItem('AllNotes', JSON.stringify(existingData));

		setOpen(false);
		//Reset the Form values
		setGroupName('New Group');
		setSelectedColor('#B38BFA');
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

		//remove the event listener when the modal is closed
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, [open, onClose]);
	return (
		<>
			{open ? (
				<div className={styles.mainContainer}>
					<div ref={modalRef} className={styles.modalContainer}>
						<h3>Create New Group</h3>

						<form onSubmit={handleSubmit}>
							<label>
								Group Name:
								<input
									onChange={(e) => setGroupName(e.target.value)}
									value={groupName}
									type='text'
									name='username'
								/>
							</label>

							<label>
								Choose Color:
								{colorOptions.map((color, index) => {
									return (
										<ColorOption
											setSelectedColor={setSelectedColor}
											key={index}
											color={color}
										/>
									);
								})}
							</label>
							<button>create</button>
						</form>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default NotesModal;
