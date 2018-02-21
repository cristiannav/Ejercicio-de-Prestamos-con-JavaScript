function getData(){
  $.ajax({
    type: "GET",
    url: 'https://raw.githubusercontent.com/dariosus/jsonProvincias/master/provincias.json',
    dataType: "json",
    success: function(data){
      $.each(data,function(key, registro) {
        $("#provincia").append('<option value='+registro.country+'>'+registro.state+'</option>');
      });
    },
    error: function(data) {
      alert('error');
    }
  });
}
