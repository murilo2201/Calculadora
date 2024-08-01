let displayValue = '';

let operatorClicked = false;
let resultDisplayed = false;

    function appendNumber(number){

        if(resultDisplayed){
            displayValue = '';
            resultDisplayed = false
        }
        else{
            displayValue += number;

            document.getElementById('display').value = displayValue;
            operatorClicked = false;
            enableOperators();
    }
}

    function appendOperator(operator){

        if(!operatorClicked){
            
        displayValue += operator

        document.getElementById('display').value = displayValue;
        operatorClicked = true;
        disableOperators()
        }
    }

    function calculate(){

        try{
            displayValue = eval(displayValue);
            document.getElementById('display').value = displayValue;

            resultDisplayed = true;
        }
        catch{
            document.getElementById('display').value = 'Error!';

            resultDisplayed = false;
        }

        operatorClicked = false;
        enableOperators();
    }

    function clearDisplay(){
        displayValue = '';

        document.getElementById('display').value = displayValue;

        operatorClicked = false;
        resultDisplayed = false;

        enableOperators();
    }

    function enableOperators(){
        document.getElementById('add').disabled = false;
        document.getElementById('sub').disabled = false;
        document.getElementById('multi').disabled = false;
        document.getElementById('divi').disabled = false;
        
    }

    function disableOperators(){
        document.getElementById('add').disabled = true;
        document.getElementById('sub').disabled = true;
        document.getElementById('multi').disabled =true;
        document.getElementById('divi').disabled = true;
    }