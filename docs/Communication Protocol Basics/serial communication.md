---
sidebar_position: 1
---

# Serial Communication

In serial communication, data is in the form of binary pulses. In other words, we can say Binary One represents a logic HIGH or 5 Volts, and zero represents a logic LOW or 0 Volts. Serial communication can take many forms depending on the type of transmission mode and data transfer. The transmission modes are classified as Simplex, Half Duplex, and Full Duplex. There will be a source (also known as a sender) and destination (also called a receiver) for each transmission mode.

* The **`Simplex method`** is a one-way communication technique. Only one client (either the sender or receiver is active at a time). If a sender transmits, the receiver can only accept. Radio and Television transmission are the examples of simplex mode.

* In **`Half Duplex mode`** , both sender and receiver are active but not at a time, i.e. if a sender transmits, the receiver can accept but cannot send and vice versa. A good example is an internet. If a client (laptop) sends a request for a web page, the web server processes the application and sends back the information.

* The **`Full Duplex mode`** is widely used communication in the world. Here both sender and receiver can transmit and receive at the same time. An example is your smartphone.

## Parallel vs. Serial

Parallel interfaces transfer multiple bits at the same time. They usually require buses of data - transmitting across eight, sixteen, or more wires. Data is transferred in huge, crashing waves of 1's and 0's.

![Parallel](/img/parallel.png)

`An 8-bit data bus, controlled by a clock, transmitting a byte every clock pulse. 9 wires are used.`

Serial interfaces stream their data, one single bit at a time. These interfaces can operate on as little as one wire, usually never more than four.

![Serial](/img/serial.png)

`Example of a serial interface, transmitting one bit every clock pulse. Just 2 wires required!`

Think of the two interfaces as a stream of cars: a parallel interface would be the 8+ lane mega-highway, while a serial interface is more like a two-lane rural country road. Over a set amount of time, the mega-highway potentially gets more people to their destinations, but that rural two-laner serves its purpose and costs a fraction of the funds to build.

Parallel communication certainly has its benefits. It's fast, straightforward, and relatively easy to implement. But it requires many more input/output (I/O) lines. If you've ever had to move a project from a basic Arduino Uno to a Mega, you know that the I/O lines on a microprocessor can be precious and few. So, we often opt for serial communication, sacrificing potential speed for pin real estate.


:::tip For Detailed Explanation Click this link

[Serial Comm. Detailed PDF](https://www.codrey.com/embedded-systems/serial-communication-basics/)

:::

## Video for better understanding 

[![Watch the video](https://img.youtube.com/vi/OXa8-amTm2g/maxresdefault.jpg)](https://www.youtube.com/watch?v=OXa8-amTm2g&list=PLz90r39PZN2VDuQhqEl9ACOZVOTKMITq1&index=4)