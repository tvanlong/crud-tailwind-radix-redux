function Skeleton({ col }: { col: number }) {
  return (
    <tr className='w-full animate-pulse'>
      {Array(col)
        .fill(null)
        .map((_, index) => (
          <td key={index} className='h-80 bg-gray-300'></td>
        ))}
    </tr>
  )
}

export default Skeleton
