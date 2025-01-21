# Expo WebBrowser.openBrowserAsync iOS Simulator Issue

This repository demonstrates a bug in Expo's `WebBrowser.openBrowserAsync` function when used within an iOS simulator.  The function opens the URL in Safari as expected, but it fails to return a result, leading to a hang in the application.  The issue is specific to the simulator and works correctly on physical iOS devices.

## Steps to Reproduce

1. Clone this repository.
2. Run the app using Expo Go in the iOS simulator.
3. Tap the "Open Browser" button.
4. Observe that the URL opens in Safari, but the app hangs, and no result is logged to the console.

## Expected Behavior

The `WebBrowser.openBrowserAsync` function should return a result, allowing the app to continue execution.

## Actual Behavior

The function does not return a result, causing the app to hang.

## Solution

A potential workaround is to use a different library that may provide more reliable behavior in the simulator, or to implement a custom solution for handling URL navigation.