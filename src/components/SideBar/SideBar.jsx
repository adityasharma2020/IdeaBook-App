import { useContext } from 'react';
import SingleGroupSection from '../SingleGroupSection/SingleGroupSection';
import styles from './sideBar.module.css';
import { SelectedNoteGroupContext } from '../../context/selectedNoteGroupContext';

const SideBar = ({ allNotes, setShowRightContainer, setShowLeftContainer, isSmallScreen }) => {
	const { setSelectedNoteGroup } = useContext(SelectedNoteGroupContext);
	const handleClick = () => {
		setSelectedNoteGroup('');
	};
	return (
		<main className={styles.mainContainer}>
			<h1 onClick={handleClick} className={styles.heading}>
				Pocket Notes
			</h1>
			<div className={styles.notesContainer}>
				{allNotes.length > 0 ? (
					<div className={styles.allNotes}>
						{allNotes.map((note) => {
							return (
								<SingleGroupSection
									key={note.id}
									groupDetail={note}
									isSmallScreen={isSmallScreen}
									setShowLeftContainer={setShowLeftContainer}
									setShowRightContainer={setShowRightContainer}
								/>
							);
						})}
					</div>
				) : (
					<div className={styles.defaultNote}>Add new Notes here</div>
				)}
			</div>
		</main>
	);
};

export default SideBar;
