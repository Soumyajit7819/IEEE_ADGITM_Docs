---
sidebar_position: 5
---

# Interrupts

An interrupt is a signal to the processor emitted by hardware or software indicating an event that needs immediate attention. Whenever an interrupt occurs, the controller completes the execution of the current instruction and starts the execution of an Interrupt Service Routine (ISR) or Interrupt Handler.

## Hardware Interrupt
A hardware interrupt is an electronic alerting signal sent to the processor from an external device, like a disk controller or an external peripheral.  
For example, when we press a key on the keyboard or move the mouse, they trigger hardware interrupts which cause the processor to read the keystroke or mouse position.

## Software Interrupt
A software interrupt is caused either by an exceptional condition or a special instruction in the instruction set which causes an interrupt when it is executed by the processor.  
For example, if the processor's arithmetic logic unit runs a command to divide a number by zero, to cause a divide-by-zero exception, thus causing the computer to abandon the calculation or display an error message. Software interrupt instructions work similar to subroutine calls.

### Interrupt Service Routine
For every interrupt, there must be an interrupt service routine (ISR), or interrupt handler. When an interrupt occurs, the microcontroller runs the interrupt service routine. 
* For every interrupt, there is a fixed location in memory that holds the address of its interrupt service routine, ISR. 
* The table of memory locations set aside to hold the addresses of ISRs is called as the Interrupt Vector Table.

<img src="/img/isr.png"  height="800" width="800"/>

# Handling Multiple Devices: 
When more than one device raises an interrupt request signal, then additional information is needed to decide which device to be considered first. The following methods are used to decide which device to select: Polling, Vectored Interrupts, and Interrupt Nesting. These are explained as following below. 

1. **Polling**:  In polling, the first device encountered with the IRQ bit set is the device that is to be serviced first. Appropriate ISR is called to service the same. It is easy to implement but a lot of time is wasted by interrogating the IRQ bit of all devices. 
2. **Vectored Interrupts**: In vectored interrupts, a device requesting an interrupt identifies itself directly by sending a special code to the processor over the bus. This enables the processor to identify the device that generated the interrupt. The special code can be the starting address of the ISR or where the ISR is located in memory and is called the interrupt vector. 
3. **Interrupt Nesting**: In this method, the I/O device is organized in a priority structure. Therefore, an interrupt request from a higher priority device is recognized whereas a request from a lower priority device is not.  The processor accepts interrupts only from devices/processes having priority.


## Video for better understanding

[![Watch the video](https://img.youtube.com/vi/Cd6nQ5sAkRE/hqdefault.jpg)](https://youtu.be/Cd6nQ5sAkRE)

## Types

[![Watch the video](https://img.youtube.com/vi/arAEbSt6tyg/hqdefault.jpg)](https://youtu.be/arAEbSt6tyg)

