const app = require("./app")
const cors = require('cors');
app.use(cors({ origin: '*' }));

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`App listening on port: http://localhost:${port}`)
})
