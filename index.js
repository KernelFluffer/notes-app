const noteInput = document.getElementById('note-input');
const noteForm = document.getElementById('note-form');
const noteContainer = document.getElementById('note-container')

function displayNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    
    noteContainer.innerHTML = '';

    notes.forEach(note => {
        const noteElement = document
        noteElement.classList.add('note');
        noteElement.textContent = note;

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => {
            const newNotes = notes.filter(n => n !== note);
            localStorage.setItem('notes', JSON.stringify)
        });
    });
}