export default class CreateItem {
    constructor(id,name,quant,price,categ,descri,creaDate,attDate) {
        this.id = id
        this.name = name
        this.quantity = quant
        this.price = price
        this.category = categ
        this.description = descri
        this.createdAt = creaDate
        this.lastAtt = attDate
    }
}