import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [plan, setPlan] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (plan) => {
    setIsSubmitting(true);
    setPlan(plan);
    setTimeout(() => {
      alert(`User selected ${plan} plan`);
      setIsSubmitting(false);
    }, 3000);
  };
  return (
    <div className='container'>
      <h1>Choose a Pricing Plan</h1>

      <div className='price-area'>
        <div>
          <ul className='card'>
            <li className='card__title'>Bronze</li>
            <li className='card__title--dark card__title--big'>$199.99</li>

            <li>
              <button
                onClick={() => handleSubmit('Bronze')}
                disabled={isSubmitting ? true : false}>
                Choose Plan
              </button>
            </li>
          </ul>
        </div>
        <div>
          <ul className='recommend card'>
            <li className='card__title'>Silver(Recommended)</li>
            <li className='card__title--big'>$249.99</li>

            <li>
              <button
                onClick={() => handleSubmit('Silver')}
                disabled={isSubmitting ? true : false}>
                Choose Plan
              </button>
            </li>
          </ul>
        </div>
        <div>
          <ul className='card'>
            <li className='card__title'>Gold</li>
            <li className='card__title--dark card__title--big'>$399.99</li>

            <li>
              <button
                onClick={() => handleSubmit('Gold')}
                disabled={isSubmitting ? true : false}>
                Choose Plan
              </button>
            </li>
          </ul>
        </div>
      </div>
      <p>Selected Plan: {plan}</p>
      <p>Mock api response(set timeout) fires after 3 seconds</p>
    </div>
  );
};

export default App;
