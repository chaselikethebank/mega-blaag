## Gotchas

Before we jump in, take note of these potential "Gotcha"s! 

## leading underscore

::: warning Take Note 

**All of the CSS classes begin with an "_" to immediately differentiate them from any potential name collisions in the code base from any of the corresponding Bootstrap 3.4.1 library class names.**


:::
This also turns all element selectors that traditionally would just be "h1" into **_class names_** in your code base. Refer to the h1 example below. 

```css 

._h1, ._h2, ._h3, ._h4, ._h5 ,._h6 {
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  line-height: 1.1;
  color: inherit;
}
```
You can still use the traditional element selectors like \<h1\> or \<p\> to fall back on the original Bootstrap 3.4.1 styling. 

::: warning Question 

Is this a good way to solve this problem? <br>
Should it be implemented all of the time? Some of the time? 
<br><div></div>
[Share your feedback](./../contact.md)
:::


