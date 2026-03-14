import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sidebar } from '../sidebar/sidebar';
import styles from './header.styles.module.scss';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>MindEase</h1>

        <button 
          className={styles.menuButton} 
          onClick={() => setIsMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu size={28} />
        </button>
      </header>

      <Sidebar 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </>
  );
};