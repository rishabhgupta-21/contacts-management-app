const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;    // 500 - Internal Server Error

    res.status(statusCode).json({ title: "Not Found", message: err.message, stackTrace: err.stack });
    res.status(statusCode).json({ title: "Validation Failed", message: err.message, stackTrace: err.stack });

    // NOTE: We can also write a condition to only write the stackTrace in the response, if we are in development mode (dev).
    // if (process.env.NODE_ENV === 'dev') {
    //     res.status(statusCode).json({ "message": err.message, "stackTrace": err.stack });
    // } else {
    //     res.status(statusCode).json({ "message": err.message });
    // }
}

module.exports = errorHandler;