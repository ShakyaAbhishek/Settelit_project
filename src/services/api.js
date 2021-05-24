const baseUrl = 'https://settleac.herokuapp.com/';

var NoAuthAPI = (apiName, apiMethod, data) => {
  if (data) {
    var formBody = [];
    for (var property in data) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
  }

  var init =
    apiMethod == 'GET'
      ? {
          method: 'GET',
        }
      : apiMethod == 'POST'
      ? {
          method: apiMethod,
          body: formBody,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
        }
      : {
          method: apiMethod,
          headers: {
            Accept: 'application/json',
          },
          body: formBody,
        };
  return fetch(baseUrl + apiName, init)
    .then((response) => response.json())
    .then((responseData) => {
      console.warn(responseData)
      if (responseData.data == '1') {
        return responseData;
      } else {
        alert('Something went wrong');
      }
    })
    .catch((err) => {
      alert('Server encounter an error, please try after some time');
      return false;
    });
};

export {NoAuthAPI};
