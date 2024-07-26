import React, { useState } from 'react';
import './Policy.css'; // Ensure you have the necessary CSS

const CombinedPolicy = () => {
    const [activeTab, setActiveTab] = useState('privacy');

    return (
        <div className="policy-container">
            <div className="tab-header">
                <button
                    className={`tab-button ${activeTab === 'privacy' ? 'active' : ''}`}
                    onClick={() => setActiveTab('privacy')}
                >
                    Privacy Policy
                </button>
                <button
                    className={`tab-button ${activeTab === 'terms' ? 'active' : ''}`}
                    onClick={() => setActiveTab('terms')}
                >
                    Terms of Service
                </button>
            </div>

            {activeTab === 'privacy' && (
                <div className="policy-content">
                    <h1>Privacy Policy</h1>
                    
                    
                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to the Petitions and Grievances platform of NIT Patna. We are committed to protecting your privacy and ensuring a safe online experience. This Privacy Policy explains how we collect, use, and protect your personal information.
                    </p>
                    
                    <h2>2. Information We Collect</h2>
                    <ul>
                        <li><strong>Personal Information:</strong> When you register or submit a petition, we may collect personal information such as your name, email address, and contact details.</li>
                        <li><strong>Usage Data:</strong> We collect information about your interactions with our site, including IP addresses, browser types, and pages visited.</li>
                    </ul>

                    <h2>3. How We Use Your Information</h2>
                    <ul>
                        <li><strong>To Provide Services:</strong> We use your information to process petitions, respond to grievances, and manage user accounts.</li>
                        <li><strong>To Improve Our Site:</strong> We analyze usage data to enhance user experience and website functionality.</li>
                        <li><strong>For Communication:</strong> We may use your contact details to send notifications related to petitions and grievances or provide updates on the status of your submissions.</li>
                    </ul>

                    <h2>4. Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, or destruction. However, no online transmission or storage system is completely secure.
                    </p>

                    <h2>5. Sharing Your Information</h2>
                    <ul>
                        <li><strong>Third-Party Service Providers:</strong> We may share your information with third-party service providers who assist us in operating the website and delivering services.</li>
                        <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or to protect the rights and safety of our users and the institution.</li>
                    </ul>

                    <h2>6. Your Rights</h2>
                    <p>
                        You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at [Insert Contact Information].
                    </p>

                    <h2>7. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
                    </p>

                    <h2>8. Contact Us</h2>
                    <p>
                        If you have any questions or concerns about this Privacy Policy, please contact us at [Insert Contact Information].
                    </p>
                </div>
            )}

            {activeTab === 'terms' && (
                <div className="policy-content">
                    <h1>Terms of Service</h1>
                    
                    
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By using the Petitions and Grievances platform of NIT Patna, you agree to these Terms of Service. If you do not agree, please do not use the site.
                    </p>
                    
                    <h2>2. Use of the Platform</h2>
                    <ul>
                        <li><strong>Eligibility:</strong> You must be a student or staff member of NIT Patna to use this platform.</li>
                        <li><strong>Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</li>
                    </ul>

                    <h2>3. Submission of Petitions and Grievances</h2>
                    <ul>
                        <li><strong>Content:</strong> You agree to submit petitions and grievances that are relevant, respectful, and comply with NIT Patna’s code of conduct.</li>
                        <li><strong>Review:</strong> All submissions are subject to review and approval. We reserve the right to remove any content that violates our guidelines or is deemed inappropriate.</li>
                    </ul>

                    <h2>4. Prohibited Activities</h2>
                    <ul>
                        <li><strong>Misuse:</strong> You agree not to misuse the platform, including but not limited to spamming, phishing, or uploading malicious content.</li>
                        <li><strong>Violation:</strong> Any violation of these Terms may result in suspension or termination of your account.</li>
                    </ul>

                    <h2>5. Intellectual Property</h2>
                    <p>
                        <strong>Ownership:</strong> All content on the platform, including text, graphics, and logos, is the property of NIT Patna or its licensors and is protected by intellectual property laws.
                    </p>

                    <h2>6. Limitation of Liability</h2>
                    <p>
                        <strong>Disclaimer:</strong> The platform is provided "as is" without warranties of any kind. NIT Patna is not liable for any direct, indirect, incidental, or consequential damages arising from the use of the platform.
                    </p>

                    <h2>7. Changes to the Terms</h2>
                    <p>
                        We may update these Terms of Service from time to time. Any changes will be posted on this page with an updated effective date.
                    </p>

                    <h2>8. Governing Law</h2>
                    <p>
                        These Terms are governed by and construed in accordance with the laws of India.
                    </p>

                    <h2>9. Contact Us</h2>
                    <p>
                        For any questions or concerns regarding these Terms of Service, please contact us at [Insert Contact Information].
                    </p>
                </div>
            )}
        </div>
    );
};

export default CombinedPolicy;
