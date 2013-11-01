# jQuery Checkall

To check on/off a group of checkbox via a master checkbox, a radio button, even a link.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/xixilive/jquery-checkall/master/dist/jquery.checkall.min.js
[max]: https://raw.github.com/xixilive/jquery-checkall/master/dist/jquery.checkall.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.checkall.min.js"></script>
<h3>Choose rooms</h3>
<div>
  <label><input type="checkbox" data-toggle="checkall" data-target="input[name=room]" />Check All</label>
</div>
<h3>Rooms</h3>
<ul>
  <li><label><input type="checkbox" name="room" value="A" />Room A</label></li>
  <li><label><input type="checkbox" name="room" value="B" />Room B</label></li>
  <li><label><input type="checkbox" name="room" value="C" />Room C</label></li>
  <li><label><input type="checkbox" name="room" value="D" />Room D</label></li>
  <li><label><input type="checkbox" name="room" value="E" />Room E</label></li>
  <li><label><input type="checkbox" name="room" value="F" />Room F</label></li>
  <li><label><input type="checkbox" name="room" value="G" />Room G</label></li>
</ul>
<div>
  Check 
  <a href="javascript:;" data-toggle="checkall" data-target="input[name=room]" data-checked="true">All</a> /
  <a href="javascript:;" data-toggle="checkall" data-target="input[name=room]" data-checked="false">Nothing</a> /
  <a href="javascript:;" data-toggle="checkall" data-target="input[name=room]" data-reverse="true">Reverse</a>
</div>
```

## Documentation

### Example code
```html
$('#check-all').checkAll({
  target:    '',
  reverse:   true / false,
  checked:   null / true / false,
  sync:      true / false
});
```

### Options

#### target
> a jQuery selector, default is ':checkbox'

#### reverse
> setup to determine the check behavior of master checkbox, radio button or link, default is false.
  
#### checked
> always check-on a group of checkbox if set to true, only for Non-checked-status element, such as tag A, default is null.

### sync
> synchronize the master and slaves, only for checkbox or radio button, default is true