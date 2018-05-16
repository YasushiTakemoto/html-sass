(function(){
    var s = document.getElementsByTagName("script");
    var d = s[s.length-1].src.substring(0, s[s.length-1].src.lastIndexOf("/")+1);
    for(var i=0; i<arguments.length; i++){
        document.write('<script type="text/javascript" src="'+d+arguments[i]+'"></script>');
    }
})(
    "jquery-3.2.1.min.js",
	"popper.min.js",
	"bootstrap-4.0.0.js"
);


