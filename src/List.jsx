import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFriend } from './Redux/listSlice';

function List() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const { listData } = useSelector((state) => state.list)

  function handleClick() {
    dispatch(addFriend(inputValue));
    setInputValue("")
  }

  return (<div className='container py-5'>
    <h1>Friends</h1>
    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    <button className='btn btn-primary btn-sm ms-3' onClick={handleClick}>Add friend</button>
    <hr />
    {listData.length === 0 && <h6 className='text-secondary'> This list is empty</h6>}
    {listData.map((item, index) => {
      return <h6 key={index}>{item}</h6>;
    })}


  </div>
  )
}

export default List
