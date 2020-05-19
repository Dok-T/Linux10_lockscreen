#
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Windows_logo_-_2012_%28purple%29.svg/88px-Windows_logo_-_2012_%28purple%29.svg.png">
</p>
#

# This is a 1080p (1920x1080) patched theme from https://github.com/Xseba360/lightdm-webkit-theme-win10
## YOU NEED TO HAVE THE SEGOE UI FONT FROM A WINDOWS 10 INSTALLATION

# Win10 for LightDM

[![MIT License][license-badge]](LICENSE.md)

A Windows 10 inspired theme for LightDM. [Try the demo](https://dok-t.github.io/Linux10_lockscreen/) to see how you like it! Tendou isn't intended to look exactly like Windows 10, but you're free to fork and tweak the styles.

Tendou allows for switching users, but not graphical sessions. It also allows you to shutdown/restart/sleep from the menu in the bottom right.

The code for the waiting indicator when logging in is based on [this pen](http://codepen.io/vineethtr/pen/GJpxoQ) by @vineethtrv.

[license-badge]:  https://img.shields.io/badge/license-MIT-007EC7.svg

## Required software:
  - Windows 10 Fonts (from a windows 10 installation disk for eg, see https://wiki.archlinux.org/index.php/Microsoft_fonts)
  - LightDM
  - light-locker & ligh-locker-settings *(AUR)*
  - lightdm-webkit2-greeter *(AUR)* 
  - this theme
 
 ## How to install?
 
 1. Uninstall xscreensaver
 2. Install LightDM
 3. Enable lightdm.service (or lightdm-plymouth.service if Plymouth is installed)
 4. Install webkit2 greeter
 5. Install light-locker (and settings app)
 6. Edit /etc/lightdm/lightdm.conf to uncomment and fill : **greeter-session=lightdm-webkit2-greeter** and **user-session=xfce**
 7. Set theme via /etc/lightdm/lightdm-webkit2-greeter.conf and set **webkit_theme        = linux10**
 8. Restart lightDM (sudo systemctl restart lightdm.servce / lightdm-plymouth.service)
 
 And it's done!

![Screenshot 1](https://i.imgur.com/hBXca14.jpg)
![Screenshot 2](https://i.imgur.com/2QyFhgY.jpg)
