import SelectWithSearch from '../select-with-search';

const locations = [
  {
    value: 'downtown-dubai',
    label: 'Downtown Dubai, Dubai',
  },
  {
    value: 'business-bay',
    label: 'Business Bay, Dubai',
  },
  {
    value: 'jlt',
    label: 'JLT, Dubai',
  },
  {
    value: 'dubai-marina',
    label: 'Dubai Marina, Dubai',
  },
  {
    value: 'dubai-mall',
    label: 'Dubai Mall, Dubai',
  },
  {
    value: 'abu-dhabi',
    label: 'Abu Dhabi, UAE',
  },
  {
    value: 'sharjah',
    label: 'Sharjah, UAE',
  },
  {
    value: 'abu-dhabi-airport',
    label: 'Abu Dhabi Airport, UAE',
  },
  {
    value: 'dubai-international-airport',
    label: 'Dubai International Airport, Dubai',
  },
];

interface LocationSelectProps {
  location?: string;
  setLocation: (location: string) => void;
}

export default function LocationSelect({ location, setLocation }: LocationSelectProps) {
  return (
    <div className='space-y-2'>
      <SelectWithSearch
        options={locations}
        selectPlaceholder='Select a location'
        searchPlaceholder='Search a location'
        noFoundMessage='No locations found'
        value={location}
        setValue={setLocation}
      />
    </div>
  );
}
