/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('URL is defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
         });

         it('name is defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
         });
    });

    describe('The menu', function () {

        it('should be hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('changes visibility when clicked', function () {
            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('has a single entry after loadFeed runs', function (done) {
            var entry = $('.feed .entry')[0];
            expect(entry).toBeGreaterThan('');
            done();
        });
    });

    describe('New Feed Selection', function () {
        var feed0,
            feed1;

        beforeEach(function (done) {
            loadFeed(0, function () {
                feed0 = $('.feed .entry').html();
                loadFeed(1, function() {
                    feed1 = $('.feed .entry').html();
                    done();
                });
            });
        });

        it('content changes when a new feed is loaded', function () {
            expect(feed1).not.toEqual(feed0);
        });
    });

    describe('Check that app can run', function () {
        it('that allFeeds exists and has data', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
    });
}());
