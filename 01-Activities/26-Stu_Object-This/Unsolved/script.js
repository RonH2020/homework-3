//  Refers to window
console.log(this);

// This refers to the windwo object
function helloThis() {
  console.log('Inside this function, this is ' + this);
}
helloThis();

// this refers to the child object
var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

// This refers to the invesment object. Will log 5750
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};

// Call the object methods to check results
child.ageTenYears();
child.age = 5;
investor.investment.investmentGrowth();
