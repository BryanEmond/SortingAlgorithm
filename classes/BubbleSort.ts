class BubbleSort {
    #arr: Array<number> = [];
    constructor(array: Array<number>) {
        this.#arr = array
    }
    sort() {
        let loopCondition:Boolean = true
        while(loopCondition){
            let condition = false
            for(let i:number = 0; i < this.#arr.length; i++){
                if(this.#arr[i] > this.#arr[i+1]){
                    this.#swap(i)
                    condition = true
                }
            }
            loopCondition = condition
        }
        return this.#arr
    }
    #swap(i:number){
       let temp:number = this.#arr[i]
       this.#arr[i] = this.#arr[i+1]
       this.#arr[i+1] = temp
    }
}

export default BubbleSort;