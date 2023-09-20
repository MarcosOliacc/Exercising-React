export default function loadAtt({ params }) {
    const itens = localStorage.getItem('sdf-itens-lib')
    const parse = JSON.parse(itens)
    if (parse) {
        const item = parse.find(o=>o.id == params.idProduct)
        if(!item){
            return null
        } else return item
    } else return null
}