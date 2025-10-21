interface NotificationsFiltersProps {
  allCount: number;
  unreadCount: number;
  messagesCount: number;
  bookingsCount: number;
  reviewsCount: number;
  paymentsCount: number;
}

export default function NotificationsFilters({
  allCount,
  unreadCount,
  messagesCount,
  bookingsCount,
  reviewsCount,
  paymentsCount,
}: NotificationsFiltersProps) {
  return (
    <div className='bg-white border-2 border-gray-200 overflow-hidden'>
      <div className='flex items-center gap-2 p-2 overflow-x-auto'>
        <button className='px-6 py-3 bg-primary text-primary-foreground font-semibold whitespace-nowrap hover:bg-primary/90 transition-colors'>
          All ({allCount})
        </button>
        <button className='px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap'>
          Unread ({unreadCount})
        </button>
        <button className='px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap'>
          Messages ({messagesCount})
        </button>
        <button className='px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap'>
          Bookings ({bookingsCount})
        </button>
        <button className='px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap'>
          Reviews ({reviewsCount})
        </button>
        <button className='px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100 transition-colors whitespace-nowrap'>
          Payments ({paymentsCount})
        </button>
      </div>
    </div>
  );
}
