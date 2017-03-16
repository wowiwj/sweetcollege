







$(function () {

    function openDropzone() {

        alert(1);

    }

    $('.fileinput-button').click(function () {

        if ($("#addPhotosForm").is(':hidden'))
        {
            $("#addPhotosForm").show();
            return

        }

        $("#addPhotosForm").hide();

    });



    // function  openFileInput(){
    //
    //     $('.fileinput-button').hide();
    //
    //     //$('#filesInput').click();
    //
    // }


    // $('.fileinput-button').click(function () {
    //     $('.fileinput-button').hide();
    //
    // });



});