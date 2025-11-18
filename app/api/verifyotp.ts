interface Opt {
    status: string;
    message: string;
    token: string;
    enteredOtp: number;
}

export async function verifyOtp(token: string, enteredOtp: number): Promise<Opt | null> {
    try {
        const response = await fetch("https://bite-heaven.onrender.com/api/auth/verify-otp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token,
                otp: enteredOtp
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to verify OTP");
        }

        const data: Opt = await response.json();
        return data;

    } catch (error) {
        console.error("Error verifying OTP:", error);
        return null;
    }
}


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6Iis5MTc4OTkxMTMyNDciLCJvdHAiOjIyMDA1MywiaWF0IjoxNzQyNzAwNDc0LCJleHAiOjE3NDI3MDQwNzR9.e1dzFxJpgbf5J921SLFGrb7Clcn7a6b4jQpGJkFSmUk";
const otp = 220053;

verifyOtp(token, otp).then((result) => {
    if (result) {
        console.log("OTP Verified:", result);
    } else {
        console.log("OTP Verification Failed");
    }
});
