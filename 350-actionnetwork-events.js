var emptyMsg;
window.ANEventsCallback = function(resp) {
    var ul = jQuery("<ul>");
    jQuery.each(resp, function(i, o) {
      var li = jQuery("<li>");
      var start = moment.utc(o.start).format('MMMM Do, h:mm:ss a');
      li.html("<b>"+start+"</b>: <a href='"+o.url+"'>"+o.title+"</a>")
        .appendTo(ul);
    });
    if (emptyMsg && resp.length === 0) {
        jQuery("<li>").text(emptyMsg).appendTo(ul);
    }
    ul.appendTo("#event-list");
  };
jQuery(document).ready(function() {
  var group = jQuery("script[src$='350-actionnetwork-events.js']").data("group");
  emptyMsg = jQuery("script[src$='350-actionnetwork-events.js']").data("empty-message");
  jQuery.getScript('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js', function() {
    jQuery("<script async type='text/javascript' src='//350dotorg.github.io/megamap-data/actionnetwork-events/"+group+".js'>").appendTo(document.body);
  });
});
