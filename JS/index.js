function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  function displayString() {
    console.log("Base64String about to be printed");
    var file = document.querySelector('input[type=file]')['files'][0];
    if(file!=null){
        var fileData = getBase64(file);
        document.getElementById("exampleFormControlTextarea6").value= fileData;
    }
    
}