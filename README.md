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
    * [new apiGofile(email, token)](#new_apiGofile_new)
    * [.email](#apiGofile+email)
    * [.token](#apiGofile+token)
    * [.getBestServer(callback)](#apiGofile+getBestServer)
    * [.getAccountInfo(token, callback)](#apiGofile+getAccountInfo)
    * [.getUploadList(token, callback)](#apiGofile+getUploadList)
    * [.deleteUpload(name, callback)](#apiGofile+deleteUpload)

<a name="new_apiGofile_new"></a>

### new apiGofile(email, token)

| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | your email |
| token | <code>string</code> | your apikey on profile page |

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
| your | account apikey |

<a name="apiGofile+getBestServer"></a>

### apiGofile.getBestServer(callback)
The server chosen with this function will have better connection quality.

**Kind**: instance method of [<code>apiGofile</code>](#apiGofile)

| Param | Type | Description |
| --- | --- | --- |
| callback | [<code>httpsResponse</code>](#httpsResponse) | handles the https request result |

<a name="apiGofile+getAccountInfo"></a>

### apiGofile.getAccountInfo(token, callback)
 Data returned are : email, account type (e.g. donor, standar), file count, file size.

**Kind**: instance method of [<code>apiGofile</code>](#apiGofile)

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | your token or someone else token (api key in profile page) |
| callback | [<code>httpsResponse</code>](#httpsResponse) | handles the https request result |

<a name="apiGofile+getUploadList"></a>

### apiGofile.getUploadList(token, callback)
 Data returned are all upload with all data of file uploaded.

**Kind**: instance method of [<code>apiGofile</code>](#apiGofile)

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | your token or someone else token (api key in profile page) |
| callback | [<code>httpsResponse</code>](#httpsResponse) | handles the https request result |

<a name="apiGofile+deleteUpload"></a>

### apiGofile.deleteUpload(name, callback)
 It delete all file in all upload with the file inside.

**Kind**: instance method of [<code>apiGofile</code>](#apiGofile)

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | your token or someone else token (api key in profile page) |
| callback | [<code>httpsResponse</code>](#httpsResponse) | handles the https request result |

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