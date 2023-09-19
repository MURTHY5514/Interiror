(window.webpackJsonp = window.webpackJsonp || []).push([
    [130, 65, 86], {
        437: function(t, e, i) {
            t.exports = {}
        },
        438: function(t, e, i) {
            t.exports = {}
        },
        440: function(t, e, i) {
            "use strict";
            i(437)
        },
        442: function(t, e, i) {
            "use strict";
            i.r(e);
            var s = i(9),
                a = {
                    props: {
                        setup: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    computed: { ...Object(s.b)("pages", ["activePage"]),
                        ...Object(s.d)("kitchens", ["cover"]),
                        ...Object(s.d)("pages", ["activePageId"]),
                        showBreadcrumbs() {
                            return !["homepage"].includes(this.activePageId)
                        }
                    },
                    async created() {}
                },
                n = (i(445), i(12)),
                r = Object(n.a)(a, (function() {
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
            e.default = r.exports;
            installComponents(r, {
                Breadcrumbs: i(443).default,
                TheFooter: i(447).default
            })
        },
        443: function(t, e, i) {
            "use strict";
            i.r(e);
            var s = i(9),
                a = {
                    computed: { ...Object(s.d)("layout", {
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
                n = (i(440), i(12)),
                r = Object(n.a)(a, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "the-breadcrumbs-wr"
                    }, [e("ul", {
                        class: ["the-breadcrumbs", `-theme-${t.tone}`],
                        attrs: {
                            "data-breadcrumbs": ""
                        }
                    }, t._l(t.breadcrumbs, (function(i, s) {
                        return e("li", {
                            key: s
                        }, [s < t.breadcrumbs.length - 1 ? e("nuxt-link", {
                            attrs: {
                                to: t.localePath(i),
                                title: i.label,
                                "aria-label": i.label
                            }
                        }, [t._v("\n        " + t._s(i.label) + "\n      ")]) : e("span", [t._v("\n        " + t._s(i.label) + "\n      ")])], 1)
                    })), 0)])
                }), [], !1, null, null, null);
            e.default = r.exports
        },
        444: function(t, e, i) {
            "use strict";
            (function(t) {
                e.a = {
                    head() {
                        var e, i, s, a, n, r, l, o;
                        const c = this.$store.state.seo,
                            u = { ...c,
                                suffix: (null === (e = this.page) || void 0 === e ? void 0 : e.metaSuffix) || c.suffix || this.$config.SITE_TITLE,
                                title: (null === (i = this.page) || void 0 === i ? void 0 : i.metaTitle) || (null === (s = this.page) || void 0 === s ? void 0 : s.title) || c.title || this.$config.SITE_TITLE,
                                description: (null === (a = this.page) || void 0 === a ? void 0 : a.metaDescription) || (null === (n = this.page) || void 0 === n ? void 0 : n.abstract) || c.description || this.$config.SITE_DESCRIPTION,
                                image: (null === (r = this.$getSingle((null === (l = this.page) || void 0 === l ? void 0 : l.metaOgImage) || (null === (o = this.page) || void 0 === o ? void 0 : o.image))) || void 0 === r ? void 0 : r.src) || c.image
                            },
                            h = this.$nuxtI18nHead({
                                addSeoAttributes: !0
                            });
                        let d = [...h.link.filter((t => "canonical" === t.rel || "x-default" === t.hreflang || t.hreflang && t.hreflang.includes("-")))];
                        return d.filter((t => t.hreflang && "x-default" !== t.hreflang)).map((t => t.hreflang.split("-")[0])).includes(this.$i18n.defaultLocale) || (d = d.map((t => ({ ...t,
                            ..."x-default" === t.hreflang ? {
                                href: `${this.$config.BASE_URL}${this.$route.fullPath}`
                            } : {}
                        })))), {
                            htmlAttrs: { ...h.htmlAttrs
                            },
                            titleTemplate: `%s | ${u.suffix||c.suffix}`,
                            title: u.title || c.title,
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: u.description
                            }, {
                                hid: "og:title",
                                property: "og:title",
                                content: `${u.title} | ${u.suffix}` || c.title
                            }, {
                                hid: "og:description",
                                property: "og:description",
                                content: u.description
                            }, {
                                hid: "og:image",
                                property: "og:image",
                                content: u.image
                            }, {
                                hid: "og:url",
                                property: "og:url",
                                content: t.env.BASE_URL + this.$route.fullPath
                            }, ...h.meta],
                            link: d
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
            }).call(this, i(86))
        },
        445: function(t, e, i) {
            "use strict";
            i(438)
        },
        582: function(t, e, i) {
            "use strict";
            i(583), i(584), i(585), i(587), i(588), i(589), i(590), i(591), i(592), i(593), i(594), i(595), i(596), i(597), i(598), i(599);
            var s = i(9),
                a = i(62);
            e.a = {
                async asyncData(t) {
                    var e, i, s;
                    let {
                        app: n,
                        store: r,
                        i18n: l,
                        route: o,
                        error: c
                    } = t;
                    if (r.commit("pages/setActivePageId", "kitchensIndex"), null === (e = r.state.pages) || void 0 === e || !e.kitchensIndex) try {
                        var u;
                        const {
                            kitchensIndex: t
                        } = await n.$query(a.c, {
                            handle: "kitchensIndex"
                        });
                        if (r.commit("pages/setPageData", {
                                id: "kitchensIndex",
                                data: t
                            }), !n.$exists(null === (u = r.state) || void 0 === u ? void 0 : u.kitchens.kitchens)) {
                            const {
                                kitchens: t
                            } = await n.$query(a.a, {
                                handle: "kitchens"
                            });
                            r.commit("kitchens/setKitchens", t)
                        }
                    } catch (t) {
                        c(t), c(t)
                    }
                    r.commit("breadcrumbs/setCrumbs", [{
                        label: l.t("routes.kitchens"),
                        name: "kitchens",
                        path: n.localePath({
                            name: "kitchens"
                        })
                    }]);
                    const h = null === (i = r.state.pages) || void 0 === i ? void 0 : i.kitchensIndex,
                        d = r.getters["kitchens/typologies"];
                    return !h || o.params.category && !d.some((t => t.slug === o.params.category)) ? c({
                        statusCode: 404,
                        message: "err message"
                    }) : (await r.dispatch("i18n/setRouteParams", null == h || null === (s = h.localized) || void 0 === s ? void 0 : s.reduce(((t, e) => (l.localeCodes.includes(e.site) && (t[e.site] = {
                        slug: e.slug
                    }), t)), {})), {})
                },
                computed: { ...Object(s.d)("pages", {
                        page: "kitchensIndex"
                    }),
                    ...Object(s.d)("kitchens", ["activeFilters", "cover"]),
                    ...Object(s.b)("kitchens", ["kitchens", "filteredKitchens", "categories"]),
                    filteredCategories() {
                        const t = [];
                        return this.kitchens.map((e => (e.style.map((e => (t.push(e.id), e))), e.typologies.map((e => (t.push(e.id), e))), e))), this.categories.map((e => ({ ...e,
                            options: e.options.filter((e => [...new Set(t)].includes(e.id)))
                        })))
                    }
                },
                beforeDestroy() {
                    const t = this.$delocalize(this.$store.state.navigation.route.next);
                    "kitchens" !== t && "kitchens-category" !== t && this.$store.commit("kitchens/setCover", null)
                },
                mounted() {
                    this.$store.state.layout.splashViewed ? this.cover || this.$bus.$once("page:enter", (async () => {
                        this.$store.commit("kitchens/setCover", this.$exists(this.page.thumbnail) ? this.$getSingle(this.page.thumbnail) : null)
                    })) : this.$store.commit("kitchens/setCover", this.$exists(this.page.thumbnail) ? this.$getSingle(this.page.thumbnail) : null)
                }
            }
        },
        635: function(t, e, i) {
            t.exports = {}
        },
        732: function(t, e, i) {
            "use strict";
            i(635)
        },
        793: function(t, e, i) {
            "use strict";
            i.r(e);
            var s = i(444),
                a = i(582),
                n = i(112),
                r = {
                    name: "Kitchens",
                    mixins: [s.a, n.b, a.a]
                },
                l = (i(732), i(12)),
                o = Object(l.a)(r, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("page-wrapper", [e("div", {
                        staticClass: "kitchens-index"
                    }, [e("kitchens-hero", {
                        attrs: {
                            title: t.page.title,
                            description: t.page.lead,
                            filters: t.filteredCategories
                        }
                    }), t._v(" "), e("blocks-kitchens-listing", {
                        attrs: {
                            items: t.filteredKitchens
                        }
                    })], 1)])
                }), [], !1, null, null, null);
            e.default = o.exports;
            installComponents(o, {
                KitchensHero: i(256).default,
                BlocksKitchensListing: i(624).default,
                PageWrapper: i(442).default
            })
        }
    }
]);