import SelectWithSearch from '../select-with-search';

const brands = [
  {
    value: 'mercedes-benz',
    label: 'Mercedes-Benz',
  },
  {
    value: 'bmw',
    label: 'BMW',
  },
  {
    value: 'toyota',
    label: 'Toyota',
  },
  {
    value: 'nissan',
    label: 'Nissan',
  },
  {
    value: 'range-rover',
    label: 'Range Rover',
  },
  {
    value: 'porsche',
    label: 'Porsche',
  },
  {
    value: 'tesla',
    label: 'Tesla',
  },
  {
    value: 'chevrolet',
    label: 'Chevrolet',
  },
  {
    value: 'hyundai',
    label: 'Hyundai',
  },
  {
    value: 'ford',
    label: 'Ford',
  },
];

interface BrandSelectProps {
  brand?: string;
  setBrand: (brand: string) => void;
}

export default function BrandSelect({ brand, setBrand }: BrandSelectProps) {
  return (
    <div className='space-y-2'>
      <SelectWithSearch
        options={brands}
        selectPlaceholder='Select a brand'
        searchPlaceholder='Search a brand'
        noFoundMessage='No brands found'
        value={brand}
        setValue={setBrand}
      />
    </div>
  );
}
