var mas;

$(document).ready(function(){
    $(".btn").click(function(){
        $(".h1").empty()
        var ode=Number($(".inp").val());
        if(((ode)/0.945)<=200){
            mas=((ode)/0.945).toFixed(2);
            }
            else if(((ode-14)/0.875)>200){
            if(((ode-14)/0.875)<=8000){
                mas=((ode-14)/0.875).toFixed(2)
                console.log(mas);
            }
            else if(((ode-1174)/0.73)>8000){
                mas=((ode-1174)/0.73).toFixed(2);
                console.log(mas);
            }
            }
            $(".h1").append(mas)
           
    })
    $(".inp").keyup(function(){
        $(".h1").empty()
        $(".inp").text("")
    })
    
})

