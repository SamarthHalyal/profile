var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}

/* Added by Samarth Halyal */
document.getElementById('About_link')
        .addEventListener('click', function (event) {
            document.getElementById('About_content').style.display = 'block';
            document.getElementById('Research_content').style.display = 'none';
            document.getElementById('Publications_content').style.display = 'none';
        });

document.getElementById('Research_link')
        .addEventListener('click', function (event) {
            document.getElementById('About_content').style.display = 'none';
            document.getElementById('Research_content').style.display = 'block';
            document.getElementById('Publications_content').style.display = 'none';
        });

document.getElementById('Publications_link')
        .addEventListener('click', function (event) {
            document.getElementById('Publications_content').style.display = 'block';
            document.getElementById('About_content').style.display = 'none';
            document.getElementById('Research_content').style.display = 'none';
});

function clickPublish() {
  document.getElementById('Publications_link').click();
}