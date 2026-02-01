// Simple test script to verify the API
const testAPI = async () => {
  try {
    console.log('Testing API endpoints...');
    
    // Test health endpoint
    const healthResponse = await fetch('http://localhost:8000/api/health');
    const healthData = await healthResponse.json();
    console.log('✅ Health check:', healthData);
    
    // Test contact form with valid data
    const contactData = {
      fullName: 'muhammad shakir',
      email: 'muhammadshakir4152@gmail.com',
      phoneNumber: '+923348446105',
      subject: 'Technical Support',
      message: 'ccccc'
    };
    
    const contactResponse = await fetch('http://localhost:8000/api/contact/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData)
    });
    
    const contactResult = await contactResponse.json();
    console.log('✅ Contact form test:', contactResult);
    
  } catch (error) {
    console.error('❌ API test failed:', error.message);
  }
};

testAPI();