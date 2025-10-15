# Car Images API Integration Guide

This guide covers all car image-related operations for the YayaGo backend API.

## Files Overview

- **`car-images.schema.ts`** - Zod validation schemas for car images
- **`car-images.actions.ts`** - Server actions for image operations
- **`lib/api/services/car-images.service.ts`** - Client-side service for images

## Usage Examples

### 1. Display Car Images (Client-Side)

```typescript
'use client';

import { carImagesService } from '@/lib/api/services/car-images.service';
import { useEffect, useState } from 'react';
import Image from 'next/image';

function CarImageGallery({ carId }: { carId: number }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const data = await carImagesService.getCarImages(carId);
        setImages(data);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [carId]);

  if (loading) return <div>Loading images...</div>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image.id} className="relative">
          <Image
            src={image.imageUrl}
            alt={image.imageName}
            width={300}
            height={200}
            className="rounded-lg"
          />
          {image.isPrimary && (
            <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs">
              Primary
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
```

### 2. Display Primary Image

```typescript
'use client';

import { carImagesService } from '@/lib/api/services/car-images.service';
import { useEffect, useState } from 'react';
import Image from 'next/image';

function PrimaryCarImage({ carId }: { carId: number }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function fetchPrimaryImage() {
      try {
        const data = await carImagesService.getPrimaryImage(carId);
        setImage(data);
      } catch (error) {
        console.error('Failed to fetch primary image:', error);
      }
    }

    fetchPrimaryImage();
  }, [carId]);

  if (!image) return <div>No primary image</div>;

  return (
    <Image
      src={image.imageUrl}
      alt={image.imageName}
      width={600}
      height={400}
      className="rounded-lg"
    />
  );
}
```

### 3. Upload Car Image (Client-Side)

```typescript
'use client';

import { carImagesService } from '@/lib/api/services/car-images.service';
import { isValidImageFile } from '@/data/cars/car-images.schema';
import { useState } from 'react';

function ImageUploadForm({ carId }: { carId: number }) {
  const [uploading, setUploading] = useState(false);
  const [isPrimary, setIsPrimary] = useState(false);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file
    const validation = isValidImageFile(file);
    if (!validation.valid) {
      alert(validation.error);
      return;
    }

    setUploading(true);

    try {
      const result = await carImagesService.uploadImage(carId, file, isPrimary);
      alert('Image uploaded successfully!');
      console.log('Uploaded image:', result);

      // Refresh images list
      window.location.reload();
    } catch (error) {
      alert('Failed to upload image');
      console.error(error);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="image-upload" className="block text-sm font-medium">
          Upload Car Image
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
          onChange={handleFileChange}
          disabled={uploading}
          className="mt-1"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="is-primary"
          checked={isPrimary}
          onChange={(e) => setIsPrimary(e.target.checked)}
          disabled={uploading}
        />
        <label htmlFor="is-primary" className="text-sm">
          Set as primary image
        </label>
      </div>

      {uploading && <p className="text-sm text-gray-600">Uploading...</p>}
    </div>
  );
}
```

### 4. Upload Image (Server Action)

```typescript
'use client';

import { uploadCarImage } from '@/data/cars/car-images.actions';
import { useState } from 'react';

function ServerImageUpload({ carId }: { carId: number }) {
  const [uploading, setUploading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUploading(true);

    const formData = new FormData(e.currentTarget);
    const isPrimary = formData.get('isPrimary') === 'true';

    const result = await uploadCarImage(carId, formData, isPrimary);

    if (result.success) {
      alert('Image uploaded successfully!');
      console.log('Uploaded:', result.data);
      e.currentTarget.reset();
    } else {
      alert(`Error: ${result.error}`);
    }

    setUploading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="file" className="block text-sm font-medium">
          Choose Image
        </label>
        <input
          id="file"
          name="file"
          type="file"
          accept="image/*"
          required
          disabled={uploading}
          className="mt-1"
        />
        <p className="text-xs text-gray-500 mt-1">
          Max size: 10MB. Formats: JPEG, PNG, WebP, GIF
        </p>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="isPrimary"
          value="true"
          disabled={uploading}
        />
        <label className="text-sm">Set as primary image</label>
      </div>

      <button
        type="submit"
        disabled={uploading}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
      >
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>
    </form>
  );
}
```

### 5. Set Image as Primary

