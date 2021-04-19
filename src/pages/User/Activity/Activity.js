import React, {useEffect, useRef} from 'react';
import MobileNav from '../../../components/Mobile-Nav';
import SideMenu from '../../../components/Side-Menu';
import { Link } from "react-router-dom";
// import Courses from '../../../assets/data/courses.json';
import { connect } from "react-redux";
import { getMyClassPaginated } from "../../../Redux/ActionCreators/GetMyClass"
import { getAllCoursesPaginated} from "../../../Redux/ActionCreators/GetAllCourses"

function Activity(props) {
    const {
        getMyClassReducer,
        getMyClass,
        getAllCoursesReducer,
        getAllCourses,
    } = props
    const getRef = useRef();
    useEffect(() => {
        if (!getRef.current) {
            getMyClass();
            getAllCourses();
            getRef.current = true;
        }
    })
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
                                            <th scope="col">Progress</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Score</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {getMyClassReducer.isPending ? (
                                <div> Loading... </div>
                            ) : (
                                <>      
                                    {getMyClassReducer.isFulfilled
                                        ? getMyClassReducer.results.map((my) => (
                                            <tr>
                                            <th scope=" row"><input type="checkbox" name="" id="" /></th>
                                            <td key={my.id_courses}>{my.class_name}</td>
                                            <td key={my.id_courses}>{my.category_name}</td>
                                            <td key={my.id_courses} class="text-table">{my.description}</td>
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
                                            <td><span class="good-score"> 89</span></td>
                                            <td><img src="../images/icons/list-icon.svg" alt="list"/>
                                            </td>
                                        </tr>
                                        ))
                                        : null}
                                </>
                            )}
                                    </tbody>
                                </table>
                                <div class="d-flex align-items-center justify-content-center">
                                    <Link to="./My-Class" class="view-all cursor-pointer">view all
                                        <img src="../images/icons/forward-icon.svg" width="12" height="12" alt="next"/></Link>
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
                                    {getAllCoursesReducer.isPending ? (
                                <div> Loading... </div>
                            ) : (
                                <>      
                                    {getAllCoursesReducer.isFulfilled
                                        ? getAllCoursesReducer.results.map((my) => (
                                            <tr class="cursor-pointer">
                                            <td><Link to="Class-Detail" className="text-link" key={my.id_courses}>{my.class_name}</Link> </td>
                                            <td key={my.id_courses}>{my.category_name}</td>
                                            <td key={my.id_courses}  class="text-table">{my.description}</td>
                                            <td key={my.id_courses}>{my.level_name}</td>
                                            <td key={my.id_courses}>{my.class_price}$</td>
                                            <td><span class="badge btn-success r-15px">Register</span> </td>
                                            <td><img src="../images/icons/list-icon.svg" alt="list"/></td>
                                        </tr>
                                        ))
                                        : null}
                                </>
                            )}
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-12 pagination-container d-flex flex-row justify-content-between align-items-center">
                            {getAllCoursesReducer.isFulfilled ? <span class="w-100">Showing 10 out of {getAllCoursesReducer.info.count} </span> : <span class="w-100">Showing 0 </span> }
                                <div class="d-flex flex-row justify-content-evenly">
                                    <div class="table-page "><img class="rotate-180" src="../images/icons/forward-icon.svg" alt="next"/>
                                    </div>
                                    <span class="table-page  active">1</span>
                                    <span class="table-page ">2</span>
                                    <span class="table-page ">3</span>
                                    <span class="table-page ">4</span>
                                    <span class="table-page ">5</span>
                                    <div class="table-page "><img src="../images/icons/forward-icon.svg" alt="next"/>
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

const mapStateToProps = (state) => {
    const { getMyClassReducer, getAllCoursesReducer } = state;
    return {
        getMyClassReducer,
        getAllCoursesReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMyClass: () =>
            dispatch(
                getMyClassPaginated("http://localhost:8000/courses/api/myClass/?page=1&limit=3")
            ),
        getAllCourses: () =>
            dispatch(
                getAllCoursesPaginated("http://localhost:8000/courses/api/all?search=&sort=&page=1&limit=10")
            ),
    };
};
const ConnectedActivity = connect(mapStateToProps, mapDispatchToProps)(Activity);

export default ConnectedActivity
