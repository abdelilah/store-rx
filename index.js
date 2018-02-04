const { Subject } = require('rxjs')

/**
 * A simple reactive store for state management. Ideal for ReactJS but can be used for other architectures as well.
 * @class
 */
class Store {

    constructor(initialStore = {}){
        const subject = new Subject()
        let data = initialStore

        return new Proxy(this, {
            set: (target, propKey, value) => {
                data[propKey] = value
                subject.next({[propKey]: value})
            },
            get: (target, propKey) => {
                if(propKey === 'subscribe'){
                    return (...args) => subject.subscribe(...args)
                }
                else if(propKey === 'getData'){
                    return () => data
                }
                else if(propKey === 'watch'){
                    return (varName) => subject.map(d => d[varName])
                }
                else {
                    if(subject[propKey]){
                        return (...args) => subject[propKey](...args)
                    }
                    else{
                        return data[propKey]
                    }
                }
            },
            deleteProperty: (target, property) => {
                delete(data[property])
            }
        })
    }
}


module.exports = Store