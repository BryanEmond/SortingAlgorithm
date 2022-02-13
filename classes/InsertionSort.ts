class InsertionSort {
    #arr:Array<number> = [];
    constructor(array:Array<number>){
        this.#arr = array;
    }
    sort(){
        
        for (let i: number = 1; i < this.#arr.length; i++) {
                let j: number = i - 1;
                let temp: number = this.#arr[i];
                while (j >= 0 && this.#arr[j] > temp) {
                    this.#arr[j+1] = this.#arr[j];
                    j--;
                }
                this.#arr[j+1] = temp;
            }
            return this.#arr;
        return this.#arr;
    }
}
export default InsertionSort;