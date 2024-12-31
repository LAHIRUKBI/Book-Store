import React from "react";
import { FaBookOpen, FaSearch } from "react-icons/fa"; // Importing icons
import {
  FaBrain,
  FaBriefcase,
  FaLightbulb,
  FaSyncAlt,
  FaUserPlus,
} from "react-icons/fa";
import { FaBook, FaLaptop, FaUsers, FaClipboardList } from "react-icons/fa";

export default function Importance_of_Learning() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8">
      {/* Page Heading */}
      <h1 className="text-5xl font-bold text-center text-blue-600 mb-12 leading-tight">
        The Importance of Learning
      </h1>

      {/* Description Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Learning is a powerful tool that shapes our lives in profound ways. It
          helps us grow intellectually, emotionally, and socially. By
          continuously learning, we stay informed, adapt to new challenges, and
          contribute to our communities and the world.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed">
          Whether it's reading books, exploring new topics, or gaining new
          skills, learning empowers us to build better futures. It broadens our
          perspectives, increases our understanding, and encourages creativity
          and problem-solving. Reading, in particular, plays a crucial role in
          learning as it provides a vast wealth of knowledge that is easily
          accessible to anyone.
        </p>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
        <div className="relative overflow-hidden rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500">
          <img
            src="src/images/book4.jpg"
            alt="Reading Books"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500">
          <img
            src="src/images/book5.jpg"
            alt="Learning Concepts"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
      </div>

      {/* Why Learning is Important */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">
          Why Learning is So Important
        </h2>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Learning stimulates the mind, improves concentration, and enhances
          creativity. It exposes us to new ideas and different viewpoints, which
          can significantly influence our personal and professional growth.
        </p>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          With reading, we build vocabulary, improve writing skills, and gain an
          understanding of diverse cultures and perspectives. Whether it’s
          fiction or non-fiction, reading cultivates empathy and the ability to
          understand others better.
        </p>
      </div>

      {/* Benefits of Learning */}
      <div className="max-w-7xl mx-auto text-center mb-16 px-4">
  <h2 className="text-4xl font-semibold text-gray-800 mb-8">
    The Benefits of Learning
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
    <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center justify-center mb-4">
        <FaBrain className="text-blue-600 text-4xl" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Improves Mental Health
      </h3>
      <p className="text-gray-700">
        Learning stimulates cognitive functions and helps reduce stress and anxiety.
      </p>
    </div>

    <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center justify-center mb-4">
        <FaBriefcase className="text-green-600 text-4xl" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Career Growth
      </h3>
      <p className="text-gray-700">
        Continuous learning opens doors to better job opportunities and career advancement.
      </p>
    </div>

    <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center justify-center mb-4">
        <FaLightbulb className="text-yellow-600 text-4xl" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Enhances Problem-Solving
      </h3>
      <p className="text-gray-700">
        Learning sharpens critical thinking, making it easier to solve complex problems.
      </p>
    </div>

    <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center justify-center mb-4">
        <FaSyncAlt className="text-purple-600 text-4xl" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Adapts to Change
      </h3>
      <p className="text-gray-700">
        Learning new skills helps you adapt to evolving technologies and environments.
      </p>
    </div>
  </div>
</div>


      {/* How to Incorporate Learning Into Your Life */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">
          How to Incorporate Learning into Your Life
        </h2>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Incorporating learning into your daily life doesn’t have to be
          overwhelming. Here are some simple ways:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <FaBook className="text-blue-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Read Regularly
            </h3>
            <p className="text-gray-700">
              Set aside time each day for reading, whether it’s books, articles,
              or news. It’s a great way to broaden your knowledge.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <FaLaptop className="text-green-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Take Online Courses
            </h3>
            <p className="text-gray-700">
              Take online courses or attend webinars to learn new skills.
              Digital learning makes it easy to gain new expertise.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <FaUsers className="text-yellow-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Engage in Discussions
            </h3>
            <p className="text-gray-700">
              Engage in discussions with others to gain new insights and
              perspectives. Collaboration helps expand your knowledge.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <FaClipboardList className="text-purple-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Seek New Challenges
            </h3>
            <p className="text-gray-700">
              Practice continuous learning by seeking new challenges and
              solutions in your personal and professional life.
            </p>
          </div>
        </div>
      </div>

      {/* Learning Methods */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">
          Different Ways to Learn
        </h2>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          People learn in different ways. Here are some popular learning
          methods:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-2xl">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <span className="text-xl font-semibold text-blue-600">
              Reading:
            </span>
            <p className="text-gray-700 mt-2">
              Books, articles, and blogs provide endless information.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <span className="text-xl font-semibold text-blue-600">
              Online Courses:
            </span>
            <p className="text-gray-700 mt-2">
              Interactive learning with videos, quizzes, and certificates.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <span className="text-xl font-semibold text-blue-600">
              Hands-On Experience:
            </span>
            <p className="text-gray-700 mt-2">
              Learning by doing, such as internships or volunteer work.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <span className="text-xl font-semibold text-blue-600">
              Group Learning:
            </span>
            <p className="text-gray-700 mt-2">
              Learning from discussions, debates, and shared knowledge.
            </p>
          </div>
        </div>
      </div>

      {/* Famous Quotes on Learning */}
      <div className="max-w-3xl mx-auto text-center mb-16 px-4">
  <h2 className="text-4xl font-semibold text-gray-800 mb-8">
    Famous Quotes About Learning
  </h2>
  <div className="space-y-8">
    <blockquote className="text-xl text-gray-700 italic font-semibold border-l-4 pl-6 text-left transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:border-blue-500 hover:shadow-lg transform">
      <p>"The more that you read, the more things you will know. The more that you learn, the more places you'll go."</p>
      <footer className="mt-4 text-gray-500">– Dr. Seuss</footer>
    </blockquote>

    <blockquote className="text-xl text-gray-700 italic font-semibold border-l-4 pl-6 text-left transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:border-blue-500 hover:shadow-lg transform">
      <p>"Live as if you were to die tomorrow. Learn as if you were to live forever."</p>
      <footer className="mt-4 text-gray-500">– Mahatma Gandhi</footer>
    </blockquote>
  </div>
</div>



      {/* Links Section */}
      <div className="text-center mb-16 px-4">
  <h3 className="text-3xl font-semibold text-blue-600 mb-8">
    Want to Learn More?
  </h3>
  <div className="flex flex-col sm:flex-row justify-center gap-6">
    <a
      href="https://www.google.com/search?q=importance+of+learning"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 px-8 py-4 min-w-[200px] justify-center rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <FaSearch className="mr-3 text-xl group-hover:text-blue-300 transition-all duration-300" />
      <span className="font-medium">Search More</span>
    </a>
    <a
      href="https://www.wikipedia.org/wiki/Learning"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center text-white bg-green-500 hover:bg-green-600 px-8 py-4 min-w-[200px] justify-center rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <FaBookOpen className="mr-3 text-xl group-hover:text-green-300 transition-all duration-300" />
      <span className="font-medium">Read on Wikipedia</span>
    </a>
  </div>
</div>


    </div>
  );
}
