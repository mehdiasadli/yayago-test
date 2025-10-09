'use client';

import { useState } from 'react';
import { DollarSign, Calendar, Percent, TrendingDown, Info } from 'lucide-react';

const carOptions = [
  { id: 1, name: 'Economy Sedan', example: 'Toyota Corolla, Hyundai Elantra', price: 65000 },
  { id: 2, name: 'Compact SUV', example: 'Toyota RAV4, Honda CR-V', price: 95000 },
  { id: 3, name: 'Midsize Sedan', example: 'Toyota Camry, Honda Accord', price: 110000 },
  { id: 4, name: 'Midsize SUV', example: 'Toyota Highlander, Nissan Pathfinder', price: 145000 },
  { id: 5, name: 'Luxury Sedan', example: 'BMW 5 Series, Mercedes E-Class', price: 220000 },
  { id: 6, name: 'Luxury SUV', example: 'BMW X5, Mercedes GLE', price: 280000 },
  { id: 7, name: 'Premium Luxury', example: 'BMW 7 Series, Mercedes S-Class', price: 380000 },
  { id: 8, name: 'Sports Car', example: 'BMW M4, Porsche 911', price: 450000 },
  { id: 9, name: 'Premium SUV', example: 'Range Rover, Porsche Cayenne', price: 520000 },
  { id: 10, name: 'Exotic Car', example: 'Lamborghini, Ferrari', price: 1200000 },
];

const leaseDurations = [
  { months: 12, label: '1 Year', interestRate: 6.5 },
  { months: 24, label: '2 Years', interestRate: 5.9 },
  { months: 36, label: '3 Years', interestRate: 5.5 },
  { months: 48, label: '4 Years', interestRate: 5.2 },
  { months: 60, label: '5 Years', interestRate: 4.9 },
];

