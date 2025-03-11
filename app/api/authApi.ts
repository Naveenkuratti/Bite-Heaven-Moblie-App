// interface LoginResponse {
//     status: string;
//     message: string;
//     token: string;
//     otp: number;  
// }

// export async function getLogin(phoneNumber: string): Promise<LoginResponse> {
//     console.log('API call started');
    
//     try {
//         const formattedPhoneNumber = phoneNumber.replace("+", ""); 
//         console.log("Formatted Phone Number:", formattedPhoneNumber);

//         const url = 'https://bite-heaven.onrender.com/api/auth/login';

       
//         const response = await fetch(url, {
//             method: 'post',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ phoneNumber: formattedPhoneNumber })
//         });

     
//         if (!response.ok) {
//             const responseText = await response.text();  
//             throw new Error(`Failed to fetch OTP. HTTP Error: ${response.status}, Response: ${responseText}`);
//         }

//         const contentType = response.headers.get('Content-Type');
//         if (!contentType || !contentType.includes('application/json')) {
//             throw new Error('Expected JSON response from the server');
//         }

//         const responseText = await response.text();  
//         console.log('Raw Response Body:', responseText);  

      
//         let obj: LoginResponse | null = null;
//         try {
//             obj = JSON.parse(responseText);
//         } catch (e) {
//             console.error('Error parsing JSON response:', e);
//             throw new Error('Failed to parse server response');
//         }

//         console.log('Parsed Response:', obj);  

       
//         if (obj && obj.status === 'success' && obj.otp !== undefined) {
//             return {
//                 status: obj.status,
//                 message: obj.message,
//                 token: obj.token,
//                 otp: obj.otp,  
//             };
//         } else {

//             throw new Error('OTP not sent. Please check the phone number or try again.');
//         }

//     } catch (error: unknown) {

//         if (error instanceof Error) {
//             console.error('Error fetching login:', error);
//             throw new Error(`OTP IS ready to login. Error: ${error.message}`);
//         } else {
//             console.error('Unknown error:', error);
//             throw new Error('An unknown error occurred while fetching the OTP.');
//         }
//     }
// }
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
