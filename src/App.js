import React,{useState} from "react"

function App() {
  const [list , setList] = useState([]);
  const [data , setData] = useState({});

  const handleInput = (e) => {
    const {value} = e.target;
    setData({title: value});
  }
  console.log(data);
  const handleForm = (e) => {
    e.preventDefault();
    setList([...list, data])
  }

  return (
    <div className="container py-5">
      <div className="col-12">
        <form onSubmit={handleForm} action="">
          <div className="row">
            <div className="col-8">
              <input type="text" className="form-control" onChange={handleInput}/>
            </div>
            <div className="col-4">
              <button className="btn btn-primary 2-100">Add todo</button>
            </div>
          </div>
        </form>
      </div>

      <div className="col-12">
        <div className="row">
        {
          list.map( (index, key) => (
            <div className="col-12 mt-4" key={key}>
            <div className="alert alert-primary">
              <div className="row">
                <div className="col-10">
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum nisi saepe vero, distinctio consequatur laborum temporibus porro debitis veritatis?
                  </p>
                </div>
                <div className="col-2">
                  <div className="btn-group">
                    <div className="btn btn-danger">X</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>
  );
}

export default App;
