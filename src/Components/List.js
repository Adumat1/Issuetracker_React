import React from 'react'

export default function List() {
    return (
        <div className='body'>
            <header className>
                <nav className="navbar navbar-dark shadow">
                    <div className="container-fluid justify-content-center">
                        <span className="navbar-brand">
                            <h2 className="d-flex my-1">Issues Tracking Application</h2>
                        </span>
                    </div>
                </nav>
            </header>
            {/* </nav> */}
            <div className="card container-fluid">
                <div className="row">
                    <main className>
                        <nav className="create navbar-expand-lg navbar navbar-light rounded">
                            <div className="container-fluid">
                                <span className="navbar-brand">
                                    <h5>Issues Tracker</h5>
                                </span>
                                <button className="navbar-toggler btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarText">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link" href="create.html">Create</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="list.html">List</a>
                                        </li>
                                    </ul>
                                    <form className="d-flex">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="bttn btn btn-sm btn-outline-light" type="submit"><i className="fas fa-search" /></button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </main></div>
                {/* Table */}
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">SN</th>
                                <th scope="col">Title</th>
                                <th scope="col">Severity</th>
                                <th scope="col" colSpan={2}>Assigned To</th>
                                <th scope="col" />
                                <th scope="col" />
                                <th scope="col" />
                                <th scope="col">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td className="text-center">
                                    <span className="badge bg-success p-2">Resolved <i className="fas fa-check-circle" /></span>
                                </td>
                                <td>
                                    <a href="view.html"><i className="fas fa-info-circle" /></a>
                                </td>
                                <td>
                                    <a href="update.html"><i className="fas fa-edit" /></a>
                                </td>
                                <td>
                                    <a href className="text-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fas fa-trash-alt" /></a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td className="text-center">
                                    <span className="badge bg-warning p-2">Not Resolved <i className="fas fa-exclamation-circle" /></span>
                                </td>
                                <td>
                                    <a href="view.html"><i className="fas fa-info-circle" /></a>
                                </td>
                                <td>
                                    <a href="update.html"><i className="fas fa-edit" /></a>
                                </td>
                                <td>
                                    <a href className="text-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fas fa-trash-alt" /></a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td className="text-center">
                                    <span className="badge bg-success p-2">Resolved <i className="fas fa-check-circle" /></span>
                                </td>
                                <td>
                                    <a href="view.html"><i className="fas fa-info-circle" /></a>
                                </td>
                                <td>
                                    <a href="update.html"><i className="fas fa-edit" /></a>
                                </td>
                                <td>
                                    <a href className="text-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fas fa-trash-alt" /></a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td className="text-center">
                                    <span className="badge bg-warning p-2">Not Resolved <i className="fas fa-exclamation-circle" /></span>
                                </td>
                                <td>
                                    <a href="view.html"><i className="fas fa-info-circle" /></a>
                                </td>
                                <td>
                                    <a href="update.html"><i className="fas fa-edit" /></a>
                                </td>
                                <td>
                                    <a href className="text-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fas fa-trash-alt" /></a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td className="text-center">
                                    <span className="badge bg-success p-2">Resolved <i className="fas fa-check-circle" /></span>
                                </td>
                                <td>
                                    <a href="view.html"><i className="fas fa-info-circle" /></a>
                                </td>
                                <td>
                                    <a href="update.html"><i className="fas fa-edit" /></a>
                                </td>
                                <td>
                                    <a href className="text-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fas fa-trash-alt" /></a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td className="text-center">
                                    <span className="badge bg-warning p-2">Not Resolved <i className="fas fa-exclamation-circle" /></span>
                                </td>
                                <td>
                                    <a href="view.html"><i className="fas fa-info-circle" /></a>
                                </td>
                                <td>
                                    <a href="update.html"><i className="fas fa-edit" /></a>
                                </td>
                                <td>
                                    <a href className="text-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fas fa-trash-alt" /></a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td className="text-center">
                                    <span className="badge bg-success p-2">Resolved <i className="fas fa-check-circle" /></span>
                                </td>
                                <td>
                                    <a href="view.html"><i className="fas fa-info-circle" /></a>
                                </td>
                                <td>
                                    <a href="update.html"><i className="fas fa-edit" /></a>
                                </td>
                                <td>
                                    <a href className="text-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fas fa-trash-alt" /></a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td className="text-center">
                                    <span className="badge bg-warning p-2">Not Resolved <i className="fas fa-exclamation-circle" /></span>
                                </td>
                                <td>
                                    <a href="view.html"><i className="fas fa-info-circle" /></a>
                                </td>
                                <td>
                                    <a href="update.html"><i className="fas fa-edit" /></a>
                                </td>
                                <td>
                                    <a href className="text-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fas fa-trash-alt" /></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* Modal */}
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-sm">
                            <div className="modal-content">
                                {/* <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> */}
                                <div className="modal-body">
                                    <p>Are you sure you want to delete?</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="bttn btn btn-sm text-light" data-bs-dismiss="modal">No</button>
                                    <button type="button" className="btn btn-sm btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
