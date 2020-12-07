var Body = {
    setColor:function (color){
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor:function (color){
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
var Links = {
    setColor:function(color){
    //var links = document.querySelectorAll('a');
    //var i=0;
    //    while(i<links.length)
    //    {
    //        links[i].style.color=color;
    //        i=i+1;
    //    }
    $('a').css('color', color);
    }       
}
function toggle(day){
    if(day==='day'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Links.setColor('powderblue');
    }else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('pink')
    }
}
function nightDayHandler(self){
    if(self.value==='night'){ 
        self.value='day'; 
        toggle(self.value)
    }else{
        self.value='night';
        toggle(self.value)
    }
}