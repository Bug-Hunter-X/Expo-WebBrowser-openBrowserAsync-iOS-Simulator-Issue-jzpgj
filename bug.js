import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  let result = await WebBrowser.openBrowserAsync('https://example.com');
  console.log({ result });
}

// In a component:
<Button title="Open Browser" onPress={handlePress} />