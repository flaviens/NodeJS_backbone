module.exports = function(app, express, router, fs) {

  /**
    * Command {id, cmd, result}
    */

  router.get('/printNumbers/', function (req, res) {

    lines = []
    for(var i = 0; i < req.query.nbNumbers; i++)
      lines.push(i+"")

    console.log(lines)

    res.render('lines', {myPageTitle: "Little title for the page that prints all these "+req.query.nbNumbers+" magnifical lines.", linesForTheTemplate: lines})
  })

  router.get('/', function (req, res) {

    res.render("hello") // Returns the page hello from the views page
  })

  return router
}
