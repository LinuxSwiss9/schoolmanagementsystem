<!DOCTYPE html>
<html lang="en">
<?php include('../layout/head.php') ?>
<!-- Bootstrap Select Css -->
<link rel="stylesheet" href="assets/plugins/bootstrap-select/css/bootstrap-select.css" />
<!-- noUISlider Css -->
<!-- <link rel="stylesheet" href="assets/plugins/nouislider/nouislider.min.css" /> -->
<!-- Select2 -->
<link rel="stylesheet" href="assets/plugins/select2/select2.css" />

<!-- Custom Css -->
<link rel="stylesheet" href="assets/css/style.min.css">

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
    <div style="width: 100%; height:100%; background-color: white; position: fixed; top:0; left:0; z-index: 1000; opacity:0.3; display: none;" id="DivOverlay">
    </div>
    <!-----===================================----->

    <!-- ============================================================== -->
    <!-- Main wrapper - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <div id="main-wrapper">
        <?php include('../layout/topbar.php') ?>
        <?php include('../layout/sidebar.php') ?>
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
                        <h3 class="text-themecolor m-b-0 m-t-0" id="page-title">Student</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Student</a></li>
                            <li class="breadcrumb-item active">Register Student</li>
                        </ol>
                    </div>
                </div>
                <div class="container-fluid">
                    <!-- Input -->
                    <div class="row clearfix">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <!-- <div class="alert alert-warning" role="alert">
                                <strong>Bootstrap</strong> Better check yourself, <a target="_blank" href="https://getbootstrap.com/docs/4.2/components/input-group/">View More</a>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true"><i class="zmdi zmdi-close"></i></span>
                                </button>
                            </div> -->
                            <div class="card">
                                <div class="body">
                                    <!-- <h2 class="card-inside-title">Basic Examples</h2> -->

                                    <h2 class="card-inside-title">Student Details</h2>
                                    <div class="row clearfix">
                                        <div class="col-sm-4">
                                            <label for="Surname">Surname</label>
                                            <div class="form-group">
                                                <input type="text" name="surname" class="form-control" placeholder="Enter Surname" />
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <label for="Surname">First Name</label>
                                            <div class="form-group">
                                                <input type="text" name="firstname" class="form-control" placeholder="Enter First Name" />
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <label for="Surname">Other Name</label>
                                            <div class="form-group">
                                                <input type="text" name="othername" class="form-control" placeholder="Enter Other Names" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row clearfix">
                                        <div class="col-sm-4">
                                            <label for="Blood group">Blood Group</label>
                                            <select class="form-control show-tick ms select2" data-placeholder="Select">
                                                <option></option>
                                                <option>A+</option>
                                                <option>A-</option>
                                                <option>B+</option>
                                                <option>B-</option>
                                                <option>O+</option>
                                                <option>O-</option>
                                                <option>AB+</option>
                                                <option>AB-</option>
                                            </select>
                                        </div>
                                        <div class="col-sm-4">
                                            <label for="genotype">Genotype</label>
                                            <select class="form-control show-tick ms select2" data-placeholder="Select">
                                                <option></option>
                                                <option>AA</option>
                                                <option>AS</option>
                                                <option>SS</option>
                                            </select>
                                        </div>

                                        <div class="col-sm-4">
                                            <label>Date Of Birth</label>
                                            <div class="input-group masked-input form-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="zmdi zmdi-calendar"></i></span>
                                                </div>
                                                <input type="date" class="form-control date">
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row clearfix">
                                        <div class="col-lg-3 col-md-6">
                                            <label for="">Place Of Birth</label>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Enter Place of Birth" />
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6">
                                            <label for="genotype">Religion</label>
                                            <select class="form-control show-tick ms select2" data-placeholder="Select">
                                                <option></option>
                                                <option>Christianity</option>
                                                <option>Islam</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-3 col-md-6">
                                            <label for="">Email Address</label>
                                            <div class="form-group">
                                                <input type="email" class="form-control" placeholder="Enter Email" />
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6">
                                            <label for="">Parent Phone Number</label>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Enter phone number" />
                                            </div>
                                        </div>
                                    </div>
                                    <h2 class="card-inside-title">Input Status</h2>
                                    <div class="row clearfix">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <div class="radio inlineblock m-r-20">
                                                    <input type="radio" name="gender" id="male" class="with-gap" value="option1">
                                                    <label for="male">Male</label>
                                                </div>
                                                <div class="radio inlineblock">
                                                    <input type="radio" name="gender" id="Female" class="with-gap" value="option2" checked="">
                                                    <label for="Female">Female</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Disabled" disabled />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="offset-md-3 col-md-6">
                        <div class="card card-body">
                            <h3 class="box-title m-b-0"></h3>
                            <p class="text-muted m-b-30 font-13">Enter Registration PIN</p>

                            <form action="student/add-student-pin-validate" id="validate-pin" method="post" accept-charset="utf-8">
                                <div class="row">
                                    <div class="form-group col-sm-12">
                                        <label for="name">PIN</label>
                                        <input type="text" name="reg_pin" class="form-control" id="name" placeholder="e.g. FGGCONXXXXXXXX" required>
                                    </div>
                                    <div class="col-sm-9">
                                        <button type="submit" class="btn btn-primary btn-rounded waves-effect waves-light m-t-10">
                                            Proceed
                                        </button>
                                        <span class="processor"></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <script>
                    $('#validate-pin').submit(function(e) {
                        e.preventDefault();
                        var jqxhr = submit_form('#validate-pin');

                        jqxhr.done(function(result) {
                            if (result.type === 'success') {
                                setTimeout(function() {
                                    window.location.href = site_url + 'student/add-student';
                                }, 2000);
                            }
                        })
                    });
                </script><!-- ============================================================== -->
                <!-- footer -->
                <!-- ============================================================== -->
                <footer class="footer">
                    © 2018 School Information Management System (MySkool Portal) by <a href="https://krystaldigitalng.com" target="_blank">KRYSTAL DIGITAL SOLUTIONS</a>
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
        <!-- End Wrapper -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <?php include('../layout/script.php') ?>
</body>

</html>