import React from 'react'


interface InputProps {
    inputRef: React.RefObject<HTMLInputElement>;
  }

export const Input:React.FC<InputProps> = ({inputRef}) => {
  return (
    <div><input ref={inputRef} className='  capitalize text-slate-700  font-semibold  w-full p-1 rounded-lg' type="text" /></div>
  )
}
