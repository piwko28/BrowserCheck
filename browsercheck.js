/* BROWSER */
jQuery.browser = {};
jQuery.browser.chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase()) && !(/opr/.test(navigator.userAgent.toLowerCase()));
jQuery.browser.opera = /(opera|opr)/.test(navigator.userAgent.toLowerCase());
jQuery.browser.ie7 = /msie 7/.test(navigator.userAgent.toLowerCase());
jQuery.browser.ie8 = /msie 8/.test(navigator.userAgent.toLowerCase());
jQuery.browser.ie9 = /msie 9/.test(navigator.userAgent.toLowerCase());
jQuery.browser.ie10 = /msie 10/.test(navigator.userAgent.toLowerCase());
jQuery.browser.ie11 = /trident.*rv:11/.test(navigator.userAgent.toLowerCase());
jQuery.browser.ie = jQuery.browser.ie7 ||
                     jQuery.browser.ie8 ||
                     jQuery.browser.ie9 ||
                     jQuery.browser.ie10 ||
                     jQuery.browser.ie11;
jQuery.browser.ff = /mozilla/.test(navigator.userAgent.toLowerCase()) &&
											!(/(compatible)/.test(navigator.userAgent.toLowerCase())) &&
											!(jQuery.browser.ie ||
											jQuery.browser.chrome ||
											jQuery.browser.opera);

/* DEVICES */
jQuery.device = {};
jQuery.device.android = /android/i.test(navigator.userAgent.toLowerCase());
jQuery.device.blackBerry = /blackberry/i.test(navigator.userAgent.toLowerCase());
jQuery.device.webOs = /webos/i.test(navigator.userAgent.toLowerCase());
jQuery.device.windowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());
jQuery.device.iDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
jQuery.device.iPad = /ipad/i.test(navigator.userAgent.toLowerCase());
jQuery.device.iPhone = /iphone/i.test(navigator.userAgent.toLowerCase());
jQuery.device.iPod = /ipod/i.test(navigator.userAgent.toLowerCase());
jQuery.device.mobile = jQuery.device.android ||
                        jQuery.device.blackBerry ||
                        jQuery.device.webOs ||
                        jQuery.device.windowsPhone ||
                        jQuery.device.iDevice;
jQuery.device.nonMobile = !jQuery.device.mobile;

/* PLATFORM */
jQuery.platform = {};
jQuery.platform.windows = navigator.appVersion.indexOf("Win")!=-1;
jQuery.platform.macOs = navigator.appVersion.indexOf("Mac")!=-1;
jQuery.platform.unix = navigator.appVersion.indexOf("X11")!=-1;
jQuery.platform.linux = navigator.appVersion.indexOf("Linux")!=-1;
jQuery.platform.unknown = !(jQuery.platform.windows ||
                            jQuery.platform.macOs || 
                            jQuery.platform.unix || 
                            jQuery.platform.linux);