function deepClone(obj) {
    let clonedObj;
  
    if (Array.isArray(obj)) {
      clonedObj = [];
    } else if (obj && typeof obj === 'object') {
      clonedObj = {};
    } else {
      return obj;
    }

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
  
    return clonedObj;
  }

  let obj = {
    type: 'car',
    name: 'Audi',
    color: 'red',
    model: '500'
  };
  
  let clone = deepClone(obj);
  
  console.log(obj); //{ type: 'car', name: 'Audi', color: 'red', model: '500' }
  console.log(clone); //{ type: 'car', name: 'Audi', color: 'red', model: '500' }