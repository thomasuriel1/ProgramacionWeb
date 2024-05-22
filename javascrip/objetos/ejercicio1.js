function createObject(name, subs) {
    const yo ={
    name:name,
    suscribers: subs,
    hash: name.length * subs ,
    getStatus: () => { 
        return `El canal de ${name} tiene ${subs}`
    }
    }
        return yo
    
}
const yo = createObject("dani", 100)
console.log(yo)