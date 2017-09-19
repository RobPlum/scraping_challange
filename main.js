var casper = require('casper').create();

casper.start('https://news.ycombinator.com/', function() {
    console.log('I just visited Y Combinator!');
});

casper.then(function() {
    // ...
});

casper.run(function() {
    this.echo('I\'m done' );
});