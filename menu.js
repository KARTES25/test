jQuery.ajax({
    url: "menu.html",
    dataType: "html",
    success: function(response) {
    document.getElementById('container1').innerHTML = response;
    }
    });