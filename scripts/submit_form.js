function _ (id) { return document.getElementById(id);  }
function submitForm () {
  _ ("fhgbtn") .disabled = true; //disables script as soon as button is clicked
  _ ("status") .innerHTML = 'please wait...';
  var formdata = new FormData (); // new form data object
  formdata.append ( "n", _("n").value );
  formdata.append ( "e", _("e").value );
  formdata.append ( "m", _("m").valie );
  var ajax = new XMLHttpRequest ();
  ajax.open ( "POST", "fhg_parser.php" );
  ajax.onreadystatechange = function () {
    if(ajax.readyState == 4 && ajax.status == 200) {
      if(ajax.responseText == "success") {
        _("my_form").innerHTML = '<h2>Thank you, your message has been sent. We will endeavour to reply quickly. God bless!'
      } else {
        _("status").innerHTML = ajax.responseText;
        _("fhgbtn").disabled = false;
      }
    }
  }
  ajax.send ( formdata );

}
