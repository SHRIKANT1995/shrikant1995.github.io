function validateForm()
{
    var f=document.forms["contact"]["First name"].value;
    var l=document.forms["contact"]["Last name"].value;
    var e=document.forms["contact"]["email"].value;
    var p=document.forms["contact"]["phonenumber"].value;
    var v=document.forms["contact"]["vehicle initials"].value;

    
    
    if (f==null || f=="")
    {
        alert("First name must be filled out");
        return false;
    }
    
    if (l==null || l=="")
    {
        alert("Last name must be filled out");
        return false;
    }
    
    if (e==null || e=="" || e.indexOf("@") == -1)
    {
        alert("Email must be filled out and in the format of name@domain.com");
        return false;
    }
     if (p==null || p=="")
    {
        alert("Phone number must be filled out");
        return false;
	}
 	if (v==null || v=="")
    {
        alert("vehicle initials must be filled out");
        return false;

	}
	return true;

}
