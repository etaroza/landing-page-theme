jQuery(function($){
    function embedGenerate(options) {
        var pipeReaderName = 'Pipereader'
        var pipereaderVarName = "$pr";
        var html = "(function(i,s,o,g,r,a,m){i['"+pipeReaderName+"']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//pipereader.appspot.com/pr/pr.nocache.js','"+pipereaderVarName+"');";

        // Set options
        html += "\n"+pipereaderVarName+"('create', 'any-publisher', window.location.hostname, 'default');";
        html += "\n"+pipereaderVarName+"('require', 'rsvp');";
        html += "\n"+pipereaderVarName+"('rsvp:set', 'widget', 'simple');";
        html += "\n"+pipereaderVarName+"('set', 'selector', 'article, p');";
        html += "\n"+pipereaderVarName+"('set', 'wordsPerMinute', '260');";

        html = "<!-- START: Pipereader embed snippet-->\n<script type='text/javascript'>\n" + html + "\n</script>\n<!--END: Pipereader embed snippet-->";
        $("textarea#embedcode").attr("value", html).text(html);
    }

    $("textarea#embedcode").click(function(){
        embedGenerate({});
        this.select();
    }).blur(function(){
        embedGenerate({});
    });

    embedGenerate({});
});

jQuery(function($){
    $("select#previewtheme").change(function(){
        $("#preview .panel").removeClass("inverse").addClass($(this).val());
    });
});