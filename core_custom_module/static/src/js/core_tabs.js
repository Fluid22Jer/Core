odoo.define('core_custom_module.core_tabs', function(require) {
    "use strict";

    const publicWidget = require('web.public.widget');

    publicWidget.registry.CoreTabs = publicWidget.Widget.extend({
        selector: '.x-tabs-wrapper',

        events: {
            'click .x-series-tab': '_onTabClick',
            'mouseenter .x-series-tab': '_onTabHover',   // <-- NEW
        },

        // === Hover switching ===
        _onTabHover: function(ev) {
            const tab = ev.currentTarget;

            // If already active, do nothing
            if ($(tab).hasClass('active')) {
                return;
            }

            this._activateTab(tab);
        },

        // === Click switching ===
        _onTabClick: function(ev) {
            const tab = ev.currentTarget;
            this._activateTab(tab);
        },

        // === Core activation logic (shared by click + hover) ===
        _activateTab: function(tab) {
            const target = tab.dataset.target;

            // Switch active class on tabs
            this.$('.x-series-tab').removeClass('active');
            tab.classList.add('active');

            // Default: show all default images, hide all active images
            this.$('.tab-img-default').show();
            this.$('.tab-img-active').hide();

            // Show active image inside hovered/clicked tab
            $(tab).find('.tab-img-default').hide();
            $(tab).find('.tab-img-active').show();

            // === Fade animation for content ===
            const $contentBlocks = this.$('.x-series-block');
            const $newBlock = this.$('#' + target);

            // Fade out all
            $contentBlocks.stop(true, true).fadeOut(200);

            // Fade in target
            $newBlock.stop(true, true).delay(200).fadeIn(200);
        },

    });
});