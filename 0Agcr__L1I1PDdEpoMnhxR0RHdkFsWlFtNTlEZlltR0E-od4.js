// API callback
Tabletop.singleton.loadSheet({
  "feed": {
    "category": [
      {
        "term": "http://schemas.google.com/spreadsheets/2006#list", 
        "scheme": "http://schemas.google.com/spreadsheets/2006"
      }
    ], 
    "updated": {
      "$t": "2013-07-21T03:21:45.796Z"
    }, 
    "xmlns": "http://www.w3.org/2005/Atom", 
    "xmlns$gsx": "http://schemas.google.com/spreadsheets/2006/extended", 
    "title": {
      "$t": "Layers", 
      "type": "text"
    }, 
    "author": [
      {
        "name": {
          "$t": "ethan.jucovy"
        }, 
        "email": {
          "$t": "ethan.jucovy@gmail.com"
        }
      }
    ], 
    "openSearch$startIndex": {
      "$t": "1"
    }, 
    "link": [
      {
        "href": "https://spreadsheets.google.com/pub?key=0Agcr__L1I1PDdEpoMnhxR0RHdkFsWlFtNTlEZlltR0E", 
        "type": "text/html", 
        "rel": "alternate"
      }, 
      {
        "href": "https://spreadsheets.google.com/feeds/list/0Agcr__L1I1PDdEpoMnhxR0RHdkFsWlFtNTlEZlltR0E/od4/public/values", 
        "type": "application/atom+xml", 
        "rel": "http://schemas.google.com/g/2005#feed"
      }, 
      {
        "href": "https://spreadsheets.google.com/feeds/list/0Agcr__L1I1PDdEpoMnhxR0RHdkFsWlFtNTlEZlltR0E/od4/public/values?alt=json-in-script&sq=", 
        "type": "application/atom+xml", 
        "rel": "self"
      }
    ], 
    "xmlns$openSearch": "http://a9.com/-/spec/opensearchrss/1.0/", 
    "entry": [
      {
        "category": [
          {
            "term": "http://schemas.google.com/spreadsheets/2006#list", 
            "scheme": "http://schemas.google.com/spreadsheets/2006"
          }
        ], 
        "updated": {
          "$t": "2013-07-21T03:21:45.796Z"
        }, 
        "title": {
          "$t": "Local Groups", 
          "type": "text"
        }, 
        "gsx$publicsubmissionspreadsheet": {
          "$t": ""
        }, 
        "gsx$publicsubmissionform": {
          "$t": ""
        }, 
        "content": {
          "$t": "template:           <div class=\"popup_box\">\n            <div class=\"popup_box_header\">\n              <strong><a href=\"{{ website }}\">{{ name }}</a></strong>\n            </div>\n            <em>{{ geom }}</em>\n            <hr />\n            {{ description }}\n          </div>\n", 
          "type": "text"
        }, 
        "gsx$type": {
          "$t": "Local Groups"
        }, 
        "link": [
          {
            "href": "https://spreadsheets.google.com/feeds/list/0Agcr__L1I1PDdEpoMnhxR0RHdkFsWlFtNTlEZlltR0E/od4/public/values/cokwr", 
            "type": "application/atom+xml", 
            "rel": "self"
          }
        ], 
        "gsx$template": {
          "$t": "          <div class=\"popup_box\">\n            <div class=\"popup_box_header\">\n              <strong><a href=\"{{ website }}\">{{ name }}</a></strong>\n            </div>\n            <em>{{ geom }}</em>\n            <hr />\n            {{ description }}\n          </div>\n"
        }, 
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/0Agcr__L1I1PDdEpoMnhxR0RHdkFsWlFtNTlEZlltR0E/od4/public/values/cokwr"
        }
      }, 
      {
        "category": [
          {
            "term": "http://schemas.google.com/spreadsheets/2006#list", 
            "scheme": "http://schemas.google.com/spreadsheets/2006"
          }
        ], 
        "updated": {
          "$t": "2013-07-21T03:21:45.796Z"
        }, 
        "title": {
          "$t": "GROW Divestment Events", 
          "type": "text"
        }, 
        "gsx$publicsubmissionspreadsheet": {
          "$t": "0Agcr__L1I1PDdGhVZU1mUUNRdzIya0p1bTl0eGQ3Y1E"
        }, 
        "gsx$publicsubmissionform": {
          "$t": "<div class=\"popup_box\">\n  <form method=\"GET\" action=\"https://docs.google.com/forms/d/1-nGFSRd46ujzwNA9Cn-45eG46hbwKGKjwahewgBMJsA/viewform\">\n    <div class=\"popup_box_header\">\n      <strong><label for=\"entry.1535171616\">Website URL: <input type=\"url\" name=\"entry.1535171616\" /></label></strong>\n      <em><label for=\"entry.711765341\">Date/Time: <input type=\"datetime-local\" name=\"entry.711765341\"></label></em>\n    </div>\n    <label for=\"entry.1660676065\">Description: <textarea name=\"entry.1660676065\"></textarea></label>\n    <hr />\n    <label for=\"entry.681603033\">Location: <input type=\"text\" name=\"entry.681603033\" value=\"{{query}}\" /></label>\n    <input type=\"hidden\" name=\"entry.396961874\" value=\"{{lat}}\" />\n    <input type=\"hidden\" name=\"entry.1981691483\" value=\"{{lng}}\" />\n    <input type=\"submit\" value=\"Go!\" />\n  </form>\n</div>"
        }, 
        "content": {
          "$t": "template:           <div class=\"popup_box\">\n            <div class=\"popup_box_header\">\n              <strong><a href=\"{{ website }}\">{{ title }}</a></strong>\n            </div>\n            <em>{{ date }}, {{ time }}</em>\n            <hr />\n            {{ geom }} (<a href=\"http://maps.google.com/maps?daddr={{ geom }}&t=m&layer=1&doflg=ptk&om=0\">Directions</a>)\n          </div>\n, publicsubmissionspreadsheet: 0Agcr__L1I1PDdGhVZU1mUUNRdzIya0p1bTl0eGQ3Y1E, publicsubmissionform: <div class=\"popup_box\">\n  <form method=\"GET\" action=\"https://docs.google.com/forms/d/1-nGFSRd46ujzwNA9Cn-45eG46hbwKGKjwahewgBMJsA/viewform\">\n    <div class=\"popup_box_header\">\n      <strong><label for=\"entry.1535171616\">Website URL: <input type=\"url\" name=\"entry.1535171616\" /></label></strong>\n      <em><label for=\"entry.711765341\">Date/Time: <input type=\"datetime-local\" name=\"entry.711765341\"></label></em>\n    </div>\n    <label for=\"entry.1660676065\">Description: <textarea name=\"entry.1660676065\"></textarea></label>\n    <hr />\n    <label for=\"entry.681603033\">Location: <input type=\"text\" name=\"entry.681603033\" value=\"{{query}}\" /></label>\n    <input type=\"hidden\" name=\"entry.396961874\" value=\"{{lat}}\" />\n    <input type=\"hidden\" name=\"entry.1981691483\" value=\"{{lng}}\" />\n    <input type=\"submit\" value=\"Go!\" />\n  </form>\n</div>", 
          "type": "text"
        }, 
        "gsx$type": {
          "$t": "GROW Divestment Events"
        }, 
        "link": [
          {
            "href": "https://spreadsheets.google.com/feeds/list/0Agcr__L1I1PDdEpoMnhxR0RHdkFsWlFtNTlEZlltR0E/od4/public/values/cpzh4", 
            "type": "application/atom+xml", 
            "rel": "self"
          }
        ], 
        "gsx$template": {
          "$t": "          <div class=\"popup_box\">\n            <div class=\"popup_box_header\">\n              <strong><a href=\"{{ website }}\">{{ title }}</a></strong>\n            </div>\n            <em>{{ date }}, {{ time }}</em>\n            <hr />\n            {{ geom }} (<a href=\"http://maps.google.com/maps?daddr={{ geom }}&t=m&layer=1&doflg=ptk&om=0\">Directions</a>)\n          </div>\n"
        }, 
        "id": {
          "$t": "https://spreadsheets.google.com/feeds/list/0Agcr__L1I1PDdEpoMnhxR0RHdkFsWlFtNTlEZlltR0E/od4/public/values/cpzh4"
        }
      }
    ], 
    "openSearch$totalResults": {
      "$t": "2"
    }, 
    "id": {
      "$t": "https://spreadsheets.google.com/feeds/list/0Agcr__L1I1PDdEpoMnhxR0RHdkFsWlFtNTlEZlltR0E/od4/public/values"
    }
  }, 
  "version": "1.0", 
  "encoding": "UTF-8"
});