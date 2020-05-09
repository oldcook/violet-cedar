export default {
    "type": "document",
    "name": "config",
    "title": "Site Configuration",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Site title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "description",
            "title": "Site Description",
            "description": "The default site description used in meta data.",
            "validation": null
        },
        {
            "type": "string",
            "name": "palette",
            "title": "Palette",
            "description": "The palette of the theme.",
            "initialValue": "blue",
            "validation": null,
            "options": {
                "list": [
                    "blue",
                    "green",
                    "navy",
                    "violet"
                ]
            }
        },
        {
            "type": "object",
            "name": "palettes",
            "title": "Palettes",
            "hidden": true,
            "validation": null,
            "fields": [
                {
                    "type": "palette",
                    "name": "blue",
                    "title": "Blue",
                    "validation": null
                },
                {
                    "type": "palette",
                    "name": "green",
                    "title": "Green",
                    "validation": null
                },
                {
                    "type": "palette",
                    "name": "navy",
                    "title": "Navy",
                    "validation": null
                },
                {
                    "type": "palette",
                    "name": "violet",
                    "title": "Violet",
                    "validation": null
                }
            ]
        },
        {
            "type": "object",
            "name": "header",
            "title": "Header Configuration",
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "title",
                    "title": "Header Title",
                    "description": "The title displayed in the header if no logo image added.",
                    "validation": null
                },
                {
                    "type": "image",
                    "name": "logo_img",
                    "title": "Logo",
                    "description": "The logo image displayed in the header.",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "url",
                    "title": "Header Title (Logo) URL",
                    "description": "The URL of the header title (logo). Useful if you want the header title (logo) link to another URL, rather than the home page.",
                    "validation": null
                },
                {
                    "type": "boolean",
                    "name": "has_nav",
                    "title": "Enable Navigation Menu",
                    "description": "Display the navigation menu bar in the header.",
                    "initialValue": true,
                    "validation": null
                },
                {
                    "type": "array",
                    "name": "nav_links",
                    "title": "Navigation Links",
                    "description": "List of navigation links.",
                    "validation": null,
                    "of": [
                        {
                            "type": "action_menu"
                        }
                    ]
                }
            ]
        },
        {
            "type": "object",
            "name": "footer",
            "title": "Footer Configuration",
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "content",
                    "title": "Footer Content",
                    "description": "The copyright text displayed in the footer.",
                    "validation": null
                },
                {
                    "type": "array",
                    "name": "links",
                    "title": "Links",
                    "description": "List of links in the footer.",
                    "validation": null,
                    "of": [
                        {
                            "type": "action"
                        }
                    ]
                },
                {
                    "type": "boolean",
                    "name": "has_social",
                    "title": "Enable Social Links",
                    "description": "Display social links in the footer.",
                    "initialValue": true,
                    "validation": null
                },
                {
                    "type": "array",
                    "name": "social_links",
                    "title": "Social Links",
                    "description": "List of social links in the footer.",
                    "validation": null,
                    "of": [
                        {
                            "type": "action"
                        }
                    ]
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Config File Path",
            "description": "The file path of the configuration file",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "site-metadata.json"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "config"
                ]
            }
        }
    ],
    "singleInstance": true
}