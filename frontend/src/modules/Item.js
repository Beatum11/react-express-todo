import axios from 'axios';
import React, { useState } from 'react';
import "../cssFiles/item.css";

const Item = ({title, id}) => {


  const [isChecked, setIsChecked] = useState(false);

  const onCheckHandler = () => {
    setIsChecked(!isChecked);
  }

  const renderText = () => {
    if(isChecked){
      return <h2 className='crossed-out'>{title}</h2>
    } else{
      return <h2>{title}</h2>
    }
  }

  const deleteHandler = async () => {
      await axios.delete(`https://lacy-neon-nape.glitch.me/get/${id}`)
      .then((res) => console.log(res));
  }


  return (
    <div className='item-container'>
        <input className='checkItem' type={"checkbox"} name={"done"}
                onClick={onCheckHandler}/>
        {renderText()}
        <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default Item;