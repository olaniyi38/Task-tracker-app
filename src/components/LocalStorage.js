class Storage {

  static getItems(key) {

    let items;
    if (localStorage.getItem(key) === null) {
      items = []
    } else {
      items = JSON.parse(localStorage.getItem(key))
    }
    console.log(items);
    return items

  }

  static storeItem(key,value) {
    const items = Storage.getItems(key)
    items.push(value)
   Storage.setItem(key,items)
   console.log(items);
  }

  static deleteItem(key,id) {
    const items = Storage.getItems(key)
   const newItems = items.filter((item)=>{
    return item.id !== id 
  })
   Storage.setItem(key,newItems)
  }
  static setItem(key,value){
    localStorage.setItem(key,JSON.stringify(value))
  }
}

export default Storage
