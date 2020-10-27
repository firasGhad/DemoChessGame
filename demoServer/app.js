const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/possible_distance_moves', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.status(200).json({possibleDistanceMoves: [1,7,8,9]});
  })

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`)
})