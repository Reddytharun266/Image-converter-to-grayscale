function display_image(input)
{
  if (input.files && input.files[0])
  {
    var reader = new FileReader();
    reader.onload = function (e) 
    {
      $('#source_image').attr('src', e.target.result).width(500);}; 
      reader.readAsDataURL(input.files[0]);
    }
}
function convert_image()
{
  var img = document.createElement("img");
  img.src = "please-wait.gif";
  $("#converted_image").html(img);
  var form_data = new FormData();
  var property = document.getElementById("image").files[0];
  form_data.append("file", property);
  $.ajax({url: "img_converter.php", method: "post", data: form_data, contentType: false, cache: false, processData: false, success: function(result){$("#converted_image").html(result);}});
}