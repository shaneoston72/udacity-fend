# Neighbourhood Map (Project 7)
This simple one-page app utilises [Google's Maps API](https://developers.google.com/maps/) and [Wikipedia's API](https://www.mediawiki.org/wiki/API:Main_page) to render a list of some of
the oldest pubs in London.

## Instructions
Download or clone this repository. Run a [web server locally](http://www.linuxjournal.com/content/tech-tip-really-simple-http-server-python). Visit the localhost site in your browser.  That's it.  

NOTE: Google Maps API requires an API key. One is included in index.html but it will surely be changed to protect the key against misuse.  Follow the [instructions](https://developers.google.com/maps/documentation/javascript/get-api-key) to get your own. Replace it in index.html. 

### Data source
[Wikipedia](https://www.mediawiki.org/wiki/API:Main_page)'s API is used to get information about pubs.

### Inspiration
* Grid layout: based on ["Easiest Flex Grid Ever"](https://www.taniarascia.com/easiest-flex-grid-ever/)
* Multiple markers: baed on ["Google Maps API - Multiple Markers, Multiple InfoWindows/InfoBubbles"](http://blog.michaelhelmick.com/2011/04/23/google-maps-api-multiple-markers-multiple-infowindowsinfobubbles/)
* Filtering the list: ["Utility Functions in KnockoutJS"](http://www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html)
* Reset search: [Stack Overflow Article](http://stackoverflow.com/questions/27704281/how-do-i-clear-form-fields-using-knockout-js)
