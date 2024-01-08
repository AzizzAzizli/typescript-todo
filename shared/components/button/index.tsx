import React from 'react'
interface ButtonProps {
    onClick: () => void;
  }
export const Button:React.FC<ButtonProps> = ({onClick}) => {
  return (
    <div><button onClick={onClick} className=' text-gray-100 bg-cyan-600 px-4 py-1 rounded-lg'>Add</button></div>
  )
}
