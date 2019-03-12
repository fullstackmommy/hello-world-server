const logger = (req, res, next) => {
    console.log("This will log any incoming requests")
    next();
}

module.exports = logger;