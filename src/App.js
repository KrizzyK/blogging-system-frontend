import './App.css';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import RegisterPage from "./components/register/RegisterPage";
import LoginPage from "./components/login/LoginPage";
import HomePage from "./components/home/HomePage";
import Header from "./components/header/Header";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import EditBlogEntry from "./components/new_post/EditBlogEntry";
import BlogEntryPage from "./components/entry/BlogEntryPage";
import EditBlogEntryPage from "./components/new_post/EditBlogEntryPage";


function App() {
    return (
        <div className="App">
            <Header/>
            <div className="container mx-xl-5">
                <div className="row">
                    <div className="col-12">
                        <Router>
                            <Route path={"/register"}>
                                <RegisterPage/>
                            </Route>
                            <Route path={"/login"}>
                                <LoginPage/>
                            </Route>
                            <Route path={"/home"}>
                                <HomePage/>
                            </Route>
                            <Route path={"/newblogentry"}>
                                <EditBlogEntry x_blogObjects={[]} x_count={0} x_title={""} newEntry={null}/>
                            </Route>
                            <Route path={"/editblogentry/:id"} component={EditBlogEntryPage}></Route>
                            <Route path={"/post/:id"} component={BlogEntryPage}></Route>

                        </Router>
                    </div>
                    <div className="col">
                        <ToastContainer
                            position="bottom-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
