FireTray - patched for KDE - patched for OpenSuSE
=======

=================

Working:  

Preferences menu  
Tray icon, except new message count
Open/close thunderbird clicking on the icon  

Still NOT working:  

Tray icon with new message count


For now I will only work on the Linux version.  

==================

Overview
--------

This is a fork of [foudfou/FireTray](https://github.com/foudfou/FireTray)

The original FireTray has been "brutally" patched to display the number of unread messages in KDE system tray.

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
