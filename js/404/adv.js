var style = "<style>.adv-demo-ad{height:25px; line-height:25px; position:fixed; left:0px; bottom:0px; width:100%; border-top:1px solid #ccc; background-color:#FFF; font-size:13px; z-index:999999; overflow:hidden;background: #0072c6;background-image: -webkit-gradient(linear,left top,right top,from(#1278f6),to(#00b4aa));background-image: -webkit-linear-gradient(left,#1278f6,#00b4aa);background-image: -moz-linear-gradient(left,#1278f6,#00b4aa);background-image: linear-gradient(to right,#1278f6,#00b4aa);background-color: rgb(51, 133, 227);}.adv-demo-ad a{text-decoration:none; color:#fff;}.adv-demo-ad .adv-fl{float:left; margin-left:10px;}.adv-demo-ad .adv-fr{float:right; margin-right:40px;}.adv-demo-ad .adv-fr a{margin-left:10px;}.adv-demo-ad a.close-scn-ad{display:block; height:25px; width:30px; text-align:center; position:absolute; right:0px; bottom:0px;background-color:#09d2d2;}</style>",
html = 'ERROR 404 PAGE NOT FOUND';
try {
    top.location.hostname,
    top.location.hostname == window.location.hostname && top == self && (document.writeln(style), document.writeln(html))
} catch(a) {
    document.writeln(style),
    document.writeln(html)
};
document.oncontextmenu = noMenuOne; ((function() {
    var callbacks = [],
    timeLimit = 50,
    open = false;
    setInterval(loop, 1);
    return {
        addListener: function(fn) {
            callbacks.push(fn);
        },
        cancleListenr: function(fn) {
            callbacks = callbacks.filter(function(v) {
                return v !== fn;
            })
        }
    }
})()).addListener(function() {
    window.location.reload();
});