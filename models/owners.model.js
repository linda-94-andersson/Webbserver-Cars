let owners = [];

function findAll() {
    return owners;
}

function deleteOne(id) {
    owners = owners.filter((owner) => owner.id !== id);
}

module.exports = {
    owners,
    findAll,
    deleteOne,
}