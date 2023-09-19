(window.webpackJsonp = window.webpackJsonp || []).push([
    [122, 41, 65, 86], {
        437: function(t, e, s) {
            t.exports = {}
        },
        438: function(t, e, s) {
            t.exports = {}
        },
        440: function(t, e, s) {
            "use strict";
            s(437)
        },
        442: function(t, e, s) {
            "use strict";
            s.r(e);
            var i = s(9),
                a = {
                    props: {
                        setup: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    computed: { ...Object(i.b)("pages", ["activePage"]),
                        ...Object(i.d)("kitchens", ["cover"]),
                        ...Object(i.d)("pages", ["activePageId"]),
                        showBreadcrumbs() {
                            return !["homepage"].includes(this.activePageId)
                        }
                    },
                    async created() {}
                },
                o = (s(445), s(12)),
                l = Object(o.a)(a, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "page-wrapper"
                    }, [e("transition", {
                        key: t.activePageId,
                        attrs: {
                            name: "simple-fade"
                        }
                    }, [t.showBreadcrumbs ? e("breadcrumbs") : t._e()], 1), t._v(" "), e("div", {
                        staticClass: "page-overlay"
                    }), t._v(" "), e("div", {
                        staticClass: "page-container"
                    }, [t._t("default"), t._v(" "), e("the-footer")], 2)], 1)
                }), [], !1, null, null, null);
            e.default = l.exports;
            installComponents(l, {
                Breadcrumbs: s(443).default,
                TheFooter: s(447).default
            })
        },
        443: function(t, e, s) {
            "use strict";
            s.r(e);
            var i = s(9),
                a = {
                    computed: { ...Object(i.d)("layout", {
                            darkBg: "darkBg"
                        }),
                        tone() {
                            return this.darkBg ? "white" : "black"
                        },
                        breadcrumbs() {
                            return [{
                                name: "index",
                                label: this.$t("routes.homepage"),
                                path: this.localePath("/")
                            }, ...this.$store.getters["breadcrumbs/crumbs"]]
                        }
                    }
                },
                o = (s(440), s(12)),
                l = Object(o.a)(a, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "the-breadcrumbs-wr"
                    }, [e("ul", {
                        class: ["the-breadcrumbs", `-theme-${t.tone}`],
                        attrs: {
                            "data-breadcrumbs": ""
                        }
                    }, t._l(t.breadcrumbs, (function(s, i) {
                        return e("li", {
                            key: i
                        }, [i < t.breadcrumbs.length - 1 ? e("nuxt-link", {
                            attrs: {
                                to: t.localePath(s),
                                title: s.label,
                                "aria-label": s.label
                            }
                        }, [t._v("\n        " + t._s(s.label) + "\n      ")]) : e("span", [t._v("\n        " + t._s(s.label) + "\n      ")])], 1)
                    })), 0)])
                }), [], !1, null, null, null);
            e.default = l.exports
        },
        444: function(t, e, s) {
            "use strict";
            (function(t) {
                e.a = {
                    head() {
                        var e, s, i, a, o, l, r, n;
                        const c = this.$store.state.seo,
                            d = { ...c,
                                suffix: (null === (e = this.page) || void 0 === e ? void 0 : e.metaSuffix) || c.suffix || this.$config.SITE_TITLE,
                                title: (null === (s = this.page) || void 0 === s ? void 0 : s.metaTitle) || (null === (i = this.page) || void 0 === i ? void 0 : i.title) || c.title || this.$config.SITE_TITLE,
                                description: (null === (a = this.page) || void 0 === a ? void 0 : a.metaDescription) || (null === (o = this.page) || void 0 === o ? void 0 : o.abstract) || c.description || this.$config.SITE_DESCRIPTION,
                                image: (null === (l = this.$getSingle((null === (r = this.page) || void 0 === r ? void 0 : r.metaOgImage) || (null === (n = this.page) || void 0 === n ? void 0 : n.image))) || void 0 === l ? void 0 : l.src) || c.image
                            },
                            u = this.$nuxtI18nHead({
                                addSeoAttributes: !0
                            });
                        let h = [...u.link.filter((t => "canonical" === t.rel || "x-default" === t.hreflang || t.hreflang && t.hreflang.includes("-")))];
                        return h.filter((t => t.hreflang && "x-default" !== t.hreflang)).map((t => t.hreflang.split("-")[0])).includes(this.$i18n.defaultLocale) || (h = h.map((t => ({ ...t,
                            ..."x-default" === t.hreflang ? {
                                href: `${this.$config.BASE_URL}${this.$route.fullPath}`
                            } : {}
                        })))), {
                            htmlAttrs: { ...u.htmlAttrs
                            },
                            titleTemplate: `%s | ${d.suffix||c.suffix}`,
                            title: d.title || c.title,
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: d.description
                            }, {
                                hid: "og:title",
                                property: "og:title",
                                content: `${d.title} | ${d.suffix}` || c.title
                            }, {
                                hid: "og:description",
                                property: "og:description",
                                content: d.description
                            }, {
                                hid: "og:image",
                                property: "og:image",
                                content: d.image
                            }, {
                                hid: "og:url",
                                property: "og:url",
                                content: t.env.BASE_URL + this.$route.fullPath
                            }, ...u.meta],
                            link: h
                        }
                    },
                    jsonld() {
                        return {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            itemListElement: this.breadcrumbs.map(((t, e) => ({
                                "@type": "ListItem",
                                position: e + 1,
                                item: {
                                    "@id": `${this.$config.BASE_URL}${t.path}`,
                                    name: t.label
                                }
                            })))
                        }
                    },
                    computed: {
                        breadcrumbs() {
                            return [{
                                name: "index",
                                label: this.$t("routes.homepage"),
                                path: this.localePath("/")
                            }, ...this.$store.getters["breadcrumbs/crumbs"]]
                        }
                    }
                }
            }).call(this, s(86))
        },
        445: function(t, e, s) {
            "use strict";
            s(438)
        },
        448: function(t, e, s) {
            t.exports = {}
        },
        456: function(t, e, s) {
            (function(e) {
                var s = 1 / 0,
                    i = "[object Symbol]",
                    a = "\\ud800-\\udfff",
                    o = "\\u0300-\\u036f\\ufe20-\\ufe23",
                    l = "\\u20d0-\\u20f0",
                    r = "\\ufe0e\\ufe0f",
                    n = "[" + a + "]",
                    c = "[" + o + l + "]",
                    d = "\\ud83c[\\udffb-\\udfff]",
                    u = "[^" + a + "]",
                    h = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                    p = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                    g = "\\u200d",
                    m = "(?:" + c + "|" + d + ")" + "?",
                    f = "[" + r + "]?",
                    b = f + m + ("(?:" + g + "(?:" + [u, h, p].join("|") + ")" + f + m + ")*"),
                    v = "(?:" + [u + c + "?", c, h, p, n].join("|") + ")",
                    _ = RegExp(d + "(?=" + d + ")|" + v + b, "g"),
                    $ = RegExp("[" + g + a + o + l + r + "]"),
                    y = "object" == typeof e && e && e.Object === Object && e,
                    C = "object" == typeof self && self && self.Object === Object && self,
                    k = y || C || Function("return this")();

                function x(t) {
                    return $.test(t)
                }

                function w(t) {
                    return x(t) ? function(t) {
                        return t.match(_) || []
                    }(t) : function(t) {
                        return t.split("")
                    }(t)
                }
                var S = Object.prototype.toString,
                    j = k.Symbol,
                    P = j ? j.prototype : void 0,
                    A = P ? P.toString : void 0;

                function O(t) {
                    if ("string" == typeof t) return t;
                    if (function(t) {
                            return "symbol" == typeof t || function(t) {
                                return !!t && "object" == typeof t
                            }(t) && S.call(t) == i
                        }(t)) return A ? A.call(t) : "";
                    var e = t + "";
                    return "0" == e && 1 / t == -s ? "-0" : e
                }

                function B(t, e, s) {
                    var i = t.length;
                    return s = void 0 === s ? i : s, !e && s >= i ? t : function(t, e, s) {
                        var i = -1,
                            a = t.length;
                        e < 0 && (e = -e > a ? 0 : a + e), (s = s > a ? a : s) < 0 && (s += a), a = e > s ? 0 : s - e >>> 0, e >>>= 0;
                        for (var o = Array(a); ++i < a;) o[i] = t[i + e];
                        return o
                    }(t, e, s)
                }
                var I, L = (I = "toUpperCase", function(t) {
                    var e, s = x(t = null == (e = t) ? "" : O(e)) ? w(t) : void 0,
                        i = s ? s[0] : t.charAt(0),
                        a = s ? B(s, 1).join("") : t.slice(1);
                    return i[I]() + a
                });
                t.exports = L
            }).call(this, s(32))
        },
        457: function(t, e, s) {
            "use strict";
            s(448)
        },
        462: function(t, e, s) {
            "use strict";
            s.r(e);
            s(439), s(6);
            var i = {
                    props: {
                        subtitle: String,
                        lead: String,
                        sublead: String,
                        request: String,
                        dark: Boolean,
                        region: {
                            type: String,
                            default: "na1"
                        },
                        portalId: {
                            type: Number,
                            default: 8908513
                        },
                        formId: {
                            type: String,
                            required: !0
                        }
                    },
                    data: () => ({
                        visible: !1
                    }),
                    destroyed() {
                        try {
                            var t;
                            null === (t = Object.keys(this._sts)) || void 0 === t || t.forEach((t => {
                                this._sts[t].kill(!1)
                            }))
                        } catch (t) {}
                    },
                    mounted() {
                        this._sts = {}
                    },
                    methods: {
                        initST() {
                            this._sts.enter = this.$bus.$scrollTrigger.create({
                                id: "title-entry",
                                trigger: this.$refs.container,
                                start: () => "top center",
                                once: !0,
                                onEnter: () => {
                                    this.visible = !0
                                }
                            })
                        }
                    }
                },
                a = (s(457), s(12)),
                o = Object(a.a)(i, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", {
                        class: ["block-form", {
                            "-is-dark": t.dark
                        }],
                        attrs: {
                            "data-light": t.dark,
                            "data-dark": !t.dark
                        }
                    }, [e("div", {
                        ref: "container",
                        staticClass: "l-container"
                    }, [t.subtitle ? e("div", {
                        staticClass: "block-form__subtitle",
                        class: {
                            "-is-visible": t.visible
                        },
                        attrs: {
                            "data-text": ""
                        }
                    }, [t._v("\n      " + t._s(t.subtitle) + "\n    ")]) : t._e(), t._v(" "), t.lead ? e("div", {
                        staticClass: "block-form__lead",
                        class: {
                            "-is-visible": t.visible
                        },
                        attrs: {
                            "data-text": ""
                        },
                        domProps: {
                            innerHTML: t._s(t.lead)
                        }
                    }) : t._e(), t._v(" "), t.sublead ? e("div", {
                        staticClass: "block-form__sublead",
                        class: {
                            "-is-visible": t.visible
                        },
                        attrs: {
                            "data-text": ""
                        },
                        domProps: {
                            innerHTML: t._s(t.sublead)
                        }
                    }) : t._e(), t._v(" "), e("div", {
                        staticClass: "block-form__form",
                        class: {
                            "-is-visible": t.visible
                        },
                        attrs: {
                            "data-text": ""
                        }
                    }, [t.region && t.portalId && t.formId ? e("base-form", {
                        attrs: {
                            region: t.region,
                            "portal-id": t.portalId,
                            "form-id": t.formId
                        },
                        on: {
                            "form-ready": t.initST
                        }
                    }) : t._e()], 1)])])
                }), [], !1, null, null, null);
            e.default = o.exports;
            installComponents(o, {
                BaseForm: s(453).default
            })
        },
        465: function(t, e, s) {
            "use strict";
            s.r(e);
            var i = s(456),
                a = s.n(i),
                o = {
                    props: {
                        blocks: {
                            type: Array,
                            default: () => []
                        }
                    },
                    methods: {
                        ctas(t) {
                            return t ? t.map((t => this.$cta(t))) : null
                        },
                        getBlockComponent: t => `Blocks${a()(t)}`
                    }
                },
                l = s(12),
                r = Object(l.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "blocks"
                    }, t._l(t.blocks, (function(s, i) {
                        return e(t.getBlockComponent(s.typeHandle), t._g(t._b({
                            key: i,
                            tag: "component",
                            attrs: {
                                "data-block-root": ""
                            }
                        }, "component", {
                            index: i,
                            ...s
                        }, !1), t.$listeners))
                    })), 1)
                }), [], !1, null, null, null);
            e.default = r.exports
        },
        522: function(t, e, s) {
            t.exports = {}
        },
        574: function(t, e, s) {
            "use strict";
            s(522)
        },
        626: function(t, e, s) {
            t.exports = {}
        },
        683: function(t, e, s) {
            "use strict";
            s.r(e);
            var i = s(4),
                a = s(9),
                o = s(6),
                l = {
                    props: {
                        images: Array,
                        image: Object,
                        sublead: String
                    },
                    data: () => ({
                        mediaClipClass: "",
                        showModal: !1,
                        bounce: !1
                    }),
                    computed: { ...Object(a.d)("scroll", ["y"]),
                        ...Object(a.d)("layout", {
                            splashViewed: "splashViewed"
                        }),
                        ...Object(a.b)("layout", {
                            layoutWidth: "width",
                            layoutHeight: "height",
                            layoutDiagonal: "diag",
                            layoutVmax: "maxSize",
                            isHorizontal: "isHorizontal",
                            ratio: "ratio"
                        }),
                        clipClass() {
                            return this.layoutWidth > this.layoutHeight ? "-major-width" : "-major-height"
                        },
                        offsetScroll() {
                            return this.$el.offsetTop + this.$el.clientHeight
                        },
                        scale() {
                            return this.layoutWidth / (1.56 * this.layoutHeight) * (this.layoutDiagonal / this.layoutVmax)
                        }
                    },
                    destroyed() {
                        i.b.ticker.remove(this.playAnimation);
                        try {
                            var t;
                            null === (t = Object.keys(this._sts)) || void 0 === t || t.forEach((t => {
                                this._sts[t].kill(!1)
                            }))
                        } catch (t) {}
                    },
                    async mounted() {
                        this._numSeconds = 0, this._lastTime = (new Date).getTime(), this.mediaClipClass = this.clipClass, i.b.set(this.$el, {
                            "--scale": `${this.scale}`
                        }), this.$watch((() => this.$store.state.layout.width), (() => {
                            this.mediaClipClass = this.clipClass, i.b.set(this.$el, {
                                "--scale": `${this.scale}`
                            })
                        })), this._sts = {}, this._mainImg = Object(o.o)("[data-media-main]", this.$el), this._images = Object(o.p)("[data-media]", this.$el), this._leads = Object(o.p)("[data-hero-lead]", this.$el), this._sublead = Object(o.o)("[data-hero-sublead]", this.$el), this._buttons = Object(o.p)("[data-hero-button]", this.$el), this._masks = Object(o.p)("[data-hero-mask]", this.$el), i.b.set(this._leads, {
                            opacity: 0,
                            xPercent: (t, e) => t % 2 != 0 ? 125 : -125
                        }), i.b.set([this._sublead, this._buttons], {
                            yPercent: 100,
                            opacity: 0
                        }), i.b.set([this._mainImg, this._images], {
                            opacity: 0,
                            yPercent: 10
                        }), this.splashViewed ? this.$bus.$once("page:enter", (async () => {
                            await this.$nextTick(), this.startAnimation()
                        })) : this.$watch("splashViewed", (async (t, e) => {
                            await this.$nextTick(), t && this.startAnimation()
                        })), this.$bus.$once("page:after-enter", (async () => {
                            this.setLocked(!0)
                        }))
                    },
                    methods: { ...Object(a.c)("scroll", ["setLocked"]),
                        playAnimation(t) {
                            const e = (new Date).getTime();
                            e - this._lastTime >= 2e3 && (this._lastTime = e, this._numSeconds++, this.bounce = !this.bounce)
                        },
                        startAnimation() {
                            this.setLocked(!0), i.b.timeline({
                                defaults: {
                                    ease: "power3.out"
                                },
                                onComplete: () => {
                                    i.b.ticker.add(this.playAnimation), this.setLocked(!1), i.b.set([this._buttons, this._sublead], {
                                        clearProps: "opacity"
                                    }), this.$store.getters.saveDevice || this.startHeroParallax()
                                }
                            }).to([this._mainImg, this._images], {
                                opacity: 1,
                                yPercent: 0,
                                duration: 1,
                                stagger: .02
                            }).to(this._mainImg, {
                                scale: 1.43,
                                duration: 1.5
                            }, "start").to(this._images, {
                                scale: 3.5,
                                duration: 1.5,
                                stagger: .02
                            }, "start").to(this._mainImg, {
                                duration: 1.25,
                                ease: "power3.in",
                                clipPath: "polygon(0vw 0vh, 100vw 0vh, 100vw 100vh, 0vw 100vh)"
                            }, "start").to(this._leads, {
                                opacity: 1,
                                xPercent: 0,
                                duration: 1,
                                stagger: .25
                            }, "start+=0.5").to([this._sublead, this._buttons], {
                                yPercent: 0,
                                opacity: 1,
                                stagger: .05
                            }).set(this._images, {
                                opacity: 0
                            }).call((() => {
                                this.$bus.$emit("page-enter-complete")
                            }))
                        },
                        startHeroParallax() {
                            this._sts.heroParallax = this.$bus.$scrollTrigger.create({
                                id: "hero-parallax",
                                scrub: !0,
                                animation: i.b.timeline({
                                    defaults: {
                                        ease: "none"
                                    }
                                }).to(Object(o.o)("[data-main-img-wr]", this._mainImg), {
                                    yPercent: 35,
                                    scale: 1.3,
                                    opacity: 0
                                }),
                                trigger: this.$el,
                                start: () => "top top",
                                end: () => "+=100%"
                            })
                        }
                    }
                },
                r = (s(574), s(12)),
                n = Object(r.a)(l, (function() {
                    var t, e = this,
                        s = e._self._c;
                    return s("section", {
                        staticClass: "hp-hero",
                        attrs: {
                            "data-light": ""
                        }
                    }, [s("div", {
                        staticClass: "hp-hero__container"
                    }, [s("div", {
                        staticClass: "hp-hero__wrapper"
                    }, [s("div", {
                        staticClass: "media",
                        class: e.mediaClipClass,
                        attrs: {
                            "data-media-main": ""
                        }
                    }, [s("div", [s("div", {
                        staticClass: "mask"
                    }, [s("div", {
                        staticClass: "picture-wr",
                        attrs: {
                            "data-main-img-wr": ""
                        }
                    }, [s("div", {
                        staticClass: "base-picture"
                    }, [s("img", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.layoutWidth <= 768,
                            expression: "layoutWidth <= 768"
                        }],
                        attrs: {
                            src: e.$getSingle(e.image.mobile).src,
                            alt: "Primopiano - Kitchen by you"
                        }
                    }), e._v(" "), s("img", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.layoutWidth > 768,
                            expression: "layoutWidth > 768"
                        }],
                        attrs: {
                            src: e.$getSingle(e.image.desktop).src,
                            alt: "Primopiano - Kitchen by you"
                        }
                    })])])])])]), e._v(" "), e._l(e.images, (function(t, e) {
                        return s("div", {
                            key: `${t.id}-1`,
                            staticClass: "media",
                            attrs: {
                                "data-media": ""
                            }
                        }, [s("div", [s("div", {
                            staticClass: "mask"
                        }, [s("base-picture", {
                            staticClass: "hp-hero__img-support",
                            class: `-img-support-${e+1}`,
                            attrs: {
                                image: t,
                                "data-hero-image": e % 2 != 0 ? 1 : -1,
                                preload: "",
                                lazy: !1,
                                alt: `Hero intro animation image ${e+1}`
                            }
                        })], 1)])])
                    }))], 2)]), e._v(" "), s("div", {
                        staticClass: "hp-hero__content"
                    }, [e._m(0), e._v(" "), s("div", {
                        staticClass: "l-wrapper"
                    }, [s("h2", {
                        staticClass: "hp-hero__sublead",
                        attrs: {
                            "data-hero-sublead": ""
                        },
                        domProps: {
                            innerHTML: e._s(null !== (t = e.sublead) && void 0 !== t ? t : "&nbsp;")
                        }
                    }), e._v(" "), s("button", {
                        staticClass: "scroll-button",
                        class: {
                            "-scrolled": e.y > 50
                        },
                        attrs: {
                            "data-hero-button": "",
                            name: `${e.$t("actions.discover_more")}`,
                            "aria-label": `${e.$t("actions.discover_more")}`,
                            type: "button"
                        },
                        on: {
                            click: function(t) {
                                return e.$bus.$emit("scroll:scroll-to", e.$el, {
                                    offset: e.offsetScroll
                                })
                            }
                        }
                    }, [s("base-icon", {
                        staticClass: "scroll-button__icon-1",
                        class: {
                            "-bounce": e.bounce
                        },
                        attrs: {
                            name: "ArrowDownCta"
                        }
                    })], 1), e._v(" "), s("base-button-icon", {
                        staticClass: "hp-hero__modal-btn",
                        attrs: {
                            "data-hero-button": "",
                            label: `${e.$t("actions.request_date")}`,
                            mode: "primary",
                            outline: "",
                            icon: "Pencil",
                            color: "white"
                        },
                        on: {
                            click: function(t) {
                                e.showModal = !0
                            }
                        }
                    })], 1)]), e._v(" "), s("portal", {
                        attrs: {
                            to: "out-scroll"
                        }
                    }, [e.showModal ? s("base-modal", {
                        on: {
                            close: function(t) {
                                e.showModal = !1
                            }
                        },
                        scopedSlots: e._u([{
                            key: "content",
                            fn: function() {
                                return [s("blocks-form", {
                                    attrs: {
                                        subtitle: e.$t("actions.request_date"),
                                        lead: e.$t("others.design_your_kitchen"),
                                        sublead: e.$t("others.reserve_designer_appointment"),
                                        "form-id": e.$t("forms.id.contact_us")
                                    }
                                })]
                            },
                            proxy: !0
                        }], null, !1, 533469883)
                    }) : e._e()], 1)], 1)
                }), [function() {
                    var t = this,
                        e = t._self._c;
                    return e("h1", {
                        staticClass: "hp-hero__lead"
                    }, [e("span", {
                        attrs: {
                            "data-hero-lead": ""
                        }
                    }, [t._v("Kitchen")]), t._v(" "), e("span", {
                        attrs: {
                            "data-hero-lead": ""
                        }
                    }, [t._v("by you")])])
                }], !1, null, null, null);
            e.default = n.exports;
            installComponents(n, {
                BasePicture: s(71).default,
                BaseIcon: s(74).default,
                BaseButtonIcon: s(111).default,
                BlocksForm: s(462).default,
                BaseModal: s(254).default
            })
        },
        714: function(t, e, s) {
            "use strict";
            s(626)
        },
        783: function(t, e, s) {
            "use strict";
            s.r(e);
            var i = s(9),
                a = s(13),
                o = s(27);
            const l = a.a `
  query HOMEPAGE($site: [String], $handle: [String]) {
    page: entry(section: $handle, site: $site) {
      ${o.k}
    }

  }
`;
            var r = s(444),
                n = s(112),
                c = {
                    name: "Index",
                    mixins: [r.a, n.b],
                    jsonld() {
                        var t, e, s, i, a, o, l, r, n, c, d, u, h, p;
                        const g = null === (t = this.$store.state.globals) || void 0 === t ? void 0 : t.address,
                            m = null === (e = this.$store.state.globals) || void 0 === e ? void 0 : e.contacts,
                            f = this.$exists(null === (s = this.$store.state.globals) || void 0 === s ? void 0 : s.socials) ? this.$getSingle(null === (i = this.$store.state.globals) || void 0 === i ? void 0 : i.socials) : null,
                            b = [];
                        for (const t in f) b.push(f[t]);
                        return b.filter((t => t)), [{
                            "@context": "https://schema.org/",
                            "@type": "WebSite",
                            name: "Primopiano cucine",
                            url: `${this.$config.BASE_URL}${this.$route.path}`,
                            potentialAction: {
                                "@type": "SearchAction",
                                target: `${this.$config.BASE_URL}${this.$route.path}?s={search_term_string}`,
                                "query-input": "required name=search_term_string"
                            }
                        }, {
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            name: "Primopiano cucine",
                            logo: `${this.$config.BASE_URL}/logo.png`,
                            image: this.$exists(null === (a = this.page) || void 0 === a ? void 0 : a.heroCover) ? null === (o = this.$getSingle(null === (l = this.page) || void 0 === l ? void 0 : l.heroCover)) || void 0 === o ? void 0 : o.src : `${this.$config.BASE_URL}/logo.png`,
                            "@id": `${this.$config.BASE_URL}${this.$route.path}`,
                            url: this.$config.BASE_URL,
                            description: this.$store.state.seo.description,
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: `${null==g?void 0:g.street}, ${null==g?void 0:g.postalCode} ${null==g?void 0:g.city} - ${null==g||null===(r=g.district)||void 0===r?void 0:r.toUpperCase()}`,
                                addressLocality: `${null==g||null===(n=g.district)||void 0===n?void 0:n.toUpperCase()}`,
                                postalCode: `${null==g?void 0:g.postalCode}`,
                                addressCountry: "IT"
                            },
                            aggregateRating: {
                                "@type": "AggregateRating",
                                ratingValue: "4",
                                reviewCount: "250"
                            },
                            geo: {
                                "@type": "GeoCoordinates",
                                latitude: "45.484145636802815",
                                longitude: "11.901229884657562"
                            },
                            telephone: null == m ? void 0 : m.phone,
                            sameAs: b,
                            email: null == m ? void 0 : m.email
                        }, {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "Primopiano cucine",
                            logo: `${this.$config.BASE_URL}/logo.png`,
                            image: this.$exists(null === (c = this.page) || void 0 === c ? void 0 : c.heroCover) ? null === (d = this.$getSingle(null === (u = this.page) || void 0 === u ? void 0 : u.heroCover)) || void 0 === d ? void 0 : d.src : `${this.$config.BASE_URL}/logo.png`,
                            url: this.$config.BASE_URL,
                            description: this.$store.state.seo.description,
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: `${null==g?void 0:g.street}, ${null==g?void 0:g.postalCode} ${null==g?void 0:g.city} - ${null==g||null===(h=g.district)||void 0===h?void 0:h.toUpperCase()}`,
                                addressLocality: `${null==g||null===(p=g.district)||void 0===p?void 0:p.toUpperCase()}`,
                                postalCode: `${null==g?void 0:g.postalCode}`,
                                addressCountry: "IT"
                            },
                            telephone: null == m ? void 0 : m.phone,
                            sameAs: b,
                            email: null == m ? void 0 : m.email
                        }]
                    },
                    async asyncData(t) {
                        var e, s, i;
                        let {
                            app: a,
                            store: o,
                            i18n: r,
                            error: n
                        } = t;
                        if (o.commit("pages/setActivePageId", "homepage"), null === (e = o.state.pages) || void 0 === e || !e.homepage) try {
                            const {
                                page: t
                            } = await a.$query(l, {
                                handle: "homepage"
                            });
                            o.commit("pages/setPageData", {
                                id: "homepage",
                                data: t
                            })
                        } catch (t) {
                            n(t)
                        }
                        const c = null === (s = o.state.pages) || void 0 === s ? void 0 : s.homepage;
                        return await o.dispatch("i18n/setRouteParams", null == c || null === (i = c.localized) || void 0 === i ? void 0 : i.reduce(((t, e) => (r.localeCodes.includes(e.site) && (t[e.site] = {
                            slug: e.slug
                        }), t)), {})), {}
                    },
                    computed: { ...Object(i.d)("pages", {
                            page: "homepage"
                        })
                    },
                    methods: {}
                },
                d = (s(714), s(12)),
                u = Object(d.a)(c, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("page-wrapper", [e("div", {
                        staticClass: "page-index"
                    }, [t.page ? e("hp-hero", {
                        attrs: {
                            image: {
                                desktop: t.page.heroCover,
                                mobile: t.page.heroCoverMobile
                            },
                            sublead: t.page.heroSublead,
                            images: t.page.heroImages
                        }
                    }) : t._e(), t._v(" "), e("blocks-loader", {
                        attrs: {
                            blocks: t.page && t.page.blocks
                        }
                    })], 1)])
                }), [], !1, null, null, null);
            e.default = u.exports;
            installComponents(u, {
                HpHero: s(683).default,
                BlocksLoader: s(465).default,
                PageWrapper: s(442).default
            })
        }
    }
]);