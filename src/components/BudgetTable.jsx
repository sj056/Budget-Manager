import React from 'react'
import "../css/BudgetTable.css"
export default function BudgetTable() {
    return (
        <div className="main">
            <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
  </tbody>
</table>
<button className="btn"><span class="material-icons-outlined">
add
</span>

<div className='d-flex flex-row'>
  <div className='mem'></div>
  <div className='tab'> <table></table><button></button></div>
</div>

</button>
        </div>
    )
}
