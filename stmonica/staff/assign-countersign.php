<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Federal Government Girls College, Nkwelle Ezunaka">
    <meta name="keywords" content="school, education">
    <meta name="author" content="Krystal Digital Solutions">

    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="assets/img/logo_4a262eb69667.png?v1">
    <title>Krystal’s IT Academy F.G.G.C, NKWELLE EZUNAKA - School Portal</title>
    <!-- Bootstrap Core CSS -->
    <link href="assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- chartist CSS -->
    <link href="assets/plugins/chartist-js/dist/chartist.min.css" rel="stylesheet">
    <link href="assets/plugins/chartist-js/dist/chartist-init.css" rel="stylesheet">
    <link href="assets/plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css" rel="stylesheet">
    <link href="assets/plugins/css-chart/css-chart.css" rel="stylesheet">

    <!--This page css - Morris CSS -->
    <link href="assets/plugins/c3-master/c3.min.css" rel="stylesheet">

    <link href="assets/plugins/sweetalert/sweetalert.css" rel="stylesheet">

    <link href="assets/plugins/select2/dist/css/select2.min.css" rel="stylesheet" />
    <link href="assets/plugins/bootstrap-select/bootstrap-select.min.css" rel="stylesheet" />

    <!-- Custom CSS -->
    <link href="assets/css/style.css?n=3" rel="stylesheet">

    <link href="assets/css/colors/blue.css" rel="stylesheet">

    <script src="assets/plugins/jquery/jquery.min.js"></script>
    <!-- Bootstrap tether Core JavaScript -->
    <script src="assets/plugins/popper/popper.min.js"></script>
    <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>

    <!-- ============= Sweet Alert =================== -->
    <script src="assets/plugins/sweetalert/sweetalert.min.js"></script>
    <!-- Portal js -->
    <script src="assets/js/portal-02.js?n=0"></script>

    <!-- Bootstrap responsive table CSS -->
    <link href="assets/plugins/tablesaw-master/dist/tablesaw.css" rel="stylesheet">

    <style>
        /* Custom style for specific pages*/
        .custom-textarea {
            min-height: 200px;
            max-height: 500px;
            border: 1px solid #ccc;
            border-radius: 5px;
            overflow: auto;
        }
    </style>

    <script>
        //Global variables
        var site_url = '';
        var base_url = '';

        $(document).on('click', '.sidebartoggler', function () {
            if ($('.hide-menu').is(':visible')) {
                $('._scroll-sidebar').css('overflow', 'scroll');
            } else {
                $('._scroll-sidebar').css('overflow', 'visible');
            }
        })
    </script>

</head>

