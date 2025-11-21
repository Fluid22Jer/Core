{
    "name": "CORE Custom Module - Image Tabs",
    "version": "1.0",
    "category": "Website",
    "summary": "Image tabs snippet",
    "depends": ["web", "website"],
    "data": [
        "views/core_tabs_registry.xml",
        "views/core_tabs_snippet.xml"
    ],
    "assets": {
        "web.assets_frontend": [
            "core_custom_module/static/src/js/core_tabs.js",
            "core_custom_module/static/src/scss/core_tabs.scss"
        ],
        "web.assets_wysiwyg": [
            "core_custom_module/static/src/xml/core_tabs_options.xml",
            "core_custom_module/static/src/js/core_tabs_options.js"
        ]
    },
    "license": "LGPL-3"
}