```typescript
'use client';

import { carImagesService } from '@/lib/api/services/car-images.service';
import { setPrimaryImage } from '@/data/cars/car-images.actions';

// Client-side
async function setPrimaryClient(imageId: number) {
  try {
    const result = await carImagesService.setPrimaryImage(imageId);
    console.log('Primary image set:', result);
    alert('Primary image updated!');
  } catch (error) {
    console.error('Failed to set primary:', error);
    alert('Failed to update primary image');
  }
}

// Server action
async function setPrimaryServer(imageId: number) {
  const result = await setPrimaryImage(imageId);

  if (result.success) {
    console.log('Primary image set:', result.data);
    alert('Primary image updated!');
  } else {
    alert(`Error: ${result.error}`);
  }
}

// Component example
function ImageCard({ image }: { image: ImageResponseDto }) {
  const [loading, setLoading] = useState(false);

  async function handleSetPrimary() {
    setLoading(true);
    await setPrimaryClient(image.id);
    setLoading(false);
    // Refresh the images list
    window.location.reload();
  }

  return (
    <div className="relative group">
      <img src={image.imageUrl} alt={image.imageName} className="rounded" />

      {!image.isPrimary && (
        <button
          onClick={handleSetPrimary}
          disabled={loading}
          className="absolute bottom-2 right-2 bg-white px-3 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {loading ? 'Setting...' : 'Set as Primary'}
        </button>
      )}

      {image.isPrimary && (
        <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs">
          Primary
        </span>
      )}
    </div>
  );
}
```

### 6. Delete Image

```typescript
'use client';

import { carImagesService } from '@/lib/api/services/car-images.service';
import { deleteCarImage } from '@/data/cars/car-images.actions';

// Client-side
async function deleteImageClient(imageId: number) {
  if (!confirm('Are you sure you want to delete this image?')) {
    return;
  }

  try {
    await carImagesService.deleteImage(imageId);
    alert('Image deleted successfully!');
    window.location.reload();
  } catch (error) {
    console.error('Failed to delete image:', error);
    alert('Failed to delete image');
  }
}

// Server action
async function deleteImageServer(imageId: number) {
  if (!confirm('Are you sure you want to delete this image?')) {
    return;
  }

  const result = await deleteCarImage(imageId);

  if (result.success) {
    alert(result.message);
    window.location.reload();
  } else {
    alert(`Error: ${result.error}`);
  }
}

// Component with delete button
function ImageWithDelete({ image }: { image: ImageResponseDto }) {
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    setDeleting(true);
    await deleteImageClient(image.id);
    setDeleting(false);
  }

  return (
    <div className="relative group">
      <img src={image.imageUrl} alt={image.imageName} />
      <button
        onClick={handleDelete}
        disabled={deleting}
        className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {deleting ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  );
}
```

### 7. Delete All Car Images

```typescript
'use client';

import { deleteAllCarImages } from '@/data/cars/car-images.actions';

async function deleteAllImages(carId: number) {
  if (!confirm('Are you sure you want to delete ALL images for this car?')) {
    return;
  }

  const result = await deleteAllCarImages(carId);

  if (result.success) {
    alert(result.message);
    window.location.reload();
  } else {
    alert(`Error: ${result.error}`);
  }
}

// Component
function DeleteAllButton({ carId }: { carId: number }) {
  const [deleting, setDeleting] = useState(false);

  async function handleDeleteAll() {
    setDeleting(true);
    await deleteAllImages(carId);
    setDeleting(false);
  }

  return (
    <button
      onClick={handleDeleteAll}
      disabled={deleting}
      className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-400"
    >
      {deleting ? 'Deleting...' : 'Delete All Images'}
    </button>
  );
}
```

### 8. Complete Image Management Component

```typescript
'use client';

import { useState, useEffect } from 'react';
import { carImagesService } from '@/lib/api/services/car-images.service';
import { uploadCarImage, deleteCarImage, setPrimaryImage } from '@/data/cars/car-images.actions';
import Image from 'next/image';

function CarImageManager({ carId }: { carId: number }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    loadImages();
  }, [carId]);

  async function loadImages() {
    setLoading(true);
    try {
      const data = await carImagesService.getCarImages(carId);
      setImages(data);
    } catch (error) {
      console.error('Failed to load images:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUploading(true);

    const formData = new FormData(e.currentTarget);
    const isPrimary = formData.get('isPrimary') === 'true';

    const result = await uploadCarImage(carId, formData, isPrimary);

    if (result.success) {
      alert('Image uploaded!');
      await loadImages();
      e.currentTarget.reset();
    } else {
      alert(`Error: ${result.error}`);
    }

    setUploading(false);
  }

  async function handleSetPrimary(imageId: number) {
    const result = await setPrimaryImage(imageId);
    if (result.success) {
      await loadImages();
    } else {
      alert(`Error: ${result.error}`);
    }
  }

  async function handleDelete(imageId: number) {
    if (!confirm('Delete this image?')) return;

    const result = await deleteCarImage(imageId);
    if (result.success) {
      await loadImages();
    } else {
      alert(`Error: ${result.error}`);
    }
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-8">
      {/* Upload Form */}
      <form onSubmit={handleUpload} className="border p-4 rounded">
        <h3 className="font-bold mb-4">Upload New Image</h3>
        <input
          type="file"
          name="file"
          accept="image/*"
          required
          disabled={uploading}
          className="mb-2"
        />
        <div className="flex items-center gap-2 mb-4">
          <input type="checkbox" name="isPrimary" value="true" disabled={uploading} />
          <label>Set as primary</label>
        </div>
        <button
          type="submit"
          disabled={uploading}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </form>

      {/* Images Grid */}
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative group border rounded p-2">
            <Image
              src={image.imageUrl}
              alt={image.imageName}
              width={300}
              height={200}
              className="rounded"
            />

            {image.isPrimary && (
              <span className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 rounded text-xs">
                Primary
              </span>
            )}

            <div className="mt-2 space-x-2">
              {!image.isPrimary && (
                <button
                  onClick={() => handleSetPrimary(image.id)}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Set Primary
                </button>
              )}
              <button
                onClick={() => handleDelete(image.id)}
                className="text-sm text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-1">
              {(image.imageSize / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### 9. Server-Side Rendering (SSR)

```typescript
import { getCarImages, getPrimaryImage } from '@/data/cars/car-images.actions';
import Image from 'next/image';

