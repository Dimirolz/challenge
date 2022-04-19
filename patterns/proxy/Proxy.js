class PersonProxy {
    constructor(person) {
        return new Proxy(person, {
            get(obj, prop) {
                if (prop === 'planet') {
                    return 'Mars';
                }
                return Reflect.get(obj, prop);
            },
            set(obj, prop, value)  {
                if (prop === 'name') {
                    return Reflect.set(obj, prop, 'Jesus');
                }
                if (prop === 'age') {
                    return Reflect.set(obj, prop, 33);
                }
            }
        })
    }
}

module.exports = PersonProxy;
