"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var rootDir = process.cwd();
/* tslint:disable:no-any */
function enableCORS(req, res) {
    /* tslint:enable:no-any */
    'use strict';
    // add support for CORS by any caller
    res.set('Access-Control-Allow-Origin', req.headers.origin);
    res.set('Access-Control-Allow-Credentials', 'true');
}
/*
 * Return files of various mime content types.
 */
/* tslint:disable:no-any */
function getPublic(req, res) {
    /* tslint:enable:no-any */
    'use strict';
    var parts = req.originalUrl.split('.');
    var ext;
    var filePath = path.join(rootDir, 'dist/public' + req.originalUrl);
    if (parts.length > 1) {
        ext = parts[parts.length - 1];
    }
    else {
        // assume a service call that returns JSON
        ext = 'json';
        filePath += '.json';
    }
    var stat = fs.statSync(filePath); // tslint:disable-line:typedef
    enableCORS(req, res);
    var contentType;
    switch (ext) {
        case 'hbs':
            contentType = 'text/x-handlebars-template';
            break;
        case 'json':
            contentType = 'application/json';
            break;
        case 'htm':
        case 'html':
            contentType = 'text/html';
            break;
        case 'md':
            contentType = 'text/x-markdown-template';
            break;
        case 'mst':
            contentType = 'text/x-mustache-template';
            break;
        case 'png':
            contentType = 'image/png';
            break;
    }
    res.writeHead(200, {
        'Content-Type': contentType,
        'Content-Length': stat.size,
        'Cache-Control': 'public, max-age=1440' // cache for 4 hours
    });
    var rs = fs.createReadStream(filePath); // tslint:disable-line:typedef
    rs.pipe(res);
}
exports.default = getPublic;

//# sourceMappingURL=getPublic.js.map
