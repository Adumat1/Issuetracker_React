import React from 'react'

const Edit = () => {

    return (
        <>
            <div className='body'>
                <div>
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
                                                    <a className="nav-link active" aria-current="page" href="create.html">Create</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="list.html">List</a>
                                                </li>
                                            </ul>
                                            {/* <form class="d-flex">
                          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                          <button class="btn btn-sm btn-outline-light" type="submit">Search</i></button>
                        </form> */}
                                        </div>
                                    </div>
                                </nav>
                            </main></div>
                        <div className="m-2">
                            <form className="row" action>
                                {/* Title */}
                                <div className="col-sm-12 mb-2">
                                    <label htmlFor="title" className="form-floating">Title</label>
                                    <input type="text" className="form-control" id="title" placeholder="Issue Title" required />
                                </div>
                                {/* Descripton */}
                                <div className="col-sm-12 my-2">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" placeholder="Write something about the issue" required />
                                </div>
                                {/* Created on */}
                                <div className="col-sm-6 col-md-4 my-2">
                                    <label htmlFor="createdon" className="form-label">Created On</label>
                                    <input type="date" className="form-control" id="createdon" required />
                                </div>
                                {/* Created by */}
                                <div className="col-sm-6 col-md-4 my-2">
                                    <label htmlFor="createdby" className="form-label">Created By</label>
                                    <input type="text" className="form-control" id="createdby" placeholder="Created By" required />
                                </div>
                                {/* Severity */}
                                <div className="col-sm-6 col-md-4 my-2">
                                    <label htmlFor="severity" className="form-label">Severity</label>
                                    <p>
                                        <select id="severity" className="form-select">
                                            <option>--Select--</option>
                                            <option>Critical</option>
                                            <option>Moderate</option>
                                            <option>Minor</option>
                                        </select>
                                    </p>
                                </div>
                                {/* Assigned to */}
                                <div className="col-sm-6 col-md-4 my-1">
                                    <label htmlFor="assignedto" className="form-label">Assigned To</label>
                                    <input type="text" className="form-control" id="assignedto" placeholder="Assigned To" required />
                                </div>
                                {/* Resolved? */}
                                <div className="col-sm-6 col-md-4 my-1">
                                    <label className="form-label" htmlFor="issue">Is Issue Resolved?</label>
                                    <p>
                                        <input className="form-check-input" type="radio" name="resolved" id="resolved" defaultValue />
                                        <span>Yes</span>&nbsp;&nbsp;&nbsp;
                                        <input className="form-check-input" type="radio" name="resolved" id="resolved" defaultValue defaultChecked />
                                        <span>No</span>
                                    </p>
                                </div>
                                {/* Resolved on */}
                                <div className="col-sm-6 col-md-4 my-1">
                                    <label htmlFor="resolvedon" className="form-label">Resolved On</label>
                                    <input type="date" className="form-control" id="resolvedon" />
                                </div>
                                {/* Button */}
                                <div className="col-sm-12 my-3 text-center">
                                    <button className="bttn btn text-light" type="submit">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Edit;
