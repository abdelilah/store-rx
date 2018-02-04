const Store = require('../index.js')
let store = new Store()

describe('Store', function(){

    it('Should assign variables on store object', function(done){
        store
        .take(1)
        .subscribe(
            item => {
                done(item.varAssign ? null : 'Variable not found')
            }
        )

        store.varAssign = 'Hello'
    })


    it('Should get variables on store object', function(done){
        done(store.varAssign === 'Hello' ? null : 'Variable not found')
    })


    it('Should delete variables from store', function(done){
        delete(store.someVar)
        done(store.someVar ? 'Data was not deleted' : null)
    })


    it('Should return all variables with getData', function(done){
        const data = store.getData()
        done(data.varAssign ? null : 'Missing data')
    })


    it('Should watch() variables', function(done){
        store
        .watch('varAssign')
        .map(val => 'Hello world')
        .subscribe(
            item => done(item === 'Hello world' ? null : 'Received invalid value')
        )

        store.varAssign = 'Test'
    })

})