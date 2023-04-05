import React,{useState} from "react"
import List from "./components/List"

function App() {
  const [list , setList] = useState([]);
  const [data , setData] = useState({});
  
  const handleInput = (e) => {
    const {value} = e.target;
    setData({title: value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    let lastId = 0;
    if(list.length > 0){
      lastId = list.sort((a,b) => a.id - b.id);
      lastId =  lastId[0].id + 1;
    }
    else{
      lastId = lastId + 1;
    }

    setList([...list, {...data , id: lastId}])
  }
  
  console.log(list);

  const handleDelete = (id) => {
    setList(list.filter( e => e.id !== id))
  }

  return (
    <div className="container py-5">
      <div className="col-12">
        <form onSubmit={handleSubmit} action="">
          <div className="row">
            <div className="col-10">
              <input type="text" className="form-control" onChange={handleInput}/>
            </div>
            <div className="col-2">
              <button className="btn btn-primary 2-100">Add todo</button>
            </div>
          </div>
        </form>
      </div>

      <div className="col-12">
        <div className="row">
        {
          list.map( (index, key) => (
            <List key={key} title={index.title} id={index.id} handleDelete={handleDelete} />
          ))
        }
      </div>
    </div>
  </div>
  );
}

export default App;
