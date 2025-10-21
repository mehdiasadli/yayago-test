export default function FavoritesTips() {
  return (
    <div className='bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 p-8'>
      <h3 className='text-xl font-bold text-gray-900 mb-4'>💡 Tips for Using Favorites</h3>
      <div className='grid md:grid-cols-2 gap-4'>
        <div className='flex items-start gap-3'>
          <div className='w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0 text-white font-bold text-sm'>
            1
          </div>
          <div>
            <div className='font-semibold text-gray-900 mb-1'>Save for Comparison</div>
            <div className='text-sm text-gray-700'>
              Save multiple cars to compare prices, features, and ratings side by side
            </div>
          </div>
        </div>

        <div className='flex items-start gap-3'>
          <div className='w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0 text-white font-bold text-sm'>
            2
          </div>
          <div>
            <div className='font-semibold text-gray-900 mb-1'>Act Fast on Featured Cars</div>
            <div className='text-sm text-gray-700'>Featured cars are highly sought after - contact owners quickly</div>
          </div>
        </div>

        <div className='flex items-start gap-3'>
          <div className='w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0 text-white font-bold text-sm'>
            3
          </div>
          <div>
            <div className='font-semibold text-gray-900 mb-1'>Check Availability</div>
            <div className='text-sm text-gray-700'>
              Availability changes frequently - verify before contacting owners
            </div>
          </div>
        </div>

        <div className='flex items-start gap-3'>
          <div className='w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0 text-white font-bold text-sm'>
            4
          </div>
          <div>
            <div className='font-semibold text-gray-900 mb-1'>Read Recent Reviews</div>
            <div className='text-sm text-gray-700'>
              Check the latest reviews to ensure consistent quality and service
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
