import React from 'react';
import { FaBookOpen, FaSearch } from 'react-icons/fa'; // Importing icons

export default function Importance_of_Learning() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8">
      {/* Page Heading */}
      <h1 className="text-5xl font-bold text-center text-blue-600 mb-10 leading-tight">
        The Importance of Learning
      </h1>

      {/* Description Section */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          Learning is a powerful tool that shapes our lives in profound ways. It helps us grow intellectually, emotionally, and socially. By continuously learning, we stay informed, adapt to new challenges, and contribute to our communities and the world.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed">
          Whether it's reading books, exploring new topics, or gaining new skills, learning empowers us to build better futures. It broadens our perspectives, increases our understanding, and encourages creativity and problem-solving. Reading, in particular, plays a crucial role in learning as it provides a vast wealth of knowledge that is easily accessible to anyone.
        </p>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-12">
        <div className="relative overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
          <img
            src="src/images/book4.jpg"
            alt="Reading Books"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-25"></div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
          <img
            src="src/images/book5.jpg"
            alt="Learning Concepts"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-25"></div>
        </div>
      </div>

      {/* Why Learning is Important */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Why Learning is So Important</h2>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          Learning stimulates the mind, improves concentration, and enhances creativity. It exposes us to new ideas and different viewpoints, which can significantly influence our personal and professional growth.
        </p>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          With reading, we build vocabulary, improve writing skills, and gain an understanding of diverse cultures and perspectives. Whether it’s fiction or non-fiction, reading cultivates empathy and the ability to understand others better.
        </p>
      </div>

      {/* Benefits of Learning */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">The Benefits of Learning</h2>
        <ul className="list-disc text-xl text-gray-700 mb-6 mx-auto max-w-2xl">
          <li>Improves mental health and cognitive functions.</li>
          <li>Increases job opportunities and career growth.</li>
          <li>Enhances problem-solving skills and critical thinking.</li>
          <li>Helps adapt to changing technologies and environments.</li>
          <li>Promotes personal growth, curiosity, and self-confidence.</li>
        </ul>
      </div>

      {/* How to Incorporate Learning Into Your Life */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">How to Incorporate Learning into Your Life</h2>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          Incorporating learning into your daily life doesn’t have to be overwhelming. Here are some simple ways:
        </p>
        <ul className="list-decimal text-xl text-gray-700 mb-6 mx-auto max-w-2xl">
          <li>Set aside time each day for reading, whether it’s books, articles, or news.</li>
          <li>Take online courses or attend webinars to learn new skills.</li>
          <li>Engage in discussions with others to gain new insights and perspectives.</li>
          <li>Practice continuous learning by seeking new challenges and solutions in your personal and professional life.</li>
        </ul>
      </div>

      {/* Learning Methods */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Different Ways to Learn</h2>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          People learn in different ways. Here are some popular learning methods:
        </p>
        <ul className="list-disc text-xl text-gray-700 mb-6 mx-auto max-w-2xl">
          <li><strong>Reading:</strong> Books, articles, and blogs provide endless information.</li>
          <li><strong>Online Courses:</strong> Interactive learning with videos, quizzes, and certificates.</li>
          <li><strong>Hands-On Experience:</strong> Learning by doing, such as internships or volunteer work.</li>
          <li><strong>Group Learning:</strong> Learning from discussions, debates, and shared knowledge.</li>
        </ul>
      </div>

      {/* Famous Quotes on Learning */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Famous Quotes About Learning</h2>
        <p className="text-xl text-gray-700 mb-6 italic">
          "The more that you read, the more things you will know. The more that you learn, the more places you'll go." – Dr. Seuss
        </p>
        <p className="text-xl text-gray-700 mb-6 italic">
          "Live as if you were to die tomorrow. Learn as if you were to live forever." – Mahatma Gandhi
        </p>
      </div>

      {/* Links Section */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold text-blue-600 mb-6">Want to Learn More?</h3>
        <div className="flex justify-center gap-8">
          <a
            href="https://www.google.com/search?q=importance+of+learning"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <FaSearch className="mr-3 text-xl" /> Search More
          </a>
          <a
            href="https://www.wikipedia.org/wiki/Learning"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <FaBookOpen className="mr-3 text-xl" /> Read on Wikipedia
          </a>
        </div>
      </div>
    </div>
  );
}