export default async function CarDetailPage({ params }: { params: { id: string } }) {
  const carId = parseInt(params.id);

  // Fetch primary image
  const primaryResult = await getPrimaryImage(carId);

  // Fetch all images
  const imagesResult = await getCarImages(carId);

  return (
    <div>
      <h1>Car Details</h1>

      {/* Primary Image */}
      {primaryResult.success && (
        <div className="mb-8">
          <h2>Primary Image</h2>
          <Image
            src={primaryResult.data.imageUrl}
            alt={primaryResult.data.imageName}
            width={800}
            height={600}
          />
        </div>
      )}

      {/* Gallery */}
      {imagesResult.success && (
        <div>
          <h2>All Images ({imagesResult.data.length})</h2>
          <div className="grid grid-cols-4 gap-4">
            {imagesResult.data.map((image) => (
              <Image
                key={image.id}
                src={image.imageUrl}
                alt={image.imageName}
                width={200}
                height={150}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
```

## API Endpoints

| Method | Endpoint                             | Description           | Auth Required |
| ------ | ------------------------------------ | --------------------- | ------------- |
| GET    | `/api/cars/{carId}/images`           | Get all images        | No            |
| GET    | `/api/cars/{carId}/images/primary`   | Get primary image     | No            |
| POST   | `/api/cars/{carId}/images`           | Upload image          | Yes           |
| PUT    | `/api/cars/images/{imageId}/primary` | Set as primary        | Yes           |
| DELETE | `/api/cars/images/{imageId}`         | Delete specific image | Yes           |
| DELETE | `/api/cars/{carId}/images`           | Delete all images     | Yes           |

## Data Models

### ImageResponseDto

```typescript
{
  id: number;
  carId: number;
  imageUrl: string;
  imageName: string;
  imageSize: number;
  mimeType: string;
  isPrimary: boolean;
  uploadDate: string; // ISO date-time
  createdAt: string; // ISO date-time
}
```

## Validation Rules

- **Allowed formats**: JPEG, JPG, PNG, WebP, GIF
- **Maximum size**: 10MB
- **Required**: File must be provided for upload
- **Primary flag**: Boolean, defaults to false

## Best Practices

1. **Always validate files** before uploading (client and server-side)
2. **Use progressive enhancement** - show placeholder while loading
3. **Handle errors gracefully** - provide user feedback
4. **Optimize images** - consider using Next.js Image component
5. **Set primary image** - ensure at least one primary image per car
6. **Lazy load images** - for better performance with many images
7. **Use server actions** for mutations (upload, delete, set primary)
8. **Use client service** for reads (displaying images)

## Error Handling

All server actions return a consistent format:

```typescript
{
  success: boolean;
  data?: ImageResponseDto;  // Present on success
  error?: string;           // Present on failure
  message?: string;         // For delete operations
}
```

## Testing

```typescript
import { isValidImageFile } from '@/data/cars/car-images.schema';

describe('Image Validation', () => {
  it('should accept valid image', () => {
    const file = new File([''], 'test.jpg', { type: 'image/jpeg' });
    const result = isValidImageFile(file);
    expect(result.valid).toBe(true);
  });

  it('should reject invalid type', () => {
    const file = new File([''], 'test.pdf', { type: 'application/pdf' });
    const result = isValidImageFile(file);
    expect(result.valid).toBe(false);
    expect(result.error).toContain('valid image');
  });

  it('should reject oversized file', () => {
    const file = new File([new ArrayBuffer(11 * 1024 * 1024)], 'large.jpg', {
      type: 'image/jpeg',
    });
    const result = isValidImageFile(file);
    expect(result.valid).toBe(false);
    expect(result.error).toContain('10MB');
  });
});
```
