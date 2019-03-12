$(document).ready(function () {
    getCountry();
    getPost();
});

function getCountry() {
    $.ajax({
       type:"get",
       url:"",
       async:true,
       dataType:"json",
       success:function (data) {
           var countryname=data.name;
           var pic=data.pic;
           var intro=data.intro;
           $(".coun_intro_pic").attr("src",pic);
           $(".#countryname").text(countryname);
           $("#countryIntro").text(intro);
       },
    });
}

function getPost() {
    $.ajax({
        type:"get",
        url:"",
        asyns:true,
        dataType:"json",
        success:function (data) {
            var article=data.article;
            var content=$("#content");
            for(var i=0;i<article.length;++i){
                var html="";
                if(i==0)
                    html += '<div class="row" style="padding-top: 30px">';
                else
                    html += '<div class="row">';
                html += '<div class="col-xs-2 col-sm-2 col-md-2">' +
                        '<a href="#">' +
                        '<img src="'+article[i].img+'" class="img-responsive img-box img-thumbnail">' +
                        '</a>' +
                        '</div>' +
                        '<div class="col-xs-7 col-sm-7 col-md-7">' +
                        '<h3><a onclick="titleonclick(this)" href="#" value="'+article[i].title+'">'+ article[i].title +'</a></h3>' +
                        '<div class="list-group">' +
                        '<div class="list-group-item">' +
                        '<div class="row-content">' +
                        '<small>' +
                        '<i class="glyphicon glyphicon-time"></i>'+ article[i].time +
                        '<br>' +
                        '<span class="explore"><i class="glyphicon glyphicon-th"></i> <a href="#">Explore 2 places </a></span>' +
                        '</small>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>'+' <hr>';
                content.append(html);
            }
        },
    });
    function titleonclick(e) {
        var title = e.getAttribute('value');

    }
}
