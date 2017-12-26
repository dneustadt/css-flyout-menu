# Pure CSS Responsive Flyout Menu

## Description

Pure CSS menu. Animated and responsive. Works as an
off-canvas menu on mobile viewports and is a flyout
on desktop. Triggered by a simple hamburger icon
that sticks to the top of the page.

## Demo

[See here](http://htmlpreview.github.io/?https://github.com/dneustadt/css-flyout-menu/blob/master/dist/index.html)

## Usage

### Prerequisites

Root `ul` with class `menu`. First `li` child with class `start` working as the trigger.

### Example

```
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
```

## Customization

To alter colors, sizes etc find the accordings variables in `src/flyout-menu.scss`

## License

MIT