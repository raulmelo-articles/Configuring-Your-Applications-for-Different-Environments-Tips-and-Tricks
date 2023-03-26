import { appConfig } from "../config";

type UserInfo = {
  id: string;
  name: string;
  email: string;
};

export async function getUserInfo(userId: string) {
  const response = await fetch(`${appConfig.apiURL}/user/${userId}`);

  if (response.ok) {
    const data = await response.json();

    return data as UserInfo;
  }

  console.error("FAIL_FETCH_USER", await response.text());
  throw new Error("Failed to fetch user info. Please check the logs");
}
