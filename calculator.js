var var_num_one = 0;
var var_num_two;
var content_box;
var box_one;
var box_two;
var result = 0;
var operation;
var intent = 0;
var intent_num = 0;
var operator;
var show_result = 0;
function f_to_know_number(valor_id){
    switch (valor_id){
        case "one":
            put_number_box(1);
        break;
        case "two":
            put_number_box(2);
        break;
        case "three":
            put_number_box(3);
        break;
        case "four":
            put_number_box(4);
        break;
        case "five":
            put_number_box(5);
        break;
        case "six":
            put_number_box(6);
        break;    
        case "seven":
            put_number_box(7);
        break;   
        case "eigth":
            put_number_box(8);
        break;
        case "nine":
            put_number_box(9);
        break;  
        case "zero":
            put_number_box(0);
        break;  
        case "sum":  
            put_operator("sum")
        break;
        case "rest":  
            put_operator("rest")
        break;
        case "plus":  
            put_operator("plus")
        break;
        case "div":  
            put_operator("div")
        break;
        case "result":  
            if (intent == 0){
                result = Number(document.getElementById("caja").value);
                document.getElementById("caja").value = result;
                operator = clicked_operator;
                intent = 1;
                }
            else if(intent == 1){
                if (show_result == 0){ 
                    var_num_two = Number(document.getElementById("caja").value);
                    switch(operator){
                        case "sum":
                            result = result + var_num_two;
                        break;
                        case "rest":
                            result = result - var_num_two;
                        break;
                        case "plus":
                            result = result * var_num_two;
                        break;
                        case "div":
                            result = result / var_num_two;
                        break;
                    }
                    document.getElementById("caja").value = result;
                    show_result = 1;
                }
                operator = clicked_operator;
                intent_num = 0;
            }
        break;
        default:
    }
}
function put_number_box(number_box){
    if (intent == 0){
        var_num_one =  Number(document.getElementById("caja").value);
        if(var_num_one == 0 || var_num_one == ""){
            document.getElementById("caja").value = number_box;
            show_result = 0;
            }
        else{
            content_box =  Number(document.getElementById("caja").value);
            document.getElementById("caja").value = content_box + "" + number_box;
            show_result = 0;
            }
    }
    else if(intent == 1){
        if (intent_num == 0){
            document.getElementById("caja").value = "";
            document.getElementById("caja").value = number_box;
            show_result = 0;
            intent_num = 1;
            }
        else if (intent_num == 1){
            var_num_one =  Number(document.getElementById("caja").value);
            if(var_num_one != 0 || var_num_one != ""){
                document.getElementById("caja").value = var_num_one + "" + number_box;
                show_result = 0;
                }
        }
    }
}
function put_operator(clicked_operator){
    if (intent == 0){
        result = Number(document.getElementById("caja").value);
        operator = clicked_operator;
        intent = 1;
        }
    else if(intent == 1){
        if (show_result == 0){ 
            var_num_two = Number(document.getElementById("caja").value);
            switch(operator){
                case "sum":
                    result = result + var_num_two;
                break;
                case "rest":
                    result = result - var_num_two;
                break;
                case "plus":
                    result = result * var_num_two;
                break;
                case "div":
                    result = result / var_num_two;
                break;
            }
            document.getElementById("caja").value = result;
            show_result = 1;
        }
        operator = clicked_operator;
        intent_num = 0;
    }
}