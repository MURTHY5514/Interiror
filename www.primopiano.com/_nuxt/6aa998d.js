(window.webpackJsonp = window.webpackJsonp || []).push([
    [9],
    [, , function(t, e, n) {
        "use strict";
        n.d(e, "i", (function() {
            return r
        })), n.d(e, "m", (function() {
            return c
        })), n.d(e, "b", (function() {
            return l
        })), n.d(e, "d", (function() {
            return u
        })), n.d(e, "e", (function() {
            return h
        })), n.d(e, "n", (function() {
            return d
        })), n.d(e, "r", (function() {
            return p
        })), n.d(e, "k", (function() {
            return m
        })), n.d(e, "q", (function() {
            return g
        })), n.d(e, "a", (function() {
            return f
        })), n.d(e, "j", (function() {
            return v
        })), n.d(e, "l", (function() {
            return b
        })), n.d(e, "h", (function() {
            return w
        })), n.d(e, "g", (function() {
            return _
        })), n.d(e, "f", (function() {
            return x
        })), n.d(e, "o", (function() {
            return $
        })), n.d(e, "p", (function() {
            return k
        })), n.d(e, "c", (function() {
            return O
        }));
        var i = n(13),
            s = n(34),
            o = n(6);
        const a = (t, e) => t ? `(${e})` : "",
            r = "\n  localized {\n    site: language\n    title\n    slug\n    siteId\n  }\n",
            c = "\n  section: sectionHandle\n  slug\n",
            l = "\n  ... on downloads_Asset {\n    title\n    id\n    mime: mimeType\n    url\n    size\n    downloadsCategories {\n      ... on downloadsCategories_Category {\n        id\n        title\n        slug\n      }\n    }\n  }\n",
            u = `\n  id\n  mimeType\n  src: url\n  webp: url(format: "webp")\n  alt: string\n  width\n  height\n  hasFocus: hasFocalPoint\n  focus: focalPoint\n  ${o.q}\n`,
            h = t => {
                let {
                    width: e,
                    height: n
                } = t;
                const i = `${e?`width: ${e}`:""}${n?`, height: ${n}`:""}`;
                return `\n    id\n    mimeType\n    src: url${a(e||n,i)}\n    webp: url(format: "webp", ${i})\n    alt: string\n    width${a(e||n,i)}\n    height${a(e||n,i)}\n    hasFocus: hasFocalPoint\n    focus: focalPoint\n    ${o.q}\n  `
            },
            d = `\n  metaTitle\n  metaDescription\n  metaSuffix\n  metaOgImage {\n    ${u}\n  }\n`,
            p = "\n  id\n  mime: mimeType\n  url\n",
            m = `\n  ... on people_person_Entry {\n    name: firstname\n    lastname\n    job: jobTitle\n    thumbnail {\n      ${u}\n    }\n    video {\n      ${p}\n    }\n  }\n`,
            g = `\n  ... on values_valuesItem_Entry {\n    title\n    sublead\n    abstract\n    description\n    thumbnail {\n      ${u}\n    }\n  }\n`,
            f = "\n  id\n  title\n  slug\n",
            v = (i.a `
  query ASSET_WITH_ID {
    asset(id: 176) {
      filename
      ... on images_Asset {
        ${u}
      }
    }
  }
`, `\n  ... on news_newsItem_Entry {\n    ${d}\n    ${r}\n    dateCreated\n    dateUpdated\n    id\n    slug\n    title: baseTitle\n    short: column1Title\n    date\n    category: newsCategories {\n      ${f}\n    }\n    thumbnail: image {\n      ${h({width:1280})}\n    }\n    cover: image {\n      ${h({width:2560})}\n    }\n    blocks: projectBlocks {\n      ${Object(s.b)()}\n    }\n    next {\n      ... on news_newsItem_Entry {\n        id\n        title\n        slug\n        thumbnail: image {\n          ${h({width:1280})}\n        }\n      }\n    }\n  }\n`),
            b = `\n  ... on projects_project_Entry {\n    ${d}\n    ${r}\n    dateCreated\n    dateUpdated\n    id\n    slug\n    title: baseTitle\n    short: column1Title\n    location: string\n    city\n    date\n    category: projectCategories {\n      ${f}\n    }\n    thumbnail: image {\n      ${h({width:1280})}\n    }\n    cover: image {\n      ${h({width:2560})}\n    }\n    blocks: projectBlocks {\n      ${Object(s.b)()}\n    }\n    next {\n      id\n      title\n      slug\n    }\n  }\n`,
            y = `\n... on finishes_finish_Entry {\n    id\n    title: baseTitle\n    slug\n    thumbnail {\n      ${h({width:500})}\n    }\n  }\n`,
            w = `\n  id\n  title\n  description: lead\n  slug\n  siteId\n  ${r}\n`,
            _ = `\n  style: kitchensStyle {\n    ... on productsStyle_Category {\n      ${w}\n    }\n  }\n  typologies: kitchensTypologies {\n    ... on productsTypology_Category {\n      ${w}\n      metaTitle\n      metaDescription\n      metaSuffix\n      metaOgImage {\n        ${u}\n      }\n    }\n  }\n  supportsFinishes {\n    ${y}\n  }\n  topFinishes {\n    ${y}\n  }\n  columnsFinishes {\n    ${y}\n  }\n  detailsFinishes {\n    ${y}\n  }\n  wallUnitsFinishes {\n    ${y}\n  }\n`,
            x = `\n... on kitchens_kitchen_Entry {\n  ${d}\n  ${r}\n  id\n  title: baseTitle\n  slug\n  description\n  thumbnail {\n    ${h({width:1024})}\n  }\n  cover: column1Image {\n    ${h({width:2560})}\n  }\n  image {\n    ${h({width:2560})}\n  }\n  images {\n    ... on images_Asset {\n      ${h({width:1024})}\n    }\n  }\n  video {\n    ${p}\n  }\n  videoPoster: column2Image {\n    ${h({width:1920})}\n  }\n  techDraw: desktopImage {\n    ${h({width:2560})}\n  }\n  ${_}\n  children {\n    ... on kitchens_variant_Entry {\n      ${_}\n      id\n      title: baseTitle\n      image {\n        ${h({width:2560})}\n      }\n      moodboard: desktopImage {\n        ${h({height:1900})}\n      }\n    }\n  }\n}\n`,
            $ = `\n... on showrooms_showroomsItem_Entry {\n  ${d}\n  ${r}\n  title: baseTitle\n  subtitle: subtitle\n  section: sectionHandle\n  slug\n  street\n  postalCode\n  city\n  district(label: false)\n  region\n  coordinates\n  phone\n  openingHours {\n    ... on openingHours_openingHours_BlockType {\n      id\n      day\n      note\n      time {\n        closing\n        opening\n      }\n    }\n  }\n  lead\n  sublead\n  desktopImage {\n    ${h({width:2560})}\n  }\n  mobileImage {\n    ${h({width:1024})}\n  }\n  intro: string\n  firstCopy: column1Copy\n  firstPrimaryImage: column1Image {\n    ${h({width:1280})}\n  }\n  firstSecondaryImage: column2Image {\n    ${h({width:1280})}\n  }\n  secondCopy: column2Copy\n  secondPrimaryImage: column3Image {\n    ${h({width:1280})}\n  }\n  secondSecondaryImage: column4Image {\n    ${h({width:1280})}\n  }\n  paragraph: abstract\n  carousel: images {\n    ${h({width:800})}\n  }\n}\n`,
            k = `\n  ... on stories_story_Entry {\n    ${c}\n    title: baseTitle\n    lead\n    description\n    thumbnail {\n      ${h({width:2560})}\n    }\n    person {\n      ${m}\n    }\n    ${_}\n    city\n    country: string\n  }\n`,
            O = `\n  ... on stories_story_Entry {\n    ${c}\n    ${d}\n    ${r}\n    title: baseTitle\n    lead\n    description\n    thumbnail {\n      ${h({width:2560})}\n    }\n    person {\n      ${m}\n    }\n    ${_}\n    city\n    country: string\n    blocks {\n      ${Object(s.a)()}\n    }\n  }\n`
    }, , , , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return i
        })), n.d(e, "i", (function() {
            return s.a
        })), n.d(e, "e", (function() {
            return a
        })), n.d(e, "f", (function() {
            return r
        })), n.d(e, "o", (function() {
            return c
        })), n.d(e, "p", (function() {
            return l
        })), n.d(e, "n", (function() {
            return u
        })), n.d(e, "k", (function() {
            return h
        })), n.d(e, "g", (function() {
            return d
        })), n.d(e, "b", (function() {
            return p
        })), n.d(e, "j", (function() {
            return m
        })), n.d(e, "d", (function() {
            return g
        })), n.d(e, "q", (function() {
            return f
        })), n.d(e, "m", (function() {
            return v
        })), n.d(e, "l", (function() {
            return b
        })), n.d(e, "h", (function() {
            return y.a
        })), n.d(e, "c", (function() {
            return w.a
        })), n.d(e, "r", (function() {
            return w.b
        }));
        class i extends Error {
            constructor(t, e, n) {
                super(e), this.statusCode = t, this.errors = null != n ? n : []
            }
        }
        var s = n(131),
            o = (n(73), n(4));
        const a = () => new Promise((t => requestAnimationFrame(t))),
            r = () => new Promise((t => setTimeout(t, 1))),
            c = function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
                return null == e ? void 0 : e.querySelector(t)
            },
            l = function(t) {
                var e;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
                return Array.isArray(n) ? n.reduce(((e, n) => e.concat(Array.from(n.querySelectorAll(t)))), []) : Array.from(null !== (e = null == n ? void 0 : n.querySelectorAll(t)) && void 0 !== e ? e : [])
            },
            u = t => {
                let e = t;
                "string" == typeof t && (e = c(t));
                return l("img", e).filter((t => "lazy" !== t.loading)).map((t => new Promise((e => {
                    t.complete ? setTimeout(e, 0) : t.addEventListener("load", (() => {
                        setTimeout(e, 0)
                    }), {
                        once: !0
                    })
                }))))
            },
            h = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
            d = () => {
                const t = document.createElement("div");
                t.style.visibility = "hidden", t.style.width = "100px", document.body.appendChild(t);
                const e = t.offsetWidth;
                t.style.overflow = "scroll";
                const n = document.createElement("div");
                n.style.width = "100%", t.appendChild(n);
                const i = n.offsetWidth;
                t.parentNode.removeChild(t);
                const s = h();
                return o.b.set(document.documentElement, {
                    "--scrollbar-width": s ? "0px" : e - i + "px"
                }), e - i
            },
            p = t => t.charAt(0).toUpperCase() + t.slice(1),
            m = t => t % 2 == 0,
            g = t => null == t ? void 0 : t.split("___")[0],
            f = ["webp", "jpeg"].map((t => `srcset_${t}: url @imagerSrcset (handle:"${t}")`)),
            v = t => {
                const e = {};
                for (const [n, i] of Object.entries(t))
                    if (i && n.startsWith("srcset_")) {
                        const t = n.split("_", 2).pop();
                        e[t] = {
                            srcset: i,
                            type: `image/${t}`
                        }
                    }
                return e
            };
        const b = (t, e, n) => t * (1 - n) + e * n;
        var y = n(77),
            w = n(65)
    }, function(t, e, n) {
        "use strict";
        n.d(e, "k", (function() {
            return a
        })), n.d(e, "m", (function() {
            return r
        })), n.d(e, "l", (function() {
            return c
        })), n.d(e, "e", (function() {
            return l
        })), n.d(e, "b", (function() {
            return u
        })), n.d(e, "s", (function() {
            return h
        })), n.d(e, "g", (function() {
            return d
        })), n.d(e, "h", (function() {
            return p
        })), n.d(e, "d", (function() {
            return m
        })), n.d(e, "r", (function() {
            return g
        })), n.d(e, "j", (function() {
            return f
        })), n.d(e, "t", (function() {
            return v
        })), n.d(e, "o", (function() {
            return b
        })), n.d(e, "q", (function() {
            return y
        })), n.d(e, "f", (function() {
            return w
        })), n.d(e, "c", (function() {
            return _
        })), n.d(e, "i", (function() {
            return x
        })), n.d(e, "p", (function() {
            return $
        })), n.d(e, "a", (function() {
            return M
        })), n.d(e, "v", (function() {
            return P
        })), n.d(e, "n", (function() {
            return L
        })), n.d(e, "u", (function() {
            return z
        }));
        var i = n(8),
            s = n.n(i),
            o = n(39);

        function a(t) {
            s.a.config.errorHandler && s.a.config.errorHandler(t)
        }

        function r(t) {
            return t.then((t => t.default || t))
        }

        function c(t) {
            return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length
        }

        function l(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            const n = t.$children || [];
            for (const t of n) t.$fetch && e.push(t), t.$children && l(t, e);
            return e
        }

        function u(t, e) {
            if (!e && t.options.__hasNuxtData) return;
            const n = t.options._originDataFn || t.options.data || function() {
                return {}
            };
            t.options._originDataFn = n, t.options.data = function() {
                const i = n.call(this, this);
                return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), { ...i,
                    ...e
                }
            }, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
        }

        function h(t) {
            return t.options && t._Ctor === t || (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = s.a.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file)), t
        }

        function d(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
            return Array.prototype.concat.apply([], t.matched.map(((t, i) => Object.keys(t[n]).map((s => (e && e.push(i), t[n][s]))))))
        }

        function p(t) {
            return d(t, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], "instances")
        }

        function m(t, e) {
            return Array.prototype.concat.apply([], t.matched.map(((t, n) => Object.keys(t.components).reduce(((i, s) => (t.components[s] ? i.push(e(t.components[s], t.instances[s], t, s, n)) : delete t.components[s], i)), []))))
        }

        function g(t, e) {
            return Promise.all(m(t, (async (t, n, i, s) => {
                if ("function" == typeof t && !t.options) try {
                    t = await t()
                } catch (t) {
                    if (t && "ChunkLoadError" === t.name && "undefined" != typeof window && window.sessionStorage) {
                        const t = Date.now(),
                            e = parseInt(window.sessionStorage.getItem("nuxt-reload"));
                        (!e || e + 6e4 < t) && (window.sessionStorage.setItem("nuxt-reload", t), window.location.reload(!0))
                    }
                    throw t
                }
                return i.components[s] = t = h(t), "function" == typeof e ? e(t, n, i, s) : t
            })))
        }
        async function f(t) {
            if (t) return await g(t), { ...t,
                meta: d(t).map(((e, n) => ({ ...e.options.meta,
                    ...(t.matched[n] || {}).meta
                })))
            }
        }
        async function v(t, e) {
            t.context || (t.context = {
                isStatic: !1,
                isDev: !1,
                isHMR: !1,
                app: t,
                store: t.store,
                payload: e.payload,
                error: e.error,
                base: t.router.options.base,
                env: {}
            }, e.req && (t.context.req = e.req), e.res && (t.context.res = e.res), e.ssrContext && (t.context.ssrContext = e.ssrContext), t.context.redirect = (e, n, i) => {
                if (!e) return;
                t.context._redirected = !0;
                let s = typeof n;
                if ("number" == typeof e || "undefined" !== s && "object" !== s || (i = n || {}, s = typeof(n = e), e = 302), "object" === s && (n = t.router.resolve(n).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n)) throw n = Object(o.d)(n, i), window.location.assign(n), new Error("ERR_REDIRECT");
                t.context.next({
                    path: n,
                    query: i,
                    status: e
                })
            }, t.context.nuxtState = window.__NUXT__);
            const [n, i] = await Promise.all([f(e.route), f(e.from)]);
            e.route && (t.context.route = n), e.from && (t.context.from = i), e.error && (t.context.error = e.error), t.context.next = e.next, t.context._redirected = !1, t.context._errored = !1, t.context.isHMR = !1, t.context.params = t.context.route.params || {}, t.context.query = t.context.route.query || {}
        }

        function b(t, e, n) {
            return !t.length || e._redirected || e._errored || n && n.aborted ? Promise.resolve() : y(t[0], e).then((() => b(t.slice(1), e, n)))
        }

        function y(t, e) {
            let n;
            return n = 2 === t.length ? new Promise((n => {
                t(e, (function(t, i) {
                    t && e.error(t), n(i = i || {})
                }))
            })) : t(e), n && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
        }

        function w(t, e) {
            if ("hash" === e) return window.location.hash.replace(/^#\//, "");
            t = decodeURI(t).slice(0, -1);
            let n = decodeURI(window.location.pathname);
            t && n.startsWith(t) && (n = n.slice(t.length));
            const i = (n || "/") + window.location.search + window.location.hash;
            return Object(o.c)(i)
        }

        function _(t, e) {
            return function(t, e) {
                const n = new Array(t.length);
                for (let i = 0; i < t.length; i++) "object" == typeof t[i] && (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", S(e)));
                return function(e, i) {
                    let s = "";
                    const o = e || {},
                        a = (i || {}).pretty ? O : encodeURIComponent;
                    for (let e = 0; e < t.length; e++) {
                        const i = t[e];
                        if ("string" == typeof i) {
                            s += i;
                            continue
                        }
                        const r = o[i.name || "pathMatch"];
                        let c;
                        if (null == r) {
                            if (i.optional) {
                                i.partial && (s += i.prefix);
                                continue
                            }
                            throw new TypeError('Expected "' + i.name + '" to be defined')
                        }
                        if (Array.isArray(r)) {
                            if (!i.repeat) throw new TypeError('Expected "' + i.name + '" to not repeat, but received `' + JSON.stringify(r) + "`");
                            if (0 === r.length) {
                                if (i.optional) continue;
                                throw new TypeError('Expected "' + i.name + '" to not be empty')
                            }
                            for (let t = 0; t < r.length; t++) {
                                if (c = a(r[t]), !n[e].test(c)) throw new TypeError('Expected all "' + i.name + '" to match "' + i.pattern + '", but received `' + JSON.stringify(c) + "`");
                                s += (0 === t ? i.prefix : i.delimiter) + c
                            }
                        } else {
                            if (c = i.asterisk ? C(r) : a(r), !n[e].test(c)) throw new TypeError('Expected "' + i.name + '" to match "' + i.pattern + '", but received "' + c + '"');
                            s += i.prefix + c
                        }
                    }
                    return s
                }
            }(function(t, e) {
                const n = [];
                let i = 0,
                    s = 0,
                    o = "";
                const a = e && e.delimiter || "/";
                let r;
                for (; null != (r = k.exec(t));) {
                    const e = r[0],
                        c = r[1],
                        l = r.index;
                    if (o += t.slice(s, l), s = l + e.length, c) {
                        o += c[1];
                        continue
                    }
                    const u = t[s],
                        h = r[2],
                        d = r[3],
                        p = r[4],
                        m = r[5],
                        g = r[6],
                        f = r[7];
                    o && (n.push(o), o = "");
                    const v = null != h && null != u && u !== h,
                        b = "+" === g || "*" === g,
                        y = "?" === g || "*" === g,
                        w = r[2] || a,
                        _ = p || m;
                    n.push({
                        name: d || i++,
                        prefix: h || "",
                        delimiter: w,
                        optional: y,
                        repeat: b,
                        partial: v,
                        asterisk: Boolean(f),
                        pattern: _ ? T(_) : f ? ".*" : "[^" + j(w) + "]+?"
                    })
                }
                s < t.length && (o += t.substr(s));
                o && n.push(o);
                return n
            }(t, e), e)
        }

        function x(t, e) {
            const n = {},
                i = { ...t,
                    ...e
                };
            for (const s in i) String(t[s]) !== String(e[s]) && (n[s] = !0);
            return n
        }

        function $(t) {
            let e;
            if (t.message || "string" == typeof t) e = t.message || t;
            else try {
                e = JSON.stringify(t, null, 2)
            } catch (n) {
                e = `[${t.constructor.name}]`
            }
            return { ...t,
                message: e,
                statusCode: t.statusCode || t.status || t.response && t.response.status || 500
            }
        }
        window.onNuxtReadyCbs = [], window.onNuxtReady = t => {
            window.onNuxtReadyCbs.push(t)
        };
        const k = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

        function O(t, e) {
            const n = e ? /[?#]/g : /[/?#]/g;
            return encodeURI(t).replace(n, (t => "%" + t.charCodeAt(0).toString(16).toUpperCase()))
        }

        function C(t) {
            return O(t, !0)
        }

        function j(t) {
            return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
        }

        function T(t) {
            return t.replace(/([=!:$/()])/g, "\\$1")
        }

        function S(t) {
            return t && t.sensitive ? "" : "i"
        }

        function M(t, e, n) {
            t.$options[e] || (t.$options[e] = []), t.$options[e].includes(n) || t.$options[e].push(n)
        }
        const P = o.b,
            L = (o.e, o.a);

        function z(t) {
            try {
                window.history.scrollRestoration = t
            } catch (t) {}
        }
    }, , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n.d(e, "k", (function() {
            return a
        })), n.d(e, "j", (function() {
            return r
        })), n.d(e, "p", (function() {
            return c
        })), n.d(e, "o", (function() {
            return l
        })), n.d(e, "m", (function() {
            return v
        })), n.d(e, "q", (function() {
            return b
        })), n.d(e, "n", (function() {
            return y
        })), n.d(e, "l", (function() {
            return w
        })), n.d(e, "a", (function() {
            return x
        })), n.d(e, "i", (function() {
            return $
        })), n.d(e, "e", (function() {
            return k
        })), n.d(e, "d", (function() {
            return O
        })), n.d(e, "g", (function() {
            return C
        })), n.d(e, "b", (function() {
            return j
        })), n.d(e, "c", (function() {
            return T
        })), n.d(e, "h", (function() {
            return S
        })), n.d(e, "f", (function() {
            return M
        }));
        var i = n(13),
            s = n(34),
            o = n(2);
        const a = `\n  ... on homepage_homepage_Entry {\n    ${o.n}\n    ${o.i}\n    description\n    heroLead: lead\n    heroSublead: sublead\n    heroCover: desktopImage {\n      ${Object(o.e)({width:2560})}\n    }\n    heroCoverMobile: mobileImage {\n      ${Object(o.e)({width:1024})}\n    }\n    heroImages: images {\n      ${Object(o.e)({width:768})}\n    }\n    blocks {\n      ${Object(s.a)()}\n    }\n  }\n`,
            r = `\n... on contract_contract_Entry {\n  ${o.n}\n  ${o.i}\n  title: baseTitle\n  desktopImage {\n    ${Object(o.e)({width:2560})}\n  }\n  mobileImage {\n    ${Object(o.e)({width:1024})}\n  }\n  lead\n  sublead\n  abstract\n}\n`,
            c = `\n... on socialCommitment_socialCommitment_Entry {\n  ${o.n}\n  ${o.i}\n  title: baseTitle\n  desktopImage {\n    ${Object(o.e)({width:2560})}\n  }\n  mobileImage {\n    ${Object(o.e)({width:1024})}\n  }\n  lead\n  sublead\n  abstract\n}\n`,
            l = `\n... on showroomsIndex_showroomsIndex_Entry {\n  ${o.n}\n  ${o.i}\n  title: baseTitle\n  section: sectionHandle\n  lead\n  sublead\n  desktopImage {\n    ${Object(o.e)({width:2560})}\n  }\n  mobileImage {\n    ${Object(o.e)({width:1024})}\n  }\n  intro: string\n  firstCopy: column1Copy\n  firstPrimaryImage: column1Image {\n    ${Object(o.e)({width:1280})}\n  }\n  firstSecondaryImage: column2Image {\n    ${Object(o.e)({width:1280})}\n  }\n  secondCopy: column2Copy\n  secondPrimaryImage: column3Image {\n    ${Object(o.e)({width:1280})}\n  }\n  secondSecondaryImage: column4Image {\n    ${Object(o.e)({width:1280})}\n  }\n}\n`,
            u = `\n... on concept_concept_Entry {\n  ${o.n}\n  ${o.i}\n  title: baseTitle\n  heroLead: lead\n  heroSublead: abstract\n  heroImages: images {\n    ... on images_Asset {\n      ${Object(o.e)({width:768})}\n    }\n  }\n  heroMainImage: image {\n    ${Object(o.e)({width:1024})}\n  }\n  abstract\n  thumbnail {\n    ${Object(o.e)({width:2560})}\n  }\n  column1Image {\n    ${Object(o.e)({width:1024})}\n  }\n  column1Title\n  column1Copy\n  column2Image {\n    ${Object(o.e)({width:1024})}\n  }\n  column2Title\n  column2Copy\n\n  column3Image {\n    ${Object(o.e)({width:1024})}\n  }\n  column3Title\n  column3Copy\n\n  column4Image {\n    ${Object(o.e)({width:1024})}\n  }\n  column4Title\n  column4Copy\n\n  column5Image {\n    ${Object(o.e)({width:1024})}\n  }\n  column5Title\n  column5Copy\n\n  blocks {\n    ${Object(s.a)()}\n  }\n}\n`,
            h = `\n... on production_production_Entry {\n  ${o.n}\n  ${o.i}\n  heroLead: lead\n  heroSublead: sublead\n  heroCover: desktopImage {\n    ${Object(o.e)({width:2560})}\n  }\n  heroCoverMobile: mobileImage {\n    ${Object(o.e)({width:1024})}\n  }\n  blocks {\n    ${Object(s.a)()}\n  }\n}\n`,
            d = `\n... on identity_identity_Entry {\n  ${o.n}\n  ${o.i}\n  subtitle\n  heroLead: lead\n  heroSublead: sublead\n  blocks {\n    ${Object(s.a)()}\n  }\n}\n`,
            p = `\n... on workIn_workIn_Entry {\n  ${o.n}\n  ${o.i}\n  heroLead: lead\n  heroSublead: sublead\n  heroImages: images {\n    ${Object(o.e)({width:768})}\n  }\n  lead: string\n  sublead: subtitle\n  blocks {\n    ${Object(s.a)()}\n  }\n}\n`,
            m = `\n... on appointment_appointment_Entry {\n  ${o.n}\n  ${o.i}\n  lead\n  sublead: string\n  description\n  subtitle\n  image {\n    ${Object(o.e)({width:2560})}\n  }\n  column1Copy\n  column2Copy\n  column3Copy\n  column4Copy\n  column5Copy\n}\n`,
            g = `\n... on assistance_assistance_Entry {\n  ${o.n}\n  ${o.i}\n  lead\n  sublead: string\n  description\n  faqsIntro: subtitle\n  formTitle: column1Copy\n  formSubtitle: column2Copy\n  downloadsIntro: column1Title\n  downloads {\n    ${o.b}\n  }\n}\n`,
            f = `\n... on servicesIndex_servicesIndex_Entry {\n  ${o.n}\n  ${o.i}\n  lead\n  sublead: string\n  description\n  image {\n    ${Object(o.e)({width:2560})}\n  }\n}\n`,
            v = `\n... on kitchensIndex_kitchensIndex_Entry {\n  ${o.n}\n  ${o.i}\n  title: baseTitle\n  lead\n  thumbnail {\n    ${Object(o.e)({width:2560})}\n  }\n}\n`,
            b = `\n... on storiesIndex_storiesIndex_Entry {\n  ${o.n}\n  ${o.i}\n  title: baseTitle\n  lead\n  thumbnail {\n    ${Object(o.e)({width:2560})}\n  }\n}\n`,
            y = `\n... on newsIndex_newsIndex_Entry {\n  ${o.n}\n  ${o.i}\n  title: baseTitle\n  description\n  thumbnail {\n    ${Object(o.e)({width:2560})}\n  }\n}\n`,
            w = `\n... on jobsIndex_jobsIndex_Entry {\n  ${o.n}\n  ${o.i}\n  title: baseTitle\n  lead\n  sublead: string\n  description\n  spontaneousAppy: subtitle\n  blocks {\n    ${Object(s.a)()}\n  }\n  column1Image {\n    ${Object(o.e)({width:1280})}\n  }\n  column2Image {\n    ${Object(o.e)({width:1280})}\n  }\n}\n`,
            _ = `\n... on legalPrivacy_legalPrivacy_Entry {\n  ${o.n}\n  ${o.i}\n  title\n  description\n}\n`,
            x = i.a `
  query ALL_PAGES($site: [String]) {
    homepage: entry(section: "homepage", site: $site) {
      ${a}
    }
    contract: entry(section: "contract", site: $site) {
      ${r}
    }
    socialCommitment: entry(section: "socialCommitment", site: $site) {
      ${c}
    }
    showroomsIndex: entry(section: "showroomsIndex", site: $site) {
      ${l}
    }
    concept: entry(section: "concept", site: $site) {
      ${u}
    }
    production: entry(section: "production", site: $site) {
      ${h}
    }
    identity: entry(section: "identity", site: $site) {
      ${d}
    }
    workIn: entry(section: "workIn", site: $site) {
      ${p}
    }
    appointment: entry(section: "appointment", site: $site) {
      ${m}
    }
    assistance: entry(section: "assistance", site: $site) {
      ${g}
    }
    servicesIndex: entry(section: "servicesIndex", site: $site) {
      ${f}
    }
    storiesIndex: entry(section: "storiesIndex", site: $site) {
      ${b}
    },
    newsIndex: entry(section: "newsIndex", site: $site) {
      ${y}
    },
    jobsIndex: entry(section: "jobsIndex", site: $site) {
      ${w}
    },
    privacy: entry(section: "legalPrivacy", site: $site) {
      ${_}
    }
  }
`,
            $ = i.a `
  query WORKIN($site: [String], $handle: [String]) {
    page: entry(section: $handle, site: $site) {
      ${p}
    }

  }
`,
            k = i.a `
  query IDENTITY($site: [String], $handle: [String]) {
    page: entry(section: $handle, site: $site) {
      ${d}
    }
  }
`,
            O = i.a `
  query CONCEPT($site: [String], $handle: [String]) {
    page: entry(section: $handle, site: $site) {
      ${u}
    }
  }
`,
            C = i.a `
  query PRODUCTION($site: [String], $handle: [String]) {
    page: entry(section: $handle, site: $site) {
      ${h}
    }

  }
`,
            j = i.a `
  query APPOINTMENT($site: [String], $handle: [String]) {
    page: entry(section: $handle, site: $site) {
      ${m}
    }
  }
`,
            T = i.a `
  query ASSISTANCE($site: [String], $handle: [String]) {
    page: entry(section: $handle, site: $site) {
      ${g}
    }
  }
`,
            S = i.a `
  query SERVICES_INDEX($site: [String], $handle: [String]) {
    page: entry(section: $handle, site: $site) {
      ${f}
    }
  }
`,
            M = i.a `
  query PRIVACY($site: [String], $handle: [String]) {
    page: entry(section: $handle, site: $site) {
      ${_}
    }
  }
`
    }, , , , , , , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return s
        })), n.d(e, "b", (function() {
            return o
        }));
        var i = n(2);
        const s = function() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "blocks";
                return `\n  ...on NeoBlockInterface {\n    id\n    sortOrder\n    typeHandle\n\n    ... on ${t}_mosaic_BlockType {\n      id\n      lead\n      sublead\n      mainImg: desktopImage {\n        ${Object(i.e)({width:1024})}\n      }\n      images {\n        ... on images_Asset {\n          ${Object(i.e)({width:1024})}\n        }\n      }\n      link: pageRelation {\n        ${i.m}\n      }\n      linkLabel: baseTitle\n      dark\n    }\n\n    ... on ${t}_kitchensLaunch_BlockType {\n      lead\n      images {\n        ... on images_Asset {\n          ${Object(i.e)({width:2560})}\n        }\n      }\n    }\n\n    ... on ${t}_revealText_BlockType {\n      lead\n      link: pageRelation {\n        ${i.m}\n      }\n      linkLabel: baseTitle\n    }\n\n    ... on ${t}_pagesLaunch_BlockType {\n      pages: pagesRelation {\n        ... on news_newsItem_Entry {\n          title: baseTitle\n          ${i.m}\n          thumbnail: image {\n            ${Object(i.e)({width:2560})}\n          }\n        }\n        ${i.p}\n        ... on kitchens_kitchen_Entry {\n          title: baseTitle\n          ${i.m}\n          ${i.g}\n          thumbnail {\n            ${Object(i.e)({width:2560})}\n          }\n        }\n      }\n    }\n\n    ... on ${t}_squareCards_BlockType {\n      dark\n      switch1: switch\n      title1: lead\n      description1: description\n      switch2: colored\n      title2: baseTitle\n      description2: abstract\n      switch3: revert\n      title3: metaTitle\n      description3: sublead\n\n      firstImage: desktopImage {\n        ${Object(i.e)({width:1200,height:1200})}\n      }\n      secondImage: mobileImage {\n        ${Object(i.e)({width:1200,height:1200})}\n      }\n      thirdImage: image {\n        ${Object(i.e)({width:1200,height:1200})}\n      }\n      video {\n        ${i.r}\n      }\n    }\n\n    ... on ${t}_showrooms_BlockType {\n      lead\n      sublead: baseTitle\n      firstImage: desktopImage {\n        ${Object(i.e)({width:768,height:768})}\n      }\n      secondImage: mobileImage {\n        ${Object(i.e)({width:768,height:768})}\n      }\n      dark\n    }\n\n    ... on ${t}_designersQuotes_BlockType {\n      title: baseTitle\n      persons {\n        ${i.k}\n      }\n      quote1: lead\n      quote2: string\n      quote3: metaTitle\n      quote4: metaDescription\n      dark\n    }\n\n    ... on ${t}_values_BlockType {\n      values: valuesRelation {\n        ${i.q}\n      }\n    }\n\n    ... on ${t}_titleParagraphsLink_BlockType {\n      title: baseTitle\n      paragraph1: description\n      paragraph2: abstract\n      link: pageRelation {\n        ${i.m}\n      }\n      linkLabel: lead\n      darkBg: switch\n    }\n\n    ... on ${t}_kitchenByYou_BlockType {\n      id\n    }\n\n    ... on ${t}_pageLaunch_BlockType {\n      copy: baseTitle\n      link: pageRelation {\n        ${i.m}\n      }\n      linkLabel: lead\n      icon: iconSelect\n    }\n\n    ... on ${t}_twoColumnsTwoImages_BlockType {\n      intro: subtitle\n      firstTitle: baseTitle\n      firstCopy: abstract\n      firstLink: pageRelation {\n        ${i.m}\n      }\n      downloads: downloadsFilesTranslatable {\n          ${i.b}\n      }\n      firstLinkLabel: string\n      secondTitle: lead\n      secondCopy: sublead\n      secondLink: internalLink {\n        ${i.m}\n      }\n      secondLinkLabel: metaTitle\n      firstImage: desktopImage {\n        ${Object(i.e)({width:768,height:768})}\n      }\n      secondImage: image {\n        ${Object(i.e)({width:768,height:768})}\n      }\n      dark: switch\n    }\n\n    ... on ${t}_titleParagraphsImageLink_BlockType {\n      title: baseTitle\n      paragraph1: sublead\n      paragraph2: abstract\n      image {\n        ${Object(i.e)({width:1280,height:1280})}\n      }\n      leftImg: switch\n      link: pageRelation {\n        ${i.m}\n      }\n      linkLabel: lead\n      darkBg: dark\n      squareStyle: revert\n      dark\n    }\n\n    ... on ${t}_quote_BlockType {\n      quote: lead\n      designer: person {\n        ${i.k}\n      }\n    }\n\n    ... on ${t}_immersiveQuote_BlockType {\n      title: baseTitle\n      description\n      dark\n      lead\n      image {\n        ${Object(i.e)({width:2560,height:2560})}\n      }\n      video {\n        ${i.r}\n      }\n      poster: mobileImage {\n        ${Object(i.e)({width:1920,height:1080})}\n      }\n    }\n\n    ... on ${t}_video_BlockType {\n      video {\n        ${i.r}\n      }\n    }\n\n    ... on ${t}_numbers_BlockType {\n      dark\n      lead: baseTitle\n      firstNumber: vatNumber\n      firstLead: lead\n      secondNumber: reaNumber\n      secondLead: string\n      thirdNumber: street\n      thirdLead: subtitle\n    }\n\n    ... on ${t}_carousel_BlockType {\n      images {\n        ${Object(i.e)({width:768})}\n      }\n      people: peopleRelation {\n        ${i.k}\n      }\n      stories: storiesRelation {\n        ${i.p}\n      }\n      darkBg: dark\n      draggable: switch\n    }\n\n    ... on ${t}_video_BlockType {\n      video {\n        ${i.r}\n      }\n      poster: image {\n        ${Object(i.e)({width:1920})}\n      }\n    }\n\n    ... on ${t}_simpleParagraph_BlockType {\n      lead\n      text: abstract\n      indent: switch\n      dark\n    }\n\n    ... on ${t}_sectionLaunch_BlockType {\n      link: pageRelation {\n        ${i.m}\n      }\n      image {\n        ${Object(i.e)({width:1280})}\n      }\n      title: baseTitle\n      description\n      dark\n    }\n\n    ... on ${t}_fullwidthImage_BlockType {\n      image {\n        ${Object(i.e)({width:2560})}\n      }\n    }\n\n    ... on ${t}_columnsSquaredImages_BlockType {\n      dark\n      overlapped: switch\n      intro: string\n      firstCopy: column1Copy\n      firstPrimaryImage: column1Image {\n        ${Object(i.e)({width:1280})}\n      }\n      firstSecondaryImage: column2Image {\n        ${Object(i.e)({width:1280})}\n      }\n      secondCopy: column2Copy\n      secondPrimaryImage: column3Image {\n        ${Object(i.e)({width:1280})}\n      }\n      secondSecondaryImage: column4Image {\n        ${Object(i.e)({width:1280})}\n      }\n    }\n\n    ... on ${t}_verticalMosaic_BlockType {\n      column1Image {\n        ${Object(i.e)({width:768})}\n      }\n      column2Image {\n        ${Object(i.e)({width:768})}\n      }\n      column3Image {\n        ${Object(i.e)({width:768})}\n      }\n      column4Image {\n        ${Object(i.e)({width:768})}\n      }\n      image {\n        ${Object(i.e)({width:768})}\n      }\n      video {\n        ${i.r}\n      }\n    }\n  }\n`
            },
            o = function() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "projectBlocks";
                return `\n  ...on NeoBlockInterface {\n    id\n    sortOrder\n    typeHandle\n\n    ... on ${t}_descriptionAndSublead_BlockType {\n      description\n      sublead\n      indent: switch\n    }\n    ... on ${t}_fullwidthImage_BlockType {\n      image {\n        ${Object(i.e)({width:2560})}\n      }\n      square: switch\n    }\n    ... on ${t}_abstract_BlockType {\n      abstract\n    }\n    ... on ${t}_quote_BlockType {\n      quote: lead\n      designer: person {\n        ${i.k}\n      }\n    }\n    ... on ${t}_carousel_BlockType {\n      images {\n        ... on images_Asset {\n          ${Object(i.e)({width:1024})}\n        }\n      }\n    }\n    ... on ${t}_video_BlockType {\n      video {\n        ${i.r}\n      }\n      poster: image {\n        ${Object(i.e)({width:1920})}\n      }\n    }\n\n  }\n`
            }
    }, , , , , , function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return Zi
        })), n.d(e, "a", (function() {
            return tt
        }));
        var i = {};
        n.r(i), n.d(i, "Accordion", (function() {
            return yt
        })), n.d(i, "AdjoinedFilters", (function() {
            return wt
        })), n.d(i, "Breadcrumbs", (function() {
            return _t
        })), n.d(i, "FaqCard", (function() {
            return xt
        })), n.d(i, "ItemNext", (function() {
            return $t
        })), n.d(i, "Loader", (function() {
            return kt
        })), n.d(i, "LocaleSwitcher", (function() {
            return Ot
        })), n.d(i, "MenuButton", (function() {
            return Ct
        })), n.d(i, "PageWrapper", (function() {
            return jt
        })), n.d(i, "RuntimeRender", (function() {
            return Tt
        })), n.d(i, "SquareCard", (function() {
            return St
        })), n.d(i, "Tab", (function() {
            return Mt
        })), n.d(i, "Tabs", (function() {
            return Pt
        })), n.d(i, "TheCursor", (function() {
            return Lt
        })), n.d(i, "TheFooter", (function() {
            return zt
        })), n.d(i, "TheLogo", (function() {
            return It
        })), n.d(i, "TheNavigation", (function() {
            return Bt
        })), n.d(i, "TheScroll", (function() {
            return Et
        })), n.d(i, "TheSplash", (function() {
            return Rt
        })), n.d(i, "TheTopBar", (function() {
            return Vt
        })), n.d(i, "Value", (function() {
            return Ht
        })), n.d(i, "DesignerBadge", (function() {
            return Dt
        })), n.d(i, "DesignerCard", (function() {
            return Nt
        })), n.d(i, "BlocksAbstract", (function() {
            return At
        })), n.d(i, "BlocksCarousel", (function() {
            return qt
        })), n.d(i, "BlocksColumnsSquaredImages", (function() {
            return Ft
        })), n.d(i, "BlocksCtaModal", (function() {
            return Ut
        })), n.d(i, "BlocksDescriptionAndSublead", (function() {
            return Wt
        })), n.d(i, "BlocksDesignersQuotes", (function() {
            return Gt
        })), n.d(i, "BlocksEntriesCarousel", (function() {
            return Kt
        })), n.d(i, "BlocksForm", (function() {
            return Xt
        })), n.d(i, "BlocksFullwidthImage", (function() {
            return Qt
        })), n.d(i, "BlocksImagesGrid", (function() {
            return Jt
        })), n.d(i, "BlocksImmersiveQuote", (function() {
            return Yt
        })), n.d(i, "BlocksKitchenByYou", (function() {
            return Zt
        })), n.d(i, "BlocksKitchensLaunch", (function() {
            return te
        })), n.d(i, "BlocksKitchensListing", (function() {
            return ee
        })), n.d(i, "BlocksLoader", (function() {
            return ne
        })), n.d(i, "BlocksMosaic", (function() {
            return ie
        })), n.d(i, "BlocksNumbers", (function() {
            return se
        })), n.d(i, "BlocksOrderedParagraphs", (function() {
            return oe
        })), n.d(i, "BlocksPageBanner", (function() {
            return ae
        })), n.d(i, "BlocksPageLaunch", (function() {
            return re
        })), n.d(i, "BlocksPagesLaunch", (function() {
            return ce
        })), n.d(i, "BlocksProjectsListing", (function() {
            return le
        })), n.d(i, "BlocksQuote", (function() {
            return ue
        })), n.d(i, "BlocksRevealText", (function() {
            return he
        })), n.d(i, "BlocksSectionLaunch", (function() {
            return de
        })), n.d(i, "BlocksShowrooms", (function() {
            return pe
        })), n.d(i, "BlocksShowroomsCards", (function() {
            return me
        })), n.d(i, "BlocksSimpleParagraph", (function() {
            return ge
        })), n.d(i, "BlocksSquareCards", (function() {
            return fe
        })), n.d(i, "BlocksStickyFilters", (function() {
            return ve
        })), n.d(i, "BlocksSublead", (function() {
            return be
        })), n.d(i, "BlocksSwitchColumns", (function() {
            return ye
        })), n.d(i, "BlocksTitleParagraphsImageLink", (function() {
            return we
        })), n.d(i, "BlocksTitleParagraphsLink", (function() {
            return _e
        })), n.d(i, "BlocksTwoColumnsTwoImages", (function() {
            return xe
        })), n.d(i, "BlocksValues", (function() {
            return $e
        })), n.d(i, "BlocksVerticalMosaic", (function() {
            return ke
        })), n.d(i, "BlocksVideo", (function() {
            return Oe
        })), n.d(i, "HpHero", (function() {
            return Ce
        })), n.d(i, "HpHeroFirst", (function() {
            return je
        })), n.d(i, "HpHeroOld", (function() {
            return Te
        })), n.d(i, "InputCheckbox", (function() {
            return Se
        })), n.d(i, "InputSelect", (function() {
            return Me
        })), n.d(i, "InputText", (function() {
            return Pe
        })), n.d(i, "InputTextarea", (function() {
            return Le
        })), n.d(i, "InputValidated", (function() {
            return ze
        })), n.d(i, "JobsItemPreview", (function() {
            return Ie
        })), n.d(i, "NewsItemPreview", (function() {
            return Be
        })), n.d(i, "ProjectsHero", (function() {
            return Ee
        })), n.d(i, "ProjectsItem", (function() {
            return Re
        })), n.d(i, "ProjectsItemHero", (function() {
            return Ve
        })), n.d(i, "ProjectsItemPreview", (function() {
            return He
        })), n.d(i, "ShowroomCard", (function() {
            return De
        })), n.d(i, "ShowroomData", (function() {
            return Ne
        })), n.d(i, "StoryNavCard", (function() {
            return Ae
        })), n.d(i, "TypIntroOneColumn", (function() {
            return qe
        })), n.d(i, "TypNumbers", (function() {
            return Fe
        })), n.d(i, "TypParagraph", (function() {
            return Ue
        })), n.d(i, "TypPointedParagraph", (function() {
            return We
        })), n.d(i, "TypQuote", (function() {
            return Ge
        })), n.d(i, "TypSimpleIntro", (function() {
            return Ke
        })), n.d(i, "TypSquareColumns", (function() {
            return Xe
        })), n.d(i, "TypText", (function() {
            return Qe
        })), n.d(i, "TypTextIntro", (function() {
            return Je
        })), n.d(i, "TypTitleTextCta", (function() {
            return Ye
        })), n.d(i, "BaseBackToTop", (function() {
            return Ze
        })), n.d(i, "BaseButton", (function() {
            return tn
        })), n.d(i, "BaseButtonIcon", (function() {
            return en
        })), n.d(i, "BaseCarousel", (function() {
            return nn
        })), n.d(i, "BaseDownloadItem", (function() {
            return sn
        })), n.d(i, "BaseDraggableCarousel", (function() {
            return on
        })), n.d(i, "BaseForm", (function() {
            return an
        })), n.d(i, "BaseGoldenHero", (function() {
            return rn
        })), n.d(i, "BaseHero", (function() {
            return cn
        })), n.d(i, "BaseHeroCover", (function() {
            return ln
        })), n.d(i, "BaseHoursTable", (function() {
            return un
        })), n.d(i, "BaseIcon", (function() {
            return hn
        })), n.d(i, "BaseLink", (function() {
            return dn
        })), n.d(i, "BaseList", (function() {
            return pn
        })), n.d(i, "BaseModal", (function() {
            return mn
        })), n.d(i, "BasePicture", (function() {
            return gn
        })), n.d(i, "BasePictureSource", (function() {
            return fn
        })), n.d(i, "BasePictureSrcset", (function() {
            return vn
        })), n.d(i, "BaseSquaredHero", (function() {
            return bn
        })), n.d(i, "BaseTouchSlider", (function() {
            return yn
        })), n.d(i, "BaseVideo", (function() {
            return wn
        })), n.d(i, "KitchensFinish", (function() {
            return _n
        })), n.d(i, "KitchensHero", (function() {
            return xn
        })), n.d(i, "KitchensIndexCover", (function() {
            return $n
        })), n.d(i, "KitchensItemComposition", (function() {
            return kn
        })), n.d(i, "KitchensItemHero", (function() {
            return On
        })), n.d(i, "KitchensItemPreview", (function() {
            return Cn
        })), n.d(i, "KitchensItemVariant", (function() {
            return jn
        }));
        var s = n(8),
            o = n.n(s),
            a = n(9),
            r = n(67),
            c = n(105),
            l = n.n(c),
            u = n(58),
            h = n.n(u),
            d = n(106),
            p = n(39),
            m = n(7);
        "scrollRestoration" in window.history && (Object(m.u)("manual"), window.addEventListener("beforeunload", (() => {
            Object(m.u)("auto")
        })), window.addEventListener("load", (() => {
            Object(m.u)("manual")
        })));
        const g = () => Object(m.m)(Promise.all([n.e(0), n.e(122)]).then(n.bind(null, 783))),
            f = () => Object(m.m)(Promise.all([n.e(0), n.e(111)]).then(n.bind(null, 787))),
            v = () => Object(m.m)(Promise.all([n.e(0), n.e(112)]).then(n.bind(null, 788))),
            b = () => Object(m.m)(Promise.all([n.e(0), n.e(7), n.e(114)]).then(n.bind(null, 789))),
            y = () => Object(m.m)(Promise.all([n.e(0), n.e(120)]).then(n.bind(null, 790))),
            w = () => Object(m.m)(Promise.all([n.e(0), n.e(121)]).then(n.bind(null, 791))),
            _ = () => Object(m.m)(Promise.all([n.e(0), n.e(8), n.e(124)]).then(n.bind(null, 792))),
            x = () => Object(m.m)(Promise.all([n.e(0), n.e(5), n.e(130)]).then(n.bind(null, 793))),
            $ = () => Object(m.m)(Promise.all([n.e(0), n.e(132)]).then(n.bind(null, 794))),
            k = () => Object(m.m)(Promise.all([n.e(0), n.e(133)]).then(n.bind(null, 795))),
            O = () => Object(m.m)(Promise.all([n.e(0), n.e(134)]).then(n.bind(null, 784))),
            C = () => Object(m.m)(Promise.all([n.e(0), n.e(137)]).then(n.bind(null, 796))),
            j = () => Object(m.m)(Promise.all([n.e(0), n.e(115)]).then(n.bind(null, 797))),
            T = () => Object(m.m)(Promise.all([n.e(0), n.e(116)]).then(n.bind(null, 798))),
            S = () => Object(m.m)(Promise.all([n.e(0), n.e(117)]).then(n.bind(null, 799))),
            M = () => Object(m.m)(Promise.all([n.e(0), n.e(118)]).then(n.bind(null, 800))),
            P = () => Object(m.m)(Promise.all([n.e(0), n.e(125)]).then(n.bind(null, 785))),
            L = () => Object(m.m)(Promise.all([n.e(0), n.e(5), n.e(127)]).then(n.bind(null, 801))),
            z = () => Object(m.m)(Promise.all([n.e(0), n.e(126)]).then(n.bind(null, 802))),
            I = () => Object(m.m)(Promise.all([n.e(0), n.e(136)]).then(n.bind(null, 803))),
            B = () => Object(m.m)(Promise.all([n.e(0), n.e(7), n.e(113)]).then(n.bind(null, 804))),
            E = () => Object(m.m)(Promise.all([n.e(0), n.e(6), n.e(119)]).then(n.bind(null, 805))),
            R = () => Object(m.m)(Promise.all([n.e(0), n.e(8), n.e(123)]).then(n.bind(null, 806))),
            V = () => Object(m.m)(Promise.all([n.e(0), n.e(5), n.e(129)]).then(n.bind(null, 807))),
            H = () => Object(m.m)(Promise.all([n.e(0), n.e(6), n.e(131)]).then(n.bind(null, 808))),
            D = () => Object(m.m)(Promise.all([n.e(1), n.e(3), n.e(4), n.e(0), n.e(135)]).then(n.bind(null, 809))),
            N = () => Object(m.m)(Promise.all([n.e(0), n.e(6), n.e(138)]).then(n.bind(null, 810))),
            A = () => Object(m.m)(Promise.all([n.e(1), n.e(0), n.e(2), n.e(128)]).then(n.bind(null, 811))),
            q = () => {};
        o.a.use(d.a);
        const F = {
            mode: "history",
            base: "/",
            linkActiveClass: "nuxt-link-active",
            linkExactActiveClass: "nuxt-link-exact-active",
            scrollBehavior: function(t, e, n) {
                let i = !1;
                const s = t !== e;
                n ? i = n : s && function(t) {
                    const e = Object(m.g)(t);
                    if (1 === e.length) {
                        const {
                            options: t = {}
                        } = e[0];
                        return !1 !== t.scrollToTop
                    }
                    return e.some((t => {
                        let {
                            options: e
                        } = t;
                        return e && e.scrollToTop
                    }))
                }(t) && (i = {
                    x: 0,
                    y: 0
                });
                const o = window.$nuxt;
                return (!s || t.path === e.path && t.hash !== e.hash) && o.$nextTick((() => o.$emit("triggerScroll"))), new Promise((e => {
                    o.$once("triggerScroll", (() => {
                        if (t.hash) {
                            let e = t.hash;
                            void 0 !== window.CSS && void 0 !== window.CSS.escape && (e = "#" + window.CSS.escape(e.substr(1)));
                            try {
                                const t = document.querySelector(e);
                                if (t) {
                                    var n;
                                    i = {
                                        selector: e
                                    };
                                    const s = Number(null === (n = getComputedStyle(t)["scroll-margin-top"]) || void 0 === n ? void 0 : n.replace("px", ""));
                                    s && (i.offset = {
                                        y: s
                                    })
                                }
                            } catch (t) {}
                        }
                        e(i)
                    }))
                }))
            },
            routes: [{
                path: "/en/",
                component: g,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "index___en"
            }, {
                path: "/it/",
                component: g,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "index___it"
            }, {
                path: "/ko/",
                component: g,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "index___ko"
            }, {
                path: "/en/administrative-office/",
                component: f,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "administrative-office___en"
            }, {
                path: "/en/appointment/",
                component: v,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "appointment___en"
            }, {
                path: "/en/assistance/",
                component: b,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "assistance___en"
            }, {
                path: "/en/contract/",
                component: y,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "contract___en"
            }, {
                path: "/en/cookies/",
                component: w,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "cookies___en"
            }, {
                path: "/en/jobs/",
                component: _,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "jobs___en"
            }, {
                path: "/en/kitchens/",
                component: x,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "kitchens___en"
            }, {
                path: "/en/news/",
                component: $,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "news___en"
            }, {
                path: "/en/privacy/",
                component: k,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "privacy___en"
            }, {
                path: "/en/services/",
                component: O,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "services___en"
            }, {
                path: "/en/showrooms/",
                component: C,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "showrooms___en"
            }, {
                path: "/it/assistenza/",
                component: b,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "assistance___it"
            }, {
                path: "/it/contract/",
                component: y,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "contract___it"
            }, {
                path: "/it/cookies/",
                component: w,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "cookies___it"
            }, {
                path: "/it/cucine/",
                component: x,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "kitchens___it"
            }, {
                path: "/it/lavora-con-noi/",
                component: _,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "jobs___it"
            }, {
                path: "/it/news/",
                component: $,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "news___it"
            }, {
                path: "/it/privacy/",
                component: k,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "privacy___it"
            }, {
                path: "/it/richiedi-appuntamento/",
                component: v,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "appointment___it"
            }, {
                path: "/it/segreteria/",
                component: f,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "administrative-office___it"
            }, {
                path: "/it/servizi/",
                component: O,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "services___it"
            }, {
                path: "/it/showrooms/",
                component: C,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "showrooms___it"
            }, {
                path: "/ko/administrative-office/",
                component: f,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "administrative-office___ko"
            }, {
                path: "/ko/appointment/",
                component: v,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "appointment___ko"
            }, {
                path: "/ko/assistance/",
                component: b,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "assistance___ko"
            }, {
                path: "/ko/contract/",
                component: y,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "contract___ko"
            }, {
                path: "/ko/cookies/",
                component: w,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "cookies___ko"
            }, {
                path: "/ko/jobs/",
                component: _,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "jobs___ko"
            }, {
                path: "/ko/kitchens/",
                component: x,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "kitchens___ko"
            }, {
                path: "/ko/news/",
                component: $,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "news___ko"
            }, {
                path: "/ko/privacy/",
                component: k,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "privacy___ko"
            }, {
                path: "/ko/services/",
                component: O,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "services___ko"
            }, {
                path: "/ko/showrooms/",
                component: C,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "showrooms___ko"
            }, {
                path: "/en/brand/identity/",
                component: j,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "brand-identity___en"
            }, {
                path: "/en/brand/production/",
                component: T,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "brand-production___en"
            }, {
                path: "/en/brand/social-commitment/",
                component: S,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "brand-social-commitment___en"
            }, {
                path: "/en/brand/work-in/",
                component: M,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "brand-work-in___en"
            }, {
                path: "/en/kitchen-by-you/concept/",
                component: P,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "kitchen-by-you-concept___en"
            }, {
                path: "/en/kitchen-by-you/stories/",
                component: L,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "kitchen-by-you-stories___en"
            }, {
                path: "/it/brand/identity/",
                component: j,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "brand-identity___it"
            }, {
                path: "/it/brand/impegno-sociale/",
                component: S,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "brand-social-commitment___it"
            }, {
                path: "/it/brand/lavorare-in-primopiano/",
                component: M,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "brand-work-in___it"
            }, {
                path: "/it/brand/produzione/",
                component: T,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "brand-production___it"
            }, {
                path: "/it/kitchen-by-you/concept/",
                component: P,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "kitchen-by-you-concept___it"
            }, {
                path: "/it/kitchen-by-you/stories/",
                component: L,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "kitchen-by-you-stories___it"
            }, {
                path: "/ko/brand/identity/",
                component: j,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "brand-identity___ko"
            }, {
                path: "/ko/brand/production/",
                component: T,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "brand-production___ko"
            }, {
                path: "/ko/brand/social-commitment/",
                component: S,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "brand-social-commitment___ko"
            }, {
                path: "/ko/brand/work-in/",
                component: M,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "brand-work-in___ko"
            }, {
                path: "/ko/kitchen-by-you/concept/",
                component: P,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "kitchen-by-you-concept___ko"
            }, {
                path: "/ko/kitchen-by-you/stories/",
                component: L,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "kitchen-by-you-stories___ko"
            }, {
                path: "/en/kitchen-by-you/stories/:slug/",
                component: z,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "kitchen-by-you-stories-slug___en"
            }, {
                path: "/en/showrooms/form/:id/",
                component: I,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "showrooms-form-id___en"
            }, {
                path: "/it/kitchen-by-you/stories/:slug/",
                component: z,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "kitchen-by-you-stories-slug___it"
            }, {
                path: "/it/showrooms/form/:id/",
                component: I,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "showrooms-form-id___it"
            }, {
                path: "/ko/kitchen-by-you/stories/:slug/",
                component: z,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "kitchen-by-you-stories-slug___ko"
            }, {
                path: "/ko/showrooms/form/:id/",
                component: I,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "showrooms-form-id___ko"
            }, {
                path: "/en/assistance/:slug/",
                component: B,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "assistance-slug___en"
            }, {
                path: "/en/contract/:slug/",
                component: E,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "contract-slug___en"
            }, {
                path: "/en/jobs/:slug/",
                component: R,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "jobs-slug___en"
            }, {
                path: "/en/kitchens/:category/",
                component: V,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "kitchens-category___en"
            }, {
                path: "/en/news/:slug/",
                component: H,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "news-slug___en"
            }, {
                path: "/en/showrooms/:slug/",
                component: D,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "showrooms-slug___en"
            }, {
                path: "/en/social-commitment/:slug/",
                component: N,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "social-commitment-slug___en"
            }, {
                path: "/it/assistenza/:slug/",
                component: B,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "assistance-slug___it"
            }, {
                path: "/it/contract/:slug/",
                component: E,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "contract-slug___it"
            }, {
                path: "/it/cucine/:category/",
                component: V,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "kitchens-category___it"
            }, {
                path: "/it/impegno-sociale/:slug/",
                component: N,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "social-commitment-slug___it"
            }, {
                path: "/it/lavora-con-noi/:slug/",
                component: R,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "jobs-slug___it"
            }, {
                path: "/it/news/:slug/",
                component: H,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "news-slug___it"
            }, {
                path: "/it/showrooms/:slug/",
                component: D,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "showrooms-slug___it"
            }, {
                path: "/ko/assistance/:slug/",
                component: B,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "assistance-slug___ko"
            }, {
                path: "/ko/contract/:slug/",
                component: E,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "contract-slug___ko"
            }, {
                path: "/ko/jobs/:slug/",
                component: R,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "jobs-slug___ko"
            }, {
                path: "/ko/kitchens/:category/",
                component: V,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "kitchens-category___ko"
            }, {
                path: "/ko/news/:slug/",
                component: H,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "news-slug___ko"
            }, {
                path: "/ko/showrooms/:slug/",
                component: D,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "showrooms-slug___ko"
            }, {
                path: "/ko/social-commitment/:slug/",
                component: N,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "social-commitment-slug___ko"
            }, {
                path: "/en/kitchens/:category/:slug/",
                component: A,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "kitchens-category-slug___en"
            }, {
                path: "/it/cucine/:category/:slug/",
                component: A,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "kitchens-category-slug___it"
            }, {
                path: "/ko/kitchens/:category/:slug/",
                component: A,
                pathToRegexpOptions: {
                    strict: !0
                },
                name: "kitchens-category-slug___ko"
            }],
            fallback: !1
        };
        var U = {
            name: "NuxtChild",
            functional: !0,
            props: {
                nuxtChildKey: {
                    type: String,
                    default: ""
                },
                keepAlive: Boolean,
                keepAliveProps: {
                    type: Object,
                    default: void 0
                }
            },
            render(t, e) {
                let {
                    parent: n,
                    data: i,
                    props: s
                } = e;
                const o = n.$createElement;
                i.nuxtChild = !0;
                const a = n,
                    r = n.$nuxt.nuxt.transitions,
                    c = n.$nuxt.nuxt.defaultTransition;
                let l = 0;
                for (; n;) n.$vnode && n.$vnode.data.nuxtChild && l++, n = n.$parent;
                i.nuxtChildDepth = l;
                const u = r[l] || c,
                    h = {};
                W.forEach((t => {
                    void 0 !== u[t] && (h[t] = u[t])
                }));
                const d = {};
                G.forEach((t => {
                    "function" == typeof u[t] && (d[t] = u[t].bind(a))
                })); {
                    const t = d.beforeEnter;
                    d.beforeEnter = e => {
                        if (window.$nuxt.$nextTick((() => {
                                window.$nuxt.$emit("triggerScroll")
                            })), t) return t.call(a, e)
                    }
                }
                if (!1 === u.css) {
                    const t = d.leave;
                    (!t || t.length < 2) && (d.leave = (e, n) => {
                        t && t.call(a, e), a.$nextTick(n)
                    })
                }
                let p = o("routerView", i);
                return s.keepAlive && (p = o("keep-alive", {
                    props: s.keepAliveProps
                }, [p])), o("transition", {
                    props: h,
                    on: d
                }, [p])
            }
        };
        const W = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
            G = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"];
        var K = n(4),
            X = (n(102), n(112)),
            Q = n(6),
            J = {
                mixins: [X.b],
                layout: "error",
                props: ["error"],
                data: () => ({
                    position: {
                        x: 0,
                        y: 0
                    },
                    pointer: {
                        x: 0,
                        y: 0
                    },
                    cursor: {
                        x: 0,
                        y: 0
                    },
                    xSet: null,
                    ySet: null
                }),
                computed: { ...Object(a.d)("globals", ["images404"]),
                    ...Object(a.d)("layout", {
                        layoutWidth: "width",
                        layoutHeight: "height"
                    })
                },
                beforeDestroy() {
                    window.removeEventListener("pointermove", this.updatePointer, {
                        passive: !0
                    }), K.b.ticker.remove(this.updateCursor)
                },
                destroyed() {
                    try {
                        var t;
                        null === (t = Object.keys(this._sts)) || void 0 === t || t.forEach((t => {
                            this._sts[t].kill(!1)
                        }))
                    } catch (t) {}
                },
                created() {
                    this.$store.commit("navigation/setErrorPage", !0)
                },
                async mounted() {
                    this.$store.state.layout.splashViewed ? (await this.$nextTick(), this.initPage()) : this.$bus.$once("splash:almost-complete", (async () => {
                        this.initPage()
                    }))
                },
                methods: {
                    initPage() {
                        K.b.set(this.$el, {
                            "--cursor-movement-x": 0,
                            "--cursor-movement-y": 0
                        }), this.$store.commit("layout/setTopbar", !1), this.$store.dispatch("layout/setTopbarHeightVar"), this.$store.commit("transitions/setOverlappedHero", !1), this.$store.commit("transitions/setBottomToTop", !1), this.$store.commit("navigation/setTransitioning", !1), this.$store.commit("scroll/setLocked", !1), this.$bus.$emit("page:after-enter"), this.$store.commit("layout/setDarkBg", !0), this._sts = {};
                        const t = Object(Q.p)("[data-image]", this.$el),
                            e = Object(Q.p)("[data-text]", this.$el);
                        K.b.timeline({
                            defaults: {
                                duration: 1
                            }
                        }).set(t, {
                            opacity: 0,
                            x: 20
                        }).set(e, {
                            opacity: 0,
                            x: 50
                        }).set(this.$refs.grid, {
                            opacity: 1
                        }).add((() => {
                            this.initMovement()
                        })).to(e, {
                            opacity: 1,
                            x: 0,
                            ease: "power3.out"
                        }, "start").to(t, {
                            opacity: 1,
                            x: 0,
                            stagger: .05,
                            ease: "power3.out"
                        }, "start+=0.3")
                    },
                    initMovement() {
                        this.cursor = {
                            x: this.layoutWidth / 2,
                            y: this.layoutHeight / 2
                        }, this.pointer = { ...this.cursor
                        }, this.xSet = K.b.quickSetter(this.$el, "--cursor-movement-x", "px"), this.ySet = K.b.quickSetter(this.$el, "--cursor-movement-y", "px"), window.addEventListener("pointermove", this.updatePointer, {
                            passive: !0
                        }), K.b.ticker.add(this.updateCursor)
                    },
                    updatePointer(t) {
                        this.pointer.x = t.clientX, this.pointer.y = t.clientY, this.position.x = t.clientX / this.layoutWidth, this.position.y = t.clientY / this.layoutHeight
                    },
                    updateCursor(t, e) {
                        const n = .06 * e,
                            i = 1 - Math.pow(.5, n);
                        this.cursor.x += (this.pointer.x - this.cursor.x) * i, this.cursor.y += (this.pointer.y - this.cursor.y) * i, this.xSet(this.position.x), this.ySet(this.position.y)
                    }
                }
            },
            Y = (n(288), n(12)),
            Z = Object(Y.a)(J, (function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "page error-page",
                    attrs: {
                        "data-dark": ""
                    }
                }, [e("div", {
                    staticClass: "l-wrapper"
                }, [e("div", {
                    ref: "grid",
                    staticClass: "error-page__grid"
                }, t._l(t.images404, (function(n, i) {
                    return e("div", {
                        key: n.id,
                        staticClass: "error-page__item",
                        class: {
                            "-content-item": 6 === i
                        }
                    }, [i <= 5 || i > 6 ? e("div", {
                        staticClass: "error-page__image-wr",
                        attrs: {
                            "data-image": ""
                        }
                    }, [e("div", {
                        staticClass: "error-page__image"
                    }, [n ? e("base-picture", {
                        attrs: {
                            image: n
                        }
                    }) : t._e()], 1)]) : e("div", {
                        staticClass: "error-page__content",
                        attrs: {
                            "data-text": ""
                        }
                    }, [e("div", {
                        staticClass: "empty"
                    }), t._v(" "), e("div", {
                        staticClass: "error-page__message"
                    }, [e("div", {
                        staticClass: "error-page__title"
                    }, [t._v("\n              " + t._s(t.$t(`errors.${t.error.statusCode}.title`)) + "\n            ")]), t._v(" "), e("div", {
                        staticClass: "error-page__message"
                    }, [t._v("\n              " + t._s(t.$t(`errors.${t.error.statusCode}.message`)) + "\n            ")])]), t._v(" "), e("base-button", {
                        attrs: {
                            color: "black",
                            mode: "underline",
                            label: t.$t("errors.go_home"),
                            to: t.localePath({
                                name: "index"
                            })
                        }
                    }, [t._v("\n            " + t._s(t.$t("errors.go_home")) + "\n          ")])], 1)])
                })), 0)])])
            }), [], !1, null, null, null),
            tt = Z.exports;
        installComponents(Z, {
            BasePicture: n(71).default,
            BaseButton: n(72).default
        });
        var et = {
                name: "Nuxt",
                components: {
                    NuxtChild: U,
                    NuxtError: tt
                },
                props: {
                    nuxtChildKey: {
                        type: String,
                        default: void 0
                    },
                    keepAlive: Boolean,
                    keepAliveProps: {
                        type: Object,
                        default: void 0
                    },
                    name: {
                        type: String,
                        default: "default"
                    }
                },
                errorCaptured(t) {
                    this.displayingNuxtError && (this.errorFromNuxtError = t, this.$forceUpdate())
                },
                computed: {
                    routerViewKey() {
                        if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(m.c)(this.$route.matched[0].path)(this.$route.params);
                        const [t] = this.$route.matched;
                        if (!t) return this.$route.path;
                        const e = t.components.default;
                        if (e && e.options) {
                            const {
                                options: t
                            } = e;
                            if (t.key) return "function" == typeof t.key ? t.key(this.$route) : t.key
                        }
                        return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                    }
                },
                beforeCreate() {
                    o.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                },
                render(t) {
                    return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((() => this.errorFromNuxtError = !1)), t("div", {}, [t("h2", "An error occurred while showing the error page"), t("p", "Unfortunately an error occurred and while showing the error page another error occurred"), t("p", `Error details: ${this.errorFromNuxtError.toString()}`), t("nuxt-link", {
                        props: {
                            to: "/"
                        }
                    }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((() => this.displayingNuxtError = !1)), t(tt, {
                        props: {
                            error: this.nuxt.err
                        }
                    })) : t("NuxtChild", {
                        key: this.routerViewKey,
                        props: this.$props
                    })
                }
            },
            nt = {
                name: "NuxtLoading",
                data: () => ({
                    percent: 0,
                    show: !1,
                    canSucceed: !0,
                    reversed: !1,
                    skipTimerCount: 0,
                    rtl: !1,
                    throttle: 200,
                    duration: 5e3,
                    continuous: !1
                }),
                computed: {
                    left() {
                        return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                    }
                },
                beforeDestroy() {
                    this.clear()
                },
                methods: {
                    clear() {
                        clearInterval(this._timer), clearTimeout(this._throttle), clearTimeout(this._hide), this._timer = null
                    },
                    start() {
                        return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((() => this.startTimer()), this.throttle) : this.startTimer(), this
                    },
                    set(t) {
                        return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(t))), this
                    },
                    get() {
                        return this.percent
                    },
                    increase(t) {
                        return this.percent = Math.min(100, Math.floor(this.percent + t)), this
                    },
                    decrease(t) {
                        return this.percent = Math.max(0, Math.floor(this.percent - t)), this
                    },
                    pause() {
                        return clearInterval(this._timer), this
                    },
                    resume() {
                        return this.startTimer(), this
                    },
                    finish() {
                        return this.percent = this.reversed ? 0 : 100, this.hide(), this
                    },
                    hide() {
                        return this.clear(), this._hide = setTimeout((() => {
                            this.show = !1, this.$nextTick((() => {
                                this.percent = 0, this.reversed = !1
                            }))
                        }), 500), this
                    },
                    fail(t) {
                        return this.canSucceed = !1, this
                    },
                    startTimer() {
                        this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((() => {
                            this.skipTimerCount > 0 ? this.skipTimerCount-- : (this.reversed ? this.decrease(this._cut) : this.increase(this._cut), this.continuous && (this.percent >= 100 || this.percent <= 0) && (this.skipTimerCount = 1, this.reversed = !this.reversed))
                        }), 100)
                    }
                },
                render(t) {
                    let e = t(!1);
                    return this.show && (e = t("div", {
                        staticClass: "nuxt-progress",
                        class: {
                            "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
                        },
                        style: {
                            width: this.percent + "%",
                            left: this.left
                        }
                    })), e
                }
            },
            it = (n(292), Object(Y.a)(nt, undefined, undefined, !1, null, null, null).exports),
            st = (n(293), {
                name: "LayoutDefault",
                head() {
                    return {
                        htmlAttrs: {
                            class: [...this.scrollLocked ? ["scroll-lock lenis-stopped"] : [], ...this.darkTheme ? ["dark-theme-root"] : [], ...this.initialized ? ["lenis"] : []]
                        },
                        bodyAttrs: {
                            class: [...this.isSafari ? ["safari-mobile"] : [], ...this.isFirefox && this.isTouch ? ["firefox-mobile"] : [], ...this.isTouch ? ["is-touch"] : ["is-not-touch"], ...this.darkTheme ? ["-dark-theme"] : [], ...this.transitioning ? ["page-transitioning"] : [], ...this.overflowHidden ? ["overflow-hidden"] : []]
                        }
                    }
                },
                computed: { ...Object(a.d)("layout", {
                        layoutWidth: "width",
                        layoutHeight: "height",
                        darkTheme: "darkTheme",
                        scrollbarWidth: "scrollbarWidth",
                        mainNavOpen: "mainNavOpen",
                        splashViewed: "splashViewed",
                        darkBg: "darkBg",
                        topbar: "topbar"
                    }),
                    ...Object(a.d)({
                        isTouch: t => t.dev.isTouch,
                        isSafari: t => t.dev.isSafari,
                        isFirefox: t => t.dev.isFirefox
                    }),
                    ...Object(a.d)("scroll", {
                        scrollLocked: "locked",
                        overflowHidden: "overflowHidden",
                        initialized: "initialized",
                        horizontal: t => "horizontal" == t.orientation
                    }),
                    ...Object(a.d)("layout", ["loading", "splashViewed", "darkBg"]),
                    ...Object(a.d)("navigation", ["transitioning", "errorPage"]),
                    ...Object(a.d)("kitchens", ["cover"]),
                    hasCursor() {
                        return !this.isTouch && this.splashViewed
                    }
                },
                created() {
                    this._sts = {}, this.mapsRoutes = [], this.$bus.$on("page:before-leave", (() => {
                        this.killAllST()
                    })), this.$bus.$on("page:after-enter", (() => {
                        this.setupST()
                    }))
                },
                mounted() {
                    this.setScrollBarWidth(), this.$bus.$once("page-enter-complete", (() => {
                        K.b.set(document.documentElement, {
                            "--cookie-banner-opacity": 1
                        })
                    }))
                },
                methods: { ...Object(a.c)("layout", ["setScrollBarWidth"]),
                    killAllST() {
                        try {
                            var t;
                            null === (t = Object.keys(this._sts)) || void 0 === t || t.forEach((t => {
                                this._sts[t].kill(!1)
                            }))
                        } catch (t) {}
                    },
                    setupST() {
                        const t = Object(Q.p)("[data-dark], [data-light]", this.$el);
                        this.$exists(t) && t.forEach(((t, e) => {
                            const n = t.hasAttribute("data-dark");
                            this._sts[`bg-${e}`] = this.$bus.$scrollTrigger.create({
                                id: `bg-${e}-${n?"dark":"light"}`,
                                trigger: t,
                                start: () => "top top+=30px",
                                end: () => `+=${t.offsetHeight}px`,
                                onToggle: () => {
                                    this.$store.commit("layout/setDarkBg", !n)
                                }
                            })
                        }))
                    }
                }
            }),
            ot = (n(294), Object(Y.a)(st, (function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    class: ["pp-app", {
                        "-bg-white": t.splashViewed
                    }]
                }, [t.splashViewed ? t._e() : e("the-splash"), t._v(" "), t.mainNavOpen ? e("the-navigation") : t._e(), t._v(" "), t.splashViewed && t.topbar ? e("the-top-bar", {
                    class: {
                        "-error-page": t.errorPage
                    }
                }) : t._e(), t._v(" "), e("main", {
                    staticClass: "layouts-default"
                }, [e("the-scroll", [e("div", {
                    class: ["layouts-default__wr", {
                        "-horizontal": t.horizontal
                    }],
                    attrs: {
                        "data-layout-wr": ""
                    }
                }, [e("div", {
                    staticClass: "page-container",
                    class: {
                        "-no-topbar": !t.topbar
                    }
                }, [e("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t.cover ? e("kitchens-index-cover", {
                    attrs: {
                        image: t.cover
                    }
                }) : t._e()], 1), t._v(" "), e("nuxt", {
                    staticClass: "base-page",
                    attrs: {
                        "keep-alive-props": {
                            include: t.mapsRoutes
                        }
                    }
                })], 1)])])], 1), t._v(" "), t.hasCursor ? e("the-cursor") : t._e(), t._v(" "), e("portal-target", {
                    attrs: {
                        name: "out-scroll"
                    }
                })], 1)
            }), [], !1, null, null, null)),
            at = ot.exports;
        installComponents(ot, {
            TheSplash: n(188).default,
            TheNavigation: n(189).default,
            TheTopBar: n(190).default,
            KitchensIndexCover: n(370).default,
            TheScroll: n(191).default,
            TheCursor: n(371).default
        });
        var rt = {
                name: "LayoutDefault",
                head() {
                    return {
                        htmlAttrs: {
                            class: [...this.scrollLocked ? ["scroll-lock lenis-stopped"] : [], ...this.darkTheme ? ["dark-theme-root"] : [], ...this.initialized ? ["lenis"] : []]
                        },
                        bodyAttrs: {
                            class: [...this.isSafari ? ["safari-mobile"] : [], ...this.isFirefox && this.isTouch ? ["firefox-mobile"] : [], ...this.isTouch ? ["is-touch"] : ["is-not-touch"], ...this.darkTheme ? ["-dark-theme"] : [], ...this.transitioning ? ["page-transitioning"] : [], ...this.overflowHidden ? ["overflow-hidden"] : []]
                        }
                    }
                },
                computed: { ...Object(a.d)("layout", {
                        layoutWidth: "width",
                        layoutHeight: "height",
                        darkTheme: "darkTheme",
                        scrollbarWidth: "scrollbarWidth",
                        mainNavOpen: "mainNavOpen",
                        splashViewed: "splashViewed",
                        darkBg: "darkBg",
                        topbar: "topbar"
                    }),
                    ...Object(a.d)({
                        isTouch: t => t.dev.isTouch,
                        isFirefox: t => t.dev.isFirefox,
                        isSafari: t => t.dev.isSafari
                    }),
                    ...Object(a.d)("scroll", {
                        scrollLocked: "locked",
                        overflowHidden: "overflowHidden",
                        initialized: "initialized",
                        horizontal: t => "horizontal" == t.orientation
                    }),
                    ...Object(a.d)("layout", ["loading", "splashViewed", "darkBg"]),
                    ...Object(a.d)("navigation", ["transitioning", "errorPage"])
                },
                created() {
                    this._sts = {}, this.mapsRoutes = [], this.$bus.$on("page:before-leave", (() => {
                        this.killAllST()
                    })), this.$bus.$on("page:after-enter", (() => {
                        this.setupST()
                    }))
                },
                mounted() {
                    this.setScrollBarWidth(), this.$bus.$once("page-enter-complete", (() => {
                        K.b.set(document.documentElement, {
                            "--cookie-banner-opacity": 1
                        })
                    }))
                },
                methods: { ...Object(a.c)("layout", ["setScrollBarWidth"]),
                    killAllST() {
                        try {
                            var t;
                            null === (t = Object.keys(this._sts)) || void 0 === t || t.forEach((t => {
                                this._sts[t].kill(!1)
                            }))
                        } catch (t) {}
                    },
                    setupST() {
                        const t = Object(Q.p)("[data-dark], [data-light]", this.$el);
                        this.$exists(t) && t.forEach(((t, e) => {
                            const n = t.hasAttribute("data-dark");
                            this._sts[`bg-${e}`] = this.$bus.$scrollTrigger.create({
                                id: `bg-${e}-${n?"dark":"light"}`,
                                trigger: t,
                                start: () => "top top+=30px",
                                end: () => `+=${t.offsetHeight}px`,
                                onToggle: () => {
                                    this.$store.commit("layout/setDarkBg", !n)
                                }
                            })
                        }))
                    }
                }
            },
            ct = (n(306), Object(Y.a)(rt, (function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    class: ["pp-app", {
                        "-bg-white": t.splashViewed
                    }]
                }, [t.splashViewed ? t._e() : e("the-splash"), t._v(" "), t.mainNavOpen ? e("the-navigation") : t._e(), t._v(" "), t.splashViewed && t.topbar ? e("the-top-bar", {
                    class: {
                        "-error-page": t.errorPage
                    }
                }) : t._e(), t._v(" "), e("main", {
                    staticClass: "layouts-default"
                }, [e("the-scroll", [e("div", {
                    class: ["layouts-default__wr", {
                        "-horizontal": t.horizontal
                    }],
                    attrs: {
                        "data-layout-wr": ""
                    }
                }, [e("div", {
                    staticClass: "page-container",
                    class: {
                        "-no-topbar": !t.topbar
                    }
                }, [e("kitchens-hero", {
                    attrs: {
                        title: "Cucine",
                        description: "Creare ambienti e luoghi",
                        image: t.$exists(t.page.thumbnail) ? t.$getSingle(t.page.thumbnail) : null,
                        filters: t.filteredCategories
                    }
                }), t._v(" "), e("nuxt", {
                    staticClass: "base-page",
                    attrs: {
                        "keep-alive-props": {
                            include: t.mapsRoutes
                        }
                    }
                })], 1)])])], 1), t._v(" "), e("portal-target", {
                    attrs: {
                        name: "out-scroll"
                    }
                })], 1)
            }), [], !1, null, null, null)),
            lt = ct.exports;
        installComponents(ct, {
            TheSplash: n(188).default,
            TheNavigation: n(189).default,
            TheTopBar: n(190).default,
            KitchensHero: n(256).default,
            TheScroll: n(191).default
        });
        const ut = {
            _default: Object(m.s)(at),
            _kitchens: Object(m.s)(lt)
        };
        var ht = {
            render(t, e) {
                const n = t("NuxtLoading", {
                        ref: "loading"
                    }),
                    i = t(this.layout || "nuxt"),
                    s = t("div", {
                        domProps: {
                            id: "__layout"
                        },
                        key: this.layoutName
                    }, [i]),
                    o = t("transition", {
                        props: {
                            name: "layout-transition",
                            mode: "out-in"
                        },
                        on: {
                            beforeEnter(t) {
                                window.$nuxt.$nextTick((() => {
                                    window.$nuxt.$emit("triggerScroll")
                                }))
                            }
                        }
                    }, [s]);
                return t("div", {
                    domProps: {
                        id: "__nuxt"
                    }
                }, [n, o])
            },
            data: () => ({
                isOnline: !0,
                layout: null,
                layoutName: "",
                nbFetching: 0
            }),
            beforeCreate() {
                o.a.util.defineReactive(this, "nuxt", this.$options.nuxt)
            },
            created() {
                this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
            },
            async mounted() {
                this.$loading = this.$refs.loading
            },
            watch: {
                "nuxt.err": "errorChanged"
            },
            computed: {
                isOffline() {
                    return !this.isOnline
                },
                isFetching() {
                    return this.nbFetching > 0
                }
            },
            methods: {
                refreshOnlineStatus() {
                    void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                },
                async refresh() {
                    const t = Object(m.h)(this.$route);
                    if (!t.length) return;
                    this.$loading.start();
                    const e = t.map((async t => {
                        let e = [];
                        t.$options.fetch && t.$options.fetch.length && e.push(Object(m.q)(t.$options.fetch, this.context)), t.$options.asyncData && e.push(Object(m.q)(t.$options.asyncData, this.context).then((e => {
                            for (const n in e) o.a.set(t.$data, n, e[n])
                        }))), await Promise.all(e), e = [], t.$fetch && e.push(t.$fetch());
                        for (const n of Object(m.e)(t.$vnode.componentInstance)) e.push(n.$fetch());
                        return Promise.all(e)
                    }));
                    try {
                        await Promise.all(e)
                    } catch (t) {
                        this.$loading.fail(t), Object(m.k)(t), this.error(t)
                    }
                    this.$loading.finish()
                },
                errorChanged() {
                    if (this.nuxt.err) {
                        this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish());
                        let t = (tt.options || tt).layout;
                        "function" == typeof t && (t = t(this.context)), this.setLayout(t)
                    }
                },
                setLayout(t) {
                    return t && ut["_" + t] || (t = "default"), this.layoutName = t, this.layout = ut["_" + t], this.layout
                },
                loadLayout: t => (t && ut["_" + t] || (t = "default"), Promise.resolve(ut["_" + t]))
            },
            components: {
                NuxtLoading: it
            }
        };
        o.a.use(a.a);
        const dt = ["state", "getters", "actions", "mutations"];
        let pt = {};
        pt = function(t, e) {
            if ((t = t.default || t).commit) throw new Error(`[nuxt] ${e} should export a method that returns a Vuex instance.`);
            return "function" != typeof t && (t = Object.assign({}, t)), gt(t, e)
        }(n(310), "store/index.js"), pt.modules = pt.modules || {}, ft(n(311), "breadcrumbs.js"), ft(n(312), "company.js"), ft(n(313), "faqs.js"), ft(n(372), "globals.js"), ft(n(314), "jobs.js"), ft(n(315), "kitchens.js"), ft(n(329), "layout.js"), ft(n(330), "locales.js"), ft(n(373), "navigation.js"), ft(n(331), "news.js"), ft(n(332), "pages.js"), ft(n(333), "projects.js"), ft(n(334), "scroll.js"), ft(n(335), "seo.js"), ft(n(336), "stories.js"), ft(n(337), "transitions.js");
        const mt = pt instanceof Function ? pt : () => new a.a.Store(Object.assign({
            strict: !1
        }, pt));

        function gt(t, e) {
            if (t.state && "function" != typeof t.state) {
                const e = Object.assign({}, t.state);
                t = Object.assign({}, t, {
                    state: () => e
                })
            }
            return t
        }

        function ft(t, e) {
            t = t.default || t;
            const n = e.replace(/\.(js|mjs)$/, "").split("/");
            let i = n[n.length - 1];
            if (t = "state" === i ? function(t, e) {
                    if ("function" != typeof t) {
                        const e = Object.assign({}, t);
                        return () => e
                    }
                    return gt(t)
                }(t) : gt(t), dt.includes(i)) {
                const e = i;
                return void bt(vt(pt, n, {
                    isProperty: !0
                }), t, e)
            }
            "index" === i && (n.pop(), i = n[n.length - 1]);
            const s = vt(pt, n);
            for (const e of dt) bt(s, t[e], e);
            !1 === t.namespaced && delete s.namespaced
        }

        function vt(t, e) {
            let {
                isProperty: n = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!e.length || n && 1 === e.length) return t;
            const i = e.shift();
            return t.modules[i] = t.modules[i] || {}, t.modules[i].namespaced = !0, t.modules[i].modules = t.modules[i].modules || {}, vt(t.modules[i], e, {
                isProperty: n
            })
        }

        function bt(t, e, n) {
            e && ("state" === n ? t.state = e || t.state : t[n] = Object.assign({}, t[n], e))
        }
        const yt = () => n.e(11).then(n.bind(null, 516)).then((t => Tn(t.default || t))),
            wt = () => Promise.resolve().then(n.bind(null, 257)).then((t => Tn(t.default || t))),
            _t = () => n.e(65).then(n.bind(null, 443)).then((t => Tn(t.default || t))),
            xt = () => n.e(68).then(n.bind(null, 687)).then((t => Tn(t.default || t))),
            $t = () => n.e(77).then(n.bind(null, 571)).then((t => Tn(t.default || t))),
            kt = () => n.e(84).then(n.bind(null, 476)).then((t => Tn(t.default || t))),
            Ot = () => Promise.resolve().then(n.bind(null, 260)).then((t => Tn(t.default || t))),
            Ct = () => Promise.resolve().then(n.bind(null, 369)).then((t => Tn(t.default || t))),
            jt = () => Promise.all([n.e(0), n.e(86)]).then(n.bind(null, 442)).then((t => Tn(t.default || t))),
            Tt = () => n.e(91).then(n.bind(null, 464)).then((t => Tn(t.default || t))),
            St = () => Promise.all([n.e(1), n.e(2), n.e(94)]).then(n.bind(null, 703)).then((t => Tn(t.default || t))),
            Mt = () => n.e(95).then(n.bind(null, 786)).then((t => Tn(t.default || t))),
            Pt = () => n.e(96).then(n.bind(null, 812)).then((t => Tn(t.default || t))),
            Lt = () => Promise.resolve().then(n.bind(null, 371)).then((t => Tn(t.default || t))),
            zt = () => n.e(0).then(n.bind(null, 447)).then((t => Tn(t.default || t))),
            It = () => Promise.resolve().then(n.bind(null, 113)).then((t => Tn(t.default || t))),
            Bt = () => Promise.resolve().then(n.bind(null, 189)).then((t => Tn(t.default || t))),
            Et = () => Promise.resolve().then(n.bind(null, 191)).then((t => Tn(t.default || t))),
            Rt = () => Promise.resolve().then(n.bind(null, 188)).then((t => Tn(t.default || t))),
            Vt = () => Promise.resolve().then(n.bind(null, 190)).then((t => Tn(t.default || t))),
            Ht = () => n.e(107).then(n.bind(null, 704)).then((t => Tn(t.default || t))),
            Dt = () => n.e(66).then(n.bind(null, 504)).then((t => Tn(t.default || t))),
            Nt = () => Promise.all([n.e(1), n.e(2), n.e(67)]).then(n.bind(null, 505)).then((t => Tn(t.default || t))),
            At = () => n.e(28).then(n.bind(null, 813)).then((t => Tn(t.default || t))),
            qt = () => Promise.all([n.e(1), n.e(3), n.e(4), n.e(2), n.e(29)]).then(n.bind(null, 699)).then((t => Tn(t.default || t))),
            Ft = () => n.e(30).then(n.bind(null, 567)).then((t => Tn(t.default || t))),
            Ut = () => n.e(31).then(n.bind(null, 519)).then((t => Tn(t.default || t))),
            Wt = () => n.e(32).then(n.bind(null, 814)).then((t => Tn(t.default || t))),
            Gt = () => Promise.all([n.e(1), n.e(2), n.e(33)]).then(n.bind(null, 815)).then((t => Tn(t.default || t))),
            Kt = () => Promise.all([n.e(1), n.e(3), n.e(4), n.e(2), n.e(34)]).then(n.bind(null, 816)).then((t => Tn(t.default || t))),
            Xt = () => n.e(35).then(n.bind(null, 462)).then((t => Tn(t.default || t))),
            Qt = () => n.e(36).then(n.bind(null, 503)).then((t => Tn(t.default || t))),
            Jt = () => n.e(37).then(n.bind(null, 694)).then((t => Tn(t.default || t))),
            Yt = () => Promise.all([n.e(1), n.e(2), n.e(38)]).then(n.bind(null, 817)).then((t => Tn(t.default || t))),
            Zt = () => n.e(39).then(n.bind(null, 702)).then((t => Tn(t.default || t))),
            te = () => n.e(40).then(n.bind(null, 818)).then((t => Tn(t.default || t))),
            ee = () => n.e(5).then(n.bind(null, 624)).then((t => Tn(t.default || t))),
            ne = () => n.e(41).then(n.bind(null, 465)).then((t => Tn(t.default || t))),
            ie = () => n.e(42).then(n.bind(null, 819)).then((t => Tn(t.default || t))),
            se = () => n.e(43).then(n.bind(null, 820)).then((t => Tn(t.default || t))),
            oe = () => n.e(44).then(n.bind(null, 686)).then((t => Tn(t.default || t))),
            ae = () => n.e(45).then(n.bind(null, 705)).then((t => Tn(t.default || t))),
            re = () => n.e(46).then(n.bind(null, 690)).then((t => Tn(t.default || t))),
            ce = () => Promise.all([n.e(3), n.e(47)]).then(n.bind(null, 821)).then((t => Tn(t.default || t))),
            le = () => n.e(48).then(n.bind(null, 566)).then((t => Tn(t.default || t))),
            ue = () => n.e(49).then(n.bind(null, 822)).then((t => Tn(t.default || t))),
            he = () => n.e(50).then(n.bind(null, 823)).then((t => Tn(t.default || t))),
            de = () => n.e(51).then(n.bind(null, 824)).then((t => Tn(t.default || t))),
            pe = () => n.e(52).then(n.bind(null, 825)).then((t => Tn(t.default || t))),
            me = () => n.e(53).then(n.bind(null, 693)).then((t => Tn(t.default || t))),
            ge = () => n.e(54).then(n.bind(null, 475)).then((t => Tn(t.default || t))),
            fe = () => Promise.all([n.e(1), n.e(2), n.e(55)]).then(n.bind(null, 826)).then((t => Tn(t.default || t))),
            ve = () => n.e(56).then(n.bind(null, 827)).then((t => Tn(t.default || t))),
            be = () => n.e(57).then(n.bind(null, 828)).then((t => Tn(t.default || t))),
            ye = () => n.e(58).then(n.bind(null, 695)).then((t => Tn(t.default || t))),
            we = () => n.e(59).then(n.bind(null, 829)).then((t => Tn(t.default || t))),
            _e = () => n.e(60).then(n.bind(null, 830)).then((t => Tn(t.default || t))),
            xe = () => n.e(61).then(n.bind(null, 831)).then((t => Tn(t.default || t))),
            $e = () => n.e(62).then(n.bind(null, 832)).then((t => Tn(t.default || t))),
            ke = () => Promise.all([n.e(1), n.e(2), n.e(63)]).then(n.bind(null, 833)).then((t => Tn(t.default || t))),
            Oe = () => Promise.all([n.e(1), n.e(2), n.e(64)]).then(n.bind(null, 700)).then((t => Tn(t.default || t))),
            Ce = () => n.e(69).then(n.bind(null, 683)).then((t => Tn(t.default || t))),
            je = () => n.e(70).then(n.bind(null, 834)).then((t => Tn(t.default || t))),
            Te = () => n.e(71).then(n.bind(null, 835)).then((t => Tn(t.default || t))),
            Se = () => n.e(72).then(n.bind(null, 710)).then((t => Tn(t.default || t))),
            Me = () => n.e(73).then(n.bind(null, 711)).then((t => Tn(t.default || t))),
            Pe = () => n.e(74).then(n.bind(null, 712)).then((t => Tn(t.default || t))),
            Le = () => n.e(75).then(n.bind(null, 713)).then((t => Tn(t.default || t))),
            ze = () => n.e(76).then(n.bind(null, 836)).then((t => Tn(t.default || t))),
            Ie = () => n.e(78).then(n.bind(null, 689)).then((t => Tn(t.default || t))),
            Be = () => n.e(85).then(n.bind(null, 692)).then((t => Tn(t.default || t))),
            Ee = () => n.e(87).then(n.bind(null, 565)).then((t => Tn(t.default || t))),
            Re = () => Promise.all([n.e(6), n.e(88)]).then(n.bind(null, 625)).then((t => Tn(t.default || t))),
            Ve = () => n.e(89).then(n.bind(null, 697)).then((t => Tn(t.default || t))),
            He = () => n.e(90).then(n.bind(null, 517)).then((t => Tn(t.default || t))),
            De = () => n.e(92).then(n.bind(null, 568)).then((t => Tn(t.default || t))),
            Ne = () => n.e(93).then(n.bind(null, 684)).then((t => Tn(t.default || t))),
            Ae = () => Promise.resolve().then(n.bind(null, 368)).then((t => Tn(t.default || t))),
            qe = () => n.e(97).then(n.bind(null, 468)).then((t => Tn(t.default || t))),
            Fe = () => n.e(98).then(n.bind(null, 706)).then((t => Tn(t.default || t))),
            Ue = () => n.e(99).then(n.bind(null, 709)).then((t => Tn(t.default || t))),
            We = () => n.e(100).then(n.bind(null, 487)).then((t => Tn(t.default || t))),
            Ge = () => n.e(101).then(n.bind(null, 708)).then((t => Tn(t.default || t))),
            Ke = () => n.e(102).then(n.bind(null, 467)).then((t => Tn(t.default || t))),
            Xe = () => n.e(103).then(n.bind(null, 837)).then((t => Tn(t.default || t))),
            Qe = () => n.e(104).then(n.bind(null, 838)).then((t => Tn(t.default || t))),
            Je = () => n.e(105).then(n.bind(null, 696)).then((t => Tn(t.default || t))),
            Ye = () => n.e(106).then(n.bind(null, 573)).then((t => Tn(t.default || t))),
            Ze = () => n.e(12).then(n.bind(null, 685)).then((t => Tn(t.default || t))),
            tn = () => Promise.resolve().then(n.bind(null, 72)).then((t => Tn(t.default || t))),
            en = () => Promise.resolve().then(n.bind(null, 111)).then((t => Tn(t.default || t))),
            nn = () => Promise.all([n.e(3), n.e(13)]).then(n.bind(null, 707)).then((t => Tn(t.default || t))),
            sn = () => n.e(14).then(n.bind(null, 688)).then((t => Tn(t.default || t))),
            on = () => Promise.all([n.e(3), n.e(4), n.e(15)]).then(n.bind(null, 520)).then((t => Tn(t.default || t))),
            an = () => n.e(16).then(n.bind(null, 453)).then((t => Tn(t.default || t))),
            rn = () => n.e(17).then(n.bind(null, 569)).then((t => Tn(t.default || t))),
            cn = () => n.e(18).then(n.bind(null, 466)).then((t => Tn(t.default || t))),
            ln = () => n.e(19).then(n.bind(null, 839)).then((t => Tn(t.default || t))),
            un = () => n.e(20).then(n.bind(null, 564)).then((t => Tn(t.default || t))),
            hn = () => Promise.resolve().then(n.bind(null, 74)).then((t => Tn(t.default || t))),
            dn = () => n.e(21).then(n.bind(null, 843)).then((t => Tn(t.default || t))),
            pn = () => n.e(22).then(n.bind(null, 698)).then((t => Tn(t.default || t))),
            mn = () => Promise.resolve().then(n.bind(null, 254)).then((t => Tn(t.default || t))),
            gn = () => Promise.resolve().then(n.bind(null, 71)).then((t => Tn(t.default || t))),
            fn = () => n.e(23).then(n.bind(null, 840)).then((t => Tn(t.default || t))),
            vn = () => n.e(24).then(n.bind(null, 841)).then((t => Tn(t.default || t))),
            bn = () => n.e(25).then(n.bind(null, 518)).then((t => Tn(t.default || t))),
            yn = () => Promise.all([n.e(4), n.e(26)]).then(n.bind(null, 572)).then((t => Tn(t.default || t))),
            wn = () => Promise.all([n.e(1), n.e(27)]).then(n.bind(null, 478)).then((t => Tn(t.default || t))),
            _n = () => n.e(79).then(n.bind(null, 521)).then((t => Tn(t.default || t))),
            xn = () => Promise.resolve().then(n.bind(null, 256)).then((t => Tn(t.default || t))),
            $n = () => Promise.resolve().then(n.bind(null, 370)).then((t => Tn(t.default || t))),
            kn = () => n.e(80).then(n.bind(null, 701)).then((t => Tn(t.default || t))),
            On = () => n.e(81).then(n.bind(null, 570)).then((t => Tn(t.default || t))),
            Cn = () => n.e(82).then(n.bind(null, 691)).then((t => Tn(t.default || t))),
            jn = () => n.e(83).then(n.bind(null, 842)).then((t => Tn(t.default || t)));

        function Tn(t) {
            if (!t || !t.functional) return t;
            const e = Array.isArray(t.props) ? t.props : Object.keys(t.props || {});
            return {
                render(n) {
                    const i = {},
                        s = {};
                    for (const t in this.$attrs) e.includes(t) ? s[t] = this.$attrs[t] : i[t] = this.$attrs[t];
                    return n(t, {
                        on: this.$listeners,
                        attrs: i,
                        props: s,
                        scopedSlots: this.$scopedSlots
                    }, this.$slots.default)
                }
            }
        }
        for (const t in i) o.a.component(t, i[t]), o.a.component("Lazy" + t, i[t]);
        var Sn = n(242),
            Mn = n.n(Sn);
        o.a.use(Mn.a);
        n(338);
        var Pn = n(53);
        const Ln = {
                COMPONENT_OPTIONS_KEY: "nuxtI18n",
                STRATEGIES: {
                    PREFIX: "prefix",
                    PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
                    PREFIX_AND_DEFAULT: "prefix_and_default",
                    NO_PREFIX: "no_prefix"
                },
                REDIRECT_ON_OPTIONS: {
                    ALL: "all",
                    ROOT: "root",
                    NO_PREFIX: "no prefix"
                }
            },
            zn = {
                isUniversalMode: !0,
                trailingSlash: !0
            },
            In = {
                vueI18n: {},
                vueI18nLoader: !1,
                locales: [{
                    code: "it",
                    craftId: 2,
                    name: "Italiano",
                    iso: "it-IT",
                    locale: "it",
                    file: "it.js"
                }, {
                    code: "en",
                    craftId: 1,
                    name: "English",
                    iso: "en-GB",
                    locale: "en",
                    file: "en.js"
                }, {
                    code: "ko",
                    craftId: 3,
                    name: "한국인",
                    iso: "ko-KR",
                    locale: "ko",
                    file: "ko.js"
                }],
                defaultLocale: "en",
                defaultDirection: "ltr",
                routesNameSeparator: "___",
                defaultLocaleRouteNameSuffix: "default",
                sortRoutes: !0,
                strategy: "prefix",
                lazy: !0,
                langDir: "langs/",
                rootRedirect: {
                    statusCode: 301,
                    path: "en/"
                },
                detectBrowserLanguage: {
                    alwaysRedirect: !1,
                    cookieAge: 365,
                    cookieCrossOrigin: !1,
                    cookieDomain: null,
                    cookieKey: "i18n_redirected",
                    cookieSecure: !1,
                    fallbackLocale: "",
                    redirectOn: "root",
                    useCookie: !0
                },
                differentDomains: !1,
                baseUrl: "https://www.primopiano.com",
                vuex: {
                    moduleName: "i18n",
                    syncRouteParams: !0
                },
                parsePages: !1,
                pages: {
                    index: {
                        it: "/",
                        en: "/",
                        ko: "/"
                    },
                    "kitchens/index": {
                        it: "/cucine",
                        en: "/kitchens",
                        ko: "/kitchens"
                    },
                    "kitchens/_category/index": {
                        it: "/cucine/:category",
                        en: "/kitchens/:category",
                        ko: "/kitchens/:category"
                    },
                    "kitchens/_category/_slug": {
                        it: "/cucine/:category/:slug",
                        en: "/kitchens/:category/:slug",
                        ko: "/kitchens/:category/:slug"
                    },
                    "products/index": {
                        it: "/prodotti",
                        en: "/prodotti",
                        ko: "/prodotti"
                    },
                    "products/_category/index": {
                        it: "/prodotti/:category",
                        en: "/prodotti/:category",
                        ko: "/prodotti/:category"
                    },
                    "products/_category/_subcategory/index": {
                        it: "/prodotti/:category/:subcategory",
                        en: "/prodotti/:category/:subcategory",
                        ko: "/prodotti/:category/:subcategory"
                    },
                    "products/_slug": {
                        it: "/prodotti/:slug",
                        en: "/prodotti/:slug",
                        ko: "/prodotti/:slug"
                    },
                    "showrooms/index": {
                        it: "/showrooms",
                        en: "/showrooms",
                        ko: "/showrooms"
                    },
                    "showrooms/_slug": {
                        it: "/showrooms/:slug",
                        en: "/showrooms/:slug",
                        ko: "/showrooms/:slug"
                    },
                    "showrooms/form/_id": {
                        it: "/showrooms/form/:id",
                        en: "/showrooms/form/:id",
                        ko: "/showrooms/form/:id"
                    },
                    "news/index": {
                        it: "/news",
                        en: "/news",
                        ko: "/news"
                    },
                    "news/_slug": {
                        it: "/news/:slug",
                        en: "/news/:slug",
                        ko: "/news/:slug"
                    },
                    "brand/work-in": {
                        it: "/brand/lavorare-in-primopiano",
                        en: "/brand/work-in",
                        ko: "/brand/work-in"
                    },
                    "brand/production": {
                        it: "/brand/produzione",
                        en: "/brand/production",
                        ko: "/brand/production"
                    },
                    "brand/social-commitment": {
                        it: "/brand/impegno-sociale",
                        en: "/brand/social-commitment",
                        ko: "/brand/social-commitment"
                    },
                    "social-commitment/_slug": {
                        it: "/impegno-sociale/:slug",
                        en: "/social-commitment/:slug",
                        ko: "/social-commitment/:slug"
                    },
                    services: {
                        it: "/servizi",
                        en: "/services",
                        ko: "/services"
                    },
                    "assistance/index": {
                        it: "/assistenza",
                        en: "/assistance",
                        ko: "/assistance"
                    },
                    "assistance/_slug": {
                        it: "/assistenza/:slug",
                        en: "/assistance/:slug",
                        ko: "/assistance/:slug"
                    },
                    appointment: {
                        it: "/richiedi-appuntamento",
                        en: "/appointment",
                        ko: "/appointment"
                    },
                    "jobs/index": {
                        it: "/lavora-con-noi",
                        en: "/jobs",
                        ko: "/jobs"
                    },
                    "jobs/_slug": {
                        it: "/lavora-con-noi/:slug",
                        en: "/jobs/:slug",
                        ko: "/jobs/:slug"
                    },
                    "kitchen-by-you/stories": {
                        it: "/kitchen-by-you/stories",
                        en: "/kitchen-by-you/stories",
                        ko: "/kitchen-by-you/stories"
                    },
                    "kitchen-by-you/stories/_slug": {
                        it: "/kitchen-by-you/stories/:slug",
                        en: "/kitchen-by-you/stories/:slug",
                        ko: "/kitchen-by-you/stories/:slug"
                    },
                    "administrative-office": {
                        it: "/segreteria",
                        en: "/administrative-office",
                        ko: "/administrative-office"
                    }
                },
                skipSettingLocaleOnNavigate: !1,
                onBeforeLanguageSwitch: () => {},
                onLanguageSwitched: () => null,
                normalizedLocales: [{
                    code: "it",
                    craftId: 2,
                    name: "Italiano",
                    iso: "it-IT",
                    locale: "it",
                    file: "it.js"
                }, {
                    code: "en",
                    craftId: 1,
                    name: "English",
                    iso: "en-GB",
                    locale: "en",
                    file: "en.js"
                }, {
                    code: "ko",
                    craftId: 3,
                    name: "한국인",
                    iso: "ko-KR",
                    locale: "ko",
                    file: "ko.js"
                }],
                localeCodes: ["it", "en", "ko"],
                additionalMessages: []
            },
            Bn = {
                "it.js": () => n.e(109).then(n.bind(null, 780)),
                "en.js": () => n.e(108).then(n.bind(null, 781)),
                "ko.js": () => n.e(110).then(n.bind(null, 782))
            };
        n(339);
        var En = n(108),
            Rn = n.n(En);

        function Vn(t, e) {
            const n = [],
                i = [];
            for (const e of t) {
                const {
                    code: t
                } = e, n = e.iso || t;
                i.push({
                    code: t,
                    iso: n
                })
            }
            for (const [t, s] of e.entries()) {
                const o = i.find((t => t.iso.toLowerCase() === s.toLowerCase()));
                if (o) {
                    n.push({
                        code: o.code,
                        score: 1 - t / e.length
                    });
                    break
                }
            }
            for (const [t, s] of e.entries()) {
                const o = s.split("-")[0].toLowerCase(),
                    a = i.find((t => t.iso.split("-")[0].toLowerCase() === o));
                if (a) {
                    n.push({
                        code: a.code,
                        score: .999 - t / e.length
                    });
                    break
                }
            }
            return n.length > 1 && n.sort(((t, e) => t.score === e.score ? e.code.length - t.code.length : e.score - t.score)), n.length ? n[0].code : void 0
        }

        function Hn(t) {
            return new RegExp(`^/(${t.join("|")})(?:/|$)`)
        }
        async function Dn(t, e) {
            const {
                app: n
            } = t, {
                i18n: i
            } = n;
            if (i.loadedLanguages || (i.loadedLanguages = []), !i.loadedLanguages.includes(e)) {
                const n = In.normalizedLocales.find((t => t.code === e));
                if (n) {
                    const {
                        file: s
                    } = n;
                    if (s) {
                        let n; {
                            const {
                                nuxtState: i
                            } = t;
                            i && i.__i18n && i.__i18n.langs[e] && (n = i.__i18n.langs[e], t.isDev && Bn[s]())
                        }
                        if (!n) try {
                            const i = await Bn[s]().then((t => t.default || t));
                            n = "function" == typeof i ? await Promise.resolve(i(t, e)) : i
                        } catch (t) {}
                        n && (i.setLocaleMessage(e, n), qn(i, In.additionalMessages, In.localeCodes, [e]), i.loadedLanguages.push(e))
                    }
                }
            }
        }

        function Nn(t, e, n, i) {
            let {
                differentDomains: s,
                normalizedLocales: o
            } = i;
            if ("function" == typeof t) return t(e);
            if (s && n) {
                const t = An(n, e.req, {
                    normalizedLocales: o
                });
                if (t) return t
            }
            return t
        }

        function An(t, e, n) {
            let {
                normalizedLocales: i
            } = n;
            const s = i.find((e => e.code === t));
            if (s && s.domain) {
                if (Object(Pn.hasProtocol)(s.domain)) return s.domain;
                let t;
                return t = window.location.protocol.split(":")[0], `${t}://${s.domain}`
            }
        }

        function qn(t, e, n, i) {
            const s = i || n;
            for (const n of e)
                for (const e of s) {
                    const i = t.getLocaleMessage(e);
                    t.mergeLocaleMessage(e, n[e]), t.mergeLocaleMessage(e, i)
                }
        }

        function Fn(t, e) {
            const n = Gn.call(this, t, e);
            return n ? n.route.redirectedFrom || n.route.fullPath : ""
        }

        function Un(t, e) {
            const n = Gn.call(this, t, e);
            return n ? n.route : void 0
        }

        function Wn(t, e) {
            const n = Gn.call(this, t, e);
            return n ? n.location : void 0
        }

        function Gn(t, e) {
            if (!t) return;
            const {
                i18n: n
            } = this;
            if (!(e = e || n.locale)) return;
            "string" == typeof t && (t = "/" === t[0] ? {
                path: t
            } : {
                name: t
            });
            let i = Object.assign({}, t);
            if (i.path && !i.name) {
                const t = this.router.resolve(i).route,
                    s = this.getRouteBaseName(t);
                if (s) i = {
                    name: Qn(s, e),
                    params: t.params,
                    query: t.query,
                    hash: t.hash
                };
                else {
                    !(e === In.defaultLocale && [Ln.STRATEGIES.PREFIX_EXCEPT_DEFAULT, Ln.STRATEGIES.PREFIX_AND_DEFAULT].includes(In.strategy) || In.strategy === Ln.STRATEGIES.NO_PREFIX || n.differentDomains) && (i.path = `/${e}${i.path}`), i.path = zn.trailingSlash ? Object(Pn.withTrailingSlash)(i.path, !0) : Object(Pn.withoutTrailingSlash)(i.path, !0)
                }
            } else {
                i.name || i.path || (i.name = this.getRouteBaseName()), i.name = Qn(i.name, e);
                const {
                    params: t
                } = i;
                t && void 0 === t[0] && t.pathMatch && (t[0] = t.pathMatch)
            }
            const s = this.router.resolve(i);
            return s.route.name ? s : this.router.resolve(t)
        }

        function Kn(t) {
            const e = this.getRouteBaseName();
            if (!e) return "";
            const {
                i18n: n,
                route: i,
                store: s
            } = this, {
                params: o,
                ...a
            } = i;
            let r = {};
            In.vuex && In.vuex.syncRouteParams && s && (r = s.getters[`${In.vuex.moduleName}/localeRouteParams`](t));
            const c = Object.assign({}, a, {
                name: e,
                params: { ...o,
                    ...r,
                    0: o.pathMatch
                }
            });
            let l = this.localePath(c, t);
            if (n.differentDomains) {
                const e = {
                        differentDomains: n.differentDomains,
                        normalizedLocales: In.normalizedLocales
                    },
                    i = An(t, this.req, e);
                i && (l = i + l)
            }
            return l
        }

        function Xn(t) {
            const e = void 0 !== t ? t : this.route;
            if (e && e.name) return e.name.split(In.routesNameSeparator)[0]
        }

        function Qn(t, e) {
            let n = t + (In.strategy === Ln.STRATEGIES.NO_PREFIX ? "" : In.routesNameSeparator + e);
            return e === In.defaultLocale && In.strategy === Ln.STRATEGIES.PREFIX_AND_DEFAULT && (n += In.routesNameSeparator + In.defaultLocaleRouteNameSuffix), n
        }
        n(66).a.nuxti18n = async t => {
            const {
                app: e,
                isHMR: n
            } = t;
            if (n) return;
            const [i, s, o] = await e.i18n.__onNavigate(t.route);
            if (i && s) {
                const e = o ? t.route.query : void 0;
                t.redirect(i, s, e)
            }
        };
        const Jn = function(t) {
                return function() {
                    const e = {
                        getRouteBaseName: this.getRouteBaseName,
                        i18n: this.$i18n,
                        localePath: this.localePath,
                        localeRoute: this.localeRoute,
                        localeLocation: this.localeLocation,
                        req: null,
                        route: this.$route,
                        router: this.$router,
                        store: this.$store
                    };
                    return t.call(e, ...arguments)
                }
            },
            Yn = function(t, e) {
                return function() {
                    const {
                        app: n,
                        req: i,
                        route: s,
                        store: o
                    } = t, a = {
                        getRouteBaseName: n.getRouteBaseName,
                        i18n: n.i18n,
                        localePath: n.localePath,
                        localeLocation: n.localeLocation,
                        localeRoute: n.localeRoute,
                        req: null,
                        route: s,
                        router: n.router,
                        store: o
                    };
                    return e.call(a, ...arguments)
                }
            },
            Zn = {
                install(t) {
                    t.mixin({
                        methods: {
                            localePath: Jn(Fn),
                            localeRoute: Jn(Un),
                            localeLocation: Jn(Wn),
                            switchLocalePath: Jn(Kn),
                            getRouteBaseName: Jn(Xn)
                        }
                    })
                }
            };
        var ti = t => {
                o.a.use(Zn);
                const {
                    app: e,
                    store: n
                } = t;
                e.localePath = t.localePath = Yn(t, Fn), e.localeRoute = t.localeRoute = Yn(t, Un), e.localeLocation = t.localeLocation = Yn(t, Wn), e.switchLocalePath = t.switchLocalePath = Yn(t, Kn), e.getRouteBaseName = t.getRouteBaseName = Yn(t, Xn), n && (n.localePath = e.localePath, n.localeRoute = e.localeRoute, n.localeLocation = e.localeLocation, n.switchLocalePath = e.switchLocalePath, n.getRouteBaseName = e.getRouteBaseName)
            },
            ei = n(109),
            ni = n(59);
        n(116), n(117), n(118), n(119), n(120), n(121), n(122), n(123), n(124), n(125), n(127), n(128), n(129);

        function ii() {
            let {
                addDirAttribute: t = !1,
                addSeoAttributes: e = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!this.$i18n) return {};
            const n = {
                    htmlAttrs: {},
                    link: [],
                    meta: []
                },
                i = this.$i18n.localeProperties,
                s = i.iso,
                o = i.dir || In.defaultDirection;
            if (t && (n.htmlAttrs.dir = o), e && (r.a.hasMetaInfo ? r.a.hasMetaInfo(this) : this._hasMetaInfo) && this.$i18n.locale && this.$i18n.locales) {
                s && (n.htmlAttrs.lang = s);
                const t = this.$i18n.locales;
                (function(t, e, n, i) {
                    const s = this.localeRoute({ ...this.$route,
                        name: this.getRouteBaseName()
                    });
                    if (s) {
                        let o = l(s.path, t);
                        const r = "boolean" != typeof i && i.canonicalQueries || [];
                        if (r.length) {
                            const t = s.query,
                                e = new URLSearchParams;
                            for (const n of r)
                                if (n in t) {
                                    const i = t[n];
                                    Array.isArray(i) ? i.forEach((t => e.append(n, t || ""))) : e.append(n, i || "")
                                }
                            const n = e.toString();
                            n && (o = `${o}?${n}`)
                        }
                        o === l(s.fullPath, t) && a.bind(this)(n, t, e), e.push({
                            hid: "i18n-can",
                            rel: "canonical",
                            href: o
                        })
                    }
                }).bind(this)(this.$i18n.__baseUrl, n.link, t, e),
                    function(t, e, n) {
                        const i = t && e;
                        if (!i) return;
                        n.push({
                            hid: "i18n-og",
                            property: "og:locale",
                            content: c(e)
                        })
                    }.bind(this)(i, s, n.meta),
                    function(t, e, n) {
                        const i = t.filter((t => {
                            const n = t.iso;
                            return n && n !== e
                        }));
                        if (i.length) {
                            const t = i.map((t => ({
                                hid: `i18n-og-alt-${t.iso}`,
                                property: "og:locale:alternate",
                                content: c(t.iso)
                            })));
                            n.push(...t)
                        }
                    }.bind(this)(t, s, n.meta)
            }

            function a(t, e, n) {
                if (In.strategy === Ln.STRATEGIES.NO_PREFIX) return;
                const i = new Map;
                for (const e of t) {
                    const {
                        iso: t,
                        disableHref: n
                    } = e;
                    n || t && i.set(t, e)
                }
                for (const [t, c] of i.entries()) {
                    var s, o, a, r;
                    const i = this.switchLocalePath(c.code);
                    ((null === (s = this.$route) || void 0 === s ? void 0 : s.params) && !Object.keys(null === (o = this.$route) || void 0 === o ? void 0 : o.params).length || In.vuex && (this.$i18n.locale === c.code || !(null === (a = this.$store) || void 0 === a || null === (r = a.state.i18n) || void 0 === r || !r.routeParams[c.code]))) && i && (c.countries ? c.countries.forEach((t => {
                        n.push({
                            hid: `i18n-alt-${t}`,
                            rel: "alternate",
                            href: l(i, e),
                            hreflang: t
                        })
                    })) : n.push({
                        hid: `i18n-alt-${t}`,
                        rel: "alternate",
                        href: l(i, e),
                        hreflang: t
                    }))
                }
                if (In.defaultLocale || In.xDefault) {
                    let t;
                    t = In.xDefault ? this.switchLocalePath(In.xDefault) : this.switchLocalePath(In.defaultLocale), t && n.push({
                        hid: "i18n-xd",
                        rel: "alternate",
                        href: l(t, e),
                        hreflang: "x-default"
                    })
                }
            }

            function c(t) {
                return (t || "").replace(/-/g, "_")
            }

            function l(t, e) {
                return t.match(/^https?:\/\//) ? t : e + t
            }
            return n
        }
        o.a.use(ei.a);
        var si = async t => {
            const {
                app: e,
                route: n,
                store: i,
                req: s,
                res: a,
                redirect: r
            } = t;
            In.vuex && i && function(t, e, n) {
                const i = {
                    namespaced: !0,
                    state: () => ({ ...e.syncRouteParams ? {
                            routeParams: {}
                        } : {}
                    }),
                    actions: { ...e.syncRouteParams ? {
                            setRouteParams(t, e) {
                                let {
                                    commit: n
                                } = t;
                                n("setRouteParams", e)
                            }
                        } : {}
                    },
                    mutations: { ...e.syncRouteParams ? {
                            setRouteParams(t, e) {
                                t.routeParams = e
                            }
                        } : {}
                    },
                    getters: { ...e.syncRouteParams ? {
                            localeRouteParams: t => {
                                let {
                                    routeParams: e
                                } = t;
                                return t => e && e[t] || {}
                            }
                        } : {}
                    }
                };
                t.registerModule(e.moduleName, i, {
                    preserveState: !!t.state[e.moduleName]
                })
            }(i, In.vuex, In.localeCodes);
            const {
                lazy: c
            } = In;
            c && (!0 === c || c.skipNuxtState);
            const {
                alwaysRedirect: l,
                fallbackLocale: u,
                redirectOn: h,
                useCookie: d,
                cookieAge: p,
                cookieKey: m,
                cookieDomain: g,
                cookieSecure: f,
                cookieCrossOrigin: v
            } = In.detectBrowserLanguage, b = function(t, e) {
                let {
                    routesNameSeparator: n,
                    defaultLocaleRouteNameSuffix: i
                } = e;
                const s = `(${t.join("|")})`,
                    o = new RegExp(`${n}${s}(?:${n}${i})?$`),
                    a = Hn(t);
                return t => {
                    if (t.name) {
                        const e = t.name.match(o);
                        if (e && e.length > 1) return e[1]
                    } else if (t.path) {
                        const e = t.path.match(a);
                        if (e && e.length > 1) return e[1]
                    }
                    return ""
                }
            }(In.localeCodes, {
                routesNameSeparator: In.routesNameSeparator,
                defaultLocaleRouteNameSuffix: In.defaultLocaleRouteNameSuffix
            }), y = async function(n) {
                let {
                    initialSetup: i = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!n) return;
                if (!i && e.i18n.differentDomains) return;
                const s = e.i18n.locale;
                if (n === s) return;
                const a = e.i18n.onBeforeLanguageSwitch(s, n, i, t);
                if (a && e.i18n.localeCodes.includes(a)) {
                    if (a === s) return;
                    n = a
                }
                if (d && e.i18n.setLocaleCookie(n), In.langDir) {
                    const i = e.i18n.fallbackLocale;
                    if (In.lazy) {
                        if (i) {
                            let e = [];
                            Array.isArray(i) ? e = i.map((e => Dn(t, e))) : "object" == typeof i ? (i[n] && (e = e.concat(i[n].map((e => Dn(t, e))))), i.default && (e = e.concat(i.default.map((e => Dn(t, e)))))) : n !== i && e.push(Dn(t, i)), await Promise.all(e)
                        }
                        await Dn(t, n)
                    } else await Promise.all(In.localeCodes.map((e => Dn(t, e))))
                } else qn(e.i18n, In.additionalMessages, In.localeCodes);
                e.i18n.locale = n;
                const c = In.normalizedLocales.find((t => t.code === n)) || {
                    code: n
                };
                for (const t of Object.keys(e.i18n.localeProperties)) e.i18n.localeProperties[t] = void 0;
                for (const [t, n] of Object.entries(c)) o.a.set(e.i18n.localeProperties, t, Object(ni.a)(n));
                const {
                    route: l
                } = t;
                let u = "";
                if (!e.i18n.differentDomains && In.strategy !== Ln.STRATEGIES.NO_PREFIX && (b(l) !== n || In.strategy === Ln.STRATEGIES.PREFIX_AND_DEFAULT && n === In.defaultLocale)) {
                    const t = e.switchLocalePath(n) || e.localePath(l.fullPath, n);
                    !t || Object(Pn.isEqual)(t, l.fullPath) || t.startsWith("//") || (u = t)
                }
                i ? e.i18n.__redirect = u : (e.i18n.onLanguageSwitched(s, n), u && r(u))
            }, w = async () => {
                e.i18n.__pendingLocale && (await e.i18n.setLocale(e.i18n.__pendingLocale), e.i18n.__resolvePendingLocalePromise(""), e.i18n.__pendingLocale = null)
            }, _ = async () => {
                e.i18n.__pendingLocale && await e.i18n.__pendingLocalePromise
            }, x = () => "undefined" != typeof navigator && navigator.languages ? Vn(In.normalizedLocales, navigator.languages) : s && void 0 !== s.headers["accept-language"] ? Vn(In.normalizedLocales, s.headers["accept-language"].split(",").map((t => t.split(";")[0]))) : void 0, $ = t => {
                if (In.strategy !== Ln.STRATEGIES.NO_PREFIX)
                    if (h === Ln.REDIRECT_ON_OPTIONS.ROOT) {
                        if ("/" !== t.path) return ""
                    } else if (h === Ln.REDIRECT_ON_OPTIONS.NO_PREFIX && !l && t.path.match(Hn(In.localeCodes))) return "";
                let n;
                d && (n = e.i18n.getLocaleCookie()) || (n = x());
                const i = n || u;
                return !i || d && !l && e.i18n.getLocaleCookie() || i === e.i18n.locale ? "" : i
            }, k = t => {
                t.locales = Object(ni.a)(In.locales), t.localeCodes = Object(ni.a)(In.localeCodes), t.localeProperties = o.a.observable(Object(ni.a)(In.normalizedLocales.find((e => e.code === t.locale)) || {
                    code: t.locale
                })), t.defaultLocale = In.defaultLocale, t.differentDomains = In.differentDomains, t.onBeforeLanguageSwitch = In.onBeforeLanguageSwitch, t.onLanguageSwitched = In.onLanguageSwitched, t.setLocaleCookie = t => function(t, e, n) {
                    let {
                        useCookie: i,
                        cookieAge: s,
                        cookieDomain: o,
                        cookieKey: a,
                        cookieSecure: r,
                        cookieCrossOrigin: c
                    } = n;
                    if (i) {
                        const e = {
                            expires: s,
                            path: "/",
                            sameSite: c ? "none" : "lax",
                            secure: c || r,
                            ...o ? {
                                domain: o
                            } : {}
                        };
                        Rn.a.set(a, t, e)
                    }
                }(t, 0, {
                    useCookie: d,
                    cookieAge: p,
                    cookieDomain: g,
                    cookieKey: m,
                    cookieSecure: f,
                    cookieCrossOrigin: v
                }), t.getLocaleCookie = () => function(t, e) {
                    let {
                        useCookie: n,
                        cookieKey: i,
                        localeCodes: s
                    } = e;
                    if (n) {
                        let t;
                        if (t = Rn.a.get(i), t && s.includes(t)) return t
                    }
                }(0, {
                    useCookie: d,
                    cookieKey: m,
                    localeCodes: In.localeCodes
                }), t.setLocale = t => y(t), t.getBrowserLocale = () => x(), t.finalizePendingLocaleChange = w, t.waitForPendingLocaleChange = _, t.__baseUrl = e.i18n.__baseUrl, t.__pendingLocale = e.i18n.__pendingLocale, t.__pendingLocalePromise = e.i18n.__pendingLocalePromise, t.__resolvePendingLocalePromise = e.i18n.__resolvePendingLocalePromise
            }, O = "function" == typeof In.vueI18n ? await In.vueI18n(t) : Object(ni.a)(In.vueI18n);
            if (O.componentInstanceCreatedListener = k, e.i18n = t.i18n = new ei.a(O), e.i18n.locale = "", e.i18n.fallbackLocale = O.fallbackLocale || "", i && (i.$i18n = e.i18n, i.state.localeDomains))
                for (const [t, e] of In.normalizedLocales.entries()) {
                    const n = i.state.localeDomains[e.code];
                    if (n) {
                        e.domain = n;
                        const i = In.locales[t];
                        "string" != typeof i && (i.domain = n)
                    }
                }
            k(e.i18n);
            const C = {
                differentDomains: In.differentDomains,
                normalizedLocales: In.normalizedLocales
            };
            e.i18n.__baseUrl = Nn(In.baseUrl, t, "", C), e.i18n.__onNavigate = async n => {
                if ("/" === n.path && In.rootRedirect) {
                    let t = 302,
                        e = In.rootRedirect;
                    return "string" != typeof In.rootRedirect && (t = In.rootRedirect.statusCode, e = In.rootRedirect.path), [t, `/${e}`, !0]
                }
                const i = e.i18n.__redirect;
                if (i) return e.i18n.__redirect = null, [302, i];
                const s = {
                    differentDomains: In.differentDomains,
                    normalizedLocales: In.normalizedLocales
                };
                e.i18n.__baseUrl = Nn(In.baseUrl, t, e.i18n.locale, s);
                const o = In.detectBrowserLanguage && $(n) || !In.differentDomains && In.strategy !== Ln.STRATEGIES.NO_PREFIX && b(n) || e.i18n.locale || e.i18n.defaultLocale || "";
                return In.skipSettingLocaleOnNavigate ? (e.i18n.__pendingLocale = o, e.i18n.__pendingLocalePromise = new Promise((t => {
                    e.i18n.__resolvePendingLocalePromise = t
                }))) : await e.i18n.setLocale(o), [null, null]
            }, o.a.prototype.$nuxtI18nHead = ii;
            let j = In.detectBrowserLanguage ? $(n) : "";
            if (!j)
                if (e.i18n.differentDomains) {
                    j = function(t, e) {
                        let n;
                        if (n = window.location.host, n) {
                            const e = t.find((t => t.domain === n));
                            if (e) return e.code
                        }
                        return ""
                    }(In.normalizedLocales)
                } else if (In.strategy !== Ln.STRATEGIES.NO_PREFIX) {
                j = b(n)
            }!j && d && (j = e.i18n.getLocaleCookie()), j || (j = e.i18n.defaultLocale || ""), await y(j, {
                initialSetup: !0
            })
        };
        const oi = "dataLayer",
            ai = "GTM-KWHT9HP";
        var ri = function(t, e) {
                const n = "GTM-KWHT9HP",
                    i = (t.$config && t.$config.gtm || {}).id,
                    s = function(t, e) {
                        return {
                            init() {
                                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ai;
                                !e[t] && window._gtm_inject && (window._gtm_inject(t), e[t] = !0)
                            },
                            push(t) {
                                window[oi] || (window[oi] = []), window[oi].push(t)
                            }
                        }
                    }(0, n ? {
                        [n]: !0
                    } : {});
                i && i !== n && s.init(i), t.$gtm = s, e("gtm", t.$gtm),
                    function(t) {
                        t.app.router.afterEach((e => {
                            setTimeout((() => {
                                t.$gtm.push(e.gtm || {
                                    routeName: e.name,
                                    pageType: "PageView",
                                    pageUrl: "" + e.fullPath,
                                    pageTitle: "undefined" != typeof document && document.title || "",
                                    event: "route-change"
                                })
                            }), 250)
                        }))
                    }(t)
            },
            ci = n(69),
            li = n.n(ci),
            ui = n(243);
        const hi = {
            setBaseURL(t) {
                this.defaults.baseURL = t
            },
            setHeader(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common";
                for (const i of Array.isArray(n) ? n : [n]) e ? this.defaults.headers[i][t] = e : delete this.defaults.headers[i][t]
            },
            setToken(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common";
                const i = t ? (e ? e + " " : "") + t : null;
                this.setHeader("Authorization", i, n)
            },
            onRequest(t) {
                this.interceptors.request.use((e => t(e) || e))
            },
            onResponse(t) {
                this.interceptors.response.use((e => t(e) || e))
            },
            onRequestError(t) {
                this.interceptors.request.use(void 0, (e => t(e) || Promise.reject(e)))
            },
            onResponseError(t) {
                this.interceptors.response.use(void 0, (e => t(e) || Promise.reject(e)))
            },
            onError(t) {
                this.onRequestError(t), this.onResponseError(t)
            },
            create(t) {
                return di(Object(ui.a)(t, this.defaults))
            }
        };
        for (const t of ["request", "delete", "get", "head", "options", "post", "put", "patch"]) hi["$" + t] = function() {
            return this[t].apply(this, arguments).then((t => t && t.data))
        };
        const di = t => {
                const e = li.a.create(t);
                return e.CancelToken = li.a.CancelToken, e.isCancel = li.a.isCancel, (t => {
                    for (const e in hi) t[e] = hi[e].bind(t)
                })(e), e.onRequest((t => {
                    t.headers = { ...e.defaults.headers.common,
                        ...t.headers
                    }
                })), pi(e), e
            },
            pi = t => {
                const e = {
                        finish: () => {},
                        start: () => {},
                        fail: () => {},
                        set: () => {}
                    },
                    n = () => {
                        const t = "undefined" != typeof window && window.$nuxt;
                        return t && t.$loading && t.$loading.set ? t.$loading : e
                    };
                let i = 0;
                t.onRequest((t => {
                    t && !1 === t.progress || i++
                })), t.onResponse((t => {
                    t && t.config && !1 === t.config.progress || (i--, i <= 0 && (i = 0, n().finish()))
                })), t.onError((t => {
                    t && t.config && !1 === t.config.progress || (i--, li.a.isCancel(t) ? i <= 0 && (i = 0, n().finish()) : (n().fail(), n().finish()))
                }));
                const s = t => {
                    if (!i || !t.total) return;
                    const e = 100 * t.loaded / (t.total * i);
                    n().set(Math.min(100, e))
                };
                t.defaults.onUploadProgress = s, t.defaults.onDownloadProgress = s
            };
        var mi = (t, e) => {
                const n = t.$config && t.$config.axios || {},
                    i = n.browserBaseURL || n.browserBaseUrl || n.baseURL || n.baseUrl || "/";
                const s = di({
                    baseURL: i,
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        },
                        delete: {},
                        get: {},
                        head: {},
                        post: {},
                        put: {},
                        patch: {},
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                });
                t.$axios = s, e("axios", s)
            },
            gi = n(244),
            fi = n(249);
        var vi = (t, e) => {
                const n = {
                        includeNodeModules: !1,
                        useFetchPolyfill: !1,
                        options: {},
                        clients: {
                            default: {
                                endpoint: "https://api.primopiano.com/api"
                            }
                        }
                    },
                    i = Object.entries(n.clients).reduce(((e, i) => {
                        let [s, o] = i;
                        const a = t.$config && t.$config.graphql && t.$config.graphql.clients && t.$config.graphql.clients[s] || {},
                            r = Object(fi.a)([n, o, a]);
                        return { ...e,
                            [s]: new gi.GraphQLClient(r.endpoint, r.options)
                        }
                    }), {});
                t.$graphql = i, e("graphql", i)
            },
            bi = n(110),
            yi = n.n(bi);

        function wi(t, e, n) {
            return t.find((t => n ? t[e] === n : t[e]))
        }
        var _i = n(245),
            xi = function(t) {
                let {
                    app: e
                } = t;
                ! function(t, e) {
                    if ("function" != typeof t)
                        for (const n in e) {
                            const i = e[n];
                            if (Array.isArray(i)) {
                                t[n] = t[n] || [];
                                for (const e of i) e.hid && wi(t[n], "hid", e.hid) || e.name && wi(t[n], "name", e.name) || t[n].push(e)
                            } else if ("object" == typeof i) {
                                t[n] = t[n] || {};
                                for (const e in i) t[n][e] = i[e]
                            } else void 0 === t[n] && (t[n] = i)
                        }
                }(e.head, _i)
            },
            $i = async function(t, e) {
                const n = {
                    "64x64": "/_nuxt/icons/icon_64x64.89c0ee.png",
                    "120x120": "/_nuxt/icons/icon_120x120.89c0ee.png",
                    "144x144": "/_nuxt/icons/icon_144x144.89c0ee.png",
                    "152x152": "/_nuxt/icons/icon_152x152.89c0ee.png",
                    "192x192": "/_nuxt/icons/icon_192x192.89c0ee.png",
                    "384x384": "/_nuxt/icons/icon_384x384.89c0ee.png",
                    "512x512": "/_nuxt/icons/icon_512x512.89c0ee.png",
                    ipad_1536x2048: "/_nuxt/icons/splash_ipad_1536x2048.89c0ee.png",
                    ipadpro9_1536x2048: "/_nuxt/icons/splash_ipadpro9_1536x2048.89c0ee.png",
                    ipadpro10_1668x2224: "/_nuxt/icons/splash_ipadpro10_1668x2224.89c0ee.png",
                    ipadpro12_2048x2732: "/_nuxt/icons/splash_ipadpro12_2048x2732.89c0ee.png",
                    iphonese_640x1136: "/_nuxt/icons/splash_iphonese_640x1136.89c0ee.png",
                    iphone6_50x1334: "/_nuxt/icons/splash_iphone6_50x1334.89c0ee.png",
                    iphoneplus_1080x1920: "/_nuxt/icons/splash_iphoneplus_1080x1920.89c0ee.png",
                    iphonex_1125x2436: "/_nuxt/icons/splash_iphonex_1125x2436.89c0ee.png",
                    iphonexr_828x1792: "/_nuxt/icons/splash_iphonexr_828x1792.89c0ee.png",
                    iphonexsmax_1242x2688: "/_nuxt/icons/splash_iphonexsmax_1242x2688.89c0ee.png"
                };
                e("icon", (t => n[t + "x" + t] || ""))
            };
        const ki = {
                assistance: {
                    name: "assistance"
                },
                assistanceItem: {
                    name: "assistance-slug",
                    params: {
                        slug: "slug"
                    }
                },
                identity: {
                    name: "brand-identity"
                },
                production: {
                    name: "brand-production"
                },
                workIn: {
                    name: "brand-work-in"
                },
                socialCommitment: {
                    name: "brand-social-commitment"
                },
                socialCommitmentItem: {
                    name: "social-commitment-slug",
                    params: {
                        slug: "slug"
                    }
                },
                privacy: {
                    name: "privacy"
                },
                index: {
                    name: "index"
                },
                servicesIndex: {
                    name: "services"
                },
                contract: {
                    name: "contract"
                },
                contractItem: {
                    name: "contract-slug",
                    params: {
                        slug: "slug"
                    }
                },
                kitchensIndex: {
                    name: "kitchens"
                },
                kitchens: {
                    name: "kitchens-category-slug",
                    params: {
                        category: "category",
                        slug: "slug"
                    }
                },
                news: {
                    name: "news-slug",
                    params: {
                        slug: "slug"
                    }
                },
                newsIndex: {
                    name: "news"
                },
                jobs: {
                    name: "jobs-slug",
                    params: {
                        slug: "slug"
                    }
                },
                jobsIndex: {
                    name: "jobs"
                },
                storiesIndex: {
                    name: "kitchen-by-you-stories"
                },
                stories: {
                    name: "kitchen-by-you-stories-slug",
                    params: {
                        slug: "slug"
                    }
                },
                concept: {
                    name: "kitchen-by-you-concept"
                },
                showroomsIndex: {
                    name: "showrooms"
                },
                showrooms: {
                    name: "showrooms-slug",
                    params: {
                        slug: "slug"
                    }
                }
            },
            Oi = (t, e) => {
                const n = ki[e];
                return Object.keys(n.params).reduce(((e, i) => (e[i] = t[n.params[i]], e)), {})
            },
            Ci = (t, e) => {
                const n = ki[e];
                return Object.keys(n.query).reduce(((e, i) => (e[i] = t[n.query[i]], e)), {})
            };
        var ji = (t, e) => {
                let {
                    app: n
                } = t;
                const i = new o.a;
                o.a.prototype.$flushQueue = Q.e, o.a.prototype.$flushQueueDeep = Q.f, e("bus", i), e("delocalize", Q.d), e("exists", (t => t && !(null == t || !t.length))), e("getSingle", (t => Array.isArray(t) && t.length ? t[0] : null)), e("routeMatcher", (t => (t => {
                    if (!t.section) return "";
                    const e = ki[t.section];
                    return e ? { ...e,
                        ...e.params ? {
                            params: Oi(t, t.section)
                        } : {},
                        ...e.query ? {
                            query: Ci(t, t.section)
                        } : {}
                    } : "/"
                })(t)))
            },
            Ti = t => {
                let {
                    app: e
                } = t;
                const {
                    $bus: n,
                    i18n: i
                } = e
            },
            Si = n(246);
        o.a.directive("intersect", Si.a);
        var Mi = n(247),
            Pi = n.n(Mi);
        o.a.use(Pi.a);
        var Li = (t, e) => {
                let {
                    $graphql: n,
                    app: i
                } = t;
                const s = async (t, e) => {
                    const s = { ...e,
                        site: null != e && e.site ? null == e ? void 0 : e.site : i.i18n.locale
                    };
                    try {
                        const e = await n.default.request(t, s);
                        if ("errors" in e) throw new Q.a(500, "Internal Server Error", e);
                        return e
                    } catch (t) {
                        var o, a;
                        const e = null !== (o = null == t ? void 0 : t.statusCode) && void 0 !== o ? o : 400,
                            n = null !== (a = null == t ? void 0 : t.message) && void 0 !== a ? a : "Bad Request";
                        throw new Q.a(e, n)
                    }
                };
                e("query", s), e("mutate", s)
            },
            zi = n(186),
            Ii = n.n(zi);
        const Bi = () => {
            const t = window.innerWidth;
            let e = null,
                n = null;
            return e = t < 768 ? "mobile" : t < 1024 ? "tablet" : t < 1280 ? "medium" : t < 1440 ? "large" : t < 1920 ? "xlarge" : "huge", n = t < 1024, {
                iw: t,
                ih: window.innerHeight,
                bp: e,
                mobile: n
            }
        };
        var Ei = t => {
                let {
                    app: e,
                    store: n
                } = t; {
                    const {
                        iw: t,
                        ih: i,
                        bp: s,
                        mobile: o
                    } = Bi();
                    n.commit("layout/setBreakpoint", s), n.commit("layout/setMobileState", o), n.commit("layout/setSizes", {
                        width: t,
                        height: i
                    }), window.addEventListener("resize", Ii()((function() {
                        const {
                            iw: t,
                            ih: i,
                            bp: s,
                            mobile: o
                        } = Bi();
                        n.commit("layout/setBreakpoint", s), n.commit("layout/setMobileState", o), n.commit("layout/setSizes", {
                            width: t,
                            height: i
                        }), e.$bus.$emit("layout:resize")
                    }), 150))
                }
            },
            Ri = n(31),
            Vi = n(60),
            Hi = [{
                code: "it",
                craftId: 2,
                name: "Italiano",
                iso: "it-IT",
                locale: "it",
                file: "it.js"
            }, {
                code: "en",
                craftId: 1,
                name: "English",
                iso: "en-GB",
                locale: "en",
                file: "en.js"
            }, {
                code: "ko",
                craftId: 3,
                name: "한국인",
                iso: "ko-KR",
                locale: "ko",
                file: "ko.js"
            }],
            Di = async t => {
                let {
                    app: e
                } = t;
                Object(Ri.d)("eager"), Object(Ri.b)("required", Vi.e), Object(Ri.b)("confirmed", Vi.a), Object(Ri.b)("email", Vi.b), Object(Ri.b)("numeric", Vi.d), Object(Ri.b)("min", Vi.c);
                const i = Hi.map((async t => [t.code, await n(367)(`./${t.code}.json`)])),
                    s = Object.fromEntries(await Promise.all(i));
                Object(Ri.c)(s), e.$bus.$on("language:switched", ((t, e) => Object(Ri.c)(e))), Object(Ri.c)(e.i18n.locale)
            },
            Ni = n(104),
            Ai = n(103),
            qi = (t, e) => {
                let {
                    app: n,
                    store: i,
                    $axios: s,
                    $config: o
                } = t;
                const a = {
                    it: Ai,
                    en: Ni
                };
                n.i18n.onBeforeLanguageSwitch = (t, e) => {
                    Object(Ri.c)(e, a[e])
                }, n.i18n.onLanguageSwitched = async t => {}
            },
            Fi = n(70);
        K.a.registerPlugin(Fi.a);
        var Ui = t => {
                let {
                    app: e
                } = t;
                Fi.a.config({
                    limitCallbacks: !0,
                    ignoreMobileResize: !0
                }), e.$bus.$scrollTrigger = Fi.a, e.$bus.$on("scrolltrigger:refresh", (t => {
                    Fi.a.refresh(t)
                })), e.$bus.$emit("scrolltrigger:init")
            },
            Wi = n(85);
        K.a.registerPlugin(Wi.a);
        const Gi = function(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = arguments.length > 3 ? arguments[3] : void 0;
            const s = Object(Q.p)("p", t);
            null != s && s.length ? s.forEach((t => Gi(t, e, n, i))) : (i.context.$Split = new Wi.a(t, {
                type: e,
                linesClass: "s-line",
                wordsClass: "s-word",
                charsClass: "s-char"
            }), n && (i.context.$Split = new Wi.a(t, {
                type: "lines",
                linesClass: "words,chars" === e ? "s-line-wr s-line-wr--unwrapped" : "s-line-wr"
            })))
        };
        var Ki = () => {
                o.a.directive("split", {
                    inserted: async function(t, e, n) {
                        if (!1 === e.value) return;
                        const i = e.modifiers.lines ? "lines" : e.modifiers.words ? "words" : "chars";
                        await n.context.$nextTick(), Gi(t, i, e.modifiers.double, n)
                    },
                    unbind(t, e, n) {
                        n.context._splitWatcher && n.context._splitWatcher()
                    }
                })
            },
            Xi = t => {
                t.store.dispatch("nuxtClientInit", t)
            };
        o.a.component(l.a.name, l.a), o.a.component(h.a.name, { ...h.a,
            render: (t, e) => (h.a._warned || (h.a._warned = !0), h.a.render(t, e))
        }), o.a.component(U.name, U), o.a.component("NChild", U), o.a.component(et.name, et), Object.defineProperty(o.a.prototype, "$nuxt", {
            get() {
                const t = this.$root ? this.$root.$options.$nuxt : null;
                return t || "undefined" == typeof window ? t : window.$nuxt
            },
            configurable: !0
        }), o.a.use(r.a, {
            keyName: "head",
            attribute: "data-n-head",
            ssrAttribute: "data-n-head-ssr",
            tagIDKeyName: "hid"
        });
        const Qi = {
                name: "page",
                mode: "out-in",
                appear: !1,
                appearClass: "appear",
                appearActiveClass: "appear-active",
                appearToClass: "appear-to"
            },
            Ji = a.a.Store.prototype.registerModule;

        function Yi(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const i = Array.isArray(t) ? !!t.reduce(((t, e) => t && t[e]), this.state) : t in this.state;
            return Ji.call(this, t, e, {
                preserveState: i,
                ...n
            })
        }
        async function Zi(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const n = mt(t),
                i = await
            function(t, e) {
                const n = e._app && e._app.basePath || F.base,
                    i = new d.a({ ...F,
                        base: n
                    }),
                    s = i.push;
                i.push = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : q,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return s.call(this, t, e, n)
                };
                const o = i.resolve.bind(i);
                return i.resolve = (t, e, n) => ("string" == typeof t && (t = Object(p.c)(t)), o(t, e, n)), i
            }(0, e);
            n.$router = i, n.registerModule = Yi;
            const s = {
                head: {
                    titleTemplate: "%s",
                    title: "Primopiano cucine",
                    meta: [{
                        charset: "utf-8"
                    }, {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }, {
                        hid: "application-name",
                        property: "application-name",
                        name: "application-name",
                        content: "Primopiano cucine"
                    }, {
                        hid: "theme-color",
                        property: "theme-color",
                        name: "theme-color",
                        content: "#1f1f1a"
                    }, {
                        hid: "format-detection",
                        property: "format-detection",
                        name: "format-detection",
                        content: "telephone=no"
                    }, {
                        hid: "msapplication-TileColor",
                        name: "msapplication-TileColor",
                        content: "#1f1f1a"
                    }, {
                        hid: "msapplication-config",
                        name: "msapplication-config",
                        content: "/favicon/browserconfig.xml"
                    }, {
                        hid: "msapplication-TileImage",
                        name: "msapplication-TileImage",
                        content: "/favicon/mstile-144x144.png"
                    }, {
                        hid: "og:site_name",
                        name: "og:site_name",
                        content: "Primopiano cucine"
                    }, {
                        hid: "og:image:width",
                        name: "og:image:width",
                        content: "1200"
                    }, {
                        hid: "og:image:height",
                        name: "og:image:height",
                        content: "630"
                    }, {
                        hid: "og:image:type",
                        name: "og:image:type",
                        content: "image/jpeg"
                    }, {
                        hid: "article:publisher",
                        name: "article:publisher",
                        content: "https://www.facebook.com/PRIMOPIANOcucine"
                    }],
                    link: [{
                        hid: "icon",
                        rel: "icon",
                        href: "/favicon.ico"
                    }, {
                        hid: "icon-svg",
                        rel: "icon",
                        href: "/favicon.svg",
                        type: "image/svg+xml"
                    }, {
                        hid: "icon-16",
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicon/favicon-32x32.png"
                    }, {
                        hid: "icon-32",
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon/favicon-16x16.png"
                    }, {
                        hid: "apple-touch-icon",
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/favicon/apple-touch-icon.png"
                    }, {
                        hid: "gtm-preconnect",
                        rel: "preconnect",
                        href: void 0
                    }],
                    script: [{
                        hid: "polyfillio",
                        crossorigin: "anonymous",
                        src: "https://polyfill.io/v3/polyfill.min.js"
                    }, {
                        hid: "hubspot",
                        crossorigin: "anonymous",
                        src: "https://js.hsforms.net/forms/v2.js"
                    }, {
                        hid: "gtm-script",
                        innerHTML: "if(!window._gtm_init){window._gtm_init=1;(function(w,n,d,m,e,p){w[d]=(w[d]==1||n[d]=='yes'||n[d]==1||n[m]==1||(w[e]&&w[e][p]&&w[e][p]()))?1:0})(window,navigator,'doNotTrack','msDoNotTrack','external','msTrackingProtectionEnabled');(function(w,d,s,l,x,y){w[x]={};w._gtm_inject=function(i){if(w.doNotTrack||w[x][i])return;w[x][i]=1;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);};w[y]('GTM-KWHT9HP')})(window,document,'script','dataLayer','_gtm_ids','_gtm_inject')}"
                    }],
                    style: [],
                    noscript: [{
                        hid: "gtm-noscript",
                        pbody: !0,
                        innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KWHT9HP&" height="0" width="0" style="display:none;visibility:hidden" title="gtm"></iframe>'
                    }],
                    __dangerouslyDisableSanitizersByTagID: {
                        "gtm-script": ["innerHTML"],
                        "gtm-noscript": ["innerHTML"]
                    }
                },
                store: n,
                router: i,
                nuxt: {
                    defaultTransition: Qi,
                    transitions: [Qi],
                    setTransitions(t) {
                        return Array.isArray(t) || (t = [t]), t = t.map((t => t = t ? "string" == typeof t ? Object.assign({}, Qi, {
                            name: t
                        }) : Object.assign({}, Qi, t) : Qi)), this.$options.nuxt.transitions = t, t
                    },
                    err: null,
                    dateErr: null,
                    error(e) {
                        e = e || null, s.context._errored = Boolean(e), e = e ? Object(m.p)(e) : null;
                        let n = s.nuxt;
                        return this && (n = this.nuxt || this.$options.nuxt), n.dateErr = Date.now(), n.err = e, t && (t.nuxt.error = e), e
                    }
                },
                ...ht
            };
            n.app = s;
            const a = t ? t.next : t => s.router.push(t);
            let r;
            if (t) r = i.resolve(t.url).route;
            else {
                const t = Object(m.f)(i.options.base, i.options.mode);
                r = i.resolve(t).route
            }

            function c(t, e) {
                if (!t) throw new Error("inject(key, value) has no key provided");
                if (void 0 === e) throw new Error(`inject('${t}', value) has no value provided`);
                s[t = "$" + t] = e, s.context[t] || (s.context[t] = e), n[t] = s[t];
                const i = "__nuxt_" + t + "_installed__";
                o.a[i] || (o.a[i] = !0, o.a.use((() => {
                    Object.prototype.hasOwnProperty.call(o.a.prototype, t) || Object.defineProperty(o.a.prototype, t, {
                        get() {
                            return this.$root.$options[t]
                        }
                    })
                })))
            }
            return await Object(m.t)(s, {
                store: n,
                route: r,
                next: a,
                error: s.nuxt.error.bind(s),
                payload: t ? t.payload : void 0,
                req: t ? t.req : void 0,
                res: t ? t.res : void 0,
                beforeRenderFns: t ? t.beforeRenderFns : void 0,
                beforeSerializeFns: t ? t.beforeSerializeFns : void 0,
                ssrContext: t
            }), c("config", e), window.__NUXT__ && window.__NUXT__.state && n.replaceState(window.__NUXT__.state), "function" == typeof ti && await ti(s.context, c), "function" == typeof si && await si(s.context, c), "function" == typeof ri && await ri(s.context, c), "function" == typeof mi && await mi(s.context, c), "function" == typeof vi && await vi(s.context, c), "function" == typeof yi.a && await yi()(s.context, c), "function" == typeof xi && await xi(s.context, c), "function" == typeof $i && await $i(s.context, c), "function" == typeof ji && await ji(s.context, c), "function" == typeof Ti && await Ti(s.context, c), "function" == typeof Li && await Li(s.context, c), "function" == typeof Ei && await Ei(s.context, c), "function" == typeof Di && await Di(s.context, c), "function" == typeof qi && await qi(s.context, c), "function" == typeof Ui && await Ui(s.context, c), "function" == typeof Ki && await Ki(s.context, c), "function" == typeof Xi && await Xi(s.context, c), await new Promise(((t, e) => {
                {
                    const {
                        route: e
                    } = i.resolve(s.context.route.fullPath);
                    if (!e.matched.length) return t()
                }
                i.replace(s.context.route.fullPath, t, (n => {
                    if (!n._isRouter) return e(n);
                    if (2 !== n.type) return t();
                    const o = i.afterEach((async (e, n) => {
                        s.context.route = await Object(m.j)(e), s.context.params = e.params || {}, s.context.query = e.query || {}, o(), t()
                    }))
                }))
            })), {
                store: n,
                app: s,
                router: i
            }
        }
    }, , , , , , , , function(t, e, n) {
        "use strict";
        n.d(e, "g", (function() {
            return r
        })), n.d(e, "c", (function() {
            return c
        })), n.d(e, "e", (function() {
            return l
        })), n.d(e, "f", (function() {
            return u
        })), n.d(e, "b", (function() {
            return h
        })), n.d(e, "a", (function() {
            return d
        })), n.d(e, "d", (function() {
            return p
        }));
        var i = n(4),
            s = n(6);
        const o = "--clip-1,--clip-2,--clip-3,--clip-4,overflow,position,backgroundColor,opacity,visibility,transformOrigin,scale,width,clipPath,position,zIndex,transform,top,left,right",
            a = 1.2,
            r = function(t) {
                let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                const n = Object(s.o)(".page-container", t),
                    o = Object(s.o)(".page-overlay", t);
                i.b.set(t, {
                    "--clip-3": `${window.innerHeight}px`
                }), i.b.set(t, {
                    "--clip-4": `${window.innerHeight}px`
                }), i.b.set(o, {
                    visibility: "inherit",
                    opacity: .8
                }), i.b.set(t, {
                    position: "fixed",
                    left: 0,
                    top: 0,
                    zIndex: 2,
                    clipPath: "polygon(0 var(--clip-3), 100% var(--clip-4), 100% 100%, 0% 100%)",
                    width: "calc(100% - var(--scrollbar-width))",
                    backgroundColor: "#fff"
                }), e && i.b.set(n, {
                    transformOrigin: "bottom",
                    scale: 1.2,
                    yPercent: 25
                })
            },
            c = function(t) {
                return new Promise((e => {
                    const n = Object(s.o)(".page-container", t),
                        r = Object(s.o)(".page-overlay", t);
                    i.b.timeline({
                        defaults: {
                            duration: a
                        },
                        onComplete: function() {
                            i.b.set([t, n, r], {
                                clearProps: o
                            }), e()
                        }
                    }).to(t, {
                        "--clip-3": 0,
                        ease: "power2.out"
                    }, "start").to(t, {
                        "--clip-4": 0,
                        ease: "power2.out"
                    }, "start+=0.15").to(r, {
                        opacity: 0
                    }, "start").to(n, {
                        scale: 1,
                        yPercent: 0,
                        ease: "power1.out"
                    }, "start")
                }))
            },
            l = function(t) {
                const e = Object(s.o)(".page-overlay", t),
                    n = Object(s.o)(".page-container", t);
                return i.b.set(n, {
                    transformOrigin: "bottom"
                }), new Promise((s => {
                    i.b.timeline({
                        defaults: {
                            duration: a
                        },
                        onComplete: function() {
                            i.b.set(t, {
                                clearProps: o
                            }), s()
                        }
                    }).to(e, {
                        opacity: .8,
                        duration: .6
                    }, "start").to(n, {
                        scale: 1.2,
                        ease: "none"
                    }, "start+=0.20")
                }))
            },
            u = function(t) {
                const e = Object(s.o)(".page-container", t),
                    n = Object(s.o)(".page-overlay", t);
                i.b.set(t, {
                    "--clip-3": "100%"
                }), i.b.set(t, {
                    "--clip-4": "100%"
                }), i.b.set(n, {
                    visibility: "inherit",
                    opacity: .8
                }), i.b.set(t, {
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "calc(100% - var(--scrollbar-width))",
                    zIndex: 2,
                    clipPath: "polygon(var(--clip-3) 0%, 100% 0%, 100% 100%, var(--clip-4) 100%)",
                    backgroundColor: "#fff",
                    overflow: "hidden"
                }), i.b.set(e, {
                    transformOrigin: "top left",
                    scale: 1.3,
                    xPercent: 50
                })
            },
            h = function(t) {
                return new Promise((e => {
                    const n = Object(s.o)(".page-container", t),
                        r = Object(s.o)(".page-overlay", t);
                    i.b.timeline({
                        defaults: {
                            duration: a
                        },
                        onComplete: () => {
                            i.b.set([t, n, r], {
                                clearProps: o
                            }), e()
                        }
                    }).to(t, {
                        "--clip-3": 0,
                        ease: "power2.out"
                    }, "start").to(t, {
                        "--clip-4": 0,
                        ease: "power2.out"
                    }, "start+=" + a / 3.5).to(r, {
                        opacity: 0
                    }, "start").to(n, {
                        scale: 1,
                        xPercent: 0,
                        ease: "power2.out"
                    }, "start")
                }))
            },
            d = function(t) {
                i.b.set(t, {
                    "--clip-1": "100%"
                }), i.b.set(t, {
                    "--clip-2": "100%"
                });
                const e = Object(s.o)(".page-overlay", t),
                    n = Object(s.o)(".page-container", t);
                i.b.set(e, {
                    visibility: "inherit",
                    opacity: 0
                }), i.b.set(t, {
                    zIndex: 1,
                    position: "relative"
                }), i.b.set(n, {
                    transformOrigin: "right"
                })
            },
            p = function(t) {
                const e = Object(s.o)(".page-overlay", t),
                    n = Object(s.o)(".page-container", t);
                return new Promise((s => {
                    i.b.timeline({
                        defaults: {
                            duration: a
                        }
                    }).to(t, {
                        xPercent: -20,
                        ease: "power1.in"
                    }, "start+=" + a / 3.5).to(e, {
                        opacity: .8,
                        duration: .6
                    }, "start").to(n, {
                        scale: 1.1,
                        ease: "none"
                    }, "start").set(t, {
                        clearProps: o
                    }).call(s)
                }))
            }
    }, function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return o
        })), n.d(e, "a", (function() {
            return a
        }));
        var i = n(4),
            s = n(6);
        const o = function(t) {
                const e = Object(s.p)(".s-line-wr", t),
                    n = Object(s.p)(".s-line", t),
                    o = Object(s.p)(".s-word", t),
                    a = Object(s.p)(".s-char", t),
                    r = Object(s.p)("[data-rotative]", t);
                r.length && i.a.set(r, {
                    willChange: "opacity, transform",
                    opacity: 0,
                    rotationX: -90,
                    yPercent: 50,
                    transformOrigin: "0% 50% -50"
                }), null != e && e.length && null != n && n.length && i.a.set(n, {
                    opacity: 0,
                    yPercent: 120,
                    transformOrigin: "left",
                    rotate: 4
                }), null != e && e.length && null != o && o.length && i.a.set(o, {
                    willChange: "opacity, transform",
                    opacity: 0,
                    rotate: 4,
                    yPercent: 50,
                    transformOrigin: "left"
                }), null != e && e.length && null != a && a.length && i.a.set(a, {
                    willChange: "opacity, transform",
                    opacity: 0,
                    rotationX: -90,
                    yPercent: 50,
                    transformOrigin: "0% 50% -50"
                })
            },
            a = function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1.5;
                const n = Object(s.p)(".s-line-wr", t),
                    o = Object(s.p)(".s-line", t),
                    a = Object(s.p)(".s-word", t),
                    r = Object(s.p)(".s-char", t),
                    c = Object(s.p)("[data-rotative]", t);
                return c.length ? i.a.to(c, {
                    opacity: 1,
                    rotationX: 0,
                    rotate: 0,
                    yPercent: 0,
                    stagger: .1,
                    duration: e,
                    transformOrigin: "0% 50% -50",
                    ease: "circ.out"
                }) : null != n && n.length && null != o && o.length ? i.a.to(o, {
                    yPercent: 0,
                    rotationX: 0,
                    rotate: 0,
                    opacity: 1,
                    duration: e,
                    stagger: .1,
                    ease: "expo.out"
                }) : null != n && n.length && null != r && r.length ? i.a.to(r, {
                    opacity: 1,
                    rotationX: 0,
                    rotate: 0,
                    yPercent: 0,
                    duration: e,
                    stagger: .1,
                    ease: "expo.out"
                }) : null != n && n.length && null != a && a.length ? i.a.to(a, {
                    opacity: 1,
                    rotationX: 0,
                    rotate: 0,
                    yPercent: 0,
                    duration: e,
                    stagger: .1,
                    ease: "expo.out"
                }) : void 0
            }
    }, , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n.d(e, "c", (function() {
            return a
        })), n.d(e, "a", (function() {
            return r
        })), n.d(e, "b", (function() {
            return c
        }));
        var i = n(13),
            s = n(27),
            o = n(2);
        const a = i.a `
  query KITCHENS_INDEX($site: [String], $handle: [String]) {
    kitchensIndex: entry(section: $handle, site: $site) {
      ${s.m}
    }
  }
`,
            r = i.a `
  query KITCHENS($site: [String], $handle: [String]) {
    kitchens: entries(section: $handle, site: $site) {
      ${o.f}
    }
  }
`,
            c = (i.a `
  query KITCHEN_SLUG($site: [String], $handle: [String], $slug: [String]!) {
    kitchen: entry(section: "kitchens", site: $site) {
      ${o.f}
    }
  }
`, i.a `
  query KITCHENS_CATEGORIES($site: [String]) {
    styles: categories(group: ["productsStyle"], site: $site) {
      ... on productsStyle_Category {
        ${o.h}
      }
    }
    typologies: categories(group: ["productsTypology"], site: $site) {
      ... on productsTypology_Category {
        ${o.h}
        ${o.n}
      }
    }
  }
`)
    }, , function(t, e, n) {
        "use strict";
        n.d(e, "c", (function() {
            return a
        })), n.d(e, "a", (function() {
            return r
        })), n.d(e, "b", (function() {
            return c
        }));
        var i = n(13),
            s = n(27),
            o = n(2);
        const a = i.a `
  query NEWS_INDEX($site: [String], $handle: [String]) {
    page: entry(section: $handle, site: $site) {
      ${s.n}
    }
  }
`,
            r = i.a `
  query NEWS($site: [String], $handle: [String]) {
    news: entries(section: $handle, site: $site) {
      ${o.j}
    }
  }
`,
            c = (i.a `
  query NEWS_SLUG($site: [String], $slug: [String]!) {
    page: entry(section: "news", slug: $slug, site: $site) {
      ${o.j}
    }
  }
`, i.a `
  query NEWS_CATEGORIES($site: [String]) {
    categories(group: ["newsCategories"], site: $site) {
      ... on newsCategories_Category {
        ${o.a}
      }
    }
  }
`)
    }, function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return o
        })), n.d(e, "b", (function() {
            return a
        }));
        var i = n(4),
            s = n(6);
        i.a.config({
            force3D: !0,
            nullTargetWarn: !s.i
        }), i.a.ticker.fps(60);
        const o = {
                white: "#ffffff",
                beige: "#e0ded0",
                black: "#151514",
                black100: "#262623",
                gold: "#BDA069",
                grey: "#949699",
                green: "#00564A",
                bronze: "#866242"
            },
            a = {
                fast: .15,
                default: .35,
                slow: .5
            }
    }, function(t, e, n) {
        "use strict";
        const i = {};
        i.navigation = n(264), i.navigation = i.navigation.default || i.navigation, e.a = i
    }, , , , , function(t, e, n) {
        "use strict";
        n.r(e);
        var i = {
                props: {
                    src: String,
                    alt: String,
                    image: {
                        type: Object
                    },
                    mobileImage: Object,
                    preload: {
                        type: Boolean,
                        default: !1
                    },
                    lazy: {
                        type: Boolean,
                        default: !0
                    },
                    cover: {
                        type: Boolean,
                        default: !0
                    },
                    contained: {
                        type: Boolean,
                        default: !1
                    },
                    hasFocus: {
                        type: Boolean
                    },
                    focus: {
                        type: Array,
                        default: () => []
                    }
                },
                data: () => ({
                    isLoaded: !1
                }),
                computed: {
                    vertical() {
                        var t, e;
                        return parseInt(null === (t = this.image) || void 0 === t ? void 0 : t.width) < parseInt(null === (e = this.image) || void 0 === e ? void 0 : e.height)
                    },
                    imageProps() {
                        var t, e, n;
                        return {
                            style: this.focusPoint,
                            preload: this.preload && !(null !== (t = this.sources) && void 0 !== t && t.length),
                            ...this.lazy && !this.preload ? {
                                loading: "lazy"
                            } : {},
                            ...this.srcset ? {
                                srcset: this.srcset
                            } : {
                                width: null === (e = this.image) || void 0 === e ? void 0 : e.width,
                                height: null === (n = this.image) || void 0 === n ? void 0 : n.height
                            },
                            ...this.sizes ? {
                                sizes: this.sizes
                            } : {}
                        }
                    },
                    focusPoint() {
                        var t;
                        return this.hasFocus && null !== (t = this.focus) && void 0 !== t && t.length ? `object-position: ${100*this.focus[0]}% ${100*this.focus[1]}%` : null
                    },
                    srcset() {
                        var t;
                        return null === (t = this.image) || void 0 === t ? void 0 : t.srcset_jpeg
                    },
                    srcsetWebp() {
                        var t;
                        return null === (t = this.image) || void 0 === t ? void 0 : t.srcset_webp
                    },
                    srcsetWebpMobile() {
                        var t;
                        return null === (t = this.mobileImage) || void 0 === t ? void 0 : t.srcset_webp
                    },
                    sizes() {
                        var t, e, n, i;
                        return [`(max-width: 767px) ${null!==(t=null===(e=this.mobileImage)||void 0===e?void 0:e.width)&&void 0!==t?t:null===(n=this.image)||void 0===n?void 0:n.width}px`, `${null===(i=this.image)||void 0===i?void 0:i.width}px`].join(", ")
                    }
                },
                async mounted() {
                    await this.$nextTick(), this.$refs.image && this.lazy && this.$refs.image.addEventListener("load", (() => {
                        this.$emit("load")
                    }), {
                        once: !0
                    })
                },
                methods: {
                    onLoad() {
                        this.isLoaded = !0
                    }
                }
            },
            s = (n(289), n(12)),
            o = Object(s.a)(i, (function() {
                var t = this,
                    e = t._self._c;
                return e("picture", t._g({
                    class: ["base-picture", {
                        "-is-vertical": t.vertical
                    }, {
                        "-is-cover": t.cover && !t.contained
                    }, {
                        "-is-contained": t.contained
                    }, {
                        "-is-loaded": t.isLoaded || !t.lazy
                    }],
                    attrs: {
                        "data-picture-preload": t.preload
                    }
                }, t.$listeners), [t.srcsetWebp ? e("source", {
                    attrs: {
                        type: "image/webp",
                        media: t.mobileImage && t.mobileImage.webp ? "(min-width: 768px)" : "",
                        srcset: t.srcsetWebp
                    }
                }) : t._e(), t._v(" "), t.mobileImage && t.mobileImage.webp ? e("source", {
                    attrs: {
                        type: "image/webp",
                        media: "(max-width: 767px)",
                        srcset: t.mobileImage.webp
                    }
                }) : t._e(), t._v(" "), t.src ? e("img", t._b({
                    ref: "image",
                    attrs: {
                        alt: t.alt || t.$t("picture.alt"),
                        src: t.src,
                        title: t.alt || t.$t("picture.alt")
                    },
                    on: {
                        load: t.onLoad
                    }
                }, "img", t.imageProps, !1)) : t.image && t.image.src ? e("img", t._b({
                    ref: "image",
                    attrs: {
                        alt: t.image.alt || t.alt,
                        src: t.image.src,
                        title: t.image.title
                    },
                    on: {
                        load: t.onLoad
                    }
                }, "img", t.imageProps, !1)) : t._e()])
            }), [], !1, null, null, null);
        e.default = o.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(9),
            s = n(83),
            o = n(6),
            a = {
                nam: "BaseButton",
                mixins: [s.a],
                props: {
                    color: {
                        type: String,
                        validator: t => ["black", "bronze", "gold", "white", "beige", "green"].includes(t)
                    },
                    outline: {
                        type: Boolean,
                        default: !1
                    },
                    variant: {
                        type: Boolean,
                        default: !1
                    },
                    iconFirst: {
                        type: Boolean,
                        default: !1
                    },
                    mode: {
                        type: String,
                        default: "primary",
                        validator: t => ["primary", "secondary", "underline"].includes(t)
                    },
                    ribbon: [String, Number]
                },
                computed: { ...Object(i.b)("layout", {
                        darkTheme: "darkTheme",
                        layoutTheme: "theme"
                    }),
                    themeColors: () => o.c,
                    theme() {
                        return this.color || "black" !== this.layoutTheme ? this.color || "white" !== this.layoutTheme ? this.color : "black" : "white"
                    }
                },
                methods: {
                    hexToRGB: o.h
                }
            },
            r = (n(290), n(12)),
            c = Object(r.a)(a, (function() {
                var t = this,
                    e = t._self._c;
                return e(t.tagName, t._g(t._b({
                    tag: "component",
                    class: ["btn", {
                        "-dark-theme": t.darkTheme
                    }, {
                        "btn--hovered": t.hovered
                    }, {
                        "btn--outline": t.outline
                    }, {
                        "btn--icon": t.icon
                    }, {
                        "btn--icon-first": t.iconFirst
                    }, {
                        "btn--variant": t.variant
                    }, {
                        "btn--contained": !t.outline && "secondary" === t.mode
                    }, `btn--${t.mode}`, `btn--color-${t.color||t.theme}`],
                    style: `--rgb-color: ${t.hexToRGB(t.themeColors[t.theme])}; --hex-color: ${"black"===t.theme?"var(--color-black)":`var(--color-${t.theme})`}`,
                    attrs: {
                        "aria-label": t.label,
                        name: t.label,
                        disabled: t.disabled
                    }
                }, "component", t.computedProps, !1), t.$listeners), ["primary" === t.mode || "underline" === t.mode ? e("span", {
                    staticClass: "btn__primary-icon-wr"
                }, ["primary" === t.mode ? e("base-icon", {
                    staticClass: "btn__primary-icon",
                    attrs: {
                        name: "PrimaryCta"
                    }
                }) : e("base-icon", {
                    staticClass: "btn__primary-icon",
                    attrs: {
                        name: "LightArrowRight"
                    }
                })], 1) : t._e(), t._v(" "), t.$slots.default ? e("span", {
                    staticClass: "btn__text"
                }, [t._t("default")], 2) : t._e(), t._v(" "), t.icon ? e("base-icon", {
                    staticClass: "btn__icon",
                    attrs: {
                        name: t.icon
                    }
                }) : t._e()], 1)
            }), [], !1, null, null, null);
        e.default = c.exports;
        installComponents(c, {
            BaseIcon: n(74).default
        })
    }, function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return l
        }));
        n(375);
        var i = n(374),
            s = n(251),
            o = n(253),
            a = n(250),
            r = n(252);
        const c = {
                en: o.a,
                it: a.a,
                de: s.a,
                ko: r.a
            },
            l = function(t, e) {
                const n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "it").split("_")[0];
                let s = t;
                "string" == typeof t && (s = new Date(t));
                try {
                    return Object(i.a)(s, e, {
                        locale: c[n]
                    })
                } catch (t) {}
            }
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(194),
            s = n.n(i),
            o = n(195),
            a = n.n(o),
            r = n(196),
            c = n.n(r),
            l = n(197),
            u = n.n(l),
            h = n(198),
            d = n.n(h),
            p = n(199),
            m = n.n(p),
            g = n(200),
            f = n.n(g),
            v = n(201),
            b = n.n(v),
            y = n(202),
            w = n.n(y),
            _ = n(203),
            x = n.n(_),
            $ = n(204),
            k = n.n($),
            O = n(205),
            C = n.n(O),
            j = n(206),
            T = n.n(j),
            S = n(207),
            M = n.n(S),
            P = n(208),
            L = n.n(P),
            z = n(209),
            I = n.n(z),
            B = n(210),
            E = n.n(B),
            R = n(211),
            V = n.n(R),
            H = n(212),
            D = n.n(H),
            N = n(213),
            A = n.n(N),
            q = n(214),
            F = n.n(q),
            U = n(215),
            W = n.n(U),
            G = n(216),
            K = n.n(G),
            X = n(217),
            Q = n.n(X),
            J = n(218),
            Y = n.n(J),
            Z = n(219),
            tt = n.n(Z),
            et = n(220),
            nt = n.n(et),
            it = n(221),
            st = n.n(it),
            ot = n(222),
            at = n.n(ot),
            rt = n(223),
            ct = n.n(rt),
            lt = n(224),
            ut = n.n(lt),
            ht = n(225),
            dt = n.n(ht),
            pt = n(226),
            mt = n.n(pt),
            gt = n(227),
            ft = n.n(gt),
            vt = n(228),
            bt = n.n(vt),
            yt = n(229),
            wt = n.n(yt),
            _t = n(230),
            xt = n.n(_t),
            $t = n(231),
            kt = n.n($t),
            Ot = n(232),
            Ct = n.n(Ot),
            jt = n(233),
            Tt = n.n(jt),
            St = n(234),
            Mt = n.n(St),
            Pt = n(235),
            Lt = n.n(Pt),
            zt = n(236),
            It = n.n(zt),
            Bt = n(237),
            Et = n.n(Bt),
            Rt = n(238),
            Vt = n.n(Rt),
            Ht = n(239),
            Dt = n.n(Ht),
            Nt = {
                components: {
                    Archiproducts: a.a,
                    ElettriciIconServiziPPC: T.a,
                    PagamentiIconServiziPPC: bt.a,
                    PersonalIDIconServiziPPC: xt.a,
                    ProgettazioneIconServiziPPC: Tt.a,
                    HotelIconServiziPPC: tt.a,
                    ConsegnaIconServiziPPC: w.a,
                    ConsulenzaIconServiziPPC: x.a,
                    RilieviIconServiziPPC: Lt.a,
                    RealizzazioniIconServiziPPC: Mt.a,
                    StudioIconServiziPPC: It.a,
                    CartongessiIconServiziPPC: b.a,
                    MuriIconServiziPPC: ft.a,
                    Account: s.a,
                    Bookmark: f.a,
                    PrimaryCta: Ct.a,
                    IconMap: dt.a,
                    LightArrowRight: st.a,
                    Logo: Dt.a,
                    GoldCheck: F.a,
                    GoldCross: K.a,
                    GoldClose: W.a,
                    GoldLess: Q.a,
                    GoldSearch: Y.a,
                    GoldArrowLeft: V.a,
                    GoldArrowRight: D.a,
                    GoldArrowTop: A.a,
                    GoldArrowBottom: E.a,
                    GoldAccount: I.a,
                    GoldMenuClose: mt.a,
                    Pencil: wt.a,
                    Linkedin: at.a,
                    Document: C.a,
                    BoldedByWego: m.a,
                    Facebook: M.a,
                    Instagram: nt.a,
                    Pinterest: kt.a,
                    Youtube: Vt.a,
                    ArrowCta: c.a,
                    ArrowDownCta: u.a,
                    LongArrowUp: ut.a,
                    LongArrowDown: ct.a,
                    PlayFullWhite: Et.a,
                    ArrowDownLight: d.a,
                    Filters: L.a,
                    Cross: k.a
                },
                props: {
                    name: String
                },
                computed: {
                    gold() {
                        return this.name.toLowerCase().includes("gold")
                    }
                }
            },
            At = (n(291), n(12)),
            qt = Object(At.a)(Nt, (function() {
                var t = this;
                return (0, t._self._c)(t.name, t._g({
                    tag: "component",
                    staticClass: "icon",
                    class: {
                        "-is-golden": t.gold
                    }
                }, t.$listeners))
            }), [], !1, null, null, null);
        e.default = qt.exports
    }, function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return a
        })), n.d(e, "c", (function() {
            return r
        })), n.d(e, "b", (function() {
            return c
        }));
        var i = n(13),
            s = n(27),
            o = n(2);
        const a = i.a `
  query CONTRACT($site: [String], $handle: [String]) {
    page: entry(section: $handle, site: $site) {
      ${s.j}
    }
  }
`,
            r = i.a `
  query SOCIAL_COMMITMENT($site: [String], $handle: [String]) {
    page: entry(section: $handle, site: $site) {
      ${s.p}
    }
  }
`,
            c = i.a `
  query PROJECTS($site: [String]) {
    contracts:  entries(section: "projects", relatedToCategories: { slug: "contract" } site: $site) {
      ${o.l}
    }
    socialCommitments:  entries(section: "projects", relatedToCategories: { slug: "social-commitment" } site: $site) {
      ${o.l}
    }
  }
`;
        i.a `
  query PROJECT_SLUG($site: [String], $slug: [String]!) {
    project: entry(section: "projects", slug: $slug, site: $site) {
      ${o.l}
    }
  }
`
    }, , function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return i
        })), n.d(e, "a", (function() {
            return s
        }));
        const i = t => ["true", "1", "yes", "y"].includes(null == t ? void 0 : t.toLowerCase()),
            s = t => {
                let e = 0,
                    n = 0,
                    i = 0;
                return 4 == t.length ? (e = "0x" + t[1] + t[1], n = "0x" + t[2] + t[2], i = "0x" + t[3] + t[3]) : 7 == t.length && (e = "0x" + t[1] + t[2], n = "0x" + t[3] + t[4], i = "0x" + t[5] + t[6]), +e + "," + +n + "," + +i
            }
    }, , , , , , function(t, e, n) {
        "use strict";
        e.a = {
            props: {
                id: String,
                tag: String,
                label: String,
                icon: String,
                disabled: Boolean,
                hovered: Boolean,
                target: String,
                href: String,
                to: [String, Object],
                type: String
            },
            computed: {
                tagName() {
                    return this.tag ? this.tag : this.to ? "nuxt-link" : this.href ? "a" : "button"
                },
                computedProps() {
                    return { ...this.id ? {
                            id: this.id
                        } : {},
                        ...this.href ? {
                            href: this.href
                        } : {},
                        ...this.to ? {
                            to: this.to
                        } : {},
                        ..."button" === this.tagName ? {
                            type: "button",
                            tabindex: 0
                        } : {},
                        ...this.type ? {
                            type: this.type
                        } : {},
                        ...this.href ? {
                            target: "_blank"
                        } : {},
                        ...this.target ? {
                            target: this.target
                        } : {}
                    }
                }
            }
        }
    }, function(t, e, n) {
        "use strict";
        var i = n(8),
            s = n.n(i);
        const o = window.requestIdleCallback || function(t) {
                const e = Date.now();
                return setTimeout((function() {
                    t({
                        didTimeout: !1,
                        timeRemaining: () => Math.max(0, 50 - (Date.now() - e))
                    })
                }), 1)
            },
            a = window.cancelIdleCallback || function(t) {
                clearTimeout(t)
            },
            r = window.IntersectionObserver && new window.IntersectionObserver((t => {
                t.forEach((t => {
                    let {
                        intersectionRatio: e,
                        target: n
                    } = t;
                    e <= 0 || !n.__prefetch || n.__prefetch()
                }))
            }));
        e.a = {
            name: "NuxtLink",
            extends: s.a.component("RouterLink"),
            props: {
                prefetch: {
                    type: Boolean,
                    default: !0
                },
                noPrefetch: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted() {
                this.prefetch && !this.noPrefetch && (this.handleId = o(this.observe, {
                    timeout: 2e3
                }))
            },
            beforeDestroy() {
                a(this.handleId), this.__observed && (r.unobserve(this.$el), delete this.$el.__prefetch)
            },
            methods: {
                observe() {
                    r && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), r.observe(this.$el), this.__observed = !0)
                },
                shouldPrefetch() {
                    return this.getPrefetchComponents().length > 0
                },
                canPrefetch() {
                    const t = navigator.connection;
                    return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
                },
                getPrefetchComponents() {
                    return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((t => t.components.default)).filter((t => "function" == typeof t && !t.options && !t.__prefetched))
                },
                prefetchLink() {
                    if (!this.canPrefetch()) return;
                    r.unobserve(this.$el);
                    const t = this.getPrefetchComponents();
                    for (const e of t) {
                        const t = e();
                        t instanceof Promise && t.catch((() => {})), e.__prefetched = !0
                    }
                }
            }
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        window.$workbox = async function() {
            if (!1 in navigator) throw new Error("serviceWorker is not supported in current browser!");
            const {
                Workbox: t
            } = await n.e(190).then(n.bind(null, 376)), e = new t("/sw.js", {
                scope: "/"
            });
            return await e.register(), e
        }().catch((t => {}))
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(9),
            s = n(83),
            o = n(6),
            a = {
                mixins: [s.a],
                props: {
                    color: {
                        type: String,
                        validator: t => ["black", "bronze", "gold", "white", "beige", "green"].includes(t)
                    },
                    outline: {
                        type: Boolean,
                        default: !1
                    },
                    mode: {
                        type: String,
                        default: "primary",
                        validator: t => ["primary", "secondary", "outline"].includes(t)
                    },
                    icon: {
                        type: String,
                        required: !0
                    },
                    bgTheme: {
                        type: String,
                        validator: t => ["light", "dark"].includes(t)
                    },
                    fullcolor: Boolean
                },
                computed: { ...Object(i.b)("layout", {
                        themeIsDark: "darkTheme",
                        layoutTheme: "theme"
                    }),
                    themeBackground() {
                        return !(!this.bgTheme || "dark" !== this.bgTheme)
                    },
                    darkTheme() {
                        return this.bgTheme ? this.themeBackground : this.themeIsDark
                    },
                    themeColors: () => o.c,
                    theme() {
                        return this.color || "black" !== this.layoutTheme ? this.color || "white" !== this.layoutTheme ? this.color : "black" : "white"
                    }
                },
                methods: {
                    hexToRGB: o.h
                }
            },
            r = (n(299), n(12)),
            c = Object(r.a)(a, (function() {
                var t = this,
                    e = t._self._c;
                return e(t.tagName, t._g(t._b({
                    tag: "component",
                    class: ["btn-icon", {
                        "-dark-theme": t.darkTheme
                    }, {
                        "btn-icon--hovered": t.hovered
                    }, {
                        "btn-icon--outline": t.outline
                    }, {
                        "btn-icon--icon": t.icon
                    }, {
                        "btn-icon--disabled": t.disabled
                    }, {
                        "btn-icon--fullcolor": t.fullcolor
                    }, `btn-icon--${t.mode}`, `btn-icon--color-${t.color||t.theme}`],
                    style: `--rgb-color: ${t.hexToRGB(t.themeColors[t.theme])}; --hex-color: ${"black"===t.theme?"var(--color-black)":`var(--color-${t.theme})`}`,
                    attrs: {
                        "aria-label": t.label,
                        name: t.label,
                        disabled: t.disabled
                    }
                }, "component", t.computedProps, !1), t.$listeners), [e("transition", {
                    attrs: {
                        name: "simple-fade"
                    }
                }, [t.icon ? e("base-icon", {
                    key: t.icon,
                    staticClass: "btn-icon__icon",
                    attrs: {
                        name: t.icon
                    }
                }) : t._e()], 1)], 1)
            }), [], !1, null, null, null);
        e.default = c.exports;
        installComponents(c, {
            BaseIcon: n(74).default
        })
    }, function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return c
        })), n.d(e, "c", (function() {
            return l
        }));
        var i = n(4),
            s = n(9),
            o = n(48),
            a = n(49),
            r = n(6);
        const c = function(t) {
                this.$bus.$emit("page:before-leave");
                const e = this.$delocalize(this.$store.state.navigation.route.prev),
                    n = this.$delocalize(this.$store.state.navigation.route.next);
                "kitchens" === e && "kitchens-category" === n || "kitchens-category" === e && "kitchens" === n || "kitchens-category" === e && "kitchens-category" === n || this.$store.state.navigation.errorPage || this.$store.state.layout.mainNavTweening || this.$store.getters.saveDevice || Object(o.a)(t)
            },
            l = async function(t, e) {
                const n = this.$delocalize(this.$store.state.navigation.route.prev),
                    s = this.$delocalize(this.$store.state.navigation.route.next);
                if ("kitchens" === n && "kitchens-category" === s || "kitchens-category" === n && "kitchens" === s || "kitchens-category" === n && "kitchens-category" === s) {
                    const n = Object(r.p)("[data-anim-item]", t);
                    i.b.timeline().to(n, {
                        opacity: 0,
                        y: 10
                    }).add(e)
                } else {
                    if (this.$store.getters.saveDevice || this.$store.state.navigation.errorPage) return this.$bus.$emit("page:leave"), window.scrollTo(0, 0), this.$bus.$emit("scroll:scroll-to", "top", {
                        immediate: !0
                    }), void e();
                    this.$store.state.layout.mainNavTweening && !this.$store.state.transitions.overlappedHero ? (window.scrollTo(0, 0), this.$bus.$emit("scroll:scroll-to", "top", {
                        immediate: !0
                    }), e()) : this.$store.state.transitions.bottomToTop ? (await Object(o.e)(t), this.$bus.$emit("page:leave"), window.scrollTo(0, 0), this.$bus.$emit("scroll:scroll-to", "top", {
                        immediate: !0
                    }), e()) : this.$store.state.transitions.overlappedHero ? (this.$bus.$emit("page:leave"), window.scrollTo(0, 0), this.$bus.$emit("scroll:scroll-to", "top", {
                        immediate: !0
                    }), e()) : (await Object(o.d)(t), this.$bus.$emit("page:leave"), window.scrollTo(0, 0), this.$bus.$emit("scroll:scroll-to", "top", {
                        immediate: !0
                    }), e())
                }
            },
            u = function(t, e) {
                const n = Object(r.p)("[data-hero]", t),
                    s = Object(r.p)("[data-hero-stagger]", n),
                    o = Object(r.p)(".the-breadcrumbs", t);
                i.b.killTweensOf([s, o]);
                const c = i.b.timeline({
                    paused: !0,
                    onComplete: () => {
                        s.length && i.b.set(s, {
                            clearProps: "opacity,transform"
                        }), o.length && i.b.set(o, {
                            clearProps: "opacity,transform"
                        })
                    }
                });
                s.length && c.to(s, {
                    opacity: 1,
                    yPercent: 0,
                    stagger: .1,
                    ease: "circ.out",
                    duration: .6
                }, "start"), c.add(Object(a.a)(n, 1), "start"), o.length && c.to(o, {
                    opacity: 1,
                    duration: 1,
                    ease: "circ.out"
                }, "start+=2"), e.$store.state.layout.mainNavTweening ? e.$bus.$once("navigation:leave", (async () => {
                    c.play()
                })) : c.play()
            };
        e.b = {
            scrollToTop: !1,
            transition: {
                css: !1,
                appear: !0,
                mode: "",
                beforeEnter: async function(t) {
                    const e = this.$delocalize(this.$store.state.navigation.route.prev),
                        n = this.$delocalize(this.$store.state.navigation.route.next);
                    this.$store.commit("layout/setTopbar", !0), this.$store.dispatch("layout/setTopbarHeightVar"), this.$store.commit("scroll/setLocked", !0), this.$bus.$emit("page:before-enter"), this.$store.commit("navigation/setTransitioning", !0);
                    const s = "kitchens" === e && "kitchens-category" === n || "kitchens-category" === e && "kitchens" === n || "kitchens-category" === e && "kitchens-category" === n;
                    if (this.$store.getters.saveDevice || s) return;
                    this.$store.state.navigation.errorPage || !this.$store.state.layout.splashViewed || this.$store.state.layout.mainNavTweening || (this.$store.state.transitions.bottomToTop ? Object(o.g)(t) : Object(o.f)(t));
                    const c = Object(r.p)("[data-hero]", t);
                    await Object(r.e)(), Object(a.b)(c);
                    const l = Object(r.p)("[data-hero-stagger]", c),
                        u = Object(r.p)(".the-breadcrumbs", t);
                    u.length && i.b.set(u, {
                        opacity: 0
                    }), l.length && i.b.set(l, {
                        opacity: 0,
                        yPercent: 120
                    })
                },
                enter: async function(t, e) {
                    this.$store.commit("layout/setLoading", !1);
                    const n = this.$delocalize(this.$store.state.navigation.route.prev),
                        i = this.$delocalize(this.$store.state.navigation.route.next),
                        s = "kitchens" === n && "kitchens-category" === i || "kitchens-category" === n && "kitchens" === i || "kitchens-category" === n && "kitchens-category" === i;
                    if (this.$store.state.layout.splashViewed) {
                        if (await Object(r.e)(), s || this.$store.state.navigation.errorPage || this.$store.getters.saveDevice) return this.$store.commit("layout/setLoading", !1), this.$bus.$emit("page:enter"), void e();
                        this.$store.state.locales.switching ? this.$watch((() => this.$store.state.locales.switching), ((e, n) => {
                            e || u(t, this)
                        })) : (await Object(r.e)(), u(t, this)), this.$store.commit("layout/setLoading", !1), this.$store.state.layout.mainNavTweening && !this.$store.state.transitions.overlappedHero ? this.$bus.$once("navigation:leave", (async () => {
                            this.$bus.$emit("page:enter"), e()
                        })) : this.$store.state.transitions.bottomToTop ? (await Object(o.c)(t), this.$bus.$emit("page:enter"), e()) : this.$store.state.transitions.overlappedHero ? (this.$bus.$emit("page:enter"), e()) : (await Object(o.b)(t), this.$bus.$emit("page:enter"), e())
                    } else this.$bus.$once("splash:almost-complete", (async () => {
                        await Object(r.e)(), u(t, this)
                    })), this.$bus.$once("splash:enter-complete", (async () => {
                        this.$bus.$emit("page:enter"), this.$store.commit("scroll/setLocked", !1), e()
                    }))
                },
                afterEnter: async function(t) {
                    this.$store.commit("transitions/setOverlappedHero", !1), this.$store.commit("transitions/setBottomToTop", !1), this.$store.commit("navigation/setTransitioning", !1), this.$store.commit("scroll/setLocked", !1), await Object(r.f)(), this.$bus.$emit("scrolltrigger:refresh"), this.$bus.$emit("cursor:refresh"), this.$bus.$emit("page:after-enter"), this.$store.commit("navigation/setErrorPage", !1)
                },
                beforeLeave: c,
                leave: l
            },
            computed: { ...Object(s.d)("layout", {
                    splashViewed: "splashViewed"
                })
            }
        }
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var i = {
                props: {
                    theme: {
                        type: String,
                        validator: t => ["white", "black"].includes(t)
                    }
                }
            },
            s = (n(296), n(12)),
            o = Object(s.a)(i, (function() {
                return (0, this._self._c)("base-icon", {
                    staticClass: "primopiano-logo",
                    class: `${this.theme}-theme`,
                    attrs: {
                        name: "Logo"
                    }
                })
            }), [], !1, null, null, null);
        e.default = o.exports;
        installComponents(o, {
            BaseIcon: n(74).default
        })
    }, , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return a
        })), n.d(e, "b", (function() {
            return r
        }));
        var i = n(13),
            s = n(27),
            o = n(2);
        const a = i.a `
  query SHOWROOMS($site: [String]) {
    entries(section: ["showrooms"], site: $site) {
      ${o.o}
    }
  }
`,
            r = i.a `
  query SHOWROOMS_INDEX($site: [String], $handle: [String]) {
    page: entry(section: $handle, site: $site) {
      ${s.o}
    }
  }
`
    }, , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return a
        })), n.d(e, "a", (function() {
            return r
        }));
        var i = n(13),
            s = n(27),
            o = n(2);
        const a = i.a `
  query STORIES_INDEX($site: [String], $handle: [String]) {
    page: entry(section: $handle, site: $site) {
      ${s.q}
    }
  }
`,
            r = i.a `
  query STORIES($site: [String]) {
    stories: entries(section: "stories", site: $site) {
      ${o.c}
    }
  }
`;
        i.a `
  query STORY_SLUG($site: [String], $handle: [String], $slug: [String]!) {
    stories: entry(section: "stories", site: $site) {
      ${o.c}
    }
  }
`
    }, function(t, e, n) {
        "use strict";
        (function(t) {
            n.d(e, "a", (function() {
                return s
            }));
            var i = n(77);
            const s = !1;
            Object(i.b)(t.env.PULL_REQUEST) && t.env.HEAD.startsWith(t.env.BACKEND_BRANCH)
        }).call(this, n(86))
    }, , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        "use strict";
        var i = n(9);
        e.a = {
            computed: { ...Object(i.d)("kitchens", ["activeFilters", "activeRoute", "activeIDs"]),
                ...Object(i.b)("kitchens", ["categories", "typologies", "styles"]),
                allFiltersOptions() {
                    const t = [];
                    return this.categories.map((e => (e.options.map((e => (t.push(e), e))), e))), t
                },
                routes() {
                    const t = this.categories.filter((t => t.route));
                    return this.$exists(t) ? t[0].options : null
                }
            },
            methods: { ...Object(i.c)("kitchens", ["setActiveFilters", "setActiveIDs", "setResetRoute"]),
                getFiltersFromIDs() {
                    return [...this.allFiltersOptions.filter((t => !t.route)).filter((t => this.activeIDs.includes(t.id)))]
                },
                getFiltersFromQuery() {
                    const t = this.$route.query.cat,
                        e = (null == t ? void 0 : t.split(",")) || [],
                        n = this.allFiltersOptions.filter((t => e.includes(t.slug) && !t.route)).map((t => t.id)),
                        i = this.$route.params.category,
                        s = this.allFiltersOptions.filter((t => t.slug === i)).map((t => t.id));
                    this.setActiveIDs([...s, ...n]), this.setActiveFilters([...s, ...n])
                },
                getFiltersFromUrl() {
                    const t = this.$route.query.filter,
                        e = (null == t ? void 0 : t.split(",")) || [],
                        n = this.$route.params.category,
                        i = [...this.allFiltersOptions.filter((t => t.slug === n)).map((t => t.id)), ...this.allFiltersOptions.filter((t => e.includes(t.slug))).map((t => t.id))];
                    this.setActiveIDs(i), this.setActiveFilters(i)
                },
                onFilterUpdate(t) {
                    const e = t.length >= this.activeIDs.length ? t[t.length - 1] : this.activeIDs.filter((e => !t.includes(e)))[0],
                        n = this.typologies.some((t => t.id === e)) ? "category" : this.styles.some((t => t.id === e)) ? "subcategory" : null;
                    this.setActiveIDs(t);
                    const i = this.typologies.filter((e => t.includes(e.id))),
                        s = this.styles.filter((e => t.includes(e.id))),
                        o = {
                            name: this.$exists(i) ? "kitchens-category" : "kitchens",
                            params: { ...this.$exists(i) ? {
                                    category: this.$getSingle(i).slug
                                } : {}
                            },
                            ...this.$exists(s) ? {
                                query: {
                                    filter: s.map((t => t.slug)).join(",")
                                }
                            } : {}
                        };
                    "category" === n ? this.$router.push(this.localePath(o)) : "subcategory" === n && this.$router.replace({
                        path: this.$route.path,
                        ...this.$exists(s) ? {
                            query: {
                                filter: s.map((t => t.slug)).join(",")
                            }
                        } : {}
                    })
                }
            }
        }
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, , , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(4),
            s = n(9),
            o = n(6),
            a = {
                data: () => ({
                    count: {
                        value: 0
                    }
                }),
                computed: { ...Object(s.d)("layout", {
                        darkBg: "darkBg"
                    })
                },
                async mounted() {
                    window.scrollTo(0, 0), this.$bus.$emit("scroll:scroll-to", "top", {
                        immediate: !0
                    }), this.setLocked(!0);
                    const t = Object(o.o)("[data-layout-wr]"),
                        e = Object(o.p)("[data-picture-preload]", t),
                        n = Object(o.o)(".page-container");
                    i.b.set(this.$refs.counter, {
                        opacity: 0,
                        y: 10
                    }), i.b.set(this.$el, {
                        width: "calc(100% - var(--scrollbar-width))"
                    }), i.b.set(this.$el, {
                        "--in-top-left-x": "20%"
                    }), i.b.set(this.$el, {
                        "--in-top-left-y": "80vh"
                    }), i.b.set(this.$el, {
                        "--in-top-right-x": "80%"
                    }), i.b.set(this.$el, {
                        "--in-top-right-y": "80vh"
                    }), i.b.set(this.$el, {
                        "--in-bottom-left-x": "80%"
                    }), i.b.set(this.$el, {
                        "--in-bottom-left-y": "80vh"
                    }), i.b.set(this.$el, {
                        "--in-bottom-right-x": "20%"
                    }), i.b.set(this.$el, {
                        "--in-bottom-right-y": "80vh"
                    }), i.b.set(n, {
                        "--out-top-left-x": "20%"
                    }), i.b.set(n, {
                        "--out-top-left-y": "80vh"
                    }), i.b.set(n, {
                        "--out-top-right-x": "80%"
                    }), i.b.set(n, {
                        "--out-top-right-y": "80vh"
                    }), i.b.set(n, {
                        "--out-bottom-left-x": "80%"
                    }), i.b.set(n, {
                        "--out-bottom-left-y": "80vh"
                    }), i.b.set(n, {
                        "--out-bottom-right-x": "20%"
                    }), i.b.set(n, {
                        "--out-bottom-right-y": "80vh"
                    }), i.b.set(this.$refs.inner, {
                        clipPath: "polygon(var(--in-top-left-x) var(--in-top-left-y), var(--in-top-right-x) var(--in-top-right-y), var(--in-bottom-left-x) var(--in-bottom-left-y), var(--in-bottom-right-x) var(--in-bottom-right-y))",
                        opacity: 1
                    }), i.b.set(n, {
                        clipPath: "polygon(var(--out-top-left-x) var(--out-top-left-y), var(--out-top-right-x) var(--out-top-right-y), var(--out-bottom-left-x) var(--out-bottom-left-y), var(--out-bottom-right-x) var(--out-bottom-right-y))"
                    }), await Promise.all(Object(o.n)(e)), window.scrollTo(0, 0), this.$bus.$emit("scroll:scroll-to", "top", {
                        immediate: !0
                    }), this.setOverflowHidden(!0);
                    const s = 1.25;
                    this._tl = i.b.timeline({
                        defaults: {
                            duration: s
                        },
                        onStart: () => this.setOverflowHidden(!1),
                        onComplete: () => {
                            i.b.set(n, {
                                clearProps: "clip-path,--out-top-left-x,--out-top-right-x,--out-top-left-y,--out-top-right-y,--out-bottom-left-x,--out-bottom-right-x,--out-bottom-left-y,--out-bottom-right-y"
                            })
                        }
                    }), this._tl.to(this.$refs.logo, {
                        opacity: 0,
                        y: -10,
                        duration: .5
                    }, "start"), this._tl.to(this.$refs.counter, {
                        opacity: 1,
                        y: -10,
                        duration: .5
                    }, "start"), this._tl.to(this.count, {
                        value: 100,
                        ease: "sine.in",
                        duration: 1.5
                    }), this._tl.to(this.$refs.counter, {
                        opacity: 0,
                        yPercent: -50,
                        duration: .5
                    }), this._tl.set(this.$el, {
                        zIndex: -1
                    }), this._tl.to(this.$el, {
                        "--in-top-left-y": "0vh",
                        "--in-top-right-y": "0vh",
                        ease: "sine.in"
                    }, "reveal"), this._tl.to(this.$el, {
                        "--in-bottom-left-y": "100vh",
                        "--in-bottom-right-y": "100vh",
                        ease: "expo.inOut"
                    }, "reveal+=0.5"), this._tl.to(this.$el, {
                        "--in-top-left-x": "0%",
                        "--in-top-right-x": "100%",
                        "--in-bottom-left-x": "100%",
                        "--in-bottom-right-x": "0%",
                        ease: "expo.inOut"
                    }, "reveal+=0.5"), this._tl.to(n, {
                        "--out-bottom-left-y": "100vh",
                        "--out-bottom-right-y": "100vh",
                        ease: "expo.inOut"
                    }, "reveal+=0.5"), this._tl.to(n, {
                        "--out-top-left-x": "0%",
                        "--out-top-right-x": "100%",
                        "--out-bottom-left-x": "100%",
                        "--out-bottom-right-x": "0%",
                        ease: "expo.inOut"
                    }, "reveal+=0.5"), this._tl.to(n, {
                        "--out-top-left-y": "0vh",
                        "--out-top-right-y": "0vh",
                        ease: "expo.inOut"
                    }, "reveal+=0.5"), this._tl.add((() => {
                        this.$bus.$emit("splash:almost-complete")
                    }), "reveal+=0.75"), this._tl.add((() => {
                        this.$bus.$emit("splash:enter-complete"), this.$store.commit("layout/setSplashViewed", !0), "index" !== this.$delocalize(this.$route.name) && this.$bus.$emit("page-enter-complete")
                    }))
                },
                methods: { ...Object(s.c)("scroll", ["setLocked", "setOverflowHidden"]),
                    getAllPages() {
                        this.$store.dispatch("getPages")
                    }
                }
            },
            r = (n(295), n(12)),
            c = Object(r.a)(a, (function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "the-splash"
                }, [e("p", {
                    staticClass: "the-splash__text"
                }, [t._v("\n    .\n  ")]), t._v(" "), e("div", {
                    ref: "logo",
                    staticClass: "the-splash__logo"
                }, [e("the-logo", {
                    attrs: {
                        theme: "black"
                    }
                })], 1), t._v(" "), e("div", {
                    ref: "counter",
                    staticClass: "the-splash__counter"
                }, [e("span", [t._v(t._s(parseInt(t.count.value)))])]), t._v(" "), e("div", {
                    ref: "inner",
                    staticClass: "the-splash__inner"
                })])
            }), [], !1, null, null, null);
        e.default = c.exports;
        installComponents(c, {
            TheLogo: n(113).default
        })
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(4),
            s = n(9),
            o = n(6),
            a = {
                data: () => ({
                    openFocus: !1,
                    submenu: null,
                    submenuIsOpen: !1
                }),
                computed: { ...Object(s.b)("layout", ["mainNavOpen", "mainNavTweening"]),
                    ...Object(s.b)("navigation", ["mainMenuPages", "mainMenuStory"]),
                    ...Object(s.d)("navigation", ["subNav", "transitioning"]),
                    ...Object(s.d)("layout", ["isMobile"]),
                    story() {
                        var t, e, n, i, s, o, a, r, c, l, u, h, d, p, m, g;
                        if (this.mainMenuStory && this.$exists(this.mainMenuStory) && this.$getSingle(this.mainMenuStory) && !this.$getSingle(this.mainMenuStory[0].element)) return {
                            title: (null === (t = this.mainMenuStory[0]) || void 0 === t ? void 0 : t.element.title) || (null === (e = this.mainMenuStory[0]) || void 0 === e ? void 0 : e.title),
                            section: null === (n = this.mainMenuStory[0]) || void 0 === n || null === (i = n.element) || void 0 === i ? void 0 : i.section,
                            slug: null === (s = this.mainMenuStory[0]) || void 0 === s || null === (o = s.element) || void 0 === o ? void 0 : o.slug,
                            thumbnail: this.$getSingle(null === (a = this.mainMenuStory[0]) || void 0 === a || null === (r = a.element) || void 0 === r ? void 0 : r.thumbnail) ? null === (c = this.mainMenuStory[0]) || void 0 === c || null === (l = c.element) || void 0 === l ? void 0 : l.thumbnail[0] : null,
                            person: this.$getSingle(null === (u = this.mainMenuStory[0]) || void 0 === u || null === (h = u.element) || void 0 === h ? void 0 : h.person) ? null === (d = this.mainMenuStory[0]) || void 0 === d || null === (p = d.element) || void 0 === p ? void 0 : p.person[0] : null,
                            date: null === (m = this.mainMenuStory[0]) || void 0 === m || null === (g = m.element) || void 0 === g ? void 0 : g.date
                        }
                    }
                },
                methods: { ...Object(s.c)("layout", ["setMainNavOpen", "setMainNavTweening", "setMainNavSubMenuOpen"]),
                    ...Object(s.c)("scroll", ["setLocked"]),
                    beforeEnter(t) {
                        this.setMainNavTweening(!0), this.setLocked(!0);
                        const e = Object(o.o)("[data-nav-panel-main]", t),
                            n = Object(o.o)("[data-nav-panel-focus]", t),
                            s = Object(o.o)("[data-nav-main]", t),
                            a = Object(o.o)("[data-nav-focus]", t),
                            r = Object(o.p)("[data-nav-stagger]", t),
                            c = Object(o.p)("[data-nav-top], [data-nav-bottom]", t);
                        i.b.killTweensOf([s, a, r, e, n]), i.b.set([s, a], {
                            opacity: 0
                        }), i.b.set(e, {
                            xPercent: 100,
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                        }), i.b.set(n, {
                            clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
                        }), i.b.set(r, {
                            opacity: 0,
                            y: 50,
                            rotate: 5
                        }), i.b.set(c, {
                            opacity: 0
                        })
                    },
                    enter(t, e) {
                        const n = Object(o.o)("[data-nav-panel-main]", t),
                            s = Object(o.o)("[data-nav-panel-focus]", t),
                            a = Object(o.o)("[data-nav-main]", t),
                            r = Object(o.o)("[data-nav-focus]", t),
                            c = Object(o.p)("[data-nav-stagger]", t),
                            l = Object(o.p)("[data-nav-top], [data-nav-bottom]", t);
                        i.b.killTweensOf([a, r, c, l, n, s]), i.b.timeline({
                            defaults: {
                                duration: .8,
                                ease: "expo.out"
                            },
                            onComplete: () => {
                                window.addEventListener("keydown", this.handleEscape), i.b.set([r, a, c, l], {
                                    clearProps: "width,opacity,transform,clip-path"
                                }), this.$bus.$emit("cursor:refresh"), e()
                            }
                        }).to(n, {
                            xPercent: 0,
                            duration: .6,
                            ease: "expo.out"
                        }, "start").to(s, {
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                            duration: .6,
                            ease: "expo.out"
                        }, "start").set([a, r], {
                            opacity: 1
                        }).addLabel("enter-typography").to([n, s], {
                            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                            duration: .6,
                            stagger: .09,
                            ease: "power4.out"
                        }).add((() => {
                            i.b.set([r, a], {
                                clearProps: "width,opacity,transform,clip-path"
                            }), this.setMainNavTweening(!1)
                        })).to(c, {
                            y: 0,
                            rotate: 0,
                            opacity: 1,
                            duration: 1,
                            stagger: .05
                        }, "enter-typography").to(l, {
                            opacity: 1,
                            duration: 1
                        }, "enter-typography+=0.4")
                    },
                    async beforeLeave(t) {
                        this.setMainNavTweening(!0)
                    },
                    async leave(t, e) {
                        await this.leaveMainMenu(t), this.$bus.$emit("cursor:refresh"), e()
                    },
                    async leaveMainMenu(t) {
                        return new Promise((e => {
                            const n = Object(o.p)("[data-nav-focus]", t),
                                s = Object(o.p)("[data-nav-main]", t),
                                a = Object(o.p)("[data-nav-panel-main], [data-nav-panel-focus]", t);
                            i.b.killTweensOf([s, n, a]);
                            const r = i.b.timeline({
                                onComplete: () => {
                                    window.removeEventListener("keydown", this.handleEscape), this.setMainNavTweening(!1), this.setMainNavSubMenuOpen(!1), this.transitioning || this.setLocked(!1), e()
                                }
                            });
                            r.to(a, {
                                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                                duration: .4,
                                ease: "power3.out"
                            }), r.set([s, n], {
                                display: "none"
                            }), this.submenu && r.set(this.$refs.submenu, {
                                display: "none"
                            }), r.to(a, {
                                clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
                                duration: 1,
                                ease: "power3.out"
                            }, "end"), r.add((() => {
                                this.$bus.$emit("navigation:leave")
                            }), "end+=0.4")
                        }))
                    },
                    beforeEnterSubmenu(t) {
                        i.b.set(t, {
                            xPercent: 100
                        })
                    },
                    enterSubmenu(t, e) {
                        this.setMainNavSubMenuOpen(!0), i.b.timeline({
                            defaults: {
                                duration: .4,
                                ease: "sine.out",
                                onComplete: () => this.$bus.$emit("cursor:refresh")
                            }
                        }).to(t, {
                            xPercent: 0
                        }).add(e)
                    },
                    async leaveSubmenu(t, e) {
                        this.mainNavTweening || (await this.leaveSubmenuAnimation(t), this.$bus.$emit("cursor:refresh")), e(), this.setMainNavSubMenuOpen(!1)
                    },
                    leaveSubmenuAnimation: t => new Promise((e => {
                        i.b.timeline({
                            defaults: {
                                duration: .4,
                                ease: "sine.out"
                            }
                        }).to(t, {
                            xPercent: 100
                        }, "start").add(e)
                    })),
                    beforeEnterSubmenuItems(t) {
                        const e = Object(o.p)("[data-nav-stagger]", t);
                        i.b.killTweensOf(e), i.b.set(e, {
                            x: 30,
                            opacity: 0
                        })
                    },
                    enterSubmenuItems(t, e) {
                        const n = Object(o.p)("[data-nav-stagger]", t);
                        i.b.killTweensOf(n), i.b.timeline({
                            defaults: {
                                duration: .5,
                                ease: "sine.out"
                            }
                        }).to(n, {
                            x: 0,
                            opacity: 1,
                            stagger: .05
                        }).add(e)
                    },
                    async leaveSubmenuItems(t, e) {
                        const n = Object(o.p)("[data-nav-stagger]", t);
                        i.b.killTweensOf(n), i.b.timeline({
                            defaults: {
                                duration: .4,
                                ease: "sine.out"
                            }
                        }).to(n, {
                            x: 30,
                            opacity: 0,
                            stagger: .05
                        }, "start").add(e)
                    },
                    handleEscape(t) {
                        "Escape" !== t.key && "Escape" !== t.code || this.setMainNavOpen(!1)
                    },
                    toggleFocus(t) {
                        this.mainNavTweening || (this.openFocus = t)
                    },
                    closeSubMenu() {
                        this.submenu = null, this.submenuIsOpen = !1
                    },
                    async toggleSubMenu(t) {
                        var e;
                        this.submenu && (null === (e = this.submenu) || void 0 === e ? void 0 : e.id) === (null == t ? void 0 : t.id) ? (this.submenu = null, await Object(o.f)(), this.submenuIsOpen = !1) : (this.submenuIsOpen = !0, await Object(o.f)(), this.submenu = {
                            id: null == t ? void 0 : t.id,
                            children: null == t ? void 0 : t.children
                        })
                    }
                }
            },
            r = (n(297), n(12)),
            c = Object(r.a)(a, (function() {
                var t = this,
                    e = t._self._c;
                return e("transition", {
                    attrs: {
                        css: !1,
                        appear: ""
                    },
                    on: {
                        "before-enter": t.beforeEnter,
                        enter: t.enter,
                        "before-leave": t.beforeLeave,
                        leave: t.leave
                    }
                }, [e("div", {
                    staticClass: "the-nav"
                }, [e("div", {
                    staticClass: "the-nav__panel-main",
                    attrs: {
                        "data-nav-panel-main": ""
                    }
                }), t._v(" "), e("div", {
                    staticClass: "the-nav__panel-focus",
                    attrs: {
                        "data-nav-panel-focus": ""
                    }
                }), t._v(" "), e("div", {
                    staticClass: "the-nav__main",
                    class: {
                        "-focus-showed": t.openFocus
                    },
                    attrs: {
                        "data-nav-main": "",
                        "data-lenis-prevent": ""
                    },
                    on: {
                        mouseenter: function(e) {
                            return t.toggleFocus(!1)
                        }
                    }
                }, [e("div", {
                    staticClass: "the-nav__main-top",
                    attrs: {
                        "data-nav-top": ""
                    }
                }, [e("base-button", {
                    staticClass: "the-nav__request-date",
                    attrs: {
                        "data-nav-stagger": "",
                        color: "black",
                        mode: "secondary",
                        outline: "",
                        label: t.$t("actions.request_date"),
                        icon: "Pencil",
                        "icon-first": "",
                        to: t.localePath({
                            name: "appointment"
                        })
                    }
                }, [t._v("\n          " + t._s(t.$t("actions.request_date")) + "\n        ")])], 1), t._v(" "), e("div", {
                    staticClass: "the-nav__main-content",
                    attrs: {
                        "data-nav-content": ""
                    }
                }, [e("nav", {
                    staticClass: "the-nav__main-nav"
                }, [e("ul", [t.isMobile && "index" !== t.$delocalize(t.$route.name) ? e("li", {
                    attrs: {
                        "data-nav-stagger": ""
                    }
                }, [e("nuxt-link", {
                    staticClass: "the-nav__link -to-homepage",
                    attrs: {
                        to: t.localePath("/"),
                        "aria-label": "Homepage"
                    }
                }, [e("span", [t._v("Home")])])], 1) : t._e(), t._v(" "), t._l(t.mainMenuPages, (function(n) {
                    return e("li", {
                        key: n.id,
                        attrs: {
                            "data-nav-stagger": ""
                        }
                    }, ["passive" === n.typeLabel.toLowerCase() ? e("button", {
                        staticClass: "the-nav__link",
                        class: {
                            "-nav-active": t.submenu && t.submenu.id === n.id
                        },
                        attrs: {
                            "aria-label": n.title,
                            tabindex: "0",
                            name: n.title
                        },
                        on: {
                            click: function(e) {
                                return t.toggleSubMenu(n)
                            }
                        }
                    }, [e("span", [t._v(t._s(n.title))])]) : t._e(), t._v(" "), t.$exists(n.navAction) && t.localePath(t.$routeMatcher(t.$getSingle(n.navAction))) === t.$route.path ? e("button", {
                        staticClass: "the-nav__link -active-link",
                        attrs: {
                            "aria-label": n.title,
                            tabindex: "0",
                            name: n.title
                        },
                        on: {
                            click: function(e) {
                                return t.$store.commit("layout/setMainNavOpen", !1)
                            }
                        }
                    }, [e("span", [t._v(t._s(n.title))])]) : t.$exists(n.navAction) ? e("nuxt-link", {
                        staticClass: "the-nav__link",
                        attrs: {
                            to: t.localePath(t.$routeMatcher(t.$getSingle(n.navAction))),
                            "aria-label": n.title
                        }
                    }, [e("span", [t._v(" " + t._s(n.title))])]) : t._e()], 1)
                })), t._v(" "), e("li", [e("base-button", {
                    staticClass: "the-nav__request-date -mobile-only",
                    attrs: {
                        "data-nav-stagger": "",
                        color: "black",
                        mode: "secondary",
                        outline: "",
                        label: t.$t("actions.request_date"),
                        icon: "Pencil",
                        "icon-first": "",
                        to: t.localePath({
                            name: "appointment"
                        })
                    }
                }, [t._v("\n                " + t._s(t.$t("actions.request_date")) + "\n              ")])], 1)], 2)])]), t._v(" "), e("div", {
                    staticClass: "the-nav__main-bottom",
                    attrs: {
                        "data-nav-bottom": ""
                    }
                }, [e("locale-switcher"), t._v(" "), e("nav", {
                    staticClass: "the-nav__bottom-nav"
                }, [e("ul", t._l(t.subNav, (function(n, i) {
                    let {
                        label: s,
                        route: o
                    } = n;
                    return e("li", {
                        key: i
                    }, [e("nuxt-link", {
                        staticClass: "the-nav__sub-link",
                        attrs: {
                            to: t.localePath(o),
                            "aria-label": s
                        }
                    }, [t._v("\n                " + t._s(s) + "\n              ")])], 1)
                })), 0)])], 1)]), t._v(" "), e("transition", {
                    attrs: {
                        css: !1,
                        appear: ""
                    },
                    on: {
                        "before-enter": t.beforeEnterSubmenu,
                        enter: t.enterSubmenu,
                        leave: t.leaveSubmenu
                    }
                }, [t.submenuIsOpen && !t.openFocus ? e("div", {
                    ref: "submenu",
                    staticClass: "the-nav__submenu",
                    attrs: {
                        "data-lenis-prevent": ""
                    }
                }, [e("base-button-icon", {
                    attrs: {
                        color: "black",
                        label: `${t.$t("actions.close")} submenu`,
                        mode: "primary",
                        icon: "GoldArrowLeft",
                        "data-nav-stagger": ""
                    },
                    on: {
                        click: t.closeSubMenu
                    }
                }), t._v(" "), e("transition", {
                    attrs: {
                        css: !1,
                        appear: "",
                        mode: "out-in"
                    },
                    on: {
                        "before-enter": t.beforeEnterSubmenuItems,
                        enter: t.enterSubmenuItems,
                        leave: t.leaveSubmenuItems
                    }
                }, [t.submenu ? e("nav", {
                    key: t.submenu.id,
                    staticClass: "the-nav__submenu-nav"
                }, [t.$exists(t.submenu.children) ? e("ul", t._l(t.submenu.children, (function(n) {
                    return e("li", {
                        key: n.id,
                        attrs: {
                            "data-nav-stagger": ""
                        }
                    }, [t.$exists(n.navAction) ? e("nuxt-link", {
                        staticClass: "the-nav__link",
                        attrs: {
                            to: t.localePath(t.$routeMatcher(t.$getSingle(n.navAction))),
                            "aria-label": n.title
                        }
                    }, [t._v("\n                  " + t._s(n.title) + "\n                ")]) : t._e()], 1)
                })), 0) : t._e()]) : t._e()])], 1) : t._e()]), t._v(" "), e("div", {
                    staticClass: "the-nav__focus",
                    class: {
                        "-set-bg": !t.story
                    },
                    attrs: {
                        "data-nav-focus": ""
                    },
                    on: {
                        mouseenter: function(e) {
                            return t.toggleFocus(!0)
                        }
                    }
                }, [t.story ? e("story-nav-card", {
                    attrs: {
                        image: t.story.thumbnail,
                        route: {
                            section: t.story.section,
                            slug: t.story.slug
                        },
                        title: t.story.title,
                        date: t.story.date,
                        active: t.openFocus,
                        section: t.story.section
                    }
                }) : t._e()], 1)], 1)])
            }), [], !1, null, null, null);
        e.default = c.exports;
        installComponents(c, {
            BaseButton: n(72).default,
            LocaleSwitcher: n(260).default,
            BaseButtonIcon: n(111).default,
            StoryNavCard: n(368).default
        })
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(9),
            s = {
                props: {
                    theme: {
                        type: String,
                        validator: t => ["white", "black"].includes(t)
                    }
                },
                computed: { ...Object(i.d)("layout", {
                        themeColor: "theme",
                        mainNavOpen: "mainNavOpen",
                        mainNavSubMenuOpen: "mainNavSubMenuOpen",
                        darkBg: "darkBg"
                    }),
                    ...Object(i.d)("navigation", ["errorPage"]),
                    tone() {
                        return this.darkBg ? "white" : "black"
                    }
                },
                methods: {
                    onClick() {
                        this.$router.push(this.localePath({
                            name: "index"
                        }))
                    }
                }
            },
            o = (n(301), n(12)),
            a = Object(o.a)(s, (function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    class: ["the-topbar", `-theme-${t.tone}`, {
                        "-nav-is-open": t.mainNavOpen
                    }, {
                        "-submenu-is-open": t.mainNavSubMenuOpen
                    }]
                }, [e("div", {
                    staticClass: "the-topbar__wr"
                }, [e("n-link", {
                    staticClass: "the-topbar__logo",
                    attrs: {
                        to: t.localePath({
                            name: "index"
                        })
                    }
                }, [e("the-logo", {
                    attrs: {
                        theme: t.tone
                    }
                })], 1), t._v(" "), t.errorPage ? t._e() : e("menu-button", {
                    attrs: {
                        theme: t.tone
                    }
                })], 1)])
            }), [], !1, null, null, null);
        e.default = a.exports;
        installComponents(a, {
            TheLogo: n(113).default,
            MenuButton: n(369).default
        })
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(240),
            s = n(4),
            o = n(102),
            a = n.n(o),
            r = n(9),
            c = {
                computed: { ...Object(r.d)("scroll", ["orientation"]),
                    ...Object(r.b)("scroll", {
                        locked: "scrollLocked"
                    }),
                    attributes() {
                        return {
                            "data-scroll": "",
                            [`data-scroll-${this.orientation}`]: ""
                        }
                    }
                },
                created() {
                    this.onScroll = a()(this.onScroll, 100)
                },
                mounted() {
                    this.initialize(), this.setInitialized(!0), this.$bus.$emit("scroll:initialized"), this.locked && this.stop(), this.locked || this.start(), this.$watch("orientation", this.reload), this.$watch("locked", ((t, e) => {
                        this.setScrollBarWidth(), t && this.stop(), t || this.start()
                    }))
                },
                beforeDestroy() {
                    this.destroy(), this.$bus.$lenis = void 0, this.lenis = void 0, this.$bus.$emit("scroll:destroyed")
                },
                methods: { ...Object(r.c)("scroll", ["resetDirection", "resetPosition", "setData", "setInitialized", "setLocked"]),
                    ...Object(r.c)("layout", ["setScrollBarWidth"]),
                    addScrollListener() {
                        this.lenis.on("scroll", this.onScroll)
                    },
                    raf(t) {
                        this.lenis.raf(t), this._raf = requestAnimationFrame(this.raf)
                    },
                    addEventListeners() {
                        this.addScrollListener(), this.$bus.$on("scroll:stop", this.stop), this.$bus.$on("scroll:start", this.start), this.$bus.$on("scroll:scroll-to", this.scrollTo)
                    },
                    removeEventListeners() {
                        this.$bus.$off("scroll:stop", this.stop), this.$bus.$off("scroll:start", this.start), this.$bus.$off("scroll:scroll-to", this.scrollTo)
                    },
                    scrollTo(t) {
                        var e;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        var i, s;
                        this.locked && (null === (i = this.lenis) || void 0 === i || i.start());
                        (null === (e = this.lenis) || void 0 === e || e.scrollTo(t, { ...n
                        }), this.locked) && (null === (s = this.lenis) || void 0 === s || s.stop())
                    },
                    stop() {
                        var t;
                        null === (t = this.lenis) || void 0 === t || t.stop()
                    },
                    start() {
                        var t;
                        null === (t = this.lenis) || void 0 === t || t.start()
                    },
                    onScroll(t) {
                        var e;
                        null === (e = this.$bus.$scrollTrigger) || void 0 === e || e.update(), this.setData({
                            limit: t.limit,
                            direction: t.orientation,
                            percentage: t.progress,
                            x: "horizontal" === this.orientation ? t.scroll : null,
                            y: "vertical" === this.orientation ? t.scroll : null
                        })
                    },
                    initialize() {
                        this.lenis = new i.a({ ..."horizontal" === this.orientation ? {
                                wrapper: this.$el,
                                content: this.$el.children[0]
                            } : {},
                            easing: t => 1 - Math.pow(1 - t, 5),
                            duration: 1.2,
                            smoothWheel: !0,
                            wheelMultiplier: 1,
                            touchMultiplier: 2,
                            orientation: this.orientation
                        }), window.scrollTo(0, 0), this.$bus.$emit("scroll:scroll-to", "top", {
                            immediate: !0
                        }), s.b.ticker.add((t => {
                            var e;
                            null === (e = this.lenis) || void 0 === e || e.raf(1e3 * t)
                        })), this.$bus.$lenis = this.lenis, this.addEventListeners()
                    },
                    destroy() {
                        var t;
                        cancelAnimationFrame(this._raf), this.removeEventListeners(), null === (t = this.lenis) || void 0 === t || t.destroy()
                    },
                    reload() {
                        const t = this.locked;
                        t && this.start(), this.destroy(), this.initialize(), t && this.stop(), this.$bus.$emit("scroll:reinitialized")
                    }
                }
            },
            l = c,
            u = (n(304), n(12)),
            h = Object(u.a)(l, (function() {
                var t = this;
                return (0, t._self._c)("div", t._b({}, "div", t.attributes, !1), [t._t("default", null, null, {
                    orientation: t.orientation
                })], 2)
            }), [], !1, null, null, null);
        e.default = h.exports
    }, , , function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 25 25"
                    }, u),
                    ...h
                }, o.concat([n("g", [n("path", {
                    attrs: {
                        d: "M21.7,22.1h-1c0-4.5-3.7-8.2-8.2-8.2c-4.5,0-8.2,3.7-8.2,8.2h-1c0-4.5,3.2-8.2,7.4-9.1c-2-0.7-3.4-2.7-3.4-4.9\n\t\tc0-2.9,2.4-5.2,5.2-5.2c2.9,0,5.2,2.4,5.2,5.2c0,2.2-1.4,4.2-3.4,4.9C18.6,13.9,21.7,17.6,21.7,22.1z M12.5,3.9\n\t\tc-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2c2.3,0,4.2-1.9,4.2-4.2S14.8,3.9,12.5,3.9z"
                    }
                })])]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 182 19"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        d: "M73.3,18.2H1.2v-0.4h72.1V18.2z M1.3,8.5v1.9c0,0.5,0,0.9,0,1.4c0,0.5,0,0.9-0.1,1.4c0.2,0,0.3,0,0.5,0\n\tc0.2,0,0.4,0,0.5,0c0-0.4,0-0.9-0.1-1.4c0-0.5,0-0.9,0-1.4V9.5c0.2,0,0.5,0,0.7,0c0.3,0,0.5,0,0.8,0c0.2,0,0.5,0,0.7,0\n\tc0.2,0,0.4,0,0.6,0c0-0.1,0-0.2,0-0.3s0-0.2,0-0.3C4.5,9,4,9,3.6,9C3.1,9,2.6,9,2.2,9c0-0.2,0-0.5,0-0.7s0-0.4,0-0.7\n\tc0-0.2,0-0.5,0-0.7s0-0.5,0-0.7c0.2,0,0.4,0,0.7,0c0.3,0,0.5,0,0.8,0s0.6,0,0.8,0c0.3,0,0.5,0,0.7,0.1c0-0.1,0-0.2,0-0.3\n\ts0-0.2,0-0.3c-0.4,0-0.8,0-1.1,0c-0.3,0-0.7,0-1,0s-0.7,0-1,0s-0.6,0-1,0c0,0.5,0,0.9,0.1,1.4C1.3,7.6,1.3,8.1,1.3,8.5z M6.7,8.5\n\tv1.9c0,0.5,0,0.9,0,1.4c0,0.5,0,0.9-0.1,1.4c0.3,0,0.7,0,1,0s0.7,0,1,0c0.3,0,0.7,0,1,0c0.3,0,0.6,0,1,0c0-0.1,0-0.2,0-0.3\n\tc0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c-0.2,0-0.4,0.1-0.6,0.1c-0.2,0-0.5,0-0.8,0s-0.5,0-0.8,0c-0.3,0-0.5,0-0.8,0\n\tc0-0.1,0-0.3,0-0.6c0-0.3,0-0.6,0-1v-0.7V10c0-0.1,0-0.2,0-0.3c0-0.1,0-0.1,0-0.2c0.1,0,0.3,0,0.5,0c0.2,0,0.5,0,0.7,0\n\tc0.2,0,0.5,0,0.8,0c0.2,0,0.5,0,0.7,0.1c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0-0.3c-0.2,0-0.3,0-0.5,0C9.6,9,9.4,9,9.2,9\n\tC8.9,9,8.7,9,8.5,9C8.2,9,7.9,9,7.6,9c0-0.1,0-0.3,0-0.6c0-0.3,0-0.5,0-0.8c0-0.3,0-0.5,0-0.7c0-0.2,0-0.4,0-0.7c0.4,0,0.7,0,0.9,0\n\ts0.5,0,0.7,0s0.4,0,0.6,0c0.2,0,0.4,0,0.6,0c0-0.1,0-0.2,0-0.3s0-0.2,0-0.3c-0.3,0-0.6,0-1,0c-0.3,0-0.6,0-1,0s-0.7,0-1,0\n\ts-0.6,0-1,0c0,0.5,0,0.9,0.1,1.4C6.7,7.6,6.7,8,6.7,8.5z M17.8,12.4c-0.1-0.3-0.3-0.7-0.5-1.1s-0.4-0.9-0.6-1.4\n\tc-0.2-0.5-0.4-1-0.6-1.5s-0.4-1-0.6-1.5C15.2,6.5,15,6,14.9,5.6h-0.2c-0.6,1.3-1.1,2.6-1.7,3.8c-0.6,1.3-1.1,2.5-1.7,3.8\n\tc0.1,0,0.3,0,0.4,0c0.1,0,0.3,0,0.4,0c0.1-0.3,0.2-0.8,0.4-1.3s0.4-1,0.6-1.6c0.2,0,0.4,0,0.7,0c0.2,0,0.4,0,0.7,0\n\tc0.2,0,0.5,0,0.7,0c0.2,0,0.5,0,0.7,0c0.1,0.2,0.2,0.5,0.3,0.8c0.1,0.3,0.2,0.5,0.3,0.8c0.1,0.3,0.2,0.5,0.3,0.7s0.2,0.4,0.2,0.6\n\tc0.1,0,0.2,0,0.3,0s0.2,0,0.3,0s0.2,0,0.3,0s0.2,0,0.3,0C18,13,17.9,12.8,17.8,12.4z M14.5,7l1.2,2.8c-0.2,0-0.4,0-0.6,0\n\tc-0.2,0-0.4,0-0.6,0c-0.2,0-0.4,0-0.6,0c-0.2,0-0.4,0-0.6,0L14.5,7z M20.1,8.5v1.9c0,0.5,0,0.9,0,1.4c0,0.5,0,0.9-0.1,1.4\n\tc0.2,0,0.3,0,0.5,0s0.4,0,0.5,0c0-0.4,0-0.9-0.1-1.4c0-0.5,0-0.9,0-1.4V8.5c0-0.8,0-1.5,0-2.2c0.2,0,0.4,0,0.6,0c0.2,0,0.4,0,0.6,0\n\tc0.2,0,0.4,0,0.6,0c0.2,0,0.4,0,0.5,0.1c0-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.2,0.1-0.3c-0.5,0-0.9,0-1.4,0c-0.5,0-0.9,0-1.4,0\n\tc-0.5,0-0.9,0-1.4,0c-0.5,0-0.9,0-1.4,0c0,0.1,0.1,0.3,0.1,0.3c0,0.1,0,0.2-0.1,0.3c0.2,0,0.3,0,0.5-0.1c0.2,0,0.4,0,0.6,0\n\tc0.2,0,0.4,0,0.6,0c0.2,0,0.4,0,0.6,0C20.1,7,20.1,7.8,20.1,8.5z M30.3,10c0,0.3,0,0.5-0.1,0.8c0,0.3-0.1,0.5-0.2,0.8\n\ts-0.2,0.5-0.4,0.7s-0.4,0.3-0.7,0.5c-0.3,0.1-0.6,0.2-1,0.2c-0.4,0-0.7,0-1-0.1s-0.5-0.2-0.7-0.4c-0.2-0.2-0.3-0.4-0.4-0.6\n\tc-0.1-0.2-0.2-0.5-0.2-0.7c0-0.2-0.1-0.5-0.1-0.8c0-0.3,0-0.5,0-0.8c0-0.4,0-0.8,0-1.2c0-0.4,0-0.7,0-1.1s0-0.6,0-0.9\n\tc0-0.3,0-0.5,0-0.6c-0.1,0-0.2,0-0.2,0s-0.2,0-0.2,0c-0.1,0-0.2,0-0.3,0s-0.2,0-0.3,0c0,0.3,0,0.7,0,1.2c0,0.5,0,1,0,1.6\n\tc0,0.3,0,0.5,0,0.8c0,0.3,0,0.6,0,0.9c0,1.1,0.2,1.8,0.7,2.3c0.5,0.5,1.3,0.7,2.4,0.7c0.5,0,0.9-0.1,1.3-0.2c0.4-0.1,0.7-0.3,1-0.6\n\tc0.3-0.3,0.5-0.6,0.6-1c0.1-0.4,0.2-0.8,0.2-1.3c0-0.4,0-0.8,0-1.2s0-0.8,0-1.2s0-0.8,0.1-1.1C31,6.3,31,6,31,5.7\n\tc-0.1,0-0.2,0.1-0.3,0.1c-0.1,0-0.1,0-0.2,0s-0.1,0-0.2,0c0,0.2,0,0.6,0.1,1.2c0,0.6,0,1.4,0,2.4C30.3,9.5,30.3,9.7,30.3,10z\n\t M33.1,10.4c0,0.5,0,0.9,0,1.4c0,0.5,0,0.9-0.1,1.4c0.2,0,0.3,0,0.5,0s0.4,0,0.5,0c0-0.4,0-0.9-0.1-1.4s0-0.9,0-1.4V9.6h0.4\n\tc0.2,0.2,0.5,0.5,0.8,0.9c0.3,0.3,0.6,0.7,0.8,1c0.3,0.3,0.5,0.7,0.7,1c0.2,0.3,0.4,0.5,0.5,0.7c0.1,0,0.2,0,0.3,0s0.2,0,0.3,0\n\tc0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3,0c-0.1-0.1-0.2-0.2-0.4-0.4c-0.2-0.2-0.3-0.4-0.5-0.6s-0.4-0.5-0.6-0.7\n\tc-0.2-0.3-0.4-0.5-0.6-0.7c-0.2-0.2-0.4-0.5-0.5-0.6c-0.2-0.2-0.3-0.3-0.4-0.5c0.2,0,0.4-0.1,0.7-0.2c0.3-0.1,0.5-0.2,0.7-0.4\n\ts0.4-0.4,0.6-0.6c0.2-0.2,0.2-0.5,0.2-0.9c0-0.3-0.1-0.6-0.2-0.8s-0.3-0.4-0.5-0.5c-0.2-0.1-0.4-0.2-0.7-0.3\n\tc-0.3-0.1-0.6-0.1-0.9-0.1c-0.2,0-0.4,0-0.6,0c-0.2,0-0.4,0-0.6,0s-0.4,0-0.6,0c-0.2,0-0.4,0-0.6,0c0,0.5,0,0.9,0.1,1.4\n\tc0,0.5,0,0.9,0,1.4V10.4z M34,8.5c0-0.4,0-0.8,0-1.2c0-0.4,0-0.8,0-1.2c0.1,0,0.3,0,0.4,0s0.4,0,0.6,0c0.2,0,0.4,0,0.6,0.1\n\tc0.2,0,0.4,0.1,0.5,0.2c0.2,0.1,0.3,0.3,0.4,0.4c0.1,0.2,0.2,0.4,0.2,0.7c0,0.3-0.1,0.6-0.2,0.8c-0.1,0.2-0.3,0.4-0.5,0.5\n\ts-0.4,0.2-0.7,0.3c-0.2,0.1-0.5,0.1-0.7,0.1c-0.1,0-0.3,0-0.4,0c-0.1,0-0.2,0-0.3,0V8.5z M39.7,8.5v1.9c0,0.5,0,0.9,0,1.4\n\tc0,0.5,0,0.9-0.1,1.4c0.3,0,0.7,0,1,0c0.3,0,0.7,0,1,0s0.7,0,1,0s0.6,0,1,0c0-0.1,0-0.2,0-0.3c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2\n\tc-0.2,0-0.4,0.1-0.6,0.1c-0.2,0-0.5,0-0.7,0c-0.3,0-0.5,0-0.8,0c-0.3,0-0.5,0-0.8,0c0-0.1,0-0.3,0-0.6c0-0.3,0-0.6,0-1v-0.7V10\n\tc0-0.1,0-0.2,0-0.3c0-0.1,0-0.1,0-0.2c0.1,0,0.3,0,0.5,0c0.2,0,0.5,0,0.7,0c0.2,0,0.5,0,0.8,0c0.2,0,0.5,0,0.7,0.1\n\tc0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0-0.3c-0.2,0-0.3,0-0.5,0s-0.4,0-0.6,0c-0.2,0-0.4,0-0.7,0c-0.3,0-0.5,0-0.9,0c0-0.1,0-0.3,0-0.6\n\tc0-0.3,0-0.5,0-0.8c0-0.3,0-0.5,0-0.7s0-0.4,0-0.7c0.4,0,0.7,0,0.9,0c0.3,0,0.5,0,0.7,0s0.4,0,0.6,0c0.2,0,0.4,0,0.6,0\n\tc0-0.1,0-0.2,0-0.3s0-0.2,0-0.3c-0.3,0-0.6,0-1,0s-0.6,0-1,0c-0.3,0-0.7,0-1,0s-0.6,0-1,0c0,0.5,0,0.9,0.1,1.4\n\tC39.7,7.6,39.7,8,39.7,8.5z M45.2,10.4c0,0.5,0,0.9,0,1.4c0,0.5,0,0.9-0.1,1.4c0.2,0,0.5,0,0.7,0c0.2,0,0.5,0,0.7,0s0.5,0,0.7,0\n\tc0.2,0,0.5,0,0.7,0c0.4,0,0.9-0.1,1.3-0.2c0.5-0.1,0.9-0.3,1.3-0.6c0.4-0.3,0.7-0.7,1-1.2s0.4-1.1,0.4-1.8c0-0.6-0.1-1.1-0.2-1.5\n\tc-0.1-0.4-0.3-0.8-0.6-1.1C50.8,6.4,50.4,6.1,50,6c-0.5-0.2-1-0.2-1.6-0.2c-0.3,0-0.5,0-0.8,0c-0.3,0-0.5,0-0.8,0s-0.5,0-0.8,0\n\ts-0.5,0-0.8,0c0,0.5,0,0.9,0.1,1.4c0,0.5,0,0.9,0,1.4V10.4z M46.1,8.5c0-0.4,0-0.8,0-1.2c0-0.4,0-0.7,0-1.1c0.2,0,0.5-0.1,0.8-0.1\n\ts0.6,0,0.9,0c0.4,0,0.9,0,1.2,0.1s0.7,0.3,1,0.5s0.5,0.6,0.6,1c0.2,0.4,0.2,0.9,0.2,1.6c0,0.7-0.1,1.3-0.3,1.8s-0.5,0.8-0.8,1.1\n\ts-0.7,0.4-1.1,0.5c-0.4,0.1-0.8,0.1-1.2,0.1c-0.3,0-0.5,0-0.8,0c-0.3,0-0.5,0-0.6-0.1c0-0.8-0.1-1.5-0.1-2.3V8.5z M56.3,11.1\n\tc0.2,0.5,0.5,0.9,0.8,1.2c0.4,0.3,0.8,0.6,1.3,0.7c0.5,0.2,1,0.2,1.6,0.2c0.6,0,1.2-0.1,1.7-0.2c0.5-0.2,0.9-0.4,1.3-0.7\n\tc0.4-0.3,0.6-0.7,0.8-1.2c0.2-0.5,0.3-1,0.3-1.6c0-0.6-0.1-1.2-0.3-1.6c-0.2-0.5-0.5-0.9-0.8-1.2c-0.4-0.3-0.8-0.6-1.3-0.8\n\ts-1.1-0.3-1.7-0.3c-0.6,0-1.1,0.1-1.6,0.3s-0.9,0.4-1.3,0.8c-0.4,0.3-0.6,0.7-0.8,1.2c-0.2,0.5-0.3,1-0.3,1.6\n\tC56,10.1,56.1,10.6,56.3,11.1z M62.9,11c-0.2,0.4-0.4,0.8-0.6,1.1s-0.6,0.5-1,0.6c-0.4,0.1-0.8,0.2-1.2,0.2c-0.4,0-0.8-0.1-1.2-0.2\n\ts-0.7-0.3-1-0.6s-0.5-0.6-0.6-1.1c-0.2-0.4-0.2-1-0.2-1.6c0-0.6,0.1-1.1,0.2-1.6s0.4-0.8,0.6-1.1s0.6-0.5,1-0.6S59.7,6,60.1,6\n\tc0.4,0,0.8,0.1,1.2,0.2c0.4,0.1,0.7,0.3,1,0.6s0.5,0.6,0.6,1.1s0.2,1,0.2,1.6C63.1,10.1,63,10.6,62.9,11z M71.8,13.3H72\n\tc0-0.1,0-0.2,0-0.4c0-0.2,0-0.4,0-0.6c0-0.2,0-0.5,0-0.8c0-0.3,0-0.5,0-0.8c0-0.3,0-0.5,0-0.8c0-0.3,0-0.5,0-0.7c0-0.2,0-0.5,0-0.8\n\ts0-0.7,0-1.1c0-0.4,0-0.7,0.1-1c0-0.3,0-0.6,0-0.7c-0.1,0-0.3,0.1-0.3,0.1c-0.1,0-0.2,0-0.4-0.1c0,0.6,0.1,1.3,0.1,2s0,1.5,0,2.2\n\tv1.5c-0.3-0.3-0.7-0.7-1.2-1.2s-0.9-1-1.4-1.5c-0.5-0.5-1-1.1-1.5-1.6c-0.5-0.5-1-1.1-1.4-1.5h-0.2c0,0.2,0,0.6,0,1.1\n\tc0,0.5,0,1.1,0,1.8c0,0.2,0,0.5,0,0.8c0,0.3,0,0.6,0,0.9c0,0.3,0,0.6,0,1c0,0.3,0,0.6,0,0.9s0,0.5,0,0.7c0,0.2,0,0.3,0,0.4\n\tc0.1,0,0.3,0,0.4,0c0.1,0,0.3,0,0.4,0c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4,0-0.6c0-0.2,0-0.5,0-0.7c0-0.3,0-0.5,0-0.8c0-0.2,0-0.5,0-0.7\n\tc0-0.2,0-0.4,0-0.6c0-0.6,0-1.1,0-1.4c0-0.3,0-0.6,0-0.8c0.9,1,1.9,2,2.8,3C70.1,11.4,71,12.4,71.8,13.3z M86,5\n\tc2.4,0,3.3,1.2,3.3,3.2v6.1h-2.6v-0.8c-0.5,0.4-1.3,1-2.4,1c-1.4,0-2.8-0.7-2.8-2.7c0-2.4,1.8-3.1,3.9-3.1h1.4V8.4\n\tc0-0.7-0.3-1.2-1.2-1.2c-0.9,0-2.1,0.4-2.9,0.7l-0.5-1.9C82.9,5.7,84.3,5,86,5 M86.7,10.2h-1c-1,0-1.5,0.4-1.5,1.2c0,0.7,0.4,1,1,1\n\tc0.6,0,1.2-0.4,1.5-0.7V10.2z M93.2,6.5V5.2h-2.6v9.1h2.6V8.7c0.5-0.7,1.6-1.3,2.6-1.3V5C94.5,5,93.7,5.6,93.2,6.5 M100.5,7.2\n\tc1,0,1.7,0.5,2.2,0.7l0.8-1.8c-0.5-0.4-1.5-1.1-3.2-1.1C98.1,5,96,6.1,96,9.8c0,3.6,2.1,4.6,4.1,4.6c1.7,0,2.7-0.7,3.3-1.3l-1-1.8\n\tc-0.5,0.3-1.2,0.8-2.1,0.8c-0.9,0-1.7-0.7-1.7-2.5C98.7,8,99.5,7.2,100.5,7.2 M113,5.2v7.1h-1.6l0-4.6c0-1.9-1-2.7-2.4-2.7\n\tc-1.4,0-2.2,0.8-2.6,1.2V0.8h-2.6v13.5h2.6V8.1c0.3-0.2,1-0.6,1.5-0.6c0.6,0,0.9,0.4,0.9,1l0,5.9h6.8V5.2H113z M115.6,1.4H113V4h2.6\n\tV1.4z M122.2,5c1.7,0,3.3,1.2,3.3,4.6c0,3.8-1.5,4.9-3.4,4.9c-1.2,0-1.8-0.4-2.3-0.7v4.3h-2.6V5.2h2.6v0.7\n\tC120.3,5.5,120.9,5,122.2,5 M121.4,12.4c0.8,0,1.4-0.4,1.4-2.8c0-2.2-0.7-2.5-1.5-2.5c-0.6,0-1.1,0.4-1.4,0.6v4.1\n\tC120.3,12.1,120.8,12.4,121.4,12.4 M128.8,6.5V5.2h-2.6v9.1h2.6V8.7c0.5-0.7,1.6-1.3,2.6-1.3V5C130,5,129.3,5.6,128.8,6.5 M136.1,5\n\tc2.4,0,4.5,1.5,4.5,4.7c0,3.2-2,4.7-4.5,4.7c-2.5,0-4.5-1.5-4.5-4.7C131.6,6.5,133.6,5,136.1,5 M136.1,12.4c1.1,0,1.8-0.7,1.8-2.6\n\tc0-2-0.6-2.7-1.8-2.7c-1.1,0-1.8,0.7-1.8,2.7C134.3,11.6,135,12.4,136.1,12.4 M146.7,0.8h2.6v13.5h-2.6v-0.8c-0.3,0.3-1.1,1-2.3,1\n\tc-1.8,0-3.3-1.2-3.3-4.8c0-3.7,2-4.7,3.6-4.7c1.2,0,1.8,0.4,2.1,0.7V0.8z M146.7,7.7c-0.2-0.2-0.7-0.5-1.4-0.5\n\tc-0.9,0-1.5,0.6-1.5,2.5c0,2.2,0.5,2.7,1.3,2.7c0.7,0,1.2-0.4,1.6-0.7V7.7z M155.4,11.4c-0.4,0.3-1,0.8-1.6,0.8\n\tc-0.6,0-0.8-0.4-0.8-1V5.2h-2.6v6.5c0,1.9,0.9,2.7,2.4,2.7c1.4,0,2.2-0.8,2.7-1.2v1h2.6V5.2h-2.6V11.4z M163.2,7.2\n\tc1,0,1.7,0.5,2.2,0.7l0.8-1.8C165.7,5.8,164.7,5,163,5c-2.1,0-4.2,1.1-4.2,4.8c0,3.6,2.1,4.6,4.1,4.6c1.7,0,2.7-0.7,3.3-1.3l-1-1.8\n\tc-0.5,0.3-1.2,0.8-2.1,0.8c-0.9,0-1.7-0.7-1.7-2.5C161.4,8,162.2,7.2,163.2,7.2 M177.3,8.7l-0.6-0.2c-0.6-0.2-1-0.3-1-0.7\n\tc0-0.4,0.4-0.6,0.8-0.6c0.8,0,1.6,0.3,2.3,0.6l0.6-1.9c-0.5-0.3-1.5-0.9-3-0.9c-0.5,0-1,0.1-1.4,0.2h-3.7v0h-0.9V2.7l-2.6,0.6v1.9\n\th-1v2h1v4.9c0,1.4,0.7,2.3,2.1,2.3c1.1,0,1.8-0.4,2.2-0.7l-0.5-1.8c-0.3,0.1-0.5,0.2-0.8,0.2c-0.3,0-0.4-0.2-0.4-0.6V7.2h0.9h0h1.8\n\tc0,0.2-0.1,0.5-0.1,0.8c0,1.9,1.4,2.5,2.4,2.7l0.5,0.2c0.6,0.2,1,0.3,1,0.8c0,0.4-0.3,0.6-0.9,0.6c-0.7,0-1.7-0.4-2.5-0.8l-0.7,1.9\n\tc0.6,0.4,1.9,1,3.5,1c1.9,0,3.3-0.7,3.3-3C179.6,9.6,178.3,9,177.3,8.7 M180,3.4c0,0.2-0.1,0.3-0.3,0.4l0.3,0.6h-0.2l-0.3-0.6h-0.2\n\tv0.6h-0.2V3h0.5C179.8,3,180,3.2,180,3.4 M179.5,3.7c0.2,0,0.3-0.1,0.3-0.3s-0.1-0.3-0.3-0.3h-0.3v0.5H179.5z M179.5,2.4\n\tc0.7,0,1.3,0.6,1.3,1.3S180.2,5,179.5,5c-0.7,0-1.3-0.6-1.3-1.3S178.8,2.4,179.5,2.4 M179.5,4.8c0.6,0,1.1-0.5,1.1-1.1\n\ts-0.5-1.1-1.1-1.1c-0.6,0-1.1,0.5-1.1,1.1S178.9,4.8,179.5,4.8"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        viewBox: "0 0 12 18",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, u),
                    ...h
                }, o.concat([n("rect", {
                    staticClass: "arrow-cta__above",
                    attrs: {
                        width: "6",
                        height: "6"
                    }
                }), n("rect", {
                    staticClass: "arrow-cta__middle",
                    attrs: {
                        x: "6",
                        y: "6",
                        width: "6",
                        height: "6"
                    }
                }), n("rect", {
                    staticClass: "arrow-cta__bottom",
                    attrs: {
                        y: "12",
                        width: "6",
                        height: "6"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 18 12"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        d: "M6,0v6H0V0H6z M18,0v6h-6V0H18z M12,6v6H6V6H12z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 14.2 14.2"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        d: "M7.1,10.6L0.7,4.3l0.7-0.7l5.6,5.6l5.6-5.6l0.7,0.7L7.1,10.6z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 849 101"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    staticClass: "bolded-by__first",
                    attrs: {
                        d: "M29.5,79.8c-3.9,0-7.4-0.8-10.6-2.3c-3.1-1.5-5.4-3.6-6.9-6.1v7.2H0V1h12.9v31.4c1.4-2.6,3.5-4.6,6.5-6.1\n\tc2.9-1.5,6.3-2.3,10.1-2.3c5,0,9.4,1.2,13.5,3.7c4,2.4,7.2,5.8,9.5,10.1C54.8,42,56,46.7,56,51.9c0,5.2-1.2,9.9-3.6,14.2\n\tc-2.3,4.2-5.5,7.6-9.6,10C38.9,78.5,34.4,79.8,29.5,79.8z M27.5,69c4.5,0,8.2-1.6,11.1-4.8c2.9-3.2,4.4-7.3,4.4-12.3\n\tc0-5-1.5-9.1-4.4-12.3c-2.9-3.2-6.6-4.8-11.1-4.8c-2.9,0-5.6,0.8-8,2.3c-2.4,1.4-4.2,3.5-5.6,6.1c-1.3,2.6-1.9,5.5-1.9,8.7\n\ts0.6,6.2,1.9,8.8c1.4,2.6,3.2,4.6,5.6,6.1C21.9,68.3,24.5,69,27.5,69z M92.3,80.3c-5.3,0-10.2-1.3-14.5-3.8\n\tc-4.4-2.5-7.9-5.9-10.5-10.2c-2.5-4.4-3.8-9.2-3.8-14.4s1.3-10,3.8-14.3c2.6-4.4,6.1-7.8,10.5-10.3c4.4-2.5,9.2-3.8,14.5-3.8\n\tc5.2,0,10.1,1.3,14.4,3.8c4.4,2.5,7.8,6,10.3,10.3c2.6,4.3,3.9,9.1,3.9,14.3s-1.3,10.1-3.9,14.4c-2.5,4.3-6,7.7-10.3,10.2\n\tC102.3,79.1,97.5,80.3,92.3,80.3z M92.3,69.1c4.5,0,8.3-1.6,11.2-4.8c2.9-3.2,4.4-7.4,4.4-12.4s-1.5-9.2-4.4-12.4\n\tc-2.9-3.2-6.7-4.8-11.2-4.8c-4.6,0-8.4,1.6-11.3,4.8c-2.9,3.2-4.4,7.4-4.4,12.4S78,61,81,64.3C83.9,67.5,87.7,69.1,92.3,69.1z\n\t M190.1,79.8c-5,0-9.5-1.2-13.6-3.7c-4-2.4-7.2-5.8-9.6-10c-2.3-4.3-3.4-9.1-3.4-14.2c0-5.2,1.2-9.9,3.4-14.1\n\tc2.4-4.3,5.6-7.7,9.6-10.1c4.1-2.4,8.6-3.7,13.6-3.7c3.7,0,7.1,0.8,10,2.3c3,1.5,5.2,3.6,6.6,6.1V1h12.9v77.6h-12.2v-7.2\n\tc-1.5,2.6-3.8,4.6-7,6.1C197.3,79,193.9,79.8,190.1,79.8z M192,69c4.5,0,8.2-1.6,11.1-4.8c2.9-3.2,4.4-7.3,4.4-12.3\n\tc0-5-1.5-9.1-4.4-12.3c-2.9-3.2-6.6-4.8-11.1-4.8c-2.9,0-5.6,0.8-8,2.3c-2.4,1.4-4.2,3.5-5.6,6.1c-1.3,2.6-1.9,5.5-1.9,8.7\n\ts0.6,6.2,1.9,8.8c1.4,2.6,3.2,4.6,5.6,6.1C186.4,68.3,189.1,69,192,69z M283.6,50.6c0,1.7-0.1,3.3-0.4,5.1h-40.4\n\tc0.4,4.5,1.8,8,4.4,10.7c2.7,2.6,6.1,3.9,10.3,3.9c3.3,0,6.1-0.8,8.5-2.5c2.4-1.7,3.9-3.9,4.5-6.8l11.1,2.9c-0.5,3.2-1.9,6-4.1,8.5\n\tc-2.2,2.5-5.1,4.5-8.6,5.9c-3.4,1.4-7.3,2-11.4,2c-5.5,0-10.4-1.2-14.7-3.6c-4.2-2.4-7.4-5.7-9.8-10c-2.3-4.3-3.4-9.3-3.4-14.9\n\tc0-5.4,1.2-10.2,3.6-14.5c2.4-4.4,5.6-7.8,9.8-10.2c4.2-2.4,8.9-3.7,14.1-3.7c5.1,0,9.7,1.2,13.7,3.6c4,2.3,7.1,5.5,9.4,9.6\n\tC282.5,40.7,283.6,45.3,283.6,50.6z M270.7,47c0-4.1-1.3-7.4-3.9-9.9c-2.5-2.5-5.9-3.8-10-3.8c-3.8,0-7,1.2-9.5,3.7\n\tc-2.5,2.4-4,5.8-4.5,10H270.7z M317.7,79.8c-5,0-9.5-1.2-13.6-3.7c-4-2.4-7.2-5.8-9.6-10c-2.3-4.3-3.4-9.1-3.4-14.2\n\tc0-5.2,1.1-9.9,3.4-14.1c2.4-4.3,5.6-7.7,9.6-10.1c4.1-2.4,8.6-3.7,13.6-3.7c3.7,0,7.1,0.8,10,2.3c3,1.5,5.2,3.6,6.6,6.1V1h12.9\n\tv77.6h-12.2v-7.2c-1.5,2.6-3.8,4.6-7,6.1C325,79,321.5,79.8,317.7,79.8z M319.7,69c4.5,0,8.2-1.6,11.1-4.8c2.9-3.2,4.4-7.3,4.4-12.3\n\tc0-5-1.5-9.1-4.4-12.3c-2.9-3.2-6.6-4.8-11.1-4.8c-2.9,0-5.6,0.8-8,2.3c-2.4,1.4-4.2,3.5-5.6,6.1c-1.3,2.6-1.9,5.5-1.9,8.7\n\ts0.6,6.2,1.9,8.8c1.4,2.6,3.2,4.6,5.6,6.1C314.1,68.3,316.7,69,319.7,69z M411.4,79.8c-3.9,0-7.4-0.8-10.6-2.3\n\tc-3.1-1.5-5.4-3.6-6.9-6.1v7.2h-12.1V1h12.9v31.4c1.4-2.6,3.5-4.6,6.5-6.1c2.9-1.5,6.3-2.3,10.1-2.3c5,0,9.4,1.2,13.5,3.7\n\tc4,2.4,7.2,5.8,9.5,10.1c2.4,4.2,3.6,8.9,3.6,14.1c0,5.2-1.2,9.9-3.6,14.2c-2.3,4.2-5.5,7.6-9.6,10\n\tC420.8,78.5,416.3,79.8,411.4,79.8z M409.4,69c4.5,0,8.2-1.6,11.1-4.8c2.9-3.2,4.4-7.3,4.4-12.3c0-5-1.5-9.1-4.4-12.3\n\tc-2.9-3.2-6.6-4.8-11.1-4.8c-2.9,0-5.6,0.8-8,2.3c-2.4,1.4-4.2,3.5-5.6,6.1c-1.3,2.6-1.9,5.5-1.9,8.7s0.6,6.2,1.9,8.8\n\tc1.4,2.6,3.2,4.6,5.6,6.1C403.8,68.3,406.4,69,409.4,69z M452.1,100.1c-2.7,0-5.1-0.3-7.1-0.9l0.1-11.1c1.7,0.5,3.4,0.8,5.4,0.8\n\tc3,0,5.5-0.7,7.5-2.2c2.1-1.4,3.8-3.7,5.2-6.9l1-2.6l-23.4-52.2h14.7l15.9,38l13.9-38h14.3l-22.8,54.1c-3,7.3-6.6,12.6-10.7,15.9\n\tC462,98.5,457.4,100.1,452.1,100.1z M149.3,81c-3.5,0-6.7-0.7-9.5-2.2c-2.8-1.4-5-3.4-6.6-6c-1.6-2.6-2.4-5.5-2.4-8.8\n\tc0-2.9,0.5-6.3,1.4-10.2L144.7,0L157,2.7l-12.5,53.9c-0.4,2.2-0.6,4-0.6,5.4c0,2.6,0.8,4.6,2.5,6.1c1.7,1.4,4,2.2,6.7,2.2\n\tc1,0,1.8,0,2.5-0.1l-2,10.5C152,80.9,150.6,81,149.3,81z"
                    }
                }), n("path", {
                    staticClass: "bolded-by__second",
                    attrs: {
                        d: "M524.2,25.1h14.4l12.8,40.4l11-40.4h16.7l11.1,40.4L603,25.1h14l-19.4,53.4h-15.2l-11.7-39.8L559,78.6h-15.4L524.2,25.1z\n\t M674.5,50.6c0,1.7-0.1,3.3-0.4,5.1h-40.4c0.4,4.5,1.8,8,4.4,10.7c2.7,2.6,6.1,3.9,10.3,3.9c3.3,0,6.1-0.8,8.5-2.5\n\tc2.4-1.7,3.9-3.9,4.5-6.8l11.1,2.9c-0.5,3.2-1.9,6-4.1,8.5c-2.2,2.5-5.1,4.5-8.6,5.9c-3.4,1.4-7.3,2-11.4,2\n\tc-5.5,0-10.4-1.2-14.7-3.6c-4.2-2.4-7.4-5.7-9.8-10c-2.3-4.3-3.4-9.3-3.4-14.9c0-5.4,1.2-10.2,3.6-14.5c2.4-4.4,5.6-7.8,9.8-10.2\n\ts8.9-3.7,14.1-3.7c5.1,0,9.7,1.2,13.7,3.6c4,2.3,7.1,5.5,9.4,9.6C673.3,40.7,674.5,45.3,674.5,50.6z M661.5,47\n\tc0-4.1-1.3-7.4-3.9-9.9c-2.5-2.5-5.9-3.8-10-3.8c-3.8,0-7,1.2-9.5,3.7c-2.5,2.4-4,5.8-4.5,10H661.5z M716.6,52.6h-34.1V41.7h34.1\n\tV52.6z M754,100.8c-7.9,0-14.3-1.8-19.1-5.5c-4.8-3.7-7.4-8.7-7.9-15.1l12.4-1.2c0.4,3.5,1.8,6.2,4.4,8.1c2.6,1.9,5.9,2.9,9.9,2.9\n\tc4.6,0,8.1-1.4,10.6-4.2c2.4-2.7,3.7-6.6,3.7-11.6v-5.9c-1.1,2.4-3.3,4.3-6.5,5.8c-3.1,1.4-6.5,2.2-10.2,2.2c-5,0-9.4-1.1-13.5-3.3\n\tc-4-2.3-7.1-5.4-9.4-9.4c-2.2-4-3.3-8.5-3.3-13.5s1.1-9.4,3.4-13.4c2.3-4,5.5-7,9.5-9.3c4-2.3,8.5-3.4,13.6-3.4\n\tc3.7,0,7.1,0.8,10.2,2.3s5.5,3.4,6.9,5.7v-6.8h12.2v46.1c0,9.2-2.4,16.4-7.2,21.7C769,98.2,762.4,100.8,754,100.8z M753.4,65.4\n\tc4.5,0,8.1-1.4,11-4.3c2.9-2.9,4.4-6.6,4.4-11.1s-1.5-8.1-4.4-11c-2.9-2.9-6.5-4.3-11-4.3c-4.4,0-8,1.4-11,4.3\n\tc-2.9,2.9-4.3,6.5-4.3,11s1.4,8.2,4.3,11.1C745.3,64,749,65.4,753.4,65.4z M819.6,80.3c-5.3,0-10.2-1.3-14.5-3.8\n\tc-4.4-2.5-7.9-5.9-10.5-10.2c-2.5-4.4-3.8-9.2-3.8-14.4s1.3-10,3.8-14.3c2.6-4.4,6.1-7.8,10.5-10.3c4.4-2.5,9.2-3.8,14.5-3.8\n\tc5.2,0,10.1,1.3,14.4,3.8c4.4,2.5,7.8,6,10.3,10.3c2.6,4.3,3.9,9.1,3.9,14.3s-1.3,10.1-3.9,14.4c-2.5,4.3-6,7.7-10.3,10.2\n\tC829.7,79.1,824.9,80.3,819.6,80.3z M819.6,69.1c4.5,0,8.3-1.6,11.2-4.8c2.9-3.2,4.4-7.4,4.4-12.4s-1.5-9.2-4.4-12.4\n\tc-2.9-3.2-6.7-4.8-11.2-4.8c-4.6,0-8.4,1.6-11.3,4.8c-2.9,3.2-4.4,7.4-4.4,12.4s1.5,9.2,4.4,12.4C811.3,67.5,815,69.1,819.6,69.1z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 25 25"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        fill: "#151615",
                        d: "M20.7,23.6l-8.5-5.9l-8,5.5V1.9h16.5V23.6z M12.2,16.4l7.5,5.2V2.9H5.3v18.4L12.2,16.4z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 30 30"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M29,7v4h-4V7H29z M1,11h4V7H1V11z M13,11H9v4h4h4h4v-4h-4H13z M25,19h4v-4h-4V19z M1,19h4v-4H1V19z M25,27h4v-4\n\th-4V27z M1,27h4v-4H1V27z M21,3h-4h-4H9H5v4h4h4h4h4h4V3H21z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M13,11H9v4h4V11z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 30 30"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M27,15v4h-4v-4H27z M23,15v-4h-4v4H23z M19,7h-4v4h4V7z M19,23h4v-4h-4V23z M15,15v-4h-4v4H7v4h4v4H7H3v4h4h4h4\n\tv-4v-4h4v-4H15z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M23,3h-4v4h4V3z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 30 30"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M21,5v4h-4V5H21z M5,13h4V9H5V13z M21,9v4h4V9H21z M9,9h4V5H9V9z M13,1v4h4V1H13z M9,29h4v-4H9H5v4H9z M17,25v4\n\th4h4v-4h-4H17z M1,17v4v4h4v-4v-4v-4H1V17z M25,13v4v4v4h4v-4v-4v-4H25z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M17,17h-4v4h4V17z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M17,25h-4v4h4V25z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 425.2 425.2"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        d: "M369.8,419L212.3,261.5L54.8,419L6.3,370.6L163.9,213L6.3,55.5L54.8,7.1l157.5,157.5L369.9,7l48.4,48.4L260.8,213\n\tl157.5,157.5L369.8,419z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 25 25"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M20,6.7l-4.4-4.3c-0.3-0.3-0.8-0.5-1.3-0.5H6.3c-1,0-1.8,0.8-1.8,1.8v17.6c0,1,0.8,1.8,1.8,1.8h12.4\n\tc1,0,1.8-0.8,1.8-1.8V8C20.5,7.5,20.3,7,20,6.7z M18.8,6.9h-3.4V3.5L18.8,6.9z M19.5,21.3c0,0.5-0.4,0.8-0.8,0.8H6.3\n\tc-0.5,0-0.8-0.4-0.8-0.8V3.7c0-0.5,0.4-0.8,0.8-0.8h8.1c0,0,0,0,0,0v5h5.1c0,0,0,0,0,0.1V21.3z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 30 30"
                    }, u),
                    ...h
                }, o.concat([n("g", [n("polygon", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        points: "17,17 21,17 21,13 17,13 13,13 13,17 \t"
                    }
                }), n("rect", {
                    staticClass: "golden-icon",
                    attrs: {
                        x: "9",
                        y: "17",
                        fill: "#BDA069",
                        width: "4",
                        height: "4"
                    }
                }), n("polygon", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        points: "17,25 21,25 25,25 25,21 21,21 17,21 13,21 13,25 \t"
                    }
                }), n("polygon", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        points: "21,9 25,9 25,5 21,5 17,5 13,5 13,9 17,9 \t"
                    }
                }), n("polygon", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        points: "5,13 1,13 1,17 5,17 9,17 9,13 \t"
                    }
                }), n("rect", {
                    staticClass: "golden-icon",
                    attrs: {
                        x: "9",
                        y: "9",
                        fill: "#BDA069",
                        width: "4",
                        height: "4"
                    }
                })]), n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M13,13H9v4h4V13z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 150 150"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        d: "M83.1,44.4v12.5h16.8c-0.5,9.2-2.2,17.9-2.2,17.9H83.1v53.6H60.9V74.7H50.1V56.9h10.8V42.2\n\tc0-2.7-0.5-20.6,22.7-20.6h16.2v19H88C85.3,40.6,83.7,42.2,83.1,44.4z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 25 25"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        d: "M16.8,13.7c-1.5,0-2.8,1.1-3,2.5L2,16.2c-0.3,0-0.6,0.3-0.6,0.6c0,0.3,0.3,0.6,0.6,0.6l11.8,0c0.3,1.4,1.5,2.5,3,2.5\n\tc1.5,0,2.8-1.1,3-2.5l3.2,0c0.3,0,0.6-0.3,0.6-0.6c0-0.3-0.3-0.6-0.6-0.6l-3.2,0C19.6,14.8,18.3,13.7,16.8,13.7L16.8,13.7z M16.8,15\n\tc1,0,1.9,0.8,1.9,1.9c0,1-0.8,1.9-1.9,1.9c-1,0-1.9-0.8-1.9-1.9C15,15.8,15.8,15,16.8,15z M8.2,5.1c-1.5,0-2.8,1.1-3,2.5L2,7.5\n\tc-0.3,0-0.6,0.3-0.6,0.6c0,0.3,0.3,0.6,0.6,0.6l3.2,0c0.3,1.4,1.5,2.5,3,2.5c1.5,0,2.8-1.1,3-2.5l11.8,0c0.3,0,0.6-0.3,0.6-0.6\n\tc0-0.3-0.3-0.6-0.6-0.6l-11.8,0C10.9,6.1,9.7,5.1,8.2,5.1L8.2,5.1z M8.2,6.3c1,0,1.9,0.8,1.9,1.9c0,1-0.8,1.9-1.9,1.9\n\tc-1,0-1.9-0.8-1.9-1.9C6.3,7.1,7.1,6.3,8.2,6.3z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 25 25"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M1.5,16.6h3.7v3.7H1.5V16.6z M19.8,16.6v3.7h3.7v-3.7H19.8z M8.8,13H5.2v3.7h3.7h0h3.7V13H8.8L8.8,13z M16.2,13\n\tv3.7h3.7V13H16.2z M12.5,16.6h3.7V13h-3.7V16.6z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M16.2,4.7H8.8V12h7.3V4.7z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 25 25"
                    }, u),
                    ...h
                }, o.concat([n("g", [n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M5.4,16.8h2.9v-2.9H5.4V16.8z M2.5,13.9h2.9v-2.9H2.5V13.9z M8.2,19.6h2.9v-2.9H8.2V19.6z M16.8,16.8h2.9v-2.9\n\t\th-2.9V16.8z M19.6,13.9h2.9v-2.9h-2.9V13.9z M13.9,19.6h2.9v-2.9h-2.9V19.6z M11.1,2.5h2.9v2.9v2.9v2.9v2.9h-2.9v-2.9V8.2V5.4V2.5z\n\t\t"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M11.1,16.8h2.9v-2.9h-2.9V16.8z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M11.1,22.5h2.9v-2.9h-2.9V22.5z"
                    }
                })])]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 25 25"
                    }, u),
                    ...h
                }, o.concat([n("g", [n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M8.2,5.4v2.9h2.9V5.4H8.2z M11.1,2.5v2.9h2.9V2.5H11.1z M5.4,8.2v2.9h2.9V8.2H5.4z M8.2,16.8v2.9h2.9v-2.9H8.2\n\t\tz M11.1,19.6v2.9h2.9v-2.9H11.1z M5.4,13.9v2.9h2.9v-2.9H5.4z M22.5,11.1v2.9h-2.9h-2.9h-2.9h-2.9v-2.9h2.9h2.9h2.9H22.5z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M8.2,11.1v2.9h2.9v-2.9H8.2z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M2.5,11.1v2.9h2.9v-2.9H2.5z"
                    }
                })])]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 25 25"
                    }, u),
                    ...h
                }, o.concat([n("g", [n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M16.8,19.6v-2.9h-2.9v2.9H16.8z M13.9,22.5v-2.9h-2.9v2.9H13.9z M19.6,16.8v-2.9h-2.9v2.9H19.6z M16.8,8.2V5.4\n\t\th-2.9v2.9H16.8z M13.9,5.4V2.5h-2.9v2.9H13.9z M19.6,11.1V8.2h-2.9v2.9H19.6z M2.5,13.9v-2.9h2.9h2.9h2.9h2.9v2.9h-2.9H8.2H5.4H2.5\n\t\tz"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M16.8,13.9v-2.9h-2.9v2.9H16.8z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M22.5,13.9v-2.9h-2.9v2.9H22.5z"
                    }
                })])]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 25 25"
                    }, u),
                    ...h
                }, o.concat([n("g", [n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M19.6,8.2h-2.9v2.9h2.9V8.2z M22.5,11.1h-2.9v2.9h2.9V11.1z M16.8,5.4h-2.9v2.9h2.9V5.4z M8.2,8.2H5.4v2.9h2.9\n\t\tV8.2z M5.4,11.1H2.5v2.9h2.9V11.1z M11.1,5.4H8.2v2.9h2.9V5.4z M13.9,22.5h-2.9v-2.9v-2.9v-2.9v-2.9h2.9v2.9v2.9v2.9V22.5z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M13.9,8.2h-2.9v2.9h2.9V8.2z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M13.9,2.5h-2.9v2.9h2.9V2.5z"
                    }
                })])]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 25 25"
                    }, u),
                    ...h
                }, o.concat([n("g", [n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M6.5,12.5h-4v4h4V12.5z M14.5,12.5h-4v4h4V12.5z M18.5,8.5h-4v4h4V8.5z M22.5,4.5h-4v4h4V4.5z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M10.5,16.5h-4v4h4V16.5z"
                    }
                })])]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 60 60"
                    }, u),
                    ...h
                }, o.concat([n("g", [n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M30,19.7l9.7,9.7L30,39.2l-9.7-9.7L30,19.7z M10.5,0.8l9.7,9.7l-9.7,9.7l-9.7-9.7L10.5,0.8z M30,19.7l9.7,9.7\n\t\tL30,39.2l-9.7-9.7L30,19.7z M49.5,0.8l9.7,9.7l-9.7,9.7l-9.7-9.7L49.5,0.8z M10.5,39.7l9.7,9.7l-9.7,9.7l-9.7-9.7L10.5,39.7z\n\t\t M30,19.7l9.7,9.7L30,39.2l-9.7-9.7L30,19.7z M49.5,39.7l9.7,9.7l-9.7,9.7l-9.7-9.7L49.5,39.7z M30,19.7l9.7,9.7L30,39.2l-9.7-9.7\n\t\tL30,19.7z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M30,19.7l9.7,9.7L30,39.2l-9.7-9.7L30,19.7z"
                    }
                })])]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 25 25"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M14.5,18.5h-4v4h4V18.5z M14.5,6.5h-4v4h4V6.5z M14.5,14.5h-4v4h4V14.5z M14.5,2.5h-4v4h4V2.5z M6.5,14.5v-4h-4\n\tv4H6.5z M18.5,14.5v-4h-4v4H18.5z M10.5,14.5v-4h-4v4H10.5z M22.5,14.5v-4h-4v4H22.5z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M14.5,14.5v-4h-4v4H14.5z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 25 25"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M6.5,10.5h-4v4h4V10.5z M10.5,10.5h-4v4h4V10.5z M18.5,10.5h-4v4h4V10.5z M22.5,10.5h-4v4h4V10.5z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M14.5,10.5h-4v4h4V10.5z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 25 25"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M22.6,19.3h-3.3v3.3h3.3V19.3z M5.8,5.9H2.5v3.3h3.3V5.9z M12.5,12.6h3.3V9.3h-3.3V12.6z M5.8,9.3H2.5v3.3h3.3\n\tV9.3z M12.5,9.3h3.3V5.9h-3.3V9.3z M12.5,2.6H9.2v3.3h3.3V2.6z M5.8,15.9h3.3v-3.3H5.8V15.9z M9.2,2.6H5.9v3.3h3.3V2.6z M9.1,15.9\n\th3.3v-3.3H9.1V15.9z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M19.2,15.9h-3.3v3.3h3.3V15.9z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 30 30"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M25,3v4v4v4v4v4v4h-4v-4v-4v-4v-4V7V3H25z M5,11v4v4v4v4h4v-4v-4v-4v-4V7H5V11z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M9,3H5v4h4V3z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M17,14h-4v4h4V14z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [{
                        "enable-background": "new 0 0 519.9 541.9"
                    }, c, l],
                    attrs: Object.assign({
                        version: "1.1",
                        id: "Livello_1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 519.9 541.9",
                        style: "enable-background:new 0 0 519.9 541.9;",
                        "xml:space": "preserve"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        d: "M400,37.6H120c-24.7,0-48.5,9.9-66,27.4c-17.5,17.5-27.3,41.2-27.4,66v280c0,24.7,9.9,48.5,27.4,66\n\tc17.5,17.5,41.2,27.3,66,27.4h280c24.7,0,48.5-9.9,66-27.4c17.5-17.5,27.3-41.2,27.4-66v-280c0-24.7-9.9-48.5-27.4-66\n\tC448.4,47.5,424.7,37.6,400,37.6L400,37.6z M446.6,410.9c0,12.4-4.9,24.2-13.7,33c-8.8,8.7-20.6,13.7-33,13.7H120\n\tc-12.4,0-24.2-4.9-33-13.7s-13.7-20.6-13.7-33v-280c0-12.4,4.9-24.2,13.7-33s20.6-13.7,33-13.7h280c12.4,0,24.2,4.9,33,13.7\n\tc8.7,8.8,13.7,20.6,13.7,33V410.9z M260,166.8c-27.6,0-54.1,11-73.6,30.5c-19.5,19.5-30.5,46-30.5,73.6c0,27.6,11,54.1,30.5,73.6\n\ts46,30.5,73.6,30.5c27.6,0,54.1-11,73.6-30.5c19.5-19.5,30.5-46,30.5-73.6c0-27.6-11-54.1-30.5-73.6S287.6,166.9,260,166.8\n\tL260,166.8z M260,328.4c-15.2,0-29.8-6.1-40.6-16.8c-10.8-10.8-16.8-25.4-16.8-40.6c0-15.2,6.1-29.8,16.8-40.6\n\tc10.8-10.8,25.4-16.8,40.6-16.8c15.2,0,29.8,6.1,40.6,16.8s16.8,25.4,16.8,40.6c0,15.2-6.1,29.8-16.8,40.6\n\tC289.8,322.3,275.2,328.4,260,328.4L260,328.4z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 25 25"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        fill: "#000",
                        d: "M8.5,3.5l9,9l-9,9l-1-1l8-8l-8-8L8.5,3.5z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 16 16"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M12,5c2.9,0,3.8,1.7,3.9,4l0,0.3c0,0.1,0,0.1,0,0.2l0,0.4l0,6l-3.3,0l0-5.4l0-0.4l0-0.2c-0.1-1-0.4-2-1.7-2\n\tC9.4,8,9,9.1,9,10.3l0,0.3L9,16H5.7V5.3h3.2v1.5h0C9.3,5.9,10.4,5,12,5z M3.6,5.3V16H0.3V5.3H3.6z M1.9,0C3,0,3.8,0.9,3.8,1.9\n\tC3.8,3,3,3.9,1.9,3.9C0.9,3.9,0,3,0,1.9C0,0.9,0.9,0,1.9,0z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 24 24"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        d: "M7.4,17.8l4.1,4.1V0.1h1v21.8l4.1-4.1l0.7,0.7L12,23.9l-5.4-5.4L7.4,17.8z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 24 24"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        d: "M16.6,6.2l-4.1-4.1v21.8h-1V2.1L7.4,6.2L6.6,5.5L12,0.1l5.4,5.4L16.6,6.2z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 25 25"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        d: "M15.3,6L9.6,3.6L3.5,6.2v15.3L9.6,19l5.7,2.4l6.2-2.6V3.4L15.3,6z M10.2,4.9l4.7,2v13.2l-4.7-1.9V4.9z M4.5,6.9\n\tl4.7-2v13.2l-4.7,2V6.9z M20.5,18.1l-4.7,2V6.9l4.7-2V18.1z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 25 25"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        fill: "#FFFFFF",
                        d: "M12.5,9.5l2.8,2.8l-2.8,2.8l-2.8-2.8L12.5,9.5z M6.8,4l2.8,2.8L6.8,9.7L4,6.8L6.8,4z M12.5,9.5l2.8,2.8\n\tl-2.8,2.8l-2.8-2.8L12.5,9.5z M18.2,4L21,6.8l-2.8,2.8l-2.8-2.8L18.2,4z M6.8,15.3l2.8,2.8L6.8,21L4,18.2L6.8,15.3z M12.5,9.5\n\tl2.8,2.8l-2.8,2.8l-2.8-2.8L12.5,9.5z M18.2,15.3l2.8,2.8L18.2,21l-2.8-2.8L18.2,15.3z"
                    }
                }), n("rect", {
                    staticClass: "golden-icon",
                    attrs: {
                        x: "10.5",
                        y: "10.3",
                        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -5.0564 12.4498)",
                        fill: "#BDA069",
                        width: "4",
                        height: "4"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 30 30"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M29,5.5v4h-4v-4H29z M1,9.5h4v-4H1V9.5z M9,1.5H5v4h4h4v-4H9z M13,9.5v4v4v4v4h4v-4v-4v-4v-4v-4h-4V9.5z\n\t M25,17.5h4v-4h-4V17.5z M1,17.5h4v-4H1V17.5z M25,25.5h4v-4h-4V25.5z M1,25.5h4v-4H1V25.5z M21,1.5h-4v4h4h4v-4H21z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M17,1.5h-4v4h4V1.5z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 30 30"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M25,5h-4V1h4V5z M5,17v-4V9H1v4v4v4v4h4v-4V17z M25,13v4h4v-4H25z M17,25h-4H9H5v4h4h4h4h4h4v-4h-4H17z M17,1\n\th-4v4h4V1z M9,1H5v4h4V1z"
                    }
                }), n("polygon", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        points: "17,9 13,9 9,9 9,13 13,13 17,13 21,13 21,9 "
                    }
                }), n("polygon", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        points: "17,17 13,17 9,17 9,21 13,21 17,21 21,21 21,17 "
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 25 25"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        fill: "#1D1D1B",
                        d: "M9.3,11.5L5,15.7V20h4.3l4.3-4.3L20,9.3L15.7,5L9.3,11.5z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 30 30"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        d: "M13,5v4H9V5H13z M1,21v4h4v-4H1z M25,13h4V9h-4V13z M25,1v4h4V1H25z M17,25h-4H9H5v4h4h4h4h4h4v-4h-4H17z M17,13V9h-4v4v4h4\n\th4v-4H17z M5,13H1v4h4V13z M5,5H1v4h4V5z M21,21h4v-4h-4V21z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M25,25h4v-4h-4V25z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M5,5h4V1H5V5z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 2650.4 2650.4"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        d: "M75.2,1325.3c6.5-354.8,131.8-651.1,376-888.6S986.8,78.4,1325.3,75.2c364.5,6.5,663.3,131,896.1,373.5\n\ts350.8,534.8,354,876.6c-6.5,351.5-131.8,647.1-376,886.3c-244.3,239-535.6,360.3-874.1,363.5c-117.3,0-234.3-18-351.5-53.8\n\tc22.8-35.8,45.5-76.5,68.3-122c26-55.3,58.5-159.5,97.8-312.5c9.8-42.3,24.5-99.3,44-171c22.8,39,61.8,74.8,117.3,107.5\n\tc146.5,68.3,301,61.8,463.8-19.5c169.3-97.8,286.5-249,351.5-454c58.5-214.8,51.3-414.3-22-598.1c-73.3-184-204.3-316.5-393-398\n\tc-237.5-68.3-468.8-61-693.3,22S627.2,801.3,539.2,1003c-22.8,74.8-36.5,149-41.5,222.3c-5,73.3-2.5,144.8,7.3,214.8\n\tc9.8,70,34.3,132.8,73.3,188c39,55.3,91.3,97.8,156.3,127c16.3,6.5,29.3,6.5,39,0c13-6.5,26-32.5,39-78c13-45.5,18-76.5,14.8-92.8\n\tc-3.3-6.5-9.8-18-19.5-34.3c-68.3-110.8-91.3-227-68.3-349c22.8-122,73.3-225.5,151.3-310c120.5-107.5,261.3-166,422.3-175.8\n\tc161-9.8,298.8,34.3,412.5,131.8c61.8,71.5,101.8,157.8,119.5,258.8c17.8,101,18,197.8,0,290.5s-49.8,179.8-95.3,261.3\n\tc-81.5,127-177.5,192-288,195.3c-65-3.3-118-28.5-158.8-75.8s-53-101.8-36.5-163.5c6.5-35.8,26-105.8,58.5-210\n\tc32.5-104.3,50.5-182.3,53.8-234.3c-9.8-123.8-66.8-187.3-171-190.5c-81.5,9.8-141.5,46.5-180.8,109.8\n\tc-39.3,63.3-60.3,136-63.5,217.3c9.8,94.5,24.5,159.5,44,195.3c-35.8,146.5-63.5,263.8-83,351.5c-6.5,22.8-24.5,92.8-53.8,210\n\tc-29.3,117.3-45.5,206.8-48.8,268.5v136.8c-231-107.5-413.5-262.8-546.8-466.3S75.2,1572.6,75.2,1325.3z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: ["primary-cta", a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 50 50"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        d: "M1,1h48v8h1V1V0h-1H1H0v1v48v1h1h48h1v-1v-8h-1v8H1V1z"
                    }
                }), n("g", [n("rect", {
                    staticClass: "primary-cta__box-above",
                    attrs: {
                        x: "18.7",
                        y: "16",
                        width: "6",
                        height: "6"
                    }
                }), n("rect", {
                    staticClass: "primary-cta__box-center",
                    attrs: {
                        x: "24.7",
                        y: "22",
                        width: "6",
                        height: "6"
                    }
                }), n("rect", {
                    staticClass: "primary-cta__box-bottom",
                    attrs: {
                        x: "18.7",
                        y: "28",
                        width: "6",
                        height: "6"
                    }
                })])]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 30 30"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M29,5v4v4v4v4h-4v-4v-4V9V5H29z M5,17v-4V9H1v4v4v4v4h4v-4V17z M21,1h-4h-4H9H5v4h4h4h4h4h4V1H21z M17,25h-4H9\n\tH5v4h4h4h4h4h4v-4h-4H17z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M5,5H1v4h4V5z"
                    }
                }), n("polygon", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        points: "17,9 13,9 9,9 9,13 13,13 17,13 21,13 21,9 "
                    }
                }), n("polygon", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        points: "17,17 13,17 9,17 9,21 13,21 17,21 21,21 21,17 "
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M25,25h4v-4h-4V25z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 30 30"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M17,21h4v4h-4V21z M25,5v4h4V5H25z M13,17v4h4v-4H13z M9,13v4h4v-4H9z M25,17h4v-4h-4V17z M25,25h4v-4h-4V25z\n\t M5,9v4h4V9H5z M21,1h-4h-4H9H5v4h4h4h4h4h4V1H21z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M5,5H1v4h4V5z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M25,25h-4v4h4V25z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 30 30"
                    }, u),
                    ...h
                }, o.concat([n("g", [n("polygon", {
                    attrs: {
                        fill: "#151514",
                        points: "25.7,4.3 25.7,0 21.4,0 21.4,4.3 25.7,4.3 25.7,8.6 30,8.6 30,4.3 \t"
                    }
                }), n("g", [n("polygon", {
                    attrs: {
                        fill: "#151514",
                        points: "4.3,25.7 4.3,21.4 4.3,21.4 4.3,17.1 0,17.1 0,21.4 0,21.4 0,25.7 4.3,25.7 4.3,30 8.6,30 8.6,25.7\n\t\t\t\t\t"
                    }
                }), n("polygon", {
                    attrs: {
                        fill: "#151514",
                        points: "4.3,12.9 4.3,12.9 4.3,8.6 0,8.6 0,12.9 0,12.9 0,17.1 4.3,17.1 \t\t"
                    }
                })]), n("polygon", {
                    attrs: {
                        fill: "#151514",
                        points: "12.9,0 12.9,0 8.6,0 8.6,0 4.3,0 4.3,4.3 8.6,4.3 8.6,4.3 12.9,4.3 12.9,4.3 17.1,4.3 21.4,4.3\n\t\t21.4,0 17.1,0 \t"
                    }
                }), n("rect", {
                    attrs: {
                        x: "25.7",
                        y: "12.9",
                        fill: "#151514",
                        width: "4.3",
                        height: "4.3"
                    }
                }), n("rect", {
                    attrs: {
                        x: "25.7",
                        y: "21.4",
                        fill: "#151514",
                        width: "4.3",
                        height: "4.3"
                    }
                }), n("rect", {
                    attrs: {
                        x: "12.9",
                        y: "25.7",
                        fill: "#151514",
                        width: "4.3",
                        height: "4.3"
                    }
                })]), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M4.3,4.3H0v4.3h4.3V4.3z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M25.7,25.7h-4.3V30h4.3V25.7z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 30 30"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        fill: "#151514",
                        d: "M15,21h4v4h-4V21z M15,1h-4v4v4h4V5V1z M19,21h4v-4h-4V21z M23,13v4h4v-4H23z M19,9h-4v4h4h4V9H19z M3,5h4V1H3\n\tV5z"
                    }
                }), n("path", {
                    staticClass: "golden-icon",
                    attrs: {
                        fill: "#BDA069",
                        d: "M15,25h-4v4h4V25z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 50 50"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        d: "M0,0v50h50V0H0z M31,27h-4v4h-4v4h-4v-4h4v-4h4v-4h-4v-4h-4v-4h4v4h4v4h4V27z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 150 150"
                    }, u),
                    ...h
                }, o.concat([n("path", {
                    attrs: {
                        d: "M133.2,45.9c-1.3-5.3-5.6-9.6-10.7-10.9c-9.6-2.7-47.4-2.7-47.4-2.7s-38,0-47.6,2.7c-5.1,1.3-9.3,5.6-10.7,10.9\n\tc-2.7,9.3-2.7,29.4-2.7,29.4s0,19.8,2.7,29.4c1.3,5.3,5.6,9.3,10.7,10.7c9.6,2.4,47.6,2.4,47.6,2.4s37.8,0,47.4-2.4\n\tc5.1-1.3,9.3-5.3,10.7-10.7c2.7-9.6,2.7-29.4,2.7-29.4S135.8,55.2,133.2,45.9z M62.7,93.2v-36l31.6,18L62.7,93.2z"
                    }
                })]))
            }
        }
    }, function(t, e) {
        t.exports = {
            functional: !0,
            render(t, e) {
                const {
                    _c: n,
                    _v: i,
                    data: s,
                    children: o = []
                } = e, {
                    class: a,
                    staticClass: r,
                    style: c,
                    staticStyle: l,
                    attrs: u = {},
                    ...h
                } = s;
                return n("svg", {
                    class: [a, r],
                    style: [c, l],
                    attrs: Object.assign({
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 194 20"
                    }, u),
                    ...h
                }, o.concat([n("g", {
                    attrs: {
                        id: "primopiano-group"
                    }
                }, [n("path", {
                    staticClass: "st0",
                    attrs: {
                        d: "M3.3,8.9h1.3c0.5,0,1,0,1.3-0.1c0.4-0.1,0.6-0.2,0.9-0.5C7,8.1,7.2,7.8,7.3,7.4c0-0.4,0-0.9,0-1.4s0-1-0.1-1.4\n\t\tC7.1,4.2,7,3.9,6.7,3.7C6.5,3.4,6.2,3.3,5.9,3.2C5.5,3.1,5.1,3,4.5,3H3.3V8.9L3.3,8.9z M0,19.4v-19h4.7c2,0,3.5,0.4,4.5,1.3\n\t\tS10.6,4,10.6,6c0,1-0.1,1.9-0.4,2.6c-0.2,0.7-0.6,1.2-1,1.7c-0.5,0.4-1.1,0.8-1.8,1s-1.6,0.3-2.6,0.3H3.3v7.8\n\t\tC3.3,19.4,0,19.4,0,19.4z M16.5,8.9h1.2c0.4,0,0.8,0,1.1-0.1c0.3-0.1,0.6-0.2,0.7-0.5c0.2-0.2,0.3-0.5,0.4-0.9C20,7,20,6.5,20,6\n\t\tc0-1.1-0.2-1.9-0.6-2.3s-1-0.6-1.9-0.6h-1.2L16.5,8.9L16.5,8.9z M16.5,19.4h-3.3v-19h4.6c1.8,0,3.2,0.4,4.1,1.3S23.3,4,23.3,6\n\t\tc0,0.8-0.1,1.4-0.2,2c-0.1,0.5-0.3,1-0.5,1.4s-0.5,0.7-0.7,0.9c-0.3,0.2-0.6,0.4-0.8,0.5l2.8,8.6h-3.3l-2.3-7.9\n\t\tc-0.2,0-0.5,0.1-0.8,0.1s-0.6,0-0.9,0v7.8H16.5z M29.9,0.3h-3.3v19h3.3V0.3z M46.2,0.3v19h-2.8V4.5h-0.1l-3,14.9h-1.6l-3-14.9h-0.1\n\t\tv14.9h-2.8v-19h4.3l2.3,11.1h0.1l2.3-11.1L46.2,0.3L46.2,0.3z M52.3,14.7c0,0.7,0.1,1.3,0.4,1.6s0.7,0.5,1.4,0.5s1.1-0.2,1.4-0.5\n\t\tc0.2-0.3,0.4-0.9,0.4-1.6V5c0-0.7-0.1-1.3-0.4-1.6c-0.2-0.3-0.7-0.5-1.4-0.5S53,3.1,52.7,3.4c-0.2,0.3-0.4,0.9-0.4,1.6V14.7z\n\t\t M49.1,5c0-0.7,0.1-1.3,0.3-1.9s0.5-1.1,0.9-1.6c0.4-0.4,0.9-0.8,1.6-1s1.4-0.4,2.2-0.4c0.9,0,1.6,0.1,2.2,0.4\n\t\tc0.6,0.3,1.1,0.6,1.6,1c0.4,0.4,0.7,1,0.9,1.6s0.3,1.2,0.3,1.9v9.8c0,0.7-0.1,1.3-0.3,1.9s-0.5,1.1-0.9,1.6c-0.4,0.4-0.9,0.8-1.6,1\n\t\tc-0.6,0.3-1.4,0.4-2.2,0.4c-0.9,0-1.6-0.1-2.2-0.4c-0.6-0.3-1.1-0.6-1.6-1c-0.4-0.4-0.7-1-0.9-1.6s-0.3-1.2-0.3-1.9V5L49.1,5z\n\t\t M65.3,8.9h1.3c0.5,0,1,0,1.3-0.1c0.4-0.1,0.6-0.2,0.9-0.5c0.2-0.2,0.4-0.5,0.5-0.9c0-0.4,0-0.9,0-1.4s0-1-0.1-1.4S69,3.9,68.7,3.7\n\t\tc-0.2-0.2-0.5-0.4-0.9-0.5C67.5,3.1,67.1,3,66.5,3h-1.3v5.9H65.3z M62,19.4v-19h4.7c2,0,3.5,0.4,4.5,1.3S72.6,4,72.6,6\n\t\tc0,1-0.1,1.9-0.4,2.6c-0.2,0.7-0.6,1.3-1.1,1.7s-1.1,0.8-1.8,1c-0.7,0.2-1.6,0.3-2.6,0.3h-1.4v7.8L62,19.4L62,19.4z M78.7,0.3h-3.3\n\t\tv19h3.3V0.3z M85.4,12.3H88l-1.3-8.2h-0.1L85.4,12.3L85.4,12.3z M84.3,19.4h-3.2l3.5-19h4.1l3.5,19H89l-0.6-4.2h-3.6L84.3,19.4\n\t\tL84.3,19.4z M94.5,19.4v-19h3l4,10.9h0.1v-11h2.9v19h-2.8L97.5,7.5h-0.1v11.9H94.5z M110.7,14.7c0,0.7,0.1,1.3,0.4,1.6\n\t\tc0.2,0.3,0.7,0.5,1.4,0.5c0.7,0,1.1-0.2,1.4-0.5c0.2-0.3,0.4-0.9,0.4-1.6V5c0-0.7-0.1-1.3-0.4-1.6c-0.2-0.3-0.7-0.5-1.4-0.5\n\t\tc-0.7,0-1.1,0.2-1.4,0.5c-0.2,0.3-0.4,0.9-0.4,1.6V14.7z M107.5,5c0-0.7,0.1-1.3,0.3-1.9c0.2-0.6,0.5-1.1,0.9-1.6\n\t\tc0.4-0.4,0.9-0.8,1.6-1c0.6-0.3,1.4-0.4,2.2-0.4s1.6,0.1,2.2,0.4s1.1,0.6,1.6,1c0.4,0.4,0.7,1,0.9,1.6c0.2,0.6,0.3,1.2,0.3,1.9v9.8\n\t\tc0,0.7-0.1,1.3-0.3,1.9c-0.2,0.6-0.5,1.1-0.9,1.6c-0.4,0.4-0.9,0.8-1.6,1c-0.6,0.3-1.4,0.4-2.2,0.4c-0.9,0-1.6-0.1-2.2-0.4\n\t\ts-1.1-0.6-1.6-1c-0.4-0.4-0.7-1-0.9-1.6c-0.2-0.6-0.3-1.2-0.3-1.9V5L107.5,5z"
                    }
                })]), n("g", {
                    attrs: {
                        id: "cucine-group"
                    }
                }, [n("path", {
                    staticClass: "st1",
                    attrs: {
                        d: "M126.9,6.7V5.2c0-0.8-0.2-1.4-0.5-1.8s-0.7-0.5-1.1-0.5c-0.7,0-1.1,0.2-1.4,0.5c-0.2,0.3-0.4,0.9-0.4,1.6v9.6\n\t\tc0,0.7,0.1,1.3,0.4,1.6c0.2,0.3,0.7,0.5,1.4,0.5c0.6,0,1-0.2,1.2-0.5c0.2-0.3,0.3-0.8,0.3-1.4v-2.3h3.3v2.2c0,0.7-0.1,1.3-0.3,1.9\n\t\ts-0.5,1.1-0.9,1.6c-0.4,0.4-0.9,0.8-1.5,1c-0.6,0.3-1.3,0.4-2.1,0.4c-0.9,0-1.6-0.1-2.2-0.4s-1.1-0.6-1.6-1c-0.4-0.4-0.7-1-0.9-1.6\n\t\tc-0.2-0.6-0.3-1.2-0.3-1.9V5c0-0.7,0.1-1.3,0.3-1.9c0.2-0.6,0.5-1.1,0.9-1.6c0.4-0.4,0.9-0.8,1.6-1c0.6-0.3,1.4-0.4,2.2-0.4\n\t\tc0.8,0,1.5,0.1,2.1,0.4c0.6,0.3,1.1,0.7,1.5,1.1c0.4,0.5,0.7,1,0.9,1.7c0.2,0.6,0.3,1.3,0.3,2v1.4L126.9,6.7L126.9,6.7z M133.1,0.3\n\t\th3.3v14.4c0,1.4,0.6,2.1,1.7,2.1s1.7-0.7,1.7-2.1V0.3h3.3v14.2c0,1.7-0.4,2.9-1.3,3.8c-0.9,0.9-2.1,1.3-3.7,1.3\n\t\tc-1.6,0-2.8-0.4-3.7-1.3s-1.3-2.1-1.3-3.8V0.3L133.1,0.3z M152.6,6.7V5.2c0-0.8-0.2-1.4-0.5-1.8s-0.7-0.5-1.1-0.5\n\t\tc-0.7,0-1.1,0.2-1.4,0.5c-0.2,0.3-0.4,0.9-0.4,1.6v9.6c0,0.7,0.1,1.3,0.4,1.6c0.2,0.3,0.7,0.5,1.4,0.5c0.6,0,1-0.2,1.2-0.5\n\t\tc0.2-0.3,0.3-0.8,0.3-1.4v-2.3h3.3v2.2c0,0.7-0.1,1.3-0.3,1.9s-0.5,1.1-0.9,1.6c-0.4,0.4-0.9,0.8-1.5,1c-0.6,0.3-1.3,0.4-2.1,0.4\n\t\tc-0.9,0-1.6-0.1-2.2-0.4c-0.6-0.3-1.1-0.6-1.6-1c-0.4-0.4-0.7-1-0.9-1.6s-0.3-1.2-0.3-1.9V5c0-0.7,0.1-1.3,0.3-1.9s0.5-1.1,0.9-1.6\n\t\tc0.4-0.4,0.9-0.8,1.6-1c0.6-0.3,1.4-0.4,2.2-0.4s1.5,0.1,2.1,0.4s1.1,0.7,1.5,1.1c0.4,0.5,0.7,1,0.9,1.7c0.2,0.6,0.3,1.3,0.3,2v1.4\n\t\tL152.6,6.7L152.6,6.7z M162.3,0.3H159v19h3.3V0.3z M165.5,19.4v-19h3l4,10.9h0.1v-11h3v19h-2.8l-4.2-11.9h-0.1v11.9h-3V19.4z\n\t\t M178.4,19.4v-19h8.7v2.8h-5.5v4.9h4.2v2.8h-4.2v5.6h5.9v2.8h-9.1V19.4z M190.6,1.8h0.4c0.2,0,0.3,0,0.3-0.1\n\t\tc0.1-0.1,0.1-0.1,0.1-0.2s0-0.2-0.1-0.2s-0.2-0.1-0.3-0.1h-0.4V1.8z M190.6,3.1h-0.4V0.9h0.8c0.3,0,0.5,0,0.6,0.1s0.2,0.3,0.2,0.5\n\t\tc0,0.1,0,0.2,0,0.3c0,0.1-0.1,0.1-0.1,0.2c0,0-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.2,0l0.5,1h-0.5l-0.5-0.9h-0.3L190.6,3.1L190.6,3.1z\n\t\t M192.5,2c0-0.2,0-0.4-0.1-0.6s-0.2-0.4-0.3-0.5s-0.3-0.2-0.5-0.3s-0.4-0.1-0.6-0.1c-0.2,0-0.4,0-0.6,0.1c-0.2,0.1-0.3,0.2-0.5,0.3\n\t\tc-0.1,0.1-0.2,0.3-0.3,0.5s-0.1,0.4-0.1,0.6s0,0.4,0.1,0.6c0.1,0.2,0.2,0.4,0.3,0.5s0.3,0.2,0.5,0.3s0.4,0.1,0.6,0.1s0.4,0,0.6-0.1\n\t\tc0.2-0.1,0.3-0.2,0.5-0.3c0.1-0.1,0.2-0.3,0.3-0.5C192.4,2.4,192.5,2.2,192.5,2z M191,3.9c-0.3,0-0.5,0-0.8-0.1\n\t\tc-0.2-0.1-0.5-0.2-0.6-0.4c-0.2-0.2-0.3-0.4-0.4-0.6C189,2.5,189,2.3,189,2s0.1-0.6,0.2-0.8c0.1-0.2,0.3-0.4,0.4-0.6\n\t\tc0.2-0.2,0.4-0.3,0.6-0.4C190.5,0,190.7,0,191,0s0.5,0,0.8,0.1c0.2,0.1,0.5,0.2,0.6,0.4c0.2,0.2,0.3,0.4,0.4,0.6\n\t\tc0.1,0.2,0.2,0.5,0.2,0.8s-0.1,0.6-0.2,0.8c-0.1,0.2-0.3,0.4-0.4,0.6c-0.2,0.2-0.4,0.3-0.6,0.4C191.5,3.9,191.3,3.9,191,3.9z"
                    }
                })])]))
            }
        }
    }, , , , , , function(t) {
        t.exports = JSON.parse('{"title":"Primopiano cucine","meta":[{"hid":"charset","charset":"utf-8"},{"hid":"viewport","name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Primopiano cucine"},{"hid":"description","name":"description","content":"Scopri le cucine moderne negli showroom di Padova, Brescia e Milano."},{"hid":"theme-color","name":"theme-color","content":"#151514"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"Primopiano cucine"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"Primopiano cucine"},{"hid":"og:description","name":"og:description","property":"og:description","content":"Scopri le cucine moderne negli showroom di Padova, Brescia e Milano."}],"link":[{"hid":"shortcut-icon","rel":"shortcut icon","href":"/_nuxt/icons/icon_64x64.89c0ee.png"},{"hid":"apple-touch-icon","rel":"apple-touch-icon","href":"/_nuxt/icons/icon_512x512.89c0ee.png","sizes":"512x512"},{"rel":"manifest","href":"/_nuxt/manifest.87f01562.json","hid":"manifest"}],"htmlAttrs":{"lang":"en"}}')
    }, , , function(t, e, n) {
        "use strict";
        var i = n(8),
            s = n.n(i),
            o = n(7);
        const a = window.__NUXT__;

        function r() {
            if (!this._hydrated) return this.$fetch()
        }

        function c() {
            if (!((t = this).$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey)) return;
            var t;
            this._hydrated = !0, this._fetchKey = this.$vnode.elm.dataset.fetchKey;
            const e = a.fetch[this._fetchKey];
            if (e && e._error) this.$fetchState.error = e._error;
            else
                for (const t in e) s.a.set(this.$data, t, e[t])
        }

        function l() {
            return this._fetchPromise || (this._fetchPromise = u.call(this).then((() => {
                delete this._fetchPromise
            }))), this._fetchPromise
        }
        async function u() {
            this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1;
            let t = null;
            const e = Date.now();
            try {
                await this.$options.fetch.call(this)
            } catch (e) {
                0,
                t = Object(o.p)(e)
            }
            const n = this._fetchDelay - (Date.now() - e);
            n > 0 && await new Promise((t => setTimeout(t, n))), this.$fetchState.error = t, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((() => this.$nuxt.nbFetching--))
        }
        e.a = {
            beforeCreate() {
                Object(o.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, s.a.util.defineReactive(this, "$fetchState", {
                    pending: !1,
                    error: null,
                    timestamp: Date.now()
                }), this.$fetch = l.bind(this), Object(o.a)(this, "created", c), Object(o.a)(this, "beforeMount", r))
            }
        }
    }, , , , , , function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(9),
            s = n(4),
            o = (n(49), n(6)),
            a = n(65);
        var r = {
                props: {
                    lateral: Boolean,
                    fullscreen: Boolean,
                    fullheight: Boolean,
                    colorful: Boolean
                },
                data: () => ({
                    visible: !1
                }),
                beforeDestroy() {
                    this.visible = !1, document.removeEventListener("keydown", this.handleEscape, {
                        passive: !0
                    })
                },
                mounted() {
                    this.visible = !0, this.setScrollLocked(!0), document.addEventListener("keydown", this.handleEscape, {
                        passive: !0
                    })
                },
                methods: { ...Object(i.c)("scroll", {
                        setScrollLocked: "setLocked"
                    }),
                    handleEscape(t) {
                        "Escape" !== t.key && "Escape" !== t.code || this.handleClose()
                    },
                    beforeEnter(t) {
                        this.$emit("before-enter", t), this.setScrollLocked(!0),
                            function(t, e) {
                                const n = Object(o.p)("[data-modal-section]", t),
                                    i = Object(o.p)(".base-modal__dialog", t);
                                s.a.set(n, {
                                    opacity: 0
                                }), s.a.set(t, {
                                    opacity: 0
                                }), s.a.set(i, {
                                    backgroundColor: a.a.black100,
                                    ...e ? {
                                        xPercent: 100
                                    } : {
                                        yPercent: 100
                                    }
                                })
                            }(t, this.lateral)
                    },
                    async enter(t, e) {
                        this.$emit("enter", t, e), await
                        function(t) {
                            return new Promise((e => {
                                const n = Object(o.p)("[data-modal-section]", t),
                                    i = Object(o.p)(".base-modal__dialog", t);
                                s.a.killTweensOf(n);
                                const a = s.a.timeline({
                                    defaults: {
                                        ease: "power1.out",
                                        duration: 1
                                    }
                                });
                                a.to(t, {
                                    opacity: 1,
                                    duration: .2
                                }, "start"), a.to(i, {
                                    xPercent: 0,
                                    yPercent: 0,
                                    duration: .3
                                }, "start+=0.1"), null != n && n.length && a.to(n, {
                                    opacity: 1,
                                    stagger: .1
                                }), a.add((() => {
                                    e()
                                }))
                            }))
                        }(t), e()
                    },
                    afterEnter(t) {
                        this.$emit("after-enter", t)
                    },
                    beforeLeave(t) {
                        ! function(t) {
                            const e = Object(o.p)(".base-modal__dialog", t);
                            s.a.set(e, {
                                backgroundColor: a.a.black100
                            })
                        }(t)
                    },
                    async leave(t, e) {
                        this.$emit("leave", t, e), await
                        function(t, e) {
                            return new Promise((n => {
                                const i = Object(o.p)(".base-modal__dialog", t),
                                    a = Object(o.p)("[data-modal-section]", t);
                                s.a.killTweensOf(a), s.a.timeline({
                                    defaults: {
                                        ease: "power1.out",
                                        duration: .3
                                    },
                                    onComplete: () => {
                                        s.a.set(t, {
                                            clearProps: "all"
                                        })
                                    }
                                }).to(i, { ...e ? {
                                        xPercent: 100
                                    } : {},
                                    ...e ? {} : {
                                        yPercent: 100
                                    },
                                    ease: "power1.in"
                                }, "start").to(t, {
                                    opacity: 0
                                }, "start+=0.1").add((() => {
                                    n()
                                }))
                            }))
                        }(t, this.lateral), this.setScrollLocked(!1), e()
                    },
                    afterLeave(t) {
                        this.$emit("after-leave", t), this.visible = !1, this.setScrollLocked(!1), document.removeEventListener("keydown", this.handleEscape, {
                            passive: !0
                        })
                    },
                    handleClose() {
                        this.$emit("close")
                    }
                }
            },
            c = (n(309), n(12)),
            l = Object(c.a)(r, (function() {
                var t = this,
                    e = t._self._c;
                return e("transition", {
                    attrs: {
                        css: !1,
                        mode: "out-in",
                        appear: ""
                    },
                    on: {
                        "before-enter": t.beforeEnter,
                        enter: t.enter,
                        "before-leave": t.beforeLeave,
                        leave: t.leave,
                        afterLeave: t.afterLeave
                    }
                }, [e("aside", {
                    class: ["base-modal", {
                        "-lateral-style": t.lateral
                    }, {
                        "-full-screen": t.fullscreen
                    }, {
                        "-full-height": t.fullheight
                    }, {
                        "-colorful": t.colorful
                    }],
                    attrs: {
                        "data-lenis-prevent": ""
                    }
                }, [e("div", {
                    staticClass: "base-modal__dialog"
                }, [e("div", {
                    staticClass: "base-modal__content"
                }, [e("div", {
                    staticClass: "base-modal__head",
                    attrs: {
                        "data-modal-section": ""
                    }
                }, [e("div", {
                    staticClass: "base-modal__close-wr"
                }, [e("base-button-icon", {
                    staticClass: "base-modal__close-btn",
                    attrs: {
                        label: t.$t("actions.close"),
                        mode: "primary",
                        outline: "",
                        icon: "GoldClose",
                        color: t.colorful ? "white" : "black"
                    },
                    on: {
                        click: t.handleClose
                    }
                }), t._v(" "), e("span", [t._v(t._s(t.$t("actions.close")))])], 1)]), t._v(" "), e("div", {
                    staticClass: "base-modal__inner-wr",
                    attrs: {
                        "data-modal-section": ""
                    }
                }, [t._t("content")], 2)]), t._v(" "), t.$slots.bottom ? e("div", {
                    staticClass: "base-modal__bottom",
                    attrs: {
                        "data-modal-section": ""
                    }
                }, [t._t("bottom")], 2) : t._e()]), t._v(" "), e("div", {
                    staticClass: "base-modal__backdrop",
                    on: {
                        click: t.handleClose
                    }
                })])])
            }), [], !1, null, null, null);
        e.default = l.exports;
        installComponents(l, {
            BaseButtonIcon: n(111).default
        })
    }, , function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(4),
            s = n(9),
            o = n(49),
            a = n(169),
            r = n(6),
            c = {
                mixins: [a.a],
                props: {
                    title: String,
                    description: String,
                    image: Object,
                    filters: Array
                },
                computed: { ...Object(s.d)("layout", {
                        layoutWidth: "width",
                        layoutHeight: "height",
                        splashViewed: "splashViewed"
                    }),
                    ...Object(s.b)("layout", ["smallDevice", "mobile"])
                },
                watch: {
                    "$route.query" (t, e) {
                        this.getFiltersFromUrl()
                    }
                },
                destroyed() {
                    try {
                        var t;
                        null === (t = Object.keys(this._sts)) || void 0 === t || t.forEach((t => {
                            this._sts[t].kill(!1)
                        }))
                    } catch (t) {}
                },
                async mounted() {
                    this.getFiltersFromUrl(), this._sts = {}, this.image && i.b.set(this.$refs.image, {
                        clipPath: this.smallDevice ? "polygon(20% 30%, 80% 30%, 80% 60%, 20% 60%)" : "polygon(30% 20%, 70% 20%, 70% 70%, 30% 70%)"
                    }), this.$bus.$once("page:after-enter", (async () => {
                        await Object(r.f)(), this.image && (this._sts.heroClip = this.$bus.$scrollTrigger.create({
                            id: "hero-clip",
                            animation: i.b.timeline().to(this.$refs.title, {
                                yPercent: 100
                            }, "start").to(this.$refs.image, {
                                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                            }, "start"),
                            scrub: !0,
                            trigger: this.$el,
                            start: "top top",
                            end: this.smallDevice ? "bottom center+=10%" : "bottom bottom-=15%"
                        }));
                        const t = this.$delocalize(this.$store.state.navigation.route.prev),
                            e = this.$delocalize(this.$store.state.navigation.route.next);
                        "kitchens" === t && "kitchens-category" === e || "kitchens-category" === t && "kitchens" === e || "kitchens-category" === t && "kitchens-category" === e || this.$refs.description && !this.mobile && (Object(o.b)(this.$refs.description), this._sts.enter = this.$bus.$scrollTrigger.create({
                            id: "kitchens-hero-entry-typography",
                            animation: i.b.timeline({
                                defaults: {
                                    duration: 1,
                                    ease: "none"
                                }
                            }).add(Object(o.a)(this.$refs.description)),
                            trigger: this.smallDevice ? this.$el : this.$refs.description,
                            start: () => this.smallDevice ? "top+=50px top" : "top-=100% center",
                            end: () => "+=20px",
                            once: !0
                        }))
                    }))
                }
            },
            l = (n(307), n(12)),
            u = Object(l.a)(c, (function() {
                var t = this,
                    e = t._self._c;
                return e("header", {
                    staticClass: "kitchens-hero",
                    attrs: {
                        "data-light": ""
                    }
                }, [e("div", {
                    staticClass: "kitchens-hero__wrapper"
                }, [t.image ? e("div", {
                    ref: "image-wr",
                    staticClass: "kitchens-hero__image-wr"
                }, [e("div", {
                    ref: "image",
                    staticClass: "kitchens-hero__image",
                    attrs: {
                        "data-block-image": ""
                    }
                }, [e("base-picture", {
                    attrs: {
                        preload: "",
                        lazy: !1,
                        image: Array.isArray(t.image) ? t.$getSingle(t.image) : t.image
                    }
                })], 1)]) : t._e(), t._v(" "), e("div", {
                    staticClass: "l-container"
                }, [e("div", {
                    staticClass: "kitchens-hero__inner"
                }, [e("div", {
                    attrs: {
                        "data-hero": ""
                    }
                }, [t.title ? e("h1", {
                    ref: "title",
                    staticClass: "kitchens-hero__title"
                }, [e("span", {
                    directives: [{
                        name: "split",
                        rawName: "v-split.lines.double",
                        modifiers: {
                            lines: !0,
                            double: !0
                        }
                    }],
                    domProps: {
                        innerHTML: t._s(t.title)
                    }
                })]) : t._e(), t._v(" "), e("h2", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.description && t.mobile,
                        expression: "description && mobile"
                    }],
                    staticClass: "kitchens-hero__description"
                }, [e("span", {
                    attrs: {
                        "data-hero-stagger": ""
                    },
                    domProps: {
                        innerHTML: t._s(t.description)
                    }
                })])]), t._v(" "), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.description && !t.mobile,
                        expression: "description && !mobile"
                    }],
                    ref: "description"
                }, [e("h2", {
                    staticClass: "kitchens-hero__description"
                }, [e("span", {
                    directives: [{
                        name: "split",
                        rawName: "v-split.lines.double",
                        modifiers: {
                            lines: !0,
                            double: !0
                        }
                    }],
                    domProps: {
                        innerHTML: t._s(t.description)
                    }
                })])])])]), t._v(" "), e("div", {
                    staticClass: "kitchens-hero__filters"
                }, [t.filters ? e("adjoined-filters", {
                    attrs: {
                        filters: t.filters,
                        "active-filters": t.activeIDs,
                        multiple: !1,
                        section: "kitchens"
                    },
                    on: {
                        "update-filters": t.onFilterUpdate
                    }
                }) : t._e()], 1)])])
            }), [], !1, null, null, null);
        e.default = u.exports;
        installComponents(u, {
            BasePicture: n(71).default,
            AdjoinedFilters: n(257).default
        })
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(9),
            s = {
                props: {
                    filters: [Array, Object],
                    activeFilters: {
                        type: Array,
                        default: () => []
                    },
                    summary: String,
                    light: Boolean,
                    reset: Boolean,
                    sticky: Boolean,
                    color: {
                        type: String,
                        default: "white"
                    },
                    modal: {
                        type: Boolean,
                        default: !0
                    },
                    multiple: {
                        type: Boolean,
                        default: !0
                    },
                    section: String
                },
                data() {
                    return {
                        showModal: !1,
                        activeOptions: this.activeFilters,
                        activeRoute: this.route
                    }
                },
                computed: { ...Object(i.d)("layout", ["isMobile"]),
                    ...Object(i.b)("layout", ["smallDevice"]),
                    routeFilters() {
                        const t = this.filters.filter((t => t.route));
                        return this.$exists(t) ? t[0].options : null
                    },
                    allOptions() {
                        const t = [];
                        return this.filters.map((e => (e.options.map((e => (t.push(e), e))), e))), t
                    }
                },
                beforeDestroy() {
                    this.$bus.$off("open-filters-modal", this.openModal)
                },
                mounted() {
                    this._filtersOnModalOpen = [], this.$watch("activeFilters", ((t, e) => {
                        this.activeOptions = t
                    })), this.$bus.$on("open-filters-modal", this.openModal)
                },
                methods: { ...Object(i.c)("kitchens", ["setActiveIDs", "setActiveFilters"]),
                    onOpenModal() {
                        this._filtersOnModalOpen = this.activeFilters
                    },
                    onCloseModal() {
                        this._filtersOnModalOpen.length ? this.setActiveFilters(this._filtersOnModalOpen) : (this.setActiveFilters([]), this.setActiveIDs([])), this.showModal = !1
                    },
                    highlighted(t) {
                        const e = (null == t ? void 0 : t.options) || [],
                            n = [];
                        return e.map((t => (this.activeFilters.includes(t.id) && n.push(t.id), this.activeFilters.includes(t.id)))), n.length
                    },
                    resetFilters() {
                        this.activeOptions = [], this.$emit("update-filters", this.activeOptions)
                    },
                    openModal() {
                        this.showModal = !0
                    },
                    toggleFilter(t, e) {
                        const n = this.allOptions.filter((t => t.category)).map((t => t.id));
                        this.activeOptions.includes(e.id) ? this.activeOptions = this.activeOptions.filter((t => t !== e.id)) : this.multiple ? this.activeOptions = [...this.activeOptions, e.id] : (this.activeOptions = [...this.activeOptions, e.id], t && (this.activeOptions = this.activeOptions.filter((t => !n.includes(t) || t === e.id)))), this.$emit("update-filters", this.activeOptions)
                    }
                }
            },
            o = (n(308), n(12)),
            a = Object(o.a)(s, (function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "adjoined-filters",
                    class: [{
                        "-light-theme": t.light
                    }, {
                        "-sticky": t.sticky
                    }]
                }, [e("div", {
                    staticClass: "adjoined-filters__container l-grid"
                }, [t.summary ? e("div", {
                    staticClass: "adjoined-filters__summary",
                    domProps: {
                        innerHTML: t._s(t.summary)
                    }
                }) : t._e(), t._v(" "), e("ul", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.smallDevice && t.modal,
                        expression: "smallDevice && modal"
                    }],
                    staticClass: "adjoined-filters__main-list -list-mobile",
                    class: [`-filters-length-${t.filters.length}`]
                }, t._l(t.filters, (function(n, i) {
                    return e("li", {
                        key: i
                    }, [t.filters.length > 1 ? e("base-button", {
                        class: {
                            "-has-active-filters": !!t.highlighted(n)
                        },
                        attrs: {
                            color: t.color,
                            mode: "secondary",
                            outline: "",
                            label: `${t.$t("filters.menu")} ${n.title||""}`,
                            icon: t.filters.length > 1 ? "ArrowDownLight" : "Filters"
                        },
                        on: {
                            click: t.openModal
                        }
                    }, [t.highlighted(n) ? e("span", {
                        staticClass: "filters-count"
                    }, [t._v(t._s(t.highlighted(n)))]) : t._e(), t._v("\n          " + t._s(n.title) + "\n        ")]) : e("base-button", {
                        class: {
                            "-has-active-filters": !!t.highlighted(n)
                        },
                        attrs: {
                            color: t.color,
                            mode: "secondary",
                            outline: "",
                            label: `${t.$t("filters.menu")} ${n.title||""}`,
                            icon: "Filters"
                        },
                        on: {
                            click: t.openModal
                        }
                    }, [t.highlighted(n) ? e("span", {
                        staticClass: "filters-count"
                    }, [t._v(t._s(t.highlighted(n)))]) : t._e(), t._v("\n          " + t._s(t.$t("filters.menu")) + "\n        ")])], 1)
                })), 0), t._v(" "), e("ul", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.smallDevice || t.smallDevice && !t.modal,
                        expression: "!smallDevice || smallDevice && !modal"
                    }],
                    staticClass: "adjoined-filters__main-list"
                }, t._l(t.filters, (function(n, i) {
                    return e("li", {
                        key: i,
                        class: ["adjoined-filters__list", `-main-list -main-list-${i}`, {
                            "-overflow-shadow": !t.modal
                        }]
                    }, [e("div", {
                        staticClass: "adjoined-filters__sub-list",
                        class: {
                            "-horizontal-scroll": t.smallDevice && !t.modal
                        }
                    }, [n.title ? e("span", {
                        staticClass: "adjoined-filters__title"
                    }, [t._v(t._s(n.title))]) : t._e(), t._v(" "), t.reset ? e("span", {
                        class: ["adjoined-filters__title -reset-filters", {
                            "-show-reset": t.$exists(t.activeFilters)
                        }]
                    }, [e("button", {
                        attrs: {
                            disabled: !t.activeFilters.length,
                            type: "button",
                            "aria-label": "Reset filters",
                            name: "Reset filters"
                        },
                        on: {
                            click: t.resetFilters
                        }
                    }, [t._v("\n              " + t._s(t.$t("actions.showAll")) + "\n            ")])]) : t._e(), t._v(" "), e("ul", t._l(n.options, (function(i) {
                        let {
                            id: s,
                            title: o,
                            slug: a
                        } = i;
                        return e("li", {
                            key: s,
                            class: [{
                                "-active-filter": t.activeOptions.includes(s)
                            }, {
                                "-light-theme": t.light
                            }]
                        }, [t.section && !t.multiple && n.category ? e("div", [e("nuxt-link", {
                            staticClass: "adjoined-filters__list-btn",
                            class: [{
                                "-active-filter": t.activeOptions.includes(s)
                            }, {
                                "-light-theme": t.light
                            }],
                            attrs: {
                                event: "",
                                to: t.localePath({
                                    name: t.activeOptions.includes(s) ? t.section : `${t.section}-category`,
                                    params: { ...t.activeOptions.includes(s) ? {} : {
                                            category: a
                                        }
                                    }
                                }),
                                "aria-label": "Filter link"
                            },
                            nativeOn: {
                                click: function(e) {
                                    return t.toggleFilter(n.category, {
                                        id: s,
                                        title: o,
                                        slug: a
                                    })
                                }
                            }
                        }, [e("span", [t._v(t._s(o))])])], 1) : e("button", {
                            staticClass: "adjoined-filters__list-btn",
                            class: [{
                                "-active-filter": t.activeOptions.includes(s)
                            }, {
                                "-light-theme": t.light
                            }],
                            attrs: {
                                type: "button",
                                "aria-label": `Filter ${n.title} ${o}`,
                                name: `Filter ${n.title} ${o}`
                            },
                            on: {
                                click: function(e) {
                                    return t.toggleFilter(n.category, {
                                        id: s,
                                        title: o,
                                        slug: a
                                    })
                                }
                            }
                        }, [e("span", [t._v(t._s(o))])])])
                    })), 0)])])
                })), 0)]), t._v(" "), e("portal", {
                    attrs: {
                        to: "out-scroll"
                    }
                }, [t.smallDevice && t.showModal ? e("base-modal", {
                    attrs: {
                        fullheight: ""
                    },
                    on: {
                        enter: t.onOpenModal,
                        close: t.onCloseModal
                    },
                    scopedSlots: t._u([{
                        key: "content",
                        fn: function() {
                            return [e("div", {
                                staticClass: "adjoined-filters__modal"
                            }, [e("ul", {
                                staticClass: "adjoined-filters__modal-list"
                            }, t._l(t.filters, (function(n, i) {
                                return e("li", {
                                    key: i,
                                    class: ["adjoined-filters__list", `-main-list-${i}`]
                                }, [e("div", {
                                    staticClass: "adjoined-filters__sub-list"
                                }, [e("span", {
                                    staticClass: "adjoined-filters__title"
                                }, [t._v(t._s(n.title))]), t._v(" "), e("ul", {
                                    staticClass: "adjoined-filters__modal-list -inner-list"
                                }, t._l(n.options, (function(i) {
                                    let {
                                        id: s,
                                        title: o,
                                        slug: a
                                    } = i;
                                    return e("li", {
                                        key: s,
                                        class: [{
                                            "-active-filter": t.activeOptions.includes(s)
                                        }, {
                                            "-light-theme": t.light
                                        }]
                                    }, [e("button", {
                                        staticClass: "adjoined-filters__list-btn",
                                        class: [{
                                            "-active-filter": t.activeOptions.includes(s)
                                        }, {
                                            "-light-theme": t.light
                                        }],
                                        attrs: {
                                            type: "button",
                                            "aria-label": `Filter ${n.title} ${o}`,
                                            name: `Filter ${n.title} ${o}`
                                        },
                                        on: {
                                            click: function(e) {
                                                return t.toggleFilter(n.category, {
                                                    id: s,
                                                    title: o,
                                                    slug: a
                                                })
                                            }
                                        }
                                    }, [e("span", [t._v(t._s(o))]), t._v(" "), e("transition", {
                                        attrs: {
                                            name: "translateRight"
                                        }
                                    }, [t.activeOptions.includes(s) ? e("base-icon", {
                                        attrs: {
                                            name: "GoldCheck"
                                        }
                                    }) : t._e()], 1)], 1)])
                                })), 0)])])
                            })), 0), t._v(" "), e("base-button", {
                                attrs: {
                                    color: "black",
                                    mode: "secondary",
                                    label: t.$t("filters.show_results")
                                },
                                on: {
                                    click: function(e) {
                                        t.showModal = !1
                                    }
                                }
                            }, [t._v("\n            " + t._s(t.$t("filters.show_results")) + "\n          ")])], 1)]
                        },
                        proxy: !0
                    }], null, !1, 4113787611)
                }) : t._e()], 1)], 1)
            }), [], !1, null, null, null);
        e.default = a.exports;
        installComponents(a, {
            BaseButton: n(72).default,
            BaseIcon: n(74).default,
            BaseModal: n(254).default
        })
    }, , , function(t, e, n) {
        "use strict";
        n.r(e);
        var i = {
                computed: {
                    availableLocales() {
                        return this.$i18n.locales.filter((t => t.code !== this.$i18n.locale))
                    }
                },
                mounted() {
                    this.$i18n.onBeforeLanguageSwitch = (t, e) => {
                        this.$store.commit("locales/setSwitching", !0), this.$store.commit("locales/setLocale", e), this.$store.dispatch("update", e)
                    }
                }
            },
            s = (n(298), n(12)),
            o = Object(s.a)(i, (function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "locale-switcher"
                }, [e("span", [t._v(t._s(t.$t("actions.change_lang")) + ":")]), t._v(" "), e("nav", {
                    staticClass: "locale-switcher__list"
                }, [e("ul", t._l(t.availableLocales, (function(n, i) {
                    return e("li", {
                        key: i
                    }, [0 === Object.keys(t.$store.state.i18n.routeParams).length ? e("a", {
                        key: n.code,
                        attrs: {
                            href: t.localePath("index", n.code)
                        }
                    }, [t._v("\n          " + t._s(n.code) + "\n        ")]) : e("a", {
                        staticClass: "locale-switcher__item",
                        class: {
                            "-active-lang": n.code === t.$i18n.locale
                        },
                        attrs: {
                            href: t.switchLocalePath(n.code)
                        }
                    }, [t._v("\n          " + t._s(n.code) + "\n        ")])])
                })), 0)])])
            }), [], !1, null, null, null);
        e.default = o.exports
    }, function(t, e, n) {
        n(262), t.exports = n(263)
    }, , function(t, e, n) {
        "use strict";
        n.r(e),
            function(t) {
                var e = n(8),
                    i = n.n(e),
                    s = n(192),
                    o = n(66),
                    a = n(7),
                    r = n(40),
                    c = n(248),
                    l = n(84);
                i.a.__nuxt__fetch__mixin__ || (i.a.mixin(c.a), i.a.__nuxt__fetch__mixin__ = !0), i.a.component(l.a.name, l.a), i.a.component("NLink", l.a), t.fetch || (t.fetch = s.a);
                let u, h, d, p = [];
                const m = window.__NUXT__ || {},
                    g = m.config || {};
                g._app && (n.p = Object(a.v)(g._app.cdnURL, g._app.assetsPath)), Object.assign(i.a.config, {
                    silent: !0,
                    performance: !1
                });
                const f = i.a.config.errorHandler || console.error;

                function v(t, e, n) {
                    const i = t => {
                            const i = function(t, e) {
                                if (!t || !t.options || !t.options[e]) return {};
                                const n = t.options[e];
                                if ("function" == typeof n) {
                                    for (var i = arguments.length, s = new Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++) s[o - 2] = arguments[o];
                                    return n(...s)
                                }
                                return n
                            }(t, "transition", e, n) || {};
                            return "string" == typeof i ? {
                                name: i
                            } : i
                        },
                        s = n ? Object(a.g)(n) : [],
                        o = Math.max(t.length, s.length),
                        r = [];
                    for (let e = 0; e < o; e++) {
                        const n = Object.assign({}, i(t[e])),
                            o = Object.assign({}, i(s[e]));
                        Object.keys(n).filter((t => void 0 !== n[t] && !t.toLowerCase().includes("leave"))).forEach((t => {
                            o[t] = n[t]
                        })), r.push(o)
                    }
                    return r
                }
                async function b(t, e, n) {
                    this._routeChanged = Boolean(u.nuxt.err) || e.name !== t.name, this._paramChanged = !this._routeChanged && e.path !== t.path, this._queryChanged = !this._paramChanged && e.fullPath !== t.fullPath, this._diffQuery = this._queryChanged ? Object(a.i)(t.query, e.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                    try {
                        if (this._queryChanged) {
                            const n = await Object(a.r)(t, ((t, e) => ({
                                Component: t,
                                instance: e
                            })));
                            n.some((n => {
                                let {
                                    Component: i,
                                    instance: s
                                } = n;
                                const o = i.options.watchQuery;
                                return !0 === o || (Array.isArray(o) ? o.some((t => this._diffQuery[t])) : "function" == typeof o && o.apply(s, [t.query, e.query]))
                            })) && this.$loading.start && !this.$loading.manual && this.$loading.start()
                        }
                        n()
                    } catch (i) {
                        const s = i || {},
                            o = s.statusCode || s.status || s.response && s.response.status || 500,
                            a = s.message || "";
                        if (/^Loading( CSS)? chunk (\d)+ failed\./.test(a)) return void window.location.reload(!0);
                        this.error({
                            statusCode: o,
                            message: a
                        }), this.$nuxt.$emit("routeChanged", t, e, s), n()
                    }
                }

                function y(t, e, n, i) {
                    let s = ["navigation", "nuxti18n"],
                        r = !1;
                    if (void 0 !== n && (s = [], (n = Object(a.s)(n)).options.middleware && (s = s.concat(n.options.middleware)), t.forEach((t => {
                            t.options.middleware && (s = s.concat(t.options.middleware))
                        }))), s = s.map((t => "function" == typeof t ? t : ("function" != typeof o.a[t] && (r = !0, this.error({
                            statusCode: 500,
                            message: "Unknown middleware " + t
                        })), o.a[t]))), !r) return Object(a.o)(s, e, i)
                }
                async function w(t, e, n, i) {
                    if (!1 === this._routeChanged && !1 === this._paramChanged && !1 === this._queryChanged) return n();
                    let s = !1;
                    if (t === e) p = [], s = !0;
                    else {
                        const t = [];
                        p = Object(a.g)(e, t).map(((n, i) => Object(a.c)(e.matched[t[i]].path)(e.params)))
                    }
                    let o = !1;
                    await Object(a.t)(u, {
                        route: t,
                        from: e,
                        error: t => {
                            i.aborted || u.nuxt.error.call(this, t)
                        },
                        next: (t => {
                            e.path === t.path && this.$loading.finish && this.$loading.finish(), e.path !== t.path && this.$loading.pause && this.$loading.pause(), o || (o = !0, n(t))
                        }).bind(this)
                    }), this._dateLastError = u.nuxt.dateErr, this._hadError = Boolean(u.nuxt.err);
                    const c = [],
                        l = Object(a.g)(t, c);
                    if (!l.length) {
                        if (await y.call(this, l, u.context, void 0, i), o) return;
                        if (i.aborted) return void n(!1);
                        const t = (r.a.options || r.a).layout,
                            e = await this.loadLayout("function" == typeof t ? t.call(r.a, u.context) : t);
                        if (await y.call(this, l, u.context, e, i), o) return;
                        return i.aborted ? void n(!1) : (u.context.error({
                            statusCode: 404,
                            message: "This page could not be found"
                        }), n())
                    }
                    l.forEach((t => {
                        t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
                    })), this.setTransitions(v(l, t, e));
                    try {
                        if (await y.call(this, l, u.context, void 0, i), o) return;
                        if (i.aborted) return void n(!1);
                        if (u.context._errored) return n();
                        let s = l[0].options.layout;
                        if ("function" == typeof s && (s = s(u.context)), s = await this.loadLayout(s), await y.call(this, l, u.context, s, i), o) return;
                        if (i.aborted) return void n(!1);
                        if (u.context._errored) return n();
                        let r, h = !0;
                        try {
                            for (const t of l)
                                if ("function" == typeof t.options.validate && (h = await t.options.validate(u.context), !h)) break
                        } catch (t) {
                            return this.error({
                                statusCode: t.statusCode || "500",
                                message: t.message
                            }), n()
                        }
                        if (!h) return this.error({
                            statusCode: 404,
                            message: "This page could not be found"
                        }), n();
                        if (await Promise.all(l.map((async (n, i) => {
                                n._path = Object(a.c)(t.matched[c[i]].path)(t.params), n._dataRefresh = !1;
                                const s = n._path !== p[i];
                                if (this._routeChanged && s) n._dataRefresh = !0;
                                else if (this._paramChanged && s) {
                                    const t = n.options.watchParam;
                                    n._dataRefresh = !1 !== t
                                } else if (this._queryChanged) {
                                    const s = n.options.watchQuery;
                                    !0 === s ? n._dataRefresh = !0 : Array.isArray(s) ? n._dataRefresh = s.some((t => this._diffQuery[t])) : "function" == typeof s && (r || (r = Object(a.h)(t)), n._dataRefresh = s.apply(r[i], [t.query, e.query]))
                                }
                                if (!this._hadError && this._isMounted && !n._dataRefresh) return;
                                const o = [],
                                    l = n.options.asyncData && "function" == typeof n.options.asyncData,
                                    h = Boolean(n.options.fetch) && n.options.fetch.length,
                                    d = l && h ? 30 : 45;
                                if (l) {
                                    const t = Object(a.q)(n.options.asyncData, u.context);
                                    t.then((t => {
                                        Object(a.b)(n, t), this.$loading.increase && this.$loading.increase(d)
                                    })), o.push(t)
                                }
                                if (this.$loading.manual = !1 === n.options.loading, h) {
                                    let t = n.options.fetch(u.context);
                                    t && (t instanceof Promise || "function" == typeof t.then) || (t = Promise.resolve(t)), t.then((t => {
                                        this.$loading.increase && this.$loading.increase(d)
                                    })), o.push(t)
                                }
                                return Promise.all(o)
                            }))), !o) {
                            if (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), i.aborted) return void n(!1);
                            n()
                        }
                    } catch (s) {
                        if (i.aborted) return void n(!1);
                        const o = s || {};
                        if ("ERR_REDIRECT" === o.message) return this.$nuxt.$emit("routeChanged", t, e, o);
                        p = [], Object(a.k)(o);
                        let c = (r.a.options || r.a).layout;
                        "function" == typeof c && (c = c(u.context)), await this.loadLayout(c), this.error(o), this.$nuxt.$emit("routeChanged", t, e, o), n()
                    }
                }

                function _(t, e) {
                    Object(a.d)(t, ((t, e, n, s) => ("object" != typeof t || t.options || ((t = i.a.extend(t))._Ctor = t, n.components[s] = t), t)))
                }

                function x(t) {
                    let e = Boolean(this.$options.nuxt.err);
                    this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (e = !1);
                    let n = e ? (r.a.options || r.a).layout : t.matched[0].components.default.options.layout;
                    "function" == typeof n && (n = n(u.context)), this.setLayout(n)
                }

                function $(t) {
                    t._hadError && t._dateLastError === t.$options.nuxt.dateErr && t.error()
                }

                function k(t, e) {
                    if (!1 === this._routeChanged && !1 === this._paramChanged && !1 === this._queryChanged) return;
                    const n = Object(a.h)(t),
                        s = Object(a.g)(t);
                    let o = !1;
                    i.a.nextTick((() => {
                        n.forEach(((t, e) => {
                            if (t && !t._isDestroyed && t.constructor._dataRefresh && s[e] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                                const e = t.constructor.options.data.call(t);
                                for (const n in e) i.a.set(t.$data, n, e[n]);
                                o = !0
                            }
                        })), o && window.$nuxt.$nextTick((() => {
                            window.$nuxt.$emit("triggerScroll")
                        })), $(this)
                    }))
                }
                Object(r.b)(null, m.config).then((async function(t) {
                    u = t.app, h = t.router, d = t.store;
                    const e = new i.a(u),
                        n = m.layout || "default";
                    await e.loadLayout(n), e.setLayout(n);
                    const s = () => {
                            e.$mount("#__nuxt"), h.afterEach(_), h.afterEach(x.bind(e)), h.afterEach(k.bind(e)), i.a.nextTick((() => {
                                ! function(t) {
                                    window.onNuxtReadyCbs.forEach((e => {
                                        "function" == typeof e && e(t)
                                    })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t);
                                    h.afterEach(((e, n) => {
                                        i.a.nextTick((() => t.$nuxt.$emit("routeChanged", e, n)))
                                    }))
                                }(e)
                            }))
                        },
                        o = await Promise.all((r = u.context.route, Object(a.d)(r, (async (t, e, n, i, s) => {
                            "function" != typeof t || t.options || (t = await t());
                            const o = function(t, e) {
                                return m.serverRendered && e && Object(a.b)(t, e), t._Ctor = t, t
                            }(Object(a.s)(t), m.data ? m.data[s] : null);
                            return n.components[i] = o, o
                        }))));
                    var r;
                    e.setTransitions = e.$options.nuxt.setTransitions.bind(e), o.length && (e.setTransitions(v(o, h.currentRoute)), p = h.currentRoute.matched.map((t => Object(a.c)(t.path)(h.currentRoute.params))));
                    e.$loading = {}, m.error && e.error(m.error);
                    h.beforeEach(b.bind(e));
                    let c = null;
                    const l = w.bind(e);
                    if (h.beforeEach(((t, e, n) => {
                            c && (c.aborted = !0), c = {
                                aborted: !1
                            }, l(t, e, n, c)
                        })), m.serverRendered && Object(a.n)(m.routePath, e.context.route.path)) return s();
                    const g = () => {
                        _(h.currentRoute, h.currentRoute), x.call(e, h.currentRoute), $(e), s()
                    };
                    await new Promise((t => setTimeout(t, 0))), w.call(e, h.currentRoute, h.currentRoute, (t => {
                        if (!t) return void g();
                        const e = h.afterEach(((t, n) => {
                            e(), g()
                        }));
                        h.push(t, void 0, (t => {
                            t && f(t)
                        }))
                    }), {
                        aborted: !1
                    })
                })).catch(f)
            }.call(this, n(32))
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        const i = t => {
            var e, n;
            return null == t || null === (e = t.name) || void 0 === e ? void 0 : e.slice(0, (null == t || null === (n = t.name) || void 0 === n ? void 0 : n.length) - 5)
        };
        e.default = t => {
            var e;
            let {
                route: n,
                from: s,
                store: o
            } = t;
            o.commit("layout/setMainNavOpen", !1), i(s) !== i(n) && o.commit("navigation/setTransitioning", !0), o.commit("navigation/setPrevRoute", null == s ? void 0 : s.name), o.commit("navigation/setNextRoute", null !== (e = null == n ? void 0 : n.name) && void 0 !== e ? e : "error")
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n(151)
    }, function(t, e, n) {
        "use strict";
        n(152)
    }, function(t, e, n) {
        "use strict";
        n(153)
    }, function(t, e, n) {
        "use strict";
        n(154)
    }, function(t, e, n) {
        "use strict";
        n(155)
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        "use strict";
        n(156)
    }, function(t, e, n) {
        "use strict";
        n(157)
    }, function(t, e, n) {
        "use strict";
        n(158)
    }, function(t, e, n) {
        "use strict";
        n(159)
    }, function(t, e, n) {
        "use strict";
        n(160)
    }, function(t, e, n) {
        "use strict";
        n(161)
    }, function(t, e, n) {
        "use strict";
        n(162)
    }, function(t, e, n) {
        "use strict";
        n(163)
    }, function(t, e, n) {
        "use strict";
        n(164)
    }, function(t, e, n) {
        "use strict";
        n(165)
    }, function(t, e, n) {
        "use strict";
        n(166)
    }, function(t, e, n) {
        "use strict";
        n(167)
    }, function(t, e, n) {
        "use strict";
        n(168)
    }, function(t, e, n) {
        "use strict";
        n(170)
    }, function(t, e, n) {
        "use strict";
        n(171)
    }, function(t, e, n) {
        "use strict";
        n(172)
    }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "state", (function() {
            return o
        })), n.d(e, "mutations", (function() {
            return a
        })), n.d(e, "getters", (function() {
            return r
        })), n.d(e, "actions", (function() {
            return c
        }));
        var i = n(241),
            s = n(4);
        const o = () => ({
                dev: {
                    isTouch: !1,
                    isIE: !1,
                    isSafari: !1,
                    isFirefox: !1,
                    gpuSupported: !0,
                    webpSupported: !1,
                    avifSupported: !1,
                    battery: {},
                    saveDataMode: null
                }
            }),
            a = {
                setDevIsTouch(t, e) {
                    t.dev.isTouch = e
                },
                setDevIsIE(t, e) {
                    t.dev.isIE = e
                },
                setDevIsSafari(t, e) {
                    t.dev.isSafari = e
                },
                setDevIsFirefox(t, e) {
                    t.dev.isFirefox = e
                },
                setDevWebpSupported(t, e) {
                    t.dev.webpSupported = e
                },
                setDevAvifSupported(t, e) {
                    t.dev.avifSupported = e
                },
                setDevGPUSupported(t, e) {
                    t.dev.gpuSupported = e
                },
                setBatteryStatus(t, e) {
                    t.dev.battery = e
                },
                setSaveDataMode(t, e) {
                    t.dev.saveDataMode = e
                }
            },
            r = {
                isTouch: t => {
                    var e;
                    return null !== (e = t.dev.isTouch) && void 0 !== e && e
                },
                saveDevice: t => {
                    var e;
                    return null !== (e = !t.dev.gpuSupported || t.dev.battery.level <= .01) && void 0 !== e && e
                },
                safeDeviceHeight: t => t.dev.isFirefox && t.dev.isTouch ? t.layout.height : null
            },
            c = {
                async getDeviceStatus(t) {
                    let {
                        commit: e
                    } = t;
                    "connection" in navigator && e("setSaveDataMode", navigator.connection.saveData);
                    if (!("getBattery" in navigator)) return;
                    navigator.getBattery().then((function(t) {
                        ! function(t) {
                            e("setBatteryStatus", {
                                charging: t.charging,
                                level: t.level,
                                chargingTime: t.chargingTime,
                                dischargingTime: t.dischargingTime
                            })
                        }(t)
                    }))
                },
                async nuxtServerInit(t, e) {
                    let {
                        dispatch: n,
                        commit: i
                    } = t, {
                        app: s,
                        store: o
                    } = e;
                    i("locales/setLocale", s.i18n.locale), await Promise.all([n("navigation/getNavigationData", s), n("globals/getGlobalsData", s), n("globals/getShowrooms", s), n("kitchens/getKitchensCategories", s), n("news/getNewsCategories", s)])
                },
                async nuxtClientInit(t, e) {
                    var n;
                    let {
                        state: o,
                        commit: a,
                        dispatch: r
                    } = t, {
                        app: c
                    } = e;
                    a("setDevIsTouch", "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0), a("setDevIsFirefox", !!navigator.userAgent.match(/Firefox\/([0-9]+)\./)), o.dev.isFirefox && o.dev.isTouch && s.a.set(document.documentElement, {
                        "--safe-device-height": window.innerHeight
                    });
                    a("setDevIsSafari", !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)), a("setDevIsIE", !!navigator.userAgent.match(/Trident\/|MSIE/)), await Promise.all([r("kitchens/getKitchensCategories", c), r("news/getNewsCategories", c), r("pages/getAllPages", c), r("getDeviceStatus", c)]);
                    const l = await Object(i.a)(),
                        u = l.tier >= 2 || (null === (n = l.device) || void 0 === n ? void 0 : n.includes("apple")) || 1 == l.tier && "FALLBACK" === l.type;
                    a("setDevGPUSupported", u), s.a.ticker.fps(u ? 60 : 30)
                },
                async update(t, e) {
                    await Promise.all([t.dispatch("navigation/getNavigationData", this.app), t.dispatch("globals/getGlobalsData", this.app), t.dispatch("globals/getShowrooms", this.app), t.dispatch("pages/getAllPages", this.app), t.dispatch("kitchens/getKitchensCategories", this.app), t.dispatch("news/getNewsCategories", this.app), t.dispatch("news/getNews", this.app), t.dispatch("projects/getProjects", this.app)]), t.commit("locales/setSwitching", !1)
                },
                async getPages(t) {
                    await Promise.all([t.dispatch("pages/getAllPages", this.app)])
                }
            }
    }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "state", (function() {
            return i
        })), n.d(e, "mutations", (function() {
            return s
        })), n.d(e, "getters", (function() {
            return o
        }));
        const i = () => ({
                visible: !1,
                crumbs: null
            }),
            s = {
                setVisible(t, e) {
                    t.visible = e
                },
                setCrumbs(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    t.crumbs = e.map((t => ({
                        name: t.name,
                        label: t.label,
                        params: t.params,
                        query: t.query,
                        path: t.path
                    })))
                }
            },
            o = {
                crumbs: t => {
                    var e;
                    return null !== (e = t.crumbs) && void 0 !== e ? e : []
                }
            }
    }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "state", (function() {
            return i
        })), n.d(e, "mutations", (function() {
            return s
        })), n.d(e, "actions", (function() {
            return o
        })), n.d(e, "getters", (function() {
            return a
        }));
        const i = () => ({
                socials: {
                    linkedin: null,
                    facebook: null,
                    youtube: null
                },
                address: {
                    streetAddress: "pippo streetAddress",
                    postalCode: null,
                    town: null,
                    district: null
                },
                contacts: {
                    email: null,
                    phone: null
                },
                legal: [{
                    href: "https://www.iubenda.com/privacy-policy/96452419/full-legal",
                    label: "Privacy"
                }, {
                    href: "https://www.iubenda.com/privacy-policy/96452419/cookie-policy",
                    label: "Cookies"
                }]
            }),
            s = {
                setSocials(t, e) {
                    t.socials = e
                }
            },
            o = {
                async getCompanyData(t) {
                    let {
                        commit: e
                    } = t
                }
            },
            a = {
                socials: t => {
                    var e;
                    return null !== (e = t.socials) && void 0 !== e ? e : null
                }
            }
    }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "state", (function() {
            return i
        })), n.d(e, "mutations", (function() {
            return s
        }));
        const i = () => ({
                faqs: []
            }),
            s = {
                setFaqs(t, e) {
                    t.faqs = e
                },
                pushFaq(t, e) {
                    t.faqs.push(e)
                }
            }
    }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "state", (function() {
            return i
        })), n.d(e, "mutations", (function() {
            return s
        })), n.d(e, "getters", (function() {
            return o
        }));
        const i = () => ({
                jobs: []
            }),
            s = {
                setJobs(t, e) {
                    t.jobs = e
                },
                pushJob(t, e) {
                    t.jobs.push(e)
                }
            },
            o = {}
    }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "state", (function() {
            return s
        })), n.d(e, "mutations", (function() {
            return o
        })), n.d(e, "getters", (function() {
            return a
        })), n.d(e, "actions", (function() {
            return r
        }));
        n(116), n(117), n(118), n(119), n(120), n(121), n(122), n(123), n(124), n(125), n(127), n(128), n(129);
        var i = n(62);
        const s = () => ({
                kitchens: [],
                categories: [],
                activeFilters: [],
                activeRoute: null,
                activeIDs: [],
                cover: null
            }),
            o = {
                setKitchens(t, e) {
                    t.kitchens = e
                },
                setActiveFilters(t, e) {
                    const n = [];
                    t.categories.map((t => (t.options.map((t => (n.push(t), t))), t)));
                    const i = [...n.filter((t => e.includes(t.id)))];
                    t.activeFilters = i
                },
                pushKitchen(t, e) {
                    t.kitchens.push(e)
                },
                setCategories(t, e) {
                    t.categories = e
                },
                setActiveIDs(t, e) {
                    t.activeIDs = e
                },
                setCover(t, e) {
                    t.cover = e
                }
            },
            a = {
                kitchens: t => t.kitchens.filter((t => 0 !== Object.keys(t).length)),
                filteredKitchens: t => {
                    var e;
                    const n = t.kitchens.filter((t => 0 !== Object.keys(t).length));
                    return t.activeFilters && null !== (e = t.activeFilters) && void 0 !== e && e.length ? n.filter((e => {
                        const n = e.style.map((t => parseInt(t.id))),
                            i = e.typologies.map((t => parseInt(t.id))),
                            s = t.activeFilters.filter((t => t.subcategory)),
                            o = t.activeFilters.filter((t => t.category));
                        return o && o.length && s && s.length ? i[0] === parseInt(o[0].id) && s.map((t => parseInt(t.id))).includes(n[0]) : o && o.length ? i[0] === parseInt(o[0].id) : s.map((t => parseInt(t.id))).includes(n[0])
                    })) : n
                },
                categories: (t, e) => {
                    const n = t.kitchens.filter((t => 0 !== Object.keys(t).length)),
                        i = [],
                        s = [];
                    n.forEach((t => {
                        t.style.map((t => (i.push({ ...t,
                            subcategory: !0
                        }), t))), t.typologies.map((t => (s.push({ ...t,
                            category: !0
                        }), t)))
                    }));
                    const o = t.categories.filter((t => "styles" === t.id)),
                        a = t.categories.filter((t => "typologies" === t.id)),
                        r = [];
                    e.filteredKitchens.map((t => (t.style.map((t => (r.push(t), t))), t)));
                    return [{ ...o[0],
                        options: i.reduce(((t, e) => (t.find((t => t.id === e.id)) || t.push(e), t)), [])
                    }, { ...a[0],
                        options: [...new Map(s.map((t => [t.id, t]))).values()]
                    }]
                },
                typologies: t => {
                    const e = t.categories.filter((t => t.category));
                    return e && e.length ? e[0].options : []
                },
                styles: t => {
                    const e = t.categories.filter((t => t.subcategory));
                    return e && e.length ? e[0].options : []
                }
            },
            r = {
                async getKitchensCategories(t, e) {
                    let {
                        commit: n
                    } = t;
                    try {
                        const {
                            styles: t,
                            typologies: s
                        } = await this.$query(i.b, {
                            site: e.store.state.locales.locale
                        });
                        n("setCategories", [{
                            id: "styles",
                            title: e.i18n.t("kitchens.style"),
                            options: t.map((t => ({ ...t,
                                subcategory: !0
                            }))),
                            subcategory: !0
                        }, {
                            id: "typologies",
                            title: e.i18n.t("kitchens.typology"),
                            options: s.map((t => ({ ...t,
                                category: !0
                            }))),
                            category: !0
                        }])
                    } catch (t) {}
                }
            }
    }, , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "state", (function() {
            return o
        })), n.d(e, "mutations", (function() {
            return a
        })), n.d(e, "getters", (function() {
            return r
        })), n.d(e, "actions", (function() {
            return c
        }));
        var i = n(4),
            s = n(6);
        const o = () => ({
                splashViewed: !1,
                mainNavOpen: !1,
                mainNavTweening: !1,
                mainNavSubMenuOpen: !1,
                searchOpen: !1,
                modalOpen: !1,
                loading: !1,
                width: null,
                height: null,
                breakpoint: null,
                isMobile: null,
                darkTheme: null,
                darkBg: !1,
                theme: "white",
                scrollbarWidth: 15,
                topbar: !0
            }),
            a = {
                setSizes(t, e) {
                    let {
                        width: n,
                        height: i
                    } = e;
                    t.width = n, t.height = i
                },
                setMainNavOpen(t, e) {
                    t.mainNavOpen = e
                },
                setMainNavTweening(t, e) {
                    t.mainNavTweening = e
                },
                setMainNavSubMenuOpen(t, e) {
                    t.mainNavSubMenuOpen = e
                },
                setModalOpen(t, e) {
                    t.modalOpen = e
                },
                setSearchOpen(t, e) {
                    t.searchOpen = e
                },
                setBreakpoint(t, e) {
                    t.breakpoint = e
                },
                setMobileState(t, e) {
                    t.isMobile = e
                },
                setLoading(t, e) {
                    t.loading = e
                },
                setSplashViewed(t, e) {
                    t.splashViewed = e
                },
                setDarkTheme(t, e) {
                    t.darkTheme = e, t.theme = e ? "black" : "white"
                },
                setDarkBg(t, e) {
                    t.darkBg = e
                },
                setScrollBarWidth(t) {
                    const e = Object(s.g)();
                    t.scrollbarWidth = e
                },
                setTopbar(t, e) {
                    t.topbar = e
                }
            },
            r = {
                width: t => {
                    var e;
                    return null !== (e = t.width) && void 0 !== e ? e : 0
                },
                height: t => {
                    var e;
                    return null !== (e = t.height) && void 0 !== e ? e : 0
                },
                diag: t => Math.sqrt(Math.pow(t.width, 2) + Math.pow(t.height, 2)),
                maxSize: t => Math.max(t.width, t.height),
                isHorizontal: t => t.width > t.height,
                ratio: t => t.width / t.height,
                breakpoint: t => {
                    var e;
                    return null !== (e = t.breakpoint) && void 0 !== e ? e : null
                },
                mobile: t => {
                    var e;
                    return null !== (e = t.isMobile) && void 0 !== e && e
                },
                smallDevice: t => {
                    var e;
                    return null !== (e = t.width < 1280) && void 0 !== e && e
                },
                center: t => {
                    var e, n;
                    return {
                        x: (null !== (e = t.width) && void 0 !== e ? e : 0) / 2,
                        y: (null !== (n = t.height) && void 0 !== n ? n : 0) / 2
                    }
                },
                darkTheme: t => {
                    var e;
                    return null !== (e = t.darkTheme) && void 0 !== e && e
                },
                theme: t => {
                    var e;
                    return null !== (e = t.theme) && void 0 !== e ? e : "white"
                },
                mainNavOpen: t => {
                    var e;
                    return null !== (e = t.mainNavOpen) && void 0 !== e && e
                },
                mainNavTweening: t => {
                    var e;
                    return null !== (e = t.mainNavTweening) && void 0 !== e && e
                }
            },
            c = {
                async setTopbarHeightVar(t) {
                    let {
                        commit: e,
                        state: n
                    } = t;
                    n.topbar ? i.b.set(document.documentElement, {
                        "--topbar-height": "calc(110 / var(--font-size) * 1rem)"
                    }) : i.b.set(document.documentElement, {
                        "--topbar-height": "0"
                    })
                }
            }
    }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "state", (function() {
            return i
        })), n.d(e, "mutations", (function() {
            return s
        }));
        const i = () => ({
                locale: null,
                switching: !1
            }),
            s = {
                setLocale(t, e) {
                    t.locale = e
                },
                setSwitching(t, e) {
                    t.switching = e
                }
            }
    }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "state", (function() {
            return s
        })), n.d(e, "mutations", (function() {
            return o
        })), n.d(e, "getters", (function() {
            return a
        })), n.d(e, "actions", (function() {
            return r
        }));
        var i = n(64);
        const s = () => ({
                news: [],
                categories: [],
                activeFilters: [],
                newsVisible: 4
            }),
            o = {
                setNews(t, e) {
                    t.news = e
                },
                setActiveFilters(t, e) {
                    const n = [];
                    t.categories.map((t => (t.options.map((t => (n.push(t), t))), t)));
                    const i = [...n.filter((t => e.includes(t.id)))];
                    t.activeFilters = i
                },
                pushNews(t, e) {
                    t.news.push(e)
                },
                setCategories(t, e) {
                    t.categories = e
                },
                setActiveFiltersWithRouteQuery(t, e) {
                    const n = this.$exists(t.categories) ? this.$getSingle(t.categories) : null,
                        i = null == n ? void 0 : n.options.filter((t => t.slug === e));
                    t.activeFilters = i
                },
                setNewsVisible(t, e) {
                    t.newsVisible = e
                }
            },
            a = {
                news: t => t.news.filter((t => 0 !== Object.keys(t).length)),
                filteredNews: t => {
                    var e;
                    const n = t.news.filter((t => 0 !== Object.keys(t).length));
                    return t.activeFilters && null !== (e = t.activeFilters) && void 0 !== e && e.length ? n.filter((e => {
                        const n = e.category.map((t => parseInt(t.id)));
                        return t.activeFilters.some((t => n.includes(parseInt(t.id))))
                    })) : n
                }
            },
            r = {
                async getNewsCategories(t, e) {
                    let {
                        commit: n
                    } = t;
                    try {
                        var s;
                        const {
                            categories: t
                        } = await this.$query(i.b, {
                            site: e.store.state.locales.locale
                        });
                        n("setCategories", [{
                            options: t
                        }]);
                        const o = t.filter((t => 144 === parseInt(t.id))),
                            a = [{
                                id: "news",
                                route: {
                                    name: "news",
                                    query: {
                                        cat: this.$exists(o) ? null === (s = this.$getSingle(o)) || void 0 === s ? void 0 : s.slug : ""
                                    }
                                },
                                label: e.i18n.t("routes.decorSuggestion")
                            }, {
                                id: "assistance",
                                route: {
                                    name: "assistance"
                                },
                                label: e.i18n.t("routes.assistance")
                            }, {
                                id: "jobs",
                                route: {
                                    name: "jobs"
                                },
                                label: e.i18n.t("routes.jobs")
                            }, {
                                id: "privacy",
                                route: {
                                    name: "privacy"
                                },
                                label: e.i18n.t("routes.privacy")
                            }, {
                                id: "cookies",
                                route: {
                                    name: "cookies"
                                },
                                label: "Cookies"
                            }];
                        e.store.commit("navigation/setSubNav", a)
                    } catch (t) {}
                },
                async getNews(t, e) {
                    let {
                        commit: n
                    } = t;
                    try {
                        const {
                            news: t
                        } = await this.$query(i.a, {
                            site: e.store.state.locales.locale
                        });
                        n("setNews", t)
                    } catch (t) {}
                }
            }
    }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "state", (function() {
            return c
        })), n.d(e, "mutations", (function() {
            return l
        })), n.d(e, "getters", (function() {
            return u
        })), n.d(e, "actions", (function() {
            return h
        }));
        var i = n(62),
            s = n(64),
            o = n(27),
            a = n(75),
            r = n(130);
        const c = () => ({
                activePageId: null
            }),
            l = {
                setPageData(t, e) {
                    this.$bus.$set(t, e.id, e.data)
                },
                setActivePageId(t, e) {
                    t.activePageId = e
                }
            },
            u = {
                activePage: t => {
                    var e;
                    return null !== (e = t[t.activePageId]) && void 0 !== e ? e : null
                }
            },
            h = {
                async getAllPages(t, e) {
                    let {
                        commit: n
                    } = t;
                    try {
                        const t = await Promise.all([this.$query(i.c, {
                                site: e.store.state.locales.locale,
                                handle: "kitchensIndex"
                            }), this.$query(r.a, {
                                site: e.store.state.locales.locale
                            }), this.$query(s.a, {
                                site: e.store.state.locales.locale
                            }), this.$query(i.a, {
                                site: e.store.state.locales.locale
                            }), this.$query(o.a, {
                                site: e.store.state.locales.locale
                            }), this.$query(a.b, {
                                site: e.store.state.locales.locale
                            })]),
                            {
                                kitchensIndex: c,
                                stories: l,
                                news: u,
                                kitchens: h,
                                homepage: d,
                                contract: p,
                                socialCommitment: m,
                                showroomsIndex: g,
                                concept: f,
                                production: v,
                                identity: b,
                                workIn: y,
                                appointment: w,
                                assistance: _,
                                servicesIndex: x,
                                newsIndex: $,
                                jobsIndex: k,
                                storiesIndex: O,
                                contracts: C,
                                socialCommitments: j
                            } = t.reduce(((t, e) => ({ ...t,
                                ...e
                            })), {});
                        e.store.commit("kitchens/setKitchens", h), e.store.commit("news/setNews", u), e.store.commit("stories/setStories", l), e.store.commit("projects/setProjects", [...C, ...j]), n("setPageData", {
                            id: "kitchensIndex",
                            data: c
                        }), n("setPageData", {
                            id: "homepage",
                            data: d
                        }), n("setPageData", {
                            id: "contract",
                            data: p
                        }), n("setPageData", {
                            id: "socialCommitment",
                            data: m
                        }), n("setPageData", {
                            id: "showroomsIndex",
                            data: g
                        }), n("setPageData", {
                            id: "concept",
                            data: f
                        }), n("setPageData", {
                            id: "production",
                            data: v
                        }), n("setPageData", {
                            id: "identity",
                            data: b
                        }), n("setPageData", {
                            id: "workIn",
                            data: y
                        }), n("setPageData", {
                            id: "appointment",
                            data: w
                        }), n("setPageData", {
                            id: "assistance",
                            data: _
                        }), n("setPageData", {
                            id: "servicesIndex",
                            data: x
                        }), n("setPageData", {
                            id: "newsIndex",
                            data: $
                        }), n("setPageData", {
                            id: "jobsIndex",
                            data: k
                        }), n("setPageData", {
                            id: "storiesIndex",
                            data: O
                        })
                    } catch (t) {}
                }
            }
    }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "state", (function() {
            return s
        })), n.d(e, "mutations", (function() {
            return o
        })), n.d(e, "getters", (function() {
            return r
        })), n.d(e, "actions", (function() {
            return c
        }));
        var i = n(75);
        const s = () => ({
                projects: []
            }),
            o = {
                setProjects(t, e) {
                    t.projects = e
                },
                pushProject(t, e) {
                    t.projects.push(e)
                }
            },
            a = t => Array.isArray(t) && t.length ? t[0] : null,
            r = {
                contracts: t => {
                    var e;
                    return null !== (e = t.projects.filter((t => {
                        const e = Array.isArray(t.category) ? a(t.category) : t.category;
                        return t && "contract" === e.slug
                    }))) && void 0 !== e ? e : []
                },
                socialCommitments: t => {
                    var e;
                    return null !== (e = t.projects.filter((t => {
                        const e = Array.isArray(t.category) ? a(t.category) : t.category;
                        return t && "social-commitment" === e.slug
                    }))) && void 0 !== e ? e : []
                }
            },
            c = {
                async getProjects(t, e) {
                    let {
                        commit: n
                    } = t;
                    try {
                        const {
                            contracts: t,
                            socialCommitments: s
                        } = await this.$query(i.b, {
                            site: e.store.state.locales.locale
                        });
                        n("setProjects", [...t, ...s])
                    } catch (t) {}
                }
            }
    }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "state", (function() {
            return i
        })), n.d(e, "mutations", (function() {
            return s
        })), n.d(e, "getters", (function() {
            return o
        }));
        const i = () => ({
                initialized: !1,
                x: 0,
                y: 0,
                percent: 0,
                direction: null,
                locked: !1,
                limit: 0,
                orientation: "vertical",
                overflowHidden: !0
            }),
            s = {
                setInitialized(t, e) {
                    t.initialized = e
                },
                setOrientation(t, e) {
                    t.orientation = e
                },
                resetDirection(t) {
                    t.direction = null
                },
                resetPosition(t) {
                    t.x = 0, t.y = 0, t.percent = 0
                },
                setLocked(t, e) {
                    t.locked = e
                },
                setData(t, e) {
                    e.y >= 0 && (t.x = Math.round(e.x), t.y = Math.round(e.y), t.limit = Math.round(e.limit), -1 === e.direction ? t.direction = "up" : 1 === e.direction && (t.direction = "down"), ["down", "up"].includes(t.direction) ? t.percent = Math.round(t.y / t.limit * 100) : t.percent = Math.round(t.x / t.limit * 100))
                },
                setOverflowHidden(t, e) {
                    t.overflowHidden = e
                }
            },
            o = {
                headerScrolled: t => "vertical" === t.orientation ? t.y > 50 : t.x > 50,
                initialized: t => t.initialized,
                scrolltriggerInitialized: t => t.scrolltriggerInitialized,
                x: t => {
                    var e;
                    return null !== (e = t.x) && void 0 !== e ? e : 0
                },
                y: t => {
                    var e;
                    return null !== (e = t.y) && void 0 !== e ? e : 0
                },
                percent: t => {
                    var e;
                    return null !== (e = t.percent) && void 0 !== e ? e : 0
                },
                direction: t => {
                    var e;
                    return null !== (e = t.direction) && void 0 !== e ? e : "down"
                },
                limit: t => {
                    var e;
                    return null !== (e = t.limit) && void 0 !== e ? e : {
                        x: 0,
                        y: 0
                    }
                },
                scrollLocked: t => {
                    var e;
                    return null !== (e = t.locked) && void 0 !== e && e
                }
            }
    }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "state", (function() {
            return i
        })), n.d(e, "mutations", (function() {
            return s
        })), n.d(e, "actions", (function() {
            return o
        }));
        const i = () => ({
                title: "Primopiano cucine",
                description: null,
                image: "/ogimage.jpg",
                suffix: null
            }),
            s = {
                setSEOData(t, e) {
                    t.title = e.metaTitle, t.description = e.metaDescription, t.image = e.metaOgImage, t.suffix = e.metaSuffix
                }
            },
            o = {
                async getGlobalInfo(t, e) {
                    let {
                        commit: n,
                        dispatch: i
                    } = t
                }
            }
    }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "state", (function() {
            return i
        })), n.d(e, "mutations", (function() {
            return s
        }));
        const i = () => ({
                stories: []
            }),
            s = {
                setStories(t, e) {
                    t.stories = e
                }
            }
    }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "state", (function() {
            return i
        })), n.d(e, "mutations", (function() {
            return s
        }));
        const i = () => ({
                bottomToTop: !1,
                overlappedHero: !1
            }),
            s = {
                setBottomToTop(t, e) {
                    t.bottomToTop = e
                },
                setOverlappedHero(t, e) {
                    t.overlappedHero = e
                }
            }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        var i = {
            "./ar.json": [377, 141],
            "./az.json": [378, 142],
            "./bd.json": [379, 143],
            "./bg.json": [380, 144],
            "./ca.json": [381, 145],
            "./ckb.json": [382, 146],
            "./cs.json": [383, 147],
            "./da.json": [384, 148],
            "./de.json": [385, 149],
            "./el.json": [386, 150],
            "./en.json": [104],
            "./es.json": [387, 151],
            "./et.json": [388, 152],
            "./eu.json": [389, 153],
            "./fa.json": [390, 154],
            "./fi.json": [391, 155],
            "./fr.json": [392, 156],
            "./he.json": [393, 157],
            "./hr.json": [394, 158],
            "./hu.json": [395, 159],
            "./id.json": [396, 160],
            "./it.json": [103],
            "./ja.json": [397, 161],
            "./ka.json": [398, 162],
            "./ko.json": [399, 163],
            "./lt.json": [400, 164],
            "./lv.json": [401, 165],
            "./mn.json": [402, 166],
            "./ms_MY.json": [403, 167],
            "./nb_NO.json": [404, 168],
            "./ne.json": [405, 169],
            "./nl.json": [406, 170],
            "./nn_NO.json": [407, 171],
            "./pl.json": [408, 172],
            "./pt_BR.json": [409, 173],
            "./pt_PT.json": [410, 174],
            "./ro.json": [411, 175],
            "./ru.json": [412, 176],
            "./sk.json": [413, 177],
            "./sl.json": [414, 178],
            "./sq.json": [415, 179],
            "./sr.json": [416, 180],
            "./sr_Latin.json": [417, 181],
            "./sv.json": [418, 182],
            "./th.json": [419, 183],
            "./tr.json": [420, 184],
            "./uk.json": [421, 185],
            "./uz.json": [422, 186],
            "./vi.json": [423, 187],
            "./zh_CN.json": [424, 188],
            "./zh_TW.json": [425, 189]
        };

        function s(t) {
            if (!n.o(i, t)) return Promise.resolve().then((function() {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }));
            var e = i[t],
                s = e[0];
            return Promise.all(e.slice(1).map(n.e)).then((function() {
                return n.t(s, 3)
            }))
        }
        s.keys = function() {
            return Object.keys(i)
        }, s.id = 367, t.exports = s
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(4),
            s = n(6),
            o = n(73),
            a = {
                props: {
                    image: Object,
                    route: Object,
                    title: String,
                    date: String,
                    section: String,
                    active: {
                        type: Boolean,
                        default: !0
                    }
                },
                computed: {
                    dateTime() {
                        return this.date && this.formatDate(this.date, "MMMM,yyyy", this.$i18n.locale)
                    }
                },
                methods: {
                    formatDate: o.a,
                    beforeEnter(t) {
                        const e = Object(s.p)("[data-navcard-stagger]", t);
                        i.b.killTweensOf(e), i.b.set(e, {
                            opacity: 0,
                            x: -25
                        })
                    },
                    enter(t, e) {
                        const n = Object(s.p)("[data-navcard-stagger]", t);
                        i.b.killTweensOf(n), i.b.timeline({
                            onComplete: () => {
                                i.b.set(n, {
                                    clearProps: "transform,opacity"
                                })
                            }
                        }).to(n, {
                            x: 0,
                            opacity: 1,
                            stagger: .05
                        }).add(e)
                    },
                    leave(t, e) {
                        const n = Object(s.p)("[data-navcard-stagger]", t);
                        i.b.killTweensOf(n), i.b.timeline().to(n, {
                            x: -25,
                            opacity: 0,
                            stagger: .05
                        }).add(e)
                    }
                }
            },
            r = (n(300), n(12)),
            c = Object(r.a)(a, (function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "story-nav-card",
                    class: [{
                        "-show-content": t.active
                    }, {
                        "-inactive": !t.active
                    }]
                }, [t.image ? e("base-picture", {
                    attrs: {
                        "data-nav-focus-img": "",
                        image: t.image,
                        preload: ""
                    }
                }) : t._e(), t._v(" "), e("transition", {
                    attrs: {
                        css: !1
                    },
                    on: {
                        "before-enter": t.beforeEnter,
                        enter: t.enter,
                        leave: t.leave
                    }
                }, [t.active ? e("div", {
                    staticClass: "story-nav-card__content"
                }, [t.section ? e("p", {
                    staticClass: "story-nav-card__cat",
                    attrs: {
                        "data-navcard-stagger": ""
                    }
                }, ["stories" === t.section ? e("span", [t._v(t._s(t.$t("entities.stories.label")))]) : "kitchens" === t.section ? e("span", [t._v(t._s(t.$t("entities.kitchens.label")))]) : t._e()]) : t._e(), t._v(" "), t.dateTime ? e("p", {
                    staticClass: "story-nav-card__date",
                    attrs: {
                        "data-navcard-stagger": ""
                    }
                }, [t._v("\n        " + t._s(t.dateTime) + "\n      ")]) : t._e(), t._v(" "), t.title ? e("p", {
                    staticClass: "story-nav-card__title",
                    attrs: {
                        "data-navcard-stagger": ""
                    }
                }, [t._v("\n        " + t._s(t.title) + "\n      ")]) : t._e(), t._v(" "), t.route ? e("base-button", {
                    attrs: {
                        to: t.localePath(t.$routeMatcher(t.route)),
                        "data-navcard-stagger": "",
                        color: "white",
                        label: t.$t("actions.discover_more")
                    }
                }, [t._v("\n        " + t._s(t.$t("actions.discover_more")) + "\n      ")]) : t._e()], 1) : t._e()])], 1)
            }), [], !1, null, null, null);
        e.default = c.exports;
        installComponents(c, {
            BasePicture: n(71).default,
            BaseButton: n(72).default
        })
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(9),
            s = {
                props: {
                    theme: {
                        type: String,
                        validator: t => ["white", "black"].includes(t)
                    }
                },
                data: () => ({
                    tweening: !1
                }),
                computed: { ...Object(i.b)("layout", ["mainNavOpen", "mainNavTweening"]),
                    ...Object(i.b)("layout", {
                        themeColor: "theme"
                    }),
                    tone() {
                        return this.theme || this.themeColor
                    }
                },
                watch: {
                    async mainNavOpen(t, e) {
                        t || (this.tweening = !0, await new Promise((t => setTimeout(t, 300))), this.tweening = !1)
                    }
                },
                methods: { ...Object(i.c)("layout", ["setMainNavOpen"]),
                    toggleNav() {
                        this.mainNavTweening || this.setMainNavOpen(!this.mainNavOpen)
                    }
                }
            },
            o = (n(302), n(12)),
            a = Object(o.a)(s, (function() {
                var t = this,
                    e = t._self._c;
                return e("button", {
                    staticClass: "hamb-btn",
                    class: [{
                        "-nav-is-open": t.mainNavOpen
                    }, `${t.theme}-theme`, {
                        "is-tweening": t.tweening
                    }],
                    attrs: {
                        tabindex: "0",
                        "aria-label": t.$t("actions.menu"),
                        name: t.$t("actions.menu")
                    },
                    on: {
                        click: function(e) {
                            return t.toggleNav()
                        }
                    }
                }, [e("span", {
                    staticClass: "hamb-btn__wr"
                }, t._l(9, (function(t, n) {
                    return e("span", {
                        key: n,
                        staticClass: "hamb-btn__square",
                        class: [{
                            "-middle": 4 === n
                        }, {
                            "-laterals": 4 !== n
                        }]
                    })
                })), 0)])
            }), [], !1, null, null, null);
        e.default = a.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(4),
            s = n(9),
            o = n(6),
            a = {
                props: {
                    image: Object
                },
                computed: { ...Object(s.d)("layout", {
                        layoutWidth: "width"
                    }),
                    ...Object(s.b)("layout", ["smallDevice"])
                },
                destroyed() {
                    try {
                        var t;
                        null === (t = Object.keys(this._sts)) || void 0 === t || t.forEach((t => {
                            this._sts[t].kill(!1)
                        }))
                    } catch (t) {}
                },
                async mounted() {
                    this._sts = {}, this.$watch((() => this.$store.getters["layout/diag"]), (t => {
                        try {
                            var e;
                            null === (e = Object.keys(this._sts)) || void 0 === e || e.forEach((t => {
                                this._sts[t].kill(!1)
                            }))
                        } catch (t) {}
                        const n = Object(o.o)(".base-picture", this.$refs.image);
                        this.image && (i.b.set(this.$refs.image, {
                            clipPath: this.layoutWidth <= 820 ? "polygon(10% 20%, 90% 20%, 90% 60%, 10% 60%)" : this.layoutWidth < 1280 ? "polygon(25% 30%, 75% 30%, 75% 70%, 25% 70%)" : "polygon(30% 20%, 70% 20%, 70% 70%, 30% 70%)"
                        }), i.b.set(n, {
                            scale: .8
                        })), this.image && (this._sts.heroClip = this.$bus.$scrollTrigger.create({
                            id: "hero-clip",
                            animation: i.b.timeline().to(this.$refs.title, {
                                yPercent: 100
                            }, "start").to(this.$refs.image, {
                                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                            }, "start").to(n, {
                                scale: 1
                            }, "start"),
                            scrub: !0,
                            trigger: this.$el,
                            start: "top top",
                            end: this.smallDevice ? "bottom center+=10%" : "bottom bottom-=15%"
                        }))
                    }), {
                        immediate: !0
                    })
                }
            },
            r = (n(303), n(12)),
            c = Object(r.a)(a, (function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "kitchens-cover"
                }, [e("div", {
                    ref: "image-wr",
                    staticClass: "kitchens-cover__image-wr"
                }, [t.image ? e("div", {
                    ref: "image",
                    staticClass: "kitchens-cover__image",
                    attrs: {
                        "data-block-image": ""
                    }
                }, [e("base-picture", {
                    attrs: {
                        preload: "",
                        lazy: !1,
                        image: Array.isArray(t.image) ? t.$getSingle(t.image) : t.image
                    }
                })], 1) : t._e()])])
            }), [], !1, null, null, null);
        e.default = c.exports;
        installComponents(c, {
            BasePicture: n(71).default
        })
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(4),
            s = n(6),
            o = {
                props: {
                    position: Object
                },
                data: () => ({
                    hoverActive: !1,
                    visible: !1
                }),
                beforeDestroy() {
                    this.destroy()
                },
                async mounted() {
                    if (this.isTouchScreen()) return;
                    this.setupBusEvents(), await this.$nextTick();
                    const t = window.innerWidth / 2,
                        e = window.innerHeight / 2;
                    this.pointer = {
                        x: t,
                        y: e
                    }, this.setupHover()
                },
                methods: {
                    isTouchScreen: s.k,
                    start() {
                        this.removeEventsListeners(), this.addEventsListeners()
                    },
                    stop() {
                        this.removeEventsListeners()
                    },
                    hide() {
                        this.visible = !1
                    },
                    show() {
                        this.visible = !0
                    },
                    onHoverEnter() {
                        this.hoverCount += 1, this.hoverActive = !0
                    },
                    onHoverLeave() {
                        this.hoverCount -= 1, this.hoverCount <= 0 && (this.hoverCount = 0, this.hoverActive = !1)
                    },
                    addEventsListeners() {
                        for (const t of this.hoverTargets) t.addEventListener("pointerenter", this.onHoverEnter), t.addEventListener("pointerleave", this.onHoverLeave), document.addEventListener("mouseenter", this.show), document.addEventListener("mouseleave", this.hide);
                        window.addEventListener("pointermove", this.pointerMove, {
                            passive: !0
                        })
                    },
                    removeEventsListeners() {
                        for (const t of this.hoverTargets) t.removeEventListener("pointerenter", this.onHoverEnter), t.removeEventListener("pointerleave", this.onHoverLeave), document.removeEventListener("mouseenter", this.show), document.removeEventListener("mouseleave", this.hide);
                        window.removeEventListener("pointermove", this.pointerMove, {
                            passive: !0
                        })
                    },
                    setupBusEvents() {
                        this.$bus.$on("cursor:start", this.start), this.$bus.$on("cursor:refresh", this.refresh)
                    },
                    destroyBusEvents() {
                        this.$bus.$off("cursor:start", this.start), this.$bus.$off("cursor:refresh", this.refresh)
                    },
                    setupHover() {
                        const {
                            unitize: t
                        } = i.b.utils, e = this.$refs.cursor;
                        this.xTo = i.b.quickTo(e, "x", {
                            duration: .6,
                            ease: "power3"
                        }), this.yTo = i.b.quickTo(e, "y", {
                            duration: .6,
                            ease: "power3"
                        }), this.refresh()
                    },
                    refresh() {
                        this.hoverActive = !1, this.hoverTargets = [], this.hoverCount = 0, this.removeEventsListeners(), this.hoverTargets = Object(s.p)("div.accordion__head,a:not([disabled]):not(.link-exact-active),button:not([disabled]):not(.CybotCookiebotDialogBodyButton):not(.CybotCookiebotBannerCloseButton),label[for],select:not([disabled],input:not([disabled]):not(.CybotCookiebotDialogBodyLevelButton),textarea:not([disabled])"), this.addEventsListeners()
                    },
                    destroy() {
                        this.destroyBusEvents(), this.removeEventsListeners()
                    },
                    pointerMove(t) {
                        const {
                            clamp: e
                        } = i.b.utils;
                        this.pointer.x = e(20, window.innerWidth, t.clientX), this.pointer.y = e(20, window.innerHeight, t.clientY), this.xTo(this.pointer.x), this.yTo(this.pointer.y)
                    }
                }
            },
            a = (n(305), n(12)),
            r = Object(a.a)(o, (function() {
                var t = this,
                    e = t._self._c;
                return e("client-only", [e("div", [t.isTouchScreen() ? t._e() : e("div", {
                    ref: "cursor",
                    staticClass: "the-cursor"
                }, [e("transition", {
                    attrs: {
                        name: "scale"
                    }
                }, [t.visible ? e("div", {
                    ref: "square",
                    class: ["the-cursor__square", {
                        "-hovering": t.hoverActive
                    }]
                }) : t._e()])], 1)])])
            }), [], !1, null, null, null);
        e.default = r.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "state", (function() {
            return c
        })), n.d(e, "mutations", (function() {
            return l
        })), n.d(e, "getters", (function() {
            return u
        })), n.d(e, "actions", (function() {
            return h
        }));
        var i = n(13),
            s = n(2);
        const o = i.a `
  query GLOBAL($site: [String]) {
    globalSet(site: $site) {
      ... on globals_GlobalSet {
        handle
        name: firstname
        description
        vat: vatNumber
        rea: reaNumber
        capSoc: column1Title
        street
        postalCode
        city
        district(label: false)
        region
        phone
        email
        socials {
          facebook
          instagram
          linkedin
          pinterest
          tiktok
          youtube
        }
        ${s.n}
        footerLabel: baseTitle
        formSubtitle: subtitle
        formLead: lead
        formSublead: sublead
        subscribeMagazineTitle: string
        subscribeMagazineSubtitle: column3Title
        images404: images {
          ... on images_Asset {
            ${Object(s.e)({width:1024})}
          }
        }
      }
    }
  }
`;
        i.a `
  query SEARCH($query: String, $site: [String]) {
    entries(section: [
      "newsIndex",
      "news",
    ],
    search: $query,
    site: $site,
    orderBy: "title ASC") {
      id
      section: sectionHandle
      title
      slug
      ... on news_news_Entry {
        title
      }
    }
  }
`;
        var a = n(115),
            r = n(6);
        const c = () => ({
                name: null,
                description: null,
                vat: null,
                rea: null,
                capSoc: null,
                address: {
                    street: null,
                    postalCode: null,
                    city: null,
                    district: null,
                    region: null
                },
                contacts: {
                    email: null,
                    phone: null
                },
                socials: [],
                labels: {},
                images404: [],
                showrooms: []
            }),
            l = {
                setGlobalsData(t, e) {
                    t.name = null == e ? void 0 : e.name, t.description = null == e ? void 0 : e.description, t.vat = null == e ? void 0 : e.vat, t.rea = null == e ? void 0 : e.rea, t.capSoc = null == e ? void 0 : e.capSoc, t.address.street = null == e ? void 0 : e.street, t.address.postalCode = null == e ? void 0 : e.postalCode, t.address.city = null == e ? void 0 : e.city, t.address.district = null == e ? void 0 : e.district, t.address.region = null == e ? void 0 : e.region, t.contacts.phone = null == e ? void 0 : e.phone, t.contacts.email = null == e ? void 0 : e.email, t.socials = null == e ? void 0 : e.socials, t.labels.footerLabel = null == e ? void 0 : e.footerLabel, t.labels.formSubtitle = null == e ? void 0 : e.formSubtitle, t.labels.formLead = null == e ? void 0 : e.formLead, t.labels.formSublead = null == e ? void 0 : e.formSublead, t.labels.subscribeMagazineTitle = null == e ? void 0 : e.subscribeMagazineTitle, t.labels.subscribeMagazineSubtitle = null == e ? void 0 : e.subscribeMagazineSubtitle, t.images404 = null == e ? void 0 : e.images404
                },
                setShowrooms(t, e) {
                    t.showrooms = e
                }
            },
            u = {
                socialNetworks: t => {
                    const e = Array.isArray(t.socials) && t.socials.length ? t.socials[0] : null;
                    if (!e) return null;
                    const n = [];
                    for (const t in e) {
                        const i = {
                            name: t,
                            link: e[t],
                            icon: Object(r.b)(t)
                        };
                        n.push(i)
                    }
                    return n.filter((t => t && t.link))
                }
            },
            h = {
                async getGlobalsData(t, e) {
                    let {
                        commit: n
                    } = t;
                    try {
                        const {
                            globalSet: t
                        } = await this.$query(o, {
                            handle: "globals",
                            site: e.store.state.locales.locale
                        });
                        n("setGlobalsData", t), e.store.commit("seo/setSEOData", {
                            metaTitle: t.metaTitle,
                            metaDescription: t.metaDescription,
                            metaOgImage: e.$exists(t.metaOgImage) ? e.$getSingle(t.metaOgImage).src : "/ogimage.jpg",
                            metaSuffix: t.metaSuffix
                        })
                    } catch (t) {}
                },
                async getShowrooms(t, e) {
                    let {
                        commit: n
                    } = t;
                    try {
                        const {
                            entries: t
                        } = await this.$query(a.a, {
                            site: e.store.state.locales.locale
                        });
                        n("setShowrooms", t)
                    } catch (t) {}
                }
            }
    }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "state", (function() {
            return a
        })), n.d(e, "mutations", (function() {
            return r
        })), n.d(e, "getters", (function() {
            return c
        })), n.d(e, "actions", (function() {
            return l
        }));
        var i = n(13),
            s = n(2);
        const o = i.a `
  query NAVIGATION($handle: String!, $site: [String]) {
    nav: navigationNodes(navHandle: $handle, level: 1, site: $site) {
      ... on mainNavigation_Node {
        id
        title
        typeLabel
        newWindow
        navAction {
          ${s.m}
        }
        children {
          ... on mainNavigation_Node {
            id
            title
            navAction {
              ${s.m}
            }
          }
        }
      }
    }
    story: navigationNodes(navHandle: "mainNavigationFocus", level: 1, site: $site) {
      ... on mainNavigationFocus_Node {
        id
        title
        newWindow
        element {
          ... on stories_story_Entry {
            title: baseTitle
            ${s.m}
            date
            thumbnail {
              ${s.d}
            }
            person {
              ${s.k}
            }
          }
          ... on news_newsItem_Entry {
            title: baseTitle
            ${s.m}
            date
            thumbnail: image {
              ${s.d}
            }
            person {
              ${s.k}
            }
          }
          ... on kitchens_kitchen_Entry {
            title: baseTitle
            ${s.m}
            thumbnail: image {
              ${s.d}
            }
          }
        }
      }
    }
  }
`,
            a = () => ({
                navTweening: null,
                mainMenuPages: [],
                mainMenuStory: {},
                subNav: [],
                route: {
                    prev: null,
                    next: null
                },
                transitioning: null,
                errorPage: !1
            }),
            r = {
                setNavTweening(t, e) {
                    t.navTweening = e
                },
                setMainMenuPages(t, e) {
                    t.mainMenuPages = e
                },
                setMainMenuStory(t, e) {
                    t.mainMenuStory = e
                },
                setSubNav(t, e) {
                    t.subNav = e
                },
                setPrevRoute(t, e) {
                    t.route.prev = e
                },
                setNextRoute(t, e) {
                    t.route.next = e
                },
                setTransitioning(t, e) {
                    t.transitioning = e
                },
                setErrorPage(t, e) {
                    t.errorPage = e
                }
            },
            c = {
                navTweening: t => {
                    var e;
                    return null !== (e = t.navTweening) && void 0 !== e && e
                },
                mainMenuPages: t => {
                    var e;
                    return null !== (e = t.mainMenuPages) && void 0 !== e ? e : []
                },
                mainMenuStory: t => {
                    var e;
                    return null !== (e = t.mainMenuStory) && void 0 !== e ? e : {}
                }
            },
            l = {
                async getNavigationData(t, e) {
                    let {
                        commit: n
                    } = t;
                    try {
                        const {
                            nav: t,
                            story: i
                        } = await this.$query(o, {
                            handle: "mainNavigation",
                            site: e.store.state.locales.locale
                        });
                        n("setMainMenuPages", t), n("setMainMenuStory", i);
                        n("setSubNav", [{
                            id: "assistance",
                            route: {
                                name: "assistance"
                            },
                            label: e.i18n.t("routes.assistance")
                        }, {
                            id: "jobs",
                            route: {
                                name: "jobs"
                            },
                            label: e.i18n.t("routes.jobs")
                        }, {
                            id: "privacy",
                            route: {
                                name: "privacy"
                            },
                            label: e.i18n.t("routes.privacy")
                        }, {
                            id: "cookies",
                            route: {
                                name: "cookies"
                            },
                            label: "Cookies"
                        }])
                    } catch (t) {}
                }
            }
    }],
    [
        [261, 139, 10, 140]
    ]
]);