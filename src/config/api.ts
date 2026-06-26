import { Platform } from 'react-native';

// Use the remote development server
const getApiUrl = (): string => {
  // For all platforms, use the remote URL
  return 'https://dev.negohosting.com/index.php';
  
  // Keep local for backup/testing if needed
  // if (Platform.OS === 'web') {
  //   return 'http://localhost:8000/index.php';
  // }
  // if (Platform.OS === 'android') {
  //   return 'http://10.0.2.2:8000/index.php';
  // }
  // return 'http://localhost:8000/index.php';
};

// Your API Key (keep this secure in production)
const API_KEY = '2044def760224bac37860a5fab48052b1076b05865d8dfedf281155fce5ce48f';

export const API_CONFIG = {
  baseUrl: getApiUrl(),
  apiKey: API_KEY,
  timeout: 30000,
};