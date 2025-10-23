interface CarsBrandPageProps {
  params: Promise<{
    carInfo: string[];
  }>;
}

export default async function CarsBrandPage({ params }: CarsBrandPageProps) {
  const { carInfo } = await params;

  const car = extractCarInfo(carInfo);

  return (
    <div className='mt-20'>
      Cars Brand - {car.brand} {car.model} {car.year} {car.trim}
    </div>
  );
}

function extractCarInfo(carInfo?: string[]) {
  const [brand, model, year, trim] = (carInfo ?? []).map((item) => item.trim()).filter(Boolean) as [
    string?,
    string?,
    string?,
    string?,
  ];

  return {
    brand,
    model,
    year,
    trim,
  };
}
