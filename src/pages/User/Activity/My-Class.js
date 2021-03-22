import React, { Component } from 'react';
import Mobile_Nav from '../../../components/Mobile-Nav';
import Side_Menu from '../../../components/Side-Menu';
import { Link } from "react-router-dom";

class My_Class extends Component {
    render() {
        return (
            <>
                <Mobile_Nav />
                <div class="dashboard-container">
                    <Side_Menu />
                    <div id="main-content" class="bg-transparent p-3 d-flex flex-column justify-content-start">
                        <h1 class="d-flex align-items-center">
                            <Link to="./Activity">
                                <img class="rotate-180" src="../images/icons/forward-icon.svg" alt="prev page" />
                            </Link>
                My Class
            </h1>
                        <div class="card bg-transparent border-0 p-0">
                            <div class="card-header bg-transparent border-0 col-12 col-md-12 col-lg-12 p-0 my-4 my-md-4 my-lg-2 ">
                                <div class="d-flex flex-row justify-content-between row">
                                    <div class="d-flex flex-row justify-content-between col-10 col-md-8" />
                                    <input type="text" class="form-control r-5px" placeholder="Quick Search"
                                        aria-label="Quick Search" />
                                    <button class="btn btn-primary-color text-xs mx-2">Search</button>
                                </div>
                                <div class="col-12 col-md-4">
                                    <div
                                        class="sort-by-container float-start float-md-end float-lg-end my-2 my-md-0 my-lg-0 r-5px px-3">
                                        <span class="sort-by-text border-0 w-100">sort by:</span>
                                        <select class="border-0 bg-transparent" name="" id="">
                                            <option value="">All Categories</option>
                                            <option value="">Price</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-0 mt-4">
                            <div class="table-responsive">
                                <table class="table table-borderless my-class-table table-responsive">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="text-center"><input type="checkbox" name="" id="" /></th>
                                            <th scope="col">Class Name</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Progress</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Score</th>
                                            <th scope="col"></th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope=" row"><input type="checkbox" name="" id="" /></th>
                                            <td>Front-end fundamentals</td>
                                            <td>Software</td>
                                            <td>Learn the fundamentals of front...</td>
                                            <td>
                                                <div class="c100 p80 small">
                                                    <span>80%</span>
                                                    <div class="slice">
                                                        <div class="bar"></div>
                                                        <div class="fill"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="badge badge-ongoing p-2 r-15px">Ongoing</span>
                                            </td>
                                            <td><span class="good-score">86</span></td>
                                            <td scope="col"><img src="../images/icons/list-icon.svg" alt="" />
                                            </td>
                                        </tr>

                                        <tr>
                                            <th scope=" row"><input type="checkbox" name="" id="" /></th>
                                            <td>HTML for Beginners</td>
                                            <td>Software</td>
                                            <td>HTML from scratch</td>
                                            <td>
                                                <div class="c100 p25 small">
                                                    <span>25%</span>
                                                    <div class="slice">
                                                        <div class="bar"></div>
                                                        <div class="fill"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="badge badge-ongoing p-2 r-15px">Ongoing</span>
                                            </td>
                                            <td><span class="good-score">71</span></td>
                                            <td scope="col"><img src="../images/icons/list-icon.svg" alt="" /></td>
                                        </tr>

                                        <tr>
                                            <th scope=" row"><input type="checkbox" name="" id="" /></th>
                                            <td>History of Europe</td>
                                            <td>History</td>
                                            <td>The history of Europe concerns itself...</td>
                                            <td>
                                                <div class="c100 p69 small">
                                                    <span>69%</span>
                                                    <div class="slice">
                                                        <div class="bar"></div>
                                                        <div class="fill"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="badge badge-ongoing p-2 r-15px">Ongoing</span>
                                            </td>
                                            <td><span class="medium-score">62</span></td>
                                            <td scope="col"><img src="../images/icons/list-icon.svg" alt="" /></td>
                                        </tr>

                                        <tr>
                                            <th scope=" row"><input type="checkbox" name="" /></th>
                                            <td>Trigonometry</td>
                                            <td>Math</td>
                                            <td>Trigonometry help u find angles</td>
                                            <td>
                                                <div class="c100 p25 small">
                                                    <span>25%</span>
                                                    <div class="slice">
                                                        <div class="bar"></div>
                                                        <div class="fill"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="badge badge-ongoing p-2 r-15px">Ongoing</span>
                                            </td>
                                            <td><span class="good-score">71</span></td>
                                            <td scope="col"><img src="../images/icons/list-icon.svg" alt="" /></td>
                                        </tr>

                                        <tr>
                                            <th scope=" row"><input type="checkbox" name="" checked /></th>
                                            <td>Algebra</td>
                                            <td>Math</td>
                                            <td>Branch of mathematics dealing with...</td>
                                            <td>
                                                <div class="c100 p100 small">
                                                    <span>100%</span>
                                                    <div class="slice">
                                                        <div class="bar"></div>
                                                        <div class="fill"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="badge badge-ongoing p-2 r-15px">Completed</span>
                                            </td>
                                            <td><span class="complete-score">100</span></td>
                                            <td scope="col"><img src="../images/icons/list-icon.svg" alt="" /></td>
                                        </tr>

                                        <tr>
                                            <th scope=" row"><input type="checkbox" name="" id="" /></th>
                                            <td>Molecular Biology</td>
                                            <td>Science</td>
                                            <td>Study the composition, structure...</td>
                                            <td>
                                                <div class="c100 p80 small">
                                                    <span>80%</span>
                                                    <div class="slice">
                                                        <div class="bar"></div>
                                                        <div class="fill"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="badge badge-ongoing p-2 r-15px">Ongoing</span>
                                            </td>
                                            <td><span class="low-score">42</span></td>
                                            <td scope="col"><img src="../images/icons/list-icon.svg" alt="" /></td>
                                        </tr>

                                        <tr>
                                            <th scope=" row"><input type="checkbox" name="" id="" /></th>
                                            <td>Banking Finance</td>
                                            <td>Finance</td>
                                            <td>Explore the dynamic, fast-paced...</td>
                                            <td>
                                                <div class="c100 p10 small">
                                                    <span>10%</span>
                                                    <div class="slice">
                                                        <div class="bar"></div>
                                                        <div class="fill"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="badge badge-ongoing p-2 r-15px">Ongoing</span>
                                            </td>
                                            <td><span class="veryLow-score">21</span></td>
                                            <td scope="col"><img src="../images/icons/list-icon.svg" alt="" /></td>
                                        </tr>

                                        <tr>
                                            <th scope=" row"><input type="checkbox" name="" id="" /></th>
                                            <td>Basic Excel</td>
                                            <td>Software</td>
                                            <td>Learn Excel from beginner to...</td>
                                            <td>
                                                <div class="c100 p100 small">
                                                    <span>100%</span>
                                                    <div class="slice">
                                                        <div class="bar"></div>
                                                        <div class="fill"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="badge badge-ongoing p-2 r-15px">Completed</span>
                                            </td>
                                            <td><span class="complete-score">98</span></td>
                                            <td scope="col"><img src="../images/icons/list-icon.svg" alt="" /></td>
                                        </tr>

                                        <tr>
                                            <th scope=" row"><input type="checkbox" name="" id="" /></th>
                                            <td>Thermodynamics and<br /> Phase Equilibria</td>
                                            <td>Science</td>
                                            <td>Learn Thermodynamics and how to...</td>
                                            <td>
                                                <div class="c100 p100 small">
                                                    <span>100%</span>
                                                    <div class="slice">
                                                        <div class="bar"></div>
                                                        <div class="fill"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="badge badge-ongoing p-2 r-15px">Completed</span>
                                            </td>
                                            <td><span class="good-score">86</span></td>
                                            <td scope="col"><img src="../images/icons/list-icon.svg" alt="" /></td>
                                        </tr>

                                        <tr>
                                            <th scope=" row"><input type="checkbox" name="" id="" /></th>
                                            <td>Ancient Egypt and its <br /> Civilization</td>
                                            <td>History</td>
                                            <td>Colossal pyramids imposing temples...</td>
                                            <td>
                                                <div class="c100 p100 small">
                                                    <span>100%</span>
                                                    <div class="slice">
                                                        <div class="bar"></div>
                                                        <div class="fill"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="badge badge-ongoing p-2 r-15px">Completed</span>
                                            </td>
                                            <td><span class="medium-score">72</span></td>
                                            <td scope="col"><img src="../images/icons/list-icon.svg" alt="" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-12 pagination-container d-flex flex-row justify-content-between align-items-center">
                                <span class="w-100">Showing 10 out of 21</span>
                                <div class="d-flex flex-row justify-content-evenly">
                                    <div class="table-page ">
                                        <img class="rotate-180" src="../images/icons/forward-icon.svg" alt="prev page" />
                                    </div>
                                    <span class="table-page  active">1</span>
                                    <span class="table-page ">2</span>
                                    <span class="table-page ">3</span>
                                    <span class="table-page ">4</span>
                                    <span class="table-page ">5</span>
                                    <div class="table-page "><img src="../images/icons/forward-icon.svg" alt="next page" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default My_Class
