// src/config/api.ts
import { Platform } from 'react-native';

// Get the appropriate API URL based on platform
const getApiUrl = (): string => {
  // For web testing
  if (Platform.OS === 'web') {
    return 'http://localhost:8000/components/api/api.php';
  }
  // Android Emulator
  if (Platform.OS === 'android') {
    return 'http://10.0.2.2:8000/components/api/api.php';
  }
  // iOS Simulator
  return 'http://localhost:8000/components/api/api.php';
};

// Your API Key
const API_KEY = '2044def760224bac37860a5fab48052b1076b05865d8dfedf281155fce5ce48f';

export const API_CONFIG = {
  baseUrl: getApiUrl(),
  apiKey: API_KEY,
  timeout: 30000,
};