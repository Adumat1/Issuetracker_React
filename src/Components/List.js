import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


const List = () => {

    const [issues, setIssues] = useState([]);
    const { id } = useParams();

    const loadIssues = () => {
        const getItems = JSON.parse(localStorage.getItem("issues"));
        setIssues(getItems)
        console.log("getItems", getItems)

    }

    useEffect(() => {
        loadIssues();
    }, [])

    const deleteIssue = () => {
        let getIssues = JSON.parse(localStorage.issues);
        for (var i = 0; i < getIssues.length; i++) {
            if (id === getIssues[i].id) {
                localStorage.removeItem(getIssues[i]);
                // var issueById = getIssues[i];
                // setIssue(issueById);
                // setIssue(getIssues[i]);

            }

        }
    };

    console.log("issues", issues)


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
                                                <a className="nav-link active" aria-current="page" href="/">List</a>
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
                                {issues && issues.length > 0 &&
                                    issues?.map((issue, index) =>
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{issue.title}</td>
                                            <td>{issue.severity}</td>
                                            <td>{issue.assignedTo}</td>
                                            <td className="text-center">
                                                {issue.resolved === "false" ?
                                                    (<span className="badge badge-sm bg-warning">Not Resolved <i className="fas fa-exclamation-circle" /></span>
                                                    ) : (
                                                        <span className="badge badge-sm bg-success">Resolved <i className="fas fa-check-circle" /></span>
                                                    )}
                                            </td>
                                            <td>
                                                <a href="/view"><i className="fas fa-info-circle" /></a>
                                            </td>
                                            <td>
                                                <a href="/edit"><i className="fas fa-edit" /></a>
                                                {/* <a href={`/edit/${18}`}><i className="fas fa-edit" /></a> */}
                                            </td>
                                            <td>
                                                <a className="text-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fas fa-trash-alt" /></a>
                                            </td>
                                        </tr>
                                    )}
                                {/* <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td className="text-center">
                                        <span className="badge bg-warning p-2">Not Resolved <i className="fas fa-exclamation-circle" /></span>
                                    </td>
                                    <td>
                                        <a href="/view"><i className="fas fa-info-circle" /></a>
                                    </td>
                                    <td>
                                        <a href="/edit"><i className="fas fa-edit" /></a>
                                    </td>
                                    <td>
                                        <a className="text-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fas fa-trash-alt" /></a>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                    {issues.length === 0 &&
                        <div className='row d-flex'>
                            <strong className='align-items-center'>No Issues Record</strong>
                        </div>
                    }
                    {/* Modal */}
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-sm">
                            <div className="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p>Are you sure you want to delete?</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="bttn btn btn-sm text-light" data-bs-dismiss="modal">No</button>
                                    <button type="button" className="btn btn-sm btn-danger" onClick={deleteIssue()}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default List;