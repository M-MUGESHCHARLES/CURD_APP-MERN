import React from 'react'

export default function DetailsTable() {
  return (
    <div>
      <table className=" table table-hover border border-secondary-subtle text-center">
        <thead>
          <tr className="table-secondary">
            <th scope="col">id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <button className="btn btn-primary me-1"> Edit </button>
              <button className="btn btn-danger"> Delete </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>
              <button className="btn btn-primary me-1"> Edit </button>
              <button className="btn btn-danger"> Delete </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>
              <button className="btn btn-primary me-1"> Edit </button>
              <button className="btn btn-danger"> Delete </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
