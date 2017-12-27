# Pure CSS Responsive Flyout Menu

## Description

Pure CSS menu. Animated and responsive. Works as an
off-canvas menu on mobile viewports and is a flyout
on desktop. Triggered by a simple hamburger icon
that sticks to the top of the page.

## Demo

[See here](https://htmlpreview.github.io/?https://github.com/dneustadt/css-flyout-menu/blob/master/dist/index.html)

## Usage

### Prerequisites

Optional first element: `input` with type `checkbox` and class `menu-trigger`.

*Note:* The trigger will toggle the off-canvas/flyout menu by tapping/clicking the hamburger icon repeatedly. By leaving the trigger out
the flyout will appear on hover and on mobile the user would have to tap the backdrop to close the off-canvas menu.

Root `ul` with class `menu`. First `li` child with class `start` working as the trigger.

Last element: `div` with class `overlay`.

### Example

```
<input type="checkbox" class="menu-trigger">
<ul class="menu" role="menu">
    <li class="start">
        <a href="#">
            <svg preserveAspectRatio="xMidYMid meet" focusable="false" viewBox="-5 -5 34 34">
                <g><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="white"></path></g>
            </svg>
        </a>
    </li>
    <li>
        <a href="#">Level 1</a>
        <ul>
            <li><a href="#">Level 2</a>
                <ul>
                    <li><a href="#">Level 3</a>
                        <ul>
                            <li><a href="#">Level 4</a></li>
                            <li><a href="#">Level 4</a></li>
                            <li><a href="#">Level 4</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Level 3</a></li>
                    <li><a href="#">Level 3</a></li>
                </ul>
            </li>
        </ul>
    </li>
    [...]
</ul>
<div class="overlay"></div>
```

## Issues with Chrome

There is a [confirmed issue](https://bugs.chromium.org/p/chromium/issues/detail?id=332189) 
with Chrome where transitions can fire on page load. Submenus can briefly be seen on page
load in that case. Integrating any JavaScript resources or even a single-spaced `<script> </script>`
will circumvent that behaviour.

## Customization

To alter colors, sizes etc find the accordings variables in `src/flyout-menu.scss`

## License

MIT