import React from 'react'

const SpacingAndSizing = () => {
  return (
    <div>
        <div>
            <h3 className='text-2xl'>Spacing and Sizing</h3>
        <button className='bg-blue-600 text-white p-2 m-1'>Tıkla</button>
        <button className='bg-blue-600 text-white p-x-3'>Tıkla</button>
        <button className='bg-blue-600 text-white ms-4'>Tıkla</button>
        <button className='bg-blue-600 text-white ml-4'>Tıkla</button>
        <button className='bg-blue-600 text-white px-4 p ml-3'>Tıkla</button>  
        </div>
      <div>
        <button className='bg-green-700 mx-4 px-4 py-2 border-gray-800 rounded-md'>Gönder</button>
        <button className='bg-green-500 mx-4 px-4 py-2 border-gray-800 rounded-[10px]'>Gönder</button>
        <button className='bg-green-500 mx-4 px-4 py-2 border-gray-800 rounded-[10px]'>Gönder</button>
        <button className='bg-green-700 mx-4 px-4 py-4 border-gray-800 rounded-[50%]'>Gönder</button>
      </div>
      <div className='my-2'>
        <button className='bg-red-700 w-20 rounded-full py-3 mx-3'>Kaydet</button>
        <button className='bg-red-700 w-1/2 rounded-full py-3 mx-3'>Kaydet</button>
        <button className='bg-red-700 w-[300px] rounded-full py-3 mx-3'>Kaydet</button>
        <button className='bg-red-700 w-1/2 max-w-[500px] rounded-full py-3 mx-3'>Kaydet</button>
      </div>
    </div>
  )
}

export default SpacingAndSizing