import { Link } from 'react-router-dom';

const Input = ({ id, text, value, onChangeHandler }) => {
  return (
    <>
      <label htmlFor={id} className="">{text}</label>
      <input type="text" id={id} value={value} placeholder="Enter your name"
        onChange={onChangeHandler} />
       <br/>  
      <Link to="/">回首頁</Link>
    </>
  )
}

export default Input;