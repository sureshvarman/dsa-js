class Hash {
    constructor(initialSet) {
        this.hashStore = {}

        initialSet.forEach((value) => 
        {
            const hashedData = this._hashFunction(value)
            this.hashStore[hashedData.key] = hashedData.value;
        });
    }

    _hashFunction(value) {
        return {
            key: `${value}_Hashed`,
            value: value
        }
    }

    save(value) {
        const hashedData = this._hashFunction(value);
        this.hashStore[hashedData.key] = hashedData.value;
    }

    get() {
        return this.hashStore;
    }
}


const hash = new Hash([3, 4, 5, 6, 7, "test"]);

console.log(hash.get());