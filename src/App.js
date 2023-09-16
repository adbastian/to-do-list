import './App.css';
import {FaPlus} from 'react-icons/fa'
import {BsFileEarmarkCheckFill} from 'react-icons/bs'
import { useState } from 'react';

function App() {

const [data, setData] = useState([])

const onSubmit = (event) => {
  event.preventDefault()

  const form = event.target
  const input = form.nama

  const dataList = [data, input.value].flat();
  setData(dataList)
  
  form.reset()
}

const onDeleteCart = (value) => {

  const newData = data.filter((val) => val !== value)
  setData(newData)
}

  return (
 <>
  <main>
    <h1>TODO <br/><span>LIST</span></h1>
    <form onSubmit={onSubmit}>
      <input type='text' name='nama' id='nama' placeholder='What Your To Do...' required={true} />
      <button><FaPlus size={25}/></button>
    </form>
    <hr/>
    <ul>
      {data.map((value, i) => (
        <li key={i} className={i % 2 === 0 ? 'li1' : 'li2'} >
          <span>{value}</span>
          <button onClick={() => onDeleteCart(value)} className={i % 2 === 0 ? 'btn1' : 'btn2'} ><BsFileEarmarkCheckFill size={17}/></button>
        </li>
      ))}
    </ul>
  </main>
  <div className='nav'>
          <button onClick={() => setData([])}>Clear All</button>
      </div>
 </>
  );
}

export default App;
