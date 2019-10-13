
function sendEmail (fields, onSuccess, onError) {
  const data = {
    access_token: 'c5s9n8rraqiph6c2rrt8j96a',
    ...fields,
  }
  const params = _toParams(data)
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      onSuccess();
    } else
    if(request.readyState == 4) {
      onError(request.response);
    }
  };
  request.open("POST", "https://postmail.invotes.com/send", true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send(params);
}

function _toParams(data) {
  var form_data = [];
  for ( var key in data ) {
    form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
  }
  return form_data.join("&");
}

export { sendEmail, _toParams};