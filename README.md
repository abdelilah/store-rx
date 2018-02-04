# store-rx

A simple reactive store for state management based on RXJS. Ideal for ReactJS but can be used for other architectures as well.

## Examples

```javascript
const Store = require('store-rx')

// Create a new store with initial data
const myStore = new Store({
    hello: 'world'
})

// Watch for value changes
myStore.watch('hello').subscribe(console.log) // Will output a value whenever 'hello' changes

// Assign new values
myStore.hello = 'John'
myStore.newVar = 'newVal'

// Get current value
const currentVal = myStore.hello

// Get all stored values
const values = myStore.getData()
```