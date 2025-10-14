# Cars API Integration Guide

This directory contains all car-related schemas, actions, and utilities for integrating with the YayaGo backend API.

## Files Overview

- **`car.schema.ts`** - Zod validation schemas for car data
- **`cars.actions.ts`** - Server actions for car mutations
- **`cars.access.ts`** - Access control utilities (if needed)
- **`cars.mock.ts`** - Mock data for development

## Usage Examples

### 1. Using Client-Side Service (lib/api/services/cars.service.ts)

For client-side data fetching and real-time interactions:

```typescript
'use client';

import { carsService } from '@/lib/api/services/cars.service';
import { useEffect, useState } from 'react';

function CarsList() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      try {
        const data = await carsService.getAllCars();
        setCars(data);
      } catch (error) {
        console.error('Failed to fetch cars:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {cars.map((car) => (
        <div key={car.id}>
          {car.brand} {car.model} - ${car.pricePerDay}/day
        </div>
      ))}
    </div>
  );
}
```

### 2. Using Server Actions (data/cars/cars.actions.ts)

For server-side operations and form submissions:

```typescript
'use client';

import { createCar } from '@/data/cars/cars.actions';
import { useState } from 'react';

function CreateCarForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const carData = {
      brand: formData.get('brand') as string,
      model: formData.get('model') as string,
      year: parseInt(formData.get('year') as string),
      pricePerDay: parseFloat(formData.get('pricePerDay') as string),
      currency: formData.get('currency') as string,
      available: formData.get('available') === 'true',
    };

    const result = await createCar(carData);

    if (result.success) {
      alert('Car created successfully!');
      console.log('Created car:', result.data);
    } else {
      alert(`Error: ${result.error}`);
    }

    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="brand" placeholder="Brand" required />
      <input name="model" placeholder="Model" required />
      <input name="year" type="number" placeholder="Year" required />
      <input name="pricePerDay" type="number" step="0.01" placeholder="Price per day" required />
      <input name="currency" placeholder="Currency" defaultValue="AED" />
      <select name="available">
        <option value="true">Available</option>
        <option value="false">Not Available</option>
      </select>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating...' : 'Create Car'}
      </button>
    </form>
  );
}
```

### 3. Server-Side Rendering (SSR)

For Next.js server components:

```typescript
import { getAllCars } from '@/data/cars/cars.actions';

export default async function CarsPage() {
  const result = await getAllCars();

  if (!result.success) {
    return <div>Error: {result.error}</div>;
  }

  const cars = result.data;

  return (
    <div>
      <h1>Available Cars</h1>
      <div className="grid grid-cols-3 gap-4">
        {cars.map((car) => (
          <div key={car.id} className="border p-4 rounded">
            <h2>
              {car.brand} {car.model}
            </h2>
            <p>Year: {car.year}</p>
            <p>
              Price: {car.currency} {car.pricePerDay}/day
            </p>
            <p>Status: {car.available ? 'Available' : 'Not Available'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### 4. Validation with Zod

```typescript
import { CarDetailsSchema, validateCarDetails } from '@/data/cars/car.schema';

// Validate car data before submission
function validateCar(data: unknown) {
  const result = validateCarDetails(data);

  if (!result.success) {
    console.error('Validation errors:', result.error.errors);
    return false;
  }

  console.log('Valid car data:', result.data);
  return true;
}

// Example usage
const carData = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2024,
  pricePerDay: 150,
  currency: 'AED',
  available: true,
};

if (validateCar(carData)) {
  // Proceed with API call
}
```

### 5. Update Car

```typescript
import { updateCar } from '@/data/cars/cars.actions';
import { carsService } from '@/lib/api/services/cars.service';

// Client-side
async function updateCarClient(carId: number, updates: Partial<CarDetailsDto>) {
  try {
    const car = await carsService.getCarById(carId);
    const updatedCar = await carsService.updateCar(carId, { ...car, ...updates });
    console.log('Updated car:', updatedCar);
  } catch (error) {
    console.error('Failed to update car:', error);
  }
}

// Server action
async function updateCarServer(carId: number, updates: Partial<CarDetailsDto>) {
  const result = await updateCar(carId, updates);

  if (result.success) {
    console.log('Car updated:', result.data);
  } else {
    console.error('Update failed:', result.error);
  }
}
```

### 6. Delete Car

```typescript
import { deleteCar } from '@/data/cars/cars.actions';
import { carsService } from '@/lib/api/services/cars.service';

// Client-side
async function deleteCarClient(carId: number) {
  try {
    await carsService.deleteCar(carId);
    console.log('Car deleted successfully');
  } catch (error) {
    console.error('Failed to delete car:', error);
  }
}

// Server action
async function deleteCarServer(carId: number) {
  const result = await deleteCar(carId);

  if (result.success) {
    console.log(result.message);
  } else {
    console.error('Delete failed:', result.error);
  }
}
```

## API Endpoints

| Method | Endpoint         | Description     | Auth Required |
| ------ | ---------------- | --------------- | ------------- |
| GET    | `/api/cars`      | List all cars   | No            |
| GET    | `/api/cars/{id}` | Get car details | No            |
| POST   | `/api/cars`      | Create car      | Yes           |
| PUT    | `/api/cars/{id}` | Update car      | Yes           |
| DELETE | `/api/cars/{id}` | Delete car      | Yes           |

## Data Models

### CarDetailsDto (Request)

```typescript
{
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  currency: string;
  available: boolean;
}
```

### CarDetailsResponseDto (Response)

```typescript
{
  id: number;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  currency: string;
  available: boolean;
}
```

## Best Practices

1. **Use server actions for mutations** - Create, update, and delete operations
2. **Use client service for reads** - Fetching data in client components
3. **Use SSR for initial data** - Server components for better SEO and performance
4. **Always validate data** - Use Zod schemas before API calls
5. **Handle errors gracefully** - Check `success` field in responses
6. **Type safety** - Use TypeScript types from `lib/api/types.ts`

## Error Handling

All server actions return a consistent response format:

```typescript
{
  success: boolean;
  data?: T;        // Present on success
  error?: string;  // Present on failure
  message?: string;
}
```

Always check the `success` field before accessing `data`:

```typescript
const result = await createCar(carData);

if (result.success) {
  // result.data is available
  console.log(result.data);
} else {
  // result.error is available
  console.error(result.error);
}
```

## Testing

```typescript
import { validateCarDetails } from '@/data/cars/car.schema';

describe('Car Validation', () => {
  it('should validate correct car data', () => {
    const validCar = {
      brand: 'Toyota',
      model: 'Camry',
      year: 2024,
      pricePerDay: 150,
      currency: 'AED',
      available: true,
    };

    const result = validateCarDetails(validCar);
    expect(result.success).toBe(true);
  });

  it('should reject invalid year', () => {
    const invalidCar = {
      brand: 'Toyota',
      model: 'Camry',
      year: 1800, // Too old
      pricePerDay: 150,
      currency: 'AED',
      available: true,
    };

    const result = validateCarDetails(invalidCar);
    expect(result.success).toBe(false);
  });
});
```
