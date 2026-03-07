import React, { useState } from 'react';
import { Mail, Lock, User, Calendar, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { type InputProps, type InputType } from './input.types';
import styles from './input.styles.module.scss';

const iconMap: Record<InputType | 'confirmPassword', React.ReactNode> = {
  text: <User size={18} />,
  email: <Mail size={18} />,
  password: <Lock size={18} />,
  date: <Calendar size={18} />,
  confirmPassword: <ShieldCheck size={18} />,
};

export const Input: React.FC<InputProps> = ({ type = 'text', confirmPassword, ...props } : InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;
  
  const MainIcon = confirmPassword && type === 'password' ? iconMap.confirmPassword : iconMap[type];

  return (
    <div className={styles.inputContainer}>
      <span className={styles.mainIcon}>{MainIcon}</span>
      
      <input 
        className={styles.field} 
        type={inputType} 
        {...props} 
      />

      {type === 'password' && (
        <button
          type="button"
          className={styles.eyeButton}
          onClick={() => setShowPassword(!showPassword)}
          tabIndex={-1} 
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
    </div>
  );
};