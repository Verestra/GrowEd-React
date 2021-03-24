import React, { Component } from 'react';

import MobileNav from '../../../components/Mobile-Nav';
import SideMenu from '../../../components/Side-Menu';
import { Link } from "react-router-dom";

class ActivityFasilitator extends Component {
    render() {
        return (
            <>
            <MobileNav />
            <div class="dashboard-container">
                <SideMenu />
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
                                            <th scope="col">Schedule</th>
                                            <th scope="col">Student</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope=" row"><input type="checkbox" name="" id="" /></th>
                                            <td height="50px"><Link to="./Class-Details" className="text-link">Front-end fundamentals </Link></td>
                                            <td>Software</td>
                                            <td>Learn the fundamentals of front...</td>
                                            <td>Friday, 08:00 - 09:40</td>
                                            <td align="center">24 <img src="../images/icons/toga-icon.png" alt="student icon"/></td>
                                            <td><img src="../images/icons/list-icon.svg" alt="list icon" />
                                            </td>
                                        </tr>
        
                                        <tr>
                                            <th scope=" row"><input type="checkbox" name="" id="" /></th>
                                            <td height="50px">HTML for Beginners</td>
                                            <td>Software</td>
                                            <td>HTML from scratch</td>
                                            <td>Monday, 13:00 - 14:40</td>
                                            <td align="center">32 <img src="../images/icons/toga-icon.png" alt="student icon"/></td>
                                            <td><img src="../images/icons/list-icon.svg" class="" alt="list icon" /></td>
                                        </tr>
        
                                        <tr>
                                            <th scope=" row"><input type="checkbox" name="" id="" /></th>
                                            <td height="50px">History of Europe</td>
                                            <td>History</td>
                                            <td>The history of Europe concerns itself...</td>
                                            <td>Monday, 15:00 - 16:40</td>
                                            <td align="center">17 <img src="../images/icons/toga-icon.png" alt="student icon"/></td>
                                            <td><img src="../images/icons/list-icon.svg" alt="list icon" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="d-flex align-items-center justify-content-center">
                                    <Link to="./My-Class" class="view-all cursor-pointer">view all
                                        <img src="../images/icons/forward-icon.svg" width="12" height="12" alt="icon" /></Link>
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

export default ActivityFasilitator
