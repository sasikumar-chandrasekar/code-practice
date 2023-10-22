class BlockChain {
    constructor() {
        this.tenders = [];
    }

    findTnderIndex(key, id) {
        return this.tenders.findIndex((tender) => tender[key] === id)
    }

    getAllTender() {
        return this.tenders
    }

    getTender(id) {
        const tenderIndex = this.findTnderIndex("tenderId", id);
        if (tenderIndex !== -1) {
            return this.tenders[tenderIndex];
        }
    }

    createTender(tender) {
        this.tenders.push(tender);
    }

    updateTender(id, data) {
        const tenderIndex = this.findTnderIndex("tenderId", id);
        if (tenderIndex !== -1) {
            this.tenders[tenderIndex] = { ...this.tenders[tenderIndex], ...data }
            return this.tenders[tenderIndex];
        }
        console.warn("Id is not available");
        return ""
    }

    deleteTender(id) {
        const tenderIndex = this.findTnderIndex("tenderId", id);
        if (tenderIndex !== -1) {
            return this.tenders.splice(tenderIndex, 1)
        }
        console.warn("Id is not available, tender is can't removed");
        return ""
    }

    updateTenderOwner(id, tenderIds) {
        for (let tenderId of tenderIds) {
            const tenderIndex = this.findTnderIndex("tenderId", tenderId);
            if (tenderIndex !== -1) {
                this.tenders[tenderIndex] = { ...this.tenders[tenderIndex], ownerId: id }
            }
        }
    }
}


const blockChain = new BlockChain()

for (let i = 1; i < 10; i++) {
    blockChain.createTender({ tenderId: i, tenderTitle: `Block Chain ${i}`, ownerId: Math.round(i / 2), description: "this is tender description" })
}

console.log("Get all tender", blockChain.getAllTender())
console.log("Get a tender", blockChain.getTender(1))
console.log("Update a tender", blockChain.updateTender(1, { tenderTitle: "Block Chain Update", isupdated: 1 }))
console.log("Updated tender detail", blockChain.getAllTender(1))
console.log("delete a tender", blockChain.deleteTender(1))
console.log("Update a tender owner", blockChain.updateTenderOwner(3, [4, 2, 3]))
console.log("Updated a tender owner list", blockChain.getAllTender())