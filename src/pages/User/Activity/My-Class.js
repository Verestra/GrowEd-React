import React, { useEffect, useRef} from 'react';
import MobileNav from '../../../components/Mobile-Nav';
import SideMenu from '../../../components/Side-Menu';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMyClassPaginated } from "../../../Redux/ActionCreators/GetMyClass"
function MyClass(props) {
    const {
        getMyClassReducer,
        getMyClass,
    } = props
    const getRef = useRef();
    useEffect(() => {
        if (!getRef.current) {
            getMyClass();
            getRef.current = true;
        }
    })
        return (
            <>
                <MobileNav />
                <div class="dashboard-container">
                    <SideMenu />
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

const mapStateToProps = (state) => {
    const { getMyClassReducer } = state;
    return {
        getMyClassReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMyClass: () =>
            dispatch(
                getMyClassPaginated("http://localhost:8000/courses/api/myClass/?page=1&limit=10")
            ),
    };
};
const ConnectedMyClass = connect(mapStateToProps, mapDispatchToProps)(MyClass);

export default ConnectedMyClass
