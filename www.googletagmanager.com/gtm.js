// Copyright 2012 Google Inc. All rights reserved.

(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');

(function() {

    var data = {
        "resource": {
            "version": "36",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__j",
                "vtp_name": "document.title"
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_stripWww": false,
                "vtp_varType": "URL",
                "vtp_component": "HOST"
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 8], 8, 16], ".match(\/[^.]*\\.[^.]{2,3}(?:\\.[^.]{2,3})?$\/)[0]})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return-1===", ["escape", ["macro", 7], 8, 16], ".indexOf(", ["escape", ["macro", 9], 8, 16], ")?!0:!1})();"]
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "hs-form-guid"
            }, {
                "function": "__u",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return document.getElementsByName(\"item_meta[15]\")[0].value})();"]
            }, {
                "function": "__awec",
                "vtp_mode": "MANUAL",
                "vtp_email": ["macro", 14]
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "CookieConsent"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__c",
                "vtp_value": "G-D9WHPPF0ZQ"
            }, {
                "function": "__c",
                "vtp_value": "73e4e984-b346-4fed-80e8-8382d0c1baf5"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "consent_applied"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "hs-form-guid"
            }, {
                "function": "__c",
                "vtp_value": "214504216548053"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){if(", ["escape", ["macro", 2], 8, 16], ")return ", ["escape", ["macro", 2], 8, 16], ".split(\":\")[1]})();"]
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 24], 8, 16], ".closest(\"button\");return a\u0026\u0026(a=a.getAttribute(\"class\"))?a:\"\"})();"]
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "pageUrl"
            }, {
                "function": "__c",
                "vtp_value": "UA-148504970-2"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 16],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": "false",
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*marketing:true.*", "value", "true"]]
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "anonymizeIp", "value", "true"],
                    ["map", "fieldName", "siteSpeedSampleRate", "value", "100"],
                    ["map", "fieldName", "allowAdFeatures", "value", ["macro", 29]]
                ],
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 28],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventCategory"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventLabel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventAction"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.getElementsByTagName(\"video\").length;return 0\u003Ca?!0:!1})();"]
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "attributes.label"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "CookieConsent"
            }, {
                "function": "__v",
                "vtp_setDefaultValue": false,
                "vtp_dataLayerVersion": 2,
                "vtp_name": "attributes.distance"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 36],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "marketing:true", "value", "true"],
                    ["map", "key", "marketing:false", "value", "false"]
                ]
            }, {
                "function": "__c",
                "vtp_value": "INSERIRE VALORE COOKIEBOT"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 36],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "statistics:true", "value", "true"],
                    ["map", "key", "statistics:false", "value", "false"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 36],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "preferences:true", "value", "true"],
                    ["map", "key", "preferences:false", "value", "false"]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "incognitoMode"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 16],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": "undefined",
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*statistics:true.*", "value", "true"],
                    ["map", "key", ".*statistics:false.*", "value", "false"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 16],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": "undefined",
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*marketing:true.*", "value", "true"],
                    ["map", "key", ".*marketing:false.*", "value", "false"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 16],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": "undefined",
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*preferences:true.*", "value", "true"],
                    ["map", "key", ".*preferences:false.*", "value", "false"]
                ]
            }, {
                "function": "__c",
                "vtp_value": ["template", "preferences=", ["macro", 45], " | statistics=", ["macro", 43], " | marketing=", ["macro", 44]]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "visitorId"
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__v",
                "vtp_name": "gtm.errorMessage",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.errorUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.errorLineNumber",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.newUrlFragment",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.oldUrlFragment",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.newHistoryState",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.oldHistoryState",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.historyChangeSource",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__ctv"
            }, {
                "function": "__dbg"
            }, {
                "function": "__r"
            }, {
                "function": "__cid"
            }, {
                "function": "__hid"
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoProvider",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoTitle",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoDuration",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoPercent",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoVisible",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoStatus",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoCurrentTime",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollThreshold",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollUnits",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollDirection",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.visibleRatio",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.visibleTime",
                "vtp_dataLayerVersion": 1
            }],
            "tags": [{
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 11
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 14
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 25
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 51
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 52
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 53
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 55
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 58
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 60
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 62
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 69
            }, {
                "function": "__gclidw",
                "metadata": ["map"],
                "consent": ["list", "ad_storage"],
                "once_per_event": true,
                "vtp_enableCrossDomain": false,
                "vtp_enableUrlPassthrough": false,
                "vtp_enableCookieOverrides": false,
                "vtp_enableCrossDomainFeature": true,
                "tag_id": 70
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "consent": ["list", "ad_storage"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "961218026",
                "vtp_conversionLabel": "qJYOCPbcvfgCEOqLrMoD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 13],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 71
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "consent": ["list", "ad_storage"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "961218026",
                "vtp_conversionLabel": "btgsCP3jvfgCEOqLrMoD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 13],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 72
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "consent": ["list", "ad_storage"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "961218026",
                "vtp_conversionLabel": "Bg2ZCJXU6PgCEOqLrMoD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 13],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 73
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "consent": ["list", "ad_storage"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": true,
                "vtp_cssProvidedEnhancedConversionValue": ["macro", 15],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "961218026",
                "vtp_conversionLabel": "JB7HCMri6vgCEOqLrMoD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 13],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 74
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 76
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 77
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 78
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 84
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 104
            }, {
                "function": "__paused",
                "vtp_originalTagType": "googtag",
                "tag_id": 114
            }, {
                "function": "__paused",
                "vtp_originalTagType": "opt",
                "tag_id": 115
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "consent": ["list", "analytics_storage"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "generate_lead_landing",
                "vtp_measurementIdOverride": ["macro", 18],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 116
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 117
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 120
            }, {
                "function": "__paused",
                "vtp_originalTagType": "gaawe",
                "tag_id": 122
            }, {
                "function": "__paused",
                "vtp_originalTagType": "gaawe",
                "tag_id": 124
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "consent": ["list", "ad_storage"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "961218026",
                "vtp_conversionLabel": "BNDCCO-6powYEOqLrMoD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 13],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 126
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "consent": ["list", "ad_storage"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "961218026",
                "vtp_conversionLabel": "UI6ICKKFqIwYEOqLrMoD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 13],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 128
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 129
            }, {
                "function": "__cvt_13000519_85",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_adsDataRedaction": "dynamic",
                "vtp_serial": ["macro", 19],
                "vtp_iabFramework": false,
                "vtp_language": "auto",
                "vtp_urlPassthrough": false,
                "vtp_consentModeEnabled": true,
                "vtp_waitForUpdate": "2000",
                "tag_id": 132
            }, {
                "function": "__googtag",
                "priority": 0,
                "metadata": ["map"],
                "consent": ["list", "analytics_storage"],
                "once_per_event": true,
                "vtp_tagId": ["macro", 18],
                "vtp_configSettingsTable": ["list", ["map", "parameter", "send_page_view", "parameterValue", "true"]],
                "tag_id": 141
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "consent": ["list", "analytics_storage"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "link_text", "parameterValue", ["macro", 6]]],
                "vtp_eventName": "click_phone",
                "vtp_measurementIdOverride": ["macro", 18],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 142
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "consent": ["list", "analytics_storage"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "generate_lead_appuntamento",
                "vtp_measurementIdOverride": ["macro", 18],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 148
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "consent": ["list", "analytics_storage"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "generate_lead_assistenza",
                "vtp_measurementIdOverride": ["macro", 18],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 152
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "consent": ["list", "analytics_storage"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "generate_lead_candidatura",
                "vtp_measurementIdOverride": ["macro", 18],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 156
            }, {
                "function": "__cvt_13000519_159",
                "metadata": ["map"],
                "consent": ["list", "analytics_storage"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": ["macro", 22],
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 160
            }, {
                "function": "__cvt_13000519_159",
                "metadata": ["map"],
                "consent": ["list", "analytics_storage"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": ["macro", 22],
                "vtp_objectPropertyList": ["list", ["map", "name", "page", "value", ["macro", 11]],
                    ["map", "name", "numTel", "value", ["macro", 23]]
                ],
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "custom",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_customEventName": "clic su tel",
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 161
            }, {
                "function": "__cvt_13000519_159",
                "metadata": ["map"],
                "consent": ["list", "analytics_storage"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": ["macro", 22],
                "vtp_standardEventName": "SubmitApplication",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 162
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "13000519_13",
                "tag_id": 163
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": true,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "13000519_24",
                "tag_id": 164
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "13000519_31",
                "tag_id": 165
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "30000",
                "vtp_limit": "1",
                "vtp_uniqueTriggerId": "13000519_32",
                "tag_id": 166
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "13000519_43",
                "tag_id": 167
            }, {
                "function": "__cl",
                "tag_id": 168
            }, {
                "function": "__cl",
                "tag_id": 169
            }, {
                "function": "__fsl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "13000519_54",
                "tag_id": 170
            }, {
                "function": "__cl",
                "tag_id": 171
            }, {
                "function": "__lcl",
                "vtp_waitForTags": true,
                "vtp_checkValidation": true,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "13000519_66",
                "tag_id": 172
            }, {
                "function": "__ytl",
                "vtp_progressThresholdsPercent": "25,50,75",
                "vtp_captureComplete": true,
                "vtp_captureStart": true,
                "vtp_fixMissingApi": true,
                "vtp_triggerStartOption": "DOM_READY",
                "vtp_radioButtonGroup1": "PERCENTAGE",
                "vtp_capturePause": false,
                "vtp_captureProgress": true,
                "vtp_uniqueTriggerId": "13000519_67",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 173
            }, {
                "function": "__fsl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "13000519_68",
                "tag_id": 174
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "form#form_contatti-company-form p",
                "vtp_firingFrequency": "MANY_PER_ELEMENT",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "5",
                "vtp_uniqueTriggerId": "13000519_80",
                "tag_id": 175
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "form#form_contatti-company-form p",
                "vtp_firingFrequency": "MANY_PER_ELEMENT",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "5",
                "vtp_uniqueTriggerId": "13000519_81",
                "tag_id": 176
            }, {
                "function": "__fsl",
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "13000519_83",
                "tag_id": 177
            }, {
                "function": "__cl",
                "tag_id": 178
            }, {
                "function": "__tg",
                "vtp_triggerIds": ["list", "13000519_90_89", "13000519_90_87"],
                "vtp_uniqueTriggerId": "13000519_90",
                "tag_id": 179
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "13000519_90_89",
                "tag_id": 180
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "13000519_90_87",
                "tag_id": 182
            }, {
                "function": "__cl",
                "tag_id": 183
            }, {
                "function": "__tg",
                "vtp_triggerIds": ["list", "13000519_95_94", "13000519_95_87"],
                "vtp_uniqueTriggerId": "13000519_95",
                "tag_id": 184
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "13000519_95_94",
                "tag_id": 185
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "13000519_95_87",
                "tag_id": 187
            }, {
                "function": "__cl",
                "tag_id": 188
            }, {
                "function": "__cl",
                "tag_id": 189
            }, {
                "function": "__cl",
                "tag_id": 190
            }, {
                "function": "__html",
                "metadata": ["map"],
                "consent": ["list", "analytics_storage", "functionality_storage", "personalization_storage"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,b,f,g,c,d){a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};c=e.createElement(f);c.async=1;c.src=\"https:\/\/www.clarity.ms\/tag\/\"+g+\"?ref\\x3dgtm2\";d=e.getElementsByTagName(f)[0];d.parentNode.insertBefore(c,d)})(window,document,\"clarity\",\"script\",\"c4g5nt8lbb\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 112
            }, {
                "function": "__html",
                "metadata": ["map"],
                "consent": ["list", "analytics_storage"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"message\",function(a){\"hsFormCallback\"===a.data.type\u0026\u0026\"onFormSubmitted\"===a.data.eventName\u0026\u0026window.dataLayer.push({event:\"hubspot-form-success\",\"hs-form-guid\":a.data.id})});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 134
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({consent_applied:!0});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 145
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.video"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)13000519_67($|,)))"
            }, {
                "function": "_sw",
                "arg0": ["macro", 2],
                "arg1": "mailto"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.linkClick"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)13000519_13($|,)))"
            }, {
                "function": "_ew",
                "arg0": ["macro", 2],
                "arg1": ".pdf"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)13000519_24($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 3],
                "arg1": "Pagina non trovata"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_sw",
                "arg0": ["macro", 2],
                "arg1": "tel:"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)13000519_43($|,)))"
            }, {
                "function": "_sw",
                "arg0": ["macro", 4],
                "arg1": "\/grazie"
            }, {
                "function": "_re",
                "arg0": ["macro", 5],
                "arg1": "w-btn us-btn-style_7|w-btn us-btn-style_10",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 6],
                "arg1": "(.)*catalogo(.)*",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.click"
            }, {
                "function": "_eq",
                "arg0": ["macro", 10],
                "arg1": "true"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)13000519_66($|,)))"
            }, {
                "function": "_ew",
                "arg0": ["macro", 11],
                "arg1": "company"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.elementVisibility"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)13000519_81($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 12],
                "arg1": "137965bb-58ee-4721-8f9d-7e7c055b4b7c"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "hubspot-form-success"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "cookie_consent_marketing"
            }, {
                "function": "_cn",
                "arg0": ["macro", 16],
                "arg1": "marketing:true"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": ".*"
            }, {
                "function": "_cn",
                "arg0": ["macro", 17],
                "arg1": "cv"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.formSubmit"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)13000519_83($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.triggerGroup"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)13000519_90($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 11],
                "arg1": "cucine.primopiano.com"
            }, {
                "function": "_cn",
                "arg0": ["macro", 12],
                "arg1": "hbspt-form-b80204c2-0d53-4fb4-aafa-699c611aac42"
            }, {
                "function": "_cn",
                "arg0": ["macro", 2],
                "arg1": "#contatti"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "w-video-h"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.init_consent"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "cookie_consent_update"
            }, {
                "function": "_eq",
                "arg0": ["macro", 20],
                "arg1": "true"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "route-change"
            }, {
                "function": "_cn",
                "arg0": ["macro", 2],
                "arg1": "tel:"
            }, {
                "function": "_cn",
                "arg0": ["macro", 21],
                "arg1": "5e307a3c-6b37-488a-9b3e-9ce9c2c69e62"
            }, {
                "function": "_cn",
                "arg0": ["macro", 21],
                "arg1": "771a8fc0-c798-4530-b236-717519bb1dc9"
            }, {
                "function": "_cn",
                "arg0": ["macro", 21],
                "arg1": "539a7c7c-f7fa-4760-bf90-8356bba7ae1e"
            }, {
                "function": "_cn",
                "arg0": ["macro", 21],
                "arg1": "406d72c3-9f63-4852-aff7-5ffa30d53752"
            }, {
                "function": "_cn",
                "arg0": ["macro", 21],
                "arg1": "8330941f-0806-42c2-91c7-f5c7b892c4d1"
            }, {
                "function": "_cn",
                "arg0": ["macro", 21],
                "arg1": "77006015-d991-4963-86fd-34cadb788d7b"
            }, {
                "function": "_cn",
                "arg0": ["macro", 21],
                "arg1": "29160e37-ee67-4290-ab7c-4ac8bc9e855d"
            }, {
                "function": "_cn",
                "arg0": ["macro", 21],
                "arg1": "3e7bee96-2382-4e60-a6d1-49cc70c6c769"
            }, {
                "function": "_cn",
                "arg0": ["macro", 21],
                "arg1": "6b9c46e4-9452-4908-8765-5ed737782fdf"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": ".*"
            }, {
                "function": "_re",
                "arg0": ["macro", 11],
                "arg1": ".*"
            }, {
                "function": "_re",
                "arg0": ["macro", 11],
                "arg1": ".*",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": ".*",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.dom"
            }, {
                "function": "_re",
                "arg0": ["macro", 25],
                "arg1": "CybotCookiebotDialogBodyButton|CybotCookiebotBannerCloseButton",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 26],
                "arg1": "CookiebotWidget-btn-withdraw"
            }, {
                "function": "_eq",
                "arg0": ["macro", 27],
                "arg1": "undefined"
            }],
            "rules": [
                [
                    ["if", 0, 1],
                    ["add", 0]
                ],
                [
                    ["if", 2, 3, 4],
                    ["add", 1]
                ],
                [
                    ["if", 3, 5, 6],
                    ["add", 2]
                ],
                [
                    ["if", 7, 8],
                    ["add", 3]
                ],
                [
                    ["if", 3, 9, 10],
                    ["add", 4, 13, 17]
                ],
                [
                    ["if", 8],
                    ["add", 5, 7, 11, 16, 21, 24, 25, 30, 37, 66, 67, 40, 42, 44, 45, 46, 48, 51, 52, 53, 54, 55, 56, 59, 60, 63, 64, 65]
                ],
                [
                    ["if", 8, 11],
                    ["add", 6]
                ],
                [
                    ["if", 12, 13, 14],
                    ["add", 8, 14, 18]
                ],
                [
                    ["if", 3, 15, 16],
                    ["add", 9]
                ],
                [
                    ["if", 17, 18, 19],
                    ["add", 10, 15]
                ],
                [
                    ["if", 20, 21],
                    ["add", 12, 23]
                ],
                [
                    ["if", 22],
                    ["add", 16]
                ],
                [
                    ["if", 25, 26, 27],
                    ["add", 19]
                ],
                [
                    ["if", 28, 29],
                    ["add", 20]
                ],
                [
                    ["if", 8, 30],
                    ["add", 22]
                ],
                [
                    ["if", 21, 31],
                    ["add", 26]
                ],
                [
                    ["if", 14, 32],
                    ["add", 27, 28]
                ],
                [
                    ["if", 14, 33],
                    ["add", 29]
                ],
                [
                    ["if", 34],
                    ["add", 31]
                ],
                [
                    ["if", 35],
                    ["add", 32, 58, 62]
                ],
                [
                    ["if", 36, 37],
                    ["add", 32]
                ],
                [
                    ["if", 14, 38],
                    ["add", 33, 38]
                ],
                [
                    ["if", 21, 39],
                    ["add", 34]
                ],
                [
                    ["if", 21, 40],
                    ["add", 34]
                ],
                [
                    ["if", 21, 41],
                    ["add", 34]
                ],
                [
                    ["if", 21, 42],
                    ["add", 35]
                ],
                [
                    ["if", 21, 43],
                    ["add", 35]
                ],
                [
                    ["if", 21, 44],
                    ["add", 35]
                ],
                [
                    ["if", 21, 45],
                    ["add", 36, 39]
                ],
                [
                    ["if", 21, 46],
                    ["add", 36, 39]
                ],
                [
                    ["if", 21, 47],
                    ["add", 36, 39]
                ],
                [
                    ["if", 8, 48],
                    ["add", 41]
                ],
                [
                    ["if", 8, 49],
                    ["add", 43]
                ],
                [
                    ["if", 8, 50],
                    ["add", 47]
                ],
                [
                    ["if", 8],
                    ["unless", 51],
                    ["add", 49]
                ],
                [
                    ["if", 52],
                    ["add", 50]
                ],
                [
                    ["if", 14, 53],
                    ["add", 57]
                ],
                [
                    ["if", 14, 54],
                    ["add", 61]
                ],
                [
                    ["if", 35],
                    ["unless", 55],
                    ["add", 68]
                ],
                [
                    ["if", 24],
                    ["unless", 23],
                    ["block", 16, 17, 18, 19]
                ]
            ]
        },
        "runtime": [
            [50, "__cvt_13000519_159", [46, "a"],
                [52, "b", ["require", "createQueue"]],
                [52, "c", ["require", "callInWindow"]],
                [52, "d", ["require", "aliasInWindow"]],
                [52, "e", ["require", "copyFromWindow"]],
                [52, "f", ["require", "setInWindow"]],
                [52, "g", ["require", "injectScript"]],
                [52, "h", ["require", "makeTableMap"]],
                [52, "i", ["require", "makeNumber"]],
                [52, "j", ["require", "getType"]],
                [52, "k", ["require", "copyFromDataLayer"]],
                [52, "l", ["require", "Math"]],
                [52, "m", ["require", "logToConsole"]],
                [52, "n", [30, ["e", "_fbq_gtm_ids"],
                    [7]
                ]],
                [52, "o", [17, [15, "a"], "pixelId"]],
                [52, "p", [7, "AddPaymentInfo", "AddToCart", "AddToWishlist", "CompleteRegistration", "Contact", "CustomizeProduct", "Donate", "FindLocation", "InitiateCheckout", "Lead", "PageView", "Purchase", "Schedule", "Search", "StartTrial", "SubmitApplication", "Subscribe", "ViewContent"]],
                [52, "q", ["k", "ecommerce", 1]],
                [52, "r", [51, "", [7, "bg"],
                    ["m", [15, "bg"]],
                    [2, [15, "a"], "gtmOnFailure", [7]]
                ]],
                [52, "s", [51, "", [7, "bg", "bh"],
                    [55, "bi", [15, "bh"],
                        [46, [22, [2, [15, "bh"], "hasOwnProperty", [7, [15, "bi"]]],
                            [46, [43, [15, "bg"],
                                [15, "bi"],
                                [16, [15, "bh"],
                                    [15, "bi"]
                                ]
                            ]]
                        ]]
                    ],
                    [36, [15, "bg"]]
                ]],
                [52, "t", [51, "", [7, "bg"],
                    [36, [8, "id", [17, [15, "bg"], "id"], "quantity", [17, [15, "bg"], "quantity"]]]
                ]],
                [41, "u", "v", "w"],
                [22, [17, [15, "a"], "enhancedEcommerce"],
                    [46, [22, [28, [15, "q"]],
                            [46, [36, ["r", "Facebook Pixel: No valid \"ecommerce\" object found in dataLayer"]]]
                        ],
                        [22, [17, [15, "q"], "detail"],
                            [46, [3, "u", "ViewContent"],
                                [3, "v", "detail"]
                            ],
                            [46, [22, [17, [15, "q"], "add"],
                                [46, [3, "u", "AddToCart"],
                                    [3, "v", "add"]
                                ],
                                [46, [22, [17, [15, "q"], "checkout"],
                                    [46, [3, "u", "InitiateCheckout"],
                                        [3, "v", "checkout"]
                                    ],
                                    [46, [22, [17, [15, "q"], "purchase"],
                                        [46, [3, "u", "Purchase"],
                                            [3, "v", "purchase"]
                                        ],
                                        [46, [36, ["r", "Facebook Pixel: Most recently pushed \"ecommerce\" object must be one of types \"detail\", \"add\", \"checkout\" or \"purchase\"."]]]
                                    ]]
                                ]]
                            ]]
                        ],
                        [22, [30, [28, [17, [16, [15, "q"],
                                    [15, "v"]
                                ], "products"]],
                                [21, ["j", [17, [16, [15, "q"],
                                    [15, "v"]
                                ], "products"]], "array"]
                            ],
                            [46, [36, ["r", "Facebook pixel: Most recently pushed \"ecommerce\" object did not have a valid \"products\" array."]]]
                        ],
                        [3, "w", [8, "content_type", "product", "contents", [2, [17, [16, [15, "q"],
                            [15, "v"]
                        ], "products"], "map", [7, [15, "t"]]], "value", [2, [17, [16, [15, "q"],
                            [15, "v"]
                        ], "products"], "reduce", [7, [51, "", [7, "bg", "bh"],
                            [52, "bi", [10, [2, [15, "l"], "round", [7, [26, [26, ["i", [30, [17, [15, "bh"], "price"], 0]],
                                [30, [17, [15, "bh"], "quantity"], 1]
                            ], 100]]], 100]],
                            [36, [0, [15, "bg"],
                                [15, "bi"]
                            ]]
                        ], 0]], "currency", [30, [17, [15, "q"], "currencyCode"], "USD"]]],
                        [22, [18, [2, [7, "InitiateCheckout", "Purchase"], "indexOf", [7, [15, "u"]]],
                                [27, 1]
                            ],
                            [46, [43, [15, "w"], "num_items", [2, [17, [16, [15, "q"],
                                [15, "v"]
                            ], "products"], "reduce", [7, [51, "", [7, "bg", "bh"],
                                [36, [0, [15, "bg"],
                                    ["i", [30, [17, [15, "bh"], "quantity"], 1]]
                                ]]
                            ], 0]]]]
                        ]
                    ]
                ],
                [52, "x", [39, [1, [17, [15, "a"], "advancedMatchingList"],
                        [17, [17, [15, "a"], "advancedMatchingList"], "length"]
                    ],
                    ["h", [17, [15, "a"], "advancedMatchingList"], "name", "value"],
                    [8]
                ]],
                [52, "y", [39, [1, [17, [15, "a"], "objectPropertyList"],
                        [17, [17, [15, "a"], "objectPropertyList"], "length"]
                    ],
                    ["h", [17, [15, "a"], "objectPropertyList"], "name", "value"],
                    [8]
                ]],
                [52, "z", [39, [20, ["j", [17, [15, "a"], "objectPropertiesFromVariable"]], "object"],
                    [17, [15, "a"], "objectPropertiesFromVariable"],
                    [8]
                ]],
                [52, "ba", ["s", [15, "z"],
                    [15, "y"]
                ]],
                [52, "bb", ["s", [30, [15, "w"],
                        [8]
                    ],
                    [15, "ba"]
                ]],
                [3, "u", [30, [15, "u"],
                    [39, [20, [17, [15, "a"], "eventName"], "custom"],
                        [17, [15, "a"], "customEventName"],
                        [39, [20, [17, [15, "a"], "eventName"], "variable"],
                            [17, [15, "a"], "variableEventName"],
                            [17, [15, "a"], "standardEventName"]
                        ]
                    ]
                ]],
                [52, "bc", [39, [20, [2, [15, "p"], "indexOf", [7, [15, "u"]]],
                    [27, 1]
                ], "trackSingleCustom", "trackSingle"]],
                [52, "bd", [39, [20, [17, [15, "a"], "consent"], false], "revoke", "grant"]],
                [52, "be", [51, "", [7],
                    [41, "bg"],
                    [3, "bg", ["e", "fbq"]],
                    [22, [15, "bg"],
                        [46, [36, [15, "bg"]]]
                    ],
                    ["f", "fbq", [51, "", [7],
                        [52, "bh", ["e", "fbq.callMethod.apply"]],
                        [22, [15, "bh"],
                            [46, ["c", "fbq.callMethod.apply", [45],
                                [15, "arguments"]
                            ]],
                            [46, ["c", "fbq.queue.push", [15, "arguments"]]]
                        ]
                    ]],
                    ["d", "_fbq", "fbq"],
                    ["b", "fbq.queue"],
                    [36, ["e", "fbq"]]
                ]],
                [52, "bf", ["be"]],
                ["bf", "consent", [15, "bd"]],
                [22, [17, [15, "a"], "dpoLDU"],
                    [46, ["bf", "dataProcessingOptions", [7, "LDU"],
                        ["i", [17, [15, "a"], "dpoCountry"]],
                        ["i", [17, [15, "a"], "dpoState"]]
                    ]]
                ],
                [2, [2, [15, "o"], "split", [7, ","]], "forEach", [7, [51, "", [7, "bg"],
                    [22, [20, [2, [15, "n"], "indexOf", [7, [15, "bg"]]],
                            [27, 1]
                        ],
                        [46, [22, [17, [15, "a"], "disableAutoConfig"],
                                [46, ["bf", "set", "autoConfig", false, [15, "bg"]]]
                            ],
                            [22, [17, [15, "a"], "disablePushState"],
                                [46, ["f", "fbq.disablePushState", true]]
                            ],
                            ["bf", "init", [15, "bg"],
                                [15, "x"]
                            ],
                            ["bf", "set", "agent", "tmSimo-GTM-WebTemplate", [15, "bg"]],
                            [2, [15, "n"], "push", [7, [15, "bg"]]],
                            ["f", "_fbq_gtm_ids", [15, "n"], true]
                        ]
                    ],
                    [22, [17, [15, "a"], "eventId"],
                        [46, ["bf", [15, "bc"],
                            [15, "bg"],
                            [15, "u"],
                            [15, "bb"],
                            [8, "eventID", [17, [15, "a"], "eventId"]]
                        ]],
                        [46, ["bf", [15, "bc"],
                            [15, "bg"],
                            [15, "u"],
                            [15, "bb"]
                        ]]
                    ]
                ]]],
                ["g", "https://connect.facebook.net/en_US/fbevents.js", [17, [15, "a"], "gtmOnSuccess"],
                    [17, [15, "a"], "gtmOnFailure"], "fbPixel"
                ]
            ],
            [50, "__cvt_13000519_85", [46, "a"],
                [52, "b", ["require", "injectScript"]],
                [52, "c", ["require", "encodeUriComponent"]],
                [52, "d", ["require", "queryPermission"]],
                [52, "e", ["require", "gtagSet"]],
                [52, "f", ["require", "setDefaultConsentState"]],
                [52, "g", ["require", "getCookieValues"]],
                [52, "h", ["require", "updateConsentState"]],
                [52, "i", [17, [15, "a"], "serial"]],
                [52, "j", [17, [15, "a"], "iabFramework"]],
                [52, "k", [17, [15, "a"], "consentModeEnabled"]],
                [52, "l", [17, [15, "a"], "language"]],
                [52, "m", [17, [15, "a"], "waitForUpdate"]],
                [52, "n", [17, [15, "a"], "urlPassthrough"]],
                [52, "o", [17, [15, "a"], "adsDataRedaction"]],
                [52, "p", [30, [17, [15, "a"], "regionSettings"],
                    [7]
                ]],
                [41, "q"],
                [3, "q", false],
                [22, [21, [15, "k"], false],
                    [46, [53, [52, "s", [51, "", [7, "y"],
                            [36, [2, [2, [2, [15, "y"], "split", [7, ","]], "map", [7, [51, "", [7, "z"],
                                [36, [2, [15, "z"], "trim", [7]]]
                            ]]], "filter", [7, [51, "", [7, "z"],
                                [36, [21, [17, [15, "z"], "length"], 0]]
                            ]]]]
                        ]],
                        [52, "t", [51, "", [7, "y"],
                            [52, "z", [8, "ad_storage", [17, [15, "y"], "defaultConsentMarketing"], "analytics_storage", [17, [15, "y"], "defaultConsentStatistics"], "functionality_storage", [17, [15, "y"], "defaultConsentPreferences"], "personalization_storage", [17, [15, "y"], "defaultConsentPreferences"], "security_storage", "granted"]],
                            [52, "ba", ["s", [17, [15, "y"], "region"]]],
                            [22, [17, [15, "ba"], "length"],
                                [46, [43, [15, "z"], "region", [15, "ba"]]]
                            ],
                            [36, [15, "z"]]
                        ]],
                        ["e", [8, "url_passthrough", [20, [15, "n"], true], "developer_id.dMWZhNz", true]],
                        [2, [15, "p"], "forEach", [7, [51, "", [7, "y"],
                            [52, "z", ["t", [15, "y"]]],
                            [22, [18, [15, "m"], 0],
                                [46, [43, [15, "z"], "wait_for_update", [15, "m"]]]
                            ],
                            ["f", [15, "z"]],
                            [22, [30, [20, [17, [15, "y"], "region"],
                                        [44]
                                    ],
                                    [20, [2, [17, [15, "y"], "region"], "trim", [7]], ""]
                                ],
                                [46, [3, "q", true]]
                            ]
                        ]]],
                        [22, [28, [15, "q"]],
                            [46, ["f", [8, "ad_storage", "denied", "analytics_storage", "denied", "functionality_storage", "denied", "personalization_storage", "denied", "security_storage", "granted"]]]
                        ],
                        [41, "u"],
                        [3, "u", [45]],
                        [22, [21, [2, ["g", "CookieConsent"], "toString", [7]], ""],
                            [46, [53, [52, "y", [16, ["g", "CookieConsent"], 0]],
                                [22, [1, [1, [21, [40, [15, "y"]], "undefined"],
                                            [20, [2, [15, "y"], "indexOf", [7, "{"]], 0]
                                        ],
                                        [18, [2, [15, "y"], "indexOf", [7, "}"]], 0]
                                    ],
                                    [46, [3, "u", [8, "preferences", "denied", "statistics", "denied", "marketing", "denied", "readConsentString", [51, "", [7, "z"],
                                            [41, "ba", "bb"],
                                            [3, "ba", [2, [2, [2, [15, "z"], "replace", [7, "{", ""]], "replace", [7, "}", ""]], "split", [7, ","]]],
                                            [3, "bb", [8]],
                                            [53, [41, "bc"],
                                                [3, "bc", 0],
                                                [63, [7, "bc"],
                                                    [23, [15, "bc"],
                                                        [17, [15, "ba"], "length"]
                                                    ],
                                                    [3, "bc", [0, [15, "bc"], 1]],
                                                    [46, [53, [41, "bd"],
                                                        [3, "bd", [2, [16, [15, "ba"],
                                                            [15, "bc"]
                                                        ], "split", [7, ":"]]],
                                                        [43, [15, "bb"],
                                                            [16, [15, "bd"], 0],
                                                            [16, [15, "bd"], 1]
                                                        ]
                                                    ]]
                                                ]
                                            ],
                                            [43, [15, "u"], "preferences", [39, [20, [17, [15, "bb"], "preferences"], "true"], "granted", "denied"]],
                                            [43, [15, "u"], "statistics", [39, [20, [17, [15, "bb"], "statistics"], "true"], "granted", "denied"]],
                                            [43, [15, "u"], "marketing", [39, [20, [17, [15, "bb"], "marketing"], "true"], "granted", "denied"]],
                                            [43, [15, "u"], "region", [17, [15, "bb"], "region"]]
                                        ]]],
                                        [2, [15, "u"], "readConsentString", [7, [15, "y"]]],
                                        ["h", [8, "ad_storage", [17, [15, "u"], "marketing"], "analytics_storage", [17, [15, "u"], "statistics"], "functionality_storage", [17, [15, "u"], "preferences"], "personalization_storage", [17, [15, "u"], "preferences"], "security_storage", "granted"]]
                                    ]
                                ]
                            ]]
                        ],
                        [52, "v", [39, [15, "u"],
                            [17, [15, "u"], "marketing"], "denied"
                        ]],
                        [52, "w", [20, [15, "v"], "granted"]],
                        [52, "x", [39, [30, [20, [15, "o"], "dynamic"],
                                [44]
                            ],
                            [28, [15, "w"]],
                            [20, [15, "o"], "true"]
                        ]],
                        ["e", [8, "ads_data_redaction", [15, "x"]]]
                    ]]
                ],
                [41, "r"],
                [3, "r", [0, "https://consent.cookiebot.com/uc.js?cbid=", ["c", [15, "i"]]]],
                [22, [20, [15, "k"], false],
                    [46, [3, "r", [0, [15, "r"], "&consentmode=disabled"]]],
                    [46, [3, "r", [0, [15, "r"],
                        [0, "&consentmode-dataredaction=", [15, "o"]]
                    ]]]
                ],
                [22, [20, [15, "l"], "variable"],
                    [46, [3, "r", [0, [15, "r"],
                        [0, "&culture=", ["c", [17, [15, "a"], "languageVariable"]]]
                    ]]]
                ],
                [22, [15, "j"],
                    [46, [3, "r", [0, [15, "r"], "&framework=IAB"]]]
                ],
                [22, ["d", "inject_script", [15, "r"]],
                    [46, ["b", [15, "r"],
                        [17, [15, "a"], "gtmOnSuccess"],
                        [17, [15, "a"], "gtmOnFailure"]
                    ]],
                    [46, [2, [15, "a"], "gtmOnFailure", [7]]]
                ]
            ],
            [50, "__awec", [46, "a"],
                [50, "e", [46, "q", "r", "s"],
                    [22, [21, [16, [15, "r"],
                                [15, "s"]
                            ],
                            [44]
                        ],
                        [46, [43, [15, "q"],
                                [15, "s"],
                                [16, [15, "r"],
                                    [15, "s"]
                                ]
                            ],
                            [33, [15, "d"],
                                [3, "d", [0, [15, "d"], 1]]
                            ]
                        ]
                    ]
                ],
                [50, "f", [46, "q"],
                    [3, "d", 0],
                    [52, "r", [8]],
                    ["e", [15, "r"],
                        [15, "q"], "first_name"
                    ],
                    ["e", [15, "r"],
                        [15, "q"], "last_name"
                    ],
                    ["e", [15, "r"],
                        [15, "q"], "street"
                    ],
                    ["e", [15, "r"],
                        [15, "q"], "sha256_first_name"
                    ],
                    ["e", [15, "r"],
                        [15, "q"], "sha256_last_name"
                    ],
                    ["e", [15, "r"],
                        [15, "q"], "sha256_street"
                    ],
                    ["e", [15, "r"],
                        [15, "q"], "city"
                    ],
                    ["e", [15, "r"],
                        [15, "q"], "region"
                    ],
                    ["e", [15, "r"],
                        [15, "q"], "country"
                    ],
                    ["e", [15, "r"],
                        [15, "q"], "postal_code"
                    ],
                    [22, [20, [15, "d"], 0],
                        [46, [36, [44]]],
                        [46, [36, [15, "r"]]]
                    ]
                ],
                [52, "b", ["require", "getType"]],
                [41, "c"],
                [3, "c", [8]],
                [41, "d"],
                [3, "d", 0],
                [41, "g"],
                [3, "g", [16, [15, "a"], "mode"]],
                [38, [15, "g"],
                    [46, "CODE", "AUTO"],
                    [46, [5, [46, [52, "h", [7]],
                            [52, "i", [30, [16, [15, "a"], "dataSource"],
                                [8]
                            ]],
                            ["e", [15, "c"],
                                [15, "i"], "email"
                            ],
                            ["e", [15, "c"],
                                [15, "i"], "phone_number"
                            ],
                            ["e", [15, "c"],
                                [15, "i"], "sha256_email_address"
                            ],
                            ["e", [15, "c"],
                                [15, "i"], "sha256_phone_number"
                            ],
                            [52, "j", [16, [15, "i"], "address"]],
                            [22, [20, ["b", [15, "j"]], "array"],
                                [46, [66, "q", [15, "j"],
                                    [46, [53, [52, "r", ["f", [15, "q"]]],
                                        [22, [21, [15, "r"],
                                                [44]
                                            ],
                                            [46, [2, [15, "h"], "push", [7, [15, "r"]]]]
                                        ]
                                    ]]
                                ]],
                                [46, [22, [15, "j"],
                                    [46, [53, [52, "q", ["f", [15, "j"]]],
                                        [22, [21, [15, "q"],
                                                [44]
                                            ],
                                            [46, [2, [15, "h"], "push", [7, [15, "q"]]]]
                                        ]
                                    ]]
                                ]]
                            ],
                            [22, [18, [17, [15, "h"], "length"], 0],
                                [46, [43, [15, "c"], "address", [15, "h"]]]
                            ],
                            [4]
                        ]],
                        [5, [46, [52, "k", [13, [41, "$0"],
                                [3, "$0", ["require", "internal.getFlags"]],
                                ["$0"]
                            ]],
                            [52, "l", ["require", "internal.detectUserProvidedData"]],
                            [41, "m"],
                            [3, "m", [44]],
                            [22, [1, [16, [15, "a"], "enableElementBlocking"],
                                    [16, [15, "a"], "disabledElements"]
                                ],
                                [46, [53, [52, "q", [16, [15, "a"], "disabledElements"]],
                                    [3, "m", [7]],
                                    [65, "r", [15, "q"],
                                        [46, [2, [15, "m"], "push", [7, [16, [15, "r"], "column1"]]]]
                                    ]
                                ]]
                            ],
                            [52, "n", ["l", [8, "excludeElementSelectors", [15, "m"]]]],
                            [52, "o", [1, [15, "n"],
                                [16, [15, "n"], "elements"]
                            ]],
                            [22, [1, [15, "o"],
                                    [18, [17, [15, "o"], "length"], 0]
                                ],
                                [46, [53, [41, "q"],
                                    [3, "q", 0],
                                    [63, [7, "q"],
                                        [23, [15, "q"],
                                            [17, [15, "o"], "length"]
                                        ],
                                        [33, [15, "q"],
                                            [3, "q", [0, [15, "q"], 1]]
                                        ],
                                        [46, [53, [52, "r", [16, [15, "o"],
                                                [15, "q"]
                                            ]],
                                            [22, [20, [16, [15, "r"], "type"], "email"],
                                                [46, [43, [15, "c"], "email", [16, [15, "r"], "userData"]],
                                                    [4]
                                                ]
                                            ]
                                        ]]
                                    ]
                                ]]
                            ],
                            [4]
                        ]],
                        [9, [46, [3, "g", "MANUAL"],
                            ["e", [15, "c"],
                                [15, "a"], "email"
                            ],
                            ["e", [15, "c"],
                                [15, "a"], "phone_number"
                            ],
                            [52, "p", ["f", [15, "a"]]],
                            [22, [21, [15, "p"],
                                    [44]
                                ],
                                [46, [43, [15, "c"], "address", [7, [15, "p"]]]]
                            ]
                        ]]
                    ]
                ],
                [43, [15, "c"], "_tag_mode", [15, "g"]],
                [36, [15, "c"]]
            ],
            [50, "__cid", [46, "a"],
                [36, [17, [13, [41, "$0"],
                    [3, "$0", ["require", "getContainerVersion"]],
                    ["$0"]
                ], "containerId"]]
            ],
            [50, "__ctv", [46, "a"],
                [36, [17, [13, [41, "$0"],
                    [3, "$0", ["require", "getContainerVersion"]],
                    ["$0"]
                ], "version"]]
            ],
            [50, "__googtag", [46, "a"],
                [50, "k", [46, "r", "s"],
                    [66, "t", [2, [15, "b"], "keys", [7, [15, "s"]]],
                        [46, [43, [15, "r"],
                            [15, "t"],
                            [16, [15, "s"],
                                [15, "t"]
                            ]
                        ]]
                    ]
                ],
                [52, "b", ["require", "Object"]],
                [52, "c", ["require", "createArgumentsQueue"]],
                [52, "d", [15, "__module_gtag"]],
                [52, "e", ["require", "internal.gtagConfig"]],
                [52, "f", ["require", "getType"]],
                [52, "g", ["require", "logToConsole"]],
                [52, "h", ["require", "makeNumber"]],
                [52, "i", ["require", "makeString"]],
                [52, "j", ["require", "makeTableMap"]],
                [52, "l", [30, [17, [15, "a"], "tagId"], ""]],
                [22, [30, [21, ["f", [15, "l"]], "string"],
                        [24, [2, [15, "l"], "indexOf", [7, "-"]], 0]
                    ],
                    [46, ["g", [0, "Invalid Measurement ID for the GA4 Configuration tag: ", [15, "l"]]],
                        [2, [15, "a"], "gtmOnFailure", [7]],
                        [36]
                    ]
                ],
                [52, "m", [30, [17, [15, "a"], "configSettingsVariable"],
                    [8]
                ]],
                [52, "n", [30, ["j", [30, [17, [15, "a"], "configSettingsTable"],
                        [7]
                    ], "parameter", "parameterValue"],
                    [8]
                ]],
                ["k", [15, "m"],
                    [15, "n"]
                ],
                [52, "o", [30, [17, [15, "a"], "eventSettingsVariable"],
                    [8]
                ]],
                [52, "p", [30, ["j", [30, [17, [15, "a"], "eventSettingsTable"],
                        [7]
                    ], "parameter", "parameterValue"],
                    [8]
                ]],
                ["k", [15, "o"],
                    [15, "p"]
                ],
                [52, "q", [15, "m"]],
                ["k", [15, "q"],
                    [15, "o"]
                ],
                [22, [30, [2, [15, "q"], "hasOwnProperty", [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]]],
                        [17, [15, "a"], "userProperties"]
                    ],
                    [46, [53, [52, "r", [30, [16, [15, "q"],
                                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]
                            ],
                            [8]
                        ]],
                        ["k", [15, "r"],
                            [30, ["j", [30, [17, [15, "a"], "userProperties"],
                                    [7]
                                ], "name", "value"],
                                [8]
                            ]
                        ],
                        [43, [15, "q"],
                            [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                            [15, "r"]
                        ]
                    ]]
                ],
                [2, [15, "d"], "convertParameters", [7, [15, "q"],
                    [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"],
                    [51, "", [7, "r"],
                        [36, [39, [20, "false", [2, ["i", [15, "r"]], "toLowerCase", [7]]], false, [28, [28, [15, "r"]]]]]
                    ]
                ]],
                [2, [15, "d"], "convertParameters", [7, [15, "q"],
                    [17, [15, "d"], "GOLD_NUMERIC_FIELDS"],
                    [51, "", [7, "r"],
                        [36, ["h", [15, "r"]]]
                    ]
                ]],
                ["e", [15, "l"],
                    [15, "q"],
                    [8, "noTargetGroup", true]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__paused", [46, "a"],
                [2, [15, "a"], "gtmOnFailure", [7]]
            ],
            [50, "__r", [46, "a"],
                [36, [13, [41, "$0"],
                    [3, "$0", ["require", "generateRandom"]],
                    ["$0", [30, [17, [15, "a"], "min"], 0],
                        [30, [17, [15, "a"], "max"], 2.147483647E9]
                    ]
                ]]
            ],
            [52, "__module_gtag", [13, [41, "$0"],
                [3, "$0", [51, "", [7],
                    [50, "a", [46],
                        [50, "f", [46, "g", "h", "i"],
                            [65, "j", [15, "h"],
                                [46, [22, [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                                    [46, [43, [15, "g"],
                                        [15, "j"],
                                        ["i", [16, [15, "g"],
                                            [15, "j"]
                                        ]]
                                    ]]
                                ]]
                            ]
                        ],
                        [52, "b", ["require", "Object"]],
                        [52, "c", [2, [15, "b"], "freeze", [7, [8, "EP_USER_PROPERTIES", "user_properties"]]]],
                        [52, "d", [2, [15, "b"], "freeze", [7, [7, "allow_ad_personalization_signals", "allow_google_signals", "cookie_update", "update", "first_party_collection", "send_page_view"]]]],
                        [52, "e", [2, [15, "b"], "freeze", [7, [7, "cookie_expires", "event_timeout", "session_duration", "session_engaged_time", "engagement_time_msec"]]]],
                        [36, [8, "SCHEMA", [15, "c"], "GOLD_BOOLEAN_FIELDS", [15, "d"], "GOLD_NUMERIC_FIELDS", [15, "e"], "convertParameters", [15, "f"]]]
                    ],
                    [36, ["a"]]
                ]],
                ["$0"]
            ]]

        ],
        "entities": {
            "__cid": {
                "4": true,
                "3": true
            },
            "__ctv": {
                "3": true
            },
            "__googtag": {
                "1": 10
            }


        },
        "permissions": {
            "__cvt_13000519_159": {
                "access_globals": {
                    "keys": [{
                        "key": "fbq",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "_fbq_gtm",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "_fbq",
                        "read": false,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "_fbq_gtm_ids",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "fbq.callMethod.apply",
                        "read": true,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "fbq.queue.push",
                        "read": false,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "fbq.queue",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "fbq.disablePushState",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/connect.facebook.net\/en_US\/fbevents.js"]
                },
                "logging": {
                    "environments": "debug"
                },
                "read_data_layer": {
                    "keyPatterns": ["ecommerce"]
                }
            },
            "__cvt_13000519_85": {
                "inject_script": {
                    "urls": ["https:\/\/*.cookiebot.com\/"]
                },
                "access_consent": {
                    "consentTypes": [{
                        "consentType": "analytics_storage",
                        "read": false,
                        "write": true
                    }, {
                        "consentType": "ad_storage",
                        "read": false,
                        "write": true
                    }, {
                        "consentType": "functionality_storage",
                        "read": false,
                        "write": true
                    }, {
                        "consentType": "personalization_storage",
                        "read": false,
                        "write": true
                    }, {
                        "consentType": "security_storage",
                        "read": false,
                        "write": true
                    }, {
                        "consentType": "wait_for_update",
                        "read": false,
                        "write": true
                    }]
                },
                "get_cookies": {
                    "cookieAccess": "specific",
                    "cookieNames": ["CookieConsent"]
                },
                "write_data_layer": {
                    "keyPatterns": ["ads_data_redaction", "url_passthrough", "developer_id.dMWZhNz"]
                }
            },
            "__awec": {
                "detect_user_provided_data": {
                    "limitDataSources": true,
                    "allowAutoDataSources": true,
                    "allowManualDataSources": false,
                    "allowCodeDataSources": false
                }
            },
            "__cid": {
                "read_container_data": {}
            },
            "__ctv": {
                "read_container_data": {}
            },
            "__googtag": {
                "logging": {
                    "environments": "debug"
                },
                "access_globals": {
                    "keys": [{
                        "key": "gtag",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "dataLayer",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "configure_google_tags": {
                    "allowedTagIds": "any"
                }
            },
            "__paused": {},
            "__r": {}


        }

        ,
        "sandboxed_scripts": [
                "__cvt_13000519_159", "__cvt_13000519_85"

            ]

            ,
        "security_groups": {
            "google": [
                "__awec",
                "__cid",
                "__ctv",
                "__googtag",
                "__r"

            ]


        }



    };


    var aa, ba = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ca = function(a) {
            return a.raw = a
        },
        ea = function(a, b) {
            a.raw = b;
            return a
        },
        fa = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: ba(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ka = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        la;
    if ("function" == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;
    else {
        var ma;
        a: {
            var na = {
                    a: !0
                },
                oa = {};
            try {
                oa.__proto__ = na;
                ma = oa.a;
                break a
            } catch (a) {}
            ma = !1
        }
        la = ma ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var pa = la,
        qa = function(a, b) {
            a.prototype = ka(b.prototype);
            a.prototype.constructor = a;
            if (pa) pa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.gn = b.prototype
        };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ra = this || self,
        ta = function(a) {
            return a
        };
    var ua = function(a, b) {
        this.h = a;
        this.B = b
    };
    var va = function() {
        this.B = {};
        this.F = {}
    };
    aa = va.prototype;
    aa.get = function(a) {
        return this.B["dust." + a]
    };
    aa.set = function(a, b) {
        a = "dust." + a;
        this.F.hasOwnProperty(a) || (this.B[a] = b)
    };
    aa.Kh = function(a, b) {
        this.set(a, b);
        this.F["dust." + a] = !0
    };
    aa.has = function(a) {
        return this.B.hasOwnProperty("dust." + a)
    };
    aa.remove = function(a) {
        a = "dust." + a;
        this.F.hasOwnProperty(a) || delete this.B[a]
    };
    var wa = function() {
        this.quota = {}
    };
    wa.prototype.reset = function() {
        this.quota = {}
    };
    var xa = function(a, b) {
        this.W = a;
        this.K = function(c, d, e) {
            return c.apply(d, e)
        };
        this.C = b;
        this.B = new va;
        this.h = this.F = void 0
    };
    xa.prototype.add = function(a, b) {
        ya(this, a, b, !1)
    };
    var ya = function(a, b, c, d) {
        d ? a.B.Kh(b, c) : a.B.set(b, c)
    };
    xa.prototype.set = function(a, b) {
        !this.B.has(a) && this.C && this.C.has(a) ? this.C.set(a, b) : this.B.set(a, b)
    };
    xa.prototype.get = function(a) {
        return this.B.has(a) ? this.B.get(a) : this.C ? this.C.get(a) : void 0
    };
    xa.prototype.has = function(a) {
        return !!this.B.has(a) || !(!this.C || !this.C.has(a))
    };
    var za = function(a) {
        var b = new xa(a.W, a);
        a.F && (b.F = a.F);
        b.K = a.K;
        b.h = a.h;
        return b
    };
    var Aa = function() {},
        Ba = function(a) {
            return "function" === typeof a
        },
        h = function(a) {
            return "string" === typeof a
        },
        Ca = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        Da = Array.isArray,
        Ea = function(a, b) {
            if (a && Da(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Ga = function(a, b) {
            if (!Ca(a) || !Ca(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Ia = function(a, b) {
            for (var c = new Ha, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        l = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Ka = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        La = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ma = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Na = function(a) {
            var b = [];
            if (Da(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Oa = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Pa = function() {
            return new Date(Date.now())
        },
        Qa = function() {
            return Pa().getTime()
        },
        Ha = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Ha.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Ha.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Sa = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Ta = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Ua = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Va = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Xa = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Ya = function(a, b) {
            return a.substring(0, b.length) === b
        },
        Za = function(a, b) {
            var c = z;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e])) return;
                d = d[a[e]];
                if (0 <= b.indexOf(d)) return
            }
            return d
        },
        $a = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        ab = /^\w{1,9}$/,
        bb = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            l(a, function(d, e) {
                ab.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        cb = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };

    function db(a, b) {
        for (var c, d = 0; d < b.length && !(c = eb(a, b[d]), c instanceof ua); d++);
        return c
    }

    function eb(a, b) {
        try {
            var c = a.get(String(b[0]));
            if (!c || "function" !== typeof c.invoke) throw Error("Attempting to execute non-function " + b[0] + ".");
            return c.invoke.apply(c, [a].concat(b.slice(1)))
        } catch (e) {
            var d = a.F;
            d && d(e, b.context ? {
                id: b[0],
                line: b.context.line
            } : null);
            throw e;
        }
    };
    var fb = function() {
        this.C = new wa;
        this.h = new xa(this.C)
    };
    fb.prototype.execute = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.B(c)
    };
    fb.prototype.B = function(a) {
        for (var b, c = 0; c < arguments.length; c++) b = eb(this.h, arguments[c]);
        return b
    };
    fb.prototype.F = function(a, b) {
        var c = za(this.h);
        c.h = a;
        for (var d, e = 1; e < arguments.length; e++) d = eb(c, arguments[e]);
        return d
    };
    var gb = function() {
        va.call(this);
        this.C = !1
    };
    qa(gb, va);
    var hb = function(a, b) {
        var c = [],
            d;
        for (d in a.B)
            if (a.B.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                case 1:
                    c.push(d);
                    break;
                case 2:
                    c.push(a.get(d));
                    break;
                case 3:
                    c.push([d, a.get(d)])
            }
        return c
    };
    aa = gb.prototype;
    aa.set = function(a, b) {
        this.C || va.prototype.set.call(this, a, b)
    };
    aa.Kh = function(a, b) {
        this.C || va.prototype.Kh.call(this, a, b)
    };
    aa.remove = function(a) {
        this.C || va.prototype.remove.call(this, a)
    };
    aa.Bb = function() {
        this.C = !0
    };
    aa.tj = function() {
        return this.C
    };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var ib = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        jb = function(a) {
            if (null == a) return String(a);
            var b = ib.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        kb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        lb = function(a) {
            if (!a || "object" != jb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !kb(a, "constructor") && !kb(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || kb(a, b)
        },
        mb = function(a, b) {
            var c = b || ("array" == jb(a) ? [] : {}),
                d;
            for (d in a)
                if (kb(a, d)) {
                    var e = a[d];
                    "array" == jb(e) ? ("array" != jb(c[d]) && (c[d] = []), c[d] = mb(e, c[d])) : lb(e) ? (lb(c[d]) || (c[d] = {}), c[d] = mb(e, c[d])) : c[d] = e
                }
            return c
        };
    var nb = function(a) {
            for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
            return b
        },
        ob = function(a) {
            if (void 0 == a || Da(a) || lb(a)) return !0;
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    return !0
            }
            return !1
        },
        pb = function(a) {
            return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
        };
    var qb = function(a) {
        this.B = new gb;
        this.h = [];
        this.C = !1;
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (pb(b) ? this.h[Number(b)] = a[Number(b)] : this.B.set(b, a[b]))
    };
    aa = qb.prototype;
    aa.toString = function(a) {
        if (a && 0 <= a.indexOf(this)) return "";
        for (var b = [], c = 0; c < this.h.length; c++) {
            var d = this.h[c];
            null === d || void 0 === d ? b.push("") : d instanceof qb ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(String(d))
        }
        return b.join(",")
    };
    aa.set = function(a, b) {
        if (!this.C)
            if ("length" === a) {
                if (!pb(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.h.length = Number(b)
            } else pb(a) ? this.h[Number(a)] = b : this.B.set(a, b)
    };
    aa.get = function(a) {
        return "length" === a ? this.length() : pb(a) ? this.h[Number(a)] : this.B.get(a)
    };
    aa.length = function() {
        return this.h.length
    };
    aa.Pb = function() {
        for (var a = hb(this.B, 1), b = 0; b < this.h.length; b++) a.push(b + "");
        return new qb(a)
    };
    aa.remove = function(a) {
        pb(a) ? delete this.h[Number(a)] : this.B.remove(a)
    };
    aa.pop = function() {
        return this.h.pop()
    };
    aa.push = function(a) {
        return this.h.push.apply(this.h, Array.prototype.slice.call(arguments))
    };
    aa.shift = function() {
        return this.h.shift()
    };
    aa.splice = function(a, b, c) {
        return new qb(this.h.splice.apply(this.h, arguments))
    };
    aa.unshift = function(a) {
        return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments))
    };
    aa.has = function(a) {
        return pb(a) && this.h.hasOwnProperty(a) || this.B.has(a)
    };
    aa.Bb = function() {
        this.C = !0;
        Object.freeze(this.h);
        this.B.Bb()
    };
    aa.tj = function() {
        return this.C
    };
    var rb = function() {
        gb.call(this)
    };
    qa(rb, gb);
    rb.prototype.Pb = function() {
        return new qb(hb(this, 1))
    };

    function sb() {
        for (var a = tb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function ub() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var tb, vb;

    function wb(a) {
        tb = tb || ub();
        vb = vb || sb();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | k >> 6,
                q = k & 63;
            e || (q = 64, d || (p = 64));
            b.push(tb[m], tb[n], tb[p], tb[q])
        }
        return b.join("")
    }

    function xb(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = vb[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        tb = tb || ub();
        vb = vb || sb();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != k && (c += String.fromCharCode(g << 6 & 192 | k)))
        }
    };
    var yb = {},
        zb = function(a, b) {
            yb[a] = yb[a] || [];
            yb[a][b] = !0
        },
        Ab = function() {
            delete yb.GA4_EVENT
        },
        Bb = function(a) {
            var b = yb[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return wb(c.join("")).replace(/\.+$/, "")
        };
    var Cb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var Db, Eb = function() {
        if (void 0 === Db) {
            var a = null,
                b = ra.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ta,
                        createScript: ta,
                        createScriptURL: ta
                    })
                } catch (c) {
                    ra.console && ra.console.error(c.message)
                }
                Db = a
            } else Db = a
        }
        return Db
    };
    var Fb = function(a) {
        this.h = a
    };
    Fb.prototype.toString = function() {
        return this.h + ""
    };
    var Gb = function(a) {
            return a instanceof Fb && a.constructor === Fb ? a.h : "type_error:TrustedResourceUrl"
        },
        Hb = {},
        Ib = function(a) {
            var b = a,
                c = Eb(),
                d = c ? c.createScriptURL(b) : b;
            return new Fb(d, Hb)
        };
    var Jb = function(a) {
        this.h = a
    };
    Jb.prototype.toString = function() {
        return this.h.toString()
    };
    var Kb = function(a) {
            return a instanceof Jb && a.constructor === Jb ? a.h : "type_error:SafeUrl"
        },
        Lb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Mb = {},
        Nb = new Jb("about:invalid#zClosurez", Mb);
    var Ob, Pb;
    a: {
        for (var Qb = ["CLOSURE_FLAGS"], Rb = ra, Sb = 0; Sb < Qb.length; Sb++)
            if (Rb = Rb[Qb[Sb]], null == Rb) {
                Pb = null;
                break a
            }
        Pb = Rb
    }
    var Tb = Pb && Pb[610401301];
    Ob = null != Tb ? Tb : !1;

    function Ub() {
        var a = ra.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var Vb, Wb = ra.navigator;
    Vb = Wb ? Wb.userAgentData || null : null;

    function Xb(a) {
        return Ob ? Vb ? Vb.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }

    function Yb(a) {
        return -1 != Ub().indexOf(a)
    };

    function Zb() {
        return Ob ? !!Vb && 0 < Vb.brands.length : !1
    }

    function $b() {
        return Zb() ? !1 : Yb("Opera")
    }

    function ac() {
        return Yb("Firefox") || Yb("FxiOS")
    }

    function bc() {
        return Zb() ? Xb("Chromium") : (Yb("Chrome") || Yb("CriOS")) && !(Zb() ? 0 : Yb("Edge")) || Yb("Silk")
    };
    var cc = {},
        dc = function(a) {
            this.h = a
        };
    dc.prototype.toString = function() {
        return this.h.toString()
    };
    var ec = function(a) {
        return a instanceof dc && a.constructor === dc ? a.h : "type_error:SafeHtml"
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var fc = "function" === typeof URL;

    function gc(a) {
        var b;
        a: if (fc) {
            var c;
            try {
                c = new URL(a)
            } catch (g) {
                b = "https:";
                break a
            }
            b = c.protocol
        } else {
            var d;
            b: {
                var e = document.createElement("a");
                try {
                    e.href = a
                } catch (g) {
                    d = void 0;
                    break b
                }
                var f = e.protocol;d = ":" === f || "" === f ? "https:" : f
            }
            b = d
        }
        if ("javascript:" !== b) return a
    };
    var hc = {};
    var ic = function() {},
        jc = function(a) {
            this.h = a
        };
    qa(jc, ic);
    jc.prototype.toString = function() {
        return this.h
    };

    function kc(a, b) {
        var c = [new jc(lc[0].toLowerCase(), hc)];
        if (0 === c.length) throw Error("");
        var d = c.map(function(f) {
                var g;
                if (f instanceof jc) g = f.h;
                else throw Error("");
                return g
            }),
            e = b.toLowerCase();
        if (d.every(function(f) {
                return 0 !== e.indexOf(f)
            })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    }

    function mc(a) {
        var b = a.tagName;
        if ("SCRIPT" === b || "STYLE" === b) throw Error("");
    };

    function nc(a, b) {
        var c = b instanceof Jb ? Kb(b) : gc(b);
        void 0 !== c && (a.action = c)
    };
    var oc = ca([""]),
        pc = ea(["\x00"], ["\\0"]),
        qc = ea(["\n"], ["\\n"]),
        rc = ea(["\x00"], ["\\u0000"]);

    function sc(a) {
        return -1 === a.toString().indexOf("`")
    }
    sc(function(a) {
        return a(oc)
    }) || sc(function(a) {
        return a(pc)
    }) || sc(function(a) {
        return a(qc)
    }) || sc(function(a) {
        return a(rc)
    });
    var tc = function(a) {
        this.Ll = a
    };

    function uc(a) {
        return new tc(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var vc = [uc("data"), uc("http"), uc("https"), uc("mailto"), uc("ftp"), new tc(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function wc(a, b) {
        b = void 0 === b ? vc : b;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof tc && d.Ll(a)) return new Jb(a, Mb)
        }
    }

    function xc(a) {
        var b;
        b = void 0 === b ? vc : b;
        return wc(a, b) || Nb
    };
    var yc = "title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" "),
        zc = [
            ["dir", {
                zc: 3,
                conditions: new Map([
                    ["dir", new Set(["auto", "ltr", "rtl"])]
                ])
            }],
            ["async", {
                zc: 3,
                conditions: new Map([
                    ["async", new Set(["async"])]
                ])
            }],
            ["cite", {
                zc: 2
            }],
            ["loading", {
                zc: 3,
                conditions: new Map([
                    ["loading", new Set(["eager", "lazy"])]
                ])
            }],
            ["poster", {
                zc: 2
            }],
            ["target", {
                zc: 3,
                conditions: new Map([
                    ["target", new Set(["_self", "_blank"])]
                ])
            }]
        ];
    yc.concat(["class", "id"]);
    zc.concat([
        ["style", {
            zc: 4
        }]
    ]);
    "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER".split(" ").concat("STYLE TITLE INPUT TEXTAREA BUTTON LABEL".split(" "));
    yc.concat(["class", "id", "tabindex", "contenteditable", "name"]);
    zc.concat([
        ["style", {
            zc: 4
        }]
    ]);

    function Ac(a) {
        var b = a = Dc(a),
            c = Eb(),
            d = c ? c.createHTML(b) : b;
        return new dc(d, cc)
    }

    function Dc(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var z = window,
        B = document,
        Ec = navigator,
        Fc = B.currentScript && B.currentScript.src,
        Gc = function(a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        },
        Hc = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Ic = {
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Jc = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Kc(a, b, c) {
        b && l(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Lc = function(a, b, c, d, e) {
            var f = B.createElement("script");
            void 0 === d && (d = {});
            void 0 === d.async && (d.async = !0);
            Kc(f, d, Ic);
            f.type = "text/javascript";
            var g;
            g = Ib(Dc(a));
            f.src = Gb(g);
            var k, m, n, p = null == (n = (m = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(m, "script[nonce]");
            (k = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", k);
            Hc(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var q = B.getElementsByTagName("script")[0] || B.body || B.head;
                q.parentNode.insertBefore(f,
                    q)
            }
            return f
        },
        Mc = function() {
            if (Fc) {
                var a = Fc.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Nc = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var g = e,
                k = !1;
            g || (g = B.createElement("iframe"), k = !0);
            Kc(g, c, Jc);
            d && l(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            if (k) {
                var m = B.body && B.body.lastChild || B.body || B.head;
                m.parentNode.insertBefore(g, m)
            }
            Hc(g, b);
            void 0 !== a && (g.src = a);
            return g
        },
        Oc = function(a,
            b, c, d) {
            var e = new Image(1, 1);
            Kc(e, d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a
        },
        Pc = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Qc = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        E = function(a) {
            z.setTimeout(a, 0)
        },
        Rc = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Sc = function(a) {
            var b = a.innerText ||
                a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Tc = function(a) {
            var b = B.createElement("div"),
                c = b,
                d = Ac("A<div>" + a + "</div>");
            1 === c.nodeType && mc(c);
            c.innerHTML = ec(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        Uc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Vc = function(a) {
            var b;
            try {
                b = Ec.sendBeacon && Ec.sendBeacon(a)
            } catch (c) {
                zb("TAGGING", 15)
            }
            b || Oc(a)
        },
        Wc = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Xc = function(a) {
            var b = {
                headers: {
                    "Attribution-Reporting-Eligible": "trigger"
                },
                keepalive: !0,
                attributionReporting: {
                    eventSourceEligible: !0,
                    triggerEligible: !0
                }
            };
            try {
                z.fetch(a, b)
            } catch (c) {}
        },
        Yc = function() {
            var a = z.performance;
            if (a && Ba(a.now)) return a.now()
        },
        Zc = function() {
            return z.performance || void 0
        };
    var $c = function(a, b) {
            return H(this, a) && H(this, b)
        },
        ad = function(a, b) {
            return H(this, a) === H(this, b)
        },
        bd = function(a, b) {
            return H(this, a) || H(this, b)
        },
        cd = function(a, b) {
            a = H(this, a);
            b = H(this, b);
            return -1 < String(a).indexOf(String(b))
        },
        dd = function(a, b) {
            a = String(H(this, a));
            b = String(H(this, b));
            return a.substring(0, b.length) === b
        },
        ed = function(a, b) {
            a = H(this, a);
            b = H(this, b);
            switch (a) {
                case "pageLocation":
                    var c = z.location.href;
                    b instanceof rb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                    return c
            }
        };
    var fd = function(a, b) {
        gb.call(this);
        this.K = a;
        this.W = b
    };
    qa(fd, gb);
    fd.prototype.toString = function() {
        return this.K
    };
    fd.prototype.Pb = function() {
        return new qb(hb(this, 1))
    };
    fd.prototype.invoke = function(a, b) {
        return this.W.apply(new gd(this, a), Array.prototype.slice.call(arguments, 1))
    };
    fd.prototype.h = function(a, b) {
        try {
            return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    };
    var gd = function(a, b) {
            this.B = a;
            this.h = b
        },
        H = function(a, b) {
            return Da(b) ? eb(a.h, b) : b
        },
        J = function(a) {
            return a.B.K
        };
    var hd = function() {
        this.map = new Map
    };
    hd.prototype.set = function(a, b) {
        this.map.set(a, b)
    };
    hd.prototype.get = function(a) {
        return this.map.get(a)
    };
    var jd = function() {
        this.keys = [];
        this.values = []
    };
    jd.prototype.set = function(a, b) {
        this.keys.push(a);
        this.values.push(b)
    };
    jd.prototype.get = function(a) {
        var b = this.keys.indexOf(a);
        if (-1 < b) return this.values[b]
    };

    function kd() {
        try {
            return Map ? new hd : new jd
        } catch (a) {
            return new jd
        }
    };
    var ld = function(a) {
        if (a instanceof ld) return a;
        this.h = a
    };
    ld.prototype.toString = function() {
        return String(this.h)
    };
    var nd = function(a) {
        gb.call(this);
        this.h = a;
        this.set("then", md(this));
        this.set("catch", md(this, !0));
        this.set("finally", md(this, !1, !0))
    };
    qa(nd, rb);
    var md = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new fd("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof fd || (d = void 0);
            e instanceof fd || (e = void 0);
            var f = za(this.h),
                g = function(m) {
                    return function(n) {
                        return c ? (m.invoke(f), a.h) : m.invoke(f, n)
                    }
                },
                k = a.h.then(d && g(d), e && g(e));
            return new nd(k)
        })
    };
    var pd = function(a, b, c) {
            var d = kd(),
                e = function(g, k) {
                    for (var m = hb(g, 1), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]))
                },
                f = function(g) {
                    var k = d.get(g);
                    if (k) return k;
                    if (g instanceof qb) {
                        var m = [];
                        d.set(g, m);
                        for (var n = g.Pb(), p = 0; p < n.length(); p++) m[n.get(p)] = f(g.get(n.get(p)));
                        return m
                    }
                    if (g instanceof nd) return g.h;
                    if (g instanceof rb) {
                        var q = {};
                        d.set(g, q);
                        e(g, q);
                        return q
                    }
                    if (g instanceof fd) {
                        var r = function() {
                            for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++) u[v] = od(u[v], b, c);
                            var w = new xa(b ? b.W :
                                new wa);
                            b && (w.h = b.h);
                            return f(g.invoke.apply(g, [w].concat(u)))
                        };
                        d.set(g, r);
                        e(g, r);
                        return r
                    }
                    var t = !1;
                    switch (c) {
                        case 1:
                            t = !0;
                            break;
                        case 2:
                            t = !1;
                            break;
                        case 3:
                            t = !1;
                            break;
                        default:
                    }
                    if (g instanceof ld && t) return g.h;
                    switch (typeof g) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                            return g;
                        case "object":
                            if (null === g) return null
                    }
                };
            return f(a)
        },
        od = function(a, b, c) {
            var d = kd(),
                e = function(g,
                    k) {
                    for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]))
                },
                f = function(g) {
                    var k = d.get(g);
                    if (k) return k;
                    if (Da(g) || Ka(g)) {
                        var m = new qb([]);
                        d.set(g, m);
                        for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
                        return m
                    }
                    if (lb(g)) {
                        var p = new rb;
                        d.set(g, p);
                        e(g, p);
                        return p
                    }
                    if ("function" === typeof g) {
                        var q = new fd("", function(x) {
                            for (var y = Array.prototype.slice.call(arguments, 0), A = 0; A < y.length; A++) y[A] = pd(H(this, y[A]), b, c);
                            return f((0, this.h.K)(g, g, y))
                        });
                        d.set(g, q);
                        e(g, q);
                        return q
                    }
                    var v = typeof g;
                    if (null === g || "string" === v || "number" === v || "boolean" === v) return g;
                    var w = !1;
                    switch (c) {
                        case 1:
                            w = !0;
                            break;
                        case 2:
                            w = !1;
                            break;
                        default:
                    }
                    if (void 0 !== g && w) return new ld(g)
                };
            return f(a)
        };
    var qd = function() {
        var a = !1;
        return a
    };
    var rd = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof qb)
                    for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
                else c.push(arguments[e]);
            return new qb(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
            return new qb(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.invoke(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f =
                    e; f < d; f++)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
            return new qb(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a,
            b) {
            return this.push.apply(this, Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var k = f; k < d; k++) this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (void 0 !== c) e = c;
            else {
                if (0 ===
                    d) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var k = f; 0 <= k; k--) this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
            return e
        },
        reverse: function() {
            for (var a = nb(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new qb(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = nb(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.invoke(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments, 1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var sd = function(a) {
        var b;
        b = Error.call(this, a);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack)
    };
    qa(sd, Error);
    var td = {
            charAt: 1,
            concat: 1,
            indexOf: 1,
            lastIndexOf: 1,
            match: 1,
            replace: 1,
            search: 1,
            slice: 1,
            split: 1,
            substring: 1,
            toLowerCase: 1,
            toLocaleLowerCase: 1,
            toString: 1,
            toUpperCase: 1,
            toLocaleUpperCase: 1,
            trim: 1
        },
        ud = new ua("break"),
        vd = new ua("continue"),
        wd = function(a, b) {
            return H(this, a) + H(this, b)
        },
        xd = function(a, b) {
            return H(this, a) && H(this, b)
        },
        yd = function(a, b, c) {
            a = H(this, a);
            b = H(this, b);
            c = H(this, c);
            if (!(c instanceof qb)) throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a) {
                var d = "TypeError: Can't read property " +
                    b + " of " + a + ".";
                if (qd()) throw new sd(d);
                throw Error(d);
            }
            var e = "number" === typeof a;
            if ("boolean" === typeof a || e) {
                if ("toString" === b) {
                    if (e && c.length()) {
                        var f = pd(c.get(0));
                        try {
                            return a.toString(f)
                        } catch (y) {}
                    }
                    return a.toString()
                }
                var g = "TypeError: " + a + "." + b + " is not a function.";
                if (qd()) throw new sd(g);
                throw Error(g);
            }
            if ("string" === typeof a) {
                if (td.hasOwnProperty(b)) {
                    var k = 2;
                    k = 1;
                    var m = pd(c, void 0, k);
                    return od(a[b].apply(a, m), this.h)
                }
                var n = "TypeError: " + b + " is not a function";
                if (qd()) throw new sd(n);
                throw Error(n);
            }
            if (a instanceof qb) {
                if (a.has(b)) {
                    var p = a.get(b);
                    if (p instanceof fd) {
                        var q = nb(c);
                        q.unshift(this.h);
                        return p.invoke.apply(p, q)
                    }
                    var r = "TypeError: " + b + " is not a function";
                    if (qd()) throw new sd(r);
                    throw Error(r);
                }
                if (0 <= rd.supportedMethods.indexOf(b)) {
                    var t = nb(c);
                    t.unshift(this.h);
                    return rd[b].apply(a, t)
                }
            }
            if (a instanceof fd || a instanceof rb) {
                if (a.has(b)) {
                    var u = a.get(b);
                    if (u instanceof fd) {
                        var v = nb(c);
                        v.unshift(this.h);
                        return u.invoke.apply(u, v)
                    }
                    var w = "TypeError: " + b + " is not a function";
                    if (qd()) throw new sd(w);
                    throw Error(w);
                }
                if ("toString" === b) return a instanceof fd ? a.K : a.toString();
                if ("hasOwnProperty" === b) return a.has.apply(a, nb(c))
            }
            if (a instanceof ld && "toString" === b) return a.toString();
            var x = "TypeError: Object has no '" + b + "' property.";
            if (qd()) throw new sd(x);
            throw Error(x);
        },
        zd = function(a, b) {
            a = H(this, a);
            if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
            var c = this.h;
            if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
            var d = H(this, b);
            c.set(a, d);
            return d
        },
        Ad = function(a) {
            var b = za(this.h),
                c = db(b, Array.prototype.slice.apply(arguments));
            if (c instanceof ua) return c
        },
        Bd = function() {
            return ud
        },
        Cd = function(a) {
            for (var b = H(this, a), c = 0; c < b.length; c++) {
                var d = H(this, b[c]);
                if (d instanceof ua) return d
            }
        },
        Dd = function(a) {
            for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ("string" === typeof d) {
                    var e = H(this, arguments[c + 1]);
                    ya(b, d, e, !0)
                }
            }
        },
        Ed = function() {
            return vd
        },
        Fd = function(a, b) {
            return new ua(a, H(this, b))
        },
        Gd = function(a, b, c) {
            var d = new qb;
            b = H(this, b);
            for (var e = 0; e < b.length; e++) d.push(b[e]);
            var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.h.add(a, H(this, f))
        },
        Hd = function(a, b) {
            return H(this, a) / H(this, b)
        },
        Id = function(a, b) {
            a = H(this, a);
            b = H(this, b);
            var c = a instanceof ld,
                d = b instanceof ld;
            return c || d ? c && d ? a.h == b.h : !1 : a == b
        },
        Jd = function(a) {
            for (var b, c = 0; c < arguments.length; c++) b = H(this, arguments[c]);
            return b
        };

    function Kd(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = db(f, d);
            if (g instanceof ua) {
                if ("break" === g.h) break;
                if ("return" === g.h) return g
            }
        }
    }

    function Ld(a, b, c) {
        if ("string" === typeof b) return Kd(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof rb || b instanceof qb || b instanceof fd) {
            var d = b.Pb(),
                e = d.length();
            return Kd(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var Md = function(a, b, c) {
            a = H(this, a);
            b = H(this, b);
            c = H(this, c);
            var d = this.h;
            return Ld(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        Nd = function(a, b, c) {
            a = H(this, a);
            b = H(this, b);
            c = H(this, c);
            var d = this.h;
            return Ld(function(e) {
                var f = za(d);
                ya(f, a, e, !0);
                return f
            }, b, c)
        },
        Od = function(a, b, c) {
            a = H(this, a);
            b = H(this, b);
            c = H(this, c);
            var d = this.h;
            return Ld(function(e) {
                var f = za(d);
                f.add(a, e);
                return f
            }, b, c)
        },
        Qd = function(a, b, c) {
            a = H(this, a);
            b = H(this, b);
            c = H(this, c);
            var d = this.h;
            return Pd(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        Rd =
        function(a, b, c) {
            a = H(this, a);
            b = H(this, b);
            c = H(this, c);
            var d = this.h;
            return Pd(function(e) {
                var f = za(d);
                ya(f, a, e, !0);
                return f
            }, b, c)
        },
        Sd = function(a, b, c) {
            a = H(this, a);
            b = H(this, b);
            c = H(this, c);
            var d = this.h;
            return Pd(function(e) {
                var f = za(d);
                f.add(a, e);
                return f
            }, b, c)
        };

    function Pd(a, b, c) {
        if ("string" === typeof b) return Kd(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof qb) return Kd(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        if (qd()) throw new sd("The value is not iterable.");
        throw new TypeError("The value is not iterable.");
    }
    var Td = function(a, b, c, d) {
            function e(p, q) {
                for (var r = 0; r < f.length(); r++) {
                    var t = f.get(r);
                    q.add(t, p.get(t))
                }
            }
            var f = H(this, a);
            if (!(f instanceof qb)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
            var g = this.h;
            d = H(this, d);
            var k = za(g);
            for (e(g, k); eb(k, b);) {
                var m = db(k, d);
                if (m instanceof ua) {
                    if ("break" === m.h) break;
                    if ("return" === m.h) return m
                }
                var n = za(g);
                e(k, n);
                eb(n, c);
                k = n
            }
        },
        Ud = function(a, b, c) {
            var d = this.h,
                e = H(this, b);
            if (!(e instanceof qb)) throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            return new fd(a, function() {
                return function(g) {
                    var k = za(d);
                    void 0 === k.h && (k.h = this.h.h);
                    for (var m = Array.prototype.slice.call(arguments, 0), n = 0; n < m.length; n++)
                        if (m[n] = H(this, m[n]), m[n] instanceof ua) return m[n];
                    for (var p = e.get("length"), q = 0; q < p; q++) q < m.length ? k.add(e.get(q), m[q]) : k.add(e.get(q), void 0);
                    k.add("arguments", new qb(m));
                    var r = db(k, f);
                    if (r instanceof ua) return "return" === r.h ? r.B : r
                }
            }())
        },
        Vd = function(a) {
            a = H(this, a);
            var b = this.h,
                c = !1;
            if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
            return b.get(a)
        },
        Wd = function(a, b) {
            var c;
            a = H(this, a);
            b = H(this, b);
            if (void 0 === a || null === a) {
                var d = "TypeError: cannot access property of " + a + ".";
                if (qd()) throw new sd(d);
                throw Error(d);
            }
            if (a instanceof rb || a instanceof qb || a instanceof fd) c = a.get(b);
            else if ("string" === typeof a) "length" === b ? c = a.length : pb(b) && (c = a[b]);
            else if (a instanceof ld) return;
            return c
        },
        Xd =
        function(a, b) {
            return H(this, a) > H(this, b)
        },
        Yd = function(a, b) {
            return H(this, a) >= H(this, b)
        },
        Zd = function(a, b) {
            a = H(this, a);
            b = H(this, b);
            a instanceof ld && (a = a.h);
            b instanceof ld && (b = b.h);
            return a === b
        },
        $d = function(a, b) {
            return !Zd.call(this, a, b)
        },
        ae = function(a, b, c) {
            var d = [];
            H(this, a) ? d = H(this, b) : c && (d = H(this, c));
            var e = db(this.h, d);
            if (e instanceof ua) return e
        },
        be = function(a, b) {
            return H(this, a) < H(this, b)
        },
        ce = function(a, b) {
            return H(this, a) <= H(this, b)
        },
        de = function(a) {
            for (var b = new qb, c = 0; c < arguments.length; c++) {
                var d =
                    H(this, arguments[c]);
                b.push(d)
            }
            return b
        },
        ee = function(a) {
            for (var b = new rb, c = 0; c < arguments.length - 1; c += 2) {
                var d = H(this, arguments[c]) + "",
                    e = H(this, arguments[c + 1]);
                b.set(d, e)
            }
            return b
        },
        fe = function(a, b) {
            return H(this, a) % H(this, b)
        },
        ge = function(a, b) {
            return H(this, a) * H(this, b)
        },
        he = function(a) {
            return -H(this, a)
        },
        ie = function(a) {
            return !H(this, a)
        },
        je = function(a, b) {
            return !Id.call(this, a, b)
        },
        ke = function() {
            return null
        },
        le = function(a, b) {
            return H(this, a) || H(this, b)
        },
        me = function(a, b) {
            var c = H(this, a);
            H(this, b);
            return c
        },
        ne = function(a) {
            return H(this, a)
        },
        oe = function(a) {
            return Array.prototype.slice.apply(arguments)
        },
        pe = function(a) {
            return new ua("return", H(this, a))
        },
        qe = function(a, b, c) {
            a = H(this, a);
            b = H(this, b);
            c = H(this, c);
            if (null === a || void 0 === a) {
                var d = "TypeError: Can't set property " + b + " of " + a + ".";
                if (qd()) throw new sd(d);
                throw Error(d);
            }(a instanceof fd || a instanceof qb || a instanceof rb) && a.set(b, c);
            return c
        },
        re = function(a, b) {
            return H(this, a) - H(this, b)
        },
        se = function(a, b, c) {
            a = H(this, a);
            var d = H(this, b),
                e = H(this, c);
            if (!Da(d) ||
                !Da(e)) throw Error("Error: Malformed switch instruction.");
            for (var f, g = !1, k = 0; k < d.length; k++)
                if (g || a === H(this, d[k]))
                    if (f = H(this, e[k]), f instanceof ua) {
                        var m = f.h;
                        if ("break" === m) return;
                        if ("return" === m || "continue" === m) return f
                    } else g = !0;
            if (e.length === d.length + 1 && (f = H(this, e[e.length - 1]), f instanceof ua && ("return" === f.h || "continue" === f.h))) return f
        },
        ve = function(a, b, c) {
            return H(this, a) ? H(this, b) : H(this, c)
        },
        we = function(a) {
            a = H(this, a);
            return a instanceof fd ? "function" : typeof a
        },
        xe = function(a) {
            for (var b =
                    this.h, c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                "string" !== typeof d || b.add(d, void 0)
            }
        },
        ye = function(a, b, c, d) {
            var e = H(this, d);
            if (H(this, c)) {
                var f = db(this.h, e);
                if (f instanceof ua) {
                    if ("break" === f.h) return;
                    if ("return" === f.h) return f
                }
            }
            for (; H(this, a);) {
                var g = db(this.h, e);
                if (g instanceof ua) {
                    if ("break" === g.h) break;
                    if ("return" === g.h) return g
                }
                H(this, b)
            }
        },
        ze = function(a) {
            return ~Number(H(this, a))
        },
        Ae = function(a, b) {
            return Number(H(this, a)) << Number(H(this, b))
        },
        Be = function(a, b) {
            return Number(H(this, a)) >> Number(H(this,
                b))
        },
        Ce = function(a, b) {
            return Number(H(this, a)) >>> Number(H(this, b))
        },
        De = function(a, b) {
            return Number(H(this, a)) & Number(H(this, b))
        },
        Ee = function(a, b) {
            return Number(H(this, a)) ^ Number(H(this, b))
        },
        Fe = function(a, b) {
            return Number(H(this, a)) | Number(H(this, b))
        },
        Ge = function() {},
        He = function(a, b, c, d, e) {
            var f = !0;
            try {
                var g = H(this, c);
                if (g instanceof ua) return g
            } catch (q) {
                if (!(q instanceof sd && a)) throw f = q instanceof sd, q;
                var k = za(this.h);
                k.add(b, new ld(q));
                var m = H(this, d),
                    n = db(k, m);
                if (n instanceof ua) return n
            } finally {
                if (f &&
                    void 0 !== e) {
                    var p = H(this, e);
                    if (p instanceof ua) return p
                }
            }
        };
    var Je = function() {
        this.h = new fb;
        Ie(this)
    };
    Je.prototype.execute = function(a) {
        return this.h.B(a)
    };
    var Ie = function(a) {
        var b = function(c, d) {
            var e = new fd(String(c), d);
            e.Bb();
            a.h.h.set(String(c), e)
        };
        b("map", ee);
        b("and", $c);
        b("contains", cd);
        b("equals", ad);
        b("or", bd);
        b("startsWith", dd);
        b("variable", ed)
    };
    var Le = function() {
        this.h = new fb;
        Ke(this)
    };
    Le.prototype.execute = function(a) {
        return Me(this.h.B(a))
    };
    var Ne = function(a, b, c) {
            return Me(a.h.F(b, c))
        },
        Ke = function(a) {
            var b = function(c, d) {
                var e = String(c),
                    f = new fd(e, d);
                f.Bb();
                a.h.h.set(e, f)
            };
            b(0, wd);
            b(1, xd);
            b(2, yd);
            b(3, zd);
            b(56, De);
            b(57, Ae);
            b(58, ze);
            b(59, Fe);
            b(60, Be);
            b(61, Ce);
            b(62, Ee);
            b(53, Ad);
            b(4, Bd);
            b(5, Cd);
            b(52, Dd);
            b(6, Ed);
            b(49, Fd);
            b(7, de);
            b(8, ee);
            b(9, Cd);
            b(50, Gd);
            b(10, Hd);
            b(12, Id);
            b(13, Jd);
            b(51, Ud);
            b(47, Md);
            b(54, Nd);
            b(55, Od);
            b(63, Td);
            b(64, Qd);
            b(65, Rd);
            b(66, Sd);
            b(15, Vd);
            b(16, Wd);
            b(17, Wd);
            b(18, Xd);
            b(19, Yd);
            b(20, Zd);
            b(21, $d);
            b(22, ae);
            b(23, be);
            b(24, ce);
            b(25, fe);
            b(26, ge);
            b(27, he);
            b(28, ie);
            b(29, je);
            b(45, ke);
            b(30, le);
            b(32, me);
            b(33, me);
            b(34, ne);
            b(35, ne);
            b(46, oe);
            b(36, pe);
            b(43, qe);
            b(37, re);
            b(38, se);
            b(39, ve);
            b(67, He);
            b(40, we);
            b(44, Ge);
            b(41, xe);
            b(42, ye)
        };

    function Me(a) {
        if (a instanceof ua || a instanceof fd || a instanceof qb || a instanceof rb || a instanceof ld || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a
    };

    function Oe(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    }

    function Pe(a) {
        switch (a) {
            case 1:
                return "G";
            case 3:
                return "g";
            case 2:
                return "D";
            case 4:
                return "d";
            case 0:
                return "g";
            default:
                return "g"
        }
    }

    function Qe(a, b) {
        var c = a[1] || 0,
            d = a[2] || 0;
        switch (b) {
            case 0:
                return "G1" + Oe(c) + Oe(d);
            case 1:
                return "G2" + Pe(c) + Pe(d);
            default:
                return "g1--"
        }
    };
    var Re = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Sj: a("consent"),
            Th: a("convert_case_to"),
            Uh: a("convert_false_to"),
            Vh: a("convert_null_to"),
            Wh: a("convert_true_to"),
            Xh: a("convert_undefined_to"),
            Mm: a("debug_mode_metadata"),
            xa: a("function"),
            Pg: a("instance_name"),
            Bk: a("live_only"),
            Ck: a("malware_disabled"),
            Dk: a("metadata"),
            Gk: a("original_activity_id"),
            Tm: a("original_vendor_template_id"),
            Sm: a("once_on_load"),
            Fk: a("once_per_event"),
            Si: a("once_per_load"),
            Xm: a("priority_override"),
            Ym: a("respected_consent_types"),
            Wi: a("setup_tags"),
            oe: a("tag_id"),
            bj: a("teardown_tags")
        }
    }();
    var Se = [],
        Te = {
            "\x00": "&#0;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\v": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            "-": "&#45;",
            "/": "&#47;",
            "=": "&#61;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        Ue = function(a) {
            return Te[a]
        },
        Ve = /[\x00\x22\x26\x27\x3c\x3e]/g;
    var Ze = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
        $e = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\v": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            "&": "\\x26",
            "'": "\\x27",
            "/": "\\/",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "\\": "\\\\",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            $: "\\x24",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            ":": "\\x3a",
            "?": "\\x3f",
            "[": "\\x5b",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d"
        },
        af = function(a) {
            return $e[a]
        };
    Se[8] = function(a) {
        if (null == a) return " null ";
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(Ze, af) + "'"
        }
    };
    var jf = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        kf = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\v": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        },
        lf = function(a) {
            return kf[a]
        };
    Se[16] = function(a) {
        return a
    };
    var nf = [],
        of = function(a) {
            return void 0 == nf[a] ? !1 : nf[a]
        };
    var pf;
    var qf = [],
        sf = [],
        tf = [],
        uf = [],
        vf = [],
        wf = {},
        xf, yf, zf = function(a) {
            yf = yf || a
        },
        Af = function(a) {},
        Bf, Cf = [],
        Df = function(a, b) {
            var c = {};
            c[Re.xa] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        Ef = function(a,
            b) {
            var c = a[Re.xa],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = wf[c],
                f = b && 2 === b.type && d.Fh && e && -1 !== Cf.indexOf(c),
                g = {},
                k = {},
                m;
            for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && d && d.ij && d.ij(a[m]), e && (g[m] = a[m]), !e || f) && (k[m.substr(4)] = a[m]);
            e && d && d.gj && (g.vtp_gtmCachedValues = d.gj);
            if (b) {
                if (null == b.name) {
                    var n;
                    a: {
                        var p = b.index;
                        if (null == p) n = "";
                        else {
                            var q;
                            switch (b.type) {
                                case 2:
                                    q = qf[p];
                                    break;
                                case 1:
                                    q = uf[p];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var r = q && q[Re.Pg];
                            n = r ? String(r) : ""
                        }
                    }
                    b.name = n
                }
                e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name)
            }
            var t, u;
            e && (t = e(g));
            if (!e || f) u = pf(c, k, b);
            f && d && (ob(t) ? typeof t !== typeof u && d.Fh(d.id, c) : t !== u && d.Fh(d.id, c));
            return e ? t : u
        },
        Gf = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Ff(a[e], b, c));
            return d
        },
        Ff = function(a, b, c) {
            if (Da(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Ff(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = qf[f];
                        if (!g || b.mh(g)) return;
                        c[f] = !0;
                        var k = String(g[Re.Pg]);
                        try {
                            var m = Gf(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = Ef(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: k
                            });
                            Bf && (d = Bf.Rk(d, m))
                        } catch (y) {
                            b.vj && b.vj(y, Number(f), k), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[Ff(a[n], b, c)] = Ff(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = Ff(a[q], b, c);
                            yf && (p = p || yf.Il(r));
                            d.push(r)
                        }
                        return yf && p ? yf.Uk(d) : d.join("");
                    case "escape":
                        d =
                            Ff(a[1], b, c);
                        if (yf && Da(a[1]) && "macro" === a[1][0] && yf.Jl(a)) return yf.hm(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) Se[a[t]] && (d = Se[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!uf[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            mj: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v[Re.xa] = a[1];
                        var w = Hf(v, b, c),
                            x = !!a[4];
                        return x || 2 !== w ? x !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Hf = function(a, b, c) {
            try {
                return xf(Gf(a,
                    b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        },
        If = function(a) {
            var b = a[Re.xa];
            if (!b) throw Error("Error: No function name given for function call.");
            return !!wf[b]
        };
    var Jf = function(a, b, c) {
        var d;
        d = Error.call(this, c);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.h = a
    };
    qa(Jf, Error);

    function Kf(a, b) {
        if (Da(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) Kf(a[c], b[c])
        }
    };
    var Lf = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.Zl = a;
        this.B = b;
        this.h = []
    };
    qa(Lf, Error);
    var Nf = function() {
        return function(a, b) {
            a instanceof Lf || (a = new Lf(a, Mf));
            b && a.h.push(b);
            throw a;
        }
    };

    function Mf(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--) Ca(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };
    var Qf = function(a) {
            function b(r) {
                for (var t = 0; t < r.length; t++) d[r[t]] = !0
            }
            for (var c = [], d = [], e = Of(a), f = 0; f < sf.length; f++) {
                var g = sf[f],
                    k = Pf(g, e);
                if (k) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || [])
                } else null === k && b(g.block || []);
            }
            for (var p = [], q = 0; q < uf.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        Pf = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var k = b(f[g]);
                if (2 === k) return null;
                if (1 === k) return !1
            }
            return !0
        },
        Of = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Hf(tf[c], a));
                return b[c]
            }
        };
    var Rf = {
        Rk: function(a, b) {
            b[Re.Th] && "string" === typeof a && (a = 1 == b[Re.Th] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Re.Vh) && null === a && (a = b[Re.Vh]);
            b.hasOwnProperty(Re.Xh) && void 0 === a && (a = b[Re.Xh]);
            b.hasOwnProperty(Re.Wh) && !0 === a && (a = b[Re.Wh]);
            b.hasOwnProperty(Re.Uh) && !1 === a && (a = b[Re.Uh]);
            return a
        }
    };
    var Sf = function() {
        this.h = {}
    };

    function Tf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e].call(void 0, b, c, d), g += "."
                } catch (k) {
                    g = "string" === typeof k ? g + (": " + k) : k instanceof Error ? g + (": " + k.message) : g + "."
                }
                if (!f) throw new Jf(c, d, g);
            }
    }

    function Uf(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.h[d],
                    f = a.h.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Tf(e, b, d, g);
                    Tf(f, b, d, g)
                }
            }
        }
    };
    var Yf = function() {
            var a = data.permissions || {},
                b = Vf.ctid,
                c = this;
            this.B = new Sf;
            this.h = {};
            var d = {},
                e = Uf(this.B, b, function() {
                    var f = arguments[0];
                    return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
                });
            l(a, function(f, g) {
                var k = {};
                l(g, function(m, n) {
                    var p = Wf(m, n);
                    k[m] = p.assert;
                    d[m] || (d[m] = p.J)
                });
                c.h[f] = function(m, n) {
                    var p = k[m];
                    if (!p) throw Xf(m, {}, "The requested permission " + m + " is not configured.");
                    var q = Array.prototype.slice.call(arguments, 0);
                    p.apply(void 0, q);
                    e.apply(void 0, q)
                }
            })
        },
        $f = function(a) {
            return Zf.h[a] || function() {}
        };

    function Wf(a, b) {
        var c = Df(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Xf;
        try {
            return Ef(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new Jf(e, {}, "Permission " + e + " is unknown.");
                },
                J: function() {
                    for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }

    function Xf(a, b, c) {
        return new Jf(a, b, c)
    };
    var ag = !1;
    var bg = {};
    bg.Jm = Ma('');
    bg.Wk = Ma('');
    var cg = ag,
        dg = bg.Wk,
        eg = bg.Jm;
    var pg = /^[a-z$_][\w$]*$/i,
        qg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i,
        rg = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = a,
                    e = b[c];
                if (!qg.exec(e)) throw Error("Invalid key wildcard");
                var f = e.indexOf(".*"),
                    g = -1 !== f && f === e.length - 2,
                    k = g ? e.slice(0, e.length - 2) : e,
                    m;
                a: if (0 === d.length) m = !1;
                    else {
                        for (var n = d.split("."), p = 0; p < n.length; p++)
                            if (!pg.exec(n[p])) {
                                m = !1;
                                break a
                            }
                        m = !0
                    }
                if (!m || k.length > d.length || !g && d.length != e.length ? 0 : g ? 0 === d.indexOf(k) && (d === k || "." == d.charAt(k.length)) : d === k) return !0
            }
            return !1
        };
    var sg = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function tg(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var ug = new Ha;

    function vg(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = ug.get(e);
            f || (f = new RegExp(b, d), ug.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function wg(a, b) {
        return 0 <= String(a).indexOf(String(b))
    }

    function xg(a, b) {
        return String(a) === String(b)
    }

    function yg(a, b) {
        return Number(a) >= Number(b)
    }

    function zg(a, b) {
        return Number(a) <= Number(b)
    }

    function Ag(a, b) {
        return Number(a) > Number(b)
    }

    function Bg(a, b) {
        return Number(a) < Number(b)
    }

    function Cg(a, b) {
        return 0 === String(a).indexOf(String(b))
    };
    var Dg = function(a, b) {
            return a.length && b.length && a.lastIndexOf(b) === a.length - b.length
        },
        Eg = function(a, b) {
            var c = "*" === b.charAt(b.length - 1) || "/" === b || "/*" === b;
            Dg(b, "/*") && (b = b.slice(0, -2));
            Dg(b, "?") && (b = b.slice(0, -1));
            var d = b.split("*");
            if (!c && 1 === d.length) return a === d[0];
            for (var e = -1, f = 0; f < d.length; f++) {
                var g = d[f];
                if (g) {
                    e = a.indexOf(g, e);
                    if (-1 === e || 0 === f && 0 !== e) return !1;
                    e += g.length
                }
            }
            if (c || e === a.length) return !0;
            var k = d[d.length - 1];
            return a.lastIndexOf(k) === a.length - k.length
        },
        Fg = /^[a-z0-9-]+$/i,
        Gg = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
        Ig = function(a, b) {
            var c;
            if (!(c = !Hg(a))) {
                var d;
                a: {
                    var e = a.hostname.split(".");
                    if (2 > e.length) d = !1;
                    else {
                        for (var f = 0; f < e.length; f++)
                            if (!Fg.exec(e[f])) {
                                d = !1;
                                break a
                            }
                        d = !0
                    }
                }
                c = !d
            }
            if (c) return !1;
            for (var g = 0; g < b.length; g++) {
                var k;
                var m = a,
                    n = b[g];
                if (!Gg.exec(n)) throw Error("Invalid Wildcard");
                var p = n.slice(8),
                    q = p.slice(0, p.indexOf("/")),
                    r;
                var t = m.hostname,
                    u = q;
                if (0 !== u.indexOf("*.")) r = t.toLowerCase() === u.toLowerCase();
                else {
                    u = u.slice(2);
                    var v = t.toLowerCase().indexOf(u.toLowerCase());
                    r = -1 === v ? !1 : t.length === u.length ?
                        !0 : t.length !== u.length + v ? !1 : "." === t[v - 1]
                }
                if (r) {
                    var w = p.slice(p.indexOf("/"));
                    k = Eg(m.pathname + m.search, w) ? !0 : !1
                } else k = !1;
                if (k) return !0
            }
            return !1
        },
        Hg = function(a) {
            return "https:" === a.protocol && (!a.port || "443" === a.port)
        };
    var Jg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function Kg(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a << 2 | b]
    };
    var Lg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
        Og = {
            Fn: "function",
            PixieMap: "Object",
            List: "Array"
        },
        K = function(a, b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = Lg.exec(b[d]);
                if (!e) throw Error("Internal Error in " + a);
                var f = e[1],
                    g = "!" === e[2],
                    k = e[3],
                    m = c[d];
                if (null == m) {
                    if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
                } else if ("*" !== k) {
                    var n = typeof m;
                    m instanceof fd ? n = "Fn" : m instanceof qb ? n = "List" : m instanceof rb ? n = "PixieMap" : m instanceof ld && (n =
                        "OpaqueValue");
                    if (n != k) throw Error("Error in " + a + ". Argument " + f + " has type " + (Og[n] || n) + ", which does not match required type " + (Og[k] || k) + ".");
                }
            }
        };

    function Pg(a) {
        return "" + a
    }

    function Qg(a, b) {
        var c = [];
        return c
    };
    var Rg = function(a, b) {
            var c = new fd(a, function() {
                for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = H(this, d[e]);
                try {
                    return b.apply(this, d)
                } catch (g) {
                    if (qd()) throw new sd(g.message);
                    throw g;
                }
            });
            c.Bb();
            return c
        },
        Sg = function(a, b) {
            var c = new rb,
                d;
            for (d in b)
                if (b.hasOwnProperty(d)) {
                    var e = b[d];
                    Ba(e) ? c.set(d, Rg(a + "_" + d, e)) : lb(e) ? c.set(d, Sg(a + "_" + d,
                        e)) : (Ca(e) || h(e) || "boolean" === typeof e) && c.set(d, e)
                }
            c.Bb();
            return c
        };
    var Tg = function(a, b) {
        K(J(this), ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new rb;
        return d = Sg("AssertApiSubject", c)
    };
    var Ug = function(a, b) {
        K(J(this), ["actual:?*", "message:?string"], arguments);
        if (a instanceof nd) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {},
            d = new rb;
        return d = Sg("AssertThatSubject", c)
    };

    function Vg(a) {
        return function() {
            for (var b = [], c = this.h, d = 0; d < arguments.length; ++d) b.push(pd(arguments[d], c));
            return od(a.apply(null, b))
        }
    }
    var Xg = function() {
        for (var a = Math, b = Wg, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Vg(a[e].bind(a)))
        }
        return c
    };
    var Yg = function(a) {
        var b;
        return b
    };
    var Zg = function(a) {
        var b;
        return b
    };
    var $g = function(a) {
        try {
            return encodeURI(a)
        } catch (b) {}
    };
    var ah = function(a) {
        try {
            return encodeURIComponent(a)
        } catch (b) {}
    };

    function bh(a, b) {
        var c = !1;
        return c
    }
    bh.D = "internal.evaluateBooleanExpression";
    var gh = function(a) {
        K(J(this), ["message:?string"], arguments);
    };
    var hh = function(a, b) {
        K(J(this), ["min:!number", "max:!number"], arguments);
        return Ga(a, b)
    };
    var ih = function() {
        return (new Date).getTime()
    };
    var jh = function(a) {
        if (null === a) return "null";
        if (a instanceof qb) return "array";
        if (a instanceof fd) return "function";
        if (a instanceof ld) {
            a = a.h;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var kh = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (cg || eg) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return od(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(pd(c))
            })
        }
    };
    var lh = function(a) {
        return La(pd(a, this.h))
    };
    var mh = function(a) {
        return Number(pd(a, this.h))
    };
    var nh = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var oh = function(a, b, c) {
        var d = null,
            e = !1;
        K(J(this), ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"], arguments);
        d = new rb;
        for (var f = 0; f < a.length(); f++) {
            var g = a.get(f);
            g instanceof rb && g.has(b) && g.has(c) && (d.set(g.get(b), g.get(c)), e = !0)
        }
        return e ? d : null
    };
    var Wg = "floor ceil round max min abs pow sqrt".split(" ");
    var ph = function() {
            var a = {};
            return {
                nl: function(b) {
                    return a.hasOwnProperty(b) ? a[b] : void 0
                },
                Bm: function(b, c) {
                    a[b] = c
                },
                reset: function() {
                    a = {}
                }
            }
        },
        qh = function(a, b) {
            return function() {
                var c = Array.prototype.slice.call(arguments, 0);
                c.unshift(b);
                return fd.prototype.invoke.apply(a, c)
            }
        },
        rh = function(a, b) {
            K(J(this), ["apiName:!string", "mock:?*"], arguments);
        };
    var sh = {};
    var th = function(a) {
        var b = new rb;
        if (a instanceof qb)
            for (var c = a.Pb(), d = 0; d < c.length(); d++) {
                var e = c.get(d);
                a.has(e) && b.set(e, a.get(e))
            } else if (a instanceof fd)
                for (var f = hb(a, 1), g = 0; g < f.length; g++) {
                    var k = f[g];
                    b.set(k, a.get(k))
                } else
                    for (var m = 0; m < a.length; m++) b.set(m, a[m]);
        return b
    };
    sh.keys = function(a) {
        K(J(this), ["input:!*"], arguments);
        if (a instanceof qb || a instanceof fd || "string" === typeof a) a = th(a);
        if (a instanceof rb) return a.Pb();
        return new qb
    };
    sh.values = function(a) {
        K(J(this), ["input:!*"], arguments);
        if (a instanceof qb || a instanceof fd || "string" === typeof a) a = th(a);
        if (a instanceof rb) return new qb(hb(a, 2));
        return new qb
    };
    sh.entries = function(a) {
        K(J(this), ["input:!*"], arguments);
        if (a instanceof qb || a instanceof fd || "string" === typeof a) a = th(a);
        if (a instanceof rb) {
            for (var b = hb(a, 3), c = new qb, d = 0; d < b.length; d++) {
                var e = new qb(b[d]);
                c.push(e)
            }
            return c
        }
        return new qb
    };
    sh.freeze = function(a) {
        (a instanceof rb || a instanceof qb || a instanceof fd) && a.Bb();
        return a
    };
    sh.delete = function(a, b) {
        if (a instanceof rb && !a.tj()) return a.remove(b), !0;
        return !1
    };
    var L = function(a, b, c) {
        var d = a.h.h;
        if (!d) throw Error("Missing program state.");
        if (d.om) {
            try {
                d.fj.apply(null, Array.prototype.slice.call(arguments, 1))
            } catch (e) {
                throw zb("TAGGING", 21), e;
            }
            return
        }
        d.fj.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var uh = function() {
        this.h = {};
        this.B = {};
    };
    uh.prototype.get = function(a, b) {
        var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
        return c
    };
    uh.prototype.add = function(a, b, c) {
        if (this.h.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
        if (this.B.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.h[a] = c ? void 0 : Ba(b) ? Rg(a, b) : Sg(a, b)
    };

    function vh(a, b) {
        var c = void 0;
        return c
    };

    function wh() {
        var a = {};
        return a
    };
    var yh = function(a) {
            return xh ? B.querySelectorAll(a) : null
        },
        zh = function(a, b) {
            if (!xh) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!B.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Ah = !1;
    if (B.querySelectorAll) try {
        var Bh = B.querySelectorAll(":root");
        Bh && 1 == Bh.length && Bh[0] == B.documentElement && (Ah = !0)
    } catch (a) {}
    var xh = Ah;
    var M = function(a) {
        zb("GTM", a)
    };
    var Ch = function(a) {
            return null == a ? "" : h(a) ? Oa(String(a)) : "e0"
        },
        Eh = function(a) {
            return a.replace(Dh, "")
        },
        Gh = function(a) {
            return Fh(a.replace(/\s/g, ""))
        },
        Fh = function(a) {
            return Oa(a.replace(Hh, "").toLowerCase())
        },
        Jh = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return Ih.test(a) ? a : "e0"
        },
        Lh = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (Kh.test(c)) return c
            }
            return "e0"
        },
        Oh = function(a,
            b) {
            window.Promise || b([]);
            Promise.all(a.map(function(c) {
                return c.value && -1 !== Mh.indexOf(c.name) ? Nh(c.value).then(function(d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function() {
                b(a)
            }).catch(function() {
                b([])
            })
        },
        Nh = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (z.crypto && z.crypto.subtle) {
                if (Ph.test(a)) return Promise.resolve(a);
                try {
                    var b = Qh(a);
                    return z.crypto.subtle.digest("SHA-256", b).then(function(c) {
                        var d = Array.from(new Uint8Array(c)).map(function(e) {
                            return String.fromCharCode(e)
                        }).join("");
                        return z.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                    }).catch(function() {
                        return "e2"
                    })
                } catch (c) {
                    return Promise.resolve("e2")
                }
            } else return Promise.resolve("e1")
        },
        Qh = function(a) {
            var b;
            if (z.TextEncoder) b = (new TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 |
                        e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        Hh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        Kh = /^\S+@\S+\.\S+$/,
        Ih = /^\+\d{10,15}$/,
        Dh = /[.~]/g,
        Rh = /^[0-9A-Za-z_-]{43}$/,
        Ph = /^[0-9A-Fa-f]{64}$/,
        Sh = {},
        Th = (Sh.email = "em", Sh.phone_number = "pn", Sh.first_name = "fn", Sh.last_name = "ln", Sh.street = "sa", Sh.city = "ct", Sh.region = "rg", Sh.country = "co", Sh.postal_code = "pc", Sh.error_code = "ec", Sh),
        Uh = {},
        Vh = (Uh.email = "sha256_email_address", Uh.phone_number = "sha256_phone_number", Uh.first_name = "sha256_first_name", Uh.last_name =
            "sha256_last_name", Uh.street = "sha256_street", Uh),
        Wh = function(a, b) {
            function c(t, u, v, w) {
                var x = Ch(t);
                "" !== x && (Ph.test(x) ? m.push({
                    name: u,
                    value: x,
                    index: w
                }) : m.push({
                    name: u,
                    value: v(x),
                    index: w
                }))
            }

            function d(t, u) {
                var v = t;
                if (h(v) || Da(v)) {
                    v = Da(t) ? t : [t];
                    for (var w = 0; w < v.length; ++w) {
                        var x = Ch(v[w]),
                            y = Ph.test(x);
                        u && !y && M(89);
                        !u && y && M(88)
                    }
                }
            }

            function e(t, u) {
                var v = t[u];
                d(v, !1);
                var w = Vh[u];
                t.hasOwnProperty(w) && (t.hasOwnProperty(u) && M(90), v = t[w], d(v, !0));
                return v
            }

            function f(t, u, v) {
                var w = e(t, u);
                w = Da(w) ? w : [w];
                for (var x =
                        0; x < w.length; ++x) c(w[x], u, v)
            }

            function g(t, u, v, w) {
                var x = e(t, u);
                c(x, u, v, w)
            }

            function k(t) {
                return function(u) {
                    M(64);
                    return t(u)
                }
            }
            var m = [];
            if ("https:" === z.location.protocol) {
                f(a, "email", Lh);
                f(a, "phone_number", Jh);
                f(a, "first_name", k(Gh));
                f(a, "last_name", k(Gh));
                var n = a.home_address || {};
                f(n, "street", k(Fh));
                f(n, "city", k(Fh));
                f(n, "postal_code", k(Eh));
                f(n, "region", k(Fh));
                f(n, "country", k(Eh));
                var p = a.address || {};
                p = Da(p) ? p : [p];
                for (var q = 0; q < p.length; q++) {
                    var r = p[q];
                    g(r, "first_name", Gh, q);
                    g(r, "last_name", Gh, q);
                    g(r, "street", Fh, q);
                    g(r, "city", Fh, q);
                    g(r, "postal_code", Eh, q);
                    g(r, "region", Fh, q);
                    g(r, "country", Eh, q)
                }
                Oh(m, b)
            } else m.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), b(m)
        },
        Xh = function(a, b) {
            Wh(a, function(c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        k = c[f].value,
                        m = c[f].index,
                        n = Th[g];
                    n && k && (-1 === Mh.indexOf(g) || /^e\d+$/.test(k) || Rh.test(k) || Ph.test(k)) && (void 0 !== m && (n += m), d.push(n + "." + k), e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        },
        Yh = function(a) {
            if (z.Promise) try {
                return new Promise(function(b) {
                    Xh(a,
                        function(c, d) {
                            b({
                                xj: c,
                                fm: d
                            })
                        })
                })
            } catch (b) {}
        },
        Mh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var N = {
            g: {
                nb: "ad_personalization",
                I: "ad_storage",
                N: "ad_user_data",
                R: "analytics_storage",
                Ra: "region",
                rd: "consent_updated",
                sd: "wait_for_update",
                Wj: "ads",
                Xf: "all",
                Xj: "android",
                Yj: "chrome",
                Zj: "playstore",
                bk: "search",
                dk: "shopping",
                ek: "youtube",
                Yh: "app_remove",
                Zh: "app_store_refund",
                ai: "app_store_subscription_cancel",
                bi: "app_store_subscription_convert",
                di: "app_store_subscription_renew",
                Zf: "add_payment_info",
                ag: "add_shipping_info",
                ac: "add_to_cart",
                bc: "remove_from_cart",
                cg: "view_cart",
                Fb: "begin_checkout",
                fc: "select_item",
                Xa: "view_item_list",
                ob: "select_promotion",
                Ya: "view_promotion",
                ma: "purchase",
                hc: "refund",
                Ba: "view_item",
                dg: "add_to_wishlist",
                fk: "exception",
                ei: "first_open",
                fi: "first_visit",
                na: "gtag.config",
                Ja: "gtag.get",
                gi: "in_app_purchase",
                ic: "page_view",
                gk: "screen_view",
                hi: "session_start",
                hk: "timing_complete",
                ik: "track_social",
                vd: "user_engagement",
                pb: "gclid",
                oa: "ads_data_redaction",
                da: "allow_ad_personalization_signals",
                We: "allow_custom_scripts",
                Xe: "allow_display_features",
                wd: "allow_enhanced_conversions",
                qb: "allow_google_signals",
                Ga: "allow_interest_groups",
                jk: "app_id",
                kk: "app_installer_id",
                lk: "app_name",
                mk: "app_version",
                jc: "auid",
                ii: "auto_detection_enabled",
                Gb: "aw_remarketing",
                Ye: "aw_remarketing_only",
                xd: "discount",
                yd: "aw_feed_country",
                zd: "aw_feed_language",
                Z: "items",
                Ad: "aw_merchant_id",
                eg: "aw_basket_type",
                Dc: "campaign_content",
                Ec: "campaign_id",
                Fc: "campaign_medium",
                Gc: "campaign_name",
                Hc: "campaign",
                Ic: "campaign_source",
                Jc: "campaign_term",
                Za: "client_id",
                ji: "content_group",
                ki: "content_type",
                Ka: "conversion_cookie_prefix",
                Kc: "conversion_id",
                Ca: "conversion_linker",
                Hb: "conversion_api",
                Sa: "cookie_domain",
                Ha: "cookie_expires",
                Ta: "cookie_flags",
                kc: "cookie_name",
                Lc: "cookie_path",
                La: "cookie_prefix",
                rb: "cookie_update",
                mc: "country",
                qa: "currency",
                Bd: "customer_lifetime_value",
                Mc: "custom_map",
                li: "gcldc",
                mi: "debug_mode",
                aa: "developer_id",
                ni: "disable_merchant_reported_purchases",
                Nc: "dc_custom_params",
                oi: "dc_natural_search",
                fg: "dynamic_event_settings",
                gg: "affiliation",
                Cd: "checkout_option",
                Ze: "checkout_step",
                hg: "coupon",
                Oc: "item_list_name",
                af: "list_name",
                ri: "promotions",
                Pc: "shipping",
                bf: "tax",
                Dd: "engagement_time_msec",
                Qc: "enhanced_client_id",
                Ed: "enhanced_conversions",
                ig: "enhanced_conversions_automatic_settings",
                Fd: "estimated_delivery_date",
                cf: "euid_logged_in_state",
                Rc: "event_callback",
                nk: "event_category",
                sb: "event_developer_id_string",
                pk: "event_label",
                jg: "event",
                Gd: "event_settings",
                Hd: "event_timeout",
                qk: "description",
                rk: "fatal",
                si: "experiments",
                df: "firebase_id",
                Id: "first_party_collection",
                Jd: "_x_20",
                Ib: "_x_19",
                kg: "fledge",
                lg: "flight_error_code",
                mg: "flight_error_message",
                ui: "fl_activity_category",
                vi: "fl_activity_group",
                ng: "fl_advertiser_id",
                wi: "fl_ar_dedupe",
                xi: "fl_random_number",
                yi: "tran",
                zi: "u",
                Kd: "gac_gclid",
                nc: "gac_wbraid",
                og: "gac_wbraid_multiple_conversions",
                pg: "ga_restrict_domain",
                ef: "ga_temp_client_id",
                Ld: "gdpr_applies",
                qg: "geo_granularity",
                tb: "value_callback",
                cb: "value_key",
                sk: "google_ono",
                eb: "google_signals",
                rg: "google_tld",
                Md: "groups",
                sg: "gsa_experiment_id",
                ug: "iframe_state",
                Sc: "ignore_referrer",
                ff: "internal_traffic_results",
                Jb: "is_legacy_converted",
                vb: "is_legacy_loaded",
                Nd: "is_passthrough",
                hf: "_lps",
                Ia: "language",
                jf: "legacy_developer_id_string",
                Da: "linker",
                oc: "accept_incoming",
                wb: "decorate_forms",
                T: "domains",
                Kb: "url_position",
                vg: "method",
                tk: "name",
                Tc: "new_customer",
                wg: "non_interaction",
                Ai: "optimize_id",
                Bi: "page_hostname",
                Uc: "page_path",
                Ea: "page_referrer",
                xb: "page_title",
                xg: "passengers",
                yg: "phone_conversion_callback",
                Ci: "phone_conversion_country_code",
                zg: "phone_conversion_css_class",
                Di: "phone_conversion_ids",
                Ag: "phone_conversion_number",
                Bg: "phone_conversion_options",
                Vc: "quantity",
                Wc: "redact_device_info",
                kf: "redact_enhanced_user_id",
                Ei: "redact_ga_client_id",
                Fi: "redact_user_id",
                Od: "referral_exclusion_definition",
                Lb: "restricted_data_processing",
                Gi: "retoken",
                uk: "sample_rate",
                lf: "screen_name",
                yb: "screen_resolution",
                Hi: "search_term",
                Ma: "send_page_view",
                Mb: "send_to",
                Pd: "server_container_url",
                Xc: "session_duration",
                Qd: "session_engaged",
                nf: "session_engaged_time",
                zb: "session_id",
                Rd: "session_number",
                Yc: "delivery_postal_code",
                Cg: "temporary_client_id",
                pf: "topmost_url",
                Ii: "tracking_id",
                qf: "traffic_type",
                sa: "transaction_id",
                Nb: "transport_url",
                Dg: "trip_type",
                Ob: "update",
                Ab: "url_passthrough",
                Td: "_user_agent_architecture",
                Ud: "_user_agent_bitness",
                Vd: "_user_agent_full_version_list",
                Wd: "_user_agent_mobile",
                Xd: "_user_agent_model",
                Yd: "_user_agent_platform",
                Zd: "_user_agent_platform_version",
                ae: "_user_agent_wow64",
                wa: "user_data",
                Eg: "user_data_auto_latency",
                Fg: "user_data_auto_meta",
                Gg: "user_data_auto_multi",
                Hg: "user_data_auto_selectors",
                Ig: "user_data_auto_status",
                be: "user_data_mode",
                ce: "user_data_settings",
                za: "user_id",
                Na: "user_properties",
                Ji: "_user_region",
                Jg: "us_privacy_string",
                fa: "value",
                qc: "wbraid",
                Kg: "wbraid_multiple_conversions",
                Pi: "_host_name",
                Qi: "_in_page_command",
                Ri: "_is_passthrough_cid",
                ie: "non_personalized_ads",
                ne: "_sst_parameters",
                ab: "conversion_label",
                ra: "page_location",
                ub: "global_developer_id_string",
                Sd: "tc_privacy_string"
            }
        },
        Zh = {},
        $h = Object.freeze((Zh[N.g.da] = 1, Zh[N.g.Xe] = 1, Zh[N.g.wd] = 1, Zh[N.g.qb] = 1, Zh[N.g.Z] = 1, Zh[N.g.Sa] = 1, Zh[N.g.Ha] = 1, Zh[N.g.Ta] = 1, Zh[N.g.kc] = 1, Zh[N.g.Lc] = 1, Zh[N.g.La] =
            1, Zh[N.g.rb] = 1, Zh[N.g.Mc] = 1, Zh[N.g.aa] = 1, Zh[N.g.fg] = 1, Zh[N.g.Rc] = 1, Zh[N.g.Gd] = 1, Zh[N.g.Hd] = 1, Zh[N.g.Id] = 1, Zh[N.g.pg] = 1, Zh[N.g.eb] = 1, Zh[N.g.rg] = 1, Zh[N.g.Md] = 1, Zh[N.g.ff] = 1, Zh[N.g.Jb] = 1, Zh[N.g.vb] = 1, Zh[N.g.Da] = 1, Zh[N.g.kf] = 1, Zh[N.g.Od] = 1, Zh[N.g.Lb] = 1, Zh[N.g.Ma] = 1, Zh[N.g.Mb] = 1, Zh[N.g.Pd] = 1, Zh[N.g.Xc] = 1, Zh[N.g.nf] = 1, Zh[N.g.Yc] = 1, Zh[N.g.Nb] = 1, Zh[N.g.Ob] = 1, Zh[N.g.ce] = 1, Zh[N.g.Na] = 1, Zh[N.g.ne] = 1, Zh));
    Object.freeze([N.g.ra, N.g.Ea, N.g.xb, N.g.Ia, N.g.lf, N.g.za, N.g.df, N.g.ji]);
    var ai = {},
        bi = Object.freeze((ai[N.g.Yh] = 1, ai[N.g.Zh] = 1, ai[N.g.ai] = 1, ai[N.g.bi] = 1, ai[N.g.di] = 1, ai[N.g.ei] = 1, ai[N.g.fi] = 1, ai[N.g.gi] = 1, ai[N.g.hi] = 1, ai[N.g.vd] = 1, ai)),
        ci = {},
        di = Object.freeze((ci[N.g.Zf] = 1, ci[N.g.ag] = 1, ci[N.g.ac] = 1, ci[N.g.bc] = 1, ci[N.g.cg] = 1, ci[N.g.Fb] = 1, ci[N.g.fc] = 1, ci[N.g.Xa] = 1, ci[N.g.ob] = 1, ci[N.g.Ya] = 1, ci[N.g.ma] = 1, ci[N.g.hc] = 1, ci[N.g.Ba] = 1, ci[N.g.dg] = 1, ci)),
        ei = Object.freeze([N.g.da, N.g.qb, N.g.rb, N.g.Sc, N.g.Ob]),
        fi = Object.freeze([].concat(ei)),
        gi = Object.freeze([N.g.Ha, N.g.Hd, N.g.Xc, N.g.nf,
            N.g.Dd
        ]),
        hi = Object.freeze([].concat(gi)),
        ii = {},
        ji = (ii[N.g.I] = "1", ii[N.g.R] = "2", ii[N.g.N] = "3", ii[N.g.nb] = "4", ii),
        ki = {},
        li = Object.freeze((ki[N.g.da] = 1, ki[N.g.wd] = 1, ki[N.g.Ga] = 1, ki[N.g.Gb] = 1, ki[N.g.Ye] = 1, ki[N.g.xd] = 1, ki[N.g.yd] = 1, ki[N.g.zd] = 1, ki[N.g.Z] = 1, ki[N.g.Ad] = 1, ki[N.g.Ka] = 1, ki[N.g.Ca] = 1, ki[N.g.Sa] = 1, ki[N.g.Ha] = 1, ki[N.g.Ta] = 1, ki[N.g.La] = 1, ki[N.g.qa] = 1, ki[N.g.Bd] = 1, ki[N.g.aa] = 1, ki[N.g.ni] = 1, ki[N.g.Ed] = 1, ki[N.g.Fd] = 1, ki[N.g.df] = 1, ki[N.g.Id] = 1, ki[N.g.Jb] = 1, ki[N.g.vb] = 1, ki[N.g.Ia] = 1, ki[N.g.Tc] = 1, ki[N.g.ra] =
            1, ki[N.g.Ea] = 1, ki[N.g.yg] = 1, ki[N.g.zg] = 1, ki[N.g.Ag] = 1, ki[N.g.Bg] = 1, ki[N.g.Lb] = 1, ki[N.g.Ma] = 1, ki[N.g.Mb] = 1, ki[N.g.Pd] = 1, ki[N.g.Yc] = 1, ki[N.g.sa] = 1, ki[N.g.Nb] = 1, ki[N.g.Ob] = 1, ki[N.g.Ab] = 1, ki[N.g.wa] = 1, ki[N.g.za] = 1, ki[N.g.fa] = 1, ki)),
        mi = {},
        ni = Object.freeze((mi[N.g.bk] = "s", mi[N.g.ek] = "y", mi[N.g.Xj] = "n", mi[N.g.Yj] = "c", mi[N.g.Zj] = "p", mi[N.g.dk] = "h", mi[N.g.Wj] = "a", mi));
    Object.freeze(N.g);
    var oi = {},
        pi = z.google_tag_manager = z.google_tag_manager || {},
        qi = Math.random();
    oi.Qg = "39b0";
    oi.me = Number("1") || 0;
    oi.ia = "dataLayer";
    oi.Uj = "ChEI8N6KqAYQ2c/dt/foy9KNARIkAKEDzuEsy/TwwTzQcT/I/7KfCcKhEN1NvQLLyDDaYQRqj1XgGgI9pw\x3d\x3d";
    var ri = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        si = {
            __paused: 1,
            __tg: 1
        },
        ti;
    for (ti in ri) ri.hasOwnProperty(ti) && (si[ti] = 1);
    var ui = Ma(""),
        vi, wi = !1;
    vi = wi;
    var xi, yi = !1;
    xi = yi;
    var zi, Ai = !1;
    zi = Ai;
    var Bi, Ci = !1;
    Bi = Ci;
    oi.Ve = "www.googletagmanager.com";
    var Di = "" + oi.Ve + (vi ? "/gtag/js" : "/gtm.js"),
        Ei = null,
        Fi = null,
        Gi = {},
        Hi = {},
        Ii = {},
        Pi = function() {
            var a = pi.sequence || 1;
            pi.sequence = a + 1;
            return a
        };
    oi.Tj = "";
    var Qi = "";
    oi.vf = Qi;
    var Ri = new Ha,
        Si = {},
        Ti = {},
        Wi = {
            name: oi.ia,
            set: function(a, b) {
                mb($a(a, b), Si);
                Ui()
            },
            get: function(a) {
                return Vi(a, 2)
            },
            reset: function() {
                Ri = new Ha;
                Si = {};
                Ui()
            }
        },
        Vi = function(a, b) {
            return 2 != b ? Ri.get(a) : Xi(a)
        },
        Xi = function(a, b) {
            var c = a.split(".");
            b = b || [];
            for (var d = Si, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        Yi = function(a, b) {
            Ti.hasOwnProperty(a) || (Ri.set(a, b), mb($a(a, b), Si), Ui())
        },
        Zi = function() {
            for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
                    "gtm.blacklist", "tagTypeBlacklist"
                ], b = 0; b < a.length; b++) {
                var c = a[b],
                    d = Vi(c, 1);
                if (Da(d) || lb(d)) d = mb(d);
                Ti[c] = d
            }
        },
        Ui = function(a) {
            l(Ti, function(b, c) {
                Ri.set(b, c);
                mb($a(b), Si);
                mb($a(b, c), Si);
                a && delete Ti[b]
            })
        },
        $i = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Xi(a) : Ri.get(a);
            "array" === jb(d) || "object" === jb(d) ? c = mb(d) : c = d;
            return c
        };
    var aj = function(a, b, c) {
            if (!c) return !1;
            var d = c.selector_type,
                e = String(c.value),
                f;
            if ("js_variable" === d) {
                e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                for (var g = e.split(","), k = 0; k < g.length; k++) {
                    var m = g[k].trim();
                    if (m) {
                        if (0 === m.indexOf("dataLayer.")) f = Vi(m.substring(10));
                        else {
                            var n = m.split(".");
                            f = z[n.shift()];
                            for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                        }
                        if (void 0 !== f) break
                    }
                }
            } else if ("css_selector" === d && xh) {
                var q = yh(e);
                if (q && 0 < q.length) {
                    f = [];
                    for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++) f.push(Sc(q[r]) ||
                        Oa(q[r].value));
                    f = 1 === f.length ? f[0] : f
                }
            }
            return f ? (a[b] = f, !0) : !1
        },
        bj = function(a) {
            if (a) {
                var b = {},
                    c = !1;
                c = aj(b, "email", a.email) || c;
                c = aj(b, "phone_number", a.phone) || c;
                b.address = [];
                for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                    var f = {};
                    c = aj(f, "first_name", d[e].first_name) || c;
                    c = aj(f, "last_name", d[e].last_name) || c;
                    c = aj(f, "street", d[e].street) || c;
                    c = aj(f, "city", d[e].city) || c;
                    c = aj(f, "region", d[e].region) || c;
                    c = aj(f, "country", d[e].country) || c;
                    c = aj(f, "postal_code", d[e].postal_code) || c;
                    b.address.push(f)
                }
                return c ?
                    b : void 0
            }
        },
        cj = function(a) {
            return lb(a) ? !!a.enable_code : !1
        };
    var dj = function(a) {
            var b = a && a[N.g.ig];
            return b && b[N.g.ii]
        },
        ej = function() {
            return -1 !== Ec.userAgent.toLowerCase().indexOf("firefox")
        },
        fj = function(a) {
            if (a && a.length) {
                for (var b = [], c = 0; c < a.length; ++c) {
                    var d = a[c];
                    d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) :
                        b.push("")
                }
                return b.join(",")
            }
        };
    var P = [];
    P[5] = !0;
    P[6] = !0;
    P[11] = !0;
    P[7] = !0;
    P[8] = !0;
    P[21] = !0;
    P[9] = !0;
    P[10] = !0;
    P[13] = !0;
    P[14] = !0;
    P[15] = !0;
    P[17] = !0;
    P[23] = !0;
    P[24] = !0;
    P[25] = !0;
    P[27] = !0;
    P[19] = !0;
    P[28] = !0;
    P[31] = !0;
    P[32] = !0;
    P[33] = !0;
    P[34] = !0;
    P[36] = !0;
    P[37] = !0;
    P[39] = !0;
    P[41] = !0;
    P[42] = !0;
    P[43] = !0;
    P[54] = !0;
    P[55] = !0;
    P[56] = !0;
    P[57] = !0;
    P[59] = !0;
    P[60] = !0;
    P[65] = !0;
    P[68] = !0;
    P[71] = !0;
    a: {
        for (var gj = void 0, hj = void 0, ij = 0; gj === hj;)
            if (gj = Math.floor(2 * Math.random()), hj = Math.floor(2 * Math.random()), ij++, 20 < ij) break a;gj ? P[74] = !0 : P[75] = !0
    }
    Q(75) ? nf[6] = !0 : Q(74) && (nf[5] = !0);

    P[78] = !0;
    P[84] = !0;
    P[85] = !0;
    P[88] = !0;
    P[91] = !0;
    P[94] = !0;
    P[96] = !0;
    P[97] = !0;
    P[101] = !0;

    function Q(a) {
        return !!P[a]
    }
    var jj = function(a) {
        zb("HEALTH", a)
    };
    var kj;
    try {
        kj = JSON.parse(xb("eyIwIjoiSU4iLCIxIjoiSU4tS0EiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"))
    } catch (a) {
        M(123), jj(2), kj = {}
    }
    var lj = function() {
            return kj["0"] || ""
        },
        mj = function() {
            return kj["1"] || ""
        },
        nj = function() {
            var a = !1;
            return a
        },
        oj = function() {
            var a = "";
            return a
        },
        pj = function() {
            var a = !1;
            a = !!kj["5"];
            return a
        },
        qj = function() {
            var a = "";
            return a
        };
    var rj = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var sj = function(a) {
        sj[" "](a);
        return a
    };
    sj[" "] = function() {};
    var uj = function() {
        var a = tj,
            b = "lh";
        if (a.lh && a.hasOwnProperty(b)) return a.lh;
        var c = new a;
        return a.lh = c
    };
    var tj = function() {
        var a = {};
        this.h = function() {
            var b = rj.h,
                c = rj.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.B = function() {
            a[rj.h] = !0
        }
    };
    var vj = !1,
        wj = !1,
        xj = {},
        yj = {},
        zj = !1,
        Aj = {
            ad_storage: !1,
            ad_user_data: !1,
            ad_personalization: !1
        };

    function Bj() {
        var a = Gc("google_tag_data", {});
        return a.ics = a.ics || new Cj
    }
    var Cj = function() {
        this.entries = {};
        this.cps = {};
        this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedSetCps = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.h = []
    };
    Cj.prototype.default = function(a, b, c, d, e, f) {
        this.usedDefault || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        zb("TAGGING", 19);
        void 0 == b ? zb("TAGGING", 18) : Dj(this, a, "granted" === b, c, d, e, f)
    };
    Cj.prototype.waitForUpdate = function(a, b) {
        for (var c = 0; c < a.length; c++) Dj(this, a[c], void 0, void 0, "", "", b)
    };
    var Dj = function(a, b, c, d, e, f, g) {
        var k = a.entries,
            m = k[b] || {},
            n = m.region,
            p = d && h(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (Ej(p, n, e, f)) {
            var q = !!(g && 0 < g && void 0 === m.update),
                r = {
                    region: p,
                    declare_region: m.declare_region,
                    implicit: m.implicit,
                    default: void 0 !== c ? c : m.default,
                    declare: m.declare,
                    update: m.update,
                    quiet: q
                };
            if ("" !== e || !1 !== m.default) k[b] = r;
            q && z.setTimeout(function() {
                if (k[b] === r && r.quiet) {
                    r.quiet = !1;
                    var t = [b];
                    if ( of (4))
                        for (var u in xj) xj.hasOwnProperty(u) && xj[u] === b && t.push(u);
                    for (var v =
                            0; v < t.length; v++) Fj(a, t[v]);
                    a.notifyListeners();
                    zb("TAGGING", 2)
                }
            }, g)
        }
    };
    aa = Cj.prototype;
    aa.update = function(a, b) {
        this.usedDefault || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (void 0 != b) {
            var c = this.getConsentState(a),
                d = this.entries,
                e = d[a] = d[a] || {};
            e.update = "granted" === b;
            var f = this.getConsentState(a),
                g = [a];
            if ( of (4))
                for (var k in xj) xj.hasOwnProperty(k) && xj[k] === a && g.push(k);
            if (e.quiet) {
                e.quiet = !1;
                for (var m = 0; m < g.length; m++) Fj(this, g[m])
            } else if (f !== c)
                for (var n = 0; n < g.length; n++) Fj(this, g[n])
        }
    };
    aa.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries,
            g = f[a] || {},
            k = g.declare_region,
            m = c && h(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (Ej(m, k, d, e)) {
            var n = {
                region: g.region,
                declare_region: m,
                declare: "granted" === b,
                implicit: g.implicit,
                default: g.default,
                update: g.update,
                quiet: g.quiet
            };
            if ("" !== d || !1 !== g.declare) f[a] = n
        }
    };
    aa.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries,
            d = c[a] = c[a] || {};
        !1 !== d.implicit && (d.implicit = "granted" === b)
    };
    aa.getConsentState = function(a) {
        var b = this.entries,
            c = b[a] || {},
            d = c.update;
        if (void 0 !== d) return d ? 1 : 2;
        d = c.default;
        if (void 0 !== d) return d ? 1 : 2;
        if ( of (4) && xj.hasOwnProperty(a)) {
            var e = b[xj[a]] || {};
            d = e.update;
            if (void 0 !== d) return d ? 1 : 2;
            d = e.default;
            if (void 0 !== d) return d ? 1 : 2
        }
        d = c.declare;
        if (void 0 !== d) return d ? 1 : 2;
        if ( of (3)) {
            d = c.implicit;
            if (void 0 !== d) return d ? 3 : 4;
            if (Aj.hasOwnProperty(a)) return Aj[a] ? 3 : 4
        }
        return 0
    };
    aa.setCps = function(a, b, c, d, e) {
        Gj(this.cps, a, b, c, d, e) && (this.usedSetCps = !0)
    };
    aa.addListener = function(a, b) {
        this.h.push({
            consentTypes: a,
            bl: b
        })
    };
    var Fj = function(a, b) {
        for (var c = 0; c < a.h.length; ++c) {
            var d = a.h[c];
            Da(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.Aj = !0)
        }
    };
    Cj.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.h.length; ++c) {
            var d = this.h[c];
            if (d.Aj) {
                d.Aj = !1;
                try {
                    d.bl({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    };

    function Ej(a, b, c, d) {
        return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
    }

    function Gj(a, b, c, d, e, f) {
        var g = a[b] || {},
            k = g.region,
            m = d && h(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (Ej(m, k, e, f)) {
            var n = {
                enabled: "granted" === c,
                region: m
            };
            if ("" !== e || !1 !== g.enabled) return a[b] = n, !0
        }
        return !1
    }
    var Hj = function(a) {
            var b = Bj();
            b.accessedAny = !0;
            switch (b.getConsentState(a)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                case 4:
                    return !1;
                default:
                    return !0
            }
        },
        Ij = function(a) {
            var b = Bj();
            b.accessedDefault = !0;
            switch ((b.entries[a] || {}).default) {
                case !0:
                    return 3;
                case !1:
                    return 2;
                default:
                    return 1
            }
        },
        Jj = function(a) {
            var b = Bj();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Kj = function() {
            if (!uj().h()) return !1;
            var a = Bj();
            a.accessedAny = !0;
            return a.active
        },
        Lj = function() {
            var a = Bj();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        Mj = function(a, b) {
            Bj().addListener(a, b)
        },
        Nj = function(a, b) {
            Bj().notifyListeners(a, b)
        },
        Oj = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Jj(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Mj(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Pj = function(a, b) {
            function c() {
                for (var k = [], m = 0; m < e.length; m++) {
                    var n = e[m];
                    Hj(n) && !f[n] && k.push(n)
                }
                return k
            }

            function d(k) {
                for (var m = 0; m < k.length; m++) f[k[m]] = !0
            }
            var e = h(b) ? [b] : b,
                f = {},
                g = c();
            g.length !== e.length && (d(g), Mj(e, function(k) {
                function m(q) {
                    0 !== q.length && (d(q),
                        k.consentTypes = q, a(k))
                }
                var n = c();
                if (0 !== n.length) {
                    var p = Object.keys(f).length;
                    ! of (9) || n.length + p >= e.length ? m(n) : z.setTimeout(function() {
                        m(c())
                    }, 500)
                }
            }))
        };

    function Qj() {}

    function Rj() {};
    var Sj = [N.g.I, N.g.R, N.g.N, N.g.nb],
        Tj = function(a) {
            for (var b = a[N.g.Ra], c = Array.isArray(b) ? b : [b], d = {
                    De: 0
                }; d.De < c.length; d = {
                    De: d.De
                }, ++d.De) l(a, function(e) {
                return function(f, g) {
                    if (f !== N.g.Ra) {
                        var k = c[e.De],
                            m = lj(),
                            n = mj();
                        wj = !0;
                        vj && zb("TAGGING", 20);
                        Bj().declare(f, g, k, m, n)
                    }
                }
            }(d))
        },
        Uj = function(a) {
            var b = a[N.g.Ra];
            b && M(40);
            var c = a[N.g.sd];
            c && M(41);
            for (var d = Da(b) ? b : [b], e = {
                    Ee: 0
                }; e.Ee < d.length; e = {
                    Ee: e.Ee
                }, ++e.Ee) l(a, function(f) {
                return function(g, k) {
                    if (g !== N.g.Ra && g !== N.g.sd) {
                        var m = d[f.Ee],
                            n = Number(c),
                            p = lj(),
                            q = mj();
                        vj = !0;
                        wj && zb("TAGGING", 20);
                        Bj().default(g, k, m, p, q, n)
                    }
                }
            }(e))
        },
        Vj = function(a, b) {
            l(a, function(c, d) {
                vj = !0;
                wj && zb("TAGGING", 20);
                Bj().update(c, d)
            });
            Nj(b.eventId, b.priorityId)
        },
        Wj = function(a) {
            for (var b = a[N.g.Ra], c = Array.isArray(b) ? b : [b], d = {
                    Fe: 0
                }; d.Fe < c.length; d = {
                    Fe: d.Fe
                }, ++d.Fe) l(a, function(e) {
                return function(f, g) {
                    if (f !== N.g.Ra) {
                        var k = c[e.Fe],
                            m = lj(),
                            n = mj();
                        Bj().setCps(f, g, k, m, n)
                    }
                }
            }(d))
        },
        Xj = function(a) {
            for (var b = a[N.g.Ra], c = Array.isArray(b) ? b : [b], d = {
                    fd: 0
                }; d.fd < c.length; d = {
                    fd: d.fd
                }, ++d.fd) a.hasOwnProperty(N.g.Xf) &&
                l(ni, function(e) {
                    return function(f) {
                        Gj(yj, f, a[N.g.Xf], c[e.fd], lj(), mj()) && (zj = !0)
                    }
                }(d)), l(a, function(e) {
                    return function(f, g) {
                        f !== N.g.Ra && f !== N.g.Xf && Gj(yj, f, g, c[e.fd], lj(), mj()) && (zj = !0)
                    }
                }(d))
        },
        R = function(a) {
            Array.isArray(a) || (a = [a]);
            return a.every(function(b) {
                return Hj(b)
            })
        },
        Yj = function(a, b) {
            Mj(a, b)
        },
        Zj = function(a, b) {
            Pj(a, b)
        },
        ak = function(a, b) {
            Oj(a, b)
        },
        bk = function(a) {
            Bj().waitForUpdate(a, 500)
        };
    var ck = function(a) {
            var b = String(a[Re.xa] || "").replace(/_/g, "");
            0 === b.indexOf("cvt") && (b = "cvt");
            return b
        },
        dk = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
    var fk = function(a, b) {
            var c = ek();
            c.pending || (c.pending = []);
            Ea(c.pending, function(d) {
                return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
            }) || c.pending.push({
                target: a,
                onLoad: b
            })
        },
        gk = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {};
            this.pending = [];
            this.siloed = []
        },
        ek = function() {
            var a = Gc("google_tag_data", {}),
                b = a.tidr;
            b || (b = new gk, a.tidr = b);
            return b
        };
    var hk = {},
        ik = !1,
        Vf = {
            ctid: "GTM-KWHT9HP",
            Tg: "13000519",
            yj: "GTM-KWHT9HP",
            zj: "GTM-KWHT9HP"
        };
    hk.he = Ma("");
    var lk = function() {
            var a = jk();
            return ik ? a.map(kk) : a
        },
        nk = function() {
            var a = mk();
            return ik ? a.map(kk) : a
        },
        pk = function() {
            return ok(Vf.ctid)
        },
        qk = function() {
            return ok(Vf.Tg || "_" + Vf.ctid)
        },
        jk = function() {
            return Vf.yj ? Vf.yj.split("|") : [Vf.ctid]
        },
        mk = function() {
            return Vf.zj ? Vf.zj.split("|") : []
        },
        rk = function(a) {
            var b = ek();
            return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
        },
        ok = function(a) {
            return ik ? kk(a) : a
        },
        kk = function(a) {
            return "siloed_" + a
        },
        sk = function(a) {
            a = String(a);
            return ik && 0 === a.indexOf("siloed_") ?
                a.substring(7) : a
        },
        tk = function() {
            var a = !1;
            if (a) {
                var b = ek();
                if (b.siloed) {
                    for (var c = [], d = jk(), e = mk(), f = {}, g = 0; g < b.siloed.length; f = {
                            te: f.te
                        }, g++) f.te = b.siloed[g], !ik && Ea(f.te.isDestination ? e : d, function(k) {
                        return function(m) {
                            return m === k.te.ctid
                        }
                    }(f)) ? ik = !0 : c.push(f.te);
                    b.siloed = c
                }
            }
        };

    function uk() {
        var a = ek();
        if (a.pending) {
            for (var b, c = [], d = !1, e = lk(), f = nk(), g = {}, k = 0; k < a.pending.length; g = {
                    ld: g.ld
                }, k++) g.ld = a.pending[k], Ea(g.ld.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.ld.target.ctid
                }
            }(g)) ? d || (b = g.ld.onLoad, d = !0) : c.push(g.ld);
            a.pending = c;
            if (b) try {
                b(qk())
            } catch (m) {}
        }
    }
    var vk = function() {
            for (var a = ek(), b = lk(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                d ? (d.state = 2, d.containers = lk(), d.destinations = nk()) : a.container[b[c]] = {
                    state: 2,
                    containers: lk(),
                    destinations: nk()
                }
            }
            for (var e = nk(), f = 0; f < e.length; f++) {
                var g = a.destination[e[f]];
                g && 0 === g.state && M(93);
                g ? (g.state = 2, g.containers = lk(), g.destinations = nk()) : a.destination[e[f]] = {
                    state: 2,
                    containers: lk(),
                    destinations: nk()
                }
            }
            a.canonical[qk()] = {};
            uk()
        },
        wk = function(a) {
            return !!ek().container[a]
        },
        xk = function() {
            return {
                ctid: pk(),
                isDestination: hk.he
            }
        };

    function yk(a) {
        var b = ek();
        (b.siloed = b.siloed || []).push(a)
    }
    var zk = function() {
            var a = ek().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
            return !1
        },
        Ak = function() {
            var a = {};
            l(ek().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        },
        Bk = function(a) {
            return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"))
        };
    var Ck = {
            sampleRate: "0.005000",
            Pj: "",
            Oj: Number("5"),
            hn: Number("")
        },
        Dk = [];

    function Ek(a) {
        Dk.push(a)
    }
    var Fk = !1,
        Gk;
    if (!(Gk = dk)) {
        var Hk = Math.random(),
            Ik = Ck.sampleRate;
        Gk = Hk < Number(Ik)
    }
    var Jk = Gk,
        Kk = "https://www.googletagmanager.com/a?id=" + Vf.ctid,
        Lk = void 0,
        Mk = {},
        Nk = void 0,
        Ok = new function() {
            var a = 5;
            0 < Ck.Oj && (a = Ck.Oj);
            this.h = 0;
            this.C = [];
            this.B = a
        },
        Pk = 1E3;

    function Qk(a, b) {
        var c = Lk;
        if (void 0 === c)
            if (b) c = Pi();
            else return "";
        for (var d = [Kk], e = 0; e < Dk.length; e++) {
            var f = Dk[e]({
                eventId: c,
                Yb: !!a,
                Gj: function() {
                    Fk = !0
                }
            });
            "&" === f[0] && d.push(f)
        }
        d.push("&z=0");
        return d.join("")
    }

    function Rk() {
        Nk && (z.clearTimeout(Nk), Nk = void 0);
        if (void 0 !== Lk && Sk) {
            var a;
            (a = Mk[Lk]) || (a = Ok.h < Ok.B ? !1 : 1E3 > Qa() - Ok.C[Ok.h % Ok.B]);
            if (a || 0 >= Pk--) M(1), Mk[Lk] = !0;
            else {
                var b = Ok.h++ % Ok.B;
                Ok.C[b] = Qa();
                var c = Qk(!0);
                Oc(c);
                if (Fk) {
                    var d = c.replace("/a?", "/td?");
                    Oc(d)
                }
                Sk = Fk = !1
            }
        }
    }
    var Sk = !1;

    function Tk(a) {
        Mk[a] || (a !== Lk && (Rk(), Lk = a), Sk = !0, Nk || (Nk = z.setTimeout(Rk, 500)), 2022 <= Qk().length && Rk())
    }
    var Uk = Ga();

    function Vk() {
        Uk = Ga()
    }

    function Wk() {
        return ["&v=3&t=t", "&pid=" + Uk].join("")
    };
    var Xk = function(a, b, c, d, e, f, g, k, m, n, p, q) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.K = d;
            this.C = e;
            this.F = f;
            this.W = g;
            this.B = k;
            this.eventMetadata = m;
            this.onSuccess = n;
            this.onFailure = p;
            this.isGtmEvent = q
        },
        U = function(a, b, c) {
            if (void 0 !== a.h[b]) return a.h[b];
            if (void 0 !== a.K[b]) return a.K[b];
            if (void 0 !== a.C[b]) return a.C[b];
            Jk && Yk(a, a.F[b], a.W[b]) && (M(71), M(79));
            return void 0 !== a.F[b] ? a.F[b] : void 0 !== a.B[b] ? a.B[b] : c
        },
        Zk = function(a) {
            function b(g) {
                for (var k = Object.keys(g), m = 0; m < k.length; ++m) c[k[m]] = 1
            }
            var c = {};
            b(a.h);
            b(a.K);
            b(a.C);
            b(a.F);
            if (Jk)
                for (var d = Object.keys(a.W), e = 0; e < d.length; e++) {
                    var f = d[e];
                    if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                        M(71);
                        M(80);
                        break
                    }
                }
            return Object.keys(c)
        },
        $k = function(a, b, c) {
            function d(m) {
                lb(m) && l(m, function(n, p) {
                    f = !0;
                    e[n] = p
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.B[b]), d(a.F[b]), d(a.C[b]), d(a.K[b]));
            c && 2 !== c || d(a.h[b]);
            if (Jk) {
                var g = f,
                    k = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.B[b]), d(a.W[b]), d(a.C[b]), d(a.K[b]));
                c && 2 !== c || d(a.h[b]);
                if (f !== g || Yk(a, e, k)) M(71), M(81);
                f = g;
                e = k
            }
            return f ? e : void 0
        },
        al = function(a) {
            var b = [N.g.Hc, N.g.Dc, N.g.Ec, N.g.Fc, N.g.Gc, N.g.Ic, N.g.Jc],
                c = {},
                d = !1,
                e = function(k) {
                    for (var m = 0; m < b.length; m++) void 0 !== k[b[m]] && (c[b[m]] = k[b[m]], d = !0);
                    return d
                };
            if (e(a.h) || e(a.K) || e(a.C)) return c;
            e(a.F);
            if (Jk) {
                var f = c,
                    g = d;
                c = {};
                d = !1;
                e(a.W);
                Yk(a, c, f) && (M(71), M(82));
                c = f;
                d = g
            }
            if (d) return c;
            e(a.B);
            return c
        },
        Yk = function(a, b, c) {
            if (!Jk) return !1;
            try {
                if (b === c) return !1;
                var d = jb(b);
                if (d !== jb(c) || !(lb(b) && lb(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e = 0; e < b.length; e++)
                        if (Yk(a, b[e], c[e])) return !0
                } else {
                    for (var f in c)
                        if (!b.hasOwnProperty(f)) return !0;
                    for (var g in b)
                        if (!c.hasOwnProperty(g) || Yk(a, b[g], c[g])) return !0
                }
            } catch (k) {
                M(72)
            }
            return !1
        },
        bl = function(a, b) {
            this.Ng = a;
            this.xk = b;
            this.F = {};
            this.fe = {};
            this.h = {};
            this.K = {};
            this.B = {};
            this.ee = {};
            this.C = {};
            this.ud = function() {};
            this.Zb = function() {};
            this.W = !1
        },
        cl = function(a, b) {
            a.F = b;
            return a
        },
        dl = function(a, b) {
            a.fe = b;
            return a
        },
        el = function(a, b) {
            a.h = b;
            return a
        },
        fl = function(a, b) {
            a.K = b;
            return a
        },
        gl = function(a,
            b) {
            a.B = b;
            return a
        },
        hl = function(a, b) {
            a.ee = b;
            return a
        },
        il = function(a, b) {
            a.C = b || {};
            return a
        },
        jl = function(a, b) {
            a.ud = b;
            return a
        },
        kl = function(a, b) {
            a.Zb = b;
            return a
        },
        ll = function(a, b) {
            a.W = b;
            return a
        },
        ml = function(a) {
            return new Xk(a.Ng, a.xk, a.F, a.fe, a.h, a.K, a.B, a.ee, a.C, a.ud, a.Zb, a.W)
        };

    function nl(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var ol = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        pl = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var ql = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function rl() {
        return Ob ? !!Vb && !!Vb.platform : !1
    }

    function sl() {
        return Yb("iPhone") && !Yb("iPod") && !Yb("iPad")
    }

    function tl() {
        sl() || Yb("iPad") || Yb("iPod")
    };
    $b();
    Zb() || Yb("Trident") || Yb("MSIE");
    Yb("Edge");
    !Yb("Gecko") || -1 != Ub().toLowerCase().indexOf("webkit") && !Yb("Edge") || Yb("Trident") || Yb("MSIE") || Yb("Edge"); - 1 != Ub().toLowerCase().indexOf("webkit") && !Yb("Edge") && Yb("Mobile");
    rl() || Yb("Macintosh");
    rl() || Yb("Windows");
    (rl() ? "Linux" === Vb.platform : Yb("Linux")) || rl() || Yb("CrOS");
    var ul = ra.navigator || null;
    ul && (ul.appVersion || "").indexOf("X11");
    rl() || Yb("Android");
    sl();
    Yb("iPad");
    Yb("iPod");
    tl();
    Ub().toLowerCase().indexOf("kaios");
    var vl = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (38 == g || 63 == g) {
                    var k = a.charCodeAt(e + f);
                    if (!k || 61 == k || 38 == k || 35 == k) return e
                }
                e += f + 1
            }
            return -1
        },
        wl = /#|$/,
        xl = function(a, b) {
            var c = a.search(wl),
                d = vl(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        yl = /[?&]($|#)/,
        zl = function(a, b, c) {
            for (var d, e = a.search(wl), f = 0, g, k = []; 0 <= (g = vl(a, f, b, e));) k.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            k.push(a.slice(f));
            d = k.join("").replace(yl, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                0 > r && (r = d.length);
                var t = d.indexOf("?"),
                    u;
                0 > t || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
                q = [d.slice(0, t), u, d.slice(r)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var Al = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        sj(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        Bl = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        };

    function Cl(a) {
        if (!a || !B.head) return null;
        var b = Dl("META");
        B.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var El = function() {
            if (z.top == z) return 0;
            var a = z.location.ancestorOrigins;
            return a ? a[a.length - 1] == z.location.origin ? 1 : 2 : Al(z.top) ? 1 : 2
        },
        Dl = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function Fl(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = Dl("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        k = Cb(g, e);
                    0 <= k && Array.prototype.splice.call(g, k, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            ql(e, "load", f);
            ql(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Hl = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            Bl(a, function(d, e) {
                if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            Gl(c, b)
        },
        Gl = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                        eventSourceEligible: "true",
                        triggerEligible: "false"
                    } :
                    e.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    });
                c.fetch(a, e)
            } else Fl(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var Il = function() {};
    var Jl = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Kl = function(a, b) {
            b = void 0 === b ? {} : b;
            this.B = a;
            this.h = null;
            this.K = {};
            this.Zb = 0;
            var c;
            this.W = null != (c = b.Fm) ? c : 500;
            var d;
            this.F = null != (d = b.bn) ? d : !1;
            this.C = null
        };
    qa(Kl, Il);
    var Ml = function(a) {
        return "function" === typeof a.B.__tcfapi || null != Ll(a)
    };
    Kl.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.F
            },
            d = pl(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.W && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.W));
        var f = function(g, k) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Jl(c), c.internalBlockOnErrors = b.F, k && 0 === c.internalErrorState || (c.tcString = "tcunavailable", k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Nl(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Kl.prototype.removeEventListener = function(a) {
        a && a.listenerId && Nl(this, "removeEventListener", null, a.listenerId)
    };
    var Pl = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var k = c;
            2 === c ? (k = 0, 2 === g && (k = 1)) : 3 === c && (k = 1, 1 === g && (k = 0));
            var m;
            if (0 === k)
                if (a.purpose && a.vendor) {
                    var n = Ol(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Ol(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === k ? a.purpose && a.vendor ? Ol(a.purpose.legitimateInterests,
                b) && Ol(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        Ol = function(a, b) {
            return !(!a || !a[b])
        },
        Nl = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.B.__tcfapi) {
                var e = a.B.__tcfapi;
                e(b, 2, c, d)
            } else if (Ll(a)) {
                Ql(a);
                var f = ++a.Zb;
                a.K[f] = c;
                if (a.h) {
                    var g = {};
                    a.h.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Ll = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.B, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (k) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (k) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        Ql = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.K[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, ql(a.B, "message", a.C))
        },
        Rl = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Jl(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (Hl({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var Sl = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        Tl = nl('', 500);

    function Ul() {
        var a = pi.tcf || {};
        return pi.tcf = a
    }
    var Vl = function() {
            return new Kl(z, {
                Fm: -1
            })
        },
        am = function() {
            var a = Ul(),
                b = Vl();
            Ml(b) && Wl() && M(124);
            if ((Xl() || Q(81)) && !a.active && Ml(b)) {
                a.active = !0;
                Xl() ? (a.Wb = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, Yl(), Q(81) && bk([N.g.N]), a.tcString = "tcunavailable") : Q(81) && bk([N.g.I, N.g.nb, N.g.N]);
                try {
                    b.addEventListener(function(c) {
                        if (0 !== c.internalErrorState) Zl(a), $l(a);
                        else {
                            a.gdprApplies = c.gdprApplies;
                            if (Q(81)) {
                                a.cmpId = c.cmpId;
                                a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode;
                                if (Wl()) return;
                                a.tcfPolicyVersion =
                                    c.tcfPolicyVersion
                            }
                            var d;
                            if (!1 === c.gdprApplies) {
                                var e = {},
                                    f;
                                for (f in Sl) Sl.hasOwnProperty(f) && (e[f] = !0);
                                d = e;
                                b.removeEventListener(c)
                            } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
                                var g = {},
                                    k;
                                for (k in Sl)
                                    if (Sl.hasOwnProperty(k))
                                        if ("1" === k) {
                                            var m, n = c,
                                                p = !0;
                                            p = void 0 === p ? !1 : p;
                                            m = Rl(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Pl(n, "1", 0) : !1;
                                            g["1"] = m
                                        } else g[k] = Pl(c,
                                            k, Sl[k]);
                                d = g
                            }
                            d && (a.tcString = c.tcString || "tcempty", a.Wb = d, $l(a))
                        }
                    })
                } catch (c) {
                    Zl(a), $l(a)
                }
            }
        };

    function Zl(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function Yl() {
        var a = {},
            b = (a[N.g.I] = "denied", a[N.g.sd] = Tl, a);
        Q(81) && (b[N.g.nb] = "denied");
        Uj(b)
    }
    var Xl = function() {
            return !0 === z.gtag_enable_tcf_support
        },
        Wl = function() {
            var a = Xl();
            if (Q(81)) {
                var b = Ul().enableAdvertiserConsentMode;
                return !a && !b
            }
            return !a
        };

    function $l(a) {
        var b = {},
            c = (b[N.g.I] = a.Wb["1"] ? "granted" : "denied", b);
        Q(81) && (c[N.g.nb] = a.Wb["3"] && a.Wb["4"] ? "granted" : "denied", "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion && (c[N.g.N] = a.Wb["1"] && a.Wb["7"] ? "granted" : "denied"));
        Vj(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: bm() || ""
        })
    }
    var bm = function() {
            var a = Ul();
            if (a.active) return a.tcString
        },
        cm = function() {
            var a = Ul();
            if (a.active && void 0 !== a.gdprApplies) return a.gdprApplies ? "1" : "0"
        },
        dm = function(a) {
            if (!Sl.hasOwnProperty(String(a))) return !0;
            var b = Ul();
            return b.active && b.Wb ? !!b.Wb[String(a)] : !0
        };
    var em = [N.g.I, N.g.R],
        fm = [N.g.I, N.g.R, N.g.N, N.g.nb],
        gm = {},
        hm = (gm[N.g.I] = 1, gm[N.g.R] = 2, gm);

    function im(a) {
        switch (U(a, N.g.da)) {
            case void 0:
                return 1;
            case !1:
                return 3;
            default:
                return 2
        }
    }
    var jm = function(a) {
            var b = 3 !== im(a);
            Q(67) && (b = b && Hj(N.g.nb));
            return b
        },
        km = function() {
            var a = {},
                b;
            for (b in hm)
                if (hm.hasOwnProperty(b)) {
                    var c = hm[b],
                        d, e = Bj();
                    e.accessedAny = !0;
                    d = e.getConsentState(b);
                    a[c] = d
                }
            var f = Q(51) && em.every(Hj),
                g = Q(46);
            return f || g ? Qe(a, 1) : Qe(a, 0)
        },
        lm = {},
        mm = (lm[N.g.I] = 0, lm[N.g.R] = 1, lm[N.g.N] = 2, lm[N.g.nb] = 3, lm);

    function nm(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }
    var om = function(a) {
            if (Q(48)) {
                for (var b = "1", c = 0; c < fm.length; c++) {
                    var d = b,
                        e, f = fm[c],
                        g = xj[f];
                    e = void 0 === g ? 0 : mm.hasOwnProperty(g) ? 12 | mm[g] : 8;
                    var k = Bj();
                    k.accessedAny = !0;
                    var m = k.entries[f] || {};
                    e = e << 2 | nm(m.implicit);
                    b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [nm(m.declare) << 4 | nm(m.default) << 2 | nm(m.update)])
                }
                void 0 !== a && (b += im(a));
                return b
            }
            for (var n = "G1", p = 0; p < em.length; p++) switch (Ij(em[p])) {
                case 3:
                    n += "1";
                    break;
                case 2:
                    n += "0";
                    break;
                case 1:
                    n += "-"
            }
            return n
        },
        pm = function() {
            if (!Hj(N.g.N)) return "-";
            var a = Bj(),
                b = zj,
                c = a.cps,
                d = a.usedSetCps,
                e = [];
            if (b && d)
                for (var f in yj) yj.hasOwnProperty(f) && yj[f].enabled && c.hasOwnProperty(f) && c[f].enabled && e.push(f);
            else {
                var g = b ? yj : c,
                    k;
                for (k in g) g.hasOwnProperty(k) && g[k].enabled && e.push(k)
            }
            for (var m = "", n = 0; n < e.length; n++) {
                var p = ni[e[n]];
                p && (m += p)
            }
            return "" === m ? "-" : m
        };

    function qm() {
        var a = !!kj["6"],
            b = !1;
        Q(81) && (b = !Wl() && "1" === cm());
        return a || b
    }
    var rm = function() {
            return qm() ? "1" : "0"
        },
        sm = function() {
            return qm() || Bj().usedSetCps || !R(N.g.N)
        },
        tm = function() {
            var a = "0",
                b = "0",
                c;
            var d = Ul();
            c = d.active && Q(81) ? d.cmpId : void 0;
            "number" === typeof c && 0 <= c && 4095 >= c && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c & 63]);
            var e = "0",
                f;
            var g = Ul();
            f = g.active && Q(81) ? g.tcfPolicyVersion : void 0;
            "number" === typeof f && 0 <= f && 63 >= f && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f]);
            var k = 0;
            kj["6"] && (k |= 1);
            "1" === cm() && (k |= 2);
            Xl() && (k |= 4);
            var m;
            var n = Ul();
            m = n.active && void 0 !== n.enableAdvertiserConsentMode ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
            "1" === m && (k |= 8);
            return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [k]
        };
    var um = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var vm = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                k = g[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };

    function wm(a) {
        return "null" !== a.origin
    };
    var zm = function(a, b, c, d) {
            return xm(d) ? vm(a, String(b || ym()), c) : []
        },
        Cm = function(a, b, c, d, e) {
            if (xm(e)) {
                var f = Am(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Bm(f, function(g) {
                        return g.Bf
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Bm(f, function(g) {
                        return g.Ne
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Dm(a, b, c, d) {
        var e = ym(),
            f = window;
        wm(f) && (f.document.cookie = a);
        var g = ym();
        return e != g || void 0 != c && 0 <= zm(b, g, !1, d).indexOf(c)
    }
    var Hm = function(a, b, c, d) {
            function e(w, x, y) {
                if (null == y) return delete k[x], w;
                k[x] = y;
                return w + "; " + x + "=" + y
            }

            function f(w, x) {
                if (null == x) return delete k[x], w;
                k[x] = !0;
                return w + "; " + x
            }
            if (!xm(c.Eb)) return 2;
            var g;
            void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Em(b), g = a + "=" + b);
            var k = {};
            g = e(g, "path", c.path);
            var m;
            c.expires instanceof Date ? m = c.expires.toUTCString() : null != c.expires && (m = "" + c.expires);
            g = e(g, "expires", m);
            g = e(g, "max-age", c.Wl);
            g = e(g, "samesite",
                c.vm);
            c.xm && (g = f(g, "secure"));
            var n = c.domain;
            if (n && "auto" === n.toLowerCase()) {
                for (var p = Fm(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                    var u = "none" !== p[t] ? p[t] : void 0,
                        v = e(g, "domain", u);
                    v = f(v, c.flags);
                    try {
                        d && d(a, k)
                    } catch (w) {
                        q = w;
                        continue
                    }
                    r = !0;
                    if (!Gm(u, c.path) && Dm(v, a, b, c.Eb)) return 0
                }
                if (q && !r) throw q;
                return 1
            }
            n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
            g = f(g, c.flags);
            d && d(a, k);
            return Gm(n, c.path) ? 1 : Dm(g, a, b, c.Eb) ? 0 : 1
        },
        Sm = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Hm(a,
                b, c)
        };

    function Bm(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g],
                m = b(k);
            m === c ? d.push(k) : void 0 === f || m < f ? (e = [k], f = m) : m === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function Am(a, b, c) {
        for (var d = [], e = zm(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                k = g.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({
                    id: g.join("."),
                    Bf: 1 * m[0] || 1,
                    Ne: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var Em = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Tm = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Um = /(^|\.)doubleclick\.net$/i,
        Gm = function(a, b) {
            return Um.test(window.document.location.hostname) || "/" === b && Tm.test(a)
        },
        ym = function() {
            return wm(window) ? window.document.cookie : ""
        },
        Fm = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Um.test(e) || Tm.test(e) || a.push("none");
            return a
        },
        xm = function(a) {
            return a && uj().h() ? Jj(a) ? Hj(a) : !1 : !0
        };
    var Vm = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ um(a) & 2147483647) : String(b)
        },
        Wm = function(a) {
            return [Vm(a), Math.round(Qa() / 1E3)].join(".")
        },
        Zm = function(a, b, c, d, e) {
            var f = Xm(b);
            return Cm(a, f, Ym(c), d, e)
        },
        $m = function(a, b, c, d) {
            var e = "" + Xm(c),
                f = Ym(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Xm = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Ym = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };
    var an = function() {
        pi.dedupe_gclid || (pi.dedupe_gclid = "" + Wm());
        return pi.dedupe_gclid
    };
    var bn = function() {
        var a = !1;
        return a
    };
    var cn = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        dn = function(a) {
            var b = Vf.ctid.split("-")[0].toUpperCase(),
                c = {};
            c.ctid = Vf.ctid;
            c.mm = oi.me;
            c.sm = oi.Qg;
            c.Tl = hk.he ? 2 : 1;
            vi ? (c.Of = cn[b], c.Of || (c.Of = 0)) : c.Of = Bi ? 13 : 10;
            zi ? c.vh = 1 : bn() ? c.vh = 2 : c.vh = 3;
            var d;
            var e = c.Of,
                f = c.vh;
            void 0 === e ? d = "" : (f || (f = 0), d = "" + Kg(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e << 2 | f]);
            var g = c.Zm,
                k = 4 + d + (g ? "" + Kg(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [g] : ""),
                m, n = c.sm;
            m = n &&
                Jg.test(n) ? "" + Kg(3, 2) + n : "";
            var p, q = c.mm;
            p = q ? "" + Kg(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [q] : "";
            var r;
            var t = c.ctid;
            if (t && a) {
                var u = t.split("-"),
                    v = u[0].toUpperCase();
                if ("GTM" !== v && "OPT" !== v) r = "";
                else {
                    var w = u[1];
                    r = "" + Kg(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + w.length] + (c.Tl || 0) + w
                }
            } else r = "";
            return k + m + p + r
        };
    var en = void 0;

    function fn(a) {
        var b = "";
        return b
    };
    var gn = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };
    ac();
    sl() || Yb("iPod");
    Yb("iPad");
    !Yb("Android") || bc() || ac() || $b() || Yb("Silk");
    bc();
    !Yb("Safari") || bc() || (Zb() ? 0 : Yb("Coast")) || $b() || (Zb() ? 0 : Yb("Edge")) || (Zb() ? Xb("Microsoft Edge") : Yb("Edg/")) || (Zb() ? Xb("Opera") : Yb("OPR")) || ac() || Yb("Silk") || Yb("Android") || tl();
    var hn = {},
        jn = null,
        kn = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!jn) {
                jn = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = g.concat(k[m].split(""));
                    hn[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === jn[q] && (jn[q] = p)
                    }
                }
            }
            for (var r = hn[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var x = b[v],
                    y = b[v + 1],
                    A = b[v + 2],
                    C = r[x >> 2],
                    D = r[(x & 3) << 4 | y >> 4],
                    G = r[(y & 15) << 2 | A >> 6],
                    F = r[A & 63];
                t[w++] = "" + C + D + G + F
            }
            var I = 0,
                O = u;
            switch (b.length - v) {
                case 2:
                    I = b[v + 1], O = r[(I & 15) << 2] || u;
                case 1:
                    var S = b[v];
                    t[w] = "" + r[S >> 2] + r[(S & 3) << 4 | I >> 4] + O + u
            }
            return t.join("")
        };
    var ln = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function mn(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function nn() {
        var a = z.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function on() {
        var a, b;
        return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function pn(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function qn() {
        var a = z;
        if (!pn(a)) return null;
        var b = mn(a);
        if (b.uach_promise) return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(ln).then(function(d) {
            null != b.uach || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    };
    var rn, sn = function() {
            if (pn(z) && (rn = Qa(), !on())) {
                var a = qn();
                a && (a.then(function() {
                    M(95);
                }), a.catch(function() {
                    M(96)
                }))
            }
        },
        un = function(a) {
            var b = tn.Im,
                c = function(g, k) {
                    try {
                        a(g, k)
                    } catch (m) {}
                },
                d = nn();
            if (d) c(d);
            else {
                var e = on();
                if (e) {
                    b =
                        Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                    var f = z.setTimeout(function() {
                        c.Ie || (c.Ie = !0, M(106), c(null, Error("Timeout")))
                    }, b);
                    e.then(function(g) {
                        c.Ie || (c.Ie = !0, M(104), z.clearTimeout(f), c(g))
                    }).catch(function(g) {
                        c.Ie || (c.Ie = !0, M(105), z.clearTimeout(f), c(null, g))
                    })
                } else c(null)
            }
        },
        vn = function(a, b) {
            a && (b.h[N.g.Td] = a.architecture, b.h[N.g.Ud] = a.bitness, a.fullVersionList && (b.h[N.g.Vd] = a.fullVersionList.map(function(c) {
                    return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
                }).join("|")),
                b.h[N.g.Wd] = a.mobile ? "1" : "0", b.h[N.g.Xd] = a.model, b.h[N.g.Yd] = a.platform, b.h[N.g.Zd] = a.platformVersion, b.h[N.g.ae] = a.wow64 ? "1" : "0")
        };
    var wn = /:[0-9]+$/,
        xn = /^\d+\.fls\.doubleclick\.net$/,
        yn = function(a, b, c, d) {
            for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
                var k = f[g].split("=");
                if (decodeURIComponent(k[0]).replace(/\+/g, " ") === b) {
                    var m = k.slice(1).join("=");
                    if (!c) return d ? m : decodeURIComponent(m).replace(/\+/g, " ");
                    e.push(d ? m : decodeURIComponent(m).replace(/\+/g, " "))
                }
            }
            return c ? e : void 0
        },
        Bn = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = zn(a.protocol) || zn(z.location.protocol);
            "port" === b ? a.port =
                String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(wn, "").toLowerCase());
            return An(a, b, c, d, e)
        },
        An = function(a, b, c, d, e) {
            var f, g = zn(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = Cn(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(wn, "").toLowerCase();
                    if (c) {
                        var k = /^www\d*\./.exec(f);
                        k && k[0] && (f = f.substr(k[0].length))
                    }
                    break;
                case "port":
                    f =
                        String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || zb("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = yn(f, e, !1));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        zn = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        Cn = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        Dn = function(a) {
            var b = B.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || zb("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(wn, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        En = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n :
                    p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = Dn(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                k = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === k[0] && (k = k.substring(1));
            g = c(g);
            k = c(k);
            "" !== g && (g = "?" + g);
            "" !== k && (k = "#" + k);
            var m = "" + f + g + k;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        },
        Fn = function(a) {
            var b = Dn(z.location.href),
                c = Bn(b, "host", !1);
            if (c && c.match(xn)) {
                var d = Bn(b,
                    "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };

    function Gn(a, b, c, d) {
        var e, f = Number(null != a.Tb ? a.Tb : void 0);
        0 !== f && (e = new Date((b || Qa()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Eb: d
        }
    };
    var Hn;
    var Ln = function() {
            var a = In,
                b = Jn,
                c = Kn(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Pc(B, "mousedown", d);
                Pc(B, "keyup", d);
                Pc(B, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Mn = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Kn().decorators.push(f)
        },
        Nn = function(a, b, c) {
            for (var d = Kn().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    k;
                if (k = !c || g.forms) a: {
                    var m = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (m && (p || n !== B.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    k = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        k = !0;
                        break a
                    }
                    k = !1
                }
                if (k) {
                    var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && Ua(e, g.callback())
                }
            }
            return e
        };

    function Kn() {
        var a = Gc("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var On = /(.*?)\*(.*?)\*(.*)/,
        Pn = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Qn = /^(?:www\.|m\.|amp\.)+/,
        Rn = /([^?#]+)(\?[^#]*)?(#.*)?/,
        Tn = function(a) {
            var b = [],
                c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(wb(String(d))))
                }
            var e = b.join("*");
            return ["1", Sn(e), e].join("*")
        };

    function Sn(a, b) {
        var c = [Ec.userAgent, (new Date).getTimezoneOffset(), Ec.userLanguage || Ec.language, Math.floor(Qa() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Hn)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, k = 0; 8 > k; k++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Hn = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Hn[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function Un() {
        return function(a) {
            var b = Dn(z.location.href),
                c = b.search.replace("?", ""),
                d = yn(c, "_gl", !1, !0) || "";
            a.query = Vn(d) || {};
            var e = Bn(b, "fragment"),
                f;
            var g = -1;
            if (Ya(e, "_gl=")) g = 4;
            else {
                var k = e.indexOf("&_gl=");
                0 < k && (g = k + 3 + 2)
            }
            if (0 > g) f = void 0;
            else {
                var m = e.indexOf("&", g);
                f = 0 > m ? e.substring(g) : e.substring(g, m)
            }
            a.fragment = Vn(f || "") || {}
        }
    }

    function Wn(a, b) {
        var c = (new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var Xn = function(a, b) {
            b || (b = "_gl");
            var c = Rn.exec(a);
            if (!c) return "";
            var d = c[1],
                e = Wn(b, (c[2] || "").slice(1)),
                f = Wn(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        Yn = function(a) {
            var b = Un(),
                c = Kn();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Ua(d, e.query), a && Ua(d, e.fragment));
            return d
        },
        Vn = function(a) {
            try {
                var b = Zn(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = xb(d[e + 1]);
                        c[f] = g
                    }
                    zb("TAGGING", 6);
                    return c
                }
            } catch (k) {
                zb("TAGGING",
                    8)
            }
        };

    function Zn(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = On.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var k = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === Sn(k, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return k;
                zb("TAGGING", 7)
            }
        }
    }

    function $n(a, b, c, d) {
        function e(p) {
            p = Wn(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Rn.exec(c);
        if (!f) return "";
        var g = f[1],
            k = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : k = "?" + e(k.substring(1));
        return "" + g + k + m
    }

    function ao(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Nn(b, 1, c),
            e = Nn(b, 2, c),
            f = Nn(b, 3, c);
        if (Va(d)) {
            var g = Tn(d);
            c ? bo("_gl", g, a) : co("_gl", g, a, !1)
        }
        if (!c && Va(e)) {
            var k = Tn(e);
            co("_gl", k, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m)) a: {
                var n = m,
                    p = f[m],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        co(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        bo(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && $n(n, p, q)
            }
    }

    function co(a, b, c, d) {
        if (c.href) {
            var e = $n(a, b, c.href, void 0 === d ? !1 : d);
            Lb.test(e) && (c.href = e)
        }
    }

    function bo(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var k = e[g];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = B.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = $n(a, b, c.action);
                Lb.test(n) && (c.action = n)
            }
        }
    }

    function In(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || ao(e, e.hostname)
            }
        } catch (g) {}
    }

    function Jn(a) {
        try {
            if (a.action) {
                var b = Bn(Dn(a.action), "host");
                ao(a, b)
            }
        } catch (c) {}
    }
    var eo = function(a, b, c, d) {
            Ln();
            Mn(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        fo = function(a, b) {
            Ln();
            Mn(a, [An(z.location, "host", !0)], b, !0, !0)
        },
        go = function() {
            var a = B.location.hostname,
                b = Pn.exec(B.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var k = a.replace(Qn, ""),
                m = e.replace(Qn, ""),
                n;
            if (!(n = k === m)) {
                var p = "." + m;
                n = k.substring(k.length - p.length,
                    k.length) === p
            }
            return n
        },
        ho = function(a, b) {
            return !1 === a ? !1 : a || b || go()
        };
    var io = ["1"],
        jo = {},
        ko = {},
        po = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = lo(a.prefix);
            if (!jo[c])
                if (mo(c, a.path, a.domain)) {
                    var d = ko[lo(a.prefix)];
                    no(a, d ? d.id : void 0, d ? d.uh : void 0)
                } else {
                    var e = Fn("auiddc");
                    if (e) zb("TAGGING", 17), jo[c] = e;
                    else if (b) {
                        var f = lo(a.prefix),
                            g = Wm();
                        if (0 === oo(f, g, a)) {
                            var k = Gc("google_tag_data", {});
                            k._gcl_au || (k._gcl_au = g)
                        }
                        mo(c, a.path, a.domain)
                    }
                }
        };

    function no(a, b, c) {
        var d = lo(a.prefix),
            e = jo[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var k = e;
                    b && (k = e + "." + b + "." + (c ? c : Math.floor(Qa() / 1E3)));
                    oo(d, k, a, 1E3 * g)
                }
            }
        }
    }

    function oo(a, b, c, d) {
        var e = $m(b, "1", c.domain, c.path),
            f = Gn(c, d);
        f.Eb = "ad_storage";
        return Sm(a, e, f)
    }

    function mo(a, b, c) {
        var d = Zm(a, b, c, io, "ad_storage");
        if (!d) return !1;
        qo(a, d);
        return !0
    }

    function qo(a, b) {
        var c = b.split(".");
        5 === c.length ? (jo[a] = c.slice(0, 2).join("."), ko[a] = {
            id: c.slice(2, 4).join("."),
            uh: Number(c[4]) || 0
        }) : 3 === c.length ? ko[a] = {
            id: c.slice(0, 2).join("."),
            uh: Number(c[2]) || 0
        } : jo[a] = b
    }

    function lo(a) {
        return (a || "_gcl") + "_au"
    }

    function ro(a) {
        uj().h() ? Oj(function() {
            Hj("ad_storage") ? a() : Pj(a, "ad_storage")
        }, ["ad_storage"]) : a()
    }

    function so(a) {
        var b = Yn(!0),
            c = lo(a.prefix);
        ro(function() {
            var d = b[c];
            if (d) {
                qo(c, d);
                var e = 1E3 * Number(jo[c].split(".")[1]);
                if (e) {
                    zb("TAGGING", 16);
                    var f = Gn(a, e);
                    f.Eb = "ad_storage";
                    var g = $m(d, "1", a.domain, a.path);
                    Sm(c, g, f)
                }
            }
        })
    }

    function to(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {},
                k = Zm(a, e.path, e.domain, io, "ad_storage");
            k && (g[a] = k);
            return g
        };
        ro(function() {
            eo(f, b, c, d)
        })
    };
    var uo = function(a) {
        for (var b = [], c = B.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Mh: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, k) {
            return k.timestamp - g.timestamp
        });
        return b
    };

    function vo(a, b) {
        var c = uo(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Mh] || (d[c[e].Mh] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    X: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Mh].push(g)
            }
        }
        return d
    };
    var wo = /^\w+$/,
        xo = /^[\w-]+$/,
        yo = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        zo = function() {
            return uj().h() ? Hj("ad_storage") : !0
        },
        Ao = function(a, b) {
            Jj("ad_storage") ? zo() ? a() : Pj(a, "ad_storage") : b ? zb("TAGGING", 3) : Oj(function() {
                Ao(a, !0)
            }, ["ad_storage"])
        },
        Co = function(a) {
            return Bo(a).map(function(b) {
                return b.X
            })
        },
        Bo = function(a) {
            var b = [];
            if (!wm(z) || !B.cookie) return b;
            var c = zm(a, B.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    X: d.X
                }, e++) {
                var f = Do(c[e]);
                if (null !=
                    f) {
                    var g = f,
                        k = g.version;
                    d.X = g.X;
                    var m = g.timestamp,
                        n = g.labels,
                        p = Ea(b, function(q) {
                            return function(r) {
                                return r.X === q.X
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Eo(p.labels, n || [])) : b.push({
                        version: k,
                        X: d.X,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return Fo(b)
        };

    function Eo(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function Go(a) {
        return a && "string" == typeof a && a.match(wo) ? a : "_gcl"
    }
    var Io = function() {
            var a = Dn(z.location.href),
                b = Bn(a, "query", !1, void 0, "gclid"),
                c = Bn(a, "query", !1, void 0, "gclsrc"),
                d = Bn(a, "query", !1, void 0, "wbraid"),
                e = Bn(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || yn(f, "gclid", !1);
                c = c || yn(f, "gclsrc", !1);
                d = d || yn(f, "wbraid", !1)
            }
            return Ho(b, c, e, d)
        },
        Ho = function(a, b, c, d) {
            var e = {},
                f = function(g, k) {
                    e[k] || (e[k] = []);
                    e[k].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && xo.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(xo)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        Ko = function(a) {
            var b = Io();
            Ao(function() {
                Jo(b, !1, a)
            })
        };

    function Jo(a, b, c, d, e) {
        function f(w, x) {
            var y = Lo(w, g);
            y && (Sm(y, x, k), m = !0)
        }
        c = c || {};
        e = e || [];
        var g = Go(c.prefix);
        d = d || Qa();
        var k = Gn(c, d, !0);
        k.Eb = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var x = ["GCL", n, w];
                0 < e.length && x.push(e.join("."));
                return x.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!m && a.gb) {
            var q = a.gb[0],
                r = Lo("gb", g),
                t = !1;
            if (!b)
                for (var u = Bo(r), v = 0; v < u.length; v++) u[v].X === q && u[v].labels &&
                    0 < u[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }
    var No = function(a, b) {
            var c = Yn(!0);
            Ao(function() {
                for (var d = Go(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== yo[f]) {
                        var g = Lo(f, d),
                            k = c[g];
                        if (k) {
                            var m = Math.min(Mo(k), Qa()),
                                n;
                            b: {
                                var p = m;
                                if (wm(z))
                                    for (var q = zm(g, B.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (Mo(q[r]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var t = Gn(b, m, !0);
                                t.Eb = "ad_storage";
                                Sm(g, k, t)
                            }
                        }
                    }
                }
                Jo(Ho(c.gclid, c.gclsrc), !1, b)
            })
        },
        Lo = function(a, b) {
            var c = yo[a];
            if (void 0 !== c) return b + c
        },
        Mo = function(a) {
            return 0 !== Oo(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function Do(a) {
        var b = Oo(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            X: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function Oo(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !xo.test(a[2]) ? [] : a
    }
    var Po = function(a, b, c, d, e) {
            if (Da(b) && wm(z)) {
                var f = Go(e),
                    g = function() {
                        for (var k = {}, m = 0; m < a.length; ++m) {
                            var n = Lo(a[m], f);
                            if (n) {
                                var p = zm(n, B.cookie, void 0, "ad_storage");
                                p.length && (k[n] = p.sort()[p.length - 1])
                            }
                        }
                        return k
                    };
                Ao(function() {
                    eo(g, b, c, d)
                })
            }
        },
        Fo = function(a) {
            return a.filter(function(b) {
                return xo.test(b.X)
            })
        },
        Qo = function(a, b) {
            if (wm(z)) {
                for (var c = Go(b.prefix), d = {}, e = 0; e < a.length; e++) yo[a[e]] && (d[a[e]] = yo[a[e]]);
                Ao(function() {
                    l(d, function(f, g) {
                        var k = zm(c + g, B.cookie, void 0, "ad_storage");
                        k.sort(function(t,
                            u) {
                            return Mo(u) - Mo(t)
                        });
                        if (k.length) {
                            var m = k[0],
                                n = Mo(m),
                                p = 0 !== Oo(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== Oo(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [r];
                            Jo(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function Ro(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var So = function(a) {
            function b(e, f, g) {
                g && (e[f] = g)
            }
            if (Kj()) {
                var c = Io();
                if (Ro(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    fo(function() {
                        return d
                    }, 3);
                    fo(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        To = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!zo()) return e;
            var f = Bo(a);
            if (!f.length) return e;
            for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var k = f[0],
                    m = f[0].timestamp,
                    n = [k.version, Math.round(m /
                        1E3), k.X].concat(k.labels || [], [b]).join("."),
                    p = Gn(c, m, !0);
                p.Eb = "ad_storage";
                Sm(a, n, p)
            }
            return e
        };

    function Uo(a, b) {
        var c = Go(b),
            d = Lo(a, c);
        if (!d) return 0;
        for (var e = Bo(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Vo(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var Wo = function(a) {
        var b = Math.max(Uo("aw", a), Vo(zo() ? vo() : {}));
        return Math.max(Uo("gb", a), Vo(zo() ? vo("_gac_gb", !0) : {})) > b
    };
    var Xo = function(a, b) {
            var c = !(Q(79) ? R(N.g.N) : 1) || a && !R(N.g.I);
            return b && c ? "0" : b
        },
        $o = function(a) {
            function b(w) {
                var x = Q(79) ? R(N.g.N) : !0,
                    y = k;
                Q(79) && !R(N.g.N) && (y = !1);
                var A;
                pi.reported_gclid || (pi.reported_gclid = {});
                A = pi.reported_gclid;
                var C = function() {
                    var da = g.prefix || "_gcl";
                    return Q(79) ? (y ? da : "") + "." + (R(N.g.I) ? 1 : 0) + "." + (R(N.g.N) ? 1 : 0) : k && R(N.g.I) ? n + "." + da + (w ? "gcu" : "gcs") : n + (w ? "gcu" : "gcs")
                }();
                if (!A[C]) {
                    A[C] = !0;
                    var D = [],
                        G = {},
                        F = function(da, ja) {
                            ja && (D.push(da + "=" + encodeURIComponent(ja)), G[da] = !0)
                        },
                        I = "https://www.google.com";
                    if (Kj() || Q(44)) {
                        var O = R(N.g.I);
                        F("gcs", km());
                        w && F("gcu", "1");
                        (Q(48) || Lj()) && F("gcd", om(f));
                        F("rnd", an());
                        if ((!n || p && "aw.ds" !== p) && R(N.g.I) && x) {
                            var S = Co("_gcl_aw");
                            F("gclaw", S.join("."))
                        }
                        F("url", String(z.location).split(/[?#]/)[0]);
                        F("dclid", Xo(d, q));
                        O || (I = "https://pagead2.googlesyndication.com")
                    }
                    Q(50) && (sm() && F("dma_cps", pm()), F("dma", rm()));
                    Q(81) && Ml(Vl()) && F("tcfd", tm());
                    F("gdpr_consent",
                        bm() || "");
                    F("gdpr", cm() || "");
                    "1" === Yn(!1)._up && F("gtm_up", "1");
                    F("gclid", Xo(d, n));
                    F("gclsrc", p);
                    if (!(G.gclid || G.dclid || G.gclaw) && (F("gbraid", Xo(d, r)), !G.gbraid && (Kj() || Q(44)) && R(N.g.I))) {
                        var W = Co("_gcl_gb");
                        0 < W.length && F("gclgb", W.join("."))
                    }
                    F("gtm", dn(!e));
                    k && R(N.g.I) && (po(g || {}), y && F("auid", jo[lo(g.prefix)] || ""));
                    Zo || a.lj && F("did", a.lj);
                    a.ih && F("gdid", a.ih);
                    a.eh && F("edid", a.eh);
                    var ha = Q(26) ? nn() : null;
                    if (ha) {
                        var X = function(da, ja) {
                            D.push(da + "=" + encodeURIComponent(ja));
                            G[da] = !0
                        };
                        X("uaa", ha.architecture);
                        X("uab", ha.bitness);
                        ha.fullVersionList && X("uafvl", ha.fullVersionList.map(function(da) {
                            return encodeURIComponent(da.brand || "") + ";" + encodeURIComponent(da.version || "")
                        }).join("|"));
                        X("uam", ha.model);
                        X("uap", ha.platform);
                        X("uapv", ha.platformVersion);
                        X("uaw", ha.wow64 ? "1" : "0")
                    }
                    var T = I + "/pagead/landing?" + D.join("&");
                    Vc(T)
                }
            }
            var c = !!a.Xg,
                d = !!a.Nf,
                e = a.Ij,
                f = a.s,
                g = void 0 === a.dd ? {} : a.dd,
                k = void 0 === a.Hf ? !0 : a.Hf,
                m = Io(),
                n = m.gclid || "",
                p = m.gclsrc,
                q = m.dclid || "",
                r = m.gbraid || "",
                t = !c && ((!n || p && "aw.ds" !== p ? !1 : !0) || r),
                u =
                Kj();
            if (t || u)
                if (u) {
                    var v = Q(79) ? [N.g.I, N.g.N, N.g.nb] : [N.g.I];
                    ak(function() {
                        b();
                        R(v) || Zj(function(w) {
                            return b(!0, w.consentEventId, w.consentPriorityId)
                        }, v)
                    }, v)
                } else b()
        },
        Yo = function(a) {
            var b = String(z.location).split(/[?#]/)[0],
                c = oi.Uj || z._CONSENT_MODE_SALT;
            return a ? c ? String(um(b + a + c)) : "0" : ""
        },
        Zo = !1;
    var ap = /[A-Z]+/,
        bp = /\s/,
        cp = function(a, b) {
            if (h(a)) {
                a = Oa(a);
                var c = a.indexOf("-");
                if (!(0 > c)) {
                    var d = a.substring(0, c);
                    if (ap.test(d)) {
                        var e = a.substring(c + 1),
                            f;
                        if (b) {
                            var g = function(n) {
                                var p = n.indexOf("/");
                                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
                            };
                            f = g(e);
                            if ("DC" === d && 2 === f.length) {
                                var k = g(f[1]);
                                2 === k.length && (f[1] = k[0], f.push(k[1]))
                            }
                        } else {
                            f = e.split("/");
                            for (var m = 0; m < f.length; m++)
                                if (!f[m] || bp.test(f[m]) && ("AW" !== d || 1 !== m)) return
                        }
                        return {
                            id: a,
                            prefix: d,
                            ba: d + "-" + f[0],
                            O: f
                        }
                    }
                }
            }
        },
        ep = function(a, b) {
            for (var c = {}, d = 0; d < a.length; ++d) {
                var e = cp(a[d], b);
                e && (c[e.id] = e)
            }
            dp(c);
            var f = [];
            l(c, function(g, k) {
                f.push(k)
            });
            return f
        };

    function dp(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.O[1] && b.push(d.ba)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var fp = function(a, b, c, d) {
        var e = Mc(),
            f;
        if (1 === e) a: {
            var g = Di;g = g.toLowerCase();
            for (var k = "https://" + g, m = "http://" + g, n = 1, p = B.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (0 === r.indexOf(m)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === r.indexOf(k) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != z.location.protocol ? a : b) + c
    };
    var hp = function(a, b, c) {
            if (z[a.functionName]) return b.xh && E(b.xh), z[a.functionName];
            var d = gp();
            z[a.functionName] = d;
            if (a.yf)
                for (var e = 0; e < a.yf.length; e++) z[a.yf[e]] = z[a.yf[e]] || gp();
            a.Gf && void 0 === z[a.Gf] && (z[a.Gf] = c);
            Lc(fp("https://", "http://", a.Ih), b.xh, b.Yl);
            return d
        },
        gp = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        ip = {
            functionName: "_googWcmImpl",
            Gf: "_googWcmAk",
            Ih: "www.gstatic.com/wcm/loader.js"
        },
        jp = {
            functionName: "_gaPhoneImpl",
            Gf: "ga_wpid",
            Ih: "www.gstatic.com/gaphone/loader.js"
        },
        kp = {
            Rj: "",
            Ik: "5"
        },
        lp = {
            functionName: "_googCallTrackingImpl",
            yf: [jp.functionName, ip.functionName],
            Ih: "www.gstatic.com/call-tracking/call-tracking_" + (kp.Rj || kp.Ik) + ".js"
        },
        mp = {},
        np = function(a, b, c, d) {
            M(22);
            if (c) {
                d = d || {};
                var e = hp(ip, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.Db && (f.autoreplace = c);
                e(2, d.Db, f, c, 0, Pa(), d.options)
            }
        },
        op = function(a, b, c, d) {
            M(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Pa()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    mp[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.O.length ? (e.adData = {
                            ak: g.O[0],
                            cl: g.O[1]
                        }, mp[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                            gaWpid: g.ba
                        }, mp[g.id] = !0))
                }(e.gaData || e.adData) && hp(lp, d)(d.Db, e, d.options)
            }
        },
        pp = function() {
            var a = !1;
            return a
        },
        qp = function(a, b) {
            if (a)
                if (bn()) {} else {
                    if (h(a)) {
                        var c =
                            cp(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = U(b, N.g.Di);
                    if (f && Da(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var k = cp(f[g]);
                            k && (d.push(k), (a.id === k.id || a.id === a.ba && a.ba === k.ba) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var m = U(b, N.g.Ag),
                            n;
                        if (m) {
                            Da(m) ? n = m : n = [m];
                            var p = U(b, N.g.yg),
                                q = U(b, N.g.zg),
                                r = U(b, N.g.Bg),
                                t = U(b, N.g.Ci),
                                u = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var w = 0; w < n.length; w++)
                                if (w < v)
                                    if (d) op(d, n[w], t, {
                                        Db: u,
                                        options: r
                                    });
                                    else if ("AW" === a.prefix && a.O[1]) pp() ? op([a], n[w], t || "US", {
                                Db: u,
                                options: r
                            }) : np(a.O[0], a.O[1], n[w], {
                                Db: u,
                                options: r
                            });
                            else if ("UA" === a.prefix)
                                if (pp()) op([a], n[w], t || "US", {
                                    Db: u
                                });
                                else {
                                    var x = a.ba,
                                        y = n[w],
                                        A = {
                                            Db: u
                                        };
                                    M(23);
                                    if (y) {
                                        A = A || {};
                                        var C = hp(jp, A, x),
                                            D = {};
                                        void 0 !== A.Db ? D.receiver = A.Db : D.replace = y;
                                        D.ga_wpid = x;
                                        D.destination = y;
                                        C(2, Pa(), D)
                                    }
                                }
                        }
                    }
                }
        };
    var rp, sp = !1;

    function tp() {
        sp = !0;
        rp = rp || {}
    }
    var up = function(a) {
        sp || tp();
        return rp[a]
    };
    var vp = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.s = c;
        this.h = {};
        this.metadata = mb(c.eventMetadata || {});
        this.isAborted = !1
    };
    vp.prototype.copyToHitData = function(a, b) {
        var c = U(this.s, a);
        void 0 !== c ? this.h[a] = c : void 0 !== b && (this.h[a] = b)
    };
    var wp = function(a, b, c) {
        var d = up(a.target.ba);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };

    function xp(a) {
        return {
            getDestinationId: function() {
                return a.target.ba
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.h[b]
            },
            setHitData: function(b, c) {
                a.h[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.h[b] && (a.h[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return U(a.s, b)
            },
            pj: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.h)
            }
        }
    };
    var zp = function(a) {
            var b = yp[a.target.ba];
            if (!a.isAborted && b)
                for (var c = xp(a), d = 0; d < b.length; ++d) {
                    try {
                        b[d](c)
                    } catch (e) {
                        a.isAborted = !0
                    }
                    if (a.isAborted) break
                }
        },
        Ap = function(a, b) {
            var c = yp[a];
            c || (c = yp[a] = []);
            c.push(b)
        },
        yp = {};
    var Dp = function(a) {
            a = a || {};
            var b;
            if (R(Bp)) {
                (b = Cp(a)) || (b = Wm());
                var c = a,
                    d = lo(c.prefix);
                no(c, b);
                delete jo[d];
                delete ko[d];
                mo(d, c.path, c.domain);
                return Cp(a)
            }
        },
        Cp = function(a) {
            if (R(Bp)) {
                a = a || {};
                po(a, !1);
                var b = ko[lo(Go(a.prefix))];
                if (b && !(18E5 < Qa() - 1E3 * b.uh)) {
                    var c = b.id,
                        d = c.split(".");
                    if (2 === d.length && !(864E5 < Qa() - 1E3 * (Number(d[1]) || 0))) return c
                }
            }
        },
        Bp = N.g.I;
    var Ep = function(a, b, c) {
            var d = pi.joined_auid = pi.joined_auid || {},
                e = (c ? a || "_gcl" : "") + "." + b;
            if (d[e]) return !0;
            d[e] = !0;
            return !1
        },
        Fp = function() {
            var a = Dn(z.location.href),
                b = Bn(a, "query", !1, void 0, "gad_source");
            if (void 0 === b) {
                var c = a.hash.replace("#", "");
                b = yn(c, "gad_source", !1)
            }
            return b
        },
        Gp = function() {
            var a = Dn(z.location.href).search.replace("?", "");
            return "1" === yn(a, "gad", !1, !0)
        },
        Hp = function(a) {
            var b = [];
            l(a, function(c, d) {
                d = Fo(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].X);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        },
        Ip = function(a, b, c) {
            if ("aw" === a || "dc" === a || "gb" === a) {
                var d = Fn("gcl" + a);
                if (d) return d.split(".")
            }
            var e = !Q(79) || R(N.g.N),
                f = Go(b);
            if ("_gcl" == f) {
                c = void 0 === c ? !0 : c;
                var g = !e || !R(N.g.I) && c,
                    k;
                k = Io()[a] || [];
                if (0 < k.length) return g ? ["0"] : k
            }
            if (!e) return [];
            var m = Lo(a, f);
            return m ? Co(m) : []
        },
        Jp = function(a) {
            var b = Q(79) ? [N.g.I, N.g.N] : [N.g.I];
            ak(function() {
                a();
                R(b) || Pj(a, b)
            }, b)
        },
        Kp = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        Lp = /^www.googleadservices.com$/,
        Mp = function(a, b) {
            return Ip("aw", a, b)
        },
        Np =
        function(a, b) {
            return Ip("dc", a, b)
        },
        Op = function(a) {
            var b = !Q(79) || R(N.g.N),
                c = Fn("gac");
            return c ? !b || !R(N.g.I) && a ? "0" : decodeURIComponent(c) : b ? Hp(zo() ? vo() : {}) : ""
        },
        Pp = function(a) {
            var b = !Q(79) || R(N.g.N),
                c = Fn("gacgb");
            return c ? !b || !R(N.g.I) && a ? "0" : decodeURIComponent(c) : b ? Hp(zo() ? vo("_gac_gb", !0) : {}) : ""
        },
        Qp = function(a) {
            var b = Io(),
                c = [],
                d = b.gclid,
                e = b.dclid,
                f = b.gclsrc || "aw",
                g = Q(41) && Gp(),
                k = void 0;
            Q(110) && (k = Fp());
            !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({
                X: d,
                ze: f
            });
            e && c.push({
                X: e,
                ze: "ds"
            });
            0 === c.length &&
                b.gbraid && c.push({
                    X: b.gbraid,
                    ze: "gb"
                });
            Q(34) && 0 === c.length && "aw.ds" === f && c.push({
                X: "",
                ze: "aw.ds"
            });
            Jp(function() {
                if (Q(79) && Q(86) || R(N.g.I)) {
                    var m = !Q(79) || R(N.g.N);
                    po(a);
                    var n;
                    if (m && (n = jo[lo(a.prefix)], void 0 === n && !Q(79))) return;
                    var p = m ? c : [],
                        q = [];
                    n && q.push("auid=" + n);
                    if (Q(9)) {
                        var r = B.referrer ? Bn(Dn(B.referrer), "host") : "";
                        0 === p.length && (Q(39) ? Kp.test(r) || Lp.test(r) : Kp.test(r)) && p.push({
                            X: "",
                            ze: ""
                        });
                        if (0 === p.length && !g && void 0 === k) return;
                        r && q.push("ref=" + encodeURIComponent(r));
                        var t = 1 === El() ? z.top.location.href :
                            z.location.href;
                        t = t.replace(/[\?#].*$/, "");
                        q.push("url=" + encodeURIComponent(t));
                        q.push("tft=" + Qa());
                        var u = Yc();
                        void 0 !== u && q.push("tfd=" + Math.round(u));
                        if (Q(33)) {
                            var v = El();
                            q.push("frm=" + v)
                        }
                        g && q.push("gad=1");
                        void 0 !== k && q.push("gad_source=" + encodeURIComponent(k))
                    }
                    var w = R(N.g.I) ? 'https://adservice.google.com/pagead/regclk' : "https://adservice.googlesyndication.com/pagead/regclk";
                    if (0 < p.length)
                        for (var x = 0; x < p.length; x++) {
                            var y = p[x],
                                A = y.X,
                                C = y.ze;
                            if (!Ep(a.prefix, C + "." + A, void 0 !== n)) {
                                var D = w + "?" + q.join("&");
                                "" !== A ? D = "gb" === C ? D + "&wbraid=" + A : D + "&gclid=" + A + "&gclsrc=" + C : "aw.ds" === C && (D += "&gclsrc=aw.ds");
                                Vc(D)
                            }
                        } else if ((g || void 0 !== k) && !Ep(a.prefix, "gad", void 0 !== n)) {
                            var G = w + "?" + q.join("&");
                            Vc(G)
                        }
                }
            })
        },
        Rp = function(a) {
            return Fn("gclaw") || Fn("gac") || 0 < (Io().aw || []).length ? !1 : 0 < (Io().gb || []).length ? !0 : Wo(a)
        };
    var Tp = function(a, b) {
            var c = a.uj,
                d = a.Kj;
            a.jj && (ho(c[N.g.oc], !!c[N.g.T]) && (No(Sp, b), so(b)), Ko(b), Qo(Sp, b), Qp(b));
            c[N.g.T] && (Po(Sp, c[N.g.T], c[N.g.Kb], !!c[N.g.wb], b.prefix), to(lo(b.prefix), c[N.g.T], c[N.g.Kb], !!c[N.g.wb], b), to("FPAU", c[N.g.T], c[N.g.Kb], !!c[N.g.wb], b));
            d && So(Sp)
        },
        Up = function(a, b, c, d) {
            var e = a.Nj,
                f = a.callback,
                g = a.wj;
            if ("function" === typeof f)
                if (e === N.g.pb && void 0 === g) {
                    var k = d(b.prefix, c);
                    0 === k.length ? f(void 0) : 1 === k.length ? f(k[0]) : f(k)
                } else e === N.g.jc ? (M(65), po(b, !1), f(jo[lo(b.prefix)])) :
                    f(g)
        },
        Sp = ["aw", "dc", "gb"];

    function Vp(a) {
        var b = U(a.s, N.g.vb),
            c = U(a.s, N.g.Jb);
        b && !c ? (a.eventName !== N.g.na && a.eventName !== N.g.vd && M(131), a.isAborted = !0) : !b && c && (M(132), a.isAborted = !0)
    };
    var Wp = function() {
        var a = Ec && Ec.userAgent || "";
        if (0 > a.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)) return !1;
        var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
        if ("" === b) return !1;
        for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
            if (void 0 === c[e]) return !0;
            if (d[e] != c[e]) return Number(d[e]) > Number(c[e])
        }
        return d.length >= c.length
    };
    var Xp = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        Yp = /^www.googleadservices.com$/,
        $p = function(a) {
            a || (a = Zp());
            return a.Km ? !1 : a.Al || a.Bl || a.Cl || a.jh || a.kl || a.rl ? !0 : !1
        },
        Zp = function() {
            var a = {},
                b = Yn(!0);
            a.Km = !!b._up;
            var c = Io();
            a.Al = void 0 !== c.aw;
            a.Bl = void 0 !== c.dc;
            a.Cl = void 0 !== c.gbraid;
            var d = Dn(z.location.href),
                e = Bn(d, "query", !1, void 0, "gad");
            a.jh = void 0 !== e;
            if (!a.jh) {
                var f = d.hash.replace("#", ""),
                    g = yn(f, "gad", !1);
                a.jh = void 0 !== g
            }
            var k = B.referrer ? Bn(Dn(B.referrer), "host") : "";
            a.rl = Xp.test(k);
            a.kl = Yp.test(k);
            return a
        };
    var aq = function() {
            var a = z.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        bq = function(a) {
            if (B.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
            var c = z.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    g = e.filter;
                if (g) {
                    var k = g.indexOf("opacity(");
                    0 <= k && (g = g.substring(k + 8, g.indexOf(")", k)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = z.getComputedStyle(d, null))
            }
            return !1
        };
    var cq = function() {
            var a = B.body,
                b = B.documentElement || a && a.parentElement,
                c, d;
            if (B.compatMode && "BackCompat" !== B.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
            else {
                var e = function(f, g) {
                    return f && g ? Math.min(f, g) : Math.max(f, g)
                };
                c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
            }
            return {
                width: d,
                height: c
            }
        },
        dq = function(a) {
            var b = cq(),
                c = b.height,
                d = b.width,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                g = e.right - e.left;
            return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right -
                d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
        };
    var eq = [],
        fq = !(!z.IntersectionObserver || !z.IntersectionObserverEntry),
        gq = function(a, b, c) {
            for (var d = new z.IntersectionObserver(a, {
                    threshold: c
                }), e = 0; e < b.length; e++) d.observe(b[e]);
            for (var f = 0; f < eq.length; f++)
                if (!eq[f]) return eq[f] = d, f;
            return eq.push(d) - 1
        },
        hq = function(a, b, c) {
            function d(k, m) {
                var n = {
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    },
                    p = {
                        boundingClientRect: k.getBoundingClientRect(),
                        intersectionRatio: m,
                        intersectionRect: n,
                        isIntersecting: 0 < m,
                        rootBounds: n,
                        target: k,
                        time: Qa()
                    };
                E(function() {
                    return a(p)
                })
            }
            for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
            c.sort(function(k, m) {
                return k - m
            });
            return function() {
                for (var k = 0; k < b.length; k++) {
                    var m = dq(b[k]);
                    if (m > e[k])
                        for (; f[k] < c.length - 1 && m >= c[f[k] + 1];) d(b[k], m), f[k]++;
                    else if (m < e[k])
                        for (; 0 <= f[k] && m <= c[f[k]];) d(b[k], m), f[k]--;
                    e[k] = m
                }
            }
        },
        iq = function(a, b, c) {
            for (var d = 0; d < c.length; d++) 1 < c[d] ? c[d] = 1 : 0 > c[d] && (c[d] = 0);
            if (fq) {
                var e = !1;
                E(function() {
                    e ||
                        hq(a, b, c)()
                });
                return gq(function(f) {
                    e = !0;
                    for (var g = {
                            Ge: 0
                        }; g.Ge < f.length; g = {
                            Ge: g.Ge
                        }, g.Ge++) E(function(k) {
                        return function() {
                            return a(f[k.Ge])
                        }
                    }(g))
                }, b, c)
            }
            return z.setInterval(hq(a, b, c), 1E3)
        },
        jq = function(a) {
            fq ? 0 <= a && a < eq.length && eq[a] && (eq[a].disconnect(), eq[a] = void 0) : z.clearInterval(a)
        };
    var lq = function(a, b, c) {
            var d = a.element,
                e = {
                    U: a.U,
                    type: a.ja,
                    tagName: d.tagName
                };
            b && (e.querySelector = kq(d));
            c && (e.isVisible = !bq(d));
            return e
        },
        mq = function(a, b, c) {
            return lq({
                element: a.element,
                U: a.U,
                ja: "1"
            }, b, c)
        },
        nq = function(a) {
            var b = !!a.hd + "." + !!a.jd;
            a && a.ve && a.ve.length && (b += "." + a.ve.join("."));
            a && a.hb && (b += "." + a.hb.email + "." + a.hb.phone + "." + a.hb.address);
            return b
        },
        qq = function(a) {
            if (0 != a.length) {
                var b;
                b = oq(a, function(c) {
                    return !pq.test(c.U)
                });
                b = oq(b, function(c) {
                    return "INPUT" === c.element.tagName.toUpperCase()
                });
                b = oq(b, function(c) {
                    return !bq(c.element)
                });
                return b[0]
            }
        },
        rq = function(a, b) {
            if (!b || 0 === b.length) return a;
            for (var c = [], d = 0; d < a.length; d++) {
                for (var e = !0, f = 0; f < b.length; f++) {
                    var g = b[f];
                    if (g && zh(a[d].element, g)) {
                        e = !1;
                        break
                    }
                }
                e && c.push(a[d])
            }
            return c
        },
        oq = function(a, b) {
            if (1 >= a.length) return a;
            var c = a.filter(b);
            return 0 == c.length ? a : c
        },
        kq = function(a) {
            var b;
            if (a === B.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] ===
                                        a) {
                                        e = g + 1;
                                        break a
                                    }
                                e = -1
                            } else e = 1
                        }
                        d = kq(a.parentElement) + ">:nth-child(" + e + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        tq = function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = d.textContent;
                "INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value);
                if (e) {
                    var f = e.match(sq);
                    if (f) {
                        var g = f[0],
                            k;
                        if (z.location) {
                            var m = An(z.location, "host", !0);
                            k = 0 <= g.toLowerCase().indexOf(m)
                        } else k = !1;
                        k || b.push({
                            element: d,
                            U: g
                        })
                    }
                }
            }
            return b
        },
        xq = function() {
            var a = [],
                b = B.body;
            if (!b) return {
                elements: a,
                status: "4"
            };
            for (var c = b.querySelectorAll("*"),
                    d = 0; d < c.length && 1E4 > d; d++) {
                var e = c[d];
                if (!(0 <= uq.indexOf(e.tagName.toUpperCase())) && e.children instanceof HTMLCollection) {
                    for (var f = !1, g = 0; g < e.childElementCount && 1E4 > g; g++)
                        if (!(0 <= vq.indexOf(e.children[g].tagName.toUpperCase()))) {
                            f = !0;
                            break
                        }(!f || Q(53) && -1 !== wq.indexOf(e.tagName)) && a.push(e)
                }
            }
            return {
                elements: a,
                status: 1E4 < c.length ? "2" : "1"
            }
        },
        yq = !0,
        zq = !1;
    var sq = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
        Aq = /@(gmail|googlemail)\./i,
        pq = /support|noreply/i,
        uq = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
        vq = ["BR"],
        Bq = {
            Nm: "1",
            Vm: "2",
            Om: "3",
            Qm: "4",
            Lm: "5",
            Wm: "6",
            Rm: "7"
        },
        Cq = {},
        wq = ["INPUT", "SELECT"];
    var Vq = function(a) {
            a = a || {
                hd: !0,
                jd: !0
            };
            a.hb = a.hb || {
                email: !0,
                phone: !1,
                address: !1
            };
            var b = nq(a),
                c = Cq[b];
            if (c && 200 > Qa() - c.timestamp) return c.result;
            var d = xq(),
                e = d.status,
                f = [],
                g, k, m = [];
            if (!Q(53)) {
                if (a.hb && a.hb.email) {
                    var n = tq(d.elements);
                    f = rq(n, a && a.ve);
                    g = qq(f);
                    10 < n.length && (e = "3")
                }!a.Jh && g && (f = [g]);
                for (var p = 0; p < f.length; p++) m.push(mq(f[p], a.hd, a.jd));
                m = m.slice(0, 10)
            } else if (a.hb) {}
            g && (k = mq(g, a.hd, a.jd));
            var D = {
                elements: m,
                Bh: k,
                status: e
            };
            Cq[b] = {
                timestamp: Qa(),
                result: D
            };
            return D
        },
        Wq = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.U.length + ":" + Aq.test(a.U)
        };

    function Xq() {
        return "attribution-reporting"
    }

    function Yq(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var Zq = !1;

    function $q() {
        if (Yq("join-ad-interest-group") && Ba(Ec.joinAdInterestGroup)) return !0;
        Zq || (Cl('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Zq = !0);
        return Yq("join-ad-interest-group") && Ba(Ec.joinAdInterestGroup)
    }

    function ar(a, b) {
        var c = void 0;
        try {
            c = B.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Qa() - d) {
                zb("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= B.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                zb("TAGGING", 10);
                return
            }
        } catch (e) {}
        Nc(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Qa()
        }, c)
    }

    function br() {
        return "https://td.doubleclick.net"
    };
    var cr = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        dr = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        er = /^\d+\.fls\.doubleclick\.net$/,
        fr = /;gac=([^;?]+)/,
        gr = /;gacgb=([^;?]+)/,
        hr = /;gclaw=([^;?]+)/,
        ir = /;gclgb=([^;?]+)/;

    function jr(a, b) {
        if (er.test(B.location.host)) {
            var c = B.location.href.match(b);
            return c && 2 == c.length && c[1].match(cr) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], g = a[e], k = 0; k < g.length; k++) f.push(g[k].X);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var kr = function(a, b, c) {
        var d = zo() ? vo("_gac_gb", !0) : {},
            e = [],
            f = !1,
            g;
        for (g in d) {
            var k = To("_gac_gb_" + g, a, b, c);
            f = f || 0 !== k.length && k.some(function(m) {
                return 1 === m
            });
            e.push(g + ":" + k.join(","))
        }
        return {
            jl: f ? e.join(";") : "",
            il: jr(d, gr)
        }
    };

    function lr(a, b, c) {
        if (er.test(B.location.host)) {
            var d = B.location.href.match(c);
            if (d && 2 == d.length && d[1].match(dr)) return [{
                X: d[1]
            }]
        } else return Bo((a || "_gcl") + b);
        return []
    }
    var mr = function(a) {
            return lr(a, "_aw", hr).map(function(b) {
                return b.X
            }).join(".")
        },
        nr = function(a) {
            return lr(a, "_gb", ir).map(function(b) {
                return b.X
            }).join(".")
        },
        or = function(a, b) {
            var c = To((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var pr = function() {
        if (Ba(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var qr = function(a) {
            if (null != a) {
                var b = String(a).substring(0, 512),
                    c = b.indexOf("#");
                return -1 == c ? b : b.substring(0, c)
            }
            return ""
        },
        rr = function() {
            var a = B.title;
            if (void 0 == a || "" == a) return "";
            var b = function(d) {
                try {
                    return decodeURIComponent(d), !0
                } catch (e) {
                    return !1
                }
            };
            a = encodeURIComponent(a);
            for (var c = 256; !b(a.substr(0, c));) c--;
            return decodeURIComponent(a.substr(0, c))
        },
        sr = function(a) {
            a.metadata.speculative_in_message || (a.metadata.speculative = !1)
        },
        tr = function(a, b) {
            Da(b) || (b = [b]);
            return 0 <= b.indexOf(a.metadata.hit_type)
        },
        ur = function(a) {
            var b = a.target.O[0];
            if (b) {
                a.h[N.g.Kc] = b;
                var c = a.target.O[1];
                c && (a.h[N.g.ab] = c)
            } else a.isAborted = !0
        },
        vr = function(a) {
            if (tr(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])) {
                var b = a.h[N.g.ab],
                    c = !0 === U(a.s, N.g.Ye);
                c && (a.metadata.remarketing_only = !0);
                switch (a.metadata.hit_type) {
                    case "conversion":
                        !c && b && sr(a);
                        ej() && (a.metadata.is_gcp_conversion = !0);
                        break;
                    case "user_data_lead":
                    case "user_data_web":
                        !c && b && (a.isAborted = !0);
                        break;
                    case "remarketing":
                        !c && b || sr(a)
                }
                a.h[N.g.Pi] = a.metadata.is_gcp_conversion ?
                    "www.google.com" : "www.googleadservices.com"
            }
        },
        wr = function(a) {
            tr(a, ["conversion", "remarketing"])
        },
        xr = function(a) {
            if (tr(a, ["conversion", "remarketing"])) {
                var b = El();
                a.h[N.g.ug] = b;
                var c = U(a.s, N.g.ra);
                c || (c = 1 === b ? z.top.location.href : z.location.href);
                a.h[N.g.ra] = qr(c);
                a.copyToHitData(N.g.Ea, B.referrer);
                a.h[N.g.xb] = rr();
                a.copyToHitData(N.g.Ia);
                var d = aq();
                a.h[N.g.yb] = d.width + "x" + d.height;
                if (Q(38)) {
                    for (var e, f = z, g = f; f && f != f.parent;) f = f.parent, Al(f) && (g = f);
                    e = g;
                    var k;
                    var m = e.location.href;
                    if (e === e.top) k = {
                        url: m,
                        Kl: !0
                    };
                    else {
                        var n = !1,
                            p = e.document;
                        p && p.referrer && (m = p.referrer, e.parent === e.top && (n = !0));
                        var q = e.location.ancestorOrigins;
                        if (q) {
                            var r = q[q.length - 1];
                            r && -1 === m.indexOf(r) && (n = !1, m = r)
                        }
                        k = {
                            url: m,
                            Kl: n
                        }
                    }
                    var t = k;
                    t.url && c !== t.url && (a.h[N.g.pf] = qr(t.url))
                }
            }
        },
        yr = function(a) {
            tr(a, ["conversion", "remarketing"]) && (a.copyToHitData(N.g.sa), a.copyToHitData(N.g.fa), a.copyToHitData(N.g.qa), ("remarketing" === a.metadata.hit_type || Q(72)) && a.copyToHitData(N.g.za))
        },
        zr = function(a) {
            if (Q(8))
                if (!pn(z)) M(87);
                else if (void 0 !==
                rn) {
                M(85);
                var b = nn();
                b ? vn(b, a) : M(86)
            }
        },
        Cr = function(a) {
            !tr(a, ["conversion"]) || Q(79) && !R(N.g.N) || (!0 === z._gtmpcm || Wp() ? a.h[N.g.Hb] = "2" : Q(5) && (Ar || Yq(Xq()) || (Cl('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Ar = !0), Br || (Br = !0, Cl('A+xK4jmZTgh1KBVry/UZKUE3h6Dr9HPPioFS4KNCzify+KEoOii7z/goKS2zgbAOwhpZ1GZllpdz7XviivJM9gcAAACFeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiQXR0cmlidXRpb25SZXBvcnRpbmdDcm9zc0FwcFdlYiIsImV4cGlyeSI6MTcwNzI2Mzk5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d')), Yq(Xq()) && (a.h[N.g.Hb] = "1")))
        },
        Dr = function(a) {
            tr(a, ["conversion", "remarketing"]) && Q(6) && R(N.g.I) && (!Q(79) || R(N.g.N)) && !1 !== U(a.s, N.g.Ga) && !1 !== U(a.s, N.g.da) && !1 !== U(a.s, N.g.Gb) && !1 !== U(a.s, N.g.Ma) && $q() && (a.h[N.g.kg] =
                "1", a.metadata.send_fledge_experiment = !0)
        },
        Er = function(a) {
            var b = function(d) {
                return U(a.s, d)
            };
            a.metadata.conversion_linker_enabled = !1 !== b(N.g.Ca);
            var c = {
                prefix: b(N.g.Ka) || b(N.g.La),
                domain: b(N.g.Sa),
                Tb: b(N.g.Ha),
                flags: b(N.g.Ta)
            };
            a.metadata.cookie_options = c;
            a.metadata.redact_ads_data = null != b(N.g.oa) && !1 !== b(N.g.oa);
            a.metadata.allow_ad_personalization = !1 !== b(N.g.da)
        },
        Fr = function(a) {
            if (wp(a, "ccd_add_1p_data", !1) && R(N.g.I)) {
                var b = a.s.B[N.g.ce];
                if (cj(b)) {
                    var c = U(a.s, N.g.wa);
                    null === c ? a.metadata.user_data_from_code =
                        null : (b.enable_code && lb(c) && (a.metadata.user_data_from_code = c), lb(b.selectors) && (a.metadata.user_data_from_manual = bj(b.selectors)))
                }
            }
        },
        Gr = function(a) {
            var b = !a.metadata.send_user_data_hit && tr(a, ["conversion", "user_data_web"]),
                c = !wp(a, "ccd_add_1p_data", !1) && tr(a, "user_data_lead");
            if ((b || c) && R(N.g.I)) {
                var d = "conversion" === a.metadata.hit_type,
                    e = a.s,
                    f = void 0,
                    g = U(e, N.g.wa);
                if (d) {
                    var k = (U(e, N.g.Ed) || {})[a.h[N.g.ab]];
                    if (!0 === U(e, N.g.wd) || k) {
                        var m;
                        var n;
                        if (k) b: {
                            switch (k.enhanced_conversions_mode) {
                                case "manual":
                                    if (g &&
                                        lb(g)) {
                                        n = g;
                                        break b
                                    }
                                    var p = k.enhanced_conversions_manual_var;
                                    n = void 0 !== p ? p : z.enhanced_conversion_data;
                                    break b;
                                case "automatic":
                                    n = bj(k[N.g.ig]);
                                    break b
                            }
                            n = void 0
                        }
                        else n = z.enhanced_conversion_data;
                        var q = n,
                            r = (k || {}).enhanced_conversions_mode,
                            t;
                        if (q) {
                            if ("manual" === r) switch (q._tag_mode) {
                                case "CODE":
                                    t = "c";
                                    break;
                                case "AUTO":
                                    t = "a";
                                    break;
                                case "MANUAL":
                                    t = "m";
                                    break;
                                default:
                                    t = "c"
                            } else t = "automatic" === r ? dj(k) ? "a" : "m" : "c";
                            m = {
                                U: q,
                                Mj: t
                            }
                        } else m = {
                            U: q,
                            Mj: void 0
                        };
                        var u = m,
                            v = u.Mj;
                        f = u.U;
                        a.h[N.g.be] = v
                    }
                } else if (a.s.isGtmEvent) {
                    sr(a);
                    a.metadata.user_data = g;
                    return
                }
                a.metadata.user_data = f
            }
        },
        Hr = function(a) {
            tr(a, ["conversion", "remarketing"]) && (a.s.isGtmEvent ? "conversion" !== a.metadata.hit_type && a.eventName && (a.h[N.g.jg] = a.eventName) : a.h[N.g.jg] = a.eventName, l(a.s.h, function(b, c) {
                li[b.split(".")[0]] || (a.h[b] = c)
            }))
        },
        Ir = function(a) {
            if (a.eventName === N.g.na && (a.metadata.is_config_command = !0, tr(a, "conversion") && (a.metadata.speculative = !0), !tr(a, "remarketing") || !1 !== U(a.s, N.g.Gb) && !1 !== U(a.s, N.g.Ma) || (a.metadata.speculative = !0), tr(a, "landing_page"))) {
                var b =
                    U(a.s, N.g.rb),
                    c = U(a.s, N.g.Da) || {},
                    d = U(a.s, N.g.Ab),
                    e = a.metadata.conversion_linker_enabled,
                    f = a.metadata.cookie_options;
                Tp({
                    jj: e,
                    Sk: b,
                    uj: c,
                    Kj: d
                }, f);
                qp(a.target, a.s);
                $o({
                    Xg: !1,
                    Nf: a.metadata.redact_ads_data,
                    Ij: a.target.id,
                    s: a.s,
                    dd: e ? f : void 0,
                    Hf: e,
                    lj: a.h[N.g.jf],
                    ih: a.h[N.g.ub],
                    eh: a.h[N.g.sb]
                });
                a.isAborted = !0
            }
        },
        Jr = function(a) {
            if (!wp(a, "hasPreAutoPiiCcdRule", !1) && tr(a, "conversion") && R(N.g.I)) {
                var b = (U(a.s, N.g.Ed) || {})[a.h[N.g.ab]],
                    c = a.h[N.g.Kc],
                    d;
                if (!(d = dj(b)))
                    if (pj() && yq)
                        if (zq) d = !0;
                        else {
                            var e = up("AW-" + c);
                            d = !!e && !!e.preAutoPii
                        }
                else d = !1;
                if (d) {
                    var f = Qa(),
                        g = Vq({
                            hd: !0,
                            jd: !0,
                            Jh: !0
                        });
                    if (0 !== g.elements.length) {
                        for (var k = [], m = 0; m < g.elements.length; ++m) {
                            var n = g.elements[m];
                            k.push(n.querySelector + "*" + Wq(n) + "*" + n.type)
                        }
                        a.h[N.g.Gg] = k.join("~");
                        var p = g.Bh;
                        p && (a.h[N.g.Hg] = p.querySelector, a.h[N.g.Fg] = Wq(p));
                        a.h[N.g.Eg] = String(Qa() - f);
                        a.h[N.g.Ig] = g.status
                    }
                }
            }
        },
        Kr = function(a) {
            if (a.eventName === N.g.Ja && !a.s.isGtmEvent) {
                if (!a.metadata.consent_updated && tr(a, "conversion")) {
                    var b = U(a.s, N.g.tb);
                    if ("function" !== typeof b) return;
                    var c = String(U(a.s, N.g.cb)),
                        d = a.h[c],
                        e = U(a.s, c);
                    c === N.g.pb || c === N.g.jc ? Up({
                        Nj: c,
                        callback: b,
                        wj: e
                    }, a.metadata.cookie_options, a.metadata.redact_ads_data, Mp) : b(d || e)
                }
                a.isAborted = !0
            }
        },
        Lr = function(a) {
            if (tr(a, "conversion") && R(N.g.I) && (a.h[N.g.qc] || a.h[N.g.nc])) {
                var b = a.h[N.g.ab],
                    c = mb(a.metadata.cookie_options),
                    d = Go(c.prefix);
                c.prefix = "_gcl" === d ? "" : d;
                if (a.h[N.g.qc]) {
                    var e = or(b, c);
                    e && (a.h[N.g.Kg] = e)
                }
                if (a.h[N.g.nc]) {
                    var f = kr(b, c).jl;
                    f && (a.h[N.g.og] = f)
                }
            }
        },
        Mr = function(a) {
            var b = Q(4),
                c = a.s,
                d, e, f;
            if (!b) {
                var g = $k(c,
                    N.g.aa);
                d = bb(lb(g) ? g : {})
            }
            var k = $k(c, N.g.aa, 1),
                m = $k(c, N.g.aa, 2);
            e = bb(lb(k) ? k : {}, ".");
            f = bb(lb(m) ? m : {}, ".");
            b || (a.h[N.g.jf] = d);
            a.h[N.g.ub] = e;
            a.h[N.g.sb] = f
        },
        Nr = function(a) {
            if (tr(a, ["conversion", "remarketing"])) {
                var b = "conversion" === a.metadata.hit_type;
                b && a.eventName !== N.g.ma || (a.copyToHitData(N.g.Z), b && (a.copyToHitData(N.g.Ad), a.copyToHitData(N.g.yd), a.copyToHitData(N.g.zd), a.copyToHitData(N.g.xd), a.h[N.g.eg] = a.eventName))
            }
        },
        Or = function(a) {
            if (tr(a, ["conversion", "remarketing"])) {
                var b = a.s,
                    c = U(b, N.g.Lb);
                if (!0 === c || !1 === c) a.h[N.g.Lb] = c;
                var d = U(b, N.g.da);
                if (!0 === d || !1 === d) a.h[N.g.ie] = !d;
                !1 === d && tr(a, "remarketing") && (a.isAborted = !0)
            }
        },
        Pr = function(a) {
            tr(a, "conversion") && (a.copyToHitData(N.g.Tc), a.copyToHitData(N.g.Bd), a.copyToHitData(N.g.Yc), a.copyToHitData(N.g.Fd), a.copyToHitData(N.g.mc), a.copyToHitData(N.g.Pc))
        },
        Qr = function(a) {
            zp(a);
        },
        Rr = function(a) {
            if (tr(a, ["conversion", "remarketing"]) && z.__gsaExp && z.__gsaExp.id) {
                var b = z.__gsaExp.id;
                if (Ba(b)) try {
                    var c = Number(b());
                    isNaN(c) || (a.h[N.g.sg] = c)
                } catch (d) {}
            }
        },
        Sr = function(a) {
            if (tr(a, ["conversion", "remarketing"])) {
                var b = pr();
                void 0 !== b && (a.h[N.g.Jg] = b || "error");
                var c = cm();
                c && (a.h[N.g.Ld] = c);
                var d = bm();
                d && (a.h[N.g.Sd] = d)
            }
        },
        Tr = function(a) {
            tr(a, ["conversion"]) && "1" === Yn(!1)._up && (a.h[N.g.Nd] = !0)
        },
        Ur = function(a) {
            if (tr(a, ["conversion"])) {
                var b = Q(79) ? R(N.g.N) : !0;
                a.metadata.redact_click_ids = !b || !!a.metadata.redact_ads_data && !R(N.g.I)
            }
        },
        Vr = function(a) {
            if (tr(a, ["conversion", "user_data_lead", "user_data_web"]) &&
                R(N.g.I) && a.metadata.conversion_linker_enabled) {
                var b = a.metadata.cookie_options,
                    c = Go(b.prefix);
                "_gcl" === c && (c = "");
                if (!Q(79) || R(N.g.N)) {
                    var d = c;
                    if (er.test(B.location.host) ? hr.test(B.location.href) || fr.test(B.location.href) : !Wo(d)) {
                        var e = mr(c);
                        e && (a.h[N.g.pb] = e);
                        if (!c) {
                            var f = jr(zo() ? vo() : {}, fr);
                            f && (a.h[N.g.Kd] = f)
                        }
                    } else {
                        var g = nr(c);
                        g && (a.h[N.g.qc] = g);
                        if (!c) {
                            var k = a.h[N.g.ab];
                            b = mb(b);
                            b.prefix = c;
                            var m = kr(k, b, !0).il;
                            m && (a.h[N.g.nc] = m)
                        }
                    }
                }
            }
        },
        Wr = function(a) {
            if (tr(a, ["conversion", "remarketing", "user_data_lead",
                    "user_data_web"
                ]) && a.metadata.conversion_linker_enabled && R(N.g.I)) {
                var b = !Q(3);
                if ("remarketing" !== a.metadata.hit_type || b) {
                    var c = a.metadata.cookie_options;
                    po(c, "conversion" === a.metadata.hit_type && a.eventName !== N.g.Ja);
                    if (!Q(79) || R(N.g.N)) a.h[N.g.jc] = jo[lo(c.prefix)]
                }
            }
        },
        Xr = function(a) {
            if (tr(a, ["conversion"])) {
                var b = Cp(a.metadata.cookie_options);
                if (b && !a.h[N.g.sa]) {
                    var c = Wm(a.h[N.g.ab]);
                    a.h[N.g.sa] = c
                }
                b && (a.h[N.g.zb] = b, a.metadata.send_ccm_parallel_ping = !0)
            }
        },
        Yr = function(a) {
            var b = !R(N.g.I),
                c = Q(79) && !R(N.g.N);
            switch (a.metadata.hit_type) {
                case "user_data_lead":
                case "user_data_web":
                    a.isAborted = !!(b || a.metadata.consent_updated || c);
                    break;
                case "remarketing":
                    a.isAborted = b || c;
                    break;
                case "conversion":
                    a.metadata.consent_updated && (a.h[N.g.rd] = !0)
            }
        },
        Zr = function(a) {
            tr(a, ["conversion"]) && a.s.eventMetadata.is_external_event && (a.h[N.g.Qi] = !0)
        },
        $r = function(a) {
            if (Q(109) && tr(a, ["conversion"])) {
                var b = Zp();
                $p(b) && (a.h[N.g.hf] = "1", a.metadata.add_tag_timing = !0)
            }
        },
        as = function(a) {
            var b;
            if ("gtag.config" !== a.eventName && a.metadata.send_user_data_hit) switch (a.metadata.hit_type) {
                case "user_data_web":
                    b =
                        97;
                    sr(a);
                    break;
                case "user_data_lead":
                    b = 98;
                    sr(a);
                    break;
                case "conversion":
                    b = 99
            }!a.metadata.speculative && b && M(b);
            !0 === a.metadata.speculative && (a.isAborted = !0)
        },
        Ar = !1,
        Br = !1;
    var bs = {
        H: {
            Ph: "ads_conversion_hit",
            Uf: "container_execute_start",
            Rh: "container_setup_end",
            Vf: "container_setup_start",
            Qh: "container_execute_end",
            Sh: "container_yield_end",
            Wf: "container_yield_start",
            Li: "event_execute_end",
            Ki: "event_evaluation_end",
            Lg: "event_evaluation_start",
            Mi: "event_setup_end",
            de: "event_setup_start",
            Ni: "ga4_conversion_hit",
            je: "page_load",
            Um: "pageview",
            Qb: "snippet_load",
            Xi: "tag_callback_error",
            Yi: "tag_callback_failure",
            Zi: "tag_callback_success",
            aj: "tag_execute_end",
            ad: "tag_execute_start"
        }
    };

    function cs() {
        function a(c, d) {
            var e = Bb(d);
            e && b.push(c + "=" + e)
        }
        var b = [];
        a("&u", "GTM");
        a("&ut", "TAGGING");
        a("&h", "HEALTH");
        return b.join("")
    };
    var ds = !1,
        es = "L S Y E EC TC HTC".split(" "),
        fs = ["S", "V", "E"],
        gs = ["TS", "TI", "TE"];
    var Js = function(a) {},
        Ks = function(a) {},
        Ls = function() {},
        Ms = function(a, b) {},
        Ns = function(a, b) {},
        Os = function(a, b) {},
        Ps = function(a, b) {},
        hs = function(a, b, c, d, e, f) {
            var g;
            g = void 0 === g ? !1 : g;
            var k = {};
            return k
        },
        is = function(a) {
            var b = !1;
            return b
        },
        js = function(a, b) {},
        Qs = function() {
            var a = {};
            return a
        },
        Cs = function(a) {
            a = void 0 === a ? !0 : a;
            var b = {};
            return b
        },
        Rs = function() {},
        Ss = function(a, b) {},
        Ts = function(a, b, c) {},
        Us = function() {
            var a = hs("PAGEVIEW", pk());
            if (ts(a.entry, "mark")[0]) {
                var b = Zc();
                b.clearMarks(a.entry);
                b.clearMeasures("GTM-" + pk() + ":" + bs.H.je + ":to:PAGEVIEW")
            }
            var c = hs(bs.H.je, pk());
            is(a) && js(a, c)
        };
    var Vs = function(a, b) {
        var c = z,
            d, e = c.GooglebQhCsO;
        e || (e = {}, c.GooglebQhCsO = e);
        d = e;
        if (d[a]) return !1;
        d[a] = [];
        d[a][0] = b;
        return !0
    };
    var Ws = function(a, b, c) {
        var d = xl(a, "fmt");
        if (b) {
            var e = xl(a, "random"),
                f = xl(a, "label") || "";
            if (!e) return !1;
            var g = kn(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!Vs(g, b)) return !1
        }
        d && 4 != d && (a = zl(a, "rfmt", d));
        var k = zl(a, "fmt", 4);
        Lc(k, function() {
            z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b())
        }, void 0, c, B.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var Xs = function(a) {
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = a[c],
                    e = void 0;
                if (d.hasOwnProperty("google_business_vertical")) {
                    e = d.google_business_vertical;
                    var f = {};
                    b[e] = b[e] || (f.google_business_vertical = e, f)
                } else e = "", b.hasOwnProperty(e) || (b[e] = {});
                var g = b[e],
                    k;
                for (k in d) "google_business_vertical" !== k && (k in g || (g[k] = []), g[k].push(d[k]))
            }
            return Object.keys(b).map(function(m) {
                return b[m]
            })
        },
        Ys = function(a) {
            if (!a || !a.length) return [];
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                if (d) {
                    var e = {};
                    b.push((e.id =
                        d.id, e.origin = d.origin, e.destination = d.destination, e.start_date = d.start_date, e.end_date = d.end_date, e.location_id = d.location_id, e.google_business_vertical = d.google_business_vertical, e))
                }
            }
            return b
        },
        Zs = function(a) {
            if (!a || !a.length) return [];
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && b.push({
                    item_id: d.id,
                    quantity: d.quantity,
                    value: d.price,
                    start_date: d.start_date,
                    end_date: d.end_date
                })
            }
            return b
        },
        at = function(a) {
            if (!a) return "";
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = [];
                d && (e.push($s(d.value)), e.push($s(d.quantity)),
                    e.push($s(d.item_id)), e.push($s(d.start_date)), e.push($s(d.end_date)), b.push("(" + e.join("*") + ")"))
            }
            return 0 < b.length ? b.join("") : ""
        },
        $s = function(a) {
            return "number" !== typeof a && "string" !== typeof a ? "" : a.toString()
        },
        ct = function(a, b) {
            var c = bt(b);
            return "" + a + (a && c ? ";" : "") + c
        },
        bt = function(a) {
            if (!a || "object" !== typeof a || "function" === typeof a.join) return "";
            var b = [];
            l(a, function(c, d) {
                var e, f;
                if (Da(d)) {
                    for (var g = [], k = 0; k < d.length; ++k) {
                        var m = dt(d[k]);
                        void 0 != m && g.push(m)
                    }
                    f = 0 !== g.length ? g.join(",") : void 0
                } else f =
                    dt(d);
                e = f;
                var n = dt(c);
                n && void 0 != e && b.push(n + "=" + e)
            });
            return b.join(";")
        },
        dt = function(a) {
            var b = typeof a;
            if (null != a && "object" !== b && "function" !== b) return String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
        },
        et = function(a, b) {
            var c = [],
                d = function(f, g) {
                    null != g && "" !== g && (!0 === g && (g = 1), !1 === g && (g = 0), c.push(f + "=" + encodeURIComponent(g)))
                },
                e = a.metadata.hit_type;
            "conversion" !== e && "remarketing" !== e || d("random", a.metadata.event_start_timestamp_ms);
            l(b, d);
            return c.join("&")
        },
        ft = function(a, b) {
            var c =
                a.metadata.hit_type,
                d = a.h[N.g.Kc],
                e = R(N.g.I),
                f = [],
                g, k = a.s.onSuccess,
                m, n = bn() ? 2 : 3,
                p = 0,
                q = function(x) {
                    f.push(x);
                    x.kb && p++
                };
            switch (c) {
                case "conversion":
                    m = "pagead/conversion";
                    var r = "";
                    e ? a.metadata.is_gcp_conversion ? (g = "https://www.google.com/", m = "pagead/1p-conversion") : g = "https://www.googleadservices.com/" : g = "https://pagead2.googlesyndication.com/";
                    a.metadata.is_gcp_conversion && (r = "&gcp=1&sscte=1&ct_cookie_present=1");
                    var t = {
                        Cb: "" + g + m + "/" + d + "/?" + et(a, b) + r,
                        format: n,
                        kb: !0
                    };
                    if (!Q(79) || R(N.g.N)) t.attributes = {
                        attributionsrc: ""
                    };
                    q(t);
                    a.metadata.send_ccm_parallel_ping && q({
                        Cb: "" + g + "ccm/conversion/" + d + "/?" + et(a, b) + r,
                        format: 2,
                        kb: !0
                    });
                    a.metadata.is_gcp_conversion && (r = "&gcp=1&ct_cookie_present=1", q({
                        Cb: "" + (e ? "https://googleads.g.doubleclick.net/" : g) + "pagead/viewthroughconversion/" + d + "/?" + et(a, b) + r,
                        format: n,
                        kb: !0
                    }));
                    break;
                case "remarketing":
                    var u = b.data || "",
                        v = Xs(Ys(a.h[N.g.Z]));
                    if (v.length) {
                        for (var w = 0; w < v.length; w++) b.data = ct(u, v[w]), q({
                            Cb: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" +
                                d + "/?" + et(a, b),
                            format: n,
                            kb: !0
                        }), a.metadata.send_fledge_experiment && q({
                            Cb: br() + "/td/rul/" + d + "?" + et(a, b),
                            format: 4,
                            kb: !1
                        }), a.metadata.event_start_timestamp_ms += 1;
                        a.metadata.send_fledge_experiment = !1
                    } else q({
                        Cb: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + et(a, b),
                        format: n,
                        kb: !0
                    });
                    break;
                case "user_data_lead":
                    q({
                        Cb: "https://google.com/pagead/form-data/" + d + "?" + et(a, b),
                        format: 1,
                        kb: !0
                    });
                    break;
                case "user_data_web":
                    q({
                        Cb: "https://google.com/ccm/form-data/" + d + "?" + et(a, b),
                        format: 1,
                        kb: !0
                    })
            }
            1 < f.length && Ba(a.s.onSuccess) && (k = cb(a.s.onSuccess, p));
            bn() || "conversion" !== c && "remarketing" !== c || !a.metadata.send_fledge_experiment || q({
                Cb: br() + "/td/rul/" + d + "?" + et(a, b),
                format: 4,
                kb: !1
            });
            return {
                onSuccess: k,
                Dl: f
            }
        },
        gt = function(a, b, c, d, e, f) {
            Ks(c);
            var g = function() {
                e && e()
            };
            switch (b) {
                case 1:
                    Vc(a);
                    e && e();
                    break;
                case 2:
                    Oc(a, g, void 0, f);
                    break;
                case 3:
                    var k = !1;
                    try {
                        k = Ws(a, g, f)
                    } catch (p) {
                        k = !1
                    }
                    k || gt(a, 2, c, d, g, f);
                    break;
                case 4:
                    var m = "AW-" + c.h[N.g.Kc],
                        n = c.h[N.g.ab];
                    n && (m = m + "/" + n);
                    ar(a, m)
            }
        },
        ht = {},
        it = (ht[N.g.rd] =
            "gcu", ht[N.g.pb] = "gclaw", ht[N.g.jc] = "auid", ht[N.g.xd] = "dscnt", ht[N.g.yd] = "fcntr", ht[N.g.zd] = "flng", ht[N.g.Ad] = "mid", ht[N.g.eg] = "bttype", ht[N.g.ab] = "label", ht[N.g.Hb] = "capi", ht[N.g.qa] = "currency_code", ht[N.g.Bd] = "vdltv", ht[N.g.mi] = "_dbg", ht[N.g.Fd] = "oedeld", ht[N.g.sb] = "edid", ht[N.g.kg] = "fledge", ht[N.g.Kd] = "gac", ht[N.g.nc] = "gacgb", ht[N.g.og] = "gacmcov", ht[N.g.Ld] = "gdpr", ht[N.g.ub] = "gdid", ht[N.g.sg] = "gsaexp", ht[N.g.ug] = "frm", ht[N.g.Nd] = "gtm_up", ht[N.g.hf] = "lps", ht[N.g.jf] = "did", ht[N.g.Tc] = void 0, ht[N.g.xb] =
            "tiba", ht[N.g.Lb] = "rdp", ht[N.g.zb] = "ecsid", ht[N.g.Yc] = "delopc", ht[N.g.Sd] = "gdpr_consent", ht[N.g.sa] = "oid", ht[N.g.Eg] = "ec_lat", ht[N.g.Fg] = "ec_meta", ht[N.g.Gg] = "ec_m", ht[N.g.Hg] = "ec_sel", ht[N.g.Ig] = "ec_s", ht[N.g.be] = "ec_mode", ht[N.g.za] = "userId", ht[N.g.Jg] = "us_privacy", ht[N.g.fa] = "value", ht[N.g.qc] = "gclgb", ht[N.g.Kg] = "mcov", ht[N.g.Pi] = "hn", ht[N.g.Qi] = "gtm_ee", ht[N.g.ie] = "npa", ht[N.g.Kc] = null, ht[N.g.yb] = null, ht[N.g.Ia] = null, ht[N.g.Z] = null, ht[N.g.ra] = null, ht[N.g.Ea] = null, ht[N.g.pf] = null, ht),
        kt = function(a) {
            jt(a,
                function(b) {
                    for (var c = ft(a, b), d = c.onSuccess, e = c.Dl, f = 0; f < e.length; f++) {
                        var g = e[f];
                        gt(g.Cb, g.format, a, b, g.kb ? d : void 0, g.attributes)
                    }
                })
        },
        jt = function(a, b) {
            var c = a.metadata.hit_type,
                d = {},
                e = {},
                f = [],
                g = a.metadata.event_start_timestamp_ms;
            if ("conversion" === c || "remarketing" === c) d.cv = "11", d.fst = g, d.fmt = 3, d.bg = "ffffff", d.guid = "ON", d.async = "1";
            d.gtm = dn();
            if (Q(44) || Kj())
                if (Q(44) || "remarketing" !== c)
                    if (d.gcs = km(), Q(48) || "remarketing" !== c && Lj()) d.gcd = om(a.s);
            Q(50) && (sm() && (d.dma_cps = pm()), d.dma = rm());
            Q(81) && Ml(Vl()) &&
                (d.tcfd = tm());
            if (a.h[N.g.yb]) {
                var k = a.h[N.g.yb].split("x");
                2 === k.length && (d.u_w = k[0], d.u_h = k[1])
            }
            if (a.h[N.g.Ia]) {
                var m = a.h[N.g.Ia];
                2 === m.length ? d.hl = m : 5 === m.length && (d.hl = m.substring(0, 2), d.gl = m.substring(3, 5))
            }
            var n = a.metadata.redact_click_ids,
                p = function(x, y) {
                    var A = a.h[y];
                    A && (d[x] = n ? En(A) : A)
                };
            p("url", N.g.ra);
            p("ref", N.g.Ea);
            p("top", N.g.pf);
            Q(8) && (it[N.g.Td] = "uaa", it[N.g.Ud] = "uab", it[N.g.Vd] = "uafvl", it[N.g.Wd] = "uamb", it[N.g.Xd] = "uam", it[N.g.Yd] = "uap", it[N.g.Zd] = "uapv", it[N.g.ae] = "uaw");
            l(a.h, function(x,
                y) {
                if (it.hasOwnProperty(x)) {
                    var A = it[x];
                    A && (d[A] = y)
                } else e[x] = y
            });
            var q = a.h[N.g.Tc];
            void 0 != q && "" !== q && (d.vdnc = String(q));
            var r = a.h[N.g.Pc];
            void 0 !== r && (d.shf = r);
            var t = a.h[N.g.mc];
            void 0 !== t && (d.delc = t);
            if (Q(109) && a.metadata.add_tag_timing) {
                d.tft = Qa();
                var u = Yc();
                void 0 !== u && (d.tfd = Math.round(u))
            }
            d.data = bt(e);
            var v = a.h[N.g.Z];
            v && "conversion" === c && (d.iedeld = fj(v), d.item = at(Zs(v)));
            if (!("conversion" !== c && "user_data_lead" !== c && "user_data_web" !== c || !a.metadata.user_data || Q(79) && !R(N.g.N) || Q(28) && !R(N.g.I))) {
                var w =
                    Yh(a.metadata.user_data);
                w && f.push(w.then(function(x) {
                    d.em = x.xj;
                    if ("user_data_web" === c && 0 < x.fm) {
                        var y = Dp(a.metadata.cookie_options);
                        d.ecsid = y
                    }
                }))
            }
            if (f.length) try {
                Promise.all(f).then(function() {
                    b(d)
                });
                return
            } catch (x) {}
            b(d)
        };
    var lt = function() {
            this.h = {}
        },
        mt = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        nt = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        pt = function(a, b, c, d) {
            if (!Kj()) {
                ot(a, b, c, d);
                return
            }
            ak(function() {
                R(N.g.I) ? ot(a, b, c, d) : d && d()
            }, [N.g.I]);
        };
    var qt = function(a, b, c) {
            c = void 0 === c ? !0 : c;
            var d = {
                    gclgb: function() {
                        return Ip("gb", b, c).join(".")
                    },
                    gacgb: function() {
                        return Pp(c)
                    },
                    gclaw: function() {
                        return Mp(b, c).join(".")
                    },
                    gac: function() {
                        return Op(c)
                    }
                },
                e = Rp(b),
                f = e ? "gclgb" : "gclaw",
                g = e ? "gacgb" : "gac",
                k = d[g],
                m = (0, d[f])(),
                n = "_gcl" !== b ? "" : k();
            m && mt(a, f, m);
            n && mt(a, g, n)
        },
        ot = function(a, b, c, d) {
            c = c || {};
            var e = c.dd || {},
                f = new lt;
            Xh(b, function(g, k) {
                mt(f, "em", g);
                mt(f, "gtm", dn());
                if (Kj() || Q(44)) mt(f, "gcs", km()), mt(f, "gcd", om());
                Q(50) && (sm() && mt(f, "dma_cps", pm()), mt(f,
                    "dma", rm()));
                Q(81) && Ml(Vl()) && mt(f, "tcfd", tm());
                qt(f, Go(e.prefix), c.Nf);
                mt(f, "auid", jo[lo(e.prefix)]);
                if (0 < k) {
                    var m = Dp(e);
                    mt(f, "ecsid", m)
                }
                var n = nt(f);
                Vc("https://google.com/pagead/form-data/" + a + "?" + n);
                Vc("https://google.com/ccm/form-data/" + a + "?" + n);
                d && d()
            })
        };

    function rt(a, b) {
        if (data.entities && data.entities[a]) return data.entities[a][b]
    };
    var tt = function(a, b) {
            st(a).entity.push(b)
        },
        ut = function(a, b) {
            st(a).event && st(a).event.push(b)
        },
        vt = function() {
            var a = st(qk());
            return a.event ? a.event : []
        };

    function st(a) {
        var b, c = pi.r;
        c || (c = {
            container: {}
        }, pi.r = c);
        b = c;
        var d = b.container[a];
        d || (d = {
            entity: [],
            event: []
        }, b.container[a] = d);
        return d
    };
    var wt = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        xt = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        zt = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        At = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        Dt = function(a) {
            var b = Vi("gtm.allowlist") || Vi("gtm.whitelist");
            b && M(9);
            vi && (b = ["google", "gtagfl", "lcl", "zone"]);
            Bt() && (vi ?
                M(116) : M(117), Ct && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
            var c = b && Xa(Na(b), xt),
                d = Vi("gtm.blocklist") || Vi("gtm.blacklist");
            d || (d = Vi("tagTypeBlacklist")) && M(3);
            d ? M(8) : d = [];
            Bt() && (d = Na(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Na(d).indexOf("google") && M(2);
            var e = d && Xa(Na(d), zt),
                f = {};
            return function(g) {
                var k = g && g[Re.xa];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== f[k]) return f[k];
                var m = Hi[k] || [],
                    n = a(k, m),
                    p;
                p = st(qk()).entity;
                for (var q = 0; q < p.length; q++) try {
                    n = n && p[q](k, m)
                } catch (y) {
                    n = !1
                }
                if (b) {
                    var r;
                    if (r = n) a: {
                        if (0 > c.indexOf(k))
                            if (m && 0 < m.length)
                                for (var t = 0; t < m.length; t++) {
                                    if (0 > c.indexOf(m[t])) {
                                        M(11);
                                        r = !1;
                                        break a
                                    }
                                } else {
                                    r = !1;
                                    break a
                                }
                        r = !0
                    }
                    n = r
                }
                var u = !1;
                if (d) {
                    var v = 0 <= e.indexOf(k);
                    if (v) u = v;
                    else {
                        var w = Ia(e, m || []);
                        w && M(10);
                        u = w
                    }
                }
                var x = !n || u;
                x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Ia(e, At));
                return f[k] = x
            }
        },
        Ct = !1;
    var Bt = function() {
            return wt.test(z.location && z.location.hostname)
        },
        Et = function() {
            ik && tt(qk(), function(a) {
                var b = Df(a),
                    c;
                if (If(b)) {
                    var d = b[Re.xa];
                    if (!d) throw "Error: No function name given for function call.";
                    var e = wf[d];
                    c = !!e && !!e.runInSiloedMode
                } else c = !!rt(b[Re.xa], 4);
                return c
            })
        };

    function Ft(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Dn("" + c + b).href
        }
    }

    function Gt() {
        return !!oi.vf && "SGTM_TOKEN" !== oi.vf.split("@@").join("")
    }

    function Ht(a) {
        for (var b = fa([N.g.Pd, N.g.Nb]), c = b.next(); !c.done; c = b.next()) {
            var d = U(a, c.value);
            if (d) return d
        }
    };
    var Jt = function(a, b, c, d, e) {
            if (!It() && !wk(a)) {
                var f = "?id=" + encodeURIComponent(a) + "&l=" + oi.ia,
                    g = 0 === a.indexOf("GTM-");
                g || (f += "&cx=c");
                Q(66) && (f += "&gtm=" + dn());
                var k = Gt();
                k && (f += "&sign=" + oi.vf);
                var m = c ? "/gtag/js" : "/gtm.js",
                    n = xi || zi ? Ft(b, m + f) : void 0;
                if (!n) {
                    var p = oi.Ve + m;
                    k && Fc && g && (p = Fc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    n = fp("https://", "http://", p + f)
                }
                var q = a;
                d.siloed && (yk({
                    ctid: q,
                    isDestination: !1
                }), q = kk(q));
                var r = q,
                    t = xk();
                ek().container[r] = {
                    state: 1,
                    context: d,
                    parent: t
                };
                fk({
                        ctid: r,
                        isDestination: !1
                    },
                    e);
                Lc(n)
            }
        },
        Kt = function(a, b, c) {
            var d;
            if (d = !It()) {
                var e = ek().destination[a];
                d = !(e && e.state)
            }
            if (d)
                if (zk()) ek().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: xk()
                }, fk({
                    ctid: a,
                    isDestination: !0
                }), M(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + oi.ia + "&cx=c";
                    Q(66) && (f += "&gtm=" + dn());
                    Gt() && (f += "&sign=" + oi.vf);
                    var g = xi || zi ? Ft(b, f) : void 0;
                    g || (g = fp("https://", "http://", oi.Ve + f));
                    var k = a;
                    c.siloed && (yk({
                        ctid: k,
                        isDestination: !0
                    }), k = kk(k));
                    ek().destination[k] = {
                        state: 1,
                        context: c,
                        parent: xk()
                    };
                    fk({
                        ctid: k,
                        isDestination: !0
                    });
                    Lc(g)
                }
        };

    function It() {
        if (bn()) {
            return !0
        }
        return !1
    };
    var Lt = "",
        Mt = [];

    function Nt(a) {
        var b = "";
        Lt && (b = "&dl=" + encodeURIComponent(Lt));
        0 < Mt.length && (b += "&tdp=" + Mt.join("."));
        a.Yb && (Lt = "", Mt.length = 0, b && a.Gj());
        return b
    };
    var Ot = [];

    function Pt(a) {
        if (!Ot.length) return "";
        var b = "&tdc=" + Ot.join("!");
        a.Yb && (a.Gj(), Ot.length = 0);
        return b
    };
    var Qt = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        Rt = {},
        St = Object.freeze((Rt[N.g.Ma] = !0, Rt)),
        Tt = 0 <= B.location.search.indexOf("?gtm_diagnostics=") || 0 <= B.location.search.indexOf("&gtm_diagnostics="),
        Vt = function(a, b, c) {
            if (Jk && "config" === a && !(1 < cp(b).O.length)) {
                var d, e = Gc("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = mb(c.F);
                mb(c.h, f);
                var g = [],
                    k;
                for (k in d) {
                    var m = Ut(d[k], f);
                    m.length && (Tt && console.log(m), g.push(k))
                }
                g.length && (g.length && Jk && Ot.push(b + "*" + g.join(".")), zb("TAGGING", Qt[B.readyState] ||
                    14));
                d[b] = f
            }
        };

    function Wt(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function Ut(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var t = r[q];
                return void 0 === t ? St[q] : t
            },
            f;
        for (f in Wt(a, b)) {
            var g = (d ? d + "." : "") + f,
                k = e(f, a),
                m = e(f, b),
                n = "object" === jb(k) || "array" === jb(k),
                p = "object" === jb(m) || "array" === jb(m);
            if (n && p) Ut(k, m, c, g);
            else if (n || p || k !== m) c[g] = !0
        }
        return Object.keys(c)
    };
    var Xt = !1,
        Yt = 0,
        Zt = [];

    function $t(a) {
        if (!Xt) {
            var b = B.createEventObject,
                c = "complete" == B.readyState,
                d = "interactive" == B.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Xt = !0;
                for (var e = 0; e < Zt.length; e++) E(Zt[e])
            }
            Zt.push = function() {
                for (var f = 0; f < arguments.length; f++) E(arguments[f]);
                return 0
            }
        }
    }

    function au() {
        if (!Xt && 140 > Yt) {
            Yt++;
            try {
                B.documentElement.doScroll("left"), $t()
            } catch (a) {
                z.setTimeout(au, 50)
            }
        }
    }
    var bu = function(a) {
        Xt ? a() : Zt.push(a)
    };
    var du = function(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: pk()
        }
    };
    var fu = function(a, b) {
            this.h = !1;
            this.F = [];
            this.K = {
                tags: []
            };
            this.W = !1;
            this.B = this.C = 0;
            eu(this, a, b)
        },
        gu = function(a, b, c, d) {
            if (si.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            lb(d) && (e = mb(d, e));
            e.id = c;
            e.status = "timeout";
            return a.K.tags.push(e) - 1
        },
        hu = function(a, b, c, d) {
            var e = a.K.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        iu = function(a) {
            if (!a.h) {
                for (var b = a.F, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.F.length = 0
            }
        },
        eu = function(a, b, c) {
            void 0 !== b && a.xf(b);
            c && z.setTimeout(function() {
                return iu(a)
            }, Number(c))
        };
    fu.prototype.xf = function(a) {
        var b = this,
            c = Ta(function() {
                return E(function() {
                    a(pk(), b.K)
                })
            });
        this.h ? c() : this.F.push(c)
    };
    var ju = function(a) {
            a.C++;
            return Ta(function() {
                a.B++;
                a.W && a.B >= a.C && iu(a)
            })
        },
        ku = function(a) {
            a.W = !0;
            a.B >= a.C && iu(a)
        };
    var lu = {},
        nu = function() {
            return z[mu()]
        },
        ou = !1;

    function mu() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var ru = function(a) {},
        su = function(a, b) {
            return function() {
                var c = nu(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            k = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var xu = {},
        yu = {};

    function zu(a, b) {
        if (Jk) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            xu[a] = "&e=" + c + "&eid=" + a;
            Tk(a)
        }
    }

    function Au(a) {
        var b = a.eventId,
            c = a.Yb;
        if (!xu[b]) return "";
        var d = yu[b] ? "" : "&es=1";
        d += xu[b];
        c && (yu[b] = !0);
        return d
    };
    var Bu = {};

    function Cu(a, b) {
        Jk && (Bu[a] = Bu[a] || {}, Bu[a][b] = (Bu[a][b] || 0) + 1)
    }

    function Du(a) {
        var b = a.eventId,
            c = a.Yb,
            d = Bu[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete Bu[b];
        return e.length ? "&md=" + e.join(".") : ""
    };
    var Eu = {},
        Fu = {
            aev: "1",
            c: "2",
            jsm: "3",
            v: "4",
            j: "5",
            smm: "6",
            rmm: "7",
            input: "8"
        };

    function Gu(a, b, c) {
        if (Jk) {
            Eu[a] = Eu[a] || [];
            var d = Fu[b] || "0",
                e;
            e = c instanceof z.Element ? "1" : c instanceof z.Event ? "2" : c instanceof z.RegExp ? "3" : c === z ? "4" : c === B ? "5" : c instanceof z.Promise ? "6" : c instanceof z.Storage ? "7" : c instanceof z.Date ? "8" : c instanceof z.History ? "9" : c instanceof z.Performance ? "a" : c === z.crypto ? "b" : c instanceof z.Location ? "c" : c instanceof z.Navigator ? "d" : "object" !== typeof c || lb(c) ? "0" : "e";
            Eu[a].push("" + d + e)
        }
    }

    function Hu(a) {
        var b = a.eventId,
            c = Eu[b] || [];
        if (!c.length) return "";
        a.Yb && delete Eu[b];
        return "&pcr=" + c.join(".")
    };
    var Iu = {},
        Ju = {};

    function Ku(a, b, c) {
        if (Jk && b) {
            var d = ck(b);
            Iu[a] = Iu[a] || [];
            Iu[a].push(c + d);
            var e = (If(b) ? "1" : "2") + d;
            Ju[a] = Ju[a] || [];
            Ju[a].push(e);
            Tk(a)
        }
    }

    function Lu(a) {
        var b = a.eventId,
            c = a.Yb,
            d = "",
            e = Iu[b] || [];
        e.length && (d += "&tr=" + e.join("."));
        var f = Ju[b] || [];
        f.length && (d += "&ti=" + f.join("."));
        c && (delete Iu[b], delete Ju[b]);
        return d
    };

    function Mu(a, b, c, d) {
        var e = uf[a],
            f = Nu(a, b, c, d);
        if (!f) return null;
        var g = Ff(e[Re.Wi], c, []);
        if (g && g.length) {
            var k = g[0];
            f = Mu(k.index, {
                onSuccess: f,
                onFailure: 1 === k.mj ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Nu(a, b, c, d) {
        function e() {
            if (f[Re.Ck]) k();
            else {
                var w = Gf(f, c, []),
                    x = w[Re.Sj];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!R(x[y])) {
                            k();
                            return
                        }
                var A = gu(c.Rb, String(f[Re.xa]), Number(f[Re.oe]), w[Re.Dk]),
                    C = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!C) {
                        C = !0;
                        var F = Qa() - G;
                        Ku(c.id, uf[a], "5");
                        hu(c.Rb, A, "success", F);
                        Q(29) && Ts(c, f, bs.H.Zi);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!C) {
                        C = !0;
                        var F = Qa() - G;
                        Ku(c.id, uf[a], "6");
                        hu(c.Rb, A, "failure", F);
                        Q(29) && Ts(c, f, bs.H.Yi);
                        k()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                Ku(c.id, f, "1");
                var D = function() {
                    jj(3);
                    var F = Qa() - G;
                    Ku(c.id, f, "7");
                    hu(c.Rb, A, "exception", F);
                    Q(29) && Ts(c, f, bs.H.Xi);
                    C || (C = !0, k())
                };
                Q(29) && Ss(c, f);
                var G = Qa();
                try {
                    Ef(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (F) {
                    D(F)
                }
                Q(29) && Ts(c, f, bs.H.aj)
            }
        }
        var f = uf[a],
            g = b.onSuccess,
            k = b.onFailure,
            m = b.terminate;
        if (c.mh(f)) return null;
        var n = Ff(f[Re.bj], c, []);
        if (n && n.length) {
            var p = n[0],
                q = Mu(p.index, {
                    onSuccess: g,
                    onFailure: k,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            k = 2 === p.mj ? m :
                q
        }
        if (f[Re.Si] || f[Re.Fk]) {
            var r = f[Re.Si] ? vf : c.Cm,
                t = g,
                u = k;
            if (!r[a]) {
                e = Ta(e);
                var v = Ou(a, r, e);
                g = v.onSuccess;
                k = v.onFailure
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }

    function Ou(a, b, c) {
        var d = [],
            e = [];
        b[a] = Pu(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Qu;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = Ru;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Pu(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Qu(a) {
        a()
    }

    function Ru(a, b) {
        b()
    };
    var Tu = function(a, b) {
            return 1 === arguments.length ? Su("set", a) : Su("set", a, b)
        },
        Uu = function(a, b) {
            return 1 === arguments.length ? Su("config", a) : Su("config", a, b)
        },
        Vu = function(a, b, c) {
            c = c || {};
            c[N.g.Mb] = a;
            return Su("event", b, c)
        };

    function Su(a) {
        return arguments
    }
    var Wu = function() {
        this.h = [];
        this.B = []
    };
    Wu.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.B.length; f++) try {
            this.B[f](e)
        } catch (g) {}
    };
    Wu.prototype.listen = function(a) {
        this.B.push(a)
    };
    Wu.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    Wu.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var Yu = function(a, b, c) {
            Xu().enqueue(a, b, c)
        },
        $u = function() {
            var a = Zu;
            Xu().listen(a)
        };

    function Xu() {
        var a = pi.mb;
        a || (a = new Wu, pi.mb = a);
        return a
    }
    var hv = function(a) {
            var b = pi.zones;
            return b ? b.getIsAllowedFn(lk(), a) : function() {
                return !0
            }
        },
        iv = function() {
            ut(qk(), function(a, b) {
                var c = pi.zones;
                return c ? c.isActive(lk(), b) : !0
            })
        };
    var lv = function(a, b) {
        for (var c = [], d = 0; d < uf.length; d++)
            if (a[d]) {
                var e = uf[d];
                var f = ju(b.Rb);
                try {
                    var g = Mu(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var k = e[Re.xa];
                        if (!k) throw "Error: No function name given for function call.";
                        var m = wf[k];
                        c.push({
                            Hj: d,
                            Bj: (m ? m.priorityOverride || 0 : 0) || rt(e[Re.xa], 1) || 0,
                            execute: g
                        })
                    } else jv(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(kv);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return 0 < c.length
    };

    function kv(a, b) {
        var c, d = b.Bj,
            e = a.Bj;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Hj,
                k = b.Hj;
            f = g > k ? 1 : g < k ? -1 : 0
        }
        return f
    }

    function jv(a, b) {
        if (Jk) {
            var c = function(d) {
                var e = b.mh(uf[d]) ? "3" : "4",
                    f = Ff(uf[d][Re.Wi], b, []);
                f && f.length && c(f[0].index);
                Ku(b.id, uf[d], e);
                var g = Ff(uf[d][Re.bj], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var ov = !1,
        mv;
    var Sv = function(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        Q(29) && Ms(b, d);
        if ("gtm.js" === d) {
            if (ov) return !1;
            ov = !0
        }
        var e, f = !1;
        if (vt().every(function(r) {
                return r(d, b)
            })) e = hv(b);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
            f = !0;
            e = hv(Number.MAX_SAFE_INTEGER)
        }
        zu(b, d);
        var g = a.eventCallback,
            k = a.eventTimeout,
            m = {
                id: b,
                priorityId: c,
                name: d,
                mh: Dt(e),
                Cm: [],
                vj: function() {
                    M(6);
                    jj(0)
                },
                gj: Ov(),
                ij: Pv(b),
                Rb: new fu(function() {
                    if (Q(29)) {}
                    g && g.apply(g, [].slice.call(arguments, 0))
                }, k)
            };
        Q(56) && (m.Fh = Cu);
        Q(29) && Os(m.id, m.name);
        var n = Qf(m);
        Q(29) && Ps(m.id, m.name);
        f && (n = Qv(n));
        Q(29) && Ns(b, d);
        var p = lv(n, m),
            q = !1;
        ku(m.Rb);
        "gtm.js" !== d && "gtm.sync" !== d || ru(pk());
        return Rv(n, p) || q
    };

    function Pv(a) {
        return function(b) {
            ob(b) || Gu(a, "input", b)
        }
    }

    function Ov() {
        var a = {};
        a.event = $i("event", 1);
        a.ecommerce = $i("ecommerce", 1);
        a.gtm = $i("gtm");
        a.eventModel = $i("eventModel");
        return a
    }

    function Qv(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(uf[c][Re.xa]);
                if (ri[d] || void 0 !== uf[c][Re.Gk] || Ii[d] || rt(d, 2)) b[c] = !0
            }
        return b
    }

    function Rv(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && uf[c] && !si[String(uf[c][Re.xa])]) return !0;
        return !1
    }
    var Tv = {};

    function Uv(a, b, c) {
        Jk && void 0 !== a && (Tv[a] = Tv[a] || [], Tv[a].push(c + b), Tk(a))
    }

    function Vv(a) {
        var b = a.eventId,
            c = a.Yb,
            d = "",
            e = Tv[b] || [];
        e.length && (d += "&epr=" + e.join("."));
        c && delete Tv[b];
        return d
    };
    var Xv = function(a, b) {
            var c = cp(ok(a), !0);
            c && Wv.register(c, b)
        },
        Yv = function(a, b, c, d) {
            var e = cp(c, d.isGtmEvent);
            e && Wv.push("event", [b, a], e, d)
        },
        Zv = function(a, b, c, d) {
            var e = cp(c, d.isGtmEvent);
            e && Wv.push("get", [a, b], e, d)
        },
        aw = function(a) {
            var b = cp(ok(a), !0),
                c;
            b ? c = $v(Wv, b).h : c = {};
            return c
        },
        bw = function(a, b) {
            var c = cp(ok(a), !0);
            if (c) {
                var d = Wv,
                    e = mb(b);
                mb($v(d, c).h, e);
                $v(d, c).h = e
            }
        },
        cw = function() {
            this.status = 1;
            this.K = {};
            this.h = {};
            this.B = {};
            this.W = null;
            this.F = {};
            this.C = !1
        },
        dw = function(a, b, c, d) {
            var e = Qa();
            this.type =
                a;
            this.C = e;
            this.h = b;
            this.B = c;
            this.messageContext = d
        },
        ew = function() {
            this.B = {};
            this.C = {};
            this.h = []
        },
        $v = function(a, b) {
            var c = b.ba;
            return a.B[c] = a.B[c] || new cw
        },
        fw = function(a, b, c, d) {
            if (d.h) {
                var e = $v(a, d.h),
                    f = e.W;
                if (f) {
                    var g = mb(c),
                        k = mb(e.K[d.h.id]),
                        m = mb(e.F),
                        n = mb(e.h),
                        p = mb(a.C),
                        q = {};
                    if (Jk) try {
                        q = mb(Si)
                    } catch (v) {
                        M(72)
                    }
                    var r = d.h.prefix,
                        t = function(v) {
                            Uv(d.messageContext.eventId, r, v)
                        },
                        u = ml(ll(kl(jl(il(gl(fl(hl(el(dl(cl(new bl(d.messageContext.eventId, d.messageContext.priorityId), g), k), m), n), p), q), d.messageContext.eventMetadata),
                            function() {
                                if (t) {
                                    var v = t;
                                    t = void 0;
                                    v("2");
                                    if (d.messageContext.onSuccess) d.messageContext.onSuccess()
                                }
                            }), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("3");
                                if (d.messageContext.onFailure) d.messageContext.onFailure()
                            }
                        }), !!d.messageContext.isGtmEvent));
                    try {
                        Uv(d.messageContext.eventId, r, "1"), Vt(d.type, d.h.id, u), f(d.h.id, b, d.C, u)
                    } catch (v) {
                        Uv(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    ew.prototype.register = function(a, b, c) {
        var d = $v(this, a);
        3 !== d.status && (d.W = b, d.status = 3, c && (mb(d.h, c), d.h = c), this.flush())
    };
    ew.prototype.push = function(a, b, c, d) {
        void 0 !== c && (1 === $v(this, c).status && ($v(this, c).status = 2, this.push("require", [{}], c, {})), $v(this, c).C && (d.deferrable = !1));
        this.h.push(new dw(a, c, b, d));
        d.deferrable || this.flush()
    };
    ew.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            e = {
                Sb: e.Sb,
                Cf: e.Cf
            };
            var f = this.h[0],
                g = f.h;
            if (f.messageContext.deferrable) !g || $v(this, g).C ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== $v(this, g).status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        l(f.B[0], function(r, t) {
                            mb($a(r, t), b.C)
                        });
                        break;
                    case "config":
                        var k = $v(this, g);
                        e.Sb = {};
                        l(f.B[0], function(r) {
                            return function(t, u) {
                                mb($a(t, u), r.Sb)
                            }
                        }(e));
                        var m = !!e.Sb[N.g.Ob];
                        delete e.Sb[N.g.Ob];
                        var n = g.ba === g.id;
                        m || (n ? k.F = {} : k.K[g.id] = {});
                        k.C && m || fw(this, N.g.na, e.Sb, f);
                        k.C = !0;
                        n ? mb(e.Sb, k.F) : (mb(e.Sb, k.K[g.id]), M(70));
                        d = !0;
                        break;
                    case "event":
                        e.Cf = {};
                        l(f.B[0], function(r) {
                            return function(t, u) {
                                mb($a(t, u), r.Cf)
                            }
                        }(e));
                        fw(this, f.B[1], e.Cf, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[N.g.cb] = f.B[0], p[N.g.tb] = f.B[1], p);
                        fw(this, N.g.Ja, q, f)
                }
                this.h.shift();
                gw(this, f)
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var gw = function(a, b) {
            if ("require" !== b.type)
                if (b.h)
                    for (var c = $v(a, b.h).B[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.B)
                        if (a.B.hasOwnProperty(e)) {
                            var f = a.B[e];
                            if (f && f.B)
                                for (var g = f.B[b.type] || [], k = 0; k < g.length; k++) g[k]()
                        }
        },
        Wv = new ew;
    var Zf;
    var hw = {},
        iw = {},
        jw = function(a, b) {
            for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                    Kf: e.Kf,
                    Ff: e.Ff
                }, f++) {
                var g = a[f];
                if (0 <= g.indexOf("-")) {
                    if (e.Kf = cp(g, b), e.Kf) {
                        var k = nk();
                        Ea(k, function(r) {
                            return function(t) {
                                return r.Kf.ba === t
                            }
                        }(e)) ? c.push(g) : d.push(g)
                    }
                } else {
                    var m = hw[g] || [];
                    e.Ff = {};
                    m.forEach(function(r) {
                        return function(t) {
                            return r.Ff[t] = !0
                        }
                    }(e));
                    for (var n = lk(), p = 0; p < n.length; p++)
                        if (e.Ff[n[p]]) {
                            c = c.concat(nk());
                            break
                        }
                    var q = iw[g] || [];
                    q.length && (c = c.concat(q))
                }
            }
            return {
                Vl: c,
                Xl: d
            }
        },
        kw = function(a) {
            l(hw, function(b,
                c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        lw = function(a) {
            l(iw, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var mw = "HA GF G UA AW DC MC".split(" "),
        nw = !1,
        ow = !1;

    function pw(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Pi()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var qw = void 0,
        rw = void 0;

    function sw(a, b, c) {
        var d = mb(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return void 0 !== b[f]
        }) && M(136);
        var e = mb(b);
        mb(c, e);
        Yu(Uu(lk()[0], e), a.eventId, d)
    }

    function tw(a) {
        for (var b = fa([N.g.Pd, N.g.Nb]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value,
                e = a && a[d] || Wv.C[d];
            if (e) return e
        }
    }
    var uw = {
            config: function(a, b) {
                var c = Q(57),
                    d = pw(a, b);
                if (!(2 > a.length) && h(a[1])) {
                    var e = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !lb(a[2]) || 3 < a.length) return;
                        e = a[2]
                    }
                    var f = cp(a[1], b.isGtmEvent);
                    if (f) {
                        var g, k, m;
                        a: {
                            if (!hk.he) {
                                var n = rk(xk());
                                if (Bk(n)) {
                                    var p = n.parent,
                                        q = p.isDestination;
                                    m = {
                                        am: rk(p),
                                        Ul: q
                                    };
                                    break a
                                }
                            }
                            m = void 0
                        }
                        var r = m;
                        r && (g = r.am, k = r.Ul);
                        zu(d.eventId, "gtag.config");
                        var t = f.ba,
                            u = f.id !== t;
                        if (u ? -1 === nk().indexOf(t) : -1 === lk().indexOf(t)) {
                            if (!(c && b.inheritParentConfig || Q(25) && e[N.g.vb])) {
                                var v = tw(e);
                                if (u) Kt(t,
                                    v, {
                                        source: 2,
                                        fromContainerExecution: b.fromContainerExecution
                                    });
                                else if (c && void 0 !== g && -1 !== g.containers.indexOf(t)) {
                                    var w = e;
                                    qw ? sw(b, w, qw) : rw || (rw = mb(w))
                                } else Jt(t, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (g && (M(128), k && M(130), c && b.inheritParentConfig)) {
                                var x = e;
                                rw ? sw(b, rw, x) : !x[N.g.Ob] && ui && qw || (qw = mb(x));
                                return
                            }
                            if (ui && !u && !e[N.g.Ob]) {
                                var y = ow;
                                ow = !0;
                                if (y) return
                            }
                            nw || M(43);
                            if (!b.noTargetGroup)
                                if (u) {
                                    lw(f.id);
                                    var A = f.id,
                                        C = e[N.g.Md] || "default";
                                    C = String(C).split(",");
                                    for (var D =
                                            0; D < C.length; D++) {
                                        var G = iw[C[D]] || [];
                                        iw[C[D]] = G;
                                        0 > G.indexOf(A) && G.push(A)
                                    }
                                } else {
                                    kw(f.id);
                                    var F = f.id,
                                        I = e[N.g.Md] || "default";
                                    I = I.toString().split(",");
                                    for (var O = 0; O < I.length; O++) {
                                        var S = hw[I[O]] || [];
                                        hw[I[O]] = S;
                                        0 > S.indexOf(F) && S.push(F)
                                    }
                                }
                            delete e[N.g.Md];
                            var W = b.eventMetadata || {};
                            W.hasOwnProperty("is_external_event") || (W.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = W;
                            delete e[N.g.Rc];
                            for (var ha = u ? [f.id] : nk(), X = 0; X < ha.length; X++) {
                                var T = e,
                                    da = mb(b),
                                    ja = cp(ha[X], da.isGtmEvent);
                                ja && Wv.push("config", [T], ja, da)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    M(39);
                    var c = pw(a, b),
                        d = a[1];
                    "default" === d ? Uj(a[2]) : "update" === d ? Vj(a[2], c) : "declare" === d ? b.fromContainerExecution && Tj(a[2]) : "core_platform_services" === d && Wj(a[2])
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && h(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!lb(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = mb(e), e[N.g.Rc] && (g.eventCallback = e[N.g.Rc]), e[N.g.Hd] && (g.eventTimeout = e[N.g.Hd]));
                    var k = pw(a, b),
                        m = k.eventId,
                        n = k.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[N.g.Mb];
                    void 0 === r && (r = Vi(N.g.Mb, 2), void 0 === r && (r = "default"));
                    if (h(r) || Da(r)) {
                        var t;
                        b.isGtmEvent ? t = h(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
                        var u = jw(t, b.isGtmEvent),
                            v = u.Vl,
                            w = u.Xl;
                        if (w.length)
                            for (var x = tw(q), y = 0; y < w.length; y++) {
                                var A = cp(w[y], b.isGtmEvent);
                                A && Kt(A.ba, x, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = ep(v,
                            b.isGtmEvent)
                    } else p = void 0;
                    var C = p;
                    if (C) {
                        zu(m, c);
                        for (var D = [], G = 0; G < C.length; G++) {
                            var F = C[G],
                                I = mb(b);
                            if (-1 !== mw.indexOf(sk(F.prefix))) {
                                var O = mb(d),
                                    S = I.eventMetadata || {};
                                S.hasOwnProperty("is_external_event") || (S.is_external_event = !I.fromContainerExecution);
                                I.eventMetadata = S;
                                delete O[N.g.Rc];
                                Yv(c, O, F.id, I)
                            }
                            D.push(F.id)
                        }
                        g.eventModel = g.eventModel || {};
                        0 < C.length ? g.eventModel[N.g.Mb] = D.join() : delete g.eventModel[N.g.Mb];
                        nw || M(43);
                        void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        g.eventModel[N.g.Jb] && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                M(53);
                if (4 === a.length && h(a[1]) && h(a[2]) && Ba(a[3])) {
                    var c = cp(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        nw || M(43);
                        var f = tw();
                        if (!Ea(nk(), function(k) {
                                return c.ba === k
                            })) Kt(c.ba, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== mw.indexOf(sk(c.prefix))) {
                            pw(a, b);
                            var g = {};
                            Qj(mb((g[N.g.cb] = d, g[N.g.tb] = e, g)));
                            Zv(d, function(k) {
                                E(function() {
                                    return e(k)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 ==
                    a.length && a[1].getTime) {
                    nw = !0;
                    var c = pw(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function(a) {
                if (3 === a.length && h(a[1]) && Ba(a[2])) {
                    var b = a[1],
                        c = a[2],
                        d = Zf.B;
                    d.h[b] ? d.h[b].push(c) : d.h[b] = [c];
                    if (M(74), "all" === a[1]) {
                        M(75);
                        var e = !1;
                        try {
                            e = a[2](pk(), "unknown", {})
                        } catch (f) {}
                        e || M(76)
                    }
                } else {
                    M(73);
                }
            },
            set: function(a, b) {
                var c;
                2 == a.length && lb(a[1]) ? c = mb(a[1]) : 3 == a.length && h(a[1]) && (c = {}, lb(a[2]) || Da(a[2]) ? c[a[1]] = mb(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = pw(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    mb(c);
                    var g = mb(c);
                    Wv.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    Q(13) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        vw = {
            policy: !0
        };
    var ww = function(a) {
            var b = z[oi.ia].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        xw = function(a) {
            var b = z[oi.ia],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var yw = !1,
        zw = [];

    function Aw() {
        if (!yw) {
            yw = !0;
            for (var a = 0; a < zw.length; a++) E(zw[a])
        }
    }
    var Bw = function(a) {
        yw ? E(a) : zw.push(a)
    };
    var Sw = function(a) {
        if (Rw(a)) return a;
        this.h = a
    };
    Sw.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var Rw = function(a) {
        return !a || "object" !== jb(a) || lb(a) ? !1 : "getUntrustedMessageValue" in a
    };
    Sw.prototype.getUntrustedMessageValue = Sw.prototype.getUntrustedMessageValue;
    var Tw = 0,
        Uw = {},
        Vw = [],
        Ww = [],
        Xw = !1,
        Yw = !1;

    function Zw(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var $w = function(a) {
            return z[oi.ia].push(a)
        },
        ax = function(a, b, c) {
            a.eventCallback = b;
            c && (a.eventTimeout = c);
            return $w(a)
        },
        bx = function(a, b) {
            if (!Ca(b) || 0 > b) b = 0;
            var c = pi[oi.ia],
                d = 0,
                e = !1,
                f = void 0;
            f = z.setTimeout(function() {
                e || (e = !0, a());
                f = void 0
            }, b);
            return function() {
                var g = c ? c.subscribers : 1;
                ++d === g && (f && (z.clearTimeout(f), f = void 0), e || (a(), e = !0))
            }
        };

    function cx(a, b) {
        var c = a._clear || b.overwriteModelFields;
        l(a, function(e, f) {
            "_clear" !== e && (c && Yi(e), Yi(e, f))
        });
        Ei || (Ei = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = Pi(), a["gtm.uniqueEventId"] = d, Yi("gtm.uniqueEventId", d));
        return Sv(a)
    }

    function dx(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Ka(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function ex() {
        var a;
        if (Ww.length) a = Ww.shift();
        else if (Vw.length) a = Vw.shift();
        else return;
        var b;
        var c = a;
        if (Xw || !dx(c.message)) b = c;
        else {
            Xw = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Pi());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                k = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            Vw.unshift(k, c);
            if (Jk) {
                var m = Vf.ctid;
                if (m) {
                    var n, p = rk(xk());
                    n = p && p.context;
                    var q, r = Dn(z.location.href);
                    q = r.hostname + r.pathname;
                    var t = n && n.fromContainerExecution,
                        u = n && n.source,
                        v = Vf.Tg,
                        w = hk.he;
                    Jk && (Lt || (Lt = q), Mt.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)))
                }
            }
            b = f
        }
        return b
    }

    function fx() {
        for (var a = !1, b; !Yw && (b = ex());) {
            Yw = !0;
            delete Si.eventModel;
            Ui();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) Yw = !1;
            else {
                e.fromContainerExecution && Zi();
                try {
                    if (Ba(d)) try {
                        d.call(Wi)
                    } catch (x) {} else if (Da(d)) {
                        var f = d;
                        if (h(f[0])) {
                            var g = f[0].split("."),
                                k = g.pop(),
                                m = f.slice(1),
                                n = Vi(g.join("."), 2);
                            if (null != n) try {
                                n[k].apply(n, m)
                            } catch (x) {}
                        }
                    } else {
                        var p = void 0,
                            q = !1;
                        if (Ka(d)) {
                            a: {
                                if (d.length && h(d[0])) {
                                    var r = uw[d[0]];
                                    if (r && (!e.fromContainerExecution || !vw[d[0]])) {
                                        p = r(d, e);
                                        break a
                                    }
                                }
                                p = void 0
                            }(q = p &&
                                "set" === d[0] && !!p.event) && M(101)
                        }
                        else p = d;
                        if (p) {
                            var t = cx(p, e);
                            a = t || a;
                            q && t && M(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && Ui(!0);
                    var u = d["gtm.uniqueEventId"];
                    if ("number" === typeof u) {
                        for (var v = Uw[String(u)] || [], w = 0; w < v.length; w++) Ww.push(gx(v[w]));
                        v.length && Ww.sort(Zw);
                        delete Uw[String(u)];
                        u > Tw && (Tw = u)
                    }
                    Yw = !1
                }
            }
        }
        return !a
    }

    function hx() {
        if (Q(29)) {
            var a = ix();
        }
        var e = fx();
        try {
            ww(pk())
        } catch (f) {}
        return e
    }

    function Zu(a) {
        if (Tw < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Uw[b] = Uw[b] || [];
            Uw[b].push(a)
        } else Ww.push(gx(a)), Ww.sort(Zw), E(function() {
            Yw || fx()
        })
    }

    function gx(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var jx = function() {
            function a(f) {
                var g = {};
                if (Rw(f)) {
                    var k = f;
                    f = Rw(k) ? k.getUntrustedMessageValue() : void 0;
                    g.fromContainerExecution = !0
                }
                return {
                    message: f,
                    messageContext: g
                }
            }
            var b = Gc(oi.ia, []),
                c = pi[oi.ia] = pi[oi.ia] || {};
            !0 === c.pruned && M(83);
            Uw = Xu().get();
            $u();
            bu(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var f = {};
                    b.push((f.event = "gtm.dom", f))
                }
            });
            Bw(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var f = {};
                    b.push((f.event = "gtm.load", f))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var f;
                if (0 < pi.SANDBOXED_JS_SEMAPHORE) {
                    f = [];
                    for (var g = 0; g < arguments.length; g++) f[g] = new Sw(arguments[g])
                } else f = [].slice.call(arguments, 0);
                var k = f.map(function(q) {
                    return a(q)
                });
                Vw.push.apply(Vw, k);
                var m = d.apply(b, f),
                    n = Math.max(100, Number("1000") || 300);
                if (this.length > n)
                    for (M(4), c.pruned = !0; this.length > n;) this.shift();
                var p = "boolean" !== typeof m || m;
                return fx() && p
            };
            var e = b.slice(0).map(function(f) {
                return a(f)
            });
            Vw.push.apply(Vw, e);
            ix() && (Q(29) && Ls(), E(hx))
        },
        ix = function() {
            var a = !0;
            return a
        };

    function kx(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Qa();
        return b < c + 3E5 && b > c - 9E5
    }

    function lx(a) {
        return a && 0 === a.indexOf("pending:") ? kx(a.substr(8)) : !1
    };
    var Gx = function() {};
    var Hx = new String("undefined"),
        Ix = function() {};
    Ix.prototype.toString = function() {
        return "undefined"
    };
    var Jx = new Ix;
    var Lx = function() {
            (pi.rm = pi.rm || {})[qk()] = function(a) {
                if (Kx.hasOwnProperty(a)) return Kx[a]
            }
        },
        Ox = function(a, b, c) {
            if (a instanceof Mx) {
                var d = a,
                    e = d.h,
                    f = b,
                    g = Pi();
                Nx[g] = [f, c];
                a = e.call(d, g);
                b = Aa
            }
            return {
                rj: a,
                onSuccess: b
            }
        },
        Px = function(a) {
            var b = a ? 0 : 1;
            return function(c) {
                M(a ? 134 : 135);
                var d = Nx[c];
                if (d && "function" === typeof d[b]) d[b]();
                Nx[c] = void 0
            }
        },
        Qx = function(a) {
            var b = a === Hx;
            Q(90) && (b = b || a === Jx);
            return b
        },
        Mx = function(a) {
            this.h = function(b) {
                for (var c = [], d = 0; d < a.length; d++) c.push(Qx(a[d]) ? b : a[d]);
                return c.join("")
            }
        };
    Mx.prototype.toString = function() {
        return this.h("undefined")
    };
    Mx.prototype.valueOf = Mx.prototype.toString;
    var Kx = {},
        Nx = {};
    var Rx = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Wc(a, "className"),
                "gtm.elementId": a["for"] || Rc(a, "id") || "",
                "gtm.elementTarget": a.formTarget || Wc(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Wc(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        Sx = function(a) {
            pi.hasOwnProperty("autoEventsSettings") || (pi.autoEventsSettings = {});
            var b = pi.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        Tx = function(a, b, c) {
            Sx(a)[b] = c
        },
        Ux = function(a, b, c, d) {
            var e = Sx(a),
                f = Sa(e, b, d);
            e[b] = c(f)
        },
        Vx = function(a, b, c) {
            var d = Sx(a);
            return Sa(d, b, c)
        },
        Wx = function(a, b) {
            Vx(a, "init", !1) || (Tx(a, "init", !0), b())
        },
        Xx = function(a) {
            return "string" === typeof a ? a : String(Pi())
        };
    var Yx = ["input", "select", "textarea"],
        Zx = ["button", "hidden", "image", "reset", "submit"],
        $x = function(a) {
            var b = a.tagName.toLowerCase();
            return 0 > Yx.indexOf(b) || "input" === b && 0 <= Zx.indexOf(a.type.toLowerCase()) ? !1 : !0
        },
        ay = function(a) {
            return a.form ? a.form.tagName ? a.form : B.getElementById(a.form) : Uc(a, ["form"], 100)
        },
        by = function(a, b, c) {
            if (!a.elements) return 0;
            for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
                var g = a.elements[e];
                if ($x(g)) {
                    if (g.dataset[c] === d) return f;
                    f++
                }
            }
            return 0
        };
    var cy = !!z.MutationObserver,
        dy = void 0,
        ey = function(a) {
            if (!dy) {
                var b = function() {
                    var c = B.body;
                    if (c)
                        if (cy)(new MutationObserver(function() {
                            for (var e = 0; e < dy.length; e++) E(dy[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            Pc(c, "DOMNodeInserted", function() {
                                d || (d = !0, E(function() {
                                    d = !1;
                                    for (var e = 0; e < dy.length; e++) E(dy[e])
                                }))
                            })
                        }
                };
                dy = [];
                B.body ? b() : E(b)
            }
            dy.push(a)
        },
        fy = function(a) {
            if (dy)
                for (var b = 0; b < dy.length; b++) dy[b] === a && dy.splice(b, 1)
        };
    var qy = function(a, b, c) {
        function d() {
            var g = a();
            f += e ? (Qa() - e) * g.playbackRate / 1E3 : 0;
            e = Qa()
        }
        var e = 0,
            f = 0;
        return {
            createEvent: function(g, k, m) {
                var n = a(),
                    p = n.bh,
                    q = void 0 !== m ? Math.round(m) : void 0 !== k ? Math.round(n.bh * k) : Math.round(n.kj),
                    r = void 0 !== k ? Math.round(100 * k) : 0 >= p ? 0 : Math.round(q / p * 100),
                    t = B.hidden ? !1 : .5 <= dq(c);
                d();
                var u = void 0;
                void 0 !== b && (u = [b]);
                var v = Rx(c, "gtm.video", u);
                v["gtm.videoProvider"] = "youtube";
                v["gtm.videoStatus"] = g;
                v["gtm.videoUrl"] = n.url;
                v["gtm.videoTitle"] = n.title;
                v["gtm.videoDuration"] =
                    Math.round(p);
                v["gtm.videoCurrentTime"] = Math.round(q);
                v["gtm.videoElapsedTime"] = Math.round(f);
                v["gtm.videoPercent"] = r;
                v["gtm.videoVisible"] = t;
                return v
            },
            Fj: function() {
                e = Qa()
            },
            bd: function() {
                d()
            }
        }
    };
    var ry = z.clearTimeout,
        sy = z.setTimeout,
        ty = function(a, b, c, d) {
            if (bn()) {
                b && E(b)
            } else return Lc(a, b, c, d)
        },
        uy = function() {
            return new Date
        },
        vy = function() {
            return z.location.href
        },
        wy = function(a) {
            return Bn(Dn(a), "fragment")
        },
        xy = function(a) {
            return Cn(Dn(a))
        },
        yy = function(a, b) {
            return Vi(a, b || 2)
        },
        zy = function(a, b, c) {
            return b ? ax(a, b, c) : $w(a)
        },
        Ay = function(a, b) {
            z[a] = b
        },
        V = function(a, b, c) {
            b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
            return z[a]
        },
        By = function(a, b, c) {
            return zm(a, b, void 0 === c ? !0 : !!c)
        },
        Cy = function(a, b, c) {
            return 0 === Sm(a, b, c)
        },
        Dy = function(a, b) {
            if (bn()) {
                b && E(b)
            } else Nc(a, b)
        },
        Ey = function(a) {
            return !!Vx(a, "init", !1)
        },
        Fy = function(a) {
            Tx(a, "init", !0)
        },
        Gy = function(a, b, c) {
            ob(a) || Gu(c, b, a)
        };

    function cz(a, b) {
        function c(g) {
            var k = Dn(g),
                m = Bn(k, "protocol"),
                n = Bn(k, "host", !0),
                p = Bn(k, "port"),
                q = Bn(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function dz(a) {
        return ez(a) ? 1 : 0
    }

    function ez(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = mb(a, {});
                mb({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (dz(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return wg(b, c);
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < sg.length; g++) {
                            var k = sg[g];
                            if (b[k]) {
                                f = b[k](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return tg(b, c);
            case "_eq":
                return xg(b, c);
            case "_ge":
                return yg(b, c);
            case "_gt":
                return Ag(b, c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return zg(b, c);
            case "_lt":
                return Bg(b, c);
            case "_re":
                return vg(b, c, a.ignore_case);
            case "_sw":
                return Cg(b, c);
            case "_um":
                return cz(b, c)
        }
        return !1
    };

    function fz() {
        var a = ["&cv=36", "&rv=" + oi.Qg, "&tc=" + uf.filter(function(b) {
            return b
        }).length];
        oi.me && a.push("&x=" + oi.me);
        return a.join("")
    };
    var gz = function() {
            return !1
        },
        hz = function() {
            var a = {};
            return function(b, c, d) {}
        };

    function iz() {
        var a = jz;
        return function(b, c, d) {
            var e = d && d.event;
            kz(c);
            var f = 0 === b.indexOf("__cvt_") ? void 0 : 1,
                g = new rb;
            l(c, function(r, t) {
                var u = od(t, void 0, f);
                void 0 === u && void 0 !== t && M(44);
                g.set(r, u)
            });
            a.h.h.F = Nf();
            var k = {
                fj: $f(b),
                eventId: void 0 !== e ? e.id : void 0,
                priorityId: void 0 !== e ? e.priorityId : void 0,
                xf: void 0 !== e ? function(r) {
                    return e.Rb.xf(r)
                } : void 0,
                ed: function() {
                    return b
                },
                log: function() {},
                al: {
                    index: d && d.index,
                    type: d && d.type,
                    name: d && d.name
                },
                om: !!rt(b, 3)
            };
            if (gz()) {
                var m = hz(),
                    n = void 0,
                    p = void 0;
                k.Wa = {
                    Lh: [],
                    pe: {},
                    ib: function(r, t, u) {
                        1 === t && (n = r);
                        7 === t && (p = u);
                        m(r, t, u)
                    },
                    wh: ph()
                };
                k.log = function(r, t) {
                    if (n) {
                        var u = Array.prototype.slice.call(arguments, 1);
                        m(n, 4, {
                            level: r,
                            source: p,
                            message: u
                        })
                    }
                }
            }
            var q = Ne(a, k, [b, g]);
            a.h.h.F = void 0;
            q instanceof ua && "return" === q.h && (q = q.B);
            return pd(q, void 0, f)
        }
    }

    function kz(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        Ba(b) && (a.gtmOnSuccess = function() {
            E(b)
        });
        Ba(c) && (a.gtmOnFailure = function() {
            E(c)
        })
    };

    function lz(a, b) {
        var c = this;
    }
    lz.M = "addConsentListener";
    var mz;
    var nz = function(a) {
        for (var b = 0; b < a.length; ++b)
            if (mz) try {
                a[b]()
            } catch (c) {
                M(77)
            } else a[b]()
    };

    function oz(a, b, c) {
        var d = this,
            e;
        return e
    }
    oz.D = "internal.addDataLayerEventListener";

    function pz(a, b, c) {}
    pz.M = "addDocumentEventListener";

    function qz(a, b, c, d) {}
    qz.M = "addElementEventListener";

    function rz(a) {}
    rz.M = "addEventCallback";

    function vz(a) {}
    vz.D = "internal.addFormAbandonmentListener";

    function wz(a, b, c, d) {}
    wz.D = "internal.addFormData";
    var xz = {},
        yz = [],
        zz = {},
        Az = 0,
        Bz = 0;

    function Iz(a, b) {}
    Iz.D = "internal.addFormInteractionListener";

    function Pz(a, b) {}
    Pz.D = "internal.addFormSubmitListener";

    function Uz(a) {}
    Uz.D = "internal.addGaSendListener";
    var Vz = function(a, b) {
        this.tagId = a;
        this.h = b
    };

    function Wz(a, b, c) {
        var d = this;
    }
    Wz.D = "internal.loadGoogleTag";

    function Xz(a, b, c) {}
    Xz.D = "internal.addGoogleTagRestriction";
    var Yz = {},
        Zz = [];
    var fA = function(a, b) {};
    fA.D = "internal.addHistoryChangeListener";

    function gA(a, b, c) {}
    gA.M = "addWindowEventListener";

    function hA(a, b) {
        K(J(this), ["toPath:!string", "fromPath:!string"], arguments);
        L(this, "access_globals", "write", a);
        L(this, "access_globals", "read", b);
        var c = a.split("."),
            d = b.split("."),
            e = [z, B],
            f = Za(c, e),
            g = Za(d, e);
        if (void 0 === f || void 0 === g) return !1;
        f[c[c.length - 1]] = g[d[d.length - 1]];
        return !0
    }
    hA.M = "aliasInWindow";

    function iA(a, b, c) {}
    iA.D = "internal.appendRemoteConfigParameter";

    function jA() {
        var a = 2;
        return a
    };

    function kA(a, b) {
        var c;
        K(J(this), ["path:!string"], [a]);
        L(this, "access_globals", "execute", a);
        for (var d = a.split("."), e = z, f = e[d[0]], g = 1; f && g < d.length; g++)
            if (e = f, f = f[d[g]], e === z || e === B) return;
        if ("function" !== jb(f)) return;
        for (var k = jA(), m = [], n = 1; n < arguments.length; n++) m.push(pd(arguments[n], this.h, k));
        var p = (0, this.h.K)(f, e, m);
        c = od(p, this.h, k);
        void 0 === c && void 0 !== p && M(45);
        return c
    }
    kA.M = "callInWindow";

    function lA(a) {}
    lA.M = "callLater";

    function mA(a) {}
    mA.D = "callOnDomReady";

    function nA(a) {}
    nA.D = "callOnWindowLoad";

    function oA(a) {
        var b;
        return b
    }
    oA.D = "internal.computeGtmParameter";

    function pA(a, b) {
        var c;
        K(J(this), ["key:!string", "dataLayerVersion:?number"], arguments), L(this, "read_data_layer", a), c = 2 !== (b || 2) ? Vi(a, 1) : Xi(a, [z, B]);
        var d = od(c, this.h, jA());
        void 0 === d && void 0 !== c && M(45);
        return d
    }
    pA.M = "copyFromDataLayer";

    function qA(a) {
        var b;
        K(J(this), ["path:!string"], arguments);
        L(this, "access_globals", "read", a);
        var c = a.split("."),
            d = Za(c, [z, B]);
        if (!d) return;
        var e = d[c[c.length - 1]];
        b = od(e, this.h, jA());
        void 0 === b && void 0 !== e && M(45);
        return b
    }
    qA.M = "copyFromWindow";

    function rA(a) {
        var b = void 0;
        return od(b, this.h, jA())
    }
    rA.D = "internal.copyKeyFromWindow";

    function sA(a, b) {
        var c;
        return c
    }
    sA.D = "internal.copyPreHit";

    function tA(a, b) {
        var c = null,
            d = jA();
        K(J(this), ["functionPath:!string", "arrayPath:!string"], arguments);
        L(this, "access_globals", "readwrite", a);
        L(this, "access_globals", "readwrite", b);
        var e = [z, B],
            f = a.split("."),
            g = Za(f, e),
            k = f[f.length - 1];
        if (void 0 === g) throw Error("Path " + a + " does not exist.");
        var m = g[k];
        if (m && !Ba(m)) return null;
        if (m) return od(m, this.h, d);
        var n;
        m = function() {
            if (!Ba(n.push)) throw Error("Object at " + b + " in window is not an array.");
            n.push.call(n, arguments)
        };
        g[k] = m;
        var p = b.split("."),
            q = Za(p, e),
            r = p[p.length - 1];
        if (void 0 === q) throw Error("Path " + p + " does not exist.");
        n = q[r];
        void 0 === n && (n = [], q[r] = n);
        c = function() {
            m.apply(m, Array.prototype.slice.call(arguments, 0))
        };
        return od(c, this.h, d)
    }
    tA.M = "createArgumentsQueue";

    function uA(a) {
        var b;
        return od(b, this.h, 1)
    }
    uA.D = "internal.createGaCommandQueue";

    function vA(a) {
        var b;
        K(J(this), ["path:!string"], arguments);
        L(this, "access_globals", "readwrite", a);
        var c = a.split("."),
            d = Za(c, [z, B]),
            e = c[c.length - 1];
        if (void 0 === d) throw Error("Path " + a + " does not exist.");
        var f = d[e];
        void 0 === f && (f = [], d[e] = f);
        b = function() {
            if (!Ba(f.push)) throw Error("Object at " + a + " in window is not an array.");
            f.push.apply(f, Array.prototype.slice.call(arguments, 0))
        };
        return od(b, this.h,
            jA())
    }
    vA.M = "createQueue";

    function wA(a, b) {
        var c = null;
        return c
    }
    wA.D = "internal.createRegex";

    function xA(a) {
        if (!a) return {};
        var b = a.al;
        return du(b.type, b.index, b.name)
    }

    function yA(a) {
        return a ? {
            originatingEntity: xA(a)
        } : {}
    };

    function zA(a) {}
    zA.D = "internal.declareConsentState";

    function AA(a) {
        var b = "";
        return b
    }
    AA.D = "internal.decodeUrlHtmlEntities";

    function BA(a) {
        var b;
        L(this, "detect_user_provided_data", "auto");
        var c = pd(a) || {},
            d = Vq({
                hd: !!c.includeSelector,
                jd: !!c.includeVisibility,
                ve: c.excludeElementSelectors,
                hb: c.fieldFilters,
                Jh: !!c.selectMultipleElements
            });
        b = new rb;
        var e = new qb;
        b.set("elements", e);
        for (var f = d.elements, g = 0; g < f.length; g++) e.push(CA(f[g]));
        void 0 !== d.Bh && b.set("preferredEmailElement", CA(d.Bh));
        b.set("status", d.status);
        return b
    }
    var CA = function(a) {
        var b = new rb;
        b.set("userData", a.U);
        b.set("tagName", a.tagName);
        void 0 !== a.querySelector && b.set("querySelector", a.querySelector);
        void 0 !== a.isVisible && b.set("isVisible", a.isVisible);
        if (Q(53)) {} else switch (a.type) {
            case "1":
                b.set("type", "email")
        }
        return b
    };
    BA.D = "internal.detectUserProvidedData";

    function FA(a, b) {
        return b
    }
    FA.D = "internal.enableAutoEventOnClick";

    function KA(a, b) {
        return b
    }
    KA.D = "internal.enableAutoEventOnElementVisibility";

    function LA() {}
    LA.D = "internal.enableAutoEventOnError";
    var MA = {},
        NA = [],
        OA = {},
        PA = 0,
        QA = 0;

    function WA(a, b) {
        var c = this;
        return b
    }
    WA.D = "internal.enableAutoEventOnFormInteraction";

    function aB(a, b) {
        var c = this;
        return b
    }
    aB.D = "internal.enableAutoEventOnFormSubmit";

    function fB() {
        var a = this;
    }
    fB.D = "internal.enableAutoEventOnGaSend";
    var gB = {},
        hB = [];

    function oB(a, b) {
        var c = this;
        return b
    }
    oB.D = "internal.enableAutoEventOnHistoryChange";

    function sB(a, b) {
        var c = this;
        return b
    }
    sB.D = "internal.enableAutoEventOnLinkClick";
    var tB, uB;

    function DB(a, b) {
        var c = this;
        return b
    }
    DB.D = "internal.enableAutoEventOnScroll";

    function EB(a) {
        return function() {
            if (a.wc && a.yc >= a.wc) a.uc && z.clearInterval(a.uc);
            else {
                a.yc++;
                var b = Qa();
                $w({
                    event: a.eventName,
                    "gtm.timerId": a.uc,
                    "gtm.timerEventNumber": a.yc,
                    "gtm.timerInterval": a.interval,
                    "gtm.timerLimit": a.wc,
                    "gtm.timerStartTime": a.Re,
                    "gtm.timerCurrentTime": b,
                    "gtm.timerElapsedTime": b - a.Re,
                    "gtm.triggers": a.Nh
                })
            }
        }
    }

    function FB(a, b) {
        return b
    }
    FB.D = "internal.enableAutoEventOnTimer";
    var lc = ca(["data-gtm-yt-inspected-"]),
        GB = ["www.youtube.com", "www.youtube-nocookie.com"],
        HB, IB = !1;

    function SB(a, b) {
        var c = this;
        return b
    }
    SB.D = "internal.enableAutoEventOnYouTubeActivity";
    var TB;

    function UB(a) {
        var b = !1;
        return b
    }
    UB.D = "internal.evaluateMatchingRules";
    var VB = function(a, b) {
            var c;
            c = b ? [Sr, Tr, Vr, Fr, Jr, Xr, Kr, Wr, Qr, Gr, as, Lr, Ur, Dr, Cr, Yr, zr] : [Vp, Er, ur, Hr, vr, wr, xr, yr, Mr, Nr, Pr, Rr, Ir, Or, Zr, $r];
            for (var d = 0; d < c.length && (c[d](a), !a.isAborted); d++);
        },
        WB = function(a, b, c, d) {
            var e = new vp(b, c, d);
            e.metadata.hit_type = a;
            e.metadata.speculative = !0;
            e.metadata.event_start_timestamp_ms = Qa();
            e.metadata.speculative_in_message = d.eventMetadata.speculative;
            return e
        },
        XB = function(a, b, c, d) {
            function e() {
                for (var r = 0; r < g.length; r++) {
                    var t = g[r];
                    t.isAborted || (VB(g[r], !0), t.metadata.speculative ||
                        t.isAborted || kt(t))
                }
            }
            var f = cp(a, d.isGtmEvent);
            if (f) {
                var g = [];
                if (d.eventMetadata.hit_type_override) {
                    var k = d.eventMetadata.hit_type_override;
                    Array.isArray(k) || (k = [k]);
                    for (var m = 0; m < k.length; m++) {
                        var n = WB(k[m], f, b, d);
                        n.metadata.speculative = !1;
                        g.push(n)
                    }
                } else b === N.g.na && g.push(WB("landing_page", f, b, d)), g.push(WB("conversion", f, b, d)), g.push(WB("user_data_lead", f, b, d)), g.push(WB("user_data_web", f, b, d)), g.push(WB("remarketing", f, b, d));
                for (var p = 0; p < g.length; p++) VB(g[p], !1);
                var q = [N.g.I];
                Q(79) && q.push(N.g.N);
                ak(function() {
                    for (var r = [], t = [], u = 0; u < g.length; u++) {
                        var v = g[u];
                        r.push(v.isAborted);
                        t.push(v.metadata.speculative)
                    }
                    e();
                    R(q) || Zj(function(w) {
                        var x = w.consentEventId,
                            y = w.consentPriorityId;
                        if (R(q)) {
                            for (var A = 0; A < g.length; A++) {
                                var C = g[A];
                                C.metadata.consent_updated = !0;
                                C.metadata.speculative = t[A];
                                C.metadata.event_start_timestamp_ms = Qa();
                                C.isAborted = r[A];
                                C.metadata.consent_event_id = x;
                                C.metadata.consent_priority_id = y
                            }
                            e()
                        }
                    }, q)
                }, q)
            }
        };
    var xC = function() {
            var a = !0;
            dm(7) && dm(9) && dm(10) || (a = !1);
            return a
        },
        yC = function() {
            var a = !0;
            dm(3) && dm(4) || (a = !1);
            return a
        };

    function tD(a, b, c, d) {}
    tD.D = "internal.executeEventProcessor";

    function uD(a) {
        var b = void 0;
        return od(b, this.h, 1)
    }
    uD.D = "internal.executeJavascriptString";
    var vD = function(a) {
        var b;
        return b
    };

    function wD() {
        var a = new rb;
        L(this, "read_container_data"), a.set("containerId", 'GTM-KWHT9HP'), a.set("version", '36'), a.set("environmentName", ''), a.set("debugMode", cg), a.set("previewMode", eg), a.set("environmentMode", dg), Q(87) && a.set("firstPartyServing", xi || zi), Q(89) && a.set("containerUrl", Fc), a.Bb();
        return a
    }
    wD.M = "getContainerVersion";

    function xD(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        K(J(this), ["name:!string", "decode:?boolean"], arguments), L(this, "get_cookies", a), c = od(zm(a, void 0, !!b), this.h);
        return c
    }
    xD.M = "getCookieValues";

    function yD() {
        return lj()
    }
    yD.D = "internal.getCountryCode";

    function zD() {
        var a = [];
        return od(a)
    }
    zD.D = "internal.getDestinationIds";

    function AD(a, b) {
        var c = "";
        return c
    }
    AD.D = "internal.getElementAttribute";

    function BD(a) {
        var b = null;
        return b
    }
    BD.M = "getElementById";

    function CD(a) {
        var b = "";
        return b
    }
    CD.D = "internal.getElementInnerText";

    function DD(a, b) {
        var c = null;
        return c
    }
    DD.D = "internal.getElementProperty";

    function ED(a) {
        var b;
        return b
    }
    ED.D = "internal.getElementValue";

    function FD(a) {
        var b = 0;
        return b
    }
    FD.D = "internal.getElementVisibilityRatio";

    function GD(a) {
        var b = null;
        return b
    }
    GD.D = "internal.getElementsByCssSelector";
    var HD = {};
    HD.deferGaGamLink = Q(64);
    HD.enableAddGoogleTagRestrictionApi = Q(40);
    HD.enableAdsConversionValidation = Q(37);
    HD.enableAdsHistoryChangeEvents = Q(15);
    HD.enableAutoPiiOnPhoneAndAddress = Q(53);
    HD.enableCcdPreAutoPiiDetection = Q(19);
    HD.enableConsentDisclosureActivity = Q(59);
    HD.enableDeferAllEnhancedMeasurement = Q(61);
    HD.enableEesPagePath = Q(17);
    HD.enableEuidAutoMode = Q(16);
    HD.enableFormSkipValidation = Q(54);
    HD.enableGa4OnoRemarketing = Q(14);
    HD.enableGetElementAttribute = Q(69);
    HD.enableGetElementInnerText = Q(76);
    HD.enableRemoteDomainListSettingsInPixie = Q(96);
    HD.enableUrlDecodeEventUsage = Q(78);
    HD.includeQueryInEesPagePath = Q(23);
    HD.pixieSetCorePlatformServices = Q(47);
    HD.useEnableAutoEventOnFormApis = Q(40);
    HD.autoPiiEligible = pj();

    function ID() {
        return od(HD)
    }
    ID.D = "internal.getFlags";

    function JD() {
        return new ld(Jx)
    }
    JD.D = "internal.getHtmlId";

    function KD(a, b) {
        var c;
        return c
    }
    KD.D = "internal.getProductSettingsParameter";

    function LD(a, b) {
        var c;
        return c
    }
    LD.M = "getQueryParameters";

    function MD(a, b) {
        var c;
        return c
    }
    MD.M = "getReferrerQueryParameters";

    function ND(a) {
        var b = "";
        return b
    }
    ND.M = "getReferrerUrl";

    function OD() {
        return mj()
    }
    OD.D = "internal.getRegionCode";

    function PD(a, b) {
        var c;
        return c
    }
    PD.D = "internal.getRemoteConfigParameter";

    function QD(a) {
        var b = "";
        return b
    }
    QD.M = "getUrl";

    function RD() {
        L(this, "get_user_agent");
        return Ec.userAgent
    }
    RD.M = "getUserAgent";

    function bE() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var cE = function() {
            var a = bE();
            a.hid = a.hid || Ga();
            return a.hid
        },
        dE = function(a, b) {
            var c = bE();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var $E = window,
        aF = document,
        bF = function(a) {
            var b = $E._gaUserPrefs;
            if (b && b.ioo && b.ioo() || aF.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === $E["ga-disable-" + a]) return !0;
            try {
                var c = $E.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = vm("AMP_TOKEN", String(aF.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return aF.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function jF(a) {
        l(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[N.g.Na] || {};
        l(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var sF = function(a, b) {};

    function rF(a, b) {
        var c = function() {};
        return c
    }

    function tF(a, b, c) {};
    var uF = rF;

    function wF(a, b, c) {
        var d = this;
        K(J(this), ["tagId:!string", "configuration:?PixieMap", "messageContext:?PixieMap"], arguments);
        var e = b ? pd(b) : {};
        nz([function() {
            return L(d, "configure_google_tags", a, e)
        }]);
        var f = c ? pd(c) : {},
            g = this.h.h;
        f.originatingEntity = xA(g);
        Yu(Uu(a, e), g.eventId, f);
    }
    wF.D = "internal.gtagConfig";

    function xF() {
        var a = {};
        return a
    };
    var yF = function(a, b) {
        var c = [],
            d = [a],
            e = function(f, g) {
                for (var k in f)
                    if (f.hasOwnProperty(k)) {
                        var m = g ? g + "." + k : k;
                        lb(f[k]) && -1 === d.indexOf(f[k]) ? (d.push(f[k]), e(f[k], m)) : c.push(m)
                    }
                d.pop()
            };
        e(a, b);
        return c
    };

    function zF(a, b) {
        K(J(this), ["keyOrObject:!*", "value:?*"], arguments);
        var c = null,
            d = pd(a);
        if (lb(d)) {
            for (var e = yF(d, ""), f = 0; f < e.length; f++) L(this, "write_data_layer", e[f]);
            c = Tu(d)
        } else if ("string" === typeof d) {
            var g = pd(b);
            if (lb(g))
                for (var k = yF(g, d), m = 0; m < k.length; m++) L(this, "write_data_layer", k[m]);
            else L(this, "write_data_layer", d);
            c = Tu(d, g)
        }
        if (c) {
            var n = this.h.h;
            Yu(c, n.eventId, yA(n));
            return od(c)
        }
    }
    zF.M = "gtagSet";

    function AF(a, b) {}
    AF.M = "injectHiddenIframe";

    function BF(a, b, c, d, e) {}

    function DF(a, b, c, d) {
        return function() {
            try {
                if (0 < b.length) {
                    var e = b.shift(),
                        f = DF(a, b, c, d);
                    if ("SCRIPT" == String(e.nodeName).toUpperCase() && "text/gtmscript" == e.type) {
                        var g = e.text || e.textContent || e.innerHTML || "",
                            k = e.charset || "",
                            m = e.getAttribute("data-gtmsrc");
                        m && Lc(m, f, d, {
                            async: !1,
                            id: e.id,
                            text: g,
                            charset: k
                        }, a);
                        m || f()
                    } else if (e.innerHTML && 0 <= e.innerHTML.toLowerCase().indexOf("<script")) {
                        for (var n = []; e.firstChild;) n.push(e.removeChild(e.firstChild));
                        a.insertBefore(e, null);
                        DF(e, n, f, d)()
                    } else a.insertBefore(e,
                        null), f()
                } else c()
            } catch (p) {
                d()
            }
        }
    }
    BF.D = "internal.injectHtml";
    var EF = {};
    var FF = function(a, b, c, d, e, f) {
        f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [
            [c],
            [d]
        ], Lc(a, function() {
            for (var g = e[f][0], k = 0; k < g.length; k++) E(g[k]);
            g.push = function(m) {
                E(m);
                return 0
            }
        }, function() {
            for (var g = e[f][1], k = 0; k < g.length; k++) E(g[k]);
            e[f] = null
        }, b)) : Lc(a, c, d, b)
    };

    function GF(a, b, c, d) {
        if (!bn()) {
            K(J(this), ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"], arguments);
            L(this, "inject_script", a);
            var e = this.h;
            FF(a, void 0, function() {
                b && b.h(e)
            }, function() {
                c && c.h(e)
            }, EF, d)
        }
    }
    var HF = Object.freeze({
            dl: 1,
            id: 1
        }),
        IF = {};

    function JF(a, b, c, d) {}
    GF.M = "injectScript";
    JF.D = "internal.injectScript";

    function KF(a) {
        var b = !0;
        return b
    }
    KF.M = "isConsentGranted";
    var LF = function() {
        var a = kh(function(b) {
            this.h.h.log("error", b)
        });
        a.M = "JSON";
        return a
    };

    function MF(a) {
        var b = void 0;
        return od(b)
    }
    MF.D = "internal.legacyParseUrl";
    var NF = function() {
            return !1
        },
        OF = {
            getItem: function(a) {
                var b = null;
                return b
            },
            setItem: function(a,
                b) {
                return !1
            },
            removeItem: function(a) {}
        };

    function PF() {
        try {
            L(this, "logging")
        } catch (c) {
            return
        }
        if (!console) return;
        for (var a = Array.prototype.slice.call(arguments, 0), b = 0; b < a.length; b++) a[b] = pd(a[b], this.h);
        console.log.apply(console, a);
    }
    PF.M = "logToConsole";

    function QF(a, b) {}
    QF.D = "internal.mergeRemoteConfig";

    function RF(a, b, c) {
        c = void 0 === c ? !0 : c;
        var d = [];
        return d
    }
    RF.D = "internal.parseCookieValuesFromString";

    function SF(a) {
        var b = void 0;
        return b
    }
    SF.M = "parseUrl";

    function TF(a) {}
    TF.D = "internal.processAsNewEvent";

    function UF(a, b, c) {
        var d;
        return d
    }
    UF.D = "internal.pushToDataLayer";

    function VF(a, b) {
        var c = !1;
        K(J(this), ["permission:!string"], [a]);
        for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; ++e) d[e] = pd(d[e], this.h);
        d.unshift(this);
        try {
            L.apply(null, d), c = !0
        } catch (f) {
            return !1
        }
        return c
    }
    VF.M = "queryPermission";

    function WF() {
        var a = "";
        return a
    }
    WF.M = "readCharacterSet";

    function XF() {
        return oi.ia
    }
    XF.D = "internal.readDataLayerName";

    function YF() {
        var a = "";
        return a
    }
    YF.M = "readTitle";

    function ZF(a, b) {
        var c = this;
    }
    ZF.D = "internal.registerCcdCallback";

    function $F(a) {
        return !0
    }
    $F.D = "internal.registerDestination";
    var aG = Object.freeze(["config", "event", "get", "set"]);

    function bG(a, b, c) {}
    bG.D = "internal.registerGtagCommandListener";

    function cG(a, b) {
        var c = !1;
        return c
    }
    cG.D = "internal.removeDataLayerEventListener";

    function dG(a, b) {}
    dG.D = "internal.removeFormData";

    function eG() {}
    eG.M = "resetDataLayer";

    function fG(a, b, c, d) {}
    fG.D = "internal.sendGtagEvent";

    function gG(a, b, c) {}
    gG.M = "sendPixel";

    function hG(a, b) {}
    hG.D = "internal.setAnchorHref";

    function iG(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    }
    iG.M = "setCookie";

    function jG(a, b) {}
    jG.M = "setCorePlatformServices";

    function kG(a) {
        K(J(this), ["consentSettings:!PixieMap"], arguments);
        for (var b = a.Pb(), c = b.length(), d = 0; d < c; d++) {
            var e = b.get(d);
            e !== N.g.Ra && e !== N.g.sd && L(this, "access_consent", e, "write")
        }
        var f = this.h.h,
            g = f.eventId,
            k = yA(f),
            m = Su("consent", "default", pd(a));
        Yu(m, g, k);
    }
    kG.M = "setDefaultConsentState";

    function lG(a, b) {}
    lG.D = "internal.setDelegatedConsentType";

    function mG(a, b) {}
    mG.D = "internal.setFormAction";

    function nG(a, b, c) {
        K(J(this), ["path:!string", "value:?*", "overrideExisting:?boolean"], arguments);
        L(this, "access_globals", "readwrite", a);
        var d = a.split("."),
            e = Za(d, [z, B]),
            f = d.pop();
        if (e && (void 0 === e[f] || c)) return e[f] = pd(b, this.h, jA()), !0;
        return !1
    }
    nG.M = "setInWindow";

    function oG(a, b, c) {}
    oG.D = "internal.setProductSettingsParameter";

    function pG(a, b, c) {}
    pG.D = "internal.setRemoteConfigParameter";

    function qG(a, b, c, d) {
        var e = this;
    }
    qG.M = "sha256";

    function rG(a, b, c) {}
    rG.D = "internal.sortRemoteConfigParameters";
    var sG = {},
        tG = {};
    sG.M = "templateStorage";
    sG.getItem = function(a) {
        var b = null;
        return b
    };
    sG.setItem = function(a, b) {};
    sG.removeItem = function(a) {};
    sG.clear = function() {};

    function uG(a, b) {
        var c = !1;
        return c
    }
    uG.D = "internal.testRegex";
    var vG = function(a) {
        var b;
        return b
    };

    function wG(a) {
        K(J(this), ["consentSettings:!PixieMap"], arguments);
        var b = pd(a),
            c;
        for (c in b) b.hasOwnProperty(c) && L(this, "access_consent", c, "write");
        var d = this.h.h;
        Yu(Su("consent", "update", b), d.eventId, yA(d));
    }
    wG.M = "updateConsentState";
    var xG;

    function yG(a, b, c) {
        xG = xG || new uh;
        xG.add(a, b, c)
    }

    function zG(a, b) {
        var c = xG = xG || new uh;
        if (c.B.hasOwnProperty(a)) throw "Attempting to add a private function which already exists: " + a + ".";
        if (c.h.hasOwnProperty(a)) throw "Attempting to add a private function with an existing API name: " + a + ".";
        c.B[a] = Ba(b) ? Rg(a, b) : Sg(a, b)
    }

    function AG() {
        return function(a) {
            var b;
            var c = xG;
            if (c.h.hasOwnProperty(a)) b = c.get(a, this);
            else {
                var d;
                if (d = c.B.hasOwnProperty(a)) {
                    var e = !1,
                        f = this.h.h;
                    if (f) {
                        var g = f.ed();
                        if (g) {
                            0 !== g.indexOf("__cvt_") && (e = !0);
                        }
                    } else e = !0;
                    d = e
                }
                if (d) {
                    var k = c.B.hasOwnProperty(a) ? c.B[a] : void 0;
                    b = k
                } else throw Error(a + " is not a valid API name.");
            }
            return b
        }
    };
    var BG = function() {
        var a = function(c) {
                return zG(c.D, c)
            },
            b = function(c) {
                return yG(c.M, c)
            };
        b(lz);
        b(rz);
        b(hA);
        b(kA);
        b(lA);
        b(pA);
        b(qA);
        b(tA);
        b(LF());
        b(vA);
        b(wD);
        b(xD);
        b(LD);
        b(MD);
        b(ND);
        b(QD);
        b(zF);
        b(AF);
        b(GF);
        b(KF);
        b(PF);
        b(SF);
        b(VF);
        b(WF);
        b(YF);
        b(gG);
        b(iG);
        b(kG);
        b(nG);
        b(qG);
        b(sG);
        b(wG);
        yG("Math", Xg());
        yG("Object", sh);
        yG("TestHelper", wh());
        yG("assertApi", Tg);
        yG("assertThat", Ug);
        yG("decodeUri", Yg);
        yG("decodeUriComponent", Zg);
        yG("encodeUri", $g);
        yG("encodeUriComponent", ah);
        yG("fail", gh);
        yG("generateRandom",
            hh);
        yG("getTimestamp", ih);
        yG("getTimestampMillis", ih);
        yG("getType", jh);
        yG("makeInteger", lh);
        yG("makeNumber", mh);
        yG("makeString", nh);
        yG("makeTableMap", oh);
        yG("mock", rh);
        yG("fromBase64", vD, !("atob" in z));
        yG("localStorage", OF, !NF());
        yG("toBase64", vG, !("btoa" in z));
        a(oz);
        a(wz);
        a(Iz);
        a(Pz);
        a(Uz);
        a(Xz);
        a(fA);
        a(iA);
        a(nA);
        a(sA);
        a(wA);
        a(zA);
        a(BA);
        a(KA);
        a(LA);
        a(WA);
        a(aB);
        a(fB);
        a(oB);
        a(sB);
        a(DB);
        a(SB);
        a(bh);
        a(UB);
        a(tD);
        a(yD);
        a(zD);
        a(ED);
        a(GD);
        a(ID);
        a(KD);
        a(OD);
        a(PD);
        a(wF);
        a(JF);
        a(Wz);
        a(QF);
        a(TF);
        a(ZF);
        a($F);
        a(bG);
        a(cG);
        a(dG);
        a(fG);
        a(hG);
        a(lG);
        a(mG);
        a(oG);
        a(pG);
        a(rG);
        a(uG);
        zG("internal.GtagSchema", xF());
        Q(47) && b(jG);
        Q(69) && a(AD);
        Q(76) &&
            a(CD);
        Q(77) && a(DD);
        Q(84) && a(FD);
        Q(88) && a(RF);
        Q(91) && a(JD);
        Q(93) && a(XF);
        Q(94) && a(AA);
        Q(97) && a(MF);
        Q(100) && a(UF);
        Q(104) && a(BF);
        Q(101) && a(uD);
        Q(103) && a(FB);
        Q(105) && a(FA);
        Q(106) && a(rA);
        Q(107) && a(uA);
        return AG()
    };
    var jz;

    function CG() {
        jz.h.h.K = function(a, b, c) {
            pi.SANDBOXED_JS_SEMAPHORE = pi.SANDBOXED_JS_SEMAPHORE || 0;
            pi.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                pi.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }

    function DG(a) {
        void 0 !== a && l(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                Hi[e] = Hi[e] || [];
                Hi[e].push(b)
            }
        })
    };
    var EG = encodeURI,
        Y = encodeURIComponent,
        FG = function(a, b, c) {
            Oc(a, b, c)
        },
        GG = function(a, b) {
            if (!a) return !1;
            var c = Bn(Dn(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        HG = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) &&
                a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Z = {
        m: {}
    };
    Z.m.jsm = ["customScripts"],
        function() {
            (function(a) {
                Z.__jsm = a;
                Z.__jsm.o = "jsm";
                Z.__jsm.isVendorTemplate = !0;
                Z.__jsm.priorityOverride = 0;
                Z.__jsm.isInfrastructure = !1;
                Z.__jsm.runInSiloedMode = !1
            })(function(a) {
                if (void 0 !== a.vtp_javascript) {
                    var b = a.vtp_javascript;
                    try {
                        var c = V("google_tag_manager");
                        var d = c && c.e && c.e(b);
                        Gy(d, "jsm", a.vtp_gtmEventId);
                        return d
                    } catch (e) {}
                }
            })
        }();
    Z.m.c = ["google"],
        function() {
            (function(a) {
                Z.__c = a;
                Z.__c.o = "c";
                Z.__c.isVendorTemplate = !0;
                Z.__c.priorityOverride = 0;
                Z.__c.isInfrastructure = !1;
                Z.__c.runInSiloedMode = !0
            })(function(a) {
                Gy(a.vtp_value, "c", a.vtp_gtmEventId);
                return a.vtp_value
            })
        }();
    Z.m.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.o = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0;
                Z.__e.isInfrastructure = !1;
                Z.__e.runInSiloedMode = !0
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Z.m.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.o = "f";
                Z.__f.isVendorTemplate = !0;
                Z.__f.priorityOverride = 0;
                Z.__f.isInfrastructure = !1;
                Z.__f.runInSiloedMode = !1
            })(function(a) {
                var b = yy("gtm.referrer", 1) || B.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? Bn(Dn(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : xy(String(b)) : String(b)
            })
        }();
    Z.m.cl = ["google"],
        function() {
            function a(b) {
                var c = b.target;
                if (c) {
                    var d = Rx(c, "gtm.click");
                    zy(d)
                }
            }(function(b) {
                Z.__cl = b;
                Z.__cl.o = "cl";
                Z.__cl.isVendorTemplate = !0;
                Z.__cl.priorityOverride = 0;
                Z.__cl.isInfrastructure = !1;
                Z.__cl.runInSiloedMode = !1
            })(function(b) {
                if (!Ey("cl")) {
                    var c = V("document");
                    Pc(c, "click", a, !0);
                    Fy("cl")
                }
                E(b.vtp_gtmOnSuccess)
            })
        }();
    Z.m.j = ["google"],
        function() {
            (function(a) {
                Z.__j = a;
                Z.__j.o = "j";
                Z.__j.isVendorTemplate = !0;
                Z.__j.priorityOverride = 0;
                Z.__j.isInfrastructure = !1;
                Z.__j.runInSiloedMode = !1
            })(function(a) {
                for (var b = String(a.vtp_name).split("."), c = V(b.shift()), d = 0; d < b.length; d++) c = c && c[b[d]];
                Gy(c, "j", a.vtp_gtmEventId);
                return c
            })
        }();
    Z.m.k = ["google"],
        function() {
            (function(a) {
                Z.__k = a;
                Z.__k.o = "k";
                Z.__k.isVendorTemplate = !0;
                Z.__k.priorityOverride = 0;
                Z.__k.isInfrastructure = !1;
                Z.__k.runInSiloedMode = !1
            })(function(a) {
                return By(a.vtp_name, yy("gtm.cookie", 1), !!a.vtp_decodeCookie)[0]
            })
        }();
    Z.m.access_globals = ["google"],
        function() {
            function a(b, c, d) {
                var e = {
                    key: d,
                    read: !1,
                    write: !1,
                    execute: !1
                };
                switch (c) {
                    case "read":
                        e.read = !0;
                        break;
                    case "write":
                        e.write = !0;
                        break;
                    case "readwrite":
                        e.read = e.write = !0;
                        break;
                    case "execute":
                        e.execute = !0;
                        break;
                    default:
                        throw Error("Invalid " + b + " request " + c);
                }
                return e
            }(function(b) {
                Z.__access_globals = b;
                Z.__access_globals.o = "access_globals";
                Z.__access_globals.isVendorTemplate = !0;
                Z.__access_globals.priorityOverride = 0;
                Z.__access_globals.isInfrastructure = !1;
                Z.__access_globals.runInSiloedMode = !1
            })(function(b) {
                for (var c = b.vtp_keys || [], d = b.vtp_createPermissionError, e = [], f = [], g = [], k = 0; k < c.length; k++) {
                    var m = c[k],
                        n = m.key;
                    m.read && e.push(n);
                    m.write && f.push(n);
                    m.execute && g.push(n)
                }
                return {
                    assert: function(p, q, r) {
                        if (!h(r)) throw d(p, {}, "Key must be a string.");
                        if ("read" === q) {
                            if (-1 < e.indexOf(r)) return
                        } else if ("write" === q) {
                            if (-1 < f.indexOf(r)) return
                        } else if ("readwrite" === q) {
                            if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return
                        } else if ("execute" === q) {
                            if (-1 < g.indexOf(r)) return
                        } else throw d(p, {}, "Operation must be either 'read', 'write', or 'execute', was " +
                            q);
                        throw d(p, {}, "Prohibited " + q + " on global variable: " + r + ".");
                    },
                    J: a
                }
            })
        }();
    Z.m.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.o = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0;
                Z.__u.isInfrastructure = !1;
                Z.__u.runInSiloedMode = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : yy("gtm.url", 1)) || vy();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return xy(String(c));
                var e = Dn(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        k = b[a("vtp_queryKey").toString()] || "",
                        m =
                        b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? Da(k) ? n = k : n = String(k).replace(/\s+/g, "").split(",") : n = [String(k)];
                    for (var p = 0; p < n.length; p++) {
                        var q = Bn(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!m || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = Bn(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
    Z.m.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.o = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0;
                Z.__v.isInfrastructure = !1;
                Z.__v.runInSiloedMode = !1
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = yy(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                Gy(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();




    Z.m.ytl = ["google"],
        function() {
            function a() {
                var u = Math.round(1E9 * Math.random()) + "";
                return B.getElementById(u) ? a() : u
            }

            function b(u, v) {
                if (!u) return !1;
                for (var w = 0; w < p.length; w++)
                    if (0 <= u.indexOf("//" + p[w] + "/" + v)) return !0;
                return !1
            }

            function c(u, v) {
                var w = u.getAttribute("src");
                if (b(w, "embed/")) {
                    if (0 < w.indexOf("enablejsapi=1")) return !0;
                    if (v) {
                        var x = u.setAttribute,
                            y;
                        var A = -1 !== w.indexOf("?") ? "&" : "?";
                        if (-1 < w.indexOf("origin=")) y = w + A + "enablejsapi=1";
                        else {
                            if (!r) {
                                var C = V("document");
                                r = C.location.protocol + "//" + C.location.hostname;
                                C.location.port && (r += ":" + C.location.port)
                            }
                            y = w + A + "enablejsapi=1&origin=" + encodeURIComponent(r)
                        }
                        x.call(u, "src", y);
                        return !0
                    }
                }
                return !1
            }

            function d(u, v) {
                if (!u.getAttribute("data-gtm-yt-inspected-" + v.jb) && (u.setAttribute("data-gtm-yt-inspected-" + v.jb, "true"), c(u, v.ye))) {
                    u.id || (u.id = a());
                    var w = V("YT"),
                        x = w.get(u.id);
                    x || (x = new w.Player(u.id));
                    var y = f(x, v),
                        A = {},
                        C;
                    for (C in y) A = {
                        Ke: A.Ke
                    }, A.Ke = C, y.hasOwnProperty(A.Ke) && x.addEventListener(A.Ke, function(D) {
                        return function(G) {
                            return y[D.Ke](G.data)
                        }
                    }(A))
                }
            }

            function e(u) {
                E(function() {
                    function v() {
                        for (var x =
                                w.getElementsByTagName("iframe"), y = x.length, A = 0; A < y; A++) d(x[A], u)
                    }
                    var w = V("document");
                    v();
                    ey(v)
                })
            }

            function f(u, v) {
                var w, x;

                function y() {
                    W = qy(function() {
                        return {
                            url: T,
                            title: da,
                            bh: X,
                            kj: u.getCurrentTime(),
                            playbackRate: ja
                        }
                    }, v.jb, u.getIframe());
                    X = 0;
                    da = T = "";
                    ja = 1;
                    return A
                }

                function A(Fa) {
                    switch (Fa) {
                        case q.PLAYING:
                            X = Math.round(u.getDuration());
                            T = u.getVideoUrl();
                            if (u.getVideoData) {
                                var Ra = u.getVideoData();
                                da = Ra ? Ra.title : ""
                            }
                            ja = u.getPlaybackRate();
                            v.Wg ? zy(W.createEvent("start")) : W.bd();
                            ha = m(v.Dh, v.Ch, u.getDuration());
                            return C(Fa);
                        default:
                            return A
                    }
                }

                function C() {
                    ia = u.getCurrentTime();
                    Ja = uy().getTime();
                    W.Fj();
                    S();
                    return D
                }

                function D(Fa) {
                    var Ra;
                    switch (Fa) {
                        case q.ENDED:
                            return F(Fa);
                        case q.PAUSED:
                            Ra = "pause";
                        case q.BUFFERING:
                            var Wa = u.getCurrentTime() - ia;
                            Ra = 1 < Math.abs((uy().getTime() - Ja) / 1E3 * ja - Wa) ? "seek" : Ra || "buffering";
                            u.getCurrentTime() && (v.Vg ? zy(W.createEvent(Ra)) : W.bd());
                            O();
                            return G;
                        case q.UNSTARTED:
                            return y(Fa);
                        default:
                            return D
                    }
                }

                function G(Fa) {
                    switch (Fa) {
                        case q.ENDED:
                            return F(Fa);
                        case q.PLAYING:
                            return C(Fa);
                        case q.UNSTARTED:
                            return y(Fa);
                        default:
                            return G
                    }
                }

                function F() {
                    for (; x;) {
                        var Fa = w;
                        ry(x);
                        Fa()
                    }
                    v.Ug && zy(W.createEvent("complete", 1));
                    return y(q.UNSTARTED)
                }

                function I() {}

                function O() {
                    x && (ry(x), x = 0, w = I)
                }

                function S() {
                    if (ha.length && 0 !== ja) {
                        var Fa = -1,
                            Ra;
                        do {
                            Ra = ha[0];
                            if (Ra.Aa > u.getDuration()) return;
                            Fa = (Ra.Aa - u.getCurrentTime()) / ja;
                            if (0 > Fa && (ha.shift(), 0 === ha.length)) return
                        } while (0 > Fa);
                        w = function() {
                            x = 0;
                            w = I;
                            0 < ha.length && ha[0].Aa === Ra.Aa && (ha.shift(), zy(W.createEvent("progress", Ra.Oe, Ra.Qe)));
                            S()
                        };
                        x = sy(w, 1E3 * Fa)
                    }
                }
                var W, ha = [],
                    X, T, da, ja, ia, Ja,
                    sa = y(q.UNSTARTED);
                x = 0;
                w = I;
                return {
                    onStateChange: function(Fa) {
                        sa = sa(Fa)
                    },
                    onPlaybackRateChange: function(Fa) {
                        ia = u.getCurrentTime();
                        Ja = uy().getTime();
                        W.bd();
                        ja = Fa;
                        O();
                        S()
                    }
                }
            }

            function g(u) {
                for (var v = u.split(","), w = v.length, x = [], y = 0; y < w; y++) {
                    var A = parseInt(v[y], 10);
                    isNaN(A) || 100 < A || 0 > A || x.push(A / 100)
                }
                x.sort(function(C, D) {
                    return C - D
                });
                return x
            }

            function k(u) {
                for (var v = u.split(","), w = v.length, x = [], y = 0; y < w; y++) {
                    var A = parseInt(v[y], 10);
                    isNaN(A) || 0 > A || x.push(A)
                }
                x.sort(function(C, D) {
                    return C - D
                });
                return x
            }

            function m(u,
                v, w) {
                var x = u.map(function(C) {
                    return {
                        Aa: C,
                        Qe: C,
                        Oe: void 0
                    }
                });
                if (!v.length) return x;
                var y = v.map(function(C) {
                    return {
                        Aa: C * w,
                        Qe: void 0,
                        Oe: C
                    }
                });
                if (!x.length) return y;
                var A = x.concat(y);
                A.sort(function(C, D) {
                    return C.Aa - D.Aa
                });
                return A
            }

            function n(u) {
                var v = !!u.vtp_captureStart,
                    w = !!u.vtp_captureComplete,
                    x = !!u.vtp_capturePause,
                    y = g(u.vtp_progressThresholdsPercent + ""),
                    A = k(u.vtp_progressThresholdsTimeInSeconds + ""),
                    C = !!u.vtp_fixMissingApi;
                if (v || w || x || y.length || A.length) {
                    var D = {
                            Wg: v,
                            Ug: w,
                            Vg: x,
                            Ch: y,
                            Dh: A,
                            ye: C,
                            jb: void 0 ===
                                u.vtp_uniqueTriggerId ? "" : u.vtp_uniqueTriggerId
                        },
                        G = V("YT"),
                        F = function() {
                            e(D)
                        };
                    E(u.vtp_gtmOnSuccess);
                    if (G) G.ready && G.ready(F);
                    else {
                        var I = V("onYouTubeIframeAPIReady");
                        Ay("onYouTubeIframeAPIReady", function() {
                            I && I();
                            F()
                        });
                        E(function() {
                            for (var O = V("document"), S = O.getElementsByTagName("script"), W = S.length, ha = 0; ha < W; ha++) {
                                var X = S[ha].getAttribute("src");
                                if (b(X, "iframe_api") || b(X, "player_api")) return
                            }
                            for (var T = O.getElementsByTagName("iframe"), da = T.length, ja = 0; ja < da; ja++)
                                if (!t && c(T[ja], D.ye)) {
                                    ty("https://www.youtube.com/iframe_api");
                                    t = !0;
                                    break
                                }
                        })
                    }
                } else E(u.vtp_gtmOnSuccess)
            }
            var p = ["www.youtube.com", "www.youtube-nocookie.com"],
                q = {
                    UNSTARTED: -1,
                    ENDED: 0,
                    PLAYING: 1,
                    PAUSED: 2,
                    BUFFERING: 3,
                    CUED: 5
                },
                r, t = !1;
            (function(u) {
                Z.__ytl = u;
                Z.__ytl.o = "ytl";
                Z.__ytl.isVendorTemplate = !0;
                Z.__ytl.priorityOverride = 0;
                Z.__ytl.isInfrastructure = !1;
                Z.__ytl.runInSiloedMode = !1
            })(function(u) {
                u.vtp_triggerStartOption ? n(u) : bu(function() {
                    n(u)
                })
            })
        }();

    Z.m.gclidw = ["google"],
        function() {
            var a = ["aw", "dc", "gf", "ha", "gb"];
            (function(b) {
                Z.__gclidw = b;
                Z.__gclidw.o = "gclidw";
                Z.__gclidw.isVendorTemplate = !0;
                Z.__gclidw.priorityOverride = 100;
                Z.__gclidw.isInfrastructure = !1;
                Z.__gclidw.runInSiloedMode = !1
            })(function(b) {
                E(b.vtp_gtmOnSuccess);
                var c, d, e, f;
                b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix, c = b.vtp_path, d = b.vtp_domain, f = b.vtp_cookieFlags);
                var g = {
                    prefix: e,
                    path: c,
                    domain: d,
                    flags: f
                };
                !b.vtp_enableCrossDomainFeature || b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming ||
                    !b.vtp_enableCrossDomain && !go() || (No(a, g), so(g));
                Ko(g);
                Qo(["aw", "dc"], g);
                Qp(g);
                if (b.vtp_enableCrossDomainFeature && b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
                    var k = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                    Po(a, k, b.vtp_urlPosition, !!b.vtp_formDecoration, g.prefix);
                    to(lo(g.prefix), k, b.vtp_urlPosition, !!b.vtp_formDecoration, g);
                    to("FPAU", k, b.vtp_urlPosition, !!b.vtp_formDecoration, g)
                }
                var m = yy(N.g.oa);
                $o({
                    s: ml(new bl(b.vtp_gtmEventId, b.vtp_gtmPriorityId)),
                    Xg: !1,
                    Nf: void 0 != m && !1 !== m,
                    dd: g,
                    Hf: !0
                });
                b.vtp_enableUrlPassthrough && So(["aw", "dc", "gb"])
            })
        }();

    Z.m.aev = ["google"],
        function() {
            function a(r, t, u, v, w) {
                w || (w = "element");
                var x = t + "." + u,
                    y;
                if (n.hasOwnProperty(x)) y = n[x];
                else {
                    var A = r[w];
                    if (A && (y = v(A), n[x] = y, p.push(x), 35 < p.length)) {
                        var C = p.shift();
                        delete n[C]
                    }
                }
                return y
            }

            function b(r, t, u) {
                var v = r[q[t]];
                return void 0 !== v ? v : u
            }

            function c(r, t) {
                if (!r) return !1;
                var u = d(vy());
                Da(t) || (t = String(t || "").replace(/\s+/g, "").split(","));
                for (var v = [u], w = 0; w < t.length; w++) {
                    var x = t[w];
                    if (x.hasOwnProperty("is_regex"))
                        if (x.is_regex) try {
                            x = new RegExp(x.domain)
                        } catch (C) {
                            continue
                        } else x =
                            x.domain;
                    var y = d(r);
                    if (x instanceof RegExp) {
                        if (x.test(y)) return !1
                    } else {
                        var A = x;
                        if (0 != A.length) {
                            if (0 <= y.indexOf(A)) return !1;
                            v.push(d(A))
                        }
                    }
                }
                return !GG(r, v)
            }

            function d(r) {
                m.test(r) || (r = "http://" + r);
                return Bn(Dn(r), "HOST", !0)
            }

            function e(r, t, u, v) {
                switch (r) {
                    case "SUBMIT_TEXT":
                        return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
                    case "LENGTH":
                        var w = a(t, u, "FORM." + r, g);
                        return void 0 === w ? v : w;
                    case "INTERACTED_FIELD_ID":
                        return k(t, "id", v);
                    case "INTERACTED_FIELD_NAME":
                        return k(t, "name", v);
                    case "INTERACTED_FIELD_TYPE":
                        return k(t,
                            "type", v);
                    case "INTERACTED_FIELD_POSITION":
                        var x = t.interactedFormFieldPosition;
                        return void 0 === x ? v : x;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var y = t.interactSequenceNumber;
                        return void 0 === y ? v : y;
                    default:
                        return v
                }
            }

            function f(r) {
                switch (r.tagName.toLowerCase()) {
                    case "input":
                        return Rc(r, "value");
                    case "button":
                        return Sc(r);
                    default:
                        return null
                }
            }

            function g(r) {
                if ("form" === r.tagName.toLowerCase() && r.elements) {
                    for (var t = 0, u = 0; u < r.elements.length; u++) $x(r.elements[u]) && t++;
                    return t
                }
            }

            function k(r, t, u) {
                var v = r.interactedFormField;
                return v && Rc(v, t) || u
            }
            var m = /^https?:\/\//i,
                n = {},
                p = [],
                q = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(r) {
                Z.__aev = r;
                Z.__aev.o = "aev";
                Z.__aev.isVendorTemplate = !0;
                Z.__aev.priorityOverride = 0;
                Z.__aev.isInfrastructure = !1;
                Z.__aev.runInSiloedMode = !1
            })(function(r) {
                var t = r.vtp_gtmEventId,
                    u = r.vtp_defaultValue,
                    v = r.vtp_varType,
                    w = r.vtp_gtmCachedValues.gtm;
                switch (v) {
                    case "TAG_NAME":
                        var x = w.element;
                        return x && x.tagName || u;
                    case "TEXT":
                        return a(w, t, v, Sc) || u;
                    case "URL":
                        var y;
                        a: {
                            var A = String(w.elementUrl || u || ""),
                                C = Dn(A),
                                D = String(r.vtp_component || "URL");
                            switch (D) {
                                case "URL":
                                    y = A;
                                    break a;
                                case "IS_OUTBOUND":
                                    y = c(A, r.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    y = Bn(C, D, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey)
                            }
                        }
                        return y;
                    case "ATTRIBUTE":
                        var G;
                        if (void 0 ===
                            r.vtp_attribute) G = b(w, v, u);
                        else {
                            var F = w.element;
                            G = F && Rc(F, r.vtp_attribute) || u || ""
                        }
                        return G;
                    case "MD":
                        var I = r.vtp_mdValue,
                            O = a(w, t, "MD", my);
                        return I && O ? py(O, I) || u : O || u;
                    case "FORM":
                        return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, u);
                    default:
                        var S = b(w, v, u);
                        Gy(S, "aev", r.vtp_gtmEventId);
                        return S
                }
            })
        }();
    Z.m.read_data_layer = ["google"],
        function() {
            function a(b, c) {
                return {
                    key: c
                }
            }(function(b) {
                Z.__read_data_layer = b;
                Z.__read_data_layer.o = "read_data_layer";
                Z.__read_data_layer.isVendorTemplate = !0;
                Z.__read_data_layer.priorityOverride = 0;
                Z.__read_data_layer.isInfrastructure = !1;
                Z.__read_data_layer.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_keyPatterns || [],
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!h(f)) throw d(e, {}, "Keys must be strings.");
                        try {
                            if (rg(f, c)) return
                        } catch (g) {
                            throw d(e, {}, "Invalid key filter.");
                        }
                        throw d(e, {}, "Prohibited read from data layer variable: " + f + ".");
                    },
                    J: a
                }
            })
        }();

    Z.m.fsl = [],
        function() {
            function a() {
                var e = V("document"),
                    f = c(),
                    g = HTMLFormElement.prototype.submit;
                Pc(e, "click", function(k) {
                    var m = k.target;
                    if (m && (m = Uc(m, ["button", "input"], 100)) && ("submit" == m.type || "image" == m.type) && m.name && Rc(m, "value")) {
                        var n;
                        m.form ? m.form.tagName ? n = m.form : n = B.getElementById(m.form) : n = Uc(m, ["form"], 100);
                        n && f.store(n, m)
                    }
                }, !1);
                Pc(e, "submit", function(k) {
                    var m = k.target;
                    if (!m) return k.returnValue;
                    var n = k.defaultPrevented || !1 === k.returnValue,
                        p = b(m) && !n,
                        q = f.get(m),
                        r = !0;
                    if (d(m, function() {
                            if (r) {
                                var t;
                                q && (t = e.createElement("input"), t.type = "hidden", t.name = q.name, t.value = q.value, m.appendChild(t));
                                g.call(m);
                                t && m.removeChild(t)
                            }
                        }, n, p, q)) r = !1;
                    else return n || (k.preventDefault && k.preventDefault(), k.returnValue = !1), !1;
                    return k.returnValue
                }, !1);
                HTMLFormElement.prototype.submit = function() {
                    var k = this,
                        m = b(k),
                        n = !0;
                    d(k, function() {
                        n && g.call(k)
                    }, !1, m) && (g.call(k), n = !1)
                }
            }

            function b(e) {
                var f = e.target;
                return f && "_self" !== f && "_parent" !== f && "_top" !== f ? !1 : !0
            }

            function c() {
                var e = [],
                    f = function(g) {
                        return Ea(e, function(k) {
                            return k.form ===
                                g
                        })
                    };
                return {
                    store: function(g, k) {
                        var m = f(g);
                        m ? m.button = k : e.push({
                            form: g,
                            button: k
                        })
                    },
                    get: function(g) {
                        var k = f(g);
                        return k ? k.button : null
                    }
                }
            }

            function d(e, f, g, k, m) {
                var n = Vx("fsl", g ? "nv.mwt" : "mwt", 0),
                    p;
                p = g ? Vx("fsl", "nv.ids", []) : Vx("fsl", "ids", []);
                if (!p.length) return !0;
                var q = Rx(e, "gtm.formSubmit", p),
                    r = e.action;
                r && r.tagName && (r = e.cloneNode(!1).action);
                q["gtm.elementUrl"] = r;
                M(121);
                if ("https://www.facebook.com/tr/" === r) return M(122), !0;
                m && (q["gtm.formSubmitElement"] = m);
                if (k && n) {
                    if (!zy(q, bx(f, n), n)) return !1
                } else zy(q,
                    function() {}, n || 2E3);
                return !0
            }(function(e) {
                Z.__fsl = e;
                Z.__fsl.o = "fsl";
                Z.__fsl.isVendorTemplate = !0;
                Z.__fsl.priorityOverride = 0;
                Z.__fsl.isInfrastructure = !1;
                Z.__fsl.runInSiloedMode = !1
            })(function(e) {
                var f = e.vtp_waitForTags,
                    g = e.vtp_checkValidation,
                    k = Number(e.vtp_waitForTagsTimeout);
                if (!k || 0 >= k) k = 2E3;
                var m = e.vtp_uniqueTriggerId || "0";
                if (f) {
                    var n = function(q) {
                        return Math.max(k, q)
                    };
                    Ux("fsl", "mwt", n, 0);
                    g || Ux("fsl", "nv.mwt", n, 0)
                }
                var p = function(q) {
                    q.push(m);
                    return q
                };
                Ux("fsl", "ids", p, []);
                g || Ux("fsl", "nv.ids", p, []);
                Ey("fsl") || (a(), Fy("fsl"));
                E(e.vtp_gtmOnSuccess)
            })
        }();



    Z.m.lcl = [],
        function() {
            function a() {
                var c = V("document"),
                    d = 0,
                    e = function(f) {
                        var g = f.target;
                        if (g && 3 !== f.which && !(f.nh || f.timeStamp && f.timeStamp === d)) {
                            d = f.timeStamp;
                            g = Uc(g, ["a", "area"], 100);
                            if (!g) return f.returnValue;
                            var k = f.defaultPrevented || !1 === f.returnValue,
                                m = Vx("lcl", k ? "nv.mwt" : "mwt", 0),
                                n;
                            n = k ? Vx("lcl", "nv.ids", []) : Vx("lcl", "ids", []);
                            if (n.length) {
                                var p = Rx(g, "gtm.linkClick", n);
                                if (b(f, g, c) && !k && m && g.href) {
                                    var q = !!Ea(String(Wc(g, "rel") || "").split(" "), function(v) {
                                            return "noreferrer" === v.toLowerCase()
                                        }),
                                        r = V((Wc(g, "target") || "_self").substring(1)),
                                        t = !0,
                                        u = bx(function() {
                                            var v;
                                            if (v = t && r) {
                                                var w;
                                                a: if (q) {
                                                    var x;
                                                    try {
                                                        x = new MouseEvent(f.type, {
                                                            bubbles: !0
                                                        })
                                                    } catch (y) {
                                                        if (!c.createEvent) {
                                                            w = !1;
                                                            break a
                                                        }
                                                        x = c.createEvent("MouseEvents");
                                                        x.initEvent(f.type, !0, !0)
                                                    }
                                                    x.nh = !0;
                                                    f.target.dispatchEvent(x);
                                                    w = !0
                                                } else w = !1;
                                                v = !w
                                            }
                                            v && (r.location.href = Wc(g, "href"))
                                        }, m);
                                    if (zy(p, u, m)) t = !1;
                                    else return f.preventDefault && f.preventDefault(), f.returnValue = !1
                                } else zy(p, function() {}, m || 2E3);
                                return !0
                            }
                        }
                    };
                Pc(c, "click", e, !1);
                Pc(c, "auxclick", e, !1)
            }

            function b(c, d, e) {
                if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
                var f = Wc(d, "href"),
                    g = f.indexOf("#"),
                    k = Wc(d, "target");
                if (k && "_self" !== k && "_parent" !== k && "_top" !== k || 0 === g) return !1;
                if (0 < g) {
                    var m = xy(f),
                        n = xy(e.location);
                    return m !== n
                }
                return !0
            }(function(c) {
                Z.__lcl = c;
                Z.__lcl.o = "lcl";
                Z.__lcl.isVendorTemplate = !0;
                Z.__lcl.priorityOverride = 0;
                Z.__lcl.isInfrastructure = !1;
                Z.__lcl.runInSiloedMode = !1
            })(function(c) {
                var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
                    e = void 0 === c.vtp_checkValidation ?
                    !0 : c.vtp_checkValidation,
                    f = Number(c.vtp_waitForTagsTimeout);
                if (!f || 0 >= f) f = 2E3;
                var g = c.vtp_uniqueTriggerId || "0";
                if (d) {
                    var k = function(n) {
                        return Math.max(f, n)
                    };
                    Ux("lcl", "mwt", k, 0);
                    e || Ux("lcl", "nv.mwt", k, 0)
                }
                var m = function(n) {
                    n.push(g);
                    return n
                };
                Ux("lcl", "ids", m, []);
                e || Ux("lcl", "nv.ids", m, []);
                Ey("lcl") || (a(), Fy("lcl"));
                E(c.vtp_gtmOnSuccess)
            })
        }();
    Z.m.evl = ["google"],
        function() {
            function a() {
                var f = Number(yy("gtm.start")) || 0;
                return uy().getTime() - f
            }

            function b(f, g, k, m) {
                function n() {
                    if (!bq(f.target)) {
                        g.has(d.uf) || g.set(d.uf, "" + a());
                        g.has(d.Mg) || g.set(d.Mg, "" + a());
                        var q = 0;
                        g.has(d.wf) && (q = Number(g.get(d.wf)));
                        q += 100;
                        g.set(d.wf, "" + q);
                        if (q >= k) {
                            var r = Rx(f.target, "gtm.elementVisibility", [g.h]),
                                t = dq(f.target);
                            r["gtm.visibleRatio"] = Math.round(1E3 * t) / 10;
                            r["gtm.visibleTime"] = k;
                            r["gtm.visibleFirstTime"] = Number(g.get(d.Mg));
                            r["gtm.visibleLastTime"] = Number(g.get(d.uf));
                            zy(r);
                            m()
                        }
                    }
                }
                if (!g.has(d.ke) && (0 == k && n(), !g.has(d.Zc))) {
                    var p = V("self").setInterval(n, 100);
                    g.set(d.ke, p)
                }
            }

            function c(f) {
                f.has(d.ke) && (V("self").clearInterval(Number(f.get(d.ke))), f.remove(d.ke))
            }
            var d = {
                    ke: "polling-id-",
                    Mg: "first-on-screen-",
                    uf: "recent-on-screen-",
                    wf: "total-visible-time-",
                    Zc: "has-fired-"
                },
                e = function(f, g) {
                    this.element = f;
                    this.h = g
                };
            e.prototype.has = function(f) {
                return !!this.element.getAttribute("data-gtm-vis-" + f + this.h)
            };
            e.prototype.get = function(f) {
                return this.element.getAttribute("data-gtm-vis-" +
                    f + this.h)
            };
            e.prototype.set = function(f, g) {
                this.element.setAttribute("data-gtm-vis-" + f + this.h, g)
            };
            e.prototype.remove = function(f) {
                this.element.removeAttribute("data-gtm-vis-" + f + this.h)
            };
            (function(f) {
                Z.__evl = f;
                Z.__evl.o = "evl";
                Z.__evl.isVendorTemplate = !0;
                Z.__evl.priorityOverride = 0;
                Z.__evl.isInfrastructure = !1;
                Z.__evl.runInSiloedMode = !1
            })(function(f) {
                function g() {
                    var x = !1,
                        y = null;
                    if ("CSS" === m) {
                        try {
                            y = yh(n)
                        } catch (F) {}
                        x = !!y && v.length != y.length
                    } else if ("ID" === m) {
                        var A = B.getElementById(n);
                        A && (y = [A], x = 1 != v.length ||
                            v[0] !== A)
                    }
                    y || (y = [], x = 0 < v.length);
                    if (x) {
                        for (var C = 0; C < v.length; C++) {
                            var D = new e(v[C], t);
                            c(D)
                        }
                        v = [];
                        for (var G = 0; G < y.length; G++) v.push(y[G]);
                        0 <= w && jq(w);
                        0 < v.length && (w = iq(k, v, [r]))
                    }
                }

                function k(x) {
                    var y = new e(x.target, t);
                    x.intersectionRatio >= r ? y.has(d.Zc) || b(x, y, q, "ONCE" === u ? function() {
                        for (var A = 0; A < v.length; A++) {
                            var C = new e(v[A], t);
                            C.set(d.Zc, "1");
                            c(C)
                        }
                        jq(w);
                        p && fy(g)
                    } : function() {
                        y.set(d.Zc, "1");
                        c(y)
                    }) : (c(y), "MANY_PER_ELEMENT" === u && y.has(d.Zc) && (y.remove(d.Zc), y.remove(d.wf)), y.remove(d.uf))
                }
                var m = f.vtp_selectorType,
                    n;
                "ID" === m ? n = String(f.vtp_elementId) : "CSS" === m && (n = String(f.vtp_elementSelector));
                var p = !!f.vtp_useDomChangeListener,
                    q = f.vtp_useOnScreenDuration && Number(f.vtp_onScreenDuration) || 0,
                    r = (Number(f.vtp_onScreenRatio) || 50) / 100,
                    t = f.vtp_uniqueTriggerId,
                    u = f.vtp_firingFrequency,
                    v = [],
                    w = -1;
                g();
                p && ey(g);
                E(f.vtp_gtmOnSuccess)
            })
        }();
    Z.m.gaawe = ["google"],
        function() {
            function a(f, g, k) {
                for (var m = 0; m < g.length; m++) f.hasOwnProperty(g[m]) && (f[g[m]] = k(f[g[m]]))
            }

            function b(f, g, k) {
                var m = {},
                    n = function(u, v) {
                        m[u] = m[u] || v
                    },
                    p = function(u, v, w) {
                        w = void 0 === w ? !1 : w;
                        c.push(6);
                        if (u) {
                            m.items = m.items || [];
                            for (var x = {}, y = 0; y < u.length; x = {
                                    kd: x.kd
                                }, y++) x.kd = {}, l(u[y], function(C) {
                                return function(D, G) {
                                    w && "id" === D ? C.kd.promotion_id = G : w && "name" === D ? C.kd.promotion_name = G : C.kd[D] = G
                                }
                            }(x)), m.items.push(x.kd)
                        }
                        if (v)
                            for (var A in v) d.hasOwnProperty(A) ? n(d[A], v[A]) : n(A,
                                v[A])
                    },
                    q;
                "dataLayer" === f.vtp_getEcommerceDataFrom ? (q = f.vtp_gtmCachedValues.eventModel) || (q = f.vtp_gtmCachedValues.ecommerce) : (q = f.vtp_ecommerceMacroData, lb(q) && q.ecommerce && !q.items && (q = q.ecommerce));
                if (lb(q)) {
                    var r = !1,
                        t;
                    for (t in q) q.hasOwnProperty(t) && (r || (c.push(5), r = !0), "currencyCode" === t ? n("currency", q.currencyCode) : "impressions" === t && g === N.g.Xa ? p(q.impressions, null) : "promoClick" === t && g === N.g.ob ? p(q.promoClick.promotions, q.promoClick.actionField, !0) : "promoView" === t && g === N.g.Ya ? p(q.promoView.promotions,
                        q.promoView.actionField, !0) : e.hasOwnProperty(t) ? g === e[t] && p(q[t].products, q[t].actionField) : m[t] = q[t]);
                    mb(m, k)
                }
            }
            var c = [],
                d = {
                    id: "transaction_id",
                    revenue: "value",
                    list: "item_list_name"
                },
                e = {
                    click: "select_item",
                    detail: "view_item",
                    add: "add_to_cart",
                    remove: "remove_from_cart",
                    checkout: "begin_checkout",
                    checkout_option: "checkout_option",
                    purchase: "purchase",
                    refund: "refund"
                };
            (function(f) {
                Z.__gaawe = f;
                Z.__gaawe.o = "gaawe";
                Z.__gaawe.isVendorTemplate = !0;
                Z.__gaawe.priorityOverride = 0;
                Z.__gaawe.isInfrastructure = !1;
                Z.__gaawe.runInSiloedMode = !1
            })(function(f) {
                var g;
                g = f.vtp_migratedToV2 ? String(f.vtp_measurementIdOverride) : String(f.vtp_measurementIdOverride || f.vtp_measurementId);
                if (h(g) && 0 === g.indexOf("G-")) {
                    var k = String(f.vtp_eventName),
                        m = {};
                    c = [];
                    f.vtp_sendEcommerceData && (di.hasOwnProperty(k) || "checkout_option" === k) && b(f, k, m);
                    var n = f.vtp_eventSettingsVariable;
                    if (n)
                        for (var p in n) n.hasOwnProperty(p) && (m[p] = n[p]);
                    if (f.vtp_eventSettingsTable) {
                        var q = HG(f.vtp_eventSettingsTable, "parameter", "parameterValue"),
                            r;
                        for (r in q) m[r] = q[r]
                    }
                    var t = HG(f.vtp_eventParameters,
                            "name", "value"),
                        u;
                    for (u in t) t.hasOwnProperty(u) && (m[u] = t[u]);
                    var v = f.vtp_userDataVariable;
                    v && (m[N.g.wa] = v);
                    if (m.hasOwnProperty(N.g.Na) || f.vtp_userProperties) {
                        var w = m[N.g.Na] || {};
                        mb(HG(f.vtp_userProperties, "name", "value"), w);
                        m[N.g.Na] = w
                    }
                    var x = {
                        originatingEntity: du(1, f.vtp_gtmEntityIndex, f.vtp_gtmEntityName)
                    };
                    if (0 < c.length) {
                        var y = {};
                        x.eventMetadata = (y.event_usage = c, y)
                    }
                    a(m, ei, function(C) {
                        return Ma(C)
                    });
                    a(m, gi, function(C) {
                        return Number(C)
                    });
                    var A = f.vtp_gtmEventId;
                    x.noGtmEvent = !0;
                    Yu(Vu(g, k, m), A, x);
                    E(f.vtp_gtmOnSuccess)
                } else E(f.vtp_gtmOnFailure)
            })
        }();


    Z.m.read_container_data = ["google"],
        function() {
            (function(a) {
                Z.__read_container_data = a;
                Z.__read_container_data.o = "read_container_data";
                Z.__read_container_data.isVendorTemplate = !0;
                Z.__read_container_data.priorityOverride = 0;
                Z.__read_container_data.isInfrastructure = !1;
                Z.__read_container_data.runInSiloedMode = !1
            })(function() {
                return {
                    assert: function() {},
                    J: function() {
                        return {}
                    }
                }
            })
        }();
    Z.m.tg = ["google"],
        function() {
            function a(g) {
                f.push(g);
                1 < f.length || E(function() {
                    var k = f.join(",");
                    f = [];
                    zy({
                        event: "gtm.triggerGroup",
                        "gtm.triggers": k
                    })
                })
            }

            function b(g, k) {
                var m = c[k],
                    n = m.indexOf(g); - 1 !== n && (m.splice(n, 1), m.length || a(k))
            }
            var c = {},
                d = {},
                e = [],
                f = [];
            (function(g) {
                Z.__tg = g;
                Z.__tg.o = "tg";
                Z.__tg.isVendorTemplate = !0;
                Z.__tg.priorityOverride = 0;
                Z.__tg.isInfrastructure = !1;
                Z.__tg.runInSiloedMode = !1
            })(function(g) {
                E(g.vtp_gtmOnSuccess);
                var k = g.vtp_uniqueTriggerId,
                    m = g.vtp_triggerIds,
                    n = g.vtp_firingId;
                if (g.vtp_isListeningTag) {
                    var p = d[n];
                    p ? b(n, p) : e.push(n)
                } else {
                    c[k] = m;
                    for (var q = 0, r; r = m[q]; q++) d[r] = k;
                    for (var t = 0; t < e.length; t++) b(e[t], k)
                }
            })
        }();
    Z.m.tl = ["google"],
        function() {
            function a(b) {
                return function() {
                    if (b.wc && b.yc >= b.wc) b.uc && V("self").clearInterval(b.uc);
                    else {
                        b.yc++;
                        var c = uy().getTime();
                        zy({
                            event: b.eventName,
                            "gtm.timerId": b.uc,
                            "gtm.timerEventNumber": b.yc,
                            "gtm.timerInterval": b.interval,
                            "gtm.timerLimit": b.wc,
                            "gtm.timerStartTime": b.Re,
                            "gtm.timerCurrentTime": c,
                            "gtm.timerElapsedTime": c - b.Re,
                            "gtm.triggers": b.Nh
                        })
                    }
                }
            }(function(b) {
                Z.__tl = b;
                Z.__tl.o = "tl";
                Z.__tl.isVendorTemplate = !0;
                Z.__tl.priorityOverride = 0;
                Z.__tl.isInfrastructure = !1;
                Z.__tl.runInSiloedMode = !1
            })(function(b) {
                E(b.vtp_gtmOnSuccess);
                if (!isNaN(b.vtp_interval)) {
                    var c = {
                        eventName: b.vtp_eventName,
                        yc: 0,
                        interval: Number(b.vtp_interval),
                        wc: isNaN(b.vtp_limit) ? 0 : Number(b.vtp_limit),
                        Nh: String(b.vtp_uniqueTriggerId || "0"),
                        Re: uy().getTime()
                    };
                    c.uc = V("self").setInterval(a(c), 0 > Number(b.vtp_interval) ? 0 : Number(b.vtp_interval))
                }
            })
        }();
    Z.m.detect_user_provided_data = ["google"],
        function() {
            function a(b, c) {
                return {
                    dataSource: c
                }
            }(function(b) {
                Z.__detect_user_provided_data = b;
                Z.__detect_user_provided_data.o = "detect_user_provided_data";
                Z.__detect_user_provided_data.isVendorTemplate = !0;
                Z.__detect_user_provided_data.priorityOverride = 0;
                Z.__detect_user_provided_data.isInfrastructure = !1;
                Z.__detect_user_provided_data.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_createPermissionError;
                return {
                    assert: function(d, e) {
                        if ("auto" !== e && "manual" !== e && "code" !==
                            e) throw c(d, {}, "Unknown user provided data source.");
                        if (b.vtp_limitDataSources)
                            if ("auto" !== e || b.vtp_allowAutoDataSources) {
                                if ("manual" === e && !b.vtp_allowManualDataSources) throw c(d, {}, "Detection of user provided data via manually specified CSS selectors is not allowed.");
                                if ("code" === e && !b.vtp_allowCodeDataSources) throw c(d, {}, "Detection of user provided data from an in-page variable is not allowed.");
                            } else throw c(d, {}, "Automatic detection of user provided data is not allowed.");
                    },
                    J: a
                }
            })
        }();


    Z.m.access_consent = ["google"],
        function() {
            function a(b, c, d) {
                var e = {
                    consentType: c,
                    read: !1,
                    write: !1
                };
                switch (d) {
                    case "read":
                        e.read = !0;
                        break;
                    case "write":
                        e.write = !0;
                        break;
                    default:
                        throw Error("Invalid " + b + " request " + d);
                }
                return e
            }(function(b) {
                Z.__access_consent = b;
                Z.__access_consent.o = "access_consent";
                Z.__access_consent.isVendorTemplate = !0;
                Z.__access_consent.priorityOverride = 0;
                Z.__access_consent.isInfrastructure = !1;
                Z.__access_consent.runInSiloedMode = !1
            })(function(b) {
                for (var c = b.vtp_consentTypes || [], d = b.vtp_createPermissionError,
                        e = [], f = [], g = 0; g < c.length; g++) {
                    var k = c[g],
                        m = k.consentType;
                    k.read && e.push(m);
                    k.write && f.push(m)
                }
                return {
                    assert: function(n, p, q) {
                        if (!h(p)) throw d(n, {}, "Consent type must be a string.");
                        if ("read" === q) {
                            if (-1 < e.indexOf(p)) return
                        } else if ("write" === q) {
                            if (-1 < f.indexOf(p)) return
                        } else throw d(n, {}, "Access type must be either 'read', or 'write', was " + q);
                        throw d(n, {}, "Prohibited " + q + " on consent type: " + p + ".");
                    },
                    J: a
                }
            })
        }();
    Z.m.inject_script = ["google"],
        function() {
            function a(b, c) {
                return {
                    url: c
                }
            }(function(b) {
                Z.__inject_script = b;
                Z.__inject_script.o = "inject_script";
                Z.__inject_script.isVendorTemplate = !0;
                Z.__inject_script.priorityOverride = 0;
                Z.__inject_script.isInfrastructure = !1;
                Z.__inject_script.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_urls || [],
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!h(f)) throw d(e, {}, "Script URL must be a string.");
                        try {
                            if (Ig(Dn(f), c)) return
                        } catch (g) {
                            throw d(e, {}, "Invalid script URL filter.");
                        }
                        throw d(e, {}, "Prohibited script URL: " + f);
                    },
                    J: a
                }
            })
        }();


    Z.m.gas = ["google"],
        function() {
            (function(a) {
                Z.__gas = a;
                Z.__gas.o = "gas";
                Z.__gas.isVendorTemplate = !0;
                Z.__gas.priorityOverride = 0;
                Z.__gas.isInfrastructure = !1;
                Z.__gas.runInSiloedMode = !1
            })(function(a) {
                var b = mb(a),
                    c = b;
                c[Re.xa] = null;
                c[Re.Pg] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();
    Z.m.awct = ["google"],
        function() {
            function a(b, c, d) {
                return function(e, f, g) {
                    c[e] = "DATA_LAYER" === d ? yy(g) : b[f]
                }
            }(function(b) {
                Z.__awct = b;
                Z.__awct.o = "awct";
                Z.__awct.isVendorTemplate = !0;
                Z.__awct.priorityOverride = 0;
                Z.__awct.isInfrastructure = !1;
                Z.__awct.runInSiloedMode = !1
            })(function(b) {
                var c = !b.hasOwnProperty("vtp_enableConversionLinker") || !!b.vtp_enableConversionLinker,
                    d = !!b.vtp_enableEnhancedConversions || !!b.vtp_enableEnhancedConversion,
                    e = HG(b.vtp_customVariables, "varName", "value") || {},
                    f = {},
                    g = (f[N.g.fa] = b.vtp_conversionValue ||
                        0, f[N.g.qa] = b.vtp_currencyCode, f[N.g.sa] = b.vtp_orderId, f[N.g.Ka] = b.vtp_conversionCookiePrefix, f[N.g.Ca] = c, f[N.g.wd] = d, f[N.g.oa] = yy(N.g.oa), f[N.g.aa] = yy("developer_id"), f);
                g[N.g.Ga] = yy(N.g.Ga), g[N.g.da] = yy(N.g.da), g[N.g.Gb] = yy(N.g.Gb), g[N.g.Ma] = yy(N.g.Ma);
                b.vtp_rdp && (g[N.g.Lb] = !0);
                if (b.vtp_enableCustomParams)
                    for (var k in e) li.hasOwnProperty(k) || (g[k] = e[k]);
                if (b.vtp_enableProductReporting) {
                    var m = a(b, g, b.vtp_productReportingDataSource);
                    m(N.g.Ad, "vtp_awMerchantId", "aw_merchant_id");
                    m(N.g.yd, "vtp_awFeedCountry", "aw_feed_country");
                    m(N.g.zd, "vtp_awFeedLanguage", "aw_feed_language");
                    m(N.g.xd, "vtp_discount", "discount");
                    m(N.g.Z, "vtp_items", "items")
                }
                b.vtp_enableShippingData && (g[N.g.Yc] = b.vtp_deliveryPostalCode, g[N.g.Fd] = b.vtp_estimatedDeliveryDate, g[N.g.mc] = b.vtp_deliveryCountry, g[N.g.Pc] = b.vtp_shippingFee);
                b.vtp_transportUrl && (g[N.g.Nb] = b.vtp_transportUrl);
                if (b.vtp_enableNewCustomerReporting) {
                    var n = a(b, g, b.vtp_newCustomerReportingDataSource);
                    n(N.g.Tc, "vtp_awNewCustomer", "new_customer");
                    n(N.g.Bd, "vtp_awCustomerLTV", "customer_lifetime_value")
                }
                var p;
                a: {
                    if (b.vtp_enableEnhancedConversion) {
                        var q = b.vtp_cssProvidedEnhancedConversionValue || b.vtp_enhancedConversionObject;
                        if (q) {
                            p = {
                                enhanced_conversions_mode: "manual",
                                enhanced_conversions_manual_var: q
                            };
                            break a
                        }
                    }
                    p = void 0
                }
                var r = p;
                if (r) {
                    var t = {};
                    g[N.g.Ed] = (t[b.vtp_conversionLabel] = r, t)
                }
                var u = "AW-" + b.vtp_conversionId,
                    v = u + "/" + b.vtp_conversionLabel;
                if (Q(58)) {
                    Kt(u, b.vtp_transportUrl, {
                        source: 7,
                        fromContainerExecution: !0,
                        siloed: !0
                    });
                    var w = {},
                        x = {
                            eventMetadata: (w.hit_type_override = "conversion", w),
                            noGtmEvent: !0,
                            isGtmEvent: !0,
                            onSuccess: b.vtp_gtmOnSuccess,
                            onFailure: b.vtp_gtmOnFailure
                        };
                    Yu(Vu(kk(v), N.g.ma, g), b.vtp_gtmEventId, x)
                } else {
                    var y = ml(ll(kl(jl(cl(new bl(b.vtp_gtmEventId, b.vtp_gtmPriorityId), g), b.vtp_gtmOnSuccess), b.vtp_gtmOnFailure), !0));
                    y.eventMetadata.hit_type_override = "conversion";
                    XB(v, N.g.ma, Date.now(), y)
                }
            })
        }();
    Z.m.remm = ["google"],
        function() {
            (function(a) {
                Z.__remm = a;
                Z.__remm.o = "remm";
                Z.__remm.isVendorTemplate = !0;
                Z.__remm.priorityOverride = 0;
                Z.__remm.isInfrastructure = !1;
                Z.__remm.runInSiloedMode = !1
            })(function(a) {
                for (var b = a.vtp_input, c = a.vtp_map || [], d = a.vtp_fullMatch, e = a.vtp_ignoreCase ? "gi" : "g", f = a.vtp_defaultValue, g = 0; g < c.length; g++) {
                    var k = c[g].key || "";
                    d && (k = "^" + k + "$");
                    var m = new RegExp(k, e);
                    if (m.test(b)) {
                        var n = c[g].value;
                        a.vtp_replaceAfterMatch && (n = String(b).replace(m, n));
                        f = n;
                        break
                    }
                }
                Gy(f, "remm", a.vtp_gtmEventId);
                return f
            })
        }();
    Z.m.write_data_layer = ["google"],
        function() {
            function a(b, c) {
                return {
                    key: c
                }
            }(function(b) {
                Z.__write_data_layer = b;
                Z.__write_data_layer.o = "write_data_layer";
                Z.__write_data_layer.isVendorTemplate = !0;
                Z.__write_data_layer.priorityOverride = 0;
                Z.__write_data_layer.isInfrastructure = !1;
                Z.__write_data_layer.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_keyPatterns || [],
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!h(f)) throw d(e, {}, "Keys must be strings.");
                        try {
                            if (rg(f, c)) return
                        } catch (g) {
                            throw d(e, {}, "Invalid key filter.");
                        }
                        throw d(e, {}, "Prohibited write to data layer variable: " + f + ".");
                    },
                    J: a
                }
            })
        }();
    Z.m.logging = ["google"],
        function() {
            function a() {
                return {}
            }(function(b) {
                Z.__logging = b;
                Z.__logging.o = "logging";
                Z.__logging.isVendorTemplate = !0;
                Z.__logging.priorityOverride = 0;
                Z.__logging.isInfrastructure = !1;
                Z.__logging.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_environments || "debug",
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e) {
                        var f;
                        if (f = "all" !== c && !0) {
                            var g = !1;
                            f = !g
                        }
                        if (f) throw d(e, {}, "Logging is not enabled in all environments");
                    },
                    J: a
                }
            })
        }();

    Z.m.configure_google_tags = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    tagId: c,
                    configuration: d
                }
            }(function(b) {
                Z.__configure_google_tags = b;
                Z.__configure_google_tags.o = "configure_google_tags";
                Z.__configure_google_tags.isVendorTemplate = !0;
                Z.__configure_google_tags.priorityOverride = 0;
                Z.__configure_google_tags.isInfrastructure = !1;
                Z.__configure_google_tags.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_allowedTagIds || "specific",
                    d = b.vtp_tagIds || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g) {
                        if (!h(g)) throw e(f, {}, "Tag ID must be a string.");
                        if ("any" !== c && ("specific" !== c || -1 === d.indexOf(g))) throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
                    },
                    J: a
                }
            })
        }();

    Z.m.hid = ["google"],
        function() {
            (function(a) {
                Z.__hid = a;
                Z.__hid.o = "hid";
                Z.__hid.isVendorTemplate = !0;
                Z.__hid.priorityOverride = 0;
                Z.__hid.isInfrastructure = !1;
                Z.__hid.runInSiloedMode = !1
            })(function() {
                return Q(90) ? Jx : Hx
            })
        }();

    Z.m.html = ["customScripts"],
        function() {
            function a(d, e, f, g) {
                return function() {
                    try {
                        if (0 < e.length) {
                            var k = e.shift(),
                                m = a(d, e, f, g);
                            if ("SCRIPT" == String(k.nodeName).toUpperCase() && "text/gtmscript" == k.type) {
                                var n = B.createElement("script");
                                n.async = !1;
                                n.type = "text/javascript";
                                n.id = k.id;
                                n.text = k.text || k.textContent || k.innerHTML || "";
                                k.charset && (n.charset = k.charset);
                                var p = k.getAttribute("data-gtmsrc");
                                p && (n.src = p, Hc(n, m));
                                d.insertBefore(n, null);
                                p || m()
                            } else if (k.innerHTML && 0 <= k.innerHTML.toLowerCase().indexOf("<script")) {
                                for (var q = []; k.firstChild;) q.push(k.removeChild(k.firstChild));
                                d.insertBefore(k, null);
                                a(k, q, m, g)()
                            } else d.insertBefore(k, null), m()
                        } else f()
                    } catch (r) {
                        E(g)
                    }
                }
            }

            function b(d) {
                if (B.body) {
                    var e = d.vtp_gtmOnFailure,
                        f = Ox(d.vtp_html, d.vtp_gtmOnSuccess, e),
                        g = f.rj,
                        k = f.onSuccess;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? c(g, k, e) : a(B.body, Tc(g), k, e)()
                } else sy(function() {
                    b(d)
                }, 200)
            }
            Z.__html = b;
            Z.__html.o =
                "html";
            Z.__html.isVendorTemplate = !0;
            Z.__html.priorityOverride = 0;
            Z.__html.isInfrastructure = !1;
            Z.__html.runInSiloedMode = !1
        }();
    Z.m.dbg = ["google"],
        function() {
            (function(a) {
                Z.__dbg = a;
                Z.__dbg.o = "dbg";
                Z.__dbg.isVendorTemplate = !0;
                Z.__dbg.priorityOverride = 0;
                Z.__dbg.isInfrastructure = !1;
                Z.__dbg.runInSiloedMode = !1
            })(function() {
                return !1
            })
        }();




    Z.m.get_cookies = ["google"],
        function() {
            function a(b, c) {
                return {
                    name: c
                }
            }(function(b) {
                Z.__get_cookies = b;
                Z.__get_cookies.o = "get_cookies";
                Z.__get_cookies.isVendorTemplate = !0;
                Z.__get_cookies.priorityOverride = 0;
                Z.__get_cookies.isInfrastructure = !1;
                Z.__get_cookies.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_cookieAccess || "specific",
                    d = b.vtp_cookieNames || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g) {
                        if (!h(g)) throw e(f, {}, "Cookie name must be a string.");
                        if ("any" !== c && !("specific" === c && 0 <= d.indexOf(g))) throw e(f, {}, 'Access to cookie "' + g + '" is prohibited.');
                    },
                    J: a
                }
            })
        }();
    var YH = {};
    YH.onHtmlSuccess = Px(!0), YH.onHtmlFailure = Px(!1);
    YH.dataLayer = Wi;
    YH.callback = function(a) {
        Gi.hasOwnProperty(a) && Ba(Gi[a]) && Gi[a]();
        delete Gi[a]
    };
    YH.bootstrap = 0;
    YH._spx = !1;

    function ZH() {
        pi[pk()] = pi[pk()] || YH;
        vk();
        zk() || l(Ak(), function(a, b) {
            Kt(a, b.transportUrl, b.context);
            M(92)
        });
        Ua(Hi, Z.m);
        Q(92) && rk(xk());
        Lx(), zf({
            Il: function(a) {
                return Qx(a)
            },
            Uk: function(a) {
                return new Mx(a)
            },
            Jl: function(a) {
                for (var b = !1, c = !1, d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
                return b && c
            },
            hm: function(a) {
                var b;
                if (Qx(a)) b = a;
                else {
                    var c = Pi();
                    Kx[c] = a;
                    b = 'google_tag_manager["rm"]["' + qk() + '"](' + c + ")"
                }
                return b
            }
        });
        Bf = Rf
    }
    (function(a) {
        function b() {
            m = B.documentElement.getAttribute("data-tag-assistant-present");
            kx(m) && (k = g.vk)
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (B.referrer) {
                var d = Dn(B.referrer);
                c = "cct.google" === An(d, "host")
            }
            if (!c) {
                var e = zm("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (z["__TAGGY_INSTALLED"] = !0, Lc("https://cct.google/taggy/agent.js"))
        }
        if (Bi) a();
        else {
            var f = function(u) {
                    var v = "GTM",
                        w = "GTM";
                    vi ? (v = "OGT", w = "GTAG") : Bi && (w = v = "OPT");
                    var x = z["google.tagmanager.debugui2.queue"];
                    x || (x = [],
                        z["google.tagmanager.debugui2.queue"] = x, Lc("https://" + oi.Ve + "/debug/bootstrap?id=" + Vf.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + dn()));
                    var y = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: Fc,
                            containerProduct: v,
                            debug: !1,
                            id: Vf.ctid,
                            targetRef: {
                                ctid: Vf.ctid,
                                isDestination: hk.he
                            },
                            aliases: jk(),
                            destinations: mk()
                        }
                    };
                    y.data.resume = function() {
                        a()
                    };
                    oi.Tj && (y.data.initialPublish = !0);
                    x.push(y)
                },
                g = {
                    Pm: 1,
                    wk: 2,
                    Hk: 3,
                    Vj: 4,
                    vk: 5
                },
                k = void 0,
                m = void 0,
                n = Bn(z.location, "query", !1, void 0, "gtm_debug");
            kx(n) && (k = g.wk);
            if (!k && B.referrer) {
                var p = Dn(B.referrer);
                "tagassistant.google.com" === An(p, "host") && (k = g.Hk)
            }
            if (!k) {
                var q = zm("__TAG_ASSISTANT");
                q.length && q[0].length && (k = g.Vj)
            }
            k || b();
            if (!k && lx(m)) {
                var r = function() {
                        if (t) return !0;
                        t = !0;
                        b();
                        k && Fc ? f(k) : a()
                    },
                    t = !1;
                Pc(B, "TADebugSignal", function() {
                    r()
                }, !1);
                z.setTimeout(function() {
                    r()
                }, 200)
            } else k && Fc ? f(k) : a()
        }
    })(function() {
        try {
            tk();
            if (Q(29)) {}
            uj().B();
            am();
            var b = qk();
            if (ek().canonical[b]) {
                var c = pi.zones;
                c && c.unregisterChild(lk());
            } else {
                (Q(7) || Q(8) || Q(21) || Q(18)) && sn();
                Et();
                for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) qf.push(e[f]);
                for (var g = d.tags || [], k = 0; k < g.length; k++) uf.push(g[k]);
                for (var m = d.predicates || [], n = 0; n < m.length; n++) tf.push(m[n]);
                for (var p = d.rules || [], q = 0; q < p.length; q++) {
                    for (var r =
                            p[q], t = {}, u = 0; u < r.length; u++) {
                        var v = r[u][0];
                        t[v] = Array.prototype.slice.call(r[u], 1); of (5) || of (7) ? ("if" !== v && "unless" !== v || Af(t[v]), zb("TAGGING", 22)) : of (6) && zb("TAGGING", 23)
                    }
                    sf.push(t)
                }
                wf = Z;
                xf = dz;
                Zf = new Yf;
                var w = data.sandboxed_scripts,
                    x = data.security_groups,
                    y = data.infra;
                a: {
                    var A = data.runtime || [],
                        C = data.runtime_lines;jz = new Le;CG();pf = iz();
                    var D = jz,
                        G = BG(),
                        F = new fd("require", G);F.Bb();D.h.h.set("require", F);
                    for (var I = [], O = 0; O < A.length; O++) {
                        var S = A[O];
                        if (!Da(S) || 3 > S.length) {
                            if (0 === S.length) continue;
                            break a
                        }
                        C &&
                            C[O] && C[O].length && Kf(S, C[O]);
                        try {
                            jz.execute(S), Q(56) && Jk && 50 === S[0] && I.push(S[1])
                        } catch (Ji) {}
                    }
                    Q(56) && (Cf = I)
                }
                if (void 0 !== w)
                    for (var W = ["sandboxedScripts"], ha = 0; ha < w.length; ha++) {
                        var X = w[ha].replace(/^_*/, "");
                        Hi[X] = W
                    }
                DG(x);
                if (void 0 !== y)
                    for (var T = 0; T < y.length; T++) Ii[y[T]] = !0;
                ZH();
                if (Q(44)) {
                    for (var da = kj["7"], ja = da ? da.split("|") : [], ia = {}, Ja = 0; Ja < ja.length; Ja++) ia[ja[Ja]] = !0;
                    for (var sa = 0; sa < Sj.length; sa++) {
                        var Fa = Sj[sa],
                            Ra = ia[Fa] ? "granted" : "denied";
                        Bj().implicit(Fa, Ra)
                    }
                }
                jx();
                Xt = !1;
                Yt = 0;
                if ("interactive" ==
                    B.readyState && !B.createEventObject || "complete" == B.readyState) $t();
                else {
                    Pc(B, "DOMContentLoaded", $t);
                    Pc(B, "readystatechange", $t);
                    if (B.createEventObject && B.documentElement.doScroll) {
                        var Wa = !0;
                        try {
                            Wa = !z.frameElement
                        } catch (Ji) {}
                        Wa && au()
                    }
                    Pc(z, "load", $t)
                }
                yw = !1;
                "complete" === B.readyState ? Aw() : Pc(z, "load", Aw);
                Jk && (Ek(Wk), z.setInterval(Vk, 864E5));
                Ek(fz);
                Ek(Au);
                Ek(cs);
                Ek(Vv);
                Ek(Lu);
                Ek(Pt);
                Ek(fn);
                Ek(Nt);
                Ek(Hu);
                Q(56) && Ek(Du);
                Gx();
                jj(1);
                iv();
                Fi = Qa();
                YH.bootstrap = Fi;
                if (Q(29)) {}
            }
        } catch (Ji) {
            if (jj(4), Jk) {
                var rf = Qk(!0, !0);
                Oc(rf)
            }
        }
    });

})()