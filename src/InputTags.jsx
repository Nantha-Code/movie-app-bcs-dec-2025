import React, { useState } from 'react'

function InputTags() {
    const [like,setLike] = useState(0);
     const [Dislike,setDisLike] = useState(0);


  return (
    <div>
        <button onClick={()=> setLike(like+1)}>{like}</button>
        <button onClick={()=> setDisLike(Dislike+1)}>{Dislike}</button>
        {/* <progress max={like+Dislike} value={like}></progress> */}
    </div>
  );
}

export default InputTags;   