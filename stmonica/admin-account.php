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
                                                    href="admin/profile" class="btn btn-rounded btn-danger btn-sm">View
                                                    Profile</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li role="separator" class="divider"></li>
                                    <li><a class="waves-effect waves-dark" href="admin/my-activity"><i
                                                class="ti-wallet"></i> My Activity Log</a></li>
                                    <li><a class="waves-effect waves-dark" href="admin/change-password.php"><i
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
                            <a href="admin/profile" class="dropdown-item"><i class="ti-user"></i> My Profile</a>
                            <a href="admin/my-activity" class="dropdown-item"><i class="ti-wallet"></i> My Activity
                                Log</a>
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
                            <a href="admin-account.php" aria-expanded="false"><i class="mdi mdi-gauge"></i>
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

                                <li><a class="waves-effect waves-dark" href="student/add-student-pin"
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
                                <li><a class="waves-effect waves-dark" href="subject/subject1.php">School Subjects</a>
                                </li>
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


                                <li><a class="waves-effect waves-dark" href="staff/manage"
                                        title="See List of all staff on the system" data-toggle="tooltip">Manage
                                        Staff</a></li>

                                <li><a class="waves-effect waves-dark" href="staff/manage1"
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
        <!-- Page wrapper  -->
        <!-- ============================================================== -->
        <div class="page-wrapper">
            <!-- ============================================================== -->
            <!-- Container fluid  -->
            <!-- ============================================================== -->
            <div class="container-fluid">
                <!-- ============================================================== -->
                <!-- Bread crumb and right sidebar toggle -->
                <!-- ============================================================== -->
                <div class="row page-titles">
                    <div class="col-md-12 align-self-center">
                        <h3 class="text-themecolor">Dashboard</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="javascript:void(0)">Home</a>
                            </li>
                            <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </div>
                </div>
                <!-- ============================================================== -->
                <!-- End Bread crumb and right sidebar toggle -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- Start Page Content -->
                <!-- ============================================================== -->
                <div class="row">
                    <!-- Column -->
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-row">
                                    <div class="round round-lg align-self-center round-info">
                                        <i class="fa fa-users"></i>
                                    </div>
                                    <div class="m-l-10 align-self-center">
                                        <h3 class="m-b-0 font-light">2248</h3>
                                        <h5 class="text-muted m-b-0">Total Students</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <!-- Column -->
                    <!-- Column -->
                    <!-- Column -->
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-row">
                                    <div class="round round-lg align-self-center round-primary">
                                        <i class="fa fa-female"></i>
                                    </div>
                                    <div class="m-l-10 align-self-center">
                                        <h3 class="m-b-0 font-light">2248</h3>
                                        <h5 class="text-muted m-b-0">Female Students</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <!-- Column -->
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-row">
                                    <div class="round round-lg align-self-center round-danger">
                                        <i class="fa fa-user"></i>
                                    </div>
                                    <div class="m-l-10 align-self-center">
                                        <h3 class="m-b-0 font-light">4</h3>
                                        <h5 class="text-muted m-b-0">Total Staff</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                </div>

                <!-- Row -->
                <div class="row">
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex no-block">
                                    <h4 class="card-title">Class Statistics</h4>
                                </div>
                                <div class="table-responsive m-t-20">
                                    <table class="table stylish-table color-table table-bordered success-table"
                                        style="min-width: 400px">
                                        <thead>
                                            <tr>
                                                <th class="center">Class</th>
                                                <th class="center">Students</th>
                                                <th class="center" colspan="2">
                                                    Student Bio Data completion rate
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>JSS 1</td>
                                                <td class="center">402</td>
                                                <td width="50%">
                                                    <div class="progress">
                                                        <div class="progress-bar bg-danger active progress-bar-striped"
                                                            style="width: 0%; height: 14px" role="progressbar">
                                                            0%
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="classes/class-data-completion.php" target="_blank"
                                                        class="btn btn-success btn-sm btn-rounded waves-effect waves-light">See
                                                        details
                                                    </a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>JSS 2</td>
                                                <td class="center">432</td>
                                                <td width="50%">
                                                    <div class="progress">
                                                        <div class="progress-bar bg-warning active progress-bar-striped"
                                                            style="width: 61%; height: 14px" role="progressbar">
                                                            61%
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="classes/class-data-completion.php" target="_blank"
                                                        class="btn btn-success btn-sm btn-rounded waves-effect waves-light">See
                                                        details
                                                    </a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>JSS 3</td>
                                                <td class="center">526</td>
                                                <td width="50%">
                                                    <div class="progress">
                                                        <div class="progress-bar bg-success active progress-bar-striped"
                                                            style="width: 72%; height: 14px" role="progressbar">
                                                            72%
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="classes/class-data-completion.php" target="_blank"
                                                        class="btn btn-success btn-sm btn-rounded waves-effect waves-light">See
                                                        details
                                                    </a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>SS 1</td>
                                                <td class="center">513</td>
                                                <td width="50%">
                                                    <div class="progress">
                                                        <div class="progress-bar bg-danger active progress-bar-striped"
                                                            style="width: 0%; height: 14px" role="progressbar">
                                                            0%
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="classes/class-data-completion.php" target="_blank"
                                                        class="btn btn-success btn-sm btn-rounded waves-effect waves-light">See
                                                        details
                                                    </a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>SS 2</td>
                                                <td class="center">329</td>
                                                <td width="50%">
                                                    <div class="progress">
                                                        <div class="progress-bar bg-danger active progress-bar-striped"
                                                            style="width: 39%; height: 14px" role="progressbar">
                                                            39%
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="classes/class-data-completion.php" target="_blank"
                                                        class="btn btn-success btn-sm btn-rounded waves-effect waves-light">See
                                                        details
                                                    </a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>SS 3</td>
                                                <td class="center">46</td>
                                                <td width="50%">
                                                    <div class="progress">
                                                        <div class="progress-bar bg-danger active progress-bar-striped"
                                                            style="width: 46%; height: 14px" role="progressbar">
                                                            46%
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="classes/class-data-completion.php" target="_blank"
                                                        class="btn btn-success btn-sm btn-rounded waves-effect waves-light">See
                                                        details
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" class="text-primary">
                                                    <b>OVERALL</b>
                                                </td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-danger active progress-bar-striped"
                                                            style="width: 36%; height: 14px" role="progressbar">
                                                            36%
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="classes/class-data-completion.php" target="_blank"
                                                        class="btn btn-success btn-sm btn-rounded waves-effect waves-light">See
                                                        details
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">
                                    Class Average Performance Analytics
                                </h4>
                                <div class="form-group col-md-6">
                                    <select class="custom-select form-control select2" id="session_id" name="session_id"
                                        style="width: 100%" required>
                                        <option value="f9c8b18c134d4a5fa3">
                                            First Term: 2020/2021
                                        </option>
                                        <option value="6dd97a1c12e9a89b82" selected>
                                            Third Term: 2019/2020
                                        </option>
                                        <option value="7bfe9c8c1152984a9b">
                                            Second Term: 2019/2020
                                        </option>
                                        <option value="98e73f4c1067fb4dc4">
                                            First Term: 2019/2020
                                        </option>
                                        <option value="ce6b23909067af632">
                                            Third Term: 2018/2019
                                        </option>
                                        <option value="915cc0858f2d10169">
                                            Second Term: 2018/2019
                                        </option>
                                        <option value="be812234739176923">
                                            First Term: 2018/2019
                                        </option>
                                        <option value="bbb4a27b65fca1620">
                                            Third Term: 2017/2018
                                        </option>
                                        <option value="dae1b9f653dd21694">
                                            Second Term: 2017/2018
                                        </option>
                                        <option value="8df3686242bdf7a8b">
                                            First Term: 2017/2018
                                        </option>
                                        <option value="122bef38372cee7b3">
                                            Third Term: 2016/2017
                                        </option>
                                        <option value="60d24b22223f56a0b">
                                            Second Term: 2016/2017
                                        </option>
                                        <option value="222bb4c619e9ba7ab">
                                            First Term: 2016/2017
                                        </option>
                                    </select>
                                </div>
                                <div id="class-analytics">
                                    <canvas id="chart1" height="150"></canvas>
                                </div>
                                <p class="pull-right">
                                    <a href="javascript: void()"
                                        class="btn btn-outline-success btn-sm btn-rounded waves-effect waves-light">See
                                        more...</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">Portal Users</h3>
                                <h6 class="card-subtitle">
                                    Users currently registered to this portal
                                </h6>
                                <div id="visitor" style="height: 260px; width: 100%"></div>
                            </div>
                            <div>
                                <hr class="m-t-0 m-b-0" />
                            </div>
                            <div class="card-body text-center">
                                <ul class="list-inline m-b-0">
                                    <li>
                                        <h6 class="text-muted text-info">
                                            <i class="fa fa-circle font-10 m-r-10"></i>Students
                                        </h6>
                                    </li>
                                    <li>
                                        <h6 class="text-muted text-primary">
                                            <i class="fa fa-circle font-10 m-r-10"></i>Staff
                                        </h6>
                                    </li>
                                    <li>
                                        <h6 class="text-muted text-success">
                                            <i class="fa fa-circle font-10 m-r-10"></i>Parents
                                        </h6>
                                    </li>
                                    <li>
                                        <h6 class="text-muted text-success" style="color: #755bf2 !important">
                                            <i class="fa fa-circle font-10 m-r-10"></i>Administrators
                                        </h6>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body bg-info">
                                <h4 class="text-white card-title">Online Users</h4>
                                <h6 class="card-subtitle text-white m-b-0 op-5">
                                    See administrators currently online
                                </h6>
                            </div>
                            <div class="card-body">
                                <div class="message-box contact-box">
                                    <div class="message-widget contact-widget">
                                        <small><i>You are the only admin online at the moment</i></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Row -->

                <!-- Row -->
                <div class="row"></div>
                <!-- Row -->

                <!--<div class="row">
        <div class="col-lg-4 col-md-12">
            <div class="card card-inverse card-success">
                <div class="card-body">
                    <div class="d-flex">
                        <div class="m-r-20 align-self-center">
                            <h1 class="text-white"><i class="icon-cloud-download"></i></h1></div>
                        <div>
                            <h3 class="card-title">Result Download count</h3>
                            <h6 class="card-subtitle"></h6>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 align-self-center">
                            <h2 class="font-light text-white">35487</h2>
                        </div>
                        <div class="col-8 p-t-10 p-b-20 text-right">
                            <div class="spark-count" style="height:65px"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card card-inverse card-primary">
                <div class="card-body">
                    <div class="d-flex">
                        <div class="m-r-20 align-self-center">
                            <h1 class="text-white"><i class="fa fa-tablet"></i></h1></div>
                        <div>
                            <h3 class="card-title">Today's Activity Count</h3>
                            <h6 class="card-subtitle"></h6></div>
                    </div>
                    <div class="row">
                        <div class="col-4 align-self-center">
                            <h2 class="font-light text-white">500</h2>
                        </div>
                        <div class="col-8 p-t-10 p-b-20 align-self-center">
                            <div class="usage chartist-chart" style="height:65px"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-xlg-3 col-md-5">
            <div class="card blog-widget">
                <div class="card-body">
                    <div class="blog-image"><img src="" alt="img" class="img-responsive"/>
                    </div>
                    <h3>Something Here</h3>
                    <p class="m-t-20 m-b-20">
                        Lorem ipsum dolor sit amet, this is a consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut
                    </p>
                    <div class="d-flex">
                        <div class="read"><a href="javascript:void(0)" class="link font-medium">Read More</a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-xlg-3 col-md-5">
            <div class="card blog-widget">
                <div class="card-body">
                    <div class="blog-image"><img src="" alt="img" class="img-responsive"/>
                    </div>
                    <h3>Something Here</h3>
                    <p class="m-t-20 m-b-20">
                        Lorem ipsum dolor sit amet, this is a consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut
                    </p>
                    <div class="d-flex">
                        <div class="read"><a href="javascript:void(0)" class="link font-medium">Read More</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>-->

                <!--<div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Recent Queries</h4>
                    <h6 class="card-subtitle">Recent Portal Queries from users</h6>
                </div>
                
                <div class="comment-widgets">
                    
                    <div class="d-flex flex-row comment-row">
                        <div class="p-2">
                            <span class="round">
                                <img src="" alt="user" width="50">
                            </span>
                        </div>
                        <div class="comment-text w-100">
                            <h5>James Okoro</h5>
                            <p class="m-b-5">I have just checked my result, I can see 9 subjects. I can't see Mathematics. What is happening</p>
                            <div class="comment-footer"><span class="text-muted pull-right">June 14, 2016</span> <span class="label label-info">Pending</span>
                                <span class="action-icons">
                                    <a href="javascript:void(0)"><i class="ti-pencil-alt"></i></a>
                                    <a href="javascript:void(0)"><i class="ti-check"></i></a>
                                    <a href="javascript:void(0)"><i class="ti-heart"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="d-flex flex-row comment-row active">
                        <div class="p-2"><span class="round"><img src="" alt="user"
                                                                  width="50"></span></div>
                        <div class="comment-text active w-100">
                            <h5>Michael Umeze</h5>
                            <p class="m-b-5">I have 3 children registered on the portal. Yet I can see the records of only one child. Please check this.</p>
                            <div class="comment-footer "><span class="text-muted pull-right">April 14, 2016</span> <span
                                        class="label label-light-success">Approved</span> </div>
                        </div>
                    </div>
                    
                    <div class="d-flex flex-row comment-row">
                        <div class="p-2"><span class="round"><img src="" alt="user"
                                                                  width="50"></span></div>
                        <div class="comment-text w-100">
                            <h5>Johnathan Ali</h5>
                            <p class="m-b-5">The school says they want the primary color of their report card to be blue instead. Please treat as soon as possible</p>
                            <div class="comment-footer"><span class="text-muted pull-right">May 14, 2016</span> <span
                                        class="label label-danger">Rejected</span></div>
                        </div>
                    </div>
                    
                    <div class="d-flex flex-row comment-row">
                        <div class="p-2"><span class="round"><img src="" alt="user"
                                                                  width="50"></span></div>
                        <div class="comment-text w-100">
                            <h5>Emmanuel Desmond</h5>
                            <p class="m-b-5">I can find my result for First Term 2015/2016 session</p>
                            <div class="comment-footer"><span class="text-muted pull-right">July 1, 2016</span> <span
                                        class="label label-info">Pending</span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <button class="pull-right btn btn-sm btn-rounded btn-success" data-toggle="modal"
                            data-target="#myModal">Add Task
                    </button>
                    <h4 class="card-title">To Do list</h4>
                    <h6 class="card-subtitle">List of your next task to complete</h6>
                   
                    <div class="to-do-widget m-t-20">
                        
                        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Add Task</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div class="form-group">
                                                <label>Task name</label>
                                                <input type="text" class="form-control" placeholder="Enter Task Name">
                                            </div>
                                            <div class="form-group">
                                                <label>Assign to</label>
                                                <select class="custom-select form-control pull-right">
                                                    <option selected="">Henrietta Okotubu</option>
                                                    <option value="1">Patience Soniran</option>
                                                    <option value="2">Tina Azanleko</option>
                                                    <option value="3">Ibrahim Musa</option>
                                                    <option value="4">Ayo Emmanuel</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close
                                        </button>
                                        <button type="button" class="btn btn-success" data-dismiss="modal">Submit
                                        </button>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                       
                        <ul class="list-task todo-list list-group m-b-0" data-role="tasklist">
                            <li class="list-group-item" data-role="task">
                                <div class="checkbox checkbox-info">
                                    <input type="checkbox" id="inputSchedule" name="inputCheckboxesSchedule">
                                    <label for="inputSchedule" class=""> <span>Score Entry for SS2</span> </label>
                                </div>
                                <ul class="assignedto">
                                    <li><img src="" alt="user" data-toggle="tooltip"
                                             data-placement="top" title="" data-original-title="Steave"></li>
                                    <li><img src="" alt="user" data-toggle="tooltip"
                                             data-placement="top" title="" data-original-title="Jessica"></li>
                                    <li><img src="" alt="user" data-toggle="tooltip"
                                             data-placement="top" title="" data-original-title="Priyanka"></li>
                                    <li><img src="" alt="user" data-toggle="tooltip"
                                             data-placement="top" title="" data-original-title="Selina"></li>
                                </ul>
                            </li>
                            <li class="list-group-item" data-role="task">
                                <div class="checkbox checkbox-info">
                                    <input type="checkbox" id="inputCall" name="inputCheckboxesCall">
                                    <label for="inputCall" class=""> <span>Register subject for JSS2</span> <span
                                                class="label label-danger">Today</span> </label>
                                </div>
                                <ul class="assignedto">
                                    <li><img src="" alt="user" data-toggle="tooltip"
                                             data-placement="top" title="" data-original-title="Priyanka"></li>
                                    <li><img src="" alt="user" data-toggle="tooltip"
                                             data-placement="top" title="" data-original-title="Selina"></li>
                                </ul>
                            </li>
                            <li class="list-group-item" data-role="task">
                                <div class="checkbox checkbox-info">
                                    <input type="checkbox" id="inputBook" name="inputCheckboxesBook">
                                    <label for="inputBook" class=""> <span>Update student Bio data</span> </label>
                                </div>
                                <div class="item-date"> 26 jun 2017</div>
                            </li>
                            <li class="list-group-item" data-role="task">
                                <div class="checkbox checkbox-info">
                                    <input type="checkbox" id="inputForward" name="inputCheckboxesForward">
                                    <label for="inputForward" class=""> <span>Print Datasheet</span> <span
                                                class="label label-warning">2 weeks</span> </label>
                                </div>
                                <div class="item-date"> 26 jun 2017</div>
                            </li>
                            <li class="list-group-item" data-role="task">
                                <div class="checkbox checkbox-info">
                                    <input type="checkbox" id="inputRecieve" name="inputCheckboxesRecieve">
                                    <label for="inputRecieve" class=""> <span>Print Broadsheet for SS2</span> </label>
                                </div>
                                <div class="item-date"> 26 jun 2017</div>
                            </li>
                            <li class="list-group-item" data-role="task">
                                <div class="checkbox checkbox-info">
                                    <input type="checkbox" id="inputpayment" name="inputCheckboxespayment">
                                    <label for="inputpayment" class=""> <span>Call Tina</span> </label>
                                </div>
                                <div class="item-date"> 26 jun 2017</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>-->

                <!-- ============================================================== -->
                <!-- End PAge Content -->
                <!-- ============================================================== -->
            </div>
            <!-- ============================================================== -->
            <!-- End Container fluid  -->
            <!-- ============================================================== -->

            <!--c3 JavaScript -->
            <script src="assets/plugins/d3/d3.min.js"></script>
            <script src="assets/plugins/c3-master/c3.min.js"></script>

            <!-- Chart JS -->
            <script src="assets/plugins/Chart.js/Chart.min.js"></script>

            <script>
                // ==============================================================
                // Portal users
                // ==============================================================

                var chart = c3.generate({
                    bindto: "#visitor",
                    data: {
                        columns: [
                            ["Staff", 4],
                            ["Administrators", 5],
                            ["Parents", 3796],
                            ["Students", 5180],
                        ],

                        type: "donut",
                        onclick: function (d, i) {
                            console.log("onclick", d, i)
                        },
                        onmouseover: function (d, i) {
                            console.log("onmouseover", d, i)
                        },
                        onmouseout: function (d, i) {
                            console.log("onmouseout", d, i)
                        },
                    },
                    donut: {
                        label: {
                            show: false,
                        },
                        title: "Portal Users",
                        width: 20,
                    },

                    legend: {
                        hide: true,
                        //or hide: 'data1'
                        //or hide: ['data1', 'data2']
                    },
                    color: {
                        pattern: ["#eceff1", "#745af2", "#26c6da", "#1e88e5"],
                    },
                })

                // =============================================================
                // Class Performance Analytics
                // =============================================================

                function class_analytics_initialize(a, b) {
                    var ctx1 = document.getElementById("chart1").getContext("2d")
                    var data1 = {
                        labels: a,
                        datasets: [
                            {
                                label: "My First dataset",
                                fillColor: "#009efb",
                                strokeColor: "#009efb",
                                pointColor: "#009efb",
                                pointStrokeColor: "#fff",
                                pointHighlightFill: "#fff",
                                pointHighlightStroke: "#009efb",
                                data: b,
                            },
                        ],
                    }
                    Chart.types.Line.extend({
                        name: "LineAlt",
                        initialize: function () {
                            Chart.types.Line.prototype.initialize.apply(this, arguments)

                            var ctx = this.chart.ctx
                            var originalStroke = ctx.stroke
                            ctx1.stroke = function () {
                                ctx1.save()
                                ctx1.shadowColor = "rgba(0, 0, 0, 0.4)"
                                ctx1.shadowBlur = 10
                                ctx1.shadowOffsetX = 8
                                ctx1.shadowOffsetY = 8
                                originalStroke.apply(this, arguments)
                                ctx1.restore()
                            }
                        },
                    })
                    var chart1 = new Chart(ctx1).LineAlt(data1, {
                        scaleShowGridLines: true,
                        scaleGridLineColor: "rgba(0,0,0,.005)",
                        scaleGridLineWidth: 0,
                        scaleShowHorizontalLines: true,
                        scaleShowVerticalLines: true,
                        bezierCurve: true,
                        bezierCurveTension: 0.4,
                        pointDot: true,
                        pointDotRadius: 4,
                        pointDotStrokeWidth: 2,
                        pointHitDetectionRadius: 2,
                        datasetStroke: true,
                        tooltipCornerRadius: 2,
                        datasetStrokeWidth: 0,
                        datasetFill: false,
                        legendTemplate:
                            '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
                        responsive: true,
                    })
                }

                function fetch_class_performance_analysis_data() {
                    var session_id = $("#session_id").val()
                    $("#chart1").remove()
                    $("#class-analytics").php(
                        '<canvas id="chart1" height="150"></canvas>'
                    )

                    var jqxhr = get_request(
                        site_url + "score/class-performance-analysis/" + session_id,
                        true
                    )
                    jqxhr.done(function (result) {
                        if (result.a < 1) {
                            $("#class-analytics").php(
                                bootstrap_alert(
                                    "This Academic Session has no Data to analyse."
                                )
                            )
                        } else {
                            class_analytics_initialize(result.a, result.b)
                        }
                    })
                }

                fetch_class_performance_analysis_data()

                $("#session_id").change(function () {
                    fetch_class_performance_analysis_data()
                })
            </script>
            <!-- ============================================================== -->
            <!-- footer -->
            <!-- ============================================================== -->
            <footer class="footer">
                © 2018 School Information Management System (MySkool Portal) by
                <a href="https://krystaldigitalng.com" target="_blank">KRYSTAL DIGITAL SOLUTIONS</a>
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
        $("ul.collapse").each(function (i) {
            if ($(this).children().length < 1) {
                $(this).parent().remove()
            }
        })

        $(".select2").select2()

        $(".ajax-link").contextmenu(function () {
            return false
        })

        function load_notification() {
            $("#n-center").load(site_url + "other/notification ul", function () {
                if ($(".message-center").length > 0) {
                    $(".notify").php(
                        '<span class="heartbit"></span><span class="point"></span>'
                    )
                } else {
                    $(".notify").php("")
                }
                //setTimeout(load_notification, 120000);
            })
        }
        load_notification()
    </script>
    <!-- ============================================================== -->
</body>

</html>