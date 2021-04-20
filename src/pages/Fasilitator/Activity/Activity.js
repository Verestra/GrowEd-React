import React, { Component } from 'react';

import MobileNav from '../../../components/Mobile-Nav';
import SideMenu from '../../../components/Side-Menu';
import { Link } from "react-router-dom";
import Axios from 'axios'
import "./style.css";

class ActivityFasilitator extends Component {

    state = {
        className: "",
        categoryId: 1,
        description: "",
        level_id: 1,
        class_price: 0,
        schedule: "2020-11-06",
        start_time: "",
        finish_time: "",
        image: null
    }

    handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        
        formData.append("classname", this.state.className)
        formData.append("categoryId", this.state.categoryId)
        formData.append("description", this.state.description)
        formData.append("level_id", this.state.level_id)
        formData.append("class_price", this.state.class_price)
        formData.append("schedule", this.state.schedule)
        formData.append("start_time", this.state.start_time)
        formData.append("finish_time", this.state.finish_time)
        formData.append(
            "image", this.state.image
        )
        console.log(formData.getAll('classname'))
        console.log(this.state.image)
        // const body = {
        //     className: this.state.className,
        //     categoryId: this.statecategoryId,
        //     description: this.state.description,
        //     level_id: this.state.level_id,
        //     class_price: this.state.class_price,
        //     schedule: this.state.schedule,
        //     start_time: this.state.start_time,
        //     finish_time: this.state.finish_time,
        //     image : this.state.image
        // };

        Axios
            .post("http://localhost:8000/courses/api/addClass", formData)
            .then((result) => {
                alert("Add New Class Complete");
                if (result.data.success) {
                    this.props.history.push('/Fasilitator/Dashboard')
                }
                console.log(result);
                this.setState({
                    className: "",
                    categoryId: 1,
                    description: "",
                    level_id: 1,
                    class_price: 0,
                    schedule: "",
                    start_time: "",
                    finish_time: "",
                    image : null
                });
            })
            .catch((err) => {
                alert("Register Failed");
                console.error(err)
            });
    };




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
                                                <td align="center">24 <img src="../images/icons/toga-icon.png" alt="student icon" /></td>
                                                <td><img src="../images/icons/list-icon.svg" alt="list icon" />
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope=" row"><input type="checkbox" name="" id="" /></th>
                                                <td height="50px">HTML for Beginners</td>
                                                <td>Software</td>
                                                <td>HTML from scratch</td>
                                                <td>Monday, 13:00 - 14:40</td>
                                                <td align="center">32 <img src="../images/icons/toga-icon.png" alt="student icon" /></td>
                                                <td><img src="../images/icons/list-icon.svg" class="" alt="list icon" /></td>
                                            </tr>

                                            <tr>
                                                <th scope=" row"><input type="checkbox" name="" id="" /></th>
                                                <td height="50px">History of Europe</td>
                                                <td>History</td>
                                                <td>The history of Europe concerns itself...</td>
                                                <td>Monday, 15:00 - 16:40</td>
                                                <td align="center">17 <img src="../images/icons/toga-icon.png" alt="student icon" /></td>
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

                        <h1>Create New Class</h1>
                        <div class="card bg-transparent border-0 p-0">
                            <div class="card-body bg-white p-0 r-10">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-activity ">
                                        <div className="row mx-3 mt-3">
                                            <div className={"form-side col-12 col-lg-5"}>
                                                <div className="form-row">
                                                    Class Name :{" "}
                                                    <input
                                                        type="text"
                                                        name="className"
                                                        onChange={this.handleChange}
                                                        className={"activity-input w-50"}
                                                        placeholder={"Input Class Name"}
                                                        required
                                                    />
                                                </div>

                                                <div className="form-row">
                                                    Category :{""}
                                                    <select name="category_id" onChange={this.handleChange}>
                                                        <option value={1}>Software</option>
                                                        <option value={2}>History</option>
                                                        <option value={3}>Psychology</option>
                                                        <option value={4}>Finance</option>
                                                        <option value={5}>Math</option>
                                                        <option value={6}>Science</option>
                                                    </select>
                                                </div>
                                                <div className="form-row">
                                                    Level :{""}
                                                    <select name="level_id" onChange={this.handleChange}>
                                                        <option value={1}>Beginner</option>
                                                        <option value={2}>Intermediate</option>
                                                        <option value={3}>Advance</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className={"form-side col-12 col-lg-7"}>
                                                <div className={"form-row"}>
                                                    Pricing :{" "}
                                                    <div className="form-check form-check-inline mx-3">
                                                        <input
                                                            className="form-price"
                                                            type="number"
                                                            name="class_price"
                                                            onChange={this.handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex form-row">
                                                    Schedule :{" "}
                                                    <select name="" id="">
                                                        <option value="fr">Friday</option>
                                                    </select>
                                                    <div className={"form-row w-50 mx-2"}>
                                                        <input
                                                            type="text"
                                                            className={"activity-input w-25"}
                                                            placeholder={"00:00"}
                                                            name="start_time"
                                                            onChange={this.handleChange}
                                                            required
                                                        />
                                                        <input
                                                            type="text"
                                                            className={"activity-input w-25"}
                                                            placeholder={"00:00"}
                                                            name="finish_time"
                                                            onChange={this.handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="mx-3">Description:</span>
                                        <textarea
                                            className={"activity-text-area mx-3"}
                                            name="description"
                                            cols="30"
                                            rows="10"
                                            onChange={this.handleChange}
                                            required
                                        ></textarea>
                                        <input type="file" onChange={this.handleChange} name="image" />
                                        <div className="button-create-class">
                                            <button type="submit" className={"btn btn-register my-1 create-class"}>
                                                <span className="text-color-3">Create </span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ActivityFasilitator
