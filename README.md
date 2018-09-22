FireTray
=======

This branch has only been tested with openSuSE 15.0 with Thumderbird 52.9.1 and 60.0.
The windows version still needs to be patched.

Overview
--------

This is a fork of [foudfou/FireTray](https://github.com/foudfou/FireTray)

The original FireTray has been patched to display the number of unread messages in KDE/Windows system tray.

It is a workaround for issues:
* [foudfou/FireTray #143](https://github.com/foudfou/FireTray/issues/143)
* [foudfou/FireTray #210](https://github.com/foudfou/FireTray/issues/210)

To build XPI file just do:
	cd src
	make build

To install icons on Kubuntu:
	cp ./src/chrome/skin/icons/unread/*.svg /usr/share/icons/breeze/actions/16/
	cp ./src/chrome/skin/icons/unread/*.svg /usr/share/icons/breeze/actions/22/
	cp ./src/chrome/skin/icons/unread/*.svg /usr/share/icons/breeze/actions/24/
