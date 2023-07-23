// Define the interface for a single post object
export interface PostData {
    userId: number;
    id: number;
    title: string;
    body: string;
  }  
  // Define the interface for the response from the API (an array of Post objects)
  export interface ApiResponse {
    posts: PostData[];
  }