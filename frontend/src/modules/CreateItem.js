import React, { useState } from 'react';
import '../cssFiles/create-item.css';
import axios from 'axios';

const CreateItem = () => {

    const [postTitle, setPostTitle] = useState(
    {
        name: ""
    });

    const titleHandler = (e) => {

        setPostTitle({
            name: e.target.value
        });

    }



    const postHandler = async () => {
        await axios.post("https://lacy-neon-nape.glitch.me/post", postTitle)
        .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });

       await setPostTitle({name: ""});
    }


  return (
    <div className='createItem-container'>
        <input type={'text'} placeholder={'Write your thing'} onChange={titleHandler}
                                                               value={postTitle.name}/>

        <button onClick={postHandler} type={'submit'}>Add an Item</button>
    </div>
  );
}

export default CreateItem;