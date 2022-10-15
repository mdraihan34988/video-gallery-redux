import React from 'react'

function Page({pageNumber,page,handlePagination}) {
  return (
    <div className={`${(pageNumber === page) ? ' bg-blue-600 text-white ' : ' g-blue-100 text-blue-600 '} px-4 py-1 rounded-full cursor-pointer`} onClick={() => handlePagination(page)}>
        {page}
    </div>
  )
}

export default Page