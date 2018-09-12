FireTray - patched for KDE - patched for OpenSuSE
=======

=================

Hopefully I can revive this great add-on for TB60.  
Still not fully functional but we got an icon in the tray again :-)  

Working:  

Preferences menu  
Tray icon  
Open/close thunderbird clicking on the icon  

Still NOT working:  

Getting accounts  
Unread / new messages check  
And probably a lot of other stuff 

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
