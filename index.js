const { configDotenv } = require("dotenv");
const express = require ("express");
const app = express();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const activityRoutes = require("./routes/activityRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

configDotenv();

const PORT = process.env.PORT || 3000;

app.use("/", (req, res) => {
    res.send("Hello World");
})

// middleware
app.use(express.json());

// routes
app.use('/api/users', userRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/bookings', bookingRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});