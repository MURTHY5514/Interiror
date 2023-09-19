(window.webpackJsonp = window.webpackJsonp || []).push([
    [0, 11, 12, 16, 20, 84, 88, 93], {
        439: function(t, e, s) {
            "use strict";
            s.d(e, "c", (function() {
                return i
            })), s.d(e, "a", (function() {
                return n
            })), s.d(e, "b", (function() {
                return r
            }));
            var a = s(4),
                o = s(6);
            const i = function(t) {
                    let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "[data-text]";
                    const i = Object(o.p)(s, t);
                    a.a.set(i, {
                        transformStyle: "preserve-3d",
                        willChange: "opacity, transform",
                        backfaceVisibility: "hidden",
                        opacity: 0,
                        ...e ? {
                            yPercent: 15
                        } : {},
                        ...e ? {} : {
                            xPercent: 5
                        },
                        transformOrigin: "0% 50% -50"
                    })
                },
                n = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1.3,
                        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "[data-text]";
                    const a = Object(o.p)(s, t);
                    return r(a, e)
                },
                r = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1.3;
                    return a.a.timeline({
                        defaults: {
                            duration: e,
                            ease: "power2.out"
                        },
                        onComplete: () => a.a.set(t, {
                            clearProps: "transform,opacity"
                        })
                    }).to(t, {
                        y: 0,
                        xPercent: 0,
                        yPercent: 0,
                        rotation: 0,
                        rotate: 5,
                        skewX: 0,
                        opacity: 1,
                        duration: e,
                        stagger: .2,
                        ease: "power3.out"
                    })
                }
        },
        441: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return a
            }));
            let a = function() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
                return crypto.getRandomValues(new Uint8Array(t)).reduce(((t, e) => t += (e &= 63) < 36 ? e.toString(36) : e < 62 ? (e - 26).toString(36).toUpperCase() : e > 62 ? "-" : "_"), "")
            }
        },
        447: function(t, e, s) {
            "use strict";
            s.r(e);
            var a = s(4),
                o = s(9),
                i = s(439),
                n = s(6),
                r = {
                    data: () => ({
                        showModal: !1,
                        mouseover: !1
                    }),
                    computed: { ...Object(o.b)("globals", ["socialNetworks"]),
                        ...Object(o.d)("globals", ["name", "vat", "labels", "showrooms"]),
                        ...Object(o.d)("navigation", ["subNav"]),
                        subNavLinks() {
                            return this.subNav.filter((t => !this.$route.name.includes("news") || "news" !== t.id))
                        },
                        lead() {
                            var t;
                            return (null === (t = this.labels) || void 0 === t ? void 0 : t.footerLabel) || null
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
                        this._sts = {}, this.$bus.$once("page:after-enter", (async () => {
                            await Object(n.f)();
                            const t = Object(n.p)("[data-stagger]", this.$el);
                            this.$exists(t) && this.$refs.lead && (a.b.set(t, {
                                opacity: 0,
                                yPercent: 25
                            }), this._sts["enter-staggers"] = this.$bus.$scrollTrigger.create({
                                id: "enter-staggers",
                                animation: Object(i.b)(t),
                                trigger: this.$refs.lead,
                                start: () => "top center+=25%",
                                end: "+=100%",
                                once: !0
                            }))
                        }))
                    }
                },
                l = (s(715), s(12)),
                c = Object(l.a)(r, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("footer", {
                        staticClass: "the-footer",
                        attrs: {
                            "data-dark": ""
                        }
                    }, [e("div", {
                        staticClass: "l-container"
                    }, [e("div", {
                        staticClass: "the-footer__contact-us"
                    }, [t.lead ? e("p", {
                        ref: "lead",
                        staticClass: "the-footer__lead"
                    }, [e("span", {
                        attrs: {
                            "data-stagger": ""
                        }
                    }, [t._v(t._s(t.lead))])]) : t._e(), t._v(" "), e("base-button", {
                        attrs: {
                            "data-stagger": "",
                            color: "black",
                            mode: "secondary",
                            outline: "",
                            label: t.$t("actions.contact_us"),
                            icon: "Pencil"
                        },
                        on: {
                            click: function(e) {
                                t.showModal = !0
                            }
                        }
                    }, [t._v("\n        " + t._s(t.$t("actions.contact_us")) + "\n      ")])], 1), t._v(" "), e("div", {
                        staticClass: "the-footer__showrooms"
                    }, [t.$exists(t.showrooms) ? e("ul", t._l(t.showrooms, (function(t, s) {
                        return e("li", {
                            key: s
                        }, [e("showroom-data", {
                            attrs: {
                                data: t
                            }
                        })], 1)
                    })), 0) : t._e()]), t._v(" "), e("div", {
                        staticClass: "the-footer__links"
                    }, [e("nav", {
                        staticClass: "the-footer__nav"
                    }, [e("ul", t._l(t.subNavLinks, (function(s, a) {
                        return e("li", {
                            key: a
                        }, [e("nuxt-link", {
                            staticClass: "the-footer__link",
                            attrs: {
                                to: t.localePath(s.route),
                                "aria-label": s.label
                            }
                        }, [e("span", [t._v(" " + t._s(s.label))])])], 1)
                    })), 0)]), t._v(" "), e("div", {
                        staticClass: "the-footer__socials"
                    }, [e("ul", [e("li", {
                        staticClass: "the-footer__archiproducts"
                    }, [e("a", {
                        attrs: {
                            href: "https://www.archiproducts.com/primopiano-cucine",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [e("base-icon", {
                        attrs: {
                            name: "Archiproducts"
                        }
                    })], 1)]), t._v(" "), t._l(t.socialNetworks, (function(t) {
                        return e("li", {
                            key: t.name
                        }, [e("a", {
                            attrs: {
                                href: t.link,
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }
                        }, [e("base-icon", {
                            attrs: {
                                name: t.icon
                            }
                        })], 1)])
                    }))], 2)])]), t._v(" "), e("div", {
                        staticClass: "the-footer__bottom"
                    }, [e("div", {
                        staticClass: "the-footer__copyright"
                    }, [e("span", {
                        staticClass: "footer__company-data"
                    }, [e("span", [t._v(t._s((new Date).getFullYear()))]), t._v(" "), e("span", [t._v("©\n            "), t.name ? e("span", [t._v(t._s(t.name))]) : t._e(), t._v(" "), t.vat ? e("span", [t._v("-")]) : t._e(), t._v(" "), t.vat ? e("span", {
                        staticClass: "the-footer__vat"
                    }, [t._v("P.IVA " + t._s(t.vat))]) : t._e()])])]), t._v(" "), e("div", {
                        staticClass: "the-footer__locales"
                    }, [e("locale-switcher")], 1), t._v(" "), e("div", {
                        staticClass: "the-footer__boldedbywego"
                    }, [e("a", {
                        attrs: {
                            href: "https://www.we-go.it",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [e("base-icon", {
                        attrs: {
                            name: "BoldedByWego"
                        }
                    })], 1)])])]), t._v(" "), e("div", {
                        staticClass: "the-footer__back-to-top",
                        on: {
                            mouseenter: function(e) {
                                t.mouseover = !0
                            },
                            mouseleave: function(e) {
                                t.mouseover = !1
                            }
                        }
                    }, [e("base-back-to-top", {
                        attrs: {
                            hover: t.mouseover
                        }
                    })], 1), t._v(" "), e("portal", {
                        attrs: {
                            to: "out-scroll"
                        }
                    }, [t.showModal ? e("base-modal", {
                        staticClass: "value__modal",
                        on: {
                            close: function(e) {
                                t.showModal = !1
                            }
                        },
                        scopedSlots: t._u([{
                            key: "content",
                            fn: function() {
                                return [e("base-form", {
                                    attrs: {
                                        "form-id": t.$t("forms.id.contact_us")
                                    }
                                })]
                            },
                            proxy: !0
                        }], null, !1, 805638165)
                    }) : t._e()], 1)], 1)
                }), [], !1, null, null, null);
            e.default = c.exports;
            installComponents(c, {
                BaseButton: s(72).default,
                ShowroomData: s(684).default,
                BaseIcon: s(74).default,
                LocaleSwitcher: s(260).default,
                BaseBackToTop: s(685).default,
                BaseForm: s(453).default,
                BaseModal: s(254).default
            })
        },
        453: function(t, e, s) {
            "use strict";
            s.r(e);
            var a = s(4),
                o = s(6),
                i = {
                    props: {
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
                        id: null,
                        loading: !1,
                        ready: !1
                    }),
                    async mounted() {
                        await this.$nextTick(), await new Promise((t => setTimeout(t, 1e3))), this.id = `form-${Date.now()}`
                    },
                    methods: {
                        async afterEnter(t, e) {
                            await Object(o.f)(), a.b.from(this.$refs["form-wrapper"], {
                                opacity: 0
                            }), this.setupForm(t)
                        },
                        setupForm(t) {
                            var e, s, a;
                            const i = this;
                            null === (e = window) || void 0 === e || null === (s = e.hbspt) || void 0 === s || null === (a = s.forms) || void 0 === a || a.create({
                                portalId: this.portalId,
                                formId: this.formId,
                                target: `#${this.id}`,
                                locale: this.$i18n.locale,
                                translations: {
                                    it: {
                                        fieldLabels: {
                                            firstname: this.$t("forms.labels.firstname"),
                                            lastname: this.$t("forms.labels.lastname"),
                                            email: this.$t("forms.labels.email"),
                                            phone: this.$t("forms.labels.phone"),
                                            sede_dell_appuntamento: this.$t("forms.labels.sede_dell_appuntamento"),
                                            message: this.$t("forms.labels.message"),
                                            provincia: this.$t("forms.labels.province"),
                                            "LEGAL_CONSENT.subscription_type_11450919": this.$t("forms.labels.privacyForm"),
                                            file_caricato: this.$t("forms.labels.upload_file")
                                        },
                                        submitText: this.$t("actions.submit")
                                    },
                                    en: {
                                        fieldLabels: {
                                            firstname: this.$t("forms.labels.firstname"),
                                            lastname: this.$t("forms.labels.lastname"),
                                            email: this.$t("forms.labels.email"),
                                            phone: this.$t("forms.labels.phone"),
                                            sede_dell_appuntamento: this.$t("forms.labels.sede_dell_appuntamento"),
                                            message: this.$t("forms.labels.message"),
                                            provincia: this.$t("forms.labels.province"),
                                            "LEGAL_CONSENT.subscription_type_11450919": this.$t("forms.labels.privacyForm"),
                                            file_caricato: this.$t("forms.labels.upload_file")
                                        },
                                        submitText: this.$t("actions.submit")
                                    },
                                    ko: {
                                        fieldLabels: {
                                            firstname: this.$t("forms.labels.firstname"),
                                            lastname: this.$t("forms.labels.lastname"),
                                            email: this.$t("forms.labels.email"),
                                            phone: this.$t("forms.labels.phone"),
                                            sede_dell_appuntamento: this.$t("forms.labels.sede_dell_appuntamento"),
                                            message: this.$t("forms.labels.message"),
                                            provincia: this.$t("forms.labels.province"),
                                            "LEGAL_CONSENT.subscription_type_11450919": this.$t("forms.labels.privacyForm"),
                                            file_caricato: this.$t("forms.labels.upload_file")
                                        },
                                        submitText: this.$t("actions.submit")
                                    }
                                },
                                onFormReady: async () => {
                                    this.$emit("form-ready");
                                    const e = Object(o.p)("textarea", t);
                                    if (this.$exists(e))
                                        for (let t = 0; t < e.length; t++) e[t].setAttribute("data-lenis-prevent", "true");
                                    this.ready = !0, this.$bus.$emit("cursor:refresh")
                                },
                                onFormSubmit: () => {
                                    this.getFormHeight(), this.loading = !0
                                },
                                onFormSubmitted: async function(t, e) {
                                    i.setFormHeight(), i.$bus.$emit("scrolltrigger:refresh"), i.$bus.$emit("scroll:scroll-to", i.$el, {
                                        duration: .3,
                                        offset: -100
                                    }), await new Promise((t => setTimeout(t, 500))), i.loading = !1, i.$emit("form-submitted")
                                }
                            })
                        },
                        getFormHeight() {
                            this._formHeight = this.$el.getBoundingClientRect().height
                        },
                        setFormHeight() {
                            a.b.set(this.$el, {
                                "--form-height": `${this._formHeight}px`
                            })
                        },
                        replacePlaceholder() {
                            return new Promise((t => {
                                const e = Object(o.o)(".hs_firstname", this.$el),
                                    s = Object(o.o)("input", e);
                                s && (s.placeholder = this.$t("forms.placeholders.firstname"));
                                const a = Object(o.o)(".hs_lastname", this.$el),
                                    i = Object(o.o)("input", a);
                                i && (i.placeholder = this.$t("forms.placeholders.lastname"));
                                const n = Object(o.o)(".hs_phone", this.$el),
                                    r = Object(o.o)("input", n);
                                r && (r.placeholder = this.$t("forms.placeholders.phone"));
                                const l = Object(o.o)(".hs_message", this.$el),
                                    c = Object(o.o)("input", l);
                                c && (c.placeholder = this.$t("forms.placeholders.message"));
                                const d = Object(o.o)(".hs_email", this.$el),
                                    u = Object(o.o)("input", d);
                                u && (u.placeholder = this.$t("forms.placeholders.email")), t()
                            }))
                        }
                    }
                },
                n = (s(480), s(12)),
                r = Object(n.a)(i, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "base-form"
                    }, [e("transition", {
                        attrs: {
                            name: "simple-fade",
                            mode: ""
                        }
                    }, [t.ready ? t._e() : e("div", {
                        staticClass: "loader-container"
                    }, [e("loader")], 1)]), t._v(" "), e("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.ready,
                            expression: "ready"
                        }]
                    }, [e("transition", {
                        on: {
                            "after-enter": t.afterEnter
                        }
                    }, [t.id ? e("div", {
                        ref: "form-wrapper",
                        staticClass: "base-form__wrapper",
                        attrs: {
                            id: t.id
                        }
                    }) : t._e()]), t._v(" "), e("transition", {
                        attrs: {
                            name: "simple-fade",
                            mode: ""
                        }
                    }, [t.loading ? e("div", {
                        staticClass: "loader-container -loading"
                    }, [e("loader")], 1) : t._e()])], 1)])], 1)
                }), [], !1, null, null, null);
            e.default = r.exports;
            installComponents(r, {
                Loader: s(476).default
            })
        },
        455: function(t, e, s) {
            t.exports = {}
        },
        458: function(t, e, s) {
            t.exports = {}
        },
        476: function(t, e, s) {
            "use strict";
            s.r(e);
            s(477);
            var a = s(12),
                o = Object(a.a)({}, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("transition", {
                        attrs: {
                            name: "simple-fade"
                        }
                    }, [e("div", {
                        staticClass: "loader"
                    }, [e("div", {
                        staticClass: "loader__container"
                    }, [e("span", {
                        staticClass: "loader__circle"
                    }), t._v(" "), e("span", {
                        staticClass: "loader__circle"
                    }), t._v(" "), e("span", {
                        staticClass: "loader__circle"
                    }), t._v(" "), e("span", {
                        staticClass: "loader__circle"
                    })])])])
                }), [], !1, null, null, null);
            e.default = o.exports
        },
        477: function(t, e, s) {
            "use strict";
            s(455)
        },
        480: function(t, e, s) {
            "use strict";
            s(458)
        },
        491: function(t, e, s) {
            t.exports = {}
        },
        492: function(t, e, s) {
            t.exports = {}
        },
        516: function(t, e, s) {
            "use strict";
            s.r(e);
            var a = s(441),
                o = s(4),
                i = s(6);
            var n = {
                    props: {
                        disabled: Boolean,
                        fixed: Boolean,
                        group: String,
                        headless: {
                            type: Boolean,
                            default: !1
                        },
                        headIcon: {
                            type: String
                        },
                        open: {
                            type: Boolean,
                            default: !1
                        },
                        id: {
                            type: String,
                            default: () => Object(a.a)()
                        }
                    },
                    data() {
                        return {
                            isOpen: this.open || this.fixed,
                            isAnimating: !1,
                            groupOpen: this.group && this.open
                        }
                    },
                    computed: {
                        headerLabel() {
                            return this.isOpen ? "Close" : "Open"
                        }
                    },
                    watch: {
                        async isOpen(t) {
                            var e;
                            await this.$nextTick(), t ? await (e = this.$refs.content, new Promise((t => {
                                const s = Object(i.o)("[data-content-wrapper]", e);
                                o.a.isTweening(e) || o.a.set(s, {
                                    y: 15,
                                    opacity: 0
                                }, "start"), o.a.killTweensOf([e, s]), o.a.timeline({
                                    onComplete: t,
                                    defaults: {
                                        ease: "power3.out",
                                        duration: i.r.default
                                    }
                                }).set(e, {
                                    display: "block",
                                    overflow: "hidden"
                                }).addLabel("start").to(e, {
                                    height: "auto"
                                }, "start").add((() => {
                                    e.classList.remove("-is-hidden")
                                }), "start").to(s, {
                                    y: 0,
                                    opacity: 1
                                }, "start").set([e, s], {
                                    clearProps: "height,transform,opacity,overflow,visibility"
                                })
                            }))) : await
                            function(t) {
                                return new Promise((e => {
                                    const s = Object(i.o)("[data-content-wrapper]", t);
                                    o.a.killTweensOf([t, s]), o.a.timeline({
                                        onComplete: e,
                                        defaults: {
                                            ease: "power3.out",
                                            duration: i.r.default
                                        }
                                    }).set(t, {
                                        overflow: "hidden"
                                    }).addLabel("start").to(s, {
                                        y: 15,
                                        opacity: 0
                                    }, "start").to(t, {
                                        height: 0
                                    }, "start").set(t, {
                                        visibility: "hidden"
                                    }).add((() => {
                                        o.a.isTweening(t) || t.classList.add("-is-hidden")
                                    })).set([t, s], {
                                        clearProps: "height,transform,opacity,overflow,visibility"
                                    }).set(t, {
                                        display: "none"
                                    })
                                }))
                            }(this.$refs.content)
                        }
                    },
                    created() {
                        this.$watch("fixed", (t => {
                            this.isOpen = t
                        })), this.headless && this.$watch("open", (t => {
                            this.isOpen = t
                        })), this.group && (this.$bus.$on(`group-${this.group}-open`, (t => {
                            this.id !== t && (this.isOpen = !1, this.groupOpen = !0)
                        })), this.$bus.$on(`group-${this.group}-close`, (t => {
                            this.id !== t && (this.isOpen = !1, this.groupOpen = !1)
                        })))
                    },
                    mounted() {
                        this.isOpen && this.$refs.content.classList.remove("-is-hidden")
                    },
                    methods: {
                        async changeStatus() {
                            this.disabled || this.isAnimating || this.fixed || (this.isOpen = !this.isOpen, this.group && (this.groupOpen = this.isOpen, this.isOpen ? this.$bus.$emit(`group-${this.group}-open`, this.id) : this.$bus.$emit(`group-${this.group}-close`, this.id)), await this.$nextTick())
                        }
                    }
                },
                r = (s(525), s(12)),
                l = Object(r.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        class: ["accordion", {
                            "-disabled": t.disabled
                        }, {
                            "-fixed": t.fixed
                        }, {
                            "-is-open": t.isOpen
                        }, {
                            "-other-in-group-open": t.groupOpen && !t.isOpen
                        }],
                        attrs: {
                            "aria-disabled": t.disabled
                        }
                    }, [e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.headless,
                            expression: "!headless"
                        }],
                        staticClass: "accordion__head",
                        attrs: {
                            "aria-controls": `${t.id}-content`,
                            "aria-expanded": String(t.isOpen)
                        },
                        on: {
                            click: t.changeStatus
                        }
                    }, [t._t("head", (function() {
                        return [t.headIcon ? e("base-icon", {
                            staticClass: "accordion__icon",
                            attrs: {
                                name: t.headIcon
                            }
                        }) : t._e(), t._v(" "), t._t("title", null, {
                            isOpen: t.isOpen
                        })]
                    }), {
                        open: t.isOpen
                    })], 2), t._v(" "), e("section", {
                        ref: "content",
                        staticClass: "accordion__content -is-hidden",
                        attrs: {
                            "aria-labelledby": `${t.id}-label`,
                            "aria-hidden": !t.isOpen
                        }
                    }, [e("div", {
                        staticClass: "accordion__content-wr",
                        attrs: {
                            "data-content-wrapper": ""
                        }
                    }, [t._t("content", null, null, {
                        open: t.isOpen
                    })], 2)])])
                }), [], !1, null, null, null);
            e.default = l.exports;
            installComponents(l, {
                BaseIcon: s(74).default
            })
        },
        523: function(t, e, s) {
            t.exports = {}
        },
        524: function(t, e, s) {
            "use strict";
            s(491)
        },
        525: function(t, e, s) {
            "use strict";
            s(492)
        },
        526: function(t, e, s) {
            t.exports = {}
        },
        564: function(t, e, s) {
            "use strict";
            s.r(e);
            var a = s(9),
                o = {
                    props: {
                        hours: Array,
                        horizontal: Boolean
                    },
                    computed: { ...Object(a.b)("layout", ["mobile"])
                    },
                    methods: {
                        setHour(t) {
                            const e = new Date(t);
                            return e.toLocaleTimeString().substring(0, e.toLocaleTimeString().length - 3)
                        }
                    }
                },
                i = (s(524), s(12)),
                n = Object(i.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "base-hours"
                    }, [e("table", [e("tbody", t._l(t.hours, (function(s, a) {
                        let {
                            day: o,
                            time: i,
                            note: n
                        } = s;
                        return e("tr", {
                            key: a
                        }, [e("td", [e("table", [e("tbody", [e("tr", [e("th", {
                            attrs: {
                                colspan: "2"
                            }
                        }, [e("div", [t._v(t._s(o) + " "), n && i ? e("span", [t._v("(" + t._s(n) + ")")]) : t._e()])])]), t._v(" "), i ? e("tr", t._l(i, (function(s, a) {
                            let {
                                opening: o,
                                closing: i
                            } = s;
                            return e("td", {
                                key: a,
                                staticClass: "base-hours__hours"
                            }, [t._v("\n                  " + t._s(t.setHour(o)) + " - " + t._s(t.setHour(i)) + "\n                ")])
                        })), 0) : e("tr", [e("td", {
                            staticClass: "base-hours__closed"
                        }, [t._v("\n                  " + t._s(t.$t("others.closed")) + "\n                ")]), t._v(" "), e("td", [t._v(" ")])])])])])])
                    })), 0)])])
                }), [], !1, null, null, null);
            e.default = n.exports
        },
        575: function(t, e, s) {
            "use strict";
            s(523)
        },
        576: function(t, e, s) {
            "use strict";
            s(526)
        },
        627: function(t, e, s) {
            t.exports = {}
        },
        684: function(t, e, s) {
            "use strict";
            s.r(e);
            var a = s(9),
                o = {
                    props: {
                        data: Object
                    },
                    data: () => ({
                        isOpen: !1
                    }),
                    computed: { ...Object(a.b)("layout", ["mobile"])
                    },
                    methods: {
                        setHour(t) {
                            const e = new Date(t);
                            return e.toLocaleTimeString().substring(0, e.toLocaleTimeString().length - 3)
                        }
                    }
                },
                i = (s(575), s(12)),
                n = Object(i.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        class: ["block-showroom", {
                            "-is-open": t.isOpen
                        }]
                    }, [e("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.data.title && t.mobile,
                            expression: "data.title && mobile"
                        }],
                        staticClass: "block-showroom__title",
                        attrs: {
                            tabindex: "0",
                            "aria-label": `${t.$t("actions.discover_more")} ${t.data.title||null}`,
                            name: `${t.$t("actions.discover_more")} ${t.data.title||null}`
                        },
                        on: {
                            click: function(e) {
                                t.isOpen = !t.isOpen
                            }
                        }
                    }, [e("span", [t._v(t._s(t.data.title))]), t._v(" "), e("base-icon", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.mobile,
                            expression: "mobile"
                        }],
                        attrs: {
                            name: t.isOpen ? "GoldLess" : "GoldCross"
                        }
                    })], 1), t._v(" "), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.data.title && !t.mobile,
                            expression: "data.title && !mobile"
                        }],
                        staticClass: "block-showroom__title"
                    }, [t._v("\n    " + t._s(t.data.title) + "\n  ")]), t._v(" "), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOpen || !t.mobile,
                            expression: "isOpen || !mobile"
                        }],
                        staticClass: "block-showroom__content"
                    }, [e("address", [t.data.street ? e("span", [t._v(t._s(t.data.street))]) : t._e(), t._v(" "), e("span", [t.data.postalCode ? e("span", [t._v(t._s(t.data.postalCode))]) : t._e(), t._v(" "), t.data.city ? e("span", [t._v(t._s(t.data.city))]) : t._e(), t._v(" "), t.data.district ? e("span", [t._v("(" + t._s(t.data.district.toUpperCase()) + ")")]) : t._e()]), t._v(" "), e("span", [e("strong", [t._v("T")]), t._v(" "), t.data.phone ? e("a", {
                        attrs: {
                            href: `tel:${t.data.phone}`
                        }
                    }, [t._v(t._s(t.data.phone))]) : t._e()])]), t._v(" "), t.$exists(t.data.openingHours) ? e("accordion", {
                        attrs: {
                            open: t.isOpen,
                            headless: t.mobile
                        },
                        scopedSlots: t._u([{
                            key: "title",
                            fn: function(s) {
                                let {
                                    isOpen: a
                                } = s;
                                return [e("base-icon", {
                                    staticClass: "accordion__icon",
                                    attrs: {
                                        name: a ? "GoldLess" : "GoldCross"
                                    }
                                }), t._v("\n        " + t._s(t.$t("contacts.opening_hours")) + "\n      ")]
                            }
                        }, {
                            key: "content",
                            fn: function() {
                                return [e("base-hours-table", {
                                    attrs: {
                                        hours: t.data.openingHours
                                    }
                                })]
                            },
                            proxy: !0
                        }], null, !1, 61883481)
                    }) : t._e()], 1)])
                }), [], !1, null, null, null);
            e.default = n.exports;
            installComponents(n, {
                BaseIcon: s(74).default,
                BaseHoursTable: s(564).default,
                Accordion: s(516).default
            })
        },
        685: function(t, e, s) {
            "use strict";
            s.r(e);
            var a = {
                    props: {
                        hover: Boolean
                    }
                },
                o = (s(576), s(12)),
                i = Object(o.a)(a, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("button", {
                        class: ["btn-back-to-top btn btn--icon btn--underline btn--color-black", {
                            "-hover": t.hover
                        }],
                        attrs: {
                            "aria-label": t.$t("actions.back_to_top"),
                            name: t.$t("actions.back_to_top"),
                            type: "button",
                            tabindex: "0"
                        },
                        on: {
                            click: function(e) {
                                return t.$bus.$emit("scroll:scroll-to", "top", {
                                    duration: .3
                                })
                            }
                        }
                    }, [e("div", {
                        staticClass: "btn-back-to-top__wrapper"
                    }, [e("span", {
                        staticClass: "btn__text"
                    }, [t._v("\n      Back to top\n    ")]), t._v(" "), e("svg", {
                        staticClass: "arrow-icon",
                        attrs: {
                            x: "0px",
                            y: "0px",
                            width: "39.7px",
                            height: "40.3px",
                            viewBox: "0 0 39.7 40.3",
                            "xml:space": "preserve"
                        }
                    }, [e("g", [e("polyline", {
                        staticClass: "st0",
                        attrs: {
                            points: "17.4,2.5 34.8,20.1 17.4,37.8 \t"
                        }
                    }), t._v(" "), e("line", {
                        staticClass: "st0",
                        attrs: {
                            x1: "31.3",
                            y1: "20.1",
                            x2: "0",
                            y2: "20.1"
                        }
                    })])])])])
                }), [], !1, null, null, null);
            e.default = i.exports
        },
        715: function(t, e, s) {
            "use strict";
            s(627)
        }
    }
]);