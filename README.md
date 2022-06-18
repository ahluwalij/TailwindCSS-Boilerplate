# tailwindCSS-CLI-template

## Installation

Install dependencies via npm

```bash
npm i
```

```bash
node run initialize
```

## Initial Usage

Open the file using a live server plugin like Live Preview or visit the page file directly in your browser.

## Sample Display
Dark Mode Responsiveness Demo:

https://user-images.githubusercontent.com/65431368/174418351-cec64d0a-364f-479e-9a68-ecc9b02c5218.mov

Demo of Links:

https://user-images.githubusercontent.com/65431368/174419848-d0e73aa2-b599-4210-bb10-cb90d08f526a.mov

## Configuration

### Adding Custom Colors

Let's say you have a color that you are looking to use and you can't find it in the Tailwind Docs. Well, you can add it via hex or rbg() in the tailwind.config.js file!

Navigate to tailwind.config.js and find the colors object. The colors object is apart of the extend object which is a part of the theme object. Using this format, you are able to add whatever colors you want to your environment while keeping the existing colors tailwind is offering. There are two ways to enter your own colors, both of which are shown below:

```
colors: {
        exampleblue: "#16becb",
        examplegreen: "rgb(12,159,100)"
      }
```

Now you can refer to these colors in html like any other color:

```
<div class="text-exampleblue">
<p>This Text Is My Custom Blue Color!<p>
</div>
```

### Adding Custom Fonts

The first step in adding a custom font is to grab the import URL of the font you want. Typicially, you can find a good custom font on https://fonts.google.com/ which provides a very nice layout for importing fonts. After you found the font you want, find the @import for the font, it should look like this

```bash
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
```

Paste that anywhere in your imports.css file, the file should look like this after importing, for example, two fonts using two import urls:

```bash
@import url('https://fonts.googleapis.com/css2?family=Trade+Winds&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now that you have given Tailwind the font you want, you now need to finalize it in your config file. Navigate to the fontFamily object in tailwind.config.js and add your font in an array in the object. The format is:

```bash
yourfontname: ['FontName', 'FontSyle']
```

If you are using Google fonts, google conveniently provides you with this information right under the import url. For example, this is how the font Roboto would be added:

```bash
fontFamily: {
        customroboto: ['Roboto','sans-serif']
      }
```

and it would be used in your code by calling

```bash
<div class="font-customroboto">
<p>This Text Is My Custom Roboto Font!<p>
</div>
```

### Adding Custom Animations

Please refer to the docs at https://tailwindcss.com/docs for any other questions you have, this documentation is only covering some of the methods used in the boiler plate provided. There were many other aspects of Tailwind used in this environment, most of which I have not covered because they are very core concepts in Tailwind CSS as a whole and can be found in the docs. This utility-first framework is amazing and is definately my go-to framework when it comes to developement as it gives you enough modularity to easily add and remove things but also enough freedom to change elements to your liking so everyone's work doesn't look the same like it normally does with Bootstrap.

-🙂