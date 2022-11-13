var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

var currentValue = 0;
var totalAmount = 0;
var previousValue = 0;
var previousPL = 0;
var totalPL = 0;
var greatestIncrease = ["",0];
var greatestDecrease = ["",0];

// Script to show string of first and second line
    // Financial Analysis (DONE)
    // ---------------------------- (DONE)
console.log("Financial Analysis\n----------------------------");


// Script to get the total number of months in the array: finances.length
    // Example: Total Months: 25 (DONE)
console.log("Total Months: " + finances.length);

// Script to start loop to find out Total Amount, Average Change, Greatest Increase, & Greatest Decrease
for (var i = 0; i < finances.length; i++) {

// Script to get the net total amount of profit/losses over the entire period: totalAmount
    var financesAmount = finances[i];
    currentValue = financesAmount[1];
    totalAmount += currentValue; // "+=" is shorthand for 'add to existing total 
    // Total Amount (Done)

// Script to get the average change of profit/losses over the entire period: averageChange
// change of each month / total months = average Change

    previousPL = currentValue - previousValue;
    totalPL += previousPL;
    previousValue = currentValue;
     // Average Change (Done)

// Script to calculate if previous change in PL is greatest increase or decrease
    if (previousPL > greatestIncrease[1]) {
        greatestIncrease = [financesAmount[0], previousPL];
    }
    if (previousPL < greatestDecrease[1]) {
        greatestDecrease = [financesAmount[0], previousPL];
    }
}

console.log ("Average Change: $" + (totalPL / finances.length).toFixed(2)); // toFixed(2) is to round up output to 2 decimal places
console.log ("Total: $" + totalAmount);
console.log ("Greatest Increase in profits: " + greatestIncrease[0] + " ($" + greatestIncrease[1] + ")");
console.log ("Greatest Decrease in profits: " + greatestDecrease[0] + " ($" + greatestDecrease[1] + ")");




// Greatest Increase in Profits: Feb-2012 ($1926159)
// Greatest Decrease in Profits: Sep-2013 ($-2196167)
// Your final code should print the analysis to the console.

// Hints:

// You will need to do some research on your own for this project!

// Remember, in order to combine strings and variables in the console you will need to use concatenation.

// How do you only print to the nearest 100th in JavaScript?

// Grading Requirements
// This homework is graded based on the following criteria:

// Technical Acceptance Criteria: 40%
// Satisfies all of the above acceptance criteria.
// Deployment: 32%
// Application deployed at live URL.

// Application loads with no errors.

// Application GitHub URL submitted.

// GitHub repository contains application code.

// Repository Quality: 12%
// Repository has a unique name.

// Repository follows best practices for file structure and naming conventions.

// Repository follows best practices for variable naming conventions, indentation, quality comments, etc.

// Repository contains multiple descriptive commit messages.

// Repository contains quality readme with description, screenshot, link to deployed application.

// Review
// You are required to submit BOTH of the following for review:

// The URL of the deployed application.

// The URL of the GitHub repository that contains your code. Give the repository a unique name and include a README file that describes the project.

// Copyright
// © 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.