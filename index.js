const noteInput = document.getElementById('note-input');
const noteForm = document.getElementById('note-form');
const noteContainer = document.getElementById('note-container');

function displayNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    
    noteContainer.innerHTML = '';

    notes.forEach(note => {
        const noteElement = document.createElement('button');
        noteElement.classList.add('note');
        noteElement.textContent = note;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => {
            const newNotes = notes.filter(n => n !== note);
            localStorage.setItem('notes', JSON.stringify(notes));
            displayNotes();
        });
        noteElement.appendChild(deleteButton);

        noteContainer.appendChild(noteContainer);
    });
}

displayNotes();

noteForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const note = noteInput.value.trim();

    if (note) {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];

        notes.push(note);

        localStorage.setItem('notes', JSON.stringify(notes));

        noteInput.value = '';
        displayNotes();
    }
    
})