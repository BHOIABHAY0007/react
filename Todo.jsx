// import React, { useState } from 'react'

// export default function Todo() {



//   const [text, settext] = useState('')
//   const [state, setState] = useState([])
//   const [editIndex, setEditIndex] = useState(null)



//   function handlechange(e) {
//     settext(e.target.value)
//   }

//   function handlesubmit(e) {
//     e.preventDefault()

//        if (editIndex !== null) {
//       const updatedList = [...state]
//       updatedList[editIndex] = text
//       setState(updatedList)
//       setEditIndex(null)
//     } 
  
//     else {
//       setState([...state, text])
//     }

//     settext('')
//   }

//   function Delete(id) {
//     let ans = state.filter((el, i) => {
//       return i != id;
//     });
//     setState(ans)
//   }
//    function Edit(id) {
//     settext(state[id])
//     setEditIndex(id)
//   }


//   return (
//     <div>
//       <form onSubmit={handlesubmit}>
//         <input type="text" placeholder="enter name" value={text} onChange={handlechange} />
//         <input type="submit" />
//       </form>

//       {
//         state.map((el, i) => {
//           return <>
//             <li key={i}>{el} </li>
//             <button onClick={(() => { Delete(i) })}>Delete</button>
//             <button onClick={(() => { Edit(i) })}>Edit</button>
//           </>
//         })
//       }
//     </div>
//   )
// }


import React, { useState } from 'react'

export default function Todo() {
  const [text,settext]=useState('')
  const [data,setdata]=useState([])
  const [editindex,seteditindex]=useState(null)

  function handlechange(e){
    settext(e.target.value)
  }

  function handlesubmit(e){
    e.preventDefault()

    if(editindex !=null)
    {
      const updatedList=[...data]
      updatedList[editindex]=text
      setdata(updatedList)
      seteditindex(null)
    }

    else{
      setdata([...data,text])
    }
    settext('')
  }

  function Delete(id){
    let ans=data.filter((el,i)=>{
      return i != id
    })
    setdata(ans)
    
  }

  function Edit(id){
    settext(data[id])
    seteditindex(id)
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='entername' value={text} onChange={handlechange} />
        <input type="submit"  />
      </form>

      {
        data.map((el,i)=>{
          return<>
          <li key={i}>{el}</li>
          <button onClick={(()=>{Delete(i)})}>delete</button>
          <button onClick={(()=>{Edit(i)})}>edit</button>
          </>
        })
      }
    </div>
  )
}