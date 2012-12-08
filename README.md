Hot-Corn-Dog testing
============

This is mainly for Gnome Shell 3.6+

THE PROBLEM: 1
------------

In Gnome Shell version less than 3.6 the `'enter-event'`

    corner.connect('enter-event', function () {});

was triggered wherever, and whenever you hovered over the actor. This isn't the case in Gnome Shell version 3.6+ since the `'enter-event'` is only triggered when hovering the actor, while you're in the overview mode (the mode which is activated when you move the mouse to the top-left corner).

This test demonstrates this, so you can only see an action when hovering the blue ball in overview mode, otherwise it's "dead".

SETTINGS
------------

Added a pref.js, where settings will be added. Hopefully, you will be able to select applictaions/commands, from GUI to be launched when hovering corners

MORE...
------------

More will be added soon