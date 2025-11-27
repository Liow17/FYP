import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Cybersecurity Awareness Platform
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Build your knowledge of essential cybersecurity concepts
          </p>
        </header>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Password Security Module */}
          <Link href="/password-security">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer h-full">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Password Security
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Learn about creating strong, secure passwords and test your password strength with our interactive meter powered by zxcvbn.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li>✓ Password strength fundamentals</li>
                <li>✓ Interactive password testing</li>
                <li>✓ Best practices and tips</li>
                <li>✓ Knowledge assessment quiz</li>
              </ul>
            </div>
          </Link>

          {/* Phishing Awareness Module */}
          <Link href="/phishing-awareness">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer h-full">
              <div className="flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full mb-6">
                <svg className="w-8 h-8 text-red-600 dark:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Phishing Awareness
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Understand phishing attacks, recognize warning signs, and learn how to protect yourself from email scams and social engineering.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li>✓ What is phishing?</li>
                <li>✓ Common attack patterns</li>
                <li>✓ How to identify scams</li>
                <li>✓ Knowledge assessment quiz</li>
              </ul>
            </div>
          </Link>
        </div>

        <footer className="text-center mt-16 text-gray-600 dark:text-gray-400">
          <p className="text-sm">
            No login required • All interactions are client-side • Built for non-technical learners
          </p>
        </footer>
      </div>
    </div>
  );
}
