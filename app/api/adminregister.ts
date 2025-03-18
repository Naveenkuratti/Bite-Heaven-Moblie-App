export async function registerAdmin(data: { name: string; phone: string; email: string; password: string }) {
  console.log("📤 Sending Registration Request:", JSON.stringify(data, null, 2));

  const url = "https://bite-heaven.onrender.com/api/auth/manager/register";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const responseText = await response.text();
    console.log("🔍 Raw API Response:", responseText);

    const responseBody = JSON.parse(responseText);

    if (!response.ok) { 
      console.error("🚨 Registration Failed:", responseBody.message);
      throw new Error(responseBody.message || "⚠️ Registration Failed");
    }

    console.log("✅ Manager registered successfully:", responseBody);
    return { success: true, data: responseBody };
  } catch (error: any) {
    console.error("🚨 Registration Error:", error.message || error);
    throw new Error(error.message || "⚠️ Registration failed. Please try again.");
  }
}
