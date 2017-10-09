var Calculator = function(){
    return {
        add: function(a,b){
            return a + b;
        },
        subtract: function(a,b){
            return a - b;
        },
        multiply: function(a,b){
            return a * b;
        },
        divide: function(a,b){
            return a / b;
        },
    }
}

describe('calculate subtraction', function(){
    var calculate = new Calculator();
    
    it('should be able to subtract two numbers', function(){
        expect(calculate.subtract(8,3).toBe(5));
        console.log('I was able to add two numbers');
    });
});
