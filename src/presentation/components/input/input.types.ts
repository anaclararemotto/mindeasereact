
import { InputHTMLAttributes } from 'react';

export type InputType = 'text' | 'email' | 'password' | 'date';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
  confirmPassword?: boolean;
}