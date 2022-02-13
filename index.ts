import {SelectionSort,BubbleSort,RecursiveBubbleSort,InsertionSort} from "./classes/index"



let testArray = [12, 421, 5532, 64, 12, 54, 23, 65, 43, 67, 115, 11];
console.log("\t plain array \n", testArray);

let t1:Date = new Date();
//Selection sorting Algo
testArray = [12, 421, 5532, 64, 12, 54, 23, 65, 43, 67, 115, 11];
console.log("\t SelectionSort \n", new SelectionSort(testArray).sort(), " "+ Math.abs((new Date().getTime()-t1.getTime())/1000));

t1 = new Date();
//Bubble sorting Algo
testArray = [12, 421, 5532, 64, 12, 54, 23, 65, 43, 67, 115, 11]
console.log("\t BubbleSort \n", new BubbleSort(testArray).sort(),  " "+ Math.abs((new Date().getTime()-t1.getTime())/1000));

t1 = new Date();
//Recursive bubble sorting Algo
testArray = [12, 421, 5532, 64, 12, 54, 23, 65, 43, 67, 115, 11]
console.log("\t Recursive bubbleSort \n", new RecursiveBubbleSort(testArray).sort(), " "+ Math.abs((new Date().getTime()-t1.getTime())/1000));


t1 = new Date();
//Recursive bubble sorting Algo
testArray = [12, 421, 5532, 64, 12, 54, 23, 65, 43, 67, 115, 11]
console.log("\t Insertion Sort \n", new InsertionSort(testArray).sort(), " "+ Math.abs((new Date().getTime()-t1.getTime())/1000));