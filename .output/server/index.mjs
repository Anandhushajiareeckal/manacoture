globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/ProductCard-1yczQeYr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ef2-HmV40AvQyVhdRfCEJnTJe9O30GI\"",
		"mtime": "2026-07-14T19:16:06.789Z",
		"size": 3826,
		"path": "../public/assets/ProductCard-1yczQeYr.js"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-14T19:16:06.977Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/about-D9M_tMX2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7db-Bi09IIRVxUzJausVEQPhZNLpPeA\"",
		"mtime": "2026-07-14T19:16:06.789Z",
		"size": 2011,
		"path": "../public/assets/about-D9M_tMX2.js"
	},
	"/assets/account-rxq3KoBd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1528-rqrSGqygUm8eCEHla4J5kr6+sck\"",
		"mtime": "2026-07-14T19:16:06.789Z",
		"size": 5416,
		"path": "../public/assets/account-rxq3KoBd.js"
	},
	"/assets/auth-DrMXdpZR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cba-hvDu+EXTVeY0wZQbah+8NDwFXqE\"",
		"mtime": "2026-07-14T19:16:06.789Z",
		"size": 3258,
		"path": "../public/assets/auth-DrMXdpZR.js"
	},
	"/assets/accessories-D1HBGbLS.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b2c7-wjoxTMd2urzo6CTjfKBx0OhQBhI\"",
		"mtime": "2026-07-14T19:16:06.793Z",
		"size": 111303,
		"path": "../public/assets/accessories-D1HBGbLS.jpg"
	},
	"/assets/cart-ByX7EJrx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15b0-kHB8zpFDzCu0Uiq/wp5R+IZGqZI\"",
		"mtime": "2026-07-14T19:16:06.791Z",
		"size": 5552,
		"path": "../public/assets/cart-ByX7EJrx.js"
	},
	"/assets/chevron-down-CmkcfHOx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"80-xpozqrZCrJM7HwtVy1u7qkMj+JQ\"",
		"mtime": "2026-07-14T19:16:06.792Z",
		"size": 128,
		"path": "../public/assets/chevron-down-CmkcfHOx.js"
	},
	"/assets/bridal-BnFgU46i.jpg": {
		"type": "image/jpeg",
		"etag": "\"1bb4b-dL7Blw47sz8q/stHSh21sLCniTw\"",
		"mtime": "2026-07-14T19:16:06.793Z",
		"size": 113483,
		"path": "../public/assets/bridal-BnFgU46i.jpg"
	},
	"/assets/createLucideIcon-u4Sygyfo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c8-ay+CUqr8Qc9rzApWNssQJuf42Nk\"",
		"mtime": "2026-07-14T19:16:06.792Z",
		"size": 1224,
		"path": "../public/assets/createLucideIcon-u4Sygyfo.js"
	},
	"/assets/checkout-DX8I79DN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1847-8NaWBv3Jk3RVlt9qdeXs01TLNwY\"",
		"mtime": "2026-07-14T19:16:06.792Z",
		"size": 6215,
		"path": "../public/assets/checkout-DX8I79DN.js"
	},
	"/assets/dupatta-BzIww8S3.jpg": {
		"type": "image/jpeg",
		"etag": "\"197a5-jkmmhVV5huu9EVUsC8axOe+SzY0\"",
		"mtime": "2026-07-14T19:16:06.794Z",
		"size": 104357,
		"path": "../public/assets/dupatta-BzIww8S3.jpg"
	},
	"/assets/heart-e9uV22Ep.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"102-MsuJb5L1nHG2qQKyZbDxts0klg0\"",
		"mtime": "2026-07-14T19:16:06.792Z",
		"size": 258,
		"path": "../public/assets/heart-e9uV22Ep.js"
	},
	"/assets/festival-CbCyuaE0.jpg": {
		"type": "image/jpeg",
		"etag": "\"24399-RUuRJAP7tqFj0el8orJDX/2udz0\"",
		"mtime": "2026-07-14T19:16:06.794Z",
		"size": 148377,
		"path": "../public/assets/festival-CbCyuaE0.jpg"
	},
	"/assets/instagram-DyjESSDP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"128-aMYBZeoQiqTwAxftxBunMmlumPQ\"",
		"mtime": "2026-07-14T19:16:06.792Z",
		"size": 296,
		"path": "../public/assets/instagram-DyjESSDP.js"
	},
	"/assets/award-BswmJ3db.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"112-us9w70HLDFcCmxRq2uJul92twgU\"",
		"mtime": "2026-07-14T19:16:06.789Z",
		"size": 274,
		"path": "../public/assets/award-BswmJ3db.js"
	},
	"/assets/kasavu-TAsCunPx.jpg": {
		"type": "image/jpeg",
		"etag": "\"14e86-bn/DThkRMhVZwSe3XD6lmqxRtwQ\"",
		"mtime": "2026-07-14T19:16:06.794Z",
		"size": 85638,
		"path": "../public/assets/kasavu-TAsCunPx.jpg"
	},
	"/assets/hero-saree-Dm_Y86zH.jpg": {
		"type": "image/jpeg",
		"etag": "\"211fe-LT3apZiOebmzLBqfebnEWqYt7Qg\"",
		"mtime": "2026-07-14T19:16:06.794Z",
		"size": 135678,
		"path": "../public/assets/hero-saree-Dm_Y86zH.jpg"
	},
	"/assets/link-BrxQa0cm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"85e9-a8vGuMtIcwaUMHhZd9vY7xwVbOs\"",
		"mtime": "2026-07-14T19:16:06.792Z",
		"size": 34281,
		"path": "../public/assets/link-BrxQa0cm.js"
	},
	"/assets/plus-CQWs75ra.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d9-7M68hCWzMpRILKadt7AkxcfyfF8\"",
		"mtime": "2026-07-14T19:16:06.792Z",
		"size": 217,
		"path": "../public/assets/plus-CQWs75ra.js"
	},
	"/assets/kurti-Bo8raI1v.jpg": {
		"type": "image/jpeg",
		"etag": "\"1472e-a+Bp1aJ7+hL83LsSdE2ZRvgW6nY\"",
		"mtime": "2026-07-14T19:16:06.794Z",
		"size": 83758,
		"path": "../public/assets/kurti-Bo8raI1v.jpg"
	},
	"/assets/preload-helper-fyxBwyCf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"185b-mXt/+heqf8hqIpMvPQL4zSm+KMA\"",
		"mtime": "2026-07-14T19:16:06.793Z",
		"size": 6235,
		"path": "../public/assets/preload-helper-fyxBwyCf.js"
	},
	"/assets/product._id-CQwQNVfd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e98-ZEPWlw9rs9XxOKy1EtdEWyFuIaM\"",
		"mtime": "2026-07-14T19:16:06.793Z",
		"size": 7832,
		"path": "../public/assets/product._id-CQwQNVfd.js"
	},
	"/assets/product._id-BtWZL4Zj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4f5-M42jbyQeuRCkdUWwXY5EFASg9RI\"",
		"mtime": "2026-07-14T19:16:06.793Z",
		"size": 1269,
		"path": "../public/assets/product._id-BtWZL4Zj.js"
	},
	"/assets/index-DsoM4VBz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c7fc-WthlMf9uC7xN2RzONmCeMFX/e+U\"",
		"mtime": "2026-07-14T19:16:06.789Z",
		"size": 313340,
		"path": "../public/assets/index-DsoM4VBz.js"
	},
	"/assets/products-BE3YKEaa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df8-dAa42UD2gsE+bMDK9WzMmayiCWY\"",
		"mtime": "2026-07-14T19:16:06.793Z",
		"size": 3576,
		"path": "../public/assets/products-BE3YKEaa.js"
	},
	"/assets/routes-DzN7ntkd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34b7-oPV2E/Zkh/Ede6jNbkn2ywKWojg\"",
		"mtime": "2026-07-14T19:16:06.793Z",
		"size": 13495,
		"path": "../public/assets/routes-DzN7ntkd.js"
	},
	"/assets/shield-CLj4not-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21c-l/DOgd6+LswF0kjShfrAtyREz3o\"",
		"mtime": "2026-07-14T19:16:06.793Z",
		"size": 540,
		"path": "../public/assets/shield-CLj4not-.js"
	},
	"/assets/shop-BWKSR8Be.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"319-Yzg2kfoTmeoGBn0w75aDCgMVFPg\"",
		"mtime": "2026-07-14T19:16:06.793Z",
		"size": 793,
		"path": "../public/assets/shop-BWKSR8Be.js"
	},
	"/assets/shop-apoj590I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1128-dSpBhHw5QEt9BpJMpRmx528fvCI\"",
		"mtime": "2026-07-14T19:16:06.793Z",
		"size": 4392,
		"path": "../public/assets/shop-apoj590I.js"
	},
	"/assets/star-BdEQ2HEF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d8-FkUrBEwejckgKl7Rez/AFFxIfSA\"",
		"mtime": "2026-07-14T19:16:06.793Z",
		"size": 472,
		"path": "../public/assets/star-BdEQ2HEF.js"
	},
	"/assets/salwar-CLCxfiI2.jpg": {
		"type": "image/jpeg",
		"etag": "\"188b2-IpmiaBgIoWqh8ncppOvmVw7zzpc\"",
		"mtime": "2026-07-14T19:16:06.794Z",
		"size": 100530,
		"path": "../public/assets/salwar-CLCxfiI2.jpg"
	},
	"/assets/truck-DBI_RRcH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"196-FI89F3YQOjrXZEO6Y09vfB7ZVNY\"",
		"mtime": "2026-07-14T19:16:06.793Z",
		"size": 406,
		"path": "../public/assets/truck-DBI_RRcH.js"
	},
	"/assets/user-Cj2Y_pP9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c4-PNrn+KJ+XjfLmwYCSpOYSKKsJ9Q\"",
		"mtime": "2026-07-14T19:16:06.793Z",
		"size": 196,
		"path": "../public/assets/user-Cj2Y_pP9.js"
	},
	"/assets/setmundu-J0Oqy6Ya.jpg": {
		"type": "image/jpeg",
		"etag": "\"160d4-31alFjVvPEMOQVsh+1KgqcT7i44\"",
		"mtime": "2026-07-14T19:16:06.794Z",
		"size": 90324,
		"path": "../public/assets/setmundu-J0Oqy6Ya.jpg"
	},
	"/assets/x-BGDeJza9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-MzHa/UUaCNR27odm4PE5UhWKHxI\"",
		"mtime": "2026-07-14T19:16:06.793Z",
		"size": 154,
		"path": "../public/assets/x-BGDeJza9.js"
	},
	"/assets/wishlist-DSef4GSh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"274-IUdUmeBA04Va7WCDKIgS2Su/jU0\"",
		"mtime": "2026-07-14T19:16:06.793Z",
		"size": 628,
		"path": "../public/assets/wishlist-DSef4GSh.js"
	},
	"/assets/styles-Bx_7jJd4.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1599a-gYmrrURGEI1fNcjv3Ew06he5ol0\"",
		"mtime": "2026-07-14T19:16:06.794Z",
		"size": 88474,
		"path": "../public/assets/styles-Bx_7jJd4.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_qoOgd6 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_qoOgd6
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
