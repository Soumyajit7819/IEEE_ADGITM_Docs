---
sidebar_position: 3
---

# UART Protocol

`Universal asynchronous receiver-transmitter (UART)` is one of the simplest and oldest forms of device-to-device digital communication. You can find UART devices as a part of integrated circuits (ICs) or as individual components. UARTs communicate between two separate nodes using a pair of wires and a common ground.

## UART Protocol Guide

As a “universal” setup, we can configure UART to work with many different types of serial protocols.  UART was adapted into single-chip units in the early 1970s, starting with Western Digital’s WD1402A.

![UART PROTOCOL](/img/UART.png)

In a UART communication scheme:

1. One chip’s Tx (transmit) pin connects directly to the other’s Rx (receive) pin and vice versa. Commonly, the transmission will take place at 3.3 or 5V. UART is a single-master, single-slave protocol, where one device is set up to communicate with only one partner.

2. Data travels to and from a UART in parallel to the controlling device (e.g., a CPU).

3. When sending on the Tx pin, the first UART translates this parallel information into serial and transmits it to the receiving counterpart.

4. The second UART receives this data on its Rx pin and transforms it back into parallel to communicate with its controlling device.

UARTs transmit data serially, in one of three modes:

- **Full duplex**: Simultaneous communication to and from each master and slave

- **Half duplex**: Data flows in one direction at a time

- **Simplex**: One-way communication only

Data transmission takes place in the form of `data packets`, beginning with a start bit, where the ordinarily high line is pulled to ground. After the start bit, five to nine data bits transmit in what is known as the packet’s data frame, followed by an optional parity bit to verify proper data transmission. Finally, one or more stop bits are transmitted where the line is set to high. This ends a packet.

As an `asynchronous protocol`— no clock line regulates data transmission speed— users must set both devices to communicate at the same speed. This speed is known as the `baud rate`, expressed in bits per second, or bps. Transmission speeds vary dramatically, from the typical `9600` baud setting to `115200` and beyond.

While something of an “ancient” protocol, and one that can only communicate between a `single master and slave`, UART is well known, easy to set up, and `extremely versatile`. As such, you’re likely to encounter this system when working with microcontroller projects. UARTs may be a part of systems that you use every day, whether you realize it or not.

:::tip For Detailed Explanation Click this link

[UART Protocol Detailed PDF](https://www.infineon.com/dgdl/Infineon-Component_UART_V2.0-Software+Module+Datasheets-v02_05-EN.pdf?fileId=8ac78c8c7d0d8da4017d0e7f69251131&utm_source=cypress&utm_medium=referral&utm_campaign=202110_globe_en_all_integration-files)

:::

## Video for better understanding

[![Watch the video](https://img.youtube.com/vi/gqlUHVz5CGs/maxresdefault.jpg)](https://www.youtube.com/watch?v=gqlUHVz5CGs&list=PLz90r39PZN2VDuQhqEl9ACOZVOTKMITq1&index=6)