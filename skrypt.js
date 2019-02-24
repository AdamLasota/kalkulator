var end = false;
var open = true;
var bracket = false;

calculator.display.value = '0';
function check_result (){
	end = true;
	calculator.display.value = eval(calculator.display.value);	
}
function check_display (number){
	if (end == false){
		if(open == true){
		open = false 
		calculator.display.value = number;	
		}
		else {calculator.display.value += number;
		}				
	}
	else{
		end = false
		calculator.display.value = number;				
	}	
};
function check_display_symbol (number){
	calculator.display.value += number;
	end = false;
}
function check_display_new (number){
	open = true
	bracket = false
	calculator.display.value = number;
}

function check_display_bracketL(number){
	if (end == false){
		if(open == true){
			open = false 
				if (bracket == false){
				bracket = true
				calculator.display.value = number;
				}
				else{
				bracket = false
				calculator.display.value = ')';
				}
		}
		else {
			if (bracket == false){
			bracket = true
			calculator.display.value += number;
			}
			else{
			bracket = false
			calculator.display.value += ')';
			}
		}				
	}
	else{
		end = false
		calculator.display.value = number;				
	}	
	
};
function check_display_bracketL(number){
	if (end == false){
		if(open == true){
			open = false 
				if (bracket == false){
				bracket = true
				calculator.display.value = number;
				}
				else{
				bracket = false
				calculator.display.value = ')';
				}
		}
		else {
			if (bracket == false){
			bracket = true
			calculator.display.value += number;
			}
			else{
			bracket = false
			calculator.display.value += ')';
			}
		}				
	}
	else{
		end = false
		calculator.display.value = number;				
	}	
	
};
function check_display_bracketR(number){
	if (end == false){
		if(open == true){
			open = false 
				if (bracket == false){
				bracket = true
				calculator.display.value = '(';
				}
				else{
				bracket = false
				calculator.display.value = number;
				}
		}
		else {
			if (bracket == false){
			bracket = true
			calculator.display.value += '(';
			}
			else{
			bracket = false
			calculator.display.value += number;
			}
		}				
	}
	else{
		end = false
		calculator.display.value = number;				
	}		
};

