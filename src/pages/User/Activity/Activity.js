import React, { Component } from 'react';
import Mobile_Nav from '../../../components/Mobile-Nav';
import Side_Menu from '../../../components/Side-Menu';
import { Link } from "react-router-dom";


class Activity extends Component {
    render() {
        return (
            <>
            <Mobile_Nav />
            <div class="dashboard-container">
                <Side_Menu />
                <div id="main-content" class="bg-transparent p-3 d-flex flex-column justify-content-start">
                    <h1 class="">Activity</h1>
                    <div class="card bg-transparent border-0 p-0">
                        <div class="card-header bg-transparent border-0">
                            My Class
                        </div>
                        <div class="card-body p-0">
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
                                            <td scope="col"><img src="../images/icons/list-icon.svg" class="" alt="" />
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
                                            <td><span class="badge badge-ongoing p-2 r-15px">Ongoing</span> </td>
                                            <td><span class="good-score">71</span></td>
                                            <td scope="col"><img src="../images/icons/list-icon.svg" class="" alt="" />
                                            </td>
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
                                            <td><span class="badge badge-ongoing p-2 r-15px">Ongoing</span> </td>
                                            <td><span class="medium-score">62</span></td>
                                            <td scope="col"><img src="../images/icons/list-icon.svg" class="" alt="" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="d-flex align-items-center justify-content-center">
                                    <Link to="./My-Class" class="view-all cursor-pointer">view all
                                        <img src="../images/icons/forward-icon.svg" width="12" height="12" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div class="card border-0 p-0 mt-4 mt-md-5 col-12">
                        <div class="card-header bg-transparent border-0 my-2">
                            New Class
                        </div>
                        <div class="card-body">
                            <div class="input-group">
                                <input type="text" class="form-control col-12" placeholder="Quick Search"
                                    aria-label="Quick Search" aria-describedby="button-addon2" />
                                <button class="btn btn-primary-color text-xs" type="button" id="button-addon2">Search</button>
                            </div>
                            <div class="mt-0 col-12 search-filter mb-3">
                                <select name="category" id="category">
                                    <option value="">Categories</option>
                                </select>
                                <select name="level" id="level">
                                    <option value="">Level</option>
                                </select>
                                <select name="pricing" id="pricing">
                                    <option value="">Pricing</option>
                                </select>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-borderless new-class-table p-2 table-style">
                                    <thead>
                                        <tr>
                                            <th scope="col">Class Name</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Level</th>
                                            <th scope="col">Pricing</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="cursor-pointer">
                                             <td><Link to="Class-Detail" className="text-link">Know more Javascript</Link> </td>
                                            <td>Software</td>
                                            <td>Javascript from the basic for...</td>
                                            <td>Beginner</td>
                                            <td>Free</td>
                                            <td scope="col"><a class="badge btn-success r-15px">Register</a> </td>
                                            <td><img src="../images/icons/list-icon.svg" alt="" /></td>
                                        </tr>
                                        <tr>
                                            <td>HTML and CSS to code</td>
                                            <td>Software</td>
                                            <td>Start combining HTML and CSS to...</td>
                                            <td>Intermediate</td>
                                            <td>$10</td>
                                            <td scope="col"><a class="badge btn-success r-15px">Register</a> </td>
                                            <td><img src="../images/icons/list-icon.svg" alt="" /></td>
                                        </tr>
                                        <tr>
                                            <td>Indonesian war history</td>
                                            <td>History</td>
                                            <td>From the first colonialization until..</td>
                                            <td>Advance</td>
                                            <td>$50</td>
                                            <td scope="col"><a class="badge btn-success r-15px">Register</a> </td>
                                            <td><img src="../images/icons/list-icon.svg" alt="" /></td>
                                        </tr>
                                        <tr>
                                            <td>Buddhism and Modern Psychology</td>
                                            <td>Psychology</td>
                                            <td>Buddhism and science are deeply...</td>
                                            <td>Beginner</td>
                                            <td>Free</td>
                                            <td scope="col"><a class="badge btn-success r-15px">Register</a> </td>
                                            <td><img src="../images/icons/list-icon.svg" alt="" /></td>
                                        </tr>
                                        <tr>
                                            <td>Financial markets</td>
                                            <td>Finance</td>
                                            <td>An overview of the ideas, methods...</td>
                                            <td>Intermediate</td>
                                            <td>$10</td>
                                            <td scope="col"><a class="badge btn-success r-15px">Register</a> </td>
                                            <td><img src="../images/icons/list-icon.svg" alt="" /></td>
                                        </tr>
                                        <tr>
                                            <td>Corporate finance</td>
                                            <td>Finance</td>
                                            <td>Introduction to the fundamentals..</td>
                                            <td>Advance</td>
                                            <td>$50</td>
                                            <td scope="col"><a class="badge btn-success r-15px">Register</a> </td>
                                            <td><img src="../images/icons/list-icon.svg" alt="" /></td>
                                        </tr>
                                        <tr>
                                            <td>Algorithm specialization</td>
                                            <td>Math</td>
                                            <td>Learn to think like a computer...</td>
                                            <td>Advance</td>
                                            <td>$50</td>
                                            <td scope="col"><a class="badge btn-success r-15px">Register</a> </td>
                                            <td><img src="../images/icons/list-icon.svg" alt="" /></td>
                                        </tr>
                                        <tr>
                                            <td>Business and Financial Modeling</td>
                                            <td>Software</td>
                                            <td>Designed to help you make...</td>
                                            <td>Beginner</td>
                                            <td>Free</td>
                                            <td scope="col"><a class="badge btn-success r-15px">Register</a> </td>
                                            <td><img src="../images/icons/list-icon.svg" alt="" /></td>
                                        </tr>
                                        <tr>
                                            <td>Marketing in a Digital World</td>
                                            <td>Software</td>
                                            <td>This class examines how digital...</td>
                                            <td>Intermediate</td>
                                            <td>$10</td>
                                            <td scope="col"><a class="badge btn-success r-15px">Register</a> </td>
                                            <td><img src="../images/icons/list-icon.svg" alt="" /></td>
                                        </tr>
                                        <tr>
                                            <td>Social Psychology</td>
                                            <td>Psychology</td>
                                            <td>This class offers some answers...</td>
                                            <td>Advance</td>
                                            <td>$50</td>
                                            <td scope="col"><a class="badge btn-success r-15px">Register</a> </td>
                                            <td><img src="../images/icons/list-icon.svg" alt="" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-12 pagination-container d-flex flex-row justify-content-between align-items-center">
                                <span class="w-100">Showing 10 out of 64</span>
                                <div class="d-flex flex-row justify-content-evenly">
                                    <div class="table-page "><img class="rotate-180" src="../images/icons/forward-icon.svg"
                                            alt="" />
                                    </div>
                                    <span class="table-page  active">1</span>
                                    <span class="table-page ">2</span>
                                    <span class="table-page ">3</span>
                                    <span class="table-page ">4</span>
                                    <span class="table-page ">5</span>
                                    <div class="table-page "><img src="../images/icons/forward-icon.svg" alt="" />
                                    </div>
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

export default Activity
