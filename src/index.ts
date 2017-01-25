///<reference types="jquery"/>

import { JQueryPluginBase } from "jquery-plugin-base";
import Demo from "./Demo";

(function ($: JQueryStatic, window: any, document: any) {

	class Plugin extends JQueryPluginBase {

		/**
		 * The plugins name
		 * @type {string}
		 */
		public static NAME: string = 'boilerplate';

		/**
		 * Set plugins default options
		 * @type {{}}
		 */
		public static DEFAULTS: any = {};

		/**
		 * The plugins constructor - always load base class (JQueryPluginBase) first
		 *
		 * @param element - The element the plugin is attached to
		 * @param options - The plugins custom options, default options are extended by these options
		 */
		constructor(element: Element, options: any) {
			super(Plugin.NAME, element, Plugin.DEFAULTS, options);
		}

		/**
		 * Place initialization logic here
		 */
		init(): void {
			console.log('Plugin init() - foo = '+this.options.foo);

			let demo = new Demo();
			demo.test(this.$element);
		}
	}

	/**
	 * Attach plugin to jQuery fn namespace
	 *
	 * @param options
	 * @returns {any|JQuery}
	 */
	$.fn[Plugin.NAME] = function (options: any) {

		return this.each(function () {
			let $this = $(this);
			if (!$this.data(Plugin.NAME)) {
				$this.data(Plugin.NAME, new Plugin(this, options));
			}
		});

	};

})(jQuery, window, document);
