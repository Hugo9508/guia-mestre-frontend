export const notesData = {
  notes: []
};

export const saveNote = (note) => {
  const notes = getNotes();
  const newNote = {
    id: Date.now(),
    ...note,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  notes.push(newNote);
  localStorage.setItem('guia-notes', JSON.stringify(notes));
  return newNote;
};

export const updateNote = (id, updates) => {
  const notes = getNotes();
  const index = notes.findIndex(n => n.id === id);
  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem('guia-notes', JSON.stringify(notes));
    return notes[index];
  }
  return null;
};

export const deleteNote = (id) => {
  const notes = getNotes().filter(n => n.id !== id);
  localStorage.setItem('guia-notes', JSON.stringify(notes));
  return notes;
};

export const getNotes = () => {
  const saved = localStorage.getItem('guia-notes');
  return saved ? JSON.parse(saved) : [];
};

export const getNotesByPhase = (phaseId) => {
  return getNotes().filter(n => n.phaseId === phaseId);
};

export const getNotesByType = (type) => {
  return getNotes().filter(n => n.type === type);
};

export const searchNotes = (query) => {
  const notes = getNotes();
  const lowerQuery = query.toLowerCase();
  return notes.filter(n => 
    n.title?.toLowerCase().includes(lowerQuery) ||
    n.content?.toLowerCase().includes(lowerQuery) ||
    n.resource?.toLowerCase().includes(lowerQuery)
  );
};

export const exportNotes = () => {
  const notes = getNotes();
  const dataStr = JSON.stringify(notes, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `guia-notas-${new Date().toISOString().split('T')[0]}.json`;
  link.click();
};

export const importNotes = (jsonString) => {
  try {
    const notes = JSON.parse(jsonString);
    if (Array.isArray(notes)) {
      localStorage.setItem('guia-notes', jsonString);
      return { success: true, count: notes.length };
    }
    return { success: false, error: 'Formato inválido' };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getNotesStats = () => {
  const notes = getNotes();
  return {
    total: notes.length,
    byPhase: notes.reduce((acc, note) => {
      acc[note.phaseId] = (acc[note.phaseId] || 0) + 1;
      return acc;
    }, {}),
    byType: notes.reduce((acc, note) => {
      acc[note.type] = (acc[note.type] || 0) + 1;
      return acc;
    }, {}),
    avgRating: notes.reduce((sum, n) => sum + (n.rating || 0), 0) / notes.length || 0
  };
};
