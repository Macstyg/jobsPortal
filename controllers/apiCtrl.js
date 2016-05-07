var mongoose   = require('mongoose'),
    Vacancy    = require('../models/vacancy'),
    bodyParser = require('body-parser');

module.exports = function (app, express) {

var apiRouter = express.Router();

  app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }));

apiRouter
  .route('/jobs')

    .post((req, res) => {
      var vacancy = new Vacancy();

      vacancy.companyname = req.body.companyname;
      vacancy.companyemail = req.body.companyemail;
      vacancy.posted = req.body.posted;
      vacancy.skills = req.body.skills;
      vacancy.compensation = req.body.compensation;
      vacancy.title = req.body.title;
      vacancy.description = req.body.description;

      vacancy.save((err) => {
        if (err) res.send(err);
        res.json({ message: 'Vacancy has been created' });
      });
    })

    .get((req, res) => {
      Vacancy.find({}, (err, vacancys) => {
        if (err) res.send(err);
        res.json(vacancys);
      })
    });

apiRouter
  .route('/jobs/:job_id')
    .get((req, res) => {
      Vacancy.findById(req.params.job_id, (err, job) => {
        if (err) res.send(err);
        res.json(job);
      })
    })

return apiRouter;

}
