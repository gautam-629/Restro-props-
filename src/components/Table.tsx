import React from 'react';
import { TABLE_STATUS } from '../enum';
interface ITableProps{
    tableNumber:number;
    status:string;
}

const Table = ({tableNumber,status}:ITableProps) => {
  return (
    <div className={`${status===TABLE_STATUS.AVAILABLE?'bg-green-300':'bg-slate-700'} text-white rounded`}>
        <h3 className='text-2xl'>{tableNumber}</h3>
        <span>{status}</span>
    </div>
  )
}

export default Table;