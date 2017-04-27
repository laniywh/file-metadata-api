var formData = new FormData();

formData.append('file', Document.querySelector('fileInputElement').file);

var request = new XMLHttpRequest();
request.open('POST', '/upload');
request.send(formData);