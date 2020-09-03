const isLoggedIn = () => {
  return false;
}

const get = () => {
  return {
    email: "mark@supercompany.com",
    icon: "http://10.0.2.2:8082/assets/OT3LD2YmnSO0z2dW.png",
    id: 5,
    name: "Mark Wilson",
    role: "Senior Programmer",
  }
}

const remove = () => {
  return true;
}

export default {
  isLoggedIn,
  get,
  remove,
}
