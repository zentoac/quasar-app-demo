import {Loading, Notify} from 'quasar';

const parseResponse = async (api) => {
  try {
    Loading.show();
    const response = await api;
    //console.log(response);
    if(response.statusText === 'OK') {
      Loading.hide();
      return response.data;
    }
  }
  catch (error) {
    //console.log(error);
    Loading.hide();
    Notify.create({
      color: 'red-5',
      textColor: 'white',
      icon: 'error',
      message: 'There was an error processing your request!'
    })
  }
}

export default {
  parseResponse
};
