
interface LoginResponse {
    status: number;
    message: string;
    token?: string;
    otp?: number;
}

export async function getLogin(phoneNumber: string): Promise<LoginResponse> {
    console.log('🔄 Initiating API call...');

    try {
        const formattedPhoneNumber = phoneNumber.replace("+", ""); 
        console.log("📱 Formatted Phone Number:", formattedPhoneNumber);

        const url = 'https://bite-heaven.onrender.com/api/auth/login';

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phoneNumber: formattedPhoneNumber })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`❌ API Error: ${response.status}, Response: ${errorText}`);
        }

        const data: LoginResponse = await response.json();
        console.log('✅ API Response:', data);

        if (data.status === 200 && data.otp) {
            return data;
        } else {
            throw new Error(data.message || 'OTP not sent. Please check the phone number and try again.');
        }

    } catch (error: any) {
        console.error('🚨 Error fetching OTP:', error.message || error);
        throw new Error(`⚠️ Login Failed: ${error.message}`);
    }
}
