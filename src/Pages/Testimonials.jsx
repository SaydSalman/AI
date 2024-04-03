import React from 'react'

const Testimonials = () => {
  return (
    <>
         <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Testimonials</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">See what our customers are saying about us</p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <blockquote>
                <div className="text-base text-gray-900 font-semibold">"Thanks to the AI-powered recommendations from AI Grocery, grocery shopping has become a breeze! Their personalized suggestions have not only saved me time but also introduced me to new products I never knew I needed."</div>
                <footer className="mt-4">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-900">David M.</div>
                      <div className="text-base text-gray-500">CEO, Google</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <blockquote>
                <div className="text-base text-gray-900 font-semibold">"I've been using AI Groceries for my grocery needs, and I'm impressed by how accurate their recommendations are. It's like they know exactly what I want before I even realize it myself!"</div>
                <footer className="mt-4">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-900">Michael R.</div>
                      <div className="text-base text-gray-500">CEO, Apple</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <blockquote>
                <div className="text-base text-gray-900 font-semibold">"The convenience of ordering groceries through AI Groceries's AI platform is unmatched. It's like having a personal shopper who knows my preferences inside out. Highly recommended"</div>
                <footer className="mt-4">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-900">Sarah L.</div>
                      <div className="text-base text-gray-500">CEO, Amazon</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Testimonials
