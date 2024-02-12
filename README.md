# IdeaBook - Note-Taking App

## Overview
IdeaBook is a note-taking application that allows users to organize their thoughts and ideas efficiently. It offers a user-friendly interface with both desktop and mobile responsiveness. Users can create groups, add notes to specific groups, customize group colors, and save notes with ease. The application utilizes local storage to persistently store groups and notes, ensuring data integrity even after page reload or refresh.

## Features

### 1. Create Groups
   - Users can create groups to categorize their notes.
   - To create a new group, click on the "New Group" button.
   - A popup will appear, allowing users to enter the group name and choose a color.
   - Clicking outside the popup will close it.

### 2. Add Notes to Groups
   - Users can add notes to a specific group.
   - When adding a note, the creation date and time are displayed.
   - Validate input to ensure that notes have content before saving.

### 3. Save Notes
   - Save notes by clicking on the "Send" icon in the text input area.
   - The "Send" icon is disabled if no text is present in the input area.
   - All notes and groups are stored in local storage for persistent data.

### 4. Switching Groups
   - Users can easily switch between groups.
   - When changing the group, fetch and display all notes related to the selected group.

### 5. Responsive Design
   - The application is designed to be responsive on both desktop and mobile devices.

### 6. Validation and Error Handling
   - Implement validation checks for group and note inputs to ensure data integrity.
   - Handle errors gracefully, providing user-friendly messages when necessary.

## Usage
To get started with IdeaBook, follow these steps:
1. Clone the repository.
2. Open the `index.html` file in your browser.

Feel free to explore the application, create groups, add notes, and experience the seamless organization of your ideas.

Happy note-taking with IdeaBook!