<body class="fix-header fix-sidebar card-no-border">
    <!-- ============================================================== -->
    <!-- Preloader - style you can find in spinners.css -->
    <!-- ============================================================== -->
    <div class="preloader" style="opacity: 0.5;">
        <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
        </svg>
    </div>

    <!--========= AJAX load overlay =========== -->
    <div style="width: 100%; height:100%; background-color: white; position: fixed; top:0; left:0; z-index: 1000; opacity:0.3; display: none;"
        id="DivOverlay">
    </div>
    <!-----===================================----->

    <!-- ============================================================== -->
    <!-- Main wrapper - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <div id="main-wrapper">
        <!-- ============================================================== -->
        <!-- Topbar header - style you can find in pages.scss -->
        <!-- ============================================================== -->
        <header class="topbar">
            <nav class="navbar top-navbar navbar-expand-md navbar-light">
                <!-- ============================================================== -->
                <!-- Logo -->
                <!-- ============================================================== -->
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">
                        <!-- Logo icon -->
                        <b>
                            <!-- Dark Logo icon -->
                            <img src="assets/img/logo_4a262eb69667.png?v1" alt="school-page" class="dark-logo logo"
                                height="60" width="60" />
                            <!-- Light Logo icon -->
                            <img src="assets/img/logo_4a262eb69667.png?v1" alt="homepage" class="light-logo logo"
                                height="60" width="60" />
                        </b>
                        <!--End Logo icon -->
                        <!-- Logo text -->
                        <span class="short_name" style="color: #FFF">F.G.G.C NKWELLE</span>
                    </a>
                </div>
                <!-- ============================================================== -->
                <!-- End Logo -->
                <!-- ============================== ================================ -->
                <div class="navbar-collapse">
                    <!-- ============================================================== -->
                    <!-- toggle and nav items -->
                    <!-- ============================================================== -->
                    <ul class="navbar-nav mr-auto mt-md-0">
                        <!-- This is  -->
                        <li class="nav-item"> <a
                                class="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark"
                                href="javascript:void(0)"><i class="mdi mdi-menu"></i></a> </li>
                        <li class="nav-item"> <a
                                class="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark"
                                href="javascript:void(0)"><i class="ti-menu"></i></a> </li>
                        <!-- ============================================================== -->
                        <!-- Search -->
                        <!-- ============================================================== -->
                        <li class="nav-item search-box">
                            <a class="nav-link text-muted waves-effect waves-dark" href="javascript:void(0)"><i
                                    class="ti-search"></i></a>

                            <!-- =============== SEARCH BAR =================== -->
                            <form action="student/search" class="app-search" method="post" accept-charset="utf-8">
                                <input type="text" class="form-control" name="keyword" minlength="3"
                                    placeholder="Search student"> <a class="srh-btn"><i class="ti-close"></i></a>
                            </form> <!-- ============================================== -->

                        </li>
                        <li class="nav-item hidden-xs-down"><a class="nav-link" id="current_session_name"
                                href="javascript:void(0)">First Term 2020/2021</a> </li>
                    </ul>
                    <!-- ============================================================== -->
                    <!-- User profile and search -->
                    <!-- ============================================================== -->
                    <ul class="navbar-nav my-lg-0">
                        <!-- ============================================================== -->
                        <!-- Comment -->
                        <!-- ============================================================== -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-muted text-muted waves-effect waves-dark" href="#"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i
                                    class="mdi mdi-message"></i>
                                <div class="notify"></div>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right mailbox scale-up" id="n-center"></div>
                        </li>
                        <!-- ============================================================== -->
                        <!-- End Comment -->
                        <!-- ============================================================== -->
                        <!-- ============================================================== -->
                        <!-- Profile -->
                        <!-- ============================================================== -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="#"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img
                                    src="uploads/nobody_m.jpg" alt="user" class="profile-pic" /></a>
                            <div class="dropdown-menu dropdown-menu-right scale-up">
                                <ul class="dropdown-user">
                                    <li>
                                        <div class="dw-user-box">
                                            <div class="u-img">
                                                <img src="uploads/nobody_m.jpg" alt="user">
                                            </div>
                                            <div class="u-text">
                                                <h4 class="user-full-name">Henry Obinozie</h4>
                                                <p class="text-muted user-email">obinoziehenry@gmail.com</p><a
                                                    href="admin/profile.html"
                                                    class="btn btn-rounded btn-danger btn-sm">View Profile</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li role="separator" class="divider"></li>
                                    <li><a class="waves-effect waves-dark" href="admin-account/my-activity"><i
                                                class="ti-wallet"></i> My Activity Log</a></li>
                                    <li><a class="waves-effect waves-dark" href="admin/change-password.html"><i
                                                class="ti-key"></i> Change Password</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a class="waves-effect waves-dark" href="login/logout"><i
                                                class="fa fa-power-off"></i> Logout</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <!-- ============================================================== -->
        <!-- End Topbar header -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <aside class="left-sidebar">
            <!-- Sidebar scroll-->
            <div class="_scroll-sidebar" style="overflow: scroll; width: auto; height: 100%;">
                <!-- User profile -->
                <div class="user-profile" style="background: url(assets/images/background/images.jpg) no-repeat;">
                    <!-- User profile image -->
                    <div class="profile-img"> <img src="uploads/nobody_m.jpg" alt="user" /> </div>
                    <!-- User profile text-->
                    <div class="profile-text"> <a href="#" class="dropdown-toggle u-dropdown user-full-name"
                            data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">Henry
                            Obinozie</a>
                        <div class="dropdown-menu animated flipInY">
                            <a href="admin/profile.html" class="dropdown-item"><i class="ti-user"></i> My Profile</a>
                            <a href="admin-account/my-activity" class="dropdown-item"><i class="ti-wallet"></i> My
                                Activity Log</a>
                            <div class="dropdown-divider"></div> <a href="login/logout" class="dropdown-item"><i
                                    class="fa fa-power-off"></i> Logout</a>
                        </div>
                    </div>
                </div>
                <!-- End User profile text-->

                <!-- Sidebar navigation-->
                <nav class="sidebar-nav">
                    <ul id="sidebarnav">
                        <li>
                            <a href="admin-account" aria-expanded="false"><i class="mdi mdi-gauge"></i>
                                <span class="hide-menu">Dashboard</span></a>
                        </li>
                        <li class="nav-devider"></li>
                        <li class="nav-small-cap">ACADEMICS</li>
                        <li>
                            <a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i
                                    class="fa fa-users"></i>
                                <span class="hide-menu">Students</span></a>
                            <ul aria-expanded="false" class="collapse">

                                <li><a class="waves-effect waves-dark" href="student/student-mgt"
                                        title="Manage list of student's that fall in a set criteria"
                                        data-toggle="tooltip">Students List</a></li>

                                <li><a class="waves-effect waves-dark" href="student/add-student"
                                        title="Register a new student on the system" data-toggle="tooltip">Register new
                                        Student</a></li>
                                <li><a class="waves-effect waves-dark" href="student/withdrawn-students"
                                        title="Manage students who have been withdrawn" data-toggle="tooltip">Withdrawn
                                        Students</a></li>
                                <li><a class="waves-effect waves-dark" href="student/graduated-students"
                                        title="Manage students who have graduated" data-toggle="tooltip">Graduated
                                        Students</a></li>
                                <li><a class="waves-effect waves-dark" href="student/manage-parents"
                                        title="See List of all parents on the system" data-toggle="tooltip">Manage
                                        Parents</a></li>

                            </ul>
                        </li>
                        <li>
                            <a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i
                                    class="fa fa-university"></i><span class="hide-menu">Class</span></a>
                            <ul aria-expanded="false" class="collapse">
                                <li><a class="waves-effect waves-dark" href="classes/class-arm-mgt"
                                        title="View all class arms and perform specific tasks for any class arm"
                                        data-toggle="tooltip">Manage Class Arms</a></li>
                                <li><a class="waves-effect waves-dark" href="classes/classes_and_arms"
                                        title="Create, Edit or Delete Arm/Class Arm" data-toggle="tooltip">Classes and
                                        Arms</a></li>
                                <li><a class="waves-effect waves-dark" href="classes/class-teachers"
                                        title="Manage all class teachers on the system" data-toggle="tooltip">Class
                                        teachers</a></li>
                                <li><a class="waves-effect waves-dark" href="classes/assignment"
                                        title="Create, edit or delete class assignments" data-toggle="tooltip">Class
                                        Assignments</a></li>
                            </ul>
                        </li>


                        <li>
                            <a href="classes/past-records" aria-expanded="false"
                                title="Manage records in a past Term/Session" data-toggle="tooltip"><i
                                    class="fa fa-file-text"></i><span class="hide-menu">Past Records</span></a>
                        </li>

                        <li>
                            <a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i
                                    class="mdi mdi-calendar-clock"></i><span class="hide-menu">Time Table</span></a>
                            <ul aria-expanded="false" class="collapse">
                                <li><a class="waves-effect waves-dark" href="javascript: void()" title="Coming soon..."
                                        data-toggle="tooltip">Class Time Table</a></li>
                                <li><a class="waves-effect waves-dark" href="javascript: void()" title="Coming soon..."
                                        data-toggle="tooltip">School Time Table</a></li>
                            </ul>
                        </li>

                        <li>
                            <a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i
                                    class="fa fa-book"></i><span class="hide-menu">Subject</span></a>
                            <ul aria-expanded="false" class="collapse">
                                <li><a class="waves-effect waves-dark" href="subject">School Subjects</a></li>
                                <li><a class="waves-effect waves-dark" href="subject/teachers"
                                        title="Manage all subject teachers. (i.e. All Staff who have been assigned to one or more subjects)"
                                        data-toggle="tooltip">Subject Teachers</a></li>
                                <li><a class="waves-effect waves-dark" href="subject/departments"
                                        title="Manage Subject departments. Add, update or remove departments"
                                        data-toggle="tooltip">Departments</a></li>
                            </ul>
                        </li>

                        <li class="nav-devider"></li>
                        <li class="nav-small-cap">LEARNING & COMMUNICATION</li>
                        <li>
                            <a href="javascript: void()" aria-expanded="false" title="Coming soon..."
                                data-toggle="tooltip"><i class="fa fa-comments"></i><span
                                    class="hide-menu">Forum</span></a>
                        </li>

                        <li>
                            <a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i
                                    class="mdi mdi-message-settings"></i><span class="hide-menu">Messaging</span></a>
                            <ul aria-expanded="false" class="collapse">
                                <li><a class="waves-effect waves-dark" href="messaging/send-email"
                                        title="Send customized email to Parents, Staff, Students or Admin"
                                        data-toggle="tooltip">Send Email</a></li>


                                <li><a class="waves-effect waves-dark" href="messaging/send-text-message"
                                        title="Send a text message to Parents, Staff, Students or Admin"
                                        data-toggle="tooltip">Send Text Message</a></li>
                                <li><a class="waves-effect waves-dark" href="messaging/generate-letter"
                                        title="Generate a customized Letter for Parents, Staff, Students or Admin"
                                        data-toggle="tooltip">Generate Letter</a></li>
                            </ul>
                        </li>

                        <li class="nav-devider"></li>
                        <li class="nav-small-cap">ADMINISTRATION</li>

                        <li>
                            <a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i
                                    class="fa fa-money"></i><span class="hide-menu">Payment/Bills <span
                                        class="text-danger">*</span></span></a>

                            <ul aria-expanded="false" class="collapse">
                            </ul>
                        </li>


                        <li>
                            <a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i
                                    class="fa fa-user"></i><span class="hide-menu">Staff and Admin</span></a>
                            <ul aria-expanded="false" class="collapse">


                                <li><a class="waves-effect waves-dark" href="staff/manage.html"
                                        title="See List of all staff on the system" data-toggle="tooltip">Manage
                                        Staff</a></li>

                                <li><a class="waves-effect waves-dark" href="admin-account/manage"
                                        title="See List of all administrators on the system"
                                        data-toggle="tooltip">Manage Admin</a></li>

                            </ul>
                        </li>

                        <li>
                            <a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i
                                    class="mdi mdi-soccer"></i><span class="hide-menu">Sport House</span></a>
                            <ul aria-expanded="false" class="collapse">
                                <li><a class="waves-effect waves-dark" href="sport-house"
                                        title="Add, Edit or Delete Sport Houses" data-toggle="tooltip">Manage Sport
                                        Houses</a></li>
                                <li><a class="waves-effect waves-dark" href="sport-house/heads"
                                        title="Manage house masters/mistresses" data-toggle="tooltip">Sport House
                                        Heads</a></li>
                            </ul>
                        </li>

                        <!--<li>
                        <a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i class="mdi mdi-arrange-send-backward"></i><span class="hide-menu">Resources</span></a>
                        <ul aria-expanded="false" class="collapse">
                            <li><a class="waves-effect waves-dark" href="#">Resource Category</a></li>
                            <li><a class="waves-effect waves-dark" href="#">Resources</a></li>
                        </ul>
                    </li>-->

                        <li>
                            <a class="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i
                                    class="mdi mdi-settings"></i><span class="hide-menu">Configuration</span></a>
                            <ul aria-expanded="false" class="collapse">

                                <li><a class="waves-effect waves-dark" href="school-config/school-grades"
                                        title="Add, Edit or Delete Grades" data-toggle="tooltip">School Grades</a></li>
                                <li><a class="waves-effect waves-dark" href="school-config/grades-config"
                                        title="Configure how grades are awarded in students result"
                                        data-toggle="tooltip">Grade Configuration</a></li>
                                <li><a class="waves-effect waves-dark" href="school-config/school-information"
                                        title="View/Make changes to the school's information"
                                        data-toggle="tooltip">School Information</a></li>
                                <li><a class="waves-effect waves-dark" href="school-config/result-setting"
                                        title="Make changes to how students Report card or Broadsheet looks"
                                        data-toggle="tooltip">Result Settings</a></li>
                                <li><a class="waves-effect waves-dark" href="school-config/academic-session"
                                        title="View Academic Session history, create new session, or move to next session"
                                        data-toggle="tooltip">Academic Sessions</a></li>

                                <li><a class="waves-effect waves-dark" href="school-config/session-parameters"
                                        title="Set or Edit weight of session parameters (i.e. CA1, CA2..., Exam, Term weight)"
                                        data-toggle="tooltip">Session Parameters</a></li>

                                <li><a class="waves-effect waves-dark" href="school-config/comment-remarks"
                                        title="create, edit or delete library of comment remarks"
                                        data-toggle="tooltip">Comment Remarks</a></li>
                                <li><a class="waves-effect waves-dark" href="school-config/behavioural-traits"
                                        title="Manage your preference of student behavioural traits e.g Neatness, punctuality etc..."
                                        data-toggle="tooltip">Behavioural Traits</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <!-- End Sidebar navigation -->
            </div>
            <!-- End Sidebar scroll-->
        </aside>
        <!-- ============================================================== -->
        <!-- End Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Page wrapper  -->
        <!-- ============================================================== -->
        <div class="page-wrapper">
            <div class="container-fluid">
                <!-- ============================================================== -->
                <!-- Bread crumb and right sidebar toggle -->
                <!-- ============================================================== -->
                <div class="row page-titles">
                    <div class="col-md-12 align-self-center">
                        <h3 class="text-themecolor m-b-0 m-t-0">Assign Staff as Countersigning officer</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Staff</a></li>
                            <li class="breadcrumb-item active">Assign to class</li>
                        </ol>
                    </div>
                </div>
                <!-- ============================================================== -->
                <!-- End Bread crumb and right sidebar toggle -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- Start Page Content -->
                <!-- ============================================================== -->
                <!-- Row -->
                <div class="row">
                    <!-- Column -->
                    <div class="col-lg-4 col-xlg-3 col-md-5" id="staff-profile-div">
                        <div class="card" id="staff-profile-side">
                            <div class="card-body">
                                <center class="m-t-30">
                                    <img src="uploads/nobody_m.jpg" class="img-circle" width="150" />
                                    <h4 class="card-title m-t-10">Mr Obinozie Nnamdi Francis</h4>

                                    <h6 class="card-subtitle">
                                        <label class="label label-success">TEACHING STAFF</label>
                                    </h6>

                                    <div class="row text-center justify-content-md-center">
                                        <div class="col-6">
                                            Male </div>
                                        <div class="col-6">
                                            5 yrs old </div>
                                    </div>

                                    <h6 class="card-subtitle m-t-10">
                                        Class Teacher </h6>

                                </center>
                            </div>
                            <div>
                                <hr>
                            </div>
                            <div class="card-body">
                                <small class="text-muted">Username</small>
                                <h6>obinozie.n</h6>

                                <small class="text-muted">Date Created</small>
                                <h6>Nov 08, 2016 at 11:44 AM</h6>



                                <small class="text-muted">Class Teacher for</small>
                                <h6>
                                    <a href="classes/manage-students/bbe69c9c130ad65c1d/e6f694dc10f24a6308"
                                        class="text-info">JSS 2A</a>, <a
                                        href="classes/manage-students/3d9f2cab130dc493cc/b21bf32e11ea735eb9"
                                        class="text-info">JSS 2B</a>, <a
                                        href="classes/manage-students/b2a5125f13df45a41b/b4aeef3912ea1152ee"
                                        class="text-info">JSS 2C</a>, <a
                                        href="classes/manage-students/d2d4a41613f9a65907/4ddebef9136ae8d4a5"
                                        class="text-info">JSS 2D</a>, <a
                                        href="classes/manage-students/7294e9a41345698514/950c9dde149367bb6d"
                                        class="text-info">JSS 2E</a>, <a
                                        href="classes/manage-students/ec845aa713d69ff32f/1069c5a1159b767bc6"
                                        class="text-info">JSS 2G</a>, <a
                                        href="classes/manage-students/008af29f13e863af03/0ad858ca160229c3b1"
                                        class="text-info">JSS 2H</a>, <a
                                        href="classes/manage-students/7c421d961364981952/43bf6b471724926936"
                                        class="text-info">JSS 2J</a>, <a
                                        href="classes/manage-students/f548bbf61364997a71/187a8a0f18470a64ab"
                                        class="text-info">JSS 2K</a>, <a
                                        href="classes/manage-students/a8318227133e75bc88/88cb0a211dd60a00b"
                                        class="text-info">JSS 1A</a>, <a
                                        href="classes/manage-students/70e3b78613c2fe5954/7ce8a7852c2d9af7a"
                                        class="text-info">JSS 1B</a>, <a
                                        href="classes/manage-students/84f385ff133ef46da1/1967cc6e36b1afcaf"
                                        class="text-info">JSS 1C</a>
                                </h6>


                                <small class="text-muted">Rank</small>
                                <h6><span class="label label-light-warning">Unspecified</span></h6>

                                <small class="text-muted">Academic Qualification</small>
                                <h6><span class="label label-light-warning">Unspecified</span></h6>

                                <small class="text-muted">Grade Level</small>
                                <h6><span class="label label-light-warning">Unspecified</span></h6>

                                <small class="text-muted">Email address</small>
                                <h6>nnamdifrancis32@gmail.com</h6>

                                <small class="text-muted">Phone</small>
                                <h6>08064769378</h6>

                                <small class="text-muted">Address</small>
                                <h6>FGGC, ONISTHA</h6>
                                <div class="map-box">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8070402.841056632!2d4.177613658408504!3d9.006483165840024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sus!4v1529581420386"
                                        width="100%" height="150" frameborder="0" style="border:0"
                                        allowfullscreen></iframe>
                                </div>
                                <br>
                                <hr>
                                <small class="text-success pull-right"><i></i></small>
                                <small class="text-success pull-right last-updated"><i>Last Updated by: You on May 04,
                                        2022 at 04:22 PM</i></small>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <!-- Column -->
                    <div class="col-lg-8 col-xlg-9 col-md-7">
                        <div class="card">
                            <div class="card-body">
                                <nav class="navbar navbar-expand-lg navbar-light bg-light" style="margin-bottom: 1em">

                                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>

                                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                        <ul class="navbar-nav">

                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle " href="#"
                                                    id="navbarDropdownMenuLink" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">
                                                    Profile
                                                </a>
                                                <div class="dropdown-menu animated flipInY"
                                                    aria-labelledby="navbarDropdownMenuLink">
                                                    <a class="dropdown-item"
                                                        href="staff/staff-profile/5047f2e72c815caa6">Edit
                                                        Profile</a>
                                                    <a class="dropdown-item"
                                                        href="staff/activity/5047f2e72c815caa6">Activity
                                                        Log</a>

                                                    <a class="dropdown-item"
                                                        href="staff/change-password/5047f2e72c815caa6">Reset
                                                        Password</a>

                                                </div>
                                            </li>

                                            <li class="nav-item">
                                                <a class="nav-link "
                                                    href="staff/account-status/5047f2e72c815caa6">Account
                                                    Status</a>
                                            </li>

                                            <li class="nav-item">
                                                <a class="nav-link "
                                                    href="staff/capture-passport/5047f2e72c815caa6">Capture
                                                    Passport</a>
                                            </li>


                                            <li class="nav-item">
                                                <a class="nav-link"
                                                    href="staff/staff-department/5047f2e72c815caa6">Department</a>
                                            </li>

                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Assign
                                                </a>
                                                <div class="dropdown-menu animated flipInY"
                                                    aria-labelledby="navbarDropdownMenuLink">
                                                    <a class="dropdown-item"
                                                        href="staff/assign-subject/5047f2e72c815caa6">As
                                                        Subject Teacher</a>
                                                    <a class="dropdown-item"
                                                        href="staff/assign-house/5047f2e72c815caa6">As
                                                        Sport House Master</a>
                                                    <a class="dropdown-item"
                                                        href="staff/assign-class-arm/5047f2e72c815caa6">As
                                                        Class Teacher</a>
                                                    <a class="dropdown-item"
                                                        href="staff/assign-countersign/5047f2e72c815caa6">As
                                                        Countersigning Officer</a>
                                                </div>
                                            </li>


                                        </ul>
                                    </div>
                                </nav>
                                <p>You want to make Mr Obinozie Nnamdi Francis a Countersigning officer?</p>

                                <form action="staff/assign-countersign-process/5047f2e72c815caa6"
                                    class="form-horizontal" id="staff-assign" enctype="multipart/form-data"
                                    method="post" accept-charset="utf-8">
                                    <div class="form-group row">
                                        <label for="class_arm_id"
                                            class="col-sm-3 text-right control-label col-form-label">Select Class
                                            Arm*</label>
                                        <div class="col-sm-9">
                                            <select class="form-control select2 select2-multiple" id="class_arm_id"
                                                name="class_arm_id[]" style="width: 100%" multiple required>
                                                <option value=""></option>
                                                <option value="49fba1061701524b1">JSS 1A</option>
                                                <option value="837091d22fa3a33c1">JSS 1B</option>
                                                <option value="e9f29fd8337be7739">JSS 1C</option>
                                                <option value="9c589114422072fc5">JSS 1D</option>
                                                <option value="c4a019965ae6b0af9">JSS 1E</option>
                                                <option value="3140925567faf67c6">JSS 1G</option>
                                                <option value="f642fa1f71f7fe268">JSS 1H</option>
                                                <option value="4566b41a8c992e11c">JSS 1J</option>
                                                <option value="d9d9065194ab36b2d">JSS 1K</option>
                                                <option value="953b88b910a12f0430">JSS 2A</option>
                                                <option value="a6efa687110b601c11">JSS 2B</option>
                                                <option value="b473f153123d86e2da">JSS 2C</option>
                                                <option value="621dc32313a5b9e06c">JSS 2D</option>
                                                <option value="e7b7819a14453749d1">JSS 2E</option>
                                                <option value="d0205481159312cc5e">JSS 2G</option>
                                                <option value="95cc669e16492bc434">JSS 2H</option>
                                                <option value="0f55770817976b2210">JSS 2J</option>
                                                <option value="f327ae4d187611723c">JSS 2K</option>
                                                <option value="e1337663460777cc60">JSS 3A</option>
                                                <option value="6fb3000b476e2600e4">JSS 3B</option>
                                                <option value="040aed0e4888ced591">JSS 3C</option>
                                                <option value="a0b95e69494f7ca358">JSS 3D</option>
                                                <option value="6b00b0675002b7fcc6">JSS 3E</option>
                                                <option value="099426c1515cf7077f">JSS 3G</option>
                                                <option value="b03fd5be52be6dd765">JSS 3H</option>
                                                <option value="5edd7a0c53debd1a97">JSS 3J</option>
                                                <option value="fec90dc9547936be12">JSS 3K</option>
                                                <option value="7fe687d619a1a609f1">SS 1A</option>
                                                <option value="1a30ee1620036fbfda">SS 1B</option>
                                                <option value="4b56772c55c0850c51">SS 1BECE</option>
                                                <option value="045536062130173934">SS 1C</option>
                                                <option value="800c3c3322a5297c30">SS 1D</option>
                                                <option value="df34faed23308da2e8">SS 1E</option>
                                                <option value="f8da58b62424c007b5">SS 1G</option>
                                                <option value="7adea9e02592f52795">SS 1H</option>
                                                <option value="b2c3281a268fea54f8">SS 1J</option>
                                                <option value="398d0bee27aa869307">SS 1K</option>
                                                <option value="595ace8b28c038e9a4">SS 2A</option>
                                                <option value="55a763bf29027f9997">SS 2B</option>
                                                <option value="b665d38a30faf945ab">SS 2C</option>
                                                <option value="e9135dd03130a20dba">SS 2D</option>
                                                <option value="743662613242146b5e">SS 2E</option>
                                                <option value="c1d512133367c9396f">SS 2G</option>
                                                <option value="e781e30234d8a6ad06">SS 2H</option>
                                                <option value="230d3f2d35dedf3cda">SS 2J</option>
                                                <option value="dd76d4653695f87556">SS 2K</option>
                                                <option value="c721156a3722f87e31">SS 3A</option>
                                                <option value="c4849674383e92536a">SS 3B</option>
                                                <option value="d439fffd3939965ab3">SS 3C</option>
                                                <option value="a562ba5740e86e0424">SS 3D</option>
                                                <option value="ba42e8d741a084a63c">SS 3E</option>
                                                <option value="1dd8e503424ac462d6">SS 3G</option>
                                                <option value="02bccf5c435b3e9e9f">SS 3H</option>
                                                <option value="836a0f7244239ce949">SS 3J</option>
                                                <option value="0c3820f94553e91b27">SS 3K</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group m-b-0">
                                        <div class="offset-sm-3 col-sm-9">
                                            <button type="submit"
                                                class="btn btn-primary btn-rounded waves-effect waves-light m-t-10">Assign</button>
                                            <span class="processor"></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                </div>
            </div>

            <script>
                $(function () {
                    $('#staff-assign').submit(function (e) {
                        e.preventDefault();
                        var xhr = submit_form('#staff-assign');
                        xhr.done(function (result) {
                            if (result.type === 'success') {
                                //Automatically update page content. User doesn't need to refresh
                                $('#staff-profile-div').load(site_url + 'staff/staff-profile/5047f2e72c815caa6 #staff-profile-side');

                                $('#class_arm_id option:selected').remove();
                            }
                        });
                    });
                })


            </script>
            <!-- ========================================== -->
            <!-- ============================================================== -->
            <!-- footer -->
            <!-- ============================================================== -->
            <footer class="footer">
                © 2018 School Information Management System (MySkool Portal) by <a href="https://krystaldigitalng.com"
                    target="_blank">KRYSTAL DIGITAL SOLUTIONS</a>
            </footer>
            <!-- ============================================================== -->
            <!-- End footer -->
            <!-- ============================================================== -->
        </div>
        <!-- ============================================================== -->
        <!-- End Page wrapper  -->
        <!-- ============================================================== -->
    </div>
    <!-- ============================================================== -->
    <!-- End Wrapper -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- All Jquery -->
    <!-- ============================================================== -->
    <script src="assets/plugins/datatables/jquery.dataTables.min.js"></script>

    <!-- slimscrollbar scrollbar JavaScript -->
    <script src="assets/js/jquery.slimscroll.js"></script>
    <!--Wave Effects -->
    <script src="assets/js/waves.js"></script>
    <!--Menu sidebar -->
    <script src="assets/js/sidebarmenu.js"></script>

    <!--stickey kit -->
    <script src="assets/plugins/sticky-kit-master/dist/sticky-kit.min.js"></script>

    <!--Custom JavaScript -->
    <script src="assets/js/custom.min.js"></script>

    <!-- ============================================================== -->
    <!-- This page plugins -->
    <!-- ============================================================== -->


    <script src="assets/js/bootstrap-notify.js"></script>

    <script src="assets/plugins/select2/dist/js/select2.full.min.js" type="text/javascript"></script>
    <script src="assets/plugins/bootstrap-select/bootstrap-select.min.js" type="text/javascript"></script>

    <!-- jQuery peity -->
    <script src="assets/plugins/tablesaw-master/dist/tablesaw.js"></script>
    <script src="assets/plugins/tablesaw-master/dist/tablesaw-init.js"></script>


    <script>
        $('ul.collapse').each(function (i) {
            if ($(this).children().length < 1) {
                $(this).parent().remove();
            }
        });


        $(".select2").select2();


        $('.ajax-link').contextmenu(function () {
            return false;
        });

        function load_notification() {
            $('#n-center').load(site_url + 'other/notification ul', function () {
                if ($('.message-center').length > 0) {
                    $('.notify').html('<span class="heartbit"></span><span class="point"></span>');
                } else {
                    $('.notify').html('');
                }
                //setTimeout(load_notification, 120000);
            });
        }
        load_notification();

    </script>
    <!-- ============================================================== -->
</body>

</html>