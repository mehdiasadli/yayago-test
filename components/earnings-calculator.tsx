'use client';

import { useState } from 'react';
import { TrendingUp, DollarSign, Calendar, Percent, Info } from 'lucide-react';

const carTypes = [
  { id: 1, name: 'Economy Car', example: 'Toyota Yaris, Hyundai i20', dailyRate: 35 },
  { id: 2, name: 'Compact Car', example: 'Toyota Corolla, Honda Civic', dailyRate: 50 },
  { id: 3, name: 'Midsize Sedan', example: 'Toyota Camry, Honda Accord', dailyRate: 70 },
  { id: 4, name: 'Luxury Sedan', example: 'BMW 5 Series, Mercedes E-Class', dailyRate: 150 },
  { id: 5, name: 'SUV Compact', example: 'Toyota RAV4, Honda CR-V', dailyRate: 80 },
  { id: 6, name: 'SUV Midsize', example: 'Toyota Highlander, Nissan Pathfinder', dailyRate: 100 },
  { id: 7, name: 'SUV Luxury', example: 'Range Rover, BMW X5', dailyRate: 180 },
  { id: 8, name: 'Sports Car', example: 'Porsche 911, BMW M4', dailyRate: 250 },
  { id: 9, name: 'Exotic/Supercar', example: 'Lamborghini, Ferrari', dailyRate: 500 },
  { id: 10, name: 'Van/Minibus', example: 'Mercedes Vito, Toyota Hiace', dailyRate: 90 },
  { id: 11, name: 'Pickup Truck', example: 'Toyota Hilux, Ford Ranger', dailyRate: 85 },
  { id: 12, name: 'Electric Vehicle', example: 'Tesla Model 3, Nissan Leaf', dailyRate: 120 },
];

