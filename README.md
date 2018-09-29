FireTray
=======


Please switch to the feature-tb60 branch for the latest source.  
New release have been tested with:  

Windows 10 x64, Thunderbird 52.9.1 and 60.0
openSuSE Leap 15.0, KDE, Thunderbird 52.9.1 and 60.0

Not tested:

SeaMonkey  
ChatZilla  
Zotero  

other desktops...



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
