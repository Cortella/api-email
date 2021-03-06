import 'reflect-metadata'
import express from "express"
import "./database"
import { router } from'./routes'

const app = express()

app.use(express.json())
app.use(router)

const port = 3333
app.listen(port, () => console.log("Server is running in port = ", port))