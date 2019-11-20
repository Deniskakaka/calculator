$monitor = $(".monitor");
var number = 0;
var first = 0;
var second = 0;
var result = 0;
var sing = '';
var des = true;
var count = 0;
var $switch = 0;

function html(i) {
    if (des){
        if (i == "+" || i == "-" || i == '*' || i == "/" || i == "%"){
            $switch = 3;
            $monitor.find(".three").append(i)
        }
        if ($monitor.find(".three").html().length) {
            $switch = 2;
            $monitor.find(".two").append(i)
        }
        if (!$monitor.find(".two").html().length && !$monitor.find(".three").html().length){
            $switch = 1;
            $monitor.find(".one").append(i)
        }
    } else {
        return false;
    }
    first = $monitor.find(".one").html();
    second = $monitor.find(".two").html();
}

function decision() {
    sing = $monitor.find(".three").html();
    if (sing != '') {
        if (sing == '+') {
            result = Number(first) + Number(second);
            $monitor.find(".one").html(result);
            $monitor.find(".two").empty();
            $monitor.find(".three").empty();
        }
        if(sing == '-') {
            result = Number(first) - Number(second);
            $monitor.find(".one").html(result);
            $monitor.find(".two").empty();
            $monitor.find(".three").empty();
        }
        if(sing == '/') {
            result = (Number(first) / Number(second)).toFixed(6);
            $monitor.find(".one").html(result);
            $monitor.find(".two").empty();
            $monitor.find(".three").empty();
        }
        if(sing == '*') {
            result = Number(first) * Number(second);
            $monitor.find(".one").html(result);
            $monitor.find(".two").empty();
            $monitor.find(".three").empty();
        }
        if(sing == '%') {
            if (!$monitor.find(".two").html().length) {
                result = Number(first) / 100;
                $monitor.find(".one").html(result);
                $monitor.find(".two").empty();
                $monitor.find(".three").empty();
            } else {
            result = (Number(first) * Number(second) / 100);
            $monitor.find(".one").html(result);
            $monitor.find(".two").empty();
            $monitor.find(".three").empty();
            }
        }
    }
}

$("#one").click(function() {
    number = $(this).html();
    html(number);
    $(this).css("background","red");
});

$("#one").mouseout(function() {
    $(this).css("background","transparent")
});

$("#two").click(function() {
    number = $(this).html();
    html(number);
    $(this).css("background","red");
});

$("#two").mouseout(function() {
    $(this).css("background","transparent")
});

$("#three").click(function() {
    number = $(this).html();
    html(number);
    $(this).css("background","red");
});

$("#three").mouseout(function() {
    $(this).css("background","transparent")
});

$("#four").click(function() {
    number = $(this).html();
    html(number);
    $(this).css("background","red");
});

$("#four").mouseout(function() {
    $(this).css("background","transparent")
});

$("#five").click(function() {
    number = $(this).html();
    html(number);
    $(this).css("background","red");
});

$("#five").mouseout(function() {
    $(this).css("background","transparent")
});

$("#six").click(function() {
    number = $(this).html();
    html(number);
    $(this).css("background","red");
});

$("#six").mouseout(function() {
    $(this).css("background","transparent")
});

$("#seven").click(function() {
    number = $(this).html();
    html(number);
    $(this).css("background","red");
});

$("#seven").mouseout(function() {
    $(this).css("background","transparent")
});

$("#eight").click(function() {
    number = $(this).html();
    html(number);
    $(this).css("background","red");
});

$("#eight").mouseout(function() {
    $(this).css("background","transparent")
});

$("#nine").click(function() {
    number = $(this).html();
    html(number);
    $(this).css("background","red");
});

$("#nine").mouseout(function() {
    $(this).css("background","transparent")
});

$("#zero").click(function() {
    number = $(this).html();
    html(number);
    $(this).css("background","red");
});

$("#zero").mouseout(function() {
    $(this).css("background","transparent")
});


$("#plus").click(function() {
    number = $(this).html();
    if (!$monitor.find(".one").html().length) {
       return false;
    } else {
        click = false;
    }
    if (!$(".three").html().length) {
        $monitor.find(".three").append(number)
    }  
    des = true;
})

$("#minus").click(function() {
    number = $(this).html();
    if (!$monitor.find(".one").html().length) {
        return false;
     }
     if (!$(".three").html().length) {
         $monitor.find(".three").append(number)
     } 
     des = true; 
});

$("#multi").click(function() {
    number = $(this).html();
    if (!$monitor.find(".one").html().length) {
        return false;
     }
     if (!$(".three").html().length) {
         $monitor.find(".three").append(number)
     }  
     des = true;
});

$("#division").click(function(){
    number = $(this).html();
    if (!$monitor.find(".one").html().length) {
        return false;
     }
     if (!$(".three").html().length) {
         $monitor.find(".three").append(number)
     } 
     des = true; 
})

$("#equally").click(function() {
    number = $(this).html();
    decision();
    des = false;
});

$("#clear").click(function() {
    $monitor.find(".one").empty();
    $monitor.find(".two").empty();
    $monitor.find(".three").empty();
    des = true; 
});

$("#procent").click(function() {
    number = $(this).html();
    if (!$monitor.find(".one").html().length) {
        return false;
     }
     if (!$(".three").html().length) {
         $monitor.find(".three").append(number)
     } 
     des = true; 
});

$("#delet").click(function() {
    count++;
    if (!$monitor.find(".two").html().length) {
        $switch = 3;
    }
    if (!$monitor.find(".three").html().length) {
        $switch = 1;
    }
    if ($switch == 1) {
        var string = $monitor.find(".one").html().substring(0, $monitor.find(".one").html() - count);
        string = string.substring(0, string.length - count--)
        $monitor.find(".one").html(string)
    }
    if ($switch == 2) {
        var string = $monitor.find(".two").html().substring(0, $monitor.find(".two").html() - count);
        string = string.substring(0, string.length - count--)
        $monitor.find(".two").html(string)
    }
    if ($switch == 3) {
        var string = $monitor.find(".three").html().substring(0, $monitor.find(".three").html() - count);
        string = string.substring(0, string.length - count--)
        $monitor.find(".three").html(string)
    }
    des = true;
});