export default function EarningsCalculator() {
  const [selectedCar, setSelectedCar] = useState(carTypes[2]); // Default to Midsize Sedan
  const [dailyRate, setDailyRate] = useState(selectedCar.dailyRate);
  const [utilization, setUtilization] = useState(50); // 50% utilization
  const [monthlyExpenses, setMonthlyExpenses] = useState(200); // ₼200 default expenses

  // Calculate earnings
  const daysPerMonth = 30;
  const rentalDays = Math.round((utilization / 100) * daysPerMonth);
  const monthlyRevenue = dailyRate * rentalDays;
  const platformCommission = 0; // 0% commission as per requirement
  const monthlyNetProfit = monthlyRevenue - monthlyExpenses - platformCommission;

  const handleCarTypeChange = (carId: number) => {
    const car = carTypes.find((c) => c.id === carId);
    if (car) {
      setSelectedCar(car);
      setDailyRate(car.dailyRate);
    }
  };

  return (
    <div className='w-full max-w-6xl mx-auto'>
      {/* Header */}
      <div className='text-center mb-12'>
        <div className='inline-block mb-4'>
          <span className='px-4 py-2 bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase'>
            Earnings Calculator
          </span>
        </div>
        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight'>
          Calculate Your Potential Earnings
        </h2>
        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
          Use our interactive calculator to estimate how much you can earn by renting out your car on YayaGo
        </p>
      </div>

      {/* Calculator Card */}
      <div className='bg-white border-2 border-gray-200 shadow-2xl overflow-hidden'>
        {/* Net Profit Display - Prominent */}
        <div className='bg-gradient-to-br from-primary to-primary-dark text-white p-8 md:p-12 text-center'>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <TrendingUp className='w-8 h-8' strokeWidth={2} />
            <h3 className='text-2xl md:text-3xl font-bold'>Your Monthly Net Profit</h3>
          </div>
          <div className='text-6xl md:text-7xl font-bold mb-2'>
            ₼{monthlyNetProfit.toLocaleString()}
          </div>
          <p className='text-white/80 text-lg'>
            Based on {rentalDays} rental days per month
          </p>
        </div>

        {/* Calculator Inputs */}
        <div className='p-8 md:p-12 space-y-8'>
          {/* Car Type Selection */}
          <div>
            <label className='block text-lg font-bold text-gray-900 mb-3'>
              Select Car Type (Reference)
            </label>
            <select
              value={selectedCar.id}
              onChange={(e) => handleCarTypeChange(Number(e.target.value))}
              className='w-full px-4 py-4 border-2 border-gray-300 text-gray-900 text-lg focus:border-primary focus:outline-none'
            >
              {carTypes.map((car) => (
                <option key={car.id} value={car.id}>
                  {car.name} - {car.example} (₼{car.dailyRate}/day suggested)
                </option>
              ))}
            </select>
          </div>

          {/* Daily Rate */}
          <div>
            <div className='flex items-center justify-between mb-3'>
              <label className='text-lg font-bold text-gray-900 flex items-center gap-2'>
                <DollarSign className='w-5 h-5 text-primary' strokeWidth={2} />
                Daily Rental Rate
              </label>
              <span className='text-2xl font-bold text-primary'>₼{dailyRate}</span>
            </div>
            <input
              type='range'
              min='20'
              max='600'
              step='5'
              value={dailyRate}
              onChange={(e) => setDailyRate(Number(e.target.value))}
              className='w-full h-3 bg-gray-200 appearance-none cursor-pointer accent-primary'
            />
            <div className='flex justify-between text-sm text-gray-500 mt-2'>
              <span>₼20</span>
              <span>₼600</span>
            </div>
          </div>

          {/* Utilization Rate */}
          <div>
            <div className='flex items-center justify-between mb-3'>
              <label className='text-lg font-bold text-gray-900 flex items-center gap-2'>
                <Calendar className='w-5 h-5 text-primary' strokeWidth={2} />
                Utilization Rate
              </label>
              <span className='text-2xl font-bold text-primary'>{utilization}%</span>
            </div>
            <input
              type='range'
              min='10'
              max='90'
              step='5'
              value={utilization}
              onChange={(e) => setUtilization(Number(e.target.value))}
              className='w-full h-3 bg-gray-200 appearance-none cursor-pointer accent-primary'
            />
            <div className='flex justify-between text-sm text-gray-500 mt-2'>
              <span>10% (3 days/month)</span>
              <span>90% (27 days/month)</span>
            </div>
            <div className='mt-2 p-3 bg-blue-50 border border-blue-200 text-blue-800 text-sm flex items-start gap-2'>
              <Info className='w-4 h-4 flex-shrink-0 mt-0.5' strokeWidth={2} />
              <span>
                This is the percentage of days your car will be rented. Average hosts achieve 40-60% utilization.
              </span>
            </div>
          </div>

          {/* Monthly Expenses */}
          <div>
            <div className='flex items-center justify-between mb-3'>
              <label className='text-lg font-bold text-gray-900 flex items-center gap-2'>
                <Percent className='w-5 h-5 text-primary' strokeWidth={2} />
                Monthly Expenses
              </label>
              <span className='text-2xl font-bold text-primary'>₼{monthlyExpenses}</span>
            </div>
            <input
              type='range'
              min='50'
              max='1000'
              step='50'
              value={monthlyExpenses}
              onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
              className='w-full h-3 bg-gray-200 appearance-none cursor-pointer accent-primary'
            />
            <div className='flex justify-between text-sm text-gray-500 mt-2'>
              <span>₼50</span>
              <span>₼1,000</span>
            </div>
            <div className='mt-2 p-3 bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm flex items-start gap-2'>
              <Info className='w-4 h-4 flex-shrink-0 mt-0.5' strokeWidth={2} />
              <span>
                Include insurance, maintenance, cleaning, fuel (if included), and other operational costs.
              </span>
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className='bg-gray-50 border-t-2 border-gray-200 p-8 md:p-12'>
          <h3 className='text-2xl font-bold text-gray-900 mb-6'>Earnings Breakdown</h3>
          <div className='space-y-4'>
            {/* Monthly Revenue */}
            <div className='flex items-center justify-between py-3 border-b border-gray-200'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-green-100 flex items-center justify-center'>
                  <TrendingUp className='w-5 h-5 text-green-600' strokeWidth={2} />
                </div>
                <div>
                  <div className='font-semibold text-gray-900'>Monthly Revenue</div>
                  <div className='text-sm text-gray-600'>
                    ₼{dailyRate} × {rentalDays} days
                  </div>
                </div>
              </div>
              <div className='text-2xl font-bold text-green-600'>+₼{monthlyRevenue.toLocaleString()}</div>
            </div>

            {/* Monthly Expenses */}
            <div className='flex items-center justify-between py-3 border-b border-gray-200'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-orange-100 flex items-center justify-center'>
                  <DollarSign className='w-5 h-5 text-orange-600' strokeWidth={2} />
                </div>
                <div>
                  <div className='font-semibold text-gray-900'>Monthly Expenses</div>
                  <div className='text-sm text-gray-600'>Insurance, maintenance, etc.</div>
                </div>
              </div>
              <div className='text-2xl font-bold text-orange-600'>-₼{monthlyExpenses.toLocaleString()}</div>
            </div>

            {/* Platform Commission */}
            <div className='flex items-center justify-between py-3 border-b-2 border-gray-300'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-primary/10 flex items-center justify-center'>
                  <Percent className='w-5 h-5 text-primary' strokeWidth={2} />
                </div>
                <div>
                  <div className='font-semibold text-gray-900'>Platform Commission</div>
                  <div className='text-sm text-gray-600'>YayaGo takes 0% commission!</div>
                </div>
              </div>
              <div className='text-2xl font-bold text-primary'>₼0</div>
            </div>

            {/* Net Profit */}
            <div className='flex items-center justify-between py-4 bg-gradient-to-r from-primary/10 to-primary/5 px-4 mt-4'>
              <div className='font-bold text-xl text-gray-900'>Your Monthly Net Profit</div>
              <div className='text-3xl font-bold text-primary'>₼{monthlyNetProfit.toLocaleString()}</div>
            </div>
          </div>

          {/* Yearly Projection */}
          <div className='mt-8 p-6 bg-white border-2 border-primary/30'>
            <div className='text-center'>
              <div className='text-sm font-semibold text-gray-600 mb-2'>Projected Yearly Earnings</div>
              <div className='text-4xl font-bold text-primary mb-2'>
                ₼{(monthlyNetProfit * 12).toLocaleString()}
              </div>
              <div className='text-sm text-gray-600'>
                That's <span className='font-bold text-primary'>₼{monthlyNetProfit.toLocaleString()}</span> per month
                for 12 months
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className='mt-8 p-6 bg-yellow-50 border-2 border-yellow-200 text-yellow-900'>
        <div className='flex items-start gap-3'>
          <Info className='w-5 h-5 flex-shrink-0 mt-0.5' strokeWidth={2} />
          <div className='text-sm'>
            <strong>Disclaimer:</strong> These are estimated earnings based on the parameters you've selected. Actual
            earnings may vary depending on market demand, seasonality, location, vehicle condition, and other factors.
            Historical data shows most hosts achieve 40-60% utilization rates.
          </div>
        </div>
      </div>
    </div>
  );
}