export default function LeasingCalculator() {
  const [selectedCar, setSelectedCar] = useState(carOptions[2]); // Default to Midsize Sedan
  const [carPrice, setCarPrice] = useState(selectedCar.price);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20); // 20% default
  const [selectedDuration, setSelectedDuration] = useState(leaseDurations[2]); // 3 years default
  const [includeInsurance, setIncludeInsurance] = useState(true);

  // Calculations
  const downPayment = (carPrice * downPaymentPercent) / 100;
  const loanAmount = carPrice - downPayment;
  const monthlyInterestRate = selectedDuration.interestRate / 100 / 12;
  const numberOfPayments = selectedDuration.months;

  // Monthly payment calculation using loan amortization formula
  const monthlyPayment =
    (loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  // Insurance (approximate 2-3% of car value per year, divided by 12 months)
  const monthlyInsurance = includeInsurance ? (carPrice * 0.025) / 12 : 0;

  const totalMonthlyPayment = monthlyPayment + monthlyInsurance;
  const totalPayable = downPayment + totalMonthlyPayment * numberOfPayments;
  const totalInterest = totalPayable - carPrice - (includeInsurance ? monthlyInsurance * numberOfPayments : 0);

  const handleCarTypeChange = (carId: number) => {
    const car = carOptions.find((c) => c.id === carId);
    if (car) {
      setSelectedCar(car);
      setCarPrice(car.price);
    }
  };

  return (
    <div className='w-full max-w-6xl mx-auto'>
      {/* Header */}
      <div className='text-center mb-12'>
        <div className='inline-block mb-4'>
          <span className='px-4 py-2 bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase'>
            Leasing Calculator
          </span>
        </div>
        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight'>
          Calculate Your Monthly Lease Payment
        </h2>
        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
          Use our interactive calculator to estimate your monthly payments based on car price, down payment, and lease
          duration.
        </p>
      </div>

      {/* Calculator Card */}
      <div className='bg-white border-2 border-gray-200 shadow-2xl overflow-hidden'>
        {/* Monthly Payment Display - Prominent */}
        <div className='bg-gradient-to-br from-primary to-primary-dark text-white p-8 md:p-12 text-center'>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <TrendingDown className='w-8 h-8' strokeWidth={2} />
            <h3 className='text-2xl md:text-3xl font-bold'>Your Monthly Payment</h3>
          </div>
          <div className='text-6xl md:text-7xl font-bold mb-2'>₼{Math.round(totalMonthlyPayment).toLocaleString()}</div>
          <p className='text-white/80 text-lg'>
            for {selectedDuration.months} months ({selectedDuration.label})
          </p>
        </div>

        {/* Calculator Inputs */}
        <div className='p-8 md:p-12 space-y-8'>
          {/* Car Type Selection */}
          <div>
            <label className='block text-lg font-bold text-gray-900 mb-3'>Select Car Type (Reference)</label>
            <select
              value={selectedCar.id}
              onChange={(e) => handleCarTypeChange(Number(e.target.value))}
              className='w-full px-4 py-4 border-2 border-gray-300 text-gray-900 text-lg focus:border-primary focus:outline-none'
            >
              {carOptions.map((car) => (
                <option key={car.id} value={car.id}>
                  {car.name} - {car.example} (₼{car.price.toLocaleString()} approx.)
                </option>
              ))}
            </select>
          </div>

          {/* Car Price */}
          <div>
            <div className='flex items-center justify-between mb-3'>
              <label className='text-lg font-bold text-gray-900 flex items-center gap-2'>
                <DollarSign className='w-5 h-5 text-primary' strokeWidth={2} />
                Car Price
              </label>
              <span className='text-2xl font-bold text-primary'>₼{carPrice.toLocaleString()}</span>
            </div>
            <input
              type='range'
              min='50000'
              max='1500000'
              step='10000'
              value={carPrice}
              onChange={(e) => setCarPrice(Number(e.target.value))}
              className='w-full h-3 bg-gray-200 appearance-none cursor-pointer accent-primary'
            />
            <div className='flex justify-between text-sm text-gray-500 mt-2'>
              <span>₼50,000</span>
              <span>₼1,500,000</span>
            </div>
          </div>

          {/* Down Payment */}
          <div>
            <div className='flex items-center justify-between mb-3'>
              <label className='text-lg font-bold text-gray-900 flex items-center gap-2'>
                <Percent className='w-5 h-5 text-primary' strokeWidth={2} />
                Down Payment
              </label>
              <div className='text-right'>
                <span className='text-2xl font-bold text-primary'>{downPaymentPercent}%</span>
                <div className='text-sm text-gray-600'>₼{Math.round(downPayment).toLocaleString()}</div>
              </div>
            </div>
            <input
              type='range'
              min='0'
              max='50'
              step='5'
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              className='w-full h-3 bg-gray-200 appearance-none cursor-pointer accent-primary'
            />
            <div className='flex justify-between text-sm text-gray-500 mt-2'>
              <span>0% (No down payment)</span>
              <span>50%</span>
            </div>
            <div className='mt-2 p-3 bg-blue-50 border border-blue-200 text-blue-800 text-sm flex items-start gap-2'>
              <Info className='w-4 h-4 flex-shrink-0 mt-0.5' strokeWidth={2} />
              <span>
                A larger down payment reduces your monthly payments and total interest paid. Minimum 10% recommended.
              </span>
            </div>
          </div>

          {/* Lease Duration */}
          <div>
            <label className='flex items-center gap-2 text-lg font-bold text-gray-900 mb-3'>
              <Calendar className='w-5 h-5 text-primary' strokeWidth={2} />
              Lease Duration
            </label>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-3'>
              {leaseDurations.map((duration) => (
                <button
                  key={duration.months}
                  onClick={() => setSelectedDuration(duration)}
                  className={`p-4 border-2 transition-all text-center ${
                    selectedDuration.months === duration.months
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-gray-300 hover:border-primary/50 text-gray-900'
                  }`}
                >
                  <div className='font-bold text-lg'>{duration.label}</div>
                  <div className='text-sm mt-1'>{duration.interestRate}% APR</div>
                </button>
              ))}
            </div>
            <div className='mt-2 p-3 bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm flex items-start gap-2'>
              <Info className='w-4 h-4 flex-shrink-0 mt-0.5' strokeWidth={2} />
              <span>
                Longer lease terms mean lower monthly payments but higher total interest. Choose what works best for
                your budget.
              </span>
            </div>
          </div>

          {/* Insurance Option */}
          <div>
            <div className='flex items-center space-x-3 p-4 bg-gray-50 border-2 border-gray-200'>
              <input
                type='checkbox'
                id='include-insurance'
                checked={includeInsurance}
                onChange={(e) => setIncludeInsurance(e.target.checked)}
                className='w-5 h-5 accent-primary cursor-pointer'
              />
              <label htmlFor='include-insurance' className='flex-1 cursor-pointer'>
                <div className='font-semibold text-gray-900'>Include Comprehensive Insurance</div>
                <div className='text-sm text-gray-600'>
                  Add ₼{Math.round(monthlyInsurance).toLocaleString()}/month for full coverage
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className='bg-gray-50 border-t-2 border-gray-200 p-8 md:p-12'>
          <h3 className='text-2xl font-bold text-gray-900 mb-6'>Payment Breakdown</h3>
          <div className='space-y-4'>
            {/* Down Payment */}
            <div className='flex items-center justify-between py-3 border-b border-gray-200'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-orange-100 flex items-center justify-center'>
                  <DollarSign className='w-5 h-5 text-orange-600' strokeWidth={2} />
                </div>
                <div>
                  <div className='font-semibold text-gray-900'>Down Payment</div>
                  <div className='text-sm text-gray-600'>Initial payment ({downPaymentPercent}%)</div>
                </div>
              </div>
              <div className='text-2xl font-bold text-orange-600'>₼{Math.round(downPayment).toLocaleString()}</div>
            </div>

            {/* Monthly Loan Payment */}
            <div className='flex items-center justify-between py-3 border-b border-gray-200'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-blue-100 flex items-center justify-center'>
                  <Calendar className='w-5 h-5 text-blue-600' strokeWidth={2} />
                </div>
                <div>
                  <div className='font-semibold text-gray-900'>Monthly Loan Payment</div>
                  <div className='text-sm text-gray-600'>Principal + Interest at {selectedDuration.interestRate}% APR</div>
                </div>
              </div>
              <div className='text-2xl font-bold text-blue-600'>₼{Math.round(monthlyPayment).toLocaleString()}</div>
            </div>

            {/* Monthly Insurance */}
            {includeInsurance && (
              <div className='flex items-center justify-between py-3 border-b border-gray-200'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-green-100 flex items-center justify-center'>
                    <Percent className='w-5 h-5 text-green-600' strokeWidth={2} />
                  </div>
                  <div>
                    <div className='font-semibold text-gray-900'>Monthly Insurance</div>
                    <div className='text-sm text-gray-600'>Comprehensive coverage included</div>
                  </div>
                </div>
                <div className='text-2xl font-bold text-green-600'>₼{Math.round(monthlyInsurance).toLocaleString()}</div>
              </div>
            )}

            {/* Total Monthly */}
            <div className='flex items-center justify-between py-4 bg-gradient-to-r from-primary/10 to-primary/5 px-4 mt-4'>
              <div className='font-bold text-xl text-gray-900'>Total Monthly Payment</div>
              <div className='text-3xl font-bold text-primary'>₼{Math.round(totalMonthlyPayment).toLocaleString()}</div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className='grid md:grid-cols-3 gap-4 mt-8'>
            <div className='p-4 bg-white border-2 border-gray-200 text-center'>
              <div className='text-sm text-gray-600 mb-1'>Total Amount Financed</div>
              <div className='text-2xl font-bold text-gray-900'>₼{Math.round(loanAmount).toLocaleString()}</div>
            </div>
            <div className='p-4 bg-white border-2 border-gray-200 text-center'>
              <div className='text-sm text-gray-600 mb-1'>Total Interest Paid</div>
              <div className='text-2xl font-bold text-gray-900'>₼{Math.round(totalInterest).toLocaleString()}</div>
            </div>
            <div className='p-4 bg-white border-2 border-primary/30 text-center'>
              <div className='text-sm text-gray-600 mb-1'>Total Amount Payable</div>
              <div className='text-2xl font-bold text-primary'>₼{Math.round(totalPayable).toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className='mt-8 p-6 bg-yellow-50 border-2 border-yellow-200 text-yellow-900'>
        <div className='flex items-start gap-3'>
          <Info className='w-5 h-5 flex-shrink-0 mt-0.5' strokeWidth={2} />
          <div className='text-sm'>
            <strong>Disclaimer:</strong> These calculations are estimates based on the parameters you've selected.
            Actual rates, terms, and monthly payments may vary based on your credit score, income, employment history,
            and the specific leasing company's policies. This calculator is for informational purposes only and does not
            constitute a loan offer or guarantee of approval.
          </div>
        </div>
      </div>
    </div>
  );
}

