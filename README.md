Hot-Corn-Dog
============

This is an gnome 3.4.1 extension where you can pick your own "hot corners" for toggling the overview, or for running custom applications. You can also change the "Hot corner" for the message tray.

INSTALLATION
------------

download the files:

    git clone https://senatorn@github.com/senatorn/Hot-Corn-Dog.git

or if you downloaded the zip

    unzip Hot-Corn-Dog

then move the files to either `~/.local/share/gnome-shell/extensions` or to if you want to install for all users `/usr/share/gnome-shell/extensions`

you will maybe need to enable this extension in gnome-tweak-tool.


CUSTOMIZATION
-------------

Go to the folder where you installed the files.
open `extension.js`.

You can edit the following values:

    const CORNER_TL = false; // true, false
    const CORNER_TR = false; // true, false
    const CORNER_BL = false; // true, false
    const CORNER_BR = true; // true, false
    
    const HOVER_ANIMATION = true; // true, false
    
    const SYSTEM_TRAY_HOT_CORNER = right; // left, right, middle
    
    const TL_COMMAND = false;
    const TR_COMMAND = false; // 'gnome-terminal.desktop'
    const BL_COMMAND = false; // 'firefox.desktop' 
    const BR_COMMAND = false; // 'gnome-system-monitor.desktop'

The first four values `CORNER_TL`, `CORNER_TR`, `CORNER_BL`, `CORNER_BR` are the four courners, if you want to disable one corner, set it to `false` otherwise set it to `true`.

Set the `HOVER_ANIMATION` to `true` if you want a blue halfcircle to come upp for a second when you hover one of the hot corners, otherwise, set it to `false`.

If you want to change the position of the system/message tray you change `SYSTEM_TRAY_HOT_CORNER`, you can choose between having it in the middle, left, or right.

The `TL_COMMAND`, `TR_COMMAND`, `BL_COMMAND`, `BR_COMMAND` are custom commands that you can set instead of toggling the gnome shell overview. If you want to launch an installed application, write the name of it followed by `.desktop`

 When you are done with editing you need to reload the gnome shell by entering `Alt + F2` and then enter `r`
 