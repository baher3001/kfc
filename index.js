var inputs = document.querySelectorAll('.form-control')
var icons = document.querySelectorAll('i')

var aa = document.querySelectorAll('.food .container');


for(var i = 0;i<inputs.length; i++)
{
    inputs[i].onblur = function(e)
    {
        if(e.target.value.length < 3)
        {
            e.target.nextElementSibling.style.display = 'block';
        }
        else
        {
            e.target.nextElementSibling.style.display = 'none';
        }
    }
    
}

icons[0].onclick = function()
{
    icons[0].style.display="none";
    icons[1].style.display="block";
    inputs[1].type="text";
}
icons[1].onclick = function()
{
    icons[1].style.display="none";
    icons[0].style.display="block";
    inputs[1].type="password";
}

 /*window.onscroll = function()
{
    if( document.body.scrollTop < 600)
    {
        aa.classlist.add('animate__backInLeft');
    }
}
*/
