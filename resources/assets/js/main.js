







$(function () {


    //添加大图查看功能
    var options = {
        // inline: true,
        url: 'data-original',
        ready:  function (e) {
            console.log(e.type);
        },
        show:  function (e) {
            console.log(e.type);
        },
        shown:  function (e) {
            console.log(e.type);
        },
        hide:  function (e) {
            console.log(e.type);
        },
        hidden:  function (e) {
            console.log(e.type);
        },
        view:  function (e) {
            console.log(e.type);
        },
        viewed:  function (e) {
            console.log(e.type);
            // this.viewer.zoomTo(1).rotateTo(180);
        }
    };


    var imageBoxes = document.getElementsByClassName('images-view');

    for (var i = 0;i < imageBoxes.length;i++)
    {
        new Viewer(imageBoxes[i],options);

    }



    // 拖拽上传
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



});