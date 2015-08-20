var text = '<span class="keyword">function</span> <span class="function">GeekToolbox</span>() {\n\t<span class="variable">$what</span> = <span class="string">\'Toolbox for Geek Developers\'</span>;\n\t<span class="variable">$since</span> = <span class="function">strtotime</span>(<span class="string">\'19 Juin 2009\'</span>);\n\t<span class="variable">$where</span> = <span class="string">\'Montpellier, FR\'</span>;\n\t<span class="keyword">if</span>(<span class="variable">$interested</span> === <span class="keyword">true</span>) {\n\t\t<a href=\"http://www.facebook.com/pages/GeekToolboxfr/134230406600357\"><span class="function">Like_Or_+1</span>();</a>\n\t}\n}';

var currentChar = 1;
var htmltag = false;
var cache = '';


function type() {
    var str = text.substr(0, currentChar);
    var last = str.substr(str.length - 1, str.length);
    if (last != '<' && last != '>' & last != '/') {
        $("#consoleText2").html(str);
    }
    currentChar++;
    if (currentChar <= text.length) {
        if (last == '<') {
            htmltag = true;
        } else if (last == '>') {
            htmltag = false;
        }
        if (htmltag) {
            setTimeout(type, 1);
        } else {
            setTimeout(type, 50);
        }
    }
}

$(document).ready(function () {
    $("#consoleText2").html("");
    setTimeout(type, 2000);
});