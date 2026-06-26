import { API_CONFIG } from "@/config/api";

interface ApiResponse {
  success: boolean;
  message?: string;
  data?: any;
  error_code?: string;
  [key: string]: any;
}

class ApiService {
  private baseUrl: string;
  private apiKey: string;

  constructor(baseUrl: string, apiKey: string) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  private async request(
    action: string,
    method: "GET" | "POST" = "GET",
    data?: any,
  ): Promise<ApiResponse> {
    try {
      // Build URL with common parameters
      const params = new URLSearchParams();
      params.append("components", "api");
      params.append("action", action);
      params.append("api_key", this.apiKey);

      // Add GET parameters
      if (method === "GET" && data) {
        Object.keys(data).forEach((key) => {
          if (
            data[key] !== undefined &&
            data[key] !== null &&
            data[key] !== ""
          ) {
            params.append(key, String(data[key]));
          }
        });
      }

      let url = `${this.baseUrl}?${params.toString()}`;

      const options: RequestInit = {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-API-Key": this.apiKey,
        },
      };

      if (method === "POST" && data) {
        // For POST, send data in body
        const postData = {
          ...data,
          api_key: this.apiKey,
        };
        options.body = JSON.stringify(postData);
      }

      console.log(` ${method} Request URL:`, url);
      if (data) console.log(" Data:", data);

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(
          `HTTP Error: ${response.status} - ${response.statusText}`,
        );
      }

      const responseData = await response.json();
      console.log(` ${method} Response:`, responseData);

      return responseData;
    } catch (error) {
      console.error(" API Error:", error);

      let errorMessage = "Failed to connect to server";
      if (error instanceof Error) {
        if (error.message === "Failed to fetch") {
          errorMessage =
            "Cannot connect to API server. Check your internet connection.";
        } else if (error.message.includes("Network request failed")) {
          errorMessage =
            "Network error. Please check your internet connection.";
        } else {
          errorMessage = error.message;
        }
      }

      return {
        success: false,
        message: errorMessage,
        error_code: "NETWORK_ERROR",
      };
    }
  }

  // Test GET API
  async testGet(
    params?: Record<string, string | number>,
  ): Promise<ApiResponse> {
    return this.request("test_get", "GET", params);
  }

  // Test POST API
  async testPost(data?: any): Promise<ApiResponse> {
    return this.request("test_post", "POST", data);
  }

  // Create Customer
  async createCustomer(customerData: {
    customer_name: string;
    nic: string;
    mobile: string;
    email?: string;
    address?: string;
  }): Promise<ApiResponse> {
    return this.request("test_post", "POST", customerData);
  }

  // Product APIs
  async fetchProducts(productName: string): Promise<ApiResponse> {
    return this.request("fetch_products_data", "GET", {
      product_name: productName,
    });
  }

  async fetchProductSales(productCode: string): Promise<ApiResponse> {
    return this.request("fetch_product_sales", "GET", {
      product_code: productCode,
    });
  }

  async searchShops(shopName: string): Promise<ApiResponse> {
    return this.request("search_shops", "GET", { shop_name: shopName });
  }

  async fetchShopDetails(shopIds: string): Promise<ApiResponse> {
    return this.request("fetch_shop_details", "GET", { shop_ids: shopIds });
  }

  // SMS APIs
  async updateSmsStatus(data?: any): Promise<ApiResponse> {
    return this.request("sms_ststus", "POST", data);
  }

  async getSmsPending(): Promise<ApiResponse> {
    return this.request("sms_pending", "GET");
  }
}

const apiService = new ApiService(API_CONFIG.baseUrl, API_CONFIG.apiKey);
export default apiService;
