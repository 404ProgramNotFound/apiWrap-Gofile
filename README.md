# gofile-apiwrapper [![NPM version](https://badge.fury.io/js/gofile-apiwrapper.svg)](https://npmjs.org/package/gofile-apiwrapper) [![Build Status](https://travis-ci.org/404ProgramNotFound/gofile-apiwrapper.svg?branch=master)](https://travis-ci.org/404ProgramNotFound/gofile-apiwrapper)

> api wrapper

## Installation

```sh
$ npm install --save gofile-apiwrapper
```

## Usage

```js
const gofileApiwrapper = require('gofile-apiwrapper');
const api = new gofileApiwrapper.apiGofile("email","token");

// e.g.
api.getBestServer((err,body)=>{
    //body contain data 
    //err is null until https get request give error
});
```



## documentation
## Classes

<dl>
<dt><a href="#apiGofile">apiGofile</a></dt>
<dd><p>api wrapper class for Gofile rest api</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#baseUri">baseUri</a> : <code>string</code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#httpsResponse">httpsResponse</a> : <code>function</code></dt>
<dd><p>Callback for getting response from https call</p>
</dd>
</dl>

<a name="apiGofile"></a>

## apiGofile
api wrapper class for Gofile rest api

**Kind**: global class

* [apiGofile](#apiGofile)
    * [new apiGofile([email], [token])](#new_apiGofile_new)
    * [.email](#apiGofile+email)
    * [.token](#apiGofile+token)
    * [.setEmail](#apiGofile+setEmail)
    * [.getEmail](#apiGofile+getEmail) ⇒ <code>string</code>
    * [.setToken](#apiGofile+setToken)
    * [.getToken](#apiGofile+getToken) ⇒ <code>string</code>
    * [.getBestServer(callback)](#apiGofile+getBestServer)
    * [.getAccountInfo([token], callback)](#apiGofile+getAccountInfo)
    * [.getUploadList([token], callback)](#apiGofile+getUploadList)
    * [.deleteUpload([name], [code], [token], callback)](#apiGofile+deleteUpload)
    * [.deleteFile(name, [code], [token], callback)](#apiGofile+deleteFile)
    * [.postUpload(file, [ac], [email], [description], [password], [tags], [expire], server, callback)](#apiGofile+postUpload)

<a name="new_apiGofile_new"></a>

### new apiGofile([email], [token])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [email] | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | your email |
| [token] | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | your apikey on profile page |

<a name="apiGofile+email"></a>

### apiGofile.email
**Kind**: instance property of [<code>apiGofile</code>](#apiGofile)
**Properties**

| Name | Description |
| --- | --- |
| email | your account email |

<a name="apiGofile+token"></a>

### apiGofile.token
**Kind**: instance property of [<code>apiGofile</code>](#apiGofile)
**Properties**

| Name | Description |
| --- | --- |
| token | your account apikey |

<a name="apiGofile+setEmail"></a>

### apiGofile.setEmail
setter of email

**Kind**: instance property of [<code>apiGofile</code>](#apiGofile)

| Param | Type |
| --- | --- |
| email | <code>string</code> |

<a name="apiGofile+getEmail"></a>

### apiGofile.getEmail ⇒ <code>string</code>
getter of email

**Kind**: instance property of [<code>apiGofile</code>](#apiGofile)
**Returns**: <code>string</code> - email
<a name="apiGofile+setToken"></a>

### apiGofile.setToken
setter of token

**Kind**: instance property of [<code>apiGofile</code>](#apiGofile)

| Param | Type |
| --- | --- |
| token | <code>string</code> |

<a name="apiGofile+getToken"></a>

### apiGofile.getToken ⇒ <code>string</code>
getter of token

**Kind**: instance property of [<code>apiGofile</code>](#apiGofile)
**Returns**: <code>string</code> - token
<a name="apiGofile+getBestServer"></a>

### apiGofile.getBestServer(callback)
The server chosen with this function will have better connection quality.

**Kind**: instance method of [<code>apiGofile</code>](#apiGofile)

| Param | Type | Description |
| --- | --- | --- |
| callback | [<code>httpsResponse</code>](#httpsResponse) | handles the https request result |

<a name="apiGofile+getAccountInfo"></a>

### apiGofile.getAccountInfo([token], callback)
 Data returned are : email, account type (e.g. donor, standar), file count, file size.

**Kind**: instance method of [<code>apiGofile</code>](#apiGofile)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [token] | <code>string</code> | <code>null</code> | someone's token (if null it will use the token setted in the class) |
| callback | [<code>httpsResponse</code>](#httpsResponse) |  | handles the https request result |

<a name="apiGofile+getUploadList"></a>

### apiGofile.getUploadList([token], callback)
 Data returned are all upload with all data of file uploaded.

**Kind**: instance method of [<code>apiGofile</code>](#apiGofile)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [token] | <code>string</code> | <code>null</code> | someone's token (if null it will use the token setted in the class) |
| callback | [<code>httpsResponse</code>](#httpsResponse) |  | handles the https request result |

<a name="apiGofile+deleteUpload"></a>

### apiGofile.deleteUpload([name], [code], [token], callback)
 It delete all upload containing the file name.

**Kind**: instance method of [<code>apiGofile</code>](#apiGofile)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [name] | <code>string</code> | <code>null</code> | name of the file (if null it delete all upload) |
| [code] | <code>srting</code> | <code></code> | code of specific upload (if null it delete all upload with the file inside) |
| [token] | <code>string</code> | <code>null</code> | someone's token (if null it will use the token setted in the class) |
| callback | [<code>httpsResponse</code>](#httpsResponse) |  | handles the https request result |

<a name="apiGofile+deleteFile"></a>

### apiGofile.deleteFile(name, [code], [token], callback)
 It delete all file in an upload or all upload if code of upload is not specified, if the upload have only 1 file use delete upload

**Kind**: instance method of [<code>apiGofile</code>](#apiGofile)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | name of the file |
| [code] | <code>srting</code> | <code></code> | code of specific upload |
| [token] | <code>string</code> | <code>null</code> | someone's token (if null it will use the token setted in the class) |
| callback | [<code>httpsResponse</code>](#httpsResponse) |  | handles the https request result |

<a name="apiGofile+postUpload"></a>

### apiGofile.postUpload(file, [ac], [email], [description], [password], [tags], [expire], server, callback)
If you specify the adminCode of an existing upload, then the file will be added to this upload.

**Kind**: instance method of [<code>apiGofile</code>](#apiGofile)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| file | <code>file</code> |  | Must contain one file. |
| [ac] | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | The admin code of an upload. If you specify it, the file will be added to this upload. |
| [email] | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | Must contain email adress syntax. The upload will be stored on this account. if is null it take the email assigned to the class in the consrtuctor or using setter |
| [description] | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | Must contain description of the upload |
| [password] | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | Must contain password of the upload(min 6 char) |
| [tags] | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | Must contain tags of the upload. If multiple tags, seperate them with comma (example : tags1,tags2) |
| [expire] | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | Must contain expiration date of the upload in the form of timestamp. |
| server | <code>string</code> |  | the server to upload the file in |
| callback | [<code>httpsResponse</code>](#httpsResponse) |  | handles the https request result |

<a name="baseUri"></a>

## baseUri : <code>string</code>
**Kind**: global constant
**Default**: <code>&quot;https://apiv2.gofile.io/&quot;</code>
<a name="httpsResponse"></a>

## httpsResponse : <code>function</code>
Callback for getting response from https call

**Kind**: global typedef

| Param | Type | Description |
| --- | --- | --- |
| err | <code>Error</code> | error of https request |
| body | <code>string</code> \| <code>\*</code> | body of https response |

## License

MIT © [BDream](https://github.com/404ProgramNotFound)
