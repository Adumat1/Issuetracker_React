import React from 'react'

const View = () => {

    return (
        <>
            <div className='body'>
                <header>
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
                                                <a className="nav-link" href="/create">Create</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/">List</a>
                                            </li>
                                        </ul>
                                        {/* <form class="d-flex">
                          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                          <button class="btn btn-sm btn-outline-light" type="submit">Search</i></button>
                        </form> */}
                                    </div>
                                </div>
                            </nav>
                        </main>
                    </div>
                    <div className=" row m-2">
                        {/* Title */}
                        <div className="col-md-12">
                            <p>
                            </p><h6>Title:</h6>
                            <span id="title">Outlet Registration
                                <span className="badge bg-success p-2">Resolved <i className="fas fa-check-circle" /></span>
                            </span>
                            <p />
                        </div>
                        {/* Descripton */}
                        <div className="col-md-12">
                            <h6>Description:</h6>
                            <p id="description">jbjmvdsc hjefbvgekdgfc jukgfilkdbgf yfreu jygdug yujfrutewjq furfq hlkjdsfgc jkfgvhj
                                bbhjd n jfvgdwjkhjfgw jMGVDSm </p>
                        </div>
                        {/* Created on */}
                        <div className="col-md-4">
                            <h6>Created On:</h6>
                            <p id="createdon">10-Mar-2021</p>
                        </div>
                        {/* Created by */}
                        <div className="col-md-4">
                            <h6>Created By:</h6>
                            <p id="createdby">Mr Gbenga</p>
                        </div>
                        {/* Severity */}
                        <div className="col-md-4">
                            <h6>Severity:</h6>
                            <p id="severity">Critical</p>
                        </div>
                        {/* Assigned to */}
                        <div className="col-md-4">
                            <h6>Assigned To:</h6>
                            <p id="assignedto">Ayomide</p>
                        </div>
                        {/* Resolved on */}
                        <div className="col-md-4">
                            <h6>Resolved On:</h6>
                            <p id="resolvedon">11-Mar-2021</p>
                        </div>
                        {/* Button */}
                        <div className="col-sm-12 my-3 text-center">
                            <button className="btn btn-danger text-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop" type>
                                Delete
                            </button>
                        </div>
                    </div>
                    {/* Modal */}
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-sm">
                            <div className="modal-content">
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
        </>
    );
}

export default View;
