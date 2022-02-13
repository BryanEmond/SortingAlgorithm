class SelectionSort {
    #arr: Array<number> = [];
    constructor(array: Array<number>) {
        this.#arr = array
    }
    sort() {
        let index: number = 0;

        for (let i: number = 0; i < this.#arr.length; i++) {
            for (let j: number = i; j < this.#arr.length; j++) {
                if (this.#arr[index] > this.#arr[j] || j === i) {
                    index = j;
                }
            }
            this.#swap(index,i)
        }
        return this.#arr
    }
    #swap(index:number,i:number){
        let temp:number = this.#arr[index]
        this.#arr[index] = this.#arr[i]
        this.#arr[i] = temp
    }
}

export default SelectionSort;