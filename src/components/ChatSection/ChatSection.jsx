import  { useContext, useEffect, useRef, useState } from 'react';
import { SelectedNoteGroupContext } from '../../context/selectedNoteGroupContext';
import SingleGroupSection from '../SingleGroupSection/SingleGroupSection';
import styles from './chatSection.module.css';
import { IoMdSend } from 'react-icons/io';
import SingleChat from '../SingleChat/SingleChat';
import { chatCurrentTime } from '../../utils/ChatCurrentTime';
import { IoArrowBackOutline } from 'react-icons/io5';

const ChatSection = ({ allNotes, isSmallScreen, setShowRightContainer, setShowLeftContainer }) => {
	const [note, setNote] = useState('');
	const chatContainerRef = useRef();
	const { selectedNoteGroup, setSelectedNoteGroup } = useContext(SelectedNoteGroupContext);
	const selectedNoteGroupId = selectedNoteGroup.id;
	const [chatData, setChatData] = useState(selectedNoteGroup.chatData || []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!note) {
			return;
		}

		const { formattedDate, formattedTime } = chatCurrentTime();
		const data = { date: formattedDate, time: formattedTime, note };

		setChatData((prev) => [...prev, data]);
		updateAllNotes(data);
		updateSelectedNoteGroupDetails(data);
		setNote('');
	};

	const updateSelectedNoteGroupDetails = (newChatData) => {
		const updatedSelectedGroupDetail = { ...selectedNoteGroup };
		updatedSelectedGroupDetail.chatData = [...updatedSelectedGroupDetail.chatData, newChatData];
		setSelectedNoteGroup(updatedSelectedGroupDetail);

		// Save  updated data to localStorage
		localStorage.setItem('selectedGroupDetails', JSON.stringify(updatedSelectedGroupDetail));
	};

	const updateAllNotes = (newData) => {
		const updatedObject = allNotes.map((obj) => {
			if (obj.id === selectedNoteGroupId) {
				obj.chatData = obj.chatData || [];
				obj.chatData.push(newData);
			}
			return obj;
		});

		localStorage.setItem('AllNotes', JSON.stringify(updatedObject));
	};

	const handleKeyPress = (event) => {
		if (event.ctrlKey && event.key === 'Enter') {
			handleSubmit(event);
		}
	};

	const scrollToBottom = () => {
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
		}
	};

	const handleBackArrowClicked = () => {
		setShowRightContainer((prev) => !prev);
		setShowLeftContainer((prev) => !prev);
	};

	useEffect(() => {
		setChatData(selectedNoteGroup.chatData || []);
		setNote('');
	}, [selectedNoteGroup]);

	useEffect(() => {
		scrollToBottom();
	}, [note]);

	return (
		<main className={styles.mainContainer}>
			<div className={styles.stickyProfile}>
				{isSmallScreen && (
					<IoArrowBackOutline
						onClick={handleBackArrowClicked}
						className={styles.backArrow}
					/>
				)}
				<SingleGroupSection groupDetail={selectedNoteGroup} />
			</div>
			<div ref={chatContainerRef} className={styles.chatContainer}>
				{chatData.map((obj, index) => {
					return <SingleChat key={index} details={obj} />;
				})}
			</div>
			<div className={styles.formContainer}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.inputContainer}>
						<textarea
							onKeyDown={handleKeyPress}
							rows={5}
							required
							className={styles.textarea}
							type='textarea'
							value={note}
							placeholder='write your note here...'
							onChange={(event) => setNote(event.target.value)}
						/>

						<div onClick={handleSubmit} className={styles.sendButton}>
							<IoMdSend style={note ? { color: '#001F8B' } : { color: '#ABABAB' }} />
						</div>
					</div>
				</form>
			</div>
		</main>
	);
};

export default ChatSection;
