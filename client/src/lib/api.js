import { axiosInstance } from "./axios";

export const signup = async (signupData) => {
  const response = await axiosInstance.post("/auth/signup", signupData);
  return response.data;
};
export const login = async (loginData) => {
  const response = await axiosInstance.post("/auth/login", loginData);
  // console.log("res from api js", response);
  return response.data;
};

export const logout = async () => {
  const response = await axiosInstance.post("/auth/logout");
  return response.data;
};

export const getAuthUser = async () => {
  try {
    const res = await axiosInstance.get('/auth/me')
    // console.log("Hello check",res);
    return res.data;
  } catch (error) {
    // console.log("error in auth user", error);
    return null;
  }
}

export const completeOnboarding = async (userData) => {
  const response = await axiosInstance.post("/auth/onboarding", userData);
  return response.data;
};

export async function getUserFriends() {
  try {
    const response = await axiosInstance.get("/users/friends");
    // console.log("response from getUserFriends", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching user friends:", error);
    // Handle error if needed, e.g., return an empty array or throw an error
    return [];
  }
  
  return response.data;
}

export async function getRecommendedUsers() {
  const response = await axiosInstance.get("/users");
  return response.data;
}

export async function getOutgoingFriendReqs() {
  const response = await axiosInstance.get("/users/outgoing-friend-requests");
  return response.data;
}

export async function sendFriendRequest(userId) {
  try {
    const response = await axiosInstance.post(`/users/friend-request/${userId}`);
    // console.log(response);
  } catch (error) {
    // Handle error if needed
    console.error("Error sending friend request:", error);
  }
  return response.data;
}

export async function getFriendRequests() {
  const response = await axiosInstance.get("/users/friend-requests");
  return response.data;
}

export async function acceptFriendRequest(requestId) {
  const response = await axiosInstance.put(`/users/friend-request/${requestId}/accept`);
  return response.data;
}

export async function getStreamToken() {
  const response = await axiosInstance.get("/chat/token");
  return response.data;
}

