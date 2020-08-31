import React from 'react';
import { Table } from 'reactstrap'
import { Button } from 'reactstrap'
import axios from 'axios'
class App extends React.Component {
  state = {
    books: []
  }
  componentWillMount() {
    axios.get('http://localhost:3000/books').then((response) => {
      this.setState({
        books: response.data
      })
    })
  }
  render() {
  return (
    <div className="App-container">
      <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Rating</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Book Title</td>
          <td> 2.0</td>
          <td>
            <Button color="success" size="sm>" className="mr-2">Edit</Button>
            <Button color="danger" size="sm" className="mr-3">Delete</Button>
          </td>
        </tr>
      </tbody>
      </Table>
    </div>
  
  )
  }
}

export default App;
