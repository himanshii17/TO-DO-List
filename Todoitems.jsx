import './CSS/Todoitems.css';
import tick from './Assets/tick.png';
import not_tick from './Assets/not_tick.png';
import cross from './Assets/cross.png';

const Todoitems = ({ no, display, text,setTodos }) => {

  const deletetodo =(no) =>{
    let data = JSON.parse(localStorage.getItem("todos"));
    data= data.filter((todo)=>todo.no!==no);
    setTodos(data);
  }

   const toggle = (no) =>{
    let data = JSON.parse(localStorage.getItem("todos"));
    for(let i=0;i<data.length;i++){
      if(data[i].no===no){
        if(data[i].display===""){
          data[i].display="line-through";
        }
        else{
          data[i].display="";
        }
        break;
      }
    }
    setTodos(data);
   }

  return (
    <div className="todoitems" style={{ display: display }}>
      <div className={`todo-items-container ${display}`} onClick={()=>{toggle(no)}}>
        {display===""?<img className="todoitems-nottick" src={not_tick} alt="not done" />:<img className="todoitems-tick" src={tick} alt="done" />}
        
        <div className="todoitems-text">{text}</div>
      </div>
      <img className="todoitems-crossicon" onClick={()=>{deletetodo(no)}} src={cross} alt="delete"/>
    </div>
  );
};

export default Todoitems;
