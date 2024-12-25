import {Link} from 'react-router-dom';
const ShowBooks=(props)=>{
    const Data=props.TBooks
    if (Data.length>0)
    {
        return(
            Data.map((book,index)=>{
                return(
                    <tr>
                       
                        <td>{book.booktitle}</td>
                        <td>{book.author}</td>
                        <td>{book.Topic}</td>
                        <td>{book.formate}</td>
                        <td>{book.PubYear}</td>
                        <td>
                            <Link to={"/edit/"+book._id}>edit</Link>
                            <Link to={"/Delete/"+book._id}>Delete</Link>
                        </td>
                    </tr>
                )
            })
        )
             
    } else
    return (<h1>No Data Returned </h1>)
}
export default function DisplayData(props){
    const Books=props.Books
    return(
        <div>
            <h3>Book List</h3>
            <table className="table table-stripped" class="table table-hover">
                <thead>
                    <tr>
                        <th>Book Title</th>
                        <th>Author</th>
                        <th>Topic</th>

                        <th>Pub Year</th>
                        <th>Subject</th>
                    </tr>
                </thead>
                <tbody>
                    {ShowBooks(Books)}
                </tbody>
            </table>
        </div>
    )
}
//export default DisplayData;