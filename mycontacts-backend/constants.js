// This is a constant file that will handle all our error codes.

exports.constants = {
    VALIDATION_ERROR: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
}

// We are creating a constant object, which will contain all our error codes.
// We are exporting this object, so that we can use it in other files.
// We are using this object in our errorHandler.js file, to determine the type of error.