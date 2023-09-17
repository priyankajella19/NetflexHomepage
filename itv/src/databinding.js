export function Databinding(){
const data = [{
    "Category":"fruits",
    "Products":["apple","mango","banana","grapes"],
    "name":"prinlk",
    "photo": "images/netflexbanner.jpg"
},
{
    "Category":"vegetables",
    "Products":["tamota","potato","drumstics"],
    "name":"prinlk",
    "photo": "images/netflexbanner.jpg"
}];
return(
    <div>
      <h>Table content</h>
      <table className="table table-striped">
        <thead>
            <tr>
                <th>Category</th>
                <th>products</th>
                <th>name</th>
                <th>images</th>
            </tr>
        </thead>
        <tbody>
            {
               data.map(d=><tr>
                <td>{d.Category}</td>
                <td>{d.Products}</td>
                <td>{d.name}</td>
                <td><img src={d.photo} width="100px"></img></td>
               
                <td>{d.Category}</td>
                <td>{d.Products}</td>
                <td>{d.name}</td>
                <td><img src={d.photo} width="100px"></img></td>
               
                <td>{d.Category}</td>
                <td>{d.Products}</td>
                <td>{d.name}</td>
                <td><img src={d.photo} width="100px"></img></td>
               
                <td>{d.Category}</td>
                <td>{d.Products}</td>
                <td>{d.name}</td>
                <td><img src={d.photo} width="100px"></img></td>
               </tr>)
            }
        </tbody>
      </table>
        
    </div>
)
}