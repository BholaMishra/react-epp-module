
import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (

      
        <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ backgroundColor: "#e9ecef" }}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-0 mt-1 ">
                <li class="nav-item mb-2 mt-4"><a class="nav-link text-secondary" href="/Epp"><h5>NAVIGATION</h5></a></li>
               
                <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="/dashboard"><i class="bi bi-cast"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cast" viewBox="0 0 16 16">
                    <path d="m7.646 9.354-3.792 3.792a.5.5 0 0 0 .353.854h7.586a.5.5 0 0 0 .354-.854L8.354 9.354a.5.5 0 0 0-.708 0z" />
                    <path d="M11.414 11H14.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.086l-1 1H1.5A1.5 1.5 0 0 1 0 10.5v-7A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-2.086l-1-1z" />
                </svg><span className="ml-2">EPP Management</span></a></li>



                <li class="nav-item mb-1 ">
                    <a class="nav-link text-secondary" href="/Epp" data-toggle="collapse" data-target="#submenu1"><i class="bi bi-cast"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cast" viewBox="0 0 16 16">
                        <path d="m7.646 9.354-3.792 3.792a.5.5 0 0 0 .353.854h7.586a.5.5 0 0 0 .354-.854L8.354 9.354a.5.5 0 0 0-.708 0z" />
                        <path d="M11.414 11H14.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.086l-1 1H1.5A1.5 1.5 0 0 1 0 10.5v-7A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-2.086l-1-1z" />
                    </svg><span className="ml-2">Auction Management</span></a>
                    <ul class="list-unstyled flex-column pl-3  collapse" id="submenu1" aria-expanded="false">
                        {/* <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""><i class="fas fa-book-reader"></i> Data Report </a></li> */}
                        <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="/Epp"> <i class="fas fa-book-medical"></i> Auction Management </a></li>
                    </ul>
                </li>
                {/* <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Analytics</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-file-export font-weight-bold"></i><span className="ml-3">Export</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">Snippets</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-atom font-weight-bold"></i> <span className="ml-3">Flex</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-folder font-weight-bold"></i> <span className="ml-3">Layouts</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#">Templates</a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#">Themes</a></li> */}
            </ul>


       

        </div>

    )
}

export default Sidebar