odoo.define('core_custom_module.core_tabs_options', function(require) {
    "use strict";

    const options = require('web_editor.snippets.options');

    /**
     * Options for the CORE Image Tabs snippet
     */
    options.registry.core_tabs_options = options.Class.extend({

        // This option applies ONLY to elements matching this selector:
        selector: '.x-tabs-wrapper',

        /**
         * Width slider handler
         * Called automatically when user adjusts the option
         */
        set_width(previewMode, value) {
            if (!this.$target) {
                return;
            }
            this.$target.css('max-width', value + 'px');
        },
    });

});
