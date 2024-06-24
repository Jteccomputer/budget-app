
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import Badge from 'react-bootstrap/Badge';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {

  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {

    dispatch({
          type: 'DELETE_EXPENSE',
          payload: props.id,
    });

  };

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
        {props.name}
        <div>
          
            <span className='list-group-item'>
                <Badge pill variant = "info">
                    ${props.cost}
                </Badge>
                    
                <TiDelete size='1.5em' onClick={handleDeleteExpense} />
            </span>

            
        </div>
        
    </li>
  );

};

export default ExpenseItem;