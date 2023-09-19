
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.2.7/fullcalendar.min.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
    >
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <!-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> -->
    @viteReactRefresh
  @vite('resources/css/app.css')
    @vite('resources/js/app.jsx')
</head>
<body>

<!-- Content Header (Page header) -->
<div class="container-fluid">
    <div class="row mb-2">
        <div class="col-sm-6">
            <h1 class="m-0">Dashboard</h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Dashboard</li>
            </ol>
        </div><!-- /.col -->
    </div><!-- /.row -->
</div><!-- /.container-fluid -->

<!-- Your content goes here -->

<!-- Calendar Container -->
<div class="container-fluid">
    <div class="row">
        <div class="col-md-8">
            <div class="card card-primary">
                <div class="card-body p-0">
                    <!-- THE CALENDAR -->
                    <div id="calendar"></div>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
        <!-- /.col -->
        <div class="col-md-4">
            <!-- DIRECT CHAT PRIMARY -->
            <div class="card card-primary card-outline direct-chat direct-chat-primary sticky-top mb-3">
                <div class="card-header">
                    <h3 class="card-title"><i class="fas fa-fw fa-bullhorn"></i> Notice Board</h3>
                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" id="btnRefresh">
                            <i class="fas fa-redo"></i>
                        </button>
                    </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                    <!-- Conversations are loaded here -->
                    <div class="direct-chat-messages" id="msg" style="height:500px !important;"></div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer"></div>
                <!-- /.card-footer -->
            </div>
            <!--/.direct-chat -->
        </div>
        <!-- /.col -->
    </div>
    <!-- /.row -->
</div><!-- /.container-fluid -->

<!-- Submit Roster Modal -->

@section('css')
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.2.7/fullcalendar.min.css"/>
@stop


@section('js')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.2.7/fullcalendar.min.js"></script>

    <script>
    $(document).ready(function () {
        var SITEURL = "{{ url('/') }}";
        console.log(SITEURL);
        //for the ajax token
        $.ajaxSetup({
            headers:{
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
        });
    });
    //for the getBrowserWidth
    function getBrowserWidth(){
        if(window.innerWidth < 768){
            // Extra Small Device
            return "xs";
        } else if(window.innerWidth < 991){
            // Small Device
            return "sm"
        } else if(window.innerWidth < 1199){
        // Medium Device
            return "md"
        } else {
        // Large Device
            return "lg"
        }
    };
    var calendar = $('#calendar').fullCalendar({
                    editable:false,
                    firstDay:'1',
                    allDaySlot: false,
                    header:{
                        left:'prev,next today',
                        center:'title',
                        right:'month,agendaWeek,agendaDay'
                        //right:'month,agendaWeek,agendaDay, basicWeek'
                    },
                    selectable:true,
                    selectHelper: true,
                    lazyFetching: true,
                    eventLimit: true,

                    // Convert the allDay from string to boolean
                    eventRender: function (event, element, view) {
                      if (event.allDay === 'true') {
                        event.allDay = true;
                      } else {
                        event.allDay = false;
                      }
                    },
                    eventClick: function (event) {
                      // Get single article in EditModel
                        var _id = event.id;
                        var user="";
                        var user_id = 0;
                        $.get("{{ route('tasks.calen') }}" +'/' + _id +'/gettask' , function (data)
                        {
                            //console.log(data);
                            $('#status').val('');
                            $('#modelHeading').html("Task #ID "+data.id);
                            $('#SubmitUpdateForm').text('Save Changes');
                            $('#ajaxModel').modal('show');
                            $('#type').val(data.type);
                            $('#locID').val(data.locID);
                            $('#location').val(data.location.name);
                            if(data.notes=="" || data.notes==null)
                            {
                              $('#notesParent').hide();
                              $('#oldNotes').val("");
                            }else{
                              $('#notesParent').show();
                              $('#oldNotes').val(data.notes);
                            }
                            $('#startDate').val(data.start_date);
                            $('#startTime').val(data.start_time);
                            $('#endDate').val(data.end_date);
                            $('#endTime').val(data.end_time);
                            if(data.status!="" && data.status=="1")
                            {
                              $('#status').val('Completed');
                            }
                            else if(data.status!="" && data.status=="10")
                            {
                              $('#status').val('To be Approve');
                            }
                            else{
                              $('#status').val('Pending');
                            }

                            document.getElementById('employees').textContent="";
                            for (var i = 0; i <= data.user.length; i++) {

                              document.getElementById('employees').textContent+="\n"+data.user[i].username+",\n";

                              //$('employee').append(data.user[i].username);
                            }

                        })
                    }


                    })


    </script>

    <!-- Include additional JavaScript if needed -->
    @yield('additional-scripts')
</body>
</html>

