import React from 'react'
import DetailsTable from '../components/DetailsTable';

export default function ViewEmployees() {
  return (
    <section className="px-5 py-5" id="ViewEmployees">
      <div className="row border rounded border-2 py-3">
        <div className="col-12 py-3">
          <h2 className="ps-5"> Our Employees </h2>
        </div>
        <div className="col-12">
          <DetailsTable />
        </div>
      </div>
    </section>
  );
}
