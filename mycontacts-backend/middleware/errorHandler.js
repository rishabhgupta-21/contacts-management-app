const { constants } = require('../constants');

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;    // 500 - Internal Server Error

    // We need different kinds of error messages for different kinds of errors.
    // We can use the statusCode to determine the type of error.

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.status(statusCode).json({ title: "Validation Failed", message: err.message, stackTrace: err.stack });
            break;

        case constants.UNAUTHORIZED:
            res.status(statusCode).json({ title: "Unauthorized", message: err.message, stackTrace: err.stack });
            break;

        case constants.FORBIDDEN:
            res.status(statusCode).json({ title: "Forbidden", message: err.message, stackTrace: err.stack });
            break;

        case constants.NOT_FOUND:
            res.status(statusCode).json({ title: "Not Found", message: err.message, stackTrace: err.stack });
            break;

        case constants.INTERNAL_SERVER_ERROR:
            res.status(statusCode).json({ title: "Internal Server Error", message: err.message, stackTrace: err.stack });
            break;

        default:
            console.log(err);
            break;
    }

    // NOTE: We can also write a condition to only write the stackTrace in the response, if we are in development mode (dev).
    // if (process.env.NODE_ENV === 'dev') {
    //     res.status(statusCode).json({ "message": err.message, "stackTrace": err.stack });
    // } else {
    //     res.status(statusCode).json({ "message": err.message });
    // }
}

module.exports = errorHandler;

// How does thus Error Handler middleware work? Does it get called automatically when an error is thrown?
// No, it does not get called automatically. We need to call it manually in our code.
// For example, in our controller, we can call it like this:
// const errorHandler = require('../middleware/errorHandler');
// errorHandler(err, req, res, next);
// We can also call it in our routes file, like this:
// const errorHandler = require('../middleware/errorHandler');
// router.use(errorHandler);

// What does 'next' specify in the errorHandler function?
// The 'next' parameter is a callback function that we need to call in our controller, like this:
// const errorHandler = require('../middleware/errorHandler');
// errorHandler(err, req, res, next);
// This is because we need to pass the error to the next middleware, which is the errorHandler middleware.
// If we don't pass the error to the next middleware, then the errorHandler middleware will not be called.
// This is because the errorHandler middleware is the last middleware in the chain of middlewares.

// Why are we not calling the next() function in the errorHandler middleware?
// Because the errorHandler middleware is the last middleware in the chain of middlewares.
// There is no next middleware after the errorHandler middleware.
// So, we don't need to call the next() function in the errorHandler middleware.