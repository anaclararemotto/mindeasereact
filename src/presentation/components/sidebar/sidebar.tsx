import React from 'react';
import { Home, User, BookOpen, Settings, LogOut, LibraryBig } from 'lucide-react';
import styles from './sidebar.styles.module.scss';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div 
        className={`${styles.overlay} ${isOpen ? styles.active : ''}`} 
        onClick={onClose} 
      />

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <nav className={styles.nav}>
          <a href="/"><Home size={20} /> Início</a>
          <a href="/materias"><BookOpen size={20} /> Matérias</a>
          <a href="/content"><LibraryBig size={20} /> Conteúdos</a>
          <a href="/perfil"><User size={20} /> Meu Perfil</a>
          <a href="/config"><Settings size={20} /> Configurações</a>
          <hr style={{ border: '0.5px solid #e2e8f0', width: '100%' }} />
          <a href="/sair" style={{ color: '#ef4444' }}><LogOut size={20} /> Sair</a>
        </nav>
      </aside>
    </>
  );
};