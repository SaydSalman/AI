import React from 'react'

function Footer() {
  return (
    <>
        <footer className="bg-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p>At AI Grocery, we're revolutionizing the way you shop for groceries. Our cutting-edge AI technology enhances every aspect of your shopping experience, from personalized recommendations to seamless delivery</p>
          </div>
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul>
              <li>Personalized Product Recommendations</li>
              <li>Smart Shopping Lists</li>
              <li>Recipe Suggestions</li>
            </ul>
          </div>
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: aigrocery@gmail.com</p>
            <p>Phone: 6679812719</p>
          </div>
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <ul>
              <li className=''>Facebook
              <span><i className="fa-brands fa-facebook ml-2"></i></span></li>
              <li>Twitter
              <span><i className="fa-brands fa-twitter ml-2"></i></span></li>
              <li>Instagram
              <span><i className="fa-brands fa-instagram ml-2"></i></span></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer