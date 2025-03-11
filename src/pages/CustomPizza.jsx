import React, { useState } from 'react';

const CustomPizza = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState({
    base: '',
    sauce: '',
    cheese: '',
    veggies: [],
    meat: []
  });

  const steps = ['Pizza Base', 'Sauce', 'Cheese', 'Veggies', 'Meat', 'Review'];

  const updateSelection = (category, value) => {
    setSelections(prev => ({
      ...prev,
      [category]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Create Your Custom Pizza
        </h1>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step} className="flex flex-col items-center flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index + 1 === currentStep ? 'bg-red-600 text-white' :
                  index + 1 < currentStep ? 'bg-green-500 text-white' :
                  'bg-gray-200 text-gray-700'
                }`}>
                  {index + 1 < currentStep ? '✓' : index + 1}
                </div>
                <span className="text-sm mt-2">{step}</span>
                {index < steps.length - 1 && (
                  <div className={`h-1 w-full mt-4 ${
                    index + 1 < currentStep ? 'bg-green-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-grow">
            {currentStep === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Thin Crust', 'Classic Hand Tossed', 'Deep Dish', 'Stuffed Crust', 'Gluten Free'].map((base) => (
                  <div
                    key={base}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selections.base === base ? 'border-red-600 bg-red-50' : 'border-gray-200 hover:border-red-300'
                    }`}
                    onClick={() => updateSelection('base', base)}
                  >
                    <div>
                        <img className="h-40 bg-gray-200 rounded-lg mb-4 w-full object-cover" src="./pizza.jpg" alt="" srcset="" />
                    </div>
                    <h3 className="font-semibold">{base}</h3>
                    <p className="text-sm text-gray-600">Description for {base}</p>
                    <p className="text-red-600 font-semibold mt-2">₹199</p>
                  </div>
                ))}
              </div>
            )}
            {/* Pizza sauce section */}
            {currentStep === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["Tomato Basil", "Garlic Parmesan", "Barbecue", "Pesto", "Spicy Marinara"].map((base) => (
                  <div
                    key={base}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selections.base === base ? 'border-red-600 bg-red-50' : 'border-gray-200 hover:border-red-300'
                    }`}
                    onClick={() => updateSelection('sauce', base)}
                  >
                    <div>
                        <img className="h-40 bg-gray-200 rounded-lg mb-4 w-full object-cover" src="./sauce.jpg" alt="" srcset="" />
                    </div>
                    <h3 className="font-semibold">{base}</h3>
                    <p className="text-sm text-gray-600">Description for {base}</p>
                    <p className="text-red-600 font-semibold mt-2">₹199</p>
                  </div>
                ))}
              </div>
            )}
            {/* Pizza Cheese section */}
            {currentStep === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["Mozzarella", "Cheddar", "Parmesan", "Provolone", "Gorgonzola", "Ricotta"].map((base) => (
                  <div
                    key={base}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selections.base === base ? 'border-red-600 bg-red-50' : 'border-gray-200 hover:border-red-300'
                    }`}
                    onClick={() => updateSelection('Cheese', base)}
                  >
                    <div>
                        <img className="h-40 bg-gray-200 rounded-lg mb-4 w-full object-cover" src="./cheese.jpg" alt="" srcset="" />
                    </div>
                    <h3 className="font-semibold">{base}</h3>
                    <p className="text-sm text-gray-600">Description for {base}</p>
                    <p className="text-red-600 font-semibold mt-2">₹199</p>
                  </div>
                ))}
              </div>
            )}
            {/* Pizza Veggies section */}
            {currentStep === 4 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["Bell Peppers", "Mushrooms", "Olives", "Red Onions"].map((base) => (
                  <div
                    key={base}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selections.base === base ? 'border-red-600 bg-red-50' : 'border-gray-200 hover:border-red-300'
                    }`}
                    onClick={() => updateSelection('Veggies', base)}
                  >
                    <div>
                        <img className="h-40 bg-gray-200 rounded-lg mb-4 w-full object-cover" src="./veggies.jpg" alt="" srcset="" />
                    </div>
                    <h3 className="font-semibold">{base}</h3>
                    <p className="text-sm text-gray-600">Description for {base}</p>
                    <p className="text-red-600 font-semibold mt-2">₹199</p>
                  </div>
                ))}
              </div>
            )}
            {/* Pizza Meat section */}
            {currentStep === 5 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["Pepperoni", "Sausage", "Grilled Chicken", "Bacon", "Ham"].map((base) => (
                  <div
                    key={base}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selections.base === base ? 'border-red-600 bg-red-50' : 'border-gray-200 hover:border-red-300'
                    }`}
                    onClick={() => updateSelection('Meat', base)}
                  >
                    <div>
                        <img className="h-40 bg-gray-200 rounded-lg mb-4 w-full object-cover" src="./meat.jpg" alt="" srcset="" />
                    </div>
                    <h3 className="font-semibold">{base}</h3>
                    <p className="text-sm text-gray-600">Description for {base}</p>
                    <p className="text-red-600 font-semibold mt-2">₹199</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Summary Sidebar */}
          <div className="w-80 shrink-0 text-black">
            <div className="bg-white p-6 rounded-lg shadow-lg sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Your Pizza</h3>
              <div className="space-y-4">
                {Object.entries(selections).map(([key, value]) => (
                  value && (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="capitalize">{key}:</span>
                      <span className="font-medium">
                        {Array.isArray(value) ? value.join(', ') : value}
                      </span>
                    </div>
                  )
                ))}
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹499</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
            className={`px-6 py-2 rounded-lg ${
              currentStep === 1 ? 'invisible' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Back
          </button>
          <button
            onClick={() => setCurrentStep(prev => Math.min(6, prev + 1))}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            {currentStep === steps.length ? 'Proceed to Checkout' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomPizza;