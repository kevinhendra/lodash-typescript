// // Import the core node services.
// import find = require("lodash/find");
// import random = require("lodash/random");
// import range = require("lodash/range");
// import without = require("lodash/without");
// // ----------------------------------------------------------------------------------- //
// // ----------------------------------------------------------------------------------- //
// // I provide a convenience method for searching by "id".
// function findByID<T>(collection: T[], id: any): T | undefined {
//         return (find(collection, ["id", id]));
// }
// // Package the individual lodash functions as a local / extended version of lodash.
// // --
// // NOTE: This exploration is geared towards applications that need to build a deliver
// // a compiled file to the browser. If you're on the server only, this is much less of
// // an issue.
// export var _ = {
//         find,
//         findByID, // <---- Our convenience method.
//         random,
//         range,
//         without
// };
