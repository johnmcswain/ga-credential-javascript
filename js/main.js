$().ready(function(){
   for (var item in data.list){
     console.log(data.list[item].image);
     $('body').append("<div><img src='assets/"+data.list[item].image+"'><br>"+data.list[item].name+"</div>");
   }
});
