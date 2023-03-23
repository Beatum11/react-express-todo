import React, { useState, useEffect } from 'react';
import Item from "./Item";
import "../cssFiles/item-list.css";

const ItemList = () => {


    const [titles, setTitles] = useState([]);

      fetch('https://lacy-neon-nape.glitch.me/get')
      .then(response => response.json())
      .then(data => setTitles(data.titles))
      .catch(error => console.error(error));

      
      var arr = titles.map(title => 
      <li key={title._id}>
        <Item title={title.name} id={title._id}/>
      </li>)
  
    return (
      <div className='itemList-container'>
        <ul>
          {arr}
        </ul>
      </div>
    );

}

export default ItemList;