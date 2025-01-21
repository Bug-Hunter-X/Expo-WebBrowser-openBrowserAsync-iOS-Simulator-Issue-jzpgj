// Consider a fallback mechanism or a different library
import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  try {
    let result = await WebBrowser.openBrowserAsync('https://example.com');
    console.log({ result });
  } catch (error) {
    console.error('Error opening browser:', error);
    // Fallback mechanism: open URL in a new window
    window.open('https://example.com', '_blank');
  }
}

// In a component:
<Button title="Open Browser" onPress={handlePress} />