# BrowserCheck

Add this script to your head section with jQuery included and check your environment (browser, device).

```js
if($.browser.mobile) {
  alert("It's a mobile device!");
}
```

You can also add some classes to "html" tag:

```js
environmentDetect(true, true, true);
```

Now you can depend your css on browser, devices and OS. Just try:

```css
.idevice body {
  background : blue;
}
```
