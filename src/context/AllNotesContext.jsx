import { useState, createContext } from 'react';

export const AllNotesContext = createContext('');

export const AllNotesContextProvider = ({ Children }) => {
	const [allNotes, setAllNotes] = useState(
		JSON.parse(localStorage.getItem('AllNotes')) || ['hello']
	);
	console.log('allNotes,', allNotes);
	return (
		<AllNotesContext.Provider value={{ allNotes, setAllNotes }}>
			{Children}
		</AllNotesContext.Provider>
	);
};
