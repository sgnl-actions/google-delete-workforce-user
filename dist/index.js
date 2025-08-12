// SGNL Job Script - Auto-generated bundle
'use strict';

var require$$1$4 = require('child_process');
var require$$0$2 = require('fs');
var require$$1 = require('https');
var require$$3 = require('stream');
var require$$1$1 = require('os');
var require$$0$3 = require('events');
var require$$1$2 = require('process');
var require$$2 = require('util');
var require$$2$1 = require('path');
var require$$0$4 = require('crypto');
var require$$1$3 = require('querystring');
var require$$0$5 = require('buffer');
var require$$0$7 = require('net');
var require$$1$6 = require('tls');
var require$$2$2 = require('assert');
var require$$1$5 = require('tty');
var require$$0$6 = require('http');
var require$$5 = require('url');
var http = require('node:http');
var https = require('node:https');
var zlib = require('node:zlib');
var Stream = require('node:stream');
var node_buffer = require('node:buffer');
var node_util = require('node:util');
var node_url = require('node:url');
var node_net = require('node:net');
var node_fs = require('node:fs');
require('node:path');

function _mergeNamespaces(n, m) {
	m.forEach(function (e) {
		e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
			if (k !== 'default' && !(k in n)) {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	});
	return Object.freeze(n);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var src$5 = {};

var googleauth = {};

var src$4 = {};

var gaxios = {};

var extend;
var hasRequiredExtend;

function requireExtend () {
	if (hasRequiredExtend) return extend;
	hasRequiredExtend = 1;

	var hasOwn = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var defineProperty = Object.defineProperty;
	var gOPD = Object.getOwnPropertyDescriptor;

	var isArray = function isArray(arr) {
		if (typeof Array.isArray === 'function') {
			return Array.isArray(arr);
		}

		return toStr.call(arr) === '[object Array]';
	};

	var isPlainObject = function isPlainObject(obj) {
		if (!obj || toStr.call(obj) !== '[object Object]') {
			return false;
		}

		var hasOwnConstructor = hasOwn.call(obj, 'constructor');
		var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
		// Not own constructor property must be Object
		if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		var key;
		for (key in obj) { /**/ }

		return typeof key === 'undefined' || hasOwn.call(obj, key);
	};

	// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
	var setProperty = function setProperty(target, options) {
		if (defineProperty && options.name === '__proto__') {
			defineProperty(target, options.name, {
				enumerable: true,
				configurable: true,
				value: options.newValue,
				writable: true
			});
		} else {
			target[options.name] = options.newValue;
		}
	};

	// Return undefined instead of __proto__ if '__proto__' is not an own property
	var getProperty = function getProperty(obj, name) {
		if (name === '__proto__') {
			if (!hasOwn.call(obj, name)) {
				return void 0;
			} else if (gOPD) {
				// In early versions of node, obj['__proto__'] is buggy when obj has
				// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
				return gOPD(obj, name).value;
			}
		}

		return obj[name];
	};

	extend = function extend() {
		var options, name, src, copy, copyIsArray, clone;
		var target = arguments[0];
		var i = 1;
		var length = arguments.length;
		var deep = false;

		// Handle a deep copy situation
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		}
		if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
			target = {};
		}

		for (; i < length; ++i) {
			options = arguments[i];
			// Only deal with non-null/undefined values
			if (options != null) {
				// Extend the base object
				for (name in options) {
					src = getProperty(target, name);
					copy = getProperty(options, name);

					// Prevent never-ending loop
					if (target !== copy) {
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && isArray(src) ? src : [];
							} else {
								clone = src && isPlainObject(src) ? src : {};
							}

							// Never move original objects, clone them
							setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

						// Don't bring in undefined values
						} else if (typeof copy !== 'undefined') {
							setProperty(target, { name: name, newValue: copy });
						}
					}
				}
			}
		}

		// Return the modified object
		return target;
	};
	return extend;
}

var common$1 = {};

var name$1 = "gaxios";
var version$1 = "7.1.1";
var description$1 = "A simple common HTTP client specifically for Google APIs and services.";
var main$1 = "build/cjs/src/index.js";
var types$1 = "build/cjs/src/index.d.ts";
var files$1 = [
	"build/"
];
var exports$1 = {
	".": {
		"import": {
			types: "./build/esm/src/index.d.ts",
			"default": "./build/esm/src/index.js"
		},
		require: {
			types: "./build/cjs/src/index.d.ts",
			"default": "./build/cjs/src/index.js"
		}
	}
};
var scripts$1 = {
	lint: "gts check --no-inline-config",
	test: "c8 mocha build/esm/test",
	"presystem-test": "npm run compile",
	"system-test": "mocha build/esm/system-test --timeout 80000",
	compile: "tsc -b ./tsconfig.json ./tsconfig.cjs.json && node utils/enable-esm.mjs",
	fix: "gts fix",
	prepare: "npm run compile",
	pretest: "npm run compile",
	webpack: "webpack",
	"prebrowser-test": "npm run compile",
	"browser-test": "node build/browser-test/browser-test-runner.js",
	docs: "jsdoc -c .jsdoc.js",
	"docs-test": "linkinator docs",
	"predocs-test": "npm run docs",
	"samples-test": "cd samples/ && npm link ../ && npm test && cd ../",
	prelint: "cd samples; npm link ../; npm install",
	clean: "gts clean"
};
var repository$1 = "googleapis/gaxios";
var keywords$1 = [
	"google"
];
var engines$1 = {
	node: ">=18"
};
var author$1 = "Google, LLC";
var license$1 = "Apache-2.0";
var devDependencies$1 = {
	"@babel/plugin-proposal-private-methods": "^7.18.6",
	"@types/cors": "^2.8.6",
	"@types/express": "^5.0.0",
	"@types/extend": "^3.0.1",
	"@types/mocha": "^10.0.10",
	"@types/multiparty": "4.2.1",
	"@types/mv": "^2.1.0",
	"@types/ncp": "^2.0.1",
	"@types/node": "^22.0.0",
	"@types/sinon": "^17.0.0",
	"@types/tmp": "0.2.6",
	assert: "^2.0.0",
	browserify: "^17.0.0",
	c8: "^10.0.0",
	cors: "^2.8.5",
	express: "^5.0.0",
	gts: "^6.0.0",
	"is-docker": "^3.0.0",
	jsdoc: "^4.0.0",
	"jsdoc-fresh": "^4.0.0",
	"jsdoc-region-tag": "^3.0.0",
	karma: "^6.0.0",
	"karma-chrome-launcher": "^3.0.0",
	"karma-coverage": "^2.0.0",
	"karma-firefox-launcher": "^2.0.0",
	"karma-mocha": "^2.0.0",
	"karma-remap-coverage": "^0.1.5",
	"karma-sourcemap-loader": "^0.4.0",
	"karma-webpack": "^5.0.1",
	linkinator: "^6.1.2",
	mocha: "^11.1.0",
	multiparty: "^4.2.1",
	mv: "^2.1.1",
	ncp: "^2.0.0",
	nock: "^14.0.0-beta.13",
	"null-loader": "^4.0.0",
	"pack-n-play": "^3.0.0",
	puppeteer: "^24.0.0",
	sinon: "^20.0.0",
	"stream-browserify": "^3.0.0",
	tmp: "0.2.3",
	"ts-loader": "^9.5.2",
	typescript: "^5.8.3",
	webpack: "^5.35.0",
	"webpack-cli": "^6.0.1"
};
var dependencies$1 = {
	extend: "^3.0.2",
	"https-proxy-agent": "^7.0.1",
	"node-fetch": "^3.3.2"
};
var require$$0$1 = {
	name: name$1,
	version: version$1,
	description: description$1,
	main: main$1,
	types: types$1,
	files: files$1,
	exports: exports$1,
	scripts: scripts$1,
	repository: repository$1,
	keywords: keywords$1,
	engines: engines$1,
	author: author$1,
	license: license$1,
	devDependencies: devDependencies$1,
	dependencies: dependencies$1
};

var util$1;
var hasRequiredUtil$1;

function requireUtil$1 () {
	if (hasRequiredUtil$1) return util$1;
	hasRequiredUtil$1 = 1;
	// Copyright 2023 Google LLC
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//    http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	const pkg = require$$0$1;
	util$1 = { pkg };
	
	return util$1;
}

var hasRequiredCommon$1;

function requireCommon$1 () {
	if (hasRequiredCommon$1) return common$1;
	hasRequiredCommon$1 = 1;
	(function (exports) {
		// Copyright 2018 Google LLC
		// Licensed under the Apache License, Version 2.0 (the "License");
		// you may not use this file except in compliance with the License.
		// You may obtain a copy of the License at
		//
		//    http://www.apache.org/licenses/LICENSE-2.0
		//
		// Unless required by applicable law or agreed to in writing, software
		// distributed under the License is distributed on an "AS IS" BASIS,
		// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		// See the License for the specific language governing permissions and
		// limitations under the License.
		var __importDefault = (common$1 && common$1.__importDefault) || function (mod) {
		    return (mod && mod.__esModule) ? mod : { "default": mod };
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.GaxiosError = exports.GAXIOS_ERROR_SYMBOL = void 0;
		exports.defaultErrorRedactor = defaultErrorRedactor;
		const extend_1 = __importDefault(requireExtend());
		const util_cjs_1 = __importDefault(requireUtil$1());
		const pkg = util_cjs_1.default.pkg;
		/**
		 * Support `instanceof` operator for `GaxiosError`s in different versions of this library.
		 *
		 * @see {@link GaxiosError[Symbol.hasInstance]}
		 */
		exports.GAXIOS_ERROR_SYMBOL = Symbol.for(`${pkg.name}-gaxios-error`);
		class GaxiosError extends Error {
		    config;
		    response;
		    /**
		     * An error code.
		     * Can be a system error code, DOMException error name, or any error's 'code' property where it is a `string`.
		     *
		     * It is only a `number` when the cause is sourced from an API-level error (AIP-193).
		     *
		     * @see {@link https://nodejs.org/api/errors.html#errorcode error.code}
		     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMException#error_names DOMException#error_names}
		     * @see {@link https://google.aip.dev/193#http11json-representation AIP-193}
		     *
		     * @example
		     * 'ECONNRESET'
		     *
		     * @example
		     * 'TimeoutError'
		     *
		     * @example
		     * 500
		     */
		    code;
		    /**
		     * An HTTP Status code.
		     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Response/status Response#status}
		     *
		     * @example
		     * 500
		     */
		    status;
		    /**
		     * @deprecated use {@link GaxiosError.cause} instead.
		     *
		     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause Error#cause}
		     *
		     * @privateRemarks
		     *
		     * We will want to remove this property later as the modern `cause` property is better suited
		     * for displaying and relaying nested errors. Keeping this here makes the resulting
		     * error log larger than it needs to be.
		     *
		     */
		    error;
		    /**
		     * Support `instanceof` operator for `GaxiosError` across builds/duplicated files.
		     *
		     * @see {@link GAXIOS_ERROR_SYMBOL}
		     * @see {@link GaxiosError[Symbol.hasInstance]}
		     * @see {@link https://github.com/microsoft/TypeScript/issues/13965#issuecomment-278570200}
		     * @see {@link https://stackoverflow.com/questions/46618852/require-and-instanceof}
		     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/@@hasInstance#reverting_to_default_instanceof_behavior}
		     */
		    [exports.GAXIOS_ERROR_SYMBOL] = pkg.version;
		    /**
		     * Support `instanceof` operator for `GaxiosError` across builds/duplicated files.
		     *
		     * @see {@link GAXIOS_ERROR_SYMBOL}
		     * @see {@link GaxiosError[GAXIOS_ERROR_SYMBOL]}
		     */
		    static [Symbol.hasInstance](instance) {
		        if (instance &&
		            typeof instance === 'object' &&
		            exports.GAXIOS_ERROR_SYMBOL in instance &&
		            instance[exports.GAXIOS_ERROR_SYMBOL] === pkg.version) {
		            return true;
		        }
		        // fallback to native
		        return Function.prototype[Symbol.hasInstance].call(GaxiosError, instance);
		    }
		    constructor(message, config, response, cause) {
		        super(message, { cause });
		        this.config = config;
		        this.response = response;
		        this.error = cause instanceof Error ? cause : undefined;
		        // deep-copy config as we do not want to mutate
		        // the existing config for future retries/use
		        this.config = (0, extend_1.default)(true, {}, config);
		        if (this.response) {
		            this.response.config = (0, extend_1.default)(true, {}, this.response.config);
		        }
		        if (this.response) {
		            try {
		                this.response.data = translateData(this.config.responseType, 
		                // workaround for `node-fetch`'s `.data` deprecation...
		                this.response?.bodyUsed ? this.response?.data : undefined);
		            }
		            catch {
		                // best effort - don't throw an error within an error
		                // we could set `this.response.config.responseType = 'unknown'`, but
		                // that would mutate future calls with this config object.
		            }
		            this.status = this.response.status;
		        }
		        if (cause instanceof DOMException) {
		            // The DOMException's equivalent to code is its name
		            // E.g.: name = `TimeoutError`, code = number
		            // https://developer.mozilla.org/en-US/docs/Web/API/DOMException/name
		            this.code = cause.name;
		        }
		        else if (cause &&
		            typeof cause === 'object' &&
		            'code' in cause &&
		            (typeof cause.code === 'string' || typeof cause.code === 'number')) {
		            this.code = cause.code;
		        }
		    }
		    /**
		     * An AIP-193 conforming error extractor.
		     *
		     * @see {@link https://google.aip.dev/193#http11json-representation AIP-193}
		     *
		     * @internal
		     * @expiremental
		     *
		     * @param res the response object
		     * @returns the extracted error information
		     */
		    static extractAPIErrorFromResponse(res, defaultErrorMessage = 'The request failed') {
		        let message = defaultErrorMessage;
		        // Use res.data as the error message
		        if (typeof res.data === 'string') {
		            message = res.data;
		        }
		        if (res.data &&
		            typeof res.data === 'object' &&
		            'error' in res.data &&
		            res.data.error &&
		            !res.ok) {
		            if (typeof res.data.error === 'string') {
		                return {
		                    message: res.data.error,
		                    code: res.status,
		                    status: res.statusText,
		                };
		            }
		            if (typeof res.data.error === 'object') {
		                // extract status from data.message
		                message =
		                    'message' in res.data.error &&
		                        typeof res.data.error.message === 'string'
		                        ? res.data.error.message
		                        : message;
		                // extract status from data.error
		                const status = 'status' in res.data.error &&
		                    typeof res.data.error.status === 'string'
		                    ? res.data.error.status
		                    : res.statusText;
		                // extract code from data.error
		                const code = 'code' in res.data.error && typeof res.data.error.code === 'number'
		                    ? res.data.error.code
		                    : res.status;
		                if ('errors' in res.data.error &&
		                    Array.isArray(res.data.error.errors)) {
		                    const errorMessages = [];
		                    for (const e of res.data.error.errors) {
		                        if (typeof e === 'object' &&
		                            'message' in e &&
		                            typeof e.message === 'string') {
		                            errorMessages.push(e.message);
		                        }
		                    }
		                    return Object.assign({
		                        message: errorMessages.join('\n') || message,
		                        code,
		                        status,
		                    }, res.data.error);
		                }
		                return Object.assign({
		                    message,
		                    code,
		                    status,
		                }, res.data.error);
		            }
		        }
		        return {
		            message,
		            code: res.status,
		            status: res.statusText,
		        };
		    }
		}
		exports.GaxiosError = GaxiosError;
		function translateData(responseType, data) {
		    switch (responseType) {
		        case 'stream':
		            return data;
		        case 'json':
		            return JSON.parse(JSON.stringify(data));
		        case 'arraybuffer':
		            return JSON.parse(Buffer.from(data).toString('utf8'));
		        case 'blob':
		            return JSON.parse(data.text());
		        default:
		            return data;
		    }
		}
		/**
		 * An experimental error redactor.
		 *
		 * @param config Config to potentially redact properties of
		 * @param response Config to potentially redact properties of
		 *
		 * @experimental
		 */
		function defaultErrorRedactor(data) {
		    const REDACT = '<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.';
		    function redactHeaders(headers) {
		        if (!headers)
		            return;
		        headers.forEach((_, key) => {
		            // any casing of `Authentication`
		            // any casing of `Authorization`
		            // anything containing secret, such as 'client secret'
		            if (/^authentication$/i.test(key) ||
		                /^authorization$/i.test(key) ||
		                /secret/i.test(key))
		                headers.set(key, REDACT);
		        });
		    }
		    function redactString(obj, key) {
		        if (typeof obj === 'object' &&
		            obj !== null &&
		            typeof obj[key] === 'string') {
		            const text = obj[key];
		            if (/grant_type=/i.test(text) ||
		                /assertion=/i.test(text) ||
		                /secret/i.test(text)) {
		                obj[key] = REDACT;
		            }
		        }
		    }
		    function redactObject(obj) {
		        if (!obj || typeof obj !== 'object') {
		            return;
		        }
		        else if (obj instanceof FormData ||
		            obj instanceof URLSearchParams ||
		            // support `node-fetch` FormData/URLSearchParams
		            ('forEach' in obj && 'set' in obj)) {
		            obj.forEach((_, key) => {
		                if (['grant_type', 'assertion'].includes(key) || /secret/.test(key)) {
		                    obj.set(key, REDACT);
		                }
		            });
		        }
		        else {
		            if ('grant_type' in obj) {
		                obj['grant_type'] = REDACT;
		            }
		            if ('assertion' in obj) {
		                obj['assertion'] = REDACT;
		            }
		            if ('client_secret' in obj) {
		                obj['client_secret'] = REDACT;
		            }
		        }
		    }
		    if (data.config) {
		        redactHeaders(data.config.headers);
		        redactString(data.config, 'data');
		        redactObject(data.config.data);
		        redactString(data.config, 'body');
		        redactObject(data.config.body);
		        if (data.config.url.searchParams.has('token')) {
		            data.config.url.searchParams.set('token', REDACT);
		        }
		        if (data.config.url.searchParams.has('client_secret')) {
		            data.config.url.searchParams.set('client_secret', REDACT);
		        }
		    }
		    if (data.response) {
		        defaultErrorRedactor({ config: data.response.config });
		        redactHeaders(data.response.headers);
		        // workaround for `node-fetch`'s `.data` deprecation...
		        if (data.response.bodyUsed) {
		            redactString(data.response, 'data');
		            redactObject(data.response.data);
		        }
		    }
		    return data;
		}
		
	} (common$1));
	return common$1;
}

var retry = {};

var hasRequiredRetry;

function requireRetry () {
	if (hasRequiredRetry) return retry;
	hasRequiredRetry = 1;
	// Copyright 2018 Google LLC
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//    http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(retry, "__esModule", { value: true });
	retry.getRetryConfig = getRetryConfig;
	async function getRetryConfig(err) {
	    let config = getConfig(err);
	    if (!err || !err.config || (!config && !err.config.retry)) {
	        return { shouldRetry: false };
	    }
	    config = config || {};
	    config.currentRetryAttempt = config.currentRetryAttempt || 0;
	    config.retry =
	        config.retry === undefined || config.retry === null ? 3 : config.retry;
	    config.httpMethodsToRetry = config.httpMethodsToRetry || [
	        'GET',
	        'HEAD',
	        'PUT',
	        'OPTIONS',
	        'DELETE',
	    ];
	    config.noResponseRetries =
	        config.noResponseRetries === undefined || config.noResponseRetries === null
	            ? 2
	            : config.noResponseRetries;
	    config.retryDelayMultiplier = config.retryDelayMultiplier
	        ? config.retryDelayMultiplier
	        : 2;
	    config.timeOfFirstRequest = config.timeOfFirstRequest
	        ? config.timeOfFirstRequest
	        : Date.now();
	    config.totalTimeout = config.totalTimeout
	        ? config.totalTimeout
	        : Number.MAX_SAFE_INTEGER;
	    config.maxRetryDelay = config.maxRetryDelay
	        ? config.maxRetryDelay
	        : Number.MAX_SAFE_INTEGER;
	    // If this wasn't in the list of status codes where we want
	    // to automatically retry, return.
	    const retryRanges = [
	        // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
	        // 1xx - Retry (Informational, request still processing)
	        // 2xx - Do not retry (Success)
	        // 3xx - Do not retry (Redirect)
	        // 4xx - Do not retry (Client errors)
	        // 408 - Retry ("Request Timeout")
	        // 429 - Retry ("Too Many Requests")
	        // 5xx - Retry (Server errors)
	        [100, 199],
	        [408, 408],
	        [429, 429],
	        [500, 599],
	    ];
	    config.statusCodesToRetry = config.statusCodesToRetry || retryRanges;
	    // Put the config back into the err
	    err.config.retryConfig = config;
	    // Determine if we should retry the request
	    const shouldRetryFn = config.shouldRetry || shouldRetryRequest;
	    if (!(await shouldRetryFn(err))) {
	        return { shouldRetry: false, config: err.config };
	    }
	    const delay = getNextRetryDelay(config);
	    // We're going to retry!  Increment the counter.
	    err.config.retryConfig.currentRetryAttempt += 1;
	    // Create a promise that invokes the retry after the backOffDelay
	    const backoff = config.retryBackoff
	        ? config.retryBackoff(err, delay)
	        : new Promise(resolve => {
	            setTimeout(resolve, delay);
	        });
	    // Notify the user if they added an `onRetryAttempt` handler
	    if (config.onRetryAttempt) {
	        await config.onRetryAttempt(err);
	    }
	    // Return the promise in which recalls Gaxios to retry the request
	    await backoff;
	    return { shouldRetry: true, config: err.config };
	}
	/**
	 * Determine based on config if we should retry the request.
	 * @param err The GaxiosError passed to the interceptor.
	 */
	function shouldRetryRequest(err) {
	    const config = getConfig(err);
	    if ((err.config.signal?.aborted && err.code !== 'TimeoutError') ||
	        err.code === 'AbortError') {
	        return false;
	    }
	    // If there's no config, or retries are disabled, return.
	    if (!config || config.retry === 0) {
	        return false;
	    }
	    // Check if this error has no response (ETIMEDOUT, ENOTFOUND, etc)
	    if (!err.response &&
	        (config.currentRetryAttempt || 0) >= config.noResponseRetries) {
	        return false;
	    }
	    // Only retry with configured HttpMethods.
	    if (!config.httpMethodsToRetry ||
	        !config.httpMethodsToRetry.includes(err.config.method?.toUpperCase() || 'GET')) {
	        return false;
	    }
	    // If this wasn't in the list of status codes where we want
	    // to automatically retry, return.
	    if (err.response && err.response.status) {
	        let isInRange = false;
	        for (const [min, max] of config.statusCodesToRetry) {
	            const status = err.response.status;
	            if (status >= min && status <= max) {
	                isInRange = true;
	                break;
	            }
	        }
	        if (!isInRange) {
	            return false;
	        }
	    }
	    // If we are out of retry attempts, return
	    config.currentRetryAttempt = config.currentRetryAttempt || 0;
	    if (config.currentRetryAttempt >= config.retry) {
	        return false;
	    }
	    return true;
	}
	/**
	 * Acquire the raxConfig object from an GaxiosError if available.
	 * @param err The Gaxios error with a config object.
	 */
	function getConfig(err) {
	    if (err && err.config && err.config.retryConfig) {
	        return err.config.retryConfig;
	    }
	    return;
	}
	/**
	 * Gets the delay to wait before the next retry.
	 *
	 * @param {RetryConfig} config The current set of retry options
	 * @returns {number} the amount of ms to wait before the next retry attempt.
	 */
	function getNextRetryDelay(config) {
	    // Calculate time to wait with exponential backoff.
	    // If this is the first retry, look for a configured retryDelay.
	    const retryDelay = config.currentRetryAttempt
	        ? 0
	        : (config.retryDelay ?? 100);
	    // Formula: retryDelay + ((retryDelayMultiplier^currentRetryAttempt - 1 / 2) * 1000)
	    const calculatedDelay = retryDelay +
	        ((Math.pow(config.retryDelayMultiplier, config.currentRetryAttempt) - 1) /
	            2) *
	            1000;
	    const maxAllowableDelay = config.totalTimeout - (Date.now() - config.timeOfFirstRequest);
	    return Math.min(calculatedDelay, maxAllowableDelay, config.maxRetryDelay);
	}
	
	return retry;
}

var interceptor = {};

var hasRequiredInterceptor;

function requireInterceptor () {
	if (hasRequiredInterceptor) return interceptor;
	hasRequiredInterceptor = 1;
	// Copyright 2024 Google LLC
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//    http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(interceptor, "__esModule", { value: true });
	interceptor.GaxiosInterceptorManager = void 0;
	/**
	 * Class to manage collections of GaxiosInterceptors for both requests and responses.
	 */
	class GaxiosInterceptorManager extends Set {
	}
	interceptor.GaxiosInterceptorManager = GaxiosInterceptorManager;
	
	return interceptor;
}

var hasRequiredGaxios;

function requireGaxios () {
	if (hasRequiredGaxios) return gaxios;
	hasRequiredGaxios = 1;
	// Copyright 2018 Google LLC
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//    http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	var __importDefault = (gaxios && gaxios.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	var _a;
	Object.defineProperty(gaxios, "__esModule", { value: true });
	gaxios.Gaxios = void 0;
	const extend_1 = __importDefault(requireExtend());
	const https_1 = require$$1;
	const common_js_1 = requireCommon$1();
	const retry_js_1 = requireRetry();
	const stream_1 = require$$3;
	const interceptor_js_1 = requireInterceptor();
	const randomUUID = async () => globalThis.crypto?.randomUUID() || (await import('crypto')).randomUUID();
	class Gaxios {
	    agentCache = new Map();
	    /**
	     * Default HTTP options that will be used for every HTTP request.
	     */
	    defaults;
	    /**
	     * Interceptors
	     */
	    interceptors;
	    /**
	     * The Gaxios class is responsible for making HTTP requests.
	     * @param defaults The default set of options to be used for this instance.
	     */
	    constructor(defaults) {
	        this.defaults = defaults || {};
	        this.interceptors = {
	            request: new interceptor_js_1.GaxiosInterceptorManager(),
	            response: new interceptor_js_1.GaxiosInterceptorManager(),
	        };
	    }
	    /**
	     * A {@link fetch `fetch`} compliant API for {@link Gaxios}.
	     *
	     * @remarks
	     *
	     * This is useful as a drop-in replacement for `fetch` API usage.
	     *
	     * @example
	     *
	     * ```ts
	     * const gaxios = new Gaxios();
	     * const myFetch: typeof fetch = (...args) => gaxios.fetch(...args);
	     * await myFetch('https://example.com');
	     * ```
	     *
	     * @param args `fetch` API or `Gaxios#request` parameters
	     * @returns the {@link Response} with Gaxios-added properties
	     */
	    fetch(...args) {
	        // Up to 2 parameters in either overload
	        const input = args[0];
	        const init = args[1];
	        let url = undefined;
	        const headers = new Headers();
	        // prepare URL
	        if (typeof input === 'string') {
	            url = new URL(input);
	        }
	        else if (input instanceof URL) {
	            url = input;
	        }
	        else if (input && input.url) {
	            url = new URL(input.url);
	        }
	        // prepare headers
	        if (input && typeof input === 'object' && 'headers' in input) {
	            _a.mergeHeaders(headers, input.headers);
	        }
	        if (init) {
	            _a.mergeHeaders(headers, new Headers(init.headers));
	        }
	        // prepare request
	        if (typeof input === 'object' && !(input instanceof URL)) {
	            // input must have been a non-URL object
	            return this.request({ ...init, ...input, headers, url });
	        }
	        else {
	            // input must have been a string or URL
	            return this.request({ ...init, headers, url });
	        }
	    }
	    /**
	     * Perform an HTTP request with the given options.
	     * @param opts Set of HTTP options that will be used for this HTTP request.
	     */
	    async request(opts = {}) {
	        let prepared = await this.#prepareRequest(opts);
	        prepared = await this.#applyRequestInterceptors(prepared);
	        return this.#applyResponseInterceptors(this._request(prepared));
	    }
	    async _defaultAdapter(config) {
	        const fetchImpl = config.fetchImplementation ||
	            this.defaults.fetchImplementation ||
	            (await _a.#getFetch());
	        // node-fetch v3 warns when `data` is present
	        // https://github.com/node-fetch/node-fetch/issues/1000
	        const preparedOpts = { ...config };
	        delete preparedOpts.data;
	        const res = (await fetchImpl(config.url, preparedOpts));
	        const data = await this.getResponseData(config, res);
	        if (!Object.getOwnPropertyDescriptor(res, 'data')?.configurable) {
	            // Work-around for `node-fetch` v3 as accessing `data` would otherwise throw
	            Object.defineProperties(res, {
	                data: {
	                    configurable: true,
	                    writable: true,
	                    enumerable: true,
	                    value: data,
	                },
	            });
	        }
	        // Keep object as an instance of `Response`
	        return Object.assign(res, { config, data });
	    }
	    /**
	     * Internal, retryable version of the `request` method.
	     * @param opts Set of HTTP options that will be used for this HTTP request.
	     */
	    async _request(opts) {
	        try {
	            let translatedResponse;
	            if (opts.adapter) {
	                translatedResponse = await opts.adapter(opts, this._defaultAdapter.bind(this));
	            }
	            else {
	                translatedResponse = await this._defaultAdapter(opts);
	            }
	            if (!opts.validateStatus(translatedResponse.status)) {
	                if (opts.responseType === 'stream') {
	                    const response = [];
	                    for await (const chunk of (opts.data ?? [])) {
	                        response.push(chunk);
	                    }
	                    translatedResponse.data = response;
	                }
	                const errorInfo = common_js_1.GaxiosError.extractAPIErrorFromResponse(translatedResponse, `Request failed with status code ${translatedResponse.status}`);
	                throw new common_js_1.GaxiosError(errorInfo?.message, opts, translatedResponse, errorInfo);
	            }
	            return translatedResponse;
	        }
	        catch (e) {
	            let err;
	            if (e instanceof common_js_1.GaxiosError) {
	                err = e;
	            }
	            else if (e instanceof Error) {
	                err = new common_js_1.GaxiosError(e.message, opts, undefined, e);
	            }
	            else {
	                err = new common_js_1.GaxiosError('Unexpected Gaxios Error', opts, undefined, e);
	            }
	            const { shouldRetry, config } = await (0, retry_js_1.getRetryConfig)(err);
	            if (shouldRetry && config) {
	                err.config.retryConfig.currentRetryAttempt =
	                    config.retryConfig.currentRetryAttempt;
	                // The error's config could be redacted - therefore we only want to
	                // copy the retry state over to the existing config
	                opts.retryConfig = err.config?.retryConfig;
	                // re-prepare timeout for the next request
	                this.#appendTimeoutToSignal(opts);
	                return this._request(opts);
	            }
	            if (opts.errorRedactor) {
	                opts.errorRedactor(err);
	            }
	            throw err;
	        }
	    }
	    async getResponseData(opts, res) {
	        if (opts.maxContentLength &&
	            res.headers.has('content-length') &&
	            opts.maxContentLength <
	                Number.parseInt(res.headers?.get('content-length') || '')) {
	            throw new common_js_1.GaxiosError("Response's `Content-Length` is over the limit.", opts, Object.assign(res, { config: opts }));
	        }
	        switch (opts.responseType) {
	            case 'stream':
	                return res.body;
	            case 'json':
	                return res.json();
	            case 'arraybuffer':
	                return res.arrayBuffer();
	            case 'blob':
	                return res.blob();
	            case 'text':
	                return res.text();
	            default:
	                return this.getResponseDataFromContentType(res);
	        }
	    }
	    #urlMayUseProxy(url, noProxy = []) {
	        const candidate = new URL(url);
	        const noProxyList = [...noProxy];
	        const noProxyEnvList = (process.env.NO_PROXY ?? process.env.no_proxy)?.split(',') || [];
	        for (const rule of noProxyEnvList) {
	            noProxyList.push(rule.trim());
	        }
	        for (const rule of noProxyList) {
	            // Match regex
	            if (rule instanceof RegExp) {
	                if (rule.test(candidate.toString())) {
	                    return false;
	                }
	            }
	            // Match URL
	            else if (rule instanceof URL) {
	                if (rule.origin === candidate.origin) {
	                    return false;
	                }
	            }
	            // Match string regex
	            else if (rule.startsWith('*.') || rule.startsWith('.')) {
	                const cleanedRule = rule.replace(/^\*\./, '.');
	                if (candidate.hostname.endsWith(cleanedRule)) {
	                    return false;
	                }
	            }
	            // Basic string match
	            else if (rule === candidate.origin ||
	                rule === candidate.hostname ||
	                rule === candidate.href) {
	                return false;
	            }
	        }
	        return true;
	    }
	    /**
	     * Applies the request interceptors. The request interceptors are applied after the
	     * call to prepareRequest is completed.
	     *
	     * @param {GaxiosOptionsPrepared} options The current set of options.
	     *
	     * @returns {Promise<GaxiosOptionsPrepared>} Promise that resolves to the set of options or response after interceptors are applied.
	     */
	    async #applyRequestInterceptors(options) {
	        let promiseChain = Promise.resolve(options);
	        for (const interceptor of this.interceptors.request.values()) {
	            if (interceptor) {
	                promiseChain = promiseChain.then(interceptor.resolved, interceptor.rejected);
	            }
	        }
	        return promiseChain;
	    }
	    /**
	     * Applies the response interceptors. The response interceptors are applied after the
	     * call to request is made.
	     *
	     * @param {GaxiosOptionsPrepared} options The current set of options.
	     *
	     * @returns {Promise<GaxiosOptionsPrepared>} Promise that resolves to the set of options or response after interceptors are applied.
	     */
	    async #applyResponseInterceptors(response) {
	        let promiseChain = Promise.resolve(response);
	        for (const interceptor of this.interceptors.response.values()) {
	            if (interceptor) {
	                promiseChain = promiseChain.then(interceptor.resolved, interceptor.rejected);
	            }
	        }
	        return promiseChain;
	    }
	    /**
	     * Validates the options, merges them with defaults, and prepare request.
	     *
	     * @param options The original options passed from the client.
	     * @returns Prepared options, ready to make a request
	     */
	    async #prepareRequest(options) {
	        // Prepare Headers - copy in order to not mutate the original objects
	        const preparedHeaders = new Headers(this.defaults.headers);
	        _a.mergeHeaders(preparedHeaders, options.headers);
	        // Merge options
	        const opts = (0, extend_1.default)(true, {}, this.defaults, options);
	        if (!opts.url) {
	            throw new Error('URL is required.');
	        }
	        if (opts.baseURL) {
	            opts.url = new URL(opts.url, opts.baseURL);
	        }
	        // don't modify the properties of a default or provided URL
	        opts.url = new URL(opts.url);
	        if (opts.params) {
	            if (opts.paramsSerializer) {
	                let additionalQueryParams = opts.paramsSerializer(opts.params);
	                if (additionalQueryParams.startsWith('?')) {
	                    additionalQueryParams = additionalQueryParams.slice(1);
	                }
	                const prefix = opts.url.toString().includes('?') ? '&' : '?';
	                opts.url = opts.url + prefix + additionalQueryParams;
	            }
	            else {
	                const url = opts.url instanceof URL ? opts.url : new URL(opts.url);
	                for (const [key, value] of new URLSearchParams(opts.params)) {
	                    url.searchParams.append(key, value);
	                }
	                opts.url = url;
	            }
	        }
	        if (typeof options.maxContentLength === 'number') {
	            opts.size = options.maxContentLength;
	        }
	        if (typeof options.maxRedirects === 'number') {
	            opts.follow = options.maxRedirects;
	        }
	        const shouldDirectlyPassData = typeof opts.data === 'string' ||
	            opts.data instanceof ArrayBuffer ||
	            opts.data instanceof Blob ||
	            // Node 18 does not have a global `File` object
	            (globalThis.File && opts.data instanceof File) ||
	            opts.data instanceof FormData ||
	            opts.data instanceof stream_1.Readable ||
	            opts.data instanceof ReadableStream ||
	            opts.data instanceof String ||
	            opts.data instanceof URLSearchParams ||
	            ArrayBuffer.isView(opts.data) || // `Buffer` (Node.js), `DataView`, `TypedArray`
	            /**
	             * @deprecated `node-fetch` or another third-party's request types
	             */
	            ['Blob', 'File', 'FormData'].includes(opts.data?.constructor?.name || '');
	        if (opts.multipart?.length) {
	            const boundary = await randomUUID();
	            preparedHeaders.set('content-type', `multipart/related; boundary=${boundary}`);
	            opts.body = stream_1.Readable.from(this.getMultipartRequest(opts.multipart, boundary));
	        }
	        else if (shouldDirectlyPassData) {
	            opts.body = opts.data;
	        }
	        else if (typeof opts.data === 'object') {
	            if (preparedHeaders.get('Content-Type') ===
	                'application/x-www-form-urlencoded') {
	                // If www-form-urlencoded content type has been set, but data is
	                // provided as an object, serialize the content
	                opts.body = opts.paramsSerializer
	                    ? opts.paramsSerializer(opts.data)
	                    : new URLSearchParams(opts.data);
	            }
	            else {
	                if (!preparedHeaders.has('content-type')) {
	                    preparedHeaders.set('content-type', 'application/json');
	                }
	                opts.body = JSON.stringify(opts.data);
	            }
	        }
	        else if (opts.data) {
	            opts.body = opts.data;
	        }
	        opts.validateStatus = opts.validateStatus || this.validateStatus;
	        opts.responseType = opts.responseType || 'unknown';
	        if (!preparedHeaders.has('accept') && opts.responseType === 'json') {
	            preparedHeaders.set('accept', 'application/json');
	        }
	        const proxy = opts.proxy ||
	            process?.env?.HTTPS_PROXY ||
	            process?.env?.https_proxy ||
	            process?.env?.HTTP_PROXY ||
	            process?.env?.http_proxy;
	        if (opts.agent) ;
	        else if (proxy && this.#urlMayUseProxy(opts.url, opts.noProxy)) {
	            const HttpsProxyAgent = await _a.#getProxyAgent();
	            if (this.agentCache.has(proxy)) {
	                opts.agent = this.agentCache.get(proxy);
	            }
	            else {
	                opts.agent = new HttpsProxyAgent(proxy, {
	                    cert: opts.cert,
	                    key: opts.key,
	                });
	                this.agentCache.set(proxy, opts.agent);
	            }
	        }
	        else if (opts.cert && opts.key) {
	            // Configure client for mTLS
	            if (this.agentCache.has(opts.key)) {
	                opts.agent = this.agentCache.get(opts.key);
	            }
	            else {
	                opts.agent = new https_1.Agent({
	                    cert: opts.cert,
	                    key: opts.key,
	                });
	                this.agentCache.set(opts.key, opts.agent);
	            }
	        }
	        if (typeof opts.errorRedactor !== 'function' &&
	            opts.errorRedactor !== false) {
	            opts.errorRedactor = common_js_1.defaultErrorRedactor;
	        }
	        if (opts.body && !('duplex' in opts)) {
	            /**
	             * required for Node.js and the type isn't available today
	             * @link https://github.com/nodejs/node/issues/46221
	             * @link https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1483
	             */
	            opts.duplex = 'half';
	        }
	        this.#appendTimeoutToSignal(opts);
	        return Object.assign(opts, {
	            headers: preparedHeaders,
	            url: opts.url instanceof URL ? opts.url : new URL(opts.url),
	        });
	    }
	    #appendTimeoutToSignal(opts) {
	        if (opts.timeout) {
	            const timeoutSignal = AbortSignal.timeout(opts.timeout);
	            if (opts.signal && !opts.signal.aborted) {
	                opts.signal = AbortSignal.any([opts.signal, timeoutSignal]);
	            }
	            else {
	                opts.signal = timeoutSignal;
	            }
	        }
	    }
	    /**
	     * By default, throw for any non-2xx status code
	     * @param status status code from the HTTP response
	     */
	    validateStatus(status) {
	        return status >= 200 && status < 300;
	    }
	    /**
	     * Attempts to parse a response by looking at the Content-Type header.
	     * @param {Response} response the HTTP response.
	     * @returns a promise that resolves to the response data.
	     */
	    async getResponseDataFromContentType(response) {
	        let contentType = response.headers.get('Content-Type');
	        if (contentType === null) {
	            // Maintain existing functionality by calling text()
	            return response.text();
	        }
	        contentType = contentType.toLowerCase();
	        if (contentType.includes('application/json')) {
	            let data = await response.text();
	            try {
	                data = JSON.parse(data);
	            }
	            catch {
	                // continue
	            }
	            return data;
	        }
	        else if (contentType.match(/^text\//)) {
	            return response.text();
	        }
	        else {
	            // If the content type is something not easily handled, just return the raw data (blob)
	            return response.blob();
	        }
	    }
	    /**
	     * Creates an async generator that yields the pieces of a multipart/related request body.
	     * This implementation follows the spec: https://www.ietf.org/rfc/rfc2387.txt. However, recursive
	     * multipart/related requests are not currently supported.
	     *
	     * @param {GaxioMultipartOptions[]} multipartOptions the pieces to turn into a multipart/related body.
	     * @param {string} boundary the boundary string to be placed between each part.
	     */
	    async *getMultipartRequest(multipartOptions, boundary) {
	        const finale = `--${boundary}--`;
	        for (const currentPart of multipartOptions) {
	            const partContentType = currentPart.headers.get('Content-Type') || 'application/octet-stream';
	            const preamble = `--${boundary}\r\nContent-Type: ${partContentType}\r\n\r\n`;
	            yield preamble;
	            if (typeof currentPart.content === 'string') {
	                yield currentPart.content;
	            }
	            else {
	                yield* currentPart.content;
	            }
	            yield '\r\n';
	        }
	        yield finale;
	    }
	    /**
	     * A cache for the lazily-loaded proxy agent.
	     *
	     * Should use {@link Gaxios[#getProxyAgent]} to retrieve.
	     */
	    // using `import` to dynamically import the types here
	    static #proxyAgent;
	    /**
	     * A cache for the lazily-loaded fetch library.
	     *
	     * Should use {@link Gaxios[#getFetch]} to retrieve.
	     */
	    //
	    static #fetch;
	    /**
	     * Imports, caches, and returns a proxy agent - if not already imported
	     *
	     * @returns A proxy agent
	     */
	    static async #getProxyAgent() {
	        this.#proxyAgent ||= (await Promise.resolve().then(function () { return index$1; })).HttpsProxyAgent;
	        return this.#proxyAgent;
	    }
	    static async #getFetch() {
	        const hasWindow = typeof window !== 'undefined' && !!window;
	        this.#fetch ||= hasWindow
	            ? window.fetch
	            : (await Promise.resolve().then(function () { return index; })).default;
	        return this.#fetch;
	    }
	    /**
	     * Merges headers.
	     * If the base headers do not exist a new `Headers` object will be returned.
	     *
	     * @remarks
	     *
	     * Using this utility can be helpful when the headers are not known to exist:
	     * - if they exist as `Headers`, that instance will be used
	     *   - it improves performance and allows users to use their existing references to their `Headers`
	     * - if they exist in another form (`HeadersInit`), they will be used to create a new `Headers` object
	     * - if the base headers do not exist a new `Headers` object will be created
	     *
	     * @param base headers to append/overwrite to
	     * @param append headers to append/overwrite with
	     * @returns the base headers instance with merged `Headers`
	     */
	    static mergeHeaders(base, ...append) {
	        base = base instanceof Headers ? base : new Headers(base);
	        for (const headers of append) {
	            const add = headers instanceof Headers ? headers : new Headers(headers);
	            add.forEach((value, key) => {
	                // set-cookie is the only header that would repeat.
	                // A bit of background: https://developer.mozilla.org/en-US/docs/Web/API/Headers/getSetCookie
	                key === 'set-cookie' ? base.append(key, value) : base.set(key, value);
	            });
	        }
	        return base;
	    }
	}
	gaxios.Gaxios = Gaxios;
	_a = Gaxios;
	
	return gaxios;
}

var hasRequiredSrc$5;

function requireSrc$5 () {
	if (hasRequiredSrc$5) return src$4;
	hasRequiredSrc$5 = 1;
	(function (exports) {
		// Copyright 2018 Google LLC
		// Licensed under the Apache License, Version 2.0 (the "License");
		// you may not use this file except in compliance with the License.
		// You may obtain a copy of the License at
		//
		//    http://www.apache.org/licenses/LICENSE-2.0
		//
		// Unless required by applicable law or agreed to in writing, software
		// distributed under the License is distributed on an "AS IS" BASIS,
		// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		// See the License for the specific language governing permissions and
		// limitations under the License.
		var __createBinding = (src$4 && src$4.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __exportStar = (src$4 && src$4.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.instance = exports.Gaxios = exports.GaxiosError = void 0;
		exports.request = request;
		const gaxios_js_1 = requireGaxios();
		Object.defineProperty(exports, "Gaxios", { enumerable: true, get: function () { return gaxios_js_1.Gaxios; } });
		var common_js_1 = requireCommon$1();
		Object.defineProperty(exports, "GaxiosError", { enumerable: true, get: function () { return common_js_1.GaxiosError; } });
		__exportStar(requireInterceptor(), exports);
		/**
		 * The default instance used when the `request` method is directly
		 * invoked.
		 */
		exports.instance = new gaxios_js_1.Gaxios();
		/**
		 * Make an HTTP request using the given options.
		 * @param opts Options for the request
		 */
		async function request(opts) {
		    return exports.instance.request(opts);
		}
		
	} (src$4));
	return src$4;
}

var src$3 = {};

var jsonBigint = {exports: {}};

var stringify = {exports: {}};

var bignumber$1 = {exports: {}};

var bignumber = bignumber$1.exports;

var hasRequiredBignumber;

function requireBignumber () {
	if (hasRequiredBignumber) return bignumber$1.exports;
	hasRequiredBignumber = 1;
	(function (module) {
(function (globalObject) {

		/*
		 *      bignumber.js v9.3.1
		 *      A JavaScript library for arbitrary-precision arithmetic.
		 *      https://github.com/MikeMcl/bignumber.js
		 *      Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
		 *      MIT Licensed.
		 *
		 *      BigNumber.prototype methods     |  BigNumber methods
		 *                                      |
		 *      absoluteValue            abs    |  clone
		 *      comparedTo                      |  config               set
		 *      decimalPlaces            dp     |      DECIMAL_PLACES
		 *      dividedBy                div    |      ROUNDING_MODE
		 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
		 *      exponentiatedBy          pow    |      RANGE
		 *      integerValue                    |      CRYPTO
		 *      isEqualTo                eq     |      MODULO_MODE
		 *      isFinite                        |      POW_PRECISION
		 *      isGreaterThan            gt     |      FORMAT
		 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
		 *      isInteger                       |  isBigNumber
		 *      isLessThan               lt     |  maximum              max
		 *      isLessThanOrEqualTo      lte    |  minimum              min
		 *      isNaN                           |  random
		 *      isNegative                      |  sum
		 *      isPositive                      |
		 *      isZero                          |
		 *      minus                           |
		 *      modulo                   mod    |
		 *      multipliedBy             times  |
		 *      negated                         |
		 *      plus                            |
		 *      precision                sd     |
		 *      shiftedBy                       |
		 *      squareRoot               sqrt   |
		 *      toExponential                   |
		 *      toFixed                         |
		 *      toFormat                        |
		 *      toFraction                      |
		 *      toJSON                          |
		 *      toNumber                        |
		 *      toPrecision                     |
		 *      toString                        |
		 *      valueOf                         |
		 *
		 */


		  var BigNumber,
		    isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
		    mathceil = Math.ceil,
		    mathfloor = Math.floor,

		    bignumberError = '[BigNumber Error] ',
		    tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ',

		    BASE = 1e14,
		    LOG_BASE = 14,
		    MAX_SAFE_INTEGER = 0x1fffffffffffff,         // 2^53 - 1
		    // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
		    POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
		    SQRT_BASE = 1e7,

		    // EDITABLE
		    // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
		    // the arguments to toExponential, toFixed, toFormat, and toPrecision.
		    MAX = 1E9;                                   // 0 to MAX_INT32


		  /*
		   * Create and return a BigNumber constructor.
		   */
		  function clone(configObject) {
		    var div, convertBase, parseNumeric,
		      P = BigNumber.prototype = { constructor: BigNumber, toString: null, valueOf: null },
		      ONE = new BigNumber(1),


		      //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------


		      // The default values below must be integers within the inclusive ranges stated.
		      // The values can also be changed at run-time using BigNumber.set.

		      // The maximum number of decimal places for operations involving division.
		      DECIMAL_PLACES = 20,                     // 0 to MAX

		      // The rounding mode used when rounding to the above decimal places, and when using
		      // toExponential, toFixed, toFormat and toPrecision, and round (default value).
		      // UP         0 Away from zero.
		      // DOWN       1 Towards zero.
		      // CEIL       2 Towards +Infinity.
		      // FLOOR      3 Towards -Infinity.
		      // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
		      // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
		      // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
		      // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
		      // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
		      ROUNDING_MODE = 4,                       // 0 to 8

		      // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

		      // The exponent value at and beneath which toString returns exponential notation.
		      // Number type: -7
		      TO_EXP_NEG = -7,                         // 0 to -MAX

		      // The exponent value at and above which toString returns exponential notation.
		      // Number type: 21
		      TO_EXP_POS = 21,                         // 0 to MAX

		      // RANGE : [MIN_EXP, MAX_EXP]

		      // The minimum exponent value, beneath which underflow to zero occurs.
		      // Number type: -324  (5e-324)
		      MIN_EXP = -1e7,                          // -1 to -MAX

		      // The maximum exponent value, above which overflow to Infinity occurs.
		      // Number type:  308  (1.7976931348623157e+308)
		      // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
		      MAX_EXP = 1e7,                           // 1 to MAX

		      // Whether to use cryptographically-secure random number generation, if available.
		      CRYPTO = false,                          // true or false

		      // The modulo mode used when calculating the modulus: a mod n.
		      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
		      // The remainder (r) is calculated as: r = a - n * q.
		      //
		      // UP        0 The remainder is positive if the dividend is negative, else is negative.
		      // DOWN      1 The remainder has the same sign as the dividend.
		      //             This modulo mode is commonly known as 'truncated division' and is
		      //             equivalent to (a % n) in JavaScript.
		      // FLOOR     3 The remainder has the same sign as the divisor (Python %).
		      // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
		      // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
		      //             The remainder is always positive.
		      //
		      // The truncated division, floored division, Euclidian division and IEEE 754 remainder
		      // modes are commonly used for the modulus operation.
		      // Although the other rounding modes can also be used, they may not give useful results.
		      MODULO_MODE = 1,                         // 0 to 9

		      // The maximum number of significant digits of the result of the exponentiatedBy operation.
		      // If POW_PRECISION is 0, there will be unlimited significant digits.
		      POW_PRECISION = 0,                       // 0 to MAX

		      // The format specification used by the BigNumber.prototype.toFormat method.
		      FORMAT = {
		        prefix: '',
		        groupSize: 3,
		        secondaryGroupSize: 0,
		        groupSeparator: ',',
		        decimalSeparator: '.',
		        fractionGroupSize: 0,
		        fractionGroupSeparator: '\xA0',        // non-breaking space
		        suffix: ''
		      },

		      // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
		      // '-', '.', whitespace, or repeated character.
		      // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
		      ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz',
		      alphabetHasNormalDecimalDigits = true;


		    //------------------------------------------------------------------------------------------


		    // CONSTRUCTOR


		    /*
		     * The BigNumber constructor and exported function.
		     * Create and return a new instance of a BigNumber object.
		     *
		     * v {number|string|BigNumber} A numeric value.
		     * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
		     */
		    function BigNumber(v, b) {
		      var alphabet, c, caseChanged, e, i, isNum, len, str,
		        x = this;

		      // Enable constructor call without `new`.
		      if (!(x instanceof BigNumber)) return new BigNumber(v, b);

		      if (b == null) {

		        if (v && v._isBigNumber === true) {
		          x.s = v.s;

		          if (!v.c || v.e > MAX_EXP) {
		            x.c = x.e = null;
		          } else if (v.e < MIN_EXP) {
		            x.c = [x.e = 0];
		          } else {
		            x.e = v.e;
		            x.c = v.c.slice();
		          }

		          return;
		        }

		        if ((isNum = typeof v == 'number') && v * 0 == 0) {

		          // Use `1 / n` to handle minus zero also.
		          x.s = 1 / v < 0 ? (v = -v, -1) : 1;

		          // Fast path for integers, where n < 2147483648 (2**31).
		          if (v === ~~v) {
		            for (e = 0, i = v; i >= 10; i /= 10, e++);

		            if (e > MAX_EXP) {
		              x.c = x.e = null;
		            } else {
		              x.e = e;
		              x.c = [v];
		            }

		            return;
		          }

		          str = String(v);
		        } else {

		          if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);

		          x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
		        }

		        // Decimal point?
		        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

		        // Exponential form?
		        if ((i = str.search(/e/i)) > 0) {

		          // Determine exponent.
		          if (e < 0) e = i;
		          e += +str.slice(i + 1);
		          str = str.substring(0, i);
		        } else if (e < 0) {

		          // Integer.
		          e = str.length;
		        }

		      } else {

		        // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
		        intCheck(b, 2, ALPHABET.length, 'Base');

		        // Allow exponential notation to be used with base 10 argument, while
		        // also rounding to DECIMAL_PLACES as with other bases.
		        if (b == 10 && alphabetHasNormalDecimalDigits) {
		          x = new BigNumber(v);
		          return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
		        }

		        str = String(v);

		        if (isNum = typeof v == 'number') {

		          // Avoid potential interpretation of Infinity and NaN as base 44+ values.
		          if (v * 0 != 0) return parseNumeric(x, str, isNum, b);

		          x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;

		          // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
		          if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
		            throw Error
		             (tooManyDigits + v);
		          }
		        } else {
		          x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
		        }

		        alphabet = ALPHABET.slice(0, b);
		        e = i = 0;

		        // Check that str is a valid base b number.
		        // Don't use RegExp, so alphabet can contain special characters.
		        for (len = str.length; i < len; i++) {
		          if (alphabet.indexOf(c = str.charAt(i)) < 0) {
		            if (c == '.') {

		              // If '.' is not the first character and it has not be found before.
		              if (i > e) {
		                e = len;
		                continue;
		              }
		            } else if (!caseChanged) {

		              // Allow e.g. hexadecimal 'FF' as well as 'ff'.
		              if (str == str.toUpperCase() && (str = str.toLowerCase()) ||
		                  str == str.toLowerCase() && (str = str.toUpperCase())) {
		                caseChanged = true;
		                i = -1;
		                e = 0;
		                continue;
		              }
		            }

		            return parseNumeric(x, String(v), isNum, b);
		          }
		        }

		        // Prevent later check for length on converted number.
		        isNum = false;
		        str = convertBase(str, b, 10, x.s);

		        // Decimal point?
		        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
		        else e = str.length;
		      }

		      // Determine leading zeros.
		      for (i = 0; str.charCodeAt(i) === 48; i++);

		      // Determine trailing zeros.
		      for (len = str.length; str.charCodeAt(--len) === 48;);

		      if (str = str.slice(i, ++len)) {
		        len -= i;

		        // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
		        if (isNum && BigNumber.DEBUG &&
		          len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
		            throw Error
		             (tooManyDigits + (x.s * v));
		        }

		         // Overflow?
		        if ((e = e - i - 1) > MAX_EXP) {

		          // Infinity.
		          x.c = x.e = null;

		        // Underflow?
		        } else if (e < MIN_EXP) {

		          // Zero.
		          x.c = [x.e = 0];
		        } else {
		          x.e = e;
		          x.c = [];

		          // Transform base

		          // e is the base 10 exponent.
		          // i is where to slice str to get the first element of the coefficient array.
		          i = (e + 1) % LOG_BASE;
		          if (e < 0) i += LOG_BASE;  // i < 1

		          if (i < len) {
		            if (i) x.c.push(+str.slice(0, i));

		            for (len -= LOG_BASE; i < len;) {
		              x.c.push(+str.slice(i, i += LOG_BASE));
		            }

		            i = LOG_BASE - (str = str.slice(i)).length;
		          } else {
		            i -= len;
		          }

		          for (; i--; str += '0');
		          x.c.push(+str);
		        }
		      } else {

		        // Zero.
		        x.c = [x.e = 0];
		      }
		    }


		    // CONSTRUCTOR PROPERTIES


		    BigNumber.clone = clone;

		    BigNumber.ROUND_UP = 0;
		    BigNumber.ROUND_DOWN = 1;
		    BigNumber.ROUND_CEIL = 2;
		    BigNumber.ROUND_FLOOR = 3;
		    BigNumber.ROUND_HALF_UP = 4;
		    BigNumber.ROUND_HALF_DOWN = 5;
		    BigNumber.ROUND_HALF_EVEN = 6;
		    BigNumber.ROUND_HALF_CEIL = 7;
		    BigNumber.ROUND_HALF_FLOOR = 8;
		    BigNumber.EUCLID = 9;


		    /*
		     * Configure infrequently-changing library-wide settings.
		     *
		     * Accept an object with the following optional properties (if the value of a property is
		     * a number, it must be an integer within the inclusive range stated):
		     *
		     *   DECIMAL_PLACES   {number}           0 to MAX
		     *   ROUNDING_MODE    {number}           0 to 8
		     *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
		     *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
		     *   CRYPTO           {boolean}          true or false
		     *   MODULO_MODE      {number}           0 to 9
		     *   POW_PRECISION       {number}           0 to MAX
		     *   ALPHABET         {string}           A string of two or more unique characters which does
		     *                                       not contain '.'.
		     *   FORMAT           {object}           An object with some of the following properties:
		     *     prefix                 {string}
		     *     groupSize              {number}
		     *     secondaryGroupSize     {number}
		     *     groupSeparator         {string}
		     *     decimalSeparator       {string}
		     *     fractionGroupSize      {number}
		     *     fractionGroupSeparator {string}
		     *     suffix                 {string}
		     *
		     * (The values assigned to the above FORMAT object properties are not checked for validity.)
		     *
		     * E.g.
		     * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
		     *
		     * Ignore properties/parameters set to null or undefined, except for ALPHABET.
		     *
		     * Return an object with the properties current values.
		     */
		    BigNumber.config = BigNumber.set = function (obj) {
		      var p, v;

		      if (obj != null) {

		        if (typeof obj == 'object') {

		          // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
		          // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
		          if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
		            v = obj[p];
		            intCheck(v, 0, MAX, p);
		            DECIMAL_PLACES = v;
		          }

		          // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
		          // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
		          if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
		            v = obj[p];
		            intCheck(v, 0, 8, p);
		            ROUNDING_MODE = v;
		          }

		          // EXPONENTIAL_AT {number|number[]}
		          // Integer, -MAX to MAX inclusive or
		          // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
		          // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
		          if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
		            v = obj[p];
		            if (v && v.pop) {
		              intCheck(v[0], -MAX, 0, p);
		              intCheck(v[1], 0, MAX, p);
		              TO_EXP_NEG = v[0];
		              TO_EXP_POS = v[1];
		            } else {
		              intCheck(v, -MAX, MAX, p);
		              TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
		            }
		          }

		          // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
		          // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
		          // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
		          if (obj.hasOwnProperty(p = 'RANGE')) {
		            v = obj[p];
		            if (v && v.pop) {
		              intCheck(v[0], -MAX, -1, p);
		              intCheck(v[1], 1, MAX, p);
		              MIN_EXP = v[0];
		              MAX_EXP = v[1];
		            } else {
		              intCheck(v, -MAX, MAX, p);
		              if (v) {
		                MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
		              } else {
		                throw Error
		                 (bignumberError + p + ' cannot be zero: ' + v);
		              }
		            }
		          }

		          // CRYPTO {boolean} true or false.
		          // '[BigNumber Error] CRYPTO not true or false: {v}'
		          // '[BigNumber Error] crypto unavailable'
		          if (obj.hasOwnProperty(p = 'CRYPTO')) {
		            v = obj[p];
		            if (v === !!v) {
		              if (v) {
		                if (typeof crypto != 'undefined' && crypto &&
		                 (crypto.getRandomValues || crypto.randomBytes)) {
		                  CRYPTO = v;
		                } else {
		                  CRYPTO = !v;
		                  throw Error
		                   (bignumberError + 'crypto unavailable');
		                }
		              } else {
		                CRYPTO = v;
		              }
		            } else {
		              throw Error
		               (bignumberError + p + ' not true or false: ' + v);
		            }
		          }

		          // MODULO_MODE {number} Integer, 0 to 9 inclusive.
		          // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
		          if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
		            v = obj[p];
		            intCheck(v, 0, 9, p);
		            MODULO_MODE = v;
		          }

		          // POW_PRECISION {number} Integer, 0 to MAX inclusive.
		          // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
		          if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
		            v = obj[p];
		            intCheck(v, 0, MAX, p);
		            POW_PRECISION = v;
		          }

		          // FORMAT {object}
		          // '[BigNumber Error] FORMAT not an object: {v}'
		          if (obj.hasOwnProperty(p = 'FORMAT')) {
		            v = obj[p];
		            if (typeof v == 'object') FORMAT = v;
		            else throw Error
		             (bignumberError + p + ' not an object: ' + v);
		          }

		          // ALPHABET {string}
		          // '[BigNumber Error] ALPHABET invalid: {v}'
		          if (obj.hasOwnProperty(p = 'ALPHABET')) {
		            v = obj[p];

		            // Disallow if less than two characters,
		            // or if it contains '+', '-', '.', whitespace, or a repeated character.
		            if (typeof v == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
		              alphabetHasNormalDecimalDigits = v.slice(0, 10) == '0123456789';
		              ALPHABET = v;
		            } else {
		              throw Error
		               (bignumberError + p + ' invalid: ' + v);
		            }
		          }

		        } else {

		          // '[BigNumber Error] Object expected: {v}'
		          throw Error
		           (bignumberError + 'Object expected: ' + obj);
		        }
		      }

		      return {
		        DECIMAL_PLACES: DECIMAL_PLACES,
		        ROUNDING_MODE: ROUNDING_MODE,
		        EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
		        RANGE: [MIN_EXP, MAX_EXP],
		        CRYPTO: CRYPTO,
		        MODULO_MODE: MODULO_MODE,
		        POW_PRECISION: POW_PRECISION,
		        FORMAT: FORMAT,
		        ALPHABET: ALPHABET
		      };
		    };


		    /*
		     * Return true if v is a BigNumber instance, otherwise return false.
		     *
		     * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
		     *
		     * v {any}
		     *
		     * '[BigNumber Error] Invalid BigNumber: {v}'
		     */
		    BigNumber.isBigNumber = function (v) {
		      if (!v || v._isBigNumber !== true) return false;
		      if (!BigNumber.DEBUG) return true;

		      var i, n,
		        c = v.c,
		        e = v.e,
		        s = v.s;

		      out: if ({}.toString.call(c) == '[object Array]') {

		        if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {

		          // If the first element is zero, the BigNumber value must be zero.
		          if (c[0] === 0) {
		            if (e === 0 && c.length === 1) return true;
		            break out;
		          }

		          // Calculate number of digits that c[0] should have, based on the exponent.
		          i = (e + 1) % LOG_BASE;
		          if (i < 1) i += LOG_BASE;

		          // Calculate number of digits of c[0].
		          //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
		          if (String(c[0]).length == i) {

		            for (i = 0; i < c.length; i++) {
		              n = c[i];
		              if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
		            }

		            // Last element cannot be zero, unless it is the only element.
		            if (n !== 0) return true;
		          }
		        }

		      // Infinity/NaN
		      } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
		        return true;
		      }

		      throw Error
		        (bignumberError + 'Invalid BigNumber: ' + v);
		    };


		    /*
		     * Return a new BigNumber whose value is the maximum of the arguments.
		     *
		     * arguments {number|string|BigNumber}
		     */
		    BigNumber.maximum = BigNumber.max = function () {
		      return maxOrMin(arguments, -1);
		    };


		    /*
		     * Return a new BigNumber whose value is the minimum of the arguments.
		     *
		     * arguments {number|string|BigNumber}
		     */
		    BigNumber.minimum = BigNumber.min = function () {
		      return maxOrMin(arguments, 1);
		    };


		    /*
		     * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
		     * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
		     * zeros are produced).
		     *
		     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
		     *
		     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
		     * '[BigNumber Error] crypto unavailable'
		     */
		    BigNumber.random = (function () {
		      var pow2_53 = 0x20000000000000;

		      // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
		      // Check if Math.random() produces more than 32 bits of randomness.
		      // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
		      // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
		      var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
		       ? function () { return mathfloor(Math.random() * pow2_53); }
		       : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
		         (Math.random() * 0x800000 | 0); };

		      return function (dp) {
		        var a, b, e, k, v,
		          i = 0,
		          c = [],
		          rand = new BigNumber(ONE);

		        if (dp == null) dp = DECIMAL_PLACES;
		        else intCheck(dp, 0, MAX);

		        k = mathceil(dp / LOG_BASE);

		        if (CRYPTO) {

		          // Browsers supporting crypto.getRandomValues.
		          if (crypto.getRandomValues) {

		            a = crypto.getRandomValues(new Uint32Array(k *= 2));

		            for (; i < k;) {

		              // 53 bits:
		              // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
		              // 11111 11111111 11111111 11111111 11100000 00000000 00000000
		              // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
		              //                                     11111 11111111 11111111
		              // 0x20000 is 2^21.
		              v = a[i] * 0x20000 + (a[i + 1] >>> 11);

		              // Rejection sampling:
		              // 0 <= v < 9007199254740992
		              // Probability that v >= 9e15, is
		              // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
		              if (v >= 9e15) {
		                b = crypto.getRandomValues(new Uint32Array(2));
		                a[i] = b[0];
		                a[i + 1] = b[1];
		              } else {

		                // 0 <= v <= 8999999999999999
		                // 0 <= (v % 1e14) <= 99999999999999
		                c.push(v % 1e14);
		                i += 2;
		              }
		            }
		            i = k / 2;

		          // Node.js supporting crypto.randomBytes.
		          } else if (crypto.randomBytes) {

		            // buffer
		            a = crypto.randomBytes(k *= 7);

		            for (; i < k;) {

		              // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
		              // 0x100000000 is 2^32, 0x1000000 is 2^24
		              // 11111 11111111 11111111 11111111 11111111 11111111 11111111
		              // 0 <= v < 9007199254740992
		              v = ((a[i] & 31) * 0x1000000000000) + (a[i + 1] * 0x10000000000) +
		                 (a[i + 2] * 0x100000000) + (a[i + 3] * 0x1000000) +
		                 (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

		              if (v >= 9e15) {
		                crypto.randomBytes(7).copy(a, i);
		              } else {

		                // 0 <= (v % 1e14) <= 99999999999999
		                c.push(v % 1e14);
		                i += 7;
		              }
		            }
		            i = k / 7;
		          } else {
		            CRYPTO = false;
		            throw Error
		             (bignumberError + 'crypto unavailable');
		          }
		        }

		        // Use Math.random.
		        if (!CRYPTO) {

		          for (; i < k;) {
		            v = random53bitInt();
		            if (v < 9e15) c[i++] = v % 1e14;
		          }
		        }

		        k = c[--i];
		        dp %= LOG_BASE;

		        // Convert trailing digits to zeros according to dp.
		        if (k && dp) {
		          v = POWS_TEN[LOG_BASE - dp];
		          c[i] = mathfloor(k / v) * v;
		        }

		        // Remove trailing elements which are zero.
		        for (; c[i] === 0; c.pop(), i--);

		        // Zero?
		        if (i < 0) {
		          c = [e = 0];
		        } else {

		          // Remove leading elements which are zero and adjust exponent accordingly.
		          for (e = -1 ; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);

		          // Count the digits of the first element of c to determine leading zeros, and...
		          for (i = 1, v = c[0]; v >= 10; v /= 10, i++);

		          // adjust the exponent accordingly.
		          if (i < LOG_BASE) e -= LOG_BASE - i;
		        }

		        rand.e = e;
		        rand.c = c;
		        return rand;
		      };
		    })();


		    /*
		     * Return a BigNumber whose value is the sum of the arguments.
		     *
		     * arguments {number|string|BigNumber}
		     */
		    BigNumber.sum = function () {
		      var i = 1,
		        args = arguments,
		        sum = new BigNumber(args[0]);
		      for (; i < args.length;) sum = sum.plus(args[i++]);
		      return sum;
		    };


		    // PRIVATE FUNCTIONS


		    // Called by BigNumber and BigNumber.prototype.toString.
		    convertBase = (function () {
		      var decimal = '0123456789';

		      /*
		       * Convert string of baseIn to an array of numbers of baseOut.
		       * Eg. toBaseOut('255', 10, 16) returns [15, 15].
		       * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
		       */
		      function toBaseOut(str, baseIn, baseOut, alphabet) {
		        var j,
		          arr = [0],
		          arrL,
		          i = 0,
		          len = str.length;

		        for (; i < len;) {
		          for (arrL = arr.length; arrL--; arr[arrL] *= baseIn);

		          arr[0] += alphabet.indexOf(str.charAt(i++));

		          for (j = 0; j < arr.length; j++) {

		            if (arr[j] > baseOut - 1) {
		              if (arr[j + 1] == null) arr[j + 1] = 0;
		              arr[j + 1] += arr[j] / baseOut | 0;
		              arr[j] %= baseOut;
		            }
		          }
		        }

		        return arr.reverse();
		      }

		      // Convert a numeric string of baseIn to a numeric string of baseOut.
		      // If the caller is toString, we are converting from base 10 to baseOut.
		      // If the caller is BigNumber, we are converting from baseIn to base 10.
		      return function (str, baseIn, baseOut, sign, callerIsToString) {
		        var alphabet, d, e, k, r, x, xc, y,
		          i = str.indexOf('.'),
		          dp = DECIMAL_PLACES,
		          rm = ROUNDING_MODE;

		        // Non-integer.
		        if (i >= 0) {
		          k = POW_PRECISION;

		          // Unlimited precision.
		          POW_PRECISION = 0;
		          str = str.replace('.', '');
		          y = new BigNumber(baseIn);
		          x = y.pow(str.length - i);
		          POW_PRECISION = k;

		          // Convert str as if an integer, then restore the fraction part by dividing the
		          // result by its base raised to a power.

		          y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'),
		           10, baseOut, decimal);
		          y.e = y.c.length;
		        }

		        // Convert the number as integer.

		        xc = toBaseOut(str, baseIn, baseOut, callerIsToString
		         ? (alphabet = ALPHABET, decimal)
		         : (alphabet = decimal, ALPHABET));

		        // xc now represents str as an integer and converted to baseOut. e is the exponent.
		        e = k = xc.length;

		        // Remove trailing zeros.
		        for (; xc[--k] == 0; xc.pop());

		        // Zero?
		        if (!xc[0]) return alphabet.charAt(0);

		        // Does str represent an integer? If so, no need for the division.
		        if (i < 0) {
		          --e;
		        } else {
		          x.c = xc;
		          x.e = e;

		          // The sign is needed for correct rounding.
		          x.s = sign;
		          x = div(x, y, dp, rm, baseOut);
		          xc = x.c;
		          r = x.r;
		          e = x.e;
		        }

		        // xc now represents str converted to baseOut.

		        // The index of the rounding digit.
		        d = e + dp + 1;

		        // The rounding digit: the digit to the right of the digit that may be rounded up.
		        i = xc[d];

		        // Look at the rounding digits and mode to determine whether to round up.

		        k = baseOut / 2;
		        r = r || d < 0 || xc[d + 1] != null;

		        r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
		              : i > k || i == k &&(rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
		               rm == (x.s < 0 ? 8 : 7));

		        // If the index of the rounding digit is not greater than zero, or xc represents
		        // zero, then the result of the base conversion is zero or, if rounding up, a value
		        // such as 0.00001.
		        if (d < 1 || !xc[0]) {

		          // 1^-dp or 0
		          str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
		        } else {

		          // Truncate xc to the required number of decimal places.
		          xc.length = d;

		          // Round up?
		          if (r) {

		            // Rounding up may mean the previous digit has to be rounded up and so on.
		            for (--baseOut; ++xc[--d] > baseOut;) {
		              xc[d] = 0;

		              if (!d) {
		                ++e;
		                xc = [1].concat(xc);
		              }
		            }
		          }

		          // Determine trailing zeros.
		          for (k = xc.length; !xc[--k];);

		          // E.g. [4, 11, 15] becomes 4bf.
		          for (i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));

		          // Add leading zeros, decimal point and trailing zeros as required.
		          str = toFixedPoint(str, e, alphabet.charAt(0));
		        }

		        // The caller will add the sign.
		        return str;
		      };
		    })();


		    // Perform division in the specified base. Called by div and convertBase.
		    div = (function () {

		      // Assume non-zero x and k.
		      function multiply(x, k, base) {
		        var m, temp, xlo, xhi,
		          carry = 0,
		          i = x.length,
		          klo = k % SQRT_BASE,
		          khi = k / SQRT_BASE | 0;

		        for (x = x.slice(); i--;) {
		          xlo = x[i] % SQRT_BASE;
		          xhi = x[i] / SQRT_BASE | 0;
		          m = khi * xlo + xhi * klo;
		          temp = klo * xlo + ((m % SQRT_BASE) * SQRT_BASE) + carry;
		          carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
		          x[i] = temp % base;
		        }

		        if (carry) x = [carry].concat(x);

		        return x;
		      }

		      function compare(a, b, aL, bL) {
		        var i, cmp;

		        if (aL != bL) {
		          cmp = aL > bL ? 1 : -1;
		        } else {

		          for (i = cmp = 0; i < aL; i++) {

		            if (a[i] != b[i]) {
		              cmp = a[i] > b[i] ? 1 : -1;
		              break;
		            }
		          }
		        }

		        return cmp;
		      }

		      function subtract(a, b, aL, base) {
		        var i = 0;

		        // Subtract b from a.
		        for (; aL--;) {
		          a[aL] -= i;
		          i = a[aL] < b[aL] ? 1 : 0;
		          a[aL] = i * base + a[aL] - b[aL];
		        }

		        // Remove leading zeros.
		        for (; !a[0] && a.length > 1; a.splice(0, 1));
		      }

		      // x: dividend, y: divisor.
		      return function (x, y, dp, rm, base) {
		        var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
		          yL, yz,
		          s = x.s == y.s ? 1 : -1,
		          xc = x.c,
		          yc = y.c;

		        // Either NaN, Infinity or 0?
		        if (!xc || !xc[0] || !yc || !yc[0]) {

		          return new BigNumber(

		           // Return NaN if either NaN, or both Infinity or 0.
		           !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :

		            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
		            xc && xc[0] == 0 || !yc ? s * 0 : s / 0
		         );
		        }

		        q = new BigNumber(s);
		        qc = q.c = [];
		        e = x.e - y.e;
		        s = dp + e + 1;

		        if (!base) {
		          base = BASE;
		          e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
		          s = s / LOG_BASE | 0;
		        }

		        // Result exponent may be one less then the current value of e.
		        // The coefficients of the BigNumbers from convertBase may have trailing zeros.
		        for (i = 0; yc[i] == (xc[i] || 0); i++);

		        if (yc[i] > (xc[i] || 0)) e--;

		        if (s < 0) {
		          qc.push(1);
		          more = true;
		        } else {
		          xL = xc.length;
		          yL = yc.length;
		          i = 0;
		          s += 2;

		          // Normalise xc and yc so highest order digit of yc is >= base / 2.

		          n = mathfloor(base / (yc[0] + 1));

		          // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
		          // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
		          if (n > 1) {
		            yc = multiply(yc, n, base);
		            xc = multiply(xc, n, base);
		            yL = yc.length;
		            xL = xc.length;
		          }

		          xi = yL;
		          rem = xc.slice(0, yL);
		          remL = rem.length;

		          // Add zeros to make remainder as long as divisor.
		          for (; remL < yL; rem[remL++] = 0);
		          yz = yc.slice();
		          yz = [0].concat(yz);
		          yc0 = yc[0];
		          if (yc[1] >= base / 2) yc0++;
		          // Not necessary, but to prevent trial digit n > base, when using base 3.
		          // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;

		          do {
		            n = 0;

		            // Compare divisor and remainder.
		            cmp = compare(yc, rem, yL, remL);

		            // If divisor < remainder.
		            if (cmp < 0) {

		              // Calculate trial digit, n.

		              rem0 = rem[0];
		              if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

		              // n is how many times the divisor goes into the current remainder.
		              n = mathfloor(rem0 / yc0);

		              //  Algorithm:
		              //  product = divisor multiplied by trial digit (n).
		              //  Compare product and remainder.
		              //  If product is greater than remainder:
		              //    Subtract divisor from product, decrement trial digit.
		              //  Subtract product from remainder.
		              //  If product was less than remainder at the last compare:
		              //    Compare new remainder and divisor.
		              //    If remainder is greater than divisor:
		              //      Subtract divisor from remainder, increment trial digit.

		              if (n > 1) {

		                // n may be > base only when base is 3.
		                if (n >= base) n = base - 1;

		                // product = divisor * trial digit.
		                prod = multiply(yc, n, base);
		                prodL = prod.length;
		                remL = rem.length;

		                // Compare product and remainder.
		                // If product > remainder then trial digit n too high.
		                // n is 1 too high about 5% of the time, and is not known to have
		                // ever been more than 1 too high.
		                while (compare(prod, rem, prodL, remL) == 1) {
		                  n--;

		                  // Subtract divisor from product.
		                  subtract(prod, yL < prodL ? yz : yc, prodL, base);
		                  prodL = prod.length;
		                  cmp = 1;
		                }
		              } else {

		                // n is 0 or 1, cmp is -1.
		                // If n is 0, there is no need to compare yc and rem again below,
		                // so change cmp to 1 to avoid it.
		                // If n is 1, leave cmp as -1, so yc and rem are compared again.
		                if (n == 0) {

		                  // divisor < remainder, so n must be at least 1.
		                  cmp = n = 1;
		                }

		                // product = divisor
		                prod = yc.slice();
		                prodL = prod.length;
		              }

		              if (prodL < remL) prod = [0].concat(prod);

		              // Subtract product from remainder.
		              subtract(rem, prod, remL, base);
		              remL = rem.length;

		               // If product was < remainder.
		              if (cmp == -1) {

		                // Compare divisor and new remainder.
		                // If divisor < new remainder, subtract divisor from remainder.
		                // Trial digit n too low.
		                // n is 1 too low about 5% of the time, and very rarely 2 too low.
		                while (compare(yc, rem, yL, remL) < 1) {
		                  n++;

		                  // Subtract divisor from remainder.
		                  subtract(rem, yL < remL ? yz : yc, remL, base);
		                  remL = rem.length;
		                }
		              }
		            } else if (cmp === 0) {
		              n++;
		              rem = [0];
		            } // else cmp === 1 and n will be 0

		            // Add the next digit, n, to the result array.
		            qc[i++] = n;

		            // Update the remainder.
		            if (rem[0]) {
		              rem[remL++] = xc[xi] || 0;
		            } else {
		              rem = [xc[xi]];
		              remL = 1;
		            }
		          } while ((xi++ < xL || rem[0] != null) && s--);

		          more = rem[0] != null;

		          // Leading zero?
		          if (!qc[0]) qc.splice(0, 1);
		        }

		        if (base == BASE) {

		          // To calculate q.e, first get the number of digits of qc[0].
		          for (i = 1, s = qc[0]; s >= 10; s /= 10, i++);

		          round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);

		        // Caller is convertBase.
		        } else {
		          q.e = e;
		          q.r = +more;
		        }

		        return q;
		      };
		    })();


		    /*
		     * Return a string representing the value of BigNumber n in fixed-point or exponential
		     * notation rounded to the specified decimal places or significant digits.
		     *
		     * n: a BigNumber.
		     * i: the index of the last digit required (i.e. the digit that may be rounded up).
		     * rm: the rounding mode.
		     * id: 1 (toExponential) or 2 (toPrecision).
		     */
		    function format(n, i, rm, id) {
		      var c0, e, ne, len, str;

		      if (rm == null) rm = ROUNDING_MODE;
		      else intCheck(rm, 0, 8);

		      if (!n.c) return n.toString();

		      c0 = n.c[0];
		      ne = n.e;

		      if (i == null) {
		        str = coeffToString(n.c);
		        str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS)
		         ? toExponential(str, ne)
		         : toFixedPoint(str, ne, '0');
		      } else {
		        n = round(new BigNumber(n), i, rm);

		        // n.e may have changed if the value was rounded up.
		        e = n.e;

		        str = coeffToString(n.c);
		        len = str.length;

		        // toPrecision returns exponential notation if the number of significant digits
		        // specified is less than the number of digits necessary to represent the integer
		        // part of the value in fixed-point notation.

		        // Exponential notation.
		        if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {

		          // Append zeros?
		          for (; len < i; str += '0', len++);
		          str = toExponential(str, e);

		        // Fixed-point notation.
		        } else {
		          i -= ne + (id === 2 && e > ne);
		          str = toFixedPoint(str, e, '0');

		          // Append zeros?
		          if (e + 1 > len) {
		            if (--i > 0) for (str += '.'; i--; str += '0');
		          } else {
		            i += e - len;
		            if (i > 0) {
		              if (e + 1 == len) str += '.';
		              for (; i--; str += '0');
		            }
		          }
		        }
		      }

		      return n.s < 0 && c0 ? '-' + str : str;
		    }


		    // Handle BigNumber.max and BigNumber.min.
		    // If any number is NaN, return NaN.
		    function maxOrMin(args, n) {
		      var k, y,
		        i = 1,
		        x = new BigNumber(args[0]);

		      for (; i < args.length; i++) {
		        y = new BigNumber(args[i]);
		        if (!y.s || (k = compare(x, y)) === n || k === 0 && x.s === n) {
		          x = y;
		        }
		      }

		      return x;
		    }


		    /*
		     * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
		     * Called by minus, plus and times.
		     */
		    function normalise(n, c, e) {
		      var i = 1,
		        j = c.length;

		       // Remove trailing zeros.
		      for (; !c[--j]; c.pop());

		      // Calculate the base 10 exponent. First get the number of digits of c[0].
		      for (j = c[0]; j >= 10; j /= 10, i++);

		      // Overflow?
		      if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {

		        // Infinity.
		        n.c = n.e = null;

		      // Underflow?
		      } else if (e < MIN_EXP) {

		        // Zero.
		        n.c = [n.e = 0];
		      } else {
		        n.e = e;
		        n.c = c;
		      }

		      return n;
		    }


		    // Handle values that fail the validity test in BigNumber.
		    parseNumeric = (function () {
		      var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
		        dotAfter = /^([^.]+)\.$/,
		        dotBefore = /^\.([^.]+)$/,
		        isInfinityOrNaN = /^-?(Infinity|NaN)$/,
		        whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

		      return function (x, str, isNum, b) {
		        var base,
		          s = isNum ? str : str.replace(whitespaceOrPlus, '');

		        // No exception on ±Infinity or NaN.
		        if (isInfinityOrNaN.test(s)) {
		          x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
		        } else {
		          if (!isNum) {

		            // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
		            s = s.replace(basePrefix, function (m, p1, p2) {
		              base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
		              return !b || b == base ? p1 : m;
		            });

		            if (b) {
		              base = b;

		              // E.g. '1.' to '1', '.1' to '0.1'
		              s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
		            }

		            if (str != s) return new BigNumber(s, base);
		          }

		          // '[BigNumber Error] Not a number: {n}'
		          // '[BigNumber Error] Not a base {b} number: {n}'
		          if (BigNumber.DEBUG) {
		            throw Error
		              (bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
		          }

		          // NaN
		          x.s = null;
		        }

		        x.c = x.e = null;
		      }
		    })();


		    /*
		     * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
		     * If r is truthy, it is known that there are more digits after the rounding digit.
		     */
		    function round(x, sd, rm, r) {
		      var d, i, j, k, n, ni, rd,
		        xc = x.c,
		        pows10 = POWS_TEN;

		      // if x is not Infinity or NaN...
		      if (xc) {

		        // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
		        // n is a base 1e14 number, the value of the element of array x.c containing rd.
		        // ni is the index of n within x.c.
		        // d is the number of digits of n.
		        // i is the index of rd within n including leading zeros.
		        // j is the actual index of rd within n (if < 0, rd is a leading zero).
		        out: {

		          // Get the number of digits of the first element of xc.
		          for (d = 1, k = xc[0]; k >= 10; k /= 10, d++);
		          i = sd - d;

		          // If the rounding digit is in the first element of xc...
		          if (i < 0) {
		            i += LOG_BASE;
		            j = sd;
		            n = xc[ni = 0];

		            // Get the rounding digit at index j of n.
		            rd = mathfloor(n / pows10[d - j - 1] % 10);
		          } else {
		            ni = mathceil((i + 1) / LOG_BASE);

		            if (ni >= xc.length) {

		              if (r) {

		                // Needed by sqrt.
		                for (; xc.length <= ni; xc.push(0));
		                n = rd = 0;
		                d = 1;
		                i %= LOG_BASE;
		                j = i - LOG_BASE + 1;
		              } else {
		                break out;
		              }
		            } else {
		              n = k = xc[ni];

		              // Get the number of digits of n.
		              for (d = 1; k >= 10; k /= 10, d++);

		              // Get the index of rd within n.
		              i %= LOG_BASE;

		              // Get the index of rd within n, adjusted for leading zeros.
		              // The number of leading zeros of n is given by LOG_BASE - d.
		              j = i - LOG_BASE + d;

		              // Get the rounding digit at index j of n.
		              rd = j < 0 ? 0 : mathfloor(n / pows10[d - j - 1] % 10);
		            }
		          }

		          r = r || sd < 0 ||

		          // Are there any non-zero digits after the rounding digit?
		          // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
		          // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
		           xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);

		          r = rm < 4
		           ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
		           : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&

		            // Check whether the digit to the left of the rounding digit is odd.
		            ((i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10) & 1 ||
		             rm == (x.s < 0 ? 8 : 7));

		          if (sd < 1 || !xc[0]) {
		            xc.length = 0;

		            if (r) {

		              // Convert sd to decimal places.
		              sd -= x.e + 1;

		              // 1, 0.1, 0.01, 0.001, 0.0001 etc.
		              xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
		              x.e = -sd || 0;
		            } else {

		              // Zero.
		              xc[0] = x.e = 0;
		            }

		            return x;
		          }

		          // Remove excess digits.
		          if (i == 0) {
		            xc.length = ni;
		            k = 1;
		            ni--;
		          } else {
		            xc.length = ni + 1;
		            k = pows10[LOG_BASE - i];

		            // E.g. 56700 becomes 56000 if 7 is the rounding digit.
		            // j > 0 means i > number of leading zeros of n.
		            xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
		          }

		          // Round up?
		          if (r) {

		            for (; ;) {

		              // If the digit to be rounded up is in the first element of xc...
		              if (ni == 0) {

		                // i will be the length of xc[0] before k is added.
		                for (i = 1, j = xc[0]; j >= 10; j /= 10, i++);
		                j = xc[0] += k;
		                for (k = 1; j >= 10; j /= 10, k++);

		                // if i != k the length has increased.
		                if (i != k) {
		                  x.e++;
		                  if (xc[0] == BASE) xc[0] = 1;
		                }

		                break;
		              } else {
		                xc[ni] += k;
		                if (xc[ni] != BASE) break;
		                xc[ni--] = 0;
		                k = 1;
		              }
		            }
		          }

		          // Remove trailing zeros.
		          for (i = xc.length; xc[--i] === 0; xc.pop());
		        }

		        // Overflow? Infinity.
		        if (x.e > MAX_EXP) {
		          x.c = x.e = null;

		        // Underflow? Zero.
		        } else if (x.e < MIN_EXP) {
		          x.c = [x.e = 0];
		        }
		      }

		      return x;
		    }


		    function valueOf(n) {
		      var str,
		        e = n.e;

		      if (e === null) return n.toString();

		      str = coeffToString(n.c);

		      str = e <= TO_EXP_NEG || e >= TO_EXP_POS
		        ? toExponential(str, e)
		        : toFixedPoint(str, e, '0');

		      return n.s < 0 ? '-' + str : str;
		    }


		    // PROTOTYPE/INSTANCE METHODS


		    /*
		     * Return a new BigNumber whose value is the absolute value of this BigNumber.
		     */
		    P.absoluteValue = P.abs = function () {
		      var x = new BigNumber(this);
		      if (x.s < 0) x.s = 1;
		      return x;
		    };


		    /*
		     * Return
		     *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
		     *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
		     *   0 if they have the same value,
		     *   or null if the value of either is NaN.
		     */
		    P.comparedTo = function (y, b) {
		      return compare(this, new BigNumber(y, b));
		    };


		    /*
		     * If dp is undefined or null or true or false, return the number of decimal places of the
		     * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
		     *
		     * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
		     * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
		     * ROUNDING_MODE if rm is omitted.
		     *
		     * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
		     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
		     *
		     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
		     */
		    P.decimalPlaces = P.dp = function (dp, rm) {
		      var c, n, v,
		        x = this;

		      if (dp != null) {
		        intCheck(dp, 0, MAX);
		        if (rm == null) rm = ROUNDING_MODE;
		        else intCheck(rm, 0, 8);

		        return round(new BigNumber(x), dp + x.e + 1, rm);
		      }

		      if (!(c = x.c)) return null;
		      n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;

		      // Subtract the number of trailing zeros of the last number.
		      if (v = c[v]) for (; v % 10 == 0; v /= 10, n--);
		      if (n < 0) n = 0;

		      return n;
		    };


		    /*
		     *  n / 0 = I
		     *  n / N = N
		     *  n / I = 0
		     *  0 / n = 0
		     *  0 / 0 = N
		     *  0 / N = N
		     *  0 / I = 0
		     *  N / n = N
		     *  N / 0 = N
		     *  N / N = N
		     *  N / I = N
		     *  I / n = I
		     *  I / 0 = I
		     *  I / N = N
		     *  I / I = N
		     *
		     * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
		     * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
		     */
		    P.dividedBy = P.div = function (y, b) {
		      return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
		    };


		    /*
		     * Return a new BigNumber whose value is the integer part of dividing the value of this
		     * BigNumber by the value of BigNumber(y, b).
		     */
		    P.dividedToIntegerBy = P.idiv = function (y, b) {
		      return div(this, new BigNumber(y, b), 0, 1);
		    };


		    /*
		     * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
		     *
		     * If m is present, return the result modulo m.
		     * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
		     * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
		     *
		     * The modular power operation works efficiently when x, n, and m are integers, otherwise it
		     * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
		     *
		     * n {number|string|BigNumber} The exponent. An integer.
		     * [m] {number|string|BigNumber} The modulus.
		     *
		     * '[BigNumber Error] Exponent not an integer: {n}'
		     */
		    P.exponentiatedBy = P.pow = function (n, m) {
		      var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y,
		        x = this;

		      n = new BigNumber(n);

		      // Allow NaN and ±Infinity, but not other non-integers.
		      if (n.c && !n.isInteger()) {
		        throw Error
		          (bignumberError + 'Exponent not an integer: ' + valueOf(n));
		      }

		      if (m != null) m = new BigNumber(m);

		      // Exponent of MAX_SAFE_INTEGER is 15.
		      nIsBig = n.e > 14;

		      // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
		      if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {

		        // The sign of the result of pow when x is negative depends on the evenness of n.
		        // If +n overflows to ±Infinity, the evenness of n would be not be known.
		        y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? n.s * (2 - isOdd(n)) : +valueOf(n)));
		        return m ? y.mod(m) : y;
		      }

		      nIsNeg = n.s < 0;

		      if (m) {

		        // x % m returns NaN if abs(m) is zero, or m is NaN.
		        if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);

		        isModExp = !nIsNeg && x.isInteger() && m.isInteger();

		        if (isModExp) x = x.mod(m);

		      // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
		      // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
		      } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0
		        // [1, 240000000]
		        ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7
		        // [80000000000000]  [99999750000000]
		        : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {

		        // If x is negative and n is odd, k = -0, else k = 0.
		        k = x.s < 0 && isOdd(n) ? -0 : 0;

		        // If x >= 1, k = ±Infinity.
		        if (x.e > -1) k = 1 / k;

		        // If n is negative return ±0, else return ±Infinity.
		        return new BigNumber(nIsNeg ? 1 / k : k);

		      } else if (POW_PRECISION) {

		        // Truncating each coefficient array to a length of k after each multiplication
		        // equates to truncating significant digits to POW_PRECISION + [28, 41],
		        // i.e. there will be a minimum of 28 guard digits retained.
		        k = mathceil(POW_PRECISION / LOG_BASE + 2);
		      }

		      if (nIsBig) {
		        half = new BigNumber(0.5);
		        if (nIsNeg) n.s = 1;
		        nIsOdd = isOdd(n);
		      } else {
		        i = Math.abs(+valueOf(n));
		        nIsOdd = i % 2;
		      }

		      y = new BigNumber(ONE);

		      // Performs 54 loop iterations for n of 9007199254740991.
		      for (; ;) {

		        if (nIsOdd) {
		          y = y.times(x);
		          if (!y.c) break;

		          if (k) {
		            if (y.c.length > k) y.c.length = k;
		          } else if (isModExp) {
		            y = y.mod(m);    //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
		          }
		        }

		        if (i) {
		          i = mathfloor(i / 2);
		          if (i === 0) break;
		          nIsOdd = i % 2;
		        } else {
		          n = n.times(half);
		          round(n, n.e + 1, 1);

		          if (n.e > 14) {
		            nIsOdd = isOdd(n);
		          } else {
		            i = +valueOf(n);
		            if (i === 0) break;
		            nIsOdd = i % 2;
		          }
		        }

		        x = x.times(x);

		        if (k) {
		          if (x.c && x.c.length > k) x.c.length = k;
		        } else if (isModExp) {
		          x = x.mod(m);    //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
		        }
		      }

		      if (isModExp) return y;
		      if (nIsNeg) y = ONE.div(y);

		      return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
		    };


		    /*
		     * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
		     * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
		     *
		     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
		     *
		     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
		     */
		    P.integerValue = function (rm) {
		      var n = new BigNumber(this);
		      if (rm == null) rm = ROUNDING_MODE;
		      else intCheck(rm, 0, 8);
		      return round(n, n.e + 1, rm);
		    };


		    /*
		     * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
		     * otherwise return false.
		     */
		    P.isEqualTo = P.eq = function (y, b) {
		      return compare(this, new BigNumber(y, b)) === 0;
		    };


		    /*
		     * Return true if the value of this BigNumber is a finite number, otherwise return false.
		     */
		    P.isFinite = function () {
		      return !!this.c;
		    };


		    /*
		     * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
		     * otherwise return false.
		     */
		    P.isGreaterThan = P.gt = function (y, b) {
		      return compare(this, new BigNumber(y, b)) > 0;
		    };


		    /*
		     * Return true if the value of this BigNumber is greater than or equal to the value of
		     * BigNumber(y, b), otherwise return false.
		     */
		    P.isGreaterThanOrEqualTo = P.gte = function (y, b) {
		      return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;

		    };


		    /*
		     * Return true if the value of this BigNumber is an integer, otherwise return false.
		     */
		    P.isInteger = function () {
		      return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
		    };


		    /*
		     * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
		     * otherwise return false.
		     */
		    P.isLessThan = P.lt = function (y, b) {
		      return compare(this, new BigNumber(y, b)) < 0;
		    };


		    /*
		     * Return true if the value of this BigNumber is less than or equal to the value of
		     * BigNumber(y, b), otherwise return false.
		     */
		    P.isLessThanOrEqualTo = P.lte = function (y, b) {
		      return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
		    };


		    /*
		     * Return true if the value of this BigNumber is NaN, otherwise return false.
		     */
		    P.isNaN = function () {
		      return !this.s;
		    };


		    /*
		     * Return true if the value of this BigNumber is negative, otherwise return false.
		     */
		    P.isNegative = function () {
		      return this.s < 0;
		    };


		    /*
		     * Return true if the value of this BigNumber is positive, otherwise return false.
		     */
		    P.isPositive = function () {
		      return this.s > 0;
		    };


		    /*
		     * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
		     */
		    P.isZero = function () {
		      return !!this.c && this.c[0] == 0;
		    };


		    /*
		     *  n - 0 = n
		     *  n - N = N
		     *  n - I = -I
		     *  0 - n = -n
		     *  0 - 0 = 0
		     *  0 - N = N
		     *  0 - I = -I
		     *  N - n = N
		     *  N - 0 = N
		     *  N - N = N
		     *  N - I = N
		     *  I - n = I
		     *  I - 0 = I
		     *  I - N = N
		     *  I - I = N
		     *
		     * Return a new BigNumber whose value is the value of this BigNumber minus the value of
		     * BigNumber(y, b).
		     */
		    P.minus = function (y, b) {
		      var i, j, t, xLTy,
		        x = this,
		        a = x.s;

		      y = new BigNumber(y, b);
		      b = y.s;

		      // Either NaN?
		      if (!a || !b) return new BigNumber(NaN);

		      // Signs differ?
		      if (a != b) {
		        y.s = -b;
		        return x.plus(y);
		      }

		      var xe = x.e / LOG_BASE,
		        ye = y.e / LOG_BASE,
		        xc = x.c,
		        yc = y.c;

		      if (!xe || !ye) {

		        // Either Infinity?
		        if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);

		        // Either zero?
		        if (!xc[0] || !yc[0]) {

		          // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
		          return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :

		           // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
		           ROUNDING_MODE == 3 ? -0 : 0);
		        }
		      }

		      xe = bitFloor(xe);
		      ye = bitFloor(ye);
		      xc = xc.slice();

		      // Determine which is the bigger number.
		      if (a = xe - ye) {

		        if (xLTy = a < 0) {
		          a = -a;
		          t = xc;
		        } else {
		          ye = xe;
		          t = yc;
		        }

		        t.reverse();

		        // Prepend zeros to equalise exponents.
		        for (b = a; b--; t.push(0));
		        t.reverse();
		      } else {

		        // Exponents equal. Check digit by digit.
		        j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

		        for (a = b = 0; b < j; b++) {

		          if (xc[b] != yc[b]) {
		            xLTy = xc[b] < yc[b];
		            break;
		          }
		        }
		      }

		      // x < y? Point xc to the array of the bigger number.
		      if (xLTy) {
		        t = xc;
		        xc = yc;
		        yc = t;
		        y.s = -y.s;
		      }

		      b = (j = yc.length) - (i = xc.length);

		      // Append zeros to xc if shorter.
		      // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
		      if (b > 0) for (; b--; xc[i++] = 0);
		      b = BASE - 1;

		      // Subtract yc from xc.
		      for (; j > a;) {

		        if (xc[--j] < yc[j]) {
		          for (i = j; i && !xc[--i]; xc[i] = b);
		          --xc[i];
		          xc[j] += BASE;
		        }

		        xc[j] -= yc[j];
		      }

		      // Remove leading zeros and adjust exponent accordingly.
		      for (; xc[0] == 0; xc.splice(0, 1), --ye);

		      // Zero?
		      if (!xc[0]) {

		        // Following IEEE 754 (2008) 6.3,
		        // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
		        y.s = ROUNDING_MODE == 3 ? -1 : 1;
		        y.c = [y.e = 0];
		        return y;
		      }

		      // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
		      // for finite x and y.
		      return normalise(y, xc, ye);
		    };


		    /*
		     *   n % 0 =  N
		     *   n % N =  N
		     *   n % I =  n
		     *   0 % n =  0
		     *  -0 % n = -0
		     *   0 % 0 =  N
		     *   0 % N =  N
		     *   0 % I =  0
		     *   N % n =  N
		     *   N % 0 =  N
		     *   N % N =  N
		     *   N % I =  N
		     *   I % n =  N
		     *   I % 0 =  N
		     *   I % N =  N
		     *   I % I =  N
		     *
		     * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
		     * BigNumber(y, b). The result depends on the value of MODULO_MODE.
		     */
		    P.modulo = P.mod = function (y, b) {
		      var q, s,
		        x = this;

		      y = new BigNumber(y, b);

		      // Return NaN if x is Infinity or NaN, or y is NaN or zero.
		      if (!x.c || !y.s || y.c && !y.c[0]) {
		        return new BigNumber(NaN);

		      // Return x if y is Infinity or x is zero.
		      } else if (!y.c || x.c && !x.c[0]) {
		        return new BigNumber(x);
		      }

		      if (MODULO_MODE == 9) {

		        // Euclidian division: q = sign(y) * floor(x / abs(y))
		        // r = x - qy    where  0 <= r < abs(y)
		        s = y.s;
		        y.s = 1;
		        q = div(x, y, 0, 3);
		        y.s = s;
		        q.s *= s;
		      } else {
		        q = div(x, y, 0, MODULO_MODE);
		      }

		      y = x.minus(q.times(y));

		      // To match JavaScript %, ensure sign of zero is sign of dividend.
		      if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;

		      return y;
		    };


		    /*
		     *  n * 0 = 0
		     *  n * N = N
		     *  n * I = I
		     *  0 * n = 0
		     *  0 * 0 = 0
		     *  0 * N = N
		     *  0 * I = N
		     *  N * n = N
		     *  N * 0 = N
		     *  N * N = N
		     *  N * I = N
		     *  I * n = I
		     *  I * 0 = N
		     *  I * N = N
		     *  I * I = I
		     *
		     * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
		     * of BigNumber(y, b).
		     */
		    P.multipliedBy = P.times = function (y, b) {
		      var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
		        base, sqrtBase,
		        x = this,
		        xc = x.c,
		        yc = (y = new BigNumber(y, b)).c;

		      // Either NaN, ±Infinity or ±0?
		      if (!xc || !yc || !xc[0] || !yc[0]) {

		        // Return NaN if either is NaN, or one is 0 and the other is Infinity.
		        if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
		          y.c = y.e = y.s = null;
		        } else {
		          y.s *= x.s;

		          // Return ±Infinity if either is ±Infinity.
		          if (!xc || !yc) {
		            y.c = y.e = null;

		          // Return ±0 if either is ±0.
		          } else {
		            y.c = [0];
		            y.e = 0;
		          }
		        }

		        return y;
		      }

		      e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
		      y.s *= x.s;
		      xcL = xc.length;
		      ycL = yc.length;

		      // Ensure xc points to longer array and xcL to its length.
		      if (xcL < ycL) {
		        zc = xc;
		        xc = yc;
		        yc = zc;
		        i = xcL;
		        xcL = ycL;
		        ycL = i;
		      }

		      // Initialise the result array with zeros.
		      for (i = xcL + ycL, zc = []; i--; zc.push(0));

		      base = BASE;
		      sqrtBase = SQRT_BASE;

		      for (i = ycL; --i >= 0;) {
		        c = 0;
		        ylo = yc[i] % sqrtBase;
		        yhi = yc[i] / sqrtBase | 0;

		        for (k = xcL, j = i + k; j > i;) {
		          xlo = xc[--k] % sqrtBase;
		          xhi = xc[k] / sqrtBase | 0;
		          m = yhi * xlo + xhi * ylo;
		          xlo = ylo * xlo + ((m % sqrtBase) * sqrtBase) + zc[j] + c;
		          c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
		          zc[j--] = xlo % base;
		        }

		        zc[j] = c;
		      }

		      if (c) {
		        ++e;
		      } else {
		        zc.splice(0, 1);
		      }

		      return normalise(y, zc, e);
		    };


		    /*
		     * Return a new BigNumber whose value is the value of this BigNumber negated,
		     * i.e. multiplied by -1.
		     */
		    P.negated = function () {
		      var x = new BigNumber(this);
		      x.s = -x.s || null;
		      return x;
		    };


		    /*
		     *  n + 0 = n
		     *  n + N = N
		     *  n + I = I
		     *  0 + n = n
		     *  0 + 0 = 0
		     *  0 + N = N
		     *  0 + I = I
		     *  N + n = N
		     *  N + 0 = N
		     *  N + N = N
		     *  N + I = N
		     *  I + n = I
		     *  I + 0 = I
		     *  I + N = N
		     *  I + I = I
		     *
		     * Return a new BigNumber whose value is the value of this BigNumber plus the value of
		     * BigNumber(y, b).
		     */
		    P.plus = function (y, b) {
		      var t,
		        x = this,
		        a = x.s;

		      y = new BigNumber(y, b);
		      b = y.s;

		      // Either NaN?
		      if (!a || !b) return new BigNumber(NaN);

		      // Signs differ?
		       if (a != b) {
		        y.s = -b;
		        return x.minus(y);
		      }

		      var xe = x.e / LOG_BASE,
		        ye = y.e / LOG_BASE,
		        xc = x.c,
		        yc = y.c;

		      if (!xe || !ye) {

		        // Return ±Infinity if either ±Infinity.
		        if (!xc || !yc) return new BigNumber(a / 0);

		        // Either zero?
		        // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
		        if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
		      }

		      xe = bitFloor(xe);
		      ye = bitFloor(ye);
		      xc = xc.slice();

		      // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
		      if (a = xe - ye) {
		        if (a > 0) {
		          ye = xe;
		          t = yc;
		        } else {
		          a = -a;
		          t = xc;
		        }

		        t.reverse();
		        for (; a--; t.push(0));
		        t.reverse();
		      }

		      a = xc.length;
		      b = yc.length;

		      // Point xc to the longer array, and b to the shorter length.
		      if (a - b < 0) {
		        t = yc;
		        yc = xc;
		        xc = t;
		        b = a;
		      }

		      // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
		      for (a = 0; b;) {
		        a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
		        xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
		      }

		      if (a) {
		        xc = [a].concat(xc);
		        ++ye;
		      }

		      // No need to check for zero, as +x + +y != 0 && -x + -y != 0
		      // ye = MAX_EXP + 1 possible
		      return normalise(y, xc, ye);
		    };


		    /*
		     * If sd is undefined or null or true or false, return the number of significant digits of
		     * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
		     * If sd is true include integer-part trailing zeros in the count.
		     *
		     * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
		     * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
		     * ROUNDING_MODE if rm is omitted.
		     *
		     * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
		     *                     boolean: whether to count integer-part trailing zeros: true or false.
		     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
		     *
		     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
		     */
		    P.precision = P.sd = function (sd, rm) {
		      var c, n, v,
		        x = this;

		      if (sd != null && sd !== !!sd) {
		        intCheck(sd, 1, MAX);
		        if (rm == null) rm = ROUNDING_MODE;
		        else intCheck(rm, 0, 8);

		        return round(new BigNumber(x), sd, rm);
		      }

		      if (!(c = x.c)) return null;
		      v = c.length - 1;
		      n = v * LOG_BASE + 1;

		      if (v = c[v]) {

		        // Subtract the number of trailing zeros of the last element.
		        for (; v % 10 == 0; v /= 10, n--);

		        // Add the number of digits of the first element.
		        for (v = c[0]; v >= 10; v /= 10, n++);
		      }

		      if (sd && x.e + 1 > n) n = x.e + 1;

		      return n;
		    };


		    /*
		     * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
		     * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
		     *
		     * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
		     *
		     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
		     */
		    P.shiftedBy = function (k) {
		      intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
		      return this.times('1e' + k);
		    };


		    /*
		     *  sqrt(-n) =  N
		     *  sqrt(N) =  N
		     *  sqrt(-I) =  N
		     *  sqrt(I) =  I
		     *  sqrt(0) =  0
		     *  sqrt(-0) = -0
		     *
		     * Return a new BigNumber whose value is the square root of the value of this BigNumber,
		     * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
		     */
		    P.squareRoot = P.sqrt = function () {
		      var m, n, r, rep, t,
		        x = this,
		        c = x.c,
		        s = x.s,
		        e = x.e,
		        dp = DECIMAL_PLACES + 4,
		        half = new BigNumber('0.5');

		      // Negative/NaN/Infinity/zero?
		      if (s !== 1 || !c || !c[0]) {
		        return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
		      }

		      // Initial estimate.
		      s = Math.sqrt(+valueOf(x));

		      // Math.sqrt underflow/overflow?
		      // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
		      if (s == 0 || s == 1 / 0) {
		        n = coeffToString(c);
		        if ((n.length + e) % 2 == 0) n += '0';
		        s = Math.sqrt(+n);
		        e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

		        if (s == 1 / 0) {
		          n = '5e' + e;
		        } else {
		          n = s.toExponential();
		          n = n.slice(0, n.indexOf('e') + 1) + e;
		        }

		        r = new BigNumber(n);
		      } else {
		        r = new BigNumber(s + '');
		      }

		      // Check for zero.
		      // r could be zero if MIN_EXP is changed after the this value was created.
		      // This would cause a division by zero (x/t) and hence Infinity below, which would cause
		      // coeffToString to throw.
		      if (r.c[0]) {
		        e = r.e;
		        s = e + dp;
		        if (s < 3) s = 0;

		        // Newton-Raphson iteration.
		        for (; ;) {
		          t = r;
		          r = half.times(t.plus(div(x, t, dp, 1)));

		          if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {

		            // The exponent of r may here be one less than the final result exponent,
		            // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
		            // are indexed correctly.
		            if (r.e < e) --s;
		            n = n.slice(s - 3, s + 1);

		            // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
		            // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
		            // iteration.
		            if (n == '9999' || !rep && n == '4999') {

		              // On the first iteration only, check to see if rounding up gives the
		              // exact result as the nines may infinitely repeat.
		              if (!rep) {
		                round(t, t.e + DECIMAL_PLACES + 2, 0);

		                if (t.times(t).eq(x)) {
		                  r = t;
		                  break;
		                }
		              }

		              dp += 4;
		              s += 4;
		              rep = 1;
		            } else {

		              // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
		              // result. If not, then there are further digits and m will be truthy.
		              if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

		                // Truncate to the first rounding digit.
		                round(r, r.e + DECIMAL_PLACES + 2, 1);
		                m = !r.times(r).eq(x);
		              }

		              break;
		            }
		          }
		        }
		      }

		      return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
		    };


		    /*
		     * Return a string representing the value of this BigNumber in exponential notation and
		     * rounded using ROUNDING_MODE to dp fixed decimal places.
		     *
		     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
		     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
		     *
		     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
		     */
		    P.toExponential = function (dp, rm) {
		      if (dp != null) {
		        intCheck(dp, 0, MAX);
		        dp++;
		      }
		      return format(this, dp, rm, 1);
		    };


		    /*
		     * Return a string representing the value of this BigNumber in fixed-point notation rounding
		     * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
		     *
		     * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
		     * but e.g. (-0.00001).toFixed(0) is '-0'.
		     *
		     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
		     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
		     *
		     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
		     */
		    P.toFixed = function (dp, rm) {
		      if (dp != null) {
		        intCheck(dp, 0, MAX);
		        dp = dp + this.e + 1;
		      }
		      return format(this, dp, rm);
		    };


		    /*
		     * Return a string representing the value of this BigNumber in fixed-point notation rounded
		     * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
		     * of the format or FORMAT object (see BigNumber.set).
		     *
		     * The formatting object may contain some or all of the properties shown below.
		     *
		     * FORMAT = {
		     *   prefix: '',
		     *   groupSize: 3,
		     *   secondaryGroupSize: 0,
		     *   groupSeparator: ',',
		     *   decimalSeparator: '.',
		     *   fractionGroupSize: 0,
		     *   fractionGroupSeparator: '\xA0',      // non-breaking space
		     *   suffix: ''
		     * };
		     *
		     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
		     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
		     * [format] {object} Formatting options. See FORMAT pbject above.
		     *
		     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
		     * '[BigNumber Error] Argument not an object: {format}'
		     */
		    P.toFormat = function (dp, rm, format) {
		      var str,
		        x = this;

		      if (format == null) {
		        if (dp != null && rm && typeof rm == 'object') {
		          format = rm;
		          rm = null;
		        } else if (dp && typeof dp == 'object') {
		          format = dp;
		          dp = rm = null;
		        } else {
		          format = FORMAT;
		        }
		      } else if (typeof format != 'object') {
		        throw Error
		          (bignumberError + 'Argument not an object: ' + format);
		      }

		      str = x.toFixed(dp, rm);

		      if (x.c) {
		        var i,
		          arr = str.split('.'),
		          g1 = +format.groupSize,
		          g2 = +format.secondaryGroupSize,
		          groupSeparator = format.groupSeparator || '',
		          intPart = arr[0],
		          fractionPart = arr[1],
		          isNeg = x.s < 0,
		          intDigits = isNeg ? intPart.slice(1) : intPart,
		          len = intDigits.length;

		        if (g2) {
		          i = g1;
		          g1 = g2;
		          g2 = i;
		          len -= i;
		        }

		        if (g1 > 0 && len > 0) {
		          i = len % g1 || g1;
		          intPart = intDigits.substr(0, i);
		          for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
		          if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
		          if (isNeg) intPart = '-' + intPart;
		        }

		        str = fractionPart
		         ? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize)
		          ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'),
		           '$&' + (format.fractionGroupSeparator || ''))
		          : fractionPart)
		         : intPart;
		      }

		      return (format.prefix || '') + str + (format.suffix || '');
		    };


		    /*
		     * Return an array of two BigNumbers representing the value of this BigNumber as a simple
		     * fraction with an integer numerator and an integer denominator.
		     * The denominator will be a positive non-zero value less than or equal to the specified
		     * maximum denominator. If a maximum denominator is not specified, the denominator will be
		     * the lowest value necessary to represent the number exactly.
		     *
		     * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
		     *
		     * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
		     */
		    P.toFraction = function (md) {
		      var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s,
		        x = this,
		        xc = x.c;

		      if (md != null) {
		        n = new BigNumber(md);

		        // Throw if md is less than one or is not an integer, unless it is Infinity.
		        if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
		          throw Error
		            (bignumberError + 'Argument ' +
		              (n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
		        }
		      }

		      if (!xc) return new BigNumber(x);

		      d = new BigNumber(ONE);
		      n1 = d0 = new BigNumber(ONE);
		      d1 = n0 = new BigNumber(ONE);
		      s = coeffToString(xc);

		      // Determine initial denominator.
		      // d is a power of 10 and the minimum max denominator that specifies the value exactly.
		      e = d.e = s.length - x.e - 1;
		      d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
		      md = !md || n.comparedTo(d) > 0 ? (e > 0 ? d : n1) : n;

		      exp = MAX_EXP;
		      MAX_EXP = 1 / 0;
		      n = new BigNumber(s);

		      // n0 = d1 = 0
		      n0.c[0] = 0;

		      for (; ;)  {
		        q = div(n, d, 0, 1);
		        d2 = d0.plus(q.times(d1));
		        if (d2.comparedTo(md) == 1) break;
		        d0 = d1;
		        d1 = d2;
		        n1 = n0.plus(q.times(d2 = n1));
		        n0 = d2;
		        d = n.minus(q.times(d2 = d));
		        n = d2;
		      }

		      d2 = div(md.minus(d0), d1, 0, 1);
		      n0 = n0.plus(d2.times(n1));
		      d0 = d0.plus(d2.times(d1));
		      n0.s = n1.s = x.s;
		      e = e * 2;

		      // Determine which fraction is closer to x, n0/d0 or n1/d1
		      r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
		          div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];

		      MAX_EXP = exp;

		      return r;
		    };


		    /*
		     * Return the value of this BigNumber converted to a number primitive.
		     */
		    P.toNumber = function () {
		      return +valueOf(this);
		    };


		    /*
		     * Return a string representing the value of this BigNumber rounded to sd significant digits
		     * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
		     * necessary to represent the integer part of the value in fixed-point notation, then use
		     * exponential notation.
		     *
		     * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
		     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
		     *
		     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
		     */
		    P.toPrecision = function (sd, rm) {
		      if (sd != null) intCheck(sd, 1, MAX);
		      return format(this, sd, rm, 2);
		    };


		    /*
		     * Return a string representing the value of this BigNumber in base b, or base 10 if b is
		     * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
		     * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
		     * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
		     * TO_EXP_NEG, return exponential notation.
		     *
		     * [b] {number} Integer, 2 to ALPHABET.length inclusive.
		     *
		     * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
		     */
		    P.toString = function (b) {
		      var str,
		        n = this,
		        s = n.s,
		        e = n.e;

		      // Infinity or NaN?
		      if (e === null) {
		        if (s) {
		          str = 'Infinity';
		          if (s < 0) str = '-' + str;
		        } else {
		          str = 'NaN';
		        }
		      } else {
		        if (b == null) {
		          str = e <= TO_EXP_NEG || e >= TO_EXP_POS
		           ? toExponential(coeffToString(n.c), e)
		           : toFixedPoint(coeffToString(n.c), e, '0');
		        } else if (b === 10 && alphabetHasNormalDecimalDigits) {
		          n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
		          str = toFixedPoint(coeffToString(n.c), n.e, '0');
		        } else {
		          intCheck(b, 2, ALPHABET.length, 'Base');
		          str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
		        }

		        if (s < 0 && n.c[0]) str = '-' + str;
		      }

		      return str;
		    };


		    /*
		     * Return as toString, but do not accept a base argument, and include the minus sign for
		     * negative zero.
		     */
		    P.valueOf = P.toJSON = function () {
		      return valueOf(this);
		    };


		    P._isBigNumber = true;

		    if (configObject != null) BigNumber.set(configObject);

		    return BigNumber;
		  }


		  // PRIVATE HELPER FUNCTIONS

		  // These functions don't need access to variables,
		  // e.g. DECIMAL_PLACES, in the scope of the `clone` function above.


		  function bitFloor(n) {
		    var i = n | 0;
		    return n > 0 || n === i ? i : i - 1;
		  }


		  // Return a coefficient array as a string of base 10 digits.
		  function coeffToString(a) {
		    var s, z,
		      i = 1,
		      j = a.length,
		      r = a[0] + '';

		    for (; i < j;) {
		      s = a[i++] + '';
		      z = LOG_BASE - s.length;
		      for (; z--; s = '0' + s);
		      r += s;
		    }

		    // Determine trailing zeros.
		    for (j = r.length; r.charCodeAt(--j) === 48;);

		    return r.slice(0, j + 1 || 1);
		  }


		  // Compare the value of BigNumbers x and y.
		  function compare(x, y) {
		    var a, b,
		      xc = x.c,
		      yc = y.c,
		      i = x.s,
		      j = y.s,
		      k = x.e,
		      l = y.e;

		    // Either NaN?
		    if (!i || !j) return null;

		    a = xc && !xc[0];
		    b = yc && !yc[0];

		    // Either zero?
		    if (a || b) return a ? b ? 0 : -j : i;

		    // Signs differ?
		    if (i != j) return i;

		    a = i < 0;
		    b = k == l;

		    // Either Infinity?
		    if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;

		    // Compare exponents.
		    if (!b) return k > l ^ a ? 1 : -1;

		    j = (k = xc.length) < (l = yc.length) ? k : l;

		    // Compare digit by digit.
		    for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;

		    // Compare lengths.
		    return k == l ? 0 : k > l ^ a ? 1 : -1;
		  }


		  /*
		   * Check that n is a primitive number, an integer, and in range, otherwise throw.
		   */
		  function intCheck(n, min, max, name) {
		    if (n < min || n > max || n !== mathfloor(n)) {
		      throw Error
		       (bignumberError + (name || 'Argument') + (typeof n == 'number'
		         ? n < min || n > max ? ' out of range: ' : ' not an integer: '
		         : ' not a primitive number: ') + String(n));
		    }
		  }


		  // Assumes finite n.
		  function isOdd(n) {
		    var k = n.c.length - 1;
		    return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
		  }


		  function toExponential(str, e) {
		    return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
		     (e < 0 ? 'e' : 'e+') + e;
		  }


		  function toFixedPoint(str, e, z) {
		    var len, zs;

		    // Negative exponent?
		    if (e < 0) {

		      // Prepend zeros.
		      for (zs = z + '.'; ++e; zs += z);
		      str = zs + str;

		    // Positive exponent
		    } else {
		      len = str.length;

		      // Append zeros.
		      if (++e > len) {
		        for (zs = z, e -= len; --e; zs += z);
		        str += zs;
		      } else if (e < len) {
		        str = str.slice(0, e) + '.' + str.slice(e);
		      }
		    }

		    return str;
		  }


		  // EXPORT


		  BigNumber = clone();
		  BigNumber['default'] = BigNumber.BigNumber = BigNumber;

		  // AMD.
		  if (module.exports) {
		    module.exports = BigNumber;

		  // Browser.
		  } else {
		    if (!globalObject) {
		      globalObject = typeof self != 'undefined' && self ? self : window;
		    }

		    globalObject.BigNumber = BigNumber;
		  }
		})(bignumber); 
	} (bignumber$1));
	return bignumber$1.exports;
}

var hasRequiredStringify;

function requireStringify () {
	if (hasRequiredStringify) return stringify.exports;
	hasRequiredStringify = 1;
	(function (module) {
		var BigNumber = requireBignumber();

		/*
		    json2.js
		    2013-05-26

		    Public Domain.

		    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

		    See http://www.JSON.org/js.html


		    This code should be minified before deployment.
		    See http://javascript.crockford.com/jsmin.html

		    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
		    NOT CONTROL.


		    This file creates a global JSON object containing two methods: stringify
		    and parse.

		        JSON.stringify(value, replacer, space)
		            value       any JavaScript value, usually an object or array.

		            replacer    an optional parameter that determines how object
		                        values are stringified for objects. It can be a
		                        function or an array of strings.

		            space       an optional parameter that specifies the indentation
		                        of nested structures. If it is omitted, the text will
		                        be packed without extra whitespace. If it is a number,
		                        it will specify the number of spaces to indent at each
		                        level. If it is a string (such as '\t' or '&nbsp;'),
		                        it contains the characters used to indent at each level.

		            This method produces a JSON text from a JavaScript value.

		            When an object value is found, if the object contains a toJSON
		            method, its toJSON method will be called and the result will be
		            stringified. A toJSON method does not serialize: it returns the
		            value represented by the name/value pair that should be serialized,
		            or undefined if nothing should be serialized. The toJSON method
		            will be passed the key associated with the value, and this will be
		            bound to the value

		            For example, this would serialize Dates as ISO strings.

		                Date.prototype.toJSON = function (key) {
		                    function f(n) {
		                        // Format integers to have at least two digits.
		                        return n < 10 ? '0' + n : n;
		                    }

		                    return this.getUTCFullYear()   + '-' +
		                         f(this.getUTCMonth() + 1) + '-' +
		                         f(this.getUTCDate())      + 'T' +
		                         f(this.getUTCHours())     + ':' +
		                         f(this.getUTCMinutes())   + ':' +
		                         f(this.getUTCSeconds())   + 'Z';
		                };

		            You can provide an optional replacer method. It will be passed the
		            key and value of each member, with this bound to the containing
		            object. The value that is returned from your method will be
		            serialized. If your method returns undefined, then the member will
		            be excluded from the serialization.

		            If the replacer parameter is an array of strings, then it will be
		            used to select the members to be serialized. It filters the results
		            such that only members with keys listed in the replacer array are
		            stringified.

		            Values that do not have JSON representations, such as undefined or
		            functions, will not be serialized. Such values in objects will be
		            dropped; in arrays they will be replaced with null. You can use
		            a replacer function to replace those with JSON values.
		            JSON.stringify(undefined) returns undefined.

		            The optional space parameter produces a stringification of the
		            value that is filled with line breaks and indentation to make it
		            easier to read.

		            If the space parameter is a non-empty string, then that string will
		            be used for indentation. If the space parameter is a number, then
		            the indentation will be that many spaces.

		            Example:

		            text = JSON.stringify(['e', {pluribus: 'unum'}]);
		            // text is '["e",{"pluribus":"unum"}]'


		            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
		            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

		            text = JSON.stringify([new Date()], function (key, value) {
		                return this[key] instanceof Date ?
		                    'Date(' + this[key] + ')' : value;
		            });
		            // text is '["Date(---current time---)"]'


		        JSON.parse(text, reviver)
		            This method parses a JSON text to produce an object or array.
		            It can throw a SyntaxError exception.

		            The optional reviver parameter is a function that can filter and
		            transform the results. It receives each of the keys and values,
		            and its return value is used instead of the original value.
		            If it returns what it received, then the structure is not modified.
		            If it returns undefined then the member is deleted.

		            Example:

		            // Parse the text. Values that look like ISO date strings will
		            // be converted to Date objects.

		            myData = JSON.parse(text, function (key, value) {
		                var a;
		                if (typeof value === 'string') {
		                    a =
		/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
		                    if (a) {
		                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
		                            +a[5], +a[6]));
		                    }
		                }
		                return value;
		            });

		            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
		                var d;
		                if (typeof value === 'string' &&
		                        value.slice(0, 5) === 'Date(' &&
		                        value.slice(-1) === ')') {
		                    d = new Date(value.slice(5, -1));
		                    if (d) {
		                        return d;
		                    }
		                }
		                return value;
		            });


		    This is a reference implementation. You are free to copy, modify, or
		    redistribute.
		*/

		/*jslint evil: true, regexp: true */

		/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
		    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
		    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
		    lastIndex, length, parse, prototype, push, replace, slice, stringify,
		    test, toJSON, toString, valueOf
		*/


		// Create a JSON object only if one does not already exist. We create the
		// methods in a closure to avoid creating global variables.

		var JSON = module.exports;

		(function () {

		    var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		        gap,
		        indent,
		        meta = {    // table of character substitutions
		            '\b': '\\b',
		            '\t': '\\t',
		            '\n': '\\n',
		            '\f': '\\f',
		            '\r': '\\r',
		            '"' : '\\"',
		            '\\': '\\\\'
		        },
		        rep;


		    function quote(string) {

		// If the string contains no control characters, no quote characters, and no
		// backslash characters, then we can safely slap some quotes around it.
		// Otherwise we must also replace the offending characters with safe escape
		// sequences.

		        escapable.lastIndex = 0;
		        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
		            var c = meta[a];
		            return typeof c === 'string'
		                ? c
		                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
		        }) + '"' : '"' + string + '"';
		    }


		    function str(key, holder) {

		// Produce a string from holder[key].

		        var i,          // The loop counter.
		            k,          // The member key.
		            v,          // The member value.
		            length,
		            mind = gap,
		            partial,
		            value = holder[key],
		            isBigNumber = value != null && (value instanceof BigNumber || BigNumber.isBigNumber(value));

		// If the value has a toJSON method, call it to obtain a replacement value.

		        if (value && typeof value === 'object' &&
		                typeof value.toJSON === 'function') {
		            value = value.toJSON(key);
		        }

		// If we were called with a replacer function, then call the replacer to
		// obtain a replacement value.

		        if (typeof rep === 'function') {
		            value = rep.call(holder, key, value);
		        }

		// What happens next depends on the value's type.

		        switch (typeof value) {
		        case 'string':
		            if (isBigNumber) {
		                return value;
		            } else {
		                return quote(value);
		            }

		        case 'number':

		// JSON numbers must be finite. Encode non-finite numbers as null.

		            return isFinite(value) ? String(value) : 'null';

		        case 'boolean':
		        case 'null':
		        case 'bigint':

		// If the value is a boolean or null, convert it to a string. Note:
		// typeof null does not produce 'null'. The case is included here in
		// the remote chance that this gets fixed someday.

		            return String(value);

		// If the type is 'object', we might be dealing with an object or an array or
		// null.

		        case 'object':

		// Due to a specification blunder in ECMAScript, typeof null is 'object',
		// so watch out for that case.

		            if (!value) {
		                return 'null';
		            }

		// Make an array to hold the partial results of stringifying this object value.

		            gap += indent;
		            partial = [];

		// Is the value an array?

		            if (Object.prototype.toString.apply(value) === '[object Array]') {

		// The value is an array. Stringify every element. Use null as a placeholder
		// for non-JSON values.

		                length = value.length;
		                for (i = 0; i < length; i += 1) {
		                    partial[i] = str(i, value) || 'null';
		                }

		// Join all of the elements together, separated with commas, and wrap them in
		// brackets.

		                v = partial.length === 0
		                    ? '[]'
		                    : gap
		                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
		                    : '[' + partial.join(',') + ']';
		                gap = mind;
		                return v;
		            }

		// If the replacer is an array, use it to select the members to be stringified.

		            if (rep && typeof rep === 'object') {
		                length = rep.length;
		                for (i = 0; i < length; i += 1) {
		                    if (typeof rep[i] === 'string') {
		                        k = rep[i];
		                        v = str(k, value);
		                        if (v) {
		                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
		                        }
		                    }
		                }
		            } else {

		// Otherwise, iterate through all of the keys in the object.

		                Object.keys(value).forEach(function(k) {
		                    var v = str(k, value);
		                    if (v) {
		                        partial.push(quote(k) + (gap ? ': ' : ':') + v);
		                    }
		                });
		            }

		// Join all of the member texts together, separated with commas,
		// and wrap them in braces.

		            v = partial.length === 0
		                ? '{}'
		                : gap
		                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
		                : '{' + partial.join(',') + '}';
		            gap = mind;
		            return v;
		        }
		    }

		// If the JSON object does not yet have a stringify method, give it one.

		    if (typeof JSON.stringify !== 'function') {
		        JSON.stringify = function (value, replacer, space) {

		// The stringify method takes a value and an optional replacer, and an optional
		// space parameter, and returns a JSON text. The replacer can be a function
		// that can replace values, or an array of strings that will select the keys.
		// A default replacer method can be provided. Use of the space parameter can
		// produce text that is more easily readable.

		            var i;
		            gap = '';
		            indent = '';

		// If the space parameter is a number, make an indent string containing that
		// many spaces.

		            if (typeof space === 'number') {
		                for (i = 0; i < space; i += 1) {
		                    indent += ' ';
		                }

		// If the space parameter is a string, it will be used as the indent string.

		            } else if (typeof space === 'string') {
		                indent = space;
		            }

		// If there is a replacer, it must be a function or an array.
		// Otherwise, throw an error.

		            rep = replacer;
		            if (replacer && typeof replacer !== 'function' &&
		                    (typeof replacer !== 'object' ||
		                    typeof replacer.length !== 'number')) {
		                throw new Error('JSON.stringify');
		            }

		// Make a fake root object containing our value under the key of ''.
		// Return the result of stringifying the value.

		            return str('', {'': value});
		        };
		    }
		}()); 
	} (stringify));
	return stringify.exports;
}

var parse;
var hasRequiredParse;

function requireParse () {
	if (hasRequiredParse) return parse;
	hasRequiredParse = 1;
	var BigNumber = null;

	// regexpxs extracted from
	// (c) BSD-3-Clause
	// https://github.com/fastify/secure-json-parse/graphs/contributors and https://github.com/hapijs/bourne/graphs/contributors

	const suspectProtoRx = /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/;
	const suspectConstructorRx = /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;

	/*
	    json_parse.js
	    2012-06-20

	    Public Domain.

	    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

	    This file creates a json_parse function.
	    During create you can (optionally) specify some behavioural switches

	        require('json-bigint')(options)

	            The optional options parameter holds switches that drive certain
	            aspects of the parsing process:
	            * options.strict = true will warn about duplicate-key usage in the json.
	              The default (strict = false) will silently ignore those and overwrite
	              values for keys that are in duplicate use.

	    The resulting function follows this signature:
	        json_parse(text, reviver)
	            This method parses a JSON text to produce an object or array.
	            It can throw a SyntaxError exception.

	            The optional reviver parameter is a function that can filter and
	            transform the results. It receives each of the keys and values,
	            and its return value is used instead of the original value.
	            If it returns what it received, then the structure is not modified.
	            If it returns undefined then the member is deleted.

	            Example:

	            // Parse the text. Values that look like ISO date strings will
	            // be converted to Date objects.

	            myData = json_parse(text, function (key, value) {
	                var a;
	                if (typeof value === 'string') {
	                    a =
	/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
	                    if (a) {
	                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
	                            +a[5], +a[6]));
	                    }
	                }
	                return value;
	            });

	    This is a reference implementation. You are free to copy, modify, or
	    redistribute.

	    This code should be minified before deployment.
	    See http://javascript.crockford.com/jsmin.html

	    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
	    NOT CONTROL.
	*/

	/*members "", "\"", "\/", "\\", at, b, call, charAt, f, fromCharCode,
	    hasOwnProperty, message, n, name, prototype, push, r, t, text
	*/

	var json_parse = function (options) {

	  // This is a function that can parse a JSON text, producing a JavaScript
	  // data structure. It is a simple, recursive descent parser. It does not use
	  // eval or regular expressions, so it can be used as a model for implementing
	  // a JSON parser in other languages.

	  // We are defining the function inside of another function to avoid creating
	  // global variables.

	  // Default options one can override by passing options to the parse()
	  var _options = {
	    strict: false, // not being strict means do not generate syntax errors for "duplicate key"
	    storeAsString: false, // toggles whether the values should be stored as BigNumber (default) or a string
	    alwaysParseAsBig: false, // toggles whether all numbers should be Big
	    useNativeBigInt: false, // toggles whether to use native BigInt instead of bignumber.js
	    protoAction: 'error',
	    constructorAction: 'error',
	  };

	  // If there are options, then use them to override the default _options
	  if (options !== undefined && options !== null) {
	    if (options.strict === true) {
	      _options.strict = true;
	    }
	    if (options.storeAsString === true) {
	      _options.storeAsString = true;
	    }
	    _options.alwaysParseAsBig =
	      options.alwaysParseAsBig === true ? options.alwaysParseAsBig : false;
	    _options.useNativeBigInt =
	      options.useNativeBigInt === true ? options.useNativeBigInt : false;

	    if (typeof options.constructorAction !== 'undefined') {
	      if (
	        options.constructorAction === 'error' ||
	        options.constructorAction === 'ignore' ||
	        options.constructorAction === 'preserve'
	      ) {
	        _options.constructorAction = options.constructorAction;
	      } else {
	        throw new Error(
	          `Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${options.constructorAction}`
	        );
	      }
	    }

	    if (typeof options.protoAction !== 'undefined') {
	      if (
	        options.protoAction === 'error' ||
	        options.protoAction === 'ignore' ||
	        options.protoAction === 'preserve'
	      ) {
	        _options.protoAction = options.protoAction;
	      } else {
	        throw new Error(
	          `Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${options.protoAction}`
	        );
	      }
	    }
	  }

	  var at, // The index of the current character
	    ch, // The current character
	    escapee = {
	      '"': '"',
	      '\\': '\\',
	      '/': '/',
	      b: '\b',
	      f: '\f',
	      n: '\n',
	      r: '\r',
	      t: '\t',
	    },
	    text,
	    error = function (m) {
	      // Call error when something is wrong.

	      throw {
	        name: 'SyntaxError',
	        message: m,
	        at: at,
	        text: text,
	      };
	    },
	    next = function (c) {
	      // If a c parameter is provided, verify that it matches the current character.

	      if (c && c !== ch) {
	        error("Expected '" + c + "' instead of '" + ch + "'");
	      }

	      // Get the next character. When there are no more characters,
	      // return the empty string.

	      ch = text.charAt(at);
	      at += 1;
	      return ch;
	    },
	    number = function () {
	      // Parse a number value.

	      var number,
	        string = '';

	      if (ch === '-') {
	        string = '-';
	        next('-');
	      }
	      while (ch >= '0' && ch <= '9') {
	        string += ch;
	        next();
	      }
	      if (ch === '.') {
	        string += '.';
	        while (next() && ch >= '0' && ch <= '9') {
	          string += ch;
	        }
	      }
	      if (ch === 'e' || ch === 'E') {
	        string += ch;
	        next();
	        if (ch === '-' || ch === '+') {
	          string += ch;
	          next();
	        }
	        while (ch >= '0' && ch <= '9') {
	          string += ch;
	          next();
	        }
	      }
	      number = +string;
	      if (!isFinite(number)) {
	        error('Bad number');
	      } else {
	        if (BigNumber == null) BigNumber = requireBignumber();
	        //if (number > 9007199254740992 || number < -9007199254740992)
	        // Bignumber has stricter check: everything with length > 15 digits disallowed
	        if (string.length > 15)
	          return _options.storeAsString
	            ? string
	            : _options.useNativeBigInt
	            ? BigInt(string)
	            : new BigNumber(string);
	        else
	          return !_options.alwaysParseAsBig
	            ? number
	            : _options.useNativeBigInt
	            ? BigInt(number)
	            : new BigNumber(number);
	      }
	    },
	    string = function () {
	      // Parse a string value.

	      var hex,
	        i,
	        string = '',
	        uffff;

	      // When parsing for string values, we must look for " and \ characters.

	      if (ch === '"') {
	        var startAt = at;
	        while (next()) {
	          if (ch === '"') {
	            if (at - 1 > startAt) string += text.substring(startAt, at - 1);
	            next();
	            return string;
	          }
	          if (ch === '\\') {
	            if (at - 1 > startAt) string += text.substring(startAt, at - 1);
	            next();
	            if (ch === 'u') {
	              uffff = 0;
	              for (i = 0; i < 4; i += 1) {
	                hex = parseInt(next(), 16);
	                if (!isFinite(hex)) {
	                  break;
	                }
	                uffff = uffff * 16 + hex;
	              }
	              string += String.fromCharCode(uffff);
	            } else if (typeof escapee[ch] === 'string') {
	              string += escapee[ch];
	            } else {
	              break;
	            }
	            startAt = at;
	          }
	        }
	      }
	      error('Bad string');
	    },
	    white = function () {
	      // Skip whitespace.

	      while (ch && ch <= ' ') {
	        next();
	      }
	    },
	    word = function () {
	      // true, false, or null.

	      switch (ch) {
	        case 't':
	          next('t');
	          next('r');
	          next('u');
	          next('e');
	          return true;
	        case 'f':
	          next('f');
	          next('a');
	          next('l');
	          next('s');
	          next('e');
	          return false;
	        case 'n':
	          next('n');
	          next('u');
	          next('l');
	          next('l');
	          return null;
	      }
	      error("Unexpected '" + ch + "'");
	    },
	    value, // Place holder for the value function.
	    array = function () {
	      // Parse an array value.

	      var array = [];

	      if (ch === '[') {
	        next('[');
	        white();
	        if (ch === ']') {
	          next(']');
	          return array; // empty array
	        }
	        while (ch) {
	          array.push(value());
	          white();
	          if (ch === ']') {
	            next(']');
	            return array;
	          }
	          next(',');
	          white();
	        }
	      }
	      error('Bad array');
	    },
	    object = function () {
	      // Parse an object value.

	      var key,
	        object = Object.create(null);

	      if (ch === '{') {
	        next('{');
	        white();
	        if (ch === '}') {
	          next('}');
	          return object; // empty object
	        }
	        while (ch) {
	          key = string();
	          white();
	          next(':');
	          if (
	            _options.strict === true &&
	            Object.hasOwnProperty.call(object, key)
	          ) {
	            error('Duplicate key "' + key + '"');
	          }

	          if (suspectProtoRx.test(key) === true) {
	            if (_options.protoAction === 'error') {
	              error('Object contains forbidden prototype property');
	            } else if (_options.protoAction === 'ignore') {
	              value();
	            } else {
	              object[key] = value();
	            }
	          } else if (suspectConstructorRx.test(key) === true) {
	            if (_options.constructorAction === 'error') {
	              error('Object contains forbidden constructor property');
	            } else if (_options.constructorAction === 'ignore') {
	              value();
	            } else {
	              object[key] = value();
	            }
	          } else {
	            object[key] = value();
	          }

	          white();
	          if (ch === '}') {
	            next('}');
	            return object;
	          }
	          next(',');
	          white();
	        }
	      }
	      error('Bad object');
	    };

	  value = function () {
	    // Parse a JSON value. It could be an object, an array, a string, a number,
	    // or a word.

	    white();
	    switch (ch) {
	      case '{':
	        return object();
	      case '[':
	        return array();
	      case '"':
	        return string();
	      case '-':
	        return number();
	      default:
	        return ch >= '0' && ch <= '9' ? number() : word();
	    }
	  };

	  // Return the json_parse function. It will have access to all of the above
	  // functions and variables.

	  return function (source, reviver) {
	    var result;

	    text = source + '';
	    at = 0;
	    ch = ' ';
	    result = value();
	    white();
	    if (ch) {
	      error('Syntax error');
	    }

	    // If there is a reviver function, we recursively walk the new structure,
	    // passing each name/value pair to the reviver function for possible
	    // transformation, starting with a temporary root object that holds the result
	    // in an empty key. If there is not a reviver function, we simply return the
	    // result.

	    return typeof reviver === 'function'
	      ? (function walk(holder, key) {
	          var v,
	            value = holder[key];
	          if (value && typeof value === 'object') {
	            Object.keys(value).forEach(function (k) {
	              v = walk(value, k);
	              if (v !== undefined) {
	                value[k] = v;
	              } else {
	                delete value[k];
	              }
	            });
	          }
	          return reviver.call(holder, key, value);
	        })({ '': result }, '')
	      : result;
	  };
	};

	parse = json_parse;
	return parse;
}

var hasRequiredJsonBigint;

function requireJsonBigint () {
	if (hasRequiredJsonBigint) return jsonBigint.exports;
	hasRequiredJsonBigint = 1;
	var json_stringify = requireStringify().stringify;
	var json_parse     = requireParse();

	jsonBigint.exports = function(options) {
	    return  {
	        parse: json_parse(options),
	        stringify: json_stringify
	    }
	};
	//create the default method members with no options applied for backwards compatibility
	jsonBigint.exports.parse = json_parse();
	jsonBigint.exports.stringify = json_stringify;
	return jsonBigint.exports;
}

var gcpResidency = {};

var hasRequiredGcpResidency;

function requireGcpResidency () {
	if (hasRequiredGcpResidency) return gcpResidency;
	hasRequiredGcpResidency = 1;
	(function (exports) {
		/**
		 * Copyright 2022 Google LLC
		 *
		 * Licensed under the Apache License, Version 2.0 (the "License");
		 * you may not use this file except in compliance with the License.
		 * You may obtain a copy of the License at
		 *
		 *      http://www.apache.org/licenses/LICENSE-2.0
		 *
		 * Unless required by applicable law or agreed to in writing, software
		 * distributed under the License is distributed on an "AS IS" BASIS,
		 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		 * See the License for the specific language governing permissions and
		 * limitations under the License.
		 */
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.GCE_LINUX_BIOS_PATHS = void 0;
		exports.isGoogleCloudServerless = isGoogleCloudServerless;
		exports.isGoogleComputeEngineLinux = isGoogleComputeEngineLinux;
		exports.isGoogleComputeEngineMACAddress = isGoogleComputeEngineMACAddress;
		exports.isGoogleComputeEngine = isGoogleComputeEngine;
		exports.detectGCPResidency = detectGCPResidency;
		const fs_1 = require$$0$2;
		const os_1 = require$$1$1;
		/**
		 * Known paths unique to Google Compute Engine Linux instances
		 */
		exports.GCE_LINUX_BIOS_PATHS = {
		    BIOS_DATE: '/sys/class/dmi/id/bios_date',
		    BIOS_VENDOR: '/sys/class/dmi/id/bios_vendor',
		};
		const GCE_MAC_ADDRESS_REGEX = /^42:01/;
		/**
		 * Determines if the process is running on a Google Cloud Serverless environment (Cloud Run or Cloud Functions instance).
		 *
		 * Uses the:
		 * - {@link https://cloud.google.com/run/docs/container-contract#env-vars Cloud Run environment variables}.
		 * - {@link https://cloud.google.com/functions/docs/env-var Cloud Functions environment variables}.
		 *
		 * @returns {boolean} `true` if the process is running on GCP serverless, `false` otherwise.
		 */
		function isGoogleCloudServerless() {
		    /**
		     * `CLOUD_RUN_JOB` is used for Cloud Run Jobs
		     * - See {@link https://cloud.google.com/run/docs/container-contract#env-vars Cloud Run environment variables}.
		     *
		     * `FUNCTION_NAME` is used in older Cloud Functions environments:
		     * - See {@link https://cloud.google.com/functions/docs/env-var Python 3.7 and Go 1.11}.
		     *
		     * `K_SERVICE` is used in Cloud Run and newer Cloud Functions environments:
		     * - See {@link https://cloud.google.com/run/docs/container-contract#env-vars Cloud Run environment variables}.
		     * - See {@link https://cloud.google.com/functions/docs/env-var Cloud Functions newer runtimes}.
		     */
		    const isGFEnvironment = process.env.CLOUD_RUN_JOB ||
		        process.env.FUNCTION_NAME ||
		        process.env.K_SERVICE;
		    return !!isGFEnvironment;
		}
		/**
		 * Determines if the process is running on a Linux Google Compute Engine instance.
		 *
		 * @returns {boolean} `true` if the process is running on Linux GCE, `false` otherwise.
		 */
		function isGoogleComputeEngineLinux() {
		    if ((0, os_1.platform)() !== 'linux')
		        return false;
		    try {
		        // ensure this file exist
		        (0, fs_1.statSync)(exports.GCE_LINUX_BIOS_PATHS.BIOS_DATE);
		        // ensure this file exist and matches
		        const biosVendor = (0, fs_1.readFileSync)(exports.GCE_LINUX_BIOS_PATHS.BIOS_VENDOR, 'utf8');
		        return /Google/.test(biosVendor);
		    }
		    catch {
		        return false;
		    }
		}
		/**
		 * Determines if the process is running on a Google Compute Engine instance with a known
		 * MAC address.
		 *
		 * @returns {boolean} `true` if the process is running on GCE (as determined by MAC address), `false` otherwise.
		 */
		function isGoogleComputeEngineMACAddress() {
		    const interfaces = (0, os_1.networkInterfaces)();
		    for (const item of Object.values(interfaces)) {
		        if (!item)
		            continue;
		        for (const { mac } of item) {
		            if (GCE_MAC_ADDRESS_REGEX.test(mac)) {
		                return true;
		            }
		        }
		    }
		    return false;
		}
		/**
		 * Determines if the process is running on a Google Compute Engine instance.
		 *
		 * @returns {boolean} `true` if the process is running on GCE, `false` otherwise.
		 */
		function isGoogleComputeEngine() {
		    return isGoogleComputeEngineLinux() || isGoogleComputeEngineMACAddress();
		}
		/**
		 * Determines if the process is running on Google Cloud Platform.
		 *
		 * @returns {boolean} `true` if the process is running on GCP, `false` otherwise.
		 */
		function detectGCPResidency() {
		    return isGoogleCloudServerless() || isGoogleComputeEngine();
		}
		
	} (gcpResidency));
	return gcpResidency;
}

var src$2 = {};

var loggingUtils = {};

var colours = {};

var hasRequiredColours;

function requireColours () {
	if (hasRequiredColours) return colours;
	hasRequiredColours = 1;
	// Copyright 2024 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//     https://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(colours, "__esModule", { value: true });
	colours.Colours = void 0;
	/**
	 * Handles figuring out if we can use ANSI colours and handing out the escape codes.
	 *
	 * This is for package-internal use only, and may change at any time.
	 *
	 * @private
	 * @internal
	 */
	class Colours {
	    /**
	     * @param stream The stream (e.g. process.stderr)
	     * @returns true if the stream should have colourization enabled
	     */
	    static isEnabled(stream) {
	        return (stream && // May happen in browsers.
	            stream.isTTY &&
	            (typeof stream.getColorDepth === 'function'
	                ? stream.getColorDepth() > 2
	                : true));
	    }
	    static refresh() {
	        Colours.enabled = Colours.isEnabled(process === null || process === void 0 ? void 0 : process.stderr);
	        if (!this.enabled) {
	            Colours.reset = '';
	            Colours.bright = '';
	            Colours.dim = '';
	            Colours.red = '';
	            Colours.green = '';
	            Colours.yellow = '';
	            Colours.blue = '';
	            Colours.magenta = '';
	            Colours.cyan = '';
	            Colours.white = '';
	            Colours.grey = '';
	        }
	        else {
	            Colours.reset = '\u001b[0m';
	            Colours.bright = '\u001b[1m';
	            Colours.dim = '\u001b[2m';
	            Colours.red = '\u001b[31m';
	            Colours.green = '\u001b[32m';
	            Colours.yellow = '\u001b[33m';
	            Colours.blue = '\u001b[34m';
	            Colours.magenta = '\u001b[35m';
	            Colours.cyan = '\u001b[36m';
	            Colours.white = '\u001b[37m';
	            Colours.grey = '\u001b[90m';
	        }
	    }
	}
	colours.Colours = Colours;
	Colours.enabled = false;
	Colours.reset = '';
	Colours.bright = '';
	Colours.dim = '';
	Colours.red = '';
	Colours.green = '';
	Colours.yellow = '';
	Colours.blue = '';
	Colours.magenta = '';
	Colours.cyan = '';
	Colours.white = '';
	Colours.grey = '';
	Colours.refresh();
	
	return colours;
}

var hasRequiredLoggingUtils;

function requireLoggingUtils () {
	if (hasRequiredLoggingUtils) return loggingUtils;
	hasRequiredLoggingUtils = 1;
	(function (exports) {
		// Copyright 2021-2024 Google LLC
		//
		// Licensed under the Apache License, Version 2.0 (the "License");
		// you may not use this file except in compliance with the License.
		// You may obtain a copy of the License at
		//
		//     https://www.apache.org/licenses/LICENSE-2.0
		//
		// Unless required by applicable law or agreed to in writing, software
		// distributed under the License is distributed on an "AS IS" BASIS,
		// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		// See the License for the specific language governing permissions and
		// limitations under the License.
		var __createBinding = (loggingUtils && loggingUtils.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __setModuleDefault = (loggingUtils && loggingUtils.__setModuleDefault) || (Object.create ? (function(o, v) {
		    Object.defineProperty(o, "default", { enumerable: true, value: v });
		}) : function(o, v) {
		    o["default"] = v;
		});
		var __importStar = (loggingUtils && loggingUtils.__importStar) || (function () {
		    var ownKeys = function(o) {
		        ownKeys = Object.getOwnPropertyNames || function (o) {
		            var ar = [];
		            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
		            return ar;
		        };
		        return ownKeys(o);
		    };
		    return function (mod) {
		        if (mod && mod.__esModule) return mod;
		        var result = {};
		        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
		        __setModuleDefault(result, mod);
		        return result;
		    };
		})();
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.env = exports.DebugLogBackendBase = exports.placeholder = exports.AdhocDebugLogger = exports.LogSeverity = void 0;
		exports.getNodeBackend = getNodeBackend;
		exports.getDebugBackend = getDebugBackend;
		exports.getStructuredBackend = getStructuredBackend;
		exports.setBackend = setBackend;
		exports.log = log;
		const events_1 = require$$0$3;
		const process = __importStar(require$$1$2);
		const util = __importStar(require$$2);
		const colours_1 = requireColours();
		// Some functions (as noted) are based on the Node standard library, from
		// the following file:
		//
		// https://github.com/nodejs/node/blob/main/lib/internal/util/debuglog.js
		/**
		 * This module defines an ad-hoc debug logger for Google Cloud Platform
		 * client libraries in Node. An ad-hoc debug logger is a tool which lets
		 * users use an external, unified interface (in this case, environment
		 * variables) to determine what logging they want to see at runtime. This
		 * isn't necessarily fed into the console, but is meant to be under the
		 * control of the user. The kind of logging that will be produced by this
		 * is more like "call retry happened", not "events you'd want to record
		 * in Cloud Logger".
		 *
		 * More for Googlers implementing libraries with it:
		 * go/cloud-client-logging-design
		 */
		/**
		 * Possible log levels. These are a subset of Cloud Observability levels.
		 * https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#LogSeverity
		 */
		var LogSeverity;
		(function (LogSeverity) {
		    LogSeverity["DEFAULT"] = "DEFAULT";
		    LogSeverity["DEBUG"] = "DEBUG";
		    LogSeverity["INFO"] = "INFO";
		    LogSeverity["WARNING"] = "WARNING";
		    LogSeverity["ERROR"] = "ERROR";
		})(LogSeverity || (exports.LogSeverity = LogSeverity = {}));
		/**
		 * Our logger instance. This actually contains the meat of dealing
		 * with log lines, including EventEmitter. This contains the function
		 * that will be passed back to users of the package.
		 */
		class AdhocDebugLogger extends events_1.EventEmitter {
		    /**
		     * @param upstream The backend will pass a function that will be
		     *   called whenever our logger function is invoked.
		     */
		    constructor(namespace, upstream) {
		        super();
		        this.namespace = namespace;
		        this.upstream = upstream;
		        this.func = Object.assign(this.invoke.bind(this), {
		            // Also add an instance pointer back to us.
		            instance: this,
		            // And pull over the EventEmitter functionality.
		            on: (event, listener) => this.on(event, listener),
		        });
		        // Convenience methods for log levels.
		        this.func.debug = (...args) => this.invokeSeverity(LogSeverity.DEBUG, ...args);
		        this.func.info = (...args) => this.invokeSeverity(LogSeverity.INFO, ...args);
		        this.func.warn = (...args) => this.invokeSeverity(LogSeverity.WARNING, ...args);
		        this.func.error = (...args) => this.invokeSeverity(LogSeverity.ERROR, ...args);
		        this.func.sublog = (namespace) => log(namespace, this.func);
		    }
		    invoke(fields, ...args) {
		        // Push out any upstream logger first.
		        if (this.upstream) {
		            try {
		                this.upstream(fields, ...args);
		            }
		            catch (e) {
		                // Swallow exceptions to avoid interfering with other logging.
		            }
		        }
		        // Emit sink events.
		        try {
		            this.emit('log', fields, args);
		        }
		        catch (e) {
		            // Swallow exceptions to avoid interfering with other logging.
		        }
		    }
		    invokeSeverity(severity, ...args) {
		        this.invoke({ severity }, ...args);
		    }
		}
		exports.AdhocDebugLogger = AdhocDebugLogger;
		/**
		 * This can be used in place of a real logger while waiting for Promises or disabling logging.
		 */
		exports.placeholder = new AdhocDebugLogger('', () => { }).func;
		/**
		 * The base class for debug logging backends. It's possible to use this, but the
		 * same non-guarantees above still apply (unstable interface, etc).
		 *
		 * @private
		 * @internal
		 */
		class DebugLogBackendBase {
		    constructor() {
		        var _a;
		        this.cached = new Map();
		        this.filters = [];
		        this.filtersSet = false;
		        // Look for the Node config variable for what systems to enable. We'll store
		        // these for the log method below, which will call setFilters() once.
		        let nodeFlag = (_a = process.env[exports.env.nodeEnables]) !== null && _a !== void 0 ? _a : '*';
		        if (nodeFlag === 'all') {
		            nodeFlag = '*';
		        }
		        this.filters = nodeFlag.split(',');
		    }
		    log(namespace, fields, ...args) {
		        try {
		            if (!this.filtersSet) {
		                this.setFilters();
		                this.filtersSet = true;
		            }
		            let logger = this.cached.get(namespace);
		            if (!logger) {
		                logger = this.makeLogger(namespace);
		                this.cached.set(namespace, logger);
		            }
		            logger(fields, ...args);
		        }
		        catch (e) {
		            // Silently ignore all errors; we don't want them to interfere with
		            // the user's running app.
		            // e;
		            console.error(e);
		        }
		    }
		}
		exports.DebugLogBackendBase = DebugLogBackendBase;
		// The basic backend. This one definitely works, but it's less feature-filled.
		//
		// Rather than using util.debuglog, this implements the same basic logic directly.
		// The reason for this decision is that debuglog checks the value of the
		// NODE_DEBUG environment variable before any user code runs; we therefore
		// can't pipe our own enables into it (and util.debuglog will never print unless
		// the user duplicates it into NODE_DEBUG, which isn't reasonable).
		//
		class NodeBackend extends DebugLogBackendBase {
		    constructor() {
		        super(...arguments);
		        // Default to allowing all systems, since we gate earlier based on whether the
		        // variable is empty.
		        this.enabledRegexp = /.*/g;
		    }
		    isEnabled(namespace) {
		        return this.enabledRegexp.test(namespace);
		    }
		    makeLogger(namespace) {
		        if (!this.enabledRegexp.test(namespace)) {
		            return () => { };
		        }
		        return (fields, ...args) => {
		            var _a;
		            // TODO: `fields` needs to be turned into a string here, one way or another.
		            const nscolour = `${colours_1.Colours.green}${namespace}${colours_1.Colours.reset}`;
		            const pid = `${colours_1.Colours.yellow}${process.pid}${colours_1.Colours.reset}`;
		            let level;
		            switch (fields.severity) {
		                case LogSeverity.ERROR:
		                    level = `${colours_1.Colours.red}${fields.severity}${colours_1.Colours.reset}`;
		                    break;
		                case LogSeverity.INFO:
		                    level = `${colours_1.Colours.magenta}${fields.severity}${colours_1.Colours.reset}`;
		                    break;
		                case LogSeverity.WARNING:
		                    level = `${colours_1.Colours.yellow}${fields.severity}${colours_1.Colours.reset}`;
		                    break;
		                default:
		                    level = (_a = fields.severity) !== null && _a !== void 0 ? _a : LogSeverity.DEFAULT;
		                    break;
		            }
		            const msg = util.formatWithOptions({ colors: colours_1.Colours.enabled }, ...args);
		            const filteredFields = Object.assign({}, fields);
		            delete filteredFields.severity;
		            const fieldsJson = Object.getOwnPropertyNames(filteredFields).length
		                ? JSON.stringify(filteredFields)
		                : '';
		            const fieldsColour = fieldsJson
		                ? `${colours_1.Colours.grey}${fieldsJson}${colours_1.Colours.reset}`
		                : '';
		            console.error('%s [%s|%s] %s%s', pid, nscolour, level, msg, fieldsJson ? ` ${fieldsColour}` : '');
		        };
		    }
		    // Regexp patterns below are from here:
		    // https://github.com/nodejs/node/blob/c0aebed4b3395bd65d54b18d1fd00f071002ac20/lib/internal/util/debuglog.js#L36
		    setFilters() {
		        const totalFilters = this.filters.join(',');
		        const regexp = totalFilters
		            .replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
		            .replace(/\*/g, '.*')
		            .replace(/,/g, '$|^');
		        this.enabledRegexp = new RegExp(`^${regexp}$`, 'i');
		    }
		}
		/**
		 * @returns A backend based on Node util.debuglog; this is the default.
		 */
		function getNodeBackend() {
		    return new NodeBackend();
		}
		class DebugBackend extends DebugLogBackendBase {
		    constructor(pkg) {
		        super();
		        this.debugPkg = pkg;
		    }
		    makeLogger(namespace) {
		        const debugLogger = this.debugPkg(namespace);
		        return (fields, ...args) => {
		            // TODO: `fields` needs to be turned into a string here.
		            debugLogger(args[0], ...args.slice(1));
		        };
		    }
		    setFilters() {
		        var _a;
		        const existingFilters = (_a = process.env['NODE_DEBUG']) !== null && _a !== void 0 ? _a : '';
		        process.env['NODE_DEBUG'] = `${existingFilters}${existingFilters ? ',' : ''}${this.filters.join(',')}`;
		    }
		}
		/**
		 * Creates a "debug" package backend. The user must call require('debug') and pass
		 * the resulting object to this function.
		 *
		 * ```
		 *  setBackend(getDebugBackend(require('debug')))
		 * ```
		 *
		 * https://www.npmjs.com/package/debug
		 *
		 * Note: Google does not explicitly endorse or recommend this package; it's just
		 * being provided as an option.
		 *
		 * @returns A backend based on the npm "debug" package.
		 */
		function getDebugBackend(debugPkg) {
		    return new DebugBackend(debugPkg);
		}
		/**
		 * This pretty much works like the Node logger, but it outputs structured
		 * logging JSON matching Google Cloud's ingestion specs. Rather than handling
		 * its own output, it wraps another backend. The passed backend must be a subclass
		 * of `DebugLogBackendBase` (any of the backends exposed by this package will work).
		 */
		class StructuredBackend extends DebugLogBackendBase {
		    constructor(upstream) {
		        var _a;
		        super();
		        this.upstream = (_a = upstream) !== null && _a !== void 0 ? _a : undefined;
		    }
		    makeLogger(namespace) {
		        var _a;
		        const debugLogger = (_a = this.upstream) === null || _a === void 0 ? void 0 : _a.makeLogger(namespace);
		        return (fields, ...args) => {
		            var _a;
		            const severity = (_a = fields.severity) !== null && _a !== void 0 ? _a : LogSeverity.INFO;
		            const json = Object.assign({
		                severity,
		                message: util.format(...args),
		            }, fields);
		            const jsonString = JSON.stringify(json);
		            if (debugLogger) {
		                debugLogger(fields, jsonString);
		            }
		            else {
		                console.log('%s', jsonString);
		            }
		        };
		    }
		    setFilters() {
		        var _a;
		        (_a = this.upstream) === null || _a === void 0 ? void 0 : _a.setFilters();
		    }
		}
		/**
		 * Creates a "structured logging" backend. This pretty much works like the
		 * Node logger, but it outputs structured logging JSON matching Google
		 * Cloud's ingestion specs instead of plain text.
		 *
		 * ```
		 *  setBackend(getStructuredBackend())
		 * ```
		 *
		 * @param upstream If you want to use something besides the Node backend to
		 *   write the actual log lines into, pass that here.
		 * @returns A backend based on Google Cloud structured logging.
		 */
		function getStructuredBackend(upstream) {
		    return new StructuredBackend(upstream);
		}
		/**
		 * The environment variables that we standardized on, for all ad-hoc logging.
		 */
		exports.env = {
		    /**
		     * Filter wildcards specific to the Node syntax, and similar to the built-in
		     * utils.debuglog() environment variable. If missing, disables logging.
		     */
		    nodeEnables: 'GOOGLE_SDK_NODE_LOGGING',
		};
		// Keep a copy of all namespaced loggers so users can reliably .on() them.
		// Note that these cached functions will need to deal with changes in the backend.
		const loggerCache = new Map();
		// Our current global backend. This might be:
		let cachedBackend = undefined;
		/**
		 * Set the backend to use for our log output.
		 * - A backend object
		 * - null to disable logging
		 * - undefined for "nothing yet", defaults to the Node backend
		 *
		 * @param backend Results from one of the get*Backend() functions.
		 */
		function setBackend(backend) {
		    cachedBackend = backend;
		    loggerCache.clear();
		}
		/**
		 * Creates a logging function. Multiple calls to this with the same namespace
		 * will produce the same logger, with the same event emitter hooks.
		 *
		 * Namespaces can be a simple string ("system" name), or a qualified string
		 * (system:subsystem), which can be used for filtering, or for "system:*".
		 *
		 * @param namespace The namespace, a descriptive text string.
		 * @returns A function you can call that works similar to console.log().
		 */
		function log(namespace, parent) {
		    // If the enable environment variable isn't set, do nothing. The user
		    // can still choose to set a backend of their choice using the manual
		    // `setBackend()`.
		    if (!cachedBackend) {
		        const enablesFlag = process.env[exports.env.nodeEnables];
		        if (!enablesFlag) {
		            return exports.placeholder;
		        }
		    }
		    // This might happen mostly if the typings are dropped in a user's code,
		    // or if they're calling from JavaScript.
		    if (!namespace) {
		        return exports.placeholder;
		    }
		    // Handle sub-loggers.
		    if (parent) {
		        namespace = `${parent.instance.namespace}:${namespace}`;
		    }
		    // Reuse loggers so things like event sinks are persistent.
		    const existing = loggerCache.get(namespace);
		    if (existing) {
		        return existing.func;
		    }
		    // Do we have a backend yet?
		    if (cachedBackend === null) {
		        // Explicitly disabled.
		        return exports.placeholder;
		    }
		    else if (cachedBackend === undefined) {
		        // One hasn't been made yet, so default to Node.
		        cachedBackend = getNodeBackend();
		    }
		    // The logger is further wrapped so we can handle the backend changing out.
		    const logger = (() => {
		        let previousBackend = undefined;
		        const newLogger = new AdhocDebugLogger(namespace, (fields, ...args) => {
		            if (previousBackend !== cachedBackend) {
		                // Did the user pass a custom backend?
		                if (cachedBackend === null) {
		                    // Explicitly disabled.
		                    return;
		                }
		                else if (cachedBackend === undefined) {
		                    // One hasn't been made yet, so default to Node.
		                    cachedBackend = getNodeBackend();
		                }
		                previousBackend = cachedBackend;
		            }
		            cachedBackend === null || cachedBackend === void 0 ? void 0 : cachedBackend.log(namespace, fields, ...args);
		        });
		        return newLogger;
		    })();
		    loggerCache.set(namespace, logger);
		    return logger.func;
		}
		
	} (loggingUtils));
	return loggingUtils;
}

var hasRequiredSrc$4;

function requireSrc$4 () {
	if (hasRequiredSrc$4) return src$2;
	hasRequiredSrc$4 = 1;
	(function (exports) {
		// Copyright 2024 Google LLC
		//
		// Licensed under the Apache License, Version 2.0 (the "License");
		// you may not use this file except in compliance with the License.
		// You may obtain a copy of the License at
		//
		//     https://www.apache.org/licenses/LICENSE-2.0
		//
		// Unless required by applicable law or agreed to in writing, software
		// distributed under the License is distributed on an "AS IS" BASIS,
		// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		// See the License for the specific language governing permissions and
		// limitations under the License.
		var __createBinding = (src$2 && src$2.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __exportStar = (src$2 && src$2.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		__exportStar(requireLoggingUtils(), exports);
		
	} (src$2));
	return src$2;
}

var hasRequiredSrc$3;

function requireSrc$3 () {
	if (hasRequiredSrc$3) return src$3;
	hasRequiredSrc$3 = 1;
	(function (exports) {
		/**
		 * Copyright 2018 Google LLC
		 *
		 * Licensed under the Apache License, Version 2.0 (the "License");
		 * you may not use this file except in compliance with the License.
		 * You may obtain a copy of the License at
		 *
		 *      http://www.apache.org/licenses/LICENSE-2.0
		 *
		 * Unless required by applicable law or agreed to in writing, software
		 * distributed under the License is distributed on an "AS IS" BASIS,
		 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		 * See the License for the specific language governing permissions and
		 * limitations under the License.
		 */
		var __createBinding = (src$3 && src$3.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __setModuleDefault = (src$3 && src$3.__setModuleDefault) || (Object.create ? (function(o, v) {
		    Object.defineProperty(o, "default", { enumerable: true, value: v });
		}) : function(o, v) {
		    o["default"] = v;
		});
		var __importStar = (src$3 && src$3.__importStar) || (function () {
		    var ownKeys = function(o) {
		        ownKeys = Object.getOwnPropertyNames || function (o) {
		            var ar = [];
		            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
		            return ar;
		        };
		        return ownKeys(o);
		    };
		    return function (mod) {
		        if (mod && mod.__esModule) return mod;
		        var result = {};
		        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
		        __setModuleDefault(result, mod);
		        return result;
		    };
		})();
		var __exportStar = (src$3 && src$3.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.gcpResidencyCache = exports.METADATA_SERVER_DETECTION = exports.HEADERS = exports.HEADER_VALUE = exports.HEADER_NAME = exports.SECONDARY_HOST_ADDRESS = exports.HOST_ADDRESS = exports.BASE_PATH = void 0;
		exports.instance = instance;
		exports.project = project;
		exports.universe = universe;
		exports.bulk = bulk;
		exports.isAvailable = isAvailable;
		exports.resetIsAvailableCache = resetIsAvailableCache;
		exports.getGCPResidency = getGCPResidency;
		exports.setGCPResidency = setGCPResidency;
		exports.requestTimeout = requestTimeout;
		const gaxios_1 = requireSrc$5();
		const jsonBigint = requireJsonBigint();
		const gcp_residency_1 = requireGcpResidency();
		const logger = __importStar(requireSrc$4());
		exports.BASE_PATH = '/computeMetadata/v1';
		exports.HOST_ADDRESS = 'http://169.254.169.254';
		exports.SECONDARY_HOST_ADDRESS = 'http://metadata.google.internal.';
		exports.HEADER_NAME = 'Metadata-Flavor';
		exports.HEADER_VALUE = 'Google';
		exports.HEADERS = Object.freeze({ [exports.HEADER_NAME]: exports.HEADER_VALUE });
		const log = logger.log('gcp-metadata');
		/**
		 * Metadata server detection override options.
		 *
		 * Available via `process.env.METADATA_SERVER_DETECTION`.
		 */
		exports.METADATA_SERVER_DETECTION = Object.freeze({
		    'assume-present': "don't try to ping the metadata server, but assume it's present",
		    none: "don't try to ping the metadata server, but don't try to use it either",
		    'bios-only': "treat the result of a BIOS probe as canonical (don't fall back to pinging)",
		    'ping-only': 'skip the BIOS probe, and go straight to pinging',
		});
		/**
		 * Returns the base URL while taking into account the GCE_METADATA_HOST
		 * environment variable if it exists.
		 *
		 * @returns The base URL, e.g., http://169.254.169.254/computeMetadata/v1.
		 */
		function getBaseUrl(baseUrl) {
		    if (!baseUrl) {
		        baseUrl =
		            process.env.GCE_METADATA_IP ||
		                process.env.GCE_METADATA_HOST ||
		                exports.HOST_ADDRESS;
		    }
		    // If no scheme is provided default to HTTP:
		    if (!/^https?:\/\//.test(baseUrl)) {
		        baseUrl = `http://${baseUrl}`;
		    }
		    return new URL(exports.BASE_PATH, baseUrl).href;
		}
		// Accepts an options object passed from the user to the API. In previous
		// versions of the API, it referred to a `Request` or an `Axios` request
		// options object.  Now it refers to an object with very limited property
		// names. This is here to help ensure users don't pass invalid options when
		// they  upgrade from 0.4 to 0.5 to 0.8.
		function validate(options) {
		    Object.keys(options).forEach(key => {
		        switch (key) {
		            case 'params':
		            case 'property':
		            case 'headers':
		                break;
		            case 'qs':
		                throw new Error("'qs' is not a valid configuration option. Please use 'params' instead.");
		            default:
		                throw new Error(`'${key}' is not a valid configuration option.`);
		        }
		    });
		}
		async function metadataAccessor(type, options = {}, noResponseRetries = 3, fastFail = false) {
		    const headers = new Headers(exports.HEADERS);
		    let metadataKey = '';
		    let params = {};
		    if (typeof type === 'object') {
		        const metadataAccessor = type;
		        new Headers(metadataAccessor.headers).forEach((value, key) => headers.set(key, value));
		        metadataKey = metadataAccessor.metadataKey;
		        params = metadataAccessor.params || params;
		        noResponseRetries = metadataAccessor.noResponseRetries || noResponseRetries;
		        fastFail = metadataAccessor.fastFail || fastFail;
		    }
		    else {
		        metadataKey = type;
		    }
		    if (typeof options === 'string') {
		        metadataKey += `/${options}`;
		    }
		    else {
		        validate(options);
		        if (options.property) {
		            metadataKey += `/${options.property}`;
		        }
		        new Headers(options.headers).forEach((value, key) => headers.set(key, value));
		        params = options.params || params;
		    }
		    const requestMethod = fastFail ? fastFailMetadataRequest : gaxios_1.request;
		    const req = {
		        url: `${getBaseUrl()}/${metadataKey}`,
		        headers,
		        retryConfig: { noResponseRetries },
		        params,
		        responseType: 'text',
		        timeout: requestTimeout(),
		    };
		    log.info('instance request %j', req);
		    const res = await requestMethod(req);
		    log.info('instance metadata is %s', res.data);
		    const metadataFlavor = res.headers.get(exports.HEADER_NAME);
		    if (metadataFlavor !== exports.HEADER_VALUE) {
		        throw new RangeError(`Invalid response from metadata service: incorrect ${exports.HEADER_NAME} header. Expected '${exports.HEADER_VALUE}', got ${metadataFlavor ? `'${metadataFlavor}'` : 'no header'}`);
		    }
		    if (typeof res.data === 'string') {
		        try {
		            return jsonBigint.parse(res.data);
		        }
		        catch {
		            /* ignore */
		        }
		    }
		    return res.data;
		}
		async function fastFailMetadataRequest(options) {
		    const secondaryOptions = {
		        ...options,
		        url: options.url
		            ?.toString()
		            .replace(getBaseUrl(), getBaseUrl(exports.SECONDARY_HOST_ADDRESS)),
		    };
		    // We race a connection between DNS/IP to metadata server. There are a couple
		    // reasons for this:
		    //
		    // 1. the DNS is slow in some GCP environments; by checking both, we might
		    //    detect the runtime environment significantly faster.
		    // 2. we can't just check the IP, which is tarpitted and slow to respond
		    //    on a user's local machine.
		    //
		    // Returns first resolved promise or if all promises get rejected we return an AggregateError.
		    //
		    // Note, however, if a failure happens prior to a success, a rejection should
		    // occur, this is for folks running locally.
		    //
		    const r1 = (0, gaxios_1.request)(options);
		    const r2 = (0, gaxios_1.request)(secondaryOptions);
		    return Promise.any([r1, r2]);
		}
		/**
		 * Obtain metadata for the current GCE instance.
		 *
		 * @see {@link https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys}
		 *
		 * @example
		 * ```
		 * const serviceAccount: {} = await instance('service-accounts/');
		 * const serviceAccountEmail: string = await instance('service-accounts/default/email');
		 * ```
		 */
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		function instance(options) {
		    return metadataAccessor('instance', options);
		}
		/**
		 * Obtain metadata for the current GCP project.
		 *
		 * @see {@link https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys}
		 *
		 * @example
		 * ```
		 * const projectId: string = await project('project-id');
		 * const numericProjectId: number = await project('numeric-project-id');
		 * ```
		 */
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		function project(options) {
		    return metadataAccessor('project', options);
		}
		/**
		 * Obtain metadata for the current universe.
		 *
		 * @see {@link https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys}
		 *
		 * @example
		 * ```
		 * const universeDomain: string = await universe('universe-domain');
		 * ```
		 */
		function universe(options) {
		    return metadataAccessor('universe', options);
		}
		/**
		 * Retrieve metadata items in parallel.
		 *
		 * @see {@link https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys}
		 *
		 * @example
		 * ```
		 * const data = await bulk([
		 *   {
		 *     metadataKey: 'instance',
		 *   },
		 *   {
		 *     metadataKey: 'project/project-id',
		 *   },
		 * ] as const);
		 *
		 * // data.instance;
		 * // data['project/project-id'];
		 * ```
		 *
		 * @param properties The metadata properties to retrieve
		 * @returns The metadata in `metadatakey:value` format
		 */
		async function bulk(properties) {
		    const r = {};
		    await Promise.all(properties.map(item => {
		        return (async () => {
		            const res = await metadataAccessor(item);
		            const key = item.metadataKey;
		            r[key] = res;
		        })();
		    }));
		    return r;
		}
		/*
		 * How many times should we retry detecting GCP environment.
		 */
		function detectGCPAvailableRetries() {
		    return process.env.DETECT_GCP_RETRIES
		        ? Number(process.env.DETECT_GCP_RETRIES)
		        : 0;
		}
		let cachedIsAvailableResponse;
		/**
		 * Determine if the metadata server is currently available.
		 */
		async function isAvailable() {
		    if (process.env.METADATA_SERVER_DETECTION) {
		        const value = process.env.METADATA_SERVER_DETECTION.trim().toLocaleLowerCase();
		        if (!(value in exports.METADATA_SERVER_DETECTION)) {
		            throw new RangeError(`Unknown \`METADATA_SERVER_DETECTION\` env variable. Got \`${value}\`, but it should be \`${Object.keys(exports.METADATA_SERVER_DETECTION).join('`, `')}\`, or unset`);
		        }
		        switch (value) {
		            case 'assume-present':
		                return true;
		            case 'none':
		                return false;
		            case 'bios-only':
		                return getGCPResidency();
		            // continue, we want to ping the server
		        }
		    }
		    try {
		        // If a user is instantiating several GCP libraries at the same time,
		        // this may result in multiple calls to isAvailable(), to detect the
		        // runtime environment. We use the same promise for each of these calls
		        // to reduce the network load.
		        if (cachedIsAvailableResponse === undefined) {
		            cachedIsAvailableResponse = metadataAccessor('instance', undefined, detectGCPAvailableRetries(), 
		            // If the default HOST_ADDRESS has been overridden, we should not
		            // make an effort to try SECONDARY_HOST_ADDRESS (as we are likely in
		            // a non-GCP environment):
		            !(process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST));
		        }
		        await cachedIsAvailableResponse;
		        return true;
		    }
		    catch (e) {
		        const err = e;
		        if (process.env.DEBUG_AUTH) {
		            console.info(err);
		        }
		        if (err.type === 'request-timeout') {
		            // If running in a GCP environment, metadata endpoint should return
		            // within ms.
		            return false;
		        }
		        if (err.response && err.response.status === 404) {
		            return false;
		        }
		        else {
		            if (!(err.response && err.response.status === 404) &&
		                // A warning is emitted if we see an unexpected err.code, or err.code
		                // is not populated:
		                (!err.code ||
		                    ![
		                        'EHOSTDOWN',
		                        'EHOSTUNREACH',
		                        'ENETUNREACH',
		                        'ENOENT',
		                        'ENOTFOUND',
		                        'ECONNREFUSED',
		                    ].includes(err.code.toString()))) {
		                let code = 'UNKNOWN';
		                if (err.code)
		                    code = err.code.toString();
		                process.emitWarning(`received unexpected error = ${err.message} code = ${code}`, 'MetadataLookupWarning');
		            }
		            // Failure to resolve the metadata service means that it is not available.
		            return false;
		        }
		    }
		}
		/**
		 * reset the memoized isAvailable() lookup.
		 */
		function resetIsAvailableCache() {
		    cachedIsAvailableResponse = undefined;
		}
		/**
		 * A cache for the detected GCP Residency.
		 */
		exports.gcpResidencyCache = null;
		/**
		 * Detects GCP Residency.
		 * Caches results to reduce costs for subsequent calls.
		 *
		 * @see setGCPResidency for setting
		 */
		function getGCPResidency() {
		    if (exports.gcpResidencyCache === null) {
		        setGCPResidency();
		    }
		    return exports.gcpResidencyCache;
		}
		/**
		 * Sets the detected GCP Residency.
		 * Useful for forcing metadata server detection behavior.
		 *
		 * Set `null` to autodetect the environment (default behavior).
		 * @see getGCPResidency for getting
		 */
		function setGCPResidency(value = null) {
		    exports.gcpResidencyCache = value !== null ? value : (0, gcp_residency_1.detectGCPResidency)();
		}
		/**
		 * Obtain the timeout for requests to the metadata server.
		 *
		 * In certain environments and conditions requests can take longer than
		 * the default timeout to complete. This function will determine the
		 * appropriate timeout based on the environment.
		 *
		 * @returns {number} a request timeout duration in milliseconds.
		 */
		function requestTimeout() {
		    return getGCPResidency() ? 0 : 3000;
		}
		__exportStar(requireGcpResidency(), exports);
		
	} (src$3));
	return src$3;
}

var crypto$3 = {};

var crypto$2 = {};

var base64Js = {};

var hasRequiredBase64Js;

function requireBase64Js () {
	if (hasRequiredBase64Js) return base64Js;
	hasRequiredBase64Js = 1;

	base64Js.byteLength = byteLength;
	base64Js.toByteArray = toByteArray;
	base64Js.fromByteArray = fromByteArray;

	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i];
	  revLookup[code.charCodeAt(i)] = i;
	}

	// Support decoding URL-safe base64 strings, as Node.js does.
	// See: https://en.wikipedia.org/wiki/Base64#URL_applications
	revLookup['-'.charCodeAt(0)] = 62;
	revLookup['_'.charCodeAt(0)] = 63;

	function getLens (b64) {
	  var len = b64.length;

	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // Trim off extra bytes after placeholder bytes are found
	  // See: https://github.com/beatgammit/base64-js/issues/42
	  var validLen = b64.indexOf('=');
	  if (validLen === -1) validLen = len;

	  var placeHoldersLen = validLen === len
	    ? 0
	    : 4 - (validLen % 4);

	  return [validLen, placeHoldersLen]
	}

	// base64 is 4/3 + up to two characters of the original data
	function byteLength (b64) {
	  var lens = getLens(b64);
	  var validLen = lens[0];
	  var placeHoldersLen = lens[1];
	  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
	}

	function _byteLength (b64, validLen, placeHoldersLen) {
	  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
	}

	function toByteArray (b64) {
	  var tmp;
	  var lens = getLens(b64);
	  var validLen = lens[0];
	  var placeHoldersLen = lens[1];

	  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));

	  var curByte = 0;

	  // if there are placeholders, only get up to the last complete 4 chars
	  var len = placeHoldersLen > 0
	    ? validLen - 4
	    : validLen;

	  var i;
	  for (i = 0; i < len; i += 4) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 18) |
	      (revLookup[b64.charCodeAt(i + 1)] << 12) |
	      (revLookup[b64.charCodeAt(i + 2)] << 6) |
	      revLookup[b64.charCodeAt(i + 3)];
	    arr[curByte++] = (tmp >> 16) & 0xFF;
	    arr[curByte++] = (tmp >> 8) & 0xFF;
	    arr[curByte++] = tmp & 0xFF;
	  }

	  if (placeHoldersLen === 2) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 2) |
	      (revLookup[b64.charCodeAt(i + 1)] >> 4);
	    arr[curByte++] = tmp & 0xFF;
	  }

	  if (placeHoldersLen === 1) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 10) |
	      (revLookup[b64.charCodeAt(i + 1)] << 4) |
	      (revLookup[b64.charCodeAt(i + 2)] >> 2);
	    arr[curByte++] = (tmp >> 8) & 0xFF;
	    arr[curByte++] = tmp & 0xFF;
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] +
	    lookup[num >> 12 & 0x3F] +
	    lookup[num >> 6 & 0x3F] +
	    lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp =
	      ((uint8[i] << 16) & 0xFF0000) +
	      ((uint8[i + 1] << 8) & 0xFF00) +
	      (uint8[i + 2] & 0xFF);
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    parts.push(
	      lookup[tmp >> 2] +
	      lookup[(tmp << 4) & 0x3F] +
	      '=='
	    );
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
	    parts.push(
	      lookup[tmp >> 10] +
	      lookup[(tmp >> 4) & 0x3F] +
	      lookup[(tmp << 2) & 0x3F] +
	      '='
	    );
	  }

	  return parts.join('')
	}
	return base64Js;
}

var shared$1 = {};

var hasRequiredShared$1;

function requireShared$1 () {
	if (hasRequiredShared$1) return shared$1;
	hasRequiredShared$1 = 1;
	// Copyright 2025 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(shared$1, "__esModule", { value: true });
	shared$1.fromArrayBufferToHex = fromArrayBufferToHex;
	/**
	 * Converts an ArrayBuffer to a hexadecimal string.
	 * @param arrayBuffer The ArrayBuffer to convert to hexadecimal string.
	 * @return The hexadecimal encoding of the ArrayBuffer.
	 */
	function fromArrayBufferToHex(arrayBuffer) {
	    // Convert buffer to byte array.
	    const byteArray = Array.from(new Uint8Array(arrayBuffer));
	    // Convert bytes to hex string.
	    return byteArray
	        .map(byte => {
	        return byte.toString(16).padStart(2, '0');
	    })
	        .join('');
	}
	
	return shared$1;
}

var hasRequiredCrypto$2;

function requireCrypto$2 () {
	if (hasRequiredCrypto$2) return crypto$2;
	hasRequiredCrypto$2 = 1;
	// Copyright 2019 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	/* global window */
	Object.defineProperty(crypto$2, "__esModule", { value: true });
	crypto$2.BrowserCrypto = void 0;
	// This file implements crypto functions we need using in-browser
	// SubtleCrypto interface `window.crypto.subtle`.
	const base64js = requireBase64Js();
	const shared_1 = requireShared$1();
	class BrowserCrypto {
	    constructor() {
	        if (typeof window === 'undefined' ||
	            window.crypto === undefined ||
	            window.crypto.subtle === undefined) {
	            throw new Error("SubtleCrypto not found. Make sure it's an https:// website.");
	        }
	    }
	    async sha256DigestBase64(str) {
	        // SubtleCrypto digest() method is async, so we must make
	        // this method async as well.
	        // To calculate SHA256 digest using SubtleCrypto, we first
	        // need to convert an input string to an ArrayBuffer:
	        const inputBuffer = new TextEncoder().encode(str);
	        // Result is ArrayBuffer as well.
	        const outputBuffer = await window.crypto.subtle.digest('SHA-256', inputBuffer);
	        return base64js.fromByteArray(new Uint8Array(outputBuffer));
	    }
	    randomBytesBase64(count) {
	        const array = new Uint8Array(count);
	        window.crypto.getRandomValues(array);
	        return base64js.fromByteArray(array);
	    }
	    static padBase64(base64) {
	        // base64js requires padding, so let's add some '='
	        while (base64.length % 4 !== 0) {
	            base64 += '=';
	        }
	        return base64;
	    }
	    async verify(pubkey, data, signature) {
	        const algo = {
	            name: 'RSASSA-PKCS1-v1_5',
	            hash: { name: 'SHA-256' },
	        };
	        const dataArray = new TextEncoder().encode(data);
	        const signatureArray = base64js.toByteArray(BrowserCrypto.padBase64(signature));
	        const cryptoKey = await window.crypto.subtle.importKey('jwk', pubkey, algo, true, ['verify']);
	        // SubtleCrypto's verify method is async so we must make
	        // this method async as well.
	        const result = await window.crypto.subtle.verify(algo, cryptoKey, signatureArray, dataArray);
	        return result;
	    }
	    async sign(privateKey, data) {
	        const algo = {
	            name: 'RSASSA-PKCS1-v1_5',
	            hash: { name: 'SHA-256' },
	        };
	        const dataArray = new TextEncoder().encode(data);
	        const cryptoKey = await window.crypto.subtle.importKey('jwk', privateKey, algo, true, ['sign']);
	        // SubtleCrypto's sign method is async so we must make
	        // this method async as well.
	        const result = await window.crypto.subtle.sign(algo, cryptoKey, dataArray);
	        return base64js.fromByteArray(new Uint8Array(result));
	    }
	    decodeBase64StringUtf8(base64) {
	        const uint8array = base64js.toByteArray(BrowserCrypto.padBase64(base64));
	        const result = new TextDecoder().decode(uint8array);
	        return result;
	    }
	    encodeBase64StringUtf8(text) {
	        const uint8array = new TextEncoder().encode(text);
	        const result = base64js.fromByteArray(uint8array);
	        return result;
	    }
	    /**
	     * Computes the SHA-256 hash of the provided string.
	     * @param str The plain text string to hash.
	     * @return A promise that resolves with the SHA-256 hash of the provided
	     *   string in hexadecimal encoding.
	     */
	    async sha256DigestHex(str) {
	        // SubtleCrypto digest() method is async, so we must make
	        // this method async as well.
	        // To calculate SHA256 digest using SubtleCrypto, we first
	        // need to convert an input string to an ArrayBuffer:
	        const inputBuffer = new TextEncoder().encode(str);
	        // Result is ArrayBuffer as well.
	        const outputBuffer = await window.crypto.subtle.digest('SHA-256', inputBuffer);
	        return (0, shared_1.fromArrayBufferToHex)(outputBuffer);
	    }
	    /**
	     * Computes the HMAC hash of a message using the provided crypto key and the
	     * SHA-256 algorithm.
	     * @param key The secret crypto key in utf-8 or ArrayBuffer format.
	     * @param msg The plain text message.
	     * @return A promise that resolves with the HMAC-SHA256 hash in ArrayBuffer
	     *   format.
	     */
	    async signWithHmacSha256(key, msg) {
	        // Convert key, if provided in ArrayBuffer format, to string.
	        const rawKey = typeof key === 'string'
	            ? key
	            : String.fromCharCode(...new Uint16Array(key));
	        const enc = new TextEncoder();
	        const cryptoKey = await window.crypto.subtle.importKey('raw', enc.encode(rawKey), {
	            name: 'HMAC',
	            hash: {
	                name: 'SHA-256',
	            },
	        }, false, ['sign']);
	        return window.crypto.subtle.sign('HMAC', cryptoKey, enc.encode(msg));
	    }
	}
	crypto$2.BrowserCrypto = BrowserCrypto;
	
	return crypto$2;
}

var crypto$1 = {};

var hasRequiredCrypto$1;

function requireCrypto$1 () {
	if (hasRequiredCrypto$1) return crypto$1;
	hasRequiredCrypto$1 = 1;
	// Copyright 2019 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(crypto$1, "__esModule", { value: true });
	crypto$1.NodeCrypto = void 0;
	const crypto = require$$0$4;
	class NodeCrypto {
	    async sha256DigestBase64(str) {
	        return crypto.createHash('sha256').update(str).digest('base64');
	    }
	    randomBytesBase64(count) {
	        return crypto.randomBytes(count).toString('base64');
	    }
	    async verify(pubkey, data, signature) {
	        const verifier = crypto.createVerify('RSA-SHA256');
	        verifier.update(data);
	        verifier.end();
	        return verifier.verify(pubkey, signature, 'base64');
	    }
	    async sign(privateKey, data) {
	        const signer = crypto.createSign('RSA-SHA256');
	        signer.update(data);
	        signer.end();
	        return signer.sign(privateKey, 'base64');
	    }
	    decodeBase64StringUtf8(base64) {
	        return Buffer.from(base64, 'base64').toString('utf-8');
	    }
	    encodeBase64StringUtf8(text) {
	        return Buffer.from(text, 'utf-8').toString('base64');
	    }
	    /**
	     * Computes the SHA-256 hash of the provided string.
	     * @param str The plain text string to hash.
	     * @return A promise that resolves with the SHA-256 hash of the provided
	     *   string in hexadecimal encoding.
	     */
	    async sha256DigestHex(str) {
	        return crypto.createHash('sha256').update(str).digest('hex');
	    }
	    /**
	     * Computes the HMAC hash of a message using the provided crypto key and the
	     * SHA-256 algorithm.
	     * @param key The secret crypto key in utf-8 or ArrayBuffer format.
	     * @param msg The plain text message.
	     * @return A promise that resolves with the HMAC-SHA256 hash in ArrayBuffer
	     *   format.
	     */
	    async signWithHmacSha256(key, msg) {
	        const cryptoKey = typeof key === 'string' ? key : toBuffer(key);
	        return toArrayBuffer(crypto.createHmac('sha256', cryptoKey).update(msg).digest());
	    }
	}
	crypto$1.NodeCrypto = NodeCrypto;
	/**
	 * Converts a Node.js Buffer to an ArrayBuffer.
	 * https://stackoverflow.com/questions/8609289/convert-a-binary-nodejs-buffer-to-javascript-arraybuffer
	 * @param buffer The Buffer input to covert.
	 * @return The ArrayBuffer representation of the input.
	 */
	function toArrayBuffer(buffer) {
	    return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
	}
	/**
	 * Converts an ArrayBuffer to a Node.js Buffer.
	 * @param arrayBuffer The ArrayBuffer input to covert.
	 * @return The Buffer representation of the input.
	 */
	function toBuffer(arrayBuffer) {
	    return Buffer.from(arrayBuffer);
	}
	
	return crypto$1;
}

var hasRequiredCrypto;

function requireCrypto () {
	if (hasRequiredCrypto) return crypto$3;
	hasRequiredCrypto = 1;
	(function (exports) {
		// Copyright 2019 Google LLC
		//
		// Licensed under the Apache License, Version 2.0 (the "License");
		// you may not use this file except in compliance with the License.
		// You may obtain a copy of the License at
		//
		//      http://www.apache.org/licenses/LICENSE-2.0
		//
		// Unless required by applicable law or agreed to in writing, software
		// distributed under the License is distributed on an "AS IS" BASIS,
		// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		// See the License for the specific language governing permissions and
		// limitations under the License.
		/* global window */
		var __createBinding = (crypto$3 && crypto$3.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __exportStar = (crypto$3 && crypto$3.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.createCrypto = createCrypto;
		exports.hasBrowserCrypto = hasBrowserCrypto;
		const crypto_1 = requireCrypto$2();
		const crypto_2 = requireCrypto$1();
		__exportStar(requireShared$1(), exports);
		// Crypto interface will provide required crypto functions.
		// Use `createCrypto()` factory function to create an instance
		// of Crypto. It will either use Node.js `crypto` module, or
		// use browser's SubtleCrypto interface. Since most of the
		// SubtleCrypto methods return promises, we must make those
		// methods return promises here as well, even though in Node.js
		// they are synchronous.
		function createCrypto() {
		    if (hasBrowserCrypto()) {
		        return new crypto_1.BrowserCrypto();
		    }
		    return new crypto_2.NodeCrypto();
		}
		function hasBrowserCrypto() {
		    return (typeof window !== 'undefined' &&
		        typeof window.crypto !== 'undefined' &&
		        typeof window.crypto.subtle !== 'undefined');
		}
		
	} (crypto$3));
	return crypto$3;
}

var computeclient = {};

var oauth2client = {};

var safeBuffer = {exports: {}};

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

var hasRequiredSafeBuffer;

function requireSafeBuffer () {
	if (hasRequiredSafeBuffer) return safeBuffer.exports;
	hasRequiredSafeBuffer = 1;
	(function (module, exports) {
		/* eslint-disable node/no-deprecated-api */
		var buffer = require$$0$5;
		var Buffer = buffer.Buffer;

		// alternative to using Object.keys for old browsers
		function copyProps (src, dst) {
		  for (var key in src) {
		    dst[key] = src[key];
		  }
		}
		if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
		  module.exports = buffer;
		} else {
		  // Copy properties from require('buffer')
		  copyProps(buffer, exports);
		  exports.Buffer = SafeBuffer;
		}

		function SafeBuffer (arg, encodingOrOffset, length) {
		  return Buffer(arg, encodingOrOffset, length)
		}

		SafeBuffer.prototype = Object.create(Buffer.prototype);

		// Copy static methods from Buffer
		copyProps(Buffer, SafeBuffer);

		SafeBuffer.from = function (arg, encodingOrOffset, length) {
		  if (typeof arg === 'number') {
		    throw new TypeError('Argument must not be a number')
		  }
		  return Buffer(arg, encodingOrOffset, length)
		};

		SafeBuffer.alloc = function (size, fill, encoding) {
		  if (typeof size !== 'number') {
		    throw new TypeError('Argument must be a number')
		  }
		  var buf = Buffer(size);
		  if (fill !== undefined) {
		    if (typeof encoding === 'string') {
		      buf.fill(fill, encoding);
		    } else {
		      buf.fill(fill);
		    }
		  } else {
		    buf.fill(0);
		  }
		  return buf
		};

		SafeBuffer.allocUnsafe = function (size) {
		  if (typeof size !== 'number') {
		    throw new TypeError('Argument must be a number')
		  }
		  return Buffer(size)
		};

		SafeBuffer.allocUnsafeSlow = function (size) {
		  if (typeof size !== 'number') {
		    throw new TypeError('Argument must be a number')
		  }
		  return buffer.SlowBuffer(size)
		}; 
	} (safeBuffer, safeBuffer.exports));
	return safeBuffer.exports;
}

var paramBytesForAlg_1;
var hasRequiredParamBytesForAlg;

function requireParamBytesForAlg () {
	if (hasRequiredParamBytesForAlg) return paramBytesForAlg_1;
	hasRequiredParamBytesForAlg = 1;

	function getParamSize(keySize) {
		var result = ((keySize / 8) | 0) + (keySize % 8 === 0 ? 0 : 1);
		return result;
	}

	var paramBytesForAlg = {
		ES256: getParamSize(256),
		ES384: getParamSize(384),
		ES512: getParamSize(521)
	};

	function getParamBytesForAlg(alg) {
		var paramBytes = paramBytesForAlg[alg];
		if (paramBytes) {
			return paramBytes;
		}

		throw new Error('Unknown algorithm "' + alg + '"');
	}

	paramBytesForAlg_1 = getParamBytesForAlg;
	return paramBytesForAlg_1;
}

var ecdsaSigFormatter;
var hasRequiredEcdsaSigFormatter;

function requireEcdsaSigFormatter () {
	if (hasRequiredEcdsaSigFormatter) return ecdsaSigFormatter;
	hasRequiredEcdsaSigFormatter = 1;

	var Buffer = requireSafeBuffer().Buffer;

	var getParamBytesForAlg = requireParamBytesForAlg();

	var MAX_OCTET = 0x80,
		CLASS_UNIVERSAL = 0,
		PRIMITIVE_BIT = 0x20,
		TAG_SEQ = 0x10,
		TAG_INT = 0x02,
		ENCODED_TAG_SEQ = (TAG_SEQ | PRIMITIVE_BIT) | (CLASS_UNIVERSAL << 6),
		ENCODED_TAG_INT = TAG_INT | (CLASS_UNIVERSAL << 6);

	function base64Url(base64) {
		return base64
			.replace(/=/g, '')
			.replace(/\+/g, '-')
			.replace(/\//g, '_');
	}

	function signatureAsBuffer(signature) {
		if (Buffer.isBuffer(signature)) {
			return signature;
		} else if ('string' === typeof signature) {
			return Buffer.from(signature, 'base64');
		}

		throw new TypeError('ECDSA signature must be a Base64 string or a Buffer');
	}

	function derToJose(signature, alg) {
		signature = signatureAsBuffer(signature);
		var paramBytes = getParamBytesForAlg(alg);

		// the DER encoded param should at most be the param size, plus a padding
		// zero, since due to being a signed integer
		var maxEncodedParamLength = paramBytes + 1;

		var inputLength = signature.length;

		var offset = 0;
		if (signature[offset++] !== ENCODED_TAG_SEQ) {
			throw new Error('Could not find expected "seq"');
		}

		var seqLength = signature[offset++];
		if (seqLength === (MAX_OCTET | 1)) {
			seqLength = signature[offset++];
		}

		if (inputLength - offset < seqLength) {
			throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
		}

		if (signature[offset++] !== ENCODED_TAG_INT) {
			throw new Error('Could not find expected "int" for "r"');
		}

		var rLength = signature[offset++];

		if (inputLength - offset - 2 < rLength) {
			throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
		}

		if (maxEncodedParamLength < rLength) {
			throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
		}

		var rOffset = offset;
		offset += rLength;

		if (signature[offset++] !== ENCODED_TAG_INT) {
			throw new Error('Could not find expected "int" for "s"');
		}

		var sLength = signature[offset++];

		if (inputLength - offset !== sLength) {
			throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
		}

		if (maxEncodedParamLength < sLength) {
			throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
		}

		var sOffset = offset;
		offset += sLength;

		if (offset !== inputLength) {
			throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
		}

		var rPadding = paramBytes - rLength,
			sPadding = paramBytes - sLength;

		var dst = Buffer.allocUnsafe(rPadding + rLength + sPadding + sLength);

		for (offset = 0; offset < rPadding; ++offset) {
			dst[offset] = 0;
		}
		signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);

		offset = paramBytes;

		for (var o = offset; offset < o + sPadding; ++offset) {
			dst[offset] = 0;
		}
		signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);

		dst = dst.toString('base64');
		dst = base64Url(dst);

		return dst;
	}

	function countPadding(buf, start, stop) {
		var padding = 0;
		while (start + padding < stop && buf[start + padding] === 0) {
			++padding;
		}

		var needsSign = buf[start + padding] >= MAX_OCTET;
		if (needsSign) {
			--padding;
		}

		return padding;
	}

	function joseToDer(signature, alg) {
		signature = signatureAsBuffer(signature);
		var paramBytes = getParamBytesForAlg(alg);

		var signatureBytes = signature.length;
		if (signatureBytes !== paramBytes * 2) {
			throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
		}

		var rPadding = countPadding(signature, 0, paramBytes);
		var sPadding = countPadding(signature, paramBytes, signature.length);
		var rLength = paramBytes - rPadding;
		var sLength = paramBytes - sPadding;

		var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;

		var shortLength = rsBytes < MAX_OCTET;

		var dst = Buffer.allocUnsafe((shortLength ? 2 : 3) + rsBytes);

		var offset = 0;
		dst[offset++] = ENCODED_TAG_SEQ;
		if (shortLength) {
			// Bit 8 has value "0"
			// bits 7-1 give the length.
			dst[offset++] = rsBytes;
		} else {
			// Bit 8 of first octet has value "1"
			// bits 7-1 give the number of additional length octets.
			dst[offset++] = MAX_OCTET	| 1;
			// length, base 256
			dst[offset++] = rsBytes & 0xff;
		}
		dst[offset++] = ENCODED_TAG_INT;
		dst[offset++] = rLength;
		if (rPadding < 0) {
			dst[offset++] = 0;
			offset += signature.copy(dst, offset, 0, paramBytes);
		} else {
			offset += signature.copy(dst, offset, rPadding, paramBytes);
		}
		dst[offset++] = ENCODED_TAG_INT;
		dst[offset++] = sLength;
		if (sPadding < 0) {
			dst[offset++] = 0;
			signature.copy(dst, offset, paramBytes);
		} else {
			signature.copy(dst, offset, paramBytes + sPadding);
		}

		return dst;
	}

	ecdsaSigFormatter = {
		derToJose: derToJose,
		joseToDer: joseToDer
	};
	return ecdsaSigFormatter;
}

var util = {};

var hasRequiredUtil;

function requireUtil () {
	if (hasRequiredUtil) return util;
	hasRequiredUtil = 1;
	// Copyright 2023 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(util, "__esModule", { value: true });
	util.LRUCache = void 0;
	util.snakeToCamel = snakeToCamel;
	util.originalOrCamelOptions = originalOrCamelOptions;
	util.removeUndefinedValuesInObject = removeUndefinedValuesInObject;
	util.isValidFile = isValidFile;
	util.getWellKnownCertificateConfigFileLocation = getWellKnownCertificateConfigFileLocation;
	const fs = require$$0$2;
	const os = require$$1$1;
	const path = require$$2$1;
	const WELL_KNOWN_CERTIFICATE_CONFIG_FILE = 'certificate_config.json';
	const CLOUDSDK_CONFIG_DIRECTORY = 'gcloud';
	/**
	 * Returns the camel case of a provided string.
	 *
	 * @remarks
	 *
	 * Match any `_` and not `_` pair, then return the uppercase of the not `_`
	 * character.
	 *
	 * @param str the string to convert
	 * @returns the camelCase'd string
	 */
	function snakeToCamel(str) {
	    return str.replace(/([_][^_])/g, match => match.slice(1).toUpperCase());
	}
	/**
	 * Get the value of `obj[key]` or `obj[camelCaseKey]`, with a preference
	 * for original, non-camelCase key.
	 *
	 * @param obj object to lookup a value in
	 * @returns a `get` function for getting `obj[key || snakeKey]`, if available
	 */
	function originalOrCamelOptions(obj) {
	    /**
	     *
	     * @param key an index of object, preferably snake_case
	     * @returns the value `obj[key || snakeKey]`, if available
	     */
	    function get(key) {
	        const o = (obj || {});
	        return o[key] ?? o[snakeToCamel(key)];
	    }
	    return { get };
	}
	/**
	 * A simple LRU cache utility.
	 * Not meant for external usage.
	 *
	 * @experimental
	 */
	class LRUCache {
	    capacity;
	    /**
	     * Maps are in order. Thus, the older item is the first item.
	     *
	     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map}
	     */
	    #cache = new Map();
	    maxAge;
	    constructor(options) {
	        this.capacity = options.capacity;
	        this.maxAge = options.maxAge;
	    }
	    /**
	     * Moves the key to the end of the cache.
	     *
	     * @param key the key to move
	     * @param value the value of the key
	     */
	    #moveToEnd(key, value) {
	        this.#cache.delete(key);
	        this.#cache.set(key, {
	            value,
	            lastAccessed: Date.now(),
	        });
	    }
	    /**
	     * Add an item to the cache.
	     *
	     * @param key the key to upsert
	     * @param value the value of the key
	     */
	    set(key, value) {
	        this.#moveToEnd(key, value);
	        this.#evict();
	    }
	    /**
	     * Get an item from the cache.
	     *
	     * @param key the key to retrieve
	     */
	    get(key) {
	        const item = this.#cache.get(key);
	        if (!item)
	            return;
	        this.#moveToEnd(key, item.value);
	        this.#evict();
	        return item.value;
	    }
	    /**
	     * Maintain the cache based on capacity and TTL.
	     */
	    #evict() {
	        const cutoffDate = this.maxAge ? Date.now() - this.maxAge : 0;
	        /**
	         * Because we know Maps are in order, this item is both the
	         * last item in the list (capacity) and oldest (maxAge).
	         */
	        let oldestItem = this.#cache.entries().next();
	        while (!oldestItem.done &&
	            (this.#cache.size > this.capacity || // too many
	                oldestItem.value[1].lastAccessed < cutoffDate) // too old
	        ) {
	            this.#cache.delete(oldestItem.value[0]);
	            oldestItem = this.#cache.entries().next();
	        }
	    }
	}
	util.LRUCache = LRUCache;
	// Given and object remove fields where value is undefined.
	function removeUndefinedValuesInObject(object) {
	    Object.entries(object).forEach(([key, value]) => {
	        if (value === undefined || value === 'undefined') {
	            delete object[key];
	        }
	    });
	    return object;
	}
	/**
	 * Helper to check if a path points to a valid file.
	 */
	async function isValidFile(filePath) {
	    try {
	        const stats = await fs.promises.lstat(filePath);
	        return stats.isFile();
	    }
	    catch (e) {
	        return false;
	    }
	}
	/**
	 * Determines the well-known gcloud location for the certificate config file.
	 * @returns The platform-specific path to the configuration file.
	 * @internal
	 */
	function getWellKnownCertificateConfigFileLocation() {
	    const configDir = process.env.CLOUDSDK_CONFIG ||
	        (_isWindows()
	            ? path.join(process.env.APPDATA || '', CLOUDSDK_CONFIG_DIRECTORY)
	            : path.join(process.env.HOME || '', '.config', CLOUDSDK_CONFIG_DIRECTORY));
	    return path.join(configDir, WELL_KNOWN_CERTIFICATE_CONFIG_FILE);
	}
	/**
	 * Checks if the current operating system is Windows.
	 * @returns True if the OS is Windows, false otherwise.
	 * @internal
	 */
	function _isWindows() {
	    return os.platform().startsWith('win');
	}
	
	return util;
}

var authclient = {};

var shared = {};

var name = "google-auth-library";
var version = "10.2.1";
var author = "Google Inc.";
var description = "Google APIs Authentication Client Library for Node.js";
var engines = {
	node: ">=18"
};
var main = "./build/src/index.js";
var types = "./build/src/index.d.ts";
var repository = "googleapis/google-auth-library-nodejs.git";
var keywords = [
	"google",
	"api",
	"google apis",
	"client",
	"client library"
];
var dependencies = {
	"base64-js": "^1.3.0",
	"ecdsa-sig-formatter": "^1.0.11",
	gaxios: "^7.0.0",
	"gcp-metadata": "^7.0.0",
	"google-logging-utils": "^1.0.0",
	gtoken: "^8.0.0",
	jws: "^4.0.0"
};
var devDependencies = {
	"@types/base64-js": "^1.2.5",
	"@types/jws": "^3.1.0",
	"@types/mocha": "^10.0.10",
	"@types/mv": "^2.1.0",
	"@types/ncp": "^2.0.1",
	"@types/node": "^22.0.0",
	"@types/sinon": "^17.0.0",
	"assert-rejects": "^1.0.0",
	c8: "^10.0.0",
	codecov: "^3.0.2",
	gts: "^6.0.0",
	"is-docker": "^3.0.0",
	jsdoc: "^4.0.0",
	"jsdoc-fresh": "^4.0.0",
	"jsdoc-region-tag": "^3.0.0",
	karma: "^6.0.0",
	"karma-chrome-launcher": "^3.0.0",
	"karma-coverage": "^2.0.0",
	"karma-firefox-launcher": "^2.0.0",
	"karma-mocha": "^2.0.0",
	"karma-sourcemap-loader": "^0.4.0",
	"karma-webpack": "^5.0.1",
	keypair: "^1.0.4",
	linkinator: "^6.1.2",
	mocha: "^11.1.0",
	mv: "^2.1.1",
	ncp: "^2.0.0",
	nock: "14.0.5",
	"null-loader": "^4.0.0",
	puppeteer: "^24.0.0",
	sinon: "^21.0.0",
	"ts-loader": "^8.0.0",
	typescript: "5.8.2",
	webpack: "^5.21.2",
	"webpack-cli": "^4.0.0"
};
var files = [
	"build/src",
	"!build/src/**/*.map"
];
var scripts = {
	test: "c8 mocha build/test",
	clean: "gts clean",
	prepare: "npm run compile",
	lint: "gts check --no-inline-config",
	compile: "tsc -p .",
	fix: "gts fix",
	pretest: "npm run compile -- --sourceMap",
	docs: "jsdoc -c .jsdoc.js",
	"samples-setup": "cd samples/ && npm link ../ && npm run setup && cd ../",
	"samples-test": "cd samples/ && npm link ../ && npm test && cd ../",
	"system-test": "mocha build/system-test --timeout 60000",
	"presystem-test": "npm run compile -- --sourceMap",
	webpack: "webpack",
	"browser-test": "karma start",
	"docs-test": "linkinator docs",
	"predocs-test": "npm run docs",
	prelint: "cd samples; npm link ../; npm install"
};
var license = "Apache-2.0";
var require$$0 = {
	name: name,
	version: version,
	author: author,
	description: description,
	engines: engines,
	main: main,
	types: types,
	repository: repository,
	keywords: keywords,
	dependencies: dependencies,
	devDependencies: devDependencies,
	files: files,
	scripts: scripts,
	license: license
};

var hasRequiredShared;

function requireShared () {
	if (hasRequiredShared) return shared;
	hasRequiredShared = 1;
	// Copyright 2023 Google LLC
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//    http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(shared, "__esModule", { value: true });
	shared.USER_AGENT = shared.PRODUCT_NAME = shared.pkg = void 0;
	const pkg = require$$0;
	shared.pkg = pkg;
	const PRODUCT_NAME = 'google-api-nodejs-client';
	shared.PRODUCT_NAME = PRODUCT_NAME;
	const USER_AGENT = `${PRODUCT_NAME}/${pkg.version}`;
	shared.USER_AGENT = USER_AGENT;
	
	return shared;
}

var hasRequiredAuthclient;

function requireAuthclient () {
	if (hasRequiredAuthclient) return authclient;
	hasRequiredAuthclient = 1;
	(function (exports) {
		// Copyright 2012 Google LLC
		//
		// Licensed under the Apache License, Version 2.0 (the "License");
		// you may not use this file except in compliance with the License.
		// You may obtain a copy of the License at
		//
		//      http://www.apache.org/licenses/LICENSE-2.0
		//
		// Unless required by applicable law or agreed to in writing, software
		// distributed under the License is distributed on an "AS IS" BASIS,
		// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		// See the License for the specific language governing permissions and
		// limitations under the License.
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.AuthClient = exports.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = exports.DEFAULT_UNIVERSE = void 0;
		const events_1 = require$$0$3;
		const gaxios_1 = requireSrc$5();
		const util_1 = requireUtil();
		const google_logging_utils_1 = requireSrc$4();
		const shared_cjs_1 = requireShared();
		/**
		 * The default cloud universe
		 *
		 * @see {@link AuthJSONOptions.universe_domain}
		 */
		exports.DEFAULT_UNIVERSE = 'googleapis.com';
		/**
		 * The default {@link AuthClientOptions.eagerRefreshThresholdMillis}
		 */
		exports.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = 5 * 60 * 1000;
		/**
		 * The base of all Auth Clients.
		 */
		class AuthClient extends events_1.EventEmitter {
		    apiKey;
		    projectId;
		    /**
		     * The quota project ID. The quota project can be used by client libraries for the billing purpose.
		     * See {@link https://cloud.google.com/docs/quota Working with quotas}
		     */
		    quotaProjectId;
		    /**
		     * The {@link Gaxios `Gaxios`} instance used for making requests.
		     */
		    transporter;
		    credentials = {};
		    eagerRefreshThresholdMillis = exports.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS;
		    forceRefreshOnFailure = false;
		    universeDomain = exports.DEFAULT_UNIVERSE;
		    /**
		     * Symbols that can be added to GaxiosOptions to specify the method name that is
		     * making an RPC call, for logging purposes, as well as a string ID that can be
		     * used to correlate calls and responses.
		     */
		    static RequestMethodNameSymbol = Symbol('request method name');
		    static RequestLogIdSymbol = Symbol('request log id');
		    constructor(opts = {}) {
		        super();
		        const options = (0, util_1.originalOrCamelOptions)(opts);
		        // Shared auth options
		        this.apiKey = opts.apiKey;
		        this.projectId = options.get('project_id') ?? null;
		        this.quotaProjectId = options.get('quota_project_id');
		        this.credentials = options.get('credentials') ?? {};
		        this.universeDomain = options.get('universe_domain') ?? exports.DEFAULT_UNIVERSE;
		        // Shared client options
		        this.transporter = opts.transporter ?? new gaxios_1.Gaxios(opts.transporterOptions);
		        if (options.get('useAuthRequestParameters') !== false) {
		            this.transporter.interceptors.request.add(AuthClient.DEFAULT_REQUEST_INTERCEPTOR);
		            this.transporter.interceptors.response.add(AuthClient.DEFAULT_RESPONSE_INTERCEPTOR);
		        }
		        if (opts.eagerRefreshThresholdMillis) {
		            this.eagerRefreshThresholdMillis = opts.eagerRefreshThresholdMillis;
		        }
		        this.forceRefreshOnFailure = opts.forceRefreshOnFailure ?? false;
		    }
		    /**
		     * A {@link fetch `fetch`} compliant API for {@link AuthClient}.
		     *
		     * @see {@link AuthClient.request} for the classic method.
		     *
		     * @remarks
		     *
		     * This is useful as a drop-in replacement for `fetch` API usage.
		     *
		     * @example
		     *
		     * ```ts
		     * const authClient = new AuthClient();
		     * const fetchWithAuthClient: typeof fetch = (...args) => authClient.fetch(...args);
		     * await fetchWithAuthClient('https://example.com');
		     * ```
		     *
		     * @param args `fetch` API or {@link Gaxios.fetch `Gaxios#fetch`} parameters
		     * @returns the {@link GaxiosResponse} with Gaxios-added properties
		     */
		    fetch(...args) {
		        // Up to 2 parameters in either overload
		        const input = args[0];
		        const init = args[1];
		        let url = undefined;
		        const headers = new Headers();
		        // prepare URL
		        if (typeof input === 'string') {
		            url = new URL(input);
		        }
		        else if (input instanceof URL) {
		            url = input;
		        }
		        else if (input && input.url) {
		            url = new URL(input.url);
		        }
		        // prepare headers
		        if (input && typeof input === 'object' && 'headers' in input) {
		            gaxios_1.Gaxios.mergeHeaders(headers, input.headers);
		        }
		        if (init) {
		            gaxios_1.Gaxios.mergeHeaders(headers, new Headers(init.headers));
		        }
		        // prepare request
		        if (typeof input === 'object' && !(input instanceof URL)) {
		            // input must have been a non-URL object
		            return this.request({ ...init, ...input, headers, url });
		        }
		        else {
		            // input must have been a string or URL
		            return this.request({ ...init, headers, url });
		        }
		    }
		    /**
		     * Sets the auth credentials.
		     */
		    setCredentials(credentials) {
		        this.credentials = credentials;
		    }
		    /**
		     * Append additional headers, e.g., x-goog-user-project, shared across the
		     * classes inheriting AuthClient. This method should be used by any method
		     * that overrides getRequestMetadataAsync(), which is a shared helper for
		     * setting request information in both gRPC and HTTP API calls.
		     *
		     * @param headers object to append additional headers to.
		     */
		    addSharedMetadataHeaders(headers) {
		        // quota_project_id, stored in application_default_credentials.json, is set in
		        // the x-goog-user-project header, to indicate an alternate account for
		        // billing and quota:
		        if (!headers.has('x-goog-user-project') && // don't override a value the user sets.
		            this.quotaProjectId) {
		            headers.set('x-goog-user-project', this.quotaProjectId);
		        }
		        return headers;
		    }
		    /**
		     * Adds the `x-goog-user-project` and `authorization` headers to the target Headers
		     * object, if they exist on the source.
		     *
		     * @param target the headers to target
		     * @param source the headers to source from
		     * @returns the target headers
		     */
		    addUserProjectAndAuthHeaders(target, source) {
		        const xGoogUserProject = source.get('x-goog-user-project');
		        const authorizationHeader = source.get('authorization');
		        if (xGoogUserProject) {
		            target.set('x-goog-user-project', xGoogUserProject);
		        }
		        if (authorizationHeader) {
		            target.set('authorization', authorizationHeader);
		        }
		        return target;
		    }
		    static log = (0, google_logging_utils_1.log)('auth');
		    static DEFAULT_REQUEST_INTERCEPTOR = {
		        resolved: async (config) => {
		            // Set `x-goog-api-client`, if not already set
		            if (!config.headers.has('x-goog-api-client')) {
		                const nodeVersion = process.version.replace(/^v/, '');
		                config.headers.set('x-goog-api-client', `gl-node/${nodeVersion}`);
		            }
		            // Set `User-Agent`
		            const userAgent = config.headers.get('User-Agent');
		            if (!userAgent) {
		                config.headers.set('User-Agent', shared_cjs_1.USER_AGENT);
		            }
		            else if (!userAgent.includes(`${shared_cjs_1.PRODUCT_NAME}/`)) {
		                config.headers.set('User-Agent', `${userAgent} ${shared_cjs_1.USER_AGENT}`);
		            }
		            try {
		                const symbols = config;
		                const methodName = symbols[AuthClient.RequestMethodNameSymbol];
		                // This doesn't need to be very unique or interesting, it's just an aid for
		                // matching requests to responses.
		                const logId = `${Math.floor(Math.random() * 1000)}`;
		                symbols[AuthClient.RequestLogIdSymbol] = logId;
		                // Boil down the object we're printing out.
		                const logObject = {
		                    url: config.url,
		                    headers: config.headers,
		                };
		                if (methodName) {
		                    AuthClient.log.info('%s [%s] request %j', methodName, logId, logObject);
		                }
		                else {
		                    AuthClient.log.info('[%s] request %j', logId, logObject);
		                }
		            }
		            catch (e) {
		                // Logging must not create new errors; swallow them all.
		            }
		            return config;
		        },
		    };
		    static DEFAULT_RESPONSE_INTERCEPTOR = {
		        resolved: async (response) => {
		            try {
		                const symbols = response.config;
		                const methodName = symbols[AuthClient.RequestMethodNameSymbol];
		                const logId = symbols[AuthClient.RequestLogIdSymbol];
		                if (methodName) {
		                    AuthClient.log.info('%s [%s] response %j', methodName, logId, response.data);
		                }
		                else {
		                    AuthClient.log.info('[%s] response %j', logId, response.data);
		                }
		            }
		            catch (e) {
		                // Logging must not create new errors; swallow them all.
		            }
		            return response;
		        },
		        rejected: async (error) => {
		            try {
		                const symbols = error.config;
		                const methodName = symbols[AuthClient.RequestMethodNameSymbol];
		                const logId = symbols[AuthClient.RequestLogIdSymbol];
		                if (methodName) {
		                    AuthClient.log.info('%s [%s] error %j', methodName, logId, error.response?.data);
		                }
		                else {
		                    AuthClient.log.error('[%s] error %j', logId, error.response?.data);
		                }
		            }
		            catch (e) {
		                // Logging must not create new errors; swallow them all.
		            }
		            // Re-throw the error.
		            throw error;
		        },
		    };
		    /**
		     * Sets the method name that is making a Gaxios request, so that logging may tag
		     * log lines with the operation.
		     * @param config A Gaxios request config
		     * @param methodName The method name making the call
		     */
		    static setMethodName(config, methodName) {
		        try {
		            const symbols = config;
		            symbols[AuthClient.RequestMethodNameSymbol] = methodName;
		        }
		        catch (e) {
		            // Logging must not create new errors; swallow them all.
		        }
		    }
		    /**
		     * Retry config for Auth-related requests.
		     *
		     * @remarks
		     *
		     * This is not a part of the default {@link AuthClient.transporter transporter/gaxios}
		     * config as some downstream APIs would prefer if customers explicitly enable retries,
		     * such as GCS.
		     */
		    static get RETRY_CONFIG() {
		        return {
		            retry: true,
		            retryConfig: {
		                httpMethodsToRetry: ['GET', 'PUT', 'POST', 'HEAD', 'OPTIONS', 'DELETE'],
		            },
		        };
		    }
		}
		exports.AuthClient = AuthClient;
		
	} (authclient));
	return authclient;
}

var loginticket = {};

var hasRequiredLoginticket;

function requireLoginticket () {
	if (hasRequiredLoginticket) return loginticket;
	hasRequiredLoginticket = 1;
	// Copyright 2014 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(loginticket, "__esModule", { value: true });
	loginticket.LoginTicket = void 0;
	class LoginTicket {
	    envelope;
	    payload;
	    /**
	     * Create a simple class to extract user ID from an ID Token
	     *
	     * @param {string} env Envelope of the jwt
	     * @param {TokenPayload} pay Payload of the jwt
	     * @constructor
	     */
	    constructor(env, pay) {
	        this.envelope = env;
	        this.payload = pay;
	    }
	    getEnvelope() {
	        return this.envelope;
	    }
	    getPayload() {
	        return this.payload;
	    }
	    /**
	     * Create a simple class to extract user ID from an ID Token
	     *
	     * @return The user ID
	     */
	    getUserId() {
	        const payload = this.getPayload();
	        if (payload && payload.sub) {
	            return payload.sub;
	        }
	        return null;
	    }
	    /**
	     * Returns attributes from the login ticket.  This can contain
	     * various information about the user session.
	     *
	     * @return The envelope and payload
	     */
	    getAttributes() {
	        return { envelope: this.getEnvelope(), payload: this.getPayload() };
	    }
	}
	loginticket.LoginTicket = LoginTicket;
	
	return loginticket;
}

var hasRequiredOauth2client;

function requireOauth2client () {
	if (hasRequiredOauth2client) return oauth2client;
	hasRequiredOauth2client = 1;
	// Copyright 2019 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(oauth2client, "__esModule", { value: true });
	oauth2client.OAuth2Client = oauth2client.ClientAuthentication = oauth2client.CertificateFormat = oauth2client.CodeChallengeMethod = void 0;
	const gaxios_1 = requireSrc$5();
	const querystring = require$$1$3;
	const stream = require$$3;
	const formatEcdsa = requireEcdsaSigFormatter();
	const util_1 = requireUtil();
	const crypto_1 = requireCrypto();
	const authclient_1 = requireAuthclient();
	const loginticket_1 = requireLoginticket();
	var CodeChallengeMethod;
	(function (CodeChallengeMethod) {
	    CodeChallengeMethod["Plain"] = "plain";
	    CodeChallengeMethod["S256"] = "S256";
	})(CodeChallengeMethod || (oauth2client.CodeChallengeMethod = CodeChallengeMethod = {}));
	var CertificateFormat;
	(function (CertificateFormat) {
	    CertificateFormat["PEM"] = "PEM";
	    CertificateFormat["JWK"] = "JWK";
	})(CertificateFormat || (oauth2client.CertificateFormat = CertificateFormat = {}));
	/**
	 * The client authentication type. Supported values are basic, post, and none.
	 * https://datatracker.ietf.org/doc/html/rfc7591#section-2
	 */
	var ClientAuthentication;
	(function (ClientAuthentication) {
	    ClientAuthentication["ClientSecretPost"] = "ClientSecretPost";
	    ClientAuthentication["ClientSecretBasic"] = "ClientSecretBasic";
	    ClientAuthentication["None"] = "None";
	})(ClientAuthentication || (oauth2client.ClientAuthentication = ClientAuthentication = {}));
	class OAuth2Client extends authclient_1.AuthClient {
	    redirectUri;
	    certificateCache = {};
	    certificateExpiry = null;
	    certificateCacheFormat = CertificateFormat.PEM;
	    refreshTokenPromises = new Map();
	    endpoints;
	    issuers;
	    clientAuthentication;
	    // TODO: refactor tests to make this private
	    _clientId;
	    // TODO: refactor tests to make this private
	    _clientSecret;
	    refreshHandler;
	    /**
	     * An OAuth2 Client for Google APIs.
	     *
	     * @param options The OAuth2 Client Options. Passing an `clientId` directly is **@DEPRECATED**.
	     * @param clientSecret **@DEPRECATED**. Provide a {@link OAuth2ClientOptions `OAuth2ClientOptions`} object in the first parameter instead.
	     * @param redirectUri **@DEPRECATED**. Provide a {@link OAuth2ClientOptions `OAuth2ClientOptions`} object in the first parameter instead.
	     */
	    constructor(options = {}, 
	    /**
	     * @deprecated - provide a {@link OAuth2ClientOptions `OAuth2ClientOptions`} object in the first parameter instead
	     */
	    clientSecret, 
	    /**
	     * @deprecated - provide a {@link OAuth2ClientOptions `OAuth2ClientOptions`} object in the first parameter instead
	     */
	    redirectUri) {
	        super(typeof options === 'object' ? options : {});
	        if (typeof options !== 'object') {
	            options = {
	                clientId: options,
	                clientSecret,
	                redirectUri,
	            };
	        }
	        this._clientId = options.clientId || options.client_id;
	        this._clientSecret = options.clientSecret || options.client_secret;
	        this.redirectUri = options.redirectUri || options.redirect_uris?.[0];
	        this.endpoints = {
	            tokenInfoUrl: 'https://oauth2.googleapis.com/tokeninfo',
	            oauth2AuthBaseUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
	            oauth2TokenUrl: 'https://oauth2.googleapis.com/token',
	            oauth2RevokeUrl: 'https://oauth2.googleapis.com/revoke',
	            oauth2FederatedSignonPemCertsUrl: 'https://www.googleapis.com/oauth2/v1/certs',
	            oauth2FederatedSignonJwkCertsUrl: 'https://www.googleapis.com/oauth2/v3/certs',
	            oauth2IapPublicKeyUrl: 'https://www.gstatic.com/iap/verify/public_key',
	            ...options.endpoints,
	        };
	        this.clientAuthentication =
	            options.clientAuthentication || ClientAuthentication.ClientSecretPost;
	        this.issuers = options.issuers || [
	            'accounts.google.com',
	            'https://accounts.google.com',
	            this.universeDomain,
	        ];
	    }
	    /**
	     * @deprecated use instance's {@link OAuth2Client.endpoints}
	     */
	    static GOOGLE_TOKEN_INFO_URL = 'https://oauth2.googleapis.com/tokeninfo';
	    /**
	     * Clock skew - five minutes in seconds
	     */
	    static CLOCK_SKEW_SECS_ = 300;
	    /**
	     * The default max Token Lifetime is one day in seconds
	     */
	    static DEFAULT_MAX_TOKEN_LIFETIME_SECS_ = 86400;
	    /**
	     * Generates URL for consent page landing.
	     * @param opts Options.
	     * @return URL to consent page.
	     */
	    generateAuthUrl(opts = {}) {
	        if (opts.code_challenge_method && !opts.code_challenge) {
	            throw new Error('If a code_challenge_method is provided, code_challenge must be included.');
	        }
	        opts.response_type = opts.response_type || 'code';
	        opts.client_id = opts.client_id || this._clientId;
	        opts.redirect_uri = opts.redirect_uri || this.redirectUri;
	        // Allow scopes to be passed either as array or a string
	        if (Array.isArray(opts.scope)) {
	            opts.scope = opts.scope.join(' ');
	        }
	        const rootUrl = this.endpoints.oauth2AuthBaseUrl.toString();
	        return (rootUrl +
	            '?' +
	            querystring.stringify(opts));
	    }
	    generateCodeVerifier() {
	        // To make the code compatible with browser SubtleCrypto we need to make
	        // this method async.
	        throw new Error('generateCodeVerifier is removed, please use generateCodeVerifierAsync instead.');
	    }
	    /**
	     * Convenience method to automatically generate a code_verifier, and its
	     * resulting SHA256. If used, this must be paired with a S256
	     * code_challenge_method.
	     *
	     * For a full example see:
	     * https://github.com/googleapis/google-auth-library-nodejs/blob/main/samples/oauth2-codeVerifier.js
	     */
	    async generateCodeVerifierAsync() {
	        // base64 encoding uses 6 bits per character, and we want to generate128
	        // characters. 6*128/8 = 96.
	        const crypto = (0, crypto_1.createCrypto)();
	        const randomString = crypto.randomBytesBase64(96);
	        // The valid characters in the code_verifier are [A-Z]/[a-z]/[0-9]/
	        // "-"/"."/"_"/"~". Base64 encoded strings are pretty close, so we're just
	        // swapping out a few chars.
	        const codeVerifier = randomString
	            .replace(/\+/g, '~')
	            .replace(/=/g, '_')
	            .replace(/\//g, '-');
	        // Generate the base64 encoded SHA256
	        const unencodedCodeChallenge = await crypto.sha256DigestBase64(codeVerifier);
	        // We need to use base64UrlEncoding instead of standard base64
	        const codeChallenge = unencodedCodeChallenge
	            .split('=')[0]
	            .replace(/\+/g, '-')
	            .replace(/\//g, '_');
	        return { codeVerifier, codeChallenge };
	    }
	    getToken(codeOrOptions, callback) {
	        const options = typeof codeOrOptions === 'string' ? { code: codeOrOptions } : codeOrOptions;
	        if (callback) {
	            this.getTokenAsync(options).then(r => callback(null, r.tokens, r.res), e => callback(e, null, e.response));
	        }
	        else {
	            return this.getTokenAsync(options);
	        }
	    }
	    async getTokenAsync(options) {
	        const url = this.endpoints.oauth2TokenUrl.toString();
	        const headers = new Headers();
	        const values = {
	            client_id: options.client_id || this._clientId,
	            code_verifier: options.codeVerifier,
	            code: options.code,
	            grant_type: 'authorization_code',
	            redirect_uri: options.redirect_uri || this.redirectUri,
	        };
	        if (this.clientAuthentication === ClientAuthentication.ClientSecretBasic) {
	            const basic = Buffer.from(`${this._clientId}:${this._clientSecret}`);
	            headers.set('authorization', `Basic ${basic.toString('base64')}`);
	        }
	        if (this.clientAuthentication === ClientAuthentication.ClientSecretPost) {
	            values.client_secret = this._clientSecret;
	        }
	        const opts = {
	            ...OAuth2Client.RETRY_CONFIG,
	            method: 'POST',
	            url,
	            data: new URLSearchParams((0, util_1.removeUndefinedValuesInObject)(values)),
	            headers,
	        };
	        authclient_1.AuthClient.setMethodName(opts, 'getTokenAsync');
	        const res = await this.transporter.request(opts);
	        const tokens = res.data;
	        if (res.data && res.data.expires_in) {
	            tokens.expiry_date = new Date().getTime() + res.data.expires_in * 1000;
	            delete tokens.expires_in;
	        }
	        this.emit('tokens', tokens);
	        return { tokens, res };
	    }
	    /**
	     * Refreshes the access token.
	     * @param refresh_token Existing refresh token.
	     * @private
	     */
	    async refreshToken(refreshToken) {
	        if (!refreshToken) {
	            return this.refreshTokenNoCache(refreshToken);
	        }
	        // If a request to refresh using the same token has started,
	        // return the same promise.
	        if (this.refreshTokenPromises.has(refreshToken)) {
	            return this.refreshTokenPromises.get(refreshToken);
	        }
	        const p = this.refreshTokenNoCache(refreshToken).then(r => {
	            this.refreshTokenPromises.delete(refreshToken);
	            return r;
	        }, e => {
	            this.refreshTokenPromises.delete(refreshToken);
	            throw e;
	        });
	        this.refreshTokenPromises.set(refreshToken, p);
	        return p;
	    }
	    async refreshTokenNoCache(refreshToken) {
	        if (!refreshToken) {
	            throw new Error('No refresh token is set.');
	        }
	        const url = this.endpoints.oauth2TokenUrl.toString();
	        const data = {
	            refresh_token: refreshToken,
	            client_id: this._clientId,
	            client_secret: this._clientSecret,
	            grant_type: 'refresh_token',
	        };
	        let res;
	        try {
	            const opts = {
	                ...OAuth2Client.RETRY_CONFIG,
	                method: 'POST',
	                url,
	                data: new URLSearchParams((0, util_1.removeUndefinedValuesInObject)(data)),
	            };
	            authclient_1.AuthClient.setMethodName(opts, 'refreshTokenNoCache');
	            // request for new token
	            res = await this.transporter.request(opts);
	        }
	        catch (e) {
	            if (e instanceof gaxios_1.GaxiosError &&
	                e.message === 'invalid_grant' &&
	                e.response?.data &&
	                /ReAuth/i.test(e.response.data.error_description)) {
	                e.message = JSON.stringify(e.response.data);
	            }
	            throw e;
	        }
	        const tokens = res.data;
	        // TODO: de-duplicate this code from a few spots
	        if (res.data && res.data.expires_in) {
	            tokens.expiry_date = new Date().getTime() + res.data.expires_in * 1000;
	            delete tokens.expires_in;
	        }
	        this.emit('tokens', tokens);
	        return { tokens, res };
	    }
	    refreshAccessToken(callback) {
	        if (callback) {
	            this.refreshAccessTokenAsync().then(r => callback(null, r.credentials, r.res), callback);
	        }
	        else {
	            return this.refreshAccessTokenAsync();
	        }
	    }
	    async refreshAccessTokenAsync() {
	        const r = await this.refreshToken(this.credentials.refresh_token);
	        const tokens = r.tokens;
	        tokens.refresh_token = this.credentials.refresh_token;
	        this.credentials = tokens;
	        return { credentials: this.credentials, res: r.res };
	    }
	    getAccessToken(callback) {
	        if (callback) {
	            this.getAccessTokenAsync().then(r => callback(null, r.token, r.res), callback);
	        }
	        else {
	            return this.getAccessTokenAsync();
	        }
	    }
	    async getAccessTokenAsync() {
	        const shouldRefresh = !this.credentials.access_token || this.isTokenExpiring();
	        if (shouldRefresh) {
	            if (!this.credentials.refresh_token) {
	                if (this.refreshHandler) {
	                    const refreshedAccessToken = await this.processAndValidateRefreshHandler();
	                    if (refreshedAccessToken?.access_token) {
	                        this.setCredentials(refreshedAccessToken);
	                        return { token: this.credentials.access_token };
	                    }
	                }
	                else {
	                    throw new Error('No refresh token or refresh handler callback is set.');
	                }
	            }
	            const r = await this.refreshAccessTokenAsync();
	            if (!r.credentials || (r.credentials && !r.credentials.access_token)) {
	                throw new Error('Could not refresh access token.');
	            }
	            return { token: r.credentials.access_token, res: r.res };
	        }
	        else {
	            return { token: this.credentials.access_token };
	        }
	    }
	    /**
	     * The main authentication interface.  It takes an optional url which when
	     * present is the endpoint being accessed, and returns a Promise which
	     * resolves with authorization header fields.
	     *
	     * In OAuth2Client, the result has the form:
	     * { authorization: 'Bearer <access_token_value>' }
	     */
	    async getRequestHeaders(url) {
	        const headers = (await this.getRequestMetadataAsync(url)).headers;
	        return headers;
	    }
	    async getRequestMetadataAsync(url) {
	        const thisCreds = this.credentials;
	        if (!thisCreds.access_token &&
	            !thisCreds.refresh_token &&
	            !this.apiKey &&
	            !this.refreshHandler) {
	            throw new Error('No access, refresh token, API key or refresh handler callback is set.');
	        }
	        if (thisCreds.access_token && !this.isTokenExpiring()) {
	            thisCreds.token_type = thisCreds.token_type || 'Bearer';
	            const headers = new Headers({
	                authorization: thisCreds.token_type + ' ' + thisCreds.access_token,
	            });
	            return { headers: this.addSharedMetadataHeaders(headers) };
	        }
	        // If refreshHandler exists, call processAndValidateRefreshHandler().
	        if (this.refreshHandler) {
	            const refreshedAccessToken = await this.processAndValidateRefreshHandler();
	            if (refreshedAccessToken?.access_token) {
	                this.setCredentials(refreshedAccessToken);
	                const headers = new Headers({
	                    authorization: 'Bearer ' + this.credentials.access_token,
	                });
	                return { headers: this.addSharedMetadataHeaders(headers) };
	            }
	        }
	        if (this.apiKey) {
	            return { headers: new Headers({ 'X-Goog-Api-Key': this.apiKey }) };
	        }
	        let r = null;
	        let tokens = null;
	        try {
	            r = await this.refreshToken(thisCreds.refresh_token);
	            tokens = r.tokens;
	        }
	        catch (err) {
	            const e = err;
	            if (e.response &&
	                (e.response.status === 403 || e.response.status === 404)) {
	                e.message = `Could not refresh access token: ${e.message}`;
	            }
	            throw e;
	        }
	        const credentials = this.credentials;
	        credentials.token_type = credentials.token_type || 'Bearer';
	        tokens.refresh_token = credentials.refresh_token;
	        this.credentials = tokens;
	        const headers = new Headers({
	            authorization: credentials.token_type + ' ' + tokens.access_token,
	        });
	        return { headers: this.addSharedMetadataHeaders(headers), res: r.res };
	    }
	    /**
	     * Generates an URL to revoke the given token.
	     * @param token The existing token to be revoked.
	     *
	     * @deprecated use instance method {@link OAuth2Client.getRevokeTokenURL}
	     */
	    static getRevokeTokenUrl(token) {
	        return new OAuth2Client().getRevokeTokenURL(token).toString();
	    }
	    /**
	     * Generates a URL to revoke the given token.
	     *
	     * @param token The existing token to be revoked.
	     */
	    getRevokeTokenURL(token) {
	        const url = new URL(this.endpoints.oauth2RevokeUrl);
	        url.searchParams.append('token', token);
	        return url;
	    }
	    revokeToken(token, callback) {
	        const opts = {
	            ...OAuth2Client.RETRY_CONFIG,
	            url: this.getRevokeTokenURL(token).toString(),
	            method: 'POST',
	        };
	        authclient_1.AuthClient.setMethodName(opts, 'revokeToken');
	        if (callback) {
	            this.transporter
	                .request(opts)
	                .then(r => callback(null, r), callback);
	        }
	        else {
	            return this.transporter.request(opts);
	        }
	    }
	    revokeCredentials(callback) {
	        if (callback) {
	            this.revokeCredentialsAsync().then(res => callback(null, res), callback);
	        }
	        else {
	            return this.revokeCredentialsAsync();
	        }
	    }
	    async revokeCredentialsAsync() {
	        const token = this.credentials.access_token;
	        this.credentials = {};
	        if (token) {
	            return this.revokeToken(token);
	        }
	        else {
	            throw new Error('No access token to revoke.');
	        }
	    }
	    request(opts, callback) {
	        if (callback) {
	            this.requestAsync(opts).then(r => callback(null, r), e => {
	                return callback(e, e.response);
	            });
	        }
	        else {
	            return this.requestAsync(opts);
	        }
	    }
	    async requestAsync(opts, reAuthRetried = false) {
	        try {
	            const r = await this.getRequestMetadataAsync();
	            opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers);
	            this.addUserProjectAndAuthHeaders(opts.headers, r.headers);
	            if (this.apiKey) {
	                opts.headers.set('X-Goog-Api-Key', this.apiKey);
	            }
	            return await this.transporter.request(opts);
	        }
	        catch (e) {
	            const res = e.response;
	            if (res) {
	                const statusCode = res.status;
	                // Retry the request for metadata if the following criteria are true:
	                // - We haven't already retried.  It only makes sense to retry once.
	                // - The response was a 401 or a 403
	                // - The request didn't send a readableStream
	                // - An access_token and refresh_token were available, but either no
	                //   expiry_date was available or the forceRefreshOnFailure flag is set.
	                //   The absent expiry_date case can happen when developers stash the
	                //   access_token and refresh_token for later use, but the access_token
	                //   fails on the first try because it's expired. Some developers may
	                //   choose to enable forceRefreshOnFailure to mitigate time-related
	                //   errors.
	                // Or the following criteria are true:
	                // - We haven't already retried.  It only makes sense to retry once.
	                // - The response was a 401 or a 403
	                // - The request didn't send a readableStream
	                // - No refresh_token was available
	                // - An access_token and a refreshHandler callback were available, but
	                //   either no expiry_date was available or the forceRefreshOnFailure
	                //   flag is set. The access_token fails on the first try because it's
	                //   expired. Some developers may choose to enable forceRefreshOnFailure
	                //   to mitigate time-related errors.
	                const mayRequireRefresh = this.credentials &&
	                    this.credentials.access_token &&
	                    this.credentials.refresh_token &&
	                    (!this.credentials.expiry_date || this.forceRefreshOnFailure);
	                const mayRequireRefreshWithNoRefreshToken = this.credentials &&
	                    this.credentials.access_token &&
	                    !this.credentials.refresh_token &&
	                    (!this.credentials.expiry_date || this.forceRefreshOnFailure) &&
	                    this.refreshHandler;
	                const isReadableStream = res.config.data instanceof stream.Readable;
	                const isAuthErr = statusCode === 401 || statusCode === 403;
	                if (!reAuthRetried &&
	                    isAuthErr &&
	                    !isReadableStream &&
	                    mayRequireRefresh) {
	                    await this.refreshAccessTokenAsync();
	                    return this.requestAsync(opts, true);
	                }
	                else if (!reAuthRetried &&
	                    isAuthErr &&
	                    !isReadableStream &&
	                    mayRequireRefreshWithNoRefreshToken) {
	                    const refreshedAccessToken = await this.processAndValidateRefreshHandler();
	                    if (refreshedAccessToken?.access_token) {
	                        this.setCredentials(refreshedAccessToken);
	                    }
	                    return this.requestAsync(opts, true);
	                }
	            }
	            throw e;
	        }
	    }
	    verifyIdToken(options, callback) {
	        // This function used to accept two arguments instead of an options object.
	        // Check the types to help users upgrade with less pain.
	        // This check can be removed after a 2.0 release.
	        if (callback && typeof callback !== 'function') {
	            throw new Error('This method accepts an options object as the first parameter, which includes the idToken, audience, and maxExpiry.');
	        }
	        if (callback) {
	            this.verifyIdTokenAsync(options).then(r => callback(null, r), callback);
	        }
	        else {
	            return this.verifyIdTokenAsync(options);
	        }
	    }
	    async verifyIdTokenAsync(options) {
	        if (!options.idToken) {
	            throw new Error('The verifyIdToken method requires an ID Token');
	        }
	        const response = await this.getFederatedSignonCertsAsync();
	        const login = await this.verifySignedJwtWithCertsAsync(options.idToken, response.certs, options.audience, this.issuers, options.maxExpiry);
	        return login;
	    }
	    /**
	     * Obtains information about the provisioned access token.  Especially useful
	     * if you want to check the scopes that were provisioned to a given token.
	     *
	     * @param accessToken Required.  The Access Token for which you want to get
	     * user info.
	     */
	    async getTokenInfo(accessToken) {
	        const { data } = await this.transporter.request({
	            ...OAuth2Client.RETRY_CONFIG,
	            method: 'POST',
	            headers: {
	                'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
	                authorization: `Bearer ${accessToken}`,
	            },
	            url: this.endpoints.tokenInfoUrl.toString(),
	        });
	        const info = Object.assign({
	            expiry_date: new Date().getTime() + data.expires_in * 1000,
	            scopes: data.scope.split(' '),
	        }, data);
	        delete info.expires_in;
	        delete info.scope;
	        return info;
	    }
	    getFederatedSignonCerts(callback) {
	        if (callback) {
	            this.getFederatedSignonCertsAsync().then(r => callback(null, r.certs, r.res), callback);
	        }
	        else {
	            return this.getFederatedSignonCertsAsync();
	        }
	    }
	    async getFederatedSignonCertsAsync() {
	        const nowTime = new Date().getTime();
	        const format = (0, crypto_1.hasBrowserCrypto)()
	            ? CertificateFormat.JWK
	            : CertificateFormat.PEM;
	        if (this.certificateExpiry &&
	            nowTime < this.certificateExpiry.getTime() &&
	            this.certificateCacheFormat === format) {
	            return { certs: this.certificateCache, format };
	        }
	        let res;
	        let url;
	        switch (format) {
	            case CertificateFormat.PEM:
	                url = this.endpoints.oauth2FederatedSignonPemCertsUrl.toString();
	                break;
	            case CertificateFormat.JWK:
	                url = this.endpoints.oauth2FederatedSignonJwkCertsUrl.toString();
	                break;
	            default:
	                throw new Error(`Unsupported certificate format ${format}`);
	        }
	        try {
	            const opts = {
	                ...OAuth2Client.RETRY_CONFIG,
	                url,
	            };
	            authclient_1.AuthClient.setMethodName(opts, 'getFederatedSignonCertsAsync');
	            res = await this.transporter.request(opts);
	        }
	        catch (e) {
	            if (e instanceof Error) {
	                e.message = `Failed to retrieve verification certificates: ${e.message}`;
	            }
	            throw e;
	        }
	        const cacheControl = res?.headers.get('cache-control');
	        let cacheAge = -1;
	        if (cacheControl) {
	            const maxAge = /max-age=(?<maxAge>[0-9]+)/.exec(cacheControl)?.groups
	                ?.maxAge;
	            if (maxAge) {
	                // Cache results with max-age (in seconds)
	                cacheAge = Number(maxAge) * 1000; // milliseconds
	            }
	        }
	        let certificates = {};
	        switch (format) {
	            case CertificateFormat.PEM:
	                certificates = res.data;
	                break;
	            case CertificateFormat.JWK:
	                for (const key of res.data.keys) {
	                    certificates[key.kid] = key;
	                }
	                break;
	            default:
	                throw new Error(`Unsupported certificate format ${format}`);
	        }
	        const now = new Date();
	        this.certificateExpiry =
	            cacheAge === -1 ? null : new Date(now.getTime() + cacheAge);
	        this.certificateCache = certificates;
	        this.certificateCacheFormat = format;
	        return { certs: certificates, format, res };
	    }
	    getIapPublicKeys(callback) {
	        if (callback) {
	            this.getIapPublicKeysAsync().then(r => callback(null, r.pubkeys, r.res), callback);
	        }
	        else {
	            return this.getIapPublicKeysAsync();
	        }
	    }
	    async getIapPublicKeysAsync() {
	        let res;
	        const url = this.endpoints.oauth2IapPublicKeyUrl.toString();
	        try {
	            const opts = {
	                ...OAuth2Client.RETRY_CONFIG,
	                url,
	            };
	            authclient_1.AuthClient.setMethodName(opts, 'getIapPublicKeysAsync');
	            res = await this.transporter.request(opts);
	        }
	        catch (e) {
	            if (e instanceof Error) {
	                e.message = `Failed to retrieve verification certificates: ${e.message}`;
	            }
	            throw e;
	        }
	        return { pubkeys: res.data, res };
	    }
	    verifySignedJwtWithCerts() {
	        // To make the code compatible with browser SubtleCrypto we need to make
	        // this method async.
	        throw new Error('verifySignedJwtWithCerts is removed, please use verifySignedJwtWithCertsAsync instead.');
	    }
	    /**
	     * Verify the id token is signed with the correct certificate
	     * and is from the correct audience.
	     * @param jwt The jwt to verify (The ID Token in this case).
	     * @param certs The array of certs to test the jwt against.
	     * @param requiredAudience The audience to test the jwt against.
	     * @param issuers The allowed issuers of the jwt (Optional).
	     * @param maxExpiry The max expiry the certificate can be (Optional).
	     * @return Returns a promise resolving to LoginTicket on verification.
	     */
	    async verifySignedJwtWithCertsAsync(jwt, certs, requiredAudience, issuers, maxExpiry) {
	        const crypto = (0, crypto_1.createCrypto)();
	        if (!maxExpiry) {
	            maxExpiry = OAuth2Client.DEFAULT_MAX_TOKEN_LIFETIME_SECS_;
	        }
	        const segments = jwt.split('.');
	        if (segments.length !== 3) {
	            throw new Error('Wrong number of segments in token: ' + jwt);
	        }
	        const signed = segments[0] + '.' + segments[1];
	        let signature = segments[2];
	        let envelope;
	        let payload;
	        try {
	            envelope = JSON.parse(crypto.decodeBase64StringUtf8(segments[0]));
	        }
	        catch (err) {
	            if (err instanceof Error) {
	                err.message = `Can't parse token envelope: ${segments[0]}': ${err.message}`;
	            }
	            throw err;
	        }
	        if (!envelope) {
	            throw new Error("Can't parse token envelope: " + segments[0]);
	        }
	        try {
	            payload = JSON.parse(crypto.decodeBase64StringUtf8(segments[1]));
	        }
	        catch (err) {
	            if (err instanceof Error) {
	                err.message = `Can't parse token payload '${segments[0]}`;
	            }
	            throw err;
	        }
	        if (!payload) {
	            throw new Error("Can't parse token payload: " + segments[1]);
	        }
	        if (!Object.prototype.hasOwnProperty.call(certs, envelope.kid)) {
	            // If this is not present, then there's no reason to attempt verification
	            throw new Error('No pem found for envelope: ' + JSON.stringify(envelope));
	        }
	        const cert = certs[envelope.kid];
	        if (envelope.alg === 'ES256') {
	            signature = formatEcdsa.joseToDer(signature, 'ES256').toString('base64');
	        }
	        const verified = await crypto.verify(cert, signed, signature);
	        if (!verified) {
	            throw new Error('Invalid token signature: ' + jwt);
	        }
	        if (!payload.iat) {
	            throw new Error('No issue time in token: ' + JSON.stringify(payload));
	        }
	        if (!payload.exp) {
	            throw new Error('No expiration time in token: ' + JSON.stringify(payload));
	        }
	        const iat = Number(payload.iat);
	        if (isNaN(iat))
	            throw new Error('iat field using invalid format');
	        const exp = Number(payload.exp);
	        if (isNaN(exp))
	            throw new Error('exp field using invalid format');
	        const now = new Date().getTime() / 1000;
	        if (exp >= now + maxExpiry) {
	            throw new Error('Expiration time too far in future: ' + JSON.stringify(payload));
	        }
	        const earliest = iat - OAuth2Client.CLOCK_SKEW_SECS_;
	        const latest = exp + OAuth2Client.CLOCK_SKEW_SECS_;
	        if (now < earliest) {
	            throw new Error('Token used too early, ' +
	                now +
	                ' < ' +
	                earliest +
	                ': ' +
	                JSON.stringify(payload));
	        }
	        if (now > latest) {
	            throw new Error('Token used too late, ' +
	                now +
	                ' > ' +
	                latest +
	                ': ' +
	                JSON.stringify(payload));
	        }
	        if (issuers && issuers.indexOf(payload.iss) < 0) {
	            throw new Error('Invalid issuer, expected one of [' +
	                issuers +
	                '], but got ' +
	                payload.iss);
	        }
	        // Check the audience matches if we have one
	        if (typeof requiredAudience !== 'undefined' && requiredAudience !== null) {
	            const aud = payload.aud;
	            let audVerified = false;
	            // If the requiredAudience is an array, check if it contains token
	            // audience
	            if (requiredAudience.constructor === Array) {
	                audVerified = requiredAudience.indexOf(aud) > -1;
	            }
	            else {
	                audVerified = aud === requiredAudience;
	            }
	            if (!audVerified) {
	                throw new Error('Wrong recipient, payload audience != requiredAudience');
	            }
	        }
	        return new loginticket_1.LoginTicket(envelope, payload);
	    }
	    /**
	     * Returns a promise that resolves with AccessTokenResponse type if
	     * refreshHandler is defined.
	     * If not, nothing is returned.
	     */
	    async processAndValidateRefreshHandler() {
	        if (this.refreshHandler) {
	            const accessTokenResponse = await this.refreshHandler();
	            if (!accessTokenResponse.access_token) {
	                throw new Error('No access token is returned by the refreshHandler callback.');
	            }
	            return accessTokenResponse;
	        }
	        return;
	    }
	    /**
	     * Returns true if a token is expired or will expire within
	     * eagerRefreshThresholdMillismilliseconds.
	     * If there is no expiry time, assumes the token is not expired or expiring.
	     */
	    isTokenExpiring() {
	        const expiryDate = this.credentials.expiry_date;
	        return expiryDate
	            ? expiryDate <= new Date().getTime() + this.eagerRefreshThresholdMillis
	            : false;
	    }
	}
	oauth2client.OAuth2Client = OAuth2Client;
	
	return oauth2client;
}

var hasRequiredComputeclient;

function requireComputeclient () {
	if (hasRequiredComputeclient) return computeclient;
	hasRequiredComputeclient = 1;
	// Copyright 2013 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(computeclient, "__esModule", { value: true });
	computeclient.Compute = void 0;
	const gaxios_1 = requireSrc$5();
	const gcpMetadata = requireSrc$3();
	const oauth2client_1 = requireOauth2client();
	class Compute extends oauth2client_1.OAuth2Client {
	    serviceAccountEmail;
	    scopes;
	    /**
	     * Google Compute Engine service account credentials.
	     *
	     * Retrieve access token from the metadata server.
	     * See: https://cloud.google.com/compute/docs/access/authenticate-workloads#applications
	     */
	    constructor(options = {}) {
	        super(options);
	        // Start with an expired refresh token, which will automatically be
	        // refreshed before the first API call is made.
	        this.credentials = { expiry_date: 1, refresh_token: 'compute-placeholder' };
	        this.serviceAccountEmail = options.serviceAccountEmail || 'default';
	        this.scopes = Array.isArray(options.scopes)
	            ? options.scopes
	            : options.scopes
	                ? [options.scopes]
	                : [];
	    }
	    /**
	     * Refreshes the access token.
	     * @param refreshToken Unused parameter
	     */
	    async refreshTokenNoCache() {
	        const tokenPath = `service-accounts/${this.serviceAccountEmail}/token`;
	        let data;
	        try {
	            const instanceOptions = {
	                property: tokenPath,
	            };
	            if (this.scopes.length > 0) {
	                instanceOptions.params = {
	                    scopes: this.scopes.join(','),
	                };
	            }
	            data = await gcpMetadata.instance(instanceOptions);
	        }
	        catch (e) {
	            if (e instanceof gaxios_1.GaxiosError) {
	                e.message = `Could not refresh access token: ${e.message}`;
	                this.wrapError(e);
	            }
	            throw e;
	        }
	        const tokens = data;
	        if (data && data.expires_in) {
	            tokens.expiry_date = new Date().getTime() + data.expires_in * 1000;
	            delete tokens.expires_in;
	        }
	        this.emit('tokens', tokens);
	        return { tokens, res: null };
	    }
	    /**
	     * Fetches an ID token.
	     * @param targetAudience the audience for the fetched ID token.
	     */
	    async fetchIdToken(targetAudience) {
	        const idTokenPath = `service-accounts/${this.serviceAccountEmail}/identity` +
	            `?format=full&audience=${targetAudience}`;
	        let idToken;
	        try {
	            const instanceOptions = {
	                property: idTokenPath,
	            };
	            idToken = await gcpMetadata.instance(instanceOptions);
	        }
	        catch (e) {
	            if (e instanceof Error) {
	                e.message = `Could not fetch ID token: ${e.message}`;
	            }
	            throw e;
	        }
	        return idToken;
	    }
	    wrapError(e) {
	        const res = e.response;
	        if (res && res.status) {
	            e.status = res.status;
	            if (res.status === 403) {
	                e.message =
	                    'A Forbidden error was returned while attempting to retrieve an access ' +
	                        'token for the Compute Engine built-in service account. This may be because the Compute ' +
	                        'Engine instance does not have the correct permission scopes specified: ' +
	                        e.message;
	            }
	            else if (res.status === 404) {
	                e.message =
	                    'A Not Found error was returned while attempting to retrieve an access' +
	                        'token for the Compute Engine built-in service account. This may be because the Compute ' +
	                        'Engine instance does not have any permission scopes specified: ' +
	                        e.message;
	            }
	        }
	    }
	}
	computeclient.Compute = Compute;
	
	return computeclient;
}

var idtokenclient = {};

var hasRequiredIdtokenclient;

function requireIdtokenclient () {
	if (hasRequiredIdtokenclient) return idtokenclient;
	hasRequiredIdtokenclient = 1;
	// Copyright 2020 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(idtokenclient, "__esModule", { value: true });
	idtokenclient.IdTokenClient = void 0;
	const oauth2client_1 = requireOauth2client();
	class IdTokenClient extends oauth2client_1.OAuth2Client {
	    targetAudience;
	    idTokenProvider;
	    /**
	     * Google ID Token client
	     *
	     * Retrieve ID token from the metadata server.
	     * See: https://cloud.google.com/docs/authentication/get-id-token#metadata-server
	     */
	    constructor(options) {
	        super(options);
	        this.targetAudience = options.targetAudience;
	        this.idTokenProvider = options.idTokenProvider;
	    }
	    async getRequestMetadataAsync() {
	        if (!this.credentials.id_token ||
	            !this.credentials.expiry_date ||
	            this.isTokenExpiring()) {
	            const idToken = await this.idTokenProvider.fetchIdToken(this.targetAudience);
	            this.credentials = {
	                id_token: idToken,
	                expiry_date: this.getIdTokenExpiryDate(idToken),
	            };
	        }
	        const headers = new Headers({
	            authorization: 'Bearer ' + this.credentials.id_token,
	        });
	        return { headers };
	    }
	    getIdTokenExpiryDate(idToken) {
	        const payloadB64 = idToken.split('.')[1];
	        if (payloadB64) {
	            const payload = JSON.parse(Buffer.from(payloadB64, 'base64').toString('ascii'));
	            return payload.exp * 1000;
	        }
	    }
	}
	idtokenclient.IdTokenClient = IdTokenClient;
	
	return idtokenclient;
}

var envDetect = {};

var hasRequiredEnvDetect;

function requireEnvDetect () {
	if (hasRequiredEnvDetect) return envDetect;
	hasRequiredEnvDetect = 1;
	// Copyright 2018 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(envDetect, "__esModule", { value: true });
	envDetect.GCPEnv = void 0;
	envDetect.clear = clear;
	envDetect.getEnv = getEnv;
	const gcpMetadata = requireSrc$3();
	var GCPEnv;
	(function (GCPEnv) {
	    GCPEnv["APP_ENGINE"] = "APP_ENGINE";
	    GCPEnv["KUBERNETES_ENGINE"] = "KUBERNETES_ENGINE";
	    GCPEnv["CLOUD_FUNCTIONS"] = "CLOUD_FUNCTIONS";
	    GCPEnv["COMPUTE_ENGINE"] = "COMPUTE_ENGINE";
	    GCPEnv["CLOUD_RUN"] = "CLOUD_RUN";
	    GCPEnv["NONE"] = "NONE";
	})(GCPEnv || (envDetect.GCPEnv = GCPEnv = {}));
	let envPromise;
	function clear() {
	    envPromise = undefined;
	}
	async function getEnv() {
	    if (envPromise) {
	        return envPromise;
	    }
	    envPromise = getEnvMemoized();
	    return envPromise;
	}
	async function getEnvMemoized() {
	    let env = GCPEnv.NONE;
	    if (isAppEngine()) {
	        env = GCPEnv.APP_ENGINE;
	    }
	    else if (isCloudFunction()) {
	        env = GCPEnv.CLOUD_FUNCTIONS;
	    }
	    else if (await isComputeEngine()) {
	        if (await isKubernetesEngine()) {
	            env = GCPEnv.KUBERNETES_ENGINE;
	        }
	        else if (isCloudRun()) {
	            env = GCPEnv.CLOUD_RUN;
	        }
	        else {
	            env = GCPEnv.COMPUTE_ENGINE;
	        }
	    }
	    else {
	        env = GCPEnv.NONE;
	    }
	    return env;
	}
	function isAppEngine() {
	    return !!(process.env.GAE_SERVICE || process.env.GAE_MODULE_NAME);
	}
	function isCloudFunction() {
	    return !!(process.env.FUNCTION_NAME || process.env.FUNCTION_TARGET);
	}
	/**
	 * This check only verifies that the environment is running knative.
	 * This must be run *after* checking for Kubernetes, otherwise it will
	 * return a false positive.
	 */
	function isCloudRun() {
	    return !!process.env.K_CONFIGURATION;
	}
	async function isKubernetesEngine() {
	    try {
	        await gcpMetadata.instance('attributes/cluster-name');
	        return true;
	    }
	    catch (e) {
	        return false;
	    }
	}
	async function isComputeEngine() {
	    return gcpMetadata.isAvailable();
	}
	
	return envDetect;
}

var jwtclient = {};

var src$1 = {};

var jws = {};

/*global module, process*/

var dataStream;
var hasRequiredDataStream;

function requireDataStream () {
	if (hasRequiredDataStream) return dataStream;
	hasRequiredDataStream = 1;
	var Buffer = requireSafeBuffer().Buffer;
	var Stream = require$$3;
	var util = require$$2;

	function DataStream(data) {
	  this.buffer = null;
	  this.writable = true;
	  this.readable = true;

	  // No input
	  if (!data) {
	    this.buffer = Buffer.alloc(0);
	    return this;
	  }

	  // Stream
	  if (typeof data.pipe === 'function') {
	    this.buffer = Buffer.alloc(0);
	    data.pipe(this);
	    return this;
	  }

	  // Buffer or String
	  // or Object (assumedly a passworded key)
	  if (data.length || typeof data === 'object') {
	    this.buffer = data;
	    this.writable = false;
	    process.nextTick(function () {
	      this.emit('end', data);
	      this.readable = false;
	      this.emit('close');
	    }.bind(this));
	    return this;
	  }

	  throw new TypeError('Unexpected data type ('+ typeof data + ')');
	}
	util.inherits(DataStream, Stream);

	DataStream.prototype.write = function write(data) {
	  this.buffer = Buffer.concat([this.buffer, Buffer.from(data)]);
	  this.emit('data', data);
	};

	DataStream.prototype.end = function end(data) {
	  if (data)
	    this.write(data);
	  this.emit('end', data);
	  this.emit('close');
	  this.writable = false;
	  this.readable = false;
	};

	dataStream = DataStream;
	return dataStream;
}

/*jshint node:true */

var bufferEqualConstantTime;
var hasRequiredBufferEqualConstantTime;

function requireBufferEqualConstantTime () {
	if (hasRequiredBufferEqualConstantTime) return bufferEqualConstantTime;
	hasRequiredBufferEqualConstantTime = 1;
	var Buffer = require$$0$5.Buffer; // browserify
	var SlowBuffer = require$$0$5.SlowBuffer;

	bufferEqualConstantTime = bufferEq;

	function bufferEq(a, b) {

	  // shortcutting on type is necessary for correctness
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    return false;
	  }

	  // buffer sizes should be well-known information, so despite this
	  // shortcutting, it doesn't leak any information about the *contents* of the
	  // buffers.
	  if (a.length !== b.length) {
	    return false;
	  }

	  var c = 0;
	  for (var i = 0; i < a.length; i++) {
	    /*jshint bitwise:false */
	    c |= a[i] ^ b[i]; // XOR
	  }
	  return c === 0;
	}

	bufferEq.install = function() {
	  Buffer.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {
	    return bufferEq(this, that);
	  };
	};

	var origBufEqual = Buffer.prototype.equal;
	var origSlowBufEqual = SlowBuffer.prototype.equal;
	bufferEq.restore = function() {
	  Buffer.prototype.equal = origBufEqual;
	  SlowBuffer.prototype.equal = origSlowBufEqual;
	};
	return bufferEqualConstantTime;
}

var jwa;
var hasRequiredJwa;

function requireJwa () {
	if (hasRequiredJwa) return jwa;
	hasRequiredJwa = 1;
	var Buffer = requireSafeBuffer().Buffer;
	var crypto = require$$0$4;
	var formatEcdsa = requireEcdsaSigFormatter();
	var util = require$$2;

	var MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".';
	var MSG_INVALID_SECRET = 'secret must be a string or buffer';
	var MSG_INVALID_VERIFIER_KEY = 'key must be a string or a buffer';
	var MSG_INVALID_SIGNER_KEY = 'key must be a string, a buffer or an object';

	var supportsKeyObjects = typeof crypto.createPublicKey === 'function';
	if (supportsKeyObjects) {
	  MSG_INVALID_VERIFIER_KEY += ' or a KeyObject';
	  MSG_INVALID_SECRET += 'or a KeyObject';
	}

	function checkIsPublicKey(key) {
	  if (Buffer.isBuffer(key)) {
	    return;
	  }

	  if (typeof key === 'string') {
	    return;
	  }

	  if (!supportsKeyObjects) {
	    throw typeError(MSG_INVALID_VERIFIER_KEY);
	  }

	  if (typeof key !== 'object') {
	    throw typeError(MSG_INVALID_VERIFIER_KEY);
	  }

	  if (typeof key.type !== 'string') {
	    throw typeError(MSG_INVALID_VERIFIER_KEY);
	  }

	  if (typeof key.asymmetricKeyType !== 'string') {
	    throw typeError(MSG_INVALID_VERIFIER_KEY);
	  }

	  if (typeof key.export !== 'function') {
	    throw typeError(MSG_INVALID_VERIFIER_KEY);
	  }
	}
	function checkIsPrivateKey(key) {
	  if (Buffer.isBuffer(key)) {
	    return;
	  }

	  if (typeof key === 'string') {
	    return;
	  }

	  if (typeof key === 'object') {
	    return;
	  }

	  throw typeError(MSG_INVALID_SIGNER_KEY);
	}
	function checkIsSecretKey(key) {
	  if (Buffer.isBuffer(key)) {
	    return;
	  }

	  if (typeof key === 'string') {
	    return key;
	  }

	  if (!supportsKeyObjects) {
	    throw typeError(MSG_INVALID_SECRET);
	  }

	  if (typeof key !== 'object') {
	    throw typeError(MSG_INVALID_SECRET);
	  }

	  if (key.type !== 'secret') {
	    throw typeError(MSG_INVALID_SECRET);
	  }

	  if (typeof key.export !== 'function') {
	    throw typeError(MSG_INVALID_SECRET);
	  }
	}

	function fromBase64(base64) {
	  return base64
	    .replace(/=/g, '')
	    .replace(/\+/g, '-')
	    .replace(/\//g, '_');
	}

	function toBase64(base64url) {
	  base64url = base64url.toString();

	  var padding = 4 - base64url.length % 4;
	  if (padding !== 4) {
	    for (var i = 0; i < padding; ++i) {
	      base64url += '=';
	    }
	  }

	  return base64url
	    .replace(/\-/g, '+')
	    .replace(/_/g, '/');
	}

	function typeError(template) {
	  var args = [].slice.call(arguments, 1);
	  var errMsg = util.format.bind(util, template).apply(null, args);
	  return new TypeError(errMsg);
	}

	function bufferOrString(obj) {
	  return Buffer.isBuffer(obj) || typeof obj === 'string';
	}

	function normalizeInput(thing) {
	  if (!bufferOrString(thing))
	    thing = JSON.stringify(thing);
	  return thing;
	}

	function createHmacSigner(bits) {
	  return function sign(thing, secret) {
	    checkIsSecretKey(secret);
	    thing = normalizeInput(thing);
	    var hmac = crypto.createHmac('sha' + bits, secret);
	    var sig = (hmac.update(thing), hmac.digest('base64'));
	    return fromBase64(sig);
	  }
	}

	var bufferEqual;
	var timingSafeEqual = 'timingSafeEqual' in crypto ? function timingSafeEqual(a, b) {
	  if (a.byteLength !== b.byteLength) {
	    return false;
	  }

	  return crypto.timingSafeEqual(a, b)
	} : function timingSafeEqual(a, b) {
	  if (!bufferEqual) {
	    bufferEqual = requireBufferEqualConstantTime();
	  }

	  return bufferEqual(a, b)
	};

	function createHmacVerifier(bits) {
	  return function verify(thing, signature, secret) {
	    var computedSig = createHmacSigner(bits)(thing, secret);
	    return timingSafeEqual(Buffer.from(signature), Buffer.from(computedSig));
	  }
	}

	function createKeySigner(bits) {
	 return function sign(thing, privateKey) {
	    checkIsPrivateKey(privateKey);
	    thing = normalizeInput(thing);
	    // Even though we are specifying "RSA" here, this works with ECDSA
	    // keys as well.
	    var signer = crypto.createSign('RSA-SHA' + bits);
	    var sig = (signer.update(thing), signer.sign(privateKey, 'base64'));
	    return fromBase64(sig);
	  }
	}

	function createKeyVerifier(bits) {
	  return function verify(thing, signature, publicKey) {
	    checkIsPublicKey(publicKey);
	    thing = normalizeInput(thing);
	    signature = toBase64(signature);
	    var verifier = crypto.createVerify('RSA-SHA' + bits);
	    verifier.update(thing);
	    return verifier.verify(publicKey, signature, 'base64');
	  }
	}

	function createPSSKeySigner(bits) {
	  return function sign(thing, privateKey) {
	    checkIsPrivateKey(privateKey);
	    thing = normalizeInput(thing);
	    var signer = crypto.createSign('RSA-SHA' + bits);
	    var sig = (signer.update(thing), signer.sign({
	      key: privateKey,
	      padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
	      saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
	    }, 'base64'));
	    return fromBase64(sig);
	  }
	}

	function createPSSKeyVerifier(bits) {
	  return function verify(thing, signature, publicKey) {
	    checkIsPublicKey(publicKey);
	    thing = normalizeInput(thing);
	    signature = toBase64(signature);
	    var verifier = crypto.createVerify('RSA-SHA' + bits);
	    verifier.update(thing);
	    return verifier.verify({
	      key: publicKey,
	      padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
	      saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
	    }, signature, 'base64');
	  }
	}

	function createECDSASigner(bits) {
	  var inner = createKeySigner(bits);
	  return function sign() {
	    var signature = inner.apply(null, arguments);
	    signature = formatEcdsa.derToJose(signature, 'ES' + bits);
	    return signature;
	  };
	}

	function createECDSAVerifer(bits) {
	  var inner = createKeyVerifier(bits);
	  return function verify(thing, signature, publicKey) {
	    signature = formatEcdsa.joseToDer(signature, 'ES' + bits).toString('base64');
	    var result = inner(thing, signature, publicKey);
	    return result;
	  };
	}

	function createNoneSigner() {
	  return function sign() {
	    return '';
	  }
	}

	function createNoneVerifier() {
	  return function verify(thing, signature) {
	    return signature === '';
	  }
	}

	jwa = function jwa(algorithm) {
	  var signerFactories = {
	    hs: createHmacSigner,
	    rs: createKeySigner,
	    ps: createPSSKeySigner,
	    es: createECDSASigner,
	    none: createNoneSigner,
	  };
	  var verifierFactories = {
	    hs: createHmacVerifier,
	    rs: createKeyVerifier,
	    ps: createPSSKeyVerifier,
	    es: createECDSAVerifer,
	    none: createNoneVerifier,
	  };
	  var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
	  if (!match)
	    throw typeError(MSG_INVALID_ALGORITHM, algorithm);
	  var algo = (match[1] || match[3]).toLowerCase();
	  var bits = match[2];

	  return {
	    sign: signerFactories[algo](bits),
	    verify: verifierFactories[algo](bits),
	  }
	};
	return jwa;
}

/*global module*/

var tostring;
var hasRequiredTostring;

function requireTostring () {
	if (hasRequiredTostring) return tostring;
	hasRequiredTostring = 1;
	var Buffer = require$$0$5.Buffer;

	tostring = function toString(obj) {
	  if (typeof obj === 'string')
	    return obj;
	  if (typeof obj === 'number' || Buffer.isBuffer(obj))
	    return obj.toString();
	  return JSON.stringify(obj);
	};
	return tostring;
}

/*global module*/

var signStream;
var hasRequiredSignStream;

function requireSignStream () {
	if (hasRequiredSignStream) return signStream;
	hasRequiredSignStream = 1;
	var Buffer = requireSafeBuffer().Buffer;
	var DataStream = requireDataStream();
	var jwa = requireJwa();
	var Stream = require$$3;
	var toString = requireTostring();
	var util = require$$2;

	function base64url(string, encoding) {
	  return Buffer
	    .from(string, encoding)
	    .toString('base64')
	    .replace(/=/g, '')
	    .replace(/\+/g, '-')
	    .replace(/\//g, '_');
	}

	function jwsSecuredInput(header, payload, encoding) {
	  encoding = encoding || 'utf8';
	  var encodedHeader = base64url(toString(header), 'binary');
	  var encodedPayload = base64url(toString(payload), encoding);
	  return util.format('%s.%s', encodedHeader, encodedPayload);
	}

	function jwsSign(opts) {
	  var header = opts.header;
	  var payload = opts.payload;
	  var secretOrKey = opts.secret || opts.privateKey;
	  var encoding = opts.encoding;
	  var algo = jwa(header.alg);
	  var securedInput = jwsSecuredInput(header, payload, encoding);
	  var signature = algo.sign(securedInput, secretOrKey);
	  return util.format('%s.%s', securedInput, signature);
	}

	function SignStream(opts) {
	  var secret = opts.secret||opts.privateKey||opts.key;
	  var secretStream = new DataStream(secret);
	  this.readable = true;
	  this.header = opts.header;
	  this.encoding = opts.encoding;
	  this.secret = this.privateKey = this.key = secretStream;
	  this.payload = new DataStream(opts.payload);
	  this.secret.once('close', function () {
	    if (!this.payload.writable && this.readable)
	      this.sign();
	  }.bind(this));

	  this.payload.once('close', function () {
	    if (!this.secret.writable && this.readable)
	      this.sign();
	  }.bind(this));
	}
	util.inherits(SignStream, Stream);

	SignStream.prototype.sign = function sign() {
	  try {
	    var signature = jwsSign({
	      header: this.header,
	      payload: this.payload.buffer,
	      secret: this.secret.buffer,
	      encoding: this.encoding
	    });
	    this.emit('done', signature);
	    this.emit('data', signature);
	    this.emit('end');
	    this.readable = false;
	    return signature;
	  } catch (e) {
	    this.readable = false;
	    this.emit('error', e);
	    this.emit('close');
	  }
	};

	SignStream.sign = jwsSign;

	signStream = SignStream;
	return signStream;
}

/*global module*/

var verifyStream;
var hasRequiredVerifyStream;

function requireVerifyStream () {
	if (hasRequiredVerifyStream) return verifyStream;
	hasRequiredVerifyStream = 1;
	var Buffer = requireSafeBuffer().Buffer;
	var DataStream = requireDataStream();
	var jwa = requireJwa();
	var Stream = require$$3;
	var toString = requireTostring();
	var util = require$$2;
	var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;

	function isObject(thing) {
	  return Object.prototype.toString.call(thing) === '[object Object]';
	}

	function safeJsonParse(thing) {
	  if (isObject(thing))
	    return thing;
	  try { return JSON.parse(thing); }
	  catch (e) { return undefined; }
	}

	function headerFromJWS(jwsSig) {
	  var encodedHeader = jwsSig.split('.', 1)[0];
	  return safeJsonParse(Buffer.from(encodedHeader, 'base64').toString('binary'));
	}

	function securedInputFromJWS(jwsSig) {
	  return jwsSig.split('.', 2).join('.');
	}

	function signatureFromJWS(jwsSig) {
	  return jwsSig.split('.')[2];
	}

	function payloadFromJWS(jwsSig, encoding) {
	  encoding = encoding || 'utf8';
	  var payload = jwsSig.split('.')[1];
	  return Buffer.from(payload, 'base64').toString(encoding);
	}

	function isValidJws(string) {
	  return JWS_REGEX.test(string) && !!headerFromJWS(string);
	}

	function jwsVerify(jwsSig, algorithm, secretOrKey) {
	  if (!algorithm) {
	    var err = new Error("Missing algorithm parameter for jws.verify");
	    err.code = "MISSING_ALGORITHM";
	    throw err;
	  }
	  jwsSig = toString(jwsSig);
	  var signature = signatureFromJWS(jwsSig);
	  var securedInput = securedInputFromJWS(jwsSig);
	  var algo = jwa(algorithm);
	  return algo.verify(securedInput, signature, secretOrKey);
	}

	function jwsDecode(jwsSig, opts) {
	  opts = opts || {};
	  jwsSig = toString(jwsSig);

	  if (!isValidJws(jwsSig))
	    return null;

	  var header = headerFromJWS(jwsSig);

	  if (!header)
	    return null;

	  var payload = payloadFromJWS(jwsSig);
	  if (header.typ === 'JWT' || opts.json)
	    payload = JSON.parse(payload, opts.encoding);

	  return {
	    header: header,
	    payload: payload,
	    signature: signatureFromJWS(jwsSig)
	  };
	}

	function VerifyStream(opts) {
	  opts = opts || {};
	  var secretOrKey = opts.secret||opts.publicKey||opts.key;
	  var secretStream = new DataStream(secretOrKey);
	  this.readable = true;
	  this.algorithm = opts.algorithm;
	  this.encoding = opts.encoding;
	  this.secret = this.publicKey = this.key = secretStream;
	  this.signature = new DataStream(opts.signature);
	  this.secret.once('close', function () {
	    if (!this.signature.writable && this.readable)
	      this.verify();
	  }.bind(this));

	  this.signature.once('close', function () {
	    if (!this.secret.writable && this.readable)
	      this.verify();
	  }.bind(this));
	}
	util.inherits(VerifyStream, Stream);
	VerifyStream.prototype.verify = function verify() {
	  try {
	    var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
	    var obj = jwsDecode(this.signature.buffer, this.encoding);
	    this.emit('done', valid, obj);
	    this.emit('data', valid);
	    this.emit('end');
	    this.readable = false;
	    return valid;
	  } catch (e) {
	    this.readable = false;
	    this.emit('error', e);
	    this.emit('close');
	  }
	};

	VerifyStream.decode = jwsDecode;
	VerifyStream.isValid = isValidJws;
	VerifyStream.verify = jwsVerify;

	verifyStream = VerifyStream;
	return verifyStream;
}

/*global exports*/

var hasRequiredJws;

function requireJws () {
	if (hasRequiredJws) return jws;
	hasRequiredJws = 1;
	var SignStream = requireSignStream();
	var VerifyStream = requireVerifyStream();

	var ALGORITHMS = [
	  'HS256', 'HS384', 'HS512',
	  'RS256', 'RS384', 'RS512',
	  'PS256', 'PS384', 'PS512',
	  'ES256', 'ES384', 'ES512'
	];

	jws.ALGORITHMS = ALGORITHMS;
	jws.sign = SignStream.sign;
	jws.verify = VerifyStream.verify;
	jws.decode = VerifyStream.decode;
	jws.isValid = VerifyStream.isValid;
	jws.createSign = function createSign(opts) {
	  return new SignStream(opts);
	};
	jws.createVerify = function createVerify(opts) {
	  return new VerifyStream(opts);
	};
	return jws;
}

var hasRequiredSrc$2;

function requireSrc$2 () {
	if (hasRequiredSrc$2) return src$1;
	hasRequiredSrc$2 = 1;

	Object.defineProperty(src$1, "__esModule", {
	  value: true
	});
	src$1.GoogleToken = void 0;
	var fs = _interopRequireWildcard(require$$0$2);
	var _gaxios = requireSrc$5();
	var jws = _interopRequireWildcard(requireJws());
	var path = _interopRequireWildcard(require$$2$1);
	var _util = require$$2;
	function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t3 in e) "default" !== _t3 && {}.hasOwnProperty.call(e, _t3) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t3)) && (i.get || i.set) ? o(f, _t3, i) : f[_t3] = e[_t3]); return f; })(e, t); }
	function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
	function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
	function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
	function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
	function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
	function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
	function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", { writable: false }), e; }
	function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
	function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
	function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
	function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: true, configurable: true } }), Object.defineProperty(t, "prototype", { writable: false }), e && _setPrototypeOf(t, e); }
	function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
	function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
	function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
	function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
	function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
	function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
	function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
	function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
	function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return (String )(t); }
	function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = false, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = true, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), true), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
	function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
	function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
	function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; } /**
	 * Copyright 2018 Google LLC
	 *
	 * Distributed under MIT license.
	 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
	 */
	var readFile = fs.readFile ? (0, _util.promisify)(fs.readFile) : /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
	  return _regenerator().w(function (_context) {
	    while (1) switch (_context.n) {
	      case 0:
	        throw new ErrorWithCode('use key rather than keyFile.', 'MISSING_CREDENTIALS');
	      case 1:
	        return _context.a(2);
	    }
	  }, _callee);
	}));
	var GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
	var GOOGLE_REVOKE_TOKEN_URL = 'https://oauth2.googleapis.com/revoke?token=';
	var ErrorWithCode = /*#__PURE__*/function (_Error) {
	  function ErrorWithCode(message, code) {
	    var _this;
	    _classCallCheck(this, ErrorWithCode);
	    _this = _callSuper(this, ErrorWithCode, [message]);
	    _defineProperty(_this, "code", void 0);
	    _this.code = code;
	    return _this;
	  }
	  _inherits(ErrorWithCode, _Error);
	  return _createClass(ErrorWithCode);
	}(/*#__PURE__*/_wrapNativeSuper(Error));
	var _inFlightRequest = /*#__PURE__*/new WeakMap();
	var _GoogleToken_brand = /*#__PURE__*/new WeakSet();
	src$1.GoogleToken = /*#__PURE__*/function () {
	  /**
	   * Create a GoogleToken.
	   *
	   * @param options  Configuration object.
	   */
	  function GoogleToken(_options) {
	    _classCallCheck(this, GoogleToken);
	    _classPrivateMethodInitSpec(this, _GoogleToken_brand);
	    _defineProperty(this, "expiresAt", void 0);
	    _defineProperty(this, "key", void 0);
	    _defineProperty(this, "keyFile", void 0);
	    _defineProperty(this, "iss", void 0);
	    _defineProperty(this, "sub", void 0);
	    _defineProperty(this, "scope", void 0);
	    _defineProperty(this, "rawToken", void 0);
	    _defineProperty(this, "tokenExpires", void 0);
	    _defineProperty(this, "email", void 0);
	    _defineProperty(this, "additionalClaims", void 0);
	    _defineProperty(this, "eagerRefreshThresholdMillis", void 0);
	    _defineProperty(this, "transporter", {
	      request: function request(opts) {
	        return (0, _gaxios.request)(opts);
	      }
	    });
	    _classPrivateFieldInitSpec(this, _inFlightRequest, void 0);
	    _assertClassBrand(_GoogleToken_brand, this, _configure).call(this, _options);
	  }

	  /**
	   * Returns whether the token has expired.
	   *
	   * @return true if the token has expired, false otherwise.
	   */
	  return _createClass(GoogleToken, [{
	    key: "accessToken",
	    get: function get() {
	      return this.rawToken ? this.rawToken.access_token : undefined;
	    }
	  }, {
	    key: "idToken",
	    get: function get() {
	      return this.rawToken ? this.rawToken.id_token : undefined;
	    }
	  }, {
	    key: "tokenType",
	    get: function get() {
	      return this.rawToken ? this.rawToken.token_type : undefined;
	    }
	  }, {
	    key: "refreshToken",
	    get: function get() {
	      return this.rawToken ? this.rawToken.refresh_token : undefined;
	    }
	  }, {
	    key: "hasExpired",
	    value: function hasExpired() {
	      var now = new Date().getTime();
	      if (this.rawToken && this.expiresAt) {
	        return now >= this.expiresAt;
	      } else {
	        return true;
	      }
	    }

	    /**
	     * Returns whether the token will expire within eagerRefreshThresholdMillis
	     *
	     * @return true if the token will be expired within eagerRefreshThresholdMillis, false otherwise.
	     */
	  }, {
	    key: "isTokenExpiring",
	    value: function isTokenExpiring() {
	      var _this$eagerRefreshThr;
	      var now = new Date().getTime();
	      var eagerRefreshThresholdMillis = (_this$eagerRefreshThr = this.eagerRefreshThresholdMillis) !== null && _this$eagerRefreshThr !== void 0 ? _this$eagerRefreshThr : 0;
	      if (this.rawToken && this.expiresAt) {
	        return this.expiresAt <= now + eagerRefreshThresholdMillis;
	      } else {
	        return true;
	      }
	    }

	    /**
	     * Returns a cached token or retrieves a new one from Google.
	     *
	     * @param callback The callback function.
	     */
	  }, {
	    key: "getToken",
	    value: function getToken(callback) {
	      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      if (_typeof(callback) === 'object') {
	        opts = callback;
	        callback = undefined;
	      }
	      opts = Object.assign({
	        forceRefresh: false
	      }, opts);
	      if (callback) {
	        var cb = callback;
	        _assertClassBrand(_GoogleToken_brand, this, _getTokenAsync).call(this, opts).then(function (t) {
	          return cb(null, t);
	        }, callback);
	        return;
	      }
	      return _assertClassBrand(_GoogleToken_brand, this, _getTokenAsync).call(this, opts);
	    }

	    /**
	     * Given a keyFile, extract the key and client email if available
	     * @param keyFile Path to a json, pem, or p12 file that contains the key.
	     * @returns an object with privateKey and clientEmail properties
	     */
	  }, {
	    key: "getCredentials",
	    value: (function () {
	      var _getCredentials = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(keyFile) {
	        var ext, key, body, privateKey, clientEmail, _privateKey, _t;
	        return _regenerator().w(function (_context2) {
	          while (1) switch (_context2.n) {
	            case 0:
	              ext = path.extname(keyFile);
	              _t = ext;
	              _context2.n = _t === '.json' ? 1 : _t === '.der' ? 4 : _t === '.crt' ? 4 : _t === '.pem' ? 4 : _t === '.p12' ? 6 : _t === '.pfx' ? 6 : 7;
	              break;
	            case 1:
	              _context2.n = 2;
	              return readFile(keyFile, 'utf8');
	            case 2:
	              key = _context2.v;
	              body = JSON.parse(key);
	              privateKey = body.private_key;
	              clientEmail = body.client_email;
	              if (!(!privateKey || !clientEmail)) {
	                _context2.n = 3;
	                break;
	              }
	              throw new ErrorWithCode('private_key and client_email are required.', 'MISSING_CREDENTIALS');
	            case 3:
	              return _context2.a(2, {
	                privateKey: privateKey,
	                clientEmail: clientEmail
	              });
	            case 4:
	              _context2.n = 5;
	              return readFile(keyFile, 'utf8');
	            case 5:
	              _privateKey = _context2.v;
	              return _context2.a(2, {
	                privateKey: _privateKey
	              });
	            case 6:
	              throw new ErrorWithCode('*.p12 certificates are not supported after v6.1.2. ' + 'Consider utilizing *.json format or converting *.p12 to *.pem using the OpenSSL CLI.', 'UNKNOWN_CERTIFICATE_TYPE');
	            case 7:
	              throw new ErrorWithCode('Unknown certificate type. Type is determined based on file extension. ' + 'Current supported extensions are *.json, and *.pem.', 'UNKNOWN_CERTIFICATE_TYPE');
	            case 8:
	              return _context2.a(2);
	          }
	        }, _callee2);
	      }));
	      function getCredentials(_x) {
	        return _getCredentials.apply(this, arguments);
	      }
	      return getCredentials;
	    }())
	  }, {
	    key: "revokeToken",
	    value: function revokeToken(callback) {
	      if (callback) {
	        _assertClassBrand(_GoogleToken_brand, this, _revokeTokenAsync).call(this).then(function () {
	          return callback();
	        }, callback);
	        return;
	      }
	      return _assertClassBrand(_GoogleToken_brand, this, _revokeTokenAsync).call(this);
	    }
	  }]);
	}();
	function _getTokenAsync(_x2) {
	  return _getTokenAsync2.apply(this, arguments);
	}
	function _getTokenAsync2() {
	  _getTokenAsync2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(opts) {
	    return _regenerator().w(function (_context3) {
	      while (1) switch (_context3.n) {
	        case 0:
	          if (!(_classPrivateFieldGet(_inFlightRequest, this) && !opts.forceRefresh)) {
	            _context3.n = 1;
	            break;
	          }
	          return _context3.a(2, _classPrivateFieldGet(_inFlightRequest, this));
	        case 1:
	          _context3.p = 1;
	          _context3.n = 2;
	          return _classPrivateFieldSet(_inFlightRequest, this, _assertClassBrand(_GoogleToken_brand, this, _getTokenAsyncInner).call(this, opts));
	        case 2:
	          return _context3.a(2, _context3.v);
	        case 3:
	          _context3.p = 3;
	          _classPrivateFieldSet(_inFlightRequest, this, undefined);
	          return _context3.f(3);
	        case 4:
	          return _context3.a(2);
	      }
	    }, _callee3, this, [[1,, 3, 4]]);
	  }));
	  return _getTokenAsync2.apply(this, arguments);
	}
	function _getTokenAsyncInner(_x3) {
	  return _getTokenAsyncInner2.apply(this, arguments);
	}
	function _getTokenAsyncInner2() {
	  _getTokenAsyncInner2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(opts) {
	    var creds;
	    return _regenerator().w(function (_context4) {
	      while (1) switch (_context4.n) {
	        case 0:
	          if (!(this.isTokenExpiring() === false && opts.forceRefresh === false)) {
	            _context4.n = 1;
	            break;
	          }
	          return _context4.a(2, Promise.resolve(this.rawToken));
	        case 1:
	          if (!(!this.key && !this.keyFile)) {
	            _context4.n = 2;
	            break;
	          }
	          throw new Error('No key or keyFile set.');
	        case 2:
	          if (!(!this.key && this.keyFile)) {
	            _context4.n = 4;
	            break;
	          }
	          _context4.n = 3;
	          return this.getCredentials(this.keyFile);
	        case 3:
	          creds = _context4.v;
	          this.key = creds.privateKey;
	          this.iss = creds.clientEmail || this.iss;
	          if (!creds.clientEmail) {
	            _assertClassBrand(_GoogleToken_brand, this, _ensureEmail).call(this);
	          }
	        case 4:
	          return _context4.a(2, _assertClassBrand(_GoogleToken_brand, this, _requestToken).call(this));
	      }
	    }, _callee4, this);
	  }));
	  return _getTokenAsyncInner2.apply(this, arguments);
	}
	function _ensureEmail() {
	  if (!this.iss) {
	    throw new ErrorWithCode('email is required.', 'MISSING_CREDENTIALS');
	  }
	}
	function _revokeTokenAsync() {
	  return _revokeTokenAsync2.apply(this, arguments);
	}
	function _revokeTokenAsync2() {
	  _revokeTokenAsync2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
	    var url;
	    return _regenerator().w(function (_context5) {
	      while (1) switch (_context5.n) {
	        case 0:
	          if (this.accessToken) {
	            _context5.n = 1;
	            break;
	          }
	          throw new Error('No token to revoke.');
	        case 1:
	          url = GOOGLE_REVOKE_TOKEN_URL + this.accessToken;
	          _context5.n = 2;
	          return this.transporter.request({
	            url: url,
	            retry: true
	          });
	        case 2:
	          _assertClassBrand(_GoogleToken_brand, this, _configure).call(this, {
	            email: this.iss,
	            sub: this.sub,
	            key: this.key,
	            keyFile: this.keyFile,
	            scope: this.scope,
	            additionalClaims: this.additionalClaims
	          });
	        case 3:
	          return _context5.a(2);
	      }
	    }, _callee5, this);
	  }));
	  return _revokeTokenAsync2.apply(this, arguments);
	}
	/**
	 * Configure the GoogleToken for re-use.
	 * @param  {object} options Configuration object.
	 */
	function _configure() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  this.keyFile = options.keyFile;
	  this.key = options.key;
	  this.rawToken = undefined;
	  this.iss = options.email || options.iss;
	  this.sub = options.sub;
	  this.additionalClaims = options.additionalClaims;
	  if (_typeof(options.scope) === 'object') {
	    this.scope = options.scope.join(' ');
	  } else {
	    this.scope = options.scope;
	  }
	  this.eagerRefreshThresholdMillis = options.eagerRefreshThresholdMillis;
	  if (options.transporter) {
	    this.transporter = options.transporter;
	  }
	}
	/**
	 * Request the token from Google.
	 */
	function _requestToken() {
	  return _requestToken2.apply(this, arguments);
	}
	function _requestToken2() {
	  _requestToken2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
	    var iat, additionalClaims, payload, signedJWT, r, _response, _response2, body, desc, _t2;
	    return _regenerator().w(function (_context6) {
	      while (1) switch (_context6.n) {
	        case 0:
	          iat = Math.floor(new Date().getTime() / 1000);
	          additionalClaims = this.additionalClaims || {};
	          payload = Object.assign({
	            iss: this.iss,
	            scope: this.scope,
	            aud: GOOGLE_TOKEN_URL,
	            exp: iat + 3600,
	            iat: iat,
	            sub: this.sub
	          }, additionalClaims);
	          signedJWT = jws.sign({
	            header: {
	              alg: 'RS256'
	            },
	            payload: payload,
	            secret: this.key
	          });
	          _context6.p = 1;
	          _context6.n = 2;
	          return this.transporter.request({
	            method: 'POST',
	            url: GOOGLE_TOKEN_URL,
	            data: new URLSearchParams({
	              grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
	              assertion: signedJWT
	            }),
	            responseType: 'json',
	            retryConfig: {
	              httpMethodsToRetry: ['POST']
	            }
	          });
	        case 2:
	          r = _context6.v;
	          this.rawToken = r.data;
	          this.expiresAt = r.data.expires_in === null || r.data.expires_in === undefined ? undefined : (iat + r.data.expires_in) * 1000;
	          return _context6.a(2, this.rawToken);
	        case 3:
	          _context6.p = 3;
	          _t2 = _context6.v;
	          this.rawToken = undefined;
	          this.tokenExpires = undefined;
	          body = _t2.response && (_response = _t2.response) !== null && _response !== void 0 && _response.data ? (_response2 = _t2.response) === null || _response2 === void 0 ? void 0 : _response2.data : {};
	          if (body.error) {
	            desc = body.error_description ? ": ".concat(body.error_description) : '';
	            _t2.message = "".concat(body.error).concat(desc);
	          }
	          throw _t2;
	        case 4:
	          return _context6.a(2);
	      }
	    }, _callee6, this, [[1, 3]]);
	  }));
	  return _requestToken2.apply(this, arguments);
	}
	return src$1;
}

var jwtaccess = {};

var hasRequiredJwtaccess;

function requireJwtaccess () {
	if (hasRequiredJwtaccess) return jwtaccess;
	hasRequiredJwtaccess = 1;
	// Copyright 2015 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(jwtaccess, "__esModule", { value: true });
	jwtaccess.JWTAccess = void 0;
	const jws = requireJws();
	const util_1 = requireUtil();
	const DEFAULT_HEADER = {
	    alg: 'RS256',
	    typ: 'JWT',
	};
	class JWTAccess {
	    email;
	    key;
	    keyId;
	    projectId;
	    eagerRefreshThresholdMillis;
	    cache = new util_1.LRUCache({
	        capacity: 500,
	        maxAge: 60 * 60 * 1000,
	    });
	    /**
	     * JWTAccess service account credentials.
	     *
	     * Create a new access token by using the credential to create a new JWT token
	     * that's recognized as the access token.
	     *
	     * @param email the service account email address.
	     * @param key the private key that will be used to sign the token.
	     * @param keyId the ID of the private key used to sign the token.
	     */
	    constructor(email, key, keyId, eagerRefreshThresholdMillis) {
	        this.email = email;
	        this.key = key;
	        this.keyId = keyId;
	        this.eagerRefreshThresholdMillis =
	            eagerRefreshThresholdMillis ?? 5 * 60 * 1000;
	    }
	    /**
	     * Ensures that we're caching a key appropriately, giving precedence to scopes vs. url
	     *
	     * @param url The URI being authorized.
	     * @param scopes The scope or scopes being authorized
	     * @returns A string that returns the cached key.
	     */
	    getCachedKey(url, scopes) {
	        let cacheKey = url;
	        if (scopes && Array.isArray(scopes) && scopes.length) {
	            cacheKey = url ? `${url}_${scopes.join('_')}` : `${scopes.join('_')}`;
	        }
	        else if (typeof scopes === 'string') {
	            cacheKey = url ? `${url}_${scopes}` : scopes;
	        }
	        if (!cacheKey) {
	            throw Error('Scopes or url must be provided');
	        }
	        return cacheKey;
	    }
	    /**
	     * Get a non-expired access token, after refreshing if necessary.
	     *
	     * @param url The URI being authorized.
	     * @param additionalClaims An object with a set of additional claims to
	     * include in the payload.
	     * @returns An object that includes the authorization header.
	     */
	    getRequestHeaders(url, additionalClaims, scopes) {
	        // Return cached authorization headers, unless we are within
	        // eagerRefreshThresholdMillis ms of them expiring:
	        const key = this.getCachedKey(url, scopes);
	        const cachedToken = this.cache.get(key);
	        const now = Date.now();
	        if (cachedToken &&
	            cachedToken.expiration - now > this.eagerRefreshThresholdMillis) {
	            // Copying headers into a new `Headers` object to avoid potential leakage -
	            // as this is a cache it is possible for multiple requests to reference this
	            // same value.
	            return new Headers(cachedToken.headers);
	        }
	        const iat = Math.floor(Date.now() / 1000);
	        const exp = JWTAccess.getExpirationTime(iat);
	        let defaultClaims;
	        // Turn scopes into space-separated string
	        if (Array.isArray(scopes)) {
	            scopes = scopes.join(' ');
	        }
	        // If scopes are specified, sign with scopes
	        if (scopes) {
	            defaultClaims = {
	                iss: this.email,
	                sub: this.email,
	                scope: scopes,
	                exp,
	                iat,
	            };
	        }
	        else {
	            defaultClaims = {
	                iss: this.email,
	                sub: this.email,
	                aud: url,
	                exp,
	                iat,
	            };
	        }
	        // if additionalClaims are provided, ensure they do not collide with
	        // other required claims.
	        if (additionalClaims) {
	            for (const claim in defaultClaims) {
	                if (additionalClaims[claim]) {
	                    throw new Error(`The '${claim}' property is not allowed when passing additionalClaims. This claim is included in the JWT by default.`);
	                }
	            }
	        }
	        const header = this.keyId
	            ? { ...DEFAULT_HEADER, kid: this.keyId }
	            : DEFAULT_HEADER;
	        const payload = Object.assign(defaultClaims, additionalClaims);
	        // Sign the jwt and add it to the cache
	        const signedJWT = jws.sign({ header, payload, secret: this.key });
	        const headers = new Headers({ authorization: `Bearer ${signedJWT}` });
	        this.cache.set(key, {
	            expiration: exp * 1000,
	            headers,
	        });
	        return headers;
	    }
	    /**
	     * Returns an expiration time for the JWT token.
	     *
	     * @param iat The issued at time for the JWT.
	     * @returns An expiration time for the JWT.
	     */
	    static getExpirationTime(iat) {
	        const exp = iat + 3600; // 3600 seconds = 1 hour
	        return exp;
	    }
	    /**
	     * Create a JWTAccess credentials instance using the given input options.
	     * @param json The input object.
	     */
	    fromJSON(json) {
	        if (!json) {
	            throw new Error('Must pass in a JSON object containing the service account auth settings.');
	        }
	        if (!json.client_email) {
	            throw new Error('The incoming JSON object does not contain a client_email field');
	        }
	        if (!json.private_key) {
	            throw new Error('The incoming JSON object does not contain a private_key field');
	        }
	        // Extract the relevant information from the json key file.
	        this.email = json.client_email;
	        this.key = json.private_key;
	        this.keyId = json.private_key_id;
	        this.projectId = json.project_id;
	    }
	    fromStream(inputStream, callback) {
	        if (callback) {
	            this.fromStreamAsync(inputStream).then(() => callback(), callback);
	        }
	        else {
	            return this.fromStreamAsync(inputStream);
	        }
	    }
	    fromStreamAsync(inputStream) {
	        return new Promise((resolve, reject) => {
	            if (!inputStream) {
	                reject(new Error('Must pass in a stream containing the service account auth settings.'));
	            }
	            let s = '';
	            inputStream
	                .setEncoding('utf8')
	                .on('data', chunk => (s += chunk))
	                .on('error', reject)
	                .on('end', () => {
	                try {
	                    const data = JSON.parse(s);
	                    this.fromJSON(data);
	                    resolve();
	                }
	                catch (err) {
	                    reject(err);
	                }
	            });
	        });
	    }
	}
	jwtaccess.JWTAccess = JWTAccess;
	
	return jwtaccess;
}

var hasRequiredJwtclient;

function requireJwtclient () {
	if (hasRequiredJwtclient) return jwtclient;
	hasRequiredJwtclient = 1;
	// Copyright 2013 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(jwtclient, "__esModule", { value: true });
	jwtclient.JWT = void 0;
	const gtoken_1 = requireSrc$2();
	const jwtaccess_1 = requireJwtaccess();
	const oauth2client_1 = requireOauth2client();
	const authclient_1 = requireAuthclient();
	class JWT extends oauth2client_1.OAuth2Client {
	    email;
	    keyFile;
	    key;
	    keyId;
	    defaultScopes;
	    scopes;
	    scope;
	    subject;
	    gtoken;
	    additionalClaims;
	    useJWTAccessWithScope;
	    defaultServicePath;
	    access;
	    /**
	     * JWT service account credentials.
	     *
	     * Retrieve access token using gtoken.
	     *
	     * @param options the
	     */
	    constructor(options = {}) {
	        super(options);
	        this.email = options.email;
	        this.keyFile = options.keyFile;
	        this.key = options.key;
	        this.keyId = options.keyId;
	        this.scopes = options.scopes;
	        this.subject = options.subject;
	        this.additionalClaims = options.additionalClaims;
	        // Start with an expired refresh token, which will automatically be
	        // refreshed before the first API call is made.
	        this.credentials = { refresh_token: 'jwt-placeholder', expiry_date: 1 };
	    }
	    /**
	     * Creates a copy of the credential with the specified scopes.
	     * @param scopes List of requested scopes or a single scope.
	     * @return The cloned instance.
	     */
	    createScoped(scopes) {
	        const jwt = new JWT(this);
	        jwt.scopes = scopes;
	        return jwt;
	    }
	    /**
	     * Obtains the metadata to be sent with the request.
	     *
	     * @param url the URI being authorized.
	     */
	    async getRequestMetadataAsync(url) {
	        url = this.defaultServicePath ? `https://${this.defaultServicePath}/` : url;
	        const useSelfSignedJWT = (!this.hasUserScopes() && url) ||
	            (this.useJWTAccessWithScope && this.hasAnyScopes()) ||
	            this.universeDomain !== authclient_1.DEFAULT_UNIVERSE;
	        if (this.subject && this.universeDomain !== authclient_1.DEFAULT_UNIVERSE) {
	            throw new RangeError(`Service Account user is configured for the credential. Domain-wide delegation is not supported in universes other than ${authclient_1.DEFAULT_UNIVERSE}`);
	        }
	        if (!this.apiKey && useSelfSignedJWT) {
	            if (this.additionalClaims &&
	                this.additionalClaims.target_audience) {
	                const { tokens } = await this.refreshToken();
	                return {
	                    headers: this.addSharedMetadataHeaders(new Headers({
	                        authorization: `Bearer ${tokens.id_token}`,
	                    })),
	                };
	            }
	            else {
	                // no scopes have been set, but a uri has been provided. Use JWTAccess
	                // credentials.
	                if (!this.access) {
	                    this.access = new jwtaccess_1.JWTAccess(this.email, this.key, this.keyId, this.eagerRefreshThresholdMillis);
	                }
	                let scopes;
	                if (this.hasUserScopes()) {
	                    scopes = this.scopes;
	                }
	                else if (!url) {
	                    scopes = this.defaultScopes;
	                }
	                const useScopes = this.useJWTAccessWithScope ||
	                    this.universeDomain !== authclient_1.DEFAULT_UNIVERSE;
	                const headers = await this.access.getRequestHeaders(url ?? undefined, this.additionalClaims, 
	                // Scopes take precedent over audience for signing,
	                // so we only provide them if `useJWTAccessWithScope` is on or
	                // if we are in a non-default universe
	                useScopes ? scopes : undefined);
	                return { headers: this.addSharedMetadataHeaders(headers) };
	            }
	        }
	        else if (this.hasAnyScopes() || this.apiKey) {
	            return super.getRequestMetadataAsync(url);
	        }
	        else {
	            // If no audience, apiKey, or scopes are provided, we should not attempt
	            // to populate any headers:
	            return { headers: new Headers() };
	        }
	    }
	    /**
	     * Fetches an ID token.
	     * @param targetAudience the audience for the fetched ID token.
	     */
	    async fetchIdToken(targetAudience) {
	        // Create a new gToken for fetching an ID token
	        const gtoken = new gtoken_1.GoogleToken({
	            iss: this.email,
	            sub: this.subject,
	            scope: this.scopes || this.defaultScopes,
	            keyFile: this.keyFile,
	            key: this.key,
	            additionalClaims: { target_audience: targetAudience },
	            transporter: this.transporter,
	        });
	        await gtoken.getToken({
	            forceRefresh: true,
	        });
	        if (!gtoken.idToken) {
	            throw new Error('Unknown error: Failed to fetch ID token');
	        }
	        return gtoken.idToken;
	    }
	    /**
	     * Determine if there are currently scopes available.
	     */
	    hasUserScopes() {
	        if (!this.scopes) {
	            return false;
	        }
	        return this.scopes.length > 0;
	    }
	    /**
	     * Are there any default or user scopes defined.
	     */
	    hasAnyScopes() {
	        if (this.scopes && this.scopes.length > 0)
	            return true;
	        if (this.defaultScopes && this.defaultScopes.length > 0)
	            return true;
	        return false;
	    }
	    authorize(callback) {
	        if (callback) {
	            this.authorizeAsync().then(r => callback(null, r), callback);
	        }
	        else {
	            return this.authorizeAsync();
	        }
	    }
	    async authorizeAsync() {
	        const result = await this.refreshToken();
	        if (!result) {
	            throw new Error('No result returned');
	        }
	        this.credentials = result.tokens;
	        this.credentials.refresh_token = 'jwt-placeholder';
	        this.key = this.gtoken.key;
	        this.email = this.gtoken.iss;
	        return result.tokens;
	    }
	    /**
	     * Refreshes the access token.
	     * @param refreshToken ignored
	     * @private
	     */
	    async refreshTokenNoCache() {
	        const gtoken = this.createGToken();
	        const token = await gtoken.getToken({
	            forceRefresh: this.isTokenExpiring(),
	        });
	        const tokens = {
	            access_token: token.access_token,
	            token_type: 'Bearer',
	            expiry_date: gtoken.expiresAt,
	            id_token: gtoken.idToken,
	        };
	        this.emit('tokens', tokens);
	        return { res: null, tokens };
	    }
	    /**
	     * Create a gToken if it doesn't already exist.
	     */
	    createGToken() {
	        if (!this.gtoken) {
	            this.gtoken = new gtoken_1.GoogleToken({
	                iss: this.email,
	                sub: this.subject,
	                scope: this.scopes || this.defaultScopes,
	                keyFile: this.keyFile,
	                key: this.key,
	                additionalClaims: this.additionalClaims,
	                transporter: this.transporter,
	            });
	        }
	        return this.gtoken;
	    }
	    /**
	     * Create a JWT credentials instance using the given input options.
	     * @param json The input object.
	     *
	     * @remarks
	     *
	     * **Important**: If you accept a credential configuration (credential JSON/File/Stream) from an external source for authentication to Google Cloud, you must validate it before providing it to any Google API or library. Providing an unvalidated credential configuration to Google APIs can compromise the security of your systems and data. For more information, refer to {@link https://cloud.google.com/docs/authentication/external/externally-sourced-credentials Validate credential configurations from external sources}.
	     */
	    fromJSON(json) {
	        if (!json) {
	            throw new Error('Must pass in a JSON object containing the service account auth settings.');
	        }
	        if (!json.client_email) {
	            throw new Error('The incoming JSON object does not contain a client_email field');
	        }
	        if (!json.private_key) {
	            throw new Error('The incoming JSON object does not contain a private_key field');
	        }
	        // Extract the relevant information from the json key file.
	        this.email = json.client_email;
	        this.key = json.private_key;
	        this.keyId = json.private_key_id;
	        this.projectId = json.project_id;
	        this.quotaProjectId = json.quota_project_id;
	        this.universeDomain = json.universe_domain || this.universeDomain;
	    }
	    fromStream(inputStream, callback) {
	        if (callback) {
	            this.fromStreamAsync(inputStream).then(() => callback(), callback);
	        }
	        else {
	            return this.fromStreamAsync(inputStream);
	        }
	    }
	    fromStreamAsync(inputStream) {
	        return new Promise((resolve, reject) => {
	            if (!inputStream) {
	                throw new Error('Must pass in a stream containing the service account auth settings.');
	            }
	            let s = '';
	            inputStream
	                .setEncoding('utf8')
	                .on('error', reject)
	                .on('data', chunk => (s += chunk))
	                .on('end', () => {
	                try {
	                    const data = JSON.parse(s);
	                    this.fromJSON(data);
	                    resolve();
	                }
	                catch (e) {
	                    reject(e);
	                }
	            });
	        });
	    }
	    /**
	     * Creates a JWT credentials instance using an API Key for authentication.
	     * @param apiKey The API Key in string form.
	     */
	    fromAPIKey(apiKey) {
	        if (typeof apiKey !== 'string') {
	            throw new Error('Must provide an API Key string.');
	        }
	        this.apiKey = apiKey;
	    }
	    /**
	     * Using the key or keyFile on the JWT client, obtain an object that contains
	     * the key and the client email.
	     */
	    async getCredentials() {
	        if (this.key) {
	            return { private_key: this.key, client_email: this.email };
	        }
	        else if (this.keyFile) {
	            const gtoken = this.createGToken();
	            const creds = await gtoken.getCredentials(this.keyFile);
	            return { private_key: creds.privateKey, client_email: creds.clientEmail };
	        }
	        throw new Error('A key or a keyFile must be provided to getCredentials.');
	    }
	}
	jwtclient.JWT = JWT;
	
	return jwtclient;
}

var refreshclient = {};

var hasRequiredRefreshclient;

function requireRefreshclient () {
	if (hasRequiredRefreshclient) return refreshclient;
	hasRequiredRefreshclient = 1;
	// Copyright 2015 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(refreshclient, "__esModule", { value: true });
	refreshclient.UserRefreshClient = refreshclient.USER_REFRESH_ACCOUNT_TYPE = void 0;
	const oauth2client_1 = requireOauth2client();
	const authclient_1 = requireAuthclient();
	refreshclient.USER_REFRESH_ACCOUNT_TYPE = 'authorized_user';
	class UserRefreshClient extends oauth2client_1.OAuth2Client {
	    // TODO: refactor tests to make this private
	    // In a future gts release, the _propertyName rule will be lifted.
	    // This is also a hard one because `this.refreshToken` is a function.
	    _refreshToken;
	    /**
	     * The User Refresh Token client.
	     *
	     * @param optionsOrClientId The User Refresh Token client options. Passing an `clientId` directly is **@DEPRECATED**.
	     * @param clientSecret **@DEPRECATED**. Provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead.
	     * @param refreshToken **@DEPRECATED**. Provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead.
	     * @param eagerRefreshThresholdMillis **@DEPRECATED**. Provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead.
	     * @param forceRefreshOnFailure **@DEPRECATED**. Provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead.
	     */
	    constructor(optionsOrClientId, 
	    /**
	     * @deprecated - provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead
	     */
	    clientSecret, 
	    /**
	     * @deprecated - provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead
	     */
	    refreshToken, 
	    /**
	     * @deprecated - provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead
	     */
	    eagerRefreshThresholdMillis, 
	    /**
	     * @deprecated - provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead
	     */
	    forceRefreshOnFailure) {
	        const opts = optionsOrClientId && typeof optionsOrClientId === 'object'
	            ? optionsOrClientId
	            : {
	                clientId: optionsOrClientId,
	                clientSecret,
	                refreshToken,
	                eagerRefreshThresholdMillis,
	                forceRefreshOnFailure,
	            };
	        super(opts);
	        this._refreshToken = opts.refreshToken;
	        this.credentials.refresh_token = opts.refreshToken;
	    }
	    /**
	     * Refreshes the access token.
	     * @param refreshToken An ignored refreshToken..
	     * @param callback Optional callback.
	     */
	    async refreshTokenNoCache() {
	        return super.refreshTokenNoCache(this._refreshToken);
	    }
	    async fetchIdToken(targetAudience) {
	        const opts = {
	            ...UserRefreshClient.RETRY_CONFIG,
	            url: this.endpoints.oauth2TokenUrl,
	            method: 'POST',
	            data: new URLSearchParams({
	                client_id: this._clientId,
	                client_secret: this._clientSecret,
	                grant_type: 'refresh_token',
	                refresh_token: this._refreshToken,
	                target_audience: targetAudience,
	            }),
	        };
	        authclient_1.AuthClient.setMethodName(opts, 'fetchIdToken');
	        const res = await this.transporter.request(opts);
	        return res.data.id_token;
	    }
	    /**
	     * Create a UserRefreshClient credentials instance using the given input
	     * options.
	     * @param json The input object.
	     */
	    fromJSON(json) {
	        if (!json) {
	            throw new Error('Must pass in a JSON object containing the user refresh token');
	        }
	        if (json.type !== 'authorized_user') {
	            throw new Error('The incoming JSON object does not have the "authorized_user" type');
	        }
	        if (!json.client_id) {
	            throw new Error('The incoming JSON object does not contain a client_id field');
	        }
	        if (!json.client_secret) {
	            throw new Error('The incoming JSON object does not contain a client_secret field');
	        }
	        if (!json.refresh_token) {
	            throw new Error('The incoming JSON object does not contain a refresh_token field');
	        }
	        this._clientId = json.client_id;
	        this._clientSecret = json.client_secret;
	        this._refreshToken = json.refresh_token;
	        this.credentials.refresh_token = json.refresh_token;
	        this.quotaProjectId = json.quota_project_id;
	        this.universeDomain = json.universe_domain || this.universeDomain;
	    }
	    fromStream(inputStream, callback) {
	        if (callback) {
	            this.fromStreamAsync(inputStream).then(() => callback(), callback);
	        }
	        else {
	            return this.fromStreamAsync(inputStream);
	        }
	    }
	    async fromStreamAsync(inputStream) {
	        return new Promise((resolve, reject) => {
	            if (!inputStream) {
	                return reject(new Error('Must pass in a stream containing the user refresh token.'));
	            }
	            let s = '';
	            inputStream
	                .setEncoding('utf8')
	                .on('error', reject)
	                .on('data', chunk => (s += chunk))
	                .on('end', () => {
	                try {
	                    const data = JSON.parse(s);
	                    this.fromJSON(data);
	                    return resolve();
	                }
	                catch (err) {
	                    return reject(err);
	                }
	            });
	        });
	    }
	    /**
	     * Create a UserRefreshClient credentials instance using the given input
	     * options.
	     * @param json The input object.
	     */
	    static fromJSON(json) {
	        const client = new UserRefreshClient();
	        client.fromJSON(json);
	        return client;
	    }
	}
	refreshclient.UserRefreshClient = UserRefreshClient;
	
	return refreshclient;
}

var impersonated = {};

var hasRequiredImpersonated;

function requireImpersonated () {
	if (hasRequiredImpersonated) return impersonated;
	hasRequiredImpersonated = 1;
	/**
	 * Copyright 2021 Google LLC
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	Object.defineProperty(impersonated, "__esModule", { value: true });
	impersonated.Impersonated = impersonated.IMPERSONATED_ACCOUNT_TYPE = void 0;
	const oauth2client_1 = requireOauth2client();
	const gaxios_1 = requireSrc$5();
	const util_1 = requireUtil();
	impersonated.IMPERSONATED_ACCOUNT_TYPE = 'impersonated_service_account';
	class Impersonated extends oauth2client_1.OAuth2Client {
	    sourceClient;
	    targetPrincipal;
	    targetScopes;
	    delegates;
	    lifetime;
	    endpoint;
	    /**
	     * Impersonated service account credentials.
	     *
	     * Create a new access token by impersonating another service account.
	     *
	     * Impersonated Credentials allowing credentials issued to a user or
	     * service account to impersonate another. The source project using
	     * Impersonated Credentials must enable the "IAMCredentials" API.
	     * Also, the target service account must grant the orginating principal
	     * the "Service Account Token Creator" IAM role.
	     *
	     * @param {object} options - The configuration object.
	     * @param {object} [options.sourceClient] the source credential used as to
	     * acquire the impersonated credentials.
	     * @param {string} [options.targetPrincipal] the service account to
	     * impersonate.
	     * @param {string[]} [options.delegates] the chained list of delegates
	     * required to grant the final access_token. If set, the sequence of
	     * identities must have "Service Account Token Creator" capability granted to
	     * the preceding identity. For example, if set to [serviceAccountB,
	     * serviceAccountC], the sourceCredential must have the Token Creator role on
	     * serviceAccountB. serviceAccountB must have the Token Creator on
	     * serviceAccountC. Finally, C must have Token Creator on target_principal.
	     * If left unset, sourceCredential must have that role on targetPrincipal.
	     * @param {string[]} [options.targetScopes] scopes to request during the
	     * authorization grant.
	     * @param {number} [options.lifetime] number of seconds the delegated
	     * credential should be valid for up to 3600 seconds by default, or 43,200
	     * seconds by extending the token's lifetime, see:
	     * https://cloud.google.com/iam/docs/creating-short-lived-service-account-credentials#sa-credentials-oauth
	     * @param {string} [options.endpoint] api endpoint override.
	     */
	    constructor(options = {}) {
	        super(options);
	        // Start with an expired refresh token, which will automatically be
	        // refreshed before the first API call is made.
	        this.credentials = {
	            expiry_date: 1,
	            refresh_token: 'impersonated-placeholder',
	        };
	        this.sourceClient = options.sourceClient ?? new oauth2client_1.OAuth2Client();
	        this.targetPrincipal = options.targetPrincipal ?? '';
	        this.delegates = options.delegates ?? [];
	        this.targetScopes = options.targetScopes ?? [];
	        this.lifetime = options.lifetime ?? 3600;
	        const usingExplicitUniverseDomain = !!(0, util_1.originalOrCamelOptions)(options).get('universe_domain');
	        if (!usingExplicitUniverseDomain) {
	            // override the default universe with the source's universe
	            this.universeDomain = this.sourceClient.universeDomain;
	        }
	        else if (this.sourceClient.universeDomain !== this.universeDomain) {
	            // non-default universe and is not matching the source - this could be a credential leak
	            throw new RangeError(`Universe domain ${this.sourceClient.universeDomain} in source credentials does not match ${this.universeDomain} universe domain set for impersonated credentials.`);
	        }
	        this.endpoint =
	            options.endpoint ?? `https://iamcredentials.${this.universeDomain}`;
	    }
	    /**
	     * Signs some bytes.
	     *
	     * {@link https://cloud.google.com/iam/docs/reference/credentials/rest/v1/projects.serviceAccounts/signBlob Reference Documentation}
	     * @param blobToSign String to sign.
	     *
	     * @returns A {@link SignBlobResponse} denoting the keyID and signedBlob in base64 string
	     */
	    async sign(blobToSign) {
	        await this.sourceClient.getAccessToken();
	        const name = `projects/-/serviceAccounts/${this.targetPrincipal}`;
	        const u = `${this.endpoint}/v1/${name}:signBlob`;
	        const body = {
	            delegates: this.delegates,
	            payload: Buffer.from(blobToSign).toString('base64'),
	        };
	        const res = await this.sourceClient.request({
	            ...Impersonated.RETRY_CONFIG,
	            url: u,
	            data: body,
	            method: 'POST',
	        });
	        return res.data;
	    }
	    /** The service account email to be impersonated. */
	    getTargetPrincipal() {
	        return this.targetPrincipal;
	    }
	    /**
	     * Refreshes the access token.
	     */
	    async refreshToken() {
	        try {
	            await this.sourceClient.getAccessToken();
	            const name = 'projects/-/serviceAccounts/' + this.targetPrincipal;
	            const u = `${this.endpoint}/v1/${name}:generateAccessToken`;
	            const body = {
	                delegates: this.delegates,
	                scope: this.targetScopes,
	                lifetime: this.lifetime + 's',
	            };
	            const res = await this.sourceClient.request({
	                ...Impersonated.RETRY_CONFIG,
	                url: u,
	                data: body,
	                method: 'POST',
	            });
	            const tokenResponse = res.data;
	            this.credentials.access_token = tokenResponse.accessToken;
	            this.credentials.expiry_date = Date.parse(tokenResponse.expireTime);
	            return {
	                tokens: this.credentials,
	                res,
	            };
	        }
	        catch (error) {
	            if (!(error instanceof Error))
	                throw error;
	            let status = 0;
	            let message = '';
	            if (error instanceof gaxios_1.GaxiosError) {
	                status = error?.response?.data?.error?.status;
	                message = error?.response?.data?.error?.message;
	            }
	            if (status && message) {
	                error.message = `${status}: unable to impersonate: ${message}`;
	                throw error;
	            }
	            else {
	                error.message = `unable to impersonate: ${error}`;
	                throw error;
	            }
	        }
	    }
	    /**
	     * Generates an OpenID Connect ID token for a service account.
	     *
	     * {@link https://cloud.google.com/iam/docs/reference/credentials/rest/v1/projects.serviceAccounts/generateIdToken Reference Documentation}
	     *
	     * @param targetAudience the audience for the fetched ID token.
	     * @param options the for the request
	     * @return an OpenID Connect ID token
	     */
	    async fetchIdToken(targetAudience, options) {
	        await this.sourceClient.getAccessToken();
	        const name = `projects/-/serviceAccounts/${this.targetPrincipal}`;
	        const u = `${this.endpoint}/v1/${name}:generateIdToken`;
	        const body = {
	            delegates: this.delegates,
	            audience: targetAudience,
	            includeEmail: options?.includeEmail ?? true,
	            useEmailAzp: options?.includeEmail ?? true,
	        };
	        const res = await this.sourceClient.request({
	            ...Impersonated.RETRY_CONFIG,
	            url: u,
	            data: body,
	            method: 'POST',
	        });
	        return res.data.token;
	    }
	}
	impersonated.Impersonated = Impersonated;
	
	return impersonated;
}

var externalclient = {};

var baseexternalclient = {};

var stscredentials = {};

var oauth2common = {};

var hasRequiredOauth2common;

function requireOauth2common () {
	if (hasRequiredOauth2common) return oauth2common;
	hasRequiredOauth2common = 1;
	// Copyright 2021 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(oauth2common, "__esModule", { value: true });
	oauth2common.OAuthClientAuthHandler = void 0;
	oauth2common.getErrorFromOAuthErrorResponse = getErrorFromOAuthErrorResponse;
	const gaxios_1 = requireSrc$5();
	const crypto_1 = requireCrypto();
	/** List of HTTP methods that accept request bodies. */
	const METHODS_SUPPORTING_REQUEST_BODY = ['PUT', 'POST', 'PATCH'];
	/**
	 * Abstract class for handling client authentication in OAuth-based
	 * operations.
	 * When request-body client authentication is used, only application/json and
	 * application/x-www-form-urlencoded content types for HTTP methods that support
	 * request bodies are supported.
	 */
	class OAuthClientAuthHandler {
	    #crypto = (0, crypto_1.createCrypto)();
	    #clientAuthentication;
	    transporter;
	    /**
	     * Instantiates an OAuth client authentication handler.
	     * @param options The OAuth Client Auth Handler instance options. Passing an `ClientAuthentication` directly is **@DEPRECATED**.
	     */
	    constructor(options) {
	        if (options && 'clientId' in options) {
	            this.#clientAuthentication = options;
	            this.transporter = new gaxios_1.Gaxios();
	        }
	        else {
	            this.#clientAuthentication = options?.clientAuthentication;
	            this.transporter = options?.transporter || new gaxios_1.Gaxios();
	        }
	    }
	    /**
	     * Applies client authentication on the OAuth request's headers or POST
	     * body but does not process the request.
	     * @param opts The GaxiosOptions whose headers or data are to be modified
	     *   depending on the client authentication mechanism to be used.
	     * @param bearerToken The optional bearer token to use for authentication.
	     *   When this is used, no client authentication credentials are needed.
	     */
	    applyClientAuthenticationOptions(opts, bearerToken) {
	        opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers);
	        // Inject authenticated header.
	        this.injectAuthenticatedHeaders(opts, bearerToken);
	        // Inject authenticated request body.
	        if (!bearerToken) {
	            this.injectAuthenticatedRequestBody(opts);
	        }
	    }
	    /**
	     * Applies client authentication on the request's header if either
	     * basic authentication or bearer token authentication is selected.
	     *
	     * @param opts The GaxiosOptions whose headers or data are to be modified
	     *   depending on the client authentication mechanism to be used.
	     * @param bearerToken The optional bearer token to use for authentication.
	     *   When this is used, no client authentication credentials are needed.
	     */
	    injectAuthenticatedHeaders(opts, bearerToken) {
	        // Bearer token prioritized higher than basic Auth.
	        if (bearerToken) {
	            opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers, {
	                authorization: `Bearer ${bearerToken}`,
	            });
	        }
	        else if (this.#clientAuthentication?.confidentialClientType === 'basic') {
	            opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers);
	            const clientId = this.#clientAuthentication.clientId;
	            const clientSecret = this.#clientAuthentication.clientSecret || '';
	            const base64EncodedCreds = this.#crypto.encodeBase64StringUtf8(`${clientId}:${clientSecret}`);
	            gaxios_1.Gaxios.mergeHeaders(opts.headers, {
	                authorization: `Basic ${base64EncodedCreds}`,
	            });
	        }
	    }
	    /**
	     * Applies client authentication on the request's body if request-body
	     * client authentication is selected.
	     *
	     * @param opts The GaxiosOptions whose headers or data are to be modified
	     *   depending on the client authentication mechanism to be used.
	     */
	    injectAuthenticatedRequestBody(opts) {
	        if (this.#clientAuthentication?.confidentialClientType === 'request-body') {
	            const method = (opts.method || 'GET').toUpperCase();
	            if (!METHODS_SUPPORTING_REQUEST_BODY.includes(method)) {
	                throw new Error(`${method} HTTP method does not support ` +
	                    `${this.#clientAuthentication.confidentialClientType} ` +
	                    'client authentication');
	            }
	            // Get content-type
	            const headers = new Headers(opts.headers);
	            const contentType = headers.get('content-type');
	            // Inject authenticated request body
	            if (contentType?.startsWith('application/x-www-form-urlencoded') ||
	                opts.data instanceof URLSearchParams) {
	                const data = new URLSearchParams(opts.data ?? '');
	                data.append('client_id', this.#clientAuthentication.clientId);
	                data.append('client_secret', this.#clientAuthentication.clientSecret || '');
	                opts.data = data;
	            }
	            else if (contentType?.startsWith('application/json')) {
	                opts.data = opts.data || {};
	                Object.assign(opts.data, {
	                    client_id: this.#clientAuthentication.clientId,
	                    client_secret: this.#clientAuthentication.clientSecret || '',
	                });
	            }
	            else {
	                throw new Error(`${contentType} content-types are not supported with ` +
	                    `${this.#clientAuthentication.confidentialClientType} ` +
	                    'client authentication');
	            }
	        }
	    }
	    /**
	     * Retry config for Auth-related requests.
	     *
	     * @remarks
	     *
	     * This is not a part of the default {@link AuthClient.transporter transporter/gaxios}
	     * config as some downstream APIs would prefer if customers explicitly enable retries,
	     * such as GCS.
	     */
	    static get RETRY_CONFIG() {
	        return {
	            retry: true,
	            retryConfig: {
	                httpMethodsToRetry: ['GET', 'PUT', 'POST', 'HEAD', 'OPTIONS', 'DELETE'],
	            },
	        };
	    }
	}
	oauth2common.OAuthClientAuthHandler = OAuthClientAuthHandler;
	/**
	 * Converts an OAuth error response to a native JavaScript Error.
	 * @param resp The OAuth error response to convert to a native Error object.
	 * @param err The optional original error. If provided, the error properties
	 *   will be copied to the new error.
	 * @return The converted native Error object.
	 */
	function getErrorFromOAuthErrorResponse(resp, err) {
	    // Error response.
	    const errorCode = resp.error;
	    const errorDescription = resp.error_description;
	    const errorUri = resp.error_uri;
	    let message = `Error code ${errorCode}`;
	    if (typeof errorDescription !== 'undefined') {
	        message += `: ${errorDescription}`;
	    }
	    if (typeof errorUri !== 'undefined') {
	        message += ` - ${errorUri}`;
	    }
	    const newError = new Error(message);
	    // Copy properties from original error to newly generated error.
	    if (err) {
	        const keys = Object.keys(err);
	        if (err.stack) {
	            // Copy error.stack if available.
	            keys.push('stack');
	        }
	        keys.forEach(key => {
	            // Do not overwrite the message field.
	            if (key !== 'message') {
	                Object.defineProperty(newError, key, {
	                    value: err[key],
	                    writable: false,
	                    enumerable: true,
	                });
	            }
	        });
	    }
	    return newError;
	}
	
	return oauth2common;
}

var hasRequiredStscredentials;

function requireStscredentials () {
	if (hasRequiredStscredentials) return stscredentials;
	hasRequiredStscredentials = 1;
	// Copyright 2021 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(stscredentials, "__esModule", { value: true });
	stscredentials.StsCredentials = void 0;
	const gaxios_1 = requireSrc$5();
	const authclient_1 = requireAuthclient();
	const oauth2common_1 = requireOauth2common();
	const util_1 = requireUtil();
	/**
	 * Implements the OAuth 2.0 token exchange based on
	 * https://tools.ietf.org/html/rfc8693
	 */
	class StsCredentials extends oauth2common_1.OAuthClientAuthHandler {
	    #tokenExchangeEndpoint;
	    /**
	     * Initializes an STS credentials instance.
	     *
	     * @param options The STS credentials instance options. Passing an `tokenExchangeEndpoint` directly is **@DEPRECATED**.
	     * @param clientAuthentication **@DEPRECATED**. Provide a {@link StsCredentialsConstructionOptions `StsCredentialsConstructionOptions`} object in the first parameter instead.
	     */
	    constructor(options = {
	        tokenExchangeEndpoint: '',
	    }, 
	    /**
	     * @deprecated - provide a {@link StsCredentialsConstructionOptions `StsCredentialsConstructionOptions`} object in the first parameter instead
	     */
	    clientAuthentication) {
	        if (typeof options !== 'object' || options instanceof URL) {
	            options = {
	                tokenExchangeEndpoint: options,
	                clientAuthentication,
	            };
	        }
	        super(options);
	        this.#tokenExchangeEndpoint = options.tokenExchangeEndpoint;
	    }
	    /**
	     * Exchanges the provided token for another type of token based on the
	     * rfc8693 spec.
	     * @param stsCredentialsOptions The token exchange options used to populate
	     *   the token exchange request.
	     * @param additionalHeaders Optional additional headers to pass along the
	     *   request.
	     * @param options Optional additional GCP-specific non-spec defined options
	     *   to send with the request.
	     *   Example: `&options=${encodeUriComponent(JSON.stringified(options))}`
	     * @return A promise that resolves with the token exchange response containing
	     *   the requested token and its expiration time.
	     */
	    async exchangeToken(stsCredentialsOptions, headers, options) {
	        const values = {
	            grant_type: stsCredentialsOptions.grantType,
	            resource: stsCredentialsOptions.resource,
	            audience: stsCredentialsOptions.audience,
	            scope: stsCredentialsOptions.scope?.join(' '),
	            requested_token_type: stsCredentialsOptions.requestedTokenType,
	            subject_token: stsCredentialsOptions.subjectToken,
	            subject_token_type: stsCredentialsOptions.subjectTokenType,
	            actor_token: stsCredentialsOptions.actingParty?.actorToken,
	            actor_token_type: stsCredentialsOptions.actingParty?.actorTokenType,
	            // Non-standard GCP-specific options.
	            options: options && JSON.stringify(options),
	        };
	        const opts = {
	            ...StsCredentials.RETRY_CONFIG,
	            url: this.#tokenExchangeEndpoint.toString(),
	            method: 'POST',
	            headers,
	            data: new URLSearchParams((0, util_1.removeUndefinedValuesInObject)(values)),
	        };
	        authclient_1.AuthClient.setMethodName(opts, 'exchangeToken');
	        // Apply OAuth client authentication.
	        this.applyClientAuthenticationOptions(opts);
	        try {
	            const response = await this.transporter.request(opts);
	            // Successful response.
	            const stsSuccessfulResponse = response.data;
	            stsSuccessfulResponse.res = response;
	            return stsSuccessfulResponse;
	        }
	        catch (error) {
	            // Translate error to OAuthError.
	            if (error instanceof gaxios_1.GaxiosError && error.response) {
	                throw (0, oauth2common_1.getErrorFromOAuthErrorResponse)(error.response.data, 
	                // Preserve other fields from the original error.
	                error);
	            }
	            // Request could fail before the server responds.
	            throw error;
	        }
	    }
	}
	stscredentials.StsCredentials = StsCredentials;
	
	return stscredentials;
}

var hasRequiredBaseexternalclient;

function requireBaseexternalclient () {
	if (hasRequiredBaseexternalclient) return baseexternalclient;
	hasRequiredBaseexternalclient = 1;
	(function (exports) {
		// Copyright 2021 Google LLC
		//
		// Licensed under the Apache License, Version 2.0 (the "License");
		// you may not use this file except in compliance with the License.
		// You may obtain a copy of the License at
		//
		//      http://www.apache.org/licenses/LICENSE-2.0
		//
		// Unless required by applicable law or agreed to in writing, software
		// distributed under the License is distributed on an "AS IS" BASIS,
		// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		// See the License for the specific language governing permissions and
		// limitations under the License.
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.BaseExternalAccountClient = exports.CLOUD_RESOURCE_MANAGER = exports.EXTERNAL_ACCOUNT_TYPE = exports.EXPIRATION_TIME_OFFSET = void 0;
		const gaxios_1 = requireSrc$5();
		const stream = require$$3;
		const authclient_1 = requireAuthclient();
		const sts = requireStscredentials();
		const util_1 = requireUtil();
		const shared_cjs_1 = requireShared();
		/**
		 * The required token exchange grant_type: rfc8693#section-2.1
		 */
		const STS_GRANT_TYPE = 'urn:ietf:params:oauth:grant-type:token-exchange';
		/**
		 * The requested token exchange requested_token_type: rfc8693#section-2.1
		 */
		const STS_REQUEST_TOKEN_TYPE = 'urn:ietf:params:oauth:token-type:access_token';
		/** The default OAuth scope to request when none is provided. */
		const DEFAULT_OAUTH_SCOPE = 'https://www.googleapis.com/auth/cloud-platform';
		/** Default impersonated token lifespan in seconds.*/
		const DEFAULT_TOKEN_LIFESPAN = 3600;
		/**
		 * Offset to take into account network delays and server clock skews.
		 */
		exports.EXPIRATION_TIME_OFFSET = 5 * 60 * 1000;
		/**
		 * The credentials JSON file type for external account clients.
		 * There are 3 types of JSON configs:
		 * 1. authorized_user => Google end user credential
		 * 2. service_account => Google service account credential
		 * 3. external_Account => non-GCP service (eg. AWS, Azure, K8s)
		 */
		exports.EXTERNAL_ACCOUNT_TYPE = 'external_account';
		/**
		 * Cloud resource manager URL used to retrieve project information.
		 *
		 * @deprecated use {@link BaseExternalAccountClient.cloudResourceManagerURL} instead
		 **/
		exports.CLOUD_RESOURCE_MANAGER = 'https://cloudresourcemanager.googleapis.com/v1/projects/';
		/** The workforce audience pattern. */
		const WORKFORCE_AUDIENCE_PATTERN = '//iam\\.googleapis\\.com/locations/[^/]+/workforcePools/[^/]+/providers/.+';
		const DEFAULT_TOKEN_URL = 'https://sts.{universeDomain}/v1/token';
		/**
		 * Base external account client. This is used to instantiate AuthClients for
		 * exchanging external account credentials for GCP access token and authorizing
		 * requests to GCP APIs.
		 * The base class implements common logic for exchanging various type of
		 * external credentials for GCP access token. The logic of determining and
		 * retrieving the external credential based on the environment and
		 * credential_source will be left for the subclasses.
		 */
		class BaseExternalAccountClient extends authclient_1.AuthClient {
		    /**
		     * OAuth scopes for the GCP access token to use. When not provided,
		     * the default https://www.googleapis.com/auth/cloud-platform is
		     * used.
		     */
		    scopes;
		    projectNumber;
		    audience;
		    subjectTokenType;
		    stsCredential;
		    clientAuth;
		    credentialSourceType;
		    cachedAccessToken;
		    serviceAccountImpersonationUrl;
		    serviceAccountImpersonationLifetime;
		    workforcePoolUserProject;
		    configLifetimeRequested;
		    tokenUrl;
		    /**
		     * @example
		     * ```ts
		     * new URL('https://cloudresourcemanager.googleapis.com/v1/projects/');
		     * ```
		     */
		    cloudResourceManagerURL;
		    supplierContext;
		    /**
		     * A pending access token request. Used for concurrent calls.
		     */
		    #pendingAccessToken = null;
		    /**
		     * Instantiate a BaseExternalAccountClient instance using the provided JSON
		     * object loaded from an external account credentials file.
		     * @param options The external account options object typically loaded
		     *   from the external account JSON credential file. The camelCased options
		     *   are aliases for the snake_cased options.
		     */
		    constructor(options) {
		        super(options);
		        const opts = (0, util_1.originalOrCamelOptions)(options);
		        const type = opts.get('type');
		        if (type && type !== exports.EXTERNAL_ACCOUNT_TYPE) {
		            throw new Error(`Expected "${exports.EXTERNAL_ACCOUNT_TYPE}" type but ` +
		                `received "${options.type}"`);
		        }
		        const clientId = opts.get('client_id');
		        const clientSecret = opts.get('client_secret');
		        this.tokenUrl =
		            opts.get('token_url') ??
		                DEFAULT_TOKEN_URL.replace('{universeDomain}', this.universeDomain);
		        const subjectTokenType = opts.get('subject_token_type');
		        const workforcePoolUserProject = opts.get('workforce_pool_user_project');
		        const serviceAccountImpersonationUrl = opts.get('service_account_impersonation_url');
		        const serviceAccountImpersonation = opts.get('service_account_impersonation');
		        const serviceAccountImpersonationLifetime = (0, util_1.originalOrCamelOptions)(serviceAccountImpersonation).get('token_lifetime_seconds');
		        this.cloudResourceManagerURL = new URL(opts.get('cloud_resource_manager_url') ||
		            `https://cloudresourcemanager.${this.universeDomain}/v1/projects/`);
		        if (clientId) {
		            this.clientAuth = {
		                confidentialClientType: 'basic',
		                clientId,
		                clientSecret,
		            };
		        }
		        this.stsCredential = new sts.StsCredentials({
		            tokenExchangeEndpoint: this.tokenUrl,
		            clientAuthentication: this.clientAuth,
		        });
		        this.scopes = opts.get('scopes') || [DEFAULT_OAUTH_SCOPE];
		        this.cachedAccessToken = null;
		        this.audience = opts.get('audience');
		        this.subjectTokenType = subjectTokenType;
		        this.workforcePoolUserProject = workforcePoolUserProject;
		        const workforceAudiencePattern = new RegExp(WORKFORCE_AUDIENCE_PATTERN);
		        if (this.workforcePoolUserProject &&
		            !this.audience.match(workforceAudiencePattern)) {
		            throw new Error('workforcePoolUserProject should not be set for non-workforce pool ' +
		                'credentials.');
		        }
		        this.serviceAccountImpersonationUrl = serviceAccountImpersonationUrl;
		        this.serviceAccountImpersonationLifetime =
		            serviceAccountImpersonationLifetime;
		        if (this.serviceAccountImpersonationLifetime) {
		            this.configLifetimeRequested = true;
		        }
		        else {
		            this.configLifetimeRequested = false;
		            this.serviceAccountImpersonationLifetime = DEFAULT_TOKEN_LIFESPAN;
		        }
		        this.projectNumber = this.getProjectNumber(this.audience);
		        this.supplierContext = {
		            audience: this.audience,
		            subjectTokenType: this.subjectTokenType,
		            transporter: this.transporter,
		        };
		    }
		    /** The service account email to be impersonated, if available. */
		    getServiceAccountEmail() {
		        if (this.serviceAccountImpersonationUrl) {
		            if (this.serviceAccountImpersonationUrl.length > 256) {
		                /**
		                 * Prevents DOS attacks.
		                 * @see {@link https://github.com/googleapis/google-auth-library-nodejs/security/code-scanning/84}
		                 **/
		                throw new RangeError(`URL is too long: ${this.serviceAccountImpersonationUrl}`);
		            }
		            // Parse email from URL. The formal looks as follows:
		            // https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/name@project-id.iam.gserviceaccount.com:generateAccessToken
		            const re = /serviceAccounts\/(?<email>[^:]+):generateAccessToken$/;
		            const result = re.exec(this.serviceAccountImpersonationUrl);
		            return result?.groups?.email || null;
		        }
		        return null;
		    }
		    /**
		     * Provides a mechanism to inject GCP access tokens directly.
		     * When the provided credential expires, a new credential, using the
		     * external account options, is retrieved.
		     * @param credentials The Credentials object to set on the current client.
		     */
		    setCredentials(credentials) {
		        super.setCredentials(credentials);
		        this.cachedAccessToken = credentials;
		    }
		    /**
		     * @return A promise that resolves with the current GCP access token
		     *   response. If the current credential is expired, a new one is retrieved.
		     */
		    async getAccessToken() {
		        // If cached access token is unavailable or expired, force refresh.
		        if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) {
		            await this.refreshAccessTokenAsync();
		        }
		        // Return GCP access token in GetAccessTokenResponse format.
		        return {
		            token: this.cachedAccessToken.access_token,
		            res: this.cachedAccessToken.res,
		        };
		    }
		    /**
		     * The main authentication interface. It takes an optional url which when
		     * present is the endpoint being accessed, and returns a Promise which
		     * resolves with authorization header fields.
		     *
		     * The result has the form:
		     * { authorization: 'Bearer <access_token_value>' }
		     */
		    async getRequestHeaders() {
		        const accessTokenResponse = await this.getAccessToken();
		        const headers = new Headers({
		            authorization: `Bearer ${accessTokenResponse.token}`,
		        });
		        return this.addSharedMetadataHeaders(headers);
		    }
		    request(opts, callback) {
		        if (callback) {
		            this.requestAsync(opts).then(r => callback(null, r), e => {
		                return callback(e, e.response);
		            });
		        }
		        else {
		            return this.requestAsync(opts);
		        }
		    }
		    /**
		     * @return A promise that resolves with the project ID corresponding to the
		     *   current workload identity pool or current workforce pool if
		     *   determinable. For workforce pool credential, it returns the project ID
		     *   corresponding to the workforcePoolUserProject.
		     *   This is introduced to match the current pattern of using the Auth
		     *   library:
		     *   const projectId = await auth.getProjectId();
		     *   const url = `https://dns.googleapis.com/dns/v1/projects/${projectId}`;
		     *   const res = await client.request({ url });
		     *   The resource may not have permission
		     *   (resourcemanager.projects.get) to call this API or the required
		     *   scopes may not be selected:
		     *   https://cloud.google.com/resource-manager/reference/rest/v1/projects/get#authorization-scopes
		     */
		    async getProjectId() {
		        const projectNumber = this.projectNumber || this.workforcePoolUserProject;
		        if (this.projectId) {
		            // Return previously determined project ID.
		            return this.projectId;
		        }
		        else if (projectNumber) {
		            // Preferable not to use request() to avoid retrial policies.
		            const headers = await this.getRequestHeaders();
		            const opts = {
		                ...BaseExternalAccountClient.RETRY_CONFIG,
		                headers,
		                url: `${this.cloudResourceManagerURL.toString()}${projectNumber}`,
		            };
		            authclient_1.AuthClient.setMethodName(opts, 'getProjectId');
		            const response = await this.transporter.request(opts);
		            this.projectId = response.data.projectId;
		            return this.projectId;
		        }
		        return null;
		    }
		    /**
		     * Authenticates the provided HTTP request, processes it and resolves with the
		     * returned response.
		     * @param opts The HTTP request options.
		     * @param reAuthRetried Whether the current attempt is a retry after a failed attempt due to an auth failure.
		     * @return A promise that resolves with the successful response.
		     */
		    async requestAsync(opts, reAuthRetried = false) {
		        let response;
		        try {
		            const requestHeaders = await this.getRequestHeaders();
		            opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers);
		            this.addUserProjectAndAuthHeaders(opts.headers, requestHeaders);
		            response = await this.transporter.request(opts);
		        }
		        catch (e) {
		            const res = e.response;
		            if (res) {
		                const statusCode = res.status;
		                // Retry the request for metadata if the following criteria are true:
		                // - We haven't already retried.  It only makes sense to retry once.
		                // - The response was a 401 or a 403
		                // - The request didn't send a readableStream
		                // - forceRefreshOnFailure is true
		                const isReadableStream = res.config.data instanceof stream.Readable;
		                const isAuthErr = statusCode === 401 || statusCode === 403;
		                if (!reAuthRetried &&
		                    isAuthErr &&
		                    !isReadableStream &&
		                    this.forceRefreshOnFailure) {
		                    await this.refreshAccessTokenAsync();
		                    return await this.requestAsync(opts, true);
		                }
		            }
		            throw e;
		        }
		        return response;
		    }
		    /**
		     * Forces token refresh, even if unexpired tokens are currently cached.
		     * External credentials are exchanged for GCP access tokens via the token
		     * exchange endpoint and other settings provided in the client options
		     * object.
		     * If the service_account_impersonation_url is provided, an additional
		     * step to exchange the external account GCP access token for a service
		     * account impersonated token is performed.
		     * @return A promise that resolves with the fresh GCP access tokens.
		     */
		    async refreshAccessTokenAsync() {
		        // Use an existing access token request, or cache a new one
		        this.#pendingAccessToken =
		            this.#pendingAccessToken || this.#internalRefreshAccessTokenAsync();
		        try {
		            return await this.#pendingAccessToken;
		        }
		        finally {
		            // clear pending access token for future requests
		            this.#pendingAccessToken = null;
		        }
		    }
		    async #internalRefreshAccessTokenAsync() {
		        // Retrieve the external credential.
		        const subjectToken = await this.retrieveSubjectToken();
		        // Construct the STS credentials options.
		        const stsCredentialsOptions = {
		            grantType: STS_GRANT_TYPE,
		            audience: this.audience,
		            requestedTokenType: STS_REQUEST_TOKEN_TYPE,
		            subjectToken,
		            subjectTokenType: this.subjectTokenType,
		            // generateAccessToken requires the provided access token to have
		            // scopes:
		            // https://www.googleapis.com/auth/iam or
		            // https://www.googleapis.com/auth/cloud-platform
		            // The new service account access token scopes will match the user
		            // provided ones.
		            scope: this.serviceAccountImpersonationUrl
		                ? [DEFAULT_OAUTH_SCOPE]
		                : this.getScopesArray(),
		        };
		        // Exchange the external credentials for a GCP access token.
		        // Client auth is prioritized over passing the workforcePoolUserProject
		        // parameter for STS token exchange.
		        const additionalOptions = !this.clientAuth && this.workforcePoolUserProject
		            ? { userProject: this.workforcePoolUserProject }
		            : undefined;
		        const additionalHeaders = new Headers({
		            'x-goog-api-client': this.getMetricsHeaderValue(),
		        });
		        const stsResponse = await this.stsCredential.exchangeToken(stsCredentialsOptions, additionalHeaders, additionalOptions);
		        if (this.serviceAccountImpersonationUrl) {
		            this.cachedAccessToken = await this.getImpersonatedAccessToken(stsResponse.access_token);
		        }
		        else if (stsResponse.expires_in) {
		            // Save response in cached access token.
		            this.cachedAccessToken = {
		                access_token: stsResponse.access_token,
		                expiry_date: new Date().getTime() + stsResponse.expires_in * 1000,
		                res: stsResponse.res,
		            };
		        }
		        else {
		            // Save response in cached access token.
		            this.cachedAccessToken = {
		                access_token: stsResponse.access_token,
		                res: stsResponse.res,
		            };
		        }
		        // Save credentials.
		        this.credentials = {};
		        Object.assign(this.credentials, this.cachedAccessToken);
		        delete this.credentials.res;
		        // Trigger tokens event to notify external listeners.
		        this.emit('tokens', {
		            refresh_token: null,
		            expiry_date: this.cachedAccessToken.expiry_date,
		            access_token: this.cachedAccessToken.access_token,
		            token_type: 'Bearer',
		            id_token: null,
		        });
		        // Return the cached access token.
		        return this.cachedAccessToken;
		    }
		    /**
		     * Returns the workload identity pool project number if it is determinable
		     * from the audience resource name.
		     * @param audience The STS audience used to determine the project number.
		     * @return The project number associated with the workload identity pool, if
		     *   this can be determined from the STS audience field. Otherwise, null is
		     *   returned.
		     */
		    getProjectNumber(audience) {
		        // STS audience pattern:
		        // //iam.googleapis.com/projects/$PROJECT_NUMBER/locations/...
		        const match = audience.match(/\/projects\/([^/]+)/);
		        if (!match) {
		            return null;
		        }
		        return match[1];
		    }
		    /**
		     * Exchanges an external account GCP access token for a service
		     * account impersonated access token using iamcredentials
		     * GenerateAccessToken API.
		     * @param token The access token to exchange for a service account access
		     *   token.
		     * @return A promise that resolves with the service account impersonated
		     *   credentials response.
		     */
		    async getImpersonatedAccessToken(token) {
		        const opts = {
		            ...BaseExternalAccountClient.RETRY_CONFIG,
		            url: this.serviceAccountImpersonationUrl,
		            method: 'POST',
		            headers: {
		                'content-type': 'application/json',
		                authorization: `Bearer ${token}`,
		            },
		            data: {
		                scope: this.getScopesArray(),
		                lifetime: this.serviceAccountImpersonationLifetime + 's',
		            },
		        };
		        authclient_1.AuthClient.setMethodName(opts, 'getImpersonatedAccessToken');
		        const response = await this.transporter.request(opts);
		        const successResponse = response.data;
		        return {
		            access_token: successResponse.accessToken,
		            // Convert from ISO format to timestamp.
		            expiry_date: new Date(successResponse.expireTime).getTime(),
		            res: response,
		        };
		    }
		    /**
		     * Returns whether the provided credentials are expired or not.
		     * If there is no expiry time, assumes the token is not expired or expiring.
		     * @param accessToken The credentials to check for expiration.
		     * @return Whether the credentials are expired or not.
		     */
		    isExpired(accessToken) {
		        const now = new Date().getTime();
		        return accessToken.expiry_date
		            ? now >= accessToken.expiry_date - this.eagerRefreshThresholdMillis
		            : false;
		    }
		    /**
		     * @return The list of scopes for the requested GCP access token.
		     */
		    getScopesArray() {
		        // Since scopes can be provided as string or array, the type should
		        // be normalized.
		        if (typeof this.scopes === 'string') {
		            return [this.scopes];
		        }
		        return this.scopes || [DEFAULT_OAUTH_SCOPE];
		    }
		    getMetricsHeaderValue() {
		        const nodeVersion = process.version.replace(/^v/, '');
		        const saImpersonation = this.serviceAccountImpersonationUrl !== undefined;
		        const credentialSourceType = this.credentialSourceType
		            ? this.credentialSourceType
		            : 'unknown';
		        return `gl-node/${nodeVersion} auth/${shared_cjs_1.pkg.version} google-byoid-sdk source/${credentialSourceType} sa-impersonation/${saImpersonation} config-lifetime/${this.configLifetimeRequested}`;
		    }
		    getTokenUrl() {
		        return this.tokenUrl;
		    }
		}
		exports.BaseExternalAccountClient = BaseExternalAccountClient;
		
	} (baseexternalclient));
	return baseexternalclient;
}

var identitypoolclient = {};

var filesubjecttokensupplier = {};

var hasRequiredFilesubjecttokensupplier;

function requireFilesubjecttokensupplier () {
	if (hasRequiredFilesubjecttokensupplier) return filesubjecttokensupplier;
	hasRequiredFilesubjecttokensupplier = 1;
	// Copyright 2024 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(filesubjecttokensupplier, "__esModule", { value: true });
	filesubjecttokensupplier.FileSubjectTokenSupplier = void 0;
	const util_1 = require$$2;
	const fs = require$$0$2;
	// fs.readfile is undefined in browser karma tests causing
	// `npm run browser-test` to fail as test.oauth2.ts imports this file via
	// src/index.ts.
	// Fallback to void function to avoid promisify throwing a TypeError.
	const readFile = (0, util_1.promisify)(fs.readFile ?? (() => { }));
	const realpath = (0, util_1.promisify)(fs.realpath ?? (() => { }));
	const lstat = (0, util_1.promisify)(fs.lstat ?? (() => { }));
	/**
	 * Internal subject token supplier implementation used when a file location
	 * is configured in the credential configuration used to build an {@link IdentityPoolClient}
	 */
	class FileSubjectTokenSupplier {
	    filePath;
	    formatType;
	    subjectTokenFieldName;
	    /**
	     * Instantiates a new file based subject token supplier.
	     * @param opts The file subject token supplier options to build the supplier
	     *   with.
	     */
	    constructor(opts) {
	        this.filePath = opts.filePath;
	        this.formatType = opts.formatType;
	        this.subjectTokenFieldName = opts.subjectTokenFieldName;
	    }
	    /**
	     * Returns the subject token stored at the file specified in the constructor.
	     * @param context {@link ExternalAccountSupplierContext} from the calling
	     *   {@link IdentityPoolClient}, contains the requested audience and subject
	     *   token type for the external account identity. Not used.
	     */
	    async getSubjectToken() {
	        // Make sure there is a file at the path. lstatSync will throw if there is
	        // nothing there.
	        let parsedFilePath = this.filePath;
	        try {
	            // Resolve path to actual file in case of symlink. Expect a thrown error
	            // if not resolvable.
	            parsedFilePath = await realpath(parsedFilePath);
	            if (!(await lstat(parsedFilePath)).isFile()) {
	                throw new Error();
	            }
	        }
	        catch (err) {
	            if (err instanceof Error) {
	                err.message = `The file at ${parsedFilePath} does not exist, or it is not a file. ${err.message}`;
	            }
	            throw err;
	        }
	        let subjectToken;
	        const rawText = await readFile(parsedFilePath, { encoding: 'utf8' });
	        if (this.formatType === 'text') {
	            subjectToken = rawText;
	        }
	        else if (this.formatType === 'json' && this.subjectTokenFieldName) {
	            const json = JSON.parse(rawText);
	            subjectToken = json[this.subjectTokenFieldName];
	        }
	        if (!subjectToken) {
	            throw new Error('Unable to parse the subject_token from the credential_source file');
	        }
	        return subjectToken;
	    }
	}
	filesubjecttokensupplier.FileSubjectTokenSupplier = FileSubjectTokenSupplier;
	
	return filesubjecttokensupplier;
}

var urlsubjecttokensupplier = {};

var hasRequiredUrlsubjecttokensupplier;

function requireUrlsubjecttokensupplier () {
	if (hasRequiredUrlsubjecttokensupplier) return urlsubjecttokensupplier;
	hasRequiredUrlsubjecttokensupplier = 1;
	// Copyright 2024 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(urlsubjecttokensupplier, "__esModule", { value: true });
	urlsubjecttokensupplier.UrlSubjectTokenSupplier = void 0;
	const authclient_1 = requireAuthclient();
	/**
	 * Internal subject token supplier implementation used when a URL
	 * is configured in the credential configuration used to build an {@link IdentityPoolClient}
	 */
	class UrlSubjectTokenSupplier {
	    url;
	    headers;
	    formatType;
	    subjectTokenFieldName;
	    additionalGaxiosOptions;
	    /**
	     * Instantiates a URL subject token supplier.
	     * @param opts The URL subject token supplier options to build the supplier with.
	     */
	    constructor(opts) {
	        this.url = opts.url;
	        this.formatType = opts.formatType;
	        this.subjectTokenFieldName = opts.subjectTokenFieldName;
	        this.headers = opts.headers;
	        this.additionalGaxiosOptions = opts.additionalGaxiosOptions;
	    }
	    /**
	     * Sends a GET request to the URL provided in the constructor and resolves
	     * with the returned external subject token.
	     * @param context {@link ExternalAccountSupplierContext} from the calling
	     *   {@link IdentityPoolClient}, contains the requested audience and subject
	     *   token type for the external account identity. Not used.
	     */
	    async getSubjectToken(context) {
	        const opts = {
	            ...this.additionalGaxiosOptions,
	            url: this.url,
	            method: 'GET',
	            headers: this.headers,
	        };
	        authclient_1.AuthClient.setMethodName(opts, 'getSubjectToken');
	        let subjectToken;
	        if (this.formatType === 'text') {
	            const response = await context.transporter.request(opts);
	            subjectToken = response.data;
	        }
	        else if (this.formatType === 'json' && this.subjectTokenFieldName) {
	            const response = await context.transporter.request(opts);
	            subjectToken = response.data[this.subjectTokenFieldName];
	        }
	        if (!subjectToken) {
	            throw new Error('Unable to parse the subject_token from the credential_source URL');
	        }
	        return subjectToken;
	    }
	}
	urlsubjecttokensupplier.UrlSubjectTokenSupplier = UrlSubjectTokenSupplier;
	
	return urlsubjecttokensupplier;
}

var certificatesubjecttokensupplier = {};

var hasRequiredCertificatesubjecttokensupplier;

function requireCertificatesubjecttokensupplier () {
	if (hasRequiredCertificatesubjecttokensupplier) return certificatesubjecttokensupplier;
	hasRequiredCertificatesubjecttokensupplier = 1;
	(function (exports) {
		// Copyright 2025 Google LLC
		//
		// Licensed under the Apache License, Version 2.0 (the "License");
		// you may not use this file except in compliance with the License.
		// You may obtain a copy of the License at
		//
		//      http://www.apache.org/licenses/LICENSE-2.0
		//
		// Unless required by applicable law or agreed to in writing, software
		// distributed under the License is distributed on an "AS IS" BASIS,
		// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		// See the License for the specific language governing permissions and
		// limitations under the License.
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.CertificateSubjectTokenSupplier = exports.InvalidConfigurationError = exports.CertificateSourceUnavailableError = exports.CERTIFICATE_CONFIGURATION_ENV_VARIABLE = void 0;
		const util_1 = requireUtil();
		const fs = require$$0$2;
		const crypto_1 = require$$0$4;
		const https = require$$1;
		exports.CERTIFICATE_CONFIGURATION_ENV_VARIABLE = 'GOOGLE_API_CERTIFICATE_CONFIG';
		/**
		 * Thrown when the certificate source cannot be located or accessed.
		 */
		class CertificateSourceUnavailableError extends Error {
		    constructor(message) {
		        super(message);
		        this.name = 'CertificateSourceUnavailableError';
		    }
		}
		exports.CertificateSourceUnavailableError = CertificateSourceUnavailableError;
		/**
		 * Thrown for invalid configuration that is not related to file availability.
		 */
		class InvalidConfigurationError extends Error {
		    constructor(message) {
		        super(message);
		        this.name = 'InvalidConfigurationError';
		    }
		}
		exports.InvalidConfigurationError = InvalidConfigurationError;
		/**
		 * A subject token supplier that uses a client certificate for authentication.
		 * It provides the certificate chain as the subject token for identity federation.
		 */
		class CertificateSubjectTokenSupplier {
		    certificateConfigPath;
		    trustChainPath;
		    cert;
		    key;
		    /**
		     * Initializes a new instance of the CertificateSubjectTokenSupplier.
		     * @param opts The configuration options for the supplier.
		     */
		    constructor(opts) {
		        if (!opts.useDefaultCertificateConfig && !opts.certificateConfigLocation) {
		            throw new InvalidConfigurationError('Either `useDefaultCertificateConfig` must be true or a `certificateConfigLocation` must be provided.');
		        }
		        if (opts.useDefaultCertificateConfig && opts.certificateConfigLocation) {
		            throw new InvalidConfigurationError('Both `useDefaultCertificateConfig` and `certificateConfigLocation` cannot be provided.');
		        }
		        this.trustChainPath = opts.trustChainPath;
		        this.certificateConfigPath = opts.certificateConfigLocation ?? '';
		    }
		    /**
		     * Creates an HTTPS agent configured with the client certificate and private key for mTLS.
		     * @returns An mTLS-configured https.Agent.
		     */
		    async createMtlsHttpsAgent() {
		        if (!this.key || !this.cert) {
		            throw new InvalidConfigurationError('Cannot create mTLS Agent with missing certificate or key');
		        }
		        return new https.Agent({ key: this.key, cert: this.cert });
		    }
		    /**
		     * Constructs the subject token, which is the base64-encoded certificate chain.
		     * @returns A promise that resolves with the subject token.
		     */
		    async getSubjectToken() {
		        // The "subject token" in this context is the processed certificate chain.
		        this.certificateConfigPath = await this.#resolveCertificateConfigFilePath();
		        const { certPath, keyPath } = await this.#getCertAndKeyPaths();
		        ({ cert: this.cert, key: this.key } = await this.#getKeyAndCert(certPath, keyPath));
		        return await this.#processChainFromPaths(this.cert);
		    }
		    /**
		     * Resolves the absolute path to the certificate configuration file
		     * by checking the "certificate_config_location" provided in the ADC file,
		     * or the "GOOGLE_API_CERTIFICATE_CONFIG" environment variable
		     * or in the default gcloud path.
		     * @param overridePath An optional path to check first.
		     * @returns The resolved file path.
		     */
		    async #resolveCertificateConfigFilePath() {
		        // 1. Check for the override path from constructor options.
		        const overridePath = this.certificateConfigPath;
		        if (overridePath) {
		            if (await (0, util_1.isValidFile)(overridePath)) {
		                return overridePath;
		            }
		            throw new CertificateSourceUnavailableError(`Provided certificate config path is invalid: ${overridePath}`);
		        }
		        // 2. Check the standard environment variable.
		        const envPath = process.env[exports.CERTIFICATE_CONFIGURATION_ENV_VARIABLE];
		        if (envPath) {
		            if (await (0, util_1.isValidFile)(envPath)) {
		                return envPath;
		            }
		            throw new CertificateSourceUnavailableError(`Path from environment variable "${exports.CERTIFICATE_CONFIGURATION_ENV_VARIABLE}" is invalid: ${envPath}`);
		        }
		        // 3. Check the well-known gcloud config location.
		        const wellKnownPath = (0, util_1.getWellKnownCertificateConfigFileLocation)();
		        if (await (0, util_1.isValidFile)(wellKnownPath)) {
		            return wellKnownPath;
		        }
		        // 4. If none are found, throw an error.
		        throw new CertificateSourceUnavailableError('Could not find certificate configuration file. Searched override path, ' +
		            `the "${exports.CERTIFICATE_CONFIGURATION_ENV_VARIABLE}" env var, and the gcloud path (${wellKnownPath}).`);
		    }
		    /**
		     * Reads and parses the certificate config JSON file to extract the certificate and key paths.
		     * @returns An object containing the certificate and key paths.
		     */
		    async #getCertAndKeyPaths() {
		        const configPath = this.certificateConfigPath;
		        let fileContents;
		        try {
		            fileContents = await fs.promises.readFile(configPath, 'utf8');
		        }
		        catch (err) {
		            throw new CertificateSourceUnavailableError(`Failed to read certificate config file at: ${configPath}`);
		        }
		        try {
		            const config = JSON.parse(fileContents);
		            const certPath = config?.cert_configs?.workload?.cert_path;
		            const keyPath = config?.cert_configs?.workload?.key_path;
		            if (!certPath || !keyPath) {
		                throw new InvalidConfigurationError(`Certificate config file (${configPath}) is missing required "cert_path" or "key_path" in the workload config.`);
		            }
		            return { certPath, keyPath };
		        }
		        catch (e) {
		            if (e instanceof InvalidConfigurationError)
		                throw e;
		            throw new InvalidConfigurationError(`Failed to parse certificate config from ${configPath}: ${e.message}`);
		        }
		    }
		    /**
		     * Reads and parses the cert and key files get their content and check valid format.
		     * @returns An object containing the cert content and key content in buffer format.
		     */
		    async #getKeyAndCert(certPath, keyPath) {
		        let cert, key;
		        try {
		            cert = await fs.promises.readFile(certPath);
		            new crypto_1.X509Certificate(cert);
		        }
		        catch (err) {
		            const message = err instanceof Error ? err.message : String(err);
		            throw new CertificateSourceUnavailableError(`Failed to read certificate file at ${certPath}: ${message}`);
		        }
		        try {
		            key = await fs.promises.readFile(keyPath);
		            (0, crypto_1.createPrivateKey)(key);
		        }
		        catch (err) {
		            const message = err instanceof Error ? err.message : String(err);
		            throw new CertificateSourceUnavailableError(`Failed to read private key file at ${keyPath}: ${message}`);
		        }
		        return { cert, key };
		    }
		    /**
		     * Reads the leaf certificate and trust chain, combines them,
		     * and returns a JSON array of base64-encoded certificates.
		     * @returns A stringified JSON array of the certificate chain.
		     */
		    async #processChainFromPaths(leafCertBuffer) {
		        const leafCert = new crypto_1.X509Certificate(leafCertBuffer);
		        // If no trust chain is provided, just use the successfully parsed leaf certificate.
		        if (!this.trustChainPath) {
		            return JSON.stringify([leafCert.raw.toString('base64')]);
		        }
		        // Handle the trust chain logic.
		        try {
		            const chainPems = await fs.promises.readFile(this.trustChainPath, 'utf8');
		            const pemBlocks = chainPems.match(/-----BEGIN CERTIFICATE-----[^-]+-----END CERTIFICATE-----/g) ?? [];
		            const chainCerts = pemBlocks.map((pem, index) => {
		                try {
		                    return new crypto_1.X509Certificate(pem);
		                }
		                catch (err) {
		                    const message = err instanceof Error ? err.message : String(err);
		                    // Throw a more precise error if a single certificate in the chain is invalid.
		                    throw new InvalidConfigurationError(`Failed to parse certificate at index ${index} in trust chain file ${this.trustChainPath}: ${message}`);
		                }
		            });
		            const leafIndex = chainCerts.findIndex(chainCert => leafCert.raw.equals(chainCert.raw));
		            let finalChain;
		            if (leafIndex === -1) {
		                // Leaf not found, so prepend it to the chain.
		                finalChain = [leafCert, ...chainCerts];
		            }
		            else if (leafIndex === 0) {
		                // Leaf is already the first element, so the chain is correctly ordered.
		                finalChain = chainCerts;
		            }
		            else {
		                // Leaf is in the chain but not at the top, which is invalid.
		                throw new InvalidConfigurationError(`Leaf certificate exists in the trust chain but is not the first entry (found at index ${leafIndex}).`);
		            }
		            return JSON.stringify(finalChain.map(cert => cert.raw.toString('base64')));
		        }
		        catch (err) {
		            // Re-throw our specific configuration errors.
		            if (err instanceof InvalidConfigurationError)
		                throw err;
		            const message = err instanceof Error ? err.message : String(err);
		            throw new CertificateSourceUnavailableError(`Failed to process certificate chain from ${this.trustChainPath}: ${message}`);
		        }
		    }
		}
		exports.CertificateSubjectTokenSupplier = CertificateSubjectTokenSupplier;
		
	} (certificatesubjecttokensupplier));
	return certificatesubjecttokensupplier;
}

var hasRequiredIdentitypoolclient;

function requireIdentitypoolclient () {
	if (hasRequiredIdentitypoolclient) return identitypoolclient;
	hasRequiredIdentitypoolclient = 1;
	// Copyright 2021 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(identitypoolclient, "__esModule", { value: true });
	identitypoolclient.IdentityPoolClient = void 0;
	const baseexternalclient_1 = requireBaseexternalclient();
	const util_1 = requireUtil();
	const filesubjecttokensupplier_1 = requireFilesubjecttokensupplier();
	const urlsubjecttokensupplier_1 = requireUrlsubjecttokensupplier();
	const certificatesubjecttokensupplier_1 = requireCertificatesubjecttokensupplier();
	const stscredentials_1 = requireStscredentials();
	const gaxios_1 = requireSrc$5();
	/**
	 * Defines the Url-sourced and file-sourced external account clients mainly
	 * used for K8s and Azure workloads.
	 */
	class IdentityPoolClient extends baseexternalclient_1.BaseExternalAccountClient {
	    subjectTokenSupplier;
	    /**
	     * Instantiate an IdentityPoolClient instance using the provided JSON
	     * object loaded from an external account credentials file.
	     * An error is thrown if the credential is not a valid file-sourced or
	     * url-sourced credential or a workforce pool user project is provided
	     * with a non workforce audience.
	     * @param options The external account options object typically loaded
	     *   from the external account JSON credential file. The camelCased options
	     *   are aliases for the snake_cased options.
	     */
	    constructor(options) {
	        super(options);
	        const opts = (0, util_1.originalOrCamelOptions)(options);
	        const credentialSource = opts.get('credential_source');
	        const subjectTokenSupplier = opts.get('subject_token_supplier');
	        // Validate credential sourcing configuration.
	        if (!credentialSource && !subjectTokenSupplier) {
	            throw new Error('A credential source or subject token supplier must be specified.');
	        }
	        if (credentialSource && subjectTokenSupplier) {
	            throw new Error('Only one of credential source or subject token supplier can be specified.');
	        }
	        if (subjectTokenSupplier) {
	            this.subjectTokenSupplier = subjectTokenSupplier;
	            this.credentialSourceType = 'programmatic';
	        }
	        else {
	            const credentialSourceOpts = (0, util_1.originalOrCamelOptions)(credentialSource);
	            const formatOpts = (0, util_1.originalOrCamelOptions)(credentialSourceOpts.get('format'));
	            // Text is the default format type.
	            const formatType = formatOpts.get('type') || 'text';
	            const formatSubjectTokenFieldName = formatOpts.get('subject_token_field_name');
	            if (formatType !== 'json' && formatType !== 'text') {
	                throw new Error(`Invalid credential_source format "${formatType}"`);
	            }
	            if (formatType === 'json' && !formatSubjectTokenFieldName) {
	                throw new Error('Missing subject_token_field_name for JSON credential_source format');
	            }
	            const file = credentialSourceOpts.get('file');
	            const url = credentialSourceOpts.get('url');
	            const certificate = credentialSourceOpts.get('certificate');
	            const headers = credentialSourceOpts.get('headers');
	            if ((file && url) || (url && certificate) || (file && certificate)) {
	                throw new Error('No valid Identity Pool "credential_source" provided, must be either file, url, or certificate.');
	            }
	            else if (file) {
	                this.credentialSourceType = 'file';
	                this.subjectTokenSupplier = new filesubjecttokensupplier_1.FileSubjectTokenSupplier({
	                    filePath: file,
	                    formatType: formatType,
	                    subjectTokenFieldName: formatSubjectTokenFieldName,
	                });
	            }
	            else if (url) {
	                this.credentialSourceType = 'url';
	                this.subjectTokenSupplier = new urlsubjecttokensupplier_1.UrlSubjectTokenSupplier({
	                    url: url,
	                    formatType: formatType,
	                    subjectTokenFieldName: formatSubjectTokenFieldName,
	                    headers: headers,
	                    additionalGaxiosOptions: IdentityPoolClient.RETRY_CONFIG,
	                });
	            }
	            else if (certificate) {
	                this.credentialSourceType = 'certificate';
	                const certificateSubjecttokensupplier = new certificatesubjecttokensupplier_1.CertificateSubjectTokenSupplier({
	                    useDefaultCertificateConfig: certificate.use_default_certificate_config,
	                    certificateConfigLocation: certificate.certificate_config_location,
	                    trustChainPath: certificate.trust_chain_path,
	                });
	                this.subjectTokenSupplier = certificateSubjecttokensupplier;
	            }
	            else {
	                throw new Error('No valid Identity Pool "credential_source" provided, must be either file, url, or certificate.');
	            }
	        }
	    }
	    /**
	     * Triggered when a external subject token is needed to be exchanged for a GCP
	     * access token via GCP STS endpoint. Gets a subject token by calling
	     * the configured {@link SubjectTokenSupplier}
	     * @return A promise that resolves with the external subject token.
	     */
	    async retrieveSubjectToken() {
	        const subjectToken = await this.subjectTokenSupplier.getSubjectToken(this.supplierContext);
	        if (this.subjectTokenSupplier instanceof certificatesubjecttokensupplier_1.CertificateSubjectTokenSupplier) {
	            const mtlsAgent = await this.subjectTokenSupplier.createMtlsHttpsAgent();
	            this.stsCredential = new stscredentials_1.StsCredentials({
	                tokenExchangeEndpoint: this.getTokenUrl(),
	                clientAuthentication: this.clientAuth,
	                transporter: new gaxios_1.Gaxios({ agent: mtlsAgent }),
	            });
	            this.transporter = new gaxios_1.Gaxios({
	                ...(this.transporter.defaults || {}),
	                agent: mtlsAgent,
	            });
	        }
	        return subjectToken;
	    }
	}
	identitypoolclient.IdentityPoolClient = IdentityPoolClient;
	
	return identitypoolclient;
}

var awsclient = {};

var awsrequestsigner = {};

var hasRequiredAwsrequestsigner;

function requireAwsrequestsigner () {
	if (hasRequiredAwsrequestsigner) return awsrequestsigner;
	hasRequiredAwsrequestsigner = 1;
	// Copyright 2021 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(awsrequestsigner, "__esModule", { value: true });
	awsrequestsigner.AwsRequestSigner = void 0;
	const gaxios_1 = requireSrc$5();
	const crypto_1 = requireCrypto();
	/** AWS Signature Version 4 signing algorithm identifier.  */
	const AWS_ALGORITHM = 'AWS4-HMAC-SHA256';
	/**
	 * The termination string for the AWS credential scope value as defined in
	 * https://docs.aws.amazon.com/general/latest/gr/sigv4-create-string-to-sign.html
	 */
	const AWS_REQUEST_TYPE = 'aws4_request';
	/**
	 * Implements an AWS API request signer based on the AWS Signature Version 4
	 * signing process.
	 * https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html
	 */
	class AwsRequestSigner {
	    getCredentials;
	    region;
	    crypto;
	    /**
	     * Instantiates an AWS API request signer used to send authenticated signed
	     * requests to AWS APIs based on the AWS Signature Version 4 signing process.
	     * This also provides a mechanism to generate the signed request without
	     * sending it.
	     * @param getCredentials A mechanism to retrieve AWS security credentials
	     *   when needed.
	     * @param region The AWS region to use.
	     */
	    constructor(getCredentials, region) {
	        this.getCredentials = getCredentials;
	        this.region = region;
	        this.crypto = (0, crypto_1.createCrypto)();
	    }
	    /**
	     * Generates the signed request for the provided HTTP request for calling
	     * an AWS API. This follows the steps described at:
	     * https://docs.aws.amazon.com/general/latest/gr/sigv4_signing.html
	     * @param amzOptions The AWS request options that need to be signed.
	     * @return A promise that resolves with the GaxiosOptions containing the
	     *   signed HTTP request parameters.
	     */
	    async getRequestOptions(amzOptions) {
	        if (!amzOptions.url) {
	            throw new RangeError('"url" is required in "amzOptions"');
	        }
	        // Stringify JSON requests. This will be set in the request body of the
	        // generated signed request.
	        const requestPayloadData = typeof amzOptions.data === 'object'
	            ? JSON.stringify(amzOptions.data)
	            : amzOptions.data;
	        const url = amzOptions.url;
	        const method = amzOptions.method || 'GET';
	        const requestPayload = amzOptions.body || requestPayloadData;
	        const additionalAmzHeaders = amzOptions.headers;
	        const awsSecurityCredentials = await this.getCredentials();
	        const uri = new URL(url);
	        if (typeof requestPayload !== 'string' && requestPayload !== undefined) {
	            throw new TypeError(`'requestPayload' is expected to be a string if provided. Got: ${requestPayload}`);
	        }
	        const headerMap = await generateAuthenticationHeaderMap({
	            crypto: this.crypto,
	            host: uri.host,
	            canonicalUri: uri.pathname,
	            canonicalQuerystring: uri.search.slice(1),
	            method,
	            region: this.region,
	            securityCredentials: awsSecurityCredentials,
	            requestPayload,
	            additionalAmzHeaders,
	        });
	        // Append additional optional headers, eg. X-Amz-Target, Content-Type, etc.
	        const headers = gaxios_1.Gaxios.mergeHeaders(
	        // Add x-amz-date if available.
	        headerMap.amzDate ? { 'x-amz-date': headerMap.amzDate } : {}, {
	            authorization: headerMap.authorizationHeader,
	            host: uri.host,
	        }, additionalAmzHeaders || {});
	        if (awsSecurityCredentials.token) {
	            gaxios_1.Gaxios.mergeHeaders(headers, {
	                'x-amz-security-token': awsSecurityCredentials.token,
	            });
	        }
	        const awsSignedReq = {
	            url,
	            method: method,
	            headers,
	        };
	        if (requestPayload !== undefined) {
	            awsSignedReq.body = requestPayload;
	        }
	        return awsSignedReq;
	    }
	}
	awsrequestsigner.AwsRequestSigner = AwsRequestSigner;
	/**
	 * Creates the HMAC-SHA256 hash of the provided message using the
	 * provided key.
	 *
	 * @param crypto The crypto instance used to facilitate cryptographic
	 *   operations.
	 * @param key The HMAC-SHA256 key to use.
	 * @param msg The message to hash.
	 * @return The computed hash bytes.
	 */
	async function sign(crypto, key, msg) {
	    return await crypto.signWithHmacSha256(key, msg);
	}
	/**
	 * Calculates the signing key used to calculate the signature for
	 * AWS Signature Version 4 based on:
	 * https://docs.aws.amazon.com/general/latest/gr/sigv4-calculate-signature.html
	 *
	 * @param crypto The crypto instance used to facilitate cryptographic
	 *   operations.
	 * @param key The AWS secret access key.
	 * @param dateStamp The '%Y%m%d' date format.
	 * @param region The AWS region.
	 * @param serviceName The AWS service name, eg. sts.
	 * @return The signing key bytes.
	 */
	async function getSigningKey(crypto, key, dateStamp, region, serviceName) {
	    const kDate = await sign(crypto, `AWS4${key}`, dateStamp);
	    const kRegion = await sign(crypto, kDate, region);
	    const kService = await sign(crypto, kRegion, serviceName);
	    const kSigning = await sign(crypto, kService, 'aws4_request');
	    return kSigning;
	}
	/**
	 * Generates the authentication header map needed for generating the AWS
	 * Signature Version 4 signed request.
	 *
	 * @param option The options needed to compute the authentication header map.
	 * @return The AWS authentication header map which constitutes of the following
	 *   components: amz-date, authorization header and canonical query string.
	 */
	async function generateAuthenticationHeaderMap(options) {
	    const additionalAmzHeaders = gaxios_1.Gaxios.mergeHeaders(options.additionalAmzHeaders);
	    const requestPayload = options.requestPayload || '';
	    // iam.amazonaws.com host => iam service.
	    // sts.us-east-2.amazonaws.com => sts service.
	    const serviceName = options.host.split('.')[0];
	    const now = new Date();
	    // Format: '%Y%m%dT%H%M%SZ'.
	    const amzDate = now
	        .toISOString()
	        .replace(/[-:]/g, '')
	        .replace(/\.[0-9]+/, '');
	    // Format: '%Y%m%d'.
	    const dateStamp = now.toISOString().replace(/[-]/g, '').replace(/T.*/, '');
	    // Add AWS token if available.
	    if (options.securityCredentials.token) {
	        additionalAmzHeaders.set('x-amz-security-token', options.securityCredentials.token);
	    }
	    // Header keys need to be sorted alphabetically.
	    const amzHeaders = gaxios_1.Gaxios.mergeHeaders({
	        host: options.host,
	    }, 
	    // Previously the date was not fixed with x-amz- and could be provided manually.
	    // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-header-value-trim.req
	    additionalAmzHeaders.has('date') ? {} : { 'x-amz-date': amzDate }, additionalAmzHeaders);
	    let canonicalHeaders = '';
	    // TypeScript is missing `Headers#keys` at the time of writing
	    const signedHeadersList = [
	        ...amzHeaders.keys(),
	    ].sort();
	    signedHeadersList.forEach(key => {
	        canonicalHeaders += `${key}:${amzHeaders.get(key)}\n`;
	    });
	    const signedHeaders = signedHeadersList.join(';');
	    const payloadHash = await options.crypto.sha256DigestHex(requestPayload);
	    // https://docs.aws.amazon.com/general/latest/gr/sigv4-create-canonical-request.html
	    const canonicalRequest = `${options.method.toUpperCase()}\n` +
	        `${options.canonicalUri}\n` +
	        `${options.canonicalQuerystring}\n` +
	        `${canonicalHeaders}\n` +
	        `${signedHeaders}\n` +
	        `${payloadHash}`;
	    const credentialScope = `${dateStamp}/${options.region}/${serviceName}/${AWS_REQUEST_TYPE}`;
	    // https://docs.aws.amazon.com/general/latest/gr/sigv4-create-string-to-sign.html
	    const stringToSign = `${AWS_ALGORITHM}\n` +
	        `${amzDate}\n` +
	        `${credentialScope}\n` +
	        (await options.crypto.sha256DigestHex(canonicalRequest));
	    // https://docs.aws.amazon.com/general/latest/gr/sigv4-calculate-signature.html
	    const signingKey = await getSigningKey(options.crypto, options.securityCredentials.secretAccessKey, dateStamp, options.region, serviceName);
	    const signature = await sign(options.crypto, signingKey, stringToSign);
	    // https://docs.aws.amazon.com/general/latest/gr/sigv4-add-signature-to-request.html
	    const authorizationHeader = `${AWS_ALGORITHM} Credential=${options.securityCredentials.accessKeyId}/` +
	        `${credentialScope}, SignedHeaders=${signedHeaders}, ` +
	        `Signature=${(0, crypto_1.fromArrayBufferToHex)(signature)}`;
	    return {
	        // Do not return x-amz-date if date is available.
	        amzDate: additionalAmzHeaders.has('date') ? undefined : amzDate,
	        authorizationHeader,
	        canonicalQuerystring: options.canonicalQuerystring,
	    };
	}
	
	return awsrequestsigner;
}

var defaultawssecuritycredentialssupplier = {};

var hasRequiredDefaultawssecuritycredentialssupplier;

function requireDefaultawssecuritycredentialssupplier () {
	if (hasRequiredDefaultawssecuritycredentialssupplier) return defaultawssecuritycredentialssupplier;
	hasRequiredDefaultawssecuritycredentialssupplier = 1;
	// Copyright 2024 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(defaultawssecuritycredentialssupplier, "__esModule", { value: true });
	defaultawssecuritycredentialssupplier.DefaultAwsSecurityCredentialsSupplier = void 0;
	const authclient_1 = requireAuthclient();
	/**
	 * Internal AWS security credentials supplier implementation used by {@link AwsClient}
	 * when a credential source is provided instead of a user defined supplier.
	 * The logic is summarized as:
	 * 1. If imdsv2_session_token_url is provided in the credential source, then
	 *    fetch the aws session token and include it in the headers of the
	 *    metadata requests. This is a requirement for IDMSv2 but optional
	 *    for IDMSv1.
	 * 2. Retrieve AWS region from availability-zone.
	 * 3a. Check AWS credentials in environment variables. If not found, get
	 *     from security-credentials endpoint.
	 * 3b. Get AWS credentials from security-credentials endpoint. In order
	 *     to retrieve this, the AWS role needs to be determined by calling
	 *     security-credentials endpoint without any argument. Then the
	 *     credentials can be retrieved via: security-credentials/role_name
	 * 4. Generate the signed request to AWS STS GetCallerIdentity action.
	 * 5. Inject x-goog-cloud-target-resource into header and serialize the
	 *    signed request. This will be the subject-token to pass to GCP STS.
	 */
	class DefaultAwsSecurityCredentialsSupplier {
	    regionUrl;
	    securityCredentialsUrl;
	    imdsV2SessionTokenUrl;
	    additionalGaxiosOptions;
	    /**
	     * Instantiates a new DefaultAwsSecurityCredentialsSupplier using information
	     * from the credential_source stored in the ADC file.
	     * @param opts The default aws security credentials supplier options object to
	     *   build the supplier with.
	     */
	    constructor(opts) {
	        this.regionUrl = opts.regionUrl;
	        this.securityCredentialsUrl = opts.securityCredentialsUrl;
	        this.imdsV2SessionTokenUrl = opts.imdsV2SessionTokenUrl;
	        this.additionalGaxiosOptions = opts.additionalGaxiosOptions;
	    }
	    /**
	     * Returns the active AWS region. This first checks to see if the region
	     * is available as an environment variable. If it is not, then the supplier
	     * will call the region URL.
	     * @param context {@link ExternalAccountSupplierContext} from the calling
	     *   {@link AwsClient}, contains the requested audience and subject token type
	     *   for the external account identity.
	     * @return A promise that resolves with the AWS region string.
	     */
	    async getAwsRegion(context) {
	        // Priority order for region determination:
	        // AWS_REGION > AWS_DEFAULT_REGION > metadata server.
	        if (this.#regionFromEnv) {
	            return this.#regionFromEnv;
	        }
	        const metadataHeaders = new Headers();
	        if (!this.#regionFromEnv && this.imdsV2SessionTokenUrl) {
	            metadataHeaders.set('x-aws-ec2-metadata-token', await this.#getImdsV2SessionToken(context.transporter));
	        }
	        if (!this.regionUrl) {
	            throw new RangeError('Unable to determine AWS region due to missing ' +
	                '"options.credential_source.region_url"');
	        }
	        const opts = {
	            ...this.additionalGaxiosOptions,
	            url: this.regionUrl,
	            method: 'GET',
	            headers: metadataHeaders,
	        };
	        authclient_1.AuthClient.setMethodName(opts, 'getAwsRegion');
	        const response = await context.transporter.request(opts);
	        // Remove last character. For example, if us-east-2b is returned,
	        // the region would be us-east-2.
	        return response.data.substr(0, response.data.length - 1);
	    }
	    /**
	     * Returns AWS security credentials. This first checks to see if the credentials
	     * is available as environment variables. If it is not, then the supplier
	     * will call the security credentials URL.
	     * @param context {@link ExternalAccountSupplierContext} from the calling
	     *   {@link AwsClient}, contains the requested audience and subject token type
	     *   for the external account identity.
	     * @return A promise that resolves with the AWS security credentials.
	     */
	    async getAwsSecurityCredentials(context) {
	        // Check environment variables for permanent credentials first.
	        // https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html
	        if (this.#securityCredentialsFromEnv) {
	            return this.#securityCredentialsFromEnv;
	        }
	        const metadataHeaders = new Headers();
	        if (this.imdsV2SessionTokenUrl) {
	            metadataHeaders.set('x-aws-ec2-metadata-token', await this.#getImdsV2SessionToken(context.transporter));
	        }
	        // Since the role on a VM can change, we don't need to cache it.
	        const roleName = await this.#getAwsRoleName(metadataHeaders, context.transporter);
	        // Temporary credentials typically last for several hours.
	        // Expiration is returned in response.
	        // Consider future optimization of this logic to cache AWS tokens
	        // until their natural expiration.
	        const awsCreds = await this.#retrieveAwsSecurityCredentials(roleName, metadataHeaders, context.transporter);
	        return {
	            accessKeyId: awsCreds.AccessKeyId,
	            secretAccessKey: awsCreds.SecretAccessKey,
	            token: awsCreds.Token,
	        };
	    }
	    /**
	     * @param transporter The transporter to use for requests.
	     * @return A promise that resolves with the IMDSv2 Session Token.
	     */
	    async #getImdsV2SessionToken(transporter) {
	        const opts = {
	            ...this.additionalGaxiosOptions,
	            url: this.imdsV2SessionTokenUrl,
	            method: 'PUT',
	            headers: { 'x-aws-ec2-metadata-token-ttl-seconds': '300' },
	        };
	        authclient_1.AuthClient.setMethodName(opts, '#getImdsV2SessionToken');
	        const response = await transporter.request(opts);
	        return response.data;
	    }
	    /**
	     * @param headers The headers to be used in the metadata request.
	     * @param transporter The transporter to use for requests.
	     * @return A promise that resolves with the assigned role to the current
	     *   AWS VM. This is needed for calling the security-credentials endpoint.
	     */
	    async #getAwsRoleName(headers, transporter) {
	        if (!this.securityCredentialsUrl) {
	            throw new Error('Unable to determine AWS role name due to missing ' +
	                '"options.credential_source.url"');
	        }
	        const opts = {
	            ...this.additionalGaxiosOptions,
	            url: this.securityCredentialsUrl,
	            method: 'GET',
	            headers: headers,
	        };
	        authclient_1.AuthClient.setMethodName(opts, '#getAwsRoleName');
	        const response = await transporter.request(opts);
	        return response.data;
	    }
	    /**
	     * Retrieves the temporary AWS credentials by calling the security-credentials
	     * endpoint as specified in the `credential_source` object.
	     * @param roleName The role attached to the current VM.
	     * @param headers The headers to be used in the metadata request.
	     * @param transporter The transporter to use for requests.
	     * @return A promise that resolves with the temporary AWS credentials
	     *   needed for creating the GetCallerIdentity signed request.
	     */
	    async #retrieveAwsSecurityCredentials(roleName, headers, transporter) {
	        const opts = {
	            ...this.additionalGaxiosOptions,
	            url: `${this.securityCredentialsUrl}/${roleName}`,
	            headers: headers,
	        };
	        authclient_1.AuthClient.setMethodName(opts, '#retrieveAwsSecurityCredentials');
	        const response = await transporter.request(opts);
	        return response.data;
	    }
	    get #regionFromEnv() {
	        // The AWS region can be provided through AWS_REGION or AWS_DEFAULT_REGION.
	        // Only one is required.
	        return (process.env['AWS_REGION'] || process.env['AWS_DEFAULT_REGION'] || null);
	    }
	    get #securityCredentialsFromEnv() {
	        // Both AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are required.
	        if (process.env['AWS_ACCESS_KEY_ID'] &&
	            process.env['AWS_SECRET_ACCESS_KEY']) {
	            return {
	                accessKeyId: process.env['AWS_ACCESS_KEY_ID'],
	                secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY'],
	                token: process.env['AWS_SESSION_TOKEN'],
	            };
	        }
	        return null;
	    }
	}
	defaultawssecuritycredentialssupplier.DefaultAwsSecurityCredentialsSupplier = DefaultAwsSecurityCredentialsSupplier;
	
	return defaultawssecuritycredentialssupplier;
}

var hasRequiredAwsclient;

function requireAwsclient () {
	if (hasRequiredAwsclient) return awsclient;
	hasRequiredAwsclient = 1;
	// Copyright 2021 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(awsclient, "__esModule", { value: true });
	awsclient.AwsClient = void 0;
	const awsrequestsigner_1 = requireAwsrequestsigner();
	const baseexternalclient_1 = requireBaseexternalclient();
	const defaultawssecuritycredentialssupplier_1 = requireDefaultawssecuritycredentialssupplier();
	const util_1 = requireUtil();
	const gaxios_1 = requireSrc$5();
	/**
	 * AWS external account client. This is used for AWS workloads, where
	 * AWS STS GetCallerIdentity serialized signed requests are exchanged for
	 * GCP access token.
	 */
	class AwsClient extends baseexternalclient_1.BaseExternalAccountClient {
	    environmentId;
	    awsSecurityCredentialsSupplier;
	    regionalCredVerificationUrl;
	    awsRequestSigner;
	    region;
	    static #DEFAULT_AWS_REGIONAL_CREDENTIAL_VERIFICATION_URL = 'https://sts.{region}.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15';
	    /**
	     * @deprecated AWS client no validates the EC2 metadata address.
	     **/
	    static AWS_EC2_METADATA_IPV4_ADDRESS = '169.254.169.254';
	    /**
	     * @deprecated AWS client no validates the EC2 metadata address.
	     **/
	    static AWS_EC2_METADATA_IPV6_ADDRESS = 'fd00:ec2::254';
	    /**
	     * Instantiates an AwsClient instance using the provided JSON
	     * object loaded from an external account credentials file.
	     * An error is thrown if the credential is not a valid AWS credential.
	     * @param options The external account options object typically loaded
	     *   from the external account JSON credential file.
	     */
	    constructor(options) {
	        super(options);
	        const opts = (0, util_1.originalOrCamelOptions)(options);
	        const credentialSource = opts.get('credential_source');
	        const awsSecurityCredentialsSupplier = opts.get('aws_security_credentials_supplier');
	        // Validate credential sourcing configuration.
	        if (!credentialSource && !awsSecurityCredentialsSupplier) {
	            throw new Error('A credential source or AWS security credentials supplier must be specified.');
	        }
	        if (credentialSource && awsSecurityCredentialsSupplier) {
	            throw new Error('Only one of credential source or AWS security credentials supplier can be specified.');
	        }
	        if (awsSecurityCredentialsSupplier) {
	            this.awsSecurityCredentialsSupplier = awsSecurityCredentialsSupplier;
	            this.regionalCredVerificationUrl =
	                AwsClient.#DEFAULT_AWS_REGIONAL_CREDENTIAL_VERIFICATION_URL;
	            this.credentialSourceType = 'programmatic';
	        }
	        else {
	            const credentialSourceOpts = (0, util_1.originalOrCamelOptions)(credentialSource);
	            this.environmentId = credentialSourceOpts.get('environment_id');
	            // This is only required if the AWS region is not available in the
	            // AWS_REGION or AWS_DEFAULT_REGION environment variables.
	            const regionUrl = credentialSourceOpts.get('region_url');
	            // This is only required if AWS security credentials are not available in
	            // environment variables.
	            const securityCredentialsUrl = credentialSourceOpts.get('url');
	            const imdsV2SessionTokenUrl = credentialSourceOpts.get('imdsv2_session_token_url');
	            this.awsSecurityCredentialsSupplier =
	                new defaultawssecuritycredentialssupplier_1.DefaultAwsSecurityCredentialsSupplier({
	                    regionUrl: regionUrl,
	                    securityCredentialsUrl: securityCredentialsUrl,
	                    imdsV2SessionTokenUrl: imdsV2SessionTokenUrl,
	                });
	            this.regionalCredVerificationUrl = credentialSourceOpts.get('regional_cred_verification_url');
	            this.credentialSourceType = 'aws';
	            // Data validators.
	            this.validateEnvironmentId();
	        }
	        this.awsRequestSigner = null;
	        this.region = '';
	    }
	    validateEnvironmentId() {
	        const match = this.environmentId?.match(/^(aws)(\d+)$/);
	        if (!match || !this.regionalCredVerificationUrl) {
	            throw new Error('No valid AWS "credential_source" provided');
	        }
	        else if (parseInt(match[2], 10) !== 1) {
	            throw new Error(`aws version "${match[2]}" is not supported in the current build.`);
	        }
	    }
	    /**
	     * Triggered when an external subject token is needed to be exchanged for a
	     * GCP access token via GCP STS endpoint. This will call the
	     * {@link AwsSecurityCredentialsSupplier} to retrieve an AWS region and AWS
	     * Security Credentials, then use them to create a signed AWS STS request that
	     * can be exchanged for a GCP access token.
	     * @return A promise that resolves with the external subject token.
	     */
	    async retrieveSubjectToken() {
	        // Initialize AWS request signer if not already initialized.
	        if (!this.awsRequestSigner) {
	            this.region = await this.awsSecurityCredentialsSupplier.getAwsRegion(this.supplierContext);
	            this.awsRequestSigner = new awsrequestsigner_1.AwsRequestSigner(async () => {
	                return this.awsSecurityCredentialsSupplier.getAwsSecurityCredentials(this.supplierContext);
	            }, this.region);
	        }
	        // Generate signed request to AWS STS GetCallerIdentity API.
	        // Use the required regional endpoint. Otherwise, the request will fail.
	        const options = await this.awsRequestSigner.getRequestOptions({
	            ...AwsClient.RETRY_CONFIG,
	            url: this.regionalCredVerificationUrl.replace('{region}', this.region),
	            method: 'POST',
	        });
	        // The GCP STS endpoint expects the headers to be formatted as:
	        // [
	        //   {key: 'x-amz-date', value: '...'},
	        //   {key: 'authorization', value: '...'},
	        //   ...
	        // ]
	        // And then serialized as:
	        // encodeURIComponent(JSON.stringify({
	        //   url: '...',
	        //   method: 'POST',
	        //   headers: [{key: 'x-amz-date', value: '...'}, ...]
	        // }))
	        const reformattedHeader = [];
	        const extendedHeaders = gaxios_1.Gaxios.mergeHeaders({
	            // The full, canonical resource name of the workload identity pool
	            // provider, with or without the HTTPS prefix.
	            // Including this header as part of the signature is recommended to
	            // ensure data integrity.
	            'x-goog-cloud-target-resource': this.audience,
	        }, options.headers);
	        // Reformat header to GCP STS expected format.
	        extendedHeaders.forEach((value, key) => reformattedHeader.push({ key, value }));
	        // Serialize the reformatted signed request.
	        return encodeURIComponent(JSON.stringify({
	            url: options.url,
	            method: options.method,
	            headers: reformattedHeader,
	        }));
	    }
	}
	awsclient.AwsClient = AwsClient;
	
	return awsclient;
}

var pluggableAuthClient = {};

var executableResponse = {};

var hasRequiredExecutableResponse;

function requireExecutableResponse () {
	if (hasRequiredExecutableResponse) return executableResponse;
	hasRequiredExecutableResponse = 1;
	// Copyright 2022 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(executableResponse, "__esModule", { value: true });
	executableResponse.InvalidSubjectTokenError = executableResponse.InvalidMessageFieldError = executableResponse.InvalidCodeFieldError = executableResponse.InvalidTokenTypeFieldError = executableResponse.InvalidExpirationTimeFieldError = executableResponse.InvalidSuccessFieldError = executableResponse.InvalidVersionFieldError = executableResponse.ExecutableResponseError = executableResponse.ExecutableResponse = void 0;
	const SAML_SUBJECT_TOKEN_TYPE = 'urn:ietf:params:oauth:token-type:saml2';
	const OIDC_SUBJECT_TOKEN_TYPE1 = 'urn:ietf:params:oauth:token-type:id_token';
	const OIDC_SUBJECT_TOKEN_TYPE2 = 'urn:ietf:params:oauth:token-type:jwt';
	/**
	 * Defines the response of a 3rd party executable run by the pluggable auth client.
	 */
	class ExecutableResponse {
	    /**
	     * The version of the Executable response. Only version 1 is currently supported.
	     */
	    version;
	    /**
	     * Whether the executable ran successfully.
	     */
	    success;
	    /**
	     * The epoch time for expiration of the token in seconds.
	     */
	    expirationTime;
	    /**
	     * The type of subject token in the response, currently supported values are:
	     * urn:ietf:params:oauth:token-type:saml2
	     * urn:ietf:params:oauth:token-type:id_token
	     * urn:ietf:params:oauth:token-type:jwt
	     */
	    tokenType;
	    /**
	     * The error code from the executable.
	     */
	    errorCode;
	    /**
	     * The error message from the executable.
	     */
	    errorMessage;
	    /**
	     * The subject token from the executable, format depends on tokenType.
	     */
	    subjectToken;
	    /**
	     * Instantiates an ExecutableResponse instance using the provided JSON object
	     * from the output of the executable.
	     * @param responseJson Response from a 3rd party executable, loaded from a
	     * run of the executable or a cached output file.
	     */
	    constructor(responseJson) {
	        // Check that the required fields exist in the json response.
	        if (!responseJson.version) {
	            throw new InvalidVersionFieldError("Executable response must contain a 'version' field.");
	        }
	        if (responseJson.success === undefined) {
	            throw new InvalidSuccessFieldError("Executable response must contain a 'success' field.");
	        }
	        this.version = responseJson.version;
	        this.success = responseJson.success;
	        // Validate required fields for a successful response.
	        if (this.success) {
	            this.expirationTime = responseJson.expiration_time;
	            this.tokenType = responseJson.token_type;
	            // Validate token type field.
	            if (this.tokenType !== SAML_SUBJECT_TOKEN_TYPE &&
	                this.tokenType !== OIDC_SUBJECT_TOKEN_TYPE1 &&
	                this.tokenType !== OIDC_SUBJECT_TOKEN_TYPE2) {
	                throw new InvalidTokenTypeFieldError("Executable response must contain a 'token_type' field when successful " +
	                    `and it must be one of ${OIDC_SUBJECT_TOKEN_TYPE1}, ${OIDC_SUBJECT_TOKEN_TYPE2}, or ${SAML_SUBJECT_TOKEN_TYPE}.`);
	            }
	            // Validate subject token.
	            if (this.tokenType === SAML_SUBJECT_TOKEN_TYPE) {
	                if (!responseJson.saml_response) {
	                    throw new InvalidSubjectTokenError(`Executable response must contain a 'saml_response' field when token_type=${SAML_SUBJECT_TOKEN_TYPE}.`);
	                }
	                this.subjectToken = responseJson.saml_response;
	            }
	            else {
	                if (!responseJson.id_token) {
	                    throw new InvalidSubjectTokenError("Executable response must contain a 'id_token' field when " +
	                        `token_type=${OIDC_SUBJECT_TOKEN_TYPE1} or ${OIDC_SUBJECT_TOKEN_TYPE2}.`);
	                }
	                this.subjectToken = responseJson.id_token;
	            }
	        }
	        else {
	            // Both code and message must be provided for unsuccessful responses.
	            if (!responseJson.code) {
	                throw new InvalidCodeFieldError("Executable response must contain a 'code' field when unsuccessful.");
	            }
	            if (!responseJson.message) {
	                throw new InvalidMessageFieldError("Executable response must contain a 'message' field when unsuccessful.");
	            }
	            this.errorCode = responseJson.code;
	            this.errorMessage = responseJson.message;
	        }
	    }
	    /**
	     * @return A boolean representing if the response has a valid token. Returns
	     * true when the response was successful and the token is not expired.
	     */
	    isValid() {
	        return !this.isExpired() && this.success;
	    }
	    /**
	     * @return A boolean representing if the response is expired. Returns true if the
	     * provided timeout has passed.
	     */
	    isExpired() {
	        return (this.expirationTime !== undefined &&
	            this.expirationTime < Math.round(Date.now() / 1000));
	    }
	}
	executableResponse.ExecutableResponse = ExecutableResponse;
	/**
	 * An error thrown by the ExecutableResponse class.
	 */
	class ExecutableResponseError extends Error {
	    constructor(message) {
	        super(message);
	        Object.setPrototypeOf(this, new.target.prototype);
	    }
	}
	executableResponse.ExecutableResponseError = ExecutableResponseError;
	/**
	 * An error thrown when the 'version' field in an executable response is missing or invalid.
	 */
	class InvalidVersionFieldError extends ExecutableResponseError {
	}
	executableResponse.InvalidVersionFieldError = InvalidVersionFieldError;
	/**
	 * An error thrown when the 'success' field in an executable response is missing or invalid.
	 */
	class InvalidSuccessFieldError extends ExecutableResponseError {
	}
	executableResponse.InvalidSuccessFieldError = InvalidSuccessFieldError;
	/**
	 * An error thrown when the 'expiration_time' field in an executable response is missing or invalid.
	 */
	class InvalidExpirationTimeFieldError extends ExecutableResponseError {
	}
	executableResponse.InvalidExpirationTimeFieldError = InvalidExpirationTimeFieldError;
	/**
	 * An error thrown when the 'token_type' field in an executable response is missing or invalid.
	 */
	class InvalidTokenTypeFieldError extends ExecutableResponseError {
	}
	executableResponse.InvalidTokenTypeFieldError = InvalidTokenTypeFieldError;
	/**
	 * An error thrown when the 'code' field in an executable response is missing or invalid.
	 */
	class InvalidCodeFieldError extends ExecutableResponseError {
	}
	executableResponse.InvalidCodeFieldError = InvalidCodeFieldError;
	/**
	 * An error thrown when the 'message' field in an executable response is missing or invalid.
	 */
	class InvalidMessageFieldError extends ExecutableResponseError {
	}
	executableResponse.InvalidMessageFieldError = InvalidMessageFieldError;
	/**
	 * An error thrown when the subject token in an executable response is missing or invalid.
	 */
	class InvalidSubjectTokenError extends ExecutableResponseError {
	}
	executableResponse.InvalidSubjectTokenError = InvalidSubjectTokenError;
	
	return executableResponse;
}

var pluggableAuthHandler = {};

var hasRequiredPluggableAuthHandler;

function requirePluggableAuthHandler () {
	if (hasRequiredPluggableAuthHandler) return pluggableAuthHandler;
	hasRequiredPluggableAuthHandler = 1;
	// Copyright 2022 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(pluggableAuthHandler, "__esModule", { value: true });
	pluggableAuthHandler.PluggableAuthHandler = pluggableAuthHandler.ExecutableError = void 0;
	const executable_response_1 = requireExecutableResponse();
	const childProcess = require$$1$4;
	const fs = require$$0$2;
	/**
	 * Error thrown from the executable run by PluggableAuthClient.
	 */
	class ExecutableError extends Error {
	    /**
	     * The exit code returned by the executable.
	     */
	    code;
	    constructor(message, code) {
	        super(`The executable failed with exit code: ${code} and error message: ${message}.`);
	        this.code = code;
	        Object.setPrototypeOf(this, new.target.prototype);
	    }
	}
	pluggableAuthHandler.ExecutableError = ExecutableError;
	/**
	 * A handler used to retrieve 3rd party token responses from user defined
	 * executables and cached file output for the PluggableAuthClient class.
	 */
	class PluggableAuthHandler {
	    commandComponents;
	    timeoutMillis;
	    outputFile;
	    /**
	     * Instantiates a PluggableAuthHandler instance using the provided
	     * PluggableAuthHandlerOptions object.
	     */
	    constructor(options) {
	        if (!options.command) {
	            throw new Error('No command provided.');
	        }
	        this.commandComponents = PluggableAuthHandler.parseCommand(options.command);
	        this.timeoutMillis = options.timeoutMillis;
	        if (!this.timeoutMillis) {
	            throw new Error('No timeoutMillis provided.');
	        }
	        this.outputFile = options.outputFile;
	    }
	    /**
	     * Calls user provided executable to get a 3rd party subject token and
	     * returns the response.
	     * @param envMap a Map of additional Environment Variables required for
	     *   the executable.
	     * @return A promise that resolves with the executable response.
	     */
	    retrieveResponseFromExecutable(envMap) {
	        return new Promise((resolve, reject) => {
	            // Spawn process to run executable using added environment variables.
	            const child = childProcess.spawn(this.commandComponents[0], this.commandComponents.slice(1), {
	                env: { ...process.env, ...Object.fromEntries(envMap) },
	            });
	            let output = '';
	            // Append stdout to output as executable runs.
	            child.stdout.on('data', (data) => {
	                output += data;
	            });
	            // Append stderr as executable runs.
	            child.stderr.on('data', (err) => {
	                output += err;
	            });
	            // Set up a timeout to end the child process and throw an error.
	            const timeout = setTimeout(() => {
	                // Kill child process and remove listeners so 'close' event doesn't get
	                // read after child process is killed.
	                child.removeAllListeners();
	                child.kill();
	                return reject(new Error('The executable failed to finish within the timeout specified.'));
	            }, this.timeoutMillis);
	            child.on('close', (code) => {
	                // Cancel timeout if executable closes before timeout is reached.
	                clearTimeout(timeout);
	                if (code === 0) {
	                    // If the executable completed successfully, try to return the parsed response.
	                    try {
	                        const responseJson = JSON.parse(output);
	                        const response = new executable_response_1.ExecutableResponse(responseJson);
	                        return resolve(response);
	                    }
	                    catch (error) {
	                        if (error instanceof executable_response_1.ExecutableResponseError) {
	                            return reject(error);
	                        }
	                        return reject(new executable_response_1.ExecutableResponseError(`The executable returned an invalid response: ${output}`));
	                    }
	                }
	                else {
	                    return reject(new ExecutableError(output, code.toString()));
	                }
	            });
	        });
	    }
	    /**
	     * Checks user provided output file for response from previous run of
	     * executable and return the response if it exists, is formatted correctly, and is not expired.
	     */
	    async retrieveCachedResponse() {
	        if (!this.outputFile || this.outputFile.length === 0) {
	            return undefined;
	        }
	        let filePath;
	        try {
	            filePath = await fs.promises.realpath(this.outputFile);
	        }
	        catch {
	            // If file path cannot be resolved, return undefined.
	            return undefined;
	        }
	        if (!(await fs.promises.lstat(filePath)).isFile()) {
	            // If path does not lead to file, return undefined.
	            return undefined;
	        }
	        const responseString = await fs.promises.readFile(filePath, {
	            encoding: 'utf8',
	        });
	        if (responseString === '') {
	            return undefined;
	        }
	        try {
	            const responseJson = JSON.parse(responseString);
	            const response = new executable_response_1.ExecutableResponse(responseJson);
	            // Check if response is successful and unexpired.
	            if (response.isValid()) {
	                return new executable_response_1.ExecutableResponse(responseJson);
	            }
	            return undefined;
	        }
	        catch (error) {
	            if (error instanceof executable_response_1.ExecutableResponseError) {
	                throw error;
	            }
	            throw new executable_response_1.ExecutableResponseError(`The output file contained an invalid response: ${responseString}`);
	        }
	    }
	    /**
	     * Parses given command string into component array, splitting on spaces unless
	     * spaces are between quotation marks.
	     */
	    static parseCommand(command) {
	        // Split the command into components by splitting on spaces,
	        // unless spaces are contained in quotation marks.
	        const components = command.match(/(?:[^\s"]+|"[^"]*")+/g);
	        if (!components) {
	            throw new Error(`Provided command: "${command}" could not be parsed.`);
	        }
	        // Remove quotation marks from the beginning and end of each component if they are present.
	        for (let i = 0; i < components.length; i++) {
	            if (components[i][0] === '"' && components[i].slice(-1) === '"') {
	                components[i] = components[i].slice(1, -1);
	            }
	        }
	        return components;
	    }
	}
	pluggableAuthHandler.PluggableAuthHandler = PluggableAuthHandler;
	
	return pluggableAuthHandler;
}

var hasRequiredPluggableAuthClient;

function requirePluggableAuthClient () {
	if (hasRequiredPluggableAuthClient) return pluggableAuthClient;
	hasRequiredPluggableAuthClient = 1;
	(function (exports) {
		// Copyright 2022 Google LLC
		//
		// Licensed under the Apache License, Version 2.0 (the "License");
		// you may not use this file except in compliance with the License.
		// You may obtain a copy of the License at
		//
		//      http://www.apache.org/licenses/LICENSE-2.0
		//
		// Unless required by applicable law or agreed to in writing, software
		// distributed under the License is distributed on an "AS IS" BASIS,
		// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		// See the License for the specific language governing permissions and
		// limitations under the License.
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.PluggableAuthClient = exports.ExecutableError = void 0;
		const baseexternalclient_1 = requireBaseexternalclient();
		const executable_response_1 = requireExecutableResponse();
		const pluggable_auth_handler_1 = requirePluggableAuthHandler();
		var pluggable_auth_handler_2 = requirePluggableAuthHandler();
		Object.defineProperty(exports, "ExecutableError", { enumerable: true, get: function () { return pluggable_auth_handler_2.ExecutableError; } });
		/**
		 * The default executable timeout when none is provided, in milliseconds.
		 */
		const DEFAULT_EXECUTABLE_TIMEOUT_MILLIS = 30 * 1000;
		/**
		 * The minimum allowed executable timeout in milliseconds.
		 */
		const MINIMUM_EXECUTABLE_TIMEOUT_MILLIS = 5 * 1000;
		/**
		 * The maximum allowed executable timeout in milliseconds.
		 */
		const MAXIMUM_EXECUTABLE_TIMEOUT_MILLIS = 120 * 1000;
		/**
		 * The environment variable to check to see if executable can be run.
		 * Value must be set to '1' for the executable to run.
		 */
		const GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES = 'GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES';
		/**
		 * The maximum currently supported executable version.
		 */
		const MAXIMUM_EXECUTABLE_VERSION = 1;
		/**
		 * PluggableAuthClient enables the exchange of workload identity pool external credentials for
		 * Google access tokens by retrieving 3rd party tokens through a user supplied executable. These
		 * scripts/executables are completely independent of the Google Cloud Auth libraries. These
		 * credentials plug into ADC and will call the specified executable to retrieve the 3rd party token
		 * to be exchanged for a Google access token.
		 *
		 * <p>To use these credentials, the GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES environment variable
		 * must be set to '1'. This is for security reasons.
		 *
		 * <p>Both OIDC and SAML are supported. The executable must adhere to a specific response format
		 * defined below.
		 *
		 * <p>The executable must print out the 3rd party token to STDOUT in JSON format. When an
		 * output_file is specified in the credential configuration, the executable must also handle writing the
		 * JSON response to this file.
		 *
		 * <pre>
		 * OIDC response sample:
		 * {
		 *   "version": 1,
		 *   "success": true,
		 *   "token_type": "urn:ietf:params:oauth:token-type:id_token",
		 *   "id_token": "HEADER.PAYLOAD.SIGNATURE",
		 *   "expiration_time": 1620433341
		 * }
		 *
		 * SAML2 response sample:
		 * {
		 *   "version": 1,
		 *   "success": true,
		 *   "token_type": "urn:ietf:params:oauth:token-type:saml2",
		 *   "saml_response": "...",
		 *   "expiration_time": 1620433341
		 * }
		 *
		 * Error response sample:
		 * {
		 *   "version": 1,
		 *   "success": false,
		 *   "code": "401",
		 *   "message": "Error message."
		 * }
		 * </pre>
		 *
		 * <p>The "expiration_time" field in the JSON response is only required for successful
		 * responses when an output file was specified in the credential configuration
		 *
		 * <p>The auth libraries will populate certain environment variables that will be accessible by the
		 * executable, such as: GOOGLE_EXTERNAL_ACCOUNT_AUDIENCE, GOOGLE_EXTERNAL_ACCOUNT_TOKEN_TYPE,
		 * GOOGLE_EXTERNAL_ACCOUNT_INTERACTIVE, GOOGLE_EXTERNAL_ACCOUNT_IMPERSONATED_EMAIL, and
		 * GOOGLE_EXTERNAL_ACCOUNT_OUTPUT_FILE.
		 *
		 * <p>Please see this repositories README for a complete executable request/response specification.
		 */
		class PluggableAuthClient extends baseexternalclient_1.BaseExternalAccountClient {
		    /**
		     * The command used to retrieve the third party token.
		     */
		    command;
		    /**
		     * The timeout in milliseconds for running executable,
		     * set to default if none provided.
		     */
		    timeoutMillis;
		    /**
		     * The path to file to check for cached executable response.
		     */
		    outputFile;
		    /**
		     * Executable and output file handler.
		     */
		    handler;
		    /**
		     * Instantiates a PluggableAuthClient instance using the provided JSON
		     * object loaded from an external account credentials file.
		     * An error is thrown if the credential is not a valid pluggable auth credential.
		     * @param options The external account options object typically loaded from
		     *   the external account JSON credential file.
		     */
		    constructor(options) {
		        super(options);
		        if (!options.credential_source.executable) {
		            throw new Error('No valid Pluggable Auth "credential_source" provided.');
		        }
		        this.command = options.credential_source.executable.command;
		        if (!this.command) {
		            throw new Error('No valid Pluggable Auth "credential_source" provided.');
		        }
		        // Check if the provided timeout exists and if it is valid.
		        if (options.credential_source.executable.timeout_millis === undefined) {
		            this.timeoutMillis = DEFAULT_EXECUTABLE_TIMEOUT_MILLIS;
		        }
		        else {
		            this.timeoutMillis = options.credential_source.executable.timeout_millis;
		            if (this.timeoutMillis < MINIMUM_EXECUTABLE_TIMEOUT_MILLIS ||
		                this.timeoutMillis > MAXIMUM_EXECUTABLE_TIMEOUT_MILLIS) {
		                throw new Error(`Timeout must be between ${MINIMUM_EXECUTABLE_TIMEOUT_MILLIS} and ` +
		                    `${MAXIMUM_EXECUTABLE_TIMEOUT_MILLIS} milliseconds.`);
		            }
		        }
		        this.outputFile = options.credential_source.executable.output_file;
		        this.handler = new pluggable_auth_handler_1.PluggableAuthHandler({
		            command: this.command,
		            timeoutMillis: this.timeoutMillis,
		            outputFile: this.outputFile,
		        });
		        this.credentialSourceType = 'executable';
		    }
		    /**
		     * Triggered when an external subject token is needed to be exchanged for a
		     * GCP access token via GCP STS endpoint.
		     * This uses the `options.credential_source` object to figure out how
		     * to retrieve the token using the current environment. In this case,
		     * this calls a user provided executable which returns the subject token.
		     * The logic is summarized as:
		     * 1. Validated that the executable is allowed to run. The
		     *    GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES environment must be set to
		     *    1 for security reasons.
		     * 2. If an output file is specified by the user, check the file location
		     *    for a response. If the file exists and contains a valid response,
		     *    return the subject token from the file.
		     * 3. Call the provided executable and return response.
		     * @return A promise that resolves with the external subject token.
		     */
		    async retrieveSubjectToken() {
		        // Check if the executable is allowed to run.
		        if (process.env[GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES] !== '1') {
		            throw new Error('Pluggable Auth executables need to be explicitly allowed to run by ' +
		                'setting the GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES environment ' +
		                'Variable to 1.');
		        }
		        let executableResponse = undefined;
		        // Try to get cached executable response from output file.
		        if (this.outputFile) {
		            executableResponse = await this.handler.retrieveCachedResponse();
		        }
		        // If no response from output file, call the executable.
		        if (!executableResponse) {
		            // Set up environment map with required values for the executable.
		            const envMap = new Map();
		            envMap.set('GOOGLE_EXTERNAL_ACCOUNT_AUDIENCE', this.audience);
		            envMap.set('GOOGLE_EXTERNAL_ACCOUNT_TOKEN_TYPE', this.subjectTokenType);
		            // Always set to 0 because interactive mode is not supported.
		            envMap.set('GOOGLE_EXTERNAL_ACCOUNT_INTERACTIVE', '0');
		            if (this.outputFile) {
		                envMap.set('GOOGLE_EXTERNAL_ACCOUNT_OUTPUT_FILE', this.outputFile);
		            }
		            const serviceAccountEmail = this.getServiceAccountEmail();
		            if (serviceAccountEmail) {
		                envMap.set('GOOGLE_EXTERNAL_ACCOUNT_IMPERSONATED_EMAIL', serviceAccountEmail);
		            }
		            executableResponse =
		                await this.handler.retrieveResponseFromExecutable(envMap);
		        }
		        if (executableResponse.version > MAXIMUM_EXECUTABLE_VERSION) {
		            throw new Error(`Version of executable is not currently supported, maximum supported version is ${MAXIMUM_EXECUTABLE_VERSION}.`);
		        }
		        // Check that response was successful.
		        if (!executableResponse.success) {
		            throw new pluggable_auth_handler_1.ExecutableError(executableResponse.errorMessage, executableResponse.errorCode);
		        }
		        // Check that response contains expiration time if output file was specified.
		        if (this.outputFile) {
		            if (!executableResponse.expirationTime) {
		                throw new executable_response_1.InvalidExpirationTimeFieldError('The executable response must contain the `expiration_time` field for successful responses when an output_file has been specified in the configuration.');
		            }
		        }
		        // Check that response is not expired.
		        if (executableResponse.isExpired()) {
		            throw new Error('Executable response is expired.');
		        }
		        // Return subject token from response.
		        return executableResponse.subjectToken;
		    }
		}
		exports.PluggableAuthClient = PluggableAuthClient;
		
	} (pluggableAuthClient));
	return pluggableAuthClient;
}

var hasRequiredExternalclient;

function requireExternalclient () {
	if (hasRequiredExternalclient) return externalclient;
	hasRequiredExternalclient = 1;
	// Copyright 2021 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(externalclient, "__esModule", { value: true });
	externalclient.ExternalAccountClient = void 0;
	const baseexternalclient_1 = requireBaseexternalclient();
	const identitypoolclient_1 = requireIdentitypoolclient();
	const awsclient_1 = requireAwsclient();
	const pluggable_auth_client_1 = requirePluggableAuthClient();
	/**
	 * Dummy class with no constructor. Developers are expected to use fromJSON.
	 */
	class ExternalAccountClient {
	    constructor() {
	        throw new Error('ExternalAccountClients should be initialized via: ' +
	            'ExternalAccountClient.fromJSON(), ' +
	            'directly via explicit constructors, eg. ' +
	            'new AwsClient(options), new IdentityPoolClient(options), new' +
	            'PluggableAuthClientOptions, or via ' +
	            'new GoogleAuth(options).getClient()');
	    }
	    /**
	     * This static method will instantiate the
	     * corresponding type of external account credential depending on the
	     * underlying credential source.
	     * @param options The external account options object typically loaded
	     *   from the external account JSON credential file.
	     * @return A BaseExternalAccountClient instance or null if the options
	     *   provided do not correspond to an external account credential.
	     */
	    static fromJSON(options) {
	        if (options && options.type === baseexternalclient_1.EXTERNAL_ACCOUNT_TYPE) {
	            if (options.credential_source?.environment_id) {
	                return new awsclient_1.AwsClient(options);
	            }
	            else if (options.credential_source?.executable) {
	                return new pluggable_auth_client_1.PluggableAuthClient(options);
	            }
	            else {
	                return new identitypoolclient_1.IdentityPoolClient(options);
	            }
	        }
	        else {
	            return null;
	        }
	    }
	}
	externalclient.ExternalAccountClient = ExternalAccountClient;
	
	return externalclient;
}

var externalAccountAuthorizedUserClient = {};

var hasRequiredExternalAccountAuthorizedUserClient;

function requireExternalAccountAuthorizedUserClient () {
	if (hasRequiredExternalAccountAuthorizedUserClient) return externalAccountAuthorizedUserClient;
	hasRequiredExternalAccountAuthorizedUserClient = 1;
	// Copyright 2023 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(externalAccountAuthorizedUserClient, "__esModule", { value: true });
	externalAccountAuthorizedUserClient.ExternalAccountAuthorizedUserClient = externalAccountAuthorizedUserClient.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = void 0;
	const authclient_1 = requireAuthclient();
	const oauth2common_1 = requireOauth2common();
	const gaxios_1 = requireSrc$5();
	const stream = require$$3;
	const baseexternalclient_1 = requireBaseexternalclient();
	/**
	 * The credentials JSON file type for external account authorized user clients.
	 */
	externalAccountAuthorizedUserClient.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = 'external_account_authorized_user';
	const DEFAULT_TOKEN_URL = 'https://sts.{universeDomain}/v1/oauthtoken';
	/**
	 * Handler for token refresh requests sent to the token_url endpoint for external
	 * authorized user credentials.
	 */
	class ExternalAccountAuthorizedUserHandler extends oauth2common_1.OAuthClientAuthHandler {
	    #tokenRefreshEndpoint;
	    /**
	     * Initializes an ExternalAccountAuthorizedUserHandler instance.
	     * @param url The URL of the token refresh endpoint.
	     * @param transporter The transporter to use for the refresh request.
	     * @param clientAuthentication The client authentication credentials to use
	     *   for the refresh request.
	     */
	    constructor(options) {
	        super(options);
	        this.#tokenRefreshEndpoint = options.tokenRefreshEndpoint;
	    }
	    /**
	     * Requests a new access token from the token_url endpoint using the provided
	     *   refresh token.
	     * @param refreshToken The refresh token to use to generate a new access token.
	     * @param additionalHeaders Optional additional headers to pass along the
	     *   request.
	     * @return A promise that resolves with the token refresh response containing
	     *   the requested access token and its expiration time.
	     */
	    async refreshToken(refreshToken, headers) {
	        const opts = {
	            ...ExternalAccountAuthorizedUserHandler.RETRY_CONFIG,
	            url: this.#tokenRefreshEndpoint,
	            method: 'POST',
	            headers,
	            data: new URLSearchParams({
	                grant_type: 'refresh_token',
	                refresh_token: refreshToken,
	            }),
	        };
	        authclient_1.AuthClient.setMethodName(opts, 'refreshToken');
	        // Apply OAuth client authentication.
	        this.applyClientAuthenticationOptions(opts);
	        try {
	            const response = await this.transporter.request(opts);
	            // Successful response.
	            const tokenRefreshResponse = response.data;
	            tokenRefreshResponse.res = response;
	            return tokenRefreshResponse;
	        }
	        catch (error) {
	            // Translate error to OAuthError.
	            if (error instanceof gaxios_1.GaxiosError && error.response) {
	                throw (0, oauth2common_1.getErrorFromOAuthErrorResponse)(error.response.data, 
	                // Preserve other fields from the original error.
	                error);
	            }
	            // Request could fail before the server responds.
	            throw error;
	        }
	    }
	}
	/**
	 * External Account Authorized User Client. This is used for OAuth2 credentials
	 * sourced using external identities through Workforce Identity Federation.
	 * Obtaining the initial access and refresh token can be done through the
	 * Google Cloud CLI.
	 */
	class ExternalAccountAuthorizedUserClient extends authclient_1.AuthClient {
	    cachedAccessToken;
	    externalAccountAuthorizedUserHandler;
	    refreshToken;
	    /**
	     * Instantiates an ExternalAccountAuthorizedUserClient instances using the
	     * provided JSON object loaded from a credentials files.
	     * An error is throws if the credential is not valid.
	     * @param options The external account authorized user option object typically
	     *   from the external accoutn authorized user JSON credential file.
	     */
	    constructor(options) {
	        super(options);
	        if (options.universe_domain) {
	            this.universeDomain = options.universe_domain;
	        }
	        this.refreshToken = options.refresh_token;
	        const clientAuthentication = {
	            confidentialClientType: 'basic',
	            clientId: options.client_id,
	            clientSecret: options.client_secret,
	        };
	        this.externalAccountAuthorizedUserHandler =
	            new ExternalAccountAuthorizedUserHandler({
	                tokenRefreshEndpoint: options.token_url ??
	                    DEFAULT_TOKEN_URL.replace('{universeDomain}', this.universeDomain),
	                transporter: this.transporter,
	                clientAuthentication,
	            });
	        this.cachedAccessToken = null;
	        this.quotaProjectId = options.quota_project_id;
	        // As threshold could be zero,
	        // eagerRefreshThresholdMillis || EXPIRATION_TIME_OFFSET will override the
	        // zero value.
	        if (typeof options?.eagerRefreshThresholdMillis !== 'number') {
	            this.eagerRefreshThresholdMillis = baseexternalclient_1.EXPIRATION_TIME_OFFSET;
	        }
	        else {
	            this.eagerRefreshThresholdMillis = options
	                .eagerRefreshThresholdMillis;
	        }
	        this.forceRefreshOnFailure = !!options?.forceRefreshOnFailure;
	    }
	    async getAccessToken() {
	        // If cached access token is unavailable or expired, force refresh.
	        if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) {
	            await this.refreshAccessTokenAsync();
	        }
	        // Return GCP access token in GetAccessTokenResponse format.
	        return {
	            token: this.cachedAccessToken.access_token,
	            res: this.cachedAccessToken.res,
	        };
	    }
	    async getRequestHeaders() {
	        const accessTokenResponse = await this.getAccessToken();
	        const headers = new Headers({
	            authorization: `Bearer ${accessTokenResponse.token}`,
	        });
	        return this.addSharedMetadataHeaders(headers);
	    }
	    request(opts, callback) {
	        if (callback) {
	            this.requestAsync(opts).then(r => callback(null, r), e => {
	                return callback(e, e.response);
	            });
	        }
	        else {
	            return this.requestAsync(opts);
	        }
	    }
	    /**
	     * Authenticates the provided HTTP request, processes it and resolves with the
	     * returned response.
	     * @param opts The HTTP request options.
	     * @param reAuthRetried Whether the current attempt is a retry after a failed attempt due to an auth failure.
	     * @return A promise that resolves with the successful response.
	     */
	    async requestAsync(opts, reAuthRetried = false) {
	        let response;
	        try {
	            const requestHeaders = await this.getRequestHeaders();
	            opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers);
	            this.addUserProjectAndAuthHeaders(opts.headers, requestHeaders);
	            response = await this.transporter.request(opts);
	        }
	        catch (e) {
	            const res = e.response;
	            if (res) {
	                const statusCode = res.status;
	                // Retry the request for metadata if the following criteria are true:
	                // - We haven't already retried.  It only makes sense to retry once.
	                // - The response was a 401 or a 403
	                // - The request didn't send a readableStream
	                // - forceRefreshOnFailure is true
	                const isReadableStream = res.config.data instanceof stream.Readable;
	                const isAuthErr = statusCode === 401 || statusCode === 403;
	                if (!reAuthRetried &&
	                    isAuthErr &&
	                    !isReadableStream &&
	                    this.forceRefreshOnFailure) {
	                    await this.refreshAccessTokenAsync();
	                    return await this.requestAsync(opts, true);
	                }
	            }
	            throw e;
	        }
	        return response;
	    }
	    /**
	     * Forces token refresh, even if unexpired tokens are currently cached.
	     * @return A promise that resolves with the refreshed credential.
	     */
	    async refreshAccessTokenAsync() {
	        // Refresh the access token using the refresh token.
	        const refreshResponse = await this.externalAccountAuthorizedUserHandler.refreshToken(this.refreshToken);
	        this.cachedAccessToken = {
	            access_token: refreshResponse.access_token,
	            expiry_date: new Date().getTime() + refreshResponse.expires_in * 1000,
	            res: refreshResponse.res,
	        };
	        if (refreshResponse.refresh_token !== undefined) {
	            this.refreshToken = refreshResponse.refresh_token;
	        }
	        return this.cachedAccessToken;
	    }
	    /**
	     * Returns whether the provided credentials are expired or not.
	     * If there is no expiry time, assumes the token is not expired or expiring.
	     * @param credentials The credentials to check for expiration.
	     * @return Whether the credentials are expired or not.
	     */
	    isExpired(credentials) {
	        const now = new Date().getTime();
	        return credentials.expiry_date
	            ? now >= credentials.expiry_date - this.eagerRefreshThresholdMillis
	            : false;
	    }
	}
	externalAccountAuthorizedUserClient.ExternalAccountAuthorizedUserClient = ExternalAccountAuthorizedUserClient;
	
	return externalAccountAuthorizedUserClient;
}

var hasRequiredGoogleauth;

function requireGoogleauth () {
	if (hasRequiredGoogleauth) return googleauth;
	hasRequiredGoogleauth = 1;
	(function (exports) {
		// Copyright 2019 Google LLC
		//
		// Licensed under the Apache License, Version 2.0 (the "License");
		// you may not use this file except in compliance with the License.
		// You may obtain a copy of the License at
		//
		//      http://www.apache.org/licenses/LICENSE-2.0
		//
		// Unless required by applicable law or agreed to in writing, software
		// distributed under the License is distributed on an "AS IS" BASIS,
		// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		// See the License for the specific language governing permissions and
		// limitations under the License.
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.GoogleAuth = exports.GoogleAuthExceptionMessages = void 0;
		const child_process_1 = require$$1$4;
		const fs = require$$0$2;
		const gaxios_1 = requireSrc$5();
		const gcpMetadata = requireSrc$3();
		const os = require$$1$1;
		const path = require$$2$1;
		const crypto_1 = requireCrypto();
		const computeclient_1 = requireComputeclient();
		const idtokenclient_1 = requireIdtokenclient();
		const envDetect_1 = requireEnvDetect();
		const jwtclient_1 = requireJwtclient();
		const refreshclient_1 = requireRefreshclient();
		const impersonated_1 = requireImpersonated();
		const externalclient_1 = requireExternalclient();
		const baseexternalclient_1 = requireBaseexternalclient();
		const authclient_1 = requireAuthclient();
		const externalAccountAuthorizedUserClient_1 = requireExternalAccountAuthorizedUserClient();
		const util_1 = requireUtil();
		exports.GoogleAuthExceptionMessages = {
		    API_KEY_WITH_CREDENTIALS: 'API Keys and Credentials are mutually exclusive authentication methods and cannot be used together.',
		    NO_PROJECT_ID_FOUND: 'Unable to detect a Project Id in the current environment. \n' +
		        'To learn more about authentication and Google APIs, visit: \n' +
		        'https://cloud.google.com/docs/authentication/getting-started',
		    NO_CREDENTIALS_FOUND: 'Unable to find credentials in current environment. \n' +
		        'To learn more about authentication and Google APIs, visit: \n' +
		        'https://cloud.google.com/docs/authentication/getting-started',
		    NO_ADC_FOUND: 'Could not load the default credentials. Browse to https://cloud.google.com/docs/authentication/getting-started for more information.',
		    NO_UNIVERSE_DOMAIN_FOUND: 'Unable to detect a Universe Domain in the current environment.\n' +
		        'To learn more about Universe Domain retrieval, visit: \n' +
		        'https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys',
		};
		class GoogleAuth {
		    /**
		     * Caches a value indicating whether the auth layer is running on Google
		     * Compute Engine.
		     * @private
		     */
		    checkIsGCE = undefined;
		    useJWTAccessWithScope;
		    defaultServicePath;
		    // Note:  this properly is only public to satisfy unit tests.
		    // https://github.com/Microsoft/TypeScript/issues/5228
		    get isGCE() {
		        return this.checkIsGCE;
		    }
		    _findProjectIdPromise;
		    _cachedProjectId;
		    // To save the contents of the JSON credential file
		    jsonContent = null;
		    apiKey;
		    cachedCredential = null;
		    /**
		     * A pending {@link AuthClient}. Used for concurrent {@link GoogleAuth.getClient} calls.
		     */
		    #pendingAuthClient = null;
		    /**
		     * Scopes populated by the client library by default. We differentiate between
		     * these and user defined scopes when deciding whether to use a self-signed JWT.
		     */
		    defaultScopes;
		    keyFilename;
		    scopes;
		    clientOptions = {};
		    /**
		     * Configuration is resolved in the following order of precedence:
		     * - {@link GoogleAuthOptions.credentials `credentials`}
		     * - {@link GoogleAuthOptions.keyFilename `keyFilename`}
		     * - {@link GoogleAuthOptions.keyFile `keyFile`}
		     *
		     * {@link GoogleAuthOptions.clientOptions `clientOptions`} are passed to the
		     * {@link AuthClient `AuthClient`s}.
		     *
		     * @param opts
		     */
		    constructor(opts = {}) {
		        this._cachedProjectId = opts.projectId || null;
		        this.cachedCredential = opts.authClient || null;
		        this.keyFilename = opts.keyFilename || opts.keyFile;
		        this.scopes = opts.scopes;
		        this.clientOptions = opts.clientOptions || {};
		        this.jsonContent = opts.credentials || null;
		        this.apiKey = opts.apiKey || this.clientOptions.apiKey || null;
		        // Cannot use both API Key + Credentials
		        if (this.apiKey && (this.jsonContent || this.clientOptions.credentials)) {
		            throw new RangeError(exports.GoogleAuthExceptionMessages.API_KEY_WITH_CREDENTIALS);
		        }
		        if (opts.universeDomain) {
		            this.clientOptions.universeDomain = opts.universeDomain;
		        }
		    }
		    // GAPIC client libraries should always use self-signed JWTs. The following
		    // variables are set on the JWT client in order to indicate the type of library,
		    // and sign the JWT with the correct audience and scopes (if not supplied).
		    setGapicJWTValues(client) {
		        client.defaultServicePath = this.defaultServicePath;
		        client.useJWTAccessWithScope = this.useJWTAccessWithScope;
		        client.defaultScopes = this.defaultScopes;
		    }
		    getProjectId(callback) {
		        if (callback) {
		            this.getProjectIdAsync().then(r => callback(null, r), callback);
		        }
		        else {
		            return this.getProjectIdAsync();
		        }
		    }
		    /**
		     * A temporary method for internal `getProjectId` usages where `null` is
		     * acceptable. In a future major release, `getProjectId` should return `null`
		     * (as the `Promise<string | null>` base signature describes) and this private
		     * method should be removed.
		     *
		     * @returns Promise that resolves with project id (or `null`)
		     */
		    async getProjectIdOptional() {
		        try {
		            return await this.getProjectId();
		        }
		        catch (e) {
		            if (e instanceof Error &&
		                e.message === exports.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND) {
		                return null;
		            }
		            else {
		                throw e;
		            }
		        }
		    }
		    /**
		     * A private method for finding and caching a projectId.
		     *
		     * Supports environments in order of precedence:
		     * - GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT environment variable
		     * - GOOGLE_APPLICATION_CREDENTIALS JSON file
		     * - Cloud SDK: `gcloud config config-helper --format json`
		     * - GCE project ID from metadata server
		     *
		     * @returns projectId
		     */
		    async findAndCacheProjectId() {
		        let projectId = null;
		        projectId ||= await this.getProductionProjectId();
		        projectId ||= await this.getFileProjectId();
		        projectId ||= await this.getDefaultServiceProjectId();
		        projectId ||= await this.getGCEProjectId();
		        projectId ||= await this.getExternalAccountClientProjectId();
		        if (projectId) {
		            this._cachedProjectId = projectId;
		            return projectId;
		        }
		        else {
		            throw new Error(exports.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND);
		        }
		    }
		    async getProjectIdAsync() {
		        if (this._cachedProjectId) {
		            return this._cachedProjectId;
		        }
		        if (!this._findProjectIdPromise) {
		            this._findProjectIdPromise = this.findAndCacheProjectId();
		        }
		        return this._findProjectIdPromise;
		    }
		    /**
		     * Retrieves a universe domain from the metadata server via
		     * {@link gcpMetadata.universe}.
		     *
		     * @returns a universe domain
		     */
		    async getUniverseDomainFromMetadataServer() {
		        let universeDomain;
		        try {
		            universeDomain = await gcpMetadata.universe('universe-domain');
		            universeDomain ||= authclient_1.DEFAULT_UNIVERSE;
		        }
		        catch (e) {
		            if (e && e?.response?.status === 404) {
		                universeDomain = authclient_1.DEFAULT_UNIVERSE;
		            }
		            else {
		                throw e;
		            }
		        }
		        return universeDomain;
		    }
		    /**
		     * Retrieves, caches, and returns the universe domain in the following order
		     * of precedence:
		     * - The universe domain in {@link GoogleAuth.clientOptions}
		     * - An existing or ADC {@link AuthClient}'s universe domain
		     * - {@link gcpMetadata.universe}, if {@link Compute} client
		     *
		     * @returns The universe domain
		     */
		    async getUniverseDomain() {
		        let universeDomain = (0, util_1.originalOrCamelOptions)(this.clientOptions).get('universe_domain');
		        try {
		            universeDomain ??= (await this.getClient()).universeDomain;
		        }
		        catch {
		            // client or ADC is not available
		            universeDomain ??= authclient_1.DEFAULT_UNIVERSE;
		        }
		        return universeDomain;
		    }
		    /**
		     * @returns Any scopes (user-specified or default scopes specified by the
		     *   client library) that need to be set on the current Auth client.
		     */
		    getAnyScopes() {
		        return this.scopes || this.defaultScopes;
		    }
		    getApplicationDefault(optionsOrCallback = {}, callback) {
		        let options;
		        if (typeof optionsOrCallback === 'function') {
		            callback = optionsOrCallback;
		        }
		        else {
		            options = optionsOrCallback;
		        }
		        if (callback) {
		            this.getApplicationDefaultAsync(options).then(r => callback(null, r.credential, r.projectId), callback);
		        }
		        else {
		            return this.getApplicationDefaultAsync(options);
		        }
		    }
		    async getApplicationDefaultAsync(options = {}) {
		        // If we've already got a cached credential, return it.
		        // This will also preserve one's configured quota project, in case they
		        // set one directly on the credential previously.
		        if (this.cachedCredential) {
		            // cache, while preserving existing quota project preferences
		            return await this.#prepareAndCacheClient(this.cachedCredential, null);
		        }
		        let credential;
		        // Check for the existence of a local environment variable pointing to the
		        // location of the credential file. This is typically used in local
		        // developer scenarios.
		        credential =
		            await this._tryGetApplicationCredentialsFromEnvironmentVariable(options);
		        if (credential) {
		            if (credential instanceof jwtclient_1.JWT) {
		                credential.scopes = this.scopes;
		            }
		            else if (credential instanceof baseexternalclient_1.BaseExternalAccountClient) {
		                credential.scopes = this.getAnyScopes();
		            }
		            return await this.#prepareAndCacheClient(credential);
		        }
		        // Look in the well-known credential file location.
		        credential =
		            await this._tryGetApplicationCredentialsFromWellKnownFile(options);
		        if (credential) {
		            if (credential instanceof jwtclient_1.JWT) {
		                credential.scopes = this.scopes;
		            }
		            else if (credential instanceof baseexternalclient_1.BaseExternalAccountClient) {
		                credential.scopes = this.getAnyScopes();
		            }
		            return await this.#prepareAndCacheClient(credential);
		        }
		        // Determine if we're running on GCE.
		        if (await this._checkIsGCE()) {
		            options.scopes = this.getAnyScopes();
		            return await this.#prepareAndCacheClient(new computeclient_1.Compute(options));
		        }
		        throw new Error(exports.GoogleAuthExceptionMessages.NO_ADC_FOUND);
		    }
		    async #prepareAndCacheClient(credential, quotaProjectIdOverride = process.env['GOOGLE_CLOUD_QUOTA_PROJECT'] || null) {
		        const projectId = await this.getProjectIdOptional();
		        if (quotaProjectIdOverride) {
		            credential.quotaProjectId = quotaProjectIdOverride;
		        }
		        this.cachedCredential = credential;
		        return { credential, projectId };
		    }
		    /**
		     * Determines whether the auth layer is running on Google Compute Engine.
		     * Checks for GCP Residency, then fallback to checking if metadata server
		     * is available.
		     *
		     * @returns A promise that resolves with the boolean.
		     * @api private
		     */
		    async _checkIsGCE() {
		        if (this.checkIsGCE === undefined) {
		            this.checkIsGCE =
		                gcpMetadata.getGCPResidency() || (await gcpMetadata.isAvailable());
		        }
		        return this.checkIsGCE;
		    }
		    /**
		     * Attempts to load default credentials from the environment variable path..
		     * @returns Promise that resolves with the OAuth2Client or null.
		     * @api private
		     */
		    async _tryGetApplicationCredentialsFromEnvironmentVariable(options) {
		        const credentialsPath = process.env['GOOGLE_APPLICATION_CREDENTIALS'] ||
		            process.env['google_application_credentials'];
		        if (!credentialsPath || credentialsPath.length === 0) {
		            return null;
		        }
		        try {
		            return this._getApplicationCredentialsFromFilePath(credentialsPath, options);
		        }
		        catch (e) {
		            if (e instanceof Error) {
		                e.message = `Unable to read the credential file specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable: ${e.message}`;
		            }
		            throw e;
		        }
		    }
		    /**
		     * Attempts to load default credentials from a well-known file location
		     * @return Promise that resolves with the OAuth2Client or null.
		     * @api private
		     */
		    async _tryGetApplicationCredentialsFromWellKnownFile(options) {
		        // First, figure out the location of the file, depending upon the OS type.
		        let location = null;
		        if (this._isWindows()) {
		            // Windows
		            location = process.env['APPDATA'];
		        }
		        else {
		            // Linux or Mac
		            const home = process.env['HOME'];
		            if (home) {
		                location = path.join(home, '.config');
		            }
		        }
		        // If we found the root path, expand it.
		        if (location) {
		            location = path.join(location, 'gcloud', 'application_default_credentials.json');
		            if (!fs.existsSync(location)) {
		                location = null;
		            }
		        }
		        // The file does not exist.
		        if (!location) {
		            return null;
		        }
		        // The file seems to exist. Try to use it.
		        const client = await this._getApplicationCredentialsFromFilePath(location, options);
		        return client;
		    }
		    /**
		     * Attempts to load default credentials from a file at the given path..
		     * @param filePath The path to the file to read.
		     * @returns Promise that resolves with the OAuth2Client
		     * @api private
		     */
		    async _getApplicationCredentialsFromFilePath(filePath, options = {}) {
		        // Make sure the path looks like a string.
		        if (!filePath || filePath.length === 0) {
		            throw new Error('The file path is invalid.');
		        }
		        // Make sure there is a file at the path. lstatSync will throw if there is
		        // nothing there.
		        try {
		            // Resolve path to actual file in case of symlink. Expect a thrown error
		            // if not resolvable.
		            filePath = fs.realpathSync(filePath);
		            if (!fs.lstatSync(filePath).isFile()) {
		                throw new Error();
		            }
		        }
		        catch (err) {
		            if (err instanceof Error) {
		                err.message = `The file at ${filePath} does not exist, or it is not a file. ${err.message}`;
		            }
		            throw err;
		        }
		        // Now open a read stream on the file, and parse it.
		        const readStream = fs.createReadStream(filePath);
		        return this.fromStream(readStream, options);
		    }
		    /**
		     * Create a credentials instance using a given impersonated input options.
		     * @param json The impersonated input object.
		     * @returns JWT or UserRefresh Client with data
		     */
		    fromImpersonatedJSON(json) {
		        if (!json) {
		            throw new Error('Must pass in a JSON object containing an  impersonated refresh token');
		        }
		        if (json.type !== impersonated_1.IMPERSONATED_ACCOUNT_TYPE) {
		            throw new Error(`The incoming JSON object does not have the "${impersonated_1.IMPERSONATED_ACCOUNT_TYPE}" type`);
		        }
		        if (!json.source_credentials) {
		            throw new Error('The incoming JSON object does not contain a source_credentials field');
		        }
		        if (!json.service_account_impersonation_url) {
		            throw new Error('The incoming JSON object does not contain a service_account_impersonation_url field');
		        }
		        const sourceClient = this.fromJSON(json.source_credentials);
		        if (json.service_account_impersonation_url?.length > 256) {
		            /**
		             * Prevents DOS attacks.
		             * @see {@link https://github.com/googleapis/google-auth-library-nodejs/security/code-scanning/85}
		             **/
		            throw new RangeError(`Target principal is too long: ${json.service_account_impersonation_url}`);
		        }
		        // Extract service account from service_account_impersonation_url
		        const targetPrincipal = /(?<target>[^/]+):(generateAccessToken|generateIdToken)$/.exec(json.service_account_impersonation_url)?.groups?.target;
		        if (!targetPrincipal) {
		            throw new RangeError(`Cannot extract target principal from ${json.service_account_impersonation_url}`);
		        }
		        const targetScopes = this.getAnyScopes() ?? [];
		        return new impersonated_1.Impersonated({
		            ...json,
		            sourceClient,
		            targetPrincipal,
		            targetScopes: Array.isArray(targetScopes) ? targetScopes : [targetScopes],
		        });
		    }
		    /**
		     * Create a credentials instance using the given input options.
		     * This client is not cached.
		     *
		     * **Important**: If you accept a credential configuration (credential JSON/File/Stream) from an external source for authentication to Google Cloud, you must validate it before providing it to any Google API or library. Providing an unvalidated credential configuration to Google APIs can compromise the security of your systems and data. For more information, refer to {@link https://cloud.google.com/docs/authentication/external/externally-sourced-credentials Validate credential configurations from external sources}.
		     *
		     * @param json The input object.
		     * @param options The JWT or UserRefresh options for the client
		     * @returns JWT or UserRefresh Client with data
		     */
		    fromJSON(json, options = {}) {
		        let client;
		        // user's preferred universe domain
		        const preferredUniverseDomain = (0, util_1.originalOrCamelOptions)(options).get('universe_domain');
		        if (json.type === refreshclient_1.USER_REFRESH_ACCOUNT_TYPE) {
		            client = new refreshclient_1.UserRefreshClient(options);
		            client.fromJSON(json);
		        }
		        else if (json.type === impersonated_1.IMPERSONATED_ACCOUNT_TYPE) {
		            client = this.fromImpersonatedJSON(json);
		        }
		        else if (json.type === baseexternalclient_1.EXTERNAL_ACCOUNT_TYPE) {
		            client = externalclient_1.ExternalAccountClient.fromJSON({
		                ...json,
		                ...options,
		            });
		            client.scopes = this.getAnyScopes();
		        }
		        else if (json.type === externalAccountAuthorizedUserClient_1.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE) {
		            client = new externalAccountAuthorizedUserClient_1.ExternalAccountAuthorizedUserClient({
		                ...json,
		                ...options,
		            });
		        }
		        else {
		            options.scopes = this.scopes;
		            client = new jwtclient_1.JWT(options);
		            this.setGapicJWTValues(client);
		            client.fromJSON(json);
		        }
		        if (preferredUniverseDomain) {
		            client.universeDomain = preferredUniverseDomain;
		        }
		        return client;
		    }
		    /**
		     * Return a JWT or UserRefreshClient from JavaScript object, caching both the
		     * object used to instantiate and the client.
		     * @param json The input object.
		     * @param options The JWT or UserRefresh options for the client
		     * @returns JWT or UserRefresh Client with data
		     */
		    _cacheClientFromJSON(json, options) {
		        const client = this.fromJSON(json, options);
		        // cache both raw data used to instantiate client and client itself.
		        this.jsonContent = json;
		        this.cachedCredential = client;
		        return client;
		    }
		    fromStream(inputStream, optionsOrCallback = {}, callback) {
		        let options = {};
		        if (typeof optionsOrCallback === 'function') {
		            callback = optionsOrCallback;
		        }
		        else {
		            options = optionsOrCallback;
		        }
		        if (callback) {
		            this.fromStreamAsync(inputStream, options).then(r => callback(null, r), callback);
		        }
		        else {
		            return this.fromStreamAsync(inputStream, options);
		        }
		    }
		    fromStreamAsync(inputStream, options) {
		        return new Promise((resolve, reject) => {
		            if (!inputStream) {
		                throw new Error('Must pass in a stream containing the Google auth settings.');
		            }
		            const chunks = [];
		            inputStream
		                .setEncoding('utf8')
		                .on('error', reject)
		                .on('data', chunk => chunks.push(chunk))
		                .on('end', () => {
		                try {
		                    try {
		                        const data = JSON.parse(chunks.join(''));
		                        const r = this._cacheClientFromJSON(data, options);
		                        return resolve(r);
		                    }
		                    catch (err) {
		                        // If we failed parsing this.keyFileName, assume that it
		                        // is a PEM or p12 certificate:
		                        if (!this.keyFilename)
		                            throw err;
		                        const client = new jwtclient_1.JWT({
		                            ...this.clientOptions,
		                            keyFile: this.keyFilename,
		                        });
		                        this.cachedCredential = client;
		                        this.setGapicJWTValues(client);
		                        return resolve(client);
		                    }
		                }
		                catch (err) {
		                    return reject(err);
		                }
		            });
		        });
		    }
		    /**
		     * Create a credentials instance using the given API key string.
		     * The created client is not cached. In order to create and cache it use the {@link GoogleAuth.getClient `getClient`} method after first providing an {@link GoogleAuth.apiKey `apiKey`}.
		     *
		     * @param apiKey The API key string
		     * @param options An optional options object.
		     * @returns A JWT loaded from the key
		     */
		    fromAPIKey(apiKey, options = {}) {
		        return new jwtclient_1.JWT({ ...options, apiKey });
		    }
		    /**
		     * Determines whether the current operating system is Windows.
		     * @api private
		     */
		    _isWindows() {
		        const sys = os.platform();
		        if (sys && sys.length >= 3) {
		            if (sys.substring(0, 3).toLowerCase() === 'win') {
		                return true;
		            }
		        }
		        return false;
		    }
		    /**
		     * Run the Google Cloud SDK command that prints the default project ID
		     */
		    async getDefaultServiceProjectId() {
		        return new Promise(resolve => {
		            (0, child_process_1.exec)('gcloud config config-helper --format json', (err, stdout) => {
		                if (!err && stdout) {
		                    try {
		                        const projectId = JSON.parse(stdout).configuration.properties.core.project;
		                        resolve(projectId);
		                        return;
		                    }
		                    catch (e) {
		                        // ignore errors
		                    }
		                }
		                resolve(null);
		            });
		        });
		    }
		    /**
		     * Loads the project id from environment variables.
		     * @api private
		     */
		    getProductionProjectId() {
		        return (process.env['GCLOUD_PROJECT'] ||
		            process.env['GOOGLE_CLOUD_PROJECT'] ||
		            process.env['gcloud_project'] ||
		            process.env['google_cloud_project']);
		    }
		    /**
		     * Loads the project id from the GOOGLE_APPLICATION_CREDENTIALS json file.
		     * @api private
		     */
		    async getFileProjectId() {
		        if (this.cachedCredential) {
		            // Try to read the project ID from the cached credentials file
		            return this.cachedCredential.projectId;
		        }
		        // Ensure the projectId is loaded from the keyFile if available.
		        if (this.keyFilename) {
		            const creds = await this.getClient();
		            if (creds && creds.projectId) {
		                return creds.projectId;
		            }
		        }
		        // Try to load a credentials file and read its project ID
		        const r = await this._tryGetApplicationCredentialsFromEnvironmentVariable();
		        if (r) {
		            return r.projectId;
		        }
		        else {
		            return null;
		        }
		    }
		    /**
		     * Gets the project ID from external account client if available.
		     */
		    async getExternalAccountClientProjectId() {
		        if (!this.jsonContent || this.jsonContent.type !== baseexternalclient_1.EXTERNAL_ACCOUNT_TYPE) {
		            return null;
		        }
		        const creds = await this.getClient();
		        // Do not suppress the underlying error, as the error could contain helpful
		        // information for debugging and fixing. This is especially true for
		        // external account creds as in order to get the project ID, the following
		        // operations have to succeed:
		        // 1. Valid credentials file should be supplied.
		        // 2. Ability to retrieve access tokens from STS token exchange API.
		        // 3. Ability to exchange for service account impersonated credentials (if
		        //    enabled).
		        // 4. Ability to get project info using the access token from step 2 or 3.
		        // Without surfacing the error, it is harder for developers to determine
		        // which step went wrong.
		        return await creds.getProjectId();
		    }
		    /**
		     * Gets the Compute Engine project ID if it can be inferred.
		     */
		    async getGCEProjectId() {
		        try {
		            const r = await gcpMetadata.project('project-id');
		            return r;
		        }
		        catch (e) {
		            // Ignore any errors
		            return null;
		        }
		    }
		    getCredentials(callback) {
		        if (callback) {
		            this.getCredentialsAsync().then(r => callback(null, r), callback);
		        }
		        else {
		            return this.getCredentialsAsync();
		        }
		    }
		    async getCredentialsAsync() {
		        const client = await this.getClient();
		        if (client instanceof impersonated_1.Impersonated) {
		            return { client_email: client.getTargetPrincipal() };
		        }
		        if (client instanceof baseexternalclient_1.BaseExternalAccountClient) {
		            const serviceAccountEmail = client.getServiceAccountEmail();
		            if (serviceAccountEmail) {
		                return {
		                    client_email: serviceAccountEmail,
		                    universe_domain: client.universeDomain,
		                };
		            }
		        }
		        if (this.jsonContent) {
		            return {
		                client_email: this.jsonContent.client_email,
		                private_key: this.jsonContent.private_key,
		                universe_domain: this.jsonContent.universe_domain,
		            };
		        }
		        if (await this._checkIsGCE()) {
		            const [client_email, universe_domain] = await Promise.all([
		                gcpMetadata.instance('service-accounts/default/email'),
		                this.getUniverseDomain(),
		            ]);
		            return { client_email, universe_domain };
		        }
		        throw new Error(exports.GoogleAuthExceptionMessages.NO_CREDENTIALS_FOUND);
		    }
		    /**
		     * Automatically obtain an {@link AuthClient `AuthClient`} based on the
		     * provided configuration. If no options were passed, use Application
		     * Default Credentials.
		     */
		    async getClient() {
		        if (this.cachedCredential) {
		            return this.cachedCredential;
		        }
		        // Use an existing auth client request, or cache a new one
		        this.#pendingAuthClient =
		            this.#pendingAuthClient || this.#determineClient();
		        try {
		            return await this.#pendingAuthClient;
		        }
		        finally {
		            // reset the pending auth client in case it is changed later
		            this.#pendingAuthClient = null;
		        }
		    }
		    async #determineClient() {
		        if (this.jsonContent) {
		            return this._cacheClientFromJSON(this.jsonContent, this.clientOptions);
		        }
		        else if (this.keyFilename) {
		            const filePath = path.resolve(this.keyFilename);
		            const stream = fs.createReadStream(filePath);
		            return await this.fromStreamAsync(stream, this.clientOptions);
		        }
		        else if (this.apiKey) {
		            const client = await this.fromAPIKey(this.apiKey, this.clientOptions);
		            client.scopes = this.scopes;
		            const { credential } = await this.#prepareAndCacheClient(client);
		            return credential;
		        }
		        else {
		            const { credential } = await this.getApplicationDefaultAsync(this.clientOptions);
		            return credential;
		        }
		    }
		    /**
		     * Creates a client which will fetch an ID token for authorization.
		     * @param targetAudience the audience for the fetched ID token.
		     * @returns IdTokenClient for making HTTP calls authenticated with ID tokens.
		     */
		    async getIdTokenClient(targetAudience) {
		        const client = await this.getClient();
		        if (!('fetchIdToken' in client)) {
		            throw new Error('Cannot fetch ID token in this environment, use GCE or set the GOOGLE_APPLICATION_CREDENTIALS environment variable to a service account credentials JSON file.');
		        }
		        return new idtokenclient_1.IdTokenClient({ targetAudience, idTokenProvider: client });
		    }
		    /**
		     * Automatically obtain application default credentials, and return
		     * an access token for making requests.
		     */
		    async getAccessToken() {
		        const client = await this.getClient();
		        return (await client.getAccessToken()).token;
		    }
		    /**
		     * Obtain the HTTP headers that will provide authorization for a given
		     * request.
		     */
		    async getRequestHeaders(url) {
		        const client = await this.getClient();
		        return client.getRequestHeaders(url);
		    }
		    /**
		     * Obtain credentials for a request, then attach the appropriate headers to
		     * the request options.
		     * @param opts Axios or Request options on which to attach the headers
		     */
		    async authorizeRequest(opts = {}) {
		        const url = opts.url;
		        const client = await this.getClient();
		        const headers = await client.getRequestHeaders(url);
		        opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers, headers);
		        return opts;
		    }
		    /**
		     * A {@link fetch `fetch`} compliant API for {@link GoogleAuth}.
		     *
		     * @see {@link GoogleAuth.request} for the classic method.
		     *
		     * @remarks
		     *
		     * This is useful as a drop-in replacement for `fetch` API usage.
		     *
		     * @example
		     *
		     * ```ts
		     * const auth = new GoogleAuth();
		     * const fetchWithAuth: typeof fetch = (...args) => auth.fetch(...args);
		     * await fetchWithAuth('https://example.com');
		     * ```
		     *
		     * @param args `fetch` API or {@link Gaxios.fetch `Gaxios#fetch`} parameters
		     * @returns the {@link GaxiosResponse} with Gaxios-added properties
		     */
		    async fetch(...args) {
		        const client = await this.getClient();
		        return client.fetch(...args);
		    }
		    /**
		     * Automatically obtain application default credentials, and make an
		     * HTTP request using the given options.
		     *
		     * @see {@link GoogleAuth.fetch} for the modern method.
		     *
		     * @param opts Axios request options for the HTTP request.
		     */
		    async request(opts) {
		        const client = await this.getClient();
		        return client.request(opts);
		    }
		    /**
		     * Determine the compute environment in which the code is running.
		     */
		    getEnv() {
		        return (0, envDetect_1.getEnv)();
		    }
		    /**
		     * Sign the given data with the current private key, or go out
		     * to the IAM API to sign it.
		     * @param data The data to be signed.
		     * @param endpoint A custom endpoint to use.
		     *
		     * @example
		     * ```
		     * sign('data', 'https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/');
		     * ```
		     */
		    async sign(data, endpoint) {
		        const client = await this.getClient();
		        const universe = await this.getUniverseDomain();
		        endpoint =
		            endpoint ||
		                `https://iamcredentials.${universe}/v1/projects/-/serviceAccounts/`;
		        if (client instanceof impersonated_1.Impersonated) {
		            const signed = await client.sign(data);
		            return signed.signedBlob;
		        }
		        const crypto = (0, crypto_1.createCrypto)();
		        if (client instanceof jwtclient_1.JWT && client.key) {
		            const sign = await crypto.sign(client.key, data);
		            return sign;
		        }
		        const creds = await this.getCredentials();
		        if (!creds.client_email) {
		            throw new Error('Cannot sign data without `client_email`.');
		        }
		        return this.signBlob(crypto, creds.client_email, data, endpoint);
		    }
		    async signBlob(crypto, emailOrUniqueId, data, endpoint) {
		        const url = new URL(endpoint + `${emailOrUniqueId}:signBlob`);
		        const res = await this.request({
		            method: 'POST',
		            url: url.href,
		            data: {
		                payload: crypto.encodeBase64StringUtf8(data),
		            },
		            retry: true,
		            retryConfig: {
		                httpMethodsToRetry: ['POST'],
		            },
		        });
		        return res.data.signedBlob;
		    }
		}
		exports.GoogleAuth = GoogleAuth;
		
	} (googleauth));
	return googleauth;
}

var iam = {};

var hasRequiredIam;

function requireIam () {
	if (hasRequiredIam) return iam;
	hasRequiredIam = 1;
	// Copyright 2014 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(iam, "__esModule", { value: true });
	iam.IAMAuth = void 0;
	class IAMAuth {
	    selector;
	    token;
	    /**
	     * IAM credentials.
	     *
	     * @param selector the iam authority selector
	     * @param token the token
	     * @constructor
	     */
	    constructor(selector, token) {
	        this.selector = selector;
	        this.token = token;
	        this.selector = selector;
	        this.token = token;
	    }
	    /**
	     * Acquire the HTTP headers required to make an authenticated request.
	     */
	    getRequestHeaders() {
	        return {
	            'x-goog-iam-authority-selector': this.selector,
	            'x-goog-iam-authorization-token': this.token,
	        };
	    }
	}
	iam.IAMAuth = IAMAuth;
	
	return iam;
}

var downscopedclient = {};

var hasRequiredDownscopedclient;

function requireDownscopedclient () {
	if (hasRequiredDownscopedclient) return downscopedclient;
	hasRequiredDownscopedclient = 1;
	(function (exports) {
		// Copyright 2021 Google LLC
		//
		// Licensed under the Apache License, Version 2.0 (the "License");
		// you may not use this file except in compliance with the License.
		// You may obtain a copy of the License at
		//
		//      http://www.apache.org/licenses/LICENSE-2.0
		//
		// Unless required by applicable law or agreed to in writing, software
		// distributed under the License is distributed on an "AS IS" BASIS,
		// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		// See the License for the specific language governing permissions and
		// limitations under the License.
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.DownscopedClient = exports.EXPIRATION_TIME_OFFSET = exports.MAX_ACCESS_BOUNDARY_RULES_COUNT = void 0;
		const gaxios_1 = requireSrc$5();
		const stream = require$$3;
		const authclient_1 = requireAuthclient();
		const sts = requireStscredentials();
		/**
		 * The required token exchange grant_type: rfc8693#section-2.1
		 */
		const STS_GRANT_TYPE = 'urn:ietf:params:oauth:grant-type:token-exchange';
		/**
		 * The requested token exchange requested_token_type: rfc8693#section-2.1
		 */
		const STS_REQUEST_TOKEN_TYPE = 'urn:ietf:params:oauth:token-type:access_token';
		/**
		 * The requested token exchange subject_token_type: rfc8693#section-2.1
		 */
		const STS_SUBJECT_TOKEN_TYPE = 'urn:ietf:params:oauth:token-type:access_token';
		/**
		 * The maximum number of access boundary rules a Credential Access Boundary
		 * can contain.
		 */
		exports.MAX_ACCESS_BOUNDARY_RULES_COUNT = 10;
		/**
		 * Offset to take into account network delays and server clock skews.
		 */
		exports.EXPIRATION_TIME_OFFSET = 5 * 60 * 1000;
		/**
		 * Defines a set of Google credentials that are downscoped from an existing set
		 * of Google OAuth2 credentials. This is useful to restrict the Identity and
		 * Access Management (IAM) permissions that a short-lived credential can use.
		 * The common pattern of usage is to have a token broker with elevated access
		 * generate these downscoped credentials from higher access source credentials
		 * and pass the downscoped short-lived access tokens to a token consumer via
		 * some secure authenticated channel for limited access to Google Cloud Storage
		 * resources.
		 */
		class DownscopedClient extends authclient_1.AuthClient {
		    authClient;
		    credentialAccessBoundary;
		    cachedDownscopedAccessToken;
		    stsCredential;
		    /**
		     * Instantiates a downscoped client object using the provided source
		     * AuthClient and credential access boundary rules.
		     * To downscope permissions of a source AuthClient, a Credential Access
		     * Boundary that specifies which resources the new credential can access, as
		     * well as an upper bound on the permissions that are available on each
		     * resource, has to be defined. A downscoped client can then be instantiated
		     * using the source AuthClient and the Credential Access Boundary.
		     * @param options the {@link DownscopedClientOptions `DownscopedClientOptions`} to use. Passing an `AuthClient` directly is **@DEPRECATED**.
		     * @param credentialAccessBoundary **@DEPRECATED**. Provide a {@link DownscopedClientOptions `DownscopedClientOptions`} object in the first parameter instead.
		     */
		    constructor(
		    /**
		     * AuthClient is for backwards-compatibility.
		     */
		    options, 
		    /**
		     * @deprecated - provide a {@link DownscopedClientOptions `DownscopedClientOptions`} object in the first parameter instead
		     */
		    credentialAccessBoundary = {
		        accessBoundary: {
		            accessBoundaryRules: [],
		        },
		    }) {
		        super(options instanceof authclient_1.AuthClient ? {} : options);
		        if (options instanceof authclient_1.AuthClient) {
		            this.authClient = options;
		            this.credentialAccessBoundary = credentialAccessBoundary;
		        }
		        else {
		            this.authClient = options.authClient;
		            this.credentialAccessBoundary = options.credentialAccessBoundary;
		        }
		        // Check 1-10 Access Boundary Rules are defined within Credential Access
		        // Boundary.
		        if (this.credentialAccessBoundary.accessBoundary.accessBoundaryRules
		            .length === 0) {
		            throw new Error('At least one access boundary rule needs to be defined.');
		        }
		        else if (this.credentialAccessBoundary.accessBoundary.accessBoundaryRules.length >
		            exports.MAX_ACCESS_BOUNDARY_RULES_COUNT) {
		            throw new Error('The provided access boundary has more than ' +
		                `${exports.MAX_ACCESS_BOUNDARY_RULES_COUNT} access boundary rules.`);
		        }
		        // Check at least one permission should be defined in each Access Boundary
		        // Rule.
		        for (const rule of this.credentialAccessBoundary.accessBoundary
		            .accessBoundaryRules) {
		            if (rule.availablePermissions.length === 0) {
		                throw new Error('At least one permission should be defined in access boundary rules.');
		            }
		        }
		        this.stsCredential = new sts.StsCredentials({
		            tokenExchangeEndpoint: `https://sts.${this.universeDomain}/v1/token`,
		        });
		        this.cachedDownscopedAccessToken = null;
		    }
		    /**
		     * Provides a mechanism to inject Downscoped access tokens directly.
		     * The expiry_date field is required to facilitate determination of the token
		     * expiration which would make it easier for the token consumer to handle.
		     * @param credentials The Credentials object to set on the current client.
		     */
		    setCredentials(credentials) {
		        if (!credentials.expiry_date) {
		            throw new Error('The access token expiry_date field is missing in the provided ' +
		                'credentials.');
		        }
		        super.setCredentials(credentials);
		        this.cachedDownscopedAccessToken = credentials;
		    }
		    async getAccessToken() {
		        // If the cached access token is unavailable or expired, force refresh.
		        // The Downscoped access token will be returned in
		        // DownscopedAccessTokenResponse format.
		        if (!this.cachedDownscopedAccessToken ||
		            this.isExpired(this.cachedDownscopedAccessToken)) {
		            await this.refreshAccessTokenAsync();
		        }
		        // Return Downscoped access token in DownscopedAccessTokenResponse format.
		        return {
		            token: this.cachedDownscopedAccessToken.access_token,
		            expirationTime: this.cachedDownscopedAccessToken.expiry_date,
		            res: this.cachedDownscopedAccessToken.res,
		        };
		    }
		    /**
		     * The main authentication interface. It takes an optional url which when
		     * present is the endpoint being accessed, and returns a Promise which
		     * resolves with authorization header fields.
		     *
		     * The result has the form:
		     * { authorization: 'Bearer <access_token_value>' }
		     */
		    async getRequestHeaders() {
		        const accessTokenResponse = await this.getAccessToken();
		        const headers = new Headers({
		            authorization: `Bearer ${accessTokenResponse.token}`,
		        });
		        return this.addSharedMetadataHeaders(headers);
		    }
		    request(opts, callback) {
		        if (callback) {
		            this.requestAsync(opts).then(r => callback(null, r), e => {
		                return callback(e, e.response);
		            });
		        }
		        else {
		            return this.requestAsync(opts);
		        }
		    }
		    /**
		     * Authenticates the provided HTTP request, processes it and resolves with the
		     * returned response.
		     * @param opts The HTTP request options.
		     * @param reAuthRetried Whether the current attempt is a retry after a failed attempt due to an auth failure
		     * @return A promise that resolves with the successful response.
		     */
		    async requestAsync(opts, reAuthRetried = false) {
		        let response;
		        try {
		            const requestHeaders = await this.getRequestHeaders();
		            opts.headers = gaxios_1.Gaxios.mergeHeaders(opts.headers);
		            this.addUserProjectAndAuthHeaders(opts.headers, requestHeaders);
		            response = await this.transporter.request(opts);
		        }
		        catch (e) {
		            const res = e.response;
		            if (res) {
		                const statusCode = res.status;
		                // Retry the request for metadata if the following criteria are true:
		                // - We haven't already retried.  It only makes sense to retry once.
		                // - The response was a 401 or a 403
		                // - The request didn't send a readableStream
		                // - forceRefreshOnFailure is true
		                const isReadableStream = res.config.data instanceof stream.Readable;
		                const isAuthErr = statusCode === 401 || statusCode === 403;
		                if (!reAuthRetried &&
		                    isAuthErr &&
		                    !isReadableStream &&
		                    this.forceRefreshOnFailure) {
		                    await this.refreshAccessTokenAsync();
		                    return await this.requestAsync(opts, true);
		                }
		            }
		            throw e;
		        }
		        return response;
		    }
		    /**
		     * Forces token refresh, even if unexpired tokens are currently cached.
		     * GCP access tokens are retrieved from authclient object/source credential.
		     * Then GCP access tokens are exchanged for downscoped access tokens via the
		     * token exchange endpoint.
		     * @return A promise that resolves with the fresh downscoped access token.
		     */
		    async refreshAccessTokenAsync() {
		        // Retrieve GCP access token from source credential.
		        const subjectToken = (await this.authClient.getAccessToken()).token;
		        // Construct the STS credentials options.
		        const stsCredentialsOptions = {
		            grantType: STS_GRANT_TYPE,
		            requestedTokenType: STS_REQUEST_TOKEN_TYPE,
		            subjectToken: subjectToken,
		            subjectTokenType: STS_SUBJECT_TOKEN_TYPE,
		        };
		        // Exchange the source AuthClient access token for a Downscoped access
		        // token.
		        const stsResponse = await this.stsCredential.exchangeToken(stsCredentialsOptions, undefined, this.credentialAccessBoundary);
		        /**
		         * The STS endpoint will only return the expiration time for the downscoped
		         * access token if the original access token represents a service account.
		         * The downscoped token's expiration time will always match the source
		         * credential expiration. When no expires_in is returned, we can copy the
		         * source credential's expiration time.
		         */
		        const sourceCredExpireDate = this.authClient.credentials?.expiry_date || null;
		        const expiryDate = stsResponse.expires_in
		            ? new Date().getTime() + stsResponse.expires_in * 1000
		            : sourceCredExpireDate;
		        // Save response in cached access token.
		        this.cachedDownscopedAccessToken = {
		            access_token: stsResponse.access_token,
		            expiry_date: expiryDate,
		            res: stsResponse.res,
		        };
		        // Save credentials.
		        this.credentials = {};
		        Object.assign(this.credentials, this.cachedDownscopedAccessToken);
		        delete this.credentials.res;
		        // Trigger tokens event to notify external listeners.
		        this.emit('tokens', {
		            refresh_token: null,
		            expiry_date: this.cachedDownscopedAccessToken.expiry_date,
		            access_token: this.cachedDownscopedAccessToken.access_token,
		            token_type: 'Bearer',
		            id_token: null,
		        });
		        // Return the cached access token.
		        return this.cachedDownscopedAccessToken;
		    }
		    /**
		     * Returns whether the provided credentials are expired or not.
		     * If there is no expiry time, assumes the token is not expired or expiring.
		     * @param downscopedAccessToken The credentials to check for expiration.
		     * @return Whether the credentials are expired or not.
		     */
		    isExpired(downscopedAccessToken) {
		        const now = new Date().getTime();
		        return downscopedAccessToken.expiry_date
		            ? now >=
		                downscopedAccessToken.expiry_date - this.eagerRefreshThresholdMillis
		            : false;
		    }
		}
		exports.DownscopedClient = DownscopedClient;
		
	} (downscopedclient));
	return downscopedclient;
}

var passthrough = {};

var hasRequiredPassthrough;

function requirePassthrough () {
	if (hasRequiredPassthrough) return passthrough;
	hasRequiredPassthrough = 1;
	// Copyright 2024 Google LLC
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(passthrough, "__esModule", { value: true });
	passthrough.PassThroughClient = void 0;
	const authclient_1 = requireAuthclient();
	/**
	 * An AuthClient without any Authentication information. Useful for:
	 * - Anonymous access
	 * - Local Emulators
	 * - Testing Environments
	 *
	 */
	class PassThroughClient extends authclient_1.AuthClient {
	    /**
	     * Creates a request without any authentication headers or checks.
	     *
	     * @remarks
	     *
	     * In testing environments it may be useful to change the provided
	     * {@link AuthClient.transporter} for any desired request overrides/handling.
	     *
	     * @param opts
	     * @returns The response of the request.
	     */
	    async request(opts) {
	        return this.transporter.request(opts);
	    }
	    /**
	     * A required method of the base class.
	     * Always will return an empty object.
	     *
	     * @returns {}
	     */
	    async getAccessToken() {
	        return {};
	    }
	    /**
	     * A required method of the base class.
	     * Always will return an empty object.
	     *
	     * @returns {}
	     */
	    async getRequestHeaders() {
	        return new Headers();
	    }
	}
	passthrough.PassThroughClient = PassThroughClient;
	
	return passthrough;
}

var hasRequiredSrc$1;

function requireSrc$1 () {
	if (hasRequiredSrc$1) return src$5;
	hasRequiredSrc$1 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.GoogleAuth = exports.auth = exports.PassThroughClient = exports.ExecutableError = exports.PluggableAuthClient = exports.DownscopedClient = exports.BaseExternalAccountClient = exports.ExternalAccountClient = exports.IdentityPoolClient = exports.AwsRequestSigner = exports.AwsClient = exports.UserRefreshClient = exports.LoginTicket = exports.ClientAuthentication = exports.OAuth2Client = exports.CodeChallengeMethod = exports.Impersonated = exports.JWT = exports.JWTAccess = exports.IdTokenClient = exports.IAMAuth = exports.GCPEnv = exports.Compute = exports.DEFAULT_UNIVERSE = exports.AuthClient = exports.gaxios = exports.gcpMetadata = void 0;
		// Copyright 2017 Google LLC
		//
		// Licensed under the Apache License, Version 2.0 (the "License");
		// you may not use this file except in compliance with the License.
		// You may obtain a copy of the License at
		//
		//      http://www.apache.org/licenses/LICENSE-2.0
		//
		// Unless required by applicable law or agreed to in writing, software
		// distributed under the License is distributed on an "AS IS" BASIS,
		// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		// See the License for the specific language governing permissions and
		// limitations under the License.
		const googleauth_1 = requireGoogleauth();
		Object.defineProperty(exports, "GoogleAuth", { enumerable: true, get: function () { return googleauth_1.GoogleAuth; } });
		// Export common deps to ensure types/instances are the exact match. Useful
		// for consistently configuring the library across versions.
		exports.gcpMetadata = requireSrc$3();
		exports.gaxios = requireSrc$5();
		var authclient_1 = requireAuthclient();
		Object.defineProperty(exports, "AuthClient", { enumerable: true, get: function () { return authclient_1.AuthClient; } });
		Object.defineProperty(exports, "DEFAULT_UNIVERSE", { enumerable: true, get: function () { return authclient_1.DEFAULT_UNIVERSE; } });
		var computeclient_1 = requireComputeclient();
		Object.defineProperty(exports, "Compute", { enumerable: true, get: function () { return computeclient_1.Compute; } });
		var envDetect_1 = requireEnvDetect();
		Object.defineProperty(exports, "GCPEnv", { enumerable: true, get: function () { return envDetect_1.GCPEnv; } });
		var iam_1 = requireIam();
		Object.defineProperty(exports, "IAMAuth", { enumerable: true, get: function () { return iam_1.IAMAuth; } });
		var idtokenclient_1 = requireIdtokenclient();
		Object.defineProperty(exports, "IdTokenClient", { enumerable: true, get: function () { return idtokenclient_1.IdTokenClient; } });
		var jwtaccess_1 = requireJwtaccess();
		Object.defineProperty(exports, "JWTAccess", { enumerable: true, get: function () { return jwtaccess_1.JWTAccess; } });
		var jwtclient_1 = requireJwtclient();
		Object.defineProperty(exports, "JWT", { enumerable: true, get: function () { return jwtclient_1.JWT; } });
		var impersonated_1 = requireImpersonated();
		Object.defineProperty(exports, "Impersonated", { enumerable: true, get: function () { return impersonated_1.Impersonated; } });
		var oauth2client_1 = requireOauth2client();
		Object.defineProperty(exports, "CodeChallengeMethod", { enumerable: true, get: function () { return oauth2client_1.CodeChallengeMethod; } });
		Object.defineProperty(exports, "OAuth2Client", { enumerable: true, get: function () { return oauth2client_1.OAuth2Client; } });
		Object.defineProperty(exports, "ClientAuthentication", { enumerable: true, get: function () { return oauth2client_1.ClientAuthentication; } });
		var loginticket_1 = requireLoginticket();
		Object.defineProperty(exports, "LoginTicket", { enumerable: true, get: function () { return loginticket_1.LoginTicket; } });
		var refreshclient_1 = requireRefreshclient();
		Object.defineProperty(exports, "UserRefreshClient", { enumerable: true, get: function () { return refreshclient_1.UserRefreshClient; } });
		var awsclient_1 = requireAwsclient();
		Object.defineProperty(exports, "AwsClient", { enumerable: true, get: function () { return awsclient_1.AwsClient; } });
		var awsrequestsigner_1 = requireAwsrequestsigner();
		Object.defineProperty(exports, "AwsRequestSigner", { enumerable: true, get: function () { return awsrequestsigner_1.AwsRequestSigner; } });
		var identitypoolclient_1 = requireIdentitypoolclient();
		Object.defineProperty(exports, "IdentityPoolClient", { enumerable: true, get: function () { return identitypoolclient_1.IdentityPoolClient; } });
		var externalclient_1 = requireExternalclient();
		Object.defineProperty(exports, "ExternalAccountClient", { enumerable: true, get: function () { return externalclient_1.ExternalAccountClient; } });
		var baseexternalclient_1 = requireBaseexternalclient();
		Object.defineProperty(exports, "BaseExternalAccountClient", { enumerable: true, get: function () { return baseexternalclient_1.BaseExternalAccountClient; } });
		var downscopedclient_1 = requireDownscopedclient();
		Object.defineProperty(exports, "DownscopedClient", { enumerable: true, get: function () { return downscopedclient_1.DownscopedClient; } });
		var pluggable_auth_client_1 = requirePluggableAuthClient();
		Object.defineProperty(exports, "PluggableAuthClient", { enumerable: true, get: function () { return pluggable_auth_client_1.PluggableAuthClient; } });
		Object.defineProperty(exports, "ExecutableError", { enumerable: true, get: function () { return pluggable_auth_client_1.ExecutableError; } });
		var passthrough_1 = requirePassthrough();
		Object.defineProperty(exports, "PassThroughClient", { enumerable: true, get: function () { return passthrough_1.PassThroughClient; } });
		const auth = new googleauth_1.GoogleAuth();
		exports.auth = auth;
		
	} (src$5));
	return src$5;
}

var srcExports = requireSrc$1();

/**
 * Google Delete Workforce User Action
 *
 * Deletes a user from Google Cloud Workforce Identity Federation using
 * the Google Cloud IAM API.
 */


/**
 * Helper function to delete a workforce user
 * @private
 */
async function deleteWorkforceUser(workforcePoolId, subjectId, serviceAccountKey) {
  // Parse the service account key
  const keyData = JSON.parse(serviceAccountKey);
  
  // Create a JWT client with the service account credentials
  const authClient = new srcExports.JWT({
    email: keyData.client_email,
    key: keyData.private_key,
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });

  // Construct the API URL
  const url = `https://iam.googleapis.com/v1/locations/global/workforcePools/${workforcePoolId}/subjects/${subjectId}`;

  try {
    // Make the DELETE request using the auth client
    const response = await authClient.request({
      url,
      method: 'DELETE',
    });
    
    return {
      success: true,
      status: response.status,
      data: response.data
    };
  } catch (error) {
    // Return error details for proper handling
    return {
      success: false,
      status: error.response?.status || error.code,
      error: error.response?.data || error.message
    };
  }
}

var script = {
  /**
   * Main execution handler - deletes a workforce user
   * @param {Object} params - Job input parameters
   * @param {string} params.workforcePoolId - The workforce pool ID
   * @param {string} params.subjectId - The subject/user ID to delete
   * @param {Object} context - Execution context with env, secrets, outputs
   * @returns {Object} Job results
   */
  invoke: async (params, context) => {
    const { workforcePoolId, subjectId } = params;

    console.log(`Starting Google Workforce user deletion for subject ${subjectId} in pool ${workforcePoolId}`);

    // Validate inputs
    if (!workforcePoolId || typeof workforcePoolId !== 'string') {
      throw new Error('Invalid or missing workforcePoolId parameter');
    }
    if (!subjectId || typeof subjectId !== 'string') {
      throw new Error('Invalid or missing subjectId parameter');
    }

    // Validate service account key is present
    if (!context.secrets?.GOOGLE_SERVICE_ACCOUNT_KEY) {
      throw new Error('Missing required secret: GOOGLE_SERVICE_ACCOUNT_KEY');
    }

    // Make the API request to delete the user
    const result = await deleteWorkforceUser(
      workforcePoolId,
      subjectId,
      context.secrets.GOOGLE_SERVICE_ACCOUNT_KEY
    );

    // Handle the response
    if (result.success) {
      console.log(`Successfully deleted workforce user ${subjectId}`);
      
      return {
        subjectId: subjectId,
        workforcePoolId: workforcePoolId,
        deleted: true,
        deletedAt: new Date().toISOString()
      };
    }

    // Handle specific error cases
    const statusCode = result.status;
    
    // 404 means user doesn't exist - consider this success (idempotent)
    if (statusCode === 404) {
      console.log(`Workforce user ${subjectId} not found - already deleted`);
      return {
        subjectId: subjectId,
        workforcePoolId: workforcePoolId,
        deleted: true,
        alreadyDeleted: true,
        deletedAt: new Date().toISOString()
      };
    }

    // Handle other errors
    let errorMessage = `Failed to delete workforce user: ${statusCode}`;
    if (result.error?.error?.message) {
      errorMessage = `Failed to delete workforce user: ${result.error.error.message}`;
    } else if (typeof result.error === 'string') {
      errorMessage = `Failed to delete workforce user: ${result.error}`;
    }
    
    console.error('Google API error:', result.error);
    
    const error = new Error(errorMessage);
    error.statusCode = statusCode;
    throw error;
  },

  /**
   * Error recovery handler - framework handles retries by default
   * @param {Object} params - Original params plus error information
   * @param {Object} context - Execution context
   * @returns {Object} Recovery results
   */
  error: async (params, _context) => {
    const { error, subjectId, workforcePoolId } = params;
    console.error(`Workforce user deletion failed for ${subjectId} in pool ${workforcePoolId}: ${error.message}`);

    // Framework handles retries for transient errors (429, 502, 503, 504)
    // Just re-throw the error to let the framework handle it
    throw error;
  },

  /**
   * Graceful shutdown handler - cleanup when job is halted
   * @param {Object} params - Original params plus halt reason
   * @param {Object} context - Execution context
   * @returns {Object} Cleanup results
   */
  halt: async (params, _context) => {
    const { reason, subjectId, workforcePoolId } = params;
    console.log(`Workforce user deletion job is being halted (${reason}) for ${subjectId} in pool ${workforcePoolId}`);

    // No cleanup needed for this simple operation
    // The DELETE request either completed or didn't

    return {
      subjectId: subjectId || 'unknown',
      workforcePoolId: workforcePoolId || 'unknown',
      reason: reason,
      haltedAt: new Date().toISOString(),
      cleanupCompleted: true
    };
  }
};

var dist$1 = {};

var src = {exports: {}};

var browser = {exports: {}};

/**
 * Helpers.
 */

var ms;
var hasRequiredMs;

function requireMs () {
	if (hasRequiredMs) return ms;
	hasRequiredMs = 1;
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var w = d * 7;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} [options]
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */

	ms = function (val, options) {
	  options = options || {};
	  var type = typeof val;
	  if (type === 'string' && val.length > 0) {
	    return parse(val);
	  } else if (type === 'number' && isFinite(val)) {
	    return options.long ? fmtLong(val) : fmtShort(val);
	  }
	  throw new Error(
	    'val is not a non-empty string or a valid number. val=' +
	      JSON.stringify(val)
	  );
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = String(str);
	  if (str.length > 100) {
	    return;
	  }
	  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
	    str
	  );
	  if (!match) {
	    return;
	  }
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'weeks':
	    case 'week':
	    case 'w':
	      return n * w;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	    default:
	      return undefined;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtShort(ms) {
	  var msAbs = Math.abs(ms);
	  if (msAbs >= d) {
	    return Math.round(ms / d) + 'd';
	  }
	  if (msAbs >= h) {
	    return Math.round(ms / h) + 'h';
	  }
	  if (msAbs >= m) {
	    return Math.round(ms / m) + 'm';
	  }
	  if (msAbs >= s) {
	    return Math.round(ms / s) + 's';
	  }
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtLong(ms) {
	  var msAbs = Math.abs(ms);
	  if (msAbs >= d) {
	    return plural(ms, msAbs, d, 'day');
	  }
	  if (msAbs >= h) {
	    return plural(ms, msAbs, h, 'hour');
	  }
	  if (msAbs >= m) {
	    return plural(ms, msAbs, m, 'minute');
	  }
	  if (msAbs >= s) {
	    return plural(ms, msAbs, s, 'second');
	  }
	  return ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, msAbs, n, name) {
	  var isPlural = msAbs >= n * 1.5;
	  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
	}
	return ms;
}

var common;
var hasRequiredCommon;

function requireCommon () {
	if (hasRequiredCommon) return common;
	hasRequiredCommon = 1;
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 */

	function setup(env) {
		createDebug.debug = createDebug;
		createDebug.default = createDebug;
		createDebug.coerce = coerce;
		createDebug.disable = disable;
		createDebug.enable = enable;
		createDebug.enabled = enabled;
		createDebug.humanize = requireMs();
		createDebug.destroy = destroy;

		Object.keys(env).forEach(key => {
			createDebug[key] = env[key];
		});

		/**
		* The currently active debug mode names, and names to skip.
		*/

		createDebug.names = [];
		createDebug.skips = [];

		/**
		* Map of special "%n" handling functions, for the debug "format" argument.
		*
		* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
		*/
		createDebug.formatters = {};

		/**
		* Selects a color for a debug namespace
		* @param {String} namespace The namespace string for the debug instance to be colored
		* @return {Number|String} An ANSI color code for the given namespace
		* @api private
		*/
		function selectColor(namespace) {
			let hash = 0;

			for (let i = 0; i < namespace.length; i++) {
				hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
				hash |= 0; // Convert to 32bit integer
			}

			return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
		}
		createDebug.selectColor = selectColor;

		/**
		* Create a debugger with the given `namespace`.
		*
		* @param {String} namespace
		* @return {Function}
		* @api public
		*/
		function createDebug(namespace) {
			let prevTime;
			let enableOverride = null;
			let namespacesCache;
			let enabledCache;

			function debug(...args) {
				// Disabled?
				if (!debug.enabled) {
					return;
				}

				const self = debug;

				// Set `diff` timestamp
				const curr = Number(new Date());
				const ms = curr - (prevTime || curr);
				self.diff = ms;
				self.prev = prevTime;
				self.curr = curr;
				prevTime = curr;

				args[0] = createDebug.coerce(args[0]);

				if (typeof args[0] !== 'string') {
					// Anything else let's inspect with %O
					args.unshift('%O');
				}

				// Apply any `formatters` transformations
				let index = 0;
				args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
					// If we encounter an escaped % then don't increase the array index
					if (match === '%%') {
						return '%';
					}
					index++;
					const formatter = createDebug.formatters[format];
					if (typeof formatter === 'function') {
						const val = args[index];
						match = formatter.call(self, val);

						// Now we need to remove `args[index]` since it's inlined in the `format`
						args.splice(index, 1);
						index--;
					}
					return match;
				});

				// Apply env-specific formatting (colors, etc.)
				createDebug.formatArgs.call(self, args);

				const logFn = self.log || createDebug.log;
				logFn.apply(self, args);
			}

			debug.namespace = namespace;
			debug.useColors = createDebug.useColors();
			debug.color = createDebug.selectColor(namespace);
			debug.extend = extend;
			debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

			Object.defineProperty(debug, 'enabled', {
				enumerable: true,
				configurable: false,
				get: () => {
					if (enableOverride !== null) {
						return enableOverride;
					}
					if (namespacesCache !== createDebug.namespaces) {
						namespacesCache = createDebug.namespaces;
						enabledCache = createDebug.enabled(namespace);
					}

					return enabledCache;
				},
				set: v => {
					enableOverride = v;
				}
			});

			// Env-specific initialization logic for debug instances
			if (typeof createDebug.init === 'function') {
				createDebug.init(debug);
			}

			return debug;
		}

		function extend(namespace, delimiter) {
			const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
			newDebug.log = this.log;
			return newDebug;
		}

		/**
		* Enables a debug mode by namespaces. This can include modes
		* separated by a colon and wildcards.
		*
		* @param {String} namespaces
		* @api public
		*/
		function enable(namespaces) {
			createDebug.save(namespaces);
			createDebug.namespaces = namespaces;

			createDebug.names = [];
			createDebug.skips = [];

			const split = (typeof namespaces === 'string' ? namespaces : '')
				.trim()
				.replace(/\s+/g, ',')
				.split(',')
				.filter(Boolean);

			for (const ns of split) {
				if (ns[0] === '-') {
					createDebug.skips.push(ns.slice(1));
				} else {
					createDebug.names.push(ns);
				}
			}
		}

		/**
		 * Checks if the given string matches a namespace template, honoring
		 * asterisks as wildcards.
		 *
		 * @param {String} search
		 * @param {String} template
		 * @return {Boolean}
		 */
		function matchesTemplate(search, template) {
			let searchIndex = 0;
			let templateIndex = 0;
			let starIndex = -1;
			let matchIndex = 0;

			while (searchIndex < search.length) {
				if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
					// Match character or proceed with wildcard
					if (template[templateIndex] === '*') {
						starIndex = templateIndex;
						matchIndex = searchIndex;
						templateIndex++; // Skip the '*'
					} else {
						searchIndex++;
						templateIndex++;
					}
				} else if (starIndex !== -1) { // eslint-disable-line no-negated-condition
					// Backtrack to the last '*' and try to match more characters
					templateIndex = starIndex + 1;
					matchIndex++;
					searchIndex = matchIndex;
				} else {
					return false; // No match
				}
			}

			// Handle trailing '*' in template
			while (templateIndex < template.length && template[templateIndex] === '*') {
				templateIndex++;
			}

			return templateIndex === template.length;
		}

		/**
		* Disable debug output.
		*
		* @return {String} namespaces
		* @api public
		*/
		function disable() {
			const namespaces = [
				...createDebug.names,
				...createDebug.skips.map(namespace => '-' + namespace)
			].join(',');
			createDebug.enable('');
			return namespaces;
		}

		/**
		* Returns true if the given mode name is enabled, false otherwise.
		*
		* @param {String} name
		* @return {Boolean}
		* @api public
		*/
		function enabled(name) {
			for (const skip of createDebug.skips) {
				if (matchesTemplate(name, skip)) {
					return false;
				}
			}

			for (const ns of createDebug.names) {
				if (matchesTemplate(name, ns)) {
					return true;
				}
			}

			return false;
		}

		/**
		* Coerce `val`.
		*
		* @param {Mixed} val
		* @return {Mixed}
		* @api private
		*/
		function coerce(val) {
			if (val instanceof Error) {
				return val.stack || val.message;
			}
			return val;
		}

		/**
		* XXX DO NOT USE. This is a temporary stub function.
		* XXX It WILL be removed in the next major release.
		*/
		function destroy() {
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}

		createDebug.enable(createDebug.load());

		return createDebug;
	}

	common = setup;
	return common;
}

/* eslint-env browser */

var hasRequiredBrowser;

function requireBrowser () {
	if (hasRequiredBrowser) return browser.exports;
	hasRequiredBrowser = 1;
	(function (module, exports) {
		/**
		 * This is the web browser implementation of `debug()`.
		 */

		exports.formatArgs = formatArgs;
		exports.save = save;
		exports.load = load;
		exports.useColors = useColors;
		exports.storage = localstorage();
		exports.destroy = (() => {
			let warned = false;

			return () => {
				if (!warned) {
					warned = true;
					console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
				}
			};
		})();

		/**
		 * Colors.
		 */

		exports.colors = [
			'#0000CC',
			'#0000FF',
			'#0033CC',
			'#0033FF',
			'#0066CC',
			'#0066FF',
			'#0099CC',
			'#0099FF',
			'#00CC00',
			'#00CC33',
			'#00CC66',
			'#00CC99',
			'#00CCCC',
			'#00CCFF',
			'#3300CC',
			'#3300FF',
			'#3333CC',
			'#3333FF',
			'#3366CC',
			'#3366FF',
			'#3399CC',
			'#3399FF',
			'#33CC00',
			'#33CC33',
			'#33CC66',
			'#33CC99',
			'#33CCCC',
			'#33CCFF',
			'#6600CC',
			'#6600FF',
			'#6633CC',
			'#6633FF',
			'#66CC00',
			'#66CC33',
			'#9900CC',
			'#9900FF',
			'#9933CC',
			'#9933FF',
			'#99CC00',
			'#99CC33',
			'#CC0000',
			'#CC0033',
			'#CC0066',
			'#CC0099',
			'#CC00CC',
			'#CC00FF',
			'#CC3300',
			'#CC3333',
			'#CC3366',
			'#CC3399',
			'#CC33CC',
			'#CC33FF',
			'#CC6600',
			'#CC6633',
			'#CC9900',
			'#CC9933',
			'#CCCC00',
			'#CCCC33',
			'#FF0000',
			'#FF0033',
			'#FF0066',
			'#FF0099',
			'#FF00CC',
			'#FF00FF',
			'#FF3300',
			'#FF3333',
			'#FF3366',
			'#FF3399',
			'#FF33CC',
			'#FF33FF',
			'#FF6600',
			'#FF6633',
			'#FF9900',
			'#FF9933',
			'#FFCC00',
			'#FFCC33'
		];

		/**
		 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
		 * and the Firebug extension (any Firefox version) are known
		 * to support "%c" CSS customizations.
		 *
		 * TODO: add a `localStorage` variable to explicitly enable/disable colors
		 */

		// eslint-disable-next-line complexity
		function useColors() {
			// NB: In an Electron preload script, document will be defined but not fully
			// initialized. Since we know we're in Chrome, we'll just detect this case
			// explicitly
			if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
				return true;
			}

			// Internet Explorer and Edge do not support colors.
			if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
				return false;
			}

			let m;

			// Is webkit? http://stackoverflow.com/a/16459606/376773
			// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
			// eslint-disable-next-line no-return-assign
			return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
				// Is firebug? http://stackoverflow.com/a/398120/376773
				(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
				// Is firefox >= v31?
				// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
				(typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31) ||
				// Double check webkit in userAgent just in case we are in a worker
				(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
		}

		/**
		 * Colorize log arguments if enabled.
		 *
		 * @api public
		 */

		function formatArgs(args) {
			args[0] = (this.useColors ? '%c' : '') +
				this.namespace +
				(this.useColors ? ' %c' : ' ') +
				args[0] +
				(this.useColors ? '%c ' : ' ') +
				'+' + module.exports.humanize(this.diff);

			if (!this.useColors) {
				return;
			}

			const c = 'color: ' + this.color;
			args.splice(1, 0, c, 'color: inherit');

			// The final "%c" is somewhat tricky, because there could be other
			// arguments passed either before or after the %c, so we need to
			// figure out the correct index to insert the CSS into
			let index = 0;
			let lastC = 0;
			args[0].replace(/%[a-zA-Z%]/g, match => {
				if (match === '%%') {
					return;
				}
				index++;
				if (match === '%c') {
					// We only are interested in the *last* %c
					// (the user may have provided their own)
					lastC = index;
				}
			});

			args.splice(lastC, 0, c);
		}

		/**
		 * Invokes `console.debug()` when available.
		 * No-op when `console.debug` is not a "function".
		 * If `console.debug` is not available, falls back
		 * to `console.log`.
		 *
		 * @api public
		 */
		exports.log = console.debug || console.log || (() => {});

		/**
		 * Save `namespaces`.
		 *
		 * @param {String} namespaces
		 * @api private
		 */
		function save(namespaces) {
			try {
				if (namespaces) {
					exports.storage.setItem('debug', namespaces);
				} else {
					exports.storage.removeItem('debug');
				}
			} catch (error) {
				// Swallow
				// XXX (@Qix-) should we be logging these?
			}
		}

		/**
		 * Load `namespaces`.
		 *
		 * @return {String} returns the previously persisted debug modes
		 * @api private
		 */
		function load() {
			let r;
			try {
				r = exports.storage.getItem('debug') || exports.storage.getItem('DEBUG') ;
			} catch (error) {
				// Swallow
				// XXX (@Qix-) should we be logging these?
			}

			// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
			if (!r && typeof process !== 'undefined' && 'env' in process) {
				r = process.env.DEBUG;
			}

			return r;
		}

		/**
		 * Localstorage attempts to return the localstorage.
		 *
		 * This is necessary because safari throws
		 * when a user disables cookies/localstorage
		 * and you attempt to access it.
		 *
		 * @return {LocalStorage}
		 * @api private
		 */

		function localstorage() {
			try {
				// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
				// The Browser also has localStorage in the global context.
				return localStorage;
			} catch (error) {
				// Swallow
				// XXX (@Qix-) should we be logging these?
			}
		}

		module.exports = requireCommon()(exports);

		const {formatters} = module.exports;

		/**
		 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
		 */

		formatters.j = function (v) {
			try {
				return JSON.stringify(v);
			} catch (error) {
				return '[UnexpectedJSONParseError]: ' + error.message;
			}
		}; 
	} (browser, browser.exports));
	return browser.exports;
}

var node = {exports: {}};

var hasFlag;
var hasRequiredHasFlag;

function requireHasFlag () {
	if (hasRequiredHasFlag) return hasFlag;
	hasRequiredHasFlag = 1;

	hasFlag = (flag, argv = process.argv) => {
		const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
		const position = argv.indexOf(prefix + flag);
		const terminatorPosition = argv.indexOf('--');
		return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
	};
	return hasFlag;
}

var supportsColor_1;
var hasRequiredSupportsColor;

function requireSupportsColor () {
	if (hasRequiredSupportsColor) return supportsColor_1;
	hasRequiredSupportsColor = 1;
	const os = require$$1$1;
	const tty = require$$1$5;
	const hasFlag = requireHasFlag();

	const {env} = process;

	let forceColor;
	if (hasFlag('no-color') ||
		hasFlag('no-colors') ||
		hasFlag('color=false') ||
		hasFlag('color=never')) {
		forceColor = 0;
	} else if (hasFlag('color') ||
		hasFlag('colors') ||
		hasFlag('color=true') ||
		hasFlag('color=always')) {
		forceColor = 1;
	}

	if ('FORCE_COLOR' in env) {
		if (env.FORCE_COLOR === 'true') {
			forceColor = 1;
		} else if (env.FORCE_COLOR === 'false') {
			forceColor = 0;
		} else {
			forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
		}
	}

	function translateLevel(level) {
		if (level === 0) {
			return false;
		}

		return {
			level,
			hasBasic: true,
			has256: level >= 2,
			has16m: level >= 3
		};
	}

	function supportsColor(haveStream, streamIsTTY) {
		if (forceColor === 0) {
			return 0;
		}

		if (hasFlag('color=16m') ||
			hasFlag('color=full') ||
			hasFlag('color=truecolor')) {
			return 3;
		}

		if (hasFlag('color=256')) {
			return 2;
		}

		if (haveStream && !streamIsTTY && forceColor === undefined) {
			return 0;
		}

		const min = forceColor || 0;

		if (env.TERM === 'dumb') {
			return min;
		}

		if (process.platform === 'win32') {
			// Windows 10 build 10586 is the first Windows release that supports 256 colors.
			// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
			const osRelease = os.release().split('.');
			if (
				Number(osRelease[0]) >= 10 &&
				Number(osRelease[2]) >= 10586
			) {
				return Number(osRelease[2]) >= 14931 ? 3 : 2;
			}

			return 1;
		}

		if ('CI' in env) {
			if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
				return 1;
			}

			return min;
		}

		if ('TEAMCITY_VERSION' in env) {
			return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
		}

		if (env.COLORTERM === 'truecolor') {
			return 3;
		}

		if ('TERM_PROGRAM' in env) {
			const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

			switch (env.TERM_PROGRAM) {
				case 'iTerm.app':
					return version >= 3 ? 3 : 2;
				case 'Apple_Terminal':
					return 2;
				// No default
			}
		}

		if (/-256(color)?$/i.test(env.TERM)) {
			return 2;
		}

		if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
			return 1;
		}

		if ('COLORTERM' in env) {
			return 1;
		}

		return min;
	}

	function getSupportLevel(stream) {
		const level = supportsColor(stream, stream && stream.isTTY);
		return translateLevel(level);
	}

	supportsColor_1 = {
		supportsColor: getSupportLevel,
		stdout: translateLevel(supportsColor(true, tty.isatty(1))),
		stderr: translateLevel(supportsColor(true, tty.isatty(2)))
	};
	return supportsColor_1;
}

/**
 * Module dependencies.
 */

var hasRequiredNode;

function requireNode () {
	if (hasRequiredNode) return node.exports;
	hasRequiredNode = 1;
	(function (module, exports) {
		const tty = require$$1$5;
		const util = require$$2;

		/**
		 * This is the Node.js implementation of `debug()`.
		 */

		exports.init = init;
		exports.log = log;
		exports.formatArgs = formatArgs;
		exports.save = save;
		exports.load = load;
		exports.useColors = useColors;
		exports.destroy = util.deprecate(
			() => {},
			'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
		);

		/**
		 * Colors.
		 */

		exports.colors = [6, 2, 3, 4, 5, 1];

		try {
			// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
			// eslint-disable-next-line import/no-extraneous-dependencies
			const supportsColor = requireSupportsColor();

			if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
				exports.colors = [
					20,
					21,
					26,
					27,
					32,
					33,
					38,
					39,
					40,
					41,
					42,
					43,
					44,
					45,
					56,
					57,
					62,
					63,
					68,
					69,
					74,
					75,
					76,
					77,
					78,
					79,
					80,
					81,
					92,
					93,
					98,
					99,
					112,
					113,
					128,
					129,
					134,
					135,
					148,
					149,
					160,
					161,
					162,
					163,
					164,
					165,
					166,
					167,
					168,
					169,
					170,
					171,
					172,
					173,
					178,
					179,
					184,
					185,
					196,
					197,
					198,
					199,
					200,
					201,
					202,
					203,
					204,
					205,
					206,
					207,
					208,
					209,
					214,
					215,
					220,
					221
				];
			}
		} catch (error) {
			// Swallow - we only care if `supports-color` is available; it doesn't have to be.
		}

		/**
		 * Build up the default `inspectOpts` object from the environment variables.
		 *
		 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
		 */

		exports.inspectOpts = Object.keys(process.env).filter(key => {
			return /^debug_/i.test(key);
		}).reduce((obj, key) => {
			// Camel-case
			const prop = key
				.substring(6)
				.toLowerCase()
				.replace(/_([a-z])/g, (_, k) => {
					return k.toUpperCase();
				});

			// Coerce string value into JS value
			let val = process.env[key];
			if (/^(yes|on|true|enabled)$/i.test(val)) {
				val = true;
			} else if (/^(no|off|false|disabled)$/i.test(val)) {
				val = false;
			} else if (val === 'null') {
				val = null;
			} else {
				val = Number(val);
			}

			obj[prop] = val;
			return obj;
		}, {});

		/**
		 * Is stdout a TTY? Colored output is enabled when `true`.
		 */

		function useColors() {
			return 'colors' in exports.inspectOpts ?
				Boolean(exports.inspectOpts.colors) :
				tty.isatty(process.stderr.fd);
		}

		/**
		 * Adds ANSI color escape codes if enabled.
		 *
		 * @api public
		 */

		function formatArgs(args) {
			const {namespace: name, useColors} = this;

			if (useColors) {
				const c = this.color;
				const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
				const prefix = `  ${colorCode};1m${name} \u001B[0m`;

				args[0] = prefix + args[0].split('\n').join('\n' + prefix);
				args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
			} else {
				args[0] = getDate() + name + ' ' + args[0];
			}
		}

		function getDate() {
			if (exports.inspectOpts.hideDate) {
				return '';
			}
			return new Date().toISOString() + ' ';
		}

		/**
		 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
		 */

		function log(...args) {
			return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + '\n');
		}

		/**
		 * Save `namespaces`.
		 *
		 * @param {String} namespaces
		 * @api private
		 */
		function save(namespaces) {
			if (namespaces) {
				process.env.DEBUG = namespaces;
			} else {
				// If you set a process.env field to null or undefined, it gets cast to the
				// string 'null' or 'undefined'. Just delete instead.
				delete process.env.DEBUG;
			}
		}

		/**
		 * Load `namespaces`.
		 *
		 * @return {String} returns the previously persisted debug modes
		 * @api private
		 */

		function load() {
			return process.env.DEBUG;
		}

		/**
		 * Init logic for `debug` instances.
		 *
		 * Create a new `inspectOpts` object in case `useColors` is set
		 * differently for a particular `debug` instance.
		 */

		function init(debug) {
			debug.inspectOpts = {};

			const keys = Object.keys(exports.inspectOpts);
			for (let i = 0; i < keys.length; i++) {
				debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
			}
		}

		module.exports = requireCommon()(exports);

		const {formatters} = module.exports;

		/**
		 * Map %o to `util.inspect()`, all on a single line.
		 */

		formatters.o = function (v) {
			this.inspectOpts.colors = this.useColors;
			return util.inspect(v, this.inspectOpts)
				.split('\n')
				.map(str => str.trim())
				.join(' ');
		};

		/**
		 * Map %O to `util.inspect()`, allowing multiple lines if needed.
		 */

		formatters.O = function (v) {
			this.inspectOpts.colors = this.useColors;
			return util.inspect(v, this.inspectOpts);
		}; 
	} (node, node.exports));
	return node.exports;
}

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

var hasRequiredSrc;

function requireSrc () {
	if (hasRequiredSrc) return src.exports;
	hasRequiredSrc = 1;
	if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
		src.exports = requireBrowser();
	} else {
		src.exports = requireNode();
	}
	return src.exports;
}

var dist = {};

var helpers = {};

var hasRequiredHelpers;

function requireHelpers () {
	if (hasRequiredHelpers) return helpers;
	hasRequiredHelpers = 1;
	var __createBinding = (helpers && helpers.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __setModuleDefault = (helpers && helpers.__setModuleDefault) || (Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	});
	var __importStar = (helpers && helpers.__importStar) || function (mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	};
	Object.defineProperty(helpers, "__esModule", { value: true });
	helpers.req = helpers.json = helpers.toBuffer = void 0;
	const http = __importStar(require$$0$6);
	const https = __importStar(require$$1);
	async function toBuffer(stream) {
	    let length = 0;
	    const chunks = [];
	    for await (const chunk of stream) {
	        length += chunk.length;
	        chunks.push(chunk);
	    }
	    return Buffer.concat(chunks, length);
	}
	helpers.toBuffer = toBuffer;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	async function json(stream) {
	    const buf = await toBuffer(stream);
	    const str = buf.toString('utf8');
	    try {
	        return JSON.parse(str);
	    }
	    catch (_err) {
	        const err = _err;
	        err.message += ` (input: ${str})`;
	        throw err;
	    }
	}
	helpers.json = json;
	function req(url, opts = {}) {
	    const href = typeof url === 'string' ? url : url.href;
	    const req = (href.startsWith('https:') ? https : http).request(url, opts);
	    const promise = new Promise((resolve, reject) => {
	        req
	            .once('response', resolve)
	            .once('error', reject)
	            .end();
	    });
	    req.then = promise.then.bind(promise);
	    return req;
	}
	helpers.req = req;
	
	return helpers;
}

var hasRequiredDist$1;

function requireDist$1 () {
	if (hasRequiredDist$1) return dist;
	hasRequiredDist$1 = 1;
	(function (exports) {
		var __createBinding = (dist && dist.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __setModuleDefault = (dist && dist.__setModuleDefault) || (Object.create ? (function(o, v) {
		    Object.defineProperty(o, "default", { enumerable: true, value: v });
		}) : function(o, v) {
		    o["default"] = v;
		});
		var __importStar = (dist && dist.__importStar) || function (mod) {
		    if (mod && mod.__esModule) return mod;
		    var result = {};
		    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
		    __setModuleDefault(result, mod);
		    return result;
		};
		var __exportStar = (dist && dist.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.Agent = void 0;
		const net = __importStar(require$$0$7);
		const http = __importStar(require$$0$6);
		const https_1 = require$$1;
		__exportStar(requireHelpers(), exports);
		const INTERNAL = Symbol('AgentBaseInternalState');
		class Agent extends http.Agent {
		    constructor(opts) {
		        super(opts);
		        this[INTERNAL] = {};
		    }
		    /**
		     * Determine whether this is an `http` or `https` request.
		     */
		    isSecureEndpoint(options) {
		        if (options) {
		            // First check the `secureEndpoint` property explicitly, since this
		            // means that a parent `Agent` is "passing through" to this instance.
		            // eslint-disable-next-line @typescript-eslint/no-explicit-any
		            if (typeof options.secureEndpoint === 'boolean') {
		                return options.secureEndpoint;
		            }
		            // If no explicit `secure` endpoint, check if `protocol` property is
		            // set. This will usually be the case since using a full string URL
		            // or `URL` instance should be the most common usage.
		            if (typeof options.protocol === 'string') {
		                return options.protocol === 'https:';
		            }
		        }
		        // Finally, if no `protocol` property was set, then fall back to
		        // checking the stack trace of the current call stack, and try to
		        // detect the "https" module.
		        const { stack } = new Error();
		        if (typeof stack !== 'string')
		            return false;
		        return stack
		            .split('\n')
		            .some((l) => l.indexOf('(https.js:') !== -1 ||
		            l.indexOf('node:https:') !== -1);
		    }
		    // In order to support async signatures in `connect()` and Node's native
		    // connection pooling in `http.Agent`, the array of sockets for each origin
		    // has to be updated synchronously. This is so the length of the array is
		    // accurate when `addRequest()` is next called. We achieve this by creating a
		    // fake socket and adding it to `sockets[origin]` and incrementing
		    // `totalSocketCount`.
		    incrementSockets(name) {
		        // If `maxSockets` and `maxTotalSockets` are both Infinity then there is no
		        // need to create a fake socket because Node.js native connection pooling
		        // will never be invoked.
		        if (this.maxSockets === Infinity && this.maxTotalSockets === Infinity) {
		            return null;
		        }
		        // All instances of `sockets` are expected TypeScript errors. The
		        // alternative is to add it as a private property of this class but that
		        // will break TypeScript subclassing.
		        if (!this.sockets[name]) {
		            // @ts-expect-error `sockets` is readonly in `@types/node`
		            this.sockets[name] = [];
		        }
		        const fakeSocket = new net.Socket({ writable: false });
		        this.sockets[name].push(fakeSocket);
		        // @ts-expect-error `totalSocketCount` isn't defined in `@types/node`
		        this.totalSocketCount++;
		        return fakeSocket;
		    }
		    decrementSockets(name, socket) {
		        if (!this.sockets[name] || socket === null) {
		            return;
		        }
		        const sockets = this.sockets[name];
		        const index = sockets.indexOf(socket);
		        if (index !== -1) {
		            sockets.splice(index, 1);
		            // @ts-expect-error  `totalSocketCount` isn't defined in `@types/node`
		            this.totalSocketCount--;
		            if (sockets.length === 0) {
		                // @ts-expect-error `sockets` is readonly in `@types/node`
		                delete this.sockets[name];
		            }
		        }
		    }
		    // In order to properly update the socket pool, we need to call `getName()` on
		    // the core `https.Agent` if it is a secureEndpoint.
		    getName(options) {
		        const secureEndpoint = this.isSecureEndpoint(options);
		        if (secureEndpoint) {
		            // @ts-expect-error `getName()` isn't defined in `@types/node`
		            return https_1.Agent.prototype.getName.call(this, options);
		        }
		        // @ts-expect-error `getName()` isn't defined in `@types/node`
		        return super.getName(options);
		    }
		    createSocket(req, options, cb) {
		        const connectOpts = {
		            ...options,
		            secureEndpoint: this.isSecureEndpoint(options),
		        };
		        const name = this.getName(connectOpts);
		        const fakeSocket = this.incrementSockets(name);
		        Promise.resolve()
		            .then(() => this.connect(req, connectOpts))
		            .then((socket) => {
		            this.decrementSockets(name, fakeSocket);
		            if (socket instanceof http.Agent) {
		                try {
		                    // @ts-expect-error `addRequest()` isn't defined in `@types/node`
		                    return socket.addRequest(req, connectOpts);
		                }
		                catch (err) {
		                    return cb(err);
		                }
		            }
		            this[INTERNAL].currentSocket = socket;
		            // @ts-expect-error `createSocket()` isn't defined in `@types/node`
		            super.createSocket(req, options, cb);
		        }, (err) => {
		            this.decrementSockets(name, fakeSocket);
		            cb(err);
		        });
		    }
		    createConnection() {
		        const socket = this[INTERNAL].currentSocket;
		        this[INTERNAL].currentSocket = undefined;
		        if (!socket) {
		            throw new Error('No socket was returned in the `connect()` function');
		        }
		        return socket;
		    }
		    get defaultPort() {
		        return (this[INTERNAL].defaultPort ??
		            (this.protocol === 'https:' ? 443 : 80));
		    }
		    set defaultPort(v) {
		        if (this[INTERNAL]) {
		            this[INTERNAL].defaultPort = v;
		        }
		    }
		    get protocol() {
		        return (this[INTERNAL].protocol ??
		            (this.isSecureEndpoint() ? 'https:' : 'http:'));
		    }
		    set protocol(v) {
		        if (this[INTERNAL]) {
		            this[INTERNAL].protocol = v;
		        }
		    }
		}
		exports.Agent = Agent;
		
	} (dist));
	return dist;
}

var parseProxyResponse = {};

var hasRequiredParseProxyResponse;

function requireParseProxyResponse () {
	if (hasRequiredParseProxyResponse) return parseProxyResponse;
	hasRequiredParseProxyResponse = 1;
	var __importDefault = (parseProxyResponse && parseProxyResponse.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(parseProxyResponse, "__esModule", { value: true });
	parseProxyResponse.parseProxyResponse = void 0;
	const debug_1 = __importDefault(requireSrc());
	const debug = (0, debug_1.default)('https-proxy-agent:parse-proxy-response');
	function parseProxyResponse$1(socket) {
	    return new Promise((resolve, reject) => {
	        // we need to buffer any HTTP traffic that happens with the proxy before we get
	        // the CONNECT response, so that if the response is anything other than an "200"
	        // response code, then we can re-play the "data" events on the socket once the
	        // HTTP parser is hooked up...
	        let buffersLength = 0;
	        const buffers = [];
	        function read() {
	            const b = socket.read();
	            if (b)
	                ondata(b);
	            else
	                socket.once('readable', read);
	        }
	        function cleanup() {
	            socket.removeListener('end', onend);
	            socket.removeListener('error', onerror);
	            socket.removeListener('readable', read);
	        }
	        function onend() {
	            cleanup();
	            debug('onend');
	            reject(new Error('Proxy connection ended before receiving CONNECT response'));
	        }
	        function onerror(err) {
	            cleanup();
	            debug('onerror %o', err);
	            reject(err);
	        }
	        function ondata(b) {
	            buffers.push(b);
	            buffersLength += b.length;
	            const buffered = Buffer.concat(buffers, buffersLength);
	            const endOfHeaders = buffered.indexOf('\r\n\r\n');
	            if (endOfHeaders === -1) {
	                // keep buffering
	                debug('have not received end of HTTP headers yet...');
	                read();
	                return;
	            }
	            const headerParts = buffered
	                .slice(0, endOfHeaders)
	                .toString('ascii')
	                .split('\r\n');
	            const firstLine = headerParts.shift();
	            if (!firstLine) {
	                socket.destroy();
	                return reject(new Error('No header received from proxy CONNECT response'));
	            }
	            const firstLineParts = firstLine.split(' ');
	            const statusCode = +firstLineParts[1];
	            const statusText = firstLineParts.slice(2).join(' ');
	            const headers = {};
	            for (const header of headerParts) {
	                if (!header)
	                    continue;
	                const firstColon = header.indexOf(':');
	                if (firstColon === -1) {
	                    socket.destroy();
	                    return reject(new Error(`Invalid header from proxy CONNECT response: "${header}"`));
	                }
	                const key = header.slice(0, firstColon).toLowerCase();
	                const value = header.slice(firstColon + 1).trimStart();
	                const current = headers[key];
	                if (typeof current === 'string') {
	                    headers[key] = [current, value];
	                }
	                else if (Array.isArray(current)) {
	                    current.push(value);
	                }
	                else {
	                    headers[key] = value;
	                }
	            }
	            debug('got proxy server response: %o %o', firstLine, headers);
	            cleanup();
	            resolve({
	                connect: {
	                    statusCode,
	                    statusText,
	                    headers,
	                },
	                buffered,
	            });
	        }
	        socket.on('error', onerror);
	        socket.on('end', onend);
	        read();
	    });
	}
	parseProxyResponse.parseProxyResponse = parseProxyResponse$1;
	
	return parseProxyResponse;
}

var hasRequiredDist;

function requireDist () {
	if (hasRequiredDist) return dist$1;
	hasRequiredDist = 1;
	var __createBinding = (dist$1 && dist$1.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __setModuleDefault = (dist$1 && dist$1.__setModuleDefault) || (Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	});
	var __importStar = (dist$1 && dist$1.__importStar) || function (mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	};
	var __importDefault = (dist$1 && dist$1.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(dist$1, "__esModule", { value: true });
	dist$1.HttpsProxyAgent = void 0;
	const net = __importStar(require$$0$7);
	const tls = __importStar(require$$1$6);
	const assert_1 = __importDefault(require$$2$2);
	const debug_1 = __importDefault(requireSrc());
	const agent_base_1 = requireDist$1();
	const url_1 = require$$5;
	const parse_proxy_response_1 = requireParseProxyResponse();
	const debug = (0, debug_1.default)('https-proxy-agent');
	const setServernameFromNonIpHost = (options) => {
	    if (options.servername === undefined &&
	        options.host &&
	        !net.isIP(options.host)) {
	        return {
	            ...options,
	            servername: options.host,
	        };
	    }
	    return options;
	};
	/**
	 * The `HttpsProxyAgent` implements an HTTP Agent subclass that connects to
	 * the specified "HTTP(s) proxy server" in order to proxy HTTPS requests.
	 *
	 * Outgoing HTTP requests are first tunneled through the proxy server using the
	 * `CONNECT` HTTP request method to establish a connection to the proxy server,
	 * and then the proxy server connects to the destination target and issues the
	 * HTTP request from the proxy server.
	 *
	 * `https:` requests have their socket connection upgraded to TLS once
	 * the connection to the proxy server has been established.
	 */
	class HttpsProxyAgent extends agent_base_1.Agent {
	    constructor(proxy, opts) {
	        super(opts);
	        this.options = { path: undefined };
	        this.proxy = typeof proxy === 'string' ? new url_1.URL(proxy) : proxy;
	        this.proxyHeaders = opts?.headers ?? {};
	        debug('Creating new HttpsProxyAgent instance: %o', this.proxy.href);
	        // Trim off the brackets from IPv6 addresses
	        const host = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, '');
	        const port = this.proxy.port
	            ? parseInt(this.proxy.port, 10)
	            : this.proxy.protocol === 'https:'
	                ? 443
	                : 80;
	        this.connectOpts = {
	            // Attempt to negotiate http/1.1 for proxy servers that support http/2
	            ALPNProtocols: ['http/1.1'],
	            ...(opts ? omit(opts, 'headers') : null),
	            host,
	            port,
	        };
	    }
	    /**
	     * Called when the node-core HTTP client library is creating a
	     * new HTTP request.
	     */
	    async connect(req, opts) {
	        const { proxy } = this;
	        if (!opts.host) {
	            throw new TypeError('No "host" provided');
	        }
	        // Create a socket connection to the proxy server.
	        let socket;
	        if (proxy.protocol === 'https:') {
	            debug('Creating `tls.Socket`: %o', this.connectOpts);
	            socket = tls.connect(setServernameFromNonIpHost(this.connectOpts));
	        }
	        else {
	            debug('Creating `net.Socket`: %o', this.connectOpts);
	            socket = net.connect(this.connectOpts);
	        }
	        const headers = typeof this.proxyHeaders === 'function'
	            ? this.proxyHeaders()
	            : { ...this.proxyHeaders };
	        const host = net.isIPv6(opts.host) ? `[${opts.host}]` : opts.host;
	        let payload = `CONNECT ${host}:${opts.port} HTTP/1.1\r\n`;
	        // Inject the `Proxy-Authorization` header if necessary.
	        if (proxy.username || proxy.password) {
	            const auth = `${decodeURIComponent(proxy.username)}:${decodeURIComponent(proxy.password)}`;
	            headers['Proxy-Authorization'] = `Basic ${Buffer.from(auth).toString('base64')}`;
	        }
	        headers.Host = `${host}:${opts.port}`;
	        if (!headers['Proxy-Connection']) {
	            headers['Proxy-Connection'] = this.keepAlive
	                ? 'Keep-Alive'
	                : 'close';
	        }
	        for (const name of Object.keys(headers)) {
	            payload += `${name}: ${headers[name]}\r\n`;
	        }
	        const proxyResponsePromise = (0, parse_proxy_response_1.parseProxyResponse)(socket);
	        socket.write(`${payload}\r\n`);
	        const { connect, buffered } = await proxyResponsePromise;
	        req.emit('proxyConnect', connect);
	        this.emit('proxyConnect', connect, req);
	        if (connect.statusCode === 200) {
	            req.once('socket', resume);
	            if (opts.secureEndpoint) {
	                // The proxy is connecting to a TLS server, so upgrade
	                // this socket connection to a TLS connection.
	                debug('Upgrading socket connection to TLS');
	                return tls.connect({
	                    ...omit(setServernameFromNonIpHost(opts), 'host', 'path', 'port'),
	                    socket,
	                });
	            }
	            return socket;
	        }
	        // Some other status code that's not 200... need to re-play the HTTP
	        // header "data" events onto the socket once the HTTP machinery is
	        // attached so that the node core `http` can parse and handle the
	        // error status code.
	        // Close the original socket, and a new "fake" socket is returned
	        // instead, so that the proxy doesn't get the HTTP request
	        // written to it (which may contain `Authorization` headers or other
	        // sensitive data).
	        //
	        // See: https://hackerone.com/reports/541502
	        socket.destroy();
	        const fakeSocket = new net.Socket({ writable: false });
	        fakeSocket.readable = true;
	        // Need to wait for the "socket" event to re-play the "data" events.
	        req.once('socket', (s) => {
	            debug('Replaying proxy buffer for failed request');
	            (0, assert_1.default)(s.listenerCount('data') > 0);
	            // Replay the "buffered" Buffer onto the fake `socket`, since at
	            // this point the HTTP module machinery has been hooked up for
	            // the user.
	            s.push(buffered);
	            s.push(null);
	        });
	        return fakeSocket;
	    }
	}
	HttpsProxyAgent.protocols = ['http', 'https'];
	dist$1.HttpsProxyAgent = HttpsProxyAgent;
	function resume(socket) {
	    socket.resume();
	}
	function omit(obj, ...keys) {
	    const ret = {};
	    let key;
	    for (key in obj) {
	        if (!keys.includes(key)) {
	            ret[key] = obj[key];
	        }
	    }
	    return ret;
	}
	
	return dist$1;
}

var distExports = requireDist();

var index$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null
}, [distExports]);

/**
 * Returns a `Buffer` instance from the given data URI `uri`.
 *
 * @param {String} uri Data URI to turn into a Buffer instance
 * @returns {Buffer} Buffer instance from Data URI
 * @api public
 */
function dataUriToBuffer(uri) {
    if (!/^data:/i.test(uri)) {
        throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
    }
    // strip newlines
    uri = uri.replace(/\r?\n/g, '');
    // split the URI up into the "metadata" and the "data" portions
    const firstComma = uri.indexOf(',');
    if (firstComma === -1 || firstComma <= 4) {
        throw new TypeError('malformed data: URI');
    }
    // remove the "data:" scheme and parse the metadata
    const meta = uri.substring(5, firstComma).split(';');
    let charset = '';
    let base64 = false;
    const type = meta[0] || 'text/plain';
    let typeFull = type;
    for (let i = 1; i < meta.length; i++) {
        if (meta[i] === 'base64') {
            base64 = true;
        }
        else if (meta[i]) {
            typeFull += `;${meta[i]}`;
            if (meta[i].indexOf('charset=') === 0) {
                charset = meta[i].substring(8);
            }
        }
    }
    // defaults to US-ASCII only if type is not provided
    if (!meta[0] && !charset.length) {
        typeFull += ';charset=US-ASCII';
        charset = 'US-ASCII';
    }
    // get the encoded data portion and decode URI-encoded chars
    const encoding = base64 ? 'base64' : 'ascii';
    const data = unescape(uri.substring(firstComma + 1));
    const buffer = Buffer.from(data, encoding);
    // set `.type` and `.typeFull` properties to MIME type
    buffer.type = type;
    buffer.typeFull = typeFull;
    // set the `.charset` property
    buffer.charset = charset;
    return buffer;
}

var streams = {};

var ponyfill_es2018$1 = {exports: {}};

/**
 * @license
 * web-streams-polyfill v3.3.3
 * Copyright 2024 Mattias Buelens, Diwank Singh Tomer and other contributors.
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */
var ponyfill_es2018 = ponyfill_es2018$1.exports;

var hasRequiredPonyfill_es2018;

function requirePonyfill_es2018 () {
	if (hasRequiredPonyfill_es2018) return ponyfill_es2018$1.exports;
	hasRequiredPonyfill_es2018 = 1;
	(function (module, exports) {
		(function (global, factory) {
		    factory(exports) ;
		})(ponyfill_es2018, (function (exports) {
		    function noop() {
		        return undefined;
		    }

		    function typeIsObject(x) {
		        return (typeof x === 'object' && x !== null) || typeof x === 'function';
		    }
		    const rethrowAssertionErrorRejection = noop;
		    function setFunctionName(fn, name) {
		        try {
		            Object.defineProperty(fn, 'name', {
		                value: name,
		                configurable: true
		            });
		        }
		        catch (_a) {
		            // This property is non-configurable in older browsers, so ignore if this throws.
		            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#browser_compatibility
		        }
		    }

		    const originalPromise = Promise;
		    const originalPromiseThen = Promise.prototype.then;
		    const originalPromiseReject = Promise.reject.bind(originalPromise);
		    // https://webidl.spec.whatwg.org/#a-new-promise
		    function newPromise(executor) {
		        return new originalPromise(executor);
		    }
		    // https://webidl.spec.whatwg.org/#a-promise-resolved-with
		    function promiseResolvedWith(value) {
		        return newPromise(resolve => resolve(value));
		    }
		    // https://webidl.spec.whatwg.org/#a-promise-rejected-with
		    function promiseRejectedWith(reason) {
		        return originalPromiseReject(reason);
		    }
		    function PerformPromiseThen(promise, onFulfilled, onRejected) {
		        // There doesn't appear to be any way to correctly emulate the behaviour from JavaScript, so this is just an
		        // approximation.
		        return originalPromiseThen.call(promise, onFulfilled, onRejected);
		    }
		    // Bluebird logs a warning when a promise is created within a fulfillment handler, but then isn't returned
		    // from that handler. To prevent this, return null instead of void from all handlers.
		    // http://bluebirdjs.com/docs/warning-explanations.html#warning-a-promise-was-created-in-a-handler-but-was-not-returned-from-it
		    function uponPromise(promise, onFulfilled, onRejected) {
		        PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), undefined, rethrowAssertionErrorRejection);
		    }
		    function uponFulfillment(promise, onFulfilled) {
		        uponPromise(promise, onFulfilled);
		    }
		    function uponRejection(promise, onRejected) {
		        uponPromise(promise, undefined, onRejected);
		    }
		    function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
		        return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
		    }
		    function setPromiseIsHandledToTrue(promise) {
		        PerformPromiseThen(promise, undefined, rethrowAssertionErrorRejection);
		    }
		    let _queueMicrotask = callback => {
		        if (typeof queueMicrotask === 'function') {
		            _queueMicrotask = queueMicrotask;
		        }
		        else {
		            const resolvedPromise = promiseResolvedWith(undefined);
		            _queueMicrotask = cb => PerformPromiseThen(resolvedPromise, cb);
		        }
		        return _queueMicrotask(callback);
		    };
		    function reflectCall(F, V, args) {
		        if (typeof F !== 'function') {
		            throw new TypeError('Argument is not a function');
		        }
		        return Function.prototype.apply.call(F, V, args);
		    }
		    function promiseCall(F, V, args) {
		        try {
		            return promiseResolvedWith(reflectCall(F, V, args));
		        }
		        catch (value) {
		            return promiseRejectedWith(value);
		        }
		    }

		    // Original from Chromium
		    // https://chromium.googlesource.com/chromium/src/+/0aee4434a4dba42a42abaea9bfbc0cd196a63bc1/third_party/blink/renderer/core/streams/SimpleQueue.js
		    const QUEUE_MAX_ARRAY_SIZE = 16384;
		    /**
		     * Simple queue structure.
		     *
		     * Avoids scalability issues with using a packed array directly by using
		     * multiple arrays in a linked list and keeping the array size bounded.
		     */
		    class SimpleQueue {
		        constructor() {
		            this._cursor = 0;
		            this._size = 0;
		            // _front and _back are always defined.
		            this._front = {
		                _elements: [],
		                _next: undefined
		            };
		            this._back = this._front;
		            // The cursor is used to avoid calling Array.shift().
		            // It contains the index of the front element of the array inside the
		            // front-most node. It is always in the range [0, QUEUE_MAX_ARRAY_SIZE).
		            this._cursor = 0;
		            // When there is only one node, size === elements.length - cursor.
		            this._size = 0;
		        }
		        get length() {
		            return this._size;
		        }
		        // For exception safety, this method is structured in order:
		        // 1. Read state
		        // 2. Calculate required state mutations
		        // 3. Perform state mutations
		        push(element) {
		            const oldBack = this._back;
		            let newBack = oldBack;
		            if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
		                newBack = {
		                    _elements: [],
		                    _next: undefined
		                };
		            }
		            // push() is the mutation most likely to throw an exception, so it
		            // goes first.
		            oldBack._elements.push(element);
		            if (newBack !== oldBack) {
		                this._back = newBack;
		                oldBack._next = newBack;
		            }
		            ++this._size;
		        }
		        // Like push(), shift() follows the read -> calculate -> mutate pattern for
		        // exception safety.
		        shift() { // must not be called on an empty queue
		            const oldFront = this._front;
		            let newFront = oldFront;
		            const oldCursor = this._cursor;
		            let newCursor = oldCursor + 1;
		            const elements = oldFront._elements;
		            const element = elements[oldCursor];
		            if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
		                newFront = oldFront._next;
		                newCursor = 0;
		            }
		            // No mutations before this point.
		            --this._size;
		            this._cursor = newCursor;
		            if (oldFront !== newFront) {
		                this._front = newFront;
		            }
		            // Permit shifted element to be garbage collected.
		            elements[oldCursor] = undefined;
		            return element;
		        }
		        // The tricky thing about forEach() is that it can be called
		        // re-entrantly. The queue may be mutated inside the callback. It is easy to
		        // see that push() within the callback has no negative effects since the end
		        // of the queue is checked for on every iteration. If shift() is called
		        // repeatedly within the callback then the next iteration may return an
		        // element that has been removed. In this case the callback will be called
		        // with undefined values until we either "catch up" with elements that still
		        // exist or reach the back of the queue.
		        forEach(callback) {
		            let i = this._cursor;
		            let node = this._front;
		            let elements = node._elements;
		            while (i !== elements.length || node._next !== undefined) {
		                if (i === elements.length) {
		                    node = node._next;
		                    elements = node._elements;
		                    i = 0;
		                    if (elements.length === 0) {
		                        break;
		                    }
		                }
		                callback(elements[i]);
		                ++i;
		            }
		        }
		        // Return the element that would be returned if shift() was called now,
		        // without modifying the queue.
		        peek() { // must not be called on an empty queue
		            const front = this._front;
		            const cursor = this._cursor;
		            return front._elements[cursor];
		        }
		    }

		    const AbortSteps = Symbol('[[AbortSteps]]');
		    const ErrorSteps = Symbol('[[ErrorSteps]]');
		    const CancelSteps = Symbol('[[CancelSteps]]');
		    const PullSteps = Symbol('[[PullSteps]]');
		    const ReleaseSteps = Symbol('[[ReleaseSteps]]');

		    function ReadableStreamReaderGenericInitialize(reader, stream) {
		        reader._ownerReadableStream = stream;
		        stream._reader = reader;
		        if (stream._state === 'readable') {
		            defaultReaderClosedPromiseInitialize(reader);
		        }
		        else if (stream._state === 'closed') {
		            defaultReaderClosedPromiseInitializeAsResolved(reader);
		        }
		        else {
		            defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
		        }
		    }
		    // A client of ReadableStreamDefaultReader and ReadableStreamBYOBReader may use these functions directly to bypass state
		    // check.
		    function ReadableStreamReaderGenericCancel(reader, reason) {
		        const stream = reader._ownerReadableStream;
		        return ReadableStreamCancel(stream, reason);
		    }
		    function ReadableStreamReaderGenericRelease(reader) {
		        const stream = reader._ownerReadableStream;
		        if (stream._state === 'readable') {
		            defaultReaderClosedPromiseReject(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
		        }
		        else {
		            defaultReaderClosedPromiseResetToRejected(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
		        }
		        stream._readableStreamController[ReleaseSteps]();
		        stream._reader = undefined;
		        reader._ownerReadableStream = undefined;
		    }
		    // Helper functions for the readers.
		    function readerLockException(name) {
		        return new TypeError('Cannot ' + name + ' a stream using a released reader');
		    }
		    // Helper functions for the ReadableStreamDefaultReader.
		    function defaultReaderClosedPromiseInitialize(reader) {
		        reader._closedPromise = newPromise((resolve, reject) => {
		            reader._closedPromise_resolve = resolve;
		            reader._closedPromise_reject = reject;
		        });
		    }
		    function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
		        defaultReaderClosedPromiseInitialize(reader);
		        defaultReaderClosedPromiseReject(reader, reason);
		    }
		    function defaultReaderClosedPromiseInitializeAsResolved(reader) {
		        defaultReaderClosedPromiseInitialize(reader);
		        defaultReaderClosedPromiseResolve(reader);
		    }
		    function defaultReaderClosedPromiseReject(reader, reason) {
		        if (reader._closedPromise_reject === undefined) {
		            return;
		        }
		        setPromiseIsHandledToTrue(reader._closedPromise);
		        reader._closedPromise_reject(reason);
		        reader._closedPromise_resolve = undefined;
		        reader._closedPromise_reject = undefined;
		    }
		    function defaultReaderClosedPromiseResetToRejected(reader, reason) {
		        defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
		    }
		    function defaultReaderClosedPromiseResolve(reader) {
		        if (reader._closedPromise_resolve === undefined) {
		            return;
		        }
		        reader._closedPromise_resolve(undefined);
		        reader._closedPromise_resolve = undefined;
		        reader._closedPromise_reject = undefined;
		    }

		    /// <reference lib="es2015.core" />
		    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#Polyfill
		    const NumberIsFinite = Number.isFinite || function (x) {
		        return typeof x === 'number' && isFinite(x);
		    };

		    /// <reference lib="es2015.core" />
		    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#Polyfill
		    const MathTrunc = Math.trunc || function (v) {
		        return v < 0 ? Math.ceil(v) : Math.floor(v);
		    };

		    // https://heycam.github.io/webidl/#idl-dictionaries
		    function isDictionary(x) {
		        return typeof x === 'object' || typeof x === 'function';
		    }
		    function assertDictionary(obj, context) {
		        if (obj !== undefined && !isDictionary(obj)) {
		            throw new TypeError(`${context} is not an object.`);
		        }
		    }
		    // https://heycam.github.io/webidl/#idl-callback-functions
		    function assertFunction(x, context) {
		        if (typeof x !== 'function') {
		            throw new TypeError(`${context} is not a function.`);
		        }
		    }
		    // https://heycam.github.io/webidl/#idl-object
		    function isObject(x) {
		        return (typeof x === 'object' && x !== null) || typeof x === 'function';
		    }
		    function assertObject(x, context) {
		        if (!isObject(x)) {
		            throw new TypeError(`${context} is not an object.`);
		        }
		    }
		    function assertRequiredArgument(x, position, context) {
		        if (x === undefined) {
		            throw new TypeError(`Parameter ${position} is required in '${context}'.`);
		        }
		    }
		    function assertRequiredField(x, field, context) {
		        if (x === undefined) {
		            throw new TypeError(`${field} is required in '${context}'.`);
		        }
		    }
		    // https://heycam.github.io/webidl/#idl-unrestricted-double
		    function convertUnrestrictedDouble(value) {
		        return Number(value);
		    }
		    function censorNegativeZero(x) {
		        return x === 0 ? 0 : x;
		    }
		    function integerPart(x) {
		        return censorNegativeZero(MathTrunc(x));
		    }
		    // https://heycam.github.io/webidl/#idl-unsigned-long-long
		    function convertUnsignedLongLongWithEnforceRange(value, context) {
		        const lowerBound = 0;
		        const upperBound = Number.MAX_SAFE_INTEGER;
		        let x = Number(value);
		        x = censorNegativeZero(x);
		        if (!NumberIsFinite(x)) {
		            throw new TypeError(`${context} is not a finite number`);
		        }
		        x = integerPart(x);
		        if (x < lowerBound || x > upperBound) {
		            throw new TypeError(`${context} is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`);
		        }
		        if (!NumberIsFinite(x) || x === 0) {
		            return 0;
		        }
		        // TODO Use BigInt if supported?
		        // let xBigInt = BigInt(integerPart(x));
		        // xBigInt = BigInt.asUintN(64, xBigInt);
		        // return Number(xBigInt);
		        return x;
		    }

		    function assertReadableStream(x, context) {
		        if (!IsReadableStream(x)) {
		            throw new TypeError(`${context} is not a ReadableStream.`);
		        }
		    }

		    // Abstract operations for the ReadableStream.
		    function AcquireReadableStreamDefaultReader(stream) {
		        return new ReadableStreamDefaultReader(stream);
		    }
		    // ReadableStream API exposed for controllers.
		    function ReadableStreamAddReadRequest(stream, readRequest) {
		        stream._reader._readRequests.push(readRequest);
		    }
		    function ReadableStreamFulfillReadRequest(stream, chunk, done) {
		        const reader = stream._reader;
		        const readRequest = reader._readRequests.shift();
		        if (done) {
		            readRequest._closeSteps();
		        }
		        else {
		            readRequest._chunkSteps(chunk);
		        }
		    }
		    function ReadableStreamGetNumReadRequests(stream) {
		        return stream._reader._readRequests.length;
		    }
		    function ReadableStreamHasDefaultReader(stream) {
		        const reader = stream._reader;
		        if (reader === undefined) {
		            return false;
		        }
		        if (!IsReadableStreamDefaultReader(reader)) {
		            return false;
		        }
		        return true;
		    }
		    /**
		     * A default reader vended by a {@link ReadableStream}.
		     *
		     * @public
		     */
		    class ReadableStreamDefaultReader {
		        constructor(stream) {
		            assertRequiredArgument(stream, 1, 'ReadableStreamDefaultReader');
		            assertReadableStream(stream, 'First parameter');
		            if (IsReadableStreamLocked(stream)) {
		                throw new TypeError('This stream has already been locked for exclusive reading by another reader');
		            }
		            ReadableStreamReaderGenericInitialize(this, stream);
		            this._readRequests = new SimpleQueue();
		        }
		        /**
		         * Returns a promise that will be fulfilled when the stream becomes closed,
		         * or rejected if the stream ever errors or the reader's lock is released before the stream finishes closing.
		         */
		        get closed() {
		            if (!IsReadableStreamDefaultReader(this)) {
		                return promiseRejectedWith(defaultReaderBrandCheckException('closed'));
		            }
		            return this._closedPromise;
		        }
		        /**
		         * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
		         */
		        cancel(reason = undefined) {
		            if (!IsReadableStreamDefaultReader(this)) {
		                return promiseRejectedWith(defaultReaderBrandCheckException('cancel'));
		            }
		            if (this._ownerReadableStream === undefined) {
		                return promiseRejectedWith(readerLockException('cancel'));
		            }
		            return ReadableStreamReaderGenericCancel(this, reason);
		        }
		        /**
		         * Returns a promise that allows access to the next chunk from the stream's internal queue, if available.
		         *
		         * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
		         */
		        read() {
		            if (!IsReadableStreamDefaultReader(this)) {
		                return promiseRejectedWith(defaultReaderBrandCheckException('read'));
		            }
		            if (this._ownerReadableStream === undefined) {
		                return promiseRejectedWith(readerLockException('read from'));
		            }
		            let resolvePromise;
		            let rejectPromise;
		            const promise = newPromise((resolve, reject) => {
		                resolvePromise = resolve;
		                rejectPromise = reject;
		            });
		            const readRequest = {
		                _chunkSteps: chunk => resolvePromise({ value: chunk, done: false }),
		                _closeSteps: () => resolvePromise({ value: undefined, done: true }),
		                _errorSteps: e => rejectPromise(e)
		            };
		            ReadableStreamDefaultReaderRead(this, readRequest);
		            return promise;
		        }
		        /**
		         * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
		         * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
		         * from now on; otherwise, the reader will appear closed.
		         *
		         * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
		         * the reader's {@link ReadableStreamDefaultReader.read | read()} method has not yet been settled. Attempting to
		         * do so will throw a `TypeError` and leave the reader locked to the stream.
		         */
		        releaseLock() {
		            if (!IsReadableStreamDefaultReader(this)) {
		                throw defaultReaderBrandCheckException('releaseLock');
		            }
		            if (this._ownerReadableStream === undefined) {
		                return;
		            }
		            ReadableStreamDefaultReaderRelease(this);
		        }
		    }
		    Object.defineProperties(ReadableStreamDefaultReader.prototype, {
		        cancel: { enumerable: true },
		        read: { enumerable: true },
		        releaseLock: { enumerable: true },
		        closed: { enumerable: true }
		    });
		    setFunctionName(ReadableStreamDefaultReader.prototype.cancel, 'cancel');
		    setFunctionName(ReadableStreamDefaultReader.prototype.read, 'read');
		    setFunctionName(ReadableStreamDefaultReader.prototype.releaseLock, 'releaseLock');
		    if (typeof Symbol.toStringTag === 'symbol') {
		        Object.defineProperty(ReadableStreamDefaultReader.prototype, Symbol.toStringTag, {
		            value: 'ReadableStreamDefaultReader',
		            configurable: true
		        });
		    }
		    // Abstract operations for the readers.
		    function IsReadableStreamDefaultReader(x) {
		        if (!typeIsObject(x)) {
		            return false;
		        }
		        if (!Object.prototype.hasOwnProperty.call(x, '_readRequests')) {
		            return false;
		        }
		        return x instanceof ReadableStreamDefaultReader;
		    }
		    function ReadableStreamDefaultReaderRead(reader, readRequest) {
		        const stream = reader._ownerReadableStream;
		        stream._disturbed = true;
		        if (stream._state === 'closed') {
		            readRequest._closeSteps();
		        }
		        else if (stream._state === 'errored') {
		            readRequest._errorSteps(stream._storedError);
		        }
		        else {
		            stream._readableStreamController[PullSteps](readRequest);
		        }
		    }
		    function ReadableStreamDefaultReaderRelease(reader) {
		        ReadableStreamReaderGenericRelease(reader);
		        const e = new TypeError('Reader was released');
		        ReadableStreamDefaultReaderErrorReadRequests(reader, e);
		    }
		    function ReadableStreamDefaultReaderErrorReadRequests(reader, e) {
		        const readRequests = reader._readRequests;
		        reader._readRequests = new SimpleQueue();
		        readRequests.forEach(readRequest => {
		            readRequest._errorSteps(e);
		        });
		    }
		    // Helper functions for the ReadableStreamDefaultReader.
		    function defaultReaderBrandCheckException(name) {
		        return new TypeError(`ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`);
		    }

		    /// <reference lib="es2018.asynciterable" />
		    /* eslint-disable @typescript-eslint/no-empty-function */
		    const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function* () { }).prototype);

		    /// <reference lib="es2018.asynciterable" />
		    class ReadableStreamAsyncIteratorImpl {
		        constructor(reader, preventCancel) {
		            this._ongoingPromise = undefined;
		            this._isFinished = false;
		            this._reader = reader;
		            this._preventCancel = preventCancel;
		        }
		        next() {
		            const nextSteps = () => this._nextSteps();
		            this._ongoingPromise = this._ongoingPromise ?
		                transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) :
		                nextSteps();
		            return this._ongoingPromise;
		        }
		        return(value) {
		            const returnSteps = () => this._returnSteps(value);
		            return this._ongoingPromise ?
		                transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) :
		                returnSteps();
		        }
		        _nextSteps() {
		            if (this._isFinished) {
		                return Promise.resolve({ value: undefined, done: true });
		            }
		            const reader = this._reader;
		            let resolvePromise;
		            let rejectPromise;
		            const promise = newPromise((resolve, reject) => {
		                resolvePromise = resolve;
		                rejectPromise = reject;
		            });
		            const readRequest = {
		                _chunkSteps: chunk => {
		                    this._ongoingPromise = undefined;
		                    // This needs to be delayed by one microtask, otherwise we stop pulling too early which breaks a test.
		                    // FIXME Is this a bug in the specification, or in the test?
		                    _queueMicrotask(() => resolvePromise({ value: chunk, done: false }));
		                },
		                _closeSteps: () => {
		                    this._ongoingPromise = undefined;
		                    this._isFinished = true;
		                    ReadableStreamReaderGenericRelease(reader);
		                    resolvePromise({ value: undefined, done: true });
		                },
		                _errorSteps: reason => {
		                    this._ongoingPromise = undefined;
		                    this._isFinished = true;
		                    ReadableStreamReaderGenericRelease(reader);
		                    rejectPromise(reason);
		                }
		            };
		            ReadableStreamDefaultReaderRead(reader, readRequest);
		            return promise;
		        }
		        _returnSteps(value) {
		            if (this._isFinished) {
		                return Promise.resolve({ value, done: true });
		            }
		            this._isFinished = true;
		            const reader = this._reader;
		            if (!this._preventCancel) {
		                const result = ReadableStreamReaderGenericCancel(reader, value);
		                ReadableStreamReaderGenericRelease(reader);
		                return transformPromiseWith(result, () => ({ value, done: true }));
		            }
		            ReadableStreamReaderGenericRelease(reader);
		            return promiseResolvedWith({ value, done: true });
		        }
		    }
		    const ReadableStreamAsyncIteratorPrototype = {
		        next() {
		            if (!IsReadableStreamAsyncIterator(this)) {
		                return promiseRejectedWith(streamAsyncIteratorBrandCheckException('next'));
		            }
		            return this._asyncIteratorImpl.next();
		        },
		        return(value) {
		            if (!IsReadableStreamAsyncIterator(this)) {
		                return promiseRejectedWith(streamAsyncIteratorBrandCheckException('return'));
		            }
		            return this._asyncIteratorImpl.return(value);
		        }
		    };
		    Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype, AsyncIteratorPrototype);
		    // Abstract operations for the ReadableStream.
		    function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
		        const reader = AcquireReadableStreamDefaultReader(stream);
		        const impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
		        const iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
		        iterator._asyncIteratorImpl = impl;
		        return iterator;
		    }
		    function IsReadableStreamAsyncIterator(x) {
		        if (!typeIsObject(x)) {
		            return false;
		        }
		        if (!Object.prototype.hasOwnProperty.call(x, '_asyncIteratorImpl')) {
		            return false;
		        }
		        try {
		            // noinspection SuspiciousTypeOfGuard
		            return x._asyncIteratorImpl instanceof
		                ReadableStreamAsyncIteratorImpl;
		        }
		        catch (_a) {
		            return false;
		        }
		    }
		    // Helper functions for the ReadableStream.
		    function streamAsyncIteratorBrandCheckException(name) {
		        return new TypeError(`ReadableStreamAsyncIterator.${name} can only be used on a ReadableSteamAsyncIterator`);
		    }

		    /// <reference lib="es2015.core" />
		    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#Polyfill
		    const NumberIsNaN = Number.isNaN || function (x) {
		        // eslint-disable-next-line no-self-compare
		        return x !== x;
		    };

		    var _a, _b, _c;
		    function CreateArrayFromList(elements) {
		        // We use arrays to represent lists, so this is basically a no-op.
		        // Do a slice though just in case we happen to depend on the unique-ness.
		        return elements.slice();
		    }
		    function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
		        new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
		    }
		    let TransferArrayBuffer = (O) => {
		        if (typeof O.transfer === 'function') {
		            TransferArrayBuffer = buffer => buffer.transfer();
		        }
		        else if (typeof structuredClone === 'function') {
		            TransferArrayBuffer = buffer => structuredClone(buffer, { transfer: [buffer] });
		        }
		        else {
		            // Not implemented correctly
		            TransferArrayBuffer = buffer => buffer;
		        }
		        return TransferArrayBuffer(O);
		    };
		    let IsDetachedBuffer = (O) => {
		        if (typeof O.detached === 'boolean') {
		            IsDetachedBuffer = buffer => buffer.detached;
		        }
		        else {
		            // Not implemented correctly
		            IsDetachedBuffer = buffer => buffer.byteLength === 0;
		        }
		        return IsDetachedBuffer(O);
		    };
		    function ArrayBufferSlice(buffer, begin, end) {
		        // ArrayBuffer.prototype.slice is not available on IE10
		        // https://www.caniuse.com/mdn-javascript_builtins_arraybuffer_slice
		        if (buffer.slice) {
		            return buffer.slice(begin, end);
		        }
		        const length = end - begin;
		        const slice = new ArrayBuffer(length);
		        CopyDataBlockBytes(slice, 0, buffer, begin, length);
		        return slice;
		    }
		    function GetMethod(receiver, prop) {
		        const func = receiver[prop];
		        if (func === undefined || func === null) {
		            return undefined;
		        }
		        if (typeof func !== 'function') {
		            throw new TypeError(`${String(prop)} is not a function`);
		        }
		        return func;
		    }
		    function CreateAsyncFromSyncIterator(syncIteratorRecord) {
		        // Instead of re-implementing CreateAsyncFromSyncIterator and %AsyncFromSyncIteratorPrototype%,
		        // we use yield* inside an async generator function to achieve the same result.
		        // Wrap the sync iterator inside a sync iterable, so we can use it with yield*.
		        const syncIterable = {
		            [Symbol.iterator]: () => syncIteratorRecord.iterator
		        };
		        // Create an async generator function and immediately invoke it.
		        const asyncIterator = (async function* () {
		            return yield* syncIterable;
		        }());
		        // Return as an async iterator record.
		        const nextMethod = asyncIterator.next;
		        return { iterator: asyncIterator, nextMethod, done: false };
		    }
		    // Aligns with core-js/modules/es.symbol.async-iterator.js
		    const SymbolAsyncIterator = (_c = (_a = Symbol.asyncIterator) !== null && _a !== void 0 ? _a : (_b = Symbol.for) === null || _b === void 0 ? void 0 : _b.call(Symbol, 'Symbol.asyncIterator')) !== null && _c !== void 0 ? _c : '@@asyncIterator';
		    function GetIterator(obj, hint = 'sync', method) {
		        if (method === undefined) {
		            if (hint === 'async') {
		                method = GetMethod(obj, SymbolAsyncIterator);
		                if (method === undefined) {
		                    const syncMethod = GetMethod(obj, Symbol.iterator);
		                    const syncIteratorRecord = GetIterator(obj, 'sync', syncMethod);
		                    return CreateAsyncFromSyncIterator(syncIteratorRecord);
		                }
		            }
		            else {
		                method = GetMethod(obj, Symbol.iterator);
		            }
		        }
		        if (method === undefined) {
		            throw new TypeError('The object is not iterable');
		        }
		        const iterator = reflectCall(method, obj, []);
		        if (!typeIsObject(iterator)) {
		            throw new TypeError('The iterator method must return an object');
		        }
		        const nextMethod = iterator.next;
		        return { iterator, nextMethod, done: false };
		    }
		    function IteratorNext(iteratorRecord) {
		        const result = reflectCall(iteratorRecord.nextMethod, iteratorRecord.iterator, []);
		        if (!typeIsObject(result)) {
		            throw new TypeError('The iterator.next() method must return an object');
		        }
		        return result;
		    }
		    function IteratorComplete(iterResult) {
		        return Boolean(iterResult.done);
		    }
		    function IteratorValue(iterResult) {
		        return iterResult.value;
		    }

		    function IsNonNegativeNumber(v) {
		        if (typeof v !== 'number') {
		            return false;
		        }
		        if (NumberIsNaN(v)) {
		            return false;
		        }
		        if (v < 0) {
		            return false;
		        }
		        return true;
		    }
		    function CloneAsUint8Array(O) {
		        const buffer = ArrayBufferSlice(O.buffer, O.byteOffset, O.byteOffset + O.byteLength);
		        return new Uint8Array(buffer);
		    }

		    function DequeueValue(container) {
		        const pair = container._queue.shift();
		        container._queueTotalSize -= pair.size;
		        if (container._queueTotalSize < 0) {
		            container._queueTotalSize = 0;
		        }
		        return pair.value;
		    }
		    function EnqueueValueWithSize(container, value, size) {
		        if (!IsNonNegativeNumber(size) || size === Infinity) {
		            throw new RangeError('Size must be a finite, non-NaN, non-negative number.');
		        }
		        container._queue.push({ value, size });
		        container._queueTotalSize += size;
		    }
		    function PeekQueueValue(container) {
		        const pair = container._queue.peek();
		        return pair.value;
		    }
		    function ResetQueue(container) {
		        container._queue = new SimpleQueue();
		        container._queueTotalSize = 0;
		    }

		    function isDataViewConstructor(ctor) {
		        return ctor === DataView;
		    }
		    function isDataView(view) {
		        return isDataViewConstructor(view.constructor);
		    }
		    function arrayBufferViewElementSize(ctor) {
		        if (isDataViewConstructor(ctor)) {
		            return 1;
		        }
		        return ctor.BYTES_PER_ELEMENT;
		    }

		    /**
		     * A pull-into request in a {@link ReadableByteStreamController}.
		     *
		     * @public
		     */
		    class ReadableStreamBYOBRequest {
		        constructor() {
		            throw new TypeError('Illegal constructor');
		        }
		        /**
		         * Returns the view for writing in to, or `null` if the BYOB request has already been responded to.
		         */
		        get view() {
		            if (!IsReadableStreamBYOBRequest(this)) {
		                throw byobRequestBrandCheckException('view');
		            }
		            return this._view;
		        }
		        respond(bytesWritten) {
		            if (!IsReadableStreamBYOBRequest(this)) {
		                throw byobRequestBrandCheckException('respond');
		            }
		            assertRequiredArgument(bytesWritten, 1, 'respond');
		            bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, 'First parameter');
		            if (this._associatedReadableByteStreamController === undefined) {
		                throw new TypeError('This BYOB request has been invalidated');
		            }
		            if (IsDetachedBuffer(this._view.buffer)) {
		                throw new TypeError(`The BYOB request's buffer has been detached and so cannot be used as a response`);
		            }
		            ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
		        }
		        respondWithNewView(view) {
		            if (!IsReadableStreamBYOBRequest(this)) {
		                throw byobRequestBrandCheckException('respondWithNewView');
		            }
		            assertRequiredArgument(view, 1, 'respondWithNewView');
		            if (!ArrayBuffer.isView(view)) {
		                throw new TypeError('You can only respond with array buffer views');
		            }
		            if (this._associatedReadableByteStreamController === undefined) {
		                throw new TypeError('This BYOB request has been invalidated');
		            }
		            if (IsDetachedBuffer(view.buffer)) {
		                throw new TypeError('The given view\'s buffer has been detached and so cannot be used as a response');
		            }
		            ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
		        }
		    }
		    Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
		        respond: { enumerable: true },
		        respondWithNewView: { enumerable: true },
		        view: { enumerable: true }
		    });
		    setFunctionName(ReadableStreamBYOBRequest.prototype.respond, 'respond');
		    setFunctionName(ReadableStreamBYOBRequest.prototype.respondWithNewView, 'respondWithNewView');
		    if (typeof Symbol.toStringTag === 'symbol') {
		        Object.defineProperty(ReadableStreamBYOBRequest.prototype, Symbol.toStringTag, {
		            value: 'ReadableStreamBYOBRequest',
		            configurable: true
		        });
		    }
		    /**
		     * Allows control of a {@link ReadableStream | readable byte stream}'s state and internal queue.
		     *
		     * @public
		     */
		    class ReadableByteStreamController {
		        constructor() {
		            throw new TypeError('Illegal constructor');
		        }
		        /**
		         * Returns the current BYOB pull request, or `null` if there isn't one.
		         */
		        get byobRequest() {
		            if (!IsReadableByteStreamController(this)) {
		                throw byteStreamControllerBrandCheckException('byobRequest');
		            }
		            return ReadableByteStreamControllerGetBYOBRequest(this);
		        }
		        /**
		         * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
		         * over-full. An underlying byte source ought to use this information to determine when and how to apply backpressure.
		         */
		        get desiredSize() {
		            if (!IsReadableByteStreamController(this)) {
		                throw byteStreamControllerBrandCheckException('desiredSize');
		            }
		            return ReadableByteStreamControllerGetDesiredSize(this);
		        }
		        /**
		         * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
		         * the stream, but once those are read, the stream will become closed.
		         */
		        close() {
		            if (!IsReadableByteStreamController(this)) {
		                throw byteStreamControllerBrandCheckException('close');
		            }
		            if (this._closeRequested) {
		                throw new TypeError('The stream has already been closed; do not close it again!');
		            }
		            const state = this._controlledReadableByteStream._state;
		            if (state !== 'readable') {
		                throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be closed`);
		            }
		            ReadableByteStreamControllerClose(this);
		        }
		        enqueue(chunk) {
		            if (!IsReadableByteStreamController(this)) {
		                throw byteStreamControllerBrandCheckException('enqueue');
		            }
		            assertRequiredArgument(chunk, 1, 'enqueue');
		            if (!ArrayBuffer.isView(chunk)) {
		                throw new TypeError('chunk must be an array buffer view');
		            }
		            if (chunk.byteLength === 0) {
		                throw new TypeError('chunk must have non-zero byteLength');
		            }
		            if (chunk.buffer.byteLength === 0) {
		                throw new TypeError(`chunk's buffer must have non-zero byteLength`);
		            }
		            if (this._closeRequested) {
		                throw new TypeError('stream is closed or draining');
		            }
		            const state = this._controlledReadableByteStream._state;
		            if (state !== 'readable') {
		                throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be enqueued to`);
		            }
		            ReadableByteStreamControllerEnqueue(this, chunk);
		        }
		        /**
		         * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
		         */
		        error(e = undefined) {
		            if (!IsReadableByteStreamController(this)) {
		                throw byteStreamControllerBrandCheckException('error');
		            }
		            ReadableByteStreamControllerError(this, e);
		        }
		        /** @internal */
		        [CancelSteps](reason) {
		            ReadableByteStreamControllerClearPendingPullIntos(this);
		            ResetQueue(this);
		            const result = this._cancelAlgorithm(reason);
		            ReadableByteStreamControllerClearAlgorithms(this);
		            return result;
		        }
		        /** @internal */
		        [PullSteps](readRequest) {
		            const stream = this._controlledReadableByteStream;
		            if (this._queueTotalSize > 0) {
		                ReadableByteStreamControllerFillReadRequestFromQueue(this, readRequest);
		                return;
		            }
		            const autoAllocateChunkSize = this._autoAllocateChunkSize;
		            if (autoAllocateChunkSize !== undefined) {
		                let buffer;
		                try {
		                    buffer = new ArrayBuffer(autoAllocateChunkSize);
		                }
		                catch (bufferE) {
		                    readRequest._errorSteps(bufferE);
		                    return;
		                }
		                const pullIntoDescriptor = {
		                    buffer,
		                    bufferByteLength: autoAllocateChunkSize,
		                    byteOffset: 0,
		                    byteLength: autoAllocateChunkSize,
		                    bytesFilled: 0,
		                    minimumFill: 1,
		                    elementSize: 1,
		                    viewConstructor: Uint8Array,
		                    readerType: 'default'
		                };
		                this._pendingPullIntos.push(pullIntoDescriptor);
		            }
		            ReadableStreamAddReadRequest(stream, readRequest);
		            ReadableByteStreamControllerCallPullIfNeeded(this);
		        }
		        /** @internal */
		        [ReleaseSteps]() {
		            if (this._pendingPullIntos.length > 0) {
		                const firstPullInto = this._pendingPullIntos.peek();
		                firstPullInto.readerType = 'none';
		                this._pendingPullIntos = new SimpleQueue();
		                this._pendingPullIntos.push(firstPullInto);
		            }
		        }
		    }
		    Object.defineProperties(ReadableByteStreamController.prototype, {
		        close: { enumerable: true },
		        enqueue: { enumerable: true },
		        error: { enumerable: true },
		        byobRequest: { enumerable: true },
		        desiredSize: { enumerable: true }
		    });
		    setFunctionName(ReadableByteStreamController.prototype.close, 'close');
		    setFunctionName(ReadableByteStreamController.prototype.enqueue, 'enqueue');
		    setFunctionName(ReadableByteStreamController.prototype.error, 'error');
		    if (typeof Symbol.toStringTag === 'symbol') {
		        Object.defineProperty(ReadableByteStreamController.prototype, Symbol.toStringTag, {
		            value: 'ReadableByteStreamController',
		            configurable: true
		        });
		    }
		    // Abstract operations for the ReadableByteStreamController.
		    function IsReadableByteStreamController(x) {
		        if (!typeIsObject(x)) {
		            return false;
		        }
		        if (!Object.prototype.hasOwnProperty.call(x, '_controlledReadableByteStream')) {
		            return false;
		        }
		        return x instanceof ReadableByteStreamController;
		    }
		    function IsReadableStreamBYOBRequest(x) {
		        if (!typeIsObject(x)) {
		            return false;
		        }
		        if (!Object.prototype.hasOwnProperty.call(x, '_associatedReadableByteStreamController')) {
		            return false;
		        }
		        return x instanceof ReadableStreamBYOBRequest;
		    }
		    function ReadableByteStreamControllerCallPullIfNeeded(controller) {
		        const shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
		        if (!shouldPull) {
		            return;
		        }
		        if (controller._pulling) {
		            controller._pullAgain = true;
		            return;
		        }
		        controller._pulling = true;
		        // TODO: Test controller argument
		        const pullPromise = controller._pullAlgorithm();
		        uponPromise(pullPromise, () => {
		            controller._pulling = false;
		            if (controller._pullAgain) {
		                controller._pullAgain = false;
		                ReadableByteStreamControllerCallPullIfNeeded(controller);
		            }
		            return null;
		        }, e => {
		            ReadableByteStreamControllerError(controller, e);
		            return null;
		        });
		    }
		    function ReadableByteStreamControllerClearPendingPullIntos(controller) {
		        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
		        controller._pendingPullIntos = new SimpleQueue();
		    }
		    function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
		        let done = false;
		        if (stream._state === 'closed') {
		            done = true;
		        }
		        const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
		        if (pullIntoDescriptor.readerType === 'default') {
		            ReadableStreamFulfillReadRequest(stream, filledView, done);
		        }
		        else {
		            ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
		        }
		    }
		    function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
		        const bytesFilled = pullIntoDescriptor.bytesFilled;
		        const elementSize = pullIntoDescriptor.elementSize;
		        return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
		    }
		    function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
		        controller._queue.push({ buffer, byteOffset, byteLength });
		        controller._queueTotalSize += byteLength;
		    }
		    function ReadableByteStreamControllerEnqueueClonedChunkToQueue(controller, buffer, byteOffset, byteLength) {
		        let clonedChunk;
		        try {
		            clonedChunk = ArrayBufferSlice(buffer, byteOffset, byteOffset + byteLength);
		        }
		        catch (cloneE) {
		            ReadableByteStreamControllerError(controller, cloneE);
		            throw cloneE;
		        }
		        ReadableByteStreamControllerEnqueueChunkToQueue(controller, clonedChunk, 0, byteLength);
		    }
		    function ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue(controller, firstDescriptor) {
		        if (firstDescriptor.bytesFilled > 0) {
		            ReadableByteStreamControllerEnqueueClonedChunkToQueue(controller, firstDescriptor.buffer, firstDescriptor.byteOffset, firstDescriptor.bytesFilled);
		        }
		        ReadableByteStreamControllerShiftPendingPullInto(controller);
		    }
		    function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
		        const maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
		        const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
		        let totalBytesToCopyRemaining = maxBytesToCopy;
		        let ready = false;
		        const remainderBytes = maxBytesFilled % pullIntoDescriptor.elementSize;
		        const maxAlignedBytes = maxBytesFilled - remainderBytes;
		        // A descriptor for a read() request that is not yet filled up to its minimum length will stay at the head
		        // of the queue, so the underlying source can keep filling it.
		        if (maxAlignedBytes >= pullIntoDescriptor.minimumFill) {
		            totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
		            ready = true;
		        }
		        const queue = controller._queue;
		        while (totalBytesToCopyRemaining > 0) {
		            const headOfQueue = queue.peek();
		            const bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
		            const destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
		            CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
		            if (headOfQueue.byteLength === bytesToCopy) {
		                queue.shift();
		            }
		            else {
		                headOfQueue.byteOffset += bytesToCopy;
		                headOfQueue.byteLength -= bytesToCopy;
		            }
		            controller._queueTotalSize -= bytesToCopy;
		            ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
		            totalBytesToCopyRemaining -= bytesToCopy;
		        }
		        return ready;
		    }
		    function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
		        pullIntoDescriptor.bytesFilled += size;
		    }
		    function ReadableByteStreamControllerHandleQueueDrain(controller) {
		        if (controller._queueTotalSize === 0 && controller._closeRequested) {
		            ReadableByteStreamControllerClearAlgorithms(controller);
		            ReadableStreamClose(controller._controlledReadableByteStream);
		        }
		        else {
		            ReadableByteStreamControllerCallPullIfNeeded(controller);
		        }
		    }
		    function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
		        if (controller._byobRequest === null) {
		            return;
		        }
		        controller._byobRequest._associatedReadableByteStreamController = undefined;
		        controller._byobRequest._view = null;
		        controller._byobRequest = null;
		    }
		    function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
		        while (controller._pendingPullIntos.length > 0) {
		            if (controller._queueTotalSize === 0) {
		                return;
		            }
		            const pullIntoDescriptor = controller._pendingPullIntos.peek();
		            if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
		                ReadableByteStreamControllerShiftPendingPullInto(controller);
		                ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
		            }
		        }
		    }
		    function ReadableByteStreamControllerProcessReadRequestsUsingQueue(controller) {
		        const reader = controller._controlledReadableByteStream._reader;
		        while (reader._readRequests.length > 0) {
		            if (controller._queueTotalSize === 0) {
		                return;
		            }
		            const readRequest = reader._readRequests.shift();
		            ReadableByteStreamControllerFillReadRequestFromQueue(controller, readRequest);
		        }
		    }
		    function ReadableByteStreamControllerPullInto(controller, view, min, readIntoRequest) {
		        const stream = controller._controlledReadableByteStream;
		        const ctor = view.constructor;
		        const elementSize = arrayBufferViewElementSize(ctor);
		        const { byteOffset, byteLength } = view;
		        const minimumFill = min * elementSize;
		        let buffer;
		        try {
		            buffer = TransferArrayBuffer(view.buffer);
		        }
		        catch (e) {
		            readIntoRequest._errorSteps(e);
		            return;
		        }
		        const pullIntoDescriptor = {
		            buffer,
		            bufferByteLength: buffer.byteLength,
		            byteOffset,
		            byteLength,
		            bytesFilled: 0,
		            minimumFill,
		            elementSize,
		            viewConstructor: ctor,
		            readerType: 'byob'
		        };
		        if (controller._pendingPullIntos.length > 0) {
		            controller._pendingPullIntos.push(pullIntoDescriptor);
		            // No ReadableByteStreamControllerCallPullIfNeeded() call since:
		            // - No change happens on desiredSize
		            // - The source has already been notified of that there's at least 1 pending read(view)
		            ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
		            return;
		        }
		        if (stream._state === 'closed') {
		            const emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
		            readIntoRequest._closeSteps(emptyView);
		            return;
		        }
		        if (controller._queueTotalSize > 0) {
		            if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
		                const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
		                ReadableByteStreamControllerHandleQueueDrain(controller);
		                readIntoRequest._chunkSteps(filledView);
		                return;
		            }
		            if (controller._closeRequested) {
		                const e = new TypeError('Insufficient bytes to fill elements in the given buffer');
		                ReadableByteStreamControllerError(controller, e);
		                readIntoRequest._errorSteps(e);
		                return;
		            }
		        }
		        controller._pendingPullIntos.push(pullIntoDescriptor);
		        ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
		        ReadableByteStreamControllerCallPullIfNeeded(controller);
		    }
		    function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
		        if (firstDescriptor.readerType === 'none') {
		            ReadableByteStreamControllerShiftPendingPullInto(controller);
		        }
		        const stream = controller._controlledReadableByteStream;
		        if (ReadableStreamHasBYOBReader(stream)) {
		            while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
		                const pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
		                ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
		            }
		        }
		    }
		    function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
		        ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
		        if (pullIntoDescriptor.readerType === 'none') {
		            ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue(controller, pullIntoDescriptor);
		            ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
		            return;
		        }
		        if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.minimumFill) {
		            // A descriptor for a read() request that is not yet filled up to its minimum length will stay at the head
		            // of the queue, so the underlying source can keep filling it.
		            return;
		        }
		        ReadableByteStreamControllerShiftPendingPullInto(controller);
		        const remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
		        if (remainderSize > 0) {
		            const end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
		            ReadableByteStreamControllerEnqueueClonedChunkToQueue(controller, pullIntoDescriptor.buffer, end - remainderSize, remainderSize);
		        }
		        pullIntoDescriptor.bytesFilled -= remainderSize;
		        ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
		        ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
		    }
		    function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
		        const firstDescriptor = controller._pendingPullIntos.peek();
		        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
		        const state = controller._controlledReadableByteStream._state;
		        if (state === 'closed') {
		            ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor);
		        }
		        else {
		            ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
		        }
		        ReadableByteStreamControllerCallPullIfNeeded(controller);
		    }
		    function ReadableByteStreamControllerShiftPendingPullInto(controller) {
		        const descriptor = controller._pendingPullIntos.shift();
		        return descriptor;
		    }
		    function ReadableByteStreamControllerShouldCallPull(controller) {
		        const stream = controller._controlledReadableByteStream;
		        if (stream._state !== 'readable') {
		            return false;
		        }
		        if (controller._closeRequested) {
		            return false;
		        }
		        if (!controller._started) {
		            return false;
		        }
		        if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
		            return true;
		        }
		        if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
		            return true;
		        }
		        const desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
		        if (desiredSize > 0) {
		            return true;
		        }
		        return false;
		    }
		    function ReadableByteStreamControllerClearAlgorithms(controller) {
		        controller._pullAlgorithm = undefined;
		        controller._cancelAlgorithm = undefined;
		    }
		    // A client of ReadableByteStreamController may use these functions directly to bypass state check.
		    function ReadableByteStreamControllerClose(controller) {
		        const stream = controller._controlledReadableByteStream;
		        if (controller._closeRequested || stream._state !== 'readable') {
		            return;
		        }
		        if (controller._queueTotalSize > 0) {
		            controller._closeRequested = true;
		            return;
		        }
		        if (controller._pendingPullIntos.length > 0) {
		            const firstPendingPullInto = controller._pendingPullIntos.peek();
		            if (firstPendingPullInto.bytesFilled % firstPendingPullInto.elementSize !== 0) {
		                const e = new TypeError('Insufficient bytes to fill elements in the given buffer');
		                ReadableByteStreamControllerError(controller, e);
		                throw e;
		            }
		        }
		        ReadableByteStreamControllerClearAlgorithms(controller);
		        ReadableStreamClose(stream);
		    }
		    function ReadableByteStreamControllerEnqueue(controller, chunk) {
		        const stream = controller._controlledReadableByteStream;
		        if (controller._closeRequested || stream._state !== 'readable') {
		            return;
		        }
		        const { buffer, byteOffset, byteLength } = chunk;
		        if (IsDetachedBuffer(buffer)) {
		            throw new TypeError('chunk\'s buffer is detached and so cannot be enqueued');
		        }
		        const transferredBuffer = TransferArrayBuffer(buffer);
		        if (controller._pendingPullIntos.length > 0) {
		            const firstPendingPullInto = controller._pendingPullIntos.peek();
		            if (IsDetachedBuffer(firstPendingPullInto.buffer)) {
		                throw new TypeError('The BYOB request\'s buffer has been detached and so cannot be filled with an enqueued chunk');
		            }
		            ReadableByteStreamControllerInvalidateBYOBRequest(controller);
		            firstPendingPullInto.buffer = TransferArrayBuffer(firstPendingPullInto.buffer);
		            if (firstPendingPullInto.readerType === 'none') {
		                ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue(controller, firstPendingPullInto);
		            }
		        }
		        if (ReadableStreamHasDefaultReader(stream)) {
		            ReadableByteStreamControllerProcessReadRequestsUsingQueue(controller);
		            if (ReadableStreamGetNumReadRequests(stream) === 0) {
		                ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
		            }
		            else {
		                if (controller._pendingPullIntos.length > 0) {
		                    ReadableByteStreamControllerShiftPendingPullInto(controller);
		                }
		                const transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
		                ReadableStreamFulfillReadRequest(stream, transferredView, false);
		            }
		        }
		        else if (ReadableStreamHasBYOBReader(stream)) {
		            // TODO: Ideally in this branch detaching should happen only if the buffer is not consumed fully.
		            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
		            ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
		        }
		        else {
		            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
		        }
		        ReadableByteStreamControllerCallPullIfNeeded(controller);
		    }
		    function ReadableByteStreamControllerError(controller, e) {
		        const stream = controller._controlledReadableByteStream;
		        if (stream._state !== 'readable') {
		            return;
		        }
		        ReadableByteStreamControllerClearPendingPullIntos(controller);
		        ResetQueue(controller);
		        ReadableByteStreamControllerClearAlgorithms(controller);
		        ReadableStreamError(stream, e);
		    }
		    function ReadableByteStreamControllerFillReadRequestFromQueue(controller, readRequest) {
		        const entry = controller._queue.shift();
		        controller._queueTotalSize -= entry.byteLength;
		        ReadableByteStreamControllerHandleQueueDrain(controller);
		        const view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
		        readRequest._chunkSteps(view);
		    }
		    function ReadableByteStreamControllerGetBYOBRequest(controller) {
		        if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
		            const firstDescriptor = controller._pendingPullIntos.peek();
		            const view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
		            const byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
		            SetUpReadableStreamBYOBRequest(byobRequest, controller, view);
		            controller._byobRequest = byobRequest;
		        }
		        return controller._byobRequest;
		    }
		    function ReadableByteStreamControllerGetDesiredSize(controller) {
		        const state = controller._controlledReadableByteStream._state;
		        if (state === 'errored') {
		            return null;
		        }
		        if (state === 'closed') {
		            return 0;
		        }
		        return controller._strategyHWM - controller._queueTotalSize;
		    }
		    function ReadableByteStreamControllerRespond(controller, bytesWritten) {
		        const firstDescriptor = controller._pendingPullIntos.peek();
		        const state = controller._controlledReadableByteStream._state;
		        if (state === 'closed') {
		            if (bytesWritten !== 0) {
		                throw new TypeError('bytesWritten must be 0 when calling respond() on a closed stream');
		            }
		        }
		        else {
		            if (bytesWritten === 0) {
		                throw new TypeError('bytesWritten must be greater than 0 when calling respond() on a readable stream');
		            }
		            if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength) {
		                throw new RangeError('bytesWritten out of range');
		            }
		        }
		        firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
		        ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
		    }
		    function ReadableByteStreamControllerRespondWithNewView(controller, view) {
		        const firstDescriptor = controller._pendingPullIntos.peek();
		        const state = controller._controlledReadableByteStream._state;
		        if (state === 'closed') {
		            if (view.byteLength !== 0) {
		                throw new TypeError('The view\'s length must be 0 when calling respondWithNewView() on a closed stream');
		            }
		        }
		        else {
		            if (view.byteLength === 0) {
		                throw new TypeError('The view\'s length must be greater than 0 when calling respondWithNewView() on a readable stream');
		            }
		        }
		        if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
		            throw new RangeError('The region specified by view does not match byobRequest');
		        }
		        if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
		            throw new RangeError('The buffer of view has different capacity than byobRequest');
		        }
		        if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength) {
		            throw new RangeError('The region specified by view is larger than byobRequest');
		        }
		        const viewByteLength = view.byteLength;
		        firstDescriptor.buffer = TransferArrayBuffer(view.buffer);
		        ReadableByteStreamControllerRespondInternal(controller, viewByteLength);
		    }
		    function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
		        controller._controlledReadableByteStream = stream;
		        controller._pullAgain = false;
		        controller._pulling = false;
		        controller._byobRequest = null;
		        // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
		        controller._queue = controller._queueTotalSize = undefined;
		        ResetQueue(controller);
		        controller._closeRequested = false;
		        controller._started = false;
		        controller._strategyHWM = highWaterMark;
		        controller._pullAlgorithm = pullAlgorithm;
		        controller._cancelAlgorithm = cancelAlgorithm;
		        controller._autoAllocateChunkSize = autoAllocateChunkSize;
		        controller._pendingPullIntos = new SimpleQueue();
		        stream._readableStreamController = controller;
		        const startResult = startAlgorithm();
		        uponPromise(promiseResolvedWith(startResult), () => {
		            controller._started = true;
		            ReadableByteStreamControllerCallPullIfNeeded(controller);
		            return null;
		        }, r => {
		            ReadableByteStreamControllerError(controller, r);
		            return null;
		        });
		    }
		    function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
		        const controller = Object.create(ReadableByteStreamController.prototype);
		        let startAlgorithm;
		        let pullAlgorithm;
		        let cancelAlgorithm;
		        if (underlyingByteSource.start !== undefined) {
		            startAlgorithm = () => underlyingByteSource.start(controller);
		        }
		        else {
		            startAlgorithm = () => undefined;
		        }
		        if (underlyingByteSource.pull !== undefined) {
		            pullAlgorithm = () => underlyingByteSource.pull(controller);
		        }
		        else {
		            pullAlgorithm = () => promiseResolvedWith(undefined);
		        }
		        if (underlyingByteSource.cancel !== undefined) {
		            cancelAlgorithm = reason => underlyingByteSource.cancel(reason);
		        }
		        else {
		            cancelAlgorithm = () => promiseResolvedWith(undefined);
		        }
		        const autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
		        if (autoAllocateChunkSize === 0) {
		            throw new TypeError('autoAllocateChunkSize must be greater than 0');
		        }
		        SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
		    }
		    function SetUpReadableStreamBYOBRequest(request, controller, view) {
		        request._associatedReadableByteStreamController = controller;
		        request._view = view;
		    }
		    // Helper functions for the ReadableStreamBYOBRequest.
		    function byobRequestBrandCheckException(name) {
		        return new TypeError(`ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`);
		    }
		    // Helper functions for the ReadableByteStreamController.
		    function byteStreamControllerBrandCheckException(name) {
		        return new TypeError(`ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`);
		    }

		    function convertReaderOptions(options, context) {
		        assertDictionary(options, context);
		        const mode = options === null || options === void 0 ? void 0 : options.mode;
		        return {
		            mode: mode === undefined ? undefined : convertReadableStreamReaderMode(mode, `${context} has member 'mode' that`)
		        };
		    }
		    function convertReadableStreamReaderMode(mode, context) {
		        mode = `${mode}`;
		        if (mode !== 'byob') {
		            throw new TypeError(`${context} '${mode}' is not a valid enumeration value for ReadableStreamReaderMode`);
		        }
		        return mode;
		    }
		    function convertByobReadOptions(options, context) {
		        var _a;
		        assertDictionary(options, context);
		        const min = (_a = options === null || options === void 0 ? void 0 : options.min) !== null && _a !== void 0 ? _a : 1;
		        return {
		            min: convertUnsignedLongLongWithEnforceRange(min, `${context} has member 'min' that`)
		        };
		    }

		    // Abstract operations for the ReadableStream.
		    function AcquireReadableStreamBYOBReader(stream) {
		        return new ReadableStreamBYOBReader(stream);
		    }
		    // ReadableStream API exposed for controllers.
		    function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
		        stream._reader._readIntoRequests.push(readIntoRequest);
		    }
		    function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
		        const reader = stream._reader;
		        const readIntoRequest = reader._readIntoRequests.shift();
		        if (done) {
		            readIntoRequest._closeSteps(chunk);
		        }
		        else {
		            readIntoRequest._chunkSteps(chunk);
		        }
		    }
		    function ReadableStreamGetNumReadIntoRequests(stream) {
		        return stream._reader._readIntoRequests.length;
		    }
		    function ReadableStreamHasBYOBReader(stream) {
		        const reader = stream._reader;
		        if (reader === undefined) {
		            return false;
		        }
		        if (!IsReadableStreamBYOBReader(reader)) {
		            return false;
		        }
		        return true;
		    }
		    /**
		     * A BYOB reader vended by a {@link ReadableStream}.
		     *
		     * @public
		     */
		    class ReadableStreamBYOBReader {
		        constructor(stream) {
		            assertRequiredArgument(stream, 1, 'ReadableStreamBYOBReader');
		            assertReadableStream(stream, 'First parameter');
		            if (IsReadableStreamLocked(stream)) {
		                throw new TypeError('This stream has already been locked for exclusive reading by another reader');
		            }
		            if (!IsReadableByteStreamController(stream._readableStreamController)) {
		                throw new TypeError('Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte ' +
		                    'source');
		            }
		            ReadableStreamReaderGenericInitialize(this, stream);
		            this._readIntoRequests = new SimpleQueue();
		        }
		        /**
		         * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
		         * the reader's lock is released before the stream finishes closing.
		         */
		        get closed() {
		            if (!IsReadableStreamBYOBReader(this)) {
		                return promiseRejectedWith(byobReaderBrandCheckException('closed'));
		            }
		            return this._closedPromise;
		        }
		        /**
		         * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
		         */
		        cancel(reason = undefined) {
		            if (!IsReadableStreamBYOBReader(this)) {
		                return promiseRejectedWith(byobReaderBrandCheckException('cancel'));
		            }
		            if (this._ownerReadableStream === undefined) {
		                return promiseRejectedWith(readerLockException('cancel'));
		            }
		            return ReadableStreamReaderGenericCancel(this, reason);
		        }
		        read(view, rawOptions = {}) {
		            if (!IsReadableStreamBYOBReader(this)) {
		                return promiseRejectedWith(byobReaderBrandCheckException('read'));
		            }
		            if (!ArrayBuffer.isView(view)) {
		                return promiseRejectedWith(new TypeError('view must be an array buffer view'));
		            }
		            if (view.byteLength === 0) {
		                return promiseRejectedWith(new TypeError('view must have non-zero byteLength'));
		            }
		            if (view.buffer.byteLength === 0) {
		                return promiseRejectedWith(new TypeError(`view's buffer must have non-zero byteLength`));
		            }
		            if (IsDetachedBuffer(view.buffer)) {
		                return promiseRejectedWith(new TypeError('view\'s buffer has been detached'));
		            }
		            let options;
		            try {
		                options = convertByobReadOptions(rawOptions, 'options');
		            }
		            catch (e) {
		                return promiseRejectedWith(e);
		            }
		            const min = options.min;
		            if (min === 0) {
		                return promiseRejectedWith(new TypeError('options.min must be greater than 0'));
		            }
		            if (!isDataView(view)) {
		                if (min > view.length) {
		                    return promiseRejectedWith(new RangeError('options.min must be less than or equal to view\'s length'));
		                }
		            }
		            else if (min > view.byteLength) {
		                return promiseRejectedWith(new RangeError('options.min must be less than or equal to view\'s byteLength'));
		            }
		            if (this._ownerReadableStream === undefined) {
		                return promiseRejectedWith(readerLockException('read from'));
		            }
		            let resolvePromise;
		            let rejectPromise;
		            const promise = newPromise((resolve, reject) => {
		                resolvePromise = resolve;
		                rejectPromise = reject;
		            });
		            const readIntoRequest = {
		                _chunkSteps: chunk => resolvePromise({ value: chunk, done: false }),
		                _closeSteps: chunk => resolvePromise({ value: chunk, done: true }),
		                _errorSteps: e => rejectPromise(e)
		            };
		            ReadableStreamBYOBReaderRead(this, view, min, readIntoRequest);
		            return promise;
		        }
		        /**
		         * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
		         * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
		         * from now on; otherwise, the reader will appear closed.
		         *
		         * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
		         * the reader's {@link ReadableStreamBYOBReader.read | read()} method has not yet been settled. Attempting to
		         * do so will throw a `TypeError` and leave the reader locked to the stream.
		         */
		        releaseLock() {
		            if (!IsReadableStreamBYOBReader(this)) {
		                throw byobReaderBrandCheckException('releaseLock');
		            }
		            if (this._ownerReadableStream === undefined) {
		                return;
		            }
		            ReadableStreamBYOBReaderRelease(this);
		        }
		    }
		    Object.defineProperties(ReadableStreamBYOBReader.prototype, {
		        cancel: { enumerable: true },
		        read: { enumerable: true },
		        releaseLock: { enumerable: true },
		        closed: { enumerable: true }
		    });
		    setFunctionName(ReadableStreamBYOBReader.prototype.cancel, 'cancel');
		    setFunctionName(ReadableStreamBYOBReader.prototype.read, 'read');
		    setFunctionName(ReadableStreamBYOBReader.prototype.releaseLock, 'releaseLock');
		    if (typeof Symbol.toStringTag === 'symbol') {
		        Object.defineProperty(ReadableStreamBYOBReader.prototype, Symbol.toStringTag, {
		            value: 'ReadableStreamBYOBReader',
		            configurable: true
		        });
		    }
		    // Abstract operations for the readers.
		    function IsReadableStreamBYOBReader(x) {
		        if (!typeIsObject(x)) {
		            return false;
		        }
		        if (!Object.prototype.hasOwnProperty.call(x, '_readIntoRequests')) {
		            return false;
		        }
		        return x instanceof ReadableStreamBYOBReader;
		    }
		    function ReadableStreamBYOBReaderRead(reader, view, min, readIntoRequest) {
		        const stream = reader._ownerReadableStream;
		        stream._disturbed = true;
		        if (stream._state === 'errored') {
		            readIntoRequest._errorSteps(stream._storedError);
		        }
		        else {
		            ReadableByteStreamControllerPullInto(stream._readableStreamController, view, min, readIntoRequest);
		        }
		    }
		    function ReadableStreamBYOBReaderRelease(reader) {
		        ReadableStreamReaderGenericRelease(reader);
		        const e = new TypeError('Reader was released');
		        ReadableStreamBYOBReaderErrorReadIntoRequests(reader, e);
		    }
		    function ReadableStreamBYOBReaderErrorReadIntoRequests(reader, e) {
		        const readIntoRequests = reader._readIntoRequests;
		        reader._readIntoRequests = new SimpleQueue();
		        readIntoRequests.forEach(readIntoRequest => {
		            readIntoRequest._errorSteps(e);
		        });
		    }
		    // Helper functions for the ReadableStreamBYOBReader.
		    function byobReaderBrandCheckException(name) {
		        return new TypeError(`ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`);
		    }

		    function ExtractHighWaterMark(strategy, defaultHWM) {
		        const { highWaterMark } = strategy;
		        if (highWaterMark === undefined) {
		            return defaultHWM;
		        }
		        if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
		            throw new RangeError('Invalid highWaterMark');
		        }
		        return highWaterMark;
		    }
		    function ExtractSizeAlgorithm(strategy) {
		        const { size } = strategy;
		        if (!size) {
		            return () => 1;
		        }
		        return size;
		    }

		    function convertQueuingStrategy(init, context) {
		        assertDictionary(init, context);
		        const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
		        const size = init === null || init === void 0 ? void 0 : init.size;
		        return {
		            highWaterMark: highWaterMark === undefined ? undefined : convertUnrestrictedDouble(highWaterMark),
		            size: size === undefined ? undefined : convertQueuingStrategySize(size, `${context} has member 'size' that`)
		        };
		    }
		    function convertQueuingStrategySize(fn, context) {
		        assertFunction(fn, context);
		        return chunk => convertUnrestrictedDouble(fn(chunk));
		    }

		    function convertUnderlyingSink(original, context) {
		        assertDictionary(original, context);
		        const abort = original === null || original === void 0 ? void 0 : original.abort;
		        const close = original === null || original === void 0 ? void 0 : original.close;
		        const start = original === null || original === void 0 ? void 0 : original.start;
		        const type = original === null || original === void 0 ? void 0 : original.type;
		        const write = original === null || original === void 0 ? void 0 : original.write;
		        return {
		            abort: abort === undefined ?
		                undefined :
		                convertUnderlyingSinkAbortCallback(abort, original, `${context} has member 'abort' that`),
		            close: close === undefined ?
		                undefined :
		                convertUnderlyingSinkCloseCallback(close, original, `${context} has member 'close' that`),
		            start: start === undefined ?
		                undefined :
		                convertUnderlyingSinkStartCallback(start, original, `${context} has member 'start' that`),
		            write: write === undefined ?
		                undefined :
		                convertUnderlyingSinkWriteCallback(write, original, `${context} has member 'write' that`),
		            type
		        };
		    }
		    function convertUnderlyingSinkAbortCallback(fn, original, context) {
		        assertFunction(fn, context);
		        return (reason) => promiseCall(fn, original, [reason]);
		    }
		    function convertUnderlyingSinkCloseCallback(fn, original, context) {
		        assertFunction(fn, context);
		        return () => promiseCall(fn, original, []);
		    }
		    function convertUnderlyingSinkStartCallback(fn, original, context) {
		        assertFunction(fn, context);
		        return (controller) => reflectCall(fn, original, [controller]);
		    }
		    function convertUnderlyingSinkWriteCallback(fn, original, context) {
		        assertFunction(fn, context);
		        return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
		    }

		    function assertWritableStream(x, context) {
		        if (!IsWritableStream(x)) {
		            throw new TypeError(`${context} is not a WritableStream.`);
		        }
		    }

		    function isAbortSignal(value) {
		        if (typeof value !== 'object' || value === null) {
		            return false;
		        }
		        try {
		            return typeof value.aborted === 'boolean';
		        }
		        catch (_a) {
		            // AbortSignal.prototype.aborted throws if its brand check fails
		            return false;
		        }
		    }
		    const supportsAbortController = typeof AbortController === 'function';
		    /**
		     * Construct a new AbortController, if supported by the platform.
		     *
		     * @internal
		     */
		    function createAbortController() {
		        if (supportsAbortController) {
		            return new AbortController();
		        }
		        return undefined;
		    }

		    /**
		     * A writable stream represents a destination for data, into which you can write.
		     *
		     * @public
		     */
		    class WritableStream {
		        constructor(rawUnderlyingSink = {}, rawStrategy = {}) {
		            if (rawUnderlyingSink === undefined) {
		                rawUnderlyingSink = null;
		            }
		            else {
		                assertObject(rawUnderlyingSink, 'First parameter');
		            }
		            const strategy = convertQueuingStrategy(rawStrategy, 'Second parameter');
		            const underlyingSink = convertUnderlyingSink(rawUnderlyingSink, 'First parameter');
		            InitializeWritableStream(this);
		            const type = underlyingSink.type;
		            if (type !== undefined) {
		                throw new RangeError('Invalid type is specified');
		            }
		            const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
		            const highWaterMark = ExtractHighWaterMark(strategy, 1);
		            SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
		        }
		        /**
		         * Returns whether or not the writable stream is locked to a writer.
		         */
		        get locked() {
		            if (!IsWritableStream(this)) {
		                throw streamBrandCheckException$2('locked');
		            }
		            return IsWritableStreamLocked(this);
		        }
		        /**
		         * Aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be
		         * immediately moved to an errored state, with any queued-up writes discarded. This will also execute any abort
		         * mechanism of the underlying sink.
		         *
		         * The returned promise will fulfill if the stream shuts down successfully, or reject if the underlying sink signaled
		         * that there was an error doing so. Additionally, it will reject with a `TypeError` (without attempting to cancel
		         * the stream) if the stream is currently locked.
		         */
		        abort(reason = undefined) {
		            if (!IsWritableStream(this)) {
		                return promiseRejectedWith(streamBrandCheckException$2('abort'));
		            }
		            if (IsWritableStreamLocked(this)) {
		                return promiseRejectedWith(new TypeError('Cannot abort a stream that already has a writer'));
		            }
		            return WritableStreamAbort(this, reason);
		        }
		        /**
		         * Closes the stream. The underlying sink will finish processing any previously-written chunks, before invoking its
		         * close behavior. During this time any further attempts to write will fail (without erroring the stream).
		         *
		         * The method returns a promise that will fulfill if all remaining chunks are successfully written and the stream
		         * successfully closes, or rejects if an error is encountered during this process. Additionally, it will reject with
		         * a `TypeError` (without attempting to cancel the stream) if the stream is currently locked.
		         */
		        close() {
		            if (!IsWritableStream(this)) {
		                return promiseRejectedWith(streamBrandCheckException$2('close'));
		            }
		            if (IsWritableStreamLocked(this)) {
		                return promiseRejectedWith(new TypeError('Cannot close a stream that already has a writer'));
		            }
		            if (WritableStreamCloseQueuedOrInFlight(this)) {
		                return promiseRejectedWith(new TypeError('Cannot close an already-closing stream'));
		            }
		            return WritableStreamClose(this);
		        }
		        /**
		         * Creates a {@link WritableStreamDefaultWriter | writer} and locks the stream to the new writer. While the stream
		         * is locked, no other writer can be acquired until this one is released.
		         *
		         * This functionality is especially useful for creating abstractions that desire the ability to write to a stream
		         * without interruption or interleaving. By getting a writer for the stream, you can ensure nobody else can write at
		         * the same time, which would cause the resulting written data to be unpredictable and probably useless.
		         */
		        getWriter() {
		            if (!IsWritableStream(this)) {
		                throw streamBrandCheckException$2('getWriter');
		            }
		            return AcquireWritableStreamDefaultWriter(this);
		        }
		    }
		    Object.defineProperties(WritableStream.prototype, {
		        abort: { enumerable: true },
		        close: { enumerable: true },
		        getWriter: { enumerable: true },
		        locked: { enumerable: true }
		    });
		    setFunctionName(WritableStream.prototype.abort, 'abort');
		    setFunctionName(WritableStream.prototype.close, 'close');
		    setFunctionName(WritableStream.prototype.getWriter, 'getWriter');
		    if (typeof Symbol.toStringTag === 'symbol') {
		        Object.defineProperty(WritableStream.prototype, Symbol.toStringTag, {
		            value: 'WritableStream',
		            configurable: true
		        });
		    }
		    // Abstract operations for the WritableStream.
		    function AcquireWritableStreamDefaultWriter(stream) {
		        return new WritableStreamDefaultWriter(stream);
		    }
		    // Throws if and only if startAlgorithm throws.
		    function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
		        const stream = Object.create(WritableStream.prototype);
		        InitializeWritableStream(stream);
		        const controller = Object.create(WritableStreamDefaultController.prototype);
		        SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
		        return stream;
		    }
		    function InitializeWritableStream(stream) {
		        stream._state = 'writable';
		        // The error that will be reported by new method calls once the state becomes errored. Only set when [[state]] is
		        // 'erroring' or 'errored'. May be set to an undefined value.
		        stream._storedError = undefined;
		        stream._writer = undefined;
		        // Initialize to undefined first because the constructor of the controller checks this
		        // variable to validate the caller.
		        stream._writableStreamController = undefined;
		        // This queue is placed here instead of the writer class in order to allow for passing a writer to the next data
		        // producer without waiting for the queued writes to finish.
		        stream._writeRequests = new SimpleQueue();
		        // Write requests are removed from _writeRequests when write() is called on the underlying sink. This prevents
		        // them from being erroneously rejected on error. If a write() call is in-flight, the request is stored here.
		        stream._inFlightWriteRequest = undefined;
		        // The promise that was returned from writer.close(). Stored here because it may be fulfilled after the writer
		        // has been detached.
		        stream._closeRequest = undefined;
		        // Close request is removed from _closeRequest when close() is called on the underlying sink. This prevents it
		        // from being erroneously rejected on error. If a close() call is in-flight, the request is stored here.
		        stream._inFlightCloseRequest = undefined;
		        // The promise that was returned from writer.abort(). This may also be fulfilled after the writer has detached.
		        stream._pendingAbortRequest = undefined;
		        // The backpressure signal set by the controller.
		        stream._backpressure = false;
		    }
		    function IsWritableStream(x) {
		        if (!typeIsObject(x)) {
		            return false;
		        }
		        if (!Object.prototype.hasOwnProperty.call(x, '_writableStreamController')) {
		            return false;
		        }
		        return x instanceof WritableStream;
		    }
		    function IsWritableStreamLocked(stream) {
		        if (stream._writer === undefined) {
		            return false;
		        }
		        return true;
		    }
		    function WritableStreamAbort(stream, reason) {
		        var _a;
		        if (stream._state === 'closed' || stream._state === 'errored') {
		            return promiseResolvedWith(undefined);
		        }
		        stream._writableStreamController._abortReason = reason;
		        (_a = stream._writableStreamController._abortController) === null || _a === void 0 ? void 0 : _a.abort(reason);
		        // TypeScript narrows the type of `stream._state` down to 'writable' | 'erroring',
		        // but it doesn't know that signaling abort runs author code that might have changed the state.
		        // Widen the type again by casting to WritableStreamState.
		        const state = stream._state;
		        if (state === 'closed' || state === 'errored') {
		            return promiseResolvedWith(undefined);
		        }
		        if (stream._pendingAbortRequest !== undefined) {
		            return stream._pendingAbortRequest._promise;
		        }
		        let wasAlreadyErroring = false;
		        if (state === 'erroring') {
		            wasAlreadyErroring = true;
		            // reason will not be used, so don't keep a reference to it.
		            reason = undefined;
		        }
		        const promise = newPromise((resolve, reject) => {
		            stream._pendingAbortRequest = {
		                _promise: undefined,
		                _resolve: resolve,
		                _reject: reject,
		                _reason: reason,
		                _wasAlreadyErroring: wasAlreadyErroring
		            };
		        });
		        stream._pendingAbortRequest._promise = promise;
		        if (!wasAlreadyErroring) {
		            WritableStreamStartErroring(stream, reason);
		        }
		        return promise;
		    }
		    function WritableStreamClose(stream) {
		        const state = stream._state;
		        if (state === 'closed' || state === 'errored') {
		            return promiseRejectedWith(new TypeError(`The stream (in ${state} state) is not in the writable state and cannot be closed`));
		        }
		        const promise = newPromise((resolve, reject) => {
		            const closeRequest = {
		                _resolve: resolve,
		                _reject: reject
		            };
		            stream._closeRequest = closeRequest;
		        });
		        const writer = stream._writer;
		        if (writer !== undefined && stream._backpressure && state === 'writable') {
		            defaultWriterReadyPromiseResolve(writer);
		        }
		        WritableStreamDefaultControllerClose(stream._writableStreamController);
		        return promise;
		    }
		    // WritableStream API exposed for controllers.
		    function WritableStreamAddWriteRequest(stream) {
		        const promise = newPromise((resolve, reject) => {
		            const writeRequest = {
		                _resolve: resolve,
		                _reject: reject
		            };
		            stream._writeRequests.push(writeRequest);
		        });
		        return promise;
		    }
		    function WritableStreamDealWithRejection(stream, error) {
		        const state = stream._state;
		        if (state === 'writable') {
		            WritableStreamStartErroring(stream, error);
		            return;
		        }
		        WritableStreamFinishErroring(stream);
		    }
		    function WritableStreamStartErroring(stream, reason) {
		        const controller = stream._writableStreamController;
		        stream._state = 'erroring';
		        stream._storedError = reason;
		        const writer = stream._writer;
		        if (writer !== undefined) {
		            WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
		        }
		        if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) {
		            WritableStreamFinishErroring(stream);
		        }
		    }
		    function WritableStreamFinishErroring(stream) {
		        stream._state = 'errored';
		        stream._writableStreamController[ErrorSteps]();
		        const storedError = stream._storedError;
		        stream._writeRequests.forEach(writeRequest => {
		            writeRequest._reject(storedError);
		        });
		        stream._writeRequests = new SimpleQueue();
		        if (stream._pendingAbortRequest === undefined) {
		            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
		            return;
		        }
		        const abortRequest = stream._pendingAbortRequest;
		        stream._pendingAbortRequest = undefined;
		        if (abortRequest._wasAlreadyErroring) {
		            abortRequest._reject(storedError);
		            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
		            return;
		        }
		        const promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
		        uponPromise(promise, () => {
		            abortRequest._resolve();
		            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
		            return null;
		        }, (reason) => {
		            abortRequest._reject(reason);
		            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
		            return null;
		        });
		    }
		    function WritableStreamFinishInFlightWrite(stream) {
		        stream._inFlightWriteRequest._resolve(undefined);
		        stream._inFlightWriteRequest = undefined;
		    }
		    function WritableStreamFinishInFlightWriteWithError(stream, error) {
		        stream._inFlightWriteRequest._reject(error);
		        stream._inFlightWriteRequest = undefined;
		        WritableStreamDealWithRejection(stream, error);
		    }
		    function WritableStreamFinishInFlightClose(stream) {
		        stream._inFlightCloseRequest._resolve(undefined);
		        stream._inFlightCloseRequest = undefined;
		        const state = stream._state;
		        if (state === 'erroring') {
		            // The error was too late to do anything, so it is ignored.
		            stream._storedError = undefined;
		            if (stream._pendingAbortRequest !== undefined) {
		                stream._pendingAbortRequest._resolve();
		                stream._pendingAbortRequest = undefined;
		            }
		        }
		        stream._state = 'closed';
		        const writer = stream._writer;
		        if (writer !== undefined) {
		            defaultWriterClosedPromiseResolve(writer);
		        }
		    }
		    function WritableStreamFinishInFlightCloseWithError(stream, error) {
		        stream._inFlightCloseRequest._reject(error);
		        stream._inFlightCloseRequest = undefined;
		        // Never execute sink abort() after sink close().
		        if (stream._pendingAbortRequest !== undefined) {
		            stream._pendingAbortRequest._reject(error);
		            stream._pendingAbortRequest = undefined;
		        }
		        WritableStreamDealWithRejection(stream, error);
		    }
		    // TODO(ricea): Fix alphabetical order.
		    function WritableStreamCloseQueuedOrInFlight(stream) {
		        if (stream._closeRequest === undefined && stream._inFlightCloseRequest === undefined) {
		            return false;
		        }
		        return true;
		    }
		    function WritableStreamHasOperationMarkedInFlight(stream) {
		        if (stream._inFlightWriteRequest === undefined && stream._inFlightCloseRequest === undefined) {
		            return false;
		        }
		        return true;
		    }
		    function WritableStreamMarkCloseRequestInFlight(stream) {
		        stream._inFlightCloseRequest = stream._closeRequest;
		        stream._closeRequest = undefined;
		    }
		    function WritableStreamMarkFirstWriteRequestInFlight(stream) {
		        stream._inFlightWriteRequest = stream._writeRequests.shift();
		    }
		    function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
		        if (stream._closeRequest !== undefined) {
		            stream._closeRequest._reject(stream._storedError);
		            stream._closeRequest = undefined;
		        }
		        const writer = stream._writer;
		        if (writer !== undefined) {
		            defaultWriterClosedPromiseReject(writer, stream._storedError);
		        }
		    }
		    function WritableStreamUpdateBackpressure(stream, backpressure) {
		        const writer = stream._writer;
		        if (writer !== undefined && backpressure !== stream._backpressure) {
		            if (backpressure) {
		                defaultWriterReadyPromiseReset(writer);
		            }
		            else {
		                defaultWriterReadyPromiseResolve(writer);
		            }
		        }
		        stream._backpressure = backpressure;
		    }
		    /**
		     * A default writer vended by a {@link WritableStream}.
		     *
		     * @public
		     */
		    class WritableStreamDefaultWriter {
		        constructor(stream) {
		            assertRequiredArgument(stream, 1, 'WritableStreamDefaultWriter');
		            assertWritableStream(stream, 'First parameter');
		            if (IsWritableStreamLocked(stream)) {
		                throw new TypeError('This stream has already been locked for exclusive writing by another writer');
		            }
		            this._ownerWritableStream = stream;
		            stream._writer = this;
		            const state = stream._state;
		            if (state === 'writable') {
		                if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) {
		                    defaultWriterReadyPromiseInitialize(this);
		                }
		                else {
		                    defaultWriterReadyPromiseInitializeAsResolved(this);
		                }
		                defaultWriterClosedPromiseInitialize(this);
		            }
		            else if (state === 'erroring') {
		                defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
		                defaultWriterClosedPromiseInitialize(this);
		            }
		            else if (state === 'closed') {
		                defaultWriterReadyPromiseInitializeAsResolved(this);
		                defaultWriterClosedPromiseInitializeAsResolved(this);
		            }
		            else {
		                const storedError = stream._storedError;
		                defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
		                defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
		            }
		        }
		        /**
		         * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
		         * the writer’s lock is released before the stream finishes closing.
		         */
		        get closed() {
		            if (!IsWritableStreamDefaultWriter(this)) {
		                return promiseRejectedWith(defaultWriterBrandCheckException('closed'));
		            }
		            return this._closedPromise;
		        }
		        /**
		         * Returns the desired size to fill the stream’s internal queue. It can be negative, if the queue is over-full.
		         * A producer can use this information to determine the right amount of data to write.
		         *
		         * It will be `null` if the stream cannot be successfully written to (due to either being errored, or having an abort
		         * queued up). It will return zero if the stream is closed. And the getter will throw an exception if invoked when
		         * the writer’s lock is released.
		         */
		        get desiredSize() {
		            if (!IsWritableStreamDefaultWriter(this)) {
		                throw defaultWriterBrandCheckException('desiredSize');
		            }
		            if (this._ownerWritableStream === undefined) {
		                throw defaultWriterLockException('desiredSize');
		            }
		            return WritableStreamDefaultWriterGetDesiredSize(this);
		        }
		        /**
		         * Returns a promise that will be fulfilled when the desired size to fill the stream’s internal queue transitions
		         * from non-positive to positive, signaling that it is no longer applying backpressure. Once the desired size dips
		         * back to zero or below, the getter will return a new promise that stays pending until the next transition.
		         *
		         * If the stream becomes errored or aborted, or the writer’s lock is released, the returned promise will become
		         * rejected.
		         */
		        get ready() {
		            if (!IsWritableStreamDefaultWriter(this)) {
		                return promiseRejectedWith(defaultWriterBrandCheckException('ready'));
		            }
		            return this._readyPromise;
		        }
		        /**
		         * If the reader is active, behaves the same as {@link WritableStream.abort | stream.abort(reason)}.
		         */
		        abort(reason = undefined) {
		            if (!IsWritableStreamDefaultWriter(this)) {
		                return promiseRejectedWith(defaultWriterBrandCheckException('abort'));
		            }
		            if (this._ownerWritableStream === undefined) {
		                return promiseRejectedWith(defaultWriterLockException('abort'));
		            }
		            return WritableStreamDefaultWriterAbort(this, reason);
		        }
		        /**
		         * If the reader is active, behaves the same as {@link WritableStream.close | stream.close()}.
		         */
		        close() {
		            if (!IsWritableStreamDefaultWriter(this)) {
		                return promiseRejectedWith(defaultWriterBrandCheckException('close'));
		            }
		            const stream = this._ownerWritableStream;
		            if (stream === undefined) {
		                return promiseRejectedWith(defaultWriterLockException('close'));
		            }
		            if (WritableStreamCloseQueuedOrInFlight(stream)) {
		                return promiseRejectedWith(new TypeError('Cannot close an already-closing stream'));
		            }
		            return WritableStreamDefaultWriterClose(this);
		        }
		        /**
		         * Releases the writer’s lock on the corresponding stream. After the lock is released, the writer is no longer active.
		         * If the associated stream is errored when the lock is released, the writer will appear errored in the same way from
		         * now on; otherwise, the writer will appear closed.
		         *
		         * Note that the lock can still be released even if some ongoing writes have not yet finished (i.e. even if the
		         * promises returned from previous calls to {@link WritableStreamDefaultWriter.write | write()} have not yet settled).
		         * It’s not necessary to hold the lock on the writer for the duration of the write; the lock instead simply prevents
		         * other producers from writing in an interleaved manner.
		         */
		        releaseLock() {
		            if (!IsWritableStreamDefaultWriter(this)) {
		                throw defaultWriterBrandCheckException('releaseLock');
		            }
		            const stream = this._ownerWritableStream;
		            if (stream === undefined) {
		                return;
		            }
		            WritableStreamDefaultWriterRelease(this);
		        }
		        write(chunk = undefined) {
		            if (!IsWritableStreamDefaultWriter(this)) {
		                return promiseRejectedWith(defaultWriterBrandCheckException('write'));
		            }
		            if (this._ownerWritableStream === undefined) {
		                return promiseRejectedWith(defaultWriterLockException('write to'));
		            }
		            return WritableStreamDefaultWriterWrite(this, chunk);
		        }
		    }
		    Object.defineProperties(WritableStreamDefaultWriter.prototype, {
		        abort: { enumerable: true },
		        close: { enumerable: true },
		        releaseLock: { enumerable: true },
		        write: { enumerable: true },
		        closed: { enumerable: true },
		        desiredSize: { enumerable: true },
		        ready: { enumerable: true }
		    });
		    setFunctionName(WritableStreamDefaultWriter.prototype.abort, 'abort');
		    setFunctionName(WritableStreamDefaultWriter.prototype.close, 'close');
		    setFunctionName(WritableStreamDefaultWriter.prototype.releaseLock, 'releaseLock');
		    setFunctionName(WritableStreamDefaultWriter.prototype.write, 'write');
		    if (typeof Symbol.toStringTag === 'symbol') {
		        Object.defineProperty(WritableStreamDefaultWriter.prototype, Symbol.toStringTag, {
		            value: 'WritableStreamDefaultWriter',
		            configurable: true
		        });
		    }
		    // Abstract operations for the WritableStreamDefaultWriter.
		    function IsWritableStreamDefaultWriter(x) {
		        if (!typeIsObject(x)) {
		            return false;
		        }
		        if (!Object.prototype.hasOwnProperty.call(x, '_ownerWritableStream')) {
		            return false;
		        }
		        return x instanceof WritableStreamDefaultWriter;
		    }
		    // A client of WritableStreamDefaultWriter may use these functions directly to bypass state check.
		    function WritableStreamDefaultWriterAbort(writer, reason) {
		        const stream = writer._ownerWritableStream;
		        return WritableStreamAbort(stream, reason);
		    }
		    function WritableStreamDefaultWriterClose(writer) {
		        const stream = writer._ownerWritableStream;
		        return WritableStreamClose(stream);
		    }
		    function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
		        const stream = writer._ownerWritableStream;
		        const state = stream._state;
		        if (WritableStreamCloseQueuedOrInFlight(stream) || state === 'closed') {
		            return promiseResolvedWith(undefined);
		        }
		        if (state === 'errored') {
		            return promiseRejectedWith(stream._storedError);
		        }
		        return WritableStreamDefaultWriterClose(writer);
		    }
		    function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
		        if (writer._closedPromiseState === 'pending') {
		            defaultWriterClosedPromiseReject(writer, error);
		        }
		        else {
		            defaultWriterClosedPromiseResetToRejected(writer, error);
		        }
		    }
		    function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
		        if (writer._readyPromiseState === 'pending') {
		            defaultWriterReadyPromiseReject(writer, error);
		        }
		        else {
		            defaultWriterReadyPromiseResetToRejected(writer, error);
		        }
		    }
		    function WritableStreamDefaultWriterGetDesiredSize(writer) {
		        const stream = writer._ownerWritableStream;
		        const state = stream._state;
		        if (state === 'errored' || state === 'erroring') {
		            return null;
		        }
		        if (state === 'closed') {
		            return 0;
		        }
		        return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
		    }
		    function WritableStreamDefaultWriterRelease(writer) {
		        const stream = writer._ownerWritableStream;
		        const releasedError = new TypeError(`Writer was released and can no longer be used to monitor the stream's closedness`);
		        WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
		        // The state transitions to "errored" before the sink abort() method runs, but the writer.closed promise is not
		        // rejected until afterwards. This means that simply testing state will not work.
		        WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
		        stream._writer = undefined;
		        writer._ownerWritableStream = undefined;
		    }
		    function WritableStreamDefaultWriterWrite(writer, chunk) {
		        const stream = writer._ownerWritableStream;
		        const controller = stream._writableStreamController;
		        const chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
		        if (stream !== writer._ownerWritableStream) {
		            return promiseRejectedWith(defaultWriterLockException('write to'));
		        }
		        const state = stream._state;
		        if (state === 'errored') {
		            return promiseRejectedWith(stream._storedError);
		        }
		        if (WritableStreamCloseQueuedOrInFlight(stream) || state === 'closed') {
		            return promiseRejectedWith(new TypeError('The stream is closing or closed and cannot be written to'));
		        }
		        if (state === 'erroring') {
		            return promiseRejectedWith(stream._storedError);
		        }
		        const promise = WritableStreamAddWriteRequest(stream);
		        WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
		        return promise;
		    }
		    const closeSentinel = {};
		    /**
		     * Allows control of a {@link WritableStream | writable stream}'s state and internal queue.
		     *
		     * @public
		     */
		    class WritableStreamDefaultController {
		        constructor() {
		            throw new TypeError('Illegal constructor');
		        }
		        /**
		         * The reason which was passed to `WritableStream.abort(reason)` when the stream was aborted.
		         *
		         * @deprecated
		         *  This property has been removed from the specification, see https://github.com/whatwg/streams/pull/1177.
		         *  Use {@link WritableStreamDefaultController.signal}'s `reason` instead.
		         */
		        get abortReason() {
		            if (!IsWritableStreamDefaultController(this)) {
		                throw defaultControllerBrandCheckException$2('abortReason');
		            }
		            return this._abortReason;
		        }
		        /**
		         * An `AbortSignal` that can be used to abort the pending write or close operation when the stream is aborted.
		         */
		        get signal() {
		            if (!IsWritableStreamDefaultController(this)) {
		                throw defaultControllerBrandCheckException$2('signal');
		            }
		            if (this._abortController === undefined) {
		                // Older browsers or older Node versions may not support `AbortController` or `AbortSignal`.
		                // We don't want to bundle and ship an `AbortController` polyfill together with our polyfill,
		                // so instead we only implement support for `signal` if we find a global `AbortController` constructor.
		                throw new TypeError('WritableStreamDefaultController.prototype.signal is not supported');
		            }
		            return this._abortController.signal;
		        }
		        /**
		         * Closes the controlled writable stream, making all future interactions with it fail with the given error `e`.
		         *
		         * This method is rarely used, since usually it suffices to return a rejected promise from one of the underlying
		         * sink's methods. However, it can be useful for suddenly shutting down a stream in response to an event outside the
		         * normal lifecycle of interactions with the underlying sink.
		         */
		        error(e = undefined) {
		            if (!IsWritableStreamDefaultController(this)) {
		                throw defaultControllerBrandCheckException$2('error');
		            }
		            const state = this._controlledWritableStream._state;
		            if (state !== 'writable') {
		                // The stream is closed, errored or will be soon. The sink can't do anything useful if it gets an error here, so
		                // just treat it as a no-op.
		                return;
		            }
		            WritableStreamDefaultControllerError(this, e);
		        }
		        /** @internal */
		        [AbortSteps](reason) {
		            const result = this._abortAlgorithm(reason);
		            WritableStreamDefaultControllerClearAlgorithms(this);
		            return result;
		        }
		        /** @internal */
		        [ErrorSteps]() {
		            ResetQueue(this);
		        }
		    }
		    Object.defineProperties(WritableStreamDefaultController.prototype, {
		        abortReason: { enumerable: true },
		        signal: { enumerable: true },
		        error: { enumerable: true }
		    });
		    if (typeof Symbol.toStringTag === 'symbol') {
		        Object.defineProperty(WritableStreamDefaultController.prototype, Symbol.toStringTag, {
		            value: 'WritableStreamDefaultController',
		            configurable: true
		        });
		    }
		    // Abstract operations implementing interface required by the WritableStream.
		    function IsWritableStreamDefaultController(x) {
		        if (!typeIsObject(x)) {
		            return false;
		        }
		        if (!Object.prototype.hasOwnProperty.call(x, '_controlledWritableStream')) {
		            return false;
		        }
		        return x instanceof WritableStreamDefaultController;
		    }
		    function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
		        controller._controlledWritableStream = stream;
		        stream._writableStreamController = controller;
		        // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
		        controller._queue = undefined;
		        controller._queueTotalSize = undefined;
		        ResetQueue(controller);
		        controller._abortReason = undefined;
		        controller._abortController = createAbortController();
		        controller._started = false;
		        controller._strategySizeAlgorithm = sizeAlgorithm;
		        controller._strategyHWM = highWaterMark;
		        controller._writeAlgorithm = writeAlgorithm;
		        controller._closeAlgorithm = closeAlgorithm;
		        controller._abortAlgorithm = abortAlgorithm;
		        const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
		        WritableStreamUpdateBackpressure(stream, backpressure);
		        const startResult = startAlgorithm();
		        const startPromise = promiseResolvedWith(startResult);
		        uponPromise(startPromise, () => {
		            controller._started = true;
		            WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
		            return null;
		        }, r => {
		            controller._started = true;
		            WritableStreamDealWithRejection(stream, r);
		            return null;
		        });
		    }
		    function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
		        const controller = Object.create(WritableStreamDefaultController.prototype);
		        let startAlgorithm;
		        let writeAlgorithm;
		        let closeAlgorithm;
		        let abortAlgorithm;
		        if (underlyingSink.start !== undefined) {
		            startAlgorithm = () => underlyingSink.start(controller);
		        }
		        else {
		            startAlgorithm = () => undefined;
		        }
		        if (underlyingSink.write !== undefined) {
		            writeAlgorithm = chunk => underlyingSink.write(chunk, controller);
		        }
		        else {
		            writeAlgorithm = () => promiseResolvedWith(undefined);
		        }
		        if (underlyingSink.close !== undefined) {
		            closeAlgorithm = () => underlyingSink.close();
		        }
		        else {
		            closeAlgorithm = () => promiseResolvedWith(undefined);
		        }
		        if (underlyingSink.abort !== undefined) {
		            abortAlgorithm = reason => underlyingSink.abort(reason);
		        }
		        else {
		            abortAlgorithm = () => promiseResolvedWith(undefined);
		        }
		        SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
		    }
		    // ClearAlgorithms may be called twice. Erroring the same stream in multiple ways will often result in redundant calls.
		    function WritableStreamDefaultControllerClearAlgorithms(controller) {
		        controller._writeAlgorithm = undefined;
		        controller._closeAlgorithm = undefined;
		        controller._abortAlgorithm = undefined;
		        controller._strategySizeAlgorithm = undefined;
		    }
		    function WritableStreamDefaultControllerClose(controller) {
		        EnqueueValueWithSize(controller, closeSentinel, 0);
		        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
		    }
		    function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
		        try {
		            return controller._strategySizeAlgorithm(chunk);
		        }
		        catch (chunkSizeE) {
		            WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
		            return 1;
		        }
		    }
		    function WritableStreamDefaultControllerGetDesiredSize(controller) {
		        return controller._strategyHWM - controller._queueTotalSize;
		    }
		    function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
		        try {
		            EnqueueValueWithSize(controller, chunk, chunkSize);
		        }
		        catch (enqueueE) {
		            WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
		            return;
		        }
		        const stream = controller._controlledWritableStream;
		        if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === 'writable') {
		            const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
		            WritableStreamUpdateBackpressure(stream, backpressure);
		        }
		        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
		    }
		    // Abstract operations for the WritableStreamDefaultController.
		    function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
		        const stream = controller._controlledWritableStream;
		        if (!controller._started) {
		            return;
		        }
		        if (stream._inFlightWriteRequest !== undefined) {
		            return;
		        }
		        const state = stream._state;
		        if (state === 'erroring') {
		            WritableStreamFinishErroring(stream);
		            return;
		        }
		        if (controller._queue.length === 0) {
		            return;
		        }
		        const value = PeekQueueValue(controller);
		        if (value === closeSentinel) {
		            WritableStreamDefaultControllerProcessClose(controller);
		        }
		        else {
		            WritableStreamDefaultControllerProcessWrite(controller, value);
		        }
		    }
		    function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
		        if (controller._controlledWritableStream._state === 'writable') {
		            WritableStreamDefaultControllerError(controller, error);
		        }
		    }
		    function WritableStreamDefaultControllerProcessClose(controller) {
		        const stream = controller._controlledWritableStream;
		        WritableStreamMarkCloseRequestInFlight(stream);
		        DequeueValue(controller);
		        const sinkClosePromise = controller._closeAlgorithm();
		        WritableStreamDefaultControllerClearAlgorithms(controller);
		        uponPromise(sinkClosePromise, () => {
		            WritableStreamFinishInFlightClose(stream);
		            return null;
		        }, reason => {
		            WritableStreamFinishInFlightCloseWithError(stream, reason);
		            return null;
		        });
		    }
		    function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
		        const stream = controller._controlledWritableStream;
		        WritableStreamMarkFirstWriteRequestInFlight(stream);
		        const sinkWritePromise = controller._writeAlgorithm(chunk);
		        uponPromise(sinkWritePromise, () => {
		            WritableStreamFinishInFlightWrite(stream);
		            const state = stream._state;
		            DequeueValue(controller);
		            if (!WritableStreamCloseQueuedOrInFlight(stream) && state === 'writable') {
		                const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
		                WritableStreamUpdateBackpressure(stream, backpressure);
		            }
		            WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
		            return null;
		        }, reason => {
		            if (stream._state === 'writable') {
		                WritableStreamDefaultControllerClearAlgorithms(controller);
		            }
		            WritableStreamFinishInFlightWriteWithError(stream, reason);
		            return null;
		        });
		    }
		    function WritableStreamDefaultControllerGetBackpressure(controller) {
		        const desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
		        return desiredSize <= 0;
		    }
		    // A client of WritableStreamDefaultController may use these functions directly to bypass state check.
		    function WritableStreamDefaultControllerError(controller, error) {
		        const stream = controller._controlledWritableStream;
		        WritableStreamDefaultControllerClearAlgorithms(controller);
		        WritableStreamStartErroring(stream, error);
		    }
		    // Helper functions for the WritableStream.
		    function streamBrandCheckException$2(name) {
		        return new TypeError(`WritableStream.prototype.${name} can only be used on a WritableStream`);
		    }
		    // Helper functions for the WritableStreamDefaultController.
		    function defaultControllerBrandCheckException$2(name) {
		        return new TypeError(`WritableStreamDefaultController.prototype.${name} can only be used on a WritableStreamDefaultController`);
		    }
		    // Helper functions for the WritableStreamDefaultWriter.
		    function defaultWriterBrandCheckException(name) {
		        return new TypeError(`WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`);
		    }
		    function defaultWriterLockException(name) {
		        return new TypeError('Cannot ' + name + ' a stream using a released writer');
		    }
		    function defaultWriterClosedPromiseInitialize(writer) {
		        writer._closedPromise = newPromise((resolve, reject) => {
		            writer._closedPromise_resolve = resolve;
		            writer._closedPromise_reject = reject;
		            writer._closedPromiseState = 'pending';
		        });
		    }
		    function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
		        defaultWriterClosedPromiseInitialize(writer);
		        defaultWriterClosedPromiseReject(writer, reason);
		    }
		    function defaultWriterClosedPromiseInitializeAsResolved(writer) {
		        defaultWriterClosedPromiseInitialize(writer);
		        defaultWriterClosedPromiseResolve(writer);
		    }
		    function defaultWriterClosedPromiseReject(writer, reason) {
		        if (writer._closedPromise_reject === undefined) {
		            return;
		        }
		        setPromiseIsHandledToTrue(writer._closedPromise);
		        writer._closedPromise_reject(reason);
		        writer._closedPromise_resolve = undefined;
		        writer._closedPromise_reject = undefined;
		        writer._closedPromiseState = 'rejected';
		    }
		    function defaultWriterClosedPromiseResetToRejected(writer, reason) {
		        defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
		    }
		    function defaultWriterClosedPromiseResolve(writer) {
		        if (writer._closedPromise_resolve === undefined) {
		            return;
		        }
		        writer._closedPromise_resolve(undefined);
		        writer._closedPromise_resolve = undefined;
		        writer._closedPromise_reject = undefined;
		        writer._closedPromiseState = 'resolved';
		    }
		    function defaultWriterReadyPromiseInitialize(writer) {
		        writer._readyPromise = newPromise((resolve, reject) => {
		            writer._readyPromise_resolve = resolve;
		            writer._readyPromise_reject = reject;
		        });
		        writer._readyPromiseState = 'pending';
		    }
		    function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
		        defaultWriterReadyPromiseInitialize(writer);
		        defaultWriterReadyPromiseReject(writer, reason);
		    }
		    function defaultWriterReadyPromiseInitializeAsResolved(writer) {
		        defaultWriterReadyPromiseInitialize(writer);
		        defaultWriterReadyPromiseResolve(writer);
		    }
		    function defaultWriterReadyPromiseReject(writer, reason) {
		        if (writer._readyPromise_reject === undefined) {
		            return;
		        }
		        setPromiseIsHandledToTrue(writer._readyPromise);
		        writer._readyPromise_reject(reason);
		        writer._readyPromise_resolve = undefined;
		        writer._readyPromise_reject = undefined;
		        writer._readyPromiseState = 'rejected';
		    }
		    function defaultWriterReadyPromiseReset(writer) {
		        defaultWriterReadyPromiseInitialize(writer);
		    }
		    function defaultWriterReadyPromiseResetToRejected(writer, reason) {
		        defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
		    }
		    function defaultWriterReadyPromiseResolve(writer) {
		        if (writer._readyPromise_resolve === undefined) {
		            return;
		        }
		        writer._readyPromise_resolve(undefined);
		        writer._readyPromise_resolve = undefined;
		        writer._readyPromise_reject = undefined;
		        writer._readyPromiseState = 'fulfilled';
		    }

		    /// <reference lib="dom" />
		    function getGlobals() {
		        if (typeof globalThis !== 'undefined') {
		            return globalThis;
		        }
		        else if (typeof self !== 'undefined') {
		            return self;
		        }
		        else if (typeof commonjsGlobal !== 'undefined') {
		            return commonjsGlobal;
		        }
		        return undefined;
		    }
		    const globals = getGlobals();

		    /// <reference types="node" />
		    function isDOMExceptionConstructor(ctor) {
		        if (!(typeof ctor === 'function' || typeof ctor === 'object')) {
		            return false;
		        }
		        if (ctor.name !== 'DOMException') {
		            return false;
		        }
		        try {
		            new ctor();
		            return true;
		        }
		        catch (_a) {
		            return false;
		        }
		    }
		    /**
		     * Support:
		     * - Web browsers
		     * - Node 18 and higher (https://github.com/nodejs/node/commit/e4b1fb5e6422c1ff151234bb9de792d45dd88d87)
		     */
		    function getFromGlobal() {
		        const ctor = globals === null || globals === void 0 ? void 0 : globals.DOMException;
		        return isDOMExceptionConstructor(ctor) ? ctor : undefined;
		    }
		    /**
		     * Support:
		     * - All platforms
		     */
		    function createPolyfill() {
		        // eslint-disable-next-line @typescript-eslint/no-shadow
		        const ctor = function DOMException(message, name) {
		            this.message = message || '';
		            this.name = name || 'Error';
		            if (Error.captureStackTrace) {
		                Error.captureStackTrace(this, this.constructor);
		            }
		        };
		        setFunctionName(ctor, 'DOMException');
		        ctor.prototype = Object.create(Error.prototype);
		        Object.defineProperty(ctor.prototype, 'constructor', { value: ctor, writable: true, configurable: true });
		        return ctor;
		    }
		    // eslint-disable-next-line @typescript-eslint/no-redeclare
		    const DOMException = getFromGlobal() || createPolyfill();

		    function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
		        const reader = AcquireReadableStreamDefaultReader(source);
		        const writer = AcquireWritableStreamDefaultWriter(dest);
		        source._disturbed = true;
		        let shuttingDown = false;
		        // This is used to keep track of the spec's requirement that we wait for ongoing writes during shutdown.
		        let currentWrite = promiseResolvedWith(undefined);
		        return newPromise((resolve, reject) => {
		            let abortAlgorithm;
		            if (signal !== undefined) {
		                abortAlgorithm = () => {
		                    const error = signal.reason !== undefined ? signal.reason : new DOMException('Aborted', 'AbortError');
		                    const actions = [];
		                    if (!preventAbort) {
		                        actions.push(() => {
		                            if (dest._state === 'writable') {
		                                return WritableStreamAbort(dest, error);
		                            }
		                            return promiseResolvedWith(undefined);
		                        });
		                    }
		                    if (!preventCancel) {
		                        actions.push(() => {
		                            if (source._state === 'readable') {
		                                return ReadableStreamCancel(source, error);
		                            }
		                            return promiseResolvedWith(undefined);
		                        });
		                    }
		                    shutdownWithAction(() => Promise.all(actions.map(action => action())), true, error);
		                };
		                if (signal.aborted) {
		                    abortAlgorithm();
		                    return;
		                }
		                signal.addEventListener('abort', abortAlgorithm);
		            }
		            // Using reader and writer, read all chunks from this and write them to dest
		            // - Backpressure must be enforced
		            // - Shutdown must stop all activity
		            function pipeLoop() {
		                return newPromise((resolveLoop, rejectLoop) => {
		                    function next(done) {
		                        if (done) {
		                            resolveLoop();
		                        }
		                        else {
		                            // Use `PerformPromiseThen` instead of `uponPromise` to avoid
		                            // adding unnecessary `.catch(rethrowAssertionErrorRejection)` handlers
		                            PerformPromiseThen(pipeStep(), next, rejectLoop);
		                        }
		                    }
		                    next(false);
		                });
		            }
		            function pipeStep() {
		                if (shuttingDown) {
		                    return promiseResolvedWith(true);
		                }
		                return PerformPromiseThen(writer._readyPromise, () => {
		                    return newPromise((resolveRead, rejectRead) => {
		                        ReadableStreamDefaultReaderRead(reader, {
		                            _chunkSteps: chunk => {
		                                currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), undefined, noop);
		                                resolveRead(false);
		                            },
		                            _closeSteps: () => resolveRead(true),
		                            _errorSteps: rejectRead
		                        });
		                    });
		                });
		            }
		            // Errors must be propagated forward
		            isOrBecomesErrored(source, reader._closedPromise, storedError => {
		                if (!preventAbort) {
		                    shutdownWithAction(() => WritableStreamAbort(dest, storedError), true, storedError);
		                }
		                else {
		                    shutdown(true, storedError);
		                }
		                return null;
		            });
		            // Errors must be propagated backward
		            isOrBecomesErrored(dest, writer._closedPromise, storedError => {
		                if (!preventCancel) {
		                    shutdownWithAction(() => ReadableStreamCancel(source, storedError), true, storedError);
		                }
		                else {
		                    shutdown(true, storedError);
		                }
		                return null;
		            });
		            // Closing must be propagated forward
		            isOrBecomesClosed(source, reader._closedPromise, () => {
		                if (!preventClose) {
		                    shutdownWithAction(() => WritableStreamDefaultWriterCloseWithErrorPropagation(writer));
		                }
		                else {
		                    shutdown();
		                }
		                return null;
		            });
		            // Closing must be propagated backward
		            if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === 'closed') {
		                const destClosed = new TypeError('the destination writable stream closed before all data could be piped to it');
		                if (!preventCancel) {
		                    shutdownWithAction(() => ReadableStreamCancel(source, destClosed), true, destClosed);
		                }
		                else {
		                    shutdown(true, destClosed);
		                }
		            }
		            setPromiseIsHandledToTrue(pipeLoop());
		            function waitForWritesToFinish() {
		                // Another write may have started while we were waiting on this currentWrite, so we have to be sure to wait
		                // for that too.
		                const oldCurrentWrite = currentWrite;
		                return PerformPromiseThen(currentWrite, () => oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : undefined);
		            }
		            function isOrBecomesErrored(stream, promise, action) {
		                if (stream._state === 'errored') {
		                    action(stream._storedError);
		                }
		                else {
		                    uponRejection(promise, action);
		                }
		            }
		            function isOrBecomesClosed(stream, promise, action) {
		                if (stream._state === 'closed') {
		                    action();
		                }
		                else {
		                    uponFulfillment(promise, action);
		                }
		            }
		            function shutdownWithAction(action, originalIsError, originalError) {
		                if (shuttingDown) {
		                    return;
		                }
		                shuttingDown = true;
		                if (dest._state === 'writable' && !WritableStreamCloseQueuedOrInFlight(dest)) {
		                    uponFulfillment(waitForWritesToFinish(), doTheRest);
		                }
		                else {
		                    doTheRest();
		                }
		                function doTheRest() {
		                    uponPromise(action(), () => finalize(originalIsError, originalError), newError => finalize(true, newError));
		                    return null;
		                }
		            }
		            function shutdown(isError, error) {
		                if (shuttingDown) {
		                    return;
		                }
		                shuttingDown = true;
		                if (dest._state === 'writable' && !WritableStreamCloseQueuedOrInFlight(dest)) {
		                    uponFulfillment(waitForWritesToFinish(), () => finalize(isError, error));
		                }
		                else {
		                    finalize(isError, error);
		                }
		            }
		            function finalize(isError, error) {
		                WritableStreamDefaultWriterRelease(writer);
		                ReadableStreamReaderGenericRelease(reader);
		                if (signal !== undefined) {
		                    signal.removeEventListener('abort', abortAlgorithm);
		                }
		                if (isError) {
		                    reject(error);
		                }
		                else {
		                    resolve(undefined);
		                }
		                return null;
		            }
		        });
		    }

		    /**
		     * Allows control of a {@link ReadableStream | readable stream}'s state and internal queue.
		     *
		     * @public
		     */
		    class ReadableStreamDefaultController {
		        constructor() {
		            throw new TypeError('Illegal constructor');
		        }
		        /**
		         * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
		         * over-full. An underlying source ought to use this information to determine when and how to apply backpressure.
		         */
		        get desiredSize() {
		            if (!IsReadableStreamDefaultController(this)) {
		                throw defaultControllerBrandCheckException$1('desiredSize');
		            }
		            return ReadableStreamDefaultControllerGetDesiredSize(this);
		        }
		        /**
		         * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
		         * the stream, but once those are read, the stream will become closed.
		         */
		        close() {
		            if (!IsReadableStreamDefaultController(this)) {
		                throw defaultControllerBrandCheckException$1('close');
		            }
		            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
		                throw new TypeError('The stream is not in a state that permits close');
		            }
		            ReadableStreamDefaultControllerClose(this);
		        }
		        enqueue(chunk = undefined) {
		            if (!IsReadableStreamDefaultController(this)) {
		                throw defaultControllerBrandCheckException$1('enqueue');
		            }
		            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
		                throw new TypeError('The stream is not in a state that permits enqueue');
		            }
		            return ReadableStreamDefaultControllerEnqueue(this, chunk);
		        }
		        /**
		         * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
		         */
		        error(e = undefined) {
		            if (!IsReadableStreamDefaultController(this)) {
		                throw defaultControllerBrandCheckException$1('error');
		            }
		            ReadableStreamDefaultControllerError(this, e);
		        }
		        /** @internal */
		        [CancelSteps](reason) {
		            ResetQueue(this);
		            const result = this._cancelAlgorithm(reason);
		            ReadableStreamDefaultControllerClearAlgorithms(this);
		            return result;
		        }
		        /** @internal */
		        [PullSteps](readRequest) {
		            const stream = this._controlledReadableStream;
		            if (this._queue.length > 0) {
		                const chunk = DequeueValue(this);
		                if (this._closeRequested && this._queue.length === 0) {
		                    ReadableStreamDefaultControllerClearAlgorithms(this);
		                    ReadableStreamClose(stream);
		                }
		                else {
		                    ReadableStreamDefaultControllerCallPullIfNeeded(this);
		                }
		                readRequest._chunkSteps(chunk);
		            }
		            else {
		                ReadableStreamAddReadRequest(stream, readRequest);
		                ReadableStreamDefaultControllerCallPullIfNeeded(this);
		            }
		        }
		        /** @internal */
		        [ReleaseSteps]() {
		            // Do nothing.
		        }
		    }
		    Object.defineProperties(ReadableStreamDefaultController.prototype, {
		        close: { enumerable: true },
		        enqueue: { enumerable: true },
		        error: { enumerable: true },
		        desiredSize: { enumerable: true }
		    });
		    setFunctionName(ReadableStreamDefaultController.prototype.close, 'close');
		    setFunctionName(ReadableStreamDefaultController.prototype.enqueue, 'enqueue');
		    setFunctionName(ReadableStreamDefaultController.prototype.error, 'error');
		    if (typeof Symbol.toStringTag === 'symbol') {
		        Object.defineProperty(ReadableStreamDefaultController.prototype, Symbol.toStringTag, {
		            value: 'ReadableStreamDefaultController',
		            configurable: true
		        });
		    }
		    // Abstract operations for the ReadableStreamDefaultController.
		    function IsReadableStreamDefaultController(x) {
		        if (!typeIsObject(x)) {
		            return false;
		        }
		        if (!Object.prototype.hasOwnProperty.call(x, '_controlledReadableStream')) {
		            return false;
		        }
		        return x instanceof ReadableStreamDefaultController;
		    }
		    function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
		        const shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
		        if (!shouldPull) {
		            return;
		        }
		        if (controller._pulling) {
		            controller._pullAgain = true;
		            return;
		        }
		        controller._pulling = true;
		        const pullPromise = controller._pullAlgorithm();
		        uponPromise(pullPromise, () => {
		            controller._pulling = false;
		            if (controller._pullAgain) {
		                controller._pullAgain = false;
		                ReadableStreamDefaultControllerCallPullIfNeeded(controller);
		            }
		            return null;
		        }, e => {
		            ReadableStreamDefaultControllerError(controller, e);
		            return null;
		        });
		    }
		    function ReadableStreamDefaultControllerShouldCallPull(controller) {
		        const stream = controller._controlledReadableStream;
		        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
		            return false;
		        }
		        if (!controller._started) {
		            return false;
		        }
		        if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
		            return true;
		        }
		        const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
		        if (desiredSize > 0) {
		            return true;
		        }
		        return false;
		    }
		    function ReadableStreamDefaultControllerClearAlgorithms(controller) {
		        controller._pullAlgorithm = undefined;
		        controller._cancelAlgorithm = undefined;
		        controller._strategySizeAlgorithm = undefined;
		    }
		    // A client of ReadableStreamDefaultController may use these functions directly to bypass state check.
		    function ReadableStreamDefaultControllerClose(controller) {
		        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
		            return;
		        }
		        const stream = controller._controlledReadableStream;
		        controller._closeRequested = true;
		        if (controller._queue.length === 0) {
		            ReadableStreamDefaultControllerClearAlgorithms(controller);
		            ReadableStreamClose(stream);
		        }
		    }
		    function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
		        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
		            return;
		        }
		        const stream = controller._controlledReadableStream;
		        if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
		            ReadableStreamFulfillReadRequest(stream, chunk, false);
		        }
		        else {
		            let chunkSize;
		            try {
		                chunkSize = controller._strategySizeAlgorithm(chunk);
		            }
		            catch (chunkSizeE) {
		                ReadableStreamDefaultControllerError(controller, chunkSizeE);
		                throw chunkSizeE;
		            }
		            try {
		                EnqueueValueWithSize(controller, chunk, chunkSize);
		            }
		            catch (enqueueE) {
		                ReadableStreamDefaultControllerError(controller, enqueueE);
		                throw enqueueE;
		            }
		        }
		        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
		    }
		    function ReadableStreamDefaultControllerError(controller, e) {
		        const stream = controller._controlledReadableStream;
		        if (stream._state !== 'readable') {
		            return;
		        }
		        ResetQueue(controller);
		        ReadableStreamDefaultControllerClearAlgorithms(controller);
		        ReadableStreamError(stream, e);
		    }
		    function ReadableStreamDefaultControllerGetDesiredSize(controller) {
		        const state = controller._controlledReadableStream._state;
		        if (state === 'errored') {
		            return null;
		        }
		        if (state === 'closed') {
		            return 0;
		        }
		        return controller._strategyHWM - controller._queueTotalSize;
		    }
		    // This is used in the implementation of TransformStream.
		    function ReadableStreamDefaultControllerHasBackpressure(controller) {
		        if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
		            return false;
		        }
		        return true;
		    }
		    function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
		        const state = controller._controlledReadableStream._state;
		        if (!controller._closeRequested && state === 'readable') {
		            return true;
		        }
		        return false;
		    }
		    function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
		        controller._controlledReadableStream = stream;
		        controller._queue = undefined;
		        controller._queueTotalSize = undefined;
		        ResetQueue(controller);
		        controller._started = false;
		        controller._closeRequested = false;
		        controller._pullAgain = false;
		        controller._pulling = false;
		        controller._strategySizeAlgorithm = sizeAlgorithm;
		        controller._strategyHWM = highWaterMark;
		        controller._pullAlgorithm = pullAlgorithm;
		        controller._cancelAlgorithm = cancelAlgorithm;
		        stream._readableStreamController = controller;
		        const startResult = startAlgorithm();
		        uponPromise(promiseResolvedWith(startResult), () => {
		            controller._started = true;
		            ReadableStreamDefaultControllerCallPullIfNeeded(controller);
		            return null;
		        }, r => {
		            ReadableStreamDefaultControllerError(controller, r);
		            return null;
		        });
		    }
		    function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
		        const controller = Object.create(ReadableStreamDefaultController.prototype);
		        let startAlgorithm;
		        let pullAlgorithm;
		        let cancelAlgorithm;
		        if (underlyingSource.start !== undefined) {
		            startAlgorithm = () => underlyingSource.start(controller);
		        }
		        else {
		            startAlgorithm = () => undefined;
		        }
		        if (underlyingSource.pull !== undefined) {
		            pullAlgorithm = () => underlyingSource.pull(controller);
		        }
		        else {
		            pullAlgorithm = () => promiseResolvedWith(undefined);
		        }
		        if (underlyingSource.cancel !== undefined) {
		            cancelAlgorithm = reason => underlyingSource.cancel(reason);
		        }
		        else {
		            cancelAlgorithm = () => promiseResolvedWith(undefined);
		        }
		        SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
		    }
		    // Helper functions for the ReadableStreamDefaultController.
		    function defaultControllerBrandCheckException$1(name) {
		        return new TypeError(`ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`);
		    }

		    function ReadableStreamTee(stream, cloneForBranch2) {
		        if (IsReadableByteStreamController(stream._readableStreamController)) {
		            return ReadableByteStreamTee(stream);
		        }
		        return ReadableStreamDefaultTee(stream);
		    }
		    function ReadableStreamDefaultTee(stream, cloneForBranch2) {
		        const reader = AcquireReadableStreamDefaultReader(stream);
		        let reading = false;
		        let readAgain = false;
		        let canceled1 = false;
		        let canceled2 = false;
		        let reason1;
		        let reason2;
		        let branch1;
		        let branch2;
		        let resolveCancelPromise;
		        const cancelPromise = newPromise(resolve => {
		            resolveCancelPromise = resolve;
		        });
		        function pullAlgorithm() {
		            if (reading) {
		                readAgain = true;
		                return promiseResolvedWith(undefined);
		            }
		            reading = true;
		            const readRequest = {
		                _chunkSteps: chunk => {
		                    // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
		                    // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
		                    // successful synchronously-available reads get ahead of asynchronously-available errors.
		                    _queueMicrotask(() => {
		                        readAgain = false;
		                        const chunk1 = chunk;
		                        const chunk2 = chunk;
		                        // There is no way to access the cloning code right now in the reference implementation.
		                        // If we add one then we'll need an implementation for serializable objects.
		                        // if (!canceled2 && cloneForBranch2) {
		                        //   chunk2 = StructuredDeserialize(StructuredSerialize(chunk2));
		                        // }
		                        if (!canceled1) {
		                            ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, chunk1);
		                        }
		                        if (!canceled2) {
		                            ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, chunk2);
		                        }
		                        reading = false;
		                        if (readAgain) {
		                            pullAlgorithm();
		                        }
		                    });
		                },
		                _closeSteps: () => {
		                    reading = false;
		                    if (!canceled1) {
		                        ReadableStreamDefaultControllerClose(branch1._readableStreamController);
		                    }
		                    if (!canceled2) {
		                        ReadableStreamDefaultControllerClose(branch2._readableStreamController);
		                    }
		                    if (!canceled1 || !canceled2) {
		                        resolveCancelPromise(undefined);
		                    }
		                },
		                _errorSteps: () => {
		                    reading = false;
		                }
		            };
		            ReadableStreamDefaultReaderRead(reader, readRequest);
		            return promiseResolvedWith(undefined);
		        }
		        function cancel1Algorithm(reason) {
		            canceled1 = true;
		            reason1 = reason;
		            if (canceled2) {
		                const compositeReason = CreateArrayFromList([reason1, reason2]);
		                const cancelResult = ReadableStreamCancel(stream, compositeReason);
		                resolveCancelPromise(cancelResult);
		            }
		            return cancelPromise;
		        }
		        function cancel2Algorithm(reason) {
		            canceled2 = true;
		            reason2 = reason;
		            if (canceled1) {
		                const compositeReason = CreateArrayFromList([reason1, reason2]);
		                const cancelResult = ReadableStreamCancel(stream, compositeReason);
		                resolveCancelPromise(cancelResult);
		            }
		            return cancelPromise;
		        }
		        function startAlgorithm() {
		            // do nothing
		        }
		        branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
		        branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
		        uponRejection(reader._closedPromise, (r) => {
		            ReadableStreamDefaultControllerError(branch1._readableStreamController, r);
		            ReadableStreamDefaultControllerError(branch2._readableStreamController, r);
		            if (!canceled1 || !canceled2) {
		                resolveCancelPromise(undefined);
		            }
		            return null;
		        });
		        return [branch1, branch2];
		    }
		    function ReadableByteStreamTee(stream) {
		        let reader = AcquireReadableStreamDefaultReader(stream);
		        let reading = false;
		        let readAgainForBranch1 = false;
		        let readAgainForBranch2 = false;
		        let canceled1 = false;
		        let canceled2 = false;
		        let reason1;
		        let reason2;
		        let branch1;
		        let branch2;
		        let resolveCancelPromise;
		        const cancelPromise = newPromise(resolve => {
		            resolveCancelPromise = resolve;
		        });
		        function forwardReaderError(thisReader) {
		            uponRejection(thisReader._closedPromise, r => {
		                if (thisReader !== reader) {
		                    return null;
		                }
		                ReadableByteStreamControllerError(branch1._readableStreamController, r);
		                ReadableByteStreamControllerError(branch2._readableStreamController, r);
		                if (!canceled1 || !canceled2) {
		                    resolveCancelPromise(undefined);
		                }
		                return null;
		            });
		        }
		        function pullWithDefaultReader() {
		            if (IsReadableStreamBYOBReader(reader)) {
		                ReadableStreamReaderGenericRelease(reader);
		                reader = AcquireReadableStreamDefaultReader(stream);
		                forwardReaderError(reader);
		            }
		            const readRequest = {
		                _chunkSteps: chunk => {
		                    // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
		                    // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
		                    // successful synchronously-available reads get ahead of asynchronously-available errors.
		                    _queueMicrotask(() => {
		                        readAgainForBranch1 = false;
		                        readAgainForBranch2 = false;
		                        const chunk1 = chunk;
		                        let chunk2 = chunk;
		                        if (!canceled1 && !canceled2) {
		                            try {
		                                chunk2 = CloneAsUint8Array(chunk);
		                            }
		                            catch (cloneE) {
		                                ReadableByteStreamControllerError(branch1._readableStreamController, cloneE);
		                                ReadableByteStreamControllerError(branch2._readableStreamController, cloneE);
		                                resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
		                                return;
		                            }
		                        }
		                        if (!canceled1) {
		                            ReadableByteStreamControllerEnqueue(branch1._readableStreamController, chunk1);
		                        }
		                        if (!canceled2) {
		                            ReadableByteStreamControllerEnqueue(branch2._readableStreamController, chunk2);
		                        }
		                        reading = false;
		                        if (readAgainForBranch1) {
		                            pull1Algorithm();
		                        }
		                        else if (readAgainForBranch2) {
		                            pull2Algorithm();
		                        }
		                    });
		                },
		                _closeSteps: () => {
		                    reading = false;
		                    if (!canceled1) {
		                        ReadableByteStreamControllerClose(branch1._readableStreamController);
		                    }
		                    if (!canceled2) {
		                        ReadableByteStreamControllerClose(branch2._readableStreamController);
		                    }
		                    if (branch1._readableStreamController._pendingPullIntos.length > 0) {
		                        ReadableByteStreamControllerRespond(branch1._readableStreamController, 0);
		                    }
		                    if (branch2._readableStreamController._pendingPullIntos.length > 0) {
		                        ReadableByteStreamControllerRespond(branch2._readableStreamController, 0);
		                    }
		                    if (!canceled1 || !canceled2) {
		                        resolveCancelPromise(undefined);
		                    }
		                },
		                _errorSteps: () => {
		                    reading = false;
		                }
		            };
		            ReadableStreamDefaultReaderRead(reader, readRequest);
		        }
		        function pullWithBYOBReader(view, forBranch2) {
		            if (IsReadableStreamDefaultReader(reader)) {
		                ReadableStreamReaderGenericRelease(reader);
		                reader = AcquireReadableStreamBYOBReader(stream);
		                forwardReaderError(reader);
		            }
		            const byobBranch = forBranch2 ? branch2 : branch1;
		            const otherBranch = forBranch2 ? branch1 : branch2;
		            const readIntoRequest = {
		                _chunkSteps: chunk => {
		                    // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
		                    // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
		                    // successful synchronously-available reads get ahead of asynchronously-available errors.
		                    _queueMicrotask(() => {
		                        readAgainForBranch1 = false;
		                        readAgainForBranch2 = false;
		                        const byobCanceled = forBranch2 ? canceled2 : canceled1;
		                        const otherCanceled = forBranch2 ? canceled1 : canceled2;
		                        if (!otherCanceled) {
		                            let clonedChunk;
		                            try {
		                                clonedChunk = CloneAsUint8Array(chunk);
		                            }
		                            catch (cloneE) {
		                                ReadableByteStreamControllerError(byobBranch._readableStreamController, cloneE);
		                                ReadableByteStreamControllerError(otherBranch._readableStreamController, cloneE);
		                                resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
		                                return;
		                            }
		                            if (!byobCanceled) {
		                                ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
		                            }
		                            ReadableByteStreamControllerEnqueue(otherBranch._readableStreamController, clonedChunk);
		                        }
		                        else if (!byobCanceled) {
		                            ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
		                        }
		                        reading = false;
		                        if (readAgainForBranch1) {
		                            pull1Algorithm();
		                        }
		                        else if (readAgainForBranch2) {
		                            pull2Algorithm();
		                        }
		                    });
		                },
		                _closeSteps: chunk => {
		                    reading = false;
		                    const byobCanceled = forBranch2 ? canceled2 : canceled1;
		                    const otherCanceled = forBranch2 ? canceled1 : canceled2;
		                    if (!byobCanceled) {
		                        ReadableByteStreamControllerClose(byobBranch._readableStreamController);
		                    }
		                    if (!otherCanceled) {
		                        ReadableByteStreamControllerClose(otherBranch._readableStreamController);
		                    }
		                    if (chunk !== undefined) {
		                        if (!byobCanceled) {
		                            ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
		                        }
		                        if (!otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0) {
		                            ReadableByteStreamControllerRespond(otherBranch._readableStreamController, 0);
		                        }
		                    }
		                    if (!byobCanceled || !otherCanceled) {
		                        resolveCancelPromise(undefined);
		                    }
		                },
		                _errorSteps: () => {
		                    reading = false;
		                }
		            };
		            ReadableStreamBYOBReaderRead(reader, view, 1, readIntoRequest);
		        }
		        function pull1Algorithm() {
		            if (reading) {
		                readAgainForBranch1 = true;
		                return promiseResolvedWith(undefined);
		            }
		            reading = true;
		            const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch1._readableStreamController);
		            if (byobRequest === null) {
		                pullWithDefaultReader();
		            }
		            else {
		                pullWithBYOBReader(byobRequest._view, false);
		            }
		            return promiseResolvedWith(undefined);
		        }
		        function pull2Algorithm() {
		            if (reading) {
		                readAgainForBranch2 = true;
		                return promiseResolvedWith(undefined);
		            }
		            reading = true;
		            const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch2._readableStreamController);
		            if (byobRequest === null) {
		                pullWithDefaultReader();
		            }
		            else {
		                pullWithBYOBReader(byobRequest._view, true);
		            }
		            return promiseResolvedWith(undefined);
		        }
		        function cancel1Algorithm(reason) {
		            canceled1 = true;
		            reason1 = reason;
		            if (canceled2) {
		                const compositeReason = CreateArrayFromList([reason1, reason2]);
		                const cancelResult = ReadableStreamCancel(stream, compositeReason);
		                resolveCancelPromise(cancelResult);
		            }
		            return cancelPromise;
		        }
		        function cancel2Algorithm(reason) {
		            canceled2 = true;
		            reason2 = reason;
		            if (canceled1) {
		                const compositeReason = CreateArrayFromList([reason1, reason2]);
		                const cancelResult = ReadableStreamCancel(stream, compositeReason);
		                resolveCancelPromise(cancelResult);
		            }
		            return cancelPromise;
		        }
		        function startAlgorithm() {
		            return;
		        }
		        branch1 = CreateReadableByteStream(startAlgorithm, pull1Algorithm, cancel1Algorithm);
		        branch2 = CreateReadableByteStream(startAlgorithm, pull2Algorithm, cancel2Algorithm);
		        forwardReaderError(reader);
		        return [branch1, branch2];
		    }

		    function isReadableStreamLike(stream) {
		        return typeIsObject(stream) && typeof stream.getReader !== 'undefined';
		    }

		    function ReadableStreamFrom(source) {
		        if (isReadableStreamLike(source)) {
		            return ReadableStreamFromDefaultReader(source.getReader());
		        }
		        return ReadableStreamFromIterable(source);
		    }
		    function ReadableStreamFromIterable(asyncIterable) {
		        let stream;
		        const iteratorRecord = GetIterator(asyncIterable, 'async');
		        const startAlgorithm = noop;
		        function pullAlgorithm() {
		            let nextResult;
		            try {
		                nextResult = IteratorNext(iteratorRecord);
		            }
		            catch (e) {
		                return promiseRejectedWith(e);
		            }
		            const nextPromise = promiseResolvedWith(nextResult);
		            return transformPromiseWith(nextPromise, iterResult => {
		                if (!typeIsObject(iterResult)) {
		                    throw new TypeError('The promise returned by the iterator.next() method must fulfill with an object');
		                }
		                const done = IteratorComplete(iterResult);
		                if (done) {
		                    ReadableStreamDefaultControllerClose(stream._readableStreamController);
		                }
		                else {
		                    const value = IteratorValue(iterResult);
		                    ReadableStreamDefaultControllerEnqueue(stream._readableStreamController, value);
		                }
		            });
		        }
		        function cancelAlgorithm(reason) {
		            const iterator = iteratorRecord.iterator;
		            let returnMethod;
		            try {
		                returnMethod = GetMethod(iterator, 'return');
		            }
		            catch (e) {
		                return promiseRejectedWith(e);
		            }
		            if (returnMethod === undefined) {
		                return promiseResolvedWith(undefined);
		            }
		            let returnResult;
		            try {
		                returnResult = reflectCall(returnMethod, iterator, [reason]);
		            }
		            catch (e) {
		                return promiseRejectedWith(e);
		            }
		            const returnPromise = promiseResolvedWith(returnResult);
		            return transformPromiseWith(returnPromise, iterResult => {
		                if (!typeIsObject(iterResult)) {
		                    throw new TypeError('The promise returned by the iterator.return() method must fulfill with an object');
		                }
		                return undefined;
		            });
		        }
		        stream = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, 0);
		        return stream;
		    }
		    function ReadableStreamFromDefaultReader(reader) {
		        let stream;
		        const startAlgorithm = noop;
		        function pullAlgorithm() {
		            let readPromise;
		            try {
		                readPromise = reader.read();
		            }
		            catch (e) {
		                return promiseRejectedWith(e);
		            }
		            return transformPromiseWith(readPromise, readResult => {
		                if (!typeIsObject(readResult)) {
		                    throw new TypeError('The promise returned by the reader.read() method must fulfill with an object');
		                }
		                if (readResult.done) {
		                    ReadableStreamDefaultControllerClose(stream._readableStreamController);
		                }
		                else {
		                    const value = readResult.value;
		                    ReadableStreamDefaultControllerEnqueue(stream._readableStreamController, value);
		                }
		            });
		        }
		        function cancelAlgorithm(reason) {
		            try {
		                return promiseResolvedWith(reader.cancel(reason));
		            }
		            catch (e) {
		                return promiseRejectedWith(e);
		            }
		        }
		        stream = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, 0);
		        return stream;
		    }

		    function convertUnderlyingDefaultOrByteSource(source, context) {
		        assertDictionary(source, context);
		        const original = source;
		        const autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
		        const cancel = original === null || original === void 0 ? void 0 : original.cancel;
		        const pull = original === null || original === void 0 ? void 0 : original.pull;
		        const start = original === null || original === void 0 ? void 0 : original.start;
		        const type = original === null || original === void 0 ? void 0 : original.type;
		        return {
		            autoAllocateChunkSize: autoAllocateChunkSize === undefined ?
		                undefined :
		                convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, `${context} has member 'autoAllocateChunkSize' that`),
		            cancel: cancel === undefined ?
		                undefined :
		                convertUnderlyingSourceCancelCallback(cancel, original, `${context} has member 'cancel' that`),
		            pull: pull === undefined ?
		                undefined :
		                convertUnderlyingSourcePullCallback(pull, original, `${context} has member 'pull' that`),
		            start: start === undefined ?
		                undefined :
		                convertUnderlyingSourceStartCallback(start, original, `${context} has member 'start' that`),
		            type: type === undefined ? undefined : convertReadableStreamType(type, `${context} has member 'type' that`)
		        };
		    }
		    function convertUnderlyingSourceCancelCallback(fn, original, context) {
		        assertFunction(fn, context);
		        return (reason) => promiseCall(fn, original, [reason]);
		    }
		    function convertUnderlyingSourcePullCallback(fn, original, context) {
		        assertFunction(fn, context);
		        return (controller) => promiseCall(fn, original, [controller]);
		    }
		    function convertUnderlyingSourceStartCallback(fn, original, context) {
		        assertFunction(fn, context);
		        return (controller) => reflectCall(fn, original, [controller]);
		    }
		    function convertReadableStreamType(type, context) {
		        type = `${type}`;
		        if (type !== 'bytes') {
		            throw new TypeError(`${context} '${type}' is not a valid enumeration value for ReadableStreamType`);
		        }
		        return type;
		    }

		    function convertIteratorOptions(options, context) {
		        assertDictionary(options, context);
		        const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
		        return { preventCancel: Boolean(preventCancel) };
		    }

		    function convertPipeOptions(options, context) {
		        assertDictionary(options, context);
		        const preventAbort = options === null || options === void 0 ? void 0 : options.preventAbort;
		        const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
		        const preventClose = options === null || options === void 0 ? void 0 : options.preventClose;
		        const signal = options === null || options === void 0 ? void 0 : options.signal;
		        if (signal !== undefined) {
		            assertAbortSignal(signal, `${context} has member 'signal' that`);
		        }
		        return {
		            preventAbort: Boolean(preventAbort),
		            preventCancel: Boolean(preventCancel),
		            preventClose: Boolean(preventClose),
		            signal
		        };
		    }
		    function assertAbortSignal(signal, context) {
		        if (!isAbortSignal(signal)) {
		            throw new TypeError(`${context} is not an AbortSignal.`);
		        }
		    }

		    function convertReadableWritablePair(pair, context) {
		        assertDictionary(pair, context);
		        const readable = pair === null || pair === void 0 ? void 0 : pair.readable;
		        assertRequiredField(readable, 'readable', 'ReadableWritablePair');
		        assertReadableStream(readable, `${context} has member 'readable' that`);
		        const writable = pair === null || pair === void 0 ? void 0 : pair.writable;
		        assertRequiredField(writable, 'writable', 'ReadableWritablePair');
		        assertWritableStream(writable, `${context} has member 'writable' that`);
		        return { readable, writable };
		    }

		    /**
		     * A readable stream represents a source of data, from which you can read.
		     *
		     * @public
		     */
		    class ReadableStream {
		        constructor(rawUnderlyingSource = {}, rawStrategy = {}) {
		            if (rawUnderlyingSource === undefined) {
		                rawUnderlyingSource = null;
		            }
		            else {
		                assertObject(rawUnderlyingSource, 'First parameter');
		            }
		            const strategy = convertQueuingStrategy(rawStrategy, 'Second parameter');
		            const underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, 'First parameter');
		            InitializeReadableStream(this);
		            if (underlyingSource.type === 'bytes') {
		                if (strategy.size !== undefined) {
		                    throw new RangeError('The strategy for a byte stream cannot have a size function');
		                }
		                const highWaterMark = ExtractHighWaterMark(strategy, 0);
		                SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
		            }
		            else {
		                const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
		                const highWaterMark = ExtractHighWaterMark(strategy, 1);
		                SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
		            }
		        }
		        /**
		         * Whether or not the readable stream is locked to a {@link ReadableStreamDefaultReader | reader}.
		         */
		        get locked() {
		            if (!IsReadableStream(this)) {
		                throw streamBrandCheckException$1('locked');
		            }
		            return IsReadableStreamLocked(this);
		        }
		        /**
		         * Cancels the stream, signaling a loss of interest in the stream by a consumer.
		         *
		         * The supplied `reason` argument will be given to the underlying source's {@link UnderlyingSource.cancel | cancel()}
		         * method, which might or might not use it.
		         */
		        cancel(reason = undefined) {
		            if (!IsReadableStream(this)) {
		                return promiseRejectedWith(streamBrandCheckException$1('cancel'));
		            }
		            if (IsReadableStreamLocked(this)) {
		                return promiseRejectedWith(new TypeError('Cannot cancel a stream that already has a reader'));
		            }
		            return ReadableStreamCancel(this, reason);
		        }
		        getReader(rawOptions = undefined) {
		            if (!IsReadableStream(this)) {
		                throw streamBrandCheckException$1('getReader');
		            }
		            const options = convertReaderOptions(rawOptions, 'First parameter');
		            if (options.mode === undefined) {
		                return AcquireReadableStreamDefaultReader(this);
		            }
		            return AcquireReadableStreamBYOBReader(this);
		        }
		        pipeThrough(rawTransform, rawOptions = {}) {
		            if (!IsReadableStream(this)) {
		                throw streamBrandCheckException$1('pipeThrough');
		            }
		            assertRequiredArgument(rawTransform, 1, 'pipeThrough');
		            const transform = convertReadableWritablePair(rawTransform, 'First parameter');
		            const options = convertPipeOptions(rawOptions, 'Second parameter');
		            if (IsReadableStreamLocked(this)) {
		                throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream');
		            }
		            if (IsWritableStreamLocked(transform.writable)) {
		                throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream');
		            }
		            const promise = ReadableStreamPipeTo(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
		            setPromiseIsHandledToTrue(promise);
		            return transform.readable;
		        }
		        pipeTo(destination, rawOptions = {}) {
		            if (!IsReadableStream(this)) {
		                return promiseRejectedWith(streamBrandCheckException$1('pipeTo'));
		            }
		            if (destination === undefined) {
		                return promiseRejectedWith(`Parameter 1 is required in 'pipeTo'.`);
		            }
		            if (!IsWritableStream(destination)) {
		                return promiseRejectedWith(new TypeError(`ReadableStream.prototype.pipeTo's first argument must be a WritableStream`));
		            }
		            let options;
		            try {
		                options = convertPipeOptions(rawOptions, 'Second parameter');
		            }
		            catch (e) {
		                return promiseRejectedWith(e);
		            }
		            if (IsReadableStreamLocked(this)) {
		                return promiseRejectedWith(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream'));
		            }
		            if (IsWritableStreamLocked(destination)) {
		                return promiseRejectedWith(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream'));
		            }
		            return ReadableStreamPipeTo(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
		        }
		        /**
		         * Tees this readable stream, returning a two-element array containing the two resulting branches as
		         * new {@link ReadableStream} instances.
		         *
		         * Teeing a stream will lock it, preventing any other consumer from acquiring a reader.
		         * To cancel the stream, cancel both of the resulting branches; a composite cancellation reason will then be
		         * propagated to the stream's underlying source.
		         *
		         * Note that the chunks seen in each branch will be the same object. If the chunks are not immutable,
		         * this could allow interference between the two branches.
		         */
		        tee() {
		            if (!IsReadableStream(this)) {
		                throw streamBrandCheckException$1('tee');
		            }
		            const branches = ReadableStreamTee(this);
		            return CreateArrayFromList(branches);
		        }
		        values(rawOptions = undefined) {
		            if (!IsReadableStream(this)) {
		                throw streamBrandCheckException$1('values');
		            }
		            const options = convertIteratorOptions(rawOptions, 'First parameter');
		            return AcquireReadableStreamAsyncIterator(this, options.preventCancel);
		        }
		        [SymbolAsyncIterator](options) {
		            // Stub implementation, overridden below
		            return this.values(options);
		        }
		        /**
		         * Creates a new ReadableStream wrapping the provided iterable or async iterable.
		         *
		         * This can be used to adapt various kinds of objects into a readable stream,
		         * such as an array, an async generator, or a Node.js readable stream.
		         */
		        static from(asyncIterable) {
		            return ReadableStreamFrom(asyncIterable);
		        }
		    }
		    Object.defineProperties(ReadableStream, {
		        from: { enumerable: true }
		    });
		    Object.defineProperties(ReadableStream.prototype, {
		        cancel: { enumerable: true },
		        getReader: { enumerable: true },
		        pipeThrough: { enumerable: true },
		        pipeTo: { enumerable: true },
		        tee: { enumerable: true },
		        values: { enumerable: true },
		        locked: { enumerable: true }
		    });
		    setFunctionName(ReadableStream.from, 'from');
		    setFunctionName(ReadableStream.prototype.cancel, 'cancel');
		    setFunctionName(ReadableStream.prototype.getReader, 'getReader');
		    setFunctionName(ReadableStream.prototype.pipeThrough, 'pipeThrough');
		    setFunctionName(ReadableStream.prototype.pipeTo, 'pipeTo');
		    setFunctionName(ReadableStream.prototype.tee, 'tee');
		    setFunctionName(ReadableStream.prototype.values, 'values');
		    if (typeof Symbol.toStringTag === 'symbol') {
		        Object.defineProperty(ReadableStream.prototype, Symbol.toStringTag, {
		            value: 'ReadableStream',
		            configurable: true
		        });
		    }
		    Object.defineProperty(ReadableStream.prototype, SymbolAsyncIterator, {
		        value: ReadableStream.prototype.values,
		        writable: true,
		        configurable: true
		    });
		    // Abstract operations for the ReadableStream.
		    // Throws if and only if startAlgorithm throws.
		    function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
		        const stream = Object.create(ReadableStream.prototype);
		        InitializeReadableStream(stream);
		        const controller = Object.create(ReadableStreamDefaultController.prototype);
		        SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
		        return stream;
		    }
		    // Throws if and only if startAlgorithm throws.
		    function CreateReadableByteStream(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
		        const stream = Object.create(ReadableStream.prototype);
		        InitializeReadableStream(stream);
		        const controller = Object.create(ReadableByteStreamController.prototype);
		        SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, undefined);
		        return stream;
		    }
		    function InitializeReadableStream(stream) {
		        stream._state = 'readable';
		        stream._reader = undefined;
		        stream._storedError = undefined;
		        stream._disturbed = false;
		    }
		    function IsReadableStream(x) {
		        if (!typeIsObject(x)) {
		            return false;
		        }
		        if (!Object.prototype.hasOwnProperty.call(x, '_readableStreamController')) {
		            return false;
		        }
		        return x instanceof ReadableStream;
		    }
		    function IsReadableStreamLocked(stream) {
		        if (stream._reader === undefined) {
		            return false;
		        }
		        return true;
		    }
		    // ReadableStream API exposed for controllers.
		    function ReadableStreamCancel(stream, reason) {
		        stream._disturbed = true;
		        if (stream._state === 'closed') {
		            return promiseResolvedWith(undefined);
		        }
		        if (stream._state === 'errored') {
		            return promiseRejectedWith(stream._storedError);
		        }
		        ReadableStreamClose(stream);
		        const reader = stream._reader;
		        if (reader !== undefined && IsReadableStreamBYOBReader(reader)) {
		            const readIntoRequests = reader._readIntoRequests;
		            reader._readIntoRequests = new SimpleQueue();
		            readIntoRequests.forEach(readIntoRequest => {
		                readIntoRequest._closeSteps(undefined);
		            });
		        }
		        const sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
		        return transformPromiseWith(sourceCancelPromise, noop);
		    }
		    function ReadableStreamClose(stream) {
		        stream._state = 'closed';
		        const reader = stream._reader;
		        if (reader === undefined) {
		            return;
		        }
		        defaultReaderClosedPromiseResolve(reader);
		        if (IsReadableStreamDefaultReader(reader)) {
		            const readRequests = reader._readRequests;
		            reader._readRequests = new SimpleQueue();
		            readRequests.forEach(readRequest => {
		                readRequest._closeSteps();
		            });
		        }
		    }
		    function ReadableStreamError(stream, e) {
		        stream._state = 'errored';
		        stream._storedError = e;
		        const reader = stream._reader;
		        if (reader === undefined) {
		            return;
		        }
		        defaultReaderClosedPromiseReject(reader, e);
		        if (IsReadableStreamDefaultReader(reader)) {
		            ReadableStreamDefaultReaderErrorReadRequests(reader, e);
		        }
		        else {
		            ReadableStreamBYOBReaderErrorReadIntoRequests(reader, e);
		        }
		    }
		    // Helper functions for the ReadableStream.
		    function streamBrandCheckException$1(name) {
		        return new TypeError(`ReadableStream.prototype.${name} can only be used on a ReadableStream`);
		    }

		    function convertQueuingStrategyInit(init, context) {
		        assertDictionary(init, context);
		        const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
		        assertRequiredField(highWaterMark, 'highWaterMark', 'QueuingStrategyInit');
		        return {
		            highWaterMark: convertUnrestrictedDouble(highWaterMark)
		        };
		    }

		    // The size function must not have a prototype property nor be a constructor
		    const byteLengthSizeFunction = (chunk) => {
		        return chunk.byteLength;
		    };
		    setFunctionName(byteLengthSizeFunction, 'size');
		    /**
		     * A queuing strategy that counts the number of bytes in each chunk.
		     *
		     * @public
		     */
		    class ByteLengthQueuingStrategy {
		        constructor(options) {
		            assertRequiredArgument(options, 1, 'ByteLengthQueuingStrategy');
		            options = convertQueuingStrategyInit(options, 'First parameter');
		            this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
		        }
		        /**
		         * Returns the high water mark provided to the constructor.
		         */
		        get highWaterMark() {
		            if (!IsByteLengthQueuingStrategy(this)) {
		                throw byteLengthBrandCheckException('highWaterMark');
		            }
		            return this._byteLengthQueuingStrategyHighWaterMark;
		        }
		        /**
		         * Measures the size of `chunk` by returning the value of its `byteLength` property.
		         */
		        get size() {
		            if (!IsByteLengthQueuingStrategy(this)) {
		                throw byteLengthBrandCheckException('size');
		            }
		            return byteLengthSizeFunction;
		        }
		    }
		    Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
		        highWaterMark: { enumerable: true },
		        size: { enumerable: true }
		    });
		    if (typeof Symbol.toStringTag === 'symbol') {
		        Object.defineProperty(ByteLengthQueuingStrategy.prototype, Symbol.toStringTag, {
		            value: 'ByteLengthQueuingStrategy',
		            configurable: true
		        });
		    }
		    // Helper functions for the ByteLengthQueuingStrategy.
		    function byteLengthBrandCheckException(name) {
		        return new TypeError(`ByteLengthQueuingStrategy.prototype.${name} can only be used on a ByteLengthQueuingStrategy`);
		    }
		    function IsByteLengthQueuingStrategy(x) {
		        if (!typeIsObject(x)) {
		            return false;
		        }
		        if (!Object.prototype.hasOwnProperty.call(x, '_byteLengthQueuingStrategyHighWaterMark')) {
		            return false;
		        }
		        return x instanceof ByteLengthQueuingStrategy;
		    }

		    // The size function must not have a prototype property nor be a constructor
		    const countSizeFunction = () => {
		        return 1;
		    };
		    setFunctionName(countSizeFunction, 'size');
		    /**
		     * A queuing strategy that counts the number of chunks.
		     *
		     * @public
		     */
		    class CountQueuingStrategy {
		        constructor(options) {
		            assertRequiredArgument(options, 1, 'CountQueuingStrategy');
		            options = convertQueuingStrategyInit(options, 'First parameter');
		            this._countQueuingStrategyHighWaterMark = options.highWaterMark;
		        }
		        /**
		         * Returns the high water mark provided to the constructor.
		         */
		        get highWaterMark() {
		            if (!IsCountQueuingStrategy(this)) {
		                throw countBrandCheckException('highWaterMark');
		            }
		            return this._countQueuingStrategyHighWaterMark;
		        }
		        /**
		         * Measures the size of `chunk` by always returning 1.
		         * This ensures that the total queue size is a count of the number of chunks in the queue.
		         */
		        get size() {
		            if (!IsCountQueuingStrategy(this)) {
		                throw countBrandCheckException('size');
		            }
		            return countSizeFunction;
		        }
		    }
		    Object.defineProperties(CountQueuingStrategy.prototype, {
		        highWaterMark: { enumerable: true },
		        size: { enumerable: true }
		    });
		    if (typeof Symbol.toStringTag === 'symbol') {
		        Object.defineProperty(CountQueuingStrategy.prototype, Symbol.toStringTag, {
		            value: 'CountQueuingStrategy',
		            configurable: true
		        });
		    }
		    // Helper functions for the CountQueuingStrategy.
		    function countBrandCheckException(name) {
		        return new TypeError(`CountQueuingStrategy.prototype.${name} can only be used on a CountQueuingStrategy`);
		    }
		    function IsCountQueuingStrategy(x) {
		        if (!typeIsObject(x)) {
		            return false;
		        }
		        if (!Object.prototype.hasOwnProperty.call(x, '_countQueuingStrategyHighWaterMark')) {
		            return false;
		        }
		        return x instanceof CountQueuingStrategy;
		    }

		    function convertTransformer(original, context) {
		        assertDictionary(original, context);
		        const cancel = original === null || original === void 0 ? void 0 : original.cancel;
		        const flush = original === null || original === void 0 ? void 0 : original.flush;
		        const readableType = original === null || original === void 0 ? void 0 : original.readableType;
		        const start = original === null || original === void 0 ? void 0 : original.start;
		        const transform = original === null || original === void 0 ? void 0 : original.transform;
		        const writableType = original === null || original === void 0 ? void 0 : original.writableType;
		        return {
		            cancel: cancel === undefined ?
		                undefined :
		                convertTransformerCancelCallback(cancel, original, `${context} has member 'cancel' that`),
		            flush: flush === undefined ?
		                undefined :
		                convertTransformerFlushCallback(flush, original, `${context} has member 'flush' that`),
		            readableType,
		            start: start === undefined ?
		                undefined :
		                convertTransformerStartCallback(start, original, `${context} has member 'start' that`),
		            transform: transform === undefined ?
		                undefined :
		                convertTransformerTransformCallback(transform, original, `${context} has member 'transform' that`),
		            writableType
		        };
		    }
		    function convertTransformerFlushCallback(fn, original, context) {
		        assertFunction(fn, context);
		        return (controller) => promiseCall(fn, original, [controller]);
		    }
		    function convertTransformerStartCallback(fn, original, context) {
		        assertFunction(fn, context);
		        return (controller) => reflectCall(fn, original, [controller]);
		    }
		    function convertTransformerTransformCallback(fn, original, context) {
		        assertFunction(fn, context);
		        return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
		    }
		    function convertTransformerCancelCallback(fn, original, context) {
		        assertFunction(fn, context);
		        return (reason) => promiseCall(fn, original, [reason]);
		    }

		    // Class TransformStream
		    /**
		     * A transform stream consists of a pair of streams: a {@link WritableStream | writable stream},
		     * known as its writable side, and a {@link ReadableStream | readable stream}, known as its readable side.
		     * In a manner specific to the transform stream in question, writes to the writable side result in new data being
		     * made available for reading from the readable side.
		     *
		     * @public
		     */
		    class TransformStream {
		        constructor(rawTransformer = {}, rawWritableStrategy = {}, rawReadableStrategy = {}) {
		            if (rawTransformer === undefined) {
		                rawTransformer = null;
		            }
		            const writableStrategy = convertQueuingStrategy(rawWritableStrategy, 'Second parameter');
		            const readableStrategy = convertQueuingStrategy(rawReadableStrategy, 'Third parameter');
		            const transformer = convertTransformer(rawTransformer, 'First parameter');
		            if (transformer.readableType !== undefined) {
		                throw new RangeError('Invalid readableType specified');
		            }
		            if (transformer.writableType !== undefined) {
		                throw new RangeError('Invalid writableType specified');
		            }
		            const readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
		            const readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
		            const writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
		            const writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
		            let startPromise_resolve;
		            const startPromise = newPromise(resolve => {
		                startPromise_resolve = resolve;
		            });
		            InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
		            SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
		            if (transformer.start !== undefined) {
		                startPromise_resolve(transformer.start(this._transformStreamController));
		            }
		            else {
		                startPromise_resolve(undefined);
		            }
		        }
		        /**
		         * The readable side of the transform stream.
		         */
		        get readable() {
		            if (!IsTransformStream(this)) {
		                throw streamBrandCheckException('readable');
		            }
		            return this._readable;
		        }
		        /**
		         * The writable side of the transform stream.
		         */
		        get writable() {
		            if (!IsTransformStream(this)) {
		                throw streamBrandCheckException('writable');
		            }
		            return this._writable;
		        }
		    }
		    Object.defineProperties(TransformStream.prototype, {
		        readable: { enumerable: true },
		        writable: { enumerable: true }
		    });
		    if (typeof Symbol.toStringTag === 'symbol') {
		        Object.defineProperty(TransformStream.prototype, Symbol.toStringTag, {
		            value: 'TransformStream',
		            configurable: true
		        });
		    }
		    function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
		        function startAlgorithm() {
		            return startPromise;
		        }
		        function writeAlgorithm(chunk) {
		            return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
		        }
		        function abortAlgorithm(reason) {
		            return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
		        }
		        function closeAlgorithm() {
		            return TransformStreamDefaultSinkCloseAlgorithm(stream);
		        }
		        stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
		        function pullAlgorithm() {
		            return TransformStreamDefaultSourcePullAlgorithm(stream);
		        }
		        function cancelAlgorithm(reason) {
		            return TransformStreamDefaultSourceCancelAlgorithm(stream, reason);
		        }
		        stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
		        // The [[backpressure]] slot is set to undefined so that it can be initialised by TransformStreamSetBackpressure.
		        stream._backpressure = undefined;
		        stream._backpressureChangePromise = undefined;
		        stream._backpressureChangePromise_resolve = undefined;
		        TransformStreamSetBackpressure(stream, true);
		        stream._transformStreamController = undefined;
		    }
		    function IsTransformStream(x) {
		        if (!typeIsObject(x)) {
		            return false;
		        }
		        if (!Object.prototype.hasOwnProperty.call(x, '_transformStreamController')) {
		            return false;
		        }
		        return x instanceof TransformStream;
		    }
		    // This is a no-op if both sides are already errored.
		    function TransformStreamError(stream, e) {
		        ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e);
		        TransformStreamErrorWritableAndUnblockWrite(stream, e);
		    }
		    function TransformStreamErrorWritableAndUnblockWrite(stream, e) {
		        TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
		        WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e);
		        TransformStreamUnblockWrite(stream);
		    }
		    function TransformStreamUnblockWrite(stream) {
		        if (stream._backpressure) {
		            // Pretend that pull() was called to permit any pending write() calls to complete. TransformStreamSetBackpressure()
		            // cannot be called from enqueue() or pull() once the ReadableStream is errored, so this will will be the final time
		            // _backpressure is set.
		            TransformStreamSetBackpressure(stream, false);
		        }
		    }
		    function TransformStreamSetBackpressure(stream, backpressure) {
		        // Passes also when called during construction.
		        if (stream._backpressureChangePromise !== undefined) {
		            stream._backpressureChangePromise_resolve();
		        }
		        stream._backpressureChangePromise = newPromise(resolve => {
		            stream._backpressureChangePromise_resolve = resolve;
		        });
		        stream._backpressure = backpressure;
		    }
		    // Class TransformStreamDefaultController
		    /**
		     * Allows control of the {@link ReadableStream} and {@link WritableStream} of the associated {@link TransformStream}.
		     *
		     * @public
		     */
		    class TransformStreamDefaultController {
		        constructor() {
		            throw new TypeError('Illegal constructor');
		        }
		        /**
		         * Returns the desired size to fill the readable side’s internal queue. It can be negative, if the queue is over-full.
		         */
		        get desiredSize() {
		            if (!IsTransformStreamDefaultController(this)) {
		                throw defaultControllerBrandCheckException('desiredSize');
		            }
		            const readableController = this._controlledTransformStream._readable._readableStreamController;
		            return ReadableStreamDefaultControllerGetDesiredSize(readableController);
		        }
		        enqueue(chunk = undefined) {
		            if (!IsTransformStreamDefaultController(this)) {
		                throw defaultControllerBrandCheckException('enqueue');
		            }
		            TransformStreamDefaultControllerEnqueue(this, chunk);
		        }
		        /**
		         * Errors both the readable side and the writable side of the controlled transform stream, making all future
		         * interactions with it fail with the given error `e`. Any chunks queued for transformation will be discarded.
		         */
		        error(reason = undefined) {
		            if (!IsTransformStreamDefaultController(this)) {
		                throw defaultControllerBrandCheckException('error');
		            }
		            TransformStreamDefaultControllerError(this, reason);
		        }
		        /**
		         * Closes the readable side and errors the writable side of the controlled transform stream. This is useful when the
		         * transformer only needs to consume a portion of the chunks written to the writable side.
		         */
		        terminate() {
		            if (!IsTransformStreamDefaultController(this)) {
		                throw defaultControllerBrandCheckException('terminate');
		            }
		            TransformStreamDefaultControllerTerminate(this);
		        }
		    }
		    Object.defineProperties(TransformStreamDefaultController.prototype, {
		        enqueue: { enumerable: true },
		        error: { enumerable: true },
		        terminate: { enumerable: true },
		        desiredSize: { enumerable: true }
		    });
		    setFunctionName(TransformStreamDefaultController.prototype.enqueue, 'enqueue');
		    setFunctionName(TransformStreamDefaultController.prototype.error, 'error');
		    setFunctionName(TransformStreamDefaultController.prototype.terminate, 'terminate');
		    if (typeof Symbol.toStringTag === 'symbol') {
		        Object.defineProperty(TransformStreamDefaultController.prototype, Symbol.toStringTag, {
		            value: 'TransformStreamDefaultController',
		            configurable: true
		        });
		    }
		    // Transform Stream Default Controller Abstract Operations
		    function IsTransformStreamDefaultController(x) {
		        if (!typeIsObject(x)) {
		            return false;
		        }
		        if (!Object.prototype.hasOwnProperty.call(x, '_controlledTransformStream')) {
		            return false;
		        }
		        return x instanceof TransformStreamDefaultController;
		    }
		    function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm, cancelAlgorithm) {
		        controller._controlledTransformStream = stream;
		        stream._transformStreamController = controller;
		        controller._transformAlgorithm = transformAlgorithm;
		        controller._flushAlgorithm = flushAlgorithm;
		        controller._cancelAlgorithm = cancelAlgorithm;
		        controller._finishPromise = undefined;
		        controller._finishPromise_resolve = undefined;
		        controller._finishPromise_reject = undefined;
		    }
		    function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
		        const controller = Object.create(TransformStreamDefaultController.prototype);
		        let transformAlgorithm;
		        let flushAlgorithm;
		        let cancelAlgorithm;
		        if (transformer.transform !== undefined) {
		            transformAlgorithm = chunk => transformer.transform(chunk, controller);
		        }
		        else {
		            transformAlgorithm = chunk => {
		                try {
		                    TransformStreamDefaultControllerEnqueue(controller, chunk);
		                    return promiseResolvedWith(undefined);
		                }
		                catch (transformResultE) {
		                    return promiseRejectedWith(transformResultE);
		                }
		            };
		        }
		        if (transformer.flush !== undefined) {
		            flushAlgorithm = () => transformer.flush(controller);
		        }
		        else {
		            flushAlgorithm = () => promiseResolvedWith(undefined);
		        }
		        if (transformer.cancel !== undefined) {
		            cancelAlgorithm = reason => transformer.cancel(reason);
		        }
		        else {
		            cancelAlgorithm = () => promiseResolvedWith(undefined);
		        }
		        SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm, cancelAlgorithm);
		    }
		    function TransformStreamDefaultControllerClearAlgorithms(controller) {
		        controller._transformAlgorithm = undefined;
		        controller._flushAlgorithm = undefined;
		        controller._cancelAlgorithm = undefined;
		    }
		    function TransformStreamDefaultControllerEnqueue(controller, chunk) {
		        const stream = controller._controlledTransformStream;
		        const readableController = stream._readable._readableStreamController;
		        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) {
		            throw new TypeError('Readable side is not in a state that permits enqueue');
		        }
		        // We throttle transform invocations based on the backpressure of the ReadableStream, but we still
		        // accept TransformStreamDefaultControllerEnqueue() calls.
		        try {
		            ReadableStreamDefaultControllerEnqueue(readableController, chunk);
		        }
		        catch (e) {
		            // This happens when readableStrategy.size() throws.
		            TransformStreamErrorWritableAndUnblockWrite(stream, e);
		            throw stream._readable._storedError;
		        }
		        const backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
		        if (backpressure !== stream._backpressure) {
		            TransformStreamSetBackpressure(stream, true);
		        }
		    }
		    function TransformStreamDefaultControllerError(controller, e) {
		        TransformStreamError(controller._controlledTransformStream, e);
		    }
		    function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
		        const transformPromise = controller._transformAlgorithm(chunk);
		        return transformPromiseWith(transformPromise, undefined, r => {
		            TransformStreamError(controller._controlledTransformStream, r);
		            throw r;
		        });
		    }
		    function TransformStreamDefaultControllerTerminate(controller) {
		        const stream = controller._controlledTransformStream;
		        const readableController = stream._readable._readableStreamController;
		        ReadableStreamDefaultControllerClose(readableController);
		        const error = new TypeError('TransformStream terminated');
		        TransformStreamErrorWritableAndUnblockWrite(stream, error);
		    }
		    // TransformStreamDefaultSink Algorithms
		    function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
		        const controller = stream._transformStreamController;
		        if (stream._backpressure) {
		            const backpressureChangePromise = stream._backpressureChangePromise;
		            return transformPromiseWith(backpressureChangePromise, () => {
		                const writable = stream._writable;
		                const state = writable._state;
		                if (state === 'erroring') {
		                    throw writable._storedError;
		                }
		                return TransformStreamDefaultControllerPerformTransform(controller, chunk);
		            });
		        }
		        return TransformStreamDefaultControllerPerformTransform(controller, chunk);
		    }
		    function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
		        const controller = stream._transformStreamController;
		        if (controller._finishPromise !== undefined) {
		            return controller._finishPromise;
		        }
		        // stream._readable cannot change after construction, so caching it across a call to user code is safe.
		        const readable = stream._readable;
		        // Assign the _finishPromise now so that if _cancelAlgorithm calls readable.cancel() internally,
		        // we don't run the _cancelAlgorithm again.
		        controller._finishPromise = newPromise((resolve, reject) => {
		            controller._finishPromise_resolve = resolve;
		            controller._finishPromise_reject = reject;
		        });
		        const cancelPromise = controller._cancelAlgorithm(reason);
		        TransformStreamDefaultControllerClearAlgorithms(controller);
		        uponPromise(cancelPromise, () => {
		            if (readable._state === 'errored') {
		                defaultControllerFinishPromiseReject(controller, readable._storedError);
		            }
		            else {
		                ReadableStreamDefaultControllerError(readable._readableStreamController, reason);
		                defaultControllerFinishPromiseResolve(controller);
		            }
		            return null;
		        }, r => {
		            ReadableStreamDefaultControllerError(readable._readableStreamController, r);
		            defaultControllerFinishPromiseReject(controller, r);
		            return null;
		        });
		        return controller._finishPromise;
		    }
		    function TransformStreamDefaultSinkCloseAlgorithm(stream) {
		        const controller = stream._transformStreamController;
		        if (controller._finishPromise !== undefined) {
		            return controller._finishPromise;
		        }
		        // stream._readable cannot change after construction, so caching it across a call to user code is safe.
		        const readable = stream._readable;
		        // Assign the _finishPromise now so that if _flushAlgorithm calls readable.cancel() internally,
		        // we don't also run the _cancelAlgorithm.
		        controller._finishPromise = newPromise((resolve, reject) => {
		            controller._finishPromise_resolve = resolve;
		            controller._finishPromise_reject = reject;
		        });
		        const flushPromise = controller._flushAlgorithm();
		        TransformStreamDefaultControllerClearAlgorithms(controller);
		        uponPromise(flushPromise, () => {
		            if (readable._state === 'errored') {
		                defaultControllerFinishPromiseReject(controller, readable._storedError);
		            }
		            else {
		                ReadableStreamDefaultControllerClose(readable._readableStreamController);
		                defaultControllerFinishPromiseResolve(controller);
		            }
		            return null;
		        }, r => {
		            ReadableStreamDefaultControllerError(readable._readableStreamController, r);
		            defaultControllerFinishPromiseReject(controller, r);
		            return null;
		        });
		        return controller._finishPromise;
		    }
		    // TransformStreamDefaultSource Algorithms
		    function TransformStreamDefaultSourcePullAlgorithm(stream) {
		        // Invariant. Enforced by the promises returned by start() and pull().
		        TransformStreamSetBackpressure(stream, false);
		        // Prevent the next pull() call until there is backpressure.
		        return stream._backpressureChangePromise;
		    }
		    function TransformStreamDefaultSourceCancelAlgorithm(stream, reason) {
		        const controller = stream._transformStreamController;
		        if (controller._finishPromise !== undefined) {
		            return controller._finishPromise;
		        }
		        // stream._writable cannot change after construction, so caching it across a call to user code is safe.
		        const writable = stream._writable;
		        // Assign the _finishPromise now so that if _flushAlgorithm calls writable.abort() or
		        // writable.cancel() internally, we don't run the _cancelAlgorithm again, or also run the
		        // _flushAlgorithm.
		        controller._finishPromise = newPromise((resolve, reject) => {
		            controller._finishPromise_resolve = resolve;
		            controller._finishPromise_reject = reject;
		        });
		        const cancelPromise = controller._cancelAlgorithm(reason);
		        TransformStreamDefaultControllerClearAlgorithms(controller);
		        uponPromise(cancelPromise, () => {
		            if (writable._state === 'errored') {
		                defaultControllerFinishPromiseReject(controller, writable._storedError);
		            }
		            else {
		                WritableStreamDefaultControllerErrorIfNeeded(writable._writableStreamController, reason);
		                TransformStreamUnblockWrite(stream);
		                defaultControllerFinishPromiseResolve(controller);
		            }
		            return null;
		        }, r => {
		            WritableStreamDefaultControllerErrorIfNeeded(writable._writableStreamController, r);
		            TransformStreamUnblockWrite(stream);
		            defaultControllerFinishPromiseReject(controller, r);
		            return null;
		        });
		        return controller._finishPromise;
		    }
		    // Helper functions for the TransformStreamDefaultController.
		    function defaultControllerBrandCheckException(name) {
		        return new TypeError(`TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`);
		    }
		    function defaultControllerFinishPromiseResolve(controller) {
		        if (controller._finishPromise_resolve === undefined) {
		            return;
		        }
		        controller._finishPromise_resolve();
		        controller._finishPromise_resolve = undefined;
		        controller._finishPromise_reject = undefined;
		    }
		    function defaultControllerFinishPromiseReject(controller, reason) {
		        if (controller._finishPromise_reject === undefined) {
		            return;
		        }
		        setPromiseIsHandledToTrue(controller._finishPromise);
		        controller._finishPromise_reject(reason);
		        controller._finishPromise_resolve = undefined;
		        controller._finishPromise_reject = undefined;
		    }
		    // Helper functions for the TransformStream.
		    function streamBrandCheckException(name) {
		        return new TypeError(`TransformStream.prototype.${name} can only be used on a TransformStream`);
		    }

		    exports.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy;
		    exports.CountQueuingStrategy = CountQueuingStrategy;
		    exports.ReadableByteStreamController = ReadableByteStreamController;
		    exports.ReadableStream = ReadableStream;
		    exports.ReadableStreamBYOBReader = ReadableStreamBYOBReader;
		    exports.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest;
		    exports.ReadableStreamDefaultController = ReadableStreamDefaultController;
		    exports.ReadableStreamDefaultReader = ReadableStreamDefaultReader;
		    exports.TransformStream = TransformStream;
		    exports.TransformStreamDefaultController = TransformStreamDefaultController;
		    exports.WritableStream = WritableStream;
		    exports.WritableStreamDefaultController = WritableStreamDefaultController;
		    exports.WritableStreamDefaultWriter = WritableStreamDefaultWriter;

		}));
		
	} (ponyfill_es2018$1, ponyfill_es2018$1.exports));
	return ponyfill_es2018$1.exports;
}

/* c8 ignore start */

var hasRequiredStreams;

function requireStreams () {
	if (hasRequiredStreams) return streams;
	hasRequiredStreams = 1;
	// 64 KiB (same size chrome slice theirs blob into Uint8array's)
	const POOL_SIZE = 65536;

	if (!globalThis.ReadableStream) {
	  // `node:stream/web` got introduced in v16.5.0 as experimental
	  // and it's preferred over the polyfilled version. So we also
	  // suppress the warning that gets emitted by NodeJS for using it.
	  try {
	    const process = require('node:process');
	    const { emitWarning } = process;
	    try {
	      process.emitWarning = () => {};
	      Object.assign(globalThis, require('node:stream/web'));
	      process.emitWarning = emitWarning;
	    } catch (error) {
	      process.emitWarning = emitWarning;
	      throw error
	    }
	  } catch (error) {
	    // fallback to polyfill implementation
	    Object.assign(globalThis, requirePonyfill_es2018());
	  }
	}

	try {
	  // Don't use node: prefix for this, require+node: is not supported until node v14.14
	  // Only `import()` can use prefix in 12.20 and later
	  const { Blob } = require('buffer');
	  if (Blob && !Blob.prototype.stream) {
	    Blob.prototype.stream = function name (params) {
	      let position = 0;
	      const blob = this;

	      return new ReadableStream({
	        type: 'bytes',
	        async pull (ctrl) {
	          const chunk = blob.slice(position, Math.min(blob.size, position + POOL_SIZE));
	          const buffer = await chunk.arrayBuffer();
	          position += buffer.byteLength;
	          ctrl.enqueue(new Uint8Array(buffer));

	          if (position === blob.size) {
	            ctrl.close();
	          }
	        }
	      })
	    };
	  }
	} catch (error) {}
	/* c8 ignore end */
	return streams;
}

requireStreams();

/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */


// 64 KiB (same size chrome slice theirs blob into Uint8array's)
const POOL_SIZE = 65536;

/** @param {(Blob | Uint8Array)[]} parts */
async function * toIterator (parts, clone = true) {
  for (const part of parts) {
    if ('stream' in part) {
      yield * (/** @type {AsyncIterableIterator<Uint8Array>} */ (part.stream()));
    } else if (ArrayBuffer.isView(part)) {
      if (clone) {
        let position = part.byteOffset;
        const end = part.byteOffset + part.byteLength;
        while (position !== end) {
          const size = Math.min(end - position, POOL_SIZE);
          const chunk = part.buffer.slice(position, position + size);
          position += chunk.byteLength;
          yield new Uint8Array(chunk);
        }
      } else {
        yield part;
      }
    /* c8 ignore next 10 */
    } else {
      // For blobs that have arrayBuffer but no stream method (nodes buffer.Blob)
      let position = 0, b = (/** @type {Blob} */ (part));
      while (position !== b.size) {
        const chunk = b.slice(position, Math.min(b.size, position + POOL_SIZE));
        const buffer = await chunk.arrayBuffer();
        position += buffer.byteLength;
        yield new Uint8Array(buffer);
      }
    }
  }
}

const _Blob = class Blob {
  /** @type {Array.<(Blob|Uint8Array)>} */
  #parts = []
  #type = ''
  #size = 0
  #endings = 'transparent'

  /**
   * The Blob() constructor returns a new Blob object. The content
   * of the blob consists of the concatenation of the values given
   * in the parameter array.
   *
   * @param {*} blobParts
   * @param {{ type?: string, endings?: string }} [options]
   */
  constructor (blobParts = [], options = {}) {
    if (typeof blobParts !== 'object' || blobParts === null) {
      throw new TypeError('Failed to construct \'Blob\': The provided value cannot be converted to a sequence.')
    }

    if (typeof blobParts[Symbol.iterator] !== 'function') {
      throw new TypeError('Failed to construct \'Blob\': The object must have a callable @@iterator property.')
    }

    if (typeof options !== 'object' && typeof options !== 'function') {
      throw new TypeError('Failed to construct \'Blob\': parameter 2 cannot convert to dictionary.')
    }

    if (options === null) options = {};

    const encoder = new TextEncoder();
    for (const element of blobParts) {
      let part;
      if (ArrayBuffer.isView(element)) {
        part = new Uint8Array(element.buffer.slice(element.byteOffset, element.byteOffset + element.byteLength));
      } else if (element instanceof ArrayBuffer) {
        part = new Uint8Array(element.slice(0));
      } else if (element instanceof Blob) {
        part = element;
      } else {
        part = encoder.encode(`${element}`);
      }

      this.#size += ArrayBuffer.isView(part) ? part.byteLength : part.size;
      this.#parts.push(part);
    }

    this.#endings = `${options.endings === undefined ? 'transparent' : options.endings}`;
    const type = options.type === undefined ? '' : String(options.type);
    this.#type = /^[\x20-\x7E]*$/.test(type) ? type : '';
  }

  /**
   * The Blob interface's size property returns the
   * size of the Blob in bytes.
   */
  get size () {
    return this.#size
  }

  /**
   * The type property of a Blob object returns the MIME type of the file.
   */
  get type () {
    return this.#type
  }

  /**
   * The text() method in the Blob interface returns a Promise
   * that resolves with a string containing the contents of
   * the blob, interpreted as UTF-8.
   *
   * @return {Promise<string>}
   */
  async text () {
    // More optimized than using this.arrayBuffer()
    // that requires twice as much ram
    const decoder = new TextDecoder();
    let str = '';
    for await (const part of toIterator(this.#parts, false)) {
      str += decoder.decode(part, { stream: true });
    }
    // Remaining
    str += decoder.decode();
    return str
  }

  /**
   * The arrayBuffer() method in the Blob interface returns a
   * Promise that resolves with the contents of the blob as
   * binary data contained in an ArrayBuffer.
   *
   * @return {Promise<ArrayBuffer>}
   */
  async arrayBuffer () {
    // Easier way... Just a unnecessary overhead
    // const view = new Uint8Array(this.size);
    // await this.stream().getReader({mode: 'byob'}).read(view);
    // return view.buffer;

    const data = new Uint8Array(this.size);
    let offset = 0;
    for await (const chunk of toIterator(this.#parts, false)) {
      data.set(chunk, offset);
      offset += chunk.length;
    }

    return data.buffer
  }

  stream () {
    const it = toIterator(this.#parts, true);

    return new globalThis.ReadableStream({
      // @ts-ignore
      type: 'bytes',
      async pull (ctrl) {
        const chunk = await it.next();
        chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value);
      },

      async cancel () {
        await it.return();
      }
    })
  }

  /**
   * The Blob interface's slice() method creates and returns a
   * new Blob object which contains data from a subset of the
   * blob on which it's called.
   *
   * @param {number} [start]
   * @param {number} [end]
   * @param {string} [type]
   */
  slice (start = 0, end = this.size, type = '') {
    const { size } = this;

    let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
    let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);

    const span = Math.max(relativeEnd - relativeStart, 0);
    const parts = this.#parts;
    const blobParts = [];
    let added = 0;

    for (const part of parts) {
      // don't add the overflow to new blobParts
      if (added >= span) {
        break
      }

      const size = ArrayBuffer.isView(part) ? part.byteLength : part.size;
      if (relativeStart && size <= relativeStart) {
        // Skip the beginning and change the relative
        // start & end position as we skip the unwanted parts
        relativeStart -= size;
        relativeEnd -= size;
      } else {
        let chunk;
        if (ArrayBuffer.isView(part)) {
          chunk = part.subarray(relativeStart, Math.min(size, relativeEnd));
          added += chunk.byteLength;
        } else {
          chunk = part.slice(relativeStart, Math.min(size, relativeEnd));
          added += chunk.size;
        }
        relativeEnd -= size;
        blobParts.push(chunk);
        relativeStart = 0; // All next sequential parts should start at 0
      }
    }

    const blob = new Blob([], { type: String(type).toLowerCase() });
    blob.#size = span;
    blob.#parts = blobParts;

    return blob
  }

  get [Symbol.toStringTag] () {
    return 'Blob'
  }

  static [Symbol.hasInstance] (object) {
    return (
      object &&
      typeof object === 'object' &&
      typeof object.constructor === 'function' &&
      (
        typeof object.stream === 'function' ||
        typeof object.arrayBuffer === 'function'
      ) &&
      /^(Blob|File)$/.test(object[Symbol.toStringTag])
    )
  }
};

Object.defineProperties(_Blob.prototype, {
  size: { enumerable: true },
  type: { enumerable: true },
  slice: { enumerable: true }
});

/** @type {typeof globalThis.Blob} */
const Blob$1 = _Blob;

const _File = class File extends Blob$1 {
  #lastModified = 0
  #name = ''

  /**
   * @param {*[]} fileBits
   * @param {string} fileName
   * @param {{lastModified?: number, type?: string}} options
   */// @ts-ignore
  constructor (fileBits, fileName, options = {}) {
    if (arguments.length < 2) {
      throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`)
    }
    super(fileBits, options);

    if (options === null) options = {};

    // Simulate WebIDL type casting for NaN value in lastModified option.
    const lastModified = options.lastModified === undefined ? Date.now() : Number(options.lastModified);
    if (!Number.isNaN(lastModified)) {
      this.#lastModified = lastModified;
    }

    this.#name = String(fileName);
  }

  get name () {
    return this.#name
  }

  get lastModified () {
    return this.#lastModified
  }

  get [Symbol.toStringTag] () {
    return 'File'
  }

  static [Symbol.hasInstance] (object) {
    return !!object && object instanceof Blob$1 &&
      /^(File)$/.test(object[Symbol.toStringTag])
  }
};

/** @type {typeof globalThis.File} */// @ts-ignore
const File$1 = _File;

/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */


var {toStringTag:t,iterator:i,hasInstance:h}=Symbol,
r=Math.random,
m='append,set,get,getAll,delete,keys,values,entries,forEach,constructor'.split(','),
f$1=(a,b,c)=>(a+='',/^(Blob|File)$/.test(b && b[t])?[(c=c!==void 0?c+'':b[t]=='File'?b.name:'blob',a),b.name!==c||b[t]=='blob'?new File$1([b],c,b):b]:[a,b+'']),
e=(c,f)=>(f?c:c.replace(/\r?\n|\r/g,'\r\n')).replace(/\n/g,'%0A').replace(/\r/g,'%0D').replace(/"/g,'%22'),
x=(n, a, e)=>{if(a.length<e){throw new TypeError(`Failed to execute '${n}' on 'FormData': ${e} arguments required, but only ${a.length} present.`)}};

/** @type {typeof globalThis.FormData} */
const FormData$1 = class FormData {
#d=[];
constructor(...a){if(a.length)throw new TypeError(`Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.`)}
get [t]() {return 'FormData'}
[i](){return this.entries()}
static [h](o) {return o&&typeof o==='object'&&o[t]==='FormData'&&!m.some(m=>typeof o[m]!='function')}
append(...a){x('append',arguments,2);this.#d.push(f$1(...a));}
delete(a){x('delete',arguments,1);a+='';this.#d=this.#d.filter(([b])=>b!==a);}
get(a){x('get',arguments,1);a+='';for(var b=this.#d,l=b.length,c=0;c<l;c++)if(b[c][0]===a)return b[c][1];return null}
getAll(a,b){x('getAll',arguments,1);b=[];a+='';this.#d.forEach(c=>c[0]===a&&b.push(c[1]));return b}
has(a){x('has',arguments,1);a+='';return this.#d.some(b=>b[0]===a)}
forEach(a,b){x('forEach',arguments,1);for(var [c,d]of this)a.call(b,d,c,this);}
set(...a){x('set',arguments,2);var b=[],c=true;a=f$1(...a);this.#d.forEach(d=>{d[0]===a[0]?c&&(c=!b.push(a)):b.push(d);});c&&b.push(a);this.#d=b;}
*entries(){yield*this.#d;}
*keys(){for(var[a]of this)yield a;}
*values(){for(var[,a]of this)yield a;}};

/** @param {FormData} F */
function formDataToBlob (F,B=Blob$1){
var b=`${r()}${r()}`.replace(/\./g, '').slice(-28).padStart(32, '-'),c=[],p=`--${b}\r\nContent-Disposition: form-data; name="`;
F.forEach((v,n)=>typeof v=='string'
?c.push(p+e(n)+`"\r\n\r\n${v.replace(/\r(?!\n)|(?<!\r)\n/g, '\r\n')}\r\n`)
:c.push(p+e(n)+`"; filename="${e(v.name, 1)}"\r\nContent-Type: ${v.type||"application/octet-stream"}\r\n\r\n`, v, '\r\n'));
c.push(`--${b}--`);
return new B(c,{type:"multipart/form-data; boundary="+b})}

class FetchBaseError extends Error {
	constructor(message, type) {
		super(message);
		// Hide custom error implementation details from end-users
		Error.captureStackTrace(this, this.constructor);

		this.type = type;
	}

	get name() {
		return this.constructor.name;
	}

	get [Symbol.toStringTag]() {
		return this.constructor.name;
	}
}

/**
 * @typedef {{ address?: string, code: string, dest?: string, errno: number, info?: object, message: string, path?: string, port?: number, syscall: string}} SystemError
*/

/**
 * FetchError interface for operational errors
 */
class FetchError extends FetchBaseError {
	/**
	 * @param  {string} message -      Error message for human
	 * @param  {string} [type] -        Error type for machine
	 * @param  {SystemError} [systemError] - For Node.js system error
	 */
	constructor(message, type, systemError) {
		super(message, type);
		// When err.type is `system`, err.erroredSysCall contains system error and err.code contains system error code
		if (systemError) {
			// eslint-disable-next-line no-multi-assign
			this.code = this.errno = systemError.code;
			this.erroredSysCall = systemError.syscall;
		}
	}
}

/**
 * Is.js
 *
 * Object type checks.
 */

const NAME = Symbol.toStringTag;

/**
 * Check if `obj` is a URLSearchParams object
 * ref: https://github.com/node-fetch/node-fetch/issues/296#issuecomment-307598143
 * @param {*} object - Object to check for
 * @return {boolean}
 */
const isURLSearchParameters = object => {
	return (
		typeof object === 'object' &&
		typeof object.append === 'function' &&
		typeof object.delete === 'function' &&
		typeof object.get === 'function' &&
		typeof object.getAll === 'function' &&
		typeof object.has === 'function' &&
		typeof object.set === 'function' &&
		typeof object.sort === 'function' &&
		object[NAME] === 'URLSearchParams'
	);
};

/**
 * Check if `object` is a W3C `Blob` object (which `File` inherits from)
 * @param {*} object - Object to check for
 * @return {boolean}
 */
const isBlob = object => {
	return (
		object &&
		typeof object === 'object' &&
		typeof object.arrayBuffer === 'function' &&
		typeof object.type === 'string' &&
		typeof object.stream === 'function' &&
		typeof object.constructor === 'function' &&
		/^(Blob|File)$/.test(object[NAME])
	);
};

/**
 * Check if `obj` is an instance of AbortSignal.
 * @param {*} object - Object to check for
 * @return {boolean}
 */
const isAbortSignal = object => {
	return (
		typeof object === 'object' && (
			object[NAME] === 'AbortSignal' ||
			object[NAME] === 'EventTarget'
		)
	);
};

/**
 * isDomainOrSubdomain reports whether sub is a subdomain (or exact match) of
 * the parent domain.
 *
 * Both domains must already be in canonical form.
 * @param {string|URL} original
 * @param {string|URL} destination
 */
const isDomainOrSubdomain = (destination, original) => {
	const orig = new URL(original).hostname;
	const dest = new URL(destination).hostname;

	return orig === dest || orig.endsWith(`.${dest}`);
};

/**
 * isSameProtocol reports whether the two provided URLs use the same protocol.
 *
 * Both domains must already be in canonical form.
 * @param {string|URL} original
 * @param {string|URL} destination
 */
const isSameProtocol = (destination, original) => {
	const orig = new URL(original).protocol;
	const dest = new URL(destination).protocol;

	return orig === dest;
};

const pipeline = node_util.promisify(Stream.pipeline);
const INTERNALS$2 = Symbol('Body internals');

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Body {
	constructor(body, {
		size = 0
	} = {}) {
		let boundary = null;

		if (body === null) {
			// Body is undefined or null
			body = null;
		} else if (isURLSearchParameters(body)) {
			// Body is a URLSearchParams
			body = node_buffer.Buffer.from(body.toString());
		} else if (isBlob(body)) ; else if (node_buffer.Buffer.isBuffer(body)) ; else if (node_util.types.isAnyArrayBuffer(body)) {
			// Body is ArrayBuffer
			body = node_buffer.Buffer.from(body);
		} else if (ArrayBuffer.isView(body)) {
			// Body is ArrayBufferView
			body = node_buffer.Buffer.from(body.buffer, body.byteOffset, body.byteLength);
		} else if (body instanceof Stream) ; else if (body instanceof FormData$1) {
			// Body is FormData
			body = formDataToBlob(body);
			boundary = body.type.split('=')[1];
		} else {
			// None of the above
			// coerce to string then buffer
			body = node_buffer.Buffer.from(String(body));
		}

		let stream = body;

		if (node_buffer.Buffer.isBuffer(body)) {
			stream = Stream.Readable.from(body);
		} else if (isBlob(body)) {
			stream = Stream.Readable.from(body.stream());
		}

		this[INTERNALS$2] = {
			body,
			stream,
			boundary,
			disturbed: false,
			error: null
		};
		this.size = size;

		if (body instanceof Stream) {
			body.on('error', error_ => {
				const error = error_ instanceof FetchBaseError ?
					error_ :
					new FetchError(`Invalid response body while trying to fetch ${this.url}: ${error_.message}`, 'system', error_);
				this[INTERNALS$2].error = error;
			});
		}
	}

	get body() {
		return this[INTERNALS$2].stream;
	}

	get bodyUsed() {
		return this[INTERNALS$2].disturbed;
	}

	/**
	 * Decode response as ArrayBuffer
	 *
	 * @return  Promise
	 */
	async arrayBuffer() {
		const {buffer, byteOffset, byteLength} = await consumeBody(this);
		return buffer.slice(byteOffset, byteOffset + byteLength);
	}

	async formData() {
		const ct = this.headers.get('content-type');

		if (ct.startsWith('application/x-www-form-urlencoded')) {
			const formData = new FormData$1();
			const parameters = new URLSearchParams(await this.text());

			for (const [name, value] of parameters) {
				formData.append(name, value);
			}

			return formData;
		}

		const {toFormData} = await Promise.resolve().then(function () { return multipartParser; });
		return toFormData(this.body, ct);
	}

	/**
	 * Return raw response as Blob
	 *
	 * @return Promise
	 */
	async blob() {
		const ct = (this.headers && this.headers.get('content-type')) || (this[INTERNALS$2].body && this[INTERNALS$2].body.type) || '';
		const buf = await this.arrayBuffer();

		return new Blob$1([buf], {
			type: ct
		});
	}

	/**
	 * Decode response as json
	 *
	 * @return  Promise
	 */
	async json() {
		const text = await this.text();
		return JSON.parse(text);
	}

	/**
	 * Decode response as text
	 *
	 * @return  Promise
	 */
	async text() {
		const buffer = await consumeBody(this);
		return new TextDecoder().decode(buffer);
	}

	/**
	 * Decode response as buffer (non-spec api)
	 *
	 * @return  Promise
	 */
	buffer() {
		return consumeBody(this);
	}
}

Body.prototype.buffer = node_util.deprecate(Body.prototype.buffer, 'Please use \'response.arrayBuffer()\' instead of \'response.buffer()\'', 'node-fetch#buffer');

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: {enumerable: true},
	bodyUsed: {enumerable: true},
	arrayBuffer: {enumerable: true},
	blob: {enumerable: true},
	json: {enumerable: true},
	text: {enumerable: true},
	data: {get: node_util.deprecate(() => {},
		'data doesn\'t exist, use json(), text(), arrayBuffer(), or body instead',
		'https://github.com/node-fetch/node-fetch/issues/1000 (response)')}
});

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return Promise
 */
async function consumeBody(data) {
	if (data[INTERNALS$2].disturbed) {
		throw new TypeError(`body used already for: ${data.url}`);
	}

	data[INTERNALS$2].disturbed = true;

	if (data[INTERNALS$2].error) {
		throw data[INTERNALS$2].error;
	}

	const {body} = data;

	// Body is null
	if (body === null) {
		return node_buffer.Buffer.alloc(0);
	}

	/* c8 ignore next 3 */
	if (!(body instanceof Stream)) {
		return node_buffer.Buffer.alloc(0);
	}

	// Body is stream
	// get ready to actually consume the body
	const accum = [];
	let accumBytes = 0;

	try {
		for await (const chunk of body) {
			if (data.size > 0 && accumBytes + chunk.length > data.size) {
				const error = new FetchError(`content size at ${data.url} over limit: ${data.size}`, 'max-size');
				body.destroy(error);
				throw error;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		}
	} catch (error) {
		const error_ = error instanceof FetchBaseError ? error : new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error.message}`, 'system', error);
		throw error_;
	}

	if (body.readableEnded === true || body._readableState.ended === true) {
		try {
			if (accum.every(c => typeof c === 'string')) {
				return node_buffer.Buffer.from(accum.join(''));
			}

			return node_buffer.Buffer.concat(accum, accumBytes);
		} catch (error) {
			throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error.message}`, 'system', error);
		}
	} else {
		throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
	}
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed   instance       Response or Request instance
 * @param   String  highWaterMark  highWaterMark for both PassThrough body streams
 * @return  Mixed
 */
const clone = (instance, highWaterMark) => {
	let p1;
	let p2;
	let {body} = instance[INTERNALS$2];

	// Don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// Check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if ((body instanceof Stream) && (typeof body.getBoundary !== 'function')) {
		// Tee instance body
		p1 = new Stream.PassThrough({highWaterMark});
		p2 = new Stream.PassThrough({highWaterMark});
		body.pipe(p1);
		body.pipe(p2);
		// Set instance body to teed body and return the other teed body
		instance[INTERNALS$2].stream = p1;
		body = p2;
	}

	return body;
};

const getNonSpecFormDataBoundary = node_util.deprecate(
	body => body.getBoundary(),
	'form-data doesn\'t follow the spec and requires special treatment. Use alternative package',
	'https://github.com/node-fetch/node-fetch/issues/1167'
);

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param {any} body Any options.body input
 * @returns {string | null}
 */
const extractContentType = (body, request) => {
	// Body is null or undefined
	if (body === null) {
		return null;
	}

	// Body is string
	if (typeof body === 'string') {
		return 'text/plain;charset=UTF-8';
	}

	// Body is a URLSearchParams
	if (isURLSearchParameters(body)) {
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	}

	// Body is blob
	if (isBlob(body)) {
		return body.type || null;
	}

	// Body is a Buffer (Buffer, ArrayBuffer or ArrayBufferView)
	if (node_buffer.Buffer.isBuffer(body) || node_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
		return null;
	}

	if (body instanceof FormData$1) {
		return `multipart/form-data; boundary=${request[INTERNALS$2].boundary}`;
	}

	// Detect form data input from form-data module
	if (body && typeof body.getBoundary === 'function') {
		return `multipart/form-data;boundary=${getNonSpecFormDataBoundary(body)}`;
	}

	// Body is stream - can't really do much about this
	if (body instanceof Stream) {
		return null;
	}

	// Body constructor defaults other things to string
	return 'text/plain;charset=UTF-8';
};

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param {any} obj.body Body object from the Body instance.
 * @returns {number | null}
 */
const getTotalBytes = request => {
	const {body} = request[INTERNALS$2];

	// Body is null or undefined
	if (body === null) {
		return 0;
	}

	// Body is Blob
	if (isBlob(body)) {
		return body.size;
	}

	// Body is Buffer
	if (node_buffer.Buffer.isBuffer(body)) {
		return body.length;
	}

	// Detect form data input from form-data module
	if (body && typeof body.getLengthSync === 'function') {
		return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
	}

	// Body is stream
	return null;
};

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param {Stream.Writable} dest The stream to write to.
 * @param obj.body Body object from the Body instance.
 * @returns {Promise<void>}
 */
const writeToStream = async (dest, {body}) => {
	if (body === null) {
		// Body is null
		dest.end();
	} else {
		// Body is stream
		await pipeline(body, dest);
	}
};

/**
 * Headers.js
 *
 * Headers class offers convenient helpers
 */


/* c8 ignore next 9 */
const validateHeaderName = typeof http.validateHeaderName === 'function' ?
	http.validateHeaderName :
	name => {
		if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
			const error = new TypeError(`Header name must be a valid HTTP token [${name}]`);
			Object.defineProperty(error, 'code', {value: 'ERR_INVALID_HTTP_TOKEN'});
			throw error;
		}
	};

/* c8 ignore next 9 */
const validateHeaderValue = typeof http.validateHeaderValue === 'function' ?
	http.validateHeaderValue :
	(name, value) => {
		if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
			const error = new TypeError(`Invalid character in header content ["${name}"]`);
			Object.defineProperty(error, 'code', {value: 'ERR_INVALID_CHAR'});
			throw error;
		}
	};

/**
 * @typedef {Headers | Record<string, string> | Iterable<readonly [string, string]> | Iterable<Iterable<string>>} HeadersInit
 */

/**
 * This Fetch API interface allows you to perform various actions on HTTP request and response headers.
 * These actions include retrieving, setting, adding to, and removing.
 * A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs.
 * You can add to this using methods like append() (see Examples.)
 * In all methods of this interface, header names are matched by case-insensitive byte sequence.
 *
 */
let Headers$1 = class Headers extends URLSearchParams {
	/**
	 * Headers class
	 *
	 * @constructor
	 * @param {HeadersInit} [init] - Response headers
	 */
	constructor(init) {
		// Validate and normalize init object in [name, value(s)][]
		/** @type {string[][]} */
		let result = [];
		if (init instanceof Headers) {
			const raw = init.raw();
			for (const [name, values] of Object.entries(raw)) {
				result.push(...values.map(value => [name, value]));
			}
		} else if (init == null) ; else if (typeof init === 'object' && !node_util.types.isBoxedPrimitive(init)) {
			const method = init[Symbol.iterator];
			// eslint-disable-next-line no-eq-null, eqeqeq
			if (method == null) {
				// Record<ByteString, ByteString>
				result.push(...Object.entries(init));
			} else {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// Sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				result = [...init]
					.map(pair => {
						if (
							typeof pair !== 'object' || node_util.types.isBoxedPrimitive(pair)
						) {
							throw new TypeError('Each header pair must be an iterable object');
						}

						return [...pair];
					}).map(pair => {
						if (pair.length !== 2) {
							throw new TypeError('Each header pair must be a name/value tuple');
						}

						return [...pair];
					});
			}
		} else {
			throw new TypeError('Failed to construct \'Headers\': The provided value is not of type \'(sequence<sequence<ByteString>> or record<ByteString, ByteString>)');
		}

		// Validate and lowercase
		result =
			result.length > 0 ?
				result.map(([name, value]) => {
					validateHeaderName(name);
					validateHeaderValue(name, String(value));
					return [String(name).toLowerCase(), String(value)];
				}) :
				undefined;

		super(result);

		// Returning a Proxy that will lowercase key names, validate parameters and sort keys
		// eslint-disable-next-line no-constructor-return
		return new Proxy(this, {
			get(target, p, receiver) {
				switch (p) {
					case 'append':
					case 'set':
						return (name, value) => {
							validateHeaderName(name);
							validateHeaderValue(name, String(value));
							return URLSearchParams.prototype[p].call(
								target,
								String(name).toLowerCase(),
								String(value)
							);
						};

					case 'delete':
					case 'has':
					case 'getAll':
						return name => {
							validateHeaderName(name);
							return URLSearchParams.prototype[p].call(
								target,
								String(name).toLowerCase()
							);
						};

					case 'keys':
						return () => {
							target.sort();
							return new Set(URLSearchParams.prototype.keys.call(target)).keys();
						};

					default:
						return Reflect.get(target, p, receiver);
				}
			}
		});
		/* c8 ignore next */
	}

	get [Symbol.toStringTag]() {
		return this.constructor.name;
	}

	toString() {
		return Object.prototype.toString.call(this);
	}

	get(name) {
		const values = this.getAll(name);
		if (values.length === 0) {
			return null;
		}

		let value = values.join(', ');
		if (/^content-encoding$/i.test(name)) {
			value = value.toLowerCase();
		}

		return value;
	}

	forEach(callback, thisArg = undefined) {
		for (const name of this.keys()) {
			Reflect.apply(callback, thisArg, [this.get(name), name, this]);
		}
	}

	* values() {
		for (const name of this.keys()) {
			yield this.get(name);
		}
	}

	/**
	 * @type {() => IterableIterator<[string, string]>}
	 */
	* entries() {
		for (const name of this.keys()) {
			yield [name, this.get(name)];
		}
	}

	[Symbol.iterator]() {
		return this.entries();
	}

	/**
	 * Node-fetch non-spec method
	 * returning all headers and their values as array
	 * @returns {Record<string, string[]>}
	 */
	raw() {
		return [...this.keys()].reduce((result, key) => {
			result[key] = this.getAll(key);
			return result;
		}, {});
	}

	/**
	 * For better console.log(headers) and also to convert Headers into Node.js Request compatible format
	 */
	[Symbol.for('nodejs.util.inspect.custom')]() {
		return [...this.keys()].reduce((result, key) => {
			const values = this.getAll(key);
			// Http.request() only supports string as Host header.
			// This hack makes specifying custom Host header possible.
			if (key === 'host') {
				result[key] = values[0];
			} else {
				result[key] = values.length > 1 ? values : values[0];
			}

			return result;
		}, {});
	}
};

/**
 * Re-shaping object for Web IDL tests
 * Only need to do it for overridden methods
 */
Object.defineProperties(
	Headers$1.prototype,
	['get', 'entries', 'forEach', 'values'].reduce((result, property) => {
		result[property] = {enumerable: true};
		return result;
	}, {})
);

/**
 * Create a Headers object from an http.IncomingMessage.rawHeaders, ignoring those that do
 * not conform to HTTP grammar productions.
 * @param {import('http').IncomingMessage['rawHeaders']} headers
 */
function fromRawHeaders(headers = []) {
	return new Headers$1(
		headers
			// Split into pairs
			.reduce((result, value, index, array) => {
				if (index % 2 === 0) {
					result.push(array.slice(index, index + 2));
				}

				return result;
			}, [])
			.filter(([name, value]) => {
				try {
					validateHeaderName(name);
					validateHeaderValue(name, String(value));
					return true;
				} catch {
					return false;
				}
			})

	);
}

const redirectStatus = new Set([301, 302, 303, 307, 308]);

/**
 * Redirect code matching
 *
 * @param {number} code - Status code
 * @return {boolean}
 */
const isRedirect = code => {
	return redirectStatus.has(code);
};

/**
 * Response.js
 *
 * Response class provides content decoding
 */


const INTERNALS$1 = Symbol('Response internals');

/**
 * Response class
 *
 * Ref: https://fetch.spec.whatwg.org/#response-class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response extends Body {
	constructor(body = null, options = {}) {
		super(body, options);

		// eslint-disable-next-line no-eq-null, eqeqeq, no-negated-condition
		const status = options.status != null ? options.status : 200;

		const headers = new Headers$1(options.headers);

		if (body !== null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body, this);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			type: 'default',
			url: options.url,
			status,
			statusText: options.statusText || '',
			headers,
			counter: options.counter,
			highWaterMark: options.highWaterMark
		};
	}

	get type() {
		return this[INTERNALS$1].type;
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
	 * Convenience property representing if the request ended normally
	 */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	get highWaterMark() {
		return this[INTERNALS$1].highWaterMark;
	}

	/**
	 * Clone this response
	 *
	 * @return  Response
	 */
	clone() {
		return new Response(clone(this, this.highWaterMark), {
			type: this.type,
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected,
			size: this.size,
			highWaterMark: this.highWaterMark
		});
	}

	/**
	 * @param {string} url    The URL that the new response is to originate from.
	 * @param {number} status An optional status code for the response (e.g., 302.)
	 * @returns {Response}    A Response object.
	 */
	static redirect(url, status = 302) {
		if (!isRedirect(status)) {
			throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
		}

		return new Response(null, {
			headers: {
				location: new URL(url).toString()
			},
			status
		});
	}

	static error() {
		const response = new Response(null, {status: 0, statusText: ''});
		response[INTERNALS$1].type = 'error';
		return response;
	}

	static json(data = undefined, init = {}) {
		const body = JSON.stringify(data);

		if (body === undefined) {
			throw new TypeError('data is not JSON serializable');
		}

		const headers = new Headers$1(init && init.headers);

		if (!headers.has('content-type')) {
			headers.set('content-type', 'application/json');
		}

		return new Response(body, {
			...init,
			headers
		});
	}

	get [Symbol.toStringTag]() {
		return 'Response';
	}
}

Object.defineProperties(Response.prototype, {
	type: {enumerable: true},
	url: {enumerable: true},
	status: {enumerable: true},
	ok: {enumerable: true},
	redirected: {enumerable: true},
	statusText: {enumerable: true},
	headers: {enumerable: true},
	clone: {enumerable: true}
});

const getSearch = parsedURL => {
	if (parsedURL.search) {
		return parsedURL.search;
	}

	const lastOffset = parsedURL.href.length - 1;
	const hash = parsedURL.hash || (parsedURL.href[lastOffset] === '#' ? '#' : '');
	return parsedURL.href[lastOffset - hash.length] === '?' ? '?' : '';
};

/**
 * @external URL
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URL|URL}
 */

/**
 * @module utils/referrer
 * @private
 */

/**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#strip-url|Referrer Policy §8.4. Strip url for use as a referrer}
 * @param {string} URL
 * @param {boolean} [originOnly=false]
 */
function stripURLForUseAsAReferrer(url, originOnly = false) {
	// 1. If url is null, return no referrer.
	if (url == null) { // eslint-disable-line no-eq-null, eqeqeq
		return 'no-referrer';
	}

	url = new URL(url);

	// 2. If url's scheme is a local scheme, then return no referrer.
	if (/^(about|blob|data):$/.test(url.protocol)) {
		return 'no-referrer';
	}

	// 3. Set url's username to the empty string.
	url.username = '';

	// 4. Set url's password to null.
	// Note: `null` appears to be a mistake as this actually results in the password being `"null"`.
	url.password = '';

	// 5. Set url's fragment to null.
	// Note: `null` appears to be a mistake as this actually results in the fragment being `"#null"`.
	url.hash = '';

	// 6. If the origin-only flag is true, then:
	if (originOnly) {
		// 6.1. Set url's path to null.
		// Note: `null` appears to be a mistake as this actually results in the path being `"/null"`.
		url.pathname = '';

		// 6.2. Set url's query to null.
		// Note: `null` appears to be a mistake as this actually results in the query being `"?null"`.
		url.search = '';
	}

	// 7. Return url.
	return url;
}

/**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#enumdef-referrerpolicy|enum ReferrerPolicy}
 */
const ReferrerPolicy = new Set([
	'',
	'no-referrer',
	'no-referrer-when-downgrade',
	'same-origin',
	'origin',
	'strict-origin',
	'origin-when-cross-origin',
	'strict-origin-when-cross-origin',
	'unsafe-url'
]);

/**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#default-referrer-policy|default referrer policy}
 */
const DEFAULT_REFERRER_POLICY = 'strict-origin-when-cross-origin';

/**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#referrer-policies|Referrer Policy §3. Referrer Policies}
 * @param {string} referrerPolicy
 * @returns {string} referrerPolicy
 */
function validateReferrerPolicy(referrerPolicy) {
	if (!ReferrerPolicy.has(referrerPolicy)) {
		throw new TypeError(`Invalid referrerPolicy: ${referrerPolicy}`);
	}

	return referrerPolicy;
}

/**
 * @see {@link https://w3c.github.io/webappsec-secure-contexts/#is-origin-trustworthy|Referrer Policy §3.2. Is origin potentially trustworthy?}
 * @param {external:URL} url
 * @returns `true`: "Potentially Trustworthy", `false`: "Not Trustworthy"
 */
function isOriginPotentiallyTrustworthy(url) {
	// 1. If origin is an opaque origin, return "Not Trustworthy".
	// Not applicable

	// 2. Assert: origin is a tuple origin.
	// Not for implementations

	// 3. If origin's scheme is either "https" or "wss", return "Potentially Trustworthy".
	if (/^(http|ws)s:$/.test(url.protocol)) {
		return true;
	}

	// 4. If origin's host component matches one of the CIDR notations 127.0.0.0/8 or ::1/128 [RFC4632], return "Potentially Trustworthy".
	const hostIp = url.host.replace(/(^\[)|(]$)/g, '');
	const hostIPVersion = node_net.isIP(hostIp);

	if (hostIPVersion === 4 && /^127\./.test(hostIp)) {
		return true;
	}

	if (hostIPVersion === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(hostIp)) {
		return true;
	}

	// 5. If origin's host component is "localhost" or falls within ".localhost", and the user agent conforms to the name resolution rules in [let-localhost-be-localhost], return "Potentially Trustworthy".
	// We are returning FALSE here because we cannot ensure conformance to
	// let-localhost-be-loalhost (https://tools.ietf.org/html/draft-west-let-localhost-be-localhost)
	if (url.host === 'localhost' || url.host.endsWith('.localhost')) {
		return false;
	}

	// 6. If origin's scheme component is file, return "Potentially Trustworthy".
	if (url.protocol === 'file:') {
		return true;
	}

	// 7. If origin's scheme component is one which the user agent considers to be authenticated, return "Potentially Trustworthy".
	// Not supported

	// 8. If origin has been configured as a trustworthy origin, return "Potentially Trustworthy".
	// Not supported

	// 9. Return "Not Trustworthy".
	return false;
}

/**
 * @see {@link https://w3c.github.io/webappsec-secure-contexts/#is-url-trustworthy|Referrer Policy §3.3. Is url potentially trustworthy?}
 * @param {external:URL} url
 * @returns `true`: "Potentially Trustworthy", `false`: "Not Trustworthy"
 */
function isUrlPotentiallyTrustworthy(url) {
	// 1. If url is "about:blank" or "about:srcdoc", return "Potentially Trustworthy".
	if (/^about:(blank|srcdoc)$/.test(url)) {
		return true;
	}

	// 2. If url's scheme is "data", return "Potentially Trustworthy".
	if (url.protocol === 'data:') {
		return true;
	}

	// Note: The origin of blob: and filesystem: URLs is the origin of the context in which they were
	// created. Therefore, blobs created in a trustworthy origin will themselves be potentially
	// trustworthy.
	if (/^(blob|filesystem):$/.test(url.protocol)) {
		return true;
	}

	// 3. Return the result of executing §3.2 Is origin potentially trustworthy? on url's origin.
	return isOriginPotentiallyTrustworthy(url);
}

/**
 * Modifies the referrerURL to enforce any extra security policy considerations.
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#determine-requests-referrer|Referrer Policy §8.3. Determine request's Referrer}, step 7
 * @callback module:utils/referrer~referrerURLCallback
 * @param {external:URL} referrerURL
 * @returns {external:URL} modified referrerURL
 */

/**
 * Modifies the referrerOrigin to enforce any extra security policy considerations.
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#determine-requests-referrer|Referrer Policy §8.3. Determine request's Referrer}, step 7
 * @callback module:utils/referrer~referrerOriginCallback
 * @param {external:URL} referrerOrigin
 * @returns {external:URL} modified referrerOrigin
 */

/**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#determine-requests-referrer|Referrer Policy §8.3. Determine request's Referrer}
 * @param {Request} request
 * @param {object} o
 * @param {module:utils/referrer~referrerURLCallback} o.referrerURLCallback
 * @param {module:utils/referrer~referrerOriginCallback} o.referrerOriginCallback
 * @returns {external:URL} Request's referrer
 */
function determineRequestsReferrer(request, {referrerURLCallback, referrerOriginCallback} = {}) {
	// There are 2 notes in the specification about invalid pre-conditions.  We return null, here, for
	// these cases:
	// > Note: If request's referrer is "no-referrer", Fetch will not call into this algorithm.
	// > Note: If request's referrer policy is the empty string, Fetch will not call into this
	// > algorithm.
	if (request.referrer === 'no-referrer' || request.referrerPolicy === '') {
		return null;
	}

	// 1. Let policy be request's associated referrer policy.
	const policy = request.referrerPolicy;

	// 2. Let environment be request's client.
	// not applicable to node.js

	// 3. Switch on request's referrer:
	if (request.referrer === 'about:client') {
		return 'no-referrer';
	}

	// "a URL": Let referrerSource be request's referrer.
	const referrerSource = request.referrer;

	// 4. Let request's referrerURL be the result of stripping referrerSource for use as a referrer.
	let referrerURL = stripURLForUseAsAReferrer(referrerSource);

	// 5. Let referrerOrigin be the result of stripping referrerSource for use as a referrer, with the
	//    origin-only flag set to true.
	let referrerOrigin = stripURLForUseAsAReferrer(referrerSource, true);

	// 6. If the result of serializing referrerURL is a string whose length is greater than 4096, set
	//    referrerURL to referrerOrigin.
	if (referrerURL.toString().length > 4096) {
		referrerURL = referrerOrigin;
	}

	// 7. The user agent MAY alter referrerURL or referrerOrigin at this point to enforce arbitrary
	//    policy considerations in the interests of minimizing data leakage. For example, the user
	//    agent could strip the URL down to an origin, modify its host, replace it with an empty
	//    string, etc.
	if (referrerURLCallback) {
		referrerURL = referrerURLCallback(referrerURL);
	}

	if (referrerOriginCallback) {
		referrerOrigin = referrerOriginCallback(referrerOrigin);
	}

	// 8.Execute the statements corresponding to the value of policy:
	const currentURL = new URL(request.url);

	switch (policy) {
		case 'no-referrer':
			return 'no-referrer';

		case 'origin':
			return referrerOrigin;

		case 'unsafe-url':
			return referrerURL;

		case 'strict-origin':
			// 1. If referrerURL is a potentially trustworthy URL and request's current URL is not a
			//    potentially trustworthy URL, then return no referrer.
			if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
				return 'no-referrer';
			}

			// 2. Return referrerOrigin.
			return referrerOrigin.toString();

		case 'strict-origin-when-cross-origin':
			// 1. If the origin of referrerURL and the origin of request's current URL are the same, then
			//    return referrerURL.
			if (referrerURL.origin === currentURL.origin) {
				return referrerURL;
			}

			// 2. If referrerURL is a potentially trustworthy URL and request's current URL is not a
			//    potentially trustworthy URL, then return no referrer.
			if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
				return 'no-referrer';
			}

			// 3. Return referrerOrigin.
			return referrerOrigin;

		case 'same-origin':
			// 1. If the origin of referrerURL and the origin of request's current URL are the same, then
			//    return referrerURL.
			if (referrerURL.origin === currentURL.origin) {
				return referrerURL;
			}

			// 2. Return no referrer.
			return 'no-referrer';

		case 'origin-when-cross-origin':
			// 1. If the origin of referrerURL and the origin of request's current URL are the same, then
			//    return referrerURL.
			if (referrerURL.origin === currentURL.origin) {
				return referrerURL;
			}

			// Return referrerOrigin.
			return referrerOrigin;

		case 'no-referrer-when-downgrade':
			// 1. If referrerURL is a potentially trustworthy URL and request's current URL is not a
			//    potentially trustworthy URL, then return no referrer.
			if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
				return 'no-referrer';
			}

			// 2. Return referrerURL.
			return referrerURL;

		default:
			throw new TypeError(`Invalid referrerPolicy: ${policy}`);
	}
}

/**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#parse-referrer-policy-from-header|Referrer Policy §8.1. Parse a referrer policy from a Referrer-Policy header}
 * @param {Headers} headers Response headers
 * @returns {string} policy
 */
function parseReferrerPolicyFromHeader(headers) {
	// 1. Let policy-tokens be the result of extracting header list values given `Referrer-Policy`
	//    and response’s header list.
	const policyTokens = (headers.get('referrer-policy') || '').split(/[,\s]+/);

	// 2. Let policy be the empty string.
	let policy = '';

	// 3. For each token in policy-tokens, if token is a referrer policy and token is not the empty
	//    string, then set policy to token.
	// Note: This algorithm loops over multiple policy values to allow deployment of new policy
	// values with fallbacks for older user agents, as described in § 11.1 Unknown Policy Values.
	for (const token of policyTokens) {
		if (token && ReferrerPolicy.has(token)) {
			policy = token;
		}
	}

	// 4. Return policy.
	return policy;
}

/**
 * Request.js
 *
 * Request class contains server only options
 *
 * All spec algorithm step numbers are based on https://fetch.spec.whatwg.org/commit-snapshots/ae716822cb3a61843226cd090eefc6589446c1d2/.
 */


const INTERNALS = Symbol('Request internals');

/**
 * Check if `obj` is an instance of Request.
 *
 * @param  {*} object
 * @return {boolean}
 */
const isRequest = object => {
	return (
		typeof object === 'object' &&
		typeof object[INTERNALS] === 'object'
	);
};

const doBadDataWarn = node_util.deprecate(() => {},
	'.data is not a valid RequestInit property, use .body instead',
	'https://github.com/node-fetch/node-fetch/issues/1000 (request)');

/**
 * Request class
 *
 * Ref: https://fetch.spec.whatwg.org/#request-class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request extends Body {
	constructor(input, init = {}) {
		let parsedURL;

		// Normalize input and force URL to be encoded as UTF-8 (https://github.com/node-fetch/node-fetch/issues/245)
		if (isRequest(input)) {
			parsedURL = new URL(input.url);
		} else {
			parsedURL = new URL(input);
			input = {};
		}

		if (parsedURL.username !== '' || parsedURL.password !== '') {
			throw new TypeError(`${parsedURL} is an url with embedded credentials.`);
		}

		let method = init.method || input.method || 'GET';
		if (/^(delete|get|head|options|post|put)$/i.test(method)) {
			method = method.toUpperCase();
		}

		if (!isRequest(init) && 'data' in init) {
			doBadDataWarn();
		}

		// eslint-disable-next-line no-eq-null, eqeqeq
		if ((init.body != null || (isRequest(input) && input.body !== null)) &&
			(method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		const inputBody = init.body ?
			init.body :
			(isRequest(input) && input.body !== null ?
				clone(input) :
				null);

		super(inputBody, {
			size: init.size || input.size || 0
		});

		const headers = new Headers$1(init.headers || input.headers || {});

		if (inputBody !== null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody, this);
			if (contentType) {
				headers.set('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ?
			input.signal :
			null;
		if ('signal' in init) {
			signal = init.signal;
		}

		// eslint-disable-next-line no-eq-null, eqeqeq
		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal or EventTarget');
		}

		// §5.4, Request constructor steps, step 15.1
		// eslint-disable-next-line no-eq-null, eqeqeq
		let referrer = init.referrer == null ? input.referrer : init.referrer;
		if (referrer === '') {
			// §5.4, Request constructor steps, step 15.2
			referrer = 'no-referrer';
		} else if (referrer) {
			// §5.4, Request constructor steps, step 15.3.1, 15.3.2
			const parsedReferrer = new URL(referrer);
			// §5.4, Request constructor steps, step 15.3.3, 15.3.4
			referrer = /^about:(\/\/)?client$/.test(parsedReferrer) ? 'client' : parsedReferrer;
		} else {
			referrer = undefined;
		}

		this[INTERNALS] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal,
			referrer
		};

		// Node-fetch-only options
		this.follow = init.follow === undefined ? (input.follow === undefined ? 20 : input.follow) : init.follow;
		this.compress = init.compress === undefined ? (input.compress === undefined ? true : input.compress) : init.compress;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
		this.highWaterMark = init.highWaterMark || input.highWaterMark || 16384;
		this.insecureHTTPParser = init.insecureHTTPParser || input.insecureHTTPParser || false;

		// §5.4, Request constructor steps, step 16.
		// Default is empty string per https://fetch.spec.whatwg.org/#concept-request-referrer-policy
		this.referrerPolicy = init.referrerPolicy || input.referrerPolicy || '';
	}

	/** @returns {string} */
	get method() {
		return this[INTERNALS].method;
	}

	/** @returns {string} */
	get url() {
		return node_url.format(this[INTERNALS].parsedURL);
	}

	/** @returns {Headers} */
	get headers() {
		return this[INTERNALS].headers;
	}

	get redirect() {
		return this[INTERNALS].redirect;
	}

	/** @returns {AbortSignal} */
	get signal() {
		return this[INTERNALS].signal;
	}

	// https://fetch.spec.whatwg.org/#dom-request-referrer
	get referrer() {
		if (this[INTERNALS].referrer === 'no-referrer') {
			return '';
		}

		if (this[INTERNALS].referrer === 'client') {
			return 'about:client';
		}

		if (this[INTERNALS].referrer) {
			return this[INTERNALS].referrer.toString();
		}

		return undefined;
	}

	get referrerPolicy() {
		return this[INTERNALS].referrerPolicy;
	}

	set referrerPolicy(referrerPolicy) {
		this[INTERNALS].referrerPolicy = validateReferrerPolicy(referrerPolicy);
	}

	/**
	 * Clone this request
	 *
	 * @return  Request
	 */
	clone() {
		return new Request(this);
	}

	get [Symbol.toStringTag]() {
		return 'Request';
	}
}

Object.defineProperties(Request.prototype, {
	method: {enumerable: true},
	url: {enumerable: true},
	headers: {enumerable: true},
	redirect: {enumerable: true},
	clone: {enumerable: true},
	signal: {enumerable: true},
	referrer: {enumerable: true},
	referrerPolicy: {enumerable: true}
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param {Request} request - A Request instance
 * @return The options object to be passed to http.request
 */
const getNodeRequestOptions = request => {
	const {parsedURL} = request[INTERNALS];
	const headers = new Headers$1(request[INTERNALS].headers);

	// Fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body === null && /^(post|put)$/i.test(request.method)) {
		contentLengthValue = '0';
	}

	if (request.body !== null) {
		const totalBytes = getTotalBytes(request);
		// Set Content-Length if totalBytes is a number (that is not NaN)
		if (typeof totalBytes === 'number' && !Number.isNaN(totalBytes)) {
			contentLengthValue = String(totalBytes);
		}
	}

	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// 4.1. Main fetch, step 2.6
	// > If request's referrer policy is the empty string, then set request's referrer policy to the
	// > default referrer policy.
	if (request.referrerPolicy === '') {
		request.referrerPolicy = DEFAULT_REFERRER_POLICY;
	}

	// 4.1. Main fetch, step 2.7
	// > If request's referrer is not "no-referrer", set request's referrer to the result of invoking
	// > determine request's referrer.
	if (request.referrer && request.referrer !== 'no-referrer') {
		request[INTERNALS].referrer = determineRequestsReferrer(request);
	} else {
		request[INTERNALS].referrer = 'no-referrer';
	}

	// 4.5. HTTP-network-or-cache fetch, step 6.9
	// > If httpRequest's referrer is a URL, then append `Referer`/httpRequest's referrer, serialized
	// >  and isomorphic encoded, to httpRequest's header list.
	if (request[INTERNALS].referrer instanceof URL) {
		headers.set('Referer', request.referrer);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip, deflate, br');
	}

	let {agent} = request;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	const search = getSearch(parsedURL);

	// Pass the full URL directly to request(), but overwrite the following
	// options:
	const options = {
		// Overwrite search to retain trailing ? (issue #776)
		path: parsedURL.pathname + search,
		// The following options are not expressed in the URL
		method: request.method,
		headers: headers[Symbol.for('nodejs.util.inspect.custom')](),
		insecureHTTPParser: request.insecureHTTPParser,
		agent
	};

	return {
		/** @type {URL} */
		parsedURL,
		options
	};
};

/**
 * AbortError interface for cancelled requests
 */
class AbortError extends FetchBaseError {
	constructor(message, type = 'aborted') {
		super(message, type);
	}
}

/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */

var nodeDomexception;
var hasRequiredNodeDomexception;

function requireNodeDomexception () {
	if (hasRequiredNodeDomexception) return nodeDomexception;
	hasRequiredNodeDomexception = 1;
	if (!globalThis.DOMException) {
	  try {
	    const { MessageChannel } = require('worker_threads'),
	    port = new MessageChannel().port1,
	    ab = new ArrayBuffer();
	    port.postMessage(ab, [ab, ab]);
	  } catch (err) {
	    err.constructor.name === 'DOMException' && (
	      globalThis.DOMException = err.constructor
	    );
	  }
	}

	nodeDomexception = globalThis.DOMException;
	return nodeDomexception;
}

requireNodeDomexception();

const { stat } = node_fs.promises;

/**
 * Index.js
 *
 * a request API compatible with window.fetch
 *
 * All spec algorithm step numbers are based on https://fetch.spec.whatwg.org/commit-snapshots/ae716822cb3a61843226cd090eefc6589446c1d2/.
 */


const supportedSchemas = new Set(['data:', 'http:', 'https:']);

/**
 * Fetch function
 *
 * @param   {string | URL | import('./request').default} url - Absolute url or Request instance
 * @param   {*} [options_] - Fetch options
 * @return  {Promise<import('./response').default>}
 */
async function fetch(url, options_) {
	return new Promise((resolve, reject) => {
		// Build request object
		const request = new Request(url, options_);
		const {parsedURL, options} = getNodeRequestOptions(request);
		if (!supportedSchemas.has(parsedURL.protocol)) {
			throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${parsedURL.protocol.replace(/:$/, '')}" is not supported.`);
		}

		if (parsedURL.protocol === 'data:') {
			const data = dataUriToBuffer(request.url);
			const response = new Response(data, {headers: {'Content-Type': data.typeFull}});
			resolve(response);
			return;
		}

		// Wrap http.request into fetch
		const send = (parsedURL.protocol === 'https:' ? https : http).request;
		const {signal} = request;
		let response = null;

		const abort = () => {
			const error = new AbortError('The operation was aborted.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}

			if (!response || !response.body) {
				return;
			}

			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = () => {
			abort();
			finalize();
		};

		// Send request
		const request_ = send(parsedURL.toString(), options);

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		const finalize = () => {
			request_.abort();
			if (signal) {
				signal.removeEventListener('abort', abortAndFinalize);
			}
		};

		request_.on('error', error => {
			reject(new FetchError(`request to ${request.url} failed, reason: ${error.message}`, 'system', error));
			finalize();
		});

		fixResponseChunkedTransferBadEnding(request_, error => {
			if (response && response.body) {
				response.body.destroy(error);
			}
		});

		/* c8 ignore next 18 */
		if (process.version < 'v14') {
			// Before Node.js 14, pipeline() does not fully support async iterators and does not always
			// properly handle when the socket close/end events are out of order.
			request_.on('socket', s => {
				let endedWithEventsCount;
				s.prependListener('end', () => {
					endedWithEventsCount = s._eventsCount;
				});
				s.prependListener('close', hadError => {
					// if end happened before close but the socket didn't emit an error, do it now
					if (response && endedWithEventsCount < s._eventsCount && !hadError) {
						const error = new Error('Premature close');
						error.code = 'ERR_STREAM_PREMATURE_CLOSE';
						response.body.emit('error', error);
					}
				});
			});
		}

		request_.on('response', response_ => {
			request_.setTimeout(0);
			const headers = fromRawHeaders(response_.rawHeaders);

			// HTTP fetch step 5
			if (isRedirect(response_.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				let locationURL = null;
				try {
					locationURL = location === null ? null : new URL(location, request.url);
				} catch {
					// error here can only be invalid URL in Location: header
					// do not throw when options.redirect == manual
					// let the user extract the errorneous redirect URL
					if (request.redirect !== 'manual') {
						reject(new FetchError(`uri requested responds with an invalid redirect URL: ${location}`, 'invalid-redirect'));
						finalize();
						return;
					}
				}

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// Nothing to do
						break;
					case 'follow': {
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOptions = {
							headers: new Headers$1(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: clone(request),
							signal: request.signal,
							size: request.size,
							referrer: request.referrer,
							referrerPolicy: request.referrerPolicy
						};

						// when forwarding sensitive headers like "Authorization",
						// "WWW-Authenticate", and "Cookie" to untrusted targets,
						// headers will be ignored when following a redirect to a domain
						// that is not a subdomain match or exact match of the initial domain.
						// For example, a redirect from "foo.com" to either "foo.com" or "sub.foo.com"
						// will forward the sensitive headers, but a redirect to "bar.com" will not.
						// headers will also be ignored when following a redirect to a domain using
						// a different protocol. For example, a redirect from "https://foo.com" to "http://foo.com"
						// will not forward the sensitive headers
						if (!isDomainOrSubdomain(request.url, locationURL) || !isSameProtocol(request.url, locationURL)) {
							for (const name of ['authorization', 'www-authenticate', 'cookie', 'cookie2']) {
								requestOptions.headers.delete(name);
							}
						}

						// HTTP-redirect fetch step 9
						if (response_.statusCode !== 303 && request.body && options_.body instanceof Stream.Readable) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (response_.statusCode === 303 || ((response_.statusCode === 301 || response_.statusCode === 302) && request.method === 'POST')) {
							requestOptions.method = 'GET';
							requestOptions.body = undefined;
							requestOptions.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 14
						const responseReferrerPolicy = parseReferrerPolicyFromHeader(headers);
						if (responseReferrerPolicy) {
							requestOptions.referrerPolicy = responseReferrerPolicy;
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOptions)));
						finalize();
						return;
					}

					default:
						return reject(new TypeError(`Redirect option '${request.redirect}' is not a valid value of RequestRedirect`));
				}
			}

			// Prepare response
			if (signal) {
				response_.once('end', () => {
					signal.removeEventListener('abort', abortAndFinalize);
				});
			}

			let body = Stream.pipeline(response_, new Stream.PassThrough(), error => {
				if (error) {
					reject(error);
				}
			});
			// see https://github.com/nodejs/node/pull/29376
			/* c8 ignore next 3 */
			if (process.version < 'v12.10') {
				response_.on('aborted', abortAndFinalize);
			}

			const responseOptions = {
				url: request.url,
				status: response_.statusCode,
				statusText: response_.statusMessage,
				headers,
				size: request.size,
				counter: request.counter,
				highWaterMark: request.highWaterMark
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
				response = new Response(body, responseOptions);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// For gzip
			if (codings === 'gzip' || codings === 'x-gzip') {
				body = Stream.pipeline(body, zlib.createGunzip(zlibOptions), error => {
					if (error) {
						reject(error);
					}
				});
				response = new Response(body, responseOptions);
				resolve(response);
				return;
			}

			// For deflate
			if (codings === 'deflate' || codings === 'x-deflate') {
				// Handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = Stream.pipeline(response_, new Stream.PassThrough(), error => {
					if (error) {
						reject(error);
					}
				});
				raw.once('data', chunk => {
					// See http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = Stream.pipeline(body, zlib.createInflate(), error => {
							if (error) {
								reject(error);
							}
						});
					} else {
						body = Stream.pipeline(body, zlib.createInflateRaw(), error => {
							if (error) {
								reject(error);
							}
						});
					}

					response = new Response(body, responseOptions);
					resolve(response);
				});
				raw.once('end', () => {
					// Some old IIS servers return zero-length OK deflate responses, so
					// 'data' is never emitted. See https://github.com/node-fetch/node-fetch/pull/903
					if (!response) {
						response = new Response(body, responseOptions);
						resolve(response);
					}
				});
				return;
			}

			// For br
			if (codings === 'br') {
				body = Stream.pipeline(body, zlib.createBrotliDecompress(), error => {
					if (error) {
						reject(error);
					}
				});
				response = new Response(body, responseOptions);
				resolve(response);
				return;
			}

			// Otherwise, use response as-is
			response = new Response(body, responseOptions);
			resolve(response);
		});

		// eslint-disable-next-line promise/prefer-await-to-then
		writeToStream(request_, request).catch(reject);
	});
}

function fixResponseChunkedTransferBadEnding(request, errorCallback) {
	const LAST_CHUNK = node_buffer.Buffer.from('0\r\n\r\n');

	let isChunkedTransfer = false;
	let properLastChunkReceived = false;
	let previousChunk;

	request.on('response', response => {
		const {headers} = response;
		isChunkedTransfer = headers['transfer-encoding'] === 'chunked' && !headers['content-length'];
	});

	request.on('socket', socket => {
		const onSocketClose = () => {
			if (isChunkedTransfer && !properLastChunkReceived) {
				const error = new Error('Premature close');
				error.code = 'ERR_STREAM_PREMATURE_CLOSE';
				errorCallback(error);
			}
		};

		const onData = buf => {
			properLastChunkReceived = node_buffer.Buffer.compare(buf.slice(-5), LAST_CHUNK) === 0;

			// Sometimes final 0-length chunk and end of message code are in separate packets
			if (!properLastChunkReceived && previousChunk) {
				properLastChunkReceived = (
					node_buffer.Buffer.compare(previousChunk.slice(-3), LAST_CHUNK.slice(0, 3)) === 0 &&
					node_buffer.Buffer.compare(buf.slice(-2), LAST_CHUNK.slice(3)) === 0
				);
			}

			previousChunk = buf;
		};

		socket.prependListener('close', onSocketClose);
		socket.on('data', onData);

		request.on('close', () => {
			socket.removeListener('close', onSocketClose);
			socket.removeListener('data', onData);
		});
	});
}

var index = /*#__PURE__*/Object.freeze({
	__proto__: null,
	AbortError: AbortError,
	Blob: Blob$1,
	FetchError: FetchError,
	File: File$1,
	FormData: FormData$1,
	Headers: Headers$1,
	Request: Request,
	Response: Response,
	default: fetch,
	isRedirect: isRedirect
});

let s = 0;
const S = {
	START_BOUNDARY: s++,
	HEADER_FIELD_START: s++,
	HEADER_FIELD: s++,
	HEADER_VALUE_START: s++,
	HEADER_VALUE: s++,
	HEADER_VALUE_ALMOST_DONE: s++,
	HEADERS_ALMOST_DONE: s++,
	PART_DATA_START: s++,
	PART_DATA: s++,
	END: s++
};

let f = 1;
const F = {
	PART_BOUNDARY: f,
	LAST_BOUNDARY: f *= 2
};

const LF = 10;
const CR = 13;
const SPACE = 32;
const HYPHEN = 45;
const COLON = 58;
const A = 97;
const Z = 122;

const lower = c => c | 0x20;

const noop = () => {};

class MultipartParser {
	/**
	 * @param {string} boundary
	 */
	constructor(boundary) {
		this.index = 0;
		this.flags = 0;

		this.onHeaderEnd = noop;
		this.onHeaderField = noop;
		this.onHeadersEnd = noop;
		this.onHeaderValue = noop;
		this.onPartBegin = noop;
		this.onPartData = noop;
		this.onPartEnd = noop;

		this.boundaryChars = {};

		boundary = '\r\n--' + boundary;
		const ui8a = new Uint8Array(boundary.length);
		for (let i = 0; i < boundary.length; i++) {
			ui8a[i] = boundary.charCodeAt(i);
			this.boundaryChars[ui8a[i]] = true;
		}

		this.boundary = ui8a;
		this.lookbehind = new Uint8Array(this.boundary.length + 8);
		this.state = S.START_BOUNDARY;
	}

	/**
	 * @param {Uint8Array} data
	 */
	write(data) {
		let i = 0;
		const length_ = data.length;
		let previousIndex = this.index;
		let {lookbehind, boundary, boundaryChars, index, state, flags} = this;
		const boundaryLength = this.boundary.length;
		const boundaryEnd = boundaryLength - 1;
		const bufferLength = data.length;
		let c;
		let cl;

		const mark = name => {
			this[name + 'Mark'] = i;
		};

		const clear = name => {
			delete this[name + 'Mark'];
		};

		const callback = (callbackSymbol, start, end, ui8a) => {
			if (start === undefined || start !== end) {
				this[callbackSymbol](ui8a && ui8a.subarray(start, end));
			}
		};

		const dataCallback = (name, clear) => {
			const markSymbol = name + 'Mark';
			if (!(markSymbol in this)) {
				return;
			}

			if (clear) {
				callback(name, this[markSymbol], i, data);
				delete this[markSymbol];
			} else {
				callback(name, this[markSymbol], data.length, data);
				this[markSymbol] = 0;
			}
		};

		for (i = 0; i < length_; i++) {
			c = data[i];

			switch (state) {
				case S.START_BOUNDARY:
					if (index === boundary.length - 2) {
						if (c === HYPHEN) {
							flags |= F.LAST_BOUNDARY;
						} else if (c !== CR) {
							return;
						}

						index++;
						break;
					} else if (index - 1 === boundary.length - 2) {
						if (flags & F.LAST_BOUNDARY && c === HYPHEN) {
							state = S.END;
							flags = 0;
						} else if (!(flags & F.LAST_BOUNDARY) && c === LF) {
							index = 0;
							callback('onPartBegin');
							state = S.HEADER_FIELD_START;
						} else {
							return;
						}

						break;
					}

					if (c !== boundary[index + 2]) {
						index = -2;
					}

					if (c === boundary[index + 2]) {
						index++;
					}

					break;
				case S.HEADER_FIELD_START:
					state = S.HEADER_FIELD;
					mark('onHeaderField');
					index = 0;
					// falls through
				case S.HEADER_FIELD:
					if (c === CR) {
						clear('onHeaderField');
						state = S.HEADERS_ALMOST_DONE;
						break;
					}

					index++;
					if (c === HYPHEN) {
						break;
					}

					if (c === COLON) {
						if (index === 1) {
							// empty header field
							return;
						}

						dataCallback('onHeaderField', true);
						state = S.HEADER_VALUE_START;
						break;
					}

					cl = lower(c);
					if (cl < A || cl > Z) {
						return;
					}

					break;
				case S.HEADER_VALUE_START:
					if (c === SPACE) {
						break;
					}

					mark('onHeaderValue');
					state = S.HEADER_VALUE;
					// falls through
				case S.HEADER_VALUE:
					if (c === CR) {
						dataCallback('onHeaderValue', true);
						callback('onHeaderEnd');
						state = S.HEADER_VALUE_ALMOST_DONE;
					}

					break;
				case S.HEADER_VALUE_ALMOST_DONE:
					if (c !== LF) {
						return;
					}

					state = S.HEADER_FIELD_START;
					break;
				case S.HEADERS_ALMOST_DONE:
					if (c !== LF) {
						return;
					}

					callback('onHeadersEnd');
					state = S.PART_DATA_START;
					break;
				case S.PART_DATA_START:
					state = S.PART_DATA;
					mark('onPartData');
					// falls through
				case S.PART_DATA:
					previousIndex = index;

					if (index === 0) {
						// boyer-moore derrived algorithm to safely skip non-boundary data
						i += boundaryEnd;
						while (i < bufferLength && !(data[i] in boundaryChars)) {
							i += boundaryLength;
						}

						i -= boundaryEnd;
						c = data[i];
					}

					if (index < boundary.length) {
						if (boundary[index] === c) {
							if (index === 0) {
								dataCallback('onPartData', true);
							}

							index++;
						} else {
							index = 0;
						}
					} else if (index === boundary.length) {
						index++;
						if (c === CR) {
							// CR = part boundary
							flags |= F.PART_BOUNDARY;
						} else if (c === HYPHEN) {
							// HYPHEN = end boundary
							flags |= F.LAST_BOUNDARY;
						} else {
							index = 0;
						}
					} else if (index - 1 === boundary.length) {
						if (flags & F.PART_BOUNDARY) {
							index = 0;
							if (c === LF) {
								// unset the PART_BOUNDARY flag
								flags &= ~F.PART_BOUNDARY;
								callback('onPartEnd');
								callback('onPartBegin');
								state = S.HEADER_FIELD_START;
								break;
							}
						} else if (flags & F.LAST_BOUNDARY) {
							if (c === HYPHEN) {
								callback('onPartEnd');
								state = S.END;
								flags = 0;
							} else {
								index = 0;
							}
						} else {
							index = 0;
						}
					}

					if (index > 0) {
						// when matching a possible boundary, keep a lookbehind reference
						// in case it turns out to be a false lead
						lookbehind[index - 1] = c;
					} else if (previousIndex > 0) {
						// if our boundary turned out to be rubbish, the captured lookbehind
						// belongs to partData
						const _lookbehind = new Uint8Array(lookbehind.buffer, lookbehind.byteOffset, lookbehind.byteLength);
						callback('onPartData', 0, previousIndex, _lookbehind);
						previousIndex = 0;
						mark('onPartData');

						// reconsider the current character even so it interrupted the sequence
						// it could be the beginning of a new sequence
						i--;
					}

					break;
				case S.END:
					break;
				default:
					throw new Error(`Unexpected state entered: ${state}`);
			}
		}

		dataCallback('onHeaderField');
		dataCallback('onHeaderValue');
		dataCallback('onPartData');

		// Update properties for the next call
		this.index = index;
		this.state = state;
		this.flags = flags;
	}

	end() {
		if ((this.state === S.HEADER_FIELD_START && this.index === 0) ||
			(this.state === S.PART_DATA && this.index === this.boundary.length)) {
			this.onPartEnd();
		} else if (this.state !== S.END) {
			throw new Error('MultipartParser.end(): stream ended unexpectedly');
		}
	}
}

function _fileName(headerValue) {
	// matches either a quoted-string or a token (RFC 2616 section 19.5.1)
	const m = headerValue.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
	if (!m) {
		return;
	}

	const match = m[2] || m[3] || '';
	let filename = match.slice(match.lastIndexOf('\\') + 1);
	filename = filename.replace(/%22/g, '"');
	filename = filename.replace(/&#(\d{4});/g, (m, code) => {
		return String.fromCharCode(code);
	});
	return filename;
}

async function toFormData(Body, ct) {
	if (!/multipart/i.test(ct)) {
		throw new TypeError('Failed to fetch');
	}

	const m = ct.match(/boundary=(?:"([^"]+)"|([^;]+))/i);

	if (!m) {
		throw new TypeError('no or bad content-type header, no multipart boundary');
	}

	const parser = new MultipartParser(m[1] || m[2]);

	let headerField;
	let headerValue;
	let entryValue;
	let entryName;
	let contentType;
	let filename;
	const entryChunks = [];
	const formData = new FormData$1();

	const onPartData = ui8a => {
		entryValue += decoder.decode(ui8a, {stream: true});
	};

	const appendToFile = ui8a => {
		entryChunks.push(ui8a);
	};

	const appendFileToFormData = () => {
		const file = new File$1(entryChunks, filename, {type: contentType});
		formData.append(entryName, file);
	};

	const appendEntryToFormData = () => {
		formData.append(entryName, entryValue);
	};

	const decoder = new TextDecoder('utf-8');
	decoder.decode();

	parser.onPartBegin = function () {
		parser.onPartData = onPartData;
		parser.onPartEnd = appendEntryToFormData;

		headerField = '';
		headerValue = '';
		entryValue = '';
		entryName = '';
		contentType = '';
		filename = null;
		entryChunks.length = 0;
	};

	parser.onHeaderField = function (ui8a) {
		headerField += decoder.decode(ui8a, {stream: true});
	};

	parser.onHeaderValue = function (ui8a) {
		headerValue += decoder.decode(ui8a, {stream: true});
	};

	parser.onHeaderEnd = function () {
		headerValue += decoder.decode();
		headerField = headerField.toLowerCase();

		if (headerField === 'content-disposition') {
			// matches either a quoted-string or a token (RFC 2616 section 19.5.1)
			const m = headerValue.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);

			if (m) {
				entryName = m[2] || m[3] || '';
			}

			filename = _fileName(headerValue);

			if (filename) {
				parser.onPartData = appendToFile;
				parser.onPartEnd = appendFileToFormData;
			}
		} else if (headerField === 'content-type') {
			contentType = headerValue;
		}

		headerValue = '';
		headerField = '';
	};

	for await (const chunk of Body) {
		parser.write(chunk);
	}

	parser.end();

	return formData;
}

var multipartParser = /*#__PURE__*/Object.freeze({
	__proto__: null,
	toFormData: toFormData
});

module.exports = script;
