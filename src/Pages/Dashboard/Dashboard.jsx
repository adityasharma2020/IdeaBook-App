import { useContext, useState } from 'react';
import styles from './dashboard.module.css';
import ChatSection from '../../components/ChatSection/ChatSection';
import DefaultSection from '../../components/DefaultSection/DefaultSection';

import Modal from '../../components/Modal/Modal';
import { FaPlus } from 'react-icons/fa';
import SideBar from '../../components/SideBar/SideBar';
import { SelectedNoteGroupContext } from '../../context/selectedNoteGroupContext';

const Dashboard = () => {
	const [notesModal, setNotesModal] = useState(false);
	const allNotes = JSON.parse(localStorage.getItem('AllNotes')) || [];
	const { selectedNoteGroup, setSelectedNoteGroup } = useContext(SelectedNoteGroupContext);
	const handleClose = () => {
		setNotesModal(!notesModal);
	};
	return (
		<main>
			<div className={styles.mainContainer}>
				<div className={styles.leftContainer}>
					<SideBar allNotes={allNotes} />
					<div onClick={() => setNotesModal(true)} className={styles.addButton}>
						<FaPlus />
					</div>
				</div>
				<div className={styles.rightContainer}>
					{selectedNoteGroup ? <ChatSection allNotes={allNotes} /> : <DefaultSection />}
				</div>
			</div>

			{notesModal && (
				<div className={styles.modalContainer}>
					{/* modal */}
					<Modal open={notesModal} setOpen={setNotesModal} onClose={handleClose} />
				</div>
			)}
		</main>
	);
};

export default Dashboard;
