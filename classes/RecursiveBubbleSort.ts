class RecursiveBubbleSort {
    #arr:Array<number> = [];
    constructor(array:Array<number>){
        this.#arr = array;
    }
    sort(){
        
        this.#recursiveFunc()

        return this.#arr;
    }
    #recursiveFunc(){
        for(let i:number=0; i < this.#arr.length ;i++){
            if(this.#arr[i] > this.#arr[i+1]){
                this.#swap(i)
                this.#recursiveFunc()
            }
        }
    }
    #swap(i:number){
        let temp:number = this.#arr[i];
        this.#arr[i] = this.#arr[i+1];
        this.#arr[i+1] = temp;
    }
}
export default RecursiveBubbleSort