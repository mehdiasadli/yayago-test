export default function QuickStats() {
  return (
    <div className='hidden xl:flex gap-4 justify-end -mt-2'>
      <div className='text-center px-6 py-3 bg-white/5 border border-white/10'>
        <div className='text-2xl font-bold text-white mb-1'>12.4K AED</div>
        <div className='text-xs text-gray-400'>Total Earned</div>
        <div className='text-xs text-green-400 font-semibold mt-1'>+18% ↑</div>
      </div>
      <div className='text-center px-6 py-3 bg-white/5 border border-white/10'>
        <div className='text-2xl font-bold text-white mb-1'>2.4K AED</div>
        <div className='text-xs text-gray-400'>This Month</div>
        <div className='text-xs text-primary font-semibold mt-1'>12 rentals</div>
      </div>
    </div>
  );
}
