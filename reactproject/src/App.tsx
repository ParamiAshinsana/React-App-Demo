import 'bootstrap/dist/css/bootstrap.min.css';

const CrudUI = () => {
  return (
    <div className="container mt-5">
      {/* Search Bar */}
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search..." />
        <button className="btn btn-primary" type="button">Search</button>
      </div>

      {/* Input Fields */}
      <div className="row mb-3">
        <div className="col-md-6">
          <input type="text" className="form-control mb-2" placeholder="Input 1" />
        </div>
        <div className="col-md-6">
          <input type="text" className="form-control mb-2" placeholder="Input 2" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <input type="text" className="form-control mb-2" placeholder="Input 3" />
        </div>
        <div className="col-md-6">
          <input type="text" className="form-control mb-2" placeholder="Input 4" />
        </div>
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-between">
        <button className="btn btn-success">Save</button>
        <button className="btn btn-warning">Update</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default CrudUI;