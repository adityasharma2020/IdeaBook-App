import React, { useContext, useEffect, useState } from 'react';
import { SelectedNoteGroupContext } from '../../context/selectedNoteGroupContext';

const ChatSection = ({ allNotes }) => {
	const [note, setNote] = useState('');

	const { selectedNoteGroup, setSelectedNoteGroup } = useContext(SelectedNoteGroupContext);
	const selectedNoteGroupId = selectedNoteGroup.id;
	const [chatData, setChatData] = useState(selectedNoteGroup.data || []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newChatData = [...chatData, note];
		setChatData(newChatData);
		updateAllNotes(newChatData);
		setNote('');
	};

	const updateAllNotes = (chatData) => {
		const updatedArray = allNotes.map((obj) => {
			if (obj.id === selectedNoteGroupId) {
				return { ...obj, data: chatData };
			}
			return obj;
		});
		localStorage.setItem('AllNotes', JSON.stringify(updatedArray));
	};

	useEffect(() => {
		setChatData(selectedNoteGroup.data || []);
		setNote('');
	}, [selectedNoteGroup]);

	return (
		<>
			{chatData.map((item, index) => {
				return <div key={index}>{item}</div>;
			})}
			<div>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						value={note}
						onChange={(event) => setNote(event.target.value)}
					/>
				</form>
			</div>
		</>
	);
};

export default ChatSection;
