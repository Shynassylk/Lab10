let lab1 = [5, 5, 0, 5, 5, 0, 10];
let lab2 = [5, 4, 5, 5, 5, 5, 10];
let lab3 = [0, 0, 0, 0];
let lab4_5 = [10, 5, 1, 5, 5, 5, 6, 10, 10, 10, 0];
let lab6 = [0, 0, 0, 0, 0, 0];
let lab8 = [5,10,10,10,5]
let quiz_1=[34];

function main(lab1,lab2,lab3,lab4_5,lab6,lab8) {
    function get_sum(lab) {
        let sum=0;
        for (let i=0; i<lab.length; i+=1) {
    sum += lab[i];
        }
    return sum; 
    }

let sums=[get_sum(lab1),get_sum(lab2),get_sum(lab3),get_sum(lab4_5),get_sum(lab6),get_sum(lab8)];
function total(sums) {
    let total=0;
    for (let c=0; c<sums.length; c+=1){
        total += sums[c];
    }
    return total;
}
let total1=total(sums)
const results = {
    Lab1: lab1,
    Lab2: lab2,
    Lab3: lab3,
    Lab4_5: lab4_5,
    Lab6: lab6,
    Lab8: lab8,
    sum_of_all_lubs: sums,
    quiz_1: quiz_1,
    overall_total_score: (total1/280)*60 +34

}
return results;
}
results =main(lab1,lab2,lab3,lab4_5,lab6,lab8);
console.log(results)
