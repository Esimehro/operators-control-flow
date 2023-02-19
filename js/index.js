// Question 3

let scienceSubjects  = "Physics, Chemistry, Biology, Technical Drawing";
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";
let artsSubjects = "Government, Economics, Literature, History";
let generalSubjects = "English, Mathematics";

let classGroup = artsSubjects;


if (classGroup === scienceSubjects ){
    console.log('These are the list of subjects for your class group; ' + scienceSubjects + ' ' + generalSubjects);
} else if (classGroup === socialScienceSubjects){
    console.log('These are the list of subjects for your class group; ' + socialScienceSubjects + ' ' + generalSubjects);
    } else if (classGroup === artsSubjects){
        console.log('These are the list of subjects for your class group; ' + artsSubjects + ' ' + generalSubjects);
    } else {
        console.log('These are the general subjects;' + ' ' + generalSubjects);
    };


// Question 5

let x = 5;
let pwr = x ** 2;

function power(num,pwr){

if (pwr < num){
    console.log('The number ' + pwr + ' is the power of 2 nearest to ' + num)
} else {
    console.log('WRONG ANSWER');
}

}

console.log(power(30, 3));