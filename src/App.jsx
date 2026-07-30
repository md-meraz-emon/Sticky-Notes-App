import React, { useEffect, useRef, useState } from 'react'
import noteImg from './assets/paperNote.png'



const App = () => {


  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [task, setTask] = useState([]);
  const isFristRender = useRef(true);
  
// localStorage.clear();

// savEffect
  useEffect(() => {
    if(isFristRender.current){
      isFristRender.current = false;
      return;
    }
      localStorage.setItem('tasks',JSON.stringify(task));
  },[task]);


  // loadEffect
  useEffect(() => {
    const data = localStorage.getItem('tasks');
    if(data){
      setTask(JSON.parse(data));
      console.log(JSON.parse(data))
    }
  
  }, [])
  
  


  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({title,description});
    setTask(copyTask);
    setTitle('');
    setDescription('');
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  }


  return (
    <div className='flex min-h-screen flex-col lg:flex-row bg-black text-white '>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex lg:w-1/2 flex-col p-10 gap-4  items-start'>

        <h1 className='text-4xl font-bold'>Add Notes</h1>

        {/* frist input for heading */}
        <input className=' px-5 font-medium py-2 w-full border-2 outline-none rounded' type="text" placeholder='Enter Notes Heading ' value={title} required onChange={(e) => {
          setTitle(e.target.value)
        }} />

        {/* second input for details  */}
        <textarea className=' px-5 h-32 font-medium w-full flex items-start flex-row border-2 outline-none  rounded' placeholder='Enter Details Here' type="text" required name="" id="" value={description} onChange={(e) => {
          setDescription(e.target.value)
        }} />

        <button className=' bg-white active:scale-95 active:bg-gray-500 font-medium text-black px-5 py-2 w-full outline-none rounded'>Add Notes</button>

      </form>
      <div className=' lg:border-l  lg:w-1/2 p-10'>

        <h1 className='text-4xl font-bold'>Recent Notes</h1>

        <div className='grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4  mt-8 h-[90%] overflow-auto content-start'>

          {task.map((elem, idx) => {
            return <div key={idx} className=' flex justify-between flex-col items-start relative h-52 text-black pt-9 px-4 pb-4 w-40 rounded-2xl bg-white bg-center bg-cover' style={{ backgroundImage: `url(${noteImg})` }}>
              <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
              <p className='mt-4 leading-tight font-medium text-sm text-gray-600'>{elem.description}</p>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-600 text-white py-1 text-xs rounded font-bold '>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
