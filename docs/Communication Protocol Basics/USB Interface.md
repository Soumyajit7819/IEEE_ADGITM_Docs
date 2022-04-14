---
sidebar_position: 5
---
# USB Interface

If you need your embedded application to talk to a PC then increasingly the way to go is USB.  
Partly this is because of the performance it can supply but also for the very practical reason that many PCs and most portables no longer have parallel or serial ports.  
But unlike the good old parallel or serial cables these interfaces are far from simple to implement, debug or program.

## The Standards

### USB 1.1
The original USB standard provides a fast Master/Slave interface using a tiered star topology supporting up to 127 devices with up to 6 tiers (hubs).
* A PC is normally the master or Host and each of the peripherals linked to it act as slaves or Devices.  
* One of the aims of the design was to minimise the complexity of the Devices by doing as much in the Host as possible. 
* Data transfer rates are defined in the specification as - Low Speed 1.5 Mbits/sec and Full Speed 12 Mbits/sec and the maximum length of each cable section is 5 metres. 
* The USB specification allows each device to take up to 500mA of power (limited to 100mA during startup).

### USB 2.0
There are some minor variations from USB 1.1 within the USB 2.0 specification and since USB 2.0s inception most interfaces have been designed to conform to the USB 2.0 standard. 
* The 2.0 specification is a superset of 1.1 and the major functional difference which is the addition of a High Speed 480 Mbits/sec data transfer mode.  
* Be warned, however, that the Spec does allow a product (eg an interface chip) to say that it is "USB 2.0 compatible" without necessarily implying that it  actually implements the High Speed mode.

### USB 3.0
Released in 2008 with motherboards and products appearing in 2010.  
* It has been designed to be backward compatible with 2.0 with a socket that will fit most combinations of legacy plugs and as well as supplying more power (900mA) it also adds a Super Speed >4.8 Gbits/sec data transfer mode so should be able to deliver 400MBytes/sec after protocol overheads. 
* It is becoming popular for use with external hard disks and other high speed applications.

### Wireless USB
A short range  high speed radio communications protocol ( 480 Mbit/s up to 3 m and 110 Mbit/s up to 10 ) which seems to aim to compete with Bluetooth.  Windows Drivers were not released with W7 and need to be obtained from the device suppliers

## Video for better understanding

[![Watch the video](https://img.youtube.com/vi/-X_q6jGomL0/maxresdefault.jpg)](https://www.youtube.com/watch?v=-X_q6jGomL0&list=PLz90r39PZN2VDuQhqEl9ACOZVOTKMITq1&index=16)