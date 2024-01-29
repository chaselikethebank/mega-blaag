## Gotchas

Before we jump in, take note of these! 

::: tip 

### All of the CSS classes begin with an "_" to differentiate them immediately from any potential name collisions in the corresponding Bootstrap 3.4.1 library.
<br><div></div>

This also turns all element selectors that traditionally would just be "h1" into class names: "._h1" in your css file. 
:::
## leading _ in class name 

```css 

._h1, ._h2, ._h3, ._h4, ._h5 ,._h6 {
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  line-height: 1.1;
  color: inherit;
}
```

::: info 

Is this a good way to solve this problem? <br>
Should it be implemented all of the time? Some of the time? 
<br><div></div>
[Share your feedback](../../contact)
:::