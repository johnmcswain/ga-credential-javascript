$().ready(function(){
   for (var item in data.list){
     var result = data.list[item];
     $('main').append("<div><img src='"+result.image+"'><br>"+result.name+"</div>");
   }
});
