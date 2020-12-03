const https = require('https');
/**
 * @constant {string}
 * @default  
 */
const baseUri = "https://apiv2.gofile.io/"
/**
 *  @classdesc api wrapper class for Gofile rest api
 */
class apiGofile {
/** 
 * @param {string} email your email
 * @param {string} token  your apikey on profile page
 */
    
    constructor(email, token) {
        /**
         * @property email your account email
         */
        this.email = email;
        /**
         * @property your account apikey
         */
        this.token = token;
    }
    /**
     * Callback for getting response from https call
     *
     * @callback httpsResponse
     * @param {Error} err -error of https request
     * @param {string|*} body -body of https response
     */
    /**
     *  Get the best server to post in.
     * 
     * The server chosen with this function will have better connection quality.
     * 
     * @async
     * 
     * @param {httpsResponse} callback - handles the https request result
     * 
     */
    getBestServer(callback) {
        https.get(baseUri + "getServer", (res) => {
            let body = "";
            res.on("data", (data) => {
                body += data;
            });
            res.on("end", () => {
                body = (JSON.parse(body));
                callback(null, body);
            });
            res.on("error", (err) => {
                callback(err, null);
            });
        });
    }
    /**
     *  Get an account info.
     * 
     *  Data returned are : email, account type (e.g. donor, standar), file count, file size.
     * 
     * @async
     * @param {string} token - your token or someone else token (api key in profile page)
     * @param {httpsResponse} callback - handles the https request result
     * 
     */
    getAccountInfo(token, callback) {
        
        https.get(baseUri + "getAccountInfo?token=" + token, (res) => {
            let body = "";
            res.on("data", (data) => {
                body += data;
            });
            res.on("end", () => {
                body = (JSON.parse(body));
                callback(null, body);
            });
            res.on("error", (err) => {
                callback(err, null);
            });
        });
    }
    /**
     *  Get an account upload list.
     * 
     *  Data returned are all upload with all data of file uploaded.
     * 
     * @async
     * @param {string} token - your token or someone else token (api key in profile page)
     * @param {httpsResponse} callback - handles the https request result
     * 
     */
    getUploadList(token, callback) {
        
        https.get(baseUri + "getUploadsList?token=" + token, (res) => {
            let body = "";
            res.on("data", (data) => {
                body += data;
            });
            res.on("end", () => {
                body = (JSON.parse(body));
                callback(null, body);
            });
            res.on("error", (err) => {
                callback(err, null);
            });
        });
    }
    /**
     *  Delete all upload by name of a file.
     * 
     *  It delete all file in all upload with the file inside.
     * 
     * @async
     * @param {string} name - your token or someone else token (api key in profile page)
     * @param {httpsResponse} callback - handles the https request result
     * 
     */
    deleteUpload(name, callback) {
        let upload, upName;
        
        this.getUploadList(this.token, (err, body) => {
            
            for (upload in body.data) {
               
                for (upName in body.data[upload].files) {
                    
                    if (body.data[upload].files[upName].name == name) {
                       
                        https.get("https://" + body.data[upload].server + ".gofile.io/deleteUpload?c=" + body.data[upload].code + "&ac=" + body.data[upload].adminCode + "&removeAll=true", (res) => {
                            let body = "";
                            res.on("data", (data) => {
                                body += data;
                            });
                            res.on("end", () => {
                                body = (JSON.parse(body));
                                callback(null, body);
                            });
                            res.on("error", (err) => {
                                callback(err, null);
                            });
                        });
                    }
                }
            }
        });
    }
}

module.exports.apiGofile = apiGofile;