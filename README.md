# tailwindCSS-CLI-template

## Table of Contents  

[Installation](#installation)

[Running The Application](#run)

[Sample Display](#display)

[Adding Custom Colors](#colors)

[Adding Custom Fonts](#fonts)

[Adding Custom Animations](#animations)

[Notes](#notes)

<a name="installation"/>

## Installation

Install dependencies via npm

```bash
npm i
```

```bash
node run initialize
```
<a name="run"/>

## Running The Application

Open the file using a live server plugin like Live Preview or visit the page file directly in your browser.

<a name="display"/>

## Sample Display
Dark Mode Responsiveness Demo:

https://user-images.githubusercontent.com/65431368/174418351-cec64d0a-364f-479e-9a68-ecc9b02c5218.mov

Demo of Links:

https://user-images.githubusercontent.com/65431368/174419848-d0e73aa2-b599-4210-bb10-cb90d08f526a.mov

## Configuration

<a name="colors"/>

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

<a name="fonts"/>

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

<a name="animations"/>

### Adding Custom Animations

In adding custom animations, you can either edit the pre-existing animations already included in Tailwind, or you can create an entirely new animation by including the specific keyframes you want.

#### Edit existing Animations

If you are looking to use an existing Tailwind animation but just want to change a certain aspect of it like it's duration, you can do that by calling the existing animation in the config class when defining a new animation. Navigate to the animation object in tailwind.config.js. Below is an example of how a new animation, 'spin-slow' is created by taking the existing spin animation and changing its duration to 3 seconds:

```bash
animation: {
        'spin-slow': 'spin 3s linear infinite', // custom spin-slow animation using the existing spin animation
      }
```

You may now call this new animation like you would any other animation and it would follow the rules that are set in the animation object. 
Example call of an img tag that is going through the spin-slow animation:

```bash
      <img
        src="./assets/images/tailwind.jpeg"
        alt=""
        class="animate-spin-slow"
      />
```

Normal Spin:

https://user-images.githubusercontent.com/65431368/174443618-2035291e-5131-440f-869f-3146e9f238a8.mov

Custom Slow Spin:

https://user-images.githubusercontent.com/65431368/174443629-6e614355-faf2-440d-b251-c228e17a9fb0.mov

<a name="notes"/>

## Notes

Please refer to the docs at https://tailwindcss.com/docs for any other questions you have, this documentation is only covering some of the methods used in the boiler plate provided. There were many other aspects of Tailwind used in this environment, most of which I have not covered because they are very core concepts in Tailwind CSS as a whole and can be found in the docs. This utility-first framework is amazing and is definately my go-to framework when it comes to developement as it gives you enough modularity to easily add and remove things but also enough freedom to change elements to your liking so everyone's work doesn't look the same like it normally does with Bootstrap.

-🙂