# TinyMCESoftHyphenButton
 Tiny MCE plugin that adds a button to insert Soft Hyphen (&shy;) charaters.
 
## Demo
https://codepen.io/andreasnylin/pen/poppbx

## Installation
Download the .js files and place them in your plugins directory or use the external_plugins option to link to the script file.

## Configuration

With plugin in directory:

```
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins : 'softHyphenButton',
  toolbar: 'softHyphenButton'
});
```

With external plugin:

```
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  external_plugins: {
    'softHyphenButton': 'http://www.testing.com/SoftHyphenButton/plugin.min.js'
  },
  toolbar: 'softHyphenButton'
});
```

Use the [Visual Chars plugin](https://www.tiny.cloud/docs/plugins/opensource/visualchars/) to display Soft Hyphen characters.
