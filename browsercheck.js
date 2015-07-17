/* BROWSER */
jQuery.browser = {};
jQuery.browser.android = /android/i.test(navigator.userAgent.toLowerCase());
jQuery.browser.blackBerry = /blackberry/i.test(navigator.userAgent.toLowerCase());
jQuery.browser.webOs = /webos/i.test(navigator.userAgent.toLowerCase());
jQuery.browser.windowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());
jQuery.browser.iDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
jQuery.browser.iPad = /ipad/i.test(navigator.userAgent.toLowerCase());
jQuery.browser.iPhone = /iphone/i.test(navigator.userAgent.toLowerCase());
jQuery.browser.iPod = /ipod/i.test(navigator.userAgent.toLowerCase());
jQuery.browser.mobile = jQuery.browser.android ||
                        jQuery.browser.blackBerry ||
                        jQuery.browser.webOs ||
                        jQuery.browser.windowsPhone ||
                        jQuery.browser.iDevice;
jQuery.browser.nonMobile = !jQuery.browser.mobile;

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