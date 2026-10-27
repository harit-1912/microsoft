const express = require("express")
const cookieParser = require("cookie-parser")



const app = express()

// Do not trust forwarded client IP headers unless a deployment explicitly configures a trusted proxy.
app.set("trust proxy", false)

// Keep malformed or oversized request bodies from consuming excessive resources.
app.use(express.json({ limit: "100kb" }))
app.use(express.urlencoded({ extended: false, limit: "100kb" }))
app.use(cookieParser())

/**
 * - Routes required
 */
const authRouter = require("./routes/auth.routes")
const accountRouter = require("./routes/account.routes")
const transactionRoutes = require("./routes/transaction.routes")

/**
 * - Use Routes
 */

app.get("/", (req, res) => {
    res.send("Harit Ledger API is up and running")
})

app.use("/api/auth", authRouter)
app.use("/api/accounts", accountRouter)
app.use("/api/transactions", transactionRoutes)

module.exports = app
