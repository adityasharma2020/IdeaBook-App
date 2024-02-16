import React, { useContext, useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './modal.module.css';
import ColorOption from '../ColorOption/ColorOption';

const NotesModal = ({ open, setOpen, onClose }) => {
	const modalRef = useRef();
	const colorOptions = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF'];

	const [selectedColor, setSelectedColor] = useState('#B38BFA');
	const [errorMessage, setErrorMessage] = useState('');
	const [groupName, setGroupName] = useState('');
	const newGroupId = uuid();

	const newGroupDetails = {
		id: newGroupId,
		name: groupName,
		color: selectedColor,
		chatData: [],
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		// Retrieve existing data from local storage
		const objectsArray = JSON.parse(localStorage.getItem('AllNotes')) || [];
		const nameExists = objectsArray.find((obj) => obj.name === groupName);
		if (!nameExists) {
			objectsArray.push(newGroupDetails);
			localStorage.setItem('AllNotes', JSON.stringify(objectsArray));
			setOpen(false);

			//Reset the Form values
			setGroupName('');
			setSelectedColor('#B38BFA');
		} else {
			setErrorMessage('Name already Exists.');
		}
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
						<h3>Create New Group</h3>

						<form className={styles.form} onSubmit={handleSubmit}>
							<div className={styles.nameContainer}>
								<label className={styles.label}>
									Group Name
									<input
										className={styles.input}
										required
										autoFocus={true}
										placeholder='Enter group name'
										onChange={(e) => setGroupName(e.target.value)}
										value={groupName}
										type='text'
										name='username'
									/>
								</label>
								<p className={styles.errorMessage}>{errorMessage}</p>
							</div>

							<label className={styles.label}>
								Choose Color
								<div className={styles.colorOptions}>
									{colorOptions.map((color, index) => {
										return (
											<ColorOption
												selectedColor={selectedColor}
												setSelectedColor={setSelectedColor}
												key={index}
												color={color}
											/>
										);
									})}
								</div>
							</label>
							<div className={styles.createButtonContainer}>
								<button className={styles.createButton}>create</button>
							</div>
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
