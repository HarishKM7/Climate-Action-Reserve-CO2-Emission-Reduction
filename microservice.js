// cache
const csv = require('csvtojson')
let projectsJSON = []
csv()
  .fromFile('Projects.csv')
  .then(json => (projectsJSON = json))

// microservice
const express = require('express')
const app = express()

app.get('/project/:projectID', (req, res) => {
  const project = projectsJSON.filter(project => project.project_id.replace('CAR', '') === req.params.projectID)
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(project))
})

app.listen(80, () => console.log('The microservice is ready...'))
