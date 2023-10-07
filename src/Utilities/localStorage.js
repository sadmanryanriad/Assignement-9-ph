function getLocalStorageId() {
    const storedId = localStorage.getItem('items-id');
    if (storedId) {
        return JSON.parse(storedId);
    }
    return [];
}

function saveToLocalStorage(id) {
    const storedId = getLocalStorageId();

    const alreadyExist = storedId.find(itemId => itemId === id);

    if (!alreadyExist) {
        storedId.push(id);
        localStorage.setItem('items-id', JSON.stringify(storedId));
    }
}




export { getLocalStorageId, saveToLocalStorage }