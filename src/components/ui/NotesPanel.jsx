import React, { useState, useEffect } from 'react';
import { X, Plus, Search, Star, Calendar, Trash2, Edit2, Download, Upload, BookOpen, Video, Code, Trophy, Filter } from 'lucide-react';
import { saveNote, updateNote, deleteNote, getNotes, searchNotes, exportNotes } from '../../data/notes';

const PHASES = [
  { id: 'fase1', name: 'Fase 1: HTML & CSS', color: 'blue' },
  { id: 'fase2', name: 'Fase 2: JavaScript', color: 'yellow' },
  { id: 'fase3', name: 'Fase 3: React Básico', color: 'cyan' },
  { id: 'fase4', name: 'Fase 4: React Profissional', color: 'indigo' }
];

const NOTE_TYPES = [
  { id: 'video', name: 'Vídeo', icon: Video, color: 'red' },
  { id: 'exercise', name: 'Exercício', icon: Code, color: 'green' },
  { id: 'resource', name: 'Recurso', icon: BookOpen, color: 'blue' },
  { id: 'challenge', name: 'Desafio', icon: Trophy, color: 'orange' },
  { id: 'general', name: 'Geral', icon: Star, color: 'purple' }
];

export const NotesPanel = ({ isOpen, onClose }) => {
  const [notes, setNotes] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPhase, setFilterPhase] = useState('all');
  const [filterType, setFilterType] = useState('all');

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    phaseId: 'fase1',
    type: 'general',
    resource: '',
    progress: 0,
    rating: 0,
    content: ''
  });

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = () => {
    setNotes(getNotes().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingNote) {
      updateNote(editingNote.id, formData);
    } else {
      saveNote(formData);
    }
    resetForm();
    loadNotes();
  };

  const handleDelete = (id) => {
    if (window.confirm('Deletar esta nota?')) {
      deleteNote(id);
      loadNotes();
    }
  };

  const handleEdit = (note) => {
    setEditingNote(note);
    setFormData({
      title: note.title,
      phaseId: note.phaseId,
      type: note.type,
      resource: note.resource || '',
      progress: note.progress || 0,
      rating: note.rating || 0,
      content: note.content
    });
    setIsCreating(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      phaseId: 'fase1',
      type: 'general',
      resource: '',
      progress: 0,
      rating: 0,
      content: ''
    });
    setIsCreating(false);
    setEditingNote(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      setNotes(searchNotes(query).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    } else {
      loadNotes();
    }
  };

  const getFilteredNotes = () => {
    let filtered = notes;
    if (filterPhase !== 'all') {
      filtered = filtered.filter(n => n.phaseId === filterPhase);
    }
    if (filterType !== 'all') {
      filtered = filtered.filter(n => n.type === filterType);
    }
    return filtered;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTypeIcon = (type) => {
    const noteType = NOTE_TYPES.find(t => t.id === type);
    const Icon = noteType?.icon || Star;
    return <Icon className="w-4 h-4" />;
  };

  const getPhaseColor = (phaseId) => {
    const phase = PHASES.find(p => p.id === phaseId);
    return phase?.color || 'gray';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-6 flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <BookOpen className="w-7 h-7" />
              <div>
                <h2 className="text-2xl font-bold">Minhas Notas de Progresso</h2>
                <p className="text-indigo-200 text-sm">Documente seu aprendizado</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search and Actions */}
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Buscar nas notas..."
                className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
            <button
              onClick={() => setIsCreating(!isCreating)}
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50 transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Nova Nota
            </button>
            <button
              onClick={exportNotes}
              className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
              title="Exportar notas"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 px-6 py-3 border-b flex gap-4 flex-shrink-0">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={filterPhase}
              onChange={(e) => setFilterPhase(e.target.value)}
              className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              <option value="all">Todas as Fases</option>
              {PHASES.map(phase => (
                <option key={phase.id} value={phase.id}>{phase.name}</option>
              ))}
            </select>
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            <option value="all">Todos os Tipos</option>
            {NOTE_TYPES.map(type => (
              <option key={type.id} value={type.id}>{type.name}</option>
            ))}
          </select>
          <span className="text-sm text-gray-500 ml-auto flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            {getFilteredNotes().length} notas
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          
          {/* Create/Edit Form */}
          {isCreating && (
            <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-lg mb-4 text-indigo-900">
                {editingNote ? 'Editar Nota' : 'Nova Nota'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    placeholder="Ex: Aula 41 - Flexbox"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Fase</label>
                    <select
                      value={formData.phaseId}
                      onChange={(e) => setFormData({ ...formData, phaseId: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    >
                      {PHASES.map(phase => (
                        <option key={phase.id} value={phase.id}>{phase.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    >
                      {NOTE_TYPES.map(type => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Recurso (opcional)</label>
                  <input
                    type="text"
                    value={formData.resource}
                    onChange={(e) => setFormData({ ...formData, resource: e.target.value })}
                    placeholder="Ex: Curso HTML5 (Guanabara)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Progresso: {formData.progress}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={formData.progress}
                      onChange={(e) => setFormData({ ...formData, progress: parseInt(e.target.value) })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Avaliação</label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`w-6 h-6 ${star <= formData.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Anotação</label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    required
                    rows={4}
                    placeholder="Descreva o que aprendeu, dificuldades encontradas, insights..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
                  />
                </div>

                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                  >
                    {editingNote ? 'Atualizar' : 'Salvar'} Nota
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Notes List */}
          <div className="space-y-4">
            {getFilteredNotes().length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Nenhuma nota encontrada</p>
                <p className="text-sm">Comece criando sua primeira anotação!</p>
              </div>
            ) : (
              getFilteredNotes().map(note => (
                <div
                  key={note.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-${getPhaseColor(note.phaseId)}-600`}>
                          {getTypeIcon(note.type)}
                        </span>
                        <h4 className="font-bold text-gray-900">{note.title}</h4>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(note.createdAt)}
                        </span>
                        <span className={`px-2 py-0.5 bg-${getPhaseColor(note.phaseId)}-50 text-${getPhaseColor(note.phaseId)}-700 rounded`}>
                          {PHASES.find(p => p.id === note.phaseId)?.name}
                        </span>
                        {note.resource && (
                          <span className="italic">{note.resource}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleEdit(note)}
                        className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors"
                        title="Editar"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(note.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                        title="Deletar"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {note.progress > 0 && (
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                        <span>Progresso</span>
                        <span className="font-medium">{note.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full transition-all"
                          style={{ width: `${note.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {note.rating > 0 && (
                    <div className="flex gap-0.5 mb-3">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${star <= note.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  )}

                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                    {note.content}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
